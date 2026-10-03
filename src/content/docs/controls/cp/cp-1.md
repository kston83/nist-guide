---
title: 'CP-1 Policy and Procedures'
description: 'NIST SP 800-53 Rev. 5 control CP-1, Policy and Procedures: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CP-1 Policy and Procedures'
  order: 1
control:
  id: CP-1
  family: CP
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
  - **1.** [Selection (one or more): organization-level; mission/business process-level; system-level] contingency planning policy that:
    - **(a)** Addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and
    - **(b)** Is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines; and
  - **2.** Procedures to facilitate the implementation of the contingency planning policy and the associated contingency planning controls;
- **b.** Designate an [Assignment: organization-defined official] to manage the development, documentation, and dissemination of the contingency planning policy and procedures; and
- **c.** Review and update the current contingency planning:
  - **1.** Policy [Assignment: organization-defined frequency] and following [Assignment: organization-defined events] ; and
  - **2.** Procedures [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].

<details>
<summary>NIST discussion</summary>

Contingency planning policy and procedures address the controls in the CP family that are implemented within systems and organizations. The risk management strategy is an important factor in establishing such policies and procedures. Policies and procedures contribute to security and privacy assurance. Therefore, it is important that security and privacy programs collaborate on the development of contingency planning policy and procedures. Security and privacy program policies and procedures at the organization level are preferable, in general, and may obviate the need for mission- or system-specific policies and procedures. The policy can be included as part of the general security and privacy policy or be represented by multiple policies that reflect the complex nature of organizations. Procedures can be established for security and privacy programs, for mission or business processes, and for systems, if needed. Procedures describe how the policies or controls are implemented and can be directed at the individual or role that is the object of the procedure. Procedures can be documented in system security and privacy plans or in one or more separate documents. Events that may precipitate an update to contingency planning policy and procedures include assessment or audit findings, security incidents or breaches, or changes in laws, executive orders, directives, regulations, policies, standards, and guidelines. Simply restating controls does not constitute an organizational policy or procedure.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CP-1</summary>

Determine if:

- **CP-01a.**
  - **CP-01a.[01]** a contingency planning policy is developed and documented;
  - **CP-01a.[02]** the contingency planning policy is disseminated to [Assignment: organization-defined personnel or roles];
  - **CP-01a.[03]** contingency planning procedures to facilitate the implementation of the contingency planning policy and associated contingency planning controls are developed and documented;
  - **CP-01a.[04]** the contingency planning procedures are disseminated to [Assignment: organization-defined personnel or roles];
  - **CP-01a.01**
    - **CP-01a.01(a)**
      - **CP-01a.01(a)[01]** the [Selection (one or more): organization-level; mission/business process-level; system-level] contingency planning policy addresses purpose;
      - **CP-01a.01(a)[02]** the [Selection (one or more): organization-level; mission/business process-level; system-level] contingency planning policy addresses scope;
      - **CP-01a.01(a)[03]** the [Selection (one or more): organization-level; mission/business process-level; system-level] contingency planning policy addresses roles;
      - **CP-01a.01(a)[04]** the [Selection (one or more): organization-level; mission/business process-level; system-level] contingency planning policy addresses responsibilities;
      - **CP-01a.01(a)[05]** the [Selection (one or more): organization-level; mission/business process-level; system-level] contingency planning policy addresses management commitment;
      - **CP-01a.01(a)[06]** the [Selection (one or more): organization-level; mission/business process-level; system-level] contingency planning policy addresses coordination among organizational entities;
      - **CP-01a.01(a)[07]** the [Selection (one or more): organization-level; mission/business process-level; system-level] contingency planning policy addresses compliance;
    - **CP-01a.01(b)** the [Selection (one or more): organization-level; mission/business process-level; system-level] contingency planning policy is consistent with applicable laws, Executive Orders, directives, regulations, policies, standards, and guidelines;
- **CP-01b.** the [Assignment: organization-defined official] is designated to manage the development, documentation, and dissemination of the contingency planning policy and procedures;
- **CP-01c.**
  - **CP-01c.01**
    - **CP-01c.01[01]** the current contingency planning policy is reviewed and updated [Assignment: organization-defined frequency];
    - **CP-01c.01[02]** the current contingency planning policy is reviewed and updated following [Assignment: organization-defined events];
  - **CP-01c.02**
    - **CP-01c.02[01]** the current contingency planning procedures are reviewed and updated [Assignment: organization-defined frequency];
    - **CP-01c.02[02]** the current contingency planning procedures are reviewed and updated following [Assignment: organization-defined events].

**Examine:** Contingency planning policy and procedures; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency planning responsibilities; organizational personnel with information security and privacy responsibilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

CP-1 asks for a written contingency planning policy, procedures that carry it out, an official who manages both, and a set review cycle. The [Contingency Planning policy template](/templates/policies/cp/) meets the policy half through the sections every family policy shares, and its [decision worksheet](/templates/worksheets/cp/) lists every choice the family forces, with typical values and who decides. The procedures are yours to write; each system's recovery steps live in its [contingency plan](/templates/plans/contingency-plan/) (CP-2), built on a [business impact analysis](/templates/reports/business-impact-analysis/).

