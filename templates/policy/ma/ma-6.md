---
control: ma-6
title: 'Timely maintenance'
status: draft
stage: operate
typical:
  ma-06_odp.01: 'the components that support essential mission and business functions, as the business impact analysis identifies them, and the security components that protect them'
  ma-06_odp.02: 'the recovery time objective set in the contingency plan from the business impact analysis'
---

:::guidance
MA-6 makes sure a failed component can be fixed in time. NIST's MA-6 discussion has the organization pick the components whose failure raises risk, and names having contracts in place as one way to obtain support. Take the components and time from the [business impact analysis](/templates/reports/business-impact-analysis/) and the [contingency plan](/templates/plans/contingency-plan/), so the maintenance support and the recovery time objective agree (CP-2, CP-10). For cloud services, the provider's service level agreement covers its components; record that in the [external service review](/templates/forms/external-service-review/).
:::

- The {{org:system-owner}} shall obtain maintenance support or spare parts for {{param:ma-06_odp.01}} within {{param:ma-06_odp.02}} of failure. (MA-6)
- The {{org:system-owner}} shall keep maintenance contracts, with response and repair times that meet that time, or spare parts on hand, for each of those components, and record the contracts in the contingency plan's vendor contact list. (MA-6)
- The {{org:system-owner}} shall review the maintenance contracts and spare parts each time the contingency plan is reviewed, and before a contract expires. (MA-6)
