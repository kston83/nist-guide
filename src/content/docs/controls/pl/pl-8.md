---
title: 'PL-8 Security and Privacy Architectures'
description: 'NIST SP 800-53 Rev. 5 control PL-8, Security and Privacy Architectures: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PL-8 Security and Privacy Architectures'
  order: 8
control:
  id: PL-8
  family: PL
  baselines: [Moderate, High, Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High, Privacy | Organization | 2 (0 in a baseline) |

**Related controls:** [CM-2](/controls/cm/cm-2/), [CM-6](/controls/cm/cm-6/), [PL-2](/controls/pl/pl-2/), [PL-7](/controls/pl/pl-7/), [PL-9](/controls/pl/pl-9/), [PM-5](/controls/pm/pm-5/), [PM-7](/controls/pm/pm-7/), [RA-9](/controls/ra/ra-9/), [SA-3](/controls/sa/sa-3/), [SA-5](/controls/sa/sa-5/), [SA-8](/controls/sa/sa-8/), [SA-17](/controls/sa/sa-17/), [SC-7](/controls/sc/sc-7/)

## Control statement

- **a.** Develop security and privacy architectures for the system that:
  - **1.** Describe the requirements and approach to be taken for protecting the confidentiality, integrity, and availability of organizational information;
  - **2.** Describe the requirements and approach to be taken for processing personally identifiable information to minimize privacy risk to individuals;
  - **3.** Describe how the architectures are integrated into and support the enterprise architecture; and
  - **4.** Describe any assumptions about, and dependencies on, external systems and services;
- **b.** Review and update the architectures [Assignment: organization-defined frequency] to reflect changes in the enterprise architecture; and
- **c.** Reflect planned architecture changes in security and privacy plans, Concept of Operations (CONOPS), criticality analysis, organizational procedures, and procurements and acquisitions.

<details>
<summary>NIST discussion</summary>

The security and privacy architectures at the system level are consistent with the organization-wide security and privacy architectures described in PM-7 , which are integral to and developed as part of the enterprise architecture. The architectures include an architectural description, the allocation of security and privacy functionality (including controls), security- and privacy-related information for external interfaces, information being exchanged across the interfaces, and the protection mechanisms associated with each interface. The architectures can also include other information, such as user roles and the access privileges assigned to each role; security and privacy requirements; types of information processed, stored, and transmitted by the system; supply chain risk management requirements; restoration priorities of information and system services; and other protection needs.

SP 800-160-1 provides guidance on the use of security architectures as part of the system development life cycle process. OMB M-19-03 requires the use of the systems security engineering concepts described in SP 800-160-1 for high value assets. Security and privacy architectures are reviewed and updated throughout the system development life cycle, from analysis of alternatives through review of the proposed architecture in the RFP responses to the design reviews before and during implementation (e.g., during preliminary design reviews and critical design reviews).

In today’s modern computing architectures, it is becoming less common for organizations to control all information resources. There may be key dependencies on external information services and service providers. Describing such dependencies in the security and privacy architectures is necessary for developing a comprehensive mission and business protection strategy. Establishing, developing, documenting, and maintaining under configuration control a baseline configuration for organizational systems is critical to implementing and maintaining effective architectures. The development of the architectures is coordinated with the senior agency information security officer and the senior agency official for privacy to ensure that the controls needed to support security and privacy requirements are identified and effectively implemented. In many circumstances, there may be no distinction between the security and privacy architecture for a system. In other circumstances, security objectives may be adequately satisfied, but privacy objectives may only be partially satisfied by the security requirements. In these cases, consideration of the privacy requirements needed to achieve satisfaction will result in a distinct privacy architecture. The documentation, however, may simply reflect the combined architectures.

PL-8 is primarily directed at organizations to ensure that architectures are developed for the system and, moreover, that the architectures are integrated with or tightly coupled to the enterprise architecture. In contrast, SA-17 is primarily directed at the external information technology product and system developers and integrators. SA-17 , which is complementary to PL-8 , is selected when organizations outsource the development of systems or components to external entities and when there is a need to demonstrate consistency with the organization’s enterprise architecture and security and privacy architectures.

</details>

## Control enhancements

<a id="pl-8.1"></a>

### PL-8(1) Defense in Depth

*Baselines: Not in a baseline*

Design the security and privacy architectures for the system using a defense-in-depth approach that:

- **(a)** Allocates [Assignment: organization-defined controls] to [Assignment: organization-defined locations and architectural layers] ; and
- **(b)** Ensures that the allocated controls operate in a coordinated and mutually reinforcing manner.

<details>
<summary>Discussion and assessment objectives for PL-8(1)</summary>

Organizations strategically allocate security and privacy controls in the security and privacy architectures so that adversaries must overcome multiple controls to achieve their objective. Requiring adversaries to defeat multiple controls makes it more difficult to attack information resources by increasing the work factor of the adversary; it also increases the likelihood of detection. The coordination of allocated controls is essential to ensure that an attack that involves one control does not create adverse, unintended consequences by interfering with other controls. Unintended consequences can include system lockout and cascading alarms. The placement of controls in systems and organizations is an important activity that requires thoughtful analysis. The value of organizational assets is an important consideration in providing additional layering. Defense-in-depth architectural approaches include modularity and layering (see SA-8(3) ), separation of system and user functionality (see SC-2 ), and security function isolation (see SC-3).

Determine if:

- **PL-08(01)(a)**
  - **PL-08(01)(a)[01]** the security architecture for the system is designed using a defense-in-depth approach that allocates [Assignment: organization-defined controls] to [Assignment: organization-defined locations and architectural layers];
  - **PL-08(01)(a)[02]** the privacy architecture for the system is designed using a defense-in-depth approach that allocates [Assignment: organization-defined controls] to [Assignment: organization-defined locations and architectural layers];
- **PL-08(01)(b)**
  - **PL-08(01)(b)[01]** the security architecture for the system is designed using a defense-in-depth approach that ensures the allocated controls operate in a coordinated and mutually reinforcing manner;
  - **PL-08(01)(b)[02]** the privacy architecture for the system is designed using a defense-in-depth approach that ensures the allocated controls operate in a coordinated and mutually reinforcing manner.

**Examine:** Security and privacy planning policy; procedures addressing information security and privacy architecture development; enterprise architecture documentation; information security and privacy architecture documentation; system security plan; privacy plan; security and privacy CONOPS for the system; other relevant documents or records.

**Interview:** Organizational personnel with security and privacy planning and plan implementation responsibilities; organizational personnel with information security and privacy architecture development responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for designing the information security and privacy architecture; mechanisms supporting and/or implementing the design of the information security and privacy architecture.

</details>

<a id="pl-8.2"></a>

### PL-8(2) Supplier Diversity

*Baselines: Not in a baseline*

Require that [Assignment: organization-defined controls] allocated to [Assignment: organization-defined locations and architectural layers] are obtained from different suppliers.

<details>
<summary>Discussion and assessment objectives for PL-8(2)</summary>

Information technology products have different strengths and weaknesses. Providing a broad spectrum of products complements the individual offerings. For example, vendors offering malicious code protection typically update their products at different times, often developing solutions for known viruses, Trojans, or worms based on their priorities and development schedules. By deploying different products at different locations, there is an increased likelihood that at least one of the products will detect the malicious code. With respect to privacy, vendors may offer products that track personally identifiable information in systems. Products may use different tracking methods. Using multiple products may result in more assurance that personally identifiable information is inventoried.

Determine if [Assignment: organization-defined controls] that are allocated to [Assignment: organization-defined locations and architectural layers] are required to be obtained from different suppliers.

**Examine:** Security and privacy planning policy; procedures addressing information security and privacy architecture development; enterprise architecture documentation; information security and privacy architecture documentation; system security plan; privacy plan; security and privacy CONOPS for the system; IT acquisitions policy; other relevant documents or records.

**Interview:** Organizational personnel with security and privacy planning and plan implementation responsibilities; organizational personnel with information security and privacy architecture development responsibilities; organizational personnel with acquisition responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for obtaining information security and privacy safeguards from different suppliers.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PL-8</summary>

Determine if:

- **PL-08a.**
  - **PL-08a.01** a security architecture for the system describes the requirements and approach to be taken for protecting the confidentiality, integrity, and availability of organizational information;
  - **PL-08a.02** a privacy architecture describes the requirements and approach to be taken for processing personally identifiable information to minimize privacy risk to individuals;
  - **PL-08a.03**
    - **PL-08a.03[01]** a security architecture for the system describes how the architecture is integrated into and supports the enterprise architecture;
    - **PL-08a.03[02]** a privacy architecture for the system describes how the architecture is integrated into and supports the enterprise architecture;
  - **PL-08a.04**
    - **PL-08a.04[01]** a security architecture for the system describes any assumptions about and dependencies on external systems and services;
    - **PL-08a.04[02]** a privacy architecture for the system describes any assumptions about and dependencies on external systems and services;
- **PL-08b.** changes in the enterprise architecture are reviewed and updated [Assignment: organization-defined frequency] to reflect changes in the enterprise architecture;
- **PL-08c.**
  - **PL-08c.[01]** planned architecture changes are reflected in the security plan;
  - **PL-08c.[02]** planned architecture changes are reflected in the privacy plan;
  - **PL-08c.[03]** planned architecture changes are reflected in the Concept of Operations (CONOPS);
  - **PL-08c.[04]** planned architecture changes are reflected in criticality analysis;
  - **PL-08c.[05]** planned architecture changes are reflected in organizational procedures;
  - **PL-08c.[06]** planned architecture changes are reflected in procurements and acquisitions.

**Examine:** Security and privacy planning policy; procedures addressing information security and privacy architecture development; procedures addressing information security and privacy architecture reviews and updates; enterprise architecture documentation; information security and privacy architecture documentation; system security plan; privacy plan; security and privacy CONOPS for the system; records of information security and privacy architecture reviews and updates; other relevant documents or records.

**Interview:** Organizational personnel with security and privacy planning and plan implementation responsibilities; organizational personnel with information security and privacy architecture development responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for developing, reviewing, and updating the information security and privacy architecture; mechanisms supporting and/or implementing the development, review, and update of the information security and privacy architecture.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PL-8 asks for security and privacy architectures for the system that describe four things: how it protects information, how it processes personally identifiable information to limit privacy risk, how it fits the enterprise architecture, and what it assumes about and depends on outside. You review them on a schedule, and carry planned architecture changes into the plans, the concept of operations, the criticality analysis, procedures and acquisitions.

**Common implementations.** NIST's PL-8 discussion lists what an architecture contains:

- An architectural description
- Where security and privacy functions and controls are allocated
- The external interfaces, the information exchanged across each, and how each is protected
- Optionally, user roles and their privileges, the types of information handled, supply chain risk management requirements and restoration priorities

Most systems keep the architecture as a section of the [system security plan](/templates/plans/system-security-plan/) or an attachment it references, with the boundary, network and data flow diagrams from section 7. NIST's discussion says the security and privacy architectures may be one document when the privacy objectives need nothing beyond the security requirements. Record the security design principles applied to the system there too (SA-8).

Place the system in the enterprise architecture, as [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) task P-16 describes, and stay consistent with the organization-wide architecture (PM-7). For dependencies, name each external service the system relies on, such as the cloud platform, the identity provider or a managed security service, and state what you assume it provides. NIST's discussion points to [SP 800-160 Vol. 1 Rev. 1](https://csrc.nist.gov/pubs/sp/800/160/v1/r1/final) (November 2022) for using architectures in the life cycle, and to SA-17 when an outside developer builds the system.

**Organization-defined parameters.** Typical value, from the [Planning policy](/templates/policies/pl/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Review and update frequency (b) | Annually, and whenever the enterprise architecture changes |

Also review the architecture with each significant change to the system, since PL-8c asks you to carry planned architecture changes into the plans, the criticality analysis (RA-9) and acquisitions before they happen.

**Evidence assessors ask for.**

- The architecture description, with its version, date and owner, covering each of a.1 to a.4
- Diagrams that match the authorization boundary and the component inventory
- The list of external services the system depends on, with the assumptions made about each
- The record of the last review
- For a recent architecture change, evidence that the security plan, the criticality analysis and the related acquisition were updated

**Inheritance.** The enterprise architecture and the organization's security and privacy architecture are common inputs (PM-7), and shared services document their own architectures. The system's architecture is system-specific. A cloud provider's documentation describes the parts of the stack it runs; your architecture states which of its services you use and what you rely on them for.

**Common findings.**

- Diagrams with no description of the protection approach or where controls are allocated.
- No privacy architecture, or no statement that the security architecture also covers privacy.
- External dependencies, such as software as a service or a shared identity provider, missing, or listed with no assumptions.
- An architecture not updated after a migration to the cloud or a new interconnection.
- No link to the enterprise architecture.

**Enhancements in the Moderate baseline.** None. [PL-8(1)](#pl-8.1) defense in depth and [PL-8(2)](#pl-8.2) supplier diversity are in no baseline. PL-8 is in the Moderate, High and Privacy baselines, not in Low.
