---
title: 'IR-1 Policy and Procedures'
description: 'NIST SP 800-53 Rev. 5 control IR-1, Policy and Procedures: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'IR-1 Policy and Procedures'
  order: 1
control:
  id: IR-1
  family: IR
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
  - **1.** [Selection (one or more): organization-level; mission/business process-level; system-level] incident response policy that:
    - **(a)** Addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and
    - **(b)** Is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines; and
  - **2.** Procedures to facilitate the implementation of the incident response policy and the associated incident response controls;
- **b.** Designate an [Assignment: organization-defined official] to manage the development, documentation, and dissemination of the incident response policy and procedures; and
- **c.** Review and update the current incident response:
  - **1.** Policy [Assignment: organization-defined frequency] and following [Assignment: organization-defined events] ; and
  - **2.** Procedures [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].

<details>
<summary>NIST discussion</summary>

Incident response policy and procedures address the controls in the IR family that are implemented within systems and organizations. The risk management strategy is an important factor in establishing such policies and procedures. Policies and procedures contribute to security and privacy assurance. Therefore, it is important that security and privacy programs collaborate on the development of incident response policy and procedures. Security and privacy program policies and procedures at the organization level are preferable, in general, and may obviate the need for mission- or system-specific policies and procedures. The policy can be included as part of the general security and privacy policy or be represented by multiple policies that reflect the complex nature of organizations. Procedures can be established for security and privacy programs, for mission or business processes, and for systems, if needed. Procedures describe how the policies or controls are implemented and can be directed at the individual or role that is the object of the procedure. Procedures can be documented in system security and privacy plans or in one or more separate documents. Events that may precipitate an update to incident response policy and procedures include assessment or audit findings, security incidents or breaches, or changes in laws, executive orders, directives, regulations, policies, standards, and guidelines. Simply restating controls does not constitute an organizational policy or procedure.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for IR-1</summary>

Determine if:

- **IR-01a.**
  - **IR-01a.[01]** an incident response policy is developed and documented;
  - **IR-01a.[02]** the incident response policy is disseminated to [Assignment: organization-defined personnel or roles];
  - **IR-01a.[03]** incident response procedures to facilitate the implementation of the incident response policy and associated incident response controls are developed and documented;
  - **IR-01a.[04]** the incident response procedures are disseminated to [Assignment: organization-defined personnel or roles];
  - **IR-01a.01**
    - **IR-01a.01(a)**
      - **IR-01a.01(a)[01]** the [Selection (one or more): organization-level; mission/business process-level; system-level] incident response policy addresses purpose;
      - **IR-01a.01(a)[02]** the [Selection (one or more): organization-level; mission/business process-level; system-level] incident response policy addresses scope;
      - **IR-01a.01(a)[03]** the [Selection (one or more): organization-level; mission/business process-level; system-level] incident response policy addresses roles;
      - **IR-01a.01(a)[04]** the [Selection (one or more): organization-level; mission/business process-level; system-level] incident response policy addresses responsibilities;
      - **IR-01a.01(a)[05]** the [Selection (one or more): organization-level; mission/business process-level; system-level] incident response policy addresses management commitment;
      - **IR-01a.01(a)[06]** the [Selection (one or more): organization-level; mission/business process-level; system-level] incident response policy addresses coordination among organizational entities;
      - **IR-01a.01(a)[07]** the [Selection (one or more): organization-level; mission/business process-level; system-level] incident response policy addresses compliance;
    - **IR-01a.01(b)** the [Selection (one or more): organization-level; mission/business process-level; system-level] incident response policy is consistent with applicable laws, Executive Orders, directives, regulations, policies, standards, and guidelines;
- **IR-01b.** the [Assignment: organization-defined official] is designated to manage the development, documentation, and dissemination of the incident response policy and procedures;
- **IR-01c.**
  - **IR-01c.01**
    - **IR-01c.01[01]** the current incident response policy is reviewed and updated [Assignment: organization-defined frequency];
    - **IR-01c.01[02]** the current incident response policy is reviewed and updated following [Assignment: organization-defined events];
  - **IR-01c.02**
    - **IR-01c.02[01]** the current incident response procedures are reviewed and updated [Assignment: organization-defined frequency];
    - **IR-01c.02[02]** the current incident response procedures are reviewed and updated following [Assignment: organization-defined events].

**Examine:** Incident response policy and procedures; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with incident response responsibilities; organizational personnel with information security and privacy responsibilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

IR-1 asks for a written incident response policy, procedures that carry it out, an official who manages both, and a set review cycle. The [Incident Response policy template](/templates/policies/ir/) meets the policy half through the sections every family policy shares, and its [decision worksheet](/templates/worksheets/ir/) lists every choice the family forces, with typical values and who decides. The procedures are yours to write; the [Incident Response Plan](/templates/plans/incident-response-plan/) template holds the organization's plan (IR-8), and an incident handling playbook is planned for this kit.

[NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final), Incident Response Recommendations and Considerations for Cybersecurity Risk Management: A CSF 2.0 Community Profile (April 2025; current as of October 2026), lists in section 2.3 the elements most incident response policies share. They are a statement of management commitment, purpose and objectives, scope, definitions of events and incidents, roles, responsibilities and authorities, guidelines for prioritizing incidents and estimating severity, and performance measures. The shared sections cover the first three and the roles; this kit puts definitions and severity in the plan's section 4 and the measures in its section 8.

**How the policy template meets each element.** The shared sections come before and after the policy statements, and each statement cites the IR-1 item it meets:

| IR-1 element | Where the policy template meets it |
| --- | --- |
| Policy at the selected level (a.1) | Scope: the policy applies at the level you select, to every system and every person with access |
| Purpose, scope, roles, responsibilities, management commitment, coordination and compliance (a.1(a)) | The Purpose, Scope, Roles and responsibilities, Management commitment, Coordination and Compliance sections, one for each |
| Consistent with applicable laws and guidance (a.1(b)) | Compliance: the first statement, where you list the laws, regulations and standards that apply; the federal block adds FISMA and OMB Circular A-130 |
| Procedures (a.2) | Procedures: the managing official ensures documented procedures exist |
| Dissemination of policy and procedures (a) | Dissemination: one statement for the policy and one for the procedures, each to the roles you name |
| Designated official (b) | Roles and responsibilities: the official who manages the policy and procedures |
| Review and update (c.1, c.2) | Review and update: a frequency and trigger events for the policy, and again for the procedures |

SP 800-61 Rev. 3 also names authorities, such as which roles may confiscate, disconnect or shut down technology assets. The plan's roles table has the system owner approve containment actions on their system and the Chief Information Security Officer declare major incidents. Add who decides when the system owner cannot be reached in time.

**Common implementations.** One organization-level policy, approved by a senior leader and published in the policy library. NIST's IR-1 discussion asks security and privacy programs to collaborate on it, which the shared Coordination section does by including the privacy function. Procedures written for the work IR-2 to IR-8 describe:

- Training people for their incident response roles, and keeping the content current (IR-2)
- Planning, running and reviewing incident response exercises, and coordinating them with contingency plan tests (IR-3, IR-3(2))
- Handling each type of incident, from detection to recovery and lessons learned (IR-4), usually as playbooks
- Opening, updating and closing incident records (IR-5)
- Reporting suspected incidents, notifying outside parties, and telling suppliers about incidents involving their products (IR-6, IR-6(1), IR-6(3))
- Answering users who need help handling or reporting an incident (IR-7, IR-7(1))
- Approving, distributing, updating and protecting the plan (IR-8)

System-specific contacts and recovery steps go in the plan's appendices and the [system security plan](/templates/plans/system-security-plan/).

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

The trigger events follow NIST's IR-1 discussion. For IR, the people who carry out the procedures are, for example, the incident response team, the security operations team, the service desk staff who take incident calls, the system owners, and the legal, communications and human resources staff the plan names. The Chief Information Security Officer often delegates the day-to-day management to the incident response lead. Typical procedure triggers for IR are lessons learned from an incident or exercise, a new notification duty in a law or contract, a new case management or security operations tool, and a change of retained incident response provider.

**Evidence assessors ask for.**

- The approved policy, with the approver, the approval date and the version history
- The procedures or playbooks, and who owns each one
- The record naming the official who manages the policy and procedures
- Records showing dissemination, including to service desk staff and the legal and communications functions, who are easy to miss
- Evidence of the last review of the policy and of each procedure, with the changes made, including changes after a major incident or exercise

**Inheritance.** IR-1 is usually a common control, provided once for the organization. A system inherits the organization's policy and records that in its system security plan. It adds its own procedures only where it responds differently, for example a system run by a cloud provider whose incident response team handles part of the work.

**Common findings.**

- A policy that restates the IR controls but has no procedures behind it. NIST's discussion of IR-1 says restating controls is not a policy or procedure.
- Procedures that exist only in the heads of the response team, or playbooks that name tools no longer in use.
- The policy or procedures not reviewed within the stated period, or not updated after a major incident exposed a gap.
- Privacy staff left out, so breach handling is missing from the procedures.

**Enhancements in the Moderate baseline.** IR-1 has no enhancements.

**Federal systems** (as of October 2026). FISMA requires each agency's information security program to include procedures for detecting, reporting and responding to security incidents, including notifying and consulting with the Federal information security incident center ([44 U.S.C. § 3554](https://www.govinfo.gov/link/uscode/44/3554?link-type=html)(b)(7), United States Code, 2024 edition). The shared sections' federal block ties the policy to FISMA and OMB Circular A-130; reporting to the Cybersecurity and Infrastructure Security Agency (CISA) is on the [IR-6](/controls/ir/ir-6/) page.
