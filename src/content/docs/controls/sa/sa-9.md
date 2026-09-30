---
title: 'SA-9 External System Services'
description: 'NIST SP 800-53 Rev. 5 control SA-9, External System Services: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SA-9 External System Services'
  order: 9
control:
  id: SA-9
  family: SA
  baselines: [Low, Moderate, High, Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | 8 (1 in a baseline) |

**Related controls:** [AC-20](/controls/ac/ac-20/), [CA-3](/controls/ca/ca-3/), [CP-2](/controls/cp/cp-2/), [IR-4](/controls/ir/ir-4/), [IR-7](/controls/ir/ir-7/), [PL-10](/controls/pl/pl-10/), [PL-11](/controls/pl/pl-11/), [PS-7](/controls/ps/ps-7/), [SA-2](/controls/sa/sa-2/), [SA-4](/controls/sa/sa-4/), [SR-3](/controls/sr/sr-3/), [SR-5](/controls/sr/sr-5/)

## Control statement

- **a.** Require that providers of external system services comply with organizational security and privacy requirements and employ the following controls: [Assignment: organization-defined controls];
- **b.** Define and document organizational oversight and user roles and responsibilities with regard to external system services; and
- **c.** Employ the following processes, methods, and techniques to monitor control compliance by external service providers on an ongoing basis: [Assignment: organization-defined processes, methods, and techniques].

<details>
<summary>NIST discussion</summary>

External system services are provided by an external provider, and the organization has no direct control over the implementation of the required controls or the assessment of control effectiveness. Organizations establish relationships with external service providers in a variety of ways, including through business partnerships, contracts, interagency agreements, lines of business arrangements, licensing agreements, joint ventures, and supply chain exchanges. The responsibility for managing risks from the use of external system services remains with authorizing officials. For services external to organizations, a chain of trust requires that organizations establish and retain a certain level of confidence that each provider in the consumer-provider relationship provides adequate protection for the services rendered. The extent and nature of this chain of trust vary based on relationships between organizations and the external providers. Organizations document the basis for the trust relationships so that the relationships can be monitored. External system services documentation includes government, service providers, end user security roles and responsibilities, and service-level agreements. Service-level agreements define the expectations of performance for implemented controls, describe measurable outcomes, and identify remedies and response requirements for identified instances of noncompliance.

</details>

## Control enhancements

<a id="sa-9.1"></a>

### SA-9(1) Risk Assessments and Organizational Approvals

*Baselines: Not in a baseline*

- **(a)** Conduct an organizational assessment of risk prior to the acquisition or outsourcing of information security services; and
- **(b)** Verify that the acquisition or outsourcing of dedicated information security services is approved by [Assignment: organization-defined personnel or roles].

<details>
<summary>Discussion and assessment objectives for SA-9(1)</summary>

Information security services include the operation of security devices, such as firewalls or key management services as well as incident monitoring, analysis, and response. Risks assessed can include system, mission or business, security, privacy, or supply chain risks.

Determine if:

- **SA-09(01)(a)** an organizational assessment of risk is conducted prior to the acquisition or outsourcing of information security services;
- **SA-09(01)(b)** [Assignment: organization-defined personnel or roles] approve the acquisition or outsourcing of dedicated information security services.

**Examine:** System and services acquisition policy; supply chain risk management policy and procedures; procedures addressing external system services; acquisition documentation; acquisition contracts for the system, system component, or system service; risk assessment reports; approval records for the acquisition or outsourcing of dedicated security services; system security plan; supply chain risk management plan; other relevant documents or records.

**Interview:** Organizational personnel with system and service acquisition responsibilities; organizational personnel with system security responsibilities; external providers of system services; organizational personnel with information security responsibilities; organizational personnel with supply chain risk management responsibilities.

**Test:** Organizational processes for conducting a risk assessment prior to acquiring or outsourcing dedicated security services; organizational processes for approving the outsourcing of dedicated security services; mechanisms supporting and/or implementing risk assessment; mechanisms supporting and/or implementing approval processes.

</details>

<a id="sa-9.2"></a>

### SA-9(2) Identification of Functions, Ports, Protocols, and Services

*Baselines: Moderate, High*

Require providers of the following external system services to identify the functions, ports, protocols, and other services required for the use of such services: [Assignment: organization-defined external system services].

<details>
<summary>Discussion and assessment objectives for SA-9(2)</summary>

Information from external service providers regarding the specific functions, ports, protocols, and services used in the provision of such services can be useful when the need arises to understand the trade-offs involved in restricting certain functions and services or blocking certain ports and protocols.

Determine if providers of [Assignment: organization-defined external system services] are required to identify the functions, ports, protocols, and other services required for the use of such services.

**Examine:** System and services acquisition policy; supply chain risk management policy and procedures; procedures addressing external system services; acquisition contracts for the system, system component, or system service; acquisition documentation; solicitation documentation; service level agreements; organizational security requirements and security specifications for external service providers; list of required functions, ports, protocols, and other services; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system and service acquisition responsibilities; organizational personnel with information security responsibilities; system/network administrators; external providers of system services.

</details>

<a id="sa-9.3"></a>

### SA-9(3) Establish and Maintain Trust Relationship with Providers

*Baselines: Not in a baseline*

Establish, document, and maintain trust relationships with external service providers based on the following requirements, properties, factors, or conditions: [Assignment: organization-defined security and privacy requirements, properties, factors, or conditions defining acceptable trust relationships].

<details>
<summary>Discussion and assessment objectives for SA-9(3)</summary>

Trust relationships between organizations and external service providers reflect the degree of confidence that the risk from using external services is at an acceptable level. Trust relationships can help organizations gain increased levels of confidence that service providers are providing adequate protection for the services rendered and can also be useful when conducting incident response or when planning for upgrades or obsolescence. Trust relationships can be complicated due to the potentially large number of entities participating in the consumer-provider interactions, subordinate relationships and levels of trust, and types of interactions between the parties. In some cases, the degree of trust is based on the level of control that organizations can exert on external service providers regarding the controls necessary for the protection of the service, information, or individual privacy and the evidence brought forth as to the effectiveness of the implemented controls. The level of control is established by the terms and conditions of the contracts or service-level agreements.

Determine if:

- **SA-09(03)[01]** trust relationships with external service provides based on [Assignment: organization-defined security requirements, properties, factors, or conditions] are established and documented;
- **SA-09(03)[02]** trust relationships with external service provides based on [Assignment: organization-defined security requirements, properties, factors, or conditions] are maintained;
- **SA-09(03)[03]** trust relationships with external service provides based on [Assignment: organization-defined privacy requirements, properties, factors, or conditions] are established and documented;
- **SA-09(03)[04]** trust relationships with external service provides based on [Assignment: organization-defined privacy requirements, properties, factors, or conditions] are maintained.

**Examine:** System and services acquisition policy; system and services acquisition procedures; acquisition contracts for the system, system component, or system service; acquisition documentation; solicitation documentation; service level agreements; memorandum of understanding; memorandum of agreements; list of organizational security and privacy requirements, properties, factors, or conditions for external provider services; documentation of trust relationships with external service providers; system security plan; privacy plan; supply chain risk management plan; other relevant documents or records.

**Interview:** Organizational personnel with acquisition responsibilities; organizational personnel with information security and privacy responsibilities; external providers of system services; organizational personnel with supply chain risk management responsibilities.

</details>

<a id="sa-9.4"></a>

### SA-9(4) Consistent Interests of Consumers and Providers

*Baselines: Not in a baseline*

Take the following actions to verify that the interests of [Assignment: organization-defined external service providers] are consistent with and reflect organizational interests: [Assignment: organization-defined actions].

<details>
<summary>Discussion and assessment objectives for SA-9(4)</summary>

As organizations increasingly use external service providers, it is possible that the interests of the service providers may diverge from organizational interests. In such situations, simply having the required technical, management, or operational controls in place may not be sufficient if the providers that implement and manage those controls are not operating in a manner consistent with the interests of the consuming organizations. Actions that organizations take to address such concerns include requiring background checks for selected service provider personnel; examining ownership records; employing only trustworthy service providers, such as providers with which organizations have had successful trust relationships; and conducting routine, periodic, unscheduled visits to service provider facilities.

Determine if [Assignment: organization-defined actions] are taken to verify that the interests of [Assignment: organization-defined external service providers] are consistent with and reflect organizational interests.

**Examine:** System and services acquisition policy; procedures addressing external system services; acquisition contracts for the system, system component, or system service; solicitation documentation; acquisition documentation; service level agreements; organizational security requirements/safeguards for external service providers; personnel security policies for external service providers; assessments performed on external service providers; system security plan; supply chain risk management plan; other relevant documents or records.

**Interview:** Organizational personnel with system and service acquisition responsibilities; organizational personnel with information security responsibilities; external providers of system services; organizational personnel with supply chain risk management responsibilities.

**Test:** Organizational processes for defining and employing safeguards to ensure consistent interests with external service providers; mechanisms supporting and/or implementing safeguards to ensure consistent interests with external service providers.

</details>

<a id="sa-9.5"></a>

### SA-9(5) Processing, Storage, and Service Location

*Baselines: Not in a baseline*

Restrict the location of [Selection (one or more): information processing; information or data; system services] to [Assignment: organization-defined locations] based on [Assignment: organization-defined requirements].

<details>
<summary>Discussion and assessment objectives for SA-9(5)</summary>

The location of information processing, information and data storage, or system services can have a direct impact on the ability of organizations to successfully execute their mission and business functions. The impact occurs when external providers control the location of processing, storage, or services. The criteria that external providers use for the selection of processing, storage, or service locations may be different from the criteria that organizations use. For example, organizations may desire that data or information storage locations be restricted to certain locations to help facilitate incident response activities in case of information security incidents or breaches. Incident response activities, including forensic analyses and after-the-fact investigations, may be adversely affected by the governing laws, policies, or protocols in the locations where processing and storage occur and/or the locations from which system services emanate.

Determine if based on [Assignment: organization-defined requirements], [Selection (one or more): information processing; information or data; system services] is/are restricted to [Assignment: organization-defined locations].

**Examine:** System and services acquisition policy; procedures addressing external system services; acquisition contracts for the system, system component, or system service; solicitation documentation; acquisition documentation; service level agreements; restricted locations for information processing; information/data and/or system services; information processing, information/data, and/or system services to be maintained in restricted locations; organizational security requirements or conditions for external providers; system security plan; supply chain risk management plan; other relevant documents or records.

**Interview:** Organizational personnel with system and service acquisition responsibilities; organizational personnel with information security responsibilities; external providers of system services; organizational personnel with supply chain risk management responsibilities.

**Test:** Organizational processes for defining the requirements to restrict locations of information processing, information/data, or information services; organizational processes for ensuring the location is restricted in accordance with requirements or conditions.

</details>

<a id="sa-9.6"></a>

### SA-9(6) Organization-controlled Cryptographic Keys

*Baselines: Not in a baseline*

Maintain exclusive control of cryptographic keys for encrypted material stored or transmitted through an external system.

<details>
<summary>Discussion and assessment objectives for SA-9(6)</summary>

Maintaining exclusive control of cryptographic keys in an external system prevents decryption of organizational data by external system staff. Organizational control of cryptographic keys can be implemented by encrypting and decrypting data inside the organization as data is sent to and received from the external system or by employing a component that permits encryption and decryption functions to be local to the external system but allows exclusive organizational access to the encryption keys.

Determine if exclusive control of cryptographic keys is maintained for encrypted material stored or transmitted through an external system.

**Examine:** System and services acquisition policy; procedures addressing external system services; acquisition contracts for the system, system component, or system service; solicitation documentation; acquisition documentation; service level agreements; procedures addressing organization-controlled cryptographic key management; organizational security requirements or conditions for external providers; system security plan; supply chain risk management plan; other relevant documents or records.

**Interview:** Organizational personnel with system and service acquisition responsibilities; organizational personnel with information security responsibilities; organization personnel with cryptographic key management responsibilities; external providers of system services; organizational personnel with supply chain risk management responsibilities.

**Test:** Organizational processes for cryptographic key management; mechanisms for supporting and implementing the management of organization-controlled cryptographic keys.

</details>

<a id="sa-9.7"></a>

### SA-9(7) Organization-controlled Integrity Checking

*Baselines: Not in a baseline*

Provide the capability to check the integrity of information while it resides in the external system.

<details>
<summary>Discussion and assessment objectives for SA-9(7)</summary>

Storage of organizational information in an external system could limit visibility into the security status of its data. The ability of the organization to verify and validate the integrity of its stored data without transferring it out of the external system provides such visibility.

Determine if the capability is provided to check the integrity of information while it resides in the external system.

**Examine:** System and services acquisition policy; procedures addressing external system services; acquisition contracts for the system, system component, or system service; solicitation documentation; acquisition documentation; service level agreements; procedures addressing organization-controlled integrity checking; information/data and/or system services; organizational security requirements or conditions for external providers; system security plan; supply chain risk management plan; other relevant documents or records.

**Interview:** Organizational personnel with system and service acquisition responsibilities; organizational personnel with information security responsibilities; organization personnel with integrity checking responsibilities; external providers of system services; organizational personnel with supply chain risk management responsibilities.

**Test:** Organizational processes for integrity checking; mechanisms for supporting and implementing integrity checking of information in external systems.

</details>

<a id="sa-9.8"></a>

### SA-9(8) Processing and Storage Location — U.S. Jurisdiction

*Baselines: Not in a baseline*

Restrict the geographic location of information processing and data storage to facilities located within in the legal jurisdictional boundary of the United States.

<details>
<summary>Discussion and assessment objectives for SA-9(8)</summary>

The geographic location of information processing and data storage can have a direct impact on the ability of organizations to successfully execute their mission and business functions. A compromise or breach of high impact information and systems can have severe or catastrophic adverse impacts on organizational assets and operations, individuals, other organizations, and the Nation. Restricting the processing and storage of high-impact information to facilities within the legal jurisdictional boundary of the United States provides greater control over such processing and storage.

Determine if the geographic location of information processing and data storage is restricted to facilities located within the legal jurisdictional boundary of the United States.

**Examine:** System and services acquisition policy; system and services acquisition procedures; procedures addressing external system services; acquisition contracts for the system, system component, or system service; solicitation documentation; acquisition documentation; service level agreements; procedures addressing determining jurisdiction restrictions for processing and storage location; information/data and/or system services; organizational security requirements or conditions for external providers; system security plan; supply chain risk management plan; other relevant documents or records.

**Interview:** Organizational personnel with system and service acquisition responsibilities; organizational personnel with information security responsibilities; organization personnel with supply chain risk management responsibilities; external providers of system services.

**Test:** Organizational processes restricting external system service providers to process and store information within the legal jurisdictional boundary of the United States.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SA-9</summary>

Determine if:

- **SA-09a.**
  - **SA-09a.[01]** providers of external system services comply with organizational security requirements;
  - **SA-09a.[02]** providers of external system services comply with organizational privacy requirements;
  - **SA-09a.[03]** providers of external system services employ [Assignment: organization-defined controls];
- **SA-09b.**
  - **SA-09b.[01]** organizational oversight with regard to external system services are defined and documented;
  - **SA-09b.[02]** user roles and responsibilities with regard to external system services are defined and documented;
- **SA-09c.** [Assignment: organization-defined processes, methods, and techniques] are employed to monitor control compliance by external service providers on an ongoing basis.

**Examine:** System and services acquisition policy; system and services acquisition procedures; procedures addressing methods and techniques for monitoring control compliance by external service providers of system services; acquisition documentation; contracts; service level agreements; interagency agreements; licensing agreements; list of organizational security and privacy requirements for external provider services; control assessment results or reports from external providers of system services; system security plan; privacy plan; supply chain risk management plan; other relevant documents or records.

**Interview:** Organizational personnel with acquisition responsibilities; external providers of system services; organizational personnel with information security and privacy responsibilities; organizational personnel with supply chain risk management responsibilities.

**Test:** Organizational processes for monitoring security and privacy control compliance by external service providers on an ongoing basis; mechanisms for monitoring security and privacy control compliance by external service providers on an ongoing basis.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

SA-9 covers services the system relies on but does not run: cloud platforms, software as a service, managed security, hosting and outsourced operations. You set the security requirements a provider must meet, usually by contract, define who oversees the provider and who does what, and check compliance on an ongoing basis rather than only at purchase.

**Common implementations.** Security requirements written into contracts and service agreements: the controls or framework the provider must meet, incident notification times, right to audit and data location. Compliance shown through independent attestations (for example a SOC 2 Type II report, ISO/IEC 27001 certification, or a FedRAMP authorization for federal use), reviewed each year by the vendor risk team. A shared responsibility matrix for each service, recorded in the security plan as inherited, shared or system-owned controls. Service reviews that cover the provider's incidents, findings and changes. The [external service review](/templates/forms/external-service-review/) form records each review, with a register of every external service and its next review date.

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Controls providers must employ (a) | The controls of the system's baseline that the provider is responsible for, per the shared responsibility matrix, with evidence from an independent attestation |
| Processes to monitor provider compliance (c) | Annual review of independent attestation reports, review of the provider's continuous monitoring or status reports, and contract service reviews |
| Services whose functions, ports, protocols and services must be identified (SA-9(2)) | All external system services that connect to the system |

**Evidence assessors ask for.**

- The list of external services the system uses, with owners
- Contract clauses or agreements stating the security requirements
- The shared responsibility matrix for each significant service
- Current attestation reports and the record of their review, including follow-up on exceptions
- Provider-supplied lists of required ports, protocols and services (SA-9(2))

**Inheritance.** The procurement process and vendor risk program are often common controls. The system owns its list of providers, the responsibility split and the review of each provider's evidence.

**Common findings.**

- Software as a service in use with no security terms in the contract.
- Attestation reports collected but not read, or exceptions and complementary user controls not followed up.
- No responsibility matrix, so controls fall between provider and customer.
- Expired attestation reports, or reports that do not cover the service actually used.

**Enhancements in the Moderate baseline.** [SA-9(2)](#sa-9.2) identification of functions, ports, protocols and services, also in High.

**Federal systems** (as of September 2026). Under [OMB M-24-15](https://www.fedramp.gov/2026/authority/m-24-15/), Modernizing the Federal Risk and Authorization Management Program (July 25, 2024), agencies must obtain and maintain a FedRAMP authorization for cloud products and services that create, collect, process, store or maintain federal information on the agency's behalf, unless the memo places them out of scope. Agencies presume the security assessment in a FedRAMP authorization package is adequate for their own authorizations at or below its FIPS 199 impact level, and still issue their own authorization to operate or use. FedRAMP itself is changing in 2026; see [Program variants](/rmf/program-variants/).
