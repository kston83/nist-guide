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
guidance: draft
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

## How to apply it

SR-6 asks you to assess and review, at a set frequency, the supply chain risks that come with your suppliers and contractors and with the systems, components and services they provide. NIST's SR-6 discussion says a review covers the supplier's security and supply chain risk management processes, its foreign ownership, control or influence (FOCI), and its ability to assess its own second- and third-tier suppliers and contractors. Reviews may be done by the organization or by an independent third party, and they consider documented processes and controls, all-source intelligence and publicly available information. Open-source information can be used to monitor for signs of stolen information, poor development and quality control practices, information spillage or counterfeits, and results may be shared with other organizations where rules, agreements or contracts allow or require it. SR-6 is in the Moderate and High baselines, not Low.

[NIST SP 800-161 Rev. 1](https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final), Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations (May 2022, updated November 1, 2024; current as of October 2026), adds in its Appendix A guidance for SR-6 that assessments should apply a consistent set of core factors and criteria, so suppliers can be compared with each other and over time, that the quality of the information relied on matters, and that the sources of information should be documented. Its Appendix D.4 is a sample supply chain risk assessment template, a toolbox of questions to choose from according to the controls selected; it says the organization should weigh the relative priority of each assessment in deciding how rigorous it is.

**Common implementations.** Suppliers sorted into tiers by the criticality of what they provide (RA-9): suppliers of critical components and services get a full assessment, others a short check. A full assessment combines a questionnaire the supplier completes, research in public sources (ownership, location, breach history, legal actions, financial health), the supplier's independent assessments or attestations, and, for a service, the [external service review](/templates/forms/external-service-review/) ([SA-9](/controls/sa/sa-9/)). The supply chain risk management team scores every supplier against the same factors, records the sources it used, and sends each risk found to the system owner for a response. Between assessments, the team watches public sources for news about critical suppliers. The [supplier assessment questionnaire](/templates/forms/supplier-assessment-questionnaire/) puts these steps on one form: the organization's scoping and criticality answers, the supplier's questionnaire, the organization's research with a source for each finding, and a rating of the same twelve core factors for every supplier. NIST also publishes a fillable spreadsheet of the SP 800-161 Rev. 1 scoping questionnaire (Table 26) on the publication's page.

**Organization-defined parameters.** Typical value, from the [Supply Chain Risk Management policy](/templates/policies/sr/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Frequency of supplier assessments and reviews | Before each contract award or renewal, and annually for suppliers of critical components and services |

The policy lists what each assessment covers, following NIST's discussion; has the Chief Information Security Officer apply the same core risk factors and criteria to every assessment and record its sources, as SP 800-161 Rev. 1 advises; and allows no award or renewal of a contract for a critical component or service until its assessment is complete and each risk found is accepted or has a planned response. That last statement follows SP 800-161 Rev. 1's guidance for SR-3(3), which says a supplier's risks should be evaluated before the contract award decision.

**Evidence assessors ask for.**

- The assessment criteria and core risk factors, and how suppliers are assigned to tiers
- Completed assessments for a sample of suppliers of critical components and services, dated before award or renewal and within the last year, with their sources recorded
- The risk responses for the findings, in the [risk register](/templates/forms/risk-register/) or the [plan of action and milestones](/templates/forms/plan-of-action-and-milestones/)
- Records of public-source monitoring of critical suppliers between assessments
- For an external service, the external service review and the provider's current attestation report

**Inheritance.** SR-6 is usually a common control run by the supply chain risk management team, and one assessment of a supplier can serve every system that uses it. The system owner makes sure each of the system's critical suppliers has a current assessment and decides how to respond to the risks that affect the system. Record the split in the [system security plan](/templates/plans/system-security-plan/).

**Common findings.**

- Suppliers assessed once at onboarding and never again.
- Questionnaire answers accepted as given, with no sources recorded and nothing checked.
- Different criteria for each assessor or each supplier, so results cannot be compared.
- Foreign ownership, control or influence, or the supplier's own suppliers, not considered.
- A contract renewed before its assessment was done.

**Enhancements in the Moderate baseline.** None. SR-6(1) testing and analysis of supply chain elements, processes and actors is in no baseline.

**Federal systems** (as of October 2026). [41 U.S.C. § 1326](https://www.govinfo.gov/link/uscode/41/1326?link-type=html)(a) makes the head of each executive agency responsible for assessing the supply chain risk posed by the acquisition and use of covered articles, and for prioritizing those assessments based on the criticality of the mission, system, component, service or asset (United States Code, 2024 edition). SP 800-161 Rev. 1, Appendix E, section E.2.2, gives federal agencies baseline risk factors to address, at a minimum, for assessments of critical sources and covered articles; section E.2.1 says determining assessment priorities, evaluating impact and making risk response decisions are inherently governmental functions that cannot be outsourced, although a qualified, vetted third party may support research and documentation. Under [41 CFR 201-1.201(b)](https://www.ecfr.gov/current/title-41/section-201-1.201), an executive agency must expeditiously submit supply chain risk information to the Federal Acquisition Security Council's information sharing agency when the Council requests it, or when the agency determines there is a reasonable basis to conclude that a substantial supply chain risk exists in connection with a source or covered article (eCFR, current as of October 2026). The SR-6 clause's federal block turns each of these into a statement.
