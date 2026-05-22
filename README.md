# Klause/OpenClaw · Kontrollierte Agentenabläufe

Klause/OpenClaw zeigt ein kontrolliertes Multi-Agenten-Setup für wiederkehrende Produkt-, Recherche-, Content- und Veröffentlichungsabläufe.

Der wichtigste Punkt ist nicht “Agenten machen alles alleine”, sondern: Rollen, Rechte, Queues, Blocker, Reviews und Freigaben müssen zuerst sauber stehen. Sonst wird externe Automatisierung schnell riskant.

## 60-Sekunden-Überblick

| Frage | Antwort |
| --- | --- |
| Problem | Agenten können externe Aktionen vorbereiten, aber ohne Kontrolllogik entstehen Risiko, schlechte Ergebnisse und unklare Verantwortung. |
| Lösung | Rollen trennen, Arbeit über Queues sichtbar machen, Blocker markieren und externe Schritte erst nach Freigabe ermöglichen. |
| Rollen | Orchestrator, Research, Listing/Content, Digital Listing, Winner Feedback, Content, IP-/Compliance-Guard. |
| Roberts Beitrag | Agentenstruktur, Rollen-/Rechte-Denken, Queue-/Blocker-Logik und Review-Gates aufgebaut und bewertet. |
| Öffentliche Grenze | Keine Account-, Shop-, Payment-, API-, Credential-, Runtime- oder Memory-Daten. |

## Architektur

Siehe [docs/architecture.md](./docs/architecture.md).

## Workflow

Siehe [docs/workflow.md](./docs/workflow.md).

## Schneller Einstieg

Siehe [docs/quick-review.md](./docs/quick-review.md) für den schnellen Überblick.

## Ausführbarer Code-Auszug

Dieses Repo enthält keinen vollständigen Agenten- oder Plattformcode. Der kleine Code-Auszug zeigt aber die öffentlich sichere Kontrolllogik eines Agenten-Setups:

- `src/agent-control.mjs`: Rollenwahl, synthetische Pipeline, Review-Checks und Stop/Go-Gate
- `test/agent-control.test.mjs`: Tests dafür, dass externe Aktionen ohne Review und menschliche Freigabe blockiert bleiben

Lokal prüfen:

```bash
npm test
python3 scripts/check_public_content.py
```

Der Code nutzt nur synthetische Tasks. Nicht enthalten sind Accountdaten, Plattform-APIs, Credentials, Runtime-Logs, Agent-Memory oder echte Listing-/Shop-Daten.

## Was öffentlich prüfbar ist

- Rollen- und Kontrollmodell
- Queue-Logik
- Stop/Go-Gates
- Review-/Blocker-Prinzip
- synthetische Beispielspur
- reduzierter, ausführbarer Code-Auszug für Rollen, Reviews und Freigaben

## Was bewusst nicht öffentlich ist

- externe Accountdetails
- API-Endpunkte, Tokens, OAuth-/Credential-Details
- Rohprompts und Agent-Memory
- Laufzeitlogs und echte Queue-Daten
- echte Listings, Shop-, Zahlungs- oder Analytics-Daten

## Tech/Tools

Node.js, lokale Agenten-Workflows, JSON-Queues, Status-/Health-Reports, Design-Preview-Logik, IP-/Risk-Guardrails, Smoke-/Readiness-Checks.
