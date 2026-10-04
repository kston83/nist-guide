---
title: 'RA-1 Policy and Procedures'
description: 'NIST SP 800-53 Rev. 5 control RA-1, Policy and Procedures: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'RA-1 Policy and Procedures'
  order: 1
control:
  id: RA-1
  family: RA
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
  - **1.** [Selection (one or more): organization-level; mission/business process-level; system-level] risk assessment policy that:
    - **(a)** Addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and
    - **(b)** Is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines; and
  - **2.** Procedures to facilitate the implementation of the risk assessment policy and the associated risk assessment controls;
- **b.** Designate an [Assignment: organization-defined official] to manage the development, documentation, and dissemination of the risk assessment policy and procedures; and
- **c.** Review and update the current risk assessment:
  - **1.** Policy [Assignment: organization-defined frequency] and following [Assignment: organization-defined events] ; and
  - **2.** Procedures [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].

<details>
<summary>NIST discussion</summary>

Risk assessment policy and procedures address the controls in the RA family that are implemented within systems and organizations. The risk management strategy is an important factor in establishing such policies and procedures. Policies and procedures contribute to security and privacy assurance. Therefore, it is important that security and privacy programs collaborate on the development of risk assessment policy and procedures. Security and privacy program policies and procedures at the organization level are preferable, in general, and may obviate the need for mission- or system-specific policies and procedures. The policy can be included as part of the general security and privacy policy or be represented by multiple policies reflecting the complex nature of organizations. Procedures can be established for security and privacy programs, for mission or business processes, and for systems, if needed. Procedures describe how the policies or controls are implemented and can be directed at the individual or role that is the object of the procedure. Procedures can be documented in system security and privacy plans or in one or more separate documents. Events that may precipitate an update to risk assessment policy and procedures include assessment or audit findings, security incidents or breaches, or changes in laws, executive orders, directives, regulations, policies, standards, and guidelines. Simply restating controls does not constitute an organizational policy or procedure.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for RA-1</summary>

Determine if:

- **RA-01a.**
  - **RA-01a.[01]** a risk assessment policy is developed and documented;
  - **RA-01a.[02]** the risk assessment policy is disseminated to [Assignment: organization-defined personnel or roles];
  - **RA-01a.[03]** risk assessment procedures to facilitate the implementation of the risk assessment policy and associated risk assessment controls are developed and documented;
  - **RA-01a.[04]** the risk assessment procedures are disseminated to [Assignment: organization-defined personnel or roles];
  - **RA-01a.01**
    - **RA-01a.01(a)**
      - **RA-01a.01(a)[01]** the [Selection (one or more): organization-level; mission/business process-level; system-level] risk assessment policy addresses purpose;
      - **RA-01a.01(a)[02]** the [Selection (one or more): organization-level; mission/business process-level; system-level] risk assessment policy addresses scope;
      - **RA-01a.01(a)[03]** the [Selection (one or more): organization-level; mission/business process-level; system-level] risk assessment policy addresses roles;
      - **RA-01a.01(a)[04]** the [Selection (one or more): organization-level; mission/business process-level; system-level] risk assessment policy addresses responsibilities;
      - **RA-01a.01(a)[05]** the [Selection (one or more): organization-level; mission/business process-level; system-level] risk assessment policy addresses management commitment;
      - **RA-01a.01(a)[06]** the [Selection (one or more): organization-level; mission/business process-level; system-level] risk assessment policy addresses coordination among organizational entities;
      - **RA-01a.01(a)[07]** the [Selection (one or more): organization-level; mission/business process-level; system-level] risk assessment policy addresses compliance;
    - **RA-01a.01(b)** the [Selection (one or more): organization-level; mission/business process-level; system-level] risk assessment policy is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines;
- **RA-01b.** the [Assignment: organization-defined official] is designated to manage the development, documentation, and dissemination of the risk assessment policy and procedures;
- **RA-01c.**
  - **RA-01c.01**
    - **RA-01c.01[01]** the current risk assessment policy is reviewed and updated [Assignment: organization-defined frequency];
    - **RA-01c.01[02]** the current risk assessment policy is reviewed and updated following [Assignment: organization-defined events];
  - **RA-01c.02**
    - **RA-01c.02[01]** the current risk assessment procedures are reviewed and updated [Assignment: organization-defined frequency];
    - **RA-01c.02[02]** the current risk assessment procedures are reviewed and updated following [Assignment: organization-defined events].

**Examine:** Risk assessment policy and procedures; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with risk assessment responsibilities; organizational personnel with security and privacy responsibilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

RA-1 asks for a written risk assessment policy, procedures that carry it out, an official who manages both, and a set review cycle. The [Risk Assessment policy template](/templates/policies/ra/) meets the policy half through the sections every family policy shares, and its [decision worksheet](/templates/worksheets/ra/) lists the choices the family forces, with typical values and who decides. The procedures are yours to write.

