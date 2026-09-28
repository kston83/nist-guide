---
title: 'SR-6 Supplier Assessments and Reviews'
description: 'NIST SP 800-53 Rev. 5 control SR-6, Supplier Assessments and Reviews: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SR-6 Supplier Assessments and Reviews'
  order: 6
control:
  id: SR-6
  family: SR
  baselines: [Moderate, High]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | Organization | 1 (0 in a baseline) |

**Related controls:** [SR-3](/controls/sr/sr-3/), [SR-5](/controls/sr/sr-5/)

## Control statement

Assess and review the supply chain-related risks associated with suppliers or contractors and the system, system component, or system service they provide [Assignment: organization-defined frequency].

<details>
<summary>NIST discussion</summary>

An assessment and review of supplier risk includes security and supply chain risk management processes, foreign ownership, control or influence (FOCI), and the ability of the supplier to effectively assess subordinate second-tier and third-tier suppliers and contractors. The reviews may be conducted by the organization or by an independent third party. The reviews consider documented processes, documented controls, all-source intelligence, and publicly available information related to the supplier or contractor. Organizations can use open-source information to monitor for indications of stolen information, poor development and quality control practices, information spillage, or counterfeits. In some cases, it may be appropriate or required to share assessment and review results with other organizations in accordance with any applicable rules, policies, or inter-organizational agreements or contracts.

</details>

## Control enhancements

<a id="sr-6.1"></a>

### SR-6(1) Testing and Analysis

*Baselines: Not in a baseline*

Employ [Selection (one or more): organizational analysis; independent third-party analysis; organizational testing; independent third-party testing] of the following supply chain elements, processes, and actors associated with the system, system component, or system service: [Assignment: organization-defined supply chain elements, processes, and actors].

<details>
<summary>Discussion and assessment objectives for SR-6(1)</summary>

Relationships between entities and procedures within the supply chain, including development and delivery, are considered. Supply chain elements include organizations, entities, or tools that are used for the research and development, design, manufacturing, acquisition, delivery, integration, operations, maintenance, and disposal of systems, system components, or system services. Supply chain processes include supply chain risk management programs; SCRM strategies and implementation plans; personnel and physical security programs; hardware, software, and firmware development processes; configuration management tools, techniques, and measures to maintain provenance; shipping and handling procedures; and programs, processes, or procedures associated with the production and distribution of supply chain elements. Supply chain actors are individuals with specific roles and responsibilities in the supply chain. The evidence generated and collected during analyses and testing of supply chain elements, processes, and actors is documented and used to inform organizational risk management activities and decisions.

Determine if [Selection (one or more): organizational analysis; independent third-party analysis; organizational testing; independent third-party testing] is/are employed on [Assignment: organization-defined supply chain elements, processes, and actors] associated with the system, system component, or system service.

**Examine:** Supply chain risk management policy and procedures; supply chain risk management plan; system and services acquisition policy; procedures addressing supply chain protection; evidence of organizational analysis, independent third-party analysis, organizational penetration testing, and/or independent third-party penetration testing; list of supply chain elements, processes, and actors (associated with the system, system component, or system service) subject to analysis and/or testing; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system and services acquisition responsibilities; organizational personnel with information security responsibilities; organizational personnel with supply chain risk management responsibilities; organizational personnel with responsibilities for analyzing and/or testing supply chain elements, processes, and actors.

**Test:** Organizational processes for defining and employing methods of analysis/testing of supply chain elements, processes, and actors; mechanisms supporting and/or implementing the analysis/testing of supply chain elements, processes, and actors.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SR-6</summary>

Determine if the supply chain-related risks associated with suppliers or contractors and the systems, system components, or system services they provide are assessed and reviewed [Assignment: organization-defined frequency].

**Examine:** Supply chain risk management policy and procedures; supply chain risk management strategy; supply chain risk management plan; system and services acquisition policy; procedures addressing supply chain protection; procedures addressing the integration of information security requirements into the acquisition process; records of supplier due diligence reviews; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system and services acquisition responsibilities; organizational personnel with information security responsibilities; organizational personnel with supply chain protection responsibilities.

**Test:** Organizational processes for conducting supplier reviews; mechanisms supporting and/or implementing supplier reviews.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
