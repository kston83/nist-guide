---
title: 'AC-1 Policy and Procedures'
description: 'NIST SP 800-53 Rev. 5 control AC-1, Policy and Procedures: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'AC-1 Policy and Procedures'
  order: 1
control:
  id: AC-1
  family: AC
  baselines: [Low, Moderate, High, Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | None |

**Related controls:** [IA-1](/controls/ia/ia-1/), [PM-9](/controls/pm/pm-9/), [PM-24](/controls/pm/pm-24/), [PS-8](/controls/ps/ps-8/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Develop, document, and disseminate to [Assignment: organization-defined personnel or roles]:
  - **1.** [Selection (one or more): organization-level; mission/business process-level; system-level] access control policy that:
    - **(a)** Addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and
    - **(b)** Is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines; and
  - **2.** Procedures to facilitate the implementation of the access control policy and the associated access controls;
- **b.** Designate an [Assignment: organization-defined official] to manage the development, documentation, and dissemination of the access control policy and procedures; and
- **c.** Review and update the current access control:
  - **1.** Policy [Assignment: organization-defined frequency] and following [Assignment: organization-defined events] ; and
  - **2.** Procedures [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].

<details>
<summary>NIST discussion</summary>

Access control policy and procedures address the controls in the AC family that are implemented within systems and organizations. The risk management strategy is an important factor in establishing such policies and procedures. Policies and procedures contribute to security and privacy assurance. Therefore, it is important that security and privacy programs collaborate on the development of access control policy and procedures. Security and privacy program policies and procedures at the organization level are preferable, in general, and may obviate the need for mission- or system-specific policies and procedures. The policy can be included as part of the general security and privacy policy or be represented by multiple policies reflecting the complex nature of organizations. Procedures can be established for security and privacy programs, for mission or business processes, and for systems, if needed. Procedures describe how the policies or controls are implemented and can be directed at the individual or role that is the object of the procedure. Procedures can be documented in system security and privacy plans or in one or more separate documents. Events that may precipitate an update to access control policy and procedures include assessment or audit findings, security incidents or breaches, or changes in laws, executive orders, directives, regulations, policies, standards, and guidelines. Simply restating controls does not constitute an organizational policy or procedure.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for AC-1</summary>

Determine if:

- **AC-01a.**
  - **AC-01a.[01]** an access control policy is developed and documented;
  - **AC-01a.[02]** the access control policy is disseminated to [Assignment: organization-defined personnel or roles];
  - **AC-01a.[03]** access control procedures to facilitate the implementation of the access control policy and associated controls are developed and documented;
  - **AC-01a.[04]** the access control procedures are disseminated to [Assignment: organization-defined personnel or roles];
  - **AC-01a.01**
    - **AC-01a.01(a)**
      - **AC-01a.01(a)[01]** the [Selection (one or more): organization-level; mission/business process-level; system-level] access control policy addresses purpose;
      - **AC-01a.01(a)[02]** the [Selection (one or more): organization-level; mission/business process-level; system-level] access control policy addresses scope;
      - **AC-01a.01(a)[03]** the [Selection (one or more): organization-level; mission/business process-level; system-level] access control policy addresses roles;
      - **AC-01a.01(a)[04]** the [Selection (one or more): organization-level; mission/business process-level; system-level] access control policy addresses responsibilities;
      - **AC-01a.01(a)[05]** the [Selection (one or more): organization-level; mission/business process-level; system-level] access control policy addresses management commitment;
      - **AC-01a.01(a)[06]** the [Selection (one or more): organization-level; mission/business process-level; system-level] access control policy addresses coordination among organizational entities;
      - **AC-01a.01(a)[07]** the [Selection (one or more): organization-level; mission/business process-level; system-level] access control policy addresses compliance;
    - **AC-01a.01(b)** the [Selection (one or more): organization-level; mission/business process-level; system-level] access control policy is consistent with applicable laws, Executive Orders, directives, regulations, policies, standards, and guidelines;
- **AC-01b.** the [Assignment: organization-defined official] is designated to manage the development, documentation, and dissemination of the access control policy and procedures;
- **AC-01c.**
  - **AC-01c.01**
    - **AC-01c.01[01]** the current access control policy is reviewed and updated [Assignment: organization-defined frequency];
    - **AC-01c.01[02]** the current access control policy is reviewed and updated following [Assignment: organization-defined events];
  - **AC-01c.02**
    - **AC-01c.02[01]** the current access control procedures are reviewed and updated [Assignment: organization-defined frequency];
    - **AC-01c.02[02]** the current access control procedures are reviewed and updated following [Assignment: organization-defined events].

**Examine:** Access control policy and procedures; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with access control responsibilities; organizational personnel with information security with information security and privacy responsibilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

AC-1 asks for a written access control policy, procedures that carry it out, an official who manages both, and a set review cycle. The [Access Control policy template](/templates/policies/ac/) meets the policy half through the sections every family policy shares. The procedures are yours to write.

**How the policy template meets each element.** The shared sections come before and after the policy statements, and each statement cites the AC-1 item it meets:

| AC-1 element | Where the policy template meets it |
| --- | --- |
| Policy at the selected level (a.1) | Scope: the policy applies at the level you select, to every system and every person with access |
| Purpose, scope, roles, responsibilities, management commitment, coordination and compliance (a.1(a)) | The Purpose, Scope, Roles and responsibilities, Management commitment, Coordination and Compliance sections, one for each |
| Consistent with applicable laws and guidance (a.1(b)) | Compliance: the first statement, where you list the laws, regulations and standards that apply; the federal block adds FISMA and OMB Circular A-130 |
| Procedures (a.2) | Procedures: the managing official ensures documented procedures exist |
| Dissemination of policy and procedures (a) | Dissemination: one statement for the policy and one for the procedures, each to the roles you name |
| Designated official (b) | Roles and responsibilities: the official who manages the policy and procedures |
| Review and update (c.1, c.2) | Review and update: a frequency and trigger events for the policy, and again for the procedures |

**Common implementations.** One organization-level policy, approved by a senior leader and published in the policy library. Procedures written for the work AC-2 to AC-22 describe: requesting, approving, changing and removing accounts; reviewing access; granting and reviewing privileged access; setting lockout, device lock and session limits; approving remote and wireless access; and approving content for public systems. Most organizations write an account management procedure and a remote access standard, and place system-specific settings in the [system security plan](/templates/plans/system-security-plan/). The [boundary protection standard](/templates/standards/boundary-protection-standard/) holds the information flow rules that AC-4 enforces, and the [Rules of Behavior](/templates/forms/rules-of-behavior/) tell users what the policy expects of them.

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

The trigger events follow NIST's AC-1 discussion. For AC, the people who carry out the procedures are, for example, account managers, system administrators and the help desk. The Chief Information Security Officer often delegates the day-to-day management to an identity and access management lead. A change of identity provider, access governance tool or remote access service is a typical procedure trigger.

**Evidence assessors ask for.**

- The approved policy, with the approver, the approval date and the version history
- The procedures, and who owns each one
- The record naming the official who manages the policy and procedures
- Records showing dissemination, such as the policy library page or acknowledgment records
- Evidence of the last review of the policy and of each procedure, with the changes made

**Inheritance.** AC-1 is usually a common control, provided once for the organization. A system inherits the organization's policy and records that in its security plan. It adds its own procedures only where it manages access differently, for example an application with its own accounts and roles outside the identity provider.

**Common findings.**

- A policy that restates the AC controls but has no procedures behind it. NIST's discussion of AC-1 says restating controls is not a policy or procedure.
- The policy or procedures not reviewed within the stated period, or not updated after an incident or finding.
- Procedures that do not match the settings in use, such as a stated lockout threshold that the identity provider does not enforce.
- No evidence that the procedures reached the account managers and administrators who follow them.

**Enhancements in the Moderate baseline.** AC-1 has no enhancements.

**Federal systems** (as of September 2026). OMB [M-19-17](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf) (May 21, 2019), Enabling Mission Delivery through Improved Identity, Credential, and Access Management, requires each agency to "define and maintain a single comprehensive ICAM policy, process, and technology solution roadmap" (Section IV, Governance, item 2). Access management is part of that policy, so write a system's AC policy and procedures to fit within it. OMB [M-26-18](https://www.whitehouse.gov/wp-content/uploads/2026/08/M-26-18-Scaling-Use-of-Login.gov-to-Deliver-a-Universal-Sign-on-for-Public-Services.pdf) (August 31, 2026) lists M-19-17 as existing OMB policy and supersedes only its Section V.5.
