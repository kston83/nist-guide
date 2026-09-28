---
title: 'MP-4 Media Storage'
description: 'NIST SP 800-53 Rev. 5 control MP-4, Media Storage: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'MP-4 Media Storage'
  order: 4
control:
  id: MP-4
  family: MP
  baselines: [Moderate, High]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | Organization | 1 (0 in a baseline) |

**Related controls:** [AC-19](/controls/ac/ac-19/), [CP-2](/controls/cp/cp-2/), [CP-6](/controls/cp/cp-6/), [CP-9](/controls/cp/cp-9/), [CP-10](/controls/cp/cp-10/), [MP-2](/controls/mp/mp-2/), [MP-7](/controls/mp/mp-7/), [PE-3](/controls/pe/pe-3/), [PL-2](/controls/pl/pl-2/), [SC-12](/controls/sc/sc-12/), [SC-13](/controls/sc/sc-13/), [SC-28](/controls/sc/sc-28/), [SC-34](/controls/sc/sc-34/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Physically control and securely store [Assignment: organization-defined organization-defined types of digital and/or non-digital media] within [Assignment: organization-defined organization-defined controlled areas] ; and
- **b.** Protect system media types defined in MP-4a until the media are destroyed or sanitized using approved equipment, techniques, and procedures.

<details>
<summary>NIST discussion</summary>

System media includes digital and non-digital media. Digital media includes flash drives, diskettes, magnetic tapes, external or removable hard disk drives (e.g., solid state, magnetic), compact discs, and digital versatile discs. Non-digital media includes paper and microfilm. Physically controlling stored media includes conducting inventories, ensuring procedures are in place to allow individuals to check out and return media to the library, and maintaining accountability for stored media. Secure storage includes a locked drawer, desk, or cabinet or a controlled media library. The type of media storage is commensurate with the security category or classification of the information on the media. Controlled areas are spaces that provide physical and procedural controls to meet the requirements established for protecting information and systems. Fewer controls may be needed for media that contains information determined to be in the public domain, publicly releasable, or have limited adverse impacts on organizations, operations, or individuals if accessed by other than authorized personnel. In these situations, physical access controls provide adequate protection.

</details>

## Control enhancements

<a id="mp-4.2"></a>

### MP-4(2) Automated Restricted Access

*Baselines: Not in a baseline*

Restrict access to media storage areas and log access attempts and access granted using [Assignment: organization-defined organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for MP-4(2)</summary>

Automated mechanisms include keypads, biometric readers, or card readers on the external entries to media storage areas.

Determine if:

- **MP-04(02)[01]** access to media storage areas is restricted using [Assignment: organization-defined automated mechanisms];
- **MP-04(02)[02]** access attempts to media storage areas are logged using [Assignment: organization-defined automated mechanisms];
- **MP-04(02)[03]** access granted to media storage areas is logged using [Assignment: organization-defined automated mechanisms].

**Examine:** System media protection policy; procedures addressing media storage; access control policy and procedures; physical and environmental protection policy and procedures; system design documentation; system configuration settings and associated documentation; media storage facilities; access control devices; access control records; audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system media protection and storage responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Automated mechanisms restricting access to media storage areas; automated mechanisms auditing access attempts and access granted to media storage areas.

</details>

*Withdrawn enhancements: MP-4(1).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for MP-4</summary>

Determine if:

- **MP-04a.**
  - **MP-04a.[01]** [Assignment: organization-defined types of digital media] are physically controlled;
  - **MP-04a.[02]** [Assignment: organization-defined types of non-digital media] are physically controlled;
  - **MP-04a.[03]** [Assignment: organization-defined types of digital media] are securely stored within [Assignment: organization-defined controlled areas];
  - **MP-04a.[04]** [Assignment: organization-defined types of non-digital media] are securely stored within [Assignment: organization-defined controlled areas];
- **MP-04b.** system media types (defined in MP-04_ODP[01], MP-04_ODP[02], MP-04_ODP[03], MP-04_ODP[04]) are protected until the media are destroyed or sanitized using approved equipment, techniques, and procedures.

**Examine:** System media protection policy; procedures addressing media storage; physical and environmental protection policy and procedures; access control policy and procedures; system media; designated controlled areas; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system media protection and storage responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for storing information media; mechanisms supporting and/or implementing secure media storage/media protection.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
