---
title: 'PE-9 Power Equipment and Cabling'
description: 'NIST SP 800-53 Rev. 5 control PE-9, Power Equipment and Cabling: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PE-9 Power Equipment and Cabling'
  order: 9
control:
  id: PE-9
  family: PE
  baselines: [Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | Organization | 2 (0 in a baseline) |

**Related controls:** [PE-4](/controls/pe/pe-4/)

## Control statement

Protect power equipment and power cabling for the system from damage and destruction.

<details>
<summary>NIST discussion</summary>

Organizations determine the types of protection necessary for the power equipment and cabling employed at different locations that are both internal and external to organizational facilities and environments of operation. Types of power equipment and cabling include internal cabling and uninterruptable power sources in offices or data centers, generators and power cabling outside of buildings, and power sources for self-contained components such as satellites, vehicles, and other deployable systems.

</details>

## Control enhancements

<a id="pe-9.1"></a>

### PE-9(1) Redundant Cabling

*Baselines: Not in a baseline*

Employ redundant power cabling paths that are physically separated by [Assignment: organization-defined distance].

<details>
<summary>Discussion and assessment objectives for PE-9(1)</summary>

Physically separate and redundant power cables ensure that power continues to flow in the event that one of the cables is cut or otherwise damaged.

Determine if redundant power cabling paths that are physically separated by [Assignment: organization-defined distance] are employed.

**Examine:** Physical and environmental protection policy; procedures addressing power equipment/cabling protection; facilities housing power equipment/cabling; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with the responsibility to protect power equipment/cabling; organizational personnel with information security responsibilities.

**Test:** Mechanisms supporting and/or implementing the protection of power equipment/cabling.

</details>

<a id="pe-9.2"></a>

### PE-9(2) Automatic Voltage Controls

*Baselines: Not in a baseline*

Employ automatic voltage controls for [Assignment: organization-defined critical system components].

<details>
<summary>Discussion and assessment objectives for PE-9(2)</summary>

Automatic voltage controls can monitor and control voltage. Such controls include voltage regulators, voltage conditioners, and voltage stabilizers.

Determine if automatic voltage controls for [Assignment: organization-defined critical system components] are employed.

**Examine:** Physical and environmental protection policy; procedures addressing voltage control; security plan; list of critical system components requiring automatic voltage controls; automatic voltage control mechanisms and associated configurations; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for environmental protection of system components; organizational personnel with information security responsibilities.

**Test:** Mechanisms supporting and/or implementing automatic voltage controls.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PE-9</summary>

Determine if:

- **PE-09[01]** power equipment for the system is protected from damage and destruction;
- **PE-09[02]** power cabling for the system is protected from damage and destruction.

**Examine:** Physical and environmental protection policy; procedures addressing power equipment/cabling protection; facilities housing power equipment/cabling; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with the responsibility to protect power equipment/cabling; organizational personnel with information security responsibilities.

**Test:** Mechanisms supporting and/or implementing the protection of power equipment/cabling.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PE-9 protects the power equipment and cabling the system depends on from damage and destruction. NIST's PE-9 discussion has organizations decide the protection needed for power equipment and cabling at each location, inside and outside their facilities, and gives examples: internal cabling and uninterruptible power supplies in offices or data centers, and generators and power cabling outside buildings. PE-9 is in the Moderate and High baselines, not Low, and it has no parameters; the policy sets the measures.

**Common implementations.** In a server room or data center, power distribution units, uninterruptible power supplies, transfer switches and electrical panels sit in the locked room or in locked enclosures, on the [physical access list](/templates/forms/physical-access-list/). An outdoor generator and its fuel supply are fenced or protected by bollards against vehicles and tampering. Power cabling runs under a raised floor or in overhead trays, labeled, separated from data cabling where practical, and never across walkways. Equipment is maintained on the manufacturer's schedule, often under a service contract, and each service visit is recorded. Equipment rooms in office buildings get the same treatment on a smaller scale: a rack-mounted uninterruptible power supply on its own circuit, with the room locked.

**Organization-defined parameters.** PE-9 has none. The [Physical and Environmental Protection policy](/templates/policies/pe/) has the facilities manager protect the system's power equipment and cabling, keep power distribution units, uninterruptible power supplies, transfer switches and generators in locked rooms or enclosures with access limited to authorized staff, fence or otherwise protect outdoor equipment from vehicles and tampering, route and label power cabling so it is protected from accidental damage, kept separate from data cabling where practical and not run across walkways, and maintain power equipment as the manufacturer specifies, with the maintenance recorded.

**Evidence assessors ask for.**

- The power equipment that serves the system, and where each item is
- Observation of electrical rooms, uninterruptible power supplies, generators and cable runs
- The access list for the rooms and enclosures that hold power equipment
- Maintenance records for uninterruptible power supplies, generators and transfer switches, against the manufacturers' schedules

**Inheritance.** For a system hosted in a cloud service or colocation data center, the provider protects the power equipment and cabling in its facility, and the [system security plan](/templates/plans/system-security-plan/) records PE-9 as inherited for it, backed by the provider's authorization or audit report. The organization meets PE-9 for any server room or equipment room of its own, usually as a common control run by the facilities manager. Building power outside the organization's space is often the landlord's; record what the lease says about it.

**Common findings.**

- Electrical panels or uninterruptible power supplies in an unlocked hallway closet or a shared storage room.
- Generators with no protection from vehicles, or fuel caps that are not locked.
- Power cables run across the floor, unlabeled, or tangled with data cabling so a technician can unplug the wrong one.
- Uninterruptible power supply batteries past their replacement date, with no maintenance records.

**Enhancements in the Moderate baseline.** None. [PE-9(1)](#pe-9.1) redundant cabling and [PE-9(2)](#pe-9.2) automatic voltage controls are in no baseline. NIST's discussions describe them as physically separate, redundant power cables, so power keeps flowing if one is cut, and voltage regulators, conditioners and stabilizers. Most data center designs provide both, and a provider's audit report usually describes them.
