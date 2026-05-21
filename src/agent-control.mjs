export const roles = Object.freeze({
  orchestrator: ["read_status", "prioritize_blockers", "assign_next_action"],
  research: ["create_opportunity", "score_signal", "mark_risk"],
  listing: ["draft_title", "draft_description", "prepare_asset_brief"],
  design: ["prepare_preview", "score_visual_quality"],
  guard: ["check_claims", "check_ip_risk", "block_external_action"],
  review: ["approve", "request_revision", "stop"],
});

export function createTask(input) {
  return {
    id: input.id || "demo-task",
    title: input.title,
    requestedExternalAction: Boolean(input.requestedExternalAction),
    riskLevel: input.riskLevel || "medium",
    status: "queued",
    assignedRole: assignRole(input.type || "research"),
  };
}

export function assignRole(type) {
  const mapping = {
    trend: "research",
    listing: "listing",
    design: "design",
    compliance: "guard",
    review: "review",
  };
  return mapping[type] || "orchestrator";
}

export function evaluateGate({ task, checks, humanApproval = false }) {
  const missing = [];

  if (!checks?.inputClear) missing.push("input_clear");
  if (!checks?.qualityScore || checks.qualityScore < 80) missing.push("quality_score");
  if (!checks?.ipRiskChecked) missing.push("ip_risk_checked");
  if (checks?.claimRisk === "high") missing.push("claim_risk");
  if (task.requestedExternalAction && !checks?.configReady) missing.push("config_ready");
  if (task.requestedExternalAction && !humanApproval) missing.push("human_approval");

  if (missing.length > 0) {
    return {
      status: "blocked",
      missing,
      externalActionAllowed: false,
      nextAction: nextActionFor(missing),
    };
  }

  return {
    status: "approved",
    missing: [],
    externalActionAllowed: task.requestedExternalAction ? true : false,
    nextAction: task.requestedExternalAction ? "prepare_external_step" : "store_reviewed_output",
  };
}

export function runSyntheticPipeline(input) {
  const task = createTask(input);
  const draft = {
    status: "needs_review",
    role: task.assignedRole,
  };
  const gate = evaluateGate({
    task,
    checks: input.checks || {},
    humanApproval: Boolean(input.humanApproval),
  });

  return [
    { step: "task_created", status: task.status, role: task.assignedRole },
    { step: "draft_prepared", status: draft.status, role: draft.role },
    { step: "gate_evaluated", status: gate.status, missing: gate.missing },
    {
      step: "external_action",
      status: gate.externalActionAllowed ? "allowed" : "blocked",
      reason: gate.nextAction,
    },
  ];
}

function nextActionFor(missing) {
  if (missing.includes("human_approval")) return "wait_for_human_go";
  if (missing.includes("ip_risk_checked")) return "run_guard_review";
  if (missing.includes("quality_score")) return "revise_output";
  if (missing.includes("config_ready")) return "complete_safe_config";
  return "clarify_input";
}

