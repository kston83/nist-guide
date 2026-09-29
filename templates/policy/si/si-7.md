---
control: si-7
title: 'Software, firmware and information integrity'
status: draft
stage: operate
typical:
  si-07_odp.01: 'operating system files, installed applications, container images and security tool binaries'
  si-07_odp.02: 'server, network device and endpoint firmware and boot components, where the platform supports verification'
  si-07_odp.03: 'security configuration files, audit logs, and the critical data stores named in the system security plan'
  si-07_odp.04: 'alert the security operations team, restore the approved version, and handle an unauthorized change as a suspected incident'
  si-07_odp.05: 'alert the security operations team, restore the approved firmware, and handle an unauthorized change as a suspected incident'
  si-07_odp.06: 'alert the security operations team and the information owner, restore the information from a trusted source or backup, and handle an unauthorized change as a suspected incident'
---

:::guidance
File integrity monitoring, signed and verified container images, secure boot and measured boot are the usual integrity verification tools. Changes approved under CM-3 are expected; integrity verification finds the ones that were not.
:::

- The {{org:system-owner}} shall employ integrity verification tools to detect unauthorized changes to the following software: {{param:si-07_odp.01}}. (SI-7a)
- The {{org:system-owner}} shall employ integrity verification tools to detect unauthorized changes to the following firmware: {{param:si-07_odp.02}}. (SI-7a)
- The {{org:system-owner}} shall employ integrity verification tools to detect unauthorized changes to the following information: {{param:si-07_odp.03}}. (SI-7a)
- When unauthorized changes to software are detected, the {{org:system-owner}} shall {{param:si-07_odp.04}}. (SI-7b)
- When unauthorized changes to firmware are detected, the {{org:system-owner}} shall {{param:si-07_odp.05}}. (SI-7b)
- When unauthorized changes to information are detected, the {{org:system-owner}} shall {{param:si-07_odp.06}}. (SI-7b)
