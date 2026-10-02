---
title: 'CM-1 Policy and Procedures'
description: 'NIST SP 800-53 Rev. 5 control CM-1, Policy and Procedures: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CM-1 Policy and Procedures'
  order: 1
control:
  id: CM-1
  family: CM
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
  - **1.** [Selection (one or more): organization-level; mission/business process-level; system-level] configuration management policy that:
    - **(a)** Addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and
    - **(b)** Is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines; and
  - **2.** Procedures to facilitate the implementation of the configuration management policy and the associated configuration management controls;
- **b.** Designate an [Assignment: organization-defined official] to manage the development, documentation, and dissemination of the configuration management policy and procedures; and
- **c.** Review and update the current configuration management:
  - **1.** Policy [Assignment: organization-defined frequency] and following [Assignment: organization-defined events] ; and
  - **2.** Procedures [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].

<details>
<summary>NIST discussion</summary>

Configuration management policy and procedures address the controls in the CM family that are implemented within systems and organizations. The risk management strategy is an important factor in establishing such policies and procedures. Policies and procedures contribute to security and privacy assurance. Therefore, it is important that security and privacy programs collaborate on the development of configuration management policy and procedures. Security and privacy program policies and procedures at the organization level are preferable, in general, and may obviate the need for mission- or system-specific policies and procedures. The policy can be included as part of the general security and privacy policy or be represented by multiple policies that reflect the complex nature of organizations. Procedures can be established for security and privacy programs, for mission/business processes, and for systems, if needed. Procedures describe how the policies or controls are implemented and can be directed at the individual or role that is the object of the procedure. Procedures can be documented in system security and privacy plans or in one or more separate documents. Events that may precipitate an update to configuration management policy and procedures include, but are not limited to, assessment or audit findings, security incidents or breaches, or changes in applicable laws, executive orders, directives, regulations, policies, standards, and guidelines. Simply restating controls does not constitute an organizational policy or procedure.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CM-1</summary>

Determine if:

- **CM-01a.**
  - **CM-01a.[01]** a configuration management policy is developed and documented;
  - **CM-01a.[02]** the configuration management policy is disseminated to [Assignment: organization-defined personnel or roles];
  - **CM-01a.[03]** configuration management procedures to facilitate the implementation of the configuration management policy and associated configuration management controls are developed and documented;
  - **CM-01a.[04]** the configuration management procedures are disseminated to [Assignment: organization-defined personnel or roles];
  - **CM-01a.01**
    - **CM-01a.01(a)**
      - **CM-01a.01(a)[01]** the [Selection (one or more): organization-level; mission/business process-level; system-level] of the configuration management policy addresses purpose;
      - **CM-01a.01(a)[02]** the [Selection (one or more): organization-level; mission/business process-level; system-level] of the configuration management policy addresses scope;
      - **CM-01a.01(a)[03]** the [Selection (one or more): organization-level; mission/business process-level; system-level] of the configuration management policy addresses roles;
      - **CM-01a.01(a)[04]** the [Selection (one or more): organization-level; mission/business process-level; system-level] of the configuration management policy addresses responsibilities;
      - **CM-01a.01(a)[05]** the [Selection (one or more): organization-level; mission/business process-level; system-level] of the configuration management policy addresses management commitment;
      - **CM-01a.01(a)[06]** the [Selection (one or more): organization-level; mission/business process-level; system-level] of the configuration management policy addresses coordination among organizational entities;
      - **CM-01a.01(a)[07]** the [Selection (one or more): organization-level; mission/business process-level; system-level] of the configuration management policy addresses compliance;
    - **CM-01a.01(b)** the configuration management policy is consistent with applicable laws, Executive Orders, directives, regulations, policies, standards, and guidelines;
- **CM-01b.** the [Assignment: organization-defined official] is designated to manage the development, documentation, and dissemination of the configuration management policy and procedures;
- **CM-01c.**
  - **CM-01c.01**
    - **CM-01c.01[01]** the current configuration management policy is reviewed and updated [Assignment: organization-defined frequency];
    - **CM-01c.01[02]** the current configuration management policy is reviewed and updated following [Assignment: organization-defined events];
  - **CM-01c.02**
    - **CM-01c.02[01]** the current configuration management procedures are reviewed and updated [Assignment: organization-defined frequency];
    - **CM-01c.02[02]** the current configuration management procedures are reviewed and updated following [Assignment: organization-defined events].

**Examine:** Configuration management policy and procedures; security and privacy program policies and procedures; assessment or audit findings; documentation of security incidents or breaches; system security plan; privacy plan; risk management strategy; other relevant artifacts, documents, or records.

