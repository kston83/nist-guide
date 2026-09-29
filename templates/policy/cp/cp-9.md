---
control: cp-9
title: 'System backup'
status: draft
stage: core
typical:
  cp-09_odp.01: 'all servers and cloud storage that hold user data'
  cp-09_odp.02: 'daily incremental and weekly full, or more often where the recovery point objective requires it'
  cp-09_odp.03: 'daily incremental and weekly full, or more often where the recovery point objective requires it'
  cp-09_odp.04: 'on each change'
---

:::guidance
Set backup frequencies from the recovery point objectives in the contingency plan: how much data the business can afford to lose. Keep at least one copy that ransomware on the production network cannot reach or change, such as an immutable or offline copy.
:::

- The {{org:system-owner}} shall ensure backups of user-level information in {{param:cp-09_odp.01}} are made {{param:cp-09_odp.02}}. (CP-9a)
- The {{org:system-owner}} shall ensure backups of system-level information are made {{param:cp-09_odp.03}}. (CP-9b)
- The {{org:system-owner}} shall ensure backups of system documentation, including security- and privacy-related documentation, are made {{param:cp-09_odp.04}}. (CP-9c)
- The {{org:system-owner}} shall protect the confidentiality, integrity and availability of backup information. (CP-9d)
