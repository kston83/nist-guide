---
title: 'CA-1 Policy and Procedures'
description: 'NIST SP 800-53 Rev. 5 control CA-1, Policy and Procedures: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CA-1 Policy and Procedures'
  order: 1
control:
  id: CA-1
  family: CA
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
  - **1.** [Selection (one or more): organization-level; mission/business process-level; system-level] assessment, authorization, and monitoring policy that:
    - **(a)** Addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and
    - **(b)** Is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines; and
  - **2.** Procedures to facilitate the implementation of the assessment, authorization, and monitoring policy and the associated assessment, authorization, and monitoring controls;
- **b.** Designate an [Assignment: organization-defined official] to manage the development, documentation, and dissemination of the assessment, authorization, and monitoring policy and procedures; and
- **c.** Review and update the current assessment, authorization, and monitoring:
  - **1.** Policy [Assignment: organization-defined frequency] and following [Assignment: organization-defined events] ; and
  - **2.** Procedures [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].

<details>
<summary>NIST discussion</summary>

Assessment, authorization, and monitoring policy and procedures address the controls in the CA family that are implemented within systems and organizations. The risk management strategy is an important factor in establishing such policies and procedures. Policies and procedures contribute to security and privacy assurance. Therefore, it is important that security and privacy programs collaborate on the development of assessment, authorization, and monitoring policy and procedures. Security and privacy program policies and procedures at the organization level are preferable, in general, and may obviate the need for mission- or system-specific policies and procedures. The policy can be included as part of the general security and privacy policy or be represented by multiple policies that reflect the complex nature of organizations. Procedures can be established for security and privacy programs, for mission or business processes, and for systems, if needed. Procedures describe how the policies or controls are implemented and can be directed at the individual or role that is the object of the procedure. Procedures can be documented in system security and privacy plans or in one or more separate documents. Events that may precipitate an update to assessment, authorization, and monitoring policy and procedures include assessment or audit findings, security incidents or breaches, or changes in applicable laws, executive orders, directives, regulations, policies, standards, and guidelines. Simply restating controls does not constitute an organizational policy or procedure.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CA-1</summary>

Determine if:

- **CA-01a.**
  - **CA-01a.[01]** an assessment, authorization, and monitoring policy is developed and documented;
  - **CA-01a.[02]** the assessment, authorization, and monitoring policy is disseminated to [Assignment: organization-defined personnel or roles];
  - **CA-01a.[03]** assessment, authorization, and monitoring procedures to facilitate the implementation of the assessment, authorization, and monitoring policy and associated assessment, authorization, and monitoring controls are developed and documented;
  - **CA-01a.[04]** the assessment, authorization, and monitoring procedures are disseminated to [Assignment: organization-defined personnel or roles];
  - **CA-01a.01**
    - **CA-01a.01(a)**
      - **CA-01a.01(a)[01]** the [Selection (one or more): organization-level; mission/business process-level; system-level] assessment, authorization, and monitoring policy addresses purpose;
      - **CA-01a.01(a)[02]** the [Selection (one or more): organization-level; mission/business process-level; system-level] assessment, authorization, and monitoring policy addresses scope;
      - **CA-01a.01(a)[03]** the [Selection (one or more): organization-level; mission/business process-level; system-level] assessment, authorization, and monitoring policy addresses roles;
      - **CA-01a.01(a)[04]** the [Selection (one or more): organization-level; mission/business process-level; system-level] assessment, authorization, and monitoring policy addresses responsibilities;
      - **CA-01a.01(a)[05]** the [Selection (one or more): organization-level; mission/business process-level; system-level] assessment, authorization, and monitoring policy addresses management commitment;
      - **CA-01a.01(a)[06]** the [Selection (one or more): organization-level; mission/business process-level; system-level] assessment, authorization, and monitoring policy addresses coordination among organizational entities;
      - **CA-01a.01(a)[07]** the [Selection (one or more): organization-level; mission/business process-level; system-level] assessment, authorization, and monitoring policy addresses compliance;
    - **CA-01a.01(b)** the [Selection (one or more): organization-level; mission/business process-level; system-level] assessment, authorization, and monitoring policy is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines;
- **CA-01b.** the [Assignment: organization-defined official] is designated to manage the development, documentation, and dissemination of the assessment, authorization, and monitoring policy and procedures;
- **CA-01c.**
  - **CA-01c.01**
    - **CA-01c.01[01]** the current assessment, authorization, and monitoring policy is reviewed and updated [Assignment: organization-defined frequency];
    - **CA-01c.01[02]** the current assessment, authorization, and monitoring policy is reviewed and updated following [Assignment: organization-defined events];
  - **CA-01c.02**
    - **CA-01c.02[01]** the current assessment, authorization, and monitoring procedures are reviewed and updated [Assignment: organization-defined frequency];
    - **CA-01c.02[02]** the current assessment, authorization, and monitoring procedures are reviewed and updated following [Assignment: organization-defined events].

