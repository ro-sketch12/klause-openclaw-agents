import test from "node:test";
import assert from "node:assert/strict";
import { assignRole, createTask, evaluateGate, runSyntheticPipeline } from "../src/agent-control.mjs";

test("assigns specialized roles by task type", () => {
  assert.equal(assignRole("trend"), "research");
  assert.equal(assignRole("listing"), "listing");
  assert.equal(assignRole("design"), "design");
  assert.equal(assignRole("unknown"), "orchestrator");
});

test("blocks external actions until checks and human approval pass", () => {
  const task = createTask({
    title: "Demo Listing vorbereiten",
    type: "listing",
    requestedExternalAction: true,
  });

  const gate = evaluateGate({
    task,
    checks: {
      inputClear: true,
      qualityScore: 92,
      ipRiskChecked: true,
      claimRisk: "low",
      configReady: true,
    },
    humanApproval: false,
  });

  assert.equal(gate.status, "blocked");
  assert.equal(gate.externalActionAllowed, false);
  assert.ok(gate.missing.includes("human_approval"));
});

test("allows external action only after safe checks and approval", () => {
  const task = createTask({
    title: "Demo Listing freigeben",
    type: "review",
    requestedExternalAction: true,
  });

  const gate = evaluateGate({
    task,
    checks: {
      inputClear: true,
      qualityScore: 88,
      ipRiskChecked: true,
      claimRisk: "low",
      configReady: true,
    },
    humanApproval: true,
  });

  assert.equal(gate.status, "approved");
  assert.equal(gate.externalActionAllowed, true);
});

test("synthetic pipeline keeps unsafe run blocked", () => {
  const trace = runSyntheticPipeline({
    title: "Riskante Demo",
    type: "listing",
    requestedExternalAction: true,
    checks: {
      inputClear: true,
      qualityScore: 72,
      ipRiskChecked: false,
      claimRisk: "high",
      configReady: false,
    },
  });

  assert.equal(trace.at(-1).status, "blocked");
  assert.equal(trace[0].role, "listing");
});

