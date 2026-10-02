---
title: 'MP-6 Media Sanitization'
description: 'NIST SP 800-53 Rev. 5 control MP-6, Media Sanitization: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'MP-6 Media Sanitization'
  order: 6
control:
  id: MP-6
  family: MP
  baselines: [Low, Moderate, High, Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | 5 (3 in a baseline) |

**Related controls:** [AC-3](/controls/ac/ac-3/), [AC-7](/controls/ac/ac-7/), [AU-11](/controls/au/au-11/), [MA-2](/controls/ma/ma-2/), [MA-3](/controls/ma/ma-3/), [MA-4](/controls/ma/ma-4/), [MA-5](/controls/ma/ma-5/), [PM-22](/controls/pm/pm-22/), [SI-12](/controls/si/si-12/), [SI-18](/controls/si/si-18/), [SI-19](/controls/si/si-19/), [SR-11](/controls/sr/sr-11/)

## Control statement

- **a.** Sanitize [Assignment: organization-defined system media] prior to disposal, release out of organizational control, or release for reuse using [Assignment: organization-defined sanitization techniques and procedures] ; and
- **b.** Employ sanitization mechanisms with the strength and integrity commensurate with the security category or classification of the information.

<details>
<summary>NIST discussion</summary>

Media sanitization applies to all digital and non-digital system media subject to disposal or reuse, whether or not the media is considered removable. Examples include digital media in scanners, copiers, printers, notebook computers, workstations, network components, mobile devices, and non-digital media (e.g., paper and microfilm). The sanitization process removes information from system media such that the information cannot be retrieved or reconstructed. Sanitization techniques—including clearing, purging, cryptographic erase, de-identification of personally identifiable information, and destruction—prevent the disclosure of information to unauthorized individuals when such media is reused or released for disposal. Organizations determine the appropriate sanitization methods, recognizing that destruction is sometimes necessary when other methods cannot be applied to media requiring sanitization. Organizations use discretion on the employment of approved sanitization techniques and procedures for media that contains information deemed to be in the public domain or publicly releasable or information deemed to have no adverse impact on organizations or individuals if released for reuse or disposal. Sanitization of non-digital media includes destruction, removing a classified appendix from an otherwise unclassified document, or redacting selected sections or words from a document by obscuring the redacted sections or words in a manner equivalent in effectiveness to removing them from the document. NSA standards and policies control the sanitization process for media that contains classified information. NARA policies control the sanitization process for controlled unclassified information.

</details>

## Control enhancements

<a id="mp-6.1"></a>

### MP-6(1) Review, Approve, Track, Document, and Verify

*Baselines: High*

Review, approve, track, document, and verify media sanitization and disposal actions.

<details>
<summary>Discussion and assessment objectives for MP-6(1)</summary>

Organizations review and approve media to be sanitized to ensure compliance with records retention policies. Tracking and documenting actions include listing personnel who reviewed and approved sanitization and disposal actions, types of media sanitized, files stored on the media, sanitization methods used, date and time of the sanitization actions, personnel who performed the sanitization, verification actions taken and personnel who performed the verification, and the disposal actions taken. Organizations verify that the sanitization of the media was effective prior to disposal.

Determine if:

- **MP-06(01)[01]** media sanitization and disposal actions are reviewed;
- **MP-06(01)[02]** media sanitization and disposal actions are approved;
- **MP-06(01)[03]** media sanitization and disposal actions are tracked;
- **MP-06(01)[04]** media sanitization and disposal actions are documented;
- **MP-06(01)[05]** media sanitization and disposal actions are verified.

**Examine:** System media protection policy; procedures addressing media sanitization and disposal; records retention and disposition policy; records retention and disposition procedures; media sanitization and disposal records; review records for media sanitization and disposal actions; approvals for media sanitization and disposal actions; tracking records; verification records; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with system media sanitization and disposal responsibilities; organizational personnel with records retention and disposition responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators.

**Test:** Organizational processes for media sanitization; mechanisms supporting and/or implementing media sanitization; mechanisms supporting and/or implementing verification of media sanitization.

</details>

<a id="mp-6.2"></a>

### MP-6(2) Equipment Testing

*Baselines: High*

Test sanitization equipment and procedures [Assignment: organization-defined frequency] to ensure that the intended sanitization is being achieved.

<details>
<summary>Discussion and assessment objectives for MP-6(2)</summary>

Testing of sanitization equipment and procedures may be conducted by qualified and authorized external entities, including federal agencies or external service providers.

Determine if:

- **MP-06(02)[01]** sanitization equipment is tested [Assignment: organization-defined frequency] to ensure that the intended sanitization is being achieved;
- **MP-06(02)[02]** sanitization procedures are tested [Assignment: organization-defined frequency] to ensure that the intended sanitization is being achieved.

**Examine:** System media protection policy; procedures addressing media sanitization and disposal; procedures addressing testing of media sanitization equipment; results of media sanitization equipment and procedures testing; system audit records; records retention and disposition policy; records retention and disposition procedures; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with system media sanitization responsibilities; organizational personnel with records retention and disposition responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for media sanitization; automated mechanisms supporting and/or implementing media sanitization; automated mechanisms supporting and/or implementing media sanitization procedures; sanitization equipment.

</details>

<a id="mp-6.3"></a>

### MP-6(3) Nondestructive Techniques

*Baselines: High*

Apply nondestructive sanitization techniques to portable storage devices prior to connecting such devices to the system under the following circumstances: [Assignment: organization-defined circumstances].

<details>
<summary>Discussion and assessment objectives for MP-6(3)</summary>

Portable storage devices include external or removable hard disk drives (e.g., solid state, magnetic), optical discs, magnetic or optical tapes, flash memory devices, flash memory cards, and other external or removable disks. Portable storage devices can be obtained from untrustworthy sources and contain malicious code that can be inserted into or transferred to organizational systems through USB ports or other entry portals. While scanning storage devices is recommended, sanitization provides additional assurance that such devices are free of malicious code. Organizations consider nondestructive sanitization of portable storage devices when the devices are purchased from manufacturers or vendors prior to initial use or when organizations cannot maintain a positive chain of custody for the devices.

Determine if non-destructive sanitization techniques are applied to portable storage devices prior to connecting such devices to the system under [Assignment: organization-defined circumstances].

**Examine:** System media protection policy; procedures addressing media sanitization and disposal; information on portable storage devices for the system; list of circumstances requiring sanitization of portable storage devices; media sanitization records; audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system media sanitization responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for media sanitization of portable storage devices; mechanisms supporting and/or implementing media sanitization.

</details>

<a id="mp-6.7"></a>

### MP-6(7) Dual Authorization

*Baselines: Not in a baseline*

Enforce dual authorization for the sanitization of [Assignment: organization-defined system media].

<details>
<summary>Discussion and assessment objectives for MP-6(7)</summary>

Organizations employ dual authorization to help ensure that system media sanitization cannot occur unless two technically qualified individuals conduct the designated task. Individuals who sanitize system media possess sufficient skills and expertise to determine if the proposed sanitization reflects applicable federal and organizational standards, policies, and procedures. Dual authorization also helps to ensure that sanitization occurs as intended, protecting against errors and false claims of having performed the sanitization actions. Dual authorization may also be known as two-person control. To reduce the risk of collusion, organizations consider rotating dual authorization duties to other individuals.

Determine if dual authorization for sanitization of [Assignment: organization-defined system media] is enforced.

**Examine:** System media protection policy; procedures addressing media sanitization and disposal; dual authorization policy and procedures; list of system media requiring dual authorization for sanitization; authorization records; media sanitization records; audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system media sanitization responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes requiring dual authorization for media sanitization; mechanisms supporting and/or implementing media sanitization; mechanisms supporting and/or implementing dual authorization.

</details>

<a id="mp-6.8"></a>

### MP-6(8) Remote Purging or Wiping of Information

*Baselines: Not in a baseline*

Provide the capability to purge or wipe information from [Assignment: organization-defined systems or system components] [Selection: remotely; under [Assignment: organization-defined conditions] ].

<details>
<summary>Discussion and assessment objectives for MP-6(8)</summary>

Remote purging or wiping of information protects information on organizational systems and system components if systems or components are obtained by unauthorized individuals. Remote purge or wipe commands require strong authentication to help mitigate the risk of unauthorized individuals purging or wiping the system, component, or device. The purge or wipe function can be implemented in a variety of ways, including by overwriting data or information multiple times or by destroying the key necessary to decrypt encrypted data.

Determine if the capability to purge or wipe information from [Assignment: organization-defined systems or system components] [Selection: remotely; under [Assignment: organization-defined conditions] ] is provided.

**Examine:** System media protection policy; procedures addressing media sanitization and disposal; system design documentation; system configuration settings and associated documentation; authorization records; media sanitization records; audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system media sanitization responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for purging/wiping media; mechanisms supporting and/or implementing purge/wipe capabilities.

</details>

*Withdrawn enhancements: MP-6(4), MP-6(5), MP-6(6).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for MP-6</summary>

Determine if:

- **MP-06a.**
  - **MP-06a.[01]** [Assignment: organization-defined system media] is sanitized using [Assignment: organization-defined sanitization techniques and procedures] prior to disposal;
  - **MP-06a.[02]** [Assignment: organization-defined system media] is sanitized using [Assignment: organization-defined sanitization techniques and procedures] prior to release from organizational control;
  - **MP-06a.[03]** [Assignment: organization-defined system media] is sanitized using [Assignment: organization-defined sanitization techniques and procedures] prior to release for reuse;
- **MP-06b.** sanitization mechanisms with strength and integrity commensurate with the security category or classification of the information are employed.

**Examine:** System media protection policy; procedures addressing media sanitization and disposal; applicable federal standards and policies addressing media sanitization policy; media sanitization records; system audit records; system design documentation; records retention and disposition policy; records retention and disposition procedures; system configuration settings and associated documentation; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with media sanitization responsibilities; organizational personnel with records retention and disposition responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators.

**Test:** Organizational processes for media sanitization; mechanisms supporting and/or implementing media sanitization.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

MP-6 asks you to sanitize media before they are disposed of, released out of organizational control or released for reuse, with mechanisms whose strength matches the security category of the information. NIST's MP-6 discussion applies it to all digital and non-digital media, removable or not, and names the storage in scanners, copiers, printers, notebook computers, workstations, network components and mobile devices. Its techniques include clearing, purging, cryptographic erase, de-identification of personally identifiable information and destruction.

[NIST SP 800-88 Rev. 2](https://csrc.nist.gov/pubs/sp/800/88/r2/final), Guidelines for Media Sanitization (September 2025, final; as of October 2026), is the reference. It defines three methods (section 3.1):

- **Clear:** logical techniques that protect against simple, non-invasive recovery through the normal interface, such as overwriting or a factory reset. Not for hard copy.
- **Purge:** techniques that make recovery infeasible even with state-of-the-art laboratory techniques, while leaving the media potentially reusable, such as a drive's dedicated sanitize command, block erase or cryptographic erase. SP 800-88 says to use purge instead of clear when possible.
- **Destroy:** recovery infeasible and the media unusable, by disintegration, incineration, melting, pulverizing or shredding.

The choice rests on the confidentiality of the information, not the type of media (section 4.3); the media type then decides the technique, for which SP 800-88 points to the IEEE 2883 series. For moderate-sensitivity information, the owner may accept the risk of clear. SP 800-88 also warns that shredding and pulverizing storage devices should be avoided for anything but the lowest security categories (section 3.1.3), and that degaussing does not work on flash storage (section 3.1.2). NIST's [frequently asked questions](https://csrc.nist.gov/files/pubs/sp/800/88/r2/final/docs/sp800-88r2-faq.pdf) on Rev. 2 (July 16, 2026) add that multi-pass overwriting is unnecessary, that degaussing is a purge technique for magnetic media and not a destroy technique, and that incineration or melting should be used for solid state drives holding moderate or high information.

Cryptographic erase sanitizes by destroying the keys that encrypt the data. It is fast, and for cloud and other virtual storage it may be the only purge option (section 3.1.2), but it depends on conditions in section 3.2: strong enough cryptography, no sensitive data written in plaintext before encryption began, and the keys themselves sanitized. Section 4.3.4 explains when media are out of organizational control: media exchanged under warranty and not returned are; media sent, securely transported, to a maintenance provider whose contract protects the information may still be under control.

**Common implementations.** A media sanitization procedure, held in section 2 of the [media sanitization record](/templates/forms/media-sanitization-record/), that sets the method, technique, tool and verification for each media type in use. Typical entries: laptop and workstation solid state drives purged with the drive's sanitize command or cryptographic erase, then destroyed by a provider at disposal; mobile devices erased through device management; printers and copiers sanitized with the manufacturer's function, or their storage removed and destroyed, before a lease return; backup tapes destroyed by a provider; cloud storage sanitized by cryptographic erase, destroying the customer-managed keys under the [encryption and key management standard](/templates/standards/encryption-and-key-management-standard/); and paper cross-cut shredded or incinerated. Each item gets a row in the record when it is removed from service, and the row is closed when its sanitization is verified and its disposition recorded. An outside destruction provider works under a contract that sets the method and requires a certificate listing each item by serial number.

**Organization-defined parameters.** Typical values, from the [Media Protection policy](/templates/policies/mp/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Media sanitized before disposal (a) | All digital and non-digital system media, including the storage in workstations, laptops, servers, network devices, mobile devices, printers, copiers and scanners |
| Media sanitized before release out of organizational control (a) | All digital and non-digital system media, including media returned to a lessor or vendor, exchanged under warranty, or sent off site for repair |
| Media sanitized before release for reuse (a) | All digital system media reissued to another user, system or part of the organization |
| Techniques and procedures before disposal (a) | Purge or destroy for digital media, and destruction by shredding or incineration for paper and other hard copy, as the media sanitization procedure sets out following NIST SP 800-88 Rev. 2 |
| Techniques and procedures before release out of organizational control (a) | Purge, including cryptographic erase where its conditions are met, as the media sanitization procedure sets out following NIST SP 800-88 Rev. 2; media that cannot be purged and verified are destroyed, not released |
| Techniques and procedures before release for reuse (a) | Clear for reuse within the same system or by users with the same access authorizations, and purge for other reuse, as the media sanitization procedure sets out following NIST SP 800-88 Rev. 2 |
| Frequency to test sanitization equipment (MP-6(2), High) | At least annually, and after the equipment is repaired, relocated or updated |
| Frequency to test sanitization procedures (MP-6(2), High) | At least annually, and when a new media type, tool or sanitization provider is introduced |
| Circumstances requiring nondestructive sanitization of portable storage devices (MP-6(3), High) | Before first use of a device newly purchased or received from outside the organization, and whenever the organization cannot maintain a positive chain of custody for the device |

The policy adds the rules that make MP-6b testable: clear only for media that stay under organizational control and only for low-impact information, reuse by users with the same access, or moderate-impact information whose residual risk the system owner accepts in writing; storage devices with moderate- or high-impact information purged, or destroyed by disintegration, incineration or melting, rather than only shredded; and cryptographic erase only under SP 800-88 section 3.2's conditions. Before sanitizing, the system owner checks that no records retention requirement or legal hold still applies ([SI-12](/controls/si/si-12/)). The values agree with the [Maintenance policy](/templates/policies/ma/): equipment leaving for repair is sanitized first ([MA-2](/controls/ma/ma-2/)), and a failed drive that cannot be sanitized stays with the organization and is destroyed.

MP-6 is also in the Privacy baseline, so it applies to any system that processes personally identifiable information. SP 800-88 Rev. 2 gives the privacy officer the role of advising on the disposition of privacy information and the media that hold it (section 4.7.9), and the records management officer the role of advising on retention so that sanitization does not destroy records that should be kept (section 4.7.8).

**Evidence assessors ask for.**

- The media sanitization procedure, with the method, technique and verification for each media type
- The media sanitization record for a period
- A sample of assets recorded as disposed of, returned or reissued in the property or asset system, traced to their rows in the record; this is the test that shows every item, not only the recorded ones, was sanitized
- Destruction provider contracts and certificates, matched to the record by serial number
- Verification evidence, such as tool completion reports or inspection of destruction remnants
- For cryptographic erase, how each media type meets the section 3.2 conditions, and the key destruction records
- Lease return records for printers and copiers, showing their storage was sanitized

**Inheritance.** For cloud services, the provider sanitizes and destroys its physical media, and its authorization package or attestation covers MP-6 for them; the customer sanitizes its own logical storage, usually by deleting it and destroying the keys, as the [external service review](/templates/forms/external-service-review/) should record. On premises, a central IT asset disposition team or a contracted provider is often a common control. The system still owns identifying its media and getting each item into the process, so MP-6 is usually a hybrid control.

**Common findings.**

- Equipment recorded as disposed of with no sanitization record. SP 800-88 section 4.6 notes that records kept only at the end show that the recorded items were sanitized, not that all were; track media from when they enter service.
- Multifunction printers and copiers returned at lease end with their internal storage intact.
- Overwriting used on solid state drives, where wear leveling and spare cells leave data the overwrite cannot reach (section 3.1.1).
- Solid state drives degaussed, which completes without sanitizing anything (section 4.5.2).
- Provider certificates that give a weight or a count of drives instead of serial numbers.
- Failed drives sent back under warranty without sanitization.
- No verification recorded, or verification that is only a signature.

**Enhancements in the Moderate baseline.** MP-6 has no enhancements in the Moderate baseline. High adds [MP-6(1)](#mp-6.1) review, approve, track, document and verify, [MP-6(2)](#mp-6.2) equipment testing and [MP-6(3)](#mp-6.3) nondestructive techniques. [MP-6(7)](#mp-6.7) dual authorization and [MP-6(8)](#mp-6.8) remote purging or wiping of information are in no baseline; MP-6(8) is the remote wipe that mobile device management provides. MP-6(4), MP-6(5) and MP-6(6) are withdrawn.

- **MP-6(1)** has each sanitization and disposal action reviewed, approved, tracked, documented and verified. NIST's discussion has the review confirm records retention requirements are met, and lists what to document: who reviewed and approved the action, the types of media, the files stored on them, the method, the date and time, who sanitized them, the verification and who did it, and the disposal action. SP 800-88 section 4.5 separates verification (checking the technique completed, by inspecting destruction remnants or the tool's completion status) from validation (deciding whether the result is acceptable, or repeating with a different technique or a stronger method). The media sanitization record holds every field, and the system owner reviews it each quarter against the [component inventory](/templates/forms/component-inventory/) and the [maintenance log](/templates/forms/maintenance-log/).
- **MP-6(2)** tests sanitization equipment and procedures to show the intended sanitization is achieved. NIST's discussion allows qualified and authorized external entities to do the testing. Typical tests: a degausser's field strength against the coercivity of the media it is used on, a shredder's output against the particle size the procedure sets, and a sample of cleared or purged media read back with a forensic tool. Equipment that fails is taken out of use, and media it processed since its last passing test are sanitized again. SP 800-88 section 4.5.2 lists improperly calibrated equipment among the reasons a sanitization may not be effective.
- **MP-6(3)** sanitizes portable storage devices with a nondestructive technique before they are connected, in the circumstances in the table. NIST's discussion explains that devices from untrustworthy sources can carry malicious code, and that sanitization gives more assurance than scanning alone; the policy also has them scanned ([SI-3](/controls/si/si-3/)). Record each one in the media sanitization record with the reason "reuse".

**Federal systems** (as of October 2026). NIST's MP-6 discussion says NARA policies control sanitization for controlled unclassified information (CUI), and NSA standards and policies for classified information. Under [32 CFR 2002.14(f)](https://www.ecfr.gov/current/title-32/section-2002.14), authorized holders may destroy CUI when the agency no longer needs it and records disposition schedules published or approved by NARA allow. Agencies destroying CUI, including in electronic form, must make it unreadable, indecipherable and irrecoverable, using any destruction method specifically required by law, regulation or Government-wide policy for that CUI; otherwise, the destruction guidance in NIST SP 800-53 and SP 800-88, or a method approved for classified national security information under 32 CFR 2001.47. Under 2002.14(e)(2), printers, copiers, scanners and fax machines used to reproduce CUI must not retain data, or the agency must sanitize them in accordance with NIST SP 800-53. Under 2002.14(g), CUI Basic is categorized at no less than the moderate confidentiality impact level, so media holding it are treated at least as moderate-impact information when choosing the method under MP-6b. SP 800-88 Rev. 2 section 3.2 states that federal agencies must use encryption modules validated to the current FIPS 140 standard to have assurance in cryptographic erase on self-encrypting drives. The MP-6 clause's federal block and the media sanitization record's federal section carry these requirements.
