---
title: 'MP-2 Media Access'
description: 'NIST SP 800-53 Rev. 5 control MP-2, Media Access: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'MP-2 Media Access'
  order: 2
control:
  id: MP-2
  family: MP
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | None |

**Related controls:** [AC-19](/controls/ac/ac-19/), [AU-9](/controls/au/au-9/), [CP-2](/controls/cp/cp-2/), [CP-9](/controls/cp/cp-9/), [CP-10](/controls/cp/cp-10/), [MA-5](/controls/ma/ma-5/), [MP-4](/controls/mp/mp-4/), [MP-6](/controls/mp/mp-6/), [PE-2](/controls/pe/pe-2/), [PE-3](/controls/pe/pe-3/), [SC-12](/controls/sc/sc-12/), [SC-13](/controls/sc/sc-13/), [SC-34](/controls/sc/sc-34/), [SI-12](/controls/si/si-12/)

## Control statement

Restrict access to [Assignment: organization-defined types of digital and/or non-digital media] to [Assignment: organization-defined personnel or roles].

<details>
<summary>NIST discussion</summary>

System media includes digital and non-digital media. Digital media includes flash drives, diskettes, magnetic tapes, external or removable hard disk drives (e.g., solid state, magnetic), compact discs, and digital versatile discs. Non-digital media includes paper and microfilm. Denying access to patient medical records in a community hospital unless the individuals seeking access to such records are authorized healthcare providers is an example of restricting access to non-digital media. Limiting access to the design specifications stored on compact discs in the media library to individuals on the system development team is an example of restricting access to digital media.

</details>

*Withdrawn enhancements: MP-2(1), MP-2(2).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for MP-2</summary>

Determine if:

- **MP-02[01]** access to [Assignment: organization-defined types of digital media] is restricted to [Assignment: organization-defined personnel or roles];
- **MP-02[02]** access to [Assignment: organization-defined types of non-digital media] is restricted to [Assignment: organization-defined personnel or roles].

**Examine:** System media protection policy; procedures addressing media access restrictions; access control policy and procedures; physical and environmental protection policy and procedures; media storage facilities; access control records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system media protection responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for restricting information media; mechanisms supporting and/or implementing media access restrictions.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

MP-2 asks you to restrict access to media, digital and non-digital, to the people authorized for the information on them. NIST's MP-2 discussion counts flash drives, tapes, external drives and optical discs as digital media, and paper and microfilm as non-digital media. MP-2 is about who can get at the media; [MP-7](/controls/mp/mp-7/) is about which media can be used on systems, a distinction NIST's MP-7 discussion draws.

There are two ways to restrict access, and most systems need both. Physical: keep media in places only authorized people can enter ([MP-4](/controls/mp/mp-4/), [PE-3](/controls/pe/pe-3/)). Cryptographic: encrypt digital media so that only holders of the key can read them, as the [encryption and key management standard](/templates/standards/encryption-and-key-management-standard/) requires for removable media ([SC-28(1)](/controls/sc/sc-28/)). Encryption is what protects media once they leave the controlled area, which is why the [Media Protection policy](/templates/policies/mp/) requires it for digital media.

**Common implementations.** A media library or locked cabinets in the data center, with badge access granted only to the operators who handle backup media. Backup software that encrypts backup media, with its keys in the key management service and usable only by the backup administrators. Removable media that are hardware-encrypted, or encrypted by the endpoint management service. For printed output, secure print release, so that a printout is produced only when its owner is at the printer, and locked cabinets for paper that holds information not approved for public release. Drives removed from service go into a locked container until they are sanitized, not onto a desk.

**Organization-defined parameters.** Typical values, from the Media Protection policy, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Types of digital media | Removable and portable storage media (flash drives, external drives, memory cards and optical discs), backup media, and storage removed from service |
| Who may access the digital media | Personnel whose access authorizations for the system permit access to the information on the media |
| Types of non-digital media | Paper and microfilm containing information not approved for public release, including printed system output |
| Who may access the non-digital media | Personnel whose access authorizations permit access to the information on the media |

Tying media access to the system's access authorizations keeps MP-2 in step with [AC-2](/controls/ac/ac-2/) and [AC-3](/controls/ac/ac-3/): a person not authorized to read the information in the system should not be able to read it on a backup tape or a printout. The policy adds a review, at least annually, of the people who can enter each media library or storage area.

**Evidence assessors ask for.**

- The list of media storage areas, and the access list for each from the physical access control system
- The comparison of those access lists with the people authorized for the information, and the annual review records
- Configuration showing removable media and backup media are encrypted, and who can use the backup encryption keys
- Where printed output is handled, the print release configuration or the cabinets used
- Observation of where failed and retired drives are kept

**Inheritance.** For cloud services, the provider controls access to the physical media in its data centers, and its authorization package or attestation covers MP-2 for them. The system still owns access to the media it creates: exported backups, removable media and printouts. On premises, the facility's physical access control is often a common control ([PE-3](/controls/pe/pe-3/)), while the system decides who is on the access list for its media. MP-2 is usually a hybrid control.

**Common findings.**

- Backup media or exported backups that anyone with access to the backup storage can read, because they are not encrypted.
- Media library access lists that still include people who left or changed roles, because the review was never done.
- Printouts with sensitive information left on shared printers.
- Failed drives waiting for return or destruction, kept in an unlocked room.
- Removable media holding sensitive information without encryption.

**Enhancements in the Moderate baseline.** MP-2 has no enhancements. MP-2(1) and MP-2(2) are withdrawn.
