---
control: si-6
title: 'Security and privacy function verification'
status: draft
stage: operate
typical:
  si-06_odp.01: 'access enforcement, authentication, audit logging, encryption and malicious code protection'
  si-06_odp.02: 'consent recording, de-identification and the scheduled deletion of personally identifiable information'
  si-06_odp.03: 'at system startup and restart, upon command by a user with appropriate privilege, and at least monthly'
  si-06_odp.04: 'system startup and restart'
  si-06_odp.05: 'at least monthly'
  si-06_odp.06: 'the system owner and the security operations team'
  si-06_odp.07: 'isolate the affected component and open an incident'
  si-06_odp.08: 'isolate the affected component and open an incident'
---

:::guidance
Verification can be built-in self-tests, configuration compliance checks that confirm security settings are still in force, or scripted tests that attempt a blocked action and confirm it fails. Shutting a system down on every failed test is rarely acceptable, so most organizations choose an alternative action.
:::

- The {{org:system-owner}} shall verify the correct operation of the following security functions: {{param:si-06_odp.01}}. (SI-6a)
- The {{org:system-owner}} shall verify the correct operation of the following privacy functions: {{param:si-06_odp.02}}. (SI-6a)
- The {{org:system-owner}} shall perform the verification {{param:si-06_odp.03}}. (SI-6b)
- The {{org:system-owner}} shall ensure {{param:si-06_odp.06}} are alerted to failed security and privacy verification tests. (SI-6c)
- When anomalies are discovered, the {{org:system-owner}} shall {{param:si-06_odp.07}}. (SI-6d)
