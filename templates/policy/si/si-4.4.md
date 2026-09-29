---
control: si-4.4
title: 'Inbound and outbound communications traffic'
status: draft
stage: operate
typical:
  si-04.04_odp.01: 'continuously'
  si-04.04_odp.02: 'connections from known malicious sources, unapproved protocols and ports, and scanning or password-guessing patterns'
  si-04.04_odp.03: 'continuously'
  si-04.04_odp.04: 'connections to known malicious destinations, unusual data volumes, unapproved protocols and regular beaconing to external hosts'
---

:::guidance
Outbound monitoring is where data exfiltration and command-and-control traffic show up. Threat intelligence feeds supply the known malicious sources and destinations; a baseline of normal volumes supplies the unusual ones.
:::

- The {{org:security-operations}} shall determine and document criteria for unusual or unauthorized activities or conditions for inbound and outbound communications traffic. (SI-4(4)(a))
- The {{org:security-operations}} shall monitor inbound communications traffic {{param:si-04.04_odp.01}} for {{param:si-04.04_odp.02}}. (SI-4(4)(b))
- The {{org:security-operations}} shall monitor outbound communications traffic {{param:si-04.04_odp.03}} for {{param:si-04.04_odp.04}}. (SI-4(4)(b))
