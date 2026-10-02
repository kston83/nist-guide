---
control: pe-3.1
title: 'System access'
status: draft
stage: operate
typical:
  pe-03.01_odp: 'data centers, server rooms, wiring closets and media storage areas that contain components of the system'
---

:::guidance
PE-3(1) is in the High baseline. NIST's discussion of this enhancement says controlling physical access to the system adds protection for areas within facilities where system components are concentrated. In practice it is a second, separately authorized door: a badge that opens the building does not open the server room. Record those areas and who may enter them in the [physical access list](/templates/forms/physical-access-list/).
:::

- The {{org:facilities-manager}} shall enforce physical access authorizations to the system, in addition to the physical access controls for the facility, at {{param:pe-03.01_odp}}. (PE-3(1))
- Access to those spaces shall be authorized separately from facility access, approved by the {{org:system-owner}}, and limited to individuals whose duties require it. (PE-3(1))
