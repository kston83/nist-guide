---
title: Acquisition Security Requirements
type: standard
description: The standard security and privacy requirements that go into every contract for a system, system component or system service, and the review each solicitation gets before it is issued, as SP 800-53 SA-4 and its enhancements require.
controls: [sa-4, sa-4.1, sa-4.2, sa-4.5, sa-4.9, sa-4.10, sa-5, sa-10, sa-11, sa-15, sa-15.3, sa-22, sr-5]
status: draft
stage: operate
typical:
  sa-04_odp.01: 'standardized contract language that the procurement office maintains and the Chief Information Security Officer and senior privacy official approve, with system-specific requirements added for each acquisition'
  sa-04.02_odp.01: 'security-relevant external system interfaces and high-level design, and for High systems also low-level design'
  sa-04.02_odp.03: 'enough detail to show, for each subsystem and interface, which controls it implements and how'
  sa-04.05_odp: 'the secure configuration baselines named in the baseline configuration standard for that type of component, with default passwords changed and the functions, ports, protocols and services not needed disabled'
  sa-10_odp.01: 'design, development, implementation and operation'
  sa-10_odp.02: 'design specifications, source code, build scripts and pipeline configuration, infrastructure and configuration as code, test scripts and results, and each released executable'
  sa-10_odp.03: 'the system owner and the Chief Information Security Officer'
  sa-11_odp.01: 'unit, integration, system and regression'
  sa-11_odp.02: 'with each build for automated tests, and before each release to production for system and regression testing'
  sa-11_odp.03: 'static analysis of all custom code, analysis of third-party and open-source components for known vulnerabilities, dynamic testing of every externally reachable interface, and a test for each security and privacy requirement'
  sa-15_odp.01: 'at least annually, and before a new development tool or a major change to the development process is adopted'
  sa-15_prm_2: 'the security requirements in the acquisition contract (SA-4) and the organization''s secure software development practices, and the privacy requirements recorded in the system''s privacy impact assessment'
  sa-15.03_odp.01: 'during design, before acquiring major components or services, and when the architecture changes significantly'
  sa-15.3_prm_2: 'the components and functions that support the system''s critical functions, including third-party and open-source components, analyzed down to the component and software module level and naming the supplier of each critical component'
---

:::guidance
The system and services acquisition policy says every contract for a system, component or service carries security and privacy requirements; this standard is the standard contract language that policy refers to, and the checklist the security team uses to review each solicitation. Keep its values in step with the SA-4, SA-10, SA-11 and SA-15 statements in the policy, since assessors compare the two. NIST's SA-4 discussion derives the functional requirements from the high-level requirements set under SA-2, and points to [NIST SP 800-160 Vol. 1 Rev. 1](https://csrc.nist.gov/pubs/sp/800/160/v1/r1/final), Engineering Trustworthy Secure Systems (November 2022, current as of September 2026), for requirements engineering. The procurement office turns section 4 into clauses in its own contract format; the wording here states what each clause must require, not the legal text. Have legal counsel review the clauses before first use.
:::

| Owner | Approved by | Version | Effective date |
| --- | --- | --- | --- |
| {{org:ciso}} | {{fill:name and title}} | {{fill:version}} | {{fill:date}} |

## 1. Purpose and scope

This standard sets the minimum security and privacy requirements that {{org:name}} includes in the acquisition contract for each system, system component or system service, and how each solicitation is reviewed for them. It applies to new contracts, renewals, task orders, modifications that change what is delivered, and purchases made by purchase card or by accepting a supplier's online terms. It covers hardware, software, cloud and other external services, and development done under contract. External services also get the [external service review](/templates/forms/external-service-review/) before use (SA-9).

## 2. Roles

| Role | Responsibilities |
| --- | --- |
| {{org:ciso}} | Owns this standard; approves the standard security language; reviews each solicitation for a system, component or service before it is issued; approves deviations |
| {{org:privacy-official}} | Approves the standard privacy language; reviews each solicitation for a system that processes personally identifiable information |
| {{fill:procurement office, for example the contracting office}} | Keeps the approved clauses in the contract library; routes each solicitation for review; does not issue or award without it |
| {{org:system-owner}} | Adds the system-specific requirements in section 3; confirms deliverables meet the acceptance criteria before the organization accepts them |

## 3. Putting the requirements into each contract

