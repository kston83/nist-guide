---
control: au-6
title: 'Audit record review, analysis and reporting'
status: draft
stage: core
typical:
  au-06_odp.01: 'continuously through automated alerting, with a documented manual review at least weekly'
  au-06_odp.02: 'the activity listed in the log review procedure, such as repeated failed logons, privilege escalation and access outside normal patterns'
  au-06_odp.03: the system owner and the incident response team
---

:::guidance
Most findings under AU-6 are about evidence, not effort: the review happened but left no record. Keep a dated record of each review with what was looked at, what was found and who it was reported to.
:::

- The {{org:security-operations}} shall review and analyze system audit records {{param:au-06_odp.01}} for indications of {{param:au-06_odp.02}} and its potential impact. (AU-6a)
- The {{org:security-operations}} shall report findings to {{param:au-06_odp.03}}. (AU-6b)
- The {{org:security-operations}} shall adjust the level of audit record review, analysis and reporting when law enforcement information, intelligence information or other credible sources indicate a change in risk. (AU-6c)
