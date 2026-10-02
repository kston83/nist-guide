---
title: 'SR-1 Policy and Procedures'
description: 'NIST SP 800-53 Rev. 5 control SR-1, Policy and Procedures: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SR-1 Policy and Procedures'
  order: 1
control:
  id: SR-1
  family: SR
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | None |

**Related controls:** [PM-9](/controls/pm/pm-9/), [PM-30](/controls/pm/pm-30/), [PS-8](/controls/ps/ps-8/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Develop, document, and disseminate to [Assignment: organization-defined personnel or roles]:
  - **1.** [Selection (one or more): organization-level; mission/business process-level; system-level] supply chain risk management policy that:
    - **(a)** Addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and
    - **(b)** Is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines; and
  - **2.** Procedures to facilitate the implementation of the supply chain risk management policy and the associated supply chain risk management controls;
- **b.** Designate an [Assignment: organization-defined official] to manage the development, documentation, and dissemination of the supply chain risk management policy and procedures; and
- **c.** Review and update the current supply chain risk management:
  - **1.** Policy [Assignment: organization-defined frequency] and following [Assignment: organization-defined events] ; and
  - **2.** Procedures [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].

<details>
<summary>NIST discussion</summary>

Supply chain risk management policy and procedures address the controls in the SR family as well as supply chain-related controls in other families that are implemented within systems and organizations. The risk management strategy is an important factor in establishing such policies and procedures. Policies and procedures contribute to security and privacy assurance. Therefore, it is important that security and privacy programs collaborate on the development of supply chain risk management policy and procedures. Security and privacy program policies and procedures at the organization level are preferable, in general, and may obviate the need for mission- or system-specific policies and procedures. The policy can be included as part of the general security and privacy policy or be represented by multiple policies that reflect the complex nature of organizations. Procedures can be established for security and privacy programs, for mission or business processes, and for systems, if needed. Procedures describe how the policies or controls are implemented and can be directed at the individual or role that is the object of the procedure. Procedures can be documented in system security and privacy plans or in one or more separate documents. Events that may precipitate an update to supply chain risk management policy and procedures include assessment or audit findings, security incidents or breaches, or changes in applicable laws, executive orders, directives, regulations, policies, standards, and guidelines. Simply restating controls does not constitute an organizational policy or procedure.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SR-1</summary>

Determine if:

- **SR-01a.**
  - **SR-01a.[01]** a supply chain risk management policy is developed and documented;
  - **SR-01a.[02]** the supply chain risk management policy is disseminated to [Assignment: organization-defined personnel or roles];
  - **SR-01a.[03]** supply chain risk management procedures to facilitate the implementation of the supply chain risk management policy and the associated supply chain risk management controls are developed and documented;
  - **SR-01a.[04]** the supply chain risk management procedures are disseminated to [Assignment: organization-defined personnel or roles].
  - **SR-01a.01**
    - **SR-01a.01(a)**
      - **SR-01a.01(a)[01]** the [Selection (one or more): organization-level; mission/business process-level; system-level] supply chain risk management policy addresses purpose;
      - **SR-01a.01(a)[02]** the [Selection (one or more): organization-level; mission/business process-level; system-level] supply chain risk management policy addresses scope;
      - **SR-01a.01(a)[03]** [Selection (one or more): organization-level; mission/business process-level; system-level] supply chain risk management policy addresses roles;
      - **SR-01a.01(a)[04]** the [Selection (one or more): organization-level; mission/business process-level; system-level] supply chain risk management policy addresses responsibilities;
      - **SR-01a.01(a)[05]** the [Selection (one or more): organization-level; mission/business process-level; system-level] supply chain risk management policy addresses management commitment;
      - **SR-01a.01(a)[06]** the [Selection (one or more): organization-level; mission/business process-level; system-level] supply chain risk management policy addresses coordination among organizational entities;
      - **SR-01a.01(a)[07]** the [Selection (one or more): organization-level; mission/business process-level; system-level] supply chain risk management policy addresses compliance.
    - **SR-01a.01(b)** the [Selection (one or more): organization-level; mission/business process-level; system-level] supply chain risk management policy is consistent with applicable laws, Executive Orders, directives, regulations, policies, standards, and guidelines;
- **SR-01b.** the [Assignment: organization-defined official] is designated to manage the development, documentation, and dissemination of the supply chain risk management policy and procedures;
- **SR-01c.**
  - **SR-01c.01**
    - **SR-01c.01[01]** the current supply chain risk management policy is reviewed and updated [Assignment: organization-defined frequency];
    - **SR-01c.01[02]** the current supply chain risk management policy is reviewed and updated following [Assignment: organization-defined events];
  - **SR-01c.02**
    - **SR-01c.02[01]** the current supply chain risk management procedures are reviewed and updated [Assignment: organization-defined frequency];
    - **SR-01c.02[02]** the current supply chain risk management procedures are reviewed and updated following [Assignment: organization-defined events].

**Examine:** Supply chain risk management policy; supply chain risk management procedures; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with supply chain risk management responsibilities; organizational personnel with information security and privacy responsibilities; organizational personnel with acquisition responsibilities; organizational personnel with enterprise risk management responsibilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

SR-1 asks for a written supply chain risk management policy, procedures that carry it out, an official who manages both, and a set review cycle. The [Supply Chain Risk Management policy template](/templates/policies/sr/) meets the policy half through the sections every family policy shares, and its [decision worksheet](/templates/worksheets/sr/) lists every choice the family forces, with typical values and who decides. The procedures are yours to write. The [acquisition security requirements](/templates/standards/acquisition-security-requirements/) standard already carries the contract terms that SR-5 and SR-8 rely on; a Supply Chain Risk Management Plan template and a supplier assessment questionnaire are planned for this kit.

NIST's SR-1 discussion says the policy and procedures address the SR controls and the supply chain-related controls in other families, and that the risk management strategy is an important factor in setting them. In this kit, those other controls include the contract requirements of SA-4, external services (SA-9), replacement parts in maintenance (MA-2) and the receipt check of delivery and removal (PE-16). The [Risk Management Strategy](/templates/plans/risk-management-strategy/) template sets the risk tolerance that the organization's supply chain risk management strategy ([PM-30](/controls/pm/pm-30/)) follows. [NIST SP 800-161 Rev. 1](https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final), Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations (May 2022, updated November 1, 2024; current as of October 2026), adds in its Appendix A guidance for SR-1 that information security, legal, risk management and acquisition should review and concur on the policies and procedures, and that procedures are written for specific missions and for specific systems. Its Appendix D.2.1 is a sample policy, and section D.2.1.6 has the policy reviewed annually at a minimum.

**How the policy template meets each element.** The shared sections come before and after the policy statements, and each statement cites the SR-1 item it meets:

| SR-1 element | Where the policy template meets it |
| --- | --- |
| Policy at the selected level (a.1) | Scope: the policy applies at the level you select, to every system and every person with access |
| Purpose, scope, roles, responsibilities, management commitment, coordination and compliance (a.1(a)) | The Purpose, Scope, Roles and responsibilities, Management commitment, Coordination and Compliance sections, one for each |
| Consistent with applicable laws and guidance (a.1(b)) | Compliance: the first statement, where you list the laws, regulations and standards that apply; the federal block adds FISMA and OMB Circular A-130 |
| Procedures (a.2) | Procedures: the managing official ensures documented procedures exist |
| Dissemination of policy and procedures (a) | Dissemination: one statement for the policy and one for the procedures, each to the roles you name |
| Designated official (b) | Roles and responsibilities: the official who manages the policy and procedures |
| Review and update (c.1, c.2) | Review and update: a frequency and trigger events for the policy, and again for the procedures |

The shared Coordination section has the Chief Information Security Officer coordinate the policy with the legal, privacy, human resources and procurement functions before each approval, which covers the review and concurrence SP 800-161 Rev. 1 asks for.

**Common implementations.** One organization-level policy, approved by a senior leader and published in the policy library. Procedures written for the work SR-2 to SR-12 describe:

- Writing, approving, reviewing and protecting each system's supply chain risk management plan, and running the supply chain risk management team (SR-2, SR-2(1))
- Finding and tracking weaknesses in suppliers and supply chain processes, and selecting the supply chain controls for each system (SR-3)
- Reviewing acquisitions of critical components and services before award, and putting the supply chain terms into each contract (SR-5), with the acquisition security requirements standard
- Assessing suppliers before award or renewal and each year (SR-6)
- Receiving supplier notifications of a compromise and handing them to incident response (SR-8)
- Inspecting components on receipt, before first use, periodically and after repair or travel (SR-10)
- Buying from authorized sources, checking components and software for authenticity, quarantining and reporting suspect components, training the staff who handle them, and keeping components under control during service and repair (SR-11, SR-11(1), SR-11(2))
- Disposing of components, documentation and tools (SR-12)

System-specific settings go in each system's supply chain risk management plan and the [system security plan](/templates/plans/system-security-plan/).

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

The trigger events follow NIST's SR-1 discussion, and the annual review matches SP 800-161 Rev. 1, section D.2.1.6. For SR, the people who carry out the procedures are, for example, the procurement and contracting staff who write solicitations and contracts, the supply chain risk management team that assesses suppliers and reviews acquisitions, the receiving and IT staff who check, install and repair components, the system owners who keep each plan current, and the staff who dispose of equipment. The Chief Information Security Officer often delegates the day-to-day management to the lead of the supply chain risk management team (SR-2(1)). Typical procedure triggers for SR are a supplier's notice of a compromise, a counterfeit or tampered component found, a change in a critical supplier's ownership or location, a new contract vehicle or standard contract clause, and, for federal agencies, a new exclusion or removal order.

**Evidence assessors ask for.**

- The approved policy, with the approver, the approval date and the version history
- The procedures, including the anti-counterfeit procedure SR-11a names, and who owns each one
- The record naming the official who manages the policy and procedures
- Records showing dissemination, including to procurement, receiving and disposal staff, who are easy to miss
- Evidence of the last review of the policy and of each procedure, with the changes made, and the concurrence of legal and procurement

**Inheritance.** SR-1 is usually a common control, provided once for the organization. A system inherits the organization's policy and records that in its system security plan. It adds its own procedures only where it works differently, for example a program that buys specialized hardware through its own contracts.

**Common findings.**

- A policy that restates the SR controls but has no procedures behind it. NIST's discussion of SR-1 says restating controls is not a policy or procedure.
- Procedures written by the security office alone, which procurement staff have never seen, so purchases follow a different process.
- The policy or procedures not reviewed within the stated period, or not updated after a supplier compromise or a counterfeit component.
- Supply chain requirements in other families, such as the contract terms of SA-4 and the replacement parts rule of MA-2, that the procedures do not cover.

**Enhancements in the Moderate baseline.** SR-1 has no enhancements.

**Federal systems** (as of October 2026). Under the Federal Acquisition Supply Chain Security Act of 2018, the head of each executive agency is responsible for assessing supply chain risk, which includes developing an overall supply chain risk management strategy and implementation plan, and policies and processes to guide and govern supply chain risk management activities ([41 U.S.C. § 1326](https://www.govinfo.gov/link/uscode/41/1326?link-type=html)(a) and (b)(1), United States Code, 2024 edition). The subchapter terminates on December 31, 2033 ([41 U.S.C. § 1328](https://www.govinfo.gov/link/uscode/41/1328?link-type=html)). The shared sections' federal block ties the policy to FISMA and OMB Circular A-130, whose Appendix I, section 3.b(8), requires agencies to implement supply chain risk management principles throughout the system development life cycle (see [SR-3](/controls/sr/sr-3/)).
