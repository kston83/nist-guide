---
title: 'AT-1 Policy and Procedures'
description: 'NIST SP 800-53 Rev. 5 control AT-1, Policy and Procedures: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'AT-1 Policy and Procedures'
  order: 1
control:
  id: AT-1
  family: AT
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
  - **1.** [Selection (one or more): organization-level; mission/business process-level; system-level] awareness and training policy that:
    - **(a)** Addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and
    - **(b)** Is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines; and
  - **2.** Procedures to facilitate the implementation of the awareness and training policy and the associated awareness and training controls;
- **b.** Designate an [Assignment: organization-defined official] to manage the development, documentation, and dissemination of the awareness and training policy and procedures; and
- **c.** Review and update the current awareness and training:
  - **1.** Policy [Assignment: organization-defined frequency] and following [Assignment: organization-defined events] ; and
  - **2.** Procedures [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].

<details>
<summary>NIST discussion</summary>

Awareness and training policy and procedures address the controls in the AT family that are implemented within systems and organizations. The risk management strategy is an important factor in establishing such policies and procedures. Policies and procedures contribute to security and privacy assurance. Therefore, it is important that security and privacy programs collaborate on the development of awareness and training policy and procedures. Security and privacy program policies and procedures at the organization level are preferable, in general, and may obviate the need for mission- or system-specific policies and procedures. The policy can be included as part of the general security and privacy policy or be represented by multiple policies that reflect the complex nature of organizations. Procedures can be established for security and privacy programs, for mission or business processes, and for systems, if needed. Procedures describe how the policies or controls are implemented and can be directed at the individual or role that is the object of the procedure. Procedures can be documented in system security and privacy plans or in one or more separate documents. Events that may precipitate an update to awareness and training policy and procedures include assessment or audit findings, security incidents or breaches, or changes in applicable laws, executive orders, directives, regulations, policies, standards, and guidelines. Simply restating controls does not constitute an organizational policy or procedure.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for AT-1</summary>

Determine if:

- **AT-01a.**
  - **AT-01a.[01]** an awareness and training policy is developed and documented;
  - **AT-01a.[02]** the awareness and training policy is disseminated to [Assignment: organization-defined personnel or roles];
  - **AT-01a.[03]** awareness and training procedures to facilitate the implementation of the awareness and training policy and associated access controls are developed and documented;
  - **AT-01a.[04]** the awareness and training procedures are disseminated to [Assignment: organization-defined personnel or roles].
  - **AT-01a.01**
    - **AT-01a.01(a)**
      - **AT-01a.01(a)[01]** the [Selection (one or more): organization-level; mission/business process-level; system-level] awareness and training policy addresses purpose;
      - **AT-01a.01(a)[02]** the [Selection (one or more): organization-level; mission/business process-level; system-level] awareness and training policy addresses scope;
      - **AT-01a.01(a)[03]** the [Selection (one or more): organization-level; mission/business process-level; system-level] awareness and training policy addresses roles;
      - **AT-01a.01(a)[04]** the [Selection (one or more): organization-level; mission/business process-level; system-level] awareness and training policy addresses responsibilities;
      - **AT-01a.01(a)[05]** the [Selection (one or more): organization-level; mission/business process-level; system-level] awareness and training policy addresses management commitment;
      - **AT-01a.01(a)[06]** the [Selection (one or more): organization-level; mission/business process-level; system-level] awareness and training policy addresses coordination among organizational entities;
      - **AT-01a.01(a)[07]** the [Selection (one or more): organization-level; mission/business process-level; system-level] awareness and training policy addresses compliance; and
    - **AT-01a.01(b)** the [Selection (one or more): organization-level; mission/business process-level; system-level] awareness and training policy is consistent with applicable laws, Executive Orders, directives, regulations, policies, standards, and guidelines; and
- **AT-01b.** the [Assignment: organization-defined official] is designated to manage the development, documentation, and dissemination of the awareness and training policy and procedures;
- **AT-01c.**
  - **AT-01c.01**
    - **AT-01c.01[01]** the current awareness and training policy is reviewed and updated [Assignment: organization-defined frequency];
    - **AT-01c.01[02]** the current awareness and training policy is reviewed and updated following [Assignment: organization-defined events];
  - **AT-01c.02**
    - **AT-01c.02[01]** the current awareness and training procedures are reviewed and updated [Assignment: organization-defined frequency];
    - **AT-01c.02[02]** the current awareness and training procedures are reviewed and updated following [Assignment: organization-defined events].

**Examine:** System security plan; privacy plan; awareness and training policy and procedures; other relevant documents or records.

