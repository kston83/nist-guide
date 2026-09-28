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
