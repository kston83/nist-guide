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
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
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
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

CP-7 asks you to set up an alternate processing site where the system can resume the operations that support essential functions, within a set time, when the primary site cannot run it. You make the equipment and supplies available there, or contract for their delivery in time, and provide controls equivalent to the primary site's. NIST's CP-7 discussion says the alternate capability may be a physical site or another option, such as failover to a cloud service provider or another internal or external processing service. CP-7 is in the Moderate and High baselines, not in Low.

[NIST SP 800-34 Rev. 1](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final) (May 2010, updated November 11, 2010; current as of October 2026), section 3.4.3, says the plan for every moderate- or high-impact system should include a strategy to recover and run the system at an alternate facility for an extended period. It describes sites by readiness: cold sites (space and infrastructure only), warm sites (partly equipped), hot sites (fully equipped and staffed), and variations such as mirrored sites, which are fully redundant with real-time mirroring. Section 5.1.5 says to choose the type from the business impact analysis: the processes the system supports, the maximum tolerable downtime, and the impact of losing it. A cold site can take days to weeks to bring up, so it rarely meets a short recovery time objective.

**Common implementations.** For a cloud system, a second region of the same provider, with infrastructure defined as code so the environment can be rebuilt there, and data replicated from the alternate storage site ([CP-6](/controls/cp/cp-6/)). Some systems run warm (scaled-down copies kept running) or active in both regions. For an on-premises system, a second data center the organization runs, or a commercial recovery service under contract. Record the site, its agreement and how operations move there in Appendices D and F of the [contingency plan](/templates/plans/contingency-plan/).

When the site is under contract, SP 800-34 section 3.4.3 lists what the agreement should address, including disaster declaration, priority access, site availability, other subscribers to the same site, testing time, security requirements, and the system's hardware, software and telecommunications requirements. It warns that a commercial site may not be able to serve every customer if one disaster hits many of them, so negotiate how priority is decided (CP-7(3)).

**Organization-defined parameters.** Typical values, from the [Contingency Planning policy](/templates/policies/cp/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| System operations to transfer and resume (a) | The system operations that support essential mission and business functions |
| Time period for transfer and resumption (a) | The recovery time objective set in the contingency plan from the business impact analysis |

In the policy, the system owner establishes the site and its agreements. The time period ties CP-7 to the recovery time objective in section 2.2 of the contingency plan, so the site you choose must be ready enough to meet it. The [CP decision worksheet](/templates/worksheets/cp/) gives the typical answer for where the site is: a second region or availability zone of the same cloud provider for cloud systems, and a second data center or a recovery service for on-premises systems.

**Evidence assessors ask for.**

- The agreement or contract for the alternate processing site, or the cloud configuration and provider terms that establish it
- The contingency plan's alternate processing procedures (Appendix D) and the recovery time objective they must meet
- Evidence that equipment, images, licenses and supplies are in place at the site, or contracts for their delivery in time (CP-7b)
- Evidence of equivalent controls at the site, such as the same baseline configurations, access controls and monitoring (CP-7c)
- The separation and accessibility analysis (CP-7(1), CP-7(2)) and the priority-of-service terms (CP-7(3))
- Results of the last failover test, if one was run (CP-4)

**Inheritance.** A cloud provider's regions and their physical and environmental controls are inherited, as are a recovery vendor's facility controls. The system owns the choice of site, the failover design, the readiness of its own components there and the agreement terms. Record the split in the [system security plan](/templates/plans/system-security-plan/).

**Common findings.**

- An alternate region with no copy of the configuration, images or secrets the system needs, so failover takes far longer than the recovery time objective.
- Controls at the alternate site weaker than at the primary site: logging not enabled, older baselines, or no monitoring.
- A recovery service contract that has lapsed, or that no longer covers the system's current hardware or capacity.
- A site chosen without checking whether it meets the recovery time objective.

**Enhancements in the Moderate baseline.**

- [CP-7(1)](#cp-7.1) separation from primary site: choose a site far enough away that it is unlikely to suffer the same threats. NIST's discussion leaves the distance to the organization's risk assessment and says that for hostile attacks, distance matters less. Separate administrative access and credentials between the sites help against those.
- [CP-7(2)](#cp-7.2) accessibility: identify what could stop you reaching or using the site in an area-wide disruption or disaster, and plan explicit mitigations. For a physical site, think of travel and staff access; for a cloud region, think of the network path, the identity service and the provider's own regional dependencies.
- [CP-7(3)](#cp-7.3) priority of service: put priority-of-service terms in the alternate site agreements, in line with the system's availability requirements and recovery time objective. NIST's discussion means negotiated terms that give the organization priority treatment. For a commercial recovery site, that is your place in the queue when many customers declare at once; for a cloud region, consider reserved capacity so resources are there when everyone fails over.

High adds [CP-7(4)](#cp-7.4) preparation for use: prepare the site so it can serve as the operational site, with configuration settings consistent with the primary site's. [CP-7(6)](#cp-7.6) inability to return to primary site is in no baseline.
