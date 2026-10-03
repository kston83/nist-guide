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
guidance: draft
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

## How to apply it

CP-4 asks you to test the contingency plan at a set frequency, with tests you name, to find out whether the plan works and whether people are ready to carry it out. You then review the results and start corrective actions where needed. NIST's CP-4 discussion lists checklists, walk-through and tabletop exercises, simulations (parallel or full interrupt) and comprehensive exercises. It also asks you to determine the effects of contingency operations on the organization, its assets and individuals. CP-4 is in the Low, Moderate and High baselines.

[NIST SP 800-34 Rev. 1](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final) (May 2010, updated November 11, 2010; current as of October 2026) scales the test to the system's availability impact level (section 3.5.4):

| Impact level | What SP 800-34 says the test should be |
| --- | --- |
| Low | A tabletop exercise that simulates a disruption and includes all the plan's main points of contact |
| Moderate | A functional exercise that includes all the plan's points of contact and an element of system recovery from backup media |
| High | A full-scale functional exercise that includes failover to the alternate location and a full recovery and reconstitution to a known state |

Section 3.5.1 lists what a test should address, as applicable: notification procedures, system recovery on an alternate platform from backup media, internal and external connectivity, system performance on alternate equipment, restoration of normal operations, and coordination with other plans. It asks for a test plan with objectives, success criteria, scope, scenario, logistics, a schedule and participants, and a scenario that mimics reality. Section 3.5 says the results of each event go in an after-action report, and the lessons learned update the plan.

[NIST SP 800-84](https://csrc.nist.gov/pubs/sp/800/84/final), Guide to Test, Training, and Exercise Programs for IT Plans and Capabilities (September 2006; current as of October 2026), describes how to run both kinds of exercise. A tabletop exercise is discussion-based: a facilitator presents a scenario and asks questions about roles, coordination and decisions. A functional exercise has personnel perform their duties in a simulated environment. Section 4.5 puts the debrief comments and lessons learned in an after-action report, with recommendations for updating the plan.

**Common implementations.** Plan each test with the [contingency plan test plan](/templates/plans/contingency-plan-test-plan/), which follows SP 800-84: scope and safeguards, objectives with measures, participants, scenario and injects, and evaluation. Record the results in the [contingency plan after-action report](/templates/reports/contingency-plan-after-action-report/), with each finding given an owner, a due date and a tracking reference. For a Moderate system, the test restores the system, or a representative part of it, from backup and times it against the recovery time and recovery point objectives in the [contingency plan](/templates/plans/contingency-plan/). The tabletop part walks the contingency team through activation, notification and the decision to fail over.

**Organization-defined parameters.** Typical values, from the [Contingency Planning policy](/templates/policies/cp/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Test frequency (a) | Annually |
| Tests that determine the plan's effectiveness (a) | A functional test that restores the system, or a representative part of it, from backup |
| Tests that determine readiness to execute the plan (a) | A tabletop exercise that walks the contingency team through the plan |

In the policy, the system owner tests the plan, reviews the results and tracks corrective actions in the [plan of action and milestones](/templates/forms/plan-of-action-and-milestones/). The [CP decision worksheet](/templates/worksheets/cp/) sets the test by baseline, as SP 800-34 does: a tabletop exercise each year for Low systems, and a functional recovery test each year for Moderate and High systems, at the alternate site for High. The annual frequency matches the incident response test in the Incident Response policy ([IR-3](/controls/ir/ir-3/)), which makes a joint exercise easy to schedule.

**Evidence assessors ask for.**

- The test plan for the last test: scope, objectives, scenario, participants and schedule
- The after-action report, with results against each objective and measured recovery times against the recovery objectives
- The review of the results (CP-4b): who reviewed them and when
- The corrective actions, tracked to closure in the plan of action and milestones, and the plan, training or backup changes they produced
- Records showing the tests met the stated frequency, matching Appendix J of the contingency plan
- For CP-4(1), evidence that the owners of related plans took part or reviewed the scenario, such as attendance lists or a joint after-action report

**Inheritance.** CP-4 is usually system-specific: each system's plan is tested. A system hosted by a cloud or data center provider inherits the provider's tests of its own infrastructure, and still tests the parts it owns, such as restoring its data and applications. Ask the provider for evidence of its tests and record the split in the [system security plan](/templates/plans/system-security-plan/).

**Common findings.**

- A tabletop exercise held for a Moderate system, with no functional test that actually restores anything.
- A restore test that proves the backup job ran but never times the recovery against the recovery time objective.
- No after-action report, or findings that never reached the plan of action and milestones.
- Contact lists and call trees not exercised, so the first real activation finds wrong phone numbers.
- Contingency plan tests and incident response tests run by different teams that never involve each other.

**Enhancements in the Moderate baseline.** [CP-4(1)](#cp-4.1) coordinate with related plans: coordinate contingency plan testing with the organizational elements responsible for related plans. NIST's discussion lists business continuity, disaster recovery, continuity of operations, crisis communications, critical infrastructure, cyber incident response and occupant emergency plans. It does not require you to create such elements, only to coordinate with those that exist. A practical way to meet CP-4(1) is to run the contingency plan test and the incident response tabletop as one exercise, which also meets [IR-3(2)](/controls/ir/ir-3/#ir-3.2). Use a scenario that moves from containment under the [Incident Response Plan](/templates/plans/incident-response-plan/) into recovery under the contingency plan, such as ransomware that encrypts the system's servers. The test plan's section 2 has a row for the related plans and their teams, and the plan's Appendix K lists them.

High adds [CP-4(2)](#cp-4.2) alternate processing site: test the plan at the alternate processing site, to familiarize personnel with it and to evaluate its capabilities. [CP-4(3)](#cp-4.3) automated testing, [CP-4(4)](#cp-4.4) full recovery and reconstitution and [CP-4(5)](#cp-4.5) self-challenge are in no baseline.

**Federal systems** (as of October 2026). FEMA's [Federal Continuity Directive: Federal Executive Branch Continuity Program Management Requirements](https://www.fema.gov/sites/default/files/documents/fema_oncp_fcd-federal-executive-branch-continuity-program-management-requirements.pdf) (August 2024), section 7.1.4, requires agencies' continuity testing programs to include annual testing of recovery strategies (disaster recovery plans or IT contingency plans) for critical information systems, services and data. It also requires annual testing of information systems and access to essential records at alternate sites. Where a system supports the agency's essential functions, schedule its contingency plan test so it also counts toward the agency's continuity testing.
