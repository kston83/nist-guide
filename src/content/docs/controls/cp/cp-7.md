---
title: 'CP-7 Alternate Processing Site'
description: 'NIST SP 800-53 Rev. 5 control CP-7, Alternate Processing Site: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CP-7 Alternate Processing Site'
  order: 7
control:
  id: CP-7
  family: CP
  baselines: [Moderate, High]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | Organization | 5 (4 in a baseline) |

**Related controls:** [CP-2](/controls/cp/cp-2/), [CP-6](/controls/cp/cp-6/), [CP-8](/controls/cp/cp-8/), [CP-9](/controls/cp/cp-9/), [CP-10](/controls/cp/cp-10/), [MA-6](/controls/ma/ma-6/), [PE-3](/controls/pe/pe-3/), [PE-11](/controls/pe/pe-11/), [PE-12](/controls/pe/pe-12/), [PE-17](/controls/pe/pe-17/), [SC-36](/controls/sc/sc-36/), [SI-13](/controls/si/si-13/)

## Control statement

- **a.** Establish an alternate processing site, including necessary agreements to permit the transfer and resumption of [Assignment: organization-defined system operations] for essential mission and business functions within [Assignment: organization-defined time period] when the primary processing capabilities are unavailable;
- **b.** Make available at the alternate processing site, the equipment and supplies required to transfer and resume operations or put contracts in place to support delivery to the site within the organization-defined time period for transfer and resumption; and
- **c.** Provide controls at the alternate processing site that are equivalent to those at the primary site.

<details>
<summary>NIST discussion</summary>

Alternate processing sites are geographically distinct from primary processing sites and provide processing capability if the primary processing site is not available. The alternate processing capability may be addressed using a physical processing site or other alternatives, such as failover to a cloud-based service provider or other internally or externally provided processing service. Geographically distributed architectures that support contingency requirements may also be considered alternate processing sites. Controls that are covered by alternate processing site agreements include the environmental conditions at alternate sites, access rules, physical and environmental protection requirements, and the coordination for the transfer and assignment of personnel. Requirements are allocated to alternate processing sites that reflect the requirements in contingency plans to maintain essential mission and business functions despite disruption, compromise, or failure in organizational systems.

</details>

## Control enhancements

<a id="cp-7.1"></a>

### CP-7(1) Separation from Primary Site

*Baselines: Moderate, High*

Identify an alternate processing site that is sufficiently separated from the primary processing site to reduce susceptibility to the same threats.

<details>
<summary>Discussion and assessment objectives for CP-7(1)</summary>

Threats that affect alternate processing sites are defined in organizational assessments of risk and include natural disasters, structural failures, hostile attacks, and errors of omission or commission. Organizations determine what is considered a sufficient degree of separation between primary and alternate processing sites based on the types of threats that are of concern. For threats such as hostile attacks, the degree of separation between sites is less relevant.

Determine if an alternate processing site that is sufficiently separated from the primary processing site to reduce susceptibility to the same threats is identified.

**Examine:** Contingency planning policy; procedures addressing alternate processing sites; contingency plan; alternate processing site; alternate processing site agreements; primary processing site agreements; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency plan alternate processing site responsibilities; organizational personnel with system recovery responsibilities; organizational personnel with information security responsibilities.

</details>

<a id="cp-7.2"></a>

### CP-7(2) Accessibility

*Baselines: Moderate, High*

Identify potential accessibility problems to alternate processing sites in the event of an area-wide disruption or disaster and outlines explicit mitigation actions.

<details>
<summary>Discussion and assessment objectives for CP-7(2)</summary>

Area-wide disruptions refer to those types of disruptions that are broad in geographic scope with such determinations made by organizations based on organizational assessments of risk.

Determine if:

- **CP-07(02)[01]** potential accessibility problems to alternate processing sites in the event of an area-wide disruption or disaster are identified;
- **CP-07(02)[02]** explicit mitigation actions to address identified accessibility problems are outlined.

**Examine:** Contingency planning policy; procedures addressing alternate processing sites; contingency plan; alternate processing site; alternate processing site agreements; primary processing site agreements; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency plan alternate processing site responsibilities; organizational personnel with system recovery responsibilities; organizational personnel with information security responsibilities.

