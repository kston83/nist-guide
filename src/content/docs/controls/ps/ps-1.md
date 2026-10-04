---
title: 'PS-1 Policy and Procedures'
description: 'NIST SP 800-53 Rev. 5 control PS-1, Policy and Procedures: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PS-1 Policy and Procedures'
  order: 1
control:
  id: PS-1
  family: PS
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | None |

**Related controls:** [PM-9](/controls/pm/pm-9/), [PS-8](/controls/ps/ps-8/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Develop, document, and disseminate to [Assignment: organization-defined personnel or roles]:
  - **1.** [Selection (one or more): organization-level; mission/business process-level; system-level] personnel security policy that:
    - **(a)** Addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and
    - **(b)** Is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines; and
  - **2.** Procedures to facilitate the implementation of the personnel security policy and the associated personnel security controls;
- **b.** Designate an [Assignment: organization-defined official] to manage the development, documentation, and dissemination of the personnel security policy and procedures; and
- **c.** Review and update the current personnel security:
  - **1.** Policy [Assignment: organization-defined frequency] and following [Assignment: organization-defined events] ; and
  - **2.** Procedures [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].

<details>
<summary>NIST discussion</summary>

Personnel security policy and procedures for the controls in the PS family that are implemented within systems and organizations. The risk management strategy is an important factor in establishing such policies and procedures. Policies and procedures contribute to security and privacy assurance. Therefore, it is important that security and privacy programs collaborate on their development. Security and privacy program policies and procedures at the organization level are preferable, in general, and may obviate the need for mission level or system-specific policies and procedures. The policy can be included as part of the general security and privacy policy or be represented by multiple policies reflecting the complex nature of organizations. Procedures can be established for security and privacy programs, for mission/business processes, and for systems, if needed. Procedures describe how the policies or controls are implemented and can be directed at the individual or role that is the object of the procedure. Procedures can be documented in system security and privacy plans or in one or more separate documents. Events that may precipitate an update to personnel security policy and procedures include, but are not limited to, assessment or audit findings, security incidents or breaches, or changes in applicable laws, executive orders, directives, regulations, policies, standards, and guidelines. Simply restating controls does not constitute an organizational policy or procedure.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PS-1</summary>

Determine if:

- **PS-01a.**
  - **PS-01a.[01]** a personnel security policy is developed and documented;
  - **PS-01a.[02]** the personnel security policy is disseminated to [Assignment: organization-defined personnel or roles];
  - **PS-01a.[03]** personnel security procedures to facilitate the implementation of the personnel security policy and associated personnel security controls are developed and documented;
  - **PS-01a.[04]** the personnel security procedures are disseminated to [Assignment: organization-defined personnel or roles];
  - **PS-01a.01**
    - **PS-01a.01(a)**
      - **PS-01a.01(a)[01]** the [Selection (one or more): organization-level; mission/business process-level; system-level] personnel security policy addresses purpose;
      - **PS-01a.01(a)[02]** the [Selection (one or more): organization-level; mission/business process-level; system-level] personnel security policy addresses scope;
      - **PS-01a.01(a)[03]** the [Selection (one or more): organization-level; mission/business process-level; system-level] personnel security policy addresses roles;
      - **PS-01a.01(a)[04]** the [Selection (one or more): organization-level; mission/business process-level; system-level] personnel security policy addresses responsibilities;
      - **PS-01a.01(a)[05]** the [Selection (one or more): organization-level; mission/business process-level; system-level] personnel security policy addresses management commitment;
      - **PS-01a.01(a)[06]** the [Selection (one or more): organization-level; mission/business process-level; system-level] personnel security policy addresses coordination among organizational entities;
      - **PS-01a.01(a)[07]** the [Selection (one or more): organization-level; mission/business process-level; system-level] personnel security policy addresses compliance;
    - **PS-01a.01(b)** the [Selection (one or more): organization-level; mission/business process-level; system-level] personnel security policy is consistent with applicable laws, Executive Orders, directives, regulations, policies, standards, and guidelines;
- **PS-01b.** the [Assignment: organization-defined official] is designated to manage the development, documentation, and dissemination of the personnel security policy and procedures;
- **PS-01c.**
  - **PS-01c.01**
    - **PS-01c.01[01]** the current personnel security policy is reviewed and updated [Assignment: organization-defined frequency];
    - **PS-01c.01[02]** the current personnel security policy is reviewed and updated following [Assignment: organization-defined events];
  - **PS-01c.02**
    - **PS-01c.02[01]** the current personnel security procedures are reviewed and updated [Assignment: organization-defined frequency];
    - **PS-01c.02[02]** the current personnel security procedures are reviewed and updated following [Assignment: organization-defined events].

**Examine:** Personnel security policy; personnel security procedures; system security plan; privacy plan; risk management strategy documentation; audit findings; other relevant documents or records.

**Interview:** Organizational personnel with personnel security responsibilities; organizational personnel with information security responsibilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PS-1 asks for a written personnel security policy, procedures that carry it out, an official who manages both, and a set review cycle. The [Personnel Security policy template](/templates/policies/ps/) meets the policy half through the sections every family policy shares, and its [decision worksheet](/templates/worksheets/ps/) lists the choices the family forces, with typical values and who decides. The procedures are yours to write.

PS is the family where most of the work happens outside the security team. The human resources office designates positions, screens people and runs the sanctions process; supervisors and account managers act on hires, transfers and departures. The policy's accountable role is the Chief Information Security Officer, but most PS statements name the human resources office. So the shared Coordination section, which brings in the legal, privacy, human resources and procurement functions, does real work here.

**How the policy template meets each element.** The shared sections come before and after the policy statements, and each statement cites the PS-1 item it meets:

| PS-1 element | Where the policy template meets it |
| --- | --- |
| Policy at the selected level (a.1) | Scope: the policy applies at the level you select, to every system and every person with access |
| Purpose, scope, roles, responsibilities, management commitment, coordination and compliance (a.1(a)) | The Purpose, Scope, Roles and responsibilities, Management commitment, Coordination and Compliance sections, one for each |
| Consistent with applicable laws and guidance (a.1(b)) | Compliance: the first statement, where you list the laws, regulations and standards that apply; the federal block adds FISMA and OMB Circular A-130 |
| Procedures (a.2) | Procedures: the managing official ensures documented procedures exist |
| Dissemination of policy and procedures (a) | Dissemination: one statement for the policy and one for the procedures, each to the roles you name |
| Designated official (b) | Roles and responsibilities: the official who manages the policy and procedures |
| Review and update (c.1, c.2) | Review and update: a frequency and trigger events for the policy, and again for the procedures |

**Common implementations.** One organization-level policy, approved by a senior leader and published in the policy library. The human resources office often has its own procedures already; the security procedures point to them rather than repeat them. Procedures written for the work PS-2 to PS-9 describe:

- Designating each position's risk and the screening each level needs (PS-2), and screening and rescreening people (PS-3)
- Onboarding, transfers and terminations (PS-4, PS-5), with the [onboarding, transfer and termination checklist](/templates/forms/onboarding-transfer-and-termination-checklist/), which the [account management procedure](/templates/procedures/account-management-procedure/) starts from
- Collecting signed [access agreements](/templates/forms/access-agreement/) and the [Rules of Behavior](/templates/forms/rules-of-behavior/) before access, and the re-signing cycle (PS-6)
- Writing personnel security requirements into contracts and checking external providers meet them (PS-7)
- Handling violations through the sanctions process and notifying the security and privacy officials (PS-8)
- Writing security and privacy duties into position descriptions (PS-9)

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

The trigger events follow NIST's PS-1 discussion. For PS, the people who carry out the procedures are, for example, the human resources office, supervisors, account managers, the badge office, and the contract managers who oversee external providers. Typical procedure triggers for PS are a change to the human resources system or its feed to the identity provider, a change in screening law, and a new standard contract clause.

**Evidence assessors ask for.**

- The approved policy, with the approver, the approval date and the version history
- The procedures, and who owns each one, including the human resources procedures the policy relies on
- The record naming the official who manages the policy and procedures
- Records showing dissemination, including to the human resources office and supervisors
- Evidence of the last review of the policy and of each procedure, with the changes made

**Inheritance.** PS-1 is almost always a common control, provided once for the organization, since personnel actions are not system-specific. A system inherits the policy and records that in its system security plan.

**Common findings.**

- A policy that restates the PS controls but has no procedures behind it. NIST's discussion of PS-1 says restating controls is not a policy or procedure.
- Human resources processes that meet the controls but are not referenced, so no one can show the link.
- No procedure for an involuntary termination, where timing matters most.
- Procedures that cover employees but not contractors.

**Enhancements in the Moderate baseline.** PS-1 has no enhancements.

**Federal systems** (as of October 2026). NIST's PS-2 discussion names Parts 731 and 1400 of Title 5, Code of Federal Regulations, as the requirements for position risk and sensitivity designation. [5 CFR 731.106](https://www.ecfr.gov/current/title-5/section-731.106) (as amended at 91 FR 39380, June 30, 2026) sets risk designation, investigation and continuous vetting for public trust positions. [5 CFR 1400.201](https://www.ecfr.gov/current/title-5/section-1400.201) sets the sensitivity levels for national security positions. An agency's personnel security office usually owns those procedures, and the PS procedures point to them. The shared sections' federal block ties the policy to FISMA and OMB Circular A-130.
