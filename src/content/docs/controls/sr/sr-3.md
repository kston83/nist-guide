---
title: 'SR-3 Supply Chain Controls and Processes'
description: 'NIST SP 800-53 Rev. 5 control SR-3, Supply Chain Controls and Processes: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SR-3 Supply Chain Controls and Processes'
  order: 3
control:
  id: SR-3
  family: SR
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 3 (0 in a baseline) |

**Related controls:** [CA-2](/controls/ca/ca-2/), [MA-2](/controls/ma/ma-2/), [MA-6](/controls/ma/ma-6/), [PE-3](/controls/pe/pe-3/), [PE-16](/controls/pe/pe-16/), [PL-8](/controls/pl/pl-8/), [PM-30](/controls/pm/pm-30/), [SA-2](/controls/sa/sa-2/), [SA-3](/controls/sa/sa-3/), [SA-4](/controls/sa/sa-4/), [SA-5](/controls/sa/sa-5/), [SA-8](/controls/sa/sa-8/), [SA-9](/controls/sa/sa-9/), [SA-10](/controls/sa/sa-10/), [SA-15](/controls/sa/sa-15/), [SC-7](/controls/sc/sc-7/), [SC-29](/controls/sc/sc-29/), [SC-30](/controls/sc/sc-30/), [SC-38](/controls/sc/sc-38/), [SI-7](/controls/si/si-7/), [SR-6](/controls/sr/sr-6/), [SR-9](/controls/sr/sr-9/), [SR-11](/controls/sr/sr-11/)

## Control statement

- **a.** Establish a process or processes to identify and address weaknesses or deficiencies in the supply chain elements and processes of [Assignment: organization-defined system or system component] in coordination with [Assignment: organization-defined supply chain personnel];
- **b.** Employ the following controls to protect against supply chain risks to the system, system component, or system service and to limit the harm or consequences from supply chain-related events: [Assignment: organization-defined supply chain controls] ; and
- **c.** Document the selected and implemented supply chain processes and controls in [Selection (one or more): security and privacy plans; supply chain risk management plan; [Assignment: organization-defined document] ].

<details>
<summary>NIST discussion</summary>

Supply chain elements include organizations, entities, or tools employed for the research and development, design, manufacturing, acquisition, delivery, integration, operations and maintenance, and disposal of systems and system components. Supply chain processes include hardware, software, and firmware development processes; shipping and handling procedures; personnel security and physical security programs; configuration management tools, techniques, and measures to maintain provenance; or other programs, processes, or procedures associated with the development, acquisition, maintenance and disposal of systems and system components. Supply chain elements and processes may be provided by organizations, system integrators, or external providers. Weaknesses or deficiencies in supply chain elements or processes represent potential vulnerabilities that can be exploited by adversaries to cause harm to the organization and affect its ability to carry out its core missions or business functions. Supply chain personnel are individuals with roles and responsibilities in the supply chain.

</details>

## Control enhancements

<a id="sr-3.1"></a>

### SR-3(1) Diverse Supply Base

*Baselines: Not in a baseline*

Employ a diverse set of sources for the following system components and services: [Assignment: organization-defined system components and services].

<details>
<summary>Discussion and assessment objectives for SR-3(1)</summary>

Diversifying the supply of systems, system components, and services can reduce the probability that adversaries will successfully identify and target the supply chain and can reduce the impact of a supply chain event or compromise. Identifying multiple suppliers for replacement components can reduce the probability that the replacement component will become unavailable. Employing a diverse set of developers or logistics service providers can reduce the impact of a natural disaster or other supply chain event. Organizations consider designing the system to include diverse materials and components.

Determine if:

- **SR-03(01)[01]** a diverse set of sources is employed for [Assignment: organization-defined system components];
- **SR-03(01)[02]** a diverse set of sources is employed for [Assignment: organization-defined services].

**Examine:** Supply chain risk management policy and procedures; system and services acquisition policy; planning policy; procedures addressing supply chain protection; physical inventory of critical systems and system components; inventory of critical suppliers, service providers, developers, and contracts; inventory records of critical system components; list of security safeguards ensuring an adequate supply of critical system components; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system and services acquisition responsibilities; organizational personnel with information security responsibilities; organizational personnel with supply chain protection responsibilities.

**Test:** Organizational processes for defining and employing security safeguards to ensure an adequate supply of critical system components; processes to identify critical suppliers; mechanisms supporting and/or implementing the security safeguards that ensure an adequate supply of critical system components.

</details>

<a id="sr-3.2"></a>

### SR-3(2) Limitation of Harm

*Baselines: Not in a baseline*

Employ the following controls to limit harm from potential adversaries identifying and targeting the organizational supply chain: [Assignment: organization-defined controls].

<details>
<summary>Discussion and assessment objectives for SR-3(2)</summary>

