# Synthetische Beispielspur · Klause/OpenClaw

Diese Spur ist synthetisch. Sie zeigt die Logik, nicht echte Laufzeitdaten.

| Schritt | Status | Entscheidung |
| --- | --- | --- |
| Research findet eine Opportunity | queued | Nachfrage und Risiko prüfen |
| Listing-Agent erstellt Entwurf | needs_review | Titel, Beschreibung und Asset-Brief prüfen |
| Design-Preview bewertet Asset | needs_revision | Qualität reicht noch nicht |
| IP-/Risk-Guard prüft Thema | pass | kein offensichtliches Risiko im Demo-Beispiel |
| Human Review | blocked | externe Aktion noch nicht freigegeben |
| Orchestrator | next_action | Entwurf verbessern, dann erneut prüfen |

Kern: Der externe Schritt bleibt blockiert, obwohl mehrere Agenten vorbereitend gearbeitet haben.

