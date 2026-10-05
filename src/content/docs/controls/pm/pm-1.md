---
title: 'PM-1 Information Security Program Plan'
description: 'NIST SP 800-53 Rev. 5 control PM-1, Information Security Program Plan: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PM-1 Information Security Program Plan'
  order: 1
control:
  id: PM-1
  family: PM
  baselines: []
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Not in a baseline | Organization | None |

**Related controls:** [PL-2](/controls/pl/pl-2/), [PM-18](/controls/pm/pm-18/), [PM-30](/controls/pm/pm-30/), [RA-9](/controls/ra/ra-9/), [SI-12](/controls/si/si-12/), [SR-2](/controls/sr/sr-2/)

## Control statement

- **a.** Develop and disseminate an organization-wide information security program plan that:
  - **1.** Provides an overview of the requirements for the security program and a description of the security program management controls and common controls in place or planned for meeting those requirements;
  - **2.** Includes the identification and assignment of roles, responsibilities, management commitment, coordination among organizational entities, and compliance;
  - **3.** Reflects the coordination among organizational entities responsible for information security; and
  - **4.** Is approved by a senior official with responsibility and accountability for the risk being incurred to organizational operations (including mission, functions, image, and reputation), organizational assets, individuals, other organizations, and the Nation;
- **b.** Review and update the organization-wide information security program plan [Assignment: organization-defined frequency] and following [Assignment: organization-defined events] ; and
- **c.** Protect the information security program plan from unauthorized disclosure and modification.

<details>
<summary>NIST discussion</summary>

An information security program plan is a formal document that provides an overview of the security requirements for an organization-wide information security program and describes the program management controls and common controls in place or planned for meeting those requirements. An information security program plan can be represented in a single document or compilations of documents. Privacy program plans and supply chain risk management plans are addressed separately in PM-18 and SR-2 , respectively.

An information security program plan documents implementation details about program management and common controls. The plan provides sufficient information about the controls (including specification of parameters for assignment and selection operations, explicitly or by reference) to enable implementations that are unambiguously compliant with the intent of the plan and a determination of the risk to be incurred if the plan is implemented as intended. Updates to information security program plans include organizational changes and problems identified during plan implementation or control assessments.

Program management controls may be implemented at the organization level or the mission or business process level, and are essential for managing the organization’s information security program. Program management controls are distinct from common, system-specific, and hybrid controls because program management controls are independent of any particular system. Together, the individual system security plans and the organization-wide information security program plan provide complete coverage for the security controls employed within the organization.

Common controls available for inheritance by organizational systems are documented in an appendix to the organization’s information security program plan unless the controls are included in a separate security plan for a system. The organization-wide information security program plan indicates which separate security plans contain descriptions of common controls.

Events that may precipitate an update to the information security program plan include, but are not limited to, organization-wide assessment or audit findings, security incidents or breaches, or changes in laws, executive orders, directives, regulations, policies, standards, and guidelines.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PM-1</summary>

Determine if:

- **PM-01a.**
  - **PM-01a.[01]** an organization-wide information security program plan is developed;
  - **PM-01a.[02]** the information security program plan is disseminated;
  - **PM-01a.01**
    - **PM-01a.01[01]** the information security program plan provides an overview of the requirements for the security program;
    - **PM-01a.01[02]** the information security program plan provides a description of the security program management controls in place or planned for meeting those requirements;
    - **PM-01a.01[03]** the information security program plan provides a description of the common controls in place or planned for meeting those requirements;
  - **PM-01a.02**
    - **PM-01a.02[01]** the information security program plan includes the identification and assignment of roles;
    - **PM-01a.02[02]** the information security program plan includes the identification and assignment of responsibilities;
    - **PM-01a.02[03]** the information security program plan addresses management commitment;
    - **PM-01a.02[04]** the information security program plan addresses coordination among organizational entities;
    - **PM-01a.02[05]** the information security program plan addresses compliance;
  - **PM-01a.03** the information security program plan reflects the coordination among the organizational entities responsible for information security;
  - **PM-01a.04** the information security program plan is approved by a senior official with responsibility and accountability for the risk being incurred to organizational operations (including mission, functions, image, and reputation), organizational assets, individuals, other organizations, and the Nation;
- **PM-01b.**
  - **PM-01b.[01]** the information security program plan is reviewed and updated [Assignment: organization-defined frequency];
  - **PM-01b.[02]** the information security program plan is reviewed and updated following [Assignment: organization-defined events];
- **PM-01c.**
  - **PM-01c.[01]** the information security program plan is protected from unauthorized disclosure;
  - **PM-01c.[02]** the information security program plan is protected from unauthorized modification.

**Examine:** Information security program plan; procedures addressing program plan development and implementation; procedures addressing program plan reviews and updates; procedures addressing coordination of the program plan with relevant entities; procedures for program plan approvals; records of program plan reviews and updates; other relevant documents or records.

