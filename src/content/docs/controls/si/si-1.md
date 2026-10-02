---
title: 'SI-1 Policy and Procedures'
description: 'NIST SP 800-53 Rev. 5 control SI-1, Policy and Procedures: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SI-1 Policy and Procedures'
  order: 1
control:
  id: SI-1
  family: SI
  baselines: [Low, Moderate, High, Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | None |

**Related controls:** [PM-9](/controls/pm/pm-9/), [PS-8](/controls/ps/ps-8/), [SA-8](/controls/sa/sa-8/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Develop, document, and disseminate to [Assignment: organization-defined personnel or roles]:
  - **1.** [Selection (one or more): organization-level; mission/business process-level; system-level] system and information integrity policy that:
    - **(a)** Addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and
    - **(b)** Is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines; and
  - **2.** Procedures to facilitate the implementation of the system and information integrity policy and the associated system and information integrity controls;
- **b.** Designate an [Assignment: organization-defined official] to manage the development, documentation, and dissemination of the system and information integrity policy and procedures; and
- **c.** Review and update the current system and information integrity:
  - **1.** Policy [Assignment: organization-defined frequency] and following [Assignment: organization-defined events] ; and
  - **2.** Procedures [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].

<details>
<summary>NIST discussion</summary>

System and information integrity policy and procedures address the controls in the SI family that are implemented within systems and organizations. The risk management strategy is an important factor in establishing such policies and procedures. Policies and procedures contribute to security and privacy assurance. Therefore, it is important that security and privacy programs collaborate on the development of system and information integrity policy and procedures. Security and privacy program policies and procedures at the organization level are preferable, in general, and may obviate the need for mission- or system-specific policies and procedures. The policy can be included as part of the general security and privacy policy or be represented by multiple policies that reflect the complex nature of organizations. Procedures can be established for security and privacy programs, for mission or business processes, and for systems, if needed. Procedures describe how the policies or controls are implemented and can be directed at the individual or role that is the object of the procedure. Procedures can be documented in system security and privacy plans or in one or more separate documents. Events that may precipitate an update to system and information integrity policy and procedures include assessment or audit findings, security incidents or breaches, or changes in applicable laws, executive orders, directives, regulations, policies, standards, and guidelines. Simply restating controls does not constitute an organizational policy or procedure.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SI-1</summary>

Determine if:

- **SI-01a.**
  - **SI-01a.[01]** a system and information integrity policy is developed and documented;
  - **SI-01a.[02]** the system and information integrity policy is disseminated to [Assignment: organization-defined personnel or roles];
  - **SI-01a.[03]** system and information integrity procedures to facilitate the implementation of the system and information integrity policy and associated system and information integrity controls are developed and documented;
  - **SI-01a.[04]** the system and information integrity procedures are disseminated to [Assignment: organization-defined personnel or roles];
  - **SI-01a.01**
    - **SI-01a.01(a)**
      - **SI-01a.01(a)[01]** the [Selection (one or more): organization-level; mission/business process-level; system-level] system and information integrity policy addresses purpose;
      - **SI-01a.01(a)[02]** the [Selection (one or more): organization-level; mission/business process-level; system-level] system and information integrity policy addresses scope;
      - **SI-01a.01(a)[03]** the [Selection (one or more): organization-level; mission/business process-level; system-level] system and information integrity policy addresses roles;
      - **SI-01a.01(a)[04]** the [Selection (one or more): organization-level; mission/business process-level; system-level] system and information integrity policy addresses responsibilities;
      - **SI-01a.01(a)[05]** the [Selection (one or more): organization-level; mission/business process-level; system-level] system and information integrity policy addresses management commitment;
      - **SI-01a.01(a)[06]** the [Selection (one or more): organization-level; mission/business process-level; system-level] system and information integrity policy addresses coordination among organizational entities;
      - **SI-01a.01(a)[07]** the [Selection (one or more): organization-level; mission/business process-level; system-level] system and information integrity policy addresses compliance;
    - **SI-01a.01(b)** the [Selection (one or more): organization-level; mission/business process-level; system-level] system and information integrity policy is consistent with applicable laws, Executive Orders, directives, regulations, policies, standards, and guidelines;
- **SI-01b.** the [Assignment: organization-defined official] is designated to manage the development, documentation, and dissemination of the system and information integrity policy and procedures;
- **SI-01c.**
  - **SI-01c.01**
    - **SI-01c.01[01]** the current system and information integrity policy is reviewed and updated [Assignment: organization-defined frequency];
    - **SI-01c.01[02]** the current system and information integrity policy is reviewed and updated following [Assignment: organization-defined events];
  - **SI-01c.02**
    - **SI-01c.02[01]** the current system and information integrity procedures are reviewed and updated [Assignment: organization-defined frequency];
    - **SI-01c.02[02]** the current system and information integrity procedures are reviewed and updated following [Assignment: organization-defined events].

**Examine:** System and information integrity policy; system and information integrity procedures; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with system and information integrity responsibilities; organizational personnel with information security and privacy responsibilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

SI-1 asks for a written system and information integrity policy, procedures that carry it out, an official who manages both, and a set review cycle. The [System and Information Integrity policy template](/templates/policies/si/) meets the policy half through the sections every family policy shares, and its [decision worksheet](/templates/worksheets/si/) lists every choice the family forces, with typical values and who decides. The procedures are yours to write; two of them already have templates, the [patch and flaw remediation standard](/templates/standards/patch-and-flaw-remediation-standard/) and the [system monitoring standard](/templates/standards/system-monitoring-standard/).

**How the policy template meets each element.** The shared sections come before and after the policy statements, and each statement cites the SI-1 item it meets:

| SI-1 element | Where the policy template meets it |
| --- | --- |
| Policy at the selected level (a.1) | Scope: the policy applies at the level you select, to every system and every person with access |
| Purpose, scope, roles, responsibilities, management commitment, coordination and compliance (a.1(a)) | The Purpose, Scope, Roles and responsibilities, Management commitment, Coordination and Compliance sections, one for each |
| Consistent with applicable laws and guidance (a.1(b)) | Compliance: the first statement, where you list the laws, regulations and standards that apply; the federal block adds FISMA and OMB Circular A-130 |
| Procedures (a.2) | Procedures: the managing official ensures documented procedures exist |
| Dissemination of policy and procedures (a) | Dissemination: one statement for the policy and one for the procedures, each to the roles you name |
| Designated official (b) | Roles and responsibilities: the official who manages the policy and procedures |
| Review and update (c.1, c.2) | Review and update: a frequency and trigger events for the policy, and again for the procedures |

**Common implementations.** One organization-level policy, approved by a senior leader and published in the policy library. Procedures written for the work SI-2 to SI-16 describe:

- Installing security updates within the set times, testing them first, and checking update status by scan (SI-2), in the patch and flaw remediation standard
- Deploying and updating malicious code protection, handling detections, and approving scan exclusions (SI-3)
- Monitoring systems, handling alerts and adjusting monitoring when risk changes (SI-4), in the system monitoring standard
- Receiving security alerts, advisories and directives, routing each to the owners of the affected components, and tracking directives to completion (SI-5)
- Choosing what integrity verification covers, running the checks, and responding to an unauthorized change (SI-7)
- Running and updating spam protection, and publishing the organization's email authentication records (SI-8)
- Building input validation and safe error handling into the organization's applications, usually through secure coding standards (SI-10, SI-11)
- Setting retention periods for each type of information and disposing of information at the end of them (SI-12)

System-specific settings go in the [system security plan](/templates/plans/system-security-plan/).

**Organization-defined parameters.** The shared sections leave these as fields to fill. Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Who receives the policy (a) | Everyone within the policy's scope, through the policy library |
| Who receives the procedures (a) | The people who carry them out, and the system owners |
| Policy level (a.1) | Organization-level |
| Official who manages the policy and procedures (b) | The Chief Information Security Officer |
| Policy review frequency (c.1) | Annually |
| Events that trigger a policy review (c.1) | Assessment or audit findings, security incidents or breaches, and changes in applicable laws, executive orders, directives, regulations, policies, standards or guidelines |
| Procedure review frequency (c.2) | Annually |
| Events that trigger a procedure review (c.2) | The same events as the policy, and changes to the systems, tools or services the procedures describe |

The trigger events follow NIST's SI-1 discussion. For SI, the people who carry out the procedures are, for example, the IT operations staff who install updates, the endpoint and email teams who run malicious code and spam protection, the security operations team that monitors and routes advisories, the application developers who write input validation and error handling, and the records management staff who set retention periods. The Chief Information Security Officer often delegates the day-to-day management to the security operations manager. Typical procedure triggers for SI are a new endpoint, email or monitoring tool, a new CISA directive, an incident that a missed update or an unnoticed change made possible, and a change to the records retention schedule.

SI-1 is also in the Privacy baseline, so it applies to any system that processes personally identifiable information; the Privacy edition of the policy carries the same shared sections, with the privacy-only SI-12(1) to SI-12(3), SI-18 and SI-19. NIST's SI-1 discussion asks security and privacy programs to collaborate on the policy and procedures, and the shared Coordination section has the Chief Information Security Officer coordinate the policy with the privacy function before each approval.

**Evidence assessors ask for.**

- The approved policy, with the approver, the approval date and the version history
- The procedures, including the patch and flaw remediation and system monitoring standards, and who owns each one
- The record naming the official who manages the policy and procedures
- Records showing dissemination, including to the administrators, developers and records staff who carry out the procedures
- Evidence of the last review of the policy and of each procedure, with the changes made

**Inheritance.** SI-1 is usually a common control, provided once for the organization. A system inherits the organization's policy and records that in its system security plan. It adds its own procedures only where it works differently, for example an application team that tests and releases its own updates outside the enterprise patch tools.

**Common findings.**

- A policy that restates the SI controls but has no procedures behind it. NIST's discussion of SI-1 says restating controls is not a policy or procedure.
- The policy or procedures not reviewed within the stated period, or not updated after a new CISA directive or an incident.
- Installation times in the procedure that differ from those in the policy or in the patch reports.
- Procedures that cover operating systems but not applications, appliances, containers or cloud services.

**Enhancements in the Moderate baseline.** SI-1 has no enhancements.
