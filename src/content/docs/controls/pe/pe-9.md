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
---

<!-- nist:start -->
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
<!-- nist:end -->

<!-- guidance: write below this line -->
