---
title: 'SA-1 Policy and Procedures'
description: 'NIST SP 800-53 Rev. 5 control SA-1, Policy and Procedures: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SA-1 Policy and Procedures'
  order: 1
control:
  id: SA-1
  family: SA
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
  - **1.** [Selection (one or more): organization-level; mission/business process-level; system-level] system and services acquisition policy that:
    - **(a)** Addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and
    - **(b)** Is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines; and
  - **2.** Procedures to facilitate the implementation of the system and services acquisition policy and the associated system and services acquisition controls;
- **b.** Designate an [Assignment: organization-defined official] to manage the development, documentation, and dissemination of the system and services acquisition policy and procedures; and
- **c.** Review and update the current system and services acquisition:
  - **1.** Policy [Assignment: organization-defined frequency] and following [Assignment: organization-defined events] ; and
  - **2.** Procedures [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].

<details>
<summary>NIST discussion</summary>

System and services acquisition policy and procedures address the controls in the SA family that are implemented within systems and organizations. The risk management strategy is an important factor in establishing such policies and procedures. Policies and procedures contribute to security and privacy assurance. Therefore, it is important that security and privacy programs collaborate on the development of system and services acquisition policy and procedures. Security and privacy program policies and procedures at the organization level are preferable, in general, and may obviate the need for mission- or system-specific policies and procedures. The policy can be included as part of the general security and privacy policy or be represented by multiple policies that reflect the complex nature of organizations. Procedures can be established for security and privacy programs, for mission or business processes, and for systems, if needed. Procedures describe how the policies or controls are implemented and can be directed at the individual or role that is the object of the procedure. Procedures can be documented in system security and privacy plans or in one or more separate documents. Events that may precipitate an update to system and services acquisition policy and procedures include assessment or audit findings, security incidents or breaches, or changes in laws, executive orders, directives, regulations, policies, standards, and guidelines. Simply restating controls does not constitute an organizational policy or procedure.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SA-1</summary>

Determine if:

- **SA-01a.**
  - **SA-01a.[01]** a system and services acquisition policy is developed and documented;
  - **SA-01a.[02]** the system and services acquisition policy is disseminated to [Assignment: organization-defined personnel or roles];
  - **SA-01a.[03]** system and services acquisition procedures to facilitate the implementation of the system and services acquisition policy and associated system and services acquisition controls are developed and documented;
  - **SA-01a.[04]** the system and services acquisition procedures are disseminated to [Assignment: organization-defined personnel or roles];
  - **SA-01a.01**
    - **SA-01a.01(a)**
      - **SA-01a.01(a)[01]** the [Selection (one or more): organization-level; mission/business process-level; system-level] system and services acquisition policy addresses purpose;
      - **SA-01a.01(a)[02]** the [Selection (one or more): organization-level; mission/business process-level; system-level] system and services acquisition policy addresses scope;
      - **SA-01a.01(a)[03]** the [Selection (one or more): organization-level; mission/business process-level; system-level] system and services acquisition policy addresses roles;
      - **SA-01a.01(a)[04]** the [Selection (one or more): organization-level; mission/business process-level; system-level] system and services acquisition policy addresses responsibilities;
      - **SA-01a.01(a)[05]** the [Selection (one or more): organization-level; mission/business process-level; system-level] system and services acquisition policy addresses management commitment;
      - **SA-01a.01(a)[06]** the [Selection (one or more): organization-level; mission/business process-level; system-level] system and services acquisition policy addresses coordination among organizational entities;
      - **SA-01a.01(a)[07]** the [Selection (one or more): organization-level; mission/business process-level; system-level] system and services acquisition policy addresses compliance;
    - **SA-01a.01(b)** the [Selection (one or more): organization-level; mission/business process-level; system-level] system and services acquisition policy is consistent with applicable laws, Executive Orders, directives, regulations, policies, standards, and guidelines;
- **SA-01b.** the [Assignment: organization-defined official] is designated to manage the development, documentation, and dissemination of the system and services acquisition policy and procedures;
- **SA-01c.**
  - **SA-01c.01**
    - **SA-01c.01[01]** the system and services acquisition policy is reviewed and updated [Assignment: organization-defined frequency];
    - **SA-01c.01[02]** the current system and services acquisition policy is reviewed and updated following [Assignment: organization-defined events];
  - **SA-01c.02**
    - **SA-01c.02[01]** the current system and services acquisition procedures are reviewed and updated [Assignment: organization-defined frequency];
    - **SA-01c.02[02]** the current system and services acquisition procedures are reviewed and updated following [Assignment: organization-defined events].

