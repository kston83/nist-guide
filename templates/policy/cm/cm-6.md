---
control: cm-6
title: Configuration settings
status: draft
stage: core
typical:
  cm-06_odp.01: the secure configuration baselines named in the baseline configuration standard
  cm-06_odp.02: all system components
  cm-06_odp.03: documented operational needs that the system owner approves and the security team reviews
---

:::guidance
Pick a published secure configuration for each component type rather than writing your own: vendor security baselines and checklists from the NIST National Checklist Program (SP 800-70 Rev. 4) are common starting points. Record each deviation with its reason and approval; assessors compare scan results against the baseline and ask for the approval of every difference.
:::

- The {{org:system-owner}} shall establish and document configuration settings for system components that reflect the most restrictive mode consistent with operational requirements, using {{param:cm-06_odp.01}}. (CM-6a)
- The {{org:system-owner}} shall implement the configuration settings. (CM-6b)
- The {{org:system-owner}} shall identify, document and approve any deviation from the established settings for {{param:cm-06_odp.02}}, based on {{param:cm-06_odp.03}}. (CM-6c)
- The {{org:system-owner}} shall monitor and control changes to the configuration settings in accordance with this policy and its procedures. (CM-6d)
