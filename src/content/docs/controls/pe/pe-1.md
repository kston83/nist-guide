---
title: 'PE-1 Policy and Procedures'
description: 'NIST SP 800-53 Rev. 5 control PE-1, Policy and Procedures: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PE-1 Policy and Procedures'
  order: 1
control:
  id: PE-1
  family: PE
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | None |

**Related controls:** [AT-3](/controls/at/at-3/), [PM-9](/controls/pm/pm-9/), [PS-8](/controls/ps/ps-8/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Develop, document, and disseminate to [Assignment: organization-defined personnel or roles]:
  - **1.** [Selection (one or more): organization-level; mission/business process-level; system-level] physical and environmental protection policy that:
    - **(a)** Addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and
    - **(b)** Is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines; and
  - **2.** Procedures to facilitate the implementation of the physical and environmental protection policy and the associated physical and environmental protection controls;
- **b.** Designate an [Assignment: organization-defined official] to manage the development, documentation, and dissemination of the physical and environmental protection policy and procedures; and
- **c.** Review and update the current physical and environmental protection:
  - **1.** Policy [Assignment: organization-defined frequency] and following [Assignment: organization-defined events] ; and
  - **2.** Procedures [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].

<details>
<summary>NIST discussion</summary>

Physical and environmental protection policy and procedures address the controls in the PE family that are implemented within systems and organizations. The risk management strategy is an important factor in establishing such policies and procedures. Policies and procedures contribute to security and privacy assurance. Therefore, it is important that security and privacy programs collaborate on the development of physical and environmental protection policy and procedures. Security and privacy program policies and procedures at the organization level are preferable, in general, and may obviate the need for mission- or system-specific policies and procedures. The policy can be included as part of the general security and privacy policy or be represented by multiple policies that reflect the complex nature of organizations. Procedures can be established for security and privacy programs, for mission or business processes, and for systems, if needed. Procedures describe how the policies or controls are implemented and can be directed at the individual or role that is the object of the procedure. Procedures can be documented in system security and privacy plans or in one or more separate documents. Events that may precipitate an update to physical and environmental protection policy and procedures include assessment or audit findings, security incidents or breaches, or changes in applicable laws, executive orders, directives, regulations, policies, standards, and guidelines. Simply restating controls does not constitute an organizational policy or procedure.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PE-1</summary>

Determine if:

- **PE-01a.**
  - **PE-01a.[01]** a physical and environmental protection policy is developed and documented;
  - **PE-01a.[02]** the physical and environmental protection policy is disseminated to [Assignment: organization-defined personnel or roles];
  - **PE-01a.[03]** physical and environmental protection procedures to facilitate the implementation of the physical and environmental protection policy and associated physical and environmental protection controls are developed and documented;
  - **PE-01a.[04]** the physical and environmental protection procedures are disseminated to [Assignment: organization-defined personnel or roles];
  - **PE-01a.01**
    - **PE-01a.01(a)**
      - **PE-01a.01(a)[01]** the [Selection (one or more): organization-level; mission/business process-level; system-level] physical and environmental protection policy addresses purpose;
      - **PE-01a.01(a)[02]** the [Selection (one or more): organization-level; mission/business process-level; system-level] physical and environmental protection policy addresses scope;
      - **PE-01a.01(a)[03]** the [Selection (one or more): organization-level; mission/business process-level; system-level] physical and environmental protection policy addresses roles;
      - **PE-01a.01(a)[04]** the [Selection (one or more): organization-level; mission/business process-level; system-level] physical and environmental protection policy addresses responsibilities;
      - **PE-01a.01(a)[05]** the [Selection (one or more): organization-level; mission/business process-level; system-level] physical and environmental protection policy addresses management commitment;
      - **PE-01a.01(a)[06]** the [Selection (one or more): organization-level; mission/business process-level; system-level] physical and environmental protection policy addresses coordination among organizational entities;
      - **PE-01a.01(a)[07]** the [Selection (one or more): organization-level; mission/business process-level; system-level] physical and environmental protection policy addresses compliance;
    - **PE-01a.01(b)** the [Selection (one or more): organization-level; mission/business process-level; system-level] physical and environmental protection policy is consistent with applicable laws, Executive Orders, directives, regulations, policies, standards, and guidelines;
- **PE-01b.** the [Assignment: organization-defined official] is designated to manage the development, documentation, and dissemination of the physical and environmental protection policy and procedures;
- **PE-01c.**
  - **PE-01c.01**
    - **PE-01c.01[01]** the current physical and environmental protection policy is reviewed and updated [Assignment: organization-defined frequency];
    - **PE-01c.01[02]** the current physical and environmental protection policy is reviewed and updated following [Assignment: organization-defined events];
  - **PE-01c.02**
    - **PE-01c.02[01]** the current physical and environmental protection procedures are reviewed and updated [Assignment: organization-defined frequency];
    - **PE-01c.02[02]** the current physical and environmental protection procedures are reviewed and updated following [Assignment: organization-defined events].

**Examine:** Physical and environmental protection policy and procedures; system security plan; privacy plan; organizational risk management strategy; other relevant documents or records.

**Interview:** Organizational personnel with physical and environmental protection responsibilities; organizational personnel with information security and privacy responsibilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PE-1 asks for a written physical and environmental protection policy, procedures that carry it out, an official who manages both, and a set review cycle. The [Physical and Environmental Protection policy template](/templates/policies/pe/) meets the policy half through the sections every family policy shares, and its [decision worksheet](/templates/worksheets/pe/) lists every choice the family forces, with typical values and who decides. The procedures are yours to write. Physical security often sits outside the IT organization, with a facilities manager or facility security officer, so the policy names the facilities manager as its accountable role and managing official.

**How the policy template meets each element.** The shared sections come before and after the policy statements, and each statement cites the PE-1 item it meets:

| PE-1 element | Where the policy template meets it |
| --- | --- |
| Policy at the selected level (a.1) | Scope: the policy applies at the level you select, to every system and every person with access |
| Purpose, scope, roles, responsibilities, management commitment, coordination and compliance (a.1(a)) | The Purpose, Scope, Roles and responsibilities, Management commitment, Coordination and Compliance sections, one for each |
| Consistent with applicable laws and guidance (a.1(b)) | Compliance: the first statement, where you list the laws, regulations and standards that apply; the federal block adds FISMA and OMB Circular A-130 |
| Procedures (a.2) | Procedures: the managing official ensures documented procedures exist |
| Dissemination of policy and procedures (a) | Dissemination: one statement for the policy and one for the procedures, each to the roles you name |
| Designated official (b) | Roles and responsibilities: the official who manages the policy and procedures |
| Review and update (c.1, c.2) | Review and update: a frequency and trigger events for the policy, and again for the procedures |

**Common implementations.** One organization-level policy, approved by a senior leader and published in the policy library. Procedures written for the work PE-2 to PE-17 describe:

- Requesting, approving, issuing and removing physical access, and reviewing the access list (PE-2), using the [physical access list](/templates/forms/physical-access-list/)
- Operating the physical access control system and guard posts, escorting visitors, and inventorying and changing keys, combinations and badges (PE-3)
- Receiving, badging, escorting and recording visitors, and reviewing the [visitor log](/templates/forms/visitor-log/) (PE-8)
- Reviewing physical access logs, responding to alarms, and reporting physical security incidents (PE-6)
- Protecting wiring closets, cabling and output devices (PE-4, PE-5)
- Operating, testing and maintaining power, emergency lighting, fire, environmental and water protection in server rooms and data centers (PE-9 to PE-15)
- Authorizing and recording system components that enter and leave the facility (PE-16), and the controls for alternate work sites (PE-17)

**Organization-defined parameters.** The shared sections leave these as fields to fill. Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Who receives the policy (a) | Everyone within its scope, through the policy library |
| Who receives the procedures (a) | The people who carry them out, and the system owners |
| Policy level (a.1) | Organization-level |
| Official who manages the policy and procedures (b) | Facilities manager |
| Policy review frequency (c.1) | Annually |
| Events that trigger a policy review (c.1) | Assessment or audit findings, security incidents or breaches, and changes in applicable laws, executive orders, directives, regulations, policies, standards or guidelines |
| Procedure review frequency (c.2) | Annually |
| Events that trigger a procedure review (c.2) | The same events as the policy, and changes to the systems, tools or services the procedures describe |

The trigger events follow NIST's PE-1 discussion. For PE, the people who carry out the procedures are, for example, the reception and guard staff, the badge office, the facilities and building engineering staff who run power, fire and cooling equipment, the data center or server room operators, the security operations team that reviews physical access logs, and the supervisors and system owners who request and approve access. The facilities manager may delegate the day-to-day management to a facility security officer. Typical procedure triggers for PE are a move to a new building, a new facility, colocation provider or cloud provider, a new physical access control system or visitor management system, a change of guard contractor, and a new risk assessment of the facility.

**Evidence assessors ask for.**

- The approved policy, with the approver, the approval date and the version history
- The procedures, and who owns each one, including procedures run by building management or a guard contractor
- The record naming the official who manages the policy and procedures
- Records showing dissemination, including to reception, guard and facilities staff
- Evidence of the last review of the policy and of each procedure, with the changes made

**Inheritance.** PE-1 is usually a common control, provided once for the organization. A system inherits the organization's policy and records that in its [system security plan](/templates/plans/system-security-plan/). For a system hosted entirely in a cloud service or colocation data center, the provider's own physical and environmental policy covers its facility and is inherited with its other PE controls; the organization's policy still covers its own offices, wiring closets and any equipment rooms, and the plan says which applies where.

**Common findings.**

- A policy that restates the PE controls but has no procedures behind it. NIST's discussion of PE-1 says restating controls is not a policy or procedure.
- Physical security procedures kept by facilities or a landlord that the security program has never seen, or that contradict the policy.
- The policy or procedures not reviewed within the stated period, or not updated after a move to a new building.
- A cloud-hosted system that marks every PE control "not applicable" instead of recording which are inherited from the provider and which the organization still meets for its own offices.

**Enhancements in the Moderate baseline.** PE-1 has no enhancements.
