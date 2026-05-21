# Evidence Map · Klause/OpenClaw

Quelle: siehe `github-public-proof/evidence/klause-openclaw-evidence-map.md` in der Arbeitskopie.

| Öffentliche Aussage | Belegart | Öffentliche Darstellung |
| --- | --- | --- |
| Mehrere Agentenrollen existierten | Blueprint und Workflow-Dateien | Rollenmodell |
| Orchestrator liest Queues und priorisiert Blocker | Orchestrator-Workflow und Script | Architektur |
| Listing-/Design-/Content-Lanes waren getrennt | Agenten-Blueprints und Workflows | Workflow |
| Risk/IP-Guard blockiert riskante Items | IP Compliance Guard | Review-Gate |
| Feedback Loop nutzt Ergebnissignale | Winner-Loop-Workflow | Feedback-Schleife |
| Externe Aktionen hängen an Config/Freigabe | Reports und Workflows mit Blocker-Status | Stop/Go-Gate |
| Kontrolllogik ist reduziert prüfbar | Public-safe Nachbau ohne Plattform-API, Credentials oder Runtime-Daten | `src/agent-control.mjs` + Tests |
| Repo ist schnell reviewbar | kuratierte Review-Führung | `docs/reviewer-guide.md` |