NIST's RA-1 discussion calls the risk management strategy "an important factor" in setting risk assessment policy and procedures. So point the policy and procedures to the organization's [Risk Management Strategy](/templates/plans/risk-management-strategy/) for the assessment method, the scales and the risk tolerance, rather than restating them. Every system then assesses and responds to risk the same way, and the results can be compared.

**How the policy template meets each element.** The shared sections come before and after the policy statements, and each statement cites the RA-1 item it meets:

| RA-1 element | Where the policy template meets it |
| --- | --- |
| Policy at the selected level (a.1) | Scope: the policy applies at the level you select, to every system and every person with access |
| Purpose, scope, roles, responsibilities, management commitment, coordination and compliance (a.1(a)) | The Purpose, Scope, Roles and responsibilities, Management commitment, Coordination and Compliance sections, one for each |
| Consistent with applicable laws and guidance (a.1(b)) | Compliance: the first statement, where you list the laws, regulations and standards that apply; the federal block adds FISMA and OMB Circular A-130 |
| Procedures (a.2) | Procedures: the managing official ensures documented procedures exist |
| Dissemination of policy and procedures (a) | Dissemination: one statement for the policy and one for the procedures, each to the roles you name |
| Designated official (b) | Roles and responsibilities: the official who manages the policy and procedures |
| Review and update (c.1, c.2) | Review and update: a frequency and trigger events for the policy, and again for the procedures |

**Common implementations.** One organization-level policy, approved by a senior leader and published in the policy library. NIST's RA-1 discussion asks security and privacy programs to collaborate on it, which the shared Coordination section does by including the privacy function. Procedures written for the work RA-2 to RA-9 describe:

- Categorizing a system and having the categorization approved (RA-2), with the [security categorization worksheet](/templates/forms/security-categorization-worksheet/)
- Conducting, documenting, reviewing, sharing and updating system risk assessments, including supply chain risk (RA-3, RA-3(1)), with the [risk assessment report](/templates/reports/risk-assessment-report/)
- Scanning for vulnerabilities, analyzing the results, remediating within set times and handling outside reports (RA-5), as the [vulnerability management standard](/templates/standards/vulnerability-management-standard/) sets out
- Deciding a response to each finding and recording risk acceptances (RA-7), in the [risk register](/templates/forms/risk-register/)
- Screening new systems and collections for privacy risk and conducting [privacy impact assessments](/templates/reports/privacy-impact-assessment/) (RA-8), where the Privacy baseline applies
- Performing a criticality analysis at set points in the system life cycle (RA-9)

System-specific results go in the [system security plan](/templates/plans/system-security-plan/) and the artifacts it references.

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

The trigger events follow NIST's RA-1 discussion. For RA, the people who carry out the procedures are, for example, the system owners and information owners, the system security officers, the vulnerability management team, the privacy office and the authorizing officials who approve categorizations and accept risk. The Chief Information Security Officer often delegates the day-to-day management to a risk management or governance, risk and compliance lead. Typical procedure triggers for RA are a change to the risk management strategy's method, scales or tolerance; a new scanning tool or service; and new external remediation deadlines, such as a regulator's or a customer's.

**Evidence assessors ask for.**

- The approved policy, with the approver, the approval date and the version history
- The procedures, and who owns each one, including the categorization, risk assessment, vulnerability management and risk acceptance procedures
- The record naming the official who manages the policy and procedures
- Records showing dissemination, including to the system owners and the vulnerability management team
- Evidence of the last review of the policy and of each procedure, with the changes made, including changes after the risk management strategy changed

**Inheritance.** RA-1 is usually a common control, provided once for the organization. A system inherits the organization's policy and records that in its system security plan. It adds its own procedures only where it assesses risk differently, for example a system whose cloud provider runs the vulnerability scanning.

**Common findings.**

- A policy that restates the RA controls but has no procedures behind it. NIST's discussion of RA-1 says restating controls is not a policy or procedure.
- Risk assessment procedures that use a different method or scale from the risk management strategy, so system risks cannot be compared or rolled up.
- The policy or procedures not reviewed within the stated period, or not updated after the risk management strategy or the scanning tools changed.
- No procedure for risk response, so findings sit with no decision and acceptances are made by whoever is available.

**Enhancements in the Moderate baseline.** RA-1 has no enhancements.

**Federal systems** (as of October 2026). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 5.a, says FIPS are mandatory and that agencies must apply NIST guidelines to non-national security systems unless OMB states otherwise. Section 4.a requires agencies to categorize information and systems under [FIPS 199](https://csrc.nist.gov/pubs/fips/199/final) and [NIST SP 800-60](https://csrc.nist.gov/pubs/sp/800/60/v1/r1/final). So write the RA procedures around them, and around [SP 800-30 Rev. 1](https://csrc.nist.gov/pubs/sp/800/30/r1/final) (September 2012) for risk assessments. The shared sections' federal block ties the policy to FISMA and OMB Circular A-130.