- The {{org:system-owner}} shall include the requirements in section 4, explicitly or by reference, using {{param:sa-04_odp.01}}, in the acquisition contract for each system, system component or system service. (SA-4)
- The system-specific requirements shall name the controls from the system's baseline that the supplier implements, with the parameter values the supplier must meet, and the tests the organization will run before acceptance. (SA-4d, SA-4i)
- The {{org:ciso}} shall review each solicitation for a system, system component or system service against the checklist in section 5 before it is issued. (SA-4)
- The {{org:privacy-official}} shall review each solicitation for a system that processes personally identifiable information before it is issued. (SA-4)
- A purchase card buy, a no-cost service or a supplier's online terms shall get the same review before use, scaled to what is bought. (SA-4)
- A renewal or modification shall be reviewed again when it changes what is delivered, the information involved or the supplier's responsibilities. (SA-4)

:::guidance
Low-value and click-through purchases are the most common way software and services reach a system without any security terms. Scaling the review means a short check for a desktop tool, not a waiver: confirm what the product does with the organization's information, and whether the supplier's own terms cover vulnerability notice and support.
:::

## 4. Standard requirements

Each item cites the part of SA-4 it meets. Where an item does not apply to what is bought, the solicitation says so.

### 4.1 Functional, strength and control requirements

- Each contract shall state the security and privacy functional requirements for the system, component or service. (SA-4a)
- Each contract shall state the strength of mechanism requirements, such as correctness, completeness, and resistance to tampering, bypass and direct attack. (SA-4b)
- Each contract shall state the controls the supplier implements, with any parameter values it must meet. (SA-4d)
- Each contract shall require the developer to describe the functional properties of the controls it implements, as seen at their interfaces. The description shall cover every control the contract allocates to the developer. (SA-4(1))

### 4.2 Assurance requirements and developer evidence

- Each contract shall state the security and privacy assurance requirements: the development processes the supplier follows, and the evidence from development and assessment it provides. (SA-4c)
- Each contract shall require the developer to provide design and implementation information for the controls that includes {{param:sa-04.02_odp.01}} at {{param:sa-04.02_odp.03}}. (SA-4(2))
- A contract for custom development shall require the developer to perform configuration management during {{param:sa-10_odp.01}}, and to document, manage and control the integrity of changes to {{param:sa-10_odp.02}}. (SA-10a, SA-10b)
- A contract for custom development shall require the developer to implement only organization-approved changes, document approved changes and their potential security and privacy impacts, and track security flaws and their resolution, reporting findings to {{param:sa-10_odp.03}}. (SA-10c, SA-10d, SA-10e)
- A contract for custom development shall require the developer to develop and implement a plan for ongoing security and privacy control assessments at all post-design stages of the life cycle. (SA-11a)
- A contract for custom development shall require the developer to perform {{param:sa-11_odp.01}} testing and evaluation {{param:sa-11_odp.02}} at {{param:sa-11_odp.03}}. (SA-11b)
- A contract for custom development shall require the developer to produce evidence of the assessment plan's execution and the testing results, implement a verifiable flaw remediation process, and correct flaws found in testing. (SA-11c, SA-11d, SA-11e)
- A contract for custom development shall require the developer to follow a documented development process that addresses security and privacy requirements, identifies the standards and tools used, documents tool options and configurations, and controls changes to the process and tools. (SA-15a)
- A contract for custom development shall require the developer to support the organization's review of that process {{param:sa-15_odp.01}}, against {{param:sa-15_prm_2}}. (SA-15b)
- A contract for custom development shall require the developer to perform a criticality analysis at {{param:sa-15.03_odp.01}}, covering {{param:sa-15.3_prm_2}}. (SA-15(3))

:::guidance
Most commercial products supply interface and high-level design information only; NIST's SA-4(2) discussion lists the levels. Ask for more where the system's risk warrants it, and say so in the solicitation so suppliers can price it. The SA-10, SA-11, SA-15 and SA-15(3) items apply to a developer building or modifying the system for the organization; for a commercial product, the assurance requirements in the first item are usually met by the supplier's published secure development practices and evidence. NIST's Secure Software Development Framework, [SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) (February 2022, version 1.1; version 1.2 is a December 2025 draft; as of September 2026), cites SA-4 for task PO.1.3, communicating requirements to third parties who provide commercial software components, and for task PW.4.1, acquiring well-secured software components. The organization's own secure development policy and standard, based on the SSDF, are separate templates.
:::

### 4.3 Documentation and its protection

- Each contract shall require administrator documentation that describes secure configuration, installation and operation, the effective use and maintenance of the security and privacy functions, and known vulnerabilities in administrative or privileged functions. (SA-4e, SA-5a)
- Each contract shall require user documentation that describes the user-accessible security and privacy functions, how to use them securely, and users' responsibilities. (SA-4e, SA-5b)
- Each contract shall state how the supplier protects the documentation and the design and implementation information, according to the system's security category, including limits on who may see documentation that describes vulnerabilities. (SA-4f)

