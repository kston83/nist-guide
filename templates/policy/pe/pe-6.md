---
control: pe-6
title: 'Monitoring physical access'
status: draft
stage: operate
typical:
  pe-06_odp.01: 'at least monthly'
  pe-06_odp.02: 'a physical security incident or alarm, a lost or stolen badge or key, reported tailgating, access attempts outside normal working hours, and a request from the incident response team'
---

:::guidance
NIST's PE-6 discussion says monitoring includes publicly accessible areas, and gives guards, video surveillance and sensors as examples. It lists suspicious physical access activity: accesses outside normal work hours, repeated accesses to areas not normally accessed, accesses for unusual lengths of time, and out-of-sequence accesses. Where the physical access control system logs electronically, its logs can feed the security operations team's monitoring (AU-2, AU-6). The investigation of a physical security incident is handled under the [incident response plan](/templates/plans/incident-response-plan/). For a system hosted by a provider, its monitoring of its facility is inherited and recorded in the system security plan.
:::

- The {{org:facilities-manager}} shall monitor physical access to the facility where the system resides, including publicly accessible areas, to detect and respond to physical security incidents. (PE-6a)
- The {{org:facilities-manager}} shall review physical access logs {{param:pe-06_odp.01}} and upon occurrence of {{param:pe-06_odp.02}}, looking for accesses outside normal working hours, repeated accesses to areas not normally accessed, accesses of unusual length and out-of-sequence accesses. (PE-6b)
- Each review shall be recorded with its date, the reviewer, the period covered and the anomalies found. (PE-6b)
- The {{org:facilities-manager}} shall coordinate the results of reviews and investigations with the {{org:incident-response-team}}, and report suspected physical security incidents under the incident response plan (IR-6). (PE-6c)
