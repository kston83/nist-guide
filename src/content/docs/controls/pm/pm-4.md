---
title: 'PM-4 Plan of Action and Milestones Process'
description: 'NIST SP 800-53 Rev. 5 control PM-4, Plan of Action and Milestones Process: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PM-4 Plan of Action and Milestones Process'
  order: 4
control:
  id: PM-4
  family: PM
  baselines: [Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Privacy | Organization | None |

**Related controls:** [CA-5](/controls/ca/ca-5/), [CA-7](/controls/ca/ca-7/), [PM-3](/controls/pm/pm-3/), [RA-7](/controls/ra/ra-7/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Implement a process to ensure that plans of action and milestones for the information security, privacy, and supply chain risk management programs and associated organizational systems:
  - **1.** Are developed and maintained;
  - **2.** Document the remedial information security, privacy, and supply chain risk management actions to adequately respond to risk to organizational operations and assets, individuals, other organizations, and the Nation; and
  - **3.** Are reported in accordance with established reporting requirements.
- **b.** Review plans of action and milestones for consistency with the organizational risk management strategy and organization-wide priorities for risk response actions.

<details>
<summary>NIST discussion</summary>

The plan of action and milestones is a key organizational document and is subject to reporting requirements established by the Office of Management and Budget. Organizations develop plans of action and milestones with an organization-wide perspective, prioritizing risk response actions and ensuring consistency with the goals and objectives of the organization. Plan of action and milestones updates are based on findings from control assessments and continuous monitoring activities. There can be multiple plans of action and milestones corresponding to the information system level, mission/business process level, and organizational/governance level. While plans of action and milestones are required for federal organizations, other types of organizations can help reduce risk by documenting and tracking planned remediations. Specific guidance on plans of action and milestones at the system level is provided in CA-5.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PM-4</summary>

Determine if:

- **PM-04a.**
  - **PM-04a.01**
    - **PM-04a.01[01]** a process to ensure that plans of action and milestones for the information security program and associated organizational systems are developed;
    - **PM-04a.01[02]** a process to ensure that plans of action and milestones for the information security program and associated organizational systems are maintained;
    - **PM-04a.01[03]** a process to ensure that plans of action and milestones for the privacy program and associated organizational systems are developed;
    - **PM-04a.01[04]** a process to ensure that plans of action and milestones for the privacy program and associated organizational systems are maintained;
    - **PM-04a.01[05]** a process to ensure that plans of action and milestones for the supply chain risk management program and associated organizational systems are developed;
    - **PM-04a.01[06]** a process to ensure that plans of action and milestones for the supply chain risk management program and associated organizational systems are maintained;
  - **PM-04a.02**
    - **PM-04a.02[01]** a process to ensure that plans of action and milestones for the information security program and associated organizational systems document remedial information security risk management actions to adequately respond to risks to organizational operations and assets, individuals, other organizations, and the Nation;
    - **PM-04a.02[02]** a process to ensure that plans of action and milestones for the privacy program and associated organizational systems document remedial privacy risk management actions to adequately respond to risks to organizational operations and assets, individuals, other organizations, and the Nation;
    - **PM-04a.02[03]** a process to ensure that plans of action and milestones for the supply chain risk management program and associated organizational systems document remedial supply chain risk management actions to adequately respond to risks to organizational operations and assets, individuals, other organizations, and the Nation;
  - **PM-04a.03**
    - **PM-04a.03[01]** a process to ensure that plans of action and milestones for the information security risk management programs and associated organizational systems are reported in accordance with established reporting requirements;
    - **PM-04a.03[02]** a process to ensure that plans of action and milestones for the privacy risk management programs and associated organizational systems are reported in accordance with established reporting requirements;
    - **PM-04a.03[03]** a process to ensure that plans of action and milestones for the supply chain risk management programs and associated organizational systems are reported in accordance with established reporting requirements;
- **PM-04b.**
  - **PM-04b.[01]** plans of action and milestones are reviewed for consistency with the organizational risk management strategy;
  - **PM-04b.[02]** plans of action and milestones are reviewed for consistency with organization-wide priorities for risk response actions.

**Examine:** Information security program plan; plans of action and milestones; procedures addressing plans of action and milestones development and maintenance; procedures addressing plans of action and milestones reporting; procedures for reviewing plans of action and milestones for consistency with risk management strategy and risk response priorities; results of risk assessments associated with plans of action and milestones; OMB FISMA reporting requirements; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for developing, maintaining, reviewing, and reporting plans of action and milestones; organizational personnel with information security responsibilities.

**Test:** Organizational processes for plan of action and milestones development, review, maintenance, and reporting; mechanisms supporting plans of action and milestones.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PM-4 is the organization-level process behind every plan of action and milestones (POA&M). It makes sure POA&Ms exist and stay current for the information security, privacy and supply chain risk management programs and for each system. Each records the remedial actions planned, and each is reported as required. The program then reviews them against the risk management strategy and the organization's priorities for risk response (b).

[CA-5](/controls/ca/ca-5/) is each system's POA&M; PM-4 is the process across all of them. NIST's PM-4 discussion says there can be POA&Ms at the system, mission or business process, and organization levels, updated from control assessments and continuous monitoring. PM-4 is in the SP 800-53B Privacy baseline.

**Common implementations.** Every system and program uses one format, such as the [POA&M template](/templates/forms/plan-of-action-and-milestones/), in one tool, so items roll up and compare. Program-level POA&Ms hold weaknesses in the programs themselves, such as findings from a program review or a missing program management control. [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) task P-5 adds POA&Ms from common control providers for common controls with unacceptable deficiencies.

The Chief Information Security Officer's team checks POA&M quality each month: an owner, milestones, a realistic date and a link to the finding for every item. It reports the roll-up to the senior leader and checks priorities against the [Risk Management Strategy](/templates/plans/risk-management-strategy/), whose section 5.2 places mitigations in the POA&M process. When a system owner proposes to accept a risk rather than fix it, only the authorizing official decides, as SP 800-37 Rev. 2 task R-3 says, and the POA&M records the decision.

**Organization-defined parameters.** PM-4 has none. The [Program Management policy](/templates/policies/pm/) clause leaves one choice open, with a typical value your organization may set differently:

| Choice | Typical value |
| --- | --- |
| How often POA&Ms are reported to the senior leader (a.3) | Quarterly (the clause's example) |

Each system updates its own POA&M at the frequency CA-5 sets; the typical value there is at least monthly, and whenever an assessment, audit, scan or monitoring activity finds a new weakness.

**Evidence assessors ask for.**

- The documented POA&M process: who keeps POA&Ms, the format, the review cycle and the reporting
- POA&Ms for each system and for the security, privacy and supply chain risk management programs
- Reports to the senior leader, and to regulators or customers where laws or contracts require
- Records of the program's review of POA&Ms against the risk management strategy (b)
- A sample of items traced back to the assessment, scan or audit that found them

**Inheritance.** PM-4 is implemented once, for the whole organization, and every system relies on it. Each system still keeps its own POA&M under CA-5, and common control providers keep the POA&Ms for the controls they provide.

**Common findings.**

- POA&Ms for systems only, with no program-level POA&M for privacy or supply chain weaknesses.
- Different formats in each system, so the program cannot roll items up or compare them.
- Reports that count items but say nothing about risk or overdue work.
- Items ordered by ease of fixing rather than by the risk priorities in the strategy (b).
- Items marked "risk accepted" with no decision from the authorizing official.

**Enhancements.** PM-4 has no enhancements.

**Federal systems** (as of October 2026). NIST's PM-4 discussion says the POA&M is subject to reporting requirements set by OMB. FISMA requires each agency program to include "a process for planning, implementing, evaluating, and documenting remedial action to address any deficiencies" ([44 U.S.C. § 3554(b)(6)](https://www.govinfo.gov/link/uscode/44/3554?link-type=html)). Section 3554(a)(5) has the Chief Information Officer report annually to the agency head on the program's effectiveness, "including progress of remedial actions." [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.c(15), has agencies use POA&Ms to record and manage the remediation of weaknesses not associated with accepted risks, and make them available to OMB, DHS, inspectors general and the Government Accountability Office on request. Section 4.k tracks every deficiency from assessments, continuous monitoring and audits through the POA&M process; material deficiencies also go in the annual Federal Managers Financial Integrity Act report.
