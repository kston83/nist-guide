---
title: 'PL-1 Policy and Procedures'
description: 'NIST SP 800-53 Rev. 5 control PL-1, Policy and Procedures: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PL-1 Policy and Procedures'
  order: 1
control:
  id: PL-1
  family: PL
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
  - **1.** [Selection (one or more): organization-level; mission/business process-level; system-level] planning policy that:
    - **(a)** Addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and
    - **(b)** Is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines; and
  - **2.** Procedures to facilitate the implementation of the planning policy and the associated planning controls;
- **b.** Designate an [Assignment: organization-defined official] to manage the development, documentation, and dissemination of the planning policy and procedures; and
- **c.** Review and update the current planning:
  - **1.** Policy [Assignment: organization-defined frequency] and following [Assignment: organization-defined events] ; and
  - **2.** Procedures [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].

<details>
<summary>NIST discussion</summary>

Planning policy and procedures for the controls in the PL family implemented within systems and organizations. The risk management strategy is an important factor in establishing such policies and procedures. Policies and procedures contribute to security and privacy assurance. Therefore, it is important that security and privacy programs collaborate on their development. Security and privacy program policies and procedures at the organization level are preferable, in general, and may obviate the need for mission level or system-specific policies and procedures. The policy can be included as part of the general security and privacy policy or be represented by multiple policies that reflect the complex nature of organizations. Procedures can be established for security and privacy programs, for mission/business processes, and for systems, if needed. Procedures describe how the policies or controls are implemented and can be directed at the individual or role that is the object of the procedure. Procedures can be documented in system security and privacy plans or in one or more separate documents. Events that may precipitate an update to planning policy and procedures include, but are not limited to, assessment or audit findings, security incidents or breaches, or changes in laws, executive orders, directives, regulations, policies, standards, and guidelines. Simply restating controls does not constitute an organizational policy or procedure.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PL-1</summary>

Determine if:

- **PL-01a.**
  - **PL-01a.[01]** a planning policy is developed and documented.
  - **PL-01a.[02]** the planning policy is disseminated to [Assignment: organization-defined personnel or roles];
  - **PL-01a.[03]** planning procedures to facilitate the implementation of the planning policy and associated planning controls are developed and documented;
  - **PL-01a.[04]** the planning procedures are disseminated to [Assignment: organization-defined personnel or roles];
  - **PL-01a.01**
    - **PL-01a.01(a)**
      - **PL-01a.01(a)[01]** the [Selection (one or more): organization-level; mission/business process-level; system-level] planning policy addresses purpose;
      - **PL-01a.01(a)[02]** the [Selection (one or more): organization-level; mission/business process-level; system-level] planning policy addresses scope;
      - **PL-01a.01(a)[03]** the [Selection (one or more): organization-level; mission/business process-level; system-level] planning policy addresses roles;
      - **PL-01a.01(a)[04]** the [Selection (one or more): organization-level; mission/business process-level; system-level] planning policy addresses responsibilities;
      - **PL-01a.01(a)[05]** the [Selection (one or more): organization-level; mission/business process-level; system-level] planning policy addresses management commitment;
      - **PL-01a.01(a)[06]** the [Selection (one or more): organization-level; mission/business process-level; system-level] planning policy addresses coordination among organizational entities;
      - **PL-01a.01(a)[07]** the [Selection (one or more): organization-level; mission/business process-level; system-level] planning policy addresses compliance;
    - **PL-01a.01(b)** the [Selection (one or more): organization-level; mission/business process-level; system-level] planning policy is consistent with applicable laws, Executive Orders, directives, regulations, policies, standards, and guidelines;
- **PL-01b.** the [Assignment: organization-defined official] is designated to manage the development, documentation, and dissemination of the planning policy and procedures;
- **PL-01c.**
  - **PL-01c.01**
    - **PL-01c.01[01]** the current planning policy is reviewed and updated [Assignment: organization-defined frequency];
    - **PL-01c.01[02]** the current planning policy is reviewed and updated following [Assignment: organization-defined events];
  - **PL-01c.02**
    - **PL-01c.02[01]** the current planning procedures are reviewed and updated [Assignment: organization-defined frequency];
    - **PL-01c.02[02]** the current planning procedures are reviewed and updated following [Assignment: organization-defined events].

