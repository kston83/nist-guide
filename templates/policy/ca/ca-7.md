---
control: ca-7
title: 'Continuous monitoring'
status: draft
stage: operate
typical:
  ca-07_odp.01: 'open vulnerabilities by severity and age, configuration compliance rate, plan of action and milestones items past due, and unauthorized components found'
  ca-07_odp.02: 'continuously for automated controls, and at least monthly for vulnerability, configuration and account data'
  ca-07_odp.03: 'the schedule in the system''s continuous monitoring strategy, assessing a third of the controls each year so every control is assessed at least every three years'
  ca-07_odp.04: 'the authorizing official and the Chief Information Security Officer'
  ca-07_odp.05: 'at least quarterly'
  ca-07_odp.06: 'the authorizing official and the senior privacy official'
  ca-07_odp.07: 'at least quarterly'
---

:::guidance
Continuous monitoring keeps the authorization current between full assessments. The system's [Continuous Monitoring Strategy](/templates/plans/continuous-monitoring-strategy/) follows the organization-wide strategy (PM-31) and sets what is measured, how often each control is monitored and assessed, how results are analyzed and acted on, and how often the system's status is reported. A common approach assigns each control a frequency by how often it changes: vulnerability management monthly, physical security annually. NIST SP 800-137 ([September 2011](https://csrc.nist.gov/pubs/sp/800/137/final), current as of September 2026) describes information security continuous monitoring.
:::

- The {{org:system-owner}} shall develop a system-level continuous monitoring strategy that follows the organization-wide continuous monitoring strategy, and implement continuous monitoring in accordance with it. (CA-7)
- The system-level strategy shall establish the following system-level metrics to be monitored: {{param:ca-07_odp.01}}. (CA-7a)
- The system-level strategy shall establish that control effectiveness is monitored {{param:ca-07_odp.02}}. (CA-7b)
- The system-level strategy shall establish that control effectiveness is assessed at {{param:ca-07_odp.03}}. (CA-7b)
- The {{org:system-owner}} shall ensure ongoing control assessments are carried out in accordance with the continuous monitoring strategy. (CA-7c)
- The {{org:system-owner}} shall ensure the system-level and organization-defined metrics are monitored on an ongoing basis in accordance with the continuous monitoring strategy. (CA-7d)
- The {{org:system-owner}} shall correlate and analyze the information that control assessments and monitoring produce. (CA-7e)
- The {{org:system-owner}} shall take response actions to address the results of that analysis, recording weaknesses in the plan of action and milestones (CA-5) and raising risks above tolerance with the authorizing official. (CA-7f)
- The {{org:system-owner}} shall report the security status of the system to {{param:ca-07_odp.04}}, {{param:ca-07_odp.05}}. (CA-7g)
- For a system that processes personally identifiable information, the {{org:system-owner}} shall report the privacy status of the system to {{param:ca-07_odp.06}}, {{param:ca-07_odp.07}}. (CA-7g)
- The {{org:system-owner}} shall review and update the system-level strategy when the system changes significantly, when the organization-wide strategy changes, and at least annually. (CA-7)

:::guidance
Give the system owner the metrics monthly, even when the authorizing official receives a quarterly report, so action is not left to the formal report. The organization-wide strategy (PM-31) may need each system's data monthly for its own reports. The frequencies set here should also match the assessment frequency under CA-2d, since the yearly assessment is usually the continuous monitoring assessments of that year.
:::

:::federal
[OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.d(5) to (8), requires agencies to develop and maintain an information security continuous monitoring (ISCM) strategy, update it at an organization-defined frequency, ensure all selected and implemented controls are addressed in it and effectively monitored on an ongoing basis, and keep an ISCM program with metrics that give meaningful indications of security status and trend analysis at every risk management tier. Section 4.d(9) adds a privacy continuous monitoring (PCM) strategy; footnote 85 allows the two strategies to be combined into one. Section 5.c says that, after the authorization decision, agencies monitor the controls in each system on an ongoing basis, as described in NIST SP 800-137, including assessing control effectiveness, documenting changes, analyzing their security impact and reporting the system's security state to designated officials. As of September 2026.

- The {{org:system-owner}} shall ensure every control selected and implemented for the system is addressed in the system-level strategy and monitored on an ongoing basis, as OMB Circular A-130, Appendix I, section 4.d(7), requires. (CA-7c)
- The {{org:system-owner}} shall ensure the system-level strategy follows the agency's ISCM strategy and, for a system that processes personally identifiable information, its PCM strategy, or the single strategy that combines them. (CA-7)

:::
