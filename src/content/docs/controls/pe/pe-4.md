---
title: 'PE-4 Access Control for Transmission'
description: 'NIST SP 800-53 Rev. 5 control PE-4, Access Control for Transmission: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PE-4 Access Control for Transmission'
  order: 4
control:
  id: PE-4
  family: PE
  baselines: [Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | Organization | None |

**Related controls:** [AT-3](/controls/at/at-3/), [IA-4](/controls/ia/ia-4/), [MP-2](/controls/mp/mp-2/), [MP-4](/controls/mp/mp-4/), [PE-2](/controls/pe/pe-2/), [PE-3](/controls/pe/pe-3/), [PE-5](/controls/pe/pe-5/), [PE-9](/controls/pe/pe-9/), [SC-7](/controls/sc/sc-7/), [SC-8](/controls/sc/sc-8/)

## Control statement

Control physical access to [Assignment: organization-defined system distribution and transmission lines] within organizational facilities using [Assignment: organization-defined security controls].

<details>
<summary>NIST discussion</summary>

Security controls applied to system distribution and transmission lines prevent accidental damage, disruption, and physical tampering. Such controls may also be necessary to prevent eavesdropping or modification of unencrypted transmissions. Security controls used to control physical access to system distribution and transmission lines include disconnected or locked spare jacks, locked wiring closets, protection of cabling by conduit or cable trays, and wiretapping sensors.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PE-4</summary>

Determine if physical access to [Assignment: organization-defined system distribution and transmission lines] within organizational facilities is controlled using [Assignment: organization-defined security controls].

**Examine:** Physical and environmental protection policy; procedures addressing access control for transmission mediums; system design documentation; facility communications and wiring diagrams; list of physical security safeguards applied to system distribution and transmission lines; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with physical access control responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for access control to distribution and transmission lines; mechanisms/security safeguards supporting and/or implementing access control to distribution and transmission lines.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PE-4 protects the cables, jacks and closets that carry the system's communications. NIST's PE-4 discussion says these controls prevent accidental damage, disruption and physical tampering, and may also be needed to prevent eavesdropping on or modification of unencrypted transmissions. It lists disconnected or locked spare jacks, locked wiring closets, cabling in conduit or cable trays, and wiretapping sensors. PE-4 is in the Moderate and High baselines, not Low.

Encrypting traffic in transit ([SC-8](/controls/sc/sc-8/)) reduces the eavesdropping risk but does nothing against a cut cable or a rogue device plugged into a live jack, so PE-4 still applies to an encrypted network.

**Common implementations.** Wiring closets and telecommunications rooms are locked, on the [physical access list](/templates/forms/physical-access-list/) as areas that contain system components, and logged by the badge system ([PE-3](/controls/pe/pe-3/)). Cabling runs in conduit or enclosed trays where it passes through public or shared spaces. Jacks in conference rooms, lobbies and empty offices are unpatched at the patch panel or disabled on the switch, and network access control ([IA-3](/controls/ia/ia-3/)) blocks unknown devices on the ports that stay live. Wireless access points are mounted out of reach or in locked enclosures. The system security plan lists the closets and cable paths that serve the system, including the landlord's riser and telecommunications rooms in a shared building.

**Organization-defined parameters.** Typical values, from the [Physical and Environmental Protection policy](/templates/policies/pe/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Distribution and transmission lines to protect | The network and telephone cabling, fiber, patch panels and wireless access points that carry the system's communications, and the wiring closets and cable runs that hold them |
| Security controls | Locked wiring closets and telecommunications rooms with access limited to authorized staff, cabling in conduit or enclosed cable trays where it passes through public or shared areas, and unused network jacks disconnected at the patch panel or disabled on the switch |

The policy also has the system owner identify, in the system security plan, the lines that serve the system and who controls the spaces they pass through, including spaces a landlord or provider controls, and puts wiring closets and telecommunications rooms on the physical access list with entry recorded in the access logs.

**Evidence assessors ask for.**

- The list of wiring closets and telecommunications rooms that serve the system, and who controls each
- The access list and access logs for those rooms
- The switch configuration or port report showing unused ports disabled, or patch panel records
- Observation of closets, cable runs through public areas, and jacks in lobbies and conference rooms
- The lease or agreement terms for spaces the landlord or provider controls

**Inheritance.** For a system hosted in a cloud service or colocation data center, the provider protects the cabling inside its facility, and the [system security plan](/templates/plans/system-security-plan/) records PE-4 as inherited for it. The organization still meets PE-4 for its office network: the closets, cabling and jacks its users connect through, usually as a common control. Communications lines outside the organization's facilities, such as a carrier's circuits, are outside PE-4's "within organizational facilities"; protect what they carry with encryption ([SC-8](/controls/sc/sc-8/)).

**Common findings.**

- Wiring closets unlocked, used as storage rooms, or opened by the same key as the janitor's closet.
- Live network jacks in the lobby, conference rooms or empty offices, with no network access control.
- No record of which closets serve the system, or of who controls the building's riser and telecommunications rooms.
- Patch panels and switches in a shared space or an open ceiling, reachable by anyone.

**Enhancements in the Moderate baseline.** PE-4 has no enhancements.