[NIST SP 800-34 Rev. 1](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final), Contingency Planning Guide for Federal Information Systems (May 2010, updated November 11, 2010; current as of October 2026), section 3.1, says the policy statement should set the organization's contingency objectives and the framework and responsibilities for system contingency planning. It lists the key policy elements: roles and responsibilities, scope, resource requirements, training requirements, exercise and testing schedules, the plan maintenance schedule, and the minimum frequency of backups and storage of backup media. The shared sections cover roles, scope and resources (Management commitment). The CP policy statements cover the rest: training in CP-3, testing in CP-4, plan review in CP-2 and backups in CP-9.

**How the policy template meets each element.** The shared sections come before and after the policy statements, and each statement cites the CP-1 item it meets:

| CP-1 element | Where the policy template meets it |
| --- | --- |
| Policy at the selected level (a.1) | Scope: the policy applies at the level you select, to every system and every person with access |
| Purpose, scope, roles, responsibilities, management commitment, coordination and compliance (a.1(a)) | The Purpose, Scope, Roles and responsibilities, Management commitment, Coordination and Compliance sections, one for each |
| Consistent with applicable laws and guidance (a.1(b)) | Compliance: the first statement, where you list the laws, regulations and standards that apply; the federal block adds FISMA and OMB Circular A-130 |
| Procedures (a.2) | Procedures: the managing official ensures documented procedures exist |
| Dissemination of policy and procedures (a) | Dissemination: one statement for the policy and one for the procedures, each to the roles you name |
| Designated official (b) | Roles and responsibilities: the official who manages the policy and procedures |
| Review and update (c.1, c.2) | Review and update: a frequency and trigger events for the policy, and again for the procedures |

SP 800-34 also says the policy must reflect the system impact levels and the contingency controls each level requires. The CP policy does this through its baseline editions: a Low system has no alternate storage or processing site requirement, and a Moderate system adds CP-6, CP-7 and CP-8. Its decision worksheet also sets the kind of test each baseline needs (CP-4).

**Common implementations.** One organization-level policy, approved by a senior leader and published in the policy library. NIST's CP-1 discussion asks security and privacy programs to collaborate on it, which the shared Coordination section does by including the privacy function. SP 800-34 section 3.1 adds coordination with physical security, human resources, system operations and emergency preparedness, so name those owners in the Coordination section too. Procedures written for the work CP-2 to CP-10 describe:

- Running the business impact analysis, and writing, approving, distributing, reviewing and protecting each system's contingency plan (CP-2)
- Training people for their contingency roles, and keeping the content current (CP-3)
- Planning and running contingency plan tests, reviewing the results and tracking corrective actions (CP-4)
- Setting up and maintaining the alternate storage site, the alternate processing site and alternate telecommunications, with their agreements (CP-6, CP-7, CP-8)
- Making, protecting, transferring and test-restoring backups (CP-9)
- Activating the plan, recovering the system, validating it and declaring reconstitution complete (CP-10)

System-specific recovery objectives, contacts and steps go in the contingency plan and the [system security plan](/templates/plans/system-security-plan/).

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

The trigger events follow NIST's CP-1 discussion. For CP, the people who carry out the procedures are, for example, the contingency plan coordinators, the system and backup administrators, the network team, the service desk, and the facilities and communications staff each plan names. The Chief Information Security Officer often delegates the day-to-day management to a contingency planning or disaster recovery lead. Typical procedure triggers for CP are lessons learned from a test or an actual activation, a new backup service or alternate site, a move to a new hosting provider or region, and a change of telecommunications provider.

**Evidence assessors ask for.**

- The approved policy, with the approver, the approval date and the version history
- The procedures, and who owns each one, including the backup and restore runbooks
- The record naming the official who manages the policy and procedures
- Records showing dissemination, including to the facilities, communications and service desk staff, who are easy to miss
- Evidence of the last review of the policy and of each procedure, with the changes made, including changes after a test or an actual activation

**Inheritance.** CP-1 is usually a common control, provided once for the organization. A system inherits the organization's policy and records that in its system security plan. It adds its own procedures where it recovers differently, for example a system whose cloud provider runs backups and failover.

**Common findings.**

- A policy that restates the CP controls but has no procedures behind it. NIST's discussion of CP-1 says restating controls is not a policy or procedure.
- Recovery steps that exist only in the heads of a few administrators, or runbooks that name tools and sites no longer in use.
- The policy or procedures not reviewed within the stated period, or not updated after a move to a new data center or cloud region.
- A policy that does not say who sets recovery objectives, so each system owner picks numbers with no business input.

**Enhancements in the Moderate baseline.** CP-1 has no enhancements.

**Federal systems** (as of October 2026). Agency continuity programs follow FEMA's [Federal Continuity Directive: Federal Executive Branch Continuity Program Management Requirements](https://www.fema.gov/sites/default/files/documents/fema_oncp_fcd-federal-executive-branch-continuity-program-management-requirements.pdf) (August 2024), which rescinds and supersedes FCD-1 (January 2017), as section 1.1 states. FEMA's [continuity resources page](https://www.fema.gov/emergency-managers/national-preparedness/continuity/documents) still lists it, with the Essential Functions Risk Identification and Management directive of the same date. Coordinate the contingency planning policy with the agency's continuity program, so that system recovery priorities support its essential functions. The shared sections' federal block ties the policy to FISMA and OMB Circular A-130.