### 4.4 Environments, configurations and functions in use

- Each contract shall describe the system development environment and the environment in which the system, component or service is intended to operate. (SA-4g)
- Each contract shall require the developer to identify, early in the life cycle, the functions, ports, protocols and services intended for organizational use. (SA-4(9))

This paragraph applies to High systems.

- Each contract shall require the developer to deliver the system, component or service with {{param:sa-04.05_odp}} implemented, and to use those configurations as the default for any later reinstallation or upgrade. (SA-4(5))

### 4.5 Responsibilities and supply chain

- Each contract shall allocate responsibility for information security, privacy and supply chain risk management between the organization and the supplier, or name the parties responsible. (SA-4h)
- Each contract shall require the supplier to flow the security and privacy requirements down to the subcontractors that take part in delivering the system, component or service. (SA-4h)
- Each contract shall require the supplier to identify the origin of critical components and to tell the organization of changes in the suppliers of those components. {{fill:further supply chain terms from the supply chain risk management plan, or "none"}} (SR-5)

:::guidance
[NIST SP 800-161 Rev. 1](https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final), Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations (May 2022, updated November 1, 2024, current as of September 2026), covers supply chain requirements in acquisitions in more depth. Align the supply chain terms here with the SR-5 and SR-8 statements of the [Supply Chain Risk Management Policy](/templates/policies/sr/), which rely on them, and with each system's [Supply Chain Risk Management Plan](/templates/plans/supply-chain-risk-management-plan/) (SR-2).
:::

### 4.6 Support, notification and updates

- Each contract shall require the supplier to notify the organization of a security incident or breach affecting the organization's information or the delivered product within {{fill:time, for example 24 hours of discovery}}. (SA-4)
- Each contract shall require the supplier to notify the organization of a vulnerability in the delivered product, with its fix or mitigation, within {{fill:time, for example 30 days of the supplier learning of it, or sooner when it is being exploited}}. (SA-4)
- Each contract shall state the period during which the supplier provides security updates, and require at least {{fill:notice, for example 12 months}} notice before support ends. (SA-4, SA-22)
- Each contract shall require the supplier to cooperate with the organization's assessments, and to provide the evidence the organization needs to monitor compliance. (SA-4c)

:::guidance
NIST's SA-4 discussion lets organizations add requirements for responsibilities, and for notice and timing of support, maintenance and updates. Incident and vulnerability notice times feed incident reporting (IR-6) and the patch and flaw remediation standard; the support period drives the replacement planning SA-22 requires, since a component without support gets no security updates.
:::

### 4.7 Acceptance criteria

- Each contract shall state the acceptance criteria for the system, component or service, including that the deliverables in sections 4.1 to 4.4 have been provided and that the organization's acceptance tests have passed. (SA-4i)
- The {{org:system-owner}} shall not accept a deliverable that fails an acceptance criterion unless the risk is accepted under section 6. (SA-4i)

### 4.8 Personal Identity Verification products

- Where the system implements Personal Identity Verification (PIV) capability, each contract for that capability shall require products on the FIPS 201-approved products list. (SA-4(10))

## 5. Solicitation review checklist

The reviewer completes one checklist for each solicitation and keeps it with the contract file.

| Solicitation | System | Reviewer | Date | Processes personally identifiable information |
| --- | --- | --- | --- | --- |
| {{fill:solicitation or purchase number}} | {{fill:system}} | {{fill:name}} | {{fill:date}} | {{fill:yes or no}} |

| Item | Requirement | Present (yes, no or not applicable) | Where in the solicitation |
| --- | --- | --- | --- |
| SA-4a | Security and privacy functional requirements | {{fill:answer}} | {{fill:section}} |
| SA-4b | Strength of mechanism requirements | {{fill:answer}} | {{fill:section}} |
| SA-4c | Assurance requirements and developer evidence | {{fill:answer}} | {{fill:section}} |
| SA-4d | Controls the supplier implements, with parameter values | {{fill:answer}} | {{fill:section}} |
| SA-4e | Documentation requirements | {{fill:answer}} | {{fill:section}} |
| SA-4f | Protection of documentation | {{fill:answer}} | {{fill:section}} |
| SA-4g | Development and operating environments | {{fill:answer}} | {{fill:section}} |
| SA-4h | Responsibilities for security, privacy and supply chain risk; incident and vulnerability notice; support period | {{fill:answer}} | {{fill:section}} |
| SA-4i | Acceptance criteria | {{fill:answer}} | {{fill:section}} |
| SA-4(1), SA-4(2) | Functional properties of controls; design and implementation information | {{fill:answer}} | {{fill:section}} |
| SA-4(9) | Functions, ports, protocols and services identified | {{fill:answer}} | {{fill:section}} |
| SA-4(5) | Secure configurations delivered (High systems) | {{fill:answer}} | {{fill:section}} |
| SA-4(10) | Approved PIV products (systems with PIV capability) | {{fill:answer}} | {{fill:section}} |
| SA-10, SA-11, SA-15 | Developer configuration management, testing and development process (custom development) | {{fill:answer}} | {{fill:section}} |
| SA-9 | External service review completed (external services) | {{fill:answer}} | {{fill:review ID}} |

