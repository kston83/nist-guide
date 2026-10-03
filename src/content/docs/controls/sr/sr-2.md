---
title: 'SR-2 Supply Chain Risk Management Plan'
description: 'NIST SP 800-53 Rev. 5 control SR-2, Supply Chain Risk Management Plan: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SR-2 Supply Chain Risk Management Plan'
  order: 2
control:
  id: SR-2
  family: SR
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 1 (1 in a baseline) |

**Related controls:** [CA-2](/controls/ca/ca-2/), [CP-4](/controls/cp/cp-4/), [IR-4](/controls/ir/ir-4/), [MA-2](/controls/ma/ma-2/), [MA-6](/controls/ma/ma-6/), [PE-16](/controls/pe/pe-16/), [PL-2](/controls/pl/pl-2/), [PM-9](/controls/pm/pm-9/), [PM-30](/controls/pm/pm-30/), [RA-3](/controls/ra/ra-3/), [RA-7](/controls/ra/ra-7/), [SA-8](/controls/sa/sa-8/), [SI-4](/controls/si/si-4/)

## Control statement

- **a.** Develop a plan for managing supply chain risks associated with the research and development, design, manufacturing, acquisition, delivery, integration, operations and maintenance, and disposal of the following systems, system components or system services: [Assignment: organization-defined systems, system components, or system services];
- **b.** Review and update the supply chain risk management plan [Assignment: organization-defined frequency] or as required, to address threat, organizational or environmental changes; and
- **c.** Protect the supply chain risk management plan from unauthorized disclosure and modification.

<details>
<summary>NIST discussion</summary>

The dependence on products, systems, and services from external providers, as well as the nature of the relationships with those providers, present an increasing level of risk to an organization. Threat actions that may increase security or privacy risks include unauthorized production, the insertion or use of counterfeits, tampering, theft, insertion of malicious software and hardware, and poor manufacturing and development practices in the supply chain. Supply chain risks can be endemic or systemic within a system element or component, a system, an organization, a sector, or the Nation. Managing supply chain risk is a complex, multifaceted undertaking that requires a coordinated effort across an organization to build trust relationships and communicate with internal and external stakeholders. Supply chain risk management (SCRM) activities include identifying and assessing risks, determining appropriate risk response actions, developing SCRM plans to document response actions, and monitoring performance against plans. The SCRM plan (at the system-level) is implementation specific, providing policy implementation, requirements, constraints and implications. It can either be stand-alone, or incorporated into system security and privacy plans. The SCRM plan addresses managing, implementation, and monitoring of SCRM controls and the development/sustainment of systems across the SDLC to support mission and business functions.

Because supply chains can differ significantly across and within organizations, SCRM plans are tailored to the individual program, organizational, and operational contexts. Tailored SCRM plans provide the basis for determining whether a technology, service, system component, or system is fit for purpose, and as such, the controls need to be tailored accordingly. Tailored SCRM plans help organizations focus their resources on the most critical mission and business functions based on mission and business requirements and their risk environment. Supply chain risk management plans include an expression of the supply chain risk tolerance for the organization, acceptable supply chain risk mitigation strategies or controls, a process for consistently evaluating and monitoring supply chain risk, approaches for implementing and communicating the plan, a description of and justification for supply chain risk mitigation measures taken, and associated roles and responsibilities. Finally, supply chain risk management plans address requirements for developing trustworthy, secure, privacy-protective, and resilient system components and systems, including the application of the security design principles implemented as part of life cycle-based systems security engineering processes (see SA-8).

</details>

## Control enhancements

<a id="sr-2.1"></a>

### SR-2(1) Establish SCRM Team

*Baselines: Low, Moderate, High*

Establish a supply chain risk management team consisting of [Assignment: organization-defined personnel, roles and responsibilities] to lead and support the following SCRM activities: [Assignment: organization-defined supply chain risk management activities].

<details>
<summary>Discussion and assessment objectives for SR-2(1)</summary>

