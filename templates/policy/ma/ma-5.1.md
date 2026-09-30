---
control: ma-5.1
title: 'Individuals without appropriate access'
status: draft
stage: operate
typical:
  ma-05.01_odp: 'continuous supervision by an escort who has the required access authorizations, is technically qualified and can end the activity at any time; screens, ports and data on the component kept out of the maintenance person''s view and reach; and review of the audit records of the activity afterward'
---

:::guidance
MA-5(1) is in the High baseline. NIST's discussion of this enhancement says these procedures are meant to deny visual and electronic access to classified or controlled unclassified information on the system, and that they can be documented in the system security plan. Outside government, apply them to maintenance personnel who lack the screening, citizenship or other access approvals the system's information requires, such as export-controlled information. Systems that process classified information add MA-5(2) to MA-5(4), which are in no baseline.
:::

- The {{org:system-owner}} shall implement procedures, documented in the system security plan, for the use of maintenance personnel who lack the security clearances, citizenship or formal access approvals the system's information requires. (MA-5(1)(a))
- Those maintenance personnel shall be escorted and supervised during the performance of maintenance and diagnostic activities on the system by approved organizational personnel who hold the required clearances and access authorizations and are technically qualified. (MA-5(1)(a)(1))
- Before such personnel begin maintenance or diagnostic activities, the {{org:system-owner}} shall ensure all volatile information storage components within the system are sanitized, and all nonvolatile storage media are removed or physically disconnected from the system and secured. (MA-5(1)(a)(2))
- Where a system component cannot be sanitized, removed or disconnected from the system, the {{org:system-owner}} shall develop and implement {{param:ma-05.01_odp}}. (MA-5(1)(b))
