# Schneller Überblick · Klause / OpenClaw

## In 60 Sekunden prüfen

1. README: Rollen, Rechte, Blocker und Freigaben verstehen.
2. `docs/architecture.md`: Kontrollmodell der Agentenrollen ansehen.
3. `src/agent-control.mjs`: reduzierten Code-Kern für Stop/Go-Logik lesen.
4. `test/agent-control.test.mjs`: prüfen, dass externe Aktionen ohne Freigabe blockiert bleiben.
5. `docs/synthetic-trace.md`: Beispielspur ohne echte Account- oder Shopdaten ansehen.

## Was diese Arbeitsprobe zeigen soll

Klause / OpenClaw zeigt, dass Agentenarbeit nicht als Blackbox gedacht wurde, sondern als kontrollierter Ablauf mit Rollen, Review-Gates, Blockern und menschlicher Freigabe.

## Was diese Arbeitsprobe nicht zeigen soll

Das Repo enthält keine Plattform-APIs, Credentials, Agent-Memory, Runtime-Logs, Shopdaten oder extern nutzbare Automationsdetails.