**Examine:** Planning policy and procedures; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with planning responsibilities; organizational personnel with information security and privacy responsibilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PL-1 asks for a written planning policy, procedures that carry it out, an official who manages both, and a set review cycle. The [Planning policy template](/templates/policies/pl/) meets the policy half through the sections every family policy shares, and its [decision worksheet](/templates/worksheets/pl/) lists the choices the family forces, with typical values and who decides. The procedures are yours to write.

Like RA-1, NIST's PL-1 discussion calls the risk management strategy "an important factor" in setting the policy and procedures. Planning is where the strategy's decisions reach each system: the baseline, the tailoring and the security plan the authorizing official approves.

**How the policy template meets each element.** The shared sections come before and after the policy statements, and each statement cites the PL-1 item it meets:

| PL-1 element | Where the policy template meets it |
| --- | --- |
| Policy at the selected level (a.1) | Scope: the policy applies at the level you select, to every system and every person with access |
| Purpose, scope, roles, responsibilities, management commitment, coordination and compliance (a.1(a)) | The Purpose, Scope, Roles and responsibilities, Management commitment, Coordination and Compliance sections, one for each |
| Consistent with applicable laws and guidance (a.1(b)) | Compliance: the first statement, where you list the laws, regulations and standards that apply; the federal block adds FISMA and OMB Circular A-130 |
| Procedures (a.2) | Procedures: the managing official ensures documented procedures exist |
| Dissemination of policy and procedures (a) | Dissemination: one statement for the policy and one for the procedures, each to the roles you name |
| Designated official (b) | Roles and responsibilities: the official who manages the policy and procedures |
| Review and update (c.1, c.2) | Review and update: a frequency and trigger events for the policy, and again for the procedures |

**Common implementations.** One organization-level policy, approved by a senior leader and published in the policy library. NIST's PL-1 discussion asks security and privacy programs to collaborate on it, which the shared Coordination section does by including the privacy function. Procedures written for the work PL-2 to PL-11 describe:

- Writing, approving, distributing, reviewing, updating and protecting each system's security and privacy plans (PL-2), with the [System Security Plan template](/templates/plans/system-security-plan/), which follows [SP 800-18 Rev. 2](https://csrc.nist.gov/pubs/sp/800/18/r2/final) (June 2026)
- Issuing the [Rules of Behavior](/templates/forms/rules-of-behavior/), collecting acknowledgments before access, and reviewing the rules (PL-4)
- Developing and reviewing each system's security and privacy architectures (PL-8)
- Selecting the baseline from the categorization (PL-10) and tailoring it, with the rationale for each decision (PL-11)

The privacy-only PL-9 (central management) goes in the policy's Privacy edition. The program-level plans, such as the [Information Security Program Plan](/templates/plans/information-security-program-plan/), belong to the PM family.

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

The trigger events follow NIST's PL-1 discussion. For PL, the people who carry out the procedures are, for example, the system owners, the system security and privacy officers, the enterprise and security architects, and the account managers who check acknowledgments before granting access. The Chief Information Security Officer often delegates the day-to-day management to an authorization or compliance lead. Typical procedure triggers for PL are a new release of the SP 800-53 catalog or its baselines, a new overlay the organization must apply, and a change of governance, risk and compliance tool or plan format, such as a move to OSCAL.

**Evidence assessors ask for.**

- The approved policy, with the approver, the approval date and the version history
- The procedures, and who owns each one, including the security plan procedure and the rules of behavior procedure
- The record naming the official who manages the policy and procedures
- Records showing dissemination, including to the system owners and architects
- Evidence of the last review of the policy and of each procedure, with the changes made

**Inheritance.** PL-1 is usually a common control, provided once for the organization. A system inherits the organization's policy and records that in its system security plan. It rarely needs procedures of its own, since planning is done the same way for every system.

**Common findings.**

- A policy that restates the PL controls but has no procedures behind it. NIST's discussion of PL-1 says restating controls is not a policy or procedure.
- No procedure for keeping security plans current, so plans are updated only before an assessment.
- The policy or procedures not reviewed within the stated period, or not updated after a new catalog release or plan format.
- Procedures that name a plan template or tool no longer in use.

**Enhancements in the Moderate baseline.** PL-1 has no enhancements.

**Federal systems** (as of October 2026). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, sets requirements the PL procedures carry out. Section 4.h(6) and (7) require rules of behavior, including consequences for violating them, that employees and contractors read and agree to before they are granted access (PL-4). Section 5.d requires a justification, in the security plan or an overlay, for any tailoring that changes a baseline (PL-11). The shared sections' federal block ties the policy to FISMA and OMB Circular A-130.