**Interview:** Organizational personnel with configuration management responsibilities; organizational personnel with information security and privacy responsibilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

CM-1 asks for a written configuration management policy, procedures that carry it out, an official who manages both, and a set review cycle. The [Configuration Management policy template](/templates/policies/cm/) meets the policy half through the sections every family policy shares. The procedures are yours to write.

**How the policy template meets each element.** The shared sections come before and after the policy statements, and each statement cites the CM-1 item it meets:

| CM-1 element | Where the policy template meets it |
| --- | --- |
| Policy at the selected level (a.1) | Scope: the policy applies at the level you select, to every system and every person with access |
| Purpose, scope, roles, responsibilities, management commitment, coordination and compliance (a.1(a)) | The Purpose, Scope, Roles and responsibilities, Management commitment, Coordination and Compliance sections, one for each |
| Consistent with applicable laws and guidance (a.1(b)) | Compliance: the first statement, where you list the laws, regulations and standards that apply; the federal block adds FISMA and OMB Circular A-130 |
| Procedures (a.2) | Procedures: the managing official ensures documented procedures exist |
| Dissemination of policy and procedures (a) | Dissemination: one statement for the policy and one for the procedures, each to the roles you name |
| Designated official (b) | Roles and responsibilities: the official who manages the policy and procedures |
| Review and update (c.1, c.2) | Review and update: a frequency and trigger events for the policy, and again for the procedures |

**Common implementations.** One organization-level policy, approved by a senior leader and published in the policy library. Procedures written for the work CM-2 to CM-12 describe:

- Setting, reviewing and keeping baseline configurations, and the secure configuration each component type starts from (CM-2, CM-6)
- Requesting, analyzing, approving, testing and recording changes, including preapproved standard changes and emergency changes (CM-3, CM-4)
- Limiting who can make changes, and how (CM-5)
- Removing functions, ports, protocols, services and software the system does not need (CM-7)
- Keeping the component inventory accurate (CM-8)
- Writing and maintaining each system's configuration management plan (CM-9)
- Tracking software licenses, and controlling the software users install (CM-10, CM-11)
- Recording where sensitive information is processed and stored (CM-12)

Four templates carry the procedures for each system: the [Configuration Management Plan](/templates/plans/configuration-management-plan/) (CM-9, with the change control board charter), the [baseline configuration standard](/templates/standards/baseline-configuration-standard/) (CM-2, CM-6 and CM-7, with the deviation register and scan evidence), the [change request form](/templates/forms/change-request-form/) (CM-3 and CM-4, with the security impact analysis) and the [component inventory](/templates/forms/component-inventory/) (CM-8). The [system security plan](/templates/plans/system-security-plan/) records where each is kept.

NIST's configuration management guide, SP 800-128, Guide for Security-Focused Configuration Management of Information Systems ([August 2011, with updates as of October 10, 2019](https://csrc.nist.gov/pubs/sp/800/128/upd1/final), final, no newer revision or draft as of September 2026), helps with writing the procedures. It organizes the work in four phases: planning; identifying and implementing configurations; controlling configuration changes; and monitoring. Writing the policy and procedures is part of planning. Its appendices include a sample outline for a configuration management plan, a sample change request, a sample change control board charter and a security impact analysis template.

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

The trigger events follow NIST's CM-1 discussion. For CM, the people who carry out the procedures are, for example, system administrators, developers and release engineers, the members of each change control board, and the security team. The Chief Information Security Officer often delegates the day-to-day management to the head of IT operations. A new configuration management or deployment tool, a move to infrastructure as code or a cloud platform, or a new version of a secure configuration the organization uses is a typical procedure trigger.

**Evidence assessors ask for.**

- The approved policy, with the approver, the approval date and the version history
- The procedures, and who owns each one
- The record naming the official who manages the policy and procedures
- Records showing dissemination, including to the administrators and developers who make changes
- Evidence of the last review of the policy and of each procedure, with the changes made

**Inheritance.** CM-1 is usually a common control, provided once for the organization. A system inherits the organization's policy and records that in its security plan. It adds its own procedures only where it works differently, for example a system whose changes go through its own deployment pipeline and board.

**Common findings.**

- A policy that restates the CM controls but has no procedures behind it. NIST's discussion of CM-1 says restating controls is not a policy or procedure.
- The policy or procedures not reviewed within the stated period, or not updated after an unauthorized change caused an incident.
- Procedures written for a manual change process that no longer matches the deployment pipeline in use.
- No evidence that the procedures reached the administrators and developers who make changes.

**Enhancements in the Moderate baseline.** CM-1 has no enhancements.
