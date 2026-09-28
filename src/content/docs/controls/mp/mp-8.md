---
title: 'MP-8 Media Downgrading'
description: 'NIST SP 800-53 Rev. 5 control MP-8, Media Downgrading: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'MP-8 Media Downgrading'
  order: 8
control:
  id: MP-8
  family: MP
  baselines: []
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Not in a baseline | Organization | 4 (0 in a baseline) |

## Control statement

- **a.** Establish [Assignment: organization-defined system media downgrading process] that includes employing downgrading mechanisms with strength and integrity commensurate with the security category or classification of the information;
- **b.** Verify that the system media downgrading process is commensurate with the security category and/or classification level of the information to be removed and the access authorizations of the potential recipients of the downgraded information;
- **c.** Identify [Assignment: organization-defined system media requiring downgrading] ; and
- **d.** Downgrade the identified system media using the established process.

<details>
<summary>NIST discussion</summary>

Media downgrading applies to digital and non-digital media subject to release outside of the organization, whether the media is considered removable or not. When applied to system media, the downgrading process removes information from the media, typically by security category or classification level, such that the information cannot be retrieved or reconstructed. Downgrading of media includes redacting information to enable wider release and distribution. Downgrading ensures that empty space on the media is devoid of information.

</details>

## Control enhancements

<a id="mp-8.1"></a>

### MP-8(1) Documentation of Process

*Baselines: Not in a baseline*

Document system media downgrading actions.

<details>
<summary>Discussion and assessment objectives for MP-8(1)</summary>

Organizations can document the media downgrading process by providing information, such as the downgrading technique employed, the identification number of the downgraded media, and the identity of the individual that authorized and/or performed the downgrading action.

Determine if system media downgrading actions are documented.

**Examine:** System media protection policy; procedures addressing media downgrading; system categorization documentation; list of media requiring downgrading; records of media downgrading; audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system media downgrading responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for media downgrading; mechanisms supporting and/or implementing media downgrading.

</details>

<a id="mp-8.2"></a>

### MP-8(2) Equipment Testing

*Baselines: Not in a baseline*

Test downgrading equipment and procedures [Assignment: organization-defined frequency] to ensure that downgrading actions are being achieved.

<details>
<summary>Discussion and assessment objectives for MP-8(2)</summary>

None.

Determine if:

- **MP-08(02)[01]** downgrading equipment is tested [Assignment: organization-defined frequency] to ensure that downgrading actions are being achieved;
- **MP-08(02)[02]** downgrading procedures are tested [Assignment: organization-defined frequency] to ensure that downgrading actions are being achieved.

**Examine:** System media protection policy; procedures addressing media downgrading; procedures addressing testing of media downgrading equipment; results of downgrading equipment and procedures testing; records of media downgrading; audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system media downgrading responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for media downgrading; mechanisms supporting and/or implementing media downgrading.

</details>

<a id="mp-8.3"></a>

### MP-8(3) Controlled Unclassified Information

*Baselines: Not in a baseline*

Downgrade system media containing controlled unclassified information prior to public release.

<details>
<summary>Discussion and assessment objectives for MP-8(3)</summary>

The downgrading of controlled unclassified information uses approved sanitization tools, techniques, and procedures.

Determine if:

- **MP-08(03)[01]** system media containing controlled unclassified information is identified;
- **MP-08(03)[02]** system media containing controlled unclassified information is downgraded prior to public release.

**Examine:** System media protection policy; access authorization policy; procedures addressing downgrading of media containing CUI; applicable federal and organizational standards and policies regarding protection of CUI; media downgrading records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system media downgrading responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for media downgrading; mechanisms supporting and/or implementing media downgrading.

</details>

<a id="mp-8.4"></a>

### MP-8(4) Classified Information

*Baselines: Not in a baseline*

Downgrade system media containing classified information prior to release to individuals without required access authorizations.

<details>
<summary>Discussion and assessment objectives for MP-8(4)</summary>

Downgrading of classified information uses approved sanitization tools, techniques, and procedures to transfer information confirmed to be unclassified from classified systems to unclassified media.

Determine if:

- **MP-08(04)[01]** system media containing classified information is identified;
- **MP-08(04)[02]** system media containing classified information is downgraded prior to release to individuals without required access authorizations.

**Examine:** System media protection policy; access authorization policy; procedures addressing downgrading of media containing classified information; procedures addressing handling of classified information; NSA standards and policies regarding protection of classified information; media downgrading records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system media downgrading responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for media downgrading; mechanisms supporting and/or implementing media downgrading.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for MP-8</summary>

Determine if:

- **MP-08a.**
  - **MP-08a.[01]** a [Assignment: organization-defined system media downgrading process] is established;
  - **MP-08a.[02]** the [Assignment: organization-defined system media downgrading process] includes employing downgrading mechanisms with strength and integrity commensurate with the security category or classification of the information;
- **MP-08b.**
  - **MP-08b.[01]** there is verification that the system media downgrading process is commensurate with the security category and/or classification level of the information to be removed;
  - **MP-08b.[02]** there is verification that the system media downgrading process is commensurate with the access authorizations of the potential recipients of the downgraded information;
- **MP-08c.** [Assignment: organization-defined system media requiring downgrading] is identified;
- **MP-08d.** the identified system media is downgraded using the [Assignment: organization-defined system media downgrading process].

**Examine:** System media protection policy; procedures addressing media downgrading; system categorization documentation; list of media requiring downgrading; records of media downgrading; audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system media downgrading responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for media downgrading; mechanisms supporting and/or implementing media downgrading.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
