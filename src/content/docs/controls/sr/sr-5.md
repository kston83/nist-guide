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
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
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
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

SR-5 asks you to name the acquisition strategies, contract tools and procurement methods you use to protect against, identify and mitigate supply chain risks, and to use them. NIST's SR-5 discussion calls the acquisition process an important vehicle to protect the supply chain. Its examples include obscuring the end use of a system or component, blind or filtered buys, tamper-evident packaging, and trusted or controlled distribution, chosen with the results of a supply chain risk assessment ([RA-3(1)](/controls/ra/ra-3/#ra-3.1)). It also suggests incentives for suppliers that implement controls and are open about their processes and security and privacy practices, contract language prohibiting tainted or counterfeit components, restricting purchases from untrustworthy suppliers, training staff on supply chain risk and the mitigations available, and contract requirements for protecting development plans, documentation and evidence. SR-5 is in the Low, Moderate and High baselines.

SR-5 works through the contract. The [acquisition security requirements](/templates/standards/acquisition-security-requirements/) standard ([SA-4](/controls/sa/sa-4/)) holds the terms: section 4.5 requires each supplier to flow requirements down to subcontractors and to identify the origin of critical components, and section 5 is the checklist the Chief Information Security Officer uses to review each solicitation before it is issued. The standard also requires the same review, scaled to what is bought, for purchase card buys and online terms. [NIST SP 800-161 Rev. 1](https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final), Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations (May 2022, updated November 1, 2024; current as of October 2026), points to its Section 3 and the SA controls for SR-5. For software, NIST's Secure Software Development Framework, SP 800-218 ([February 2022](https://csrc.nist.gov/pubs/sp/800/218/final), version 1.1; an initial public draft of Rev. 1, version 1.2, was published December 17, 2025; as of October 2026), cites SR-5 for practice PO.1.3: communicate security requirements to the third parties that supply commercial software components. Its examples include a core set of security requirements in acquisition documents and contracts, security criteria for selecting software, attestation by the supplier, and provenance data for the software's components.

**Common implementations.** An approved-source rule: hardware and software are bought only from the original manufacturer, its authorized distributors or resellers, or suppliers the supply chain risk management team has assessed. A library of standard supply chain clauses that the procurement office adds to every contract for a critical component or service, including the prohibition of counterfeit and tainted components. A supplier risk assessment (SR-6) as part of source selection, before award. Tamper-evident packaging and tracked delivery for hardware, with the receipt check under [PE-16](/controls/pe/pe-16/). Blind buys and controlled distribution are for high-threat environments; most organizations rely on authorized sources, contract terms and supplier assessments.

**Organization-defined parameters.** Typical value, from the [Supply Chain Risk Management policy](/templates/policies/sr/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Acquisition strategies, contract tools and procurement methods | The supply chain terms of the acquisition security requirements standard, including identification of the origin of critical components and flow-down to subcontractors; contract language prohibiting counterfeit or tainted components; purchase of hardware and software only from original manufacturers, their authorized distributors or resellers, or suppliers the supply chain risk management team has assessed; a supplier risk assessment before award as part of source selection for critical components and services; and tamper-evident packaging and tracked delivery for hardware |

The policy also has the supply chain risk management team review each acquisition of a critical component or service before award, and the system's supply chain risk assessment (RA-3(1)) inform the strategies, tools and methods chosen for it. Keep the policy and the standard in step: where the standard leaves a field for further supply chain terms from the plan, fill it with the terms the plan selects.

**Evidence assessors ask for.**

- The documented strategies, tools and methods, and the approved-source rule
- A sample of recent contracts for critical components or services, showing the supply chain clauses
- The supply chain risk management team's pre-award review records for those acquisitions
- Purchase records showing the source of a sample of installed hardware, compared with the authorized source list
- The supply chain risk assessment the strategies were chosen from

**Inheritance.** SR-5 is usually a common control: the procurement office and the supply chain risk management team apply the same methods to every acquisition. The system owner identifies which of the system's acquisitions are critical and makes sure they go through the review. When a service provider buys components on the system's behalf, the contract with that provider carries the same terms. Record the split in the [system security plan](/templates/plans/system-security-plan/).

**Common findings.**

- Purchase card or online marketplace buys that bypass the review and the approved-source rule.
- Supply chain terms in the standard that never made it into the awarded contract.
- No record that the team reviewed a critical acquisition before award.
- Strategies chosen without a supply chain risk assessment, or an assessment that was never updated.

**Enhancements in the Moderate baseline.** None. SR-5(1) adequate supply and SR-5(2) assessments prior to selection, acceptance, modification or update are in no baseline. NIST's SR-5(1) discussion names multiple suppliers, stockpiled spares and functionally equivalent components as ways to keep critical components available, which a contingency plan ([CP-2](/controls/cp/cp-2/)) can draw on.

**Federal systems** (as of October 2026). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), section 5.d(1)(a), requires agencies, when acquiring information technology, to analyze risks, including supply chain risks, associated with potential contractors and the products and services they provide, and to allocate risk responsibility between Government and contractor. Under [41 U.S.C. § 1323](https://www.govinfo.gov/link/uscode/41/1323?link-type=html)(c)(5) and (7), the Secretary of Homeland Security, the Secretary of Defense and the Director of National Intelligence may issue orders excluding sources or covered articles from executive agency procurement actions or requiring their removal from agency information systems, and executive agencies must comply with those orders (United States Code, 2024 edition); [41 CFR 201-1.304](https://www.ecfr.gov/current/title-41/section-201-1.304) repeats the duty and sets out how an agency requests an exception. [OMB M-26-05](https://www.whitehouse.gov/wp-content/uploads/2026/01/M-26-05-Adopting-a-Risk-based-Approach-to-Software-and-Hardware-Security.pdf), Adopting a Risk-based Approach to Software and Hardware Security (January 23, 2026), requires agencies to develop software and hardware assurance policies and processes that match their risk determinations and mission needs, and leaves the Secure Software Development Attestation Form and software bill of materials terms to the agency's choice. The SR-5 clause's federal block turns each of these into a statement: the A-130 risk analysis in each acquisition, tracking and applying exclusion and removal orders, and applying the agency's M-26-05 assurance policy.

<!-- TODO(verify): FAR provisions that carry supply chain requirements into contracts, such as the clauses implementing exclusion orders under 41 U.S.C. § 1323 and the Section 889 telecommunications prohibition, were not checked. It is not settled whether the codified FAR or the Revolutionary FAR Overhaul class deviations govern (see Open questions in PROGRESS.md). Cite the FAR here once that is resolved, as for the SR-5 clause and the SA-4 guidance. -->