**Examine:** Assessment, authorization, and monitoring policy and procedures; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with assessment, authorization, and monitoring policy responsibilities; organizational personnel with information security and privacy responsibilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

CA-1 asks for a written assessment, authorization and monitoring policy, procedures that carry it out, an official who manages both, and a set review cycle. The [Assessment, Authorization, and Monitoring policy template](/templates/policies/ca/) meets the policy half through the sections every family policy shares. The procedures are yours to write.

**How the policy template meets each element.** The shared sections come before and after the policy statements, and each statement cites the CA-1 item it meets:

| CA-1 element | Where the policy template meets it |
| --- | --- |
| Policy at the selected level (a.1) | Scope: the policy applies at the level you select, to every system and every person with access |
| Purpose, scope, roles, responsibilities, management commitment, coordination and compliance (a.1(a)) | The Purpose, Scope, Roles and responsibilities, Management commitment, Coordination and Compliance sections, one for each |
| Consistent with applicable laws and guidance (a.1(b)) | Compliance: the first statement, where you list the laws, regulations and standards that apply; the federal block adds FISMA and OMB Circular A-130 |
| Procedures (a.2) | Procedures: the managing official ensures documented procedures exist |
| Dissemination of policy and procedures (a) | Dissemination: one statement for the policy and one for the procedures, each to the roles you name |
| Designated official (b) | Roles and responsibilities: the official who manages the policy and procedures |
| Review and update (c.1, c.2) | Review and update: a frequency and trigger events for the policy, and again for the procedures |

**Common implementations.** One organization-level policy, approved by a senior leader and published in the policy library. Procedures written for the work CA-2 to CA-9 describe: planning and running control assessments (with the [assessment plan](/templates/plans/security-and-privacy-assessment-plan/) and [assessment report](/templates/reports/security-and-privacy-assessment-report/) templates), recording weaknesses in the [plan of action and milestones](/templates/forms/plan-of-action-and-milestones/), assembling the authorization package and recording the authorizing official's decision, running continuous monitoring under the [Continuous Monitoring Strategy](/templates/plans/continuous-monitoring-strategy/), and approving information exchanges ([information exchange agreement](/templates/forms/information-exchange-agreement/)) and internal connections. Most organizations write these as one assessment and authorization procedure with a section per step, or place the system-specific parts in the [system security plan](/templates/plans/system-security-plan/). The policy's authorization statements should follow the risk tolerance in the [risk management strategy](/templates/plans/risk-management-strategy/).

**Organization-defined parameters.** The shared sections leave these as fields to fill. Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Who receives the policy (a) | Everyone within the policy's scope, through the policy library |
| Who receives the procedures (a) | The people who carry them out: assessors, system owners, system security officers and authorizing officials |
| Policy level (a.1) | Organization-level |
| Official who manages the policy and procedures (b) | The Chief Information Security Officer, or the assessment and authorization lead they delegate to |
| Policy review frequency (c.1) | Annually |
| Events that trigger a policy review (c.1) | A change in applicable laws or standards (such as a new revision of NIST SP 800-37 or SP 800-53A), a major incident, or an assessment or audit finding |
| Procedure review frequency (c.2) | Annually |
| Events that trigger a procedure review (c.2) | The same events, plus a change of assessment tools, of the governance, risk and compliance tool, or of who serves as authorizing official |

**Evidence assessors ask for.**

- The approved policy, with the approver, the approval date and the version history
- The procedures, and who owns each one
- The record naming the official who manages the policy and procedures
- Records showing dissemination, such as the policy library page or acknowledgment records
- Evidence of the last review of the policy and of each procedure, with the changes made

**Inheritance.** CA-1 is usually a common control, provided once for the organization. A system inherits the organization's policy and records that in its security plan. It adds its own procedures only where its assessment or monitoring differs, for example when an external party assesses it under a contract.

**Common findings.**

- A policy that restates the CA controls but has no procedures behind it. NIST's discussion of CA-1 says restating controls is not a policy or procedure.
- The policy or procedures not reviewed within the stated period, or not updated after an incident or finding.
- Procedures that do not match practice, such as a stated annual assessment cycle that the continuous monitoring strategy does not follow.
- No evidence that the procedures reached the assessors and system owners who follow them.

**Enhancements in the Moderate baseline.** CA-1 has no enhancements.

**Federal systems** (as of September 2026). FISMA requires each agency's security program to include periodic testing and evaluation of security controls "with a frequency depending on risk, but no less than annually", covering every system in the agency's inventory ([44 U.S.C. § 3554(b)(5)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title44-section3554&num=0&edition=prelim)), and a process for planning and carrying out remedial action (§ 3554(b)(6)). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.d, requires agencies to designate senior Federal officials to authorize systems and common controls, and to develop information security and privacy continuous monitoring strategies (footnote 85 lets an agency combine the two). A federal CA policy and its procedures should carry out both.
