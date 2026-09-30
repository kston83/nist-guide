---
title: 'MA-1 Policy and Procedures'
description: 'NIST SP 800-53 Rev. 5 control MA-1, Policy and Procedures: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'MA-1 Policy and Procedures'
  order: 1
control:
  id: MA-1
  family: MA
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
  - **1.** [Selection (one or more): organization-level; mission/business process-level; system-level] maintenance policy that:
    - **(a)** Addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and
    - **(b)** Is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines; and
  - **2.** Procedures to facilitate the implementation of the maintenance policy and the associated maintenance controls;
- **b.** Designate an [Assignment: organization-defined official] to manage the development, documentation, and dissemination of the maintenance policy and procedures; and
- **c.** Review and update the current maintenance:
  - **1.** Policy [Assignment: organization-defined frequency] and following [Assignment: organization-defined events] ; and
  - **2.** Procedures [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].

<details>
<summary>NIST discussion</summary>

Maintenance policy and procedures address the controls in the MA family that are implemented within systems and organizations. The risk management strategy is an important factor in establishing such policies and procedures. Policies and procedures contribute to security and privacy assurance. Therefore, it is important that security and privacy programs collaborate on the development of maintenance policy and procedures. Security and privacy program policies and procedures at the organization level are preferable, in general, and may obviate the need for mission- or system-specific policies and procedures. The policy can be included as part of the general security and privacy policy or be represented by multiple policies that reflect the complex nature of organizations. Procedures can be established for security and privacy programs, for mission or business processes, and for systems, if needed. Procedures describe how the policies or controls are implemented and can be directed at the individual or role that is the object of the procedure. Procedures can be documented in system security and privacy plans or in one or more separate documents. Events that may precipitate an update to maintenance policy and procedures assessment or audit findings, security incidents or breaches, or changes in applicable laws, executive orders, directives, regulations, policies, standards, and guidelines. Simply restating controls does not constitute an organizational policy or procedure.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for MA-1</summary>

Determine if:

- **MA-01a.**
  - **MA-01a.[01]** a maintenance policy is developed and documented;
  - **MA-01a.[02]** the maintenance policy is disseminated to [Assignment: organization-defined personnel or roles];
  - **MA-01a.[03]** maintenance procedures to facilitate the implementation of the maintenance policy and associated maintenance controls are developed and documented;
  - **MA-01a.[04]** the maintenance procedures are disseminated to [Assignment: organization-defined personnel or roles];
  - **MA-01a.01**
    - **MA-01a.01(a)**
      - **MA-01a.01(a)[01]** the [Selection (one or more): organization-level; mission/business process-level; system-level] maintenance policy addresses purpose;
      - **MA-01a.01(a)[02]** the [Selection (one or more): organization-level; mission/business process-level; system-level] maintenance policy addresses scope;
      - **MA-01a.01(a)[03]** the [Selection (one or more): organization-level; mission/business process-level; system-level] maintenance policy addresses roles;
      - **MA-01a.01(a)[04]** the [Selection (one or more): organization-level; mission/business process-level; system-level] maintenance policy addresses responsibilities;
      - **MA-01a.01(a)[05]** the [Selection (one or more): organization-level; mission/business process-level; system-level] maintenance policy addresses management commitment;
      - **MA-01a.01(a)[06]** the [Selection (one or more): organization-level; mission/business process-level; system-level] maintenance policy addresses coordination among organizational entities;
      - **MA-01a.01(a)[07]** the [Selection (one or more): organization-level; mission/business process-level; system-level] maintenance policy addresses compliance;
    - **MA-01a.01(b)** the [Selection (one or more): organization-level; mission/business process-level; system-level] maintenance policy is consistent with applicable laws, Executive Orders, directives, regulations, policies, standards, and guidelines;
- **MA-01b.** the [Assignment: organization-defined official] is designated to manage the development, documentation, and dissemination of the maintenance policy and procedures;
- **MA-01c.**
  - **MA-01c.01**
    - **MA-01c.01[01]** the current maintenance policy is reviewed and updated [Assignment: organization-defined frequency];
    - **MA-01c.01[02]** the current maintenance policy is reviewed and updated following [Assignment: organization-defined events];
  - **MA-01c.02**
    - **MA-01c.02[01]** the current maintenance procedures are reviewed and updated [Assignment: organization-defined frequency];
    - **MA-01c.02[02]** the current maintenance procedures are reviewed and updated following [Assignment: organization-defined events].

