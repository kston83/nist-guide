---
title: 'CP-4 Contingency Plan Testing'
description: 'NIST SP 800-53 Rev. 5 control CP-4, Contingency Plan Testing: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CP-4 Contingency Plan Testing'
  order: 4
control:
  id: CP-4
  family: CP
  baselines: [Low, Moderate, High]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 5 (2 in a baseline) |

**Related controls:** [AT-3](/controls/at/at-3/), [CP-2](/controls/cp/cp-2/), [CP-3](/controls/cp/cp-3/), [CP-8](/controls/cp/cp-8/), [CP-9](/controls/cp/cp-9/), [IR-3](/controls/ir/ir-3/), [IR-4](/controls/ir/ir-4/), [PL-2](/controls/pl/pl-2/), [PM-14](/controls/pm/pm-14/), [SR-2](/controls/sr/sr-2/)

## Control statement

- **a.** Test the contingency plan for the system [Assignment: organization-defined frequency] using the following tests to determine the effectiveness of the plan and the readiness to execute the plan: [Assignment: organization-defined tests].
- **b.** Review the contingency plan test results; and
- **c.** Initiate corrective actions, if needed.

<details>
<summary>NIST discussion</summary>

Methods for testing contingency plans to determine the effectiveness of the plans and identify potential weaknesses include checklists, walk-through and tabletop exercises, simulations (parallel or full interrupt), and comprehensive exercises. Organizations conduct testing based on the requirements in contingency plans and include a determination of the effects on organizational operations, assets, and individuals due to contingency operations. Organizations have flexibility and discretion in the breadth, depth, and timelines of corrective actions.

</details>

## Control enhancements

<a id="cp-4.1"></a>

### CP-4(1) Coordinate with Related Plans

*Baselines: Moderate, High*

Coordinate contingency plan testing with organizational elements responsible for related plans.

<details>
<summary>Discussion and assessment objectives for CP-4(1)</summary>

Plans related to contingency planning for organizational systems include Business Continuity Plans, Disaster Recovery Plans, Continuity of Operations Plans, Crisis Communications Plans, Critical Infrastructure Plans, Cyber Incident Response Plans, and Occupant Emergency Plans. Coordination of contingency plan testing does not require organizations to create organizational elements to handle related plans or to align such elements with specific plans. However, it does require that if such organizational elements are responsible for related plans, organizations coordinate with those elements.

Determine if contingency plan testing is coordinated with organizational elements responsible for related plans.

**Examine:** Contingency planning policy; incident response policy; procedures addressing contingency plan testing; contingency plan testing documentation; contingency plan; business continuity plans; disaster recovery plans; continuity of operations plans; crisis communications plans; critical infrastructure plans; cyber incident response plans; occupant emergency plans; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency plan testing responsibilities; personnel with responsibilities for related plans; organizational personnel with information security responsibilities.

</details>

<a id="cp-4.2"></a>

### CP-4(2) Alternate Processing Site

*Baselines: High*

Test the contingency plan at the alternate processing site:

- **(a)** To familiarize contingency personnel with the facility and available resources; and
- **(b)** To evaluate the capabilities of the alternate processing site to support contingency operations.

<details>
<summary>Discussion and assessment objectives for CP-4(2)</summary>

Conditions at the alternate processing site may be significantly different than the conditions at the primary site. Having the opportunity to visit the alternate site and experience the actual capabilities available at the site can provide valuable information on potential vulnerabilities that could affect essential organizational mission and business functions. The on-site visit can also provide an opportunity to refine the contingency plan to address the vulnerabilities discovered during testing.

Determine if:

- **CP-04(02)(a)** the contingency plan is tested at the alternate processing site to familiarize contingency personnel with the facility and available resources;
- **CP-04(02)(b)** the contingency plan is tested at the alternate processing site to evaluate the capabilities of the alternate processing site to support contingency operations.

**Examine:** Contingency planning policy; procedures addressing contingency plan testing; contingency plan; contingency plan test documentation; contingency plan test results; alternate processing site agreements; service-level agreements; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency planning and plan implementation responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for contingency plan testing; mechanisms supporting the contingency plan and/or contingency plan testing.

