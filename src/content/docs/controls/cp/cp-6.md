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
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
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
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

CP-6 asks you to set up an alternate storage site, with the agreements needed to store and retrieve the system's backups, and to make sure it protects them as well as the primary site does. NIST's CP-6 discussion says alternate storage sites are geographically distinct from the primary site, and that geographically distributed architectures that support contingency requirements may count as alternate storage sites. The agreements cover environmental conditions, access rules, physical and environmental protection, and the delivery and retrieval of backup media. CP-6 is in the Moderate and High baselines, not in Low.

[NIST SP 800-34 Rev. 1](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final) (May 2010, updated November 11, 2010; current as of October 2026), section 3.4.2, lists the criteria for choosing an offsite storage site:

| Criterion | What to check |
| --- | --- |
| Geographic area | Distance from the primary site, and the chance that the same disaster affects both |
| Accessibility | How long it takes to retrieve the backups, and when the site is open |
| Security | The security of the shipping method, the facility and its staff, all meeting the data's requirements |
| Environment | Structural and environmental conditions: temperature, humidity, fire prevention and power |
| Cost | Shipping, operating fees, and disaster response and recovery services |

**Common implementations.** For a cloud system, backups copied to a second region of the same provider, or to a separate backup service, with the copy held in a separate account or vault that production administrators cannot change or delete. For an on-premises system, backups replicated to a second data center or a recovery provider, or physical media sent to a commercial storage vendor. Either way, the site holds the copies [CP-9](/controls/cp/cp-9/) requires, including the immutable or offline copy that the [CP decision worksheet](/templates/worksheets/cp/) gives as the typical ransomware protection. Record the site and its agreement in Appendix F of the [contingency plan](/templates/plans/contingency-plan/).

"Equivalent controls" (CP-6b) means the backups keep the protection they have at the primary site: the same access restrictions, encryption and monitoring, and physical protection at a vendor's facility. For a provider or vendor, check this with the [external service review](/templates/forms/external-service-review/). Physical media in transit and at the vendor fall under media transport and storage ([MP-5](/controls/mp/mp-5/), [MP-4](/controls/mp/mp-4/)).

**Organization-defined parameters.** CP-6 and its Moderate enhancements have none. In the [Contingency Planning policy](/templates/policies/cp/), the system owner establishes the site and its agreements. The decision worksheet gives the typical answer for where the site is: a second region or availability zone of the same cloud provider for cloud systems, and a second data center or a recovery service for on-premises systems. The policy's guidance adds that a cloud region or zone serves only if it meets the separation and control requirements and the provider agreement supports it.

**Evidence assessors ask for.**

- The agreement or contract for the alternate storage site, or the cloud configuration and provider terms that establish it
- The location of the site and the reasoning for why it is far enough from the primary site (CP-6(1))
- Evidence of equivalent controls: access lists, encryption settings and the provider's or vendor's security documentation
- Backup job reports showing copies reaching the site, and a recent retrieval or restore from it
- The accessibility analysis and mitigation actions (CP-6(3))

**Inheritance.** A cloud provider's storage services and a backup vendor's facility controls are inherited, often through the provider's authorization package or audit reports. The system owns the choice of site, the replication settings, who can reach the copies, and the accessibility plan. Record the split in the [system security plan](/templates/plans/system-security-plan/).

**Common findings.**

- Backups kept in the same data center, or the same cloud region, as the system they protect.
- An alternate copy that production administrators, or an attacker with their credentials, can delete.
- No agreement for retrieving media from the storage vendor, or no one who knows how to request it.
- No analysis of what happens if the alternate site cannot be reached in a regional disaster.

**Enhancements in the Moderate baseline.**

- [CP-6(1)](#cp-6.1) separation from primary site: choose a site far enough away that it is unlikely to suffer the same threats. NIST's discussion leaves the distance to the organization's risk assessment and says that for hostile attacks, distance matters less. For ransomware and stolen credentials, logical separation does the work: a separate account, separate credentials and an immutable copy. Record the threats you considered and how the site's location and separation address each.
- [CP-6(3)](#cp-6.3) accessibility: identify what could stop you reaching the site in an area-wide disruption or disaster, and plan explicit mitigations. NIST's discussion gives two examples: duplicating backups at another site, and planning for physical retrieval if electronic access fails. For a cloud site, consider a regional outage of the provider and loss of the network path or identity service you use to reach it.

High adds [CP-6(2)](#cp-6.2) recovery time and recovery point objectives: configure the site so recovery from it meets the objectives.
