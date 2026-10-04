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
guidance: draft
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

## How to apply it

RA-9 asks you to find the system's critical components and functions through a criticality analysis, for the systems you choose and at set points in the life cycle. NIST's RA-9 discussion explains why: not every component needs the same protection. The analysis tells you where to spend supply chain protections, redundancy and engineering effort.

**Common implementations.** NIST's discussion describes a functional decomposition. Start from the missions the system supports, break them into the functions that carry them out, and trace each function to the hardware, software, firmware and services that implement it. A component is critical when its failure or compromise would stop a mission function. So is any component with unmediated access to a critical one, such as a management console or an administrator workstation. Include the system's dependencies on outside services, such as the cloud platform, the identity provider and outsourced IT services.

[NIST IR 8179](https://csrc.nist.gov/pubs/ir/8179/final), Criticality Analysis Process Model (April 2018), gives a structured method in five processes:

1. Define the criticality analysis procedure (A).
2. Analyze at the program level (B).
3. Analyze at the system and subsystem level (C).
4. Analyze at the component level (D).
5. Review the results across levels (E).

It works top-down from critical processes to critical systems and components. It notes that the component level is often done partly by a third party, for example the supplier of a commercial product.

Most systems record the results as a short report or a table in the security plan: each critical function, the components and services that implement it, and why each is critical. The results feed several other records:

- The critical components list in section 5.3 of the [Supply Chain Risk Management Plan](/templates/plans/supply-chain-risk-management-plan/) (SR-2), and the supply chain risk assessment (RA-3(1))
- The extra acquisition review for critical components (SR-5), and the criticality question in the [supplier assessment questionnaire](/templates/forms/supplier-assessment-questionnaire/)
- The critical assets in the contingency plan (CP-2(8))
- The security architecture (PL-8)

Ask developers for their own criticality analysis (SA-15(3)) where you cannot see inside a product.

**Organization-defined parameters.** Typical values, from the [Risk Assessment policy](/templates/policies/ra/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Systems, components or services analyzed | Each Moderate and High system, and the components and services that support its critical functions |
| Life cycle decision points | During design, before acquiring major components or services, and when the architecture changes significantly |

NIST's discussion supports these points: the analysis is done when an architecture or design is developed, modified or upgraded. Done early, it lets you design out some criticality, for example by adding redundancy or alternate paths.

**Evidence assessors ask for.**

- The criticality analysis, dated, listing critical functions, the components and services that implement them, and the rationale
- Evidence it was done at the decision points the policy names, such as a design review record or an acquisition file
- The supply chain risk management plan's critical components list, matching the analysis
- The component inventory, with critical components identified
- Evidence the analysis was updated after the last significant architecture change

**Inheritance.** The organization may provide the method (for example IR 8179) and an enterprise list of critical systems and high value assets. The analysis of a system's own functions and components is system-specific. A cloud provider's documentation describes the criticality of the services it runs for you, but you still decide which of them your mission functions depend on.

**Common findings.**

- No criticality analysis, or the security categorization offered in its place. Categorization rates information impact (RA-2); criticality analysis rates components and functions.
- Everything marked critical, so nothing is prioritized.
- Outside services and dependencies left out of the analysis.
- An analysis done once at design and never updated after the architecture changed.
- Critical components identified but given no extra supply chain or engineering protection.

**Enhancements in the Moderate baseline.** RA-9 has no enhancements. It is in the Moderate and High baselines only.
