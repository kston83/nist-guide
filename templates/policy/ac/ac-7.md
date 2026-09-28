---
control: ac-7
title: Unsuccessful logon attempts
status: draft
stage: core
typical:
  ac-07_odp.01: '3'
  ac-07_odp.02: 15 minutes
  ac-07_odp.03: 'lock the account or node for 30 minutes, or until released by an administrator for privileged accounts'
---

- The {{org:system-owner}} shall ensure the system enforces a limit of {{param:ac-07_odp.01}} consecutive invalid logon attempts by a user during {{param:ac-07_odp.02}}. (AC-7a)
- The {{org:system-owner}} shall ensure the system automatically takes the following action when the limit is exceeded: {{param:ac-07_odp.03}}. (AC-7b)