</details>

<a id="cp-4.3"></a>

### CP-4(3) Automated Testing

*Baselines: Not in a baseline*

Test the contingency plan using [Assignment: organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for CP-4(3)</summary>

Automated mechanisms facilitate thorough and effective testing of contingency plans by providing more complete coverage of contingency issues, selecting more realistic test scenarios and environments, and effectively stressing the system and supported mission and business functions.

Determine if the contingency plan is tested using [Assignment: organization-defined automated mechanisms].

**Examine:** Contingency planning policy; procedures addressing contingency plan testing; contingency plan; automated mechanisms supporting contingency plan testing; contingency plan test documentation; contingency plan test results; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency plan testing responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for contingency plan testing; automated mechanisms supporting contingency plan testing.

</details>

<a id="cp-4.4"></a>

### CP-4(4) Full Recovery and Reconstitution

*Baselines: Not in a baseline*

Include a full recovery and reconstitution of the system to a known state as part of contingency plan testing.

<details>
<summary>Discussion and assessment objectives for CP-4(4)</summary>

Recovery is executing contingency plan activities to restore organizational mission and business functions. Reconstitution takes place following recovery and includes activities for returning systems to fully operational states. Organizations establish a known state for systems that includes system state information for hardware, software programs, and data. Preserving system state information facilitates system restart and return to the operational mode of organizations with less disruption of mission and business processes.

Determine if:

- **CP-04(04)[01]** a full recovery of the system to a known state is included as part of contingency plan testing;
- **CP-04(04)[02]** a full reconstitution of the system to a known state is included as part of contingency plan testing.

**Examine:** Contingency planning policy; procedures addressing system recovery and reconstitution; contingency plan; contingency plan test documentation; contingency plan test results; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency plan testing responsibilities; organizational personnel with system recovery and reconstitution responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for contingency plan testing; mechanisms supporting contingency plan testing; mechanisms supporting recovery and reconstitution of the system.

</details>

<a id="cp-4.5"></a>

### CP-4(5) Self-challenge

*Baselines: Not in a baseline*

Employ [Assignment: organization-defined mechanisms] to [Assignment: organization-defined system or system component] to disrupt and adversely affect the system or system component.

<details>
<summary>Discussion and assessment objectives for CP-4(5)</summary>

Often, the best method of assessing system resilience is to disrupt the system in some manner. The mechanisms used by the organization could disrupt system functions or system services in many ways, including terminating or disabling critical system components, changing the configuration of system components, degrading critical functionality (e.g., restricting network bandwidth), or altering privileges. Automated, on-going, and simulated cyber-attacks and service disruptions can reveal unexpected functional dependencies and help the organization determine its ability to ensure resilience in the face of an actual cyber-attack.

Determine if [Assignment: organization-defined mechanisms] are employed to disrupt and adversely affect the [Assignment: organization-defined system or system component].

**Examine:** Contingency planning policy; procedures addressing system recovery and reconstitution; contingency plan; contingency plan test documentation; contingency plan test results; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency plan testing responsibilities; organizational personnel with system recovery and reconstitution responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for contingency plan testing; mechanisms supporting contingency plan testing.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CP-4</summary>

Determine if:

- **CP-04a.**
  - **CP-04a.[01]** the contingency plan for the system is tested [Assignment: organization-defined frequency];
  - **CP-04a.[02]** [Assignment: organization-defined tests] are used to determine the effectiveness of the plan;
  - **CP-04a.[03]** [Assignment: organization-defined tests] are used to determine the readiness to execute the plan;
- **CP-04b.** the contingency plan test results are reviewed;
- **CP-04c.** corrective actions are initiated, if needed.

**Examine:** Contingency planning policy; procedures addressing contingency plan testing; contingency plan; contingency plan test documentation; contingency plan test results; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for contingency plan testing, reviewing, or responding to contingency plan tests; organizational personnel with information security responsibilities.

**Test:** Organizational processes for contingency plan testing; mechanisms supporting the contingency plan and/or contingency plan testing.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
