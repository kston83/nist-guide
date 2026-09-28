---
control: au-5
title: Response to audit logging process failures
status: draft
stage: core
typical:
  au-05_odp.01: the system administrators and the security operations team
  au-05_odp.02: 1 hour
  au-05_odp.03: 'restore logging and record the gap in the audit trail; for high-impact systems, stop processing that cannot be logged'
---

- The {{org:system-owner}} shall ensure the system alerts {{param:au-05_odp.01}} within {{param:au-05_odp.02}} of an audit logging process failure. (AU-5a)
- When an audit logging process fails, the {{org:system-owner}} shall {{param:au-05_odp.03}}. (AU-5b)
