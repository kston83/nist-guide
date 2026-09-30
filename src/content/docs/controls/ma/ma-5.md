---
title: 'MA-5 Maintenance Personnel'
description: 'NIST SP 800-53 Rev. 5 control MA-5, Maintenance Personnel: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'MA-5 Maintenance Personnel'
  order: 5
control:
  id: MA-5
  family: MA
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 5 (1 in a baseline) |

**Related controls:** [AC-2](/controls/ac/ac-2/), [AC-3](/controls/ac/ac-3/), [AC-5](/controls/ac/ac-5/), [AC-6](/controls/ac/ac-6/), [IA-2](/controls/ia/ia-2/), [IA-8](/controls/ia/ia-8/), [MA-4](/controls/ma/ma-4/), [MP-2](/controls/mp/mp-2/), [PE-2](/controls/pe/pe-2/), [PE-3](/controls/pe/pe-3/), [PS-7](/controls/ps/ps-7/), [RA-3](/controls/ra/ra-3/)

## Control statement

- **a.** Establish a process for maintenance personnel authorization and maintain a list of authorized maintenance organizations or personnel;
- **b.** Verify that non-escorted personnel performing maintenance on the system possess the required access authorizations; and
- **c.** Designate organizational personnel with required access authorizations and technical competence to supervise the maintenance activities of personnel who do not possess the required access authorizations.

<details>
<summary>NIST discussion</summary>

Maintenance personnel refers to individuals who perform hardware or software maintenance on organizational systems, while PE-2 addresses physical access for individuals whose maintenance duties place them within the physical protection perimeter of the systems. Technical competence of supervising individuals relates to the maintenance performed on the systems, while having required access authorizations refers to maintenance on and near the systems. Individuals not previously identified as authorized maintenance personnel—such as information technology manufacturers, vendors, systems integrators, and consultants—may require privileged access to organizational systems, such as when they are required to conduct maintenance activities with little or no notice. Based on organizational assessments of risk, organizations may issue temporary credentials to these individuals. Temporary credentials may be for one-time use or for very limited time periods.

</details>

## Control enhancements

<a id="ma-5.1"></a>

### MA-5(1) Individuals Without Appropriate Access

*Baselines: High*

- **(a)** Implement procedures for the use of maintenance personnel that lack appropriate security clearances or are not U.S. citizens, that include the following requirements:
  - **(1)** Maintenance personnel who do not have needed access authorizations, clearances, or formal access approvals are escorted and supervised during the performance of maintenance and diagnostic activities on the system by approved organizational personnel who are fully cleared, have appropriate access authorizations, and are technically qualified; and
  - **(2)** Prior to initiating maintenance or diagnostic activities by personnel who do not have needed access authorizations, clearances or formal access approvals, all volatile information storage components within the system are sanitized and all nonvolatile storage media are removed or physically disconnected from the system and secured; and
- **(b)** Develop and implement [Assignment: organization-defined alternate controls] in the event a system component cannot be sanitized, removed, or disconnected from the system.

<details>
<summary>Discussion and assessment objectives for MA-5(1)</summary>

Procedures for individuals who lack appropriate security clearances or who are not U.S. citizens are intended to deny visual and electronic access to classified or controlled unclassified information contained on organizational systems. Procedures for the use of maintenance personnel can be documented in security plans for the systems.

Determine if:

- **MA-05(01)(a)**
  - **MA-05(01)(a)(01)** procedures for the use of maintenance personnel who lack appropriate security clearances or are not U.S. citizens are implemented and include approved organizational personnel who are fully cleared, have appropriate access authorizations, and are technically qualified escorting and supervising maintenance personnel without the needed access authorization during the performance of maintenance and diagnostic activities;
  - **MA-05(01)(a)(02)** procedures for the use of maintenance personnel who lack appropriate security clearances or are not U.S. citizens are implemented and include all volatile information storage components within the system being sanitized and all non-volatile storage media being removed or physically disconnected from the system and secured prior to initiating maintenance or diagnostic activities;
- **MA-05(01)(b)** [Assignment: organization-defined alternate controls] are developed and implemented in the event that a system cannot be sanitized, removed, or disconnected from the system.

**Examine:** Maintenance policy; procedures addressing maintenance personnel; system media protection policy; physical and environmental protection policy; list of maintenance personnel requiring escort/supervision; maintenance records; access control records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; organizational personnel with personnel security responsibilities; organizational personnel with physical access control responsibilities; organizational personnel with information security responsibilities; organizational personnel responsible for media sanitization; system/network administrators.

**Test:** Organizational processes for managing maintenance personnel without appropriate access; mechanisms supporting and/or implementing alternative security safeguards; mechanisms supporting and/or implementing information storage component sanitization.

</details>

<a id="ma-5.2"></a>

### MA-5(2) Security Clearances for Classified Systems

*Baselines: Not in a baseline*

Verify that personnel performing maintenance and diagnostic activities on a system processing, storing, or transmitting classified information possess security clearances and formal access approvals for at least the highest classification level and for compartments of information on the system.

