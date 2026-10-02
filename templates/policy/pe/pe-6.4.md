---
control: pe-6.4
title: 'Monitoring physical access to systems'
status: draft
stage: operate
typical:
  pe-06.04_odp: 'data centers, server rooms, wiring closets and media storage areas that contain components of the system'
---

:::guidance
PE-6(4) is in the High baseline. NIST's discussion of this enhancement says it adds monitoring for areas where system components are concentrated, such as server rooms, media storage areas and communications centers, and that physical access monitoring can be coordinated with intrusion detection and system monitoring. Use the same spaces as PE-3(1), so every area with its own access control also has its own monitoring.
:::

- The {{org:facilities-manager}} shall monitor physical access to the system, in addition to the physical access monitoring of the facility, at {{param:pe-06.04_odp}}. (PE-6(4))
- Physical access events for those spaces shall be sent to the {{org:security-operations}} and correlated with system monitoring. (PE-6(4))
