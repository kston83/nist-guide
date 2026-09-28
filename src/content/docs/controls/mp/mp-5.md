---
title: 'MP-5 Media Transport'
description: 'NIST SP 800-53 Rev. 5 control MP-5, Media Transport: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'MP-5 Media Transport'
  order: 5
control:
  id: MP-5
  family: MP
  baselines: [Moderate, High]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | Organization | 1 (0 in a baseline) |

**Related controls:** [AC-7](/controls/ac/ac-7/), [AC-19](/controls/ac/ac-19/), [CP-2](/controls/cp/cp-2/), [CP-9](/controls/cp/cp-9/), [MP-3](/controls/mp/mp-3/), [MP-4](/controls/mp/mp-4/), [PE-16](/controls/pe/pe-16/), [PL-2](/controls/pl/pl-2/), [SC-12](/controls/sc/sc-12/), [SC-13](/controls/sc/sc-13/), [SC-28](/controls/sc/sc-28/), [SC-34](/controls/sc/sc-34/)

## Control statement

- **a.** Protect and control [Assignment: organization-defined types of system media] during transport outside of controlled areas using [Assignment: organization-defined controls];
- **b.** Maintain accountability for system media during transport outside of controlled areas;
- **c.** Document activities associated with the transport of system media; and
- **d.** Restrict the activities associated with the transport of system media to authorized personnel.

<details>
<summary>NIST discussion</summary>

System media includes digital and non-digital media. Digital media includes flash drives, diskettes, magnetic tapes, external or removable hard disk drives (e.g., solid state and magnetic), compact discs, and digital versatile discs. Non-digital media includes microfilm and paper. Controlled areas are spaces for which organizations provide physical or procedural controls to meet requirements established for protecting information and systems. Controls to protect media during transport include cryptography and locked containers. Cryptographic mechanisms can provide confidentiality and integrity protections depending on the mechanisms implemented. Activities associated with media transport include releasing media for transport, ensuring that media enters the appropriate transport processes, and the actual transport. Authorized transport and courier personnel may include individuals external to the organization. Maintaining accountability of media during transport includes restricting transport activities to authorized personnel and tracking and/or obtaining records of transport activities as the media moves through the transportation system to prevent and detect loss, destruction, or tampering. Organizations establish documentation requirements for activities associated with the transport of system media in accordance with organizational assessments of risk. Organizations maintain the flexibility to define record-keeping methods for the different types of media transport as part of a system of transport-related records.

</details>

## Control enhancements

<a id="mp-5.3"></a>

### MP-5(3) Custodians

*Baselines: Not in a baseline*

Employ an identified custodian during transport of system media outside of controlled areas.

<details>
<summary>Discussion and assessment objectives for MP-5(3)</summary>

Identified custodians provide organizations with specific points of contact during the media transport process and facilitate individual accountability. Custodial responsibilities can be transferred from one individual to another if an unambiguous custodian is identified.

Determine if:

- **MP-05(03)[01]** a custodian to transport system media outside of controlled areas is identified;
- **MP-05(03)[02]** the identified custodian is employed during the transport of system media outside of controlled areas.

**Examine:** System media protection policy; procedures addressing media transport; physical and environmental protection policy and procedures; system media transport records; audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system media transport responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for identifying and employing a custodian to transport media outside of controlled areas.

</details>

*Withdrawn enhancements: MP-5(1), MP-5(2), MP-5(4).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for MP-5</summary>

Determine if:

- **MP-05a.**
  - **MP-05a.[01]** [Assignment: organization-defined types of system media] are protected during transport outside of controlled areas using [Assignment: organization-defined controls];
  - **MP-05a.[02]** [Assignment: organization-defined types of system media] are controlled during transport outside of controlled areas using [Assignment: organization-defined controls];
- **MP-05b.** accountability for system media is maintained during transport outside of controlled areas;
- **MP-05c.** activities associated with the transport of system media are documented;
- **MP-05d.**
  - **MP-05d.[01]** personnel authorized to conduct media transport activities is/are identified;
  - **MP-05d.[02]** activities associated with the transport of system media are restricted to identified authorized personnel.

**Examine:** System media protection policy; procedures addressing media storage; physical and environmental protection policy and procedures; access control policy and procedures; authorized personnel list; system media; designated controlled areas; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system media protection and storage responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for storing information media; mechanisms supporting and/or implementing media storage/media protection.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