<details>
<summary>Discussion and assessment objectives for MA-5(2)</summary>

Personnel who conduct maintenance on organizational systems may be exposed to classified information during the course of their maintenance activities. To mitigate the inherent risk of such exposure, organizations use maintenance personnel that are cleared (i.e., possess security clearances) to the classification level of the information stored on the system.

Determine if:

- **MA-05(02)[01]** personnel performing maintenance and diagnostic activities on a system processing, storing, or transmitting classified information possess security clearances for at least the highest classification level and for compartments of information on the system;
- **MA-05(02)[02]** personnel performing maintenance and diagnostic activities on a system processing, storing, or transmitting classified information possess formal access approvals for at least the highest classification level and for compartments of information on the system.

**Examine:** Maintenance policy; procedures addressing maintenance personnel; personnel records; maintenance records; access control records; access credentials; access authorizations; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; organizational personnel with personnel security responsibilities; organizational personnel with physical access control responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for managing security clearances for maintenance personnel.

</details>

<a id="ma-5.3"></a>

### MA-5(3) Citizenship Requirements for Classified Systems

*Baselines: Not in a baseline*

Verify that personnel performing maintenance and diagnostic activities on a system processing, storing, or transmitting classified information are U.S. citizens.

<details>
<summary>Discussion and assessment objectives for MA-5(3)</summary>

Personnel who conduct maintenance on organizational systems may be exposed to classified information during the course of their maintenance activities. If access to classified information on organizational systems is restricted to U.S. citizens, the same restriction is applied to personnel performing maintenance on those systems.

Determine if personnel performing maintenance and diagnostic activities on a system processing, storing, or transmitting classified information are U.S. citizens.

**Examine:** Maintenance policy; procedures addressing maintenance personnel; personnel records; maintenance records; access control records; access credentials; access authorizations; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; organizational personnel with personnel security responsibilities; organizational personnel with information security responsibilities.

</details>

<a id="ma-5.4"></a>

### MA-5(4) Foreign Nationals

*Baselines: Not in a baseline*

Ensure that:

- **(a)** Foreign nationals with appropriate security clearances are used to conduct maintenance and diagnostic activities on classified systems only when the systems are jointly owned and operated by the United States and foreign allied governments, or owned and operated solely by foreign allied governments; and
- **(b)** Approvals, consents, and detailed operational conditions regarding the use of foreign nationals to conduct maintenance and diagnostic activities on classified systems are fully documented within Memoranda of Agreements.

<details>
<summary>Discussion and assessment objectives for MA-5(4)</summary>

Personnel who conduct maintenance and diagnostic activities on organizational systems may be exposed to classified information. If non-U.S. citizens are permitted to perform maintenance and diagnostics activities on classified systems, then additional vetting is required to ensure agreements and restrictions are not being violated.

Determine if:

- **MA-05(04)(a)** foreign nationals with appropriate security clearances are used to conduct maintenance and diagnostic activities on classified systems only when the systems are jointly owned and operated by the United States and foreign allied governments or owned and operated solely by foreign allied governments;
- **MA-05(04)(b)**
  - **MA-05(04)(b)[01]** approvals regarding the use of foreign nationals to conduct maintenance and diagnostic activities on classified systems are fully documented within Memoranda of Agreements;
  - **MA-05(04)(b)[02]** consents regarding the use of foreign nationals to conduct maintenance and diagnostic activities on classified systems are fully documented within Memoranda of Agreements;
  - **MA-05(04)(b)[03]** detailed operational conditions regarding the use of foreign nationals to conduct maintenance and diagnostic activities on classified systems are fully documented within Memoranda of Agreements.

**Examine:** Maintenance policy; procedures addressing maintenance personnel; system media protection policy; access control policy and procedures; physical and environmental protection policy and procedures; memorandum of agreement; maintenance records; access control records; access credentials; access authorizations; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities, organizational personnel with personnel security responsibilities; organizational personnel managing memoranda of agreements; organizational personnel with information security responsibilities.

**Test:** Organizational processes for managing foreign national maintenance personnel.

</details>

<a id="ma-5.5"></a>

### MA-5(5) Non-system Maintenance

*Baselines: Not in a baseline*

Ensure that non-escorted personnel performing maintenance activities not directly associated with the system but in the physical proximity of the system, have required access authorizations.

<details>
<summary>Discussion and assessment objectives for MA-5(5)</summary>

Personnel who perform maintenance activities in other capacities not directly related to the system include physical plant personnel and custodial personnel.

Determine if non-escorted personnel performing maintenance activities not directly associated with the system but in the physical proximity of the system have required access authorizations.

**Examine:** Maintenance policy; procedures addressing maintenance personnel; system media protection policy; access control policy and procedures; physical and environmental protection policy and procedures; maintenance records; access control records; access authorizations; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; organizational personnel with personnel security responsibilities; organizational personnel with physical access control responsibilities; organizational personnel with information security responsibilities.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for MA-5</summary>

Determine if:

