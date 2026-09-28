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
