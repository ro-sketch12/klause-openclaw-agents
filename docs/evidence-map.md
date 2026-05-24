# Evidence Map · Klause / OpenClaw

Diese Übersicht fasst zusammen, welche Aussagen öffentlich gezeigt werden und welche Teile bewusst privat bleiben.

| Öffentliche Aussage | Belegart | Öffentliche Darstellung |
| --- | --- | --- |
| Mehrere Agentenrollen existierten | Blueprint und Workflow-Dateien | Rollenmodell |
| Orchestrator liest Queues und priorisiert Blocker | Orchestrator-Workflow und Script | Architektur |
| Listing-/Design-/Content-Lanes waren getrennt | Agenten-Blueprints und Workflows | Workflow |
| Risk/IP-Guard blockiert riskante Items | IP Compliance Guard | Review-Gate |
| Feedback Loop nutzt Ergebnissignale | Winner-Loop-Workflow | Feedback-Schleife |
| Externe Aktionen hängen an Config/Freigabe | Reports und Workflows mit Blocker-Status | Stop/Go-Gate |
| Kontrolllogik ist reduziert prüfbar | Öffentlicher Nachbau ohne Plattform-API, Credentials oder Runtime-Daten | `src/agent-control.mjs` + Tests |
| Repo ist schnell lesbar | kuratierte Schnellübersicht | `docs/quick-review.md` |
