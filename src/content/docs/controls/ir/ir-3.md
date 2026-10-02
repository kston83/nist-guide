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
guidance: draft
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

## How to apply it

IR-3 asks you to test how well the incident response capability works, at a set frequency and with tests you name. NIST's IR-3 discussion lists checklists, walk-through or tabletop exercises, and simulations, and says qualitative and quantitative data help show whether the processes work. IR-3 is in the Moderate, High and Privacy baselines, not in Low.

[NIST SP 800-84](https://csrc.nist.gov/pubs/sp/800/84/final), Guide to Test, Training, and Exercise Programs for IT Plans and Capabilities (September 2006; current as of October 2026), describes the two kinds of exercise most programs use. A tabletop exercise is discussion-based: a facilitator presents a scenario and asks questions about roles, coordination and decisions. A functional exercise has personnel perform their duties in a simulated environment, for example communications or emergency notifications. [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final) (April 2025; current as of October 2026) treats exercises as a source of improvements (CSF subcategory ID.IM-02, including exercises done with suppliers and other third parties) and points to SP 800-84 for how to run them.

**Common implementations.** Each year, a tabletop exercise built on a scenario the organization is likely to face, such as ransomware, a compromised administrator account or a cloud service outage caused by an attack. A functional test of notification and escalation checks the path from report to declaration: a test report goes in through the normal channel, and the team times each call, page and message against the plan. Results are written up in an after-action report, and each action goes to an owner with a due date.

SP 800-84 (section 4.2.2) has senior-level and operational teams exercise separately at first, then together to check coordination between them. Section 4.5 puts the debrief comments and lessons learned in an after-action report, with recommendations for updating the plan. A tabletop exercise kit is planned for this kit; until it is published, the [contingency plan test plan](/templates/plans/contingency-plan-test-plan/) and [after-action report](/templates/reports/contingency-plan-after-action-report/) follow the same SP 800-84 structure and work for an incident scenario.

**Organization-defined parameters.** Typical values, from the [Incident Response policy](/templates/policies/ir/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Test frequency | Annually |
| Tests used | A tabletop exercise based on a realistic scenario, and a functional test of notification and escalation |

IR-3(2) has no parameters. In the policy, the incident response team runs the tests. The annual frequency matches the contingency plan test in the Contingency Planning policy (CP-4), which makes a joint exercise easy to schedule.

**Evidence assessors ask for.**

- The test plan or exercise materials for the last test: scenario, objectives, participants and injects
- The after-action report, with what worked, what did not, and the recommended changes
- The action items from the report, tracked to closure, and the plan, playbook or training changes they produced
- Records showing the test met the stated frequency
- For IR-3(2), evidence that the owners of related plans took part or reviewed the scenario, such as attendance lists or a joint after-action report

**Inheritance.** Testing is usually a common control, run by the incident response team for the organization's capability as a whole. The system owner makes sure the system's own playbook steps and contacts are exercised from time to time, for example by choosing the system for a scenario. Record the split in the [system security plan](/templates/plans/system-security-plan/).

**Common findings.**

- A tabletop exercise held, but no after-action report or no action taken on its findings.
- The same scenario every year, or one that never reaches a decision about notifying outside parties.
- Contact lists and escalation paths never tested, so the first real incident finds wrong phone numbers.
- Incident response tests and contingency plan tests run by different teams that never involve each other.

**Enhancements in the Moderate baseline.** [IR-3(2)](#ir-3.2) coordination with related plans: coordinate incident response testing with the people responsible for related plans. NIST's discussion lists business continuity, disaster recovery, continuity of operations, contingency, crisis communications, critical infrastructure and occupant emergency plans. The policy names contingency, continuity and crisis communications plans as examples. SP 800-61 Rev. 3 recommends synchronizing business continuity plans with incident response plans (ID.IM-04). A practical way to meet IR-3(2) is to run the incident response tabletop and the contingency plan test ([CP-4](/controls/cp/cp-4/)) as one exercise, with a scenario that moves from containment into recovery under the [contingency plan](/templates/plans/contingency-plan/).

High adds nothing beyond IR-3(2). [IR-3(1)](#ir-3.1) automated testing and [IR-3(3)](#ir-3.3) continuous improvement are in no baseline.