**Examine:** Maintenance policy and procedures; system security plan; privacy plan; organizational risk management strategy; other relevant documents or records.

**Interview:** Organizational personnel with maintenance responsibilities; organizational personnel with information security and privacy responsibilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

MA-1 asks for a written maintenance policy, procedures that carry it out, an official who manages both, and a set review cycle. The [Maintenance policy template](/templates/policies/ma/) meets the policy half through the sections every family policy shares. The procedures are yours to write.

**How the policy template meets each element.** The shared sections come before and after the policy statements, and each statement cites the MA-1 item it meets:

| MA-1 element | Where the policy template meets it |
| --- | --- |
| Policy at the selected level (a.1) | Scope: the policy applies at the level you select, to every system and every person with access |
| Purpose, scope, roles, responsibilities, management commitment, coordination and compliance (a.1(a)) | The Purpose, Scope, Roles and responsibilities, Management commitment, Coordination and Compliance sections, one for each |
| Consistent with applicable laws and guidance (a.1(b)) | Compliance: the first statement, where you list the laws, regulations and standards that apply; the federal block adds FISMA and OMB Circular A-130 |
| Procedures (a.2) | Procedures: the managing official ensures documented procedures exist |
| Dissemination of policy and procedures (a) | Dissemination: one statement for the policy and one for the procedures, each to the roles you name |
| Designated official (b) | Roles and responsibilities: the official who manages the policy and procedures |
| Review and update (c.1, c.2) | Review and update: a frequency and trigger events for the policy, and again for the procedures |

**Common implementations.** One organization-level policy, approved by a senior leader and published in the policy library. Procedures written for the work MA-2 to MA-6 describe:

- Scheduling, approving, monitoring and recording maintenance, and checking the controls afterward (MA-2)
- Approving a component's removal for off-site repair, and sanitizing its media first (MA-2)
- Approving, inspecting and reviewing maintenance tools, and handling a vendor's equipment when it leaves (MA-3)
- Approving, connecting, authenticating, monitoring and ending nonlocal maintenance sessions (MA-4)
- Authorizing maintenance organizations and personnel, and escorting those without the required access (MA-5)
- Keeping maintenance contracts and spare parts that meet the recovery time objective (MA-6)

The [maintenance log](/templates/forms/maintenance-log/) is the record most of these procedures leave behind: the register of activities, the authorized personnel list and the approved tools list.

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

The trigger events follow NIST's MA-1 discussion. For MA, the people who carry out the procedures are, for example, system administrators and IT operations staff, the staff who escort or supervise maintenance personnel, the account managers who enable maintenance accounts, and the procurement staff who write maintenance contracts. The Chief Information Security Officer often delegates the day-to-day management to the head of IT operations. A new maintenance provider or contract, a new remote support tool, or moving components to a cloud service, where the provider does the maintenance, is a typical procedure trigger.

**Evidence assessors ask for.**

- The approved policy, with the approver, the approval date and the version history
- The procedures, and who owns each one
- The record naming the official who manages the policy and procedures
- Records showing dissemination, including to the staff who escort maintenance personnel and approve sessions
- Evidence of the last review of the policy and of each procedure, with the changes made

**Inheritance.** MA-1 is usually a common control, provided once for the organization. A system inherits the organization's policy and records that in its [system security plan](/templates/plans/system-security-plan/). It adds its own procedures only where its maintenance works differently, for example specialized equipment serviced under its own vendor contract.

**Common findings.**

- A policy that restates the MA controls but has no procedures behind it. NIST's discussion of MA-1 says restating controls is not a policy or procedure.
- The policy or procedures not reviewed within the stated period.
- Procedures that cover on-site hardware repair but not remote vendor support, which is where most maintenance now happens.
- No evidence that the procedures reached the people who escort maintenance personnel or approve remote sessions.

**Enhancements in the Moderate baseline.** MA-1 has no enhancements.
