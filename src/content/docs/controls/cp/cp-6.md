---
title: 'CP-6 Alternate Storage Site'
description: 'NIST SP 800-53 Rev. 5 control CP-6, Alternate Storage Site: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CP-6 Alternate Storage Site'
  order: 6
control:
  id: CP-6
  family: CP
  baselines: [Moderate, High]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | Organization | 3 (3 in a baseline) |

**Related controls:** [CP-2](/controls/cp/cp-2/), [CP-7](/controls/cp/cp-7/), [CP-8](/controls/cp/cp-8/), [CP-9](/controls/cp/cp-9/), [CP-10](/controls/cp/cp-10/), [MP-4](/controls/mp/mp-4/), [MP-5](/controls/mp/mp-5/), [PE-3](/controls/pe/pe-3/), [SC-36](/controls/sc/sc-36/), [SI-13](/controls/si/si-13/)

## Control statement

- **a.** Establish an alternate storage site, including necessary agreements to permit the storage and retrieval of system backup information; and
- **b.** Ensure that the alternate storage site provides controls equivalent to that of the primary site.

<details>
<summary>NIST discussion</summary>

Alternate storage sites are geographically distinct from primary storage sites and maintain duplicate copies of information and data if the primary storage site is not available. Similarly, alternate processing sites provide processing capability if the primary processing site is not available. Geographically distributed architectures that support contingency requirements may be considered alternate storage sites. Items covered by alternate storage site agreements include environmental conditions at the alternate sites, access rules for systems and facilities, physical and environmental protection requirements, and coordination of delivery and retrieval of backup media. Alternate storage sites reflect the requirements in contingency plans so that organizations can maintain essential mission and business functions despite compromise, failure, or disruption in organizational systems.

</details>

## Control enhancements

<a id="cp-6.1"></a>

### CP-6(1) Separation from Primary Site

*Baselines: Moderate, High*

Identify an alternate storage site that is sufficiently separated from the primary storage site to reduce susceptibility to the same threats.

<details>
<summary>Discussion and assessment objectives for CP-6(1)</summary>

Threats that affect alternate storage sites are defined in organizational risk assessments and include natural disasters, structural failures, hostile attacks, and errors of omission or commission. Organizations determine what is considered a sufficient degree of separation between primary and alternate storage sites based on the types of threats that are of concern. For threats such as hostile attacks, the degree of separation between sites is less relevant.

Determine if an alternate storage site that is sufficiently separated from the primary storage site is identified to reduce susceptibility to the same threats.

**Examine:** Contingency planning policy; procedures addressing alternate storage sites; contingency plan; alternate storage site; alternate storage site agreements; primary storage site agreements; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency plan alternate storage site responsibilities; organizational personnel with system recovery responsibilities; organizational personnel with information security responsibilities.

</details>

<a id="cp-6.2"></a>

### CP-6(2) Recovery Time and Recovery Point Objectives

*Baselines: High*

Configure the alternate storage site to facilitate recovery operations in accordance with recovery time and recovery point objectives.

<details>
<summary>Discussion and assessment objectives for CP-6(2)</summary>

Organizations establish recovery time and recovery point objectives as part of contingency planning. Configuration of the alternate storage site includes physical facilities and the systems supporting recovery operations that ensure accessibility and correct execution.

Determine if:

- **CP-06(02)[01]** the alternate storage site is configured to facilitate recovery operations in accordance with recovery time objectives;
- **CP-06(02)[02]** the alternate storage site is configured to facilitate recovery operations in accordance with recovery point objectives.

**Examine:** Contingency planning policy; procedures addressing alternate storage sites; contingency plan; alternate storage site; alternate storage site agreements; alternate storage site configurations; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency plan testing responsibilities; organizational personnel with responsibilities for testing related plans; organizational personnel with information security responsibilities.

**Test:** Organizational processes for contingency plan testing; mechanisms supporting recovery time and point objectives.

</details>

<a id="cp-6.3"></a>

### CP-6(3) Accessibility

*Baselines: Moderate, High*

Identify potential accessibility problems to the alternate storage site in the event of an area-wide disruption or disaster and outline explicit mitigation actions.

<details>
<summary>Discussion and assessment objectives for CP-6(3)</summary>

Area-wide disruptions refer to those types of disruptions that are broad in geographic scope with such determinations made by organizations based on organizational assessments of risk. Explicit mitigation actions include duplicating backup information at other alternate storage sites if access problems occur at originally designated alternate sites or planning for physical access to retrieve backup information if electronic accessibility to the alternate site is disrupted.

Determine if:

- **CP-06(03)[01]** potential accessibility problems to the alternate storage site in the event of an area-wide disruption or disaster are identified;
- **CP-06(03)[02]** explicit mitigation actions to address identified accessibility problems are outlined.

**Examine:** Contingency planning policy; procedures addressing alternate storage sites; contingency plan; alternate storage site; list of potential accessibility problems to alternate storage site; mitigation actions for accessibility problems to alternate storage site; organizational risk assessments; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency plan alternate storage site responsibilities; organizational personnel with system recovery responsibilities; organizational personnel with information security responsibilities.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CP-6</summary>

Determine if:

- **CP-06a.**
  - **CP-06a.[01]** an alternate storage site is established;
  - **CP-06a.[02]** establishment of the alternate storage site includes necessary agreements to permit the storage and retrieval of system backup information;
- **CP-06b.** the alternate storage site provides controls equivalent to that of the primary site.

**Examine:** Contingency planning policy; procedures addressing alternate storage sites; contingency plan; alternate storage site agreements; primary storage site agreements; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency plan alternate storage site responsibilities; organizational personnel with system recovery responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for storing and retrieving system backup information at the alternate storage site; mechanisms supporting and/or implementing the storage and retrieval of system backup information at the alternate storage site.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