**Examine:** System and services acquisition policy; system and services acquisition procedures; supply chain risk management policy; supply chain risk management procedures; supply chain risk management plan; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with system and services acquisition responsibilities; organizational personnel with information security and privacy responsibilities; organizational personnel with supply chain risk management responsibilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

SA-1 asks for a written system and services acquisition policy, procedures that carry it out, an official who manages both, and a set review cycle. The [System and Services Acquisition policy template](/templates/policies/sa/) meets the policy half through the sections every family policy shares. The procedures are yours to write.

**How the policy template meets each element.** The shared sections come before and after the policy statements, and each statement cites the SA-1 item it meets:

| SA-1 element | Where the policy template meets it |
| --- | --- |
| Policy at the selected level (a.1) | Scope: the policy applies at the level you select, to every system and every person with access |
| Purpose, scope, roles, responsibilities, management commitment, coordination and compliance (a.1(a)) | The Purpose, Scope, Roles and responsibilities, Management commitment, Coordination and Compliance sections, one for each |
| Consistent with applicable laws and guidance (a.1(b)) | Compliance: the first statement, where you list the laws, regulations and standards that apply; the federal block adds FISMA and OMB Circular A-130 |
| Procedures (a.2) | Procedures: the managing official ensures documented procedures exist |
| Dissemination of policy and procedures (a) | Dissemination: one statement for the policy and one for the procedures, each to the roles you name |
| Designated official (b) | Roles and responsibilities: the official who manages the policy and procedures |
| Review and update (c.1, c.2) | Review and update: a frequency and trigger events for the policy, and again for the procedures |

Coordination matters more for SA than for most families. The policy binds the procurement office, developers and project managers as well as the security team. NIST's SA-1 discussion asks security and privacy programs to collaborate on it, so the Coordination section's review by the procurement, legal and privacy functions is part of meeting the control.

**Common implementations.** One organization-level policy, approved by a senior leader and published in the policy library. Procedures written for the work SA-2 to SA-22 describe:

- Adding security and privacy costs to each system's budget request
- The security and privacy gates in the system development life cycle
- Reviewing each solicitation against standard contract language
- Reviewing an external service before use, then each year
- Reviewing developer deliverables before a release is accepted
- Tracking components to their end-of-support dates

The [acquisition security requirements](/templates/standards/acquisition-security-requirements/) standard gives the standard contract language and the solicitation review checklist, and the [external service review](/templates/forms/external-service-review/) form records the review of each external service before use and each year. System-specific decisions go in the [system security plan](/templates/plans/system-security-plan/).

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

The trigger events follow NIST's SA-1 discussion, which lists assessment or audit findings, security incidents or breaches, and changes in laws, executive orders, directives, regulations, policies, standards and guidelines. For SA, the people who carry out the procedures are, for example, the procurement office, project managers, developers, and the security and privacy teams. The Chief Information Security Officer typically manages the policy working with the head of the procurement office. A change in acquisition rules or a supply chain compromise is a typical policy trigger, and a change to the system development life cycle, the standard contract language or the development toolchain a typical procedure trigger.

**Evidence assessors ask for.**

- The approved policy, with the approver, the approval date and the version history
- The procedures, and who owns each one
- The record naming the official who manages the policy and procedures
- Records showing dissemination, including to the procurement office and to development teams
- Evidence of the last review of the policy and of each procedure, with the changes made

**Inheritance.** SA-1 is usually a common control, provided once for the organization. A system inherits the organization's policy and records that in its security plan. It adds its own procedures only where it acquires or develops differently, for example a program with its own development contractor and life cycle.

**Common findings.**

- A policy that restates the SA controls but has no procedures behind it. NIST's discussion of SA-1 says restating controls is not a policy or procedure.
- Procedures that the procurement office has never seen, so contracts are awarded without the security review.
- The policy or procedures not reviewed within the stated period, or not updated after a supply chain incident or a change in acquisition rules.
- Procedures written for waterfall projects that no team follows, because development runs in short iterative releases.

**Enhancements in the Moderate baseline.** SA-1 has no enhancements.

**Federal systems** (as of September 2026). OMB [M-26-05](https://www.whitehouse.gov/wp-content/uploads/2026/01/M-26-05-Adopting-a-Risk-based-Approach-to-Software-and-Hardware-Security.pdf), Adopting a Risk-based Approach to Software and Hardware Security (January 23, 2026), rescinds M-22-18 and M-23-16. It states that agencies "shall continue to maintain a complete inventory of software and hardware and develop software and hardware assurance policies and processes that match their risk determinations and mission needs." The SA policy and its procedures are a natural home for those assurance policies and processes. Write them to fit the agency's own assurance policy where one exists.