</details>

<a id="cp-7.3"></a>

### CP-7(3) Priority of Service

*Baselines: Moderate, High*

Develop alternate processing site agreements that contain priority-of-service provisions in accordance with availability requirements (including recovery time objectives).

<details>
<summary>Discussion and assessment objectives for CP-7(3)</summary>

Priority of service agreements refer to negotiated agreements with service providers that ensure that organizations receive priority treatment consistent with their availability requirements and the availability of information resources for logical alternate processing and/or at the physical alternate processing site. Organizations establish recovery time objectives as part of contingency planning.

Determine if alternate processing site agreements that contain priority-of-service provisions in accordance with availability requirements (including recovery time objectives) are developed.

**Examine:** Contingency planning policy; procedures addressing alternate processing sites; contingency plan; alternate processing site agreements; service-level agreements; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency plan alternate processing site responsibilities; organizational personnel with system recovery responsibilities; organizational personnel with information security responsibilities; organizational personnel with responsibility for acquisitions/contractual agreements.

</details>

<a id="cp-7.4"></a>

### CP-7(4) Preparation for Use

*Baselines: High*

Prepare the alternate processing site so that the site can serve as the operational site supporting essential mission and business functions.

<details>
<summary>Discussion and assessment objectives for CP-7(4)</summary>

Site preparation includes establishing configuration settings for systems at the alternate processing site consistent with the requirements for such settings at the primary site and ensuring that essential supplies and logistical considerations are in place.

Determine if the alternate processing site is prepared so that the site can serve as the operational site supporting essential mission and business functions.

**Examine:** Contingency planning policy; procedures addressing alternate processing sites; contingency plan; alternate processing site; alternate processing site agreements; alternate processing site configurations; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency plan alternate processing site responsibilities; organizational personnel with system recovery responsibilities; organizational personnel with information security responsibilities.

**Test:** Mechanisms supporting and/or implementing recovery at the alternate processing site.

</details>

<a id="cp-7.6"></a>

### CP-7(6) Inability to Return to Primary Site

*Baselines: Not in a baseline*

Plan and prepare for circumstances that preclude returning to the primary processing site.

<details>
<summary>Discussion and assessment objectives for CP-7(6)</summary>

There may be situations that preclude an organization from returning to the primary processing site such as if a natural disaster (e.g., flood or a hurricane) damaged or destroyed a facility and it was determined that rebuilding in the same location was not prudent.

Determine if:

- **CP-07(06)[01]** circumstances that preclude returning to the primary processing site are planned for;
- **CP-07(06)[02]** circumstances that preclude returning to the primary processing site are prepared for.

**Examine:** Contingency planning policy; procedures addressing alternate processing sites; contingency plan; alternate processing site; alternate processing site agreements; alternate processing site configurations; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system reconstitution responsibilities; organizational personnel with information security responsibilities.

</details>

*Withdrawn enhancements: CP-7(5).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CP-7</summary>

Determine if:

- **CP-07a.** an alternate processing site, including necessary agreements to permit the transfer and resumption of [Assignment: organization-defined system operations] for essential mission and business functions, is established within [Assignment: organization-defined time period] when the primary processing capabilities are unavailable;
- **CP-07b.**
  - **CP-07b.[01]** the equipment and supplies required to transfer operations are made available at the alternate processing site or if contracts are in place to support delivery to the site within [Assignment: organization-defined time period] for transfer;
  - **CP-07b.[02]** the equipment and supplies required to resume operations are made available at the alternate processing site or if contracts are in place to support delivery to the site within [Assignment: organization-defined time period] for resumption;
- **CP-07c.** controls provided at the alternate processing site are equivalent to those at the primary site.

**Examine:** Contingency planning policy; procedures addressing alternate processing sites; contingency plan; alternate processing site agreements; primary processing site agreements; spare equipment and supplies inventory at alternate processing site; equipment and supply contracts; service-level agreements; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for contingency planning and/or alternate site arrangements; organizational personnel with information security responsibilities.

**Test:** Organizational processes for recovery at the alternate site; mechanisms supporting and/or implementing recovery at the alternate processing site.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
