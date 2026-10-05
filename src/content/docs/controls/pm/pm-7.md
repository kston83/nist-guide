---
title: 'PM-7 Enterprise Architecture'
description: 'NIST SP 800-53 Rev. 5 control PM-7, Enterprise Architecture: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PM-7 Enterprise Architecture'
  order: 7
control:
  id: PM-7
  family: PM
  baselines: [Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Privacy | Organization | 1 (0 in a baseline) |

**Related controls:** [AU-6](/controls/au/au-6/), [PL-2](/controls/pl/pl-2/), [PL-8](/controls/pl/pl-8/), [PM-11](/controls/pm/pm-11/), [RA-2](/controls/ra/ra-2/), [SA-3](/controls/sa/sa-3/), [SA-8](/controls/sa/sa-8/), [SA-17](/controls/sa/sa-17/)

## Control statement

Develop and maintain an enterprise architecture with consideration for information security, privacy, and the resulting risk to organizational operations and assets, individuals, other organizations, and the Nation.

<details>
<summary>NIST discussion</summary>

The integration of security and privacy requirements and controls into the enterprise architecture helps to ensure that security and privacy considerations are addressed throughout the system development life cycle and are explicitly related to the organization’s mission and business processes. The process of security and privacy requirements integration also embeds into the enterprise architecture and the organization’s security and privacy architectures consistent with the organizational risk management strategy. For PM-7, security and privacy architectures are developed at a system-of-systems level, representing all organizational systems. For PL-8 , the security and privacy architectures are developed at a level that represents an individual system. The system-level architectures are consistent with the security and privacy architectures defined for the organization. Security and privacy requirements and control integration are most effectively accomplished through the rigorous application of the Risk Management Framework SP 800-37 and supporting security standards and guidelines.

</details>

## Control enhancements

<a id="pm-7.1"></a>

### PM-7(1) Offloading

*Baselines: Not in a baseline*

Offload [Assignment: organization-defined non-essential functions or services] to other systems, system components, or an external provider.

<details>
<summary>Discussion and assessment objectives for PM-7(1)</summary>

Not every function or service that a system provides is essential to organizational mission or business functions. Printing or copying is an example of a non-essential but supporting service for an organization. Whenever feasible, such supportive but non-essential functions or services are not co-located with the functions or services that support essential mission or business functions. Maintaining such functions on the same system or system component increases the attack surface of the organization’s mission-essential functions or services. Moving supportive but non-essential functions to a non-critical system, system component, or external provider can also increase efficiency by putting those functions or services under the control of individuals or providers who are subject matter experts in the functions or services.

Determine if [Assignment: organization-defined non-essential functions or services] are offloaded to other systems, system components, or an external provider.

**Examine:** Information security program plan; privacy program plan; enterprise architecture documentation; procedures addressing enterprise architecture development; procedures for identifying and offloading functions or services; results of risk assessments of enterprise architecture; other relevant documents or records.

**Interview:** Organizational personnel with information security and privacy program planning and plan implementation responsibilities; organizational personnel responsible for developing enterprise architecture; organizational personnel responsible for risk assessments of enterprise architecture; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for enterprise architecture development; mechanisms supporting the enterprise architecture and its development; mechanisms for offloading functions and services.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PM-7</summary>

Determine if:

- **PM-07[01]** an enterprise architecture is developed with consideration for information security;
- **PM-07[02]** an enterprise architecture is maintained with consideration for information security;
- **PM-07[03]** an enterprise architecture is developed with consideration for privacy;
- **PM-07[04]** an enterprise architecture is maintained with consideration for privacy;
- **PM-07[05]** an enterprise architecture is developed with consideration for the resulting risk to organizational operations and assets, individuals, other organizations, and the Nation;
- **PM-07[06]** an enterprise architecture is maintained with consideration for the resulting risk to organizational operations and assets, individuals, other organizations, and the Nation.

**Examine:** Information security program plan; privacy program plan; enterprise architecture documentation; procedures addressing enterprise architecture development; results of risk assessments of enterprise architecture; other relevant documents or records.

**Interview:** Organizational personnel with information security and privacy program planning and plan implementation responsibilities; organizational personnel responsible for developing enterprise architecture; organizational personnel responsible for risk assessments of enterprise architecture; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for enterprise architecture development; mechanisms supporting the enterprise architecture and its development.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PM-7 asks for an enterprise architecture that considers security, privacy and the resulting risk to the organization, individuals, other organizations and the Nation. NIST's PM-7 discussion says the security and privacy architectures for PM-7 cover all the organization's systems as a system of systems. Each system's own architecture is [PL-8](/controls/pl/pl-8/), and it stays consistent with the organization's.

The discussion says this integration works best through the Risk Management Framework. [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) task P-16 places each system in the enterprise architecture and updates the security and privacy architectures to match. PM-7 is in the SP 800-53B Privacy baseline.

**Common implementations.** An enterprise architecture team, often under the Chief Information Officer, owns the architecture, and the security team keeps the security architecture as part of it. That part usually holds reference architectures and approved patterns, for identity, network segmentation, logging and encryption. It also holds the standard services systems inherit as common controls, and an architecture review board where security and privacy review new systems and major changes. A small organization can meet PM-7 with a set of current diagrams, an approved technology list and a review step for new systems.

The [Program Management policy](/templates/policies/pm/) has the Chief Information Security Officer ensure security and privacy are considered in the architecture, and the senior privacy official review changes that affect the processing of personally identifiable information.

**Organization-defined parameters.** PM-7 has none; PM-7(1) has one. From `templates/policy/pm/`. Typical value, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Non-essential functions or services to offload (PM-7(1)) | Non-essential services, such as email, file sharing and public web hosting, on systems that support mission-essential functions |

**Evidence assessors ask for.**

- The enterprise architecture, with its security and privacy architecture content, version and owner
- Reference architectures or approved patterns, and the exceptions granted to them
- Architecture review board charter and minutes showing security and privacy reviews
- The senior privacy official's reviews of changes that affect personally identifiable information
- For PM-7(1), the list of functions offloaded from mission-essential systems, and where each now runs

**Inheritance.** PM-7 is implemented once, for the whole organization, and every system relies on it. Each system places itself in the architecture and documents its own architecture under PL-8.

**Common findings.**

- An enterprise architecture with no security or privacy content.
- A security architecture that has not been updated as the organization moved to cloud services.
- Systems built outside the approved patterns with no recorded exception.
- System architectures under PL-8 that contradict the organization's architecture.
- No privacy review of architecture changes.

**Enhancements.** PM has no security baseline, and PM-7(1) is in no baseline, but the PM policy includes its clause, so it applies. [PM-7(1)](#pm-7.1) offloading moves non-essential functions or services to other systems, components or an external provider. NIST's discussion gives printing and copying as examples of supporting but non-essential services. Keeping them on the same system as mission-essential functions widens the attack surface of those functions.

The PM-7(1) clause has each system owner offload the typical services above. In practice that means moving email, file sharing and public web hosting off mission-essential systems to a separate enclave or an external service, and recording it in the system security plan.

**Federal systems** (as of October 2026). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), main body section 5.a(2), requires agencies to "develop an enterprise architecture (EA) that describes the baseline architecture, target architecture, and a transition plan to get to the target architecture," aligned to the agency's information resources management strategic plan. Appendix I, section 4.b(5), has agencies incorporate federal security and privacy requirements into the enterprise architecture "to ensure that risk is addressed and information systems achieve the necessary levels of trustworthiness, protection, and resilience." Appendix II lists the same requirement among the privacy program's responsibilities.
