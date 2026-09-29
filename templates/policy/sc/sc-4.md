---
control: sc-4
title: 'Information in shared system resources'
status: draft
stage: core
---

:::guidance
This control is about residual information: memory, storage and caches reused by another user or process must not reveal what the last one left. Operating systems and cloud platforms usually provide it; the system owner confirms it and covers any shared resources the application manages itself.
:::

- The {{org:system-owner}} shall ensure the system prevents unauthorized and unintended information transfer through shared system resources. (SC-4)
