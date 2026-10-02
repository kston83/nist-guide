---
title: 'MP-1 Policy and Procedures'
description: 'NIST SP 800-53 Rev. 5 control MP-1, Policy and Procedures: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'MP-1 Policy and Procedures'
  order: 1
control:
  id: MP-1
  family: MP
  baselines: [Low, Moderate, High, Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | None |

**Related controls:** [PM-9](/controls/pm/pm-9/), [PS-8](/controls/ps/ps-8/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Develop, document, and disseminate to [Assignment: organization-defined personnel or roles]:
  - **1.** [Selection (one or more): organization-level; mission/business process-level; system-level] media protection policy that:
    - **(a)** Addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and
    - **(b)** Is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines; and
  - **2.** Procedures to facilitate the implementation of the media protection policy and the associated media protection controls;
- **b.** Designate an [Assignment: organization-defined official] to manage the development, documentation, and dissemination of the media protection policy and procedures; and
- **c.** Review and update the current media protection:
  - **1.** Policy [Assignment: organization-defined frequency] and following [Assignment: organization-defined events] ; and
  - **2.** Procedures [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].

<details>
<summary>NIST discussion</summary>

Media protection policy and procedures address the controls in the MP family that are implemented within systems and organizations. The risk management strategy is an important factor in establishing such policies and procedures. Policies and procedures contribute to security and privacy assurance. Therefore, it is important that security and privacy programs collaborate on the development of media protection policy and procedures. Security and privacy program policies and procedures at the organization level are preferable, in general, and may obviate the need for mission- or system-specific policies and procedures. The policy can be included as part of the general security and privacy policy or be represented by multiple policies that reflect the complex nature of organizations. Procedures can be established for security and privacy programs, for mission or business processes, and for systems, if needed. Procedures describe how the policies or controls are implemented and can be directed at the individual or role that is the object of the procedure. Procedures can be documented in system security and privacy plans or in one or more separate documents. Events that may precipitate an update to media protection policy and procedures include assessment or audit findings, security incidents or breaches, or changes in applicable laws, executive orders, directives, regulations, policies, standards, and guidelines. Simply restating controls does not constitute an organizational policy or procedure.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for MP-1</summary>

Determine if:

- **MP-01a.**
  - **MP-01a.[01]** a media protection policy is developed and documented;
  - **MP-01a.[02]** the media protection policy is disseminated to [Assignment: organization-defined personnel or roles];
  - **MP-01a.[03]** media protection procedures to facilitate the implementation of the media protection policy and associated media protection controls are developed and documented;
  - **MP-01a.[04]** the media protection procedures are disseminated to [Assignment: organization-defined personnel or roles];
  - **MP-01a.01**
    - **MP-01a.01(a)**
      - **MP-01a.01(a)[01]** the [Selection (one or more): organization-level; mission/business process-level; system-level] media protection policy addresses purpose;
      - **MP-01a.01(a)[02]** the [Selection (one or more): organization-level; mission/business process-level; system-level] media protection policy addresses scope;
      - **MP-01a.01(a)[03]** the [Selection (one or more): organization-level; mission/business process-level; system-level] media protection policy addresses roles;
      - **MP-01a.01(a)[04]** the [Selection (one or more): organization-level; mission/business process-level; system-level] media protection policy addresses responsibilities;
      - **MP-01a.01(a)[05]** the [Selection (one or more): organization-level; mission/business process-level; system-level] media protection policy addresses management commitment;
      - **MP-01a.01(a)[06]** the [Selection (one or more): organization-level; mission/business process-level; system-level] media protection policy addresses coordination among organizational entities;
      - **MP-01a.01(a)[07]** the [Selection (one or more): organization-level; mission/business process-level; system-level] media protection policy compliance;
    - **MP-01a.01(b)** the media protection policy is consistent with applicable laws, Executive Orders, directives, regulations, policies, standards, and guidelines;
- **MP-01b.** the [Assignment: organization-defined official] is designated to manage the development, documentation, and dissemination of the media protection policy and procedures.
- **MP-01c.**
  - **MP-01c.01**
    - **MP-01c.01[01]** the current media protection policy is reviewed and updated [Assignment: organization-defined frequency];
    - **MP-01c.01[02]** the current media protection policy is reviewed and updated following [Assignment: organization-defined events];
  - **MP-01c.02**
    - **MP-01c.02[01]** the current media protection procedures are reviewed and updated [Assignment: organization-defined frequency];
    - **MP-01c.02[02]** the current media protection procedures are reviewed and updated following [Assignment: organization-defined events].

**Examine:** Media protection policy and procedures; organizational risk management strategy; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with media protection responsibilities; organizational personnel with information security and privacy responsibilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

MP-1 asks for a written media protection policy, procedures that carry it out, an official who manages both, and a set review cycle. The [Media Protection policy template](/templates/policies/mp/) meets the policy half through the sections every family policy shares. The procedures are yours to write, and the policy names one of them itself: the media sanitization procedure that MP-6 requires.

**How the policy template meets each element.** The shared sections come before and after the policy statements, and each statement cites the MP-1 item it meets:

| MP-1 element | Where the policy template meets it |
| --- | --- |
| Policy at the selected level (a.1) | Scope: the policy applies at the level you select, to every system and every person with access |
| Purpose, scope, roles, responsibilities, management commitment, coordination and compliance (a.1(a)) | The Purpose, Scope, Roles and responsibilities, Management commitment, Coordination and Compliance sections, one for each |
| Consistent with applicable laws and guidance (a.1(b)) | Compliance: the first statement, where you list the laws, regulations and standards that apply; the federal block adds FISMA and OMB Circular A-130 |
| Procedures (a.2) | Procedures: the managing official ensures documented procedures exist |
| Dissemination of policy and procedures (a) | Dissemination: one statement for the policy and one for the procedures, each to the roles you name |
| Designated official (b) | Roles and responsibilities: the official who manages the policy and procedures |
| Review and update (c.1, c.2) | Review and update: a frequency and trigger events for the policy, and again for the procedures |

**Common implementations.** One organization-level policy, approved by a senior leader and published in the policy library. Procedures written for the work MP-2 to MP-7 describe:

- Granting and reviewing access to media libraries and storage areas, and to the keys that decrypt media (MP-2)
- Marking media and their containers with the organization's handling labels, and marking exempt media before they leave the data center (MP-3)
- Checking media in and out of the media library, keeping its inventory and reconciling it each quarter (MP-4)
- Packing, releasing, shipping and receiving media, and reporting a shipment that is lost or arrives opened (MP-5)
- The media sanitization procedure: the method, technique, tool and verification for each media type in use, following NIST SP 800-88 Rev. 2 (MP-6)
- Issuing, recording and recovering portable storage devices, and configuring endpoint device control (MP-7)

The [media sanitization record](/templates/forms/media-sanitization-record/) holds the sanitization procedure's table of methods by media type, and is the record that procedure leaves behind.

**Organization-defined parameters.** The shared sections leave these as fields to fill. Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Who receives the policy (a) | Everyone within its scope, through the policy library |
| Who receives the procedures (a) | The people who carry them out, and the system owners |
| Policy level (a.1) | Organization-level |
| Official who manages the policy and procedures (b) | The Chief Information Security Officer |
| Policy review frequency (c.1) | Annually |
| Events that trigger a policy review (c.1) | Assessment or audit findings, security incidents or breaches, and changes in applicable laws, executive orders, directives, regulations, policies, standards or guidelines |
| Procedure review frequency (c.2) | Annually |
| Events that trigger a procedure review (c.2) | The same events as the policy, and changes to the systems, tools or services the procedures describe |

The trigger events follow NIST's MP-1 discussion. For MP, the people who carry out the procedures are, for example, the system administrators and IT operations staff who handle drives and backup media, the staff who run the media library and ship media, the service desk that issues portable storage devices, the endpoint team that configures device control, and the staff or provider who sanitize and destroy media. The Chief Information Security Officer often delegates the day-to-day management to the head of IT operations. Typical procedure triggers for MP are a new media type or storage technology, a new sanitization tool or destruction provider, moving storage to a cloud service, where sanitization becomes cryptographic erase, and a new revision of NIST SP 800-88.

MP-1 is also in the Privacy baseline, so it applies to any system that processes personally identifiable information; the Privacy edition of the Media Protection policy carries the same shared sections. NIST's MP-1 discussion asks security and privacy programs to collaborate on the policy and procedures, and the shared Coordination section has the Chief Information Security Officer coordinate the policy with the privacy function before each approval. NIST SP 800-88 Rev. 2 gives the privacy officer the role of advising on the disposition of privacy information and the media that hold it (section 4.7.9).

**Evidence assessors ask for.**

- The approved policy, with the approver, the approval date and the version history
- The procedures, including the media sanitization procedure, and who owns each one
- The record naming the official who manages the policy and procedures
- Records showing dissemination, including to the staff who ship, store and sanitize media
- Evidence of the last review of the policy and of each procedure, with the changes made

**Inheritance.** MP-1 is usually a common control, provided once for the organization. A system inherits the organization's policy and records that in its [system security plan](/templates/plans/system-security-plan/). It adds its own procedures only where its media are handled differently, for example a system with its own tape library or a laboratory that sanitizes its own instruments' storage.

**Common findings.**

- A policy that restates the MP controls but has no procedures behind it. NIST's discussion of MP-1 says restating controls is not a policy or procedure.
- The policy or procedures not reviewed within the stated period.
- A policy that says media are sanitized, but no procedure that says how for each media type the organization uses.
- Procedures written for tapes and hard drives that do not cover solid state drives, mobile devices, printers and copiers, or cloud storage.

**Enhancements in the Moderate baseline.** MP-1 has no enhancements.
