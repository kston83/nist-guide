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