**Interview:** Organizational personnel with information security program planning and plan implementation responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for information security program plan development, review, update, and approval; mechanisms supporting and/or implementing the information security program plan.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PM-1 asks for an organization-wide information security program plan. It describes the program's requirements, the program management and common controls that meet them, and who is responsible for what. A senior official accountable for the organization's risk approves it, you review it on a set cycle and after set events, and you protect it from unauthorized disclosure and change.

PM-1 is not the "policy and procedures" control that opens every other family. It asks for a plan, so the PM family has its own shared sections instead of the ones the other family policies use. The [Program Management policy template](/templates/policies/pm/) commits the organization to the plan and sets the rules for keeping it. The [Information Security Program Plan template](/templates/plans/information-security-program-plan/) is the plan itself, and the [decision worksheet](/templates/worksheets/pm/) lists the choices the family forces.

**How the policy and plan templates meet each element.** Each statement in the policy and each section of the plan cites the PM-1 item it meets:

| PM-1 element | Where the policy template meets it | Where the plan template meets it |
| --- | --- | --- |
| Develop and disseminate the plan (a) | Information security program plan section: the Chief Information Security Officer develops, maintains and disseminates it to every system owner, authorizing official and coordinating function | The whole plan |
| Overview of requirements; program management and common controls in place or planned (a.1) | Information security program plan section, second statement; Scope says systems inherit the program management controls | Section 2 (program requirements) and section 7 (program management and common controls) |
| Roles, responsibilities, management commitment, coordination and compliance (a.2) | The Roles and responsibilities, Management commitment, Coordination and Compliance sections | Sections 3, 4, 5 and 6 |
| Coordination among the entities responsible for security (a.3) | Coordination: the functions the program coordinates with, recorded in the plan | Section 5 |
| Approval by a senior official accountable for the risk (a.4) | The senior leader approves the plan | Section 9 |
| Review and update (b) | A frequency and trigger events for the plan; the policy is reviewed whenever the plan is | Section 10 |
| Protection from unauthorized disclosure and modification (c) | Limit who can change the plan and keep each approved version | Section 10, and the plan's opening guidance on restricting access |

**Common implementations.** One plan, owned by the Chief Information Security Officer and approved by the head of the organization, kept in a restricted document library with version history. NIST's PM-1 discussion says common controls are documented in an appendix to the plan unless a separate security plan holds them, and the plan says which separate plans do. Section 7 of the plan template is that list: each common control with its provider, the systems that inherit it, and its status.

[SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) task P-5 has the senior information security and privacy officials identify, document and publish the common controls available for inheritance. Its footnote 60 says designated authorizing officials authorize common controls before systems inherit them. The privacy program plan and the supply chain risk management plan are separate documents (PM-18 and SR-2, as the PM-1 discussion says); the plan's section 8 lists them with the risk management strategy (PM-9).

**Organization-defined parameters.** From `templates/policy/pm/_common.md` and the plan template. Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Plan review and update frequency (b) | Annually |
| Events that trigger a plan review (b) | A significant change to the organization's mission, structure, risk tolerance or systems, a major incident, or a finding from an assessment or audit of the program |

NIST's PM-1 discussion also names changes in laws, executive orders, directives, regulations, policies, standards and guidelines as events that may call for an update. Add them to your list of events if your organization tracks those changes.

**Evidence assessors ask for.**

- The approved plan, with the approver, the approval date and the version history
- The list of common controls, with the provider of each, the systems that inherit it and its authorization
- Records showing the plan went to system owners, authorizing officials and the coordinating functions
- The record of the last review, and of updates made after a trigger event
- The access settings on the plan's library: who can read it and who can change it
- The approved Program Management policy

**Inheritance.** PM-1 is implemented once, for the whole organization, and every system relies on it. NIST's PM-1 discussion treats program management controls as distinct from common controls, because they are independent of any one system; together, the system security plans and this plan cover every control. Each system security plan references the program plan for the program management controls and for the common controls it inherits.

**Common findings.**

- A plan signed by the Chief Information Security Officer alone, not by a senior official accountable for the organization's risk (a.4).
- Common controls claimed as inherited in system security plans but missing from the plan, or listed with no provider and never assessed or authorized.
- A plan that restates the controls without saying how each is met, or whether it is in place or planned (a.1).
- A plan that names people who have left, systems that are retired, or an older revision of SP 800-53, with no review in the last cycle.
- A plan posted where anyone can read or edit it (c).

**Enhancements.** PM-1 has no enhancements.

**Federal systems** (as of October 2026). The Federal Information Security Modernization Act of 2014 requires each agency to develop, document and implement an agency-wide information security program ([44 U.S.C. § 3554(b)](https://www.govinfo.gov/link/uscode/44/3554?link-type=html)). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.c(1), requires agencies to "develop and maintain an information security program plan that provides an overview of the organization-wide information security requirements and documents the program management controls and common controls in place or planned for meeting those requirements." Section 4.c(12) has agencies designate common controls that multiple systems can inherit. Its footnote 82 says common controls that protect systems of differing impact levels are implemented at the highest impact level among them. Section 4.c(2) requires a separate privacy program plan (PM-18).