To implement supply chain risk management plans, organizations establish a coordinated, team-based approach to identify and assess supply chain risks and manage these risks by using programmatic and technical mitigation techniques. The team approach enables organizations to conduct an analysis of their supply chain, communicate with internal and external partners or stakeholders, and gain broad consensus regarding the appropriate resources for SCRM. The SCRM team consists of organizational personnel with diverse roles and responsibilities for leading and supporting SCRM activities, including risk executive, information technology, contracting, information security, privacy, mission or business, legal, supply chain and logistics, acquisition, business continuity, and other relevant functions. Members of the SCRM team are involved in various aspects of the SDLC and, collectively, have an awareness of and provide expertise in acquisition processes, legal practices, vulnerabilities, threats, and attack vectors, as well as an understanding of the technical aspects and dependencies of systems. The SCRM team can be an extension of the security and privacy risk management processes or be included as part of an organizational risk management team.

Determine if a supply chain risk management team consisting of [Assignment: organization-defined personnel, roles and responsibilities] is established to lead and support [Assignment: organization-defined supply chain risk management activities].

**Examine:** Supply chain risk management policy; supply chain risk management procedures; supply chain risk management team charter documentation; supply chain risk management strategy; supply chain risk management implementation plan; procedures addressing supply chain protection; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with acquisition responsibilities; organizational personnel with information security and privacy responsibilities; organizational personnel with supply chain risk management responsibilities; organizational personnel with enterprise risk management responsibilities; legal counsel; organizational personnel with business continuity responsibilities.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SR-2</summary>

Determine if:

- **SR-02a.**
  - **SR-02a.[01]** a plan for managing supply chain risks is developed;
  - **SR-02a.[02]** the supply chain risk management plan addresses risks associated with the research and development of [Assignment: organization-defined systems, system components, or system services];
  - **SR-02a.[03]** the supply chain risk management plan addresses risks associated with the design of [Assignment: organization-defined systems, system components, or system services];
  - **SR-02a.[04]** the supply chain risk management plan addresses risks associated with the manufacturing of [Assignment: organization-defined systems, system components, or system services];
  - **SR-02a.[05]** the supply chain risk management plan addresses risks associated with the acquisition of [Assignment: organization-defined systems, system components, or system services];
  - **SR-02a.[06]** the supply chain risk management plan addresses risks associated with the delivery of [Assignment: organization-defined systems, system components, or system services];
  - **SR-02a.[07]** the supply chain risk management plan addresses risks associated with the integration of [Assignment: organization-defined systems, system components, or system services];
  - **SR-02a.[08]** the supply chain risk management plan addresses risks associated with the operation and maintenance of [Assignment: organization-defined systems, system components, or system services];
  - **SR-02a.[09]** the supply chain risk management plan addresses risks associated with the disposal of [Assignment: organization-defined systems, system components, or system services];
- **SR-02b.** the supply chain risk management plan is reviewed and updated [Assignment: organization-defined frequency] or as required to address threat, organizational, or environmental changes;
- **SR-02c.**
  - **SR-02c.[01]** the supply chain risk management plan is protected from unauthorized disclosure;
  - **SR-02c.[02]** the supply chain risk management plan is protected from unauthorized modification.

**Examine:** Supply chain risk management policy; supply chain risk management procedures; supply chain risk management plan; system and services acquisition policy; system and services acquisition procedures; procedures addressing supply chain protection; procedures for protecting the supply chain risk management plan from unauthorized disclosure and modification; system development life cycle procedures; procedures addressing the integration of information security and privacy requirements into the acquisition process; acquisition documentation; service level agreements; acquisition contracts for the system, system component, or system service; list of supply chain threats; list of safeguards to be taken against supply chain threats; system life cycle documentation; inter-organizational agreements and procedures; system security plan; privacy plan; privacy program plan; other relevant documents or records.

**Interview:** Organizational personnel with acquisition responsibilities; organizational personnel with information security and privacy responsibilities; organizational personnel with supply chain risk management responsibilities.