Controls that can be implemented to reduce the probability of adversaries successfully identifying and targeting the supply chain include avoiding the purchase of custom or non-standardized configurations, employing approved vendor lists with standing reputations in industry, following pre-agreed maintenance schedules and update and patch delivery mechanisms, maintaining a contingency plan in case of a supply chain event, using procurement carve-outs that provide exclusions to commitments or obligations, using diverse delivery routes, and minimizing the time between purchase decisions and delivery.

Determine if [Assignment: organization-defined controls] are employed to limit harm from potential adversaries identifying and targeting the organizational supply chain.

**Examine:** Supply chain risk management policy and procedures; supply chain risk management plan; system and services acquisition policy; configuration management policy; procedures addressing supply chain protection; procedures addressing the integration of information security requirements into the acquisition process; procedures addressing the baseline configuration of the system; configuration management plan; system design documentation; system architecture and associated configuration documentation; solicitation documentation; acquisition documentation; acquisition contracts for the system, system component, or system service; threat assessments; vulnerability assessments; list of security safeguards to be taken to protect the organizational supply chain against potential supply chain threats; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system and services acquisition responsibilities; organizational personnel with information security responsibilities; organizational personnel with supply chain risk management responsibilities.

**Test:** Organizational processes for defining and employing safeguards to limit harm from adversaries of the organizational supply chain; mechanisms supporting and/or implementing the definition and employment of safeguards to protect the organizational supply chain.

</details>

<a id="sr-3.3"></a>

### SR-3(3) Sub-tier Flow Down

*Baselines: Not in a baseline*

Ensure that the controls included in the contracts of prime contractors are also included in the contracts of subcontractors.

<details>
<summary>Discussion and assessment objectives for SR-3(3)</summary>

To manage supply chain risk effectively and holistically, it is important that organizations ensure that supply chain risk management controls are included at all tiers in the supply chain. This includes ensuring that Tier 1 (prime) contractors have implemented processes to facilitate the "flow down" of supply chain risk management controls to sub-tier contractors. The controls subject to flow down are identified in SR-3b.

Determine if the controls included in the contracts of prime contractors are also included in the contracts of subcontractors.

**Examine:** Supply chain risk management policy and procedures; supply chain risk management plan; system and services acquisition policy; procedures addressing supply chain protection; acquisition documentation; service level agreements; acquisition contracts for the system, system component, or system service; inter-organizational agreements and procedures; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system and services acquisition responsibilities; organizational personnel with information security responsibilities; organizational personnel with supply chain risk management responsibilities.

**Test:** Organizational processes for establishing inter-organizational agreements and procedures with supply chain entities.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SR-3</summary>

Determine if:

- **SR-03a.**
  - **SR-03a.[01]** a process or processes is/are established to identify and address weaknesses or deficiencies in the supply chain elements and processes of [Assignment: organization-defined system or system component];
  - **SR-03a.[02]** the process or processes to identify and address weaknesses or deficiencies in the supply chain elements and processes of [Assignment: organization-defined system or system component] is/are coordinated with [Assignment: organization-defined supply chain personnel];
- **SR-03b.** [Assignment: organization-defined supply chain controls] are employed to protect against supply chain risks to the system, system component, or system service and to limit the harm or consequences from supply chain-related events;
- **SR-03c.** the selected and implemented supply chain processes and controls are documented in [Selection (one or more): security and privacy plans; supply chain risk management plan; [Assignment: organization-defined document] ].

**Examine:** Supply chain risk management policy; supply chain risk management procedures; supply chain risk management strategy; supply chain risk management plan; systems and critical system components inventory documentation; system and services acquisition policy; system and services acquisition procedures; procedures addressing the integration of information security and privacy requirements into the acquisition process; solicitation documentation; acquisition documentation (including purchase orders); service level agreements; acquisition contracts for systems or services; risk register documentation; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with acquisition responsibilities; organizational personnel with information security and privacy responsibilities; organizational personnel with supply chain risk management responsibilities.

**Test:** Organizational processes for identifying and addressing supply chain element and process deficiencies.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

SR-3 asks for three things: a process to find and address weaknesses or deficiencies in the supply chain elements and processes of the systems or components you name, run with the supply chain personnel you name (a); the controls you use to protect against supply chain risks and limit the harm of a supply chain event (b); and a record of the processes and controls you selected and implemented (c). NIST's SR-3 discussion defines supply chain elements as the organizations, entities or tools involved in the research and development, design, manufacturing, acquisition, delivery, integration, operations and maintenance, and disposal of systems and components. Supply chain processes include hardware, software and firmware development, shipping and handling, personnel and physical security programs, and the configuration management tools and measures that maintain provenance. They may be provided by the organization, system integrators or external providers, and a weakness in any of them is a potential vulnerability an adversary can exploit. SR-3 is in the Low, Moderate and High baselines.

