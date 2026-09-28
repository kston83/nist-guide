---
title: 'SA-3 System Development Life Cycle'
description: 'NIST SP 800-53 Rev. 5 control SA-3, System Development Life Cycle: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SA-3 System Development Life Cycle'
  order: 3
control:
  id: SA-3
  family: SA
  baselines: [Low, Moderate, High, Privacy]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | 3 (0 in a baseline) |

**Related controls:** [AT-3](/controls/at/at-3/), [PL-8](/controls/pl/pl-8/), [PM-7](/controls/pm/pm-7/), [SA-4](/controls/sa/sa-4/), [SA-5](/controls/sa/sa-5/), [SA-8](/controls/sa/sa-8/), [SA-11](/controls/sa/sa-11/), [SA-15](/controls/sa/sa-15/), [SA-17](/controls/sa/sa-17/), [SA-22](/controls/sa/sa-22/), [SR-3](/controls/sr/sr-3/), [SR-4](/controls/sr/sr-4/), [SR-5](/controls/sr/sr-5/), [SR-9](/controls/sr/sr-9/)

## Control statement

- **a.** Acquire, develop, and manage the system using [Assignment: organization-defined system-development life cycle] that incorporates information security and privacy considerations;
- **b.** Define and document information security and privacy roles and responsibilities throughout the system development life cycle;
- **c.** Identify individuals having information security and privacy roles and responsibilities; and
- **d.** Integrate the organizational information security and privacy risk management process into system development life cycle activities.

<details>
<summary>NIST discussion</summary>

A system development life cycle process provides the foundation for the successful development, implementation, and operation of organizational systems. The integration of security and privacy considerations early in the system development life cycle is a foundational principle of systems security engineering and privacy engineering. To apply the required controls within the system development life cycle requires a basic understanding of information security and privacy, threats, vulnerabilities, adverse impacts, and risk to critical mission and business functions. The security engineering principles in SA-8 help individuals properly design, code, and test systems and system components. Organizations include qualified personnel (e.g., senior agency information security officers, senior agency officials for privacy, security and privacy architects, and security and privacy engineers) in system development life cycle processes to ensure that established security and privacy requirements are incorporated into organizational systems. Role-based security and privacy training programs can ensure that individuals with key security and privacy roles and responsibilities have the experience, skills, and expertise to conduct assigned system development life cycle activities.

The effective integration of security and privacy requirements into enterprise architecture also helps to ensure that important security and privacy considerations are addressed throughout the system life cycle and that those considerations are directly related to organizational mission and business processes. This process also facilitates the integration of the information security and privacy architectures into the enterprise architecture, consistent with the risk management strategy of the organization. Because the system development life cycle involves multiple organizations, (e.g., external suppliers, developers, integrators, service providers), acquisition and supply chain risk management functions and controls play significant roles in the effective management of the system during the life cycle.

</details>

## Control enhancements

<a id="sa-3.1"></a>

### SA-3(1) Manage Preproduction Environment

*Baselines: Not in a baseline*

Protect system preproduction environments commensurate with risk throughout the system development life cycle for the system, system component, or system service.

<details>
<summary>Discussion and assessment objectives for SA-3(1)</summary>

The preproduction environment includes development, test, and integration environments. The program protection planning processes established by the Department of Defense are examples of managing the preproduction environment for defense contractors. Criticality analysis and the application of controls on developers also contribute to a more secure system development environment.

Determine if system pre-production environments are protected commensurate with risk throughout the system development life cycle for the system, system component, or system service.

**Examine:** System and services acquisition policy; procedures addressing the integration of security and supply chain risk management into the system development life cycle process; system development life cycle documentation; procedures addressing program protection planning; criticality analysis results; security and supply chain risk management strategy/program documentation; system security plan; supply chain risk management plan; other relevant documents or records.

**Interview:** Organizational personnel with security and system life cycle development responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for defining and documenting the system development life cycle; organizational processes for identifying system development life cycle roles and responsibilities; organizational process for integrating security risk management into the system development life cycle; mechanisms supporting and/or implementing the system development life cycle.

</details>

<a id="sa-3.2"></a>

### SA-3(2) Use of Live or Operational Data

*Baselines: Not in a baseline*

- **(a)** Approve, document, and control the use of live data in preproduction environments for the system, system component, or system service; and
- **(b)** Protect preproduction environments for the system, system component, or system service at the same impact or classification level as any live data in use within the preproduction environments.

<details>
<summary>Discussion and assessment objectives for SA-3(2)</summary>

Live data is also referred to as operational data. The use of live or operational data in preproduction (i.e., development, test, and integration) environments can result in significant risks to organizations. In addition, the use of personally identifiable information in testing, research, and training increases the risk of unauthorized disclosure or misuse of such information. Therefore, it is important for the organization to manage any additional risks that may result from the use of live or operational data. Organizations can minimize such risks by using test or dummy data during the design, development, and testing of systems, system components, and system services. Risk assessment techniques may be used to determine if the risk of using live or operational data is acceptable.

