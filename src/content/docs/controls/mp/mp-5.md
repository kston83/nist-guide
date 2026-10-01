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
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
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
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

MP-5 covers media while they travel outside controlled areas: protect and control them, keep accountability for them, document the transport, and let only authorized personnel do it. NIST's MP-5 discussion names cryptography and locked containers as the protections, and describes accountability as restricting transport to authorized personnel and tracking or obtaining records of the media as they move, to prevent and detect loss, destruction or tampering. Transport includes releasing the media, getting them into the right transport process, and the trip itself. Couriers may be external to the organization. MP-5 is in the Moderate and High baselines, not Low.

The common cases are backup media going to the alternate storage site ([CP-6](/controls/cp/cp-6/), [CP-9](/controls/cp/cp-9/)), drives going to a destruction provider, equipment going for off-site repair ([MA-2](/controls/ma/ma-2/)), and media sent to another organization under an [information exchange agreement](/templates/forms/information-exchange-agreement/). Replicating backups over the network to the alternate site removes the physical transport; protection in transit is then [SC-8](/controls/sc/sc-8/)'s concern.

**Common implementations.** Digital media are encrypted before they leave, as the [encryption and key management standard](/templates/standards/encryption-and-key-management-standard/) requires for removable media, and the key or password travels separately or not at all. Media travel in locked cases or sealed, tamper-evident packaging. A backup media vendor scans each case's bar code at pickup and delivery and provides the chain-of-custody record. Drives for destruction go in a locked container with a list of serial numbers, so that the provider's certificate can be matched to the list. Each transport is logged with its release and receipt, and the sender confirms receipt.

**Organization-defined parameters.** Typical values, from the [Media Protection policy](/templates/policies/mp/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Types of system media protected and controlled during transport (a) | All digital and non-digital media containing information not approved for public release |
| Controls to protect the media (a) | Encryption of digital media under the encryption and key management standard, and sealed, tamper-evident packaging or locked containers |
| Controls to control the media (a) | Transport only by authorized personnel or by a courier service with tracking and a signature on delivery, and a chain-of-custody record from release to receipt |

NIST's discussion leaves the documentation to the organization's assessment of risk. The policy sets what each transport record holds: the media and their identifiers, who released them, the carrier, the recipient, the tracking number where there is one, and the dates of release and receipt. It also has a shipment that does not arrive, or arrives opened or damaged, reported as a security incident under the [incident response plan](/templates/plans/incident-response-plan/) ([IR-6](/controls/ir/ir-6/)). For drives sent for destruction, record the transport in the custody field of the [media sanitization record](/templates/forms/media-sanitization-record/).

**Evidence assessors ask for.**

- The list of personnel authorized to release, carry and receive media
- Transport records for a period, with a sample traced from release to confirmed receipt
- Courier and backup media vendor contracts, showing tracking and a signature on delivery
- Evidence that media shipped were encrypted, and how keys were handled
- Pickup and delivery manifests from the backup media vendor, reconciled with the media inventory ([MP-4](/controls/mp/mp-4/))
- Incident records for any shipment lost or received damaged

**Inheritance.** A courier or backup media vendor does the carrying, but the organization keeps accountability: it decides who releases media, what protection they travel with, and checks the records. Media moving within a cloud provider's facilities are the provider's concern. MP-5 is usually implemented by the system, with the vendor contracts sometimes held centrally.

**Common findings.**

- Backup tapes handed to the courier with no manifest or receipt, so a missing tape goes unnoticed.
- Unencrypted media shipped, or encrypted media shipped with the password in the box.
- No list of who may release media, so anyone in IT hands drives to a vendor.
- Drives sent for destruction with no serial number list, so the certificate cannot be matched to what was sent.
- A lost shipment never reported as an incident.

**Enhancements in the Moderate baseline.** None. [MP-5(3)](#mp-5.3) custodians is in no baseline; the chain-of-custody record the policy requires names who holds the media at each step, which covers much of it. MP-5(1), MP-5(2) and MP-5(4) are withdrawn.

**Federal systems** (as of October 2026). Under [32 CFR 2002.14(d)](https://www.ecfr.gov/current/title-32/section-2002.14), authorized holders sending controlled unclassified information (CUI) may use the United States Postal Service, any commercial delivery service, or interoffice or interagency mail; should use in-transit automated tracking and accountability tools; and must mark packages that contain CUI as 32 CFR Part 2002 and the CUI Executive Agent's guidance require (see 32 CFR 2002.20 and [MP-3](/controls/mp/mp-3/)). The MP-5 clause's federal block requires one of those services, with in-transit automated tracking, and marked packages, when shipping media containing CUI.
