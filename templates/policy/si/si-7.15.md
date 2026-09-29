---
control: si-7.15
title: 'Code authentication'
status: draft
stage: operate
typical:
  si-07.15_odp: 'operating system and application updates, firmware updates, drivers and container images'
---

:::guidance
Code signing verified by the operating system, package manager or container admission controller is the usual mechanism. Keep the list of trusted signers short, and treat an unsigned or wrongly signed component as a failed installation.
:::

- The {{org:system-owner}} shall implement cryptographic mechanisms to authenticate the following software and firmware components before installation: {{param:si-07.15_odp}}. (SI-7(15))
