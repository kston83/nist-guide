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
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | 5 (3 in a baseline) |

**Related controls:** [AC-3](/controls/ac/ac-3/), [AC-7](/controls/ac/ac-7/), [AU-11](/controls/au/au-11/), [MA-2](/controls/ma/ma-2/), [MA-3](/controls/ma/ma-3/), [MA-4](/controls/ma/ma-4/), [MA-5](/controls/ma/ma-5/), [PM-22](/controls/pm/pm-22/), [SI-12](/controls/si/si-12/), [SI-18](/controls/si/si-18/), [SI-19](/controls/si/si-19/), [SR-11](/controls/sr/sr-11/)

## Control statement

- **a.** Sanitize [Assignment: organization-defined organization-defined system media] prior to disposal, release out of organizational control, or release for reuse using [Assignment: organization-defined organization-defined sanitization techniques and procedures] ; and
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

Test sanitization equipment and procedures [Assignment: organization-defined organization-defined frequency] to ensure that the intended sanitization is being achieved.

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
<!-- nist:end -->

<!-- guidance: write below this line -->