[NIST SP 800-161 Rev. 1](https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final), Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations (May 2022, updated November 1, 2024; current as of October 2026), points to its Section 2 and Appendix C for implementing SR-3. NIST's Secure Software Development Framework, SP 800-218 ([February 2022](https://csrc.nist.gov/pubs/sp/800/218/final), version 1.1; an initial public draft of Rev. 1, version 1.2, was published December 17, 2025; as of October 2026), cites SR-3 for several practices that apply to software you acquire, including PO.1.3, communicating security requirements to the third parties that supply commercial software components; PW.4.1, acquiring well-secured components and obtaining provenance information, such as a software bill of materials, to assess their risk; and PW.4.4, verifying that acquired components keep meeting the requirements through their life cycles.

**Common implementations.** The supply chain risk management team keeps the list of critical components and services and their suppliers, drawn from the criticality analysis ([RA-9](/controls/ra/ra-9/)). Weaknesses come in from several directions: supplier assessments (SR-6), supplier notifications (SR-8), inspection results (SR-10), suspected counterfeits (SR-11), security advisories ([SI-5](/controls/si/si-5/)), incidents, and changes in a supplier's ownership, location or sources. Each one is recorded in the [risk register](/templates/forms/risk-register/) or the [plan of action and milestones](/templates/forms/plan-of-action-and-milestones/) with an owner, a response and a due date. The controls the system uses are selected in its supply chain risk management plan (SR-2), carried into contracts through the [acquisition security requirements](/templates/standards/acquisition-security-requirements/) standard, and summarized in the [system security plan](/templates/plans/system-security-plan/).

**Organization-defined parameters.** Typical values, from the [Supply Chain Risk Management policy](/templates/policies/sr/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Systems or components whose supply chain is covered (a) | Each system and the components and services the criticality analysis (RA-9) identifies as critical |
| Supply chain personnel the process is coordinated with (a) | The supply chain risk management team (SR-2(1)), the procurement office, and the designated supply chain contacts of the suppliers and contractors involved |
| Supply chain controls employed (b) | The controls the supply chain risk management plan selects, including at least the supply chain terms of the acquisition security requirements standard (SA-4, SR-5), supplier assessments (SR-6), notification agreements (SR-8), inspection of components on receipt and after repair (SR-10), anti-counterfeit measures (SR-11) and controlled disposal (SR-12) |
| Where the processes and controls are documented (c) | The supply chain risk management plan, summarized and referenced in the security and privacy plans |

Item c is a selection; the policy selects both the supply chain risk management plan and the security and privacy plans, so the selection's own organization-defined document is left unselected. The policy also has the process draw on supplier assessments, notifications, inspection results, advisories, incidents and changes in a supplier's ownership, location or sources, and has each weakness recorded in the risk register or the plan of action and milestones.

**Evidence assessors ask for.**

- The documented process for identifying and addressing supply chain weaknesses, and who runs it
- A sample of weaknesses found in the last year, each followed to its risk register or plan of action and milestones entry and its resolution
- Records of coordination with procurement and with suppliers' contacts, such as meeting notes or tickets
- The supply chain controls section of the supply chain risk management plan, and the reference to it in the system security plan
- Contracts for critical components or services that contain the controls the plan selects

**Inheritance.** The process and most of the controls are usually common: the supply chain risk management team runs the process for every system, and the procurement office applies the standard contract terms. The system owner identifies the system's critical components and suppliers, makes sure the plan's controls apply to them, and acts on the weaknesses that affect the system. Record the split in the system security plan.

**Common findings.**

- Supplier problems handled by email as they come up, with no record of the weakness or of what was done.
- Controls listed in the plan that the actual contracts do not contain.
- Selected supply chain controls not documented anywhere (c), or documented in a plan that names no components.
- Weaknesses found in a supplier assessment but never entered in the risk register or the plan of action and milestones.

**Enhancements in the Moderate baseline.** None. SR-3(1) diverse supply base, SR-3(2) limitation of harm and SR-3(3) sub-tier flow down are in no baseline. NIST's SR-3(3) discussion asks that supply chain controls reach every tier, with prime contractors flowing them down to subcontractors; the acquisition security requirements standard (section 4.5) already requires suppliers to flow the security and privacy requirements down to their subcontractors. SP 800-161 Rev. 1 adds, for SR-3(3), that the cybersecurity risks of a supplier, product or service should be evaluated before the contract award decision, which the policy's SR-6 statements require for critical components and services.

**Federal systems** (as of October 2026). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 3.b(8), requires agencies' information security and privacy programs to implement supply chain risk management principles to protect against the insertion of counterfeits, unauthorized production, tampering, theft, insertion of malicious software, and poor manufacturing and development practices throughout the system development life cycle. [41 U.S.C. § 1326](https://www.govinfo.gov/link/uscode/41/1326?link-type=html)(b)(2) includes integrating supply chain risk management practices throughout the life cycle of the system, component, service or asset in each agency head's responsibilities (United States Code, 2024 edition). The SR-3 clause's federal block has the controls selected under SR-3b cover each of the threats A-130 names.
