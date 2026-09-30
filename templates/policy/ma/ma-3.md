---
control: ma-3
title: 'Maintenance tools'
status: draft
stage: operate
typical:
  ma-03_odp: 'at least annually'
---

:::guidance
Maintenance tools are the diagnostic and repair tools that are not part of the system: diagnostic test equipment, packet sniffers, vendor utilities brought in on media or downloaded, and cloud-based diagnostic services. NIST's MA-3 discussion notes they can carry malicious code into a facility and a system, and excludes utilities built into the system, such as ping or a switch's monitoring port. Keep the approved tools list in the [maintenance log](/templates/forms/maintenance-log/). The periodic review withdraws approval for tools that are outdated, unsupported or no longer used, as NIST's discussion describes.
:::

- The {{org:system-owner}} shall approve each maintenance tool before it is used on the system, and record it on the system's approved maintenance tools list. (MA-3a)
- The {{org:system-owner}} shall control the use of maintenance tools, so that only approved tools are used, only by authorized maintenance personnel. (MA-3a)
- The {{org:system-owner}} shall monitor the use of maintenance tools, through escort or session supervision and the audit records of privileged tool use (AU-2). (MA-3a)
- The {{org:system-owner}} shall review previously approved system maintenance tools {{param:ma-03_odp}}, and withdraw approval for tools that are outdated, unsupported, no longer needed or no longer used. (MA-3b)
