---
title: 'PM-5 System Inventory'
description: 'NIST SP 800-53 Rev. 5 control PM-5, System Inventory: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PM-5 System Inventory'
  order: 5
control:
  id: PM-5
  family: PM
  baselines: []
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Not in a baseline | Organization | 1 (1 in a baseline) |

## Control statement

Develop and update [Assignment: organization-defined frequency] an inventory of organizational systems.

<details>
<summary>NIST discussion</summary>

OMB A-130 provides guidance on developing systems inventories and associated reporting requirements. System inventory refers to an organization-wide inventory of systems, not system components as described in CM-8.

</details>

## Control enhancements

<a id="pm-5.1"></a>

### PM-5(1) Inventory of Personally Identifiable Information

*Baselines: Privacy*

Establish, maintain, and update [Assignment: organization-defined frequency] an inventory of all systems, applications, and projects that process personally identifiable information.

<details>
<summary>Discussion and assessment objectives for PM-5(1)</summary>

An inventory of systems, applications, and projects that process personally identifiable information supports the mapping of data actions, providing individuals with privacy notices, maintaining accurate personally identifiable information, and limiting the processing of personally identifiable information when such information is not needed for operational purposes. Organizations may use this inventory to ensure that systems only process the personally identifiable information for authorized purposes and that this processing is still relevant and necessary for the purpose specified therein.

Determine if:

- **PM-05(01)[01]** an inventory of all systems, applications, and projects that process personally identifiable information is established;
- **PM-05(01)[02]** an inventory of all systems, applications, and projects that process personally identifiable information is maintained;
- **PM-05(01)[03]** an inventory of all systems, applications, and projects that process personally identifiable information is updated [Assignment: organization-defined frequency].

**Examine:** Procedures addressing system inventory development, maintenance, and updates; OMB FISMA reporting guidance; privacy program plan; information security program plan; personally identifiable information processing policy; system inventory; personally identifiable information inventory; data mapping documentation; other relevant documents or records.

**Interview:** Organizational personnel with privacy program planning and plan implementation responsibilities; organizational personnel responsible for developing and maintaining the system inventory; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for system inventory development, maintenance, and updates; mechanisms supporting the system inventory.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PM-5</summary>

Determine if:

- **PM-05[01]** an inventory of organizational systems is developed;
- **PM-05[02]** the inventory of organizational systems is updated [Assignment: organization-defined frequency].

**Examine:** Information security program plan; system inventory; procedures addressing system inventory development and maintenance; OMB FISMA reporting guidance; other relevant documents or records.

**Interview:** Organizational personnel with information security program planning and plan implementation responsibilities; organizational personnel responsible for developing and maintaining the system inventory; organizational personnel with information security responsibilities.

**Test:** Organizational processes for system inventory development and maintenance; mechanisms supporting the system inventory.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
