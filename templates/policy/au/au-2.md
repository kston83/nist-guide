---
control: au-2
title: Event logging
status: draft
stage: core
typical:
  au-02_odp.01: 'logons and logoffs, account and privilege changes, use of privileged functions, access to security-relevant files, configuration changes, and security tool events'
  au-2_prm_2: 'the event types listed in the audit logging standard, each logged whenever it occurs'
  au-02_odp.04: annually and after a significant incident or system change
---

:::guidance
AU-2 asks for two lists: every event type the system can log, and the subset you actually log, with a reason the subset is enough to investigate an incident. Keep both in the [audit logging standard](/templates/standards/audit-logging-standard/) so every system starts from the same list: section 3 holds the organization-wide list and Part B each system's own. Assessors ask for the rationale (AU-2d) more often than any other item.
:::

- The {{org:system-owner}} shall identify {{param:au-02_odp.01}} as the event types the system is capable of logging in support of the audit function. (AU-2a)
- The {{org:ciso}} shall coordinate the event logging function with the other organizational entities that need audit-related information, to inform which events are logged. (AU-2b)
- The {{org:system-owner}} shall specify {{param:au-2_prm_2}} for logging within the system. (AU-2c)
- The {{org:system-owner}} shall document why the event types selected for logging are adequate to support after-the-fact investigation of incidents. (AU-2d)
- The {{org:system-owner}} shall review and update the event types selected for logging {{param:au-02_odp.04}}. (AU-2e)