Result: {{fill:approved to issue, approved with the changes listed, or returned}}. Changes required: {{fill:list, or "none"}}.

## 6. Deviations

- A solicitation that leaves out a requirement in section 4 that applies shall be issued only with the {{org:ciso}}'s written approval, recording the reason and any compensating measures. (SA-4)
- A deviation that leaves a risk to the system shall be accepted by the official the risk management strategy authorizes to accept risk at its level, and tracked in the system's plan of action and milestones. (SA-4, RA-7)

:::federal
[OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.j(1), requires agencies to ensure that the terms and conditions of contracts and other agreements involving Federal information incorporate security and privacy requirements sufficient to meet Federal and agency-specific requirements for its protection; section 4.j(5) requires provisions for Federal Government notification and access, and for cooperation with agency personnel and Inspectors General. [OMB M-26-05](https://www.whitehouse.gov/wp-content/uploads/2026/01/M-26-05-Adopting-a-Risk-based-Approach-to-Software-and-Hardware-Security.pdf), Adopting a Risk-based Approach to Software and Hardware Security (January 23, 2026), rescinds M-22-18 and M-23-16, so agencies are no longer required to collect the Secure Software Development Attestation Form. It requires agencies to develop software and hardware assurance policies and processes that match their risk determinations, and lets them use the attestation form, and contract terms requiring a current software bill of materials on request, where they choose to. [FIPS 201-3](https://csrc.nist.gov/pubs/fips/201-3/final) (January 2022) provides FIPS 201 compliance of PIV components through GSA's [FIPS 201 Approved Products List](https://www.idmanagement.gov/fips201/) (preamble item 7, Appendix A.5). Under [OMB M-24-15](https://www.fedramp.gov/2026/authority/m-24-15/), Modernizing the Federal Risk and Authorization Management Program (July 25, 2024), cloud products and services that create, collect, process, store or maintain Federal information on an agency's behalf need a FedRAMP authorization, unless the memo places them out of scope. As of September 2026.

- Each contract or agreement involving Federal information shall incorporate the security and privacy requirements that apply to that information, and provisions for Federal Government notification and access and for cooperation with agency personnel and the Inspector General, as OMB Circular A-130, Appendix I, sections 4.j(1) and 4.j(5), require. (SA-4)
- The {{org:ciso}} shall decide, for each acquisition of software or hardware and based on a risk assessment, whether the contract requires a secure software development attestation or a software bill of materials, following the agency's assurance policy under OMB M-26-05. (SA-4c)
- Each solicitation for PIV card products, readers or physical access control system products shall require products from the FIPS 201 Approved Products List that GSA maintains. (SA-4(10))
- Each solicitation for a cloud product or service within the scope of OMB M-24-15 shall require the offering to hold a FedRAMP authorization, or to obtain one before it processes Federal information. (SA-4, SA-9a)

<!-- TODO(verify): FAR contract requirements for IT security (FAR 39.101(c), clause 52.239-1 at 39.106) and PIV products (FAR 4.1302(a)). The codified FAR (FAC 2026-01) and the Revolutionary FAR Overhaul class deviations for Parts 4 and 39 may differ; cite the FAR here once it is clear which text governs. Same open question as the SA-4 and SA-4(10) clauses (PROGRESS.md, Open questions). -->

:::

## 7. Review

The {{org:ciso}} reviews this standard {{fill:for example annually}}, and whenever the system and services acquisition policy, acquisition rules or the organization's risk tolerance changes, or a supplier incident shows a gap in the standard language.

| Version | Date | Change | Approved by |
| --- | --- | --- | --- |
| {{fill:version}} | {{fill:date}} | {{fill:summary of change}} | {{fill:name and title}} |
