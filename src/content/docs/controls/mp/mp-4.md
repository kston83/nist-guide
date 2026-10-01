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
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | Organization | 1 (0 in a baseline) |

**Related controls:** [AC-19](/controls/ac/ac-19/), [CP-2](/controls/cp/cp-2/), [CP-6](/controls/cp/cp-6/), [CP-9](/controls/cp/cp-9/), [CP-10](/controls/cp/cp-10/), [MP-2](/controls/mp/mp-2/), [MP-7](/controls/mp/mp-7/), [PE-3](/controls/pe/pe-3/), [PL-2](/controls/pl/pl-2/), [SC-12](/controls/sc/sc-12/), [SC-13](/controls/sc/sc-13/), [SC-28](/controls/sc/sc-28/), [SC-34](/controls/sc/sc-34/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Physically control and securely store [Assignment: organization-defined types of digital and/or non-digital media] within [Assignment: organization-defined controlled areas] ; and
- **b.** Protect system media types defined in MP-4a until the media are destroyed or sanitized using approved equipment, techniques, and procedures.

<details>
<summary>NIST discussion</summary>

System media includes digital and non-digital media. Digital media includes flash drives, diskettes, magnetic tapes, external or removable hard disk drives (e.g., solid state, magnetic), compact discs, and digital versatile discs. Non-digital media includes paper and microfilm. Physically controlling stored media includes conducting inventories, ensuring procedures are in place to allow individuals to check out and return media to the library, and maintaining accountability for stored media. Secure storage includes a locked drawer, desk, or cabinet or a controlled media library. The type of media storage is commensurate with the security category or classification of the information on the media. Controlled areas are spaces that provide physical and procedural controls to meet the requirements established for protecting information and systems. Fewer controls may be needed for media that contains information determined to be in the public domain, publicly releasable, or have limited adverse impacts on organizations, operations, or individuals if accessed by other than authorized personnel. In these situations, physical access controls provide adequate protection.

</details>

## Control enhancements

<a id="mp-4.2"></a>

### MP-4(2) Automated Restricted Access

*Baselines: Not in a baseline*

Restrict access to media storage areas and log access attempts and access granted using [Assignment: organization-defined automated mechanisms].

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
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

MP-4 asks you to keep media under physical control and in secure storage, and to keep protecting them until they are sanitized or destroyed. NIST's MP-4 discussion describes physical control as conducting inventories, having procedures to check media out of and back into the library, and keeping accountability for stored media. It describes secure storage as a locked drawer, desk or cabinet, or a controlled media library, matched to the security category of the information. MP-4 is in the Moderate and High baselines, not Low.

MP-4b is the part most often missed. Failed drives, retired laptops and printers waiting for sanitization are still media under MP-4, so they stay in a controlled area and on the inventory until their sanitization is recorded in the [media sanitization record](/templates/forms/media-sanitization-record/) ([MP-6](/controls/mp/mp-6/)).

**Common implementations.** A media library or locked cage in the data center, with access through the facility's badge system. Each tape and removable drive carries a bar code, and the backup system or an asset tool holds the inventory and the check-out and return records. Someone reconciles the inventory against the shelves each quarter and resolves any difference. A locked container holds drives removed from service; its contents are rows open in the media sanitization record. Paper is kept in locked cabinets or rooms. Backup media at the alternate storage site ([CP-6](/controls/cp/cp-6/)) are stored media too, so the agreement with that site covers how they are stored and who can reach them.

**Organization-defined parameters.** Typical values, from the [Media Protection policy](/templates/policies/mp/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Digital media to physically control (a) | Removable and portable storage media, backup media, and storage removed from service and awaiting sanitization |
| Non-digital media to physically control (a) | Paper and microfilm containing information not approved for public release |
| Digital media to store securely (a) | Removable and portable storage media, backup media, and storage removed from service and awaiting sanitization |
| Non-digital media to store securely (a) | Paper and microfilm containing information not approved for public release |
| Controlled areas for digital media (a) | The data center, the media library, or a locked container in an area with physical access control, with access limited to authorized personnel |
| Controlled areas for non-digital media (a) | Locked cabinets, drawers or rooms with access limited to authorized personnel |

The policy adds an inventory of the digital media in each library or store, reconciled at least quarterly, and encryption of digital media stored outside the data center, as the [encryption and key management standard](/templates/standards/encryption-and-key-management-standard/) requires for removable media ([SC-28(1)](/controls/sc/sc-28/)).

**Evidence assessors ask for.**

- The media storage areas, and the access list for each
- The media inventory, with check-out and return records
- The last few quarterly reconciliations, with any discrepancies and how they were resolved
- Where drives and equipment awaiting sanitization are kept, and their open rows in the media sanitization record
- The alternate storage site agreement, and its terms for storing media
- Observation of the media library and cabinets, and a sample of inventory entries traced to the shelf and back

**Inheritance.** The cloud provider stores and controls the physical media in its data centers, covered by its authorization or attestation. The facility's physical access controls ([PE-3](/controls/pe/pe-3/)) are often a common control. The system owns the inventory and storage of its own media, such as backup tapes and removable drives, so MP-4 is usually a hybrid control.

**Common findings.**

- An inventory that does not match the shelves, or was never reconciled.
- Failed drives and retired laptops kept for months in an unlocked room or a desk drawer, and missing from the inventory.
- Backup media at the alternate storage site missing from the inventory, or stored under an agreement that says nothing about access.
- No check-out records, so nobody can say who has a missing tape.
- Paper with sensitive information in unlocked cabinets in an open office.

**Enhancements in the Moderate baseline.** None. [MP-4(2)](#mp-4.2) automated restricted access is in no baseline; card readers that log entry to media storage areas, often already installed for [PE-3](/controls/pe/pe-3/), provide most of it. MP-4(1) is withdrawn.

**Federal systems** (as of October 2026). Under [32 CFR 2002.14(c)](https://www.ecfr.gov/current/title-32/section-2002.14), authorized holders of controlled unclassified information (CUI) must take reasonable precautions against its unauthorized disclosure. These include establishing controlled environments in which to protect CUI and using them, and, outside a controlled environment, keeping CUI under the authorized holder's direct control or protecting it with at least one physical barrier. The MP-4 clause's federal block requires media containing CUI to be stored in such controlled environments, and kept under direct control or behind at least one physical barrier, such as a locked container, whenever they are outside one.