- **MA-05a.**
  - **MA-05a.[01]** a process for maintenance personnel authorization is established;
  - **MA-05a.[02]** a list of authorized maintenance organizations or personnel is maintained;
- **MA-05b.** non-escorted personnel performing maintenance on the system possess the required access authorizations;
- **MA-05c.** organizational personnel with required access authorizations and technical competence is/are designated to supervise the maintenance activities of personnel who do not possess the required access authorizations.

**Examine:** Maintenance policy; procedures addressing maintenance personnel; service provider contracts; service-level agreements; list of authorized personnel; maintenance records; access control records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for authorizing and managing maintenance personnel; mechanisms supporting and/or implementing authorization of maintenance personnel.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

MA-5 asks you to authorize maintenance personnel and keep a list of them, to verify that anyone doing maintenance unescorted has the required access authorizations, and to have qualified, authorized staff supervise those who do not. It covers the people who maintain the system's hardware and software. Their physical access to the facility is [PE-2](/controls/pe/pe-2/), as NIST's MA-5 discussion notes.

**Common implementations.** The system owner approves each maintenance organization and each person before they work on the system, and keeps the authorized list in the [maintenance log](/templates/forms/maintenance-log/). Unescorted maintenance personnel need the same access authorizations as anyone with that access: screening ([PS-3](/controls/ps/ps-3/)) and a signed [access agreement](/templates/forms/access-agreement/) ([PS-6](/controls/ps/ps-6/)). Those with system accounts also sign the [Rules of Behavior](/templates/forms/rules-of-behavior/) ([PL-4](/controls/pl/pl-4/)). For a vendor, the external personnel requirements of the [Personnel Security Policy](/templates/policies/ps/) apply ([PS-7](/controls/ps/ps-7/)), including notice when someone leaves.

Anyone not on the list, or without the required authorizations, works only under a designated supervisor. The supervisor has the required access authorizations and is technically competent in the maintenance being done, which NIST's discussion distinguishes: competence relates to the maintenance, and authorizations to working on and near the system. The supervisor stays for the whole activity, or supervises the remote session, and is recorded as the escort.

NIST's discussion recognizes that manufacturers, vendors, integrators and consultants may need privileged access with little or no notice, and lets organizations issue temporary credentials, based on their risk assessment, for one use or a very limited time. The policy has the account manager issue them for the approved maintenance period only and disable them when it ends.

**Organization-defined parameters.** Typical value, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Alternate controls when a component cannot be sanitized, removed or disconnected (MA-5(1)(b), High) | Continuous supervision by an escort who has the required access authorizations, is technically qualified and can end the activity at any time; screens, ports and data on the component kept out of the maintenance person's view and reach; and review of the audit records of the activity afterward |

MA-5 itself has no parameters. In the [Maintenance policy](/templates/policies/ma/), the system owner reviews the authorized list at least quarterly, and maintenance contracts require the provider to report within 24 hours when a person on the list leaves or no longer supports the organization, the same notice time as for other external personnel (PS-7).

**Evidence assessors ask for.**

- The documented process for authorizing maintenance personnel
- The current authorized list, with approvals and the last quarterly review
- For a sample of people on the list, their screening and signed access agreement
- For a sample of maintenance records, the performer checked against the list, and the escort named where the performer was not authorized
- The designation of supervisors for unauthorized maintenance personnel
- Temporary credentials issued for maintenance, with their validity and when they were disabled
- Maintenance contract terms requiring notice of departures

**Inheritance.** The personnel screening and access agreement processes are usually common controls, and a facilities or IT operations group may keep an authorized list for shared equipment. The system owns authorizing the people who maintain its components and supervising those without the required access, so MA-5 is usually a hybrid control. For a cloud service, the provider's personnel controls are covered by its authorization or attestation.

**Common findings.**

- No authorized list, or one that names a vendor company but not the individual technicians.
- Vendor technicians working unescorted with no record that anyone checked their authorizations.
- An escort who is not technically able to tell what the technician is doing.
- People who left the vendor still on the list, and still holding accounts.
- Temporary maintenance credentials that were never disabled.

**Enhancements in the Moderate baseline.** MA-5 has no enhancements in the Moderate baseline. High adds [MA-5(1)](#ma-5.1) individuals without appropriate access. [MA-5(2)](#ma-5.2) to [MA-5(5)](#ma-5.5) are in no baseline; MA-5(2) to MA-5(4) are for systems that process classified information.

- **MA-5(1)** sets procedures for maintenance personnel who lack the security clearances, citizenship or formal access approvals the system's information requires. They work escorted and supervised by fully cleared, technically qualified staff; volatile storage is sanitized and nonvolatile media are removed or disconnected and secured beforehand; and alternate controls apply where a component cannot be sanitized, removed or disconnected. NIST's discussion says the aim is to deny visual and electronic access to classified or controlled unclassified information, and that the procedures can be documented in the security plan. Outside government, the MA-5(1) clause applies them to personnel who lack the approvals the system's information requires, such as for export-controlled information.