Determine if:

- **SA-03(02)a.**
  - **SA-03(02)a.[01]** the use of live data in pre-production environments is approved for the system, system component, or system service;
  - **SA-03(02)a.[02]** the use of live data in pre-production environments is documented for the system, system component, or system service;
  - **SA-03(02)a.[03]** the use of live data in pre-production environments is controlled for the system, system component, or system service;
- **SA-03(02)b.** pre-production environments for the system, system component, or system service are protected at the same impact or classification level as any live data in use within the pre-production environments.

**Examine:** System and services acquisition policy; system and services acquisition procedures; procedures addressing the integration of security and privacy into the system development life cycle process; system development life cycle documentation; security risk assessment documentation; privacy impact assessment; privacy risk assessment documentation; system security plan; privacy plan; data mapping documentation; personally identifiable information processing policy; procedures addressing the authority to test with personally identifiable information; procedures addressing the minimization of personally identifiable information used in testing, training, and research; other relevant documents or records.

**Interview:** Organizational personnel with information security and privacy responsibility; organizational personnel with system life cycle development responsibilities.

**Test:** Organizational processes the use of live data in pre-production environments; mechanisms for protecting live data in pre-production environments.

</details>

<a id="sa-3.3"></a>

### SA-3(3) Technology Refresh

*Baselines: Not in a baseline*

Plan for and implement a technology refresh schedule for the system throughout the system development life cycle.

<details>
<summary>Discussion and assessment objectives for SA-3(3)</summary>

Technology refresh planning may encompass hardware, software, firmware, processes, personnel skill sets, suppliers, service providers, and facilities. The use of obsolete or nearing obsolete technology may increase the security and privacy risks associated with unsupported components, counterfeit or repurposed components, components unable to implement security or privacy requirements, slow or inoperable components, components from untrusted sources, inadvertent personnel error, or increased complexity. Technology refreshes typically occur during the operations and maintenance stage of the system development life cycle.

Determine if:

- **SA-03(03)[01]** a technology refresh schedule is planned for the system throughout the system development life cycle;
- **SA-03(03)[02]** a technology refresh schedule is implemented for the system throughout the system development life cycle.

**Examine:** System and services acquisition policy; system and services acquisition procedures; procedures addressing technology refresh planning and implementation; system development life cycle documentation; technology refresh schedule; security risk assessment documentation; privacy impact assessment; privacy risk assessment documentation; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with information security and privacy responsibilities; organizational personnel with system life cycle development responsibilities.

**Test:** Organizational processes for defining and documenting the system development life cycle; organizational processes for identifying system development life cycle roles and responsibilities; organizational processes for integrating security and privacy risk management into the system development life cycle; mechanisms supporting and/or implementing the system development life cycle.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SA-3</summary>

Determine if:

- **SA-03a.**
  - **SA-03a.[01]** the system is acquired, developed, and managed using [Assignment: organization-defined system-development life cycle] that incorporates information security considerations;
  - **SA-03a.[02]** the system is acquired, developed, and managed using [Assignment: organization-defined system-development life cycle] that incorporates privacy considerations;
- **SA-03b.**
  - **SA-03b.[01]** information security roles and responsibilities are defined and documented throughout the system development life cycle;
  - **SA-03b.[02]** privacy roles and responsibilities are defined and documented throughout the system development life cycle;
- **SA-03c.**
  - **SA-03c.[01]** individuals with information security roles and responsibilities are identified;
  - **SA-03c.[02]** individuals with privacy roles and responsibilities are identified;
- **SA-03d.**
  - **SA-03d.[01]** organizational information security risk management processes are integrated into system development life cycle activities;
  - **SA-03d.[02]** organizational privacy risk management processes are integrated into system development life cycle activities.

**Examine:** System and services acquisition policy; system and services acquisition procedures; procedures addressing the integration of information security and privacy and supply chain risk management into the system development life cycle process; system development life cycle documentation; organizational risk management strategy; information security and privacy risk management strategy documentation; system security plan; privacy plan; privacy program plan; enterprise architecture documentation; role-based security and privacy training program documentation; data mapping documentation; other relevant documents or records.

**Interview:** Organizational personnel with information security and privacy responsibilities; organizational personnel with system life cycle development responsibilities; organizational personnel with supply chain risk management responsibilities.

**Test:** Organizational processes for defining and documenting the system development life cycle; organizational processes for identifying system development life cycle roles and responsibilities; organizational processes for integrating information security and privacy and supply chain risk management into the system development life cycle; mechanisms supporting and/or implementing the system development life cycle.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
