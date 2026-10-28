---
title: 'PT-1 Policy and Procedures'
description: 'NIST SP 800-53 Rev. 5 control PT-1, Policy and Procedures: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PT-1 Policy and Procedures'
  order: 1
control:
  id: PT-1
  family: PT
  baselines: [Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Privacy | Organization | None |

## Control statement

- **a.** Develop, document, and disseminate to [Assignment: organization-defined personnel or roles]:
  - **1.** [Selection (one or more): organization-level; mission/business process-level; system-level] personally identifiable information processing and transparency policy that:
    - **(a)** Addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and
    - **(b)** Is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines; and
  - **2.** Procedures to facilitate the implementation of the personally identifiable information processing and transparency policy and the associated personally identifiable information processing and transparency controls;
- **b.** Designate an [Assignment: organization-defined official] to manage the development, documentation, and dissemination of the personally identifiable information processing and transparency policy and procedures; and
- **c.** Review and update the current personally identifiable information processing and transparency:
  - **1.** Policy [Assignment: organization-defined frequency] and following [Assignment: organization-defined events] ; and
  - **2.** Procedures [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].

<details>
<summary>NIST discussion</summary>

Personally identifiable information processing and transparency policy and procedures address the controls in the PT family that are implemented within systems and organizations. The risk management strategy is an important factor in establishing such policies and procedures. Policies and procedures contribute to security and privacy assurance. Therefore, it is important that security and privacy programs collaborate on the development of personally identifiable information processing and transparency policy and procedures. Security and privacy program policies and procedures at the organization level are preferable, in general, and may obviate the need for mission- or system-specific policies and procedures. The policy can be included as part of the general security and privacy policy or be represented by multiple policies that reflect the complex nature of organizations. Procedures can be established for security and privacy programs, for mission or business processes, and for systems, if needed. Procedures describe how the policies or controls are implemented and can be directed at the individual or role that is the object of the procedure. Procedures can be documented in system security and privacy plans or in one or more separate documents. Events that may precipitate an update to personally identifiable information processing and transparency policy and procedures include assessment or audit findings, breaches, or changes in applicable laws, executive orders, directives, regulations, policies, standards, and guidelines. Simply restating controls does not constitute an organizational policy or procedure.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PT-1</summary>

Determine if:

- **PT-01a.**
  - **PT-01a.[01]** a personally identifiable information processing and transparency policy is developed and documented;
  - **PT-01a.[02]** the personally identifiable information processing and transparency policy is disseminated to [Assignment: organization-defined personnel or roles];
  - **PT-01a.[03]** personally identifiable information processing and transparency procedures to facilitate the implementation of the personally identifiable information processing and transparency policy and associated personally identifiable information processing and transparency controls are developed and documented;
  - **PT-01a.[04]** the personally identifiable information processing and transparency procedures are disseminated to [Assignment: organization-defined personnel or roles];
  - **PT-01a.01**
    - **PT-01a.01(a)**
      - **PT-01a.01(a)[01]** the [Selection (one or more): organization-level; mission/business process-level; system-level] personally identifiable information processing and transparency policy addresses purpose;
      - **PT-01a.01(a)[02]** the [Selection (one or more): organization-level; mission/business process-level; system-level] personally identifiable information processing and transparency policy addresses scope;
      - **PT-01a.01(a)[03]** the [Selection (one or more): organization-level; mission/business process-level; system-level] personally identifiable information processing and transparency policy addresses roles;
      - **PT-01a.01(a)[04]** the [Selection (one or more): organization-level; mission/business process-level; system-level] personally identifiable information processing and transparency policy addresses responsibilities;
      - **PT-01a.01(a)[05]** the [Selection (one or more): organization-level; mission/business process-level; system-level] personally identifiable information processing and transparency policy addresses management commitment;
      - **PT-01a.01(a)[06]** the [Selection (one or more): organization-level; mission/business process-level; system-level] personally identifiable information processing and transparency policy addresses coordination among organizational entities;
      - **PT-01a.01(a)[07]** the [Selection (one or more): organization-level; mission/business process-level; system-level] personally identifiable information processing and transparency policy addresses compliance;
    - **PT-01a.01(b)** the [Selection (one or more): organization-level; mission/business process-level; system-level] personally identifiable information processing and transparency policy is consistent with applicable laws, Executive Orders, directives, regulations, policies, standards, and guidelines;
- **PT-01b.** the [Assignment: organization-defined official] is designated to manage the development, documentation, and dissemination of the personally identifiable information processing and transparency policy and procedures;
- **PT-01c.**
  - **PT-01c.01**
    - **PT-01c.01[01]** the current personally identifiable information processing and transparency policy is reviewed and updated [Assignment: organization-defined frequency];
    - **PT-01c.01[02]** the current personally identifiable information processing and transparency policy is reviewed and updated following [Assignment: organization-defined events];
  - **PT-01c.02**
    - **PT-01c.02[01]** the current personally identifiable information processing and transparency procedures are reviewed and updated [Assignment: organization-defined frequency];
    - **PT-01c.02[02]** the current personally identifiable information processing and transparency procedures are reviewed and updated following [Assignment: organization-defined events].

**Examine:** Personally identifiable information processing and transparency policy and procedures; privacy plan; privacy program plan; other relevant documents or records.

**Interview:** Organizational personnel with personally identifiable information processing and transparency responsibilities; organizational personnel with information security and privacy responsibilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PT-1 asks for a written personally identifiable information processing and transparency policy, procedures that carry it out, an official who manages both, and a set review cycle. PT-1 is in the SP 800-53B Privacy baseline only, like every PT control; no security baseline selects it. The [PII Processing and Transparency policy template](/templates/policies/pt/) meets the policy half through the sections every family policy shares, and its [decision worksheet](/templates/worksheets/pt/) lists the choices the family forces, with typical values and who decides. The procedures are yours to write.

NIST's PT-1 discussion asks security and privacy programs to collaborate on the policy and procedures, and names the risk management strategy as an important factor in setting them. The policy template gives the PT policy to the senior privacy official, and its Coordination section has that official coordinate it with the legal, privacy, human resources and procurement functions before each approval. Bring the Chief Information Security Officer in too: PT-2 and PT-3 restrictions are enforced through access control (AC-3) and change control (CM-3), which the security program runs.

Because PT is in no security baseline, the template kit builds the PT policy in one Privacy variant and leaves it out of the Low, Moderate and High starter kits. An organization that processes personally identifiable information adopts it alongside the security policies.

**How the policy template meets each element.** The shared sections come before and after the policy statements, and each statement cites the PT-1 item it meets:

| PT-1 element | Where the policy template meets it |
| --- | --- |
| Policy at the selected level (a.1) | Scope: the policy applies at the level you select, to every system and every person with access |
| Purpose, scope, roles, responsibilities, management commitment, coordination and compliance (a.1(a)) | The Purpose, Scope, Roles and responsibilities, Management commitment, Coordination and Compliance sections, one for each |
| Consistent with applicable laws and guidance (a.1(b)) | Compliance: the first statement, where you list the laws, regulations and standards that apply; the federal block adds FISMA and OMB Circular A-130 |
| Procedures (a.2) | Procedures: the managing official ensures documented procedures exist |
| Dissemination of policy and procedures (a) | Dissemination: one statement for the policy and one for the procedures, each to the roles you name |
| Designated official (b) | Roles and responsibilities: the official who manages the policy and procedures |
| Review and update (c.1, c.2) | Review and update: a frequency and trigger events for the policy, and again for the procedures |

**Common implementations.** One organization-level policy, approved by a senior leader and published in the policy library, with the senior privacy official as its owner. Procedures written for the work PT-2 to PT-8 describe:

- Screening each new system, collection and significant change for personally identifiable information, and writing or updating the [privacy impact assessment](/templates/reports/privacy-impact-assessment/), where the authority (PT-2), purposes (PT-3) and specific categories (PT-7) are recorded
- Reviewing proposed changes in processing through change control, in Part B5 of the [change request form](/templates/forms/change-request-form/) (PT-3d)
- Designing, recording and honoring consent and its withdrawal (PT-4)
- Drafting, approving, publishing and reviewing privacy notices, with the register in the [privacy notice](/templates/forms/privacy-notice/) (PT-5)
- For federal systems: drafting and publishing system of records notices, reviewing routine uses and exemptions (PT-6), Privacy Act statements (PT-5(2)), and running matching programs through the data integrity board (PT-8)

NIST's discussion lets procedures live in privacy plans or in separate documents, and prefers organization-level policies and procedures, which may make system-level ones unnecessary. Many privacy offices write these steps as a privacy compliance handbook; that is acceptable if each step names who does it and what record it leaves.

**Organization-defined parameters.** The shared sections leave these as fields to fill. Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Who receives the policy (a) | Everyone within its scope, through the policy library |
| Who receives the procedures (a) | The people who carry them out, and the system owners |
| Policy level (a.1) | Organization-level |
| Official who manages the policy and procedures (b) | The senior privacy official |
| Policy review frequency (c.1) | Annually |
| Events that trigger a policy review (c.1) | Assessment or audit findings, security incidents or breaches, and changes in applicable laws, executive orders, directives, regulations, policies, standards or guidelines |
| Procedure review frequency (c.2) | Annually |
| Events that trigger a procedure review (c.2) | The same events as the policy, and changes to the systems, tools or services the procedures describe |

The trigger events follow NIST's PT-1 discussion, which names assessment or audit findings, breaches, and changes in laws and guidance. For PT, the people who carry out the procedures are, for example, the privacy office, system owners, legal counsel, the web and communications staff who publish notices, and the change control board. Typical procedure triggers for PT are a new privacy law or regulation in a jurisdiction where the organization operates, a new way of collecting information (a new application, form or channel), a new consent or notice tool, and a breach that showed a gap in a procedure.

**Evidence assessors ask for.**

- The approved policy, with the approver, the approval date and the version history
- The procedures, and who owns each one
- The record naming the senior privacy official as the managing official
- Records showing dissemination, including to system owners and the staff who publish notices
- Evidence of the last review of the policy and of each procedure, with the changes made

**Inheritance.** PT-1 is almost always a common control, provided once for the organization; the generated table above gives its implementation level as organization. A system inherits the policy and records that in its privacy plan or system security plan. It needs procedures of its own only for processing specific to the system, such as a consent flow in its own application.

**Common findings.**

- No PT policy at all, because the organization adopted only the security baseline policies and PT is in none of them.
- A website privacy policy offered as the PT policy. That is a notice to the public (PT-5), not an internal policy with roles, procedures and a review cycle.
- A policy that restates the PT controls with no procedures behind it. NIST's discussion of PT-1 says restating controls is not a policy or procedure.
- The policy not reviewed after a new privacy law took effect in a jurisdiction where the organization operates.

**Enhancements.** PT-1 has no enhancements.

**Federal systems** (as of October 2026). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), main body section 5.f(1)(a) and (b), requires a comprehensive privacy program that "develops and evaluates privacy policy", led by a Senior Agency Official for Privacy (SAOP) with agency-wide responsibility. Appendix II, section 4, gives the SAOP "a central policy-making role", and section 5 lets other qualified staff perform privacy functions assigned to the SAOP. The SAOP is the natural managing official for PT-1. The shared sections' federal block ties the policy to FISMA and OMB Circular A-130.
