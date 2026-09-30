---
title: 'SA-4 Acquisition Process'
description: 'NIST SP 800-53 Rev. 5 control SA-4, Acquisition Process: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SA-4 Acquisition Process'
  order: 4
control:
  id: SA-4
  family: SA
  baselines: [Low, Moderate, High, Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | 11 (5 in a baseline) |

**Related controls:** [CM-6](/controls/cm/cm-6/), [CM-8](/controls/cm/cm-8/), [PS-7](/controls/ps/ps-7/), [SA-3](/controls/sa/sa-3/), [SA-5](/controls/sa/sa-5/), [SA-8](/controls/sa/sa-8/), [SA-11](/controls/sa/sa-11/), [SA-15](/controls/sa/sa-15/), [SA-16](/controls/sa/sa-16/), [SA-17](/controls/sa/sa-17/), [SA-21](/controls/sa/sa-21/), [SR-3](/controls/sr/sr-3/), [SR-5](/controls/sr/sr-5/)

## Control statement

Include the following requirements, descriptions, and criteria, explicitly or by reference, using [Selection (one or more): standardized contract language; [Assignment: organization-defined contract language] ] in the acquisition contract for the system, system component, or system service:

- **a.** Security and privacy functional requirements;
- **b.** Strength of mechanism requirements;
- **c.** Security and privacy assurance requirements;
- **d.** Controls needed to satisfy the security and privacy requirements.
- **e.** Security and privacy documentation requirements;
- **f.** Requirements for protecting security and privacy documentation;
- **g.** Description of the system development environment and environment in which the system is intended to operate;
- **h.** Allocation of responsibility or identification of parties responsible for information security, privacy, and supply chain risk management; and
- **i.** Acceptance criteria.

<details>
<summary>NIST discussion</summary>

Security and privacy functional requirements are typically derived from the high-level security and privacy requirements described in SA-2 . The derived requirements include security and privacy capabilities, functions, and mechanisms. Strength requirements associated with such capabilities, functions, and mechanisms include degree of correctness, completeness, resistance to tampering or bypass, and resistance to direct attack. Assurance requirements include development processes, procedures, and methodologies as well as the evidence from development and assessment activities that provide grounds for confidence that the required functionality is implemented and possesses the required strength of mechanism. SP 800-160-1 describes the process of requirements engineering as part of the system development life cycle.

Controls can be viewed as descriptions of the safeguards and protection capabilities appropriate for achieving the particular security and privacy objectives of the organization and for reflecting the security and privacy requirements of stakeholders. Controls are selected and implemented in order to satisfy system requirements and include developer and organizational responsibilities. Controls can include technical, administrative, and physical aspects. In some cases, the selection and implementation of a control may necessitate additional specification by the organization in the form of derived requirements or instantiated control parameter values. The derived requirements and control parameter values may be necessary to provide the appropriate level of implementation detail for controls within the system development life cycle.

Security and privacy documentation requirements address all stages of the system development life cycle. Documentation provides user and administrator guidance for the implementation and operation of controls. The level of detail required in such documentation is based on the security categorization or classification level of the system and the degree to which organizations depend on the capabilities, functions, or mechanisms to meet risk response expectations. Requirements can include mandated configuration settings that specify allowed functions, ports, protocols, and services. Acceptance criteria for systems, system components, and system services are defined in the same manner as the criteria for any organizational acquisition or procurement.

Organizations can determine other requirements that support security and operations, to include responsibilities for the organization and developer, and notification and timing requirements for support, maintenance and updates.

</details>

## Control enhancements

<a id="sa-4.1"></a>

### SA-4(1) Functional Properties of Controls

*Baselines: Moderate, High*

Require the developer of the system, system component, or system service to provide a description of the functional properties of the controls to be implemented.

<details>
<summary>Discussion and assessment objectives for SA-4(1)</summary>

Functional properties of security and privacy controls describe the functionality (i.e., security or privacy capability, functions, or mechanisms) visible at the interfaces of the controls and specifically exclude functionality and data structures internal to the operation of the controls.

Determine if the developer of the system, system component, or system service is required to provide a description of the functional properties of the controls to be implemented.

**Examine:** System and services acquisition policy; system and services acquisition procedures; procedures addressing the integration of security and privacy requirements, descriptions, and criteria into the acquisition process; solicitation documents; acquisition documentation; acquisition contracts for the system, system component, or system services; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with acquisition/contracting responsibilities; organizational personnel with information security and privacy responsibilities; system developers.

**Test:** Organizational processes for determining system security functional requirements; organizational processes for developing acquisition contracts; mechanisms supporting and/or implementing acquisitions and the inclusion of security and privacy requirements in contracts.

</details>

<a id="sa-4.2"></a>

### SA-4(2) Design and Implementation Information for Controls

*Baselines: Moderate, High*

Require the developer of the system, system component, or system service to provide design and implementation information for the controls that includes: [Selection (one or more): security-relevant external system interfaces; high-level design; low-level design; source code or hardware schematics; [Assignment: organization-defined design and implementation information] ] at [Assignment: organization-defined level of detail].

<details>
<summary>Discussion and assessment objectives for SA-4(2)</summary>

Organizations may require different levels of detail in the documentation for the design and implementation of controls in organizational systems, system components, or system services based on mission and business requirements, requirements for resiliency and trustworthiness, and requirements for analysis and testing. Systems can be partitioned into multiple subsystems. Each subsystem within the system can contain one or more modules. The high-level design for the system is expressed in terms of subsystems and the interfaces between subsystems providing security-relevant functionality. The low-level design for the system is expressed in terms of modules and the interfaces between modules providing security-relevant functionality. Design and implementation documentation can include manufacturer, version, serial number, verification hash signature, software libraries used, date of purchase or download, and the vendor or download source. Source code and hardware schematics are referred to as the implementation representation of the system.

Determine if the developer of the system, system component, or system service is required to provide design and implementation information for the controls that includes using [Selection (one or more): security-relevant external system interfaces; high-level design; low-level design; source code or hardware schematics; [Assignment: organization-defined design and implementation information] ] at [Assignment: organization-defined level of detail].

**Examine:** System and services acquisition policy; system and services acquisition procedures; procedures addressing the integration of security requirements, descriptions, and criteria into the acquisition process; solicitation documents; acquisition documentation; acquisition contracts for the system, system components, or system services; design and implementation information for controls employed in the system, system component, or system service; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with acquisition/contracting responsibilities; organizational personnel with the responsibility to determine system security requirements; system developers or service provider; organizational personnel with information security responsibilities.

**Test:** Organizational processes for determining the level of detail for system design and controls; organizational processes for developing acquisition contracts; mechanisms supporting and/or implementing the development of system design details.

</details>

<a id="sa-4.3"></a>

### SA-4(3) Development Methods, Techniques, and Practices

*Baselines: Not in a baseline*

Require the developer of the system, system component, or system service to demonstrate the use of a system development life cycle process that includes:

- **(a)** [Assignment: organization-defined systems engineering methods];
- **(b)** [Selection (one or more): [Assignment: organization-defined system security engineering methods] ; [Assignment: organization-defined privacy engineering methods] ] ; and
- **(c)** [Selection (one or more): [Assignment: organization-defined software development methods] ; [Assignment: organization-defined testing, evaluation, assessment, verification, and validation methods] ; [Assignment: organization-defined quality control processes] ].

<details>
<summary>Discussion and assessment objectives for SA-4(3)</summary>

Following a system development life cycle that includes state-of-the-practice software development methods, systems engineering methods, systems security and privacy engineering methods, and quality control processes helps to reduce the number and severity of latent errors within systems, system components, and system services. Reducing the number and severity of such errors reduces the number of vulnerabilities in those systems, components, and services. Transparency in the methods and techniques that developers select and implement for systems engineering, systems security and privacy engineering, software development, component and system assessments, and quality control processes provides an increased level of assurance in the trustworthiness of the system, system component, or system service being acquired.

Determine if:

- **SA-04(03)(a)** the developer of the system, system component, or system service is required to demonstrate the use of a system development life cycle process that includes [Assignment: organization-defined systems engineering methods];
- **SA-04(03)(b)** the developer of the system, system component, or system service is required to demonstrate the use of a system development life cycle process that includes [Selection (one or more): [Assignment: organization-defined system security engineering methods] ; [Assignment: organization-defined privacy engineering methods] ];
- **SA-04(03)(c)** the developer of the system, system component, or system service is required to demonstrate the use of a system development life cycle process that includes [Selection (one or more): [Assignment: organization-defined software development methods] ; [Assignment: organization-defined testing, evaluation, assessment, verification, and validation methods] ; [Assignment: organization-defined quality control processes] ].

**Examine:** System and services acquisition policy; system and services acquisition procedures; procedures addressing the integration of security and privacy requirements, descriptions, and criteria into the acquisition process; solicitation documents; acquisition documentation; acquisition contracts for the system, system component, or system service; list of systems security and privacy engineering methods to be included in the developer’s system development life cycle process; list of software development methods to be included in the developer’s system development life cycle process; list of testing, evaluation, or validation techniques to be included in the developer’s system development life cycle process; list of quality control processes to be included in the developer’s system development life cycle process; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with acquisition/contracting responsibilities; organizational personnel with information security and privacy responsibilities; organizational personnel with system life cycle responsibilities; system developers or service provider.

**Test:** Organizational processes for development methods, techniques, and processes.

</details>

<a id="sa-4.5"></a>

### SA-4(5) System, Component, and Service Configurations

*Baselines: High*

Require the developer of the system, system component, or system service to:

- **(a)** Deliver the system, component, or service with [Assignment: organization-defined security configurations] implemented; and
- **(b)** Use the configurations as the default for any subsequent system, component, or service reinstallation or upgrade.

<details>
<summary>Discussion and assessment objectives for SA-4(5)</summary>

Examples of security configurations include the U.S. Government Configuration Baseline (USGCB), Security Technical Implementation Guides (STIGs), and any limitations on functions, ports, protocols, and services. Security characteristics can include requiring that default passwords have been changed.

Determine if:

- **SA-04(05)(a)** the developer of the system, system component, or system service is required to deliver the system, component, or service with [Assignment: organization-defined security configurations] implemented;
- **SA-04(05)(b)** the configurations are used as the default for any subsequent system, component, or service reinstallation or upgrade.

**Examine:** System and services acquisition policy; procedures addressing the integration of security requirements, descriptions, and criteria into the acquisition process; solicitation documents; acquisition documentation; acquisition contracts for the system, system component, or system service; security configurations to be implemented by the developer of the system, system component, or system service; service level agreements; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with acquisition/contracting responsibilities; organizational personnel with the responsibility to determine system security requirements; system developers or service provider; organizational personnel with information security responsibilities.

**Test:** Mechanisms used to verify that the configuration of the system, component, or service is delivered as specified.

</details>

<a id="sa-4.6"></a>

### SA-4(6) Use of Information Assurance Products

*Baselines: Not in a baseline*

- **(a)** Employ only government off-the-shelf or commercial off-the-shelf information assurance and information assurance-enabled information technology products that compose an NSA-approved solution to protect classified information when the networks used to transmit the information are at a lower classification level than the information being transmitted; and
- **(b)** Ensure that these products have been evaluated and/or validated by NSA or in accordance with NSA-approved procedures.

<details>
<summary>Discussion and assessment objectives for SA-4(6)</summary>

Commercial off-the-shelf IA or IA-enabled information technology products used to protect classified information by cryptographic means may be required to use NSA-approved key management. See NSA CSFC.

Determine if:

- **SA-04(06)(a)** only government off-the-shelf or commercial off-the-shelf information assurance and information assurance-enabled information technology products that compose an NSA-approved solution to protect classified information when the networks used to transmit the information are at a lower classification level than the information being transmitted are employed;
- **SA-04(06)(b)** these products have been evaluated and/or validated by NSA or in accordance with NSA-approved procedures.

**Examine:** Supply chain risk management plan; system and services acquisition policy; procedures addressing the integration of security requirements, descriptions, and criteria into the acquisition process; solicitation documents; acquisition documentation; acquisition contracts for the system, system component, or system service; security configurations to be implemented by the developer of the system, system component, or system service; service level agreements; list of deployed IT products/solutions; NSA-approved list; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with acquisition/contracting responsibilities; organizational personnel with the responsibility to determine system security requirements; organizational personnel responsible for ensuring information assurance products are NSA-approved and are evaluated and/or validated products in accordance with NSA-approved procedures; organizational personnel with information security responsibilities.

**Test:** Organizational processes for selecting and employing evaluated and/or validated information assurance products and services that compose an NSA-approved solution to protect classified information.

</details>

<a id="sa-4.7"></a>

### SA-4(7) NIAP-approved Protection Profiles 

*Baselines: Not in a baseline*

- **(a)** Limit the use of commercially provided information assurance and information assurance-enabled information technology products to those products that have been successfully evaluated against a National Information Assurance partnership (NIAP)-approved Protection Profile for a specific technology type, if such a profile exists; and
- **(b)** Require, if no NIAP-approved Protection Profile exists for a specific technology type but a commercially provided information technology product relies on cryptographic functionality to enforce its security policy, that the cryptographic module is FIPS-validated or NSA-approved.

<details>
<summary>Discussion and assessment objectives for SA-4(7)</summary>

See NIAP CCEVS for additional information on NIAP. See NIST CMVP for additional information on FIPS-validated cryptographic modules.

Determine if:

- **SA-04(07)(a)** the use of commercially provided information assurance and information assurance-enabled information technology products is limited to those products that have been successfully evaluated against a National Information Assurance partnership (NIAP)-approved Protection Profile for a specific technology type, if such a profile exists;
- **SA-04(07)(b)** if no NIAP-approved Protection Profile exists for a specific technology type but a commercially provided information technology product relies on cryptographic functionality to enforce its security policy, that cryptographic module is required to be FIPS-validated or NSA-approved.

**Examine:** Supply chain risk management plan; system and services acquisition policy; procedures addressing the integration of security requirements, descriptions, and criteria into the acquisition process; solicitation documents; acquisition documentation; acquisition contracts for the system, system component, or system service; list of deployed IT products/solutions; NAIP-approved protection profiles; FIPS-validation information for cryptographic functionality; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with acquisition/contracting responsibilities; organizational personnel with the responsibility for determining system security requirements; organizational personnel responsible for ensuring that information assurance products have been evaluated against a NIAP-approved protection profile or for ensuring products relying on cryptographic functionality are FIPS-validated; organizational personnel with information security responsibilities.

**Test:** Organizational processes for selecting and employing products/services evaluated against a NIAP-approved protection profile or FIPS-validated products.

</details>

<a id="sa-4.8"></a>

### SA-4(8) Continuous Monitoring Plan for Controls

*Baselines: Not in a baseline*

Require the developer of the system, system component, or system service to produce a plan for continuous monitoring of control effectiveness that is consistent with the continuous monitoring program of the organization.

<details>
<summary>Discussion and assessment objectives for SA-4(8)</summary>

The objective of continuous monitoring plans is to determine if the planned, required, and deployed controls within the system, system component, or system service continue to be effective over time based on the inevitable changes that occur. Developer continuous monitoring plans include a sufficient level of detail such that the information can be incorporated into continuous monitoring programs implemented by organizations. Continuous monitoring plans can include the types of control assessment and monitoring activities planned, frequency of control monitoring, and actions to be taken when controls fail or become ineffective.

Determine if the developer of the system, system component, or system service is required to produce a plan for the continuous monitoring of control effectiveness that is consistent with the continuous monitoring program of the organization.

**Examine:** System and services acquisition policy; procedures addressing developer continuous monitoring plans; procedures addressing the integration of security requirements, descriptions, and criteria into the acquisition process; developer continuous monitoring plans; security assessment plans; acquisition contracts for the system, system component, or system service; acquisition documentation; solicitation documentation; service level agreements; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with acquisition/contracting responsibilities; organizational personnel with the responsibility for determining system security requirements; system developers; organizational personnel with information security responsibilities.

**Test:** Vendor processes for continuous monitoring; mechanisms supporting and/or implementing developer continuous monitoring.

</details>

<a id="sa-4.9"></a>

### SA-4(9) Functions, Ports, Protocols, and Services in Use

*Baselines: Moderate, High*

Require the developer of the system, system component, or system service to identify the functions, ports, protocols, and services intended for organizational use.

<details>
<summary>Discussion and assessment objectives for SA-4(9)</summary>

The identification of functions, ports, protocols, and services early in the system development life cycle (e.g., during the initial requirements definition and design stages) allows organizations to influence the design of the system, system component, or system service. This early involvement in the system development life cycle helps organizations avoid or minimize the use of functions, ports, protocols, or services that pose unnecessarily high risks and understand the trade-offs involved in blocking specific ports, protocols, or services or requiring system service providers to do so. Early identification of functions, ports, protocols, and services avoids costly retrofitting of controls after the system, component, or system service has been implemented. SA-9 describes the requirements for external system services. Organizations identify which functions, ports, protocols, and services are provided from external sources.

Determine if:

- **SA-04(09)[01]** the developer of the system, system component, or system service is required to identify the functions intended for organizational use;
- **SA-04(09)[02]** the developer of the system, system component, or system service is required to identify the ports intended for organizational use;
- **SA-04(09)[03]** the developer of the system, system component, or system service is required to identify the protocols intended for organizational use;
- **SA-04(09)[04]** the developer of the system, system component, or system service is required to identify the services intended for organizational use.

**Examine:** System and services acquisition policy; procedures addressing the integration of security requirements, descriptions, and criteria into the acquisition process; system design documentation; system documentation, including functions, ports, protocols, and services intended for organizational use; acquisition contracts for systems or services; acquisition documentation; solicitation documentation; service level agreements; organizational security requirements, descriptions, and criteria for developers of systems, system components, and system services; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with acquisition/contracting responsibilities; organizational personnel with the responsibility for determining system security requirements; system/network administrators; organizational personnel operating, using, and/or maintaining the system; system developers; organizational personnel with information security responsibilities.

</details>

<a id="sa-4.10"></a>

### SA-4(10) Use of Approved PIV Products

*Baselines: Low, Moderate, High*

Employ only information technology products on the FIPS 201-approved products list for Personal Identity Verification (PIV) capability implemented within organizational systems.

<details>
<summary>Discussion and assessment objectives for SA-4(10)</summary>

Products on the FIPS 201-approved products list meet NIST requirements for Personal Identity Verification (PIV) of Federal Employees and Contractors. PIV cards are used for multi-factor authentication in systems and organizations.

Determine if only information technology products on the FIPS 201-approved products list for the Personal Identity Verification (PIV) capability implemented within organizational systems are employed.

**Examine:** Supply chain risk management plan; system and services acquisition policy; procedures addressing the integration of security requirements, descriptions, and criteria into the acquisition process; solicitation documentation; acquisition documentation; acquisition contracts for the system, system component, or system service; service level agreements; FIPS 201 approved products list; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with acquisition/contracting responsibilities; organizational personnel with the responsibility for determining system security requirements; organizational personnel with the responsibility for ensuring that only FIPS 201- approved products are implemented; organizational personnel with information security responsibilities.

**Test:** Organizational processes for selecting and employing FIPS 201-approved products.

</details>

<a id="sa-4.11"></a>

### SA-4(11) System of Records

*Baselines: Not in a baseline*

Include [Assignment: organization-defined Privacy Act requirements] in the acquisition contract for the operation of a system of records on behalf of an organization to accomplish an organizational mission or function.

<details>
<summary>Discussion and assessment objectives for SA-4(11)</summary>

When, by contract, an organization provides for the operation of a system of records to accomplish an organizational mission or function, the organization, consistent with its authority, causes the requirements of the PRIVACT to be applied to the system of records.

Determine if [Assignment: organization-defined Privacy Act requirements] are defined in the acquisition contract for the operation of a system of records on behalf of an organization to accomplish an organizational mission or function.

**Examine:** System and services acquisition policy; system and services acquisition procedures; procedures addressing the integration of Privacy Act requirements into systems of records operated by external organizations; solicitation documentation; acquisition documentation; acquisition contracts for the system, system component, or system service; service level agreements; system security plan; privacy plan; personally identifiable information processing policy; privacy program plan; privacy impact assessment; privacy risk assessment documentation; other relevant documents or records.

**Interview:** Organizational personnel with acquisition responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Contract management processes to verify Privacy Act requirements are defined for the operation of a system of records; vendor processes for demonstrating incorporation of Privacy Act requirements in its operation of a system of records.

</details>

<a id="sa-4.12"></a>

### SA-4(12) Data Ownership

*Baselines: Not in a baseline*

- **(a)** Include organizational data ownership requirements in the acquisition contract; and
- **(b)** Require all data to be removed from the contractor’s system and returned to the organization within [Assignment: organization-defined time frame].

<details>
<summary>Discussion and assessment objectives for SA-4(12)</summary>

Contractors who operate a system that contains data owned by an organization initiating the contract have policies and procedures in place to remove the data from their systems and/or return the data in a time frame defined by the contract.

Determine if:

- **SA-04(12)(a)** organizational data ownership requirements are included in the acquisition contract;
- **SA-04(12)(b)** all data to be removed from the contractor’s system and returned to the organization is required within [Assignment: organization-defined time frame].

**Examine:** System and services acquisition policy; system and services acquisition procedures; procedures addressing the integration of information security and privacy requirements, descriptions, and criteria into the acquisition process; procedures addressing the disposition of personally identifiable information; solicitation documentation; acquisition documentation; acquisition contracts for the system or system service; personally identifiable information processing policy; service level agreements; information sharing agreements; memoranda of understanding; system security plan; privacy plan; privacy impact assessment; privacy risk assessment documentation; other relevant documents or records.

**Interview:** Organizational personnel with acquisition/contracting responsibilities; organizational personnel with the responsibility for data management and processing requirements; organizational personnel with information security and privacy responsibilities.

**Test:** Contract management processes to verify that data is removed as required; vendor processes for removing data in required timeframe; mechanisms verifying the removal and return of data.

</details>

*Withdrawn enhancements: SA-4(4).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SA-4</summary>

Determine if:

- **SA-04a.**
  - **SA-04a.[01]** security functional requirements, descriptions, and criteria are included explicitly or by reference using [Selection (one or more): standardized contract language; [Assignment: organization-defined contract language] ] in the acquisition contract for the system, system component, or system service;
  - **SA-04a.[02]** privacy functional requirements, descriptions, and criteria are included explicitly or by reference using [Selection (one or more): standardized contract language; [Assignment: organization-defined contract language] ] in the acquisition contract for the system, system component, or system service;
- **SA-04b.** strength of mechanism requirements, descriptions, and criteria are included explicitly or by reference using [Selection (one or more): standardized contract language; [Assignment: organization-defined contract language] ] in the acquisition contract for the system, system component, or system service;
- **SA-04c.**
  - **SA-04c.[01]** security assurance requirements, descriptions, and criteria are included explicitly or by reference using [Selection (one or more): standardized contract language; [Assignment: organization-defined contract language] ] in the acquisition contract for the system, system component, or system service;
  - **SA-04c.[02]** privacy assurance requirements, descriptions, and criteria are included explicitly or by reference using [Selection (one or more): standardized contract language; [Assignment: organization-defined contract language] ] in the acquisition contract for the system, system component, or system service;
- **SA-04d.**
  - **SA-04d.[01]** controls needed to satisfy the security requirements, descriptions, and criteria are included explicitly or by reference using [Selection (one or more): standardized contract language; [Assignment: organization-defined contract language] ] in the acquisition contract for the system, system component, or system service;
  - **SA-04d.[02]** controls needed to satisfy the privacy requirements, descriptions, and criteria are included explicitly or by reference using [Selection (one or more): standardized contract language; [Assignment: organization-defined contract language] ] in the acquisition contract for the system, system component, or system service;
- **SA-04e.**
  - **SA-04e.[01]** security documentation requirements, descriptions, and criteria are included explicitly or by reference using [Selection (one or more): standardized contract language; [Assignment: organization-defined contract language] ] in the acquisition contract for the system, system component, or system service;
  - **SA-04e.[02]** privacy documentation requirements, descriptions, and criteria are included explicitly or by reference using [Selection (one or more): standardized contract language; [Assignment: organization-defined contract language] ] in the acquisition contract for the system, system component, or system service;
- **SA-04f.**
  - **SA-04f.[01]** requirements for protecting security documentation, descriptions, and criteria are included explicitly or by reference using [Selection (one or more): standardized contract language; [Assignment: organization-defined contract language] ] in the acquisition contract for the system, system component, or system service;
  - **SA-04f.[02]** requirements for protecting privacy documentation, descriptions, and criteria are included explicitly or by reference using [Selection (one or more): standardized contract language; [Assignment: organization-defined contract language] ] in the acquisition contract for the system, system component, or system service;
- **SA-04g.** the description of the system development environment and environment in which the system is intended to operate, requirements, and criteria are included explicitly or by reference using [Selection (one or more): standardized contract language; [Assignment: organization-defined contract language] ] in the acquisition contract for the system, system component, or system service;
- **SA-04h.**
  - **SA-04h.[01]** the allocation of responsibility or identification of parties responsible for information security requirements, descriptions, and criteria are included explicitly or by reference using [Selection (one or more): standardized contract language; [Assignment: organization-defined contract language] ] in the acquisition contract for the system, system component, or system service;
  - **SA-04h.[02]** the allocation of responsibility or identification of parties responsible for privacy requirements, descriptions, and criteria are included explicitly or by reference using [Selection (one or more): standardized contract language; [Assignment: organization-defined contract language] ];
  - **SA-04h.[03]** the allocation of responsibility or identification of parties responsible for supply chain risk management requirements, descriptions, and criteria are included explicitly or by reference using [Selection (one or more): standardized contract language; [Assignment: organization-defined contract language] ];
- **SA-04i.** acceptance criteria requirements and descriptions are included explicitly or by reference using [Selection (one or more): standardized contract language; [Assignment: organization-defined contract language] ] in the acquisition contract for the system, system component, or system service.

**Examine:** System and services acquisition policy; system and services acquisition procedures; procedures addressing the integration of information security and privacy and supply chain risk management into the acquisition process; configuration management plan; acquisition contracts for the system, system component, or system service; system design documentation; system security plan; supply chain risk management plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with acquisition/contracting responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators; organizational personnel with supply chain risk management responsibilities.

**Test:** Organizational processes for determining system security and privacy functional, strength, and assurance requirements; organizational processes for developing acquisition contracts; mechanisms supporting and/or implementing acquisitions and the inclusion of security and privacy requirements in contracts.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

SA-4 puts security and privacy requirements into the contract for every system, component or service you acquire, where the supplier is bound by them. Items a to i list what the contract must state, explicitly or by reference: functional requirements, strength of mechanism, assurance requirements, the controls, documentation and its protection, the development and operating environments, who is responsible for security, privacy and supply chain risk, and acceptance criteria. NIST's SA-4 discussion derives the functional requirements from the high-level ones set under [SA-2](/controls/sa/sa-2/). It points to NIST SP 800-160 Vol. 1 Rev. 1, Engineering Trustworthy Secure Systems ([November 2022](https://csrc.nist.gov/pubs/sp/800/160/v1/r1/final), current as of September 2026), for requirements engineering.

**Common implementations.** A library of standard security and privacy clauses that the procurement office maintains and the CISO and senior privacy official approve. Each solicitation adds system-specific requirements: the controls from the system's baseline that the supplier will implement, with parameter values, and the tests the organization will run before acceptance. The security team reviews each solicitation before it is issued; the privacy office reviews those for systems that process personally identifiable information. NIST's discussion also suggests requirements for support, maintenance and update notices. Most contracts add how quickly the supplier reports incidents and vulnerabilities in its product, and how long it will supply security updates, which feed [IR-6](/controls/ir/ir-6/) and [SA-22](/controls/sa/sa-22/). A template for acquisition security requirements is planned for this family.

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Contract language used (a to i) | Standardized contract language that the procurement office maintains and the Chief Information Security Officer and senior privacy official approve, with system-specific requirements added for each acquisition |
| Design and implementation information (SA-4(2)) | Security-relevant external system interfaces and high-level design, and for High systems also low-level design |
| Level of detail (SA-4(2)) | Enough detail to show, for each subsystem and interface, which controls it implements and how |
| Security configurations delivered (SA-4(5), High) | The secure configuration baselines named in the baseline configuration standard for that type of component, with default passwords changed and the functions, ports, protocols and services not needed disabled |

The first typical value selects both options of the SA-4 parameter: standardized language, plus organization-defined language for each acquisition. The SA-4(2) value selects the first two options of its parameter and leaves the organization-defined option unused. SA-4(1), SA-4(9) and SA-4(10) have no parameters. In the [System and Services Acquisition policy](/templates/policies/sa/), the system owner puts the requirements in each contract and the CISO reviews each solicitation.

**Evidence assessors ask for.**

- The standard contract language, with its approval
- A sample of recent contracts for the system, checked for items a to i in the text or by reference
- Records of the security and privacy review of each solicitation
- The developer's description of the functional properties of the controls (SA-4(1)) and the design and implementation information (SA-4(2))
- The developer's list of functions, ports, protocols and services, reviewed and recorded in the [system security plan](/templates/plans/system-security-plan/) (SA-4(9))
- For each PIV product, its FIPS 201 Approved Products List entry in the component inventory (SA-4(10))

**Inheritance.** The standard contract language and the solicitation review are usually organization-level common controls. The system owns its own requirements, controls and acceptance criteria, so SA-4 is a hybrid control. For an external service, the contract terms also serve [SA-9](/controls/sa/sa-9/).

**Common findings.**

- A contract that says only "comply with all applicable security policies", with no specific requirements, controls or acceptance criteria.
- Software bought on a purchase card or through a click-through license, outside the review.
- No privacy requirements in a contract for a system that processes personally identifiable information.
- No terms for vulnerability notice or for how long security updates will be supplied.
- Design information or port lists required by the contract but never delivered, or delivered and never reviewed.

**Enhancements in the Moderate baseline.** [SA-4(1)](#sa-4.1) functional properties of controls, [SA-4(2)](#sa-4.2) design and implementation information for controls, [SA-4(9)](#sa-4.9) functions, ports, protocols and services in use, and [SA-4(10)](#sa-4.10) use of approved PIV products, which is also in Low. High adds [SA-4(5)](#sa-4.5) system, component and service configurations. [SA-4(3)](#sa-4.3), [SA-4(6)](#sa-4.6), [SA-4(7)](#sa-4.7), [SA-4(8)](#sa-4.8), [SA-4(11)](#sa-4.11) and [SA-4(12)](#sa-4.12) are in no baseline.

- **SA-4(1)** asks the developer to describe what each control does at its interfaces. Accept the description only when it covers every control the contract allocates to the developer.
- **SA-4(2)** asks for design information. Most commercial products supply interfaces and high-level design only, so ask for more where the risk warrants it, and say so in the solicitation.
- **SA-4(9)** asks the developer to list the functions, ports, protocols and services early. Review the list against the prohibited and restricted ones under [CM-7](/controls/cm/cm-7/) before accepting the design.
- **SA-4(10)** applies where the system implements Personal Identity Verification (PIV), the federal smart card credential. A system with no PIV capability records it as not applicable in the security plan, with that reason.

**Federal systems** (as of September 2026). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.j(1), requires contracts and other agreements involving federal information to include security and privacy requirements sufficient to protect it. Section 4.j(5) requires provisions for federal notification and access, and cooperation with agency staff and Inspectors General. OMB [M-26-05](https://www.whitehouse.gov/wp-content/uploads/2026/01/M-26-05-Adopting-a-Risk-based-Approach-to-Software-and-Hardware-Security.pdf) (January 23, 2026) rescinds M-22-18 and M-23-16, so the Secure Software Development Attestation Form is no longer required. Agencies may still use it, and may require a current software bill of materials on request, where their own risk-based assurance policy calls for it. For SA-4(10), [FIPS 201-3](https://csrc.nist.gov/pubs/fips/201-3/final) (January 2022) provides PIV conformance through GSA's [FIPS 201 Approved Products List](https://www.idmanagement.gov/fips201/) (preamble item 7, Appendix A.5).

<!-- TODO(verify): FAR contract requirements for IT security (FAR 39.101(c), clause 52.239-1) and PIV products (FAR 4.1302(a)). The codified FAR and the Revolutionary FAR Overhaul class deviations for Parts 4 and 39 may differ; cite the FAR here once it is clear which text governs. Same open question as the SA-4 and SA-4(10) clauses. -->
