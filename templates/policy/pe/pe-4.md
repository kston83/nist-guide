---
control: pe-4
title: 'Access control for transmission'
status: draft
stage: operate
typical:
  pe-04_odp.01: 'the network and telephone cabling, fiber, patch panels and wireless access points that carry the system''s communications, and the wiring closets and cable runs that hold them'
  pe-04_odp.02: 'locked wiring closets and telecommunications rooms with access limited to authorized staff, cabling in conduit or enclosed cable trays where it passes through public or shared areas, and unused network jacks disconnected at the patch panel or disabled on the switch'
---

:::guidance
PE-4 is in the Moderate and High baselines. NIST's PE-4 discussion says these controls prevent accidental damage, disruption and physical tampering, and may also be needed to prevent eavesdropping on or modification of unencrypted transmissions; it lists disconnected or locked spare jacks, locked wiring closets, cabling in conduit or cable trays, and wiretapping sensors. Encryption in transit (SC-8) reduces the eavesdropping risk but not damage or disruption, so PE-4 still applies. In shared buildings, the landlord's riser and telecommunications rooms are often outside the organization's control; record who controls them and what the lease or agreement requires.
:::

- The {{org:facilities-manager}} shall control physical access to {{param:pe-04_odp.01}} within organizational facilities using {{param:pe-04_odp.02}}. (PE-4)
- The {{org:system-owner}} shall identify, in the system security plan, the distribution and transmission lines that serve the system and who controls the spaces they pass through, including spaces controlled by a landlord or provider. (PE-4)
- Wiring closets and telecommunications rooms shall be included in the physical access list, and entry to them recorded in the physical access logs. (PE-4)
