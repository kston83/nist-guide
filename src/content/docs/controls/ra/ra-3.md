---
title: 'RA-3 Risk Assessment'
description: 'NIST SP 800-53 Rev. 5 control RA-3, Risk Assessment: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'RA-3 Risk Assessment'
  order: 3
control:
  id: RA-3
  family: RA
  baselines: [Low, Moderate, High, Privacy]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | 4 (1 in a baseline) |

**Related controls:** [CA-3](/controls/ca/ca-3/), [CA-6](/controls/ca/ca-6/), [CM-4](/controls/cm/cm-4/), [CM-13](/controls/cm/cm-13/), [CP-6](/controls/cp/cp-6/), [CP-7](/controls/cp/cp-7/), [IA-8](/controls/ia/ia-8/), [MA-5](/controls/ma/ma-5/), [PE-3](/controls/pe/pe-3/), [PE-8](/controls/pe/pe-8/), [PE-18](/controls/pe/pe-18/), [PL-2](/controls/pl/pl-2/), [PL-10](/controls/pl/pl-10/), [PL-11](/controls/pl/pl-11/), [PM-8](/controls/pm/pm-8/), [PM-9](/controls/pm/pm-9/), [PM-28](/controls/pm/pm-28/), [PT-2](/controls/pt/pt-2/), [PT-7](/controls/pt/pt-7/), [RA-2](/controls/ra/ra-2/), [RA-5](/controls/ra/ra-5/), [RA-7](/controls/ra/ra-7/), [SA-8](/controls/sa/sa-8/), [SA-9](/controls/sa/sa-9/), [SC-38](/controls/sc/sc-38/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Conduct a risk assessment, including:
  - **1.** Identifying threats to and vulnerabilities in the system;
  - **2.** Determining the likelihood and magnitude of harm from unauthorized access, use, disclosure, disruption, modification, or destruction of the system, the information it processes, stores, or transmits, and any related information; and
  - **3.** Determining the likelihood and impact of adverse effects on individuals arising from the processing of personally identifiable information;
- **b.** Integrate risk assessment results and risk management decisions from the organization and mission or business process perspectives with system-level risk assessments;
- **c.** Document risk assessment results in [Selection: security and privacy plans; risk assessment report; [Assignment: organization-defined document] ];
- **d.** Review risk assessment results [Assignment: organization-defined frequency];
- **e.** Disseminate risk assessment results to [Assignment: organization-defined personnel or roles] ; and
- **f.** Update the risk assessment [Assignment: organization-defined frequency] or when there are significant changes to the system, its environment of operation, or other conditions that may impact the security or privacy state of the system.

<details>
<summary>NIST discussion</summary>

Risk assessments consider threats, vulnerabilities, likelihood, and impact to organizational operations and assets, individuals, other organizations, and the Nation. Risk assessments also consider risk from external parties, including contractors who operate systems on behalf of the organization, individuals who access organizational systems, service providers, and outsourcing entities.

Organizations can conduct risk assessments at all three levels in the risk management hierarchy (i.e., organization level, mission/business process level, or information system level) and at any stage in the system development life cycle. Risk assessments can also be conducted at various steps in the Risk Management Framework, including preparation, categorization, control selection, control implementation, control assessment, authorization, and control monitoring. Risk assessment is an ongoing activity carried out throughout the system development life cycle.

Risk assessments can also address information related to the system, including system design, the intended use of the system, testing results, and supply chain-related information or artifacts. Risk assessments can play an important role in control selection processes, particularly during the application of tailoring guidance and in the earliest phases of capability determination.

</details>

## Control enhancements

<a id="ra-3.1"></a>

### RA-3(1) Supply Chain Risk Assessment

*Baselines: Low, Moderate, High*

- **(a)** Assess supply chain risks associated with [Assignment: organization-defined systems, system components, and system services] ; and
- **(b)** Update the supply chain risk assessment [Assignment: organization-defined frequency] , when there are significant changes to the relevant supply chain, or when changes to the system, environments of operation, or other conditions may necessitate a change in the supply chain.

<details>
<summary>Discussion and assessment objectives for RA-3(1)</summary>

Supply chain-related events include disruption, use of defective components, insertion of counterfeits, theft, malicious development practices, improper delivery practices, and insertion of malicious code. These events can have a significant impact on the confidentiality, integrity, or availability of a system and its information and, therefore, can also adversely impact organizational operations (including mission, functions, image, or reputation), organizational assets, individuals, other organizations, and the Nation. The supply chain-related events may be unintentional or malicious and can occur at any point during the system life cycle. An analysis of supply chain risk can help an organization identify systems or components for which additional supply chain risk mitigations are required.

Determine if:

- **RA-03(01)(a)** supply chain risks associated with [Assignment: organization-defined systems, system components, and system services] are assessed;
- **RA-03(01)(b)** the supply chain risk assessment is updated [Assignment: organization-defined frequency] , when there are significant changes to the relevant supply chain, or when changes to the system, environments of operation, or other conditions may necessitate a change in the supply chain.

**Examine:** Supply chain risk management policy; inventory of critical systems, system components, and system services; risk assessment policy; security planning policy and procedures; procedures addressing organizational assessments of supply chain risk; risk assessment; risk assessment results; risk assessment reviews; risk assessment updates; acquisition policy; system security plan; supply chain risk management plan; other relevant documents or records.

**Interview:** Organizational personnel with risk assessment responsibilities; organizational personnel with security responsibilities; organizational personnel with supply chain risk management responsibilities.

**Test:** Organizational processes for risk assessment; mechanisms supporting and/or conducting, documenting, reviewing, disseminating, and updating the supply chain risk assessment.

</details>

<a id="ra-3.2"></a>

### RA-3(2) Use of All-source Intelligence

*Baselines: Not in a baseline*

Use all-source intelligence to assist in the analysis of risk.

<details>
<summary>Discussion and assessment objectives for RA-3(2)</summary>

Organizations employ all-source intelligence to inform engineering, acquisition, and risk management decisions. All-source intelligence consists of information derived from all available sources, including publicly available or open-source information, measurement and signature intelligence, human intelligence, signals intelligence, and imagery intelligence. All-source intelligence is used to analyze the risk of vulnerabilities (both intentional and unintentional) from development, manufacturing, and delivery processes, people, and the environment. The risk analysis may be performed on suppliers at multiple tiers in the supply chain sufficient to manage risks. Organizations may develop agreements to share all-source intelligence information or resulting decisions with other organizations, as appropriate.

Determine if all-source intelligence is used to assist in the analysis of risk.

**Examine:** Risk assessment policy; security planning policy and procedures; procedures addressing organizational assessments of risk; risk assessment; risk assessment results; risk assessment reviews; risk assessment updates; risk intelligence reports; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with risk assessment responsibilities; organizational personnel with security responsibilities.

**Test:** Organizational processes for risk assessment; mechanisms supporting and/or conducting, documenting, reviewing, disseminating, and updating the risk assessment.

</details>

<a id="ra-3.3"></a>

### RA-3(3) Dynamic Threat Awareness

*Baselines: Not in a baseline*

Determine the current cyber threat environment on an ongoing basis using [Assignment: organization-defined means].

<details>
<summary>Discussion and assessment objectives for RA-3(3)</summary>

The threat awareness information that is gathered feeds into the organization’s information security operations to ensure that procedures are updated in response to the changing threat environment. For example, at higher threat levels, organizations may change the privilege or authentication thresholds required to perform certain operations.

Determine if the current cyber threat environment is determined on an ongoing basis using [Assignment: organization-defined means].

**Examine:** Risk assessment policy; security planning policy and procedures; procedures addressing organizational assessments of risk; risk assessment; risk assessment results; risk assessment reviews; risk assessment updates; risk reports; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with risk assessment responsibilities; organizational personnel with security responsibilities.

**Test:** Organizational processes for risk assessment; mechanisms supporting and/or conducting, documenting, reviewing, disseminating, and updating the risk assessment.

</details>

<a id="ra-3.4"></a>

### RA-3(4) Predictive Cyber Analytics

*Baselines: Not in a baseline*

Employ the following advanced automation and analytics capabilities to predict and identify risks to [Assignment: organization-defined systems or system components]: [Assignment: organization-defined advanced automation and analytics capabilities].

<details>
<summary>Discussion and assessment objectives for RA-3(4)</summary>

A properly resourced Security Operations Center (SOC) or Computer Incident Response Team (CIRT) may be overwhelmed by the volume of information generated by the proliferation of security tools and appliances unless it employs advanced automation and analytics to analyze the data. Advanced automation and analytics capabilities are typically supported by artificial intelligence concepts, including machine learning. Examples include Automated Threat Discovery and Response (which includes broad-based collection, context-based analysis, and adaptive response capabilities), automated workflow operations, and machine assisted decision tools. Note, however, that sophisticated adversaries may be able to extract information related to analytic parameters and retrain the machine learning to classify malicious activity as benign. Accordingly, machine learning is augmented by human monitoring to ensure that sophisticated adversaries are not able to conceal their activities.

Determine if:

- **RA-03(04)[01]** [Assignment: organization-defined advanced automation capabilities] are employed to predict and identify risks to [Assignment: organization-defined systems or system components];
- **RA-03(04)[02]** [Assignment: organization-defined advanced analytics capabilities] are employed to predict and identify risks to [Assignment: organization-defined systems or system components].

**Examine:** Risk assessment policy; security planning policy and procedures; procedures addressing organizational assessments of risk; risk assessment; risk assessment results; risk assessment reviews; risk assessment updates; risk reports; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with risk assessment responsibilities; organizational personnel with security responsibilities.

**Test:** Organizational processes for risk assessment; mechanisms supporting and/or conducting, documenting, reviewing, disseminating, and updating the risk assessment.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for RA-3</summary>

Determine if:

- **RA-03a.**
  - **RA-03a.01** a risk assessment is conducted to identify threats to and vulnerabilities in the system;
  - **RA-03a.02** a risk assessment is conducted to determine the likelihood and magnitude of harm from unauthorized access, use, disclosure, disruption, modification, or destruction of the system; the information it processes, stores, or transmits; and any related information;
  - **RA-03a.03** a risk assessment is conducted to determine the likelihood and impact of adverse effects on individuals arising from the processing of personally identifiable information;
- **RA-03b.** risk assessment results and risk management decisions from the organization and mission or business process perspectives are integrated with system-level risk assessments;
- **RA-03c.** risk assessment results are documented in [Selection: security and privacy plans; risk assessment report; [Assignment: organization-defined document] ];
- **RA-03d.** risk assessment results are reviewed [Assignment: organization-defined frequency];
- **RA-03e.** risk assessment results are disseminated to [Assignment: organization-defined personnel or roles];
- **RA-03f.** the risk assessment is updated [Assignment: organization-defined frequency] or when there are significant changes to the system, its environment of operation, or other conditions that may impact the security or privacy state of the system.

**Examine:** Risk assessment policy; risk assessment procedures; security and privacy planning policy and procedures; procedures addressing organizational assessments of risk; risk assessment; risk assessment results; risk assessment reviews; risk assessment updates; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with risk assessment responsibilities; organizational personnel with security and privacy responsibilities.

**Test:** Organizational processes for risk assessment; mechanisms supporting and/or conducting, documenting, reviewing, disseminating, and updating the risk assessment.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
