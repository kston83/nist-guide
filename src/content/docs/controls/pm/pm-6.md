---
title: 'PM-6 Measures of Performance'
description: 'NIST SP 800-53 Rev. 5 control PM-6, Measures of Performance: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PM-6 Measures of Performance'
  order: 6
control:
  id: PM-6
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

**Related controls:** [CA-7](/controls/ca/ca-7/), [PM-9](/controls/pm/pm-9/)

## Control statement

Develop, monitor, and report on the results of information security and privacy measures of performance.

<details>
<summary>NIST discussion</summary>

Measures of performance are outcome-based metrics used by an organization to measure the effectiveness or efficiency of the information security and privacy programs and the controls employed in support of the program. To facilitate security and privacy risk management, organizations consider aligning measures of performance with the organizational risk tolerance as defined in the risk management strategy.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PM-6</summary>

Determine if:

- **PM-06[01]** information security measures of performance are developed;
- **PM-06[02]** information security measures of performance are monitored;
- **PM-06[03]** the results of information security measures of performance are reported;
- **PM-06[04]** privacy measures of performance are developed;
- **PM-06[05]** privacy measures of performance are monitored;
- **PM-06[06]** the results of privacy measures of performance are reported.

**Examine:** Information security program plan; privacy program plan; information security measures of performance; privacy measures of performance; procedures addressing the development, monitoring, and reporting of information security and privacy measures of performance; risk management strategy; other relevant documents or records.

**Interview:** Organizational personnel with information security and privacy program planning and plan implementation responsibilities; organizational personnel responsible for developing, monitoring, and reporting information security and privacy measures of performance; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for developing, monitoring, and reporting information security and privacy measures of performance; mechanisms supporting the development, monitoring, and reporting of information security and privacy measures of performance.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PM-6 asks you to develop measures of performance for the security and privacy programs, monitor them, and report the results. NIST's PM-6 discussion calls them outcome-based metrics of the programs' effectiveness or efficiency, and suggests aligning them with the risk tolerance in the risk management strategy. PM-6 is in the SP 800-53B Privacy baseline.

NIST's [SP 800-55 Vol. 1](https://csrc.nist.gov/pubs/sp/800/55/v1/final) (December 2024) describes four kinds of measure. Implementation measures track progress, such as the percentage of systems with approved security plans. Effectiveness measures show whether controls meet their desired outcomes, efficiency measures show how quickly issues are found and fixed, and impact measures show the effect on the mission. [Vol. 2](https://csrc.nist.gov/pubs/sp/800/55/v2/final) covers building a measurement program.

**Common implementations.** Five to ten measures, each with a definition, a data source, a target and an owner, listed in section 6 of the [Information Security Program Plan](/templates/plans/information-security-program-plan/). The plan suggests systems with a current authorization, POA&M items past due, vulnerabilities remediated within the required times, and personnel with current awareness training. Privacy measures sit beside them, for example systems processing personally identifiable information with a current privacy impact assessment.

Report the same measures, defined the same way, each period so trends show, and set targets from the risk tolerance in the [Risk Management Strategy](/templates/plans/risk-management-strategy/). Many measures come straight from continuous monitoring (CA-7 and PM-31), so reuse those data rather than collecting twice. The [Program Management policy](/templates/policies/pm/) has the Chief Information Security Officer own the security measures and the senior privacy official the privacy measures, and both report to the senior leader.

**Organization-defined parameters.** PM-6 has none. The program plan leaves one choice open, with a typical value your organization may set differently:

| Choice | Typical value |
| --- | --- |
| How often measures are reported to the senior leader | Quarterly (the plan's example) |

**Evidence assessors ask for.**

- The list of measures, each with its definition, data source, target and owner, for both programs
- Reports to the senior leader over several periods
- Evidence that results led to action, such as a decision, a funding change or a POA&M item
- The data behind a sample measure, so the assessor can reproduce the figure

**Inheritance.** PM-6 is implemented once, for the whole organization, and every system relies on it. Systems feed data into the measures but do not implement PM-6 themselves.

**Common findings.**

- Activity counts, such as the number of scans run, in place of outcomes.
- No privacy measures at all.
- Targets with no link to the organization's risk tolerance.
- Measures that change every period, so no trend can be seen.
- Figures that no one can reproduce from the underlying data.

**Enhancements.** PM-6 has no enhancements.

**Federal systems** (as of October 2026). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.l, requires agencies to "provide performance metrics information and FISMA reports in accordance with processes established by OMB and DHS pursuant to FISMA"; Appendix II repeats it for the privacy program. FISMA has the Chief Information Officer report annually to the agency head on the effectiveness of the information security program ([44 U.S.C. § 3554(a)(5)](https://www.govinfo.gov/link/uscode/44/3554?link-type=html)). Build the program's own measures so they also answer those reports.
