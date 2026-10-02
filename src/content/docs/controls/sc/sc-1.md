---
title: 'SC-1 Policy and Procedures'
description: 'NIST SP 800-53 Rev. 5 control SC-1, Policy and Procedures: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SC-1 Policy and Procedures'
  order: 1
control:
  id: SC-1
  family: SC
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | None |

**Related controls:** [PM-9](/controls/pm/pm-9/), [PS-8](/controls/ps/ps-8/), [SA-8](/controls/sa/sa-8/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Develop, document, and disseminate to [Assignment: organization-defined personnel or roles]:
  - **1.** [Selection (one or more): organization-level; mission/business-process-level; system-level] system and communications protection policy that:
    - **(a)** Addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and
    - **(b)** Is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines; and
  - **2.** Procedures to facilitate the implementation of the system and communications protection policy and the associated system and communications protection controls;
- **b.** Designate an [Assignment: organization-defined official] to manage the development, documentation, and dissemination of the system and communications protection policy and procedures; and
- **c.** Review and update the current system and communications protection:
  - **1.** Policy [Assignment: organization-defined frequency] and following [Assignment: organization-defined events] ; and
  - **2.** Procedures [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].

<details>
<summary>NIST discussion</summary>

System and communications protection policy and procedures address the controls in the SC family that are implemented within systems and organizations. The risk management strategy is an important factor in establishing such policies and procedures. Policies and procedures contribute to security and privacy assurance. Therefore, it is important that security and privacy programs collaborate on the development of system and communications protection policy and procedures. Security and privacy program policies and procedures at the organization level are preferable, in general, and may obviate the need for mission- or system-specific policies and procedures. The policy can be included as part of the general security and privacy policy or be represented by multiple policies that reflect the complex nature of organizations. Procedures can be established for security and privacy programs, for mission or business processes, and for systems, if needed. Procedures describe how the policies or controls are implemented and can be directed at the individual or role that is the object of the procedure. Procedures can be documented in system security and privacy plans or in one or more separate documents. Events that may precipitate an update to system and communications protection policy and procedures include assessment or audit findings, security incidents or breaches, or changes in applicable laws, executive orders, directives, regulations, policies, standards, and guidelines. Simply restating controls does not constitute an organizational policy or procedure.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SC-1</summary>

Determine if:

- **SC-01a.**
  - **SC-01a.[01]** a system and communications protection policy is developed and documented;
  - **SC-01a.[02]** the system and communications protection policy is disseminated to [Assignment: organization-defined personnel or roles];
  - **SC-01a.[03]** system and communications protection procedures to facilitate the implementation of the system and communications protection policy and associated system and communications protection controls are developed and documented;
  - **SC-01a.[04]** the system and communications protection procedures are disseminated to [Assignment: organization-defined personnel or roles];
  - **SC-01a.01**
    - **SC-01a.01(a)**
      - **SC-01a.01(a)[01]** the [Selection (one or more): organization-level; mission/business-process-level; system-level] system and communications protection policy addresses purpose;
      - **SC-01a.01(a)[02]** the [Selection (one or more): organization-level; mission/business-process-level; system-level] system and communications protection policy addresses scope;
      - **SC-01a.01(a)[03]** the [Selection (one or more): organization-level; mission/business-process-level; system-level] system and communications protection policy addresses roles;
      - **SC-01a.01(a)[04]** the [Selection (one or more): organization-level; mission/business-process-level; system-level] system and communications protection policy addresses responsibilities;
      - **SC-01a.01(a)[05]** the [Selection (one or more): organization-level; mission/business-process-level; system-level] system and communications protection policy addresses management commitment;
      - **SC-01a.01(a)[06]** the [Selection (one or more): organization-level; mission/business-process-level; system-level] system and communications protection policy addresses coordination among organizational entities;
      - **SC-01a.01(a)[07]** the [Selection (one or more): organization-level; mission/business-process-level; system-level] system and communications protection policy addresses compliance;
    - **SC-01a.01(b)** the [Selection (one or more): organization-level; mission/business-process-level; system-level] system and communications protection policy is consistent with applicable laws, Executive Orders, directives, regulations, policies, standards, and guidelines;
- **SC-01b.** the [Assignment: organization-defined official] is designated to manage the development, documentation, and dissemination of the system and communications protection policy and procedures;
- **SC-01c.**
  - **SC-01c.01**
    - **SC-01c.01[01]** the current system and communications protection policy is reviewed and updated [Assignment: organization-defined frequency];
    - **SC-01c.01[02]** the current system and communications protection policy is reviewed and updated following [Assignment: organization-defined events];
  - **SC-01c.02**
    - **SC-01c.02[01]** the current system and communications protection procedures are reviewed and updated [Assignment: organization-defined frequency];
    - **SC-01c.02[02]** the current system and communications protection procedures are reviewed and updated following [Assignment: organization-defined events].

**Examine:** System and communications protection policy; system and communications protection procedures; system security plan; privacy plan; risk management strategy documentation; audit findings; other relevant documents or records.

**Interview:** Organizational personnel with system and communications protection responsibilities; organizational personnel with information security and privacy responsibilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

SC-1 asks for a written system and communications protection policy, procedures that carry it out, an official who manages both, and a set review cycle. The [System and Communications Protection policy template](/templates/policies/sc/) meets the policy half through the sections every family policy shares. The procedures are yours to write.

**How the policy template meets each element.** The shared sections come before and after the policy statements, and each statement cites the SC-1 item it meets:

| SC-1 element | Where the policy template meets it |
| --- | --- |
| Policy at the selected level (a.1) | Scope: the policy applies at the level you select, to every system and every person with access |
| Purpose, scope, roles, responsibilities, management commitment, coordination and compliance (a.1(a)) | The Purpose, Scope, Roles and responsibilities, Management commitment, Coordination and Compliance sections, one for each |
| Consistent with applicable laws and guidance (a.1(b)) | Compliance: the first statement, where you list the laws, regulations and standards that apply; the federal block adds FISMA and OMB Circular A-130 |
| Procedures (a.2) | Procedures: the managing official ensures documented procedures exist |
| Dissemination of policy and procedures (a) | Dissemination: one statement for the policy and one for the procedures, each to the roles you name |
| Designated official (b) | Roles and responsibilities: the official who manages the policy and procedures |
| Review and update (c.1, c.2) | Review and update: a frequency and trigger events for the policy, and again for the procedures |

**Common implementations.** One organization-level policy, approved by a senior leader and published in the policy library, with two standards that make its technical statements measurable: the [encryption and key management standard](/templates/standards/encryption-and-key-management-standard/) (SC-8, SC-12, SC-13, SC-17, SC-28) and the [boundary protection standard](/templates/standards/boundary-protection-standard/) (SC-7). Procedures written for the work the SC controls describe:

- Requesting, approving, implementing and reviewing firewall, security group and proxy rules, and adding or removing an external connection (SC-7)
- Keeping management interfaces apart from user interfaces, and reachable only from the management network (SC-2)
- Configuring and testing TLS and other protocols for information in transit (SC-8)
- Generating, distributing, storing, rotating, recovering and destroying keys, and responding to a key compromise (SC-12)
- Requesting, issuing, renewing and revoking certificates, and managing trust stores (SC-17)
- Choosing approved cryptography and recording validated modules in the cryptographic inventory (SC-13)
- Enforcing encryption at rest for new stores, devices and backups (SC-28)
- Engaging the denial-of-service protection service and responding to an attack (SC-5)
- Configuring conferencing rooms and devices, and approving remote activation exceptions (SC-15)

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

The trigger events follow NIST's SC-1 discussion. For SC, the people who carry out the procedures are, for example, network and cloud engineers, system administrators, the key custodians and the team that runs the key management service and certificate authority, developers who build cryptography or session handling into applications, and the staff who set up conferencing rooms. The Chief Information Security Officer often delegates the day-to-day management to the head of security engineering or network security. Typical procedure triggers for SC are a new cloud or hosting provider, a new managed interface or remote access service, NIST deprecating an algorithm or key length the organization uses, and a cryptographic module losing its validation; the encryption and key management standard lists the last two as triggers for its own review.

**Evidence assessors ask for.**

- The approved policy, with the approver, the approval date and the version history
- The procedures and standards, and who owns each one
- The record naming the official who manages the policy and procedures
- Records showing dissemination, including to the engineers who change boundary rules and the custodians who administer keys
- Evidence of the last review of the policy and of each procedure, with the changes made

**Inheritance.** SC-1 is usually a common control, provided once for the organization. A system inherits the organization's policy and records that in its [system security plan](/templates/plans/system-security-plan/). It adds its own procedures only where its protections work differently, for example a system that runs its own key management or a boundary its provider operates.

**Common findings.**

- A policy that restates the SC controls but has no procedures or standards behind it. NIST's discussion of SC-1 says restating controls is not a policy or procedure.
- The policy or procedures not reviewed within the stated period.
- A policy that says information must be encrypted but no standard that says with what, so each system chooses its own algorithms and key handling.
- Procedures written for the data center that do not cover the cloud environments where most systems now run.

**Enhancements in the Moderate baseline.** SC-1 has no enhancements.