**Test:** Organizational processes for defining and documenting the system development life cycle (SDLC); organizational processes for identifying SDLC roles and responsibilities; organizational processes for integrating supply chain risk management into the SDLC; mechanisms supporting and/or implementing the SDLC.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

SR-2 asks for a plan that manages supply chain risk for the systems, components or services you name, across the whole life cycle from research and development to disposal (a), reviewed and updated on a set cycle and when threats or the organization change (b), and protected from unauthorized disclosure and modification (c). NIST's SR-2 discussion says the plan, at the system level, is implementation specific. It includes the organization's supply chain risk tolerance, acceptable mitigation strategies or controls, a process for consistently evaluating and monitoring supply chain risk, approaches for implementing and communicating the plan, a description of and justification for the mitigation measures taken, and the roles and responsibilities. Plans are tailored to the program and its operating context, which focuses resources on the most critical mission and business functions, and a plan can stand alone or be part of the security and privacy plans. SR-2 is in the Low, Moderate and High baselines.

[NIST SP 800-161 Rev. 1](https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final), Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations (May 2022, updated November 1, 2024; current as of October 2026), settles the format question: its Appendix A guidance for SR-2 says plans should be stand-alone documents, integrated into the system security plan only if the organization's constraints require it, and its Appendix D.3 says a plan included in the security and privacy plan must keep its supply chain parts clearly discernible. Appendix D.3.1 is a sample plan outline, from the system description and its components and life cycle activities to the controls, roles, contingencies, revision table and approval. Appendix D.3 says its plan applies to moderate- and high-impact systems; SP 800-53 puts SR-2 in the Low baseline as well, so a low-impact system still needs a plan, usually a short one. [SP 800-18 Rev. 2](https://csrc.nist.gov/pubs/sp/800/18/r2/final), Developing Security, Privacy, and Cybersecurity Supply Chain Risk Management Plans for Systems (June 2026), agrees that a plan has value for a low-impact system, especially one that uses the same components as higher-impact systems, and says that without one, the system security plan can identify the inherited supply chain controls, the risk tolerances, and whether each supply chain risk is accepted, transferred or mitigated (section 4.2). It also publishes a Cybersecurity Supply Chain Risk Management Plan Outline Example that follows the Appendix D.3.1 outline in more detail.

A plan is only as good as its inputs. It applies the organization's supply chain risk management strategy ([PM-30](/controls/pm/pm-30/)) to one system, and it draws on the criticality analysis ([RA-9](/controls/ra/ra-9/)) for the critical components and services, the supply chain risk assessment ([RA-3(1)](/controls/ra/ra-3/#ra-3.1)) for the risks, and the [component inventory](/templates/forms/component-inventory/) ([CM-8](/controls/cm/cm-8/)) for what is actually installed.

**Common implementations.** A stand-alone plan for each system, built on the SP 800-161 Rev. 1 Appendix D.3.1 outline, approved by the authorizing official and kept with the authorization package. The plan lists the system's critical components and services, their suppliers, the supply chain controls selected (SR-3) and the risks accepted, and refers to the organization's standard contract terms rather than repeating them. Organizations with many systems often write the controls they provide for everyone (the team, the contract clauses, supplier assessments) once, as common controls, so each system's plan covers only what is specific to it. The [Supply Chain Risk Management Plan](/templates/plans/supply-chain-risk-management-plan/) template follows both outlines, with tables for the critical components and services, the suppliers, the life cycle activities, the control details and the risks accepted. For a low-impact system, a clearly identifiable section of the system security plan that covers the points in SP 800-18 Rev. 2, section 4.2, and lists the critical components and suppliers can serve as the plan.

