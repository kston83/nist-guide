---
title: 'RA-9 Criticality Analysis'
description: 'NIST SP 800-53 Rev. 5 control RA-9, Criticality Analysis: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'RA-9 Criticality Analysis'
  order: 9
control:
  id: RA-9
  family: RA
  baselines: [Moderate, High]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | Organization | None |

**Related controls:** [CP-2](/controls/cp/cp-2/), [PL-2](/controls/pl/pl-2/), [PL-8](/controls/pl/pl-8/), [PL-11](/controls/pl/pl-11/), [PM-1](/controls/pm/pm-1/), [PM-11](/controls/pm/pm-11/), [RA-2](/controls/ra/ra-2/), [SA-8](/controls/sa/sa-8/), [SA-15](/controls/sa/sa-15/), [SA-20](/controls/sa/sa-20/), [SR-5](/controls/sr/sr-5/)

## Control statement

Identify critical system components and functions by performing a criticality analysis for [Assignment: organization-defined systems, system components, or system services] at [Assignment: organization-defined decision points in the system development life cycle].

<details>
<summary>NIST discussion</summary>

Not all system components, functions, or services necessarily require significant protections. For example, criticality analysis is a key tenet of supply chain risk management and informs the prioritization of protection activities. The identification of critical system components and functions considers applicable laws, executive orders, regulations, directives, policies, standards, system functionality requirements, system and component interfaces, and system and component dependencies. Systems engineers conduct a functional decomposition of a system to identify mission-critical functions and components. The functional decomposition includes the identification of organizational missions supported by the system, decomposition into the specific functions to perform those missions, and traceability to the hardware, software, and firmware components that implement those functions, including when the functions are shared by many components within and external to the system.

The operational environment of a system or a system component may impact the criticality, including the connections to and dependencies on cyber-physical systems, devices, system-of-systems, and outsourced IT services. System components that allow unmediated access to critical system components or functions are considered critical due to the inherent vulnerabilities that such components create. Component and function criticality are assessed in terms of the impact of a component or function failure on the organizational missions that are supported by the system that contains the components and functions.

Criticality analysis is performed when an architecture or design is being developed, modified, or upgraded. If such analysis is performed early in the system development life cycle, organizations may be able to modify the system design to reduce the critical nature of these components and functions, such as by adding redundancy or alternate paths into the system design. Criticality analysis can also influence the protection measures required by development contractors. In addition to criticality analysis for systems, system components, and system services, criticality analysis of information is an important consideration. Such analysis is conducted as part of security categorization in RA-2.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for RA-9</summary>

Determine if critical system components and functions are identified by performing a criticality analysis for [Assignment: organization-defined systems, system components, or system services] at [Assignment: organization-defined decision points in the system development life cycle].

**Examine:** Risk assessment policy; assessment reports; criticality analysis/finalized criticality for each component/subcomponent; audit records/event logs; analysis reports; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with assessment and auditing responsibilities; organizational personnel with criticality analysis responsibilities; system/network administrators; organizational personnel with security responsibilities.

**Test:** Organizational processes for assessments and audits; mechanisms/tools supporting and/or implementing assessments and auditing.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
