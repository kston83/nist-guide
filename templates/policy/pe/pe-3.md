---
control: pe-3
title: 'Physical access control'
status: draft
stage: operate
typical:
  pe-03_odp.01: 'every entry and exit point of the facility, and of each area within it that contains system components'
  pe-03_odp.02: 'an electronic physical access control system with badge readers at each controlled entry point, and guards or staffed reception at the main entrance during business hours'
  pe-03_odp.04: 'every controlled entry point to the facility and to each area that contains system components'
  pe-03_odp.05: 'a staffed reception or guard post, locked or badge-controlled doors between public and non-public areas, and no unattended system components or live network jacks in public areas'
  pe-03_odp.06: 'at all times in non-public areas, for every visitor and for anyone without a physical access authorization for the area, including maintenance personnel who are not on the authorized maintenance list'
  pe-03_odp.07: 'keys, lock combinations, and badges and access cards, including unissued, temporary and visitor badges'
  pe-03_odp.08: 'at least annually'
  pe-03_odp.09: 'at least annually'
  pe-03_odp.10: 'at least every five years, and sooner when an inventory cannot account for an issued key'
---

:::guidance
PE-3 enforces the authorizations PE-2 grants. NIST's PE-3 discussion says physical access control applies to employees and visitors; that controls for publicly accessible areas may include logs, guards, or devices and barriers that stop movement from public to non-public areas; that physical access devices include keys, locks, combinations, biometric readers and card readers; and that audit logs can be procedural, automated or both. Access points can be the facility's doors, interior doors to areas that need extra control, or both. Escorts here match the maintenance escorts in the Maintenance Policy (MA-5), and the [visitor log](/templates/forms/visitor-log/) records who escorted each visitor. The [physical access list](/templates/forms/physical-access-list/) holds the inventory of keys, combinations and badges. For a system hosted in a cloud service or colocation data center, the provider's controls are inherited for its facility, and the system security plan says so; PE-3 still applies to the organization's own offices and equipment rooms.
:::

- The {{org:facilities-manager}} shall enforce physical access authorizations at {{param:pe-03_odp.01}} by verifying each individual's access authorization before granting access to the facility. (PE-3a.1)
- The {{org:facilities-manager}} shall control ingress and egress to the facility using {{param:pe-03_odp.02}}. (PE-3a.2)
- Each person shall badge in individually at controlled entry points and shall not hold a controlled door open for others; tailgating shall be reported to the {{org:facilities-manager}}. (PE-3a.2)
- The {{org:facilities-manager}} shall maintain physical access audit logs for {{param:pe-03_odp.04}}, and protect them from alteration and unauthorized access (AU-9). (PE-3b)
- The {{org:facilities-manager}} shall control access to areas within the facility designated as publicly accessible by implementing {{param:pe-03_odp.05}}. (PE-3c)
- Visitors shall be escorted, and their activity controlled, {{param:pe-03_odp.06}}; the escort shall stay with the visitor until they leave the non-public area. (PE-3d)
- Visitor and temporary badges shall look different from permanent badges, shall be valid only for the day or the approved period, and shall be returned on departure. (PE-3d)
- The {{org:facilities-manager}} shall secure keys, combinations and other physical access devices, keeping unissued devices locked away and limiting knowledge of combinations to the people authorized to use them. (PE-3e)
- The {{org:facilities-manager}} shall inventory {{param:pe-03_odp.07}} {{param:pe-03_odp.08}}, and investigate any device that cannot be accounted for. (PE-3f)
- The {{org:facilities-manager}} shall change combinations {{param:pe-03_odp.09}}, change keys {{param:pe-03_odp.10}}, and change both when keys are lost, combinations are compromised, or individuals possessing the keys or combinations are transferred or terminated. (PE-3g)
- A lost or stolen badge or key shall be reported to the {{org:facilities-manager}} at once, and the badge disabled the same day. (PE-3g)

:::federal
[FIPS 201-3](https://csrc.nist.gov/pubs/fips/201-3/final) (January 2022), section 6.3.1, lists the PIV authentication mechanisms for physical access and the assurance each provides, marks visual inspection (VIS) and SYM-CAK as deprecated, and states that "The selection of authentication assurance levels SHALL be made in accordance with the applicable policies for a facility's security level", pointing to the Interagency Security Committee's standard and to SP 800-116. [NIST SP 800-116 Rev. 1](https://csrc.nist.gov/pubs/sp/800/116/r1/final) (June 2018), section 4.3, recommends a risk-based selection organized by Controlled, Limited and Exclusion areas, with a minimum of one, two and three authentication factors respectively (Table 4-3). The Interagency Security Committee's [The Risk Management Process: An Interagency Security Committee Standard](https://www.cisa.gov/publication/risk-management-process), 2024 Edition, states that it applies to federally owned or leased facilities regularly occupied by executive branch employees or contract workers for nonmilitary activities, and has the tenant make the final Facility Security Level (FSL) determination, from Level I to Level V (section 8.1.1). As of October 2026.

- The {{org:facilities-manager}} shall designate each area of a federally controlled facility as Controlled, Limited or Exclusion, consistent with the facility's FSL determination, and record the designation in the physical access list. (PE-3a)
- The physical access control system shall authenticate PIV Cards electronically, using mechanisms that provide at least one authentication factor for Controlled areas, two for Limited areas and three for Exclusion areas, as SP 800-116 Rev. 1 Table 4-3 recommends, and shall not rely on visual inspection of the card alone. (PE-3a.1)

:::