**Interview:** Organizational personnel with awareness and training responsibilities; organizational personnel with information security and privacy responsibilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

AT-1 asks for a written awareness and training policy, procedures that carry it out, an official who manages both, and a set review cycle. The [Awareness and Training policy template](/templates/policies/at/) meets the policy half through the sections every family policy shares, and its [decision worksheet](/templates/worksheets/at/) lists the choices the family forces, with typical values and who decides. The procedures are yours to write.

NIST's AT-1 discussion asks security and privacy programs to collaborate on the policy and procedures. Training is where that shows most: the same people take both kinds of training, often in one course. The policy template keeps one policy with two owners: the Chief Information Security Officer for security training and the senior privacy official for privacy training.

**How the policy template meets each element.** The shared sections come before and after the policy statements, and each statement cites the AT-1 item it meets:

| AT-1 element | Where the policy template meets it |
| --- | --- |
| Policy at the selected level (a.1) | Scope: the policy applies at the level you select, to every system and every person with access |
| Purpose, scope, roles, responsibilities, management commitment, coordination and compliance (a.1(a)) | The Purpose, Scope, Roles and responsibilities, Management commitment, Coordination and Compliance sections, one for each |
| Consistent with applicable laws and guidance (a.1(b)) | Compliance: the first statement, where you list the laws, regulations and standards that apply; the federal block adds FISMA and OMB Circular A-130 |
| Procedures (a.2) | Procedures: the managing official ensures documented procedures exist |
| Dissemination of policy and procedures (a) | Dissemination: one statement for the policy and one for the procedures, each to the roles you name |
| Designated official (b) | Roles and responsibilities: the official who manages the policy and procedures |
| Review and update (c.1, c.2) | Review and update: a frequency and trigger events for the policy, and again for the procedures |

**Common implementations.** One organization-level policy, approved by a senior leader and published in the policy library. Procedures written for the work AT-2 to AT-4 describe:

- Assigning literacy training to each new user before access, and tracking the refresher (AT-2), on the schedule in the [Security and Privacy Training Plan](/templates/plans/security-and-privacy-training-plan/)
- Running awareness activities, such as phishing simulations, and following up with people who need more help (AT-2b)
- Naming the roles that need role-based training and assigning their courses (AT-3), through section 5 of the training plan
- Recording completions, chasing overdue training and suspending access when training is not done (AT-4), in the learning management system or the [training record log](/templates/forms/training-record-log/)
- Reviewing and updating content each year and after incidents (AT-2c, AT-3b)

NIST's discussion lets procedures live in one or more separate documents. Many organizations write them into the training plan itself, which is acceptable if each step names who does it and what record it leaves.

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

The trigger events follow NIST's AT-1 discussion. For AT, the people who carry out the procedures are, for example, the training administrator who runs the learning management system, the privacy office, supervisors, and the account managers who check training before granting access. The Chief Information Security Officer often delegates day-to-day management to a security awareness lead. Typical procedure triggers for AT are a new learning management system or phishing simulation service, a change in the roles that need role-based training, and a new training requirement in law or contract.

**Evidence assessors ask for.**

- The approved policy, with the approver, the approval date and the version history
- The procedures, and who owns each one, or the training plan where they are written
- The record naming the official who manages the policy and procedures
- Records showing dissemination, including to supervisors and the training administrator
- Evidence of the last review of the policy and of each procedure, with the changes made

**Inheritance.** AT-1 is almost always a common control, provided once for the organization. A system inherits the policy and records that in its system security plan. It needs procedures of its own only for training specific to the system, such as role-based training for its administrators.

**Common findings.**

- A policy that restates the AT controls but has no procedures behind it. NIST's discussion of AT-1 says restating controls is not a policy or procedure.
- No procedure for what happens when training is overdue, so people with overdue training keep their access.
- Privacy training missing from the policy, or owned by no one.
- The policy or procedures not reviewed within the stated period, or still naming a training tool no longer in use.

**Enhancements in the Moderate baseline.** AT-1 has no enhancements. It is also in the Privacy baseline, which the privacy statements of the policy serve.

**Federal systems** (as of October 2026). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.h(1) and (2), requires mandatory agency-wide security and privacy awareness and training programs for all employees and contractors. The programs must be consistent with policies, standards and guidelines issued by OMB, NIST and OPM. OPM's [5 CFR 930.301](https://www.ecfr.gov/current/title-5/chapter-I/subchapter-B/part-930/subpart-C/section-930.301) requires each executive agency to develop a plan for security awareness and training; the training plan is that plan. The shared sections' federal block ties the policy to FISMA and OMB Circular A-130.