**Organization-defined parameters.** Typical values, from the [Supply Chain Risk Management policy](/templates/policies/sr/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Systems, components or services the plan covers (a) | Each system, including the components and services the criticality analysis (RA-9) identifies as critical and the external services the system depends on |
| Review and update frequency (b) | Annually, and at each life cycle milestone or gate review and each significant contracting action, such as a new contract, a renewal or a change of supplier for a critical component or service |
| Team members, roles and responsibilities (SR-2(1)) | A lead the Chief Information Security Officer designates, and representatives of information security, privacy, acquisition and contracting, legal counsel, information technology, the mission or business owners, and business continuity, each with the responsibilities the team charter assigns |
| Activities the team leads and supports (SR-2(1)) | Maintaining the supply chain risk management strategy and plans, setting the criteria for supplier assessments and reviewing their results (SR-6), reviewing acquisitions of critical components and services before award, coordinating the response to supply chain compromise notifications (SR-8), and tracking supply chain risks until they are resolved |

The review events follow SP 800-161 Rev. 1, section D.3.1.11, which has the plan reviewed at least at life cycle milestones, gate reviews and significant contracting activities. The policy also has the plan be a stand-alone document or a clearly identifiable section of the system security plan, list the critical components and services and their suppliers, and be approved by the authorizing official, with each significant change; the sample plan in SP 800-161 Rev. 1 (section D.3.1.12) carries the authorizing official's signature. For SR-2c, the policy protects the plan by marking it, limiting access and controlling changes.

**Evidence assessors ask for.**

- The plan, with the authorizing official's approval and date, and its revision table
- The plan's list of critical components and services and their suppliers, compared with the criticality analysis and the component inventory
- Records of the last review, and of an update after a recent contract award, renewal or change of supplier
- Who can read and change the plan: the repository permissions, the marking and the change history (SR-2c)
- For SR-2(1), the team charter, the membership list and the record of recent meetings and decisions

**Inheritance.** The plan itself is system-specific: each system has its own, or its own clearly identifiable section. The parts behind it are usually common controls: the strategy (PM-30), the team (SR-2(1)), the standard contract terms and the supplier assessment process. Record what the system inherits in its [system security plan](/templates/plans/system-security-plan/). For a system built on an external service, the plan names the provider as a supplier and relies on the [external service review](/templates/forms/external-service-review/) (SA-9) for the evidence about the provider's own controls.

**Common findings.**

- No plan, or a template copied without the system's components, suppliers or risks filled in.
- A plan whose critical components do not match the criticality analysis or the component inventory.
- A plan not updated after a new contract or a change of supplier for a critical component.
- A plan in an open file share that anyone can edit (SR-2c).
- A team that exists only on paper: no charter, no meeting records, or no one from acquisition or legal.

**Enhancements in the Moderate baseline.** [SR-2(1)](#sr-2.1) establish a supply chain risk management team, also in Low and High, with values in the table above. NIST's SR-2(1) discussion describes a team-based approach drawing on the risk executive, information technology, contracting, information security, privacy, mission or business, legal, supply chain and logistics, acquisition, business continuity and other functions; it can be an extension of existing security and privacy risk management processes or part of an organizational risk management team. SP 800-161 Rev. 1 calls the central body a C-SCRM program management office. The policy has the Chief Information Security Officer document the team's membership, roles, responsibilities and decision authority in a charter, and the team meet at least quarterly and whenever an acquisition or a supplier notification needs its review. In a small organization the team may be a few people who meet as needed; what matters is that acquisition, security and legal decide together.

**Federal systems** (as of October 2026). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.c(4), requires agencies to develop supply chain risk management plans as described in NIST SP 800-161 to ensure the integrity, security, resilience and quality of information systems. Under the Federal Acquisition Supply Chain Security Act of 2018, the head of each executive agency is responsible for assessing the supply chain risk posed by the acquisition and use of covered articles, including developing an overall supply chain risk management strategy and implementation plan and integrating supply chain risk management practices throughout the life cycle of the system, component, service or asset ([41 U.S.C. § 1326](https://www.govinfo.gov/link/uscode/41/1326?link-type=html)(a) and (b), United States Code, 2024 edition); the subchapter terminates on December 31, 2033 ([41 U.S.C. § 1328](https://www.govinfo.gov/link/uscode/41/1328?link-type=html)). The SR-2 clause's federal block has each system's plan developed as SP 800-161 Rev. 1 describes.
