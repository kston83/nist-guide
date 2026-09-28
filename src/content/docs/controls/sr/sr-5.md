---
title: 'SR-5 Acquisition Strategies, Tools, and Methods'
description: 'NIST SP 800-53 Rev. 5 control SR-5, Acquisition Strategies, Tools, and Methods: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SR-5 Acquisition Strategies, Tools, and Methods'
  order: 5
control:
  id: SR-5
  family: SR
  baselines: [Low, Moderate, High]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 2 (0 in a baseline) |

**Related controls:** [AT-3](/controls/at/at-3/), [SA-2](/controls/sa/sa-2/), [SA-3](/controls/sa/sa-3/), [SA-4](/controls/sa/sa-4/), [SA-5](/controls/sa/sa-5/), [SA-8](/controls/sa/sa-8/), [SA-9](/controls/sa/sa-9/), [SA-10](/controls/sa/sa-10/), [SA-15](/controls/sa/sa-15/), [SR-6](/controls/sr/sr-6/), [SR-9](/controls/sr/sr-9/), [SR-10](/controls/sr/sr-10/), [SR-11](/controls/sr/sr-11/)

## Control statement

Employ the following acquisition strategies, contract tools, and procurement methods to protect against, identify, and mitigate supply chain risks: [Assignment: organization-defined strategies, tools, and methods].

<details>
<summary>NIST discussion</summary>

The use of the acquisition process provides an important vehicle to protect the supply chain. There are many useful tools and techniques available, including obscuring the end use of a system or system component, using blind or filtered buys, requiring tamper-evident packaging, or using trusted or controlled distribution. The results from a supply chain risk assessment can guide and inform the strategies, tools, and methods that are most applicable to the situation. Tools and techniques may provide protections against unauthorized production, theft, tampering, insertion of counterfeits, insertion of malicious software or backdoors, and poor development practices throughout the system development life cycle. Organizations also consider providing incentives for suppliers who implement controls, promote transparency into their processes and security and privacy practices, provide contract language that addresses the prohibition of tainted or counterfeit components, and restrict purchases from untrustworthy suppliers. Organizations consider providing training, education, and awareness programs for personnel regarding supply chain risk, available mitigation strategies, and when the programs should be employed. Methods for reviewing and protecting development plans, documentation, and evidence are commensurate with the security and privacy requirements of the organization. Contracts may specify documentation protection requirements.

</details>

## Control enhancements

<a id="sr-5.1"></a>

### SR-5(1) Adequate Supply

*Baselines: Not in a baseline*

Employ the following controls to ensure an adequate supply of [Assignment: organization-defined critical system components]: [Assignment: organization-defined controls].

<details>
<summary>Discussion and assessment objectives for SR-5(1)</summary>

Adversaries can attempt to impede organizational operations by disrupting the supply of critical system components or corrupting supplier operations. Organizations may track systems and component mean time to failure to mitigate the loss of temporary or permanent system function. Controls to ensure that adequate supplies of critical system components include the use of multiple suppliers throughout the supply chain for the identified critical components, stockpiling spare components to ensure operation during mission-critical times, and the identification of functionally identical or similar components that may be used, if necessary.

Determine if [Assignment: organization-defined controls] are employed to ensure an adequate supply of [Assignment: organization-defined critical system components].

**Examine:** Supply chain risk management policy and procedures; supply chain risk management strategy; supply chain risk management plan; contingency planning documents; inventory of critical systems and system components; determination of adequate supply; system and services acquisition policy; procedures addressing supply chain protection; procedures addressing the integration of information security requirements into the acquisition process; procedures addressing the integration of acquisition strategies, contract tools, and procurement methods into the acquisition process; solicitation documentation; acquisition documentation; service level agreements; acquisition contracts for systems or services; purchase orders/requisitions for the system, system component, or system service from suppliers; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system and services acquisition responsibilities; organizational personnel with information security responsibilities; organizational personnel with supply chain risk management responsibilities.

**Test:** Organizational processes for defining and employing tailored acquisition strategies, contract tools, and procurement methods; mechanisms supporting and/or implementing the definition and employment of tailored acquisition strategies, contract tools, and procurement methods.

</details>

<a id="sr-5.2"></a>

### SR-5(2) Assessments Prior to Selection, Acceptance, Modification, or Update

*Baselines: Not in a baseline*

Assess the system, system component, or system service prior to selection, acceptance, modification, or update.

<details>
<summary>Discussion and assessment objectives for SR-5(2)</summary>

Organizational personnel or independent, external entities conduct assessments of systems, components, products, tools, and services to uncover evidence of tampering, unintentional and intentional vulnerabilities, or evidence of non-compliance with supply chain controls. These include malicious code, malicious processes, defective software, backdoors, and counterfeits. Assessments can include evaluations; design proposal reviews; visual or physical inspection; static and dynamic analyses; visual, x-ray, or magnetic particle inspections; simulations; white, gray, or black box testing; fuzz testing; stress testing; and penetration testing (see SR-6(1) ). Evidence generated during assessments is documented for follow-on actions by organizations. The evidence generated during the organizational or independent assessments of supply chain elements may be used to improve supply chain processes and inform the supply chain risk management process. The evidence can be leveraged in follow-on assessments. Evidence and other documentation may be shared in accordance with organizational agreements.

Determine if:

- **SR-05(02)[01]** the system, system component, or system service is assessed prior to selection;
- **SR-05(02)[02]** the system, system component, or system service is assessed prior to acceptance;
- **SR-05(02)[03]** the system, system component, or system service is assessed prior to modification;
- **SR-05(02)[04]** the system, system component, or system service is assessed prior to update.

**Examine:** System security plan; system and services acquisition policy; procedures addressing supply chain protection; procedures addressing the integration of information security requirements into the acquisition process; security test and evaluation results; vulnerability assessment results; penetration testing results; organizational risk assessment results; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system and services acquisition responsibilities; organizational personnel with information security responsibilities; organizational personnel with supply chain protection responsibilities.

**Test:** Organizational processes for conducting assessments prior to selection, acceptance, or update; mechanisms supporting and/or implementing the conducting of assessments prior to selection, acceptance, or update.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SR-5</summary>

Determine if:

- **SR-05[01]** [Assignment: organization-defined strategies, tools, and methods] are employed to protect against supply chain risks;
- **SR-05[02]** [Assignment: organization-defined strategies, tools, and methods] are employed to identify supply chain risks;
- **SR-05[03]** [Assignment: organization-defined strategies, tools, and methods] are employed to mitigate supply chain risks.

**Examine:** Supply chain risk management policy; supply chain risk management procedures; supply chain risk management plan; system and services acquisition policy; system and services acquisition procedures; procedures addressing supply chain protection; procedures addressing the integration of information security and privacy requirements into the acquisition process; solicitation documentation; acquisition documentation (including purchase orders); service level agreements; acquisition contracts for systems, system components, or services; documentation of training, education, and awareness programs for personnel regarding supply chain risk; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with acquisition responsibilities; organizational personnel with information security and privacy responsibilities; organizational personnel with supply chain risk management responsibilities.

**Test:** Organizational processes for defining and employing tailored acquisition strategies, contract tools, and procurement methods; mechanisms supporting and/or implementing the definition and employment of tailored acquisition strategies, contract tools, and procurement methods.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
