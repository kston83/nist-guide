---
control: ra-5.5
title: Privileged access
status: draft
stage: core
typical:
  ra-05.05_odp.01: 'operating systems, databases and web applications'
  ra-05.05_odp.02: credentialed (authenticated) vulnerability scans
---

:::guidance
Scans that log in find far more missing patches and weak settings than scans that only probe from the network. The scanning accounts are privileged accounts, so manage them under AC-2 and AC-6 like any other.
:::

- The {{org:system-owner}} shall authorize privileged access to {{param:ra-05.05_odp.01}} for {{param:ra-05.05_odp.02}}. (RA-5(5))
