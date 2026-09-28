---
title: 'IR-3 Incident Response Testing'
description: 'NIST SP 800-53 Rev. 5 control IR-3, Incident Response Testing: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'IR-3 Incident Response Testing'
  order: 3
control:
  id: IR-3
  family: IR
  baselines: [Moderate, High, Privacy]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High, Privacy | Organization | 3 (1 in a baseline) |

**Related controls:** [CP-3](/controls/cp/cp-3/), [CP-4](/controls/cp/cp-4/), [IR-2](/controls/ir/ir-2/), [IR-4](/controls/ir/ir-4/), [IR-8](/controls/ir/ir-8/), [PM-14](/controls/pm/pm-14/)

## Control statement

Test the effectiveness of the incident response capability for the system [Assignment: organization-defined frequency] using the following tests: [Assignment: organization-defined tests].

<details>
<summary>NIST discussion</summary>

Organizations test incident response capabilities to determine their effectiveness and identify potential weaknesses or deficiencies. Incident response testing includes the use of checklists, walk-through or tabletop exercises, and simulations (parallel or full interrupt). Incident response testing can include a determination of the effects on organizational operations and assets and individuals due to incident response. The use of qualitative and quantitative data aids in determining the effectiveness of incident response processes.

</details>

## Control enhancements

<a id="ir-3.1"></a>

### IR-3(1) Automated Testing

*Baselines: Not in a baseline*

Test the incident response capability using [Assignment: organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for IR-3(1)</summary>

Organizations use automated mechanisms to more thoroughly and effectively test incident response capabilities. This can be accomplished by providing more complete coverage of incident response issues, selecting realistic test scenarios and environments, and stressing the response capability.

Determine if the incident response capability is tested using [Assignment: organization-defined automated mechanisms].

**Examine:** Incident response policy; contingency planning policy; procedures addressing incident response testing; procedures addressing contingency plan testing; incident response testing documentation; incident response test results; incident response test plan; incident response plan; contingency plan; system security plan; automated mechanisms supporting incident response tests; other relevant documents or records.

**Interview:** Organizational personnel with incident response testing responsibilities; organizational personnel with information security responsibilities.

**Test:** Automated mechanisms that more thoroughly and effectively test the incident response capability.

</details>

<a id="ir-3.2"></a>

### IR-3(2) Coordination with Related Plans

*Baselines: Moderate, High*

Coordinate incident response testing with organizational elements responsible for related plans.

<details>
<summary>Discussion and assessment objectives for IR-3(2)</summary>

Organizational plans related to incident response testing include business continuity plans, disaster recovery plans, continuity of operations plans, contingency plans, crisis communications plans, critical infrastructure plans, and occupant emergency plans.

Determine if incident response testing is coordinated with organizational elements responsible for related plans.

**Examine:** Incident response policy; contingency planning policy; procedures addressing incident response testing; incident response testing documentation; incident response plan; business continuity plans; contingency plans; disaster recovery plans; continuity of operations plans; crisis communications plans; critical infrastructure plans; occupant emergency plans; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with incident response testing responsibilities; organizational personnel with responsibilities for testing organizational plans related to incident response testing; organizational personnel with information security and privacy responsibilities.

</details>

<a id="ir-3.3"></a>

### IR-3(3) Continuous Improvement

*Baselines: Not in a baseline*

Use qualitative and quantitative data from testing to:

- **(a)** Determine the effectiveness of incident response processes;
- **(b)** Continuously improve incident response processes; and
- **(c)** Provide incident response measures and metrics that are accurate, consistent, and in a reproducible format.

<details>
<summary>Discussion and assessment objectives for IR-3(3)</summary>

To help incident response activities function as intended, organizations may use metrics and evaluation criteria to assess incident response programs as part of an effort to continually improve response performance. These efforts facilitate improvement in incident response efficacy and lessen the impact of incidents.

Determine if:

- **IR-03(03)(a)**
  - **IR-03(03)(a)[01]** qualitative data from testing are used to determine the effectiveness of incident response processes;
  - **IR-03(03)(a)[02]** quantitative data from testing are used to determine the effectiveness of incident response processes;
- **IR-03(03)(b)**
  - **IR-03(03)(b)[01]** qualitative data from testing are used to continuously improve incident response processes;
  - **IR-03(03)(b)[02]** quantitative data from testing are used to continuously improve incident response processes;
- **IR-03(03)(c)**
  - **IR-03(03)(c)[01]** qualitative data from testing are used to provide incident response measures and metrics that are accurate;
  - **IR-03(03)(c)[02]** quantitative data from testing are used to provide incident response measures and metrics that are accurate;
  - **IR-03(03)(c)[03]** qualitative data from testing are used to provide incident response measures and metrics that are consistent;
  - **IR-03(03)(c)[04]** quantitative data from testing are used to provide incident response measures and metrics that are consistent;
  - **IR-03(03)(c)[05]** qualitative data from testing are used to provide incident response measures and metrics in a reproducible format;
  - **IR-03(03)(c)[06]** quantitative data from testing are used to provide incident response measures and metrics in a reproducible format.

**Examine:** Incident response policy; contingency planning policy; procedures addressing incident response testing; incident response testing documentation; incident response plan; business continuity plans; contingency plans; disaster recovery plans; continuity of operations plans; crisis communications plans; critical infrastructure plans; occupant emergency plans; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with incident response testing responsibilities; organizational personnel with responsibilities for testing organizational plans related to incident response testing; organizational personnel with information security and privacy responsibilities.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for IR-3</summary>

Determine if the effectiveness of the incident response capability for the system is tested [Assignment: organization-defined frequency] using [Assignment: organization-defined tests].

**Examine:** Incident response policy; contingency planning policy; procedures addressing incident response testing; procedures addressing contingency plan testing; incident response testing material; incident response test results; incident response test plan; incident response plan; contingency plan; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with incident response testing responsibilities; organizational personnel with information security and privacy responsibilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
