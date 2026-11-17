---
title: Continuous monitoring from pipeline output
description: How a team that ships through a pipeline turns its checks and scans into CA-7 continuous monitoring evidence that supports ongoing authorization, and what an assessor checks.
sidebar:
  order: 6
controls: [ca-7, ca-7.1, ca-7.4, ca-7.6]
guidance: draft
---

A team that ships through a pipeline already runs most of the checks continuous monitoring needs: scans, configuration checks, tests after each deployment, and a record of every change. Under [CA-7](/controls/ca/ca-7/) that output counts as monitoring evidence only when the system's monitoring strategy names it, it is current and complete, it is kept where no one can alter it, and someone analyzes it and reports to the authorizing official. This page sets out those conditions, how the output supports ongoing authorization, and what an assessor will check. Status as of November 2026.

## The problem

CA-7 leaves the frequencies to the organization, and most strategies run on a calendar: scans each month, a third of the controls assessed each year, a status report each quarter. A pipeline team produces far more data than that, at every commit and deployment, from many tools that each keep their own results.

The two failures are mirror images. Some teams treat their pipeline dashboards as continuous monitoring, but nothing ties a check to a control, results expire after a few weeks, and a system that did not deploy for a month was not checked for a month. Others run a separate monthly monitoring process beside the pipeline, re-collecting by hand what the pipeline already knew, so the report reaching the authorizing official is weeks old and disagrees with the pipeline.

NIST expects automation but not automation alone. [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final), Appendix F, says automated tools may not cover "every control or every part of a control", and "manual control assessments are conducted at organizationally-determined frequencies to cover any gaps". It also says that "if a substantial portion of monitoring is not accomplished via automation", moving to ongoing authorization is not feasible. A pipeline can supply much of that portion. The question is how to show an assessor which part, and that it is trustworthy.

## The requirement

The control is [CA-7](/controls/ca/ca-7/) Continuous Monitoring, in every baseline, with [CA-7(4)](/controls/ca/ca-7/#ca-7.4) risk monitoring (all baselines) and [CA-7(1)](/controls/ca/ca-7/#ca-7.1) independent assessment (Moderate and High). [CA-7(6)](/controls/ca/ca-7/#ca-7.6), automation support for monitoring, is in no baseline; a pipeline team meets most of it anyway, and this page treats its three properties (accurate, current, available) as the test of good evidence. The control page lists the full SP 800-53A objectives; these are the ones a pipeline changes most.

| Objective (SP 800-53A) | What the assessor determines | What changes with a pipeline |
| --- | --- | --- |
| CA-07[01], [02] | A system-level strategy is developed, and monitoring follows the organization-level strategy | The strategy names each pipeline check and scheduled scan, and the controls it informs |
| CA-07a | System-level metrics are established | Metrics are computed from pipeline and scanner output, with each source named |
| CA-07b.[01], b.[02] | Frequencies are set for monitoring and for assessing control effectiveness | A check that runs only when the team deploys has no fixed frequency until it is also scheduled |
| CA-07c | Ongoing control assessments follow the strategy | Automated checks assess parts of controls; manual assessments cover the rest |
| CA-07d | System and organization-defined metrics are monitored | Results must cover the whole running system, not only what changed |
| CA-07e | Assessment and monitoring information is correlated and analyzed | Output from many tools is joined by component and time before anyone reads it |
| CA-07f | Response actions address the results of the analysis | A failed check opens a tracked finding or stops a deployment; nothing stays failed without an owner |
| CA-07g.[01], g.[02] | Security and privacy status are reported to the defined roles at the defined frequency | Reports are built from the stored results, and show each source's age and coverage |
| CA-07(01) | Independent assessors or teams monitor the controls on an ongoing basis | The team that runs the pipeline produces the data; someone independent analyzes it |
| CA-07(04)(a) to (c) | Risk monitoring includes effectiveness, compliance and change monitoring | Post-deployment tests, policy and configuration checks, and deployment records |
| CA-07(06) | Automated mechanisms ensure the accuracy, currency and availability of monitoring results | Timestamps, coverage checks and a protected store for results |

Related controls carry part of the load. [CA-2](/controls/ca/ca-2/) is the assessment that ongoing assessments add up to, [CA-5](/controls/ca/ca-5/) the plan of action and milestones that findings feed, and [CA-6](/controls/ca/ca-6/) the authorization that monitoring keeps current. [AU-9](/controls/au/au-9/) and [AU-11](/controls/au/au-11/) protect and retain audit records, the model for protecting stored results. [CM-8](/controls/cm/cm-8/) gives the inventory that coverage is measured against, and [PM-31](/controls/pm/pm-31/) sets the organization-wide strategy the system's strategy follows.

## The structure: SP 800-137, with SP 800-37 for ongoing authorization

[SP 800-137](https://csrc.nist.gov/pubs/sp/800/137/final), Information Security Continuous Monitoring (ISCM) for Federal Information Systems and Organizations (September 2011; final as of November 2026), sets the process. [SP 800-137A](https://csrc.nist.gov/pubs/sp/800/137/a/final) (May 2020) describes how to assess a monitoring program. [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) (December 2018; final, no newer revision as of November 2026) places monitoring in the RMF's Monitor step and sets out ongoing authorization in Appendix F.

**The process has six steps, and the pipeline does most of its work in steps 3.3 to 3.5.** SP 800-137 chapter 3 runs from defining the strategy to reviewing it. In a pipeline:

| SP 800-137 step | Where it happens for a pipeline team |
| --- | --- |
| 3.1 Define the strategy | The system-level strategy (task S-5) names the pipeline checks and scheduled scans as data sources, and what each covers |
| 3.2 Establish the program | Metrics, frequencies and the architecture: where results are collected, stored, analyzed and reported (section 3.2.3) |
| 3.3 Implement the program | Pipeline stages and scheduled jobs collect results and write them to the store |
| 3.4 Analyze and report | Results are joined and analyzed against risk tolerance; reports go to the system owner and the authorizing official |
| 3.5 Respond | Findings go to the tracker and the plan of action and milestones; a change is made through the pipeline |
| 3.6 Review and update | Trends show where to monitor more or less often, and which collections to stop |

**Frequencies depend on the control, not the pipeline.** Section 3.2.2 lists what to weigh: the control's volatility, the system's impact level, controls that provide critical functions, controls with known weaknesses, risk tolerance, threat and vulnerability information, risk assessment results, strategy reviews and reporting requirements. Configuration management controls are its example of volatile controls, needing frequent and "preferably" automated monitoring. A pipeline makes that frequency cheap, but only for what it checks.

**Every control is in scope, not only the automated ones.** Section 3.3 says "Every control is monitored for effectiveness", across common, hybrid and system-specific controls. Section 2.3 adds that the strategy "does not focus solely on the security-related information that is easy for an organization to collect or easy to automate."

**Sampling is allowed, with care.** Section 3.1.4 lets organizations sample assessment objects, and warns that a sample "may fail to capture the variations" of the full population. Non-random samples are used "with care to avoid introducing bias", and "Automated data collection and analysis can reduce the need for sampling." A pipeline check that runs on every component needs no sample; one that runs only on what changed is a biased one.

**A metric is only as good as the controls behind it.** Section 3.2.1 warns that "Collecting metrics from a security architecture with security controls that have not been assessed is equivalent to using a broken or uncalibrated scale." The checks themselves need testing. [NIST IR 8011 Vol. 1](https://csrc.nist.gov/pubs/ir/8011/v1/final) (June 2017), on automating assessments, puts it as a property of the collectors: they are "configured and implemented to provide reliable and valid (accurate) data that are timely and complete" (section 4.2.1). SP 800-137A calls a monitoring capability robust when it is "sufficiently accurate, complete, timely, and reliable" (section 2, footnote 7).

### What the authorizing official decides from it

SP 800-37 tasks M-1 to M-6 turn monitoring output into decisions:

| Task | What it asks | What the pipeline contributes |
| --- | --- | --- |
| M-1 System and environment changes | Monitor for changes, authorized and unauthorized, and find the root cause of unauthorized ones | Deployment records, and drift detection between the running system and version control |
| M-2 Ongoing assessments | Assess controls on the strategy's schedule, by assessors with the required independence | Automated check results, as assessment evidence for the parts of controls they test |
| M-3 Ongoing risk response | Respond to findings: the authorizing official decides or approves the response | Findings in the tracker, each with a decision (see [findings to the POA&M](/devsecops/findings-to-poam/)) |
| M-4 Authorization package updates | Keep the plans, assessment reports and plan of action and milestones current | Reports generated from stored results; footnote 108 accepts a tool's report as the assessment report if it holds what the report requires |
| M-5 Security and privacy reporting | Report posture to the authorizing official on the strategy's schedule | The status report, at least summarizing what changed since the last one |
| M-6 Ongoing authorization | The authorizing official reviews posture on an ongoing basis and decides whether the risk is still acceptable | The current, complete picture that decision needs |

Task M-4 adds a rule for the store: "Organizations ensure that information needed for oversight, management, and auditing purposes is not modified or destroyed when updating" the plans, reports and plans of action and milestones. Task M-5 leaves the form to the organization: reports can be "event-driven, time-driven, or event- and time-driven", and at a minimum "summarize changes" since the last report.

Appendix F sets two conditions for ongoing authorization: an initial authorization "based on a complete, zero-based review", and a continuous monitoring program that monitors controls "at the required frequencies specified by the organization". The authorizing official then documents the transition by issuing a new authorization decision. From then on, the official reviews on a time-driven schedule and on event-driven triggers. Those triggers include "An increased number of findings or deficiencies from the continuous monitoring program" and "Exceeding organizational thresholds", which pipeline output can raise automatically. For moderate- and high-impact systems, the information the official receives "is produced and analyzed by an entity that meets the independence requirements established by the organization". Reauthorization may be warranted by "failure of or significant problems with the continuous monitoring program", so a monitoring gap is itself a risk the official needs to hear about.

## When pipeline output is the monitoring record

Pipeline output is the monitoring record for a control when the system's monitoring strategy names it and every condition below holds. Record how the system meets each one in its [Continuous Monitoring Strategy](/templates/plans/continuous-monitoring-strategy/) (sections 7 and 10). Where a condition fails, the output is still useful data, but a manual assessment covers that control.

1. **Each source is named in the strategy.** The strategy lists each pipeline check and scheduled scan, the controls and SP 800-53A objectives it informs, and the population it must cover. A check not in the strategy is not monitoring evidence (CA-7[01], CA-7a; task S-5).
2. **Checks run on a schedule, not only on deployment.** A check that runs when the team deploys shows the state at deployment. Schedule the same checks against the running system at the strategy's frequency, so a system that did not deploy is still monitored (CA-7b, CA-7d).
3. **Every result carries its time, and old results are gaps.** Each stored result records when it was collected and from what. Each source has a maximum age; when its newest result is older, the control is reported as unmonitored, not as passing (CA-7(6); SP 800-137A section 2, footnote 7).
4. **Coverage is reconciled with the inventory.** The components each source checked are compared with the [component inventory](/templates/forms/component-inventory/) on each run. A component the source missed, or one that failed to report, is a gap. Sampling is used only where the strategy allows it, with the sampling method stated (CA-7d; CM-8; SP 800-137 section 3.1.4).
5. **The checks are themselves controlled and tested.** Check rules and gate policies live in version control, change only through [change control](/devsecops/change-management/), and each stored result names the rule version that produced it. Each check is shown to fail on a known-bad case, so a check that cannot fail is found (CA-7(6); SP 800-137 section 3.2.1).
6. **Results are kept where they cannot be changed.** The pipeline writes results to a store where its identities can add records but not alter or delete them, as for [pipeline secrets and identities](/devsecops/pipeline-boundary/). Results are kept for the retention period the strategy sets, longer than the platform's own log retention if needed (CA-7(6); AU-9; AU-11; task M-4).
7. **Results are correlated and acted on.** Results from different sources are joined by component and time, and analyzed against the strategy's thresholds. Every failed check either stops a deployment or opens a finding with an owner, which follows the [findings to the POA&M](/devsecops/findings-to-poam/) page (CA-7e, CA-7f; tasks M-3 and M-4).
8. **Someone independent analyzes the results, in a Moderate or High system.** The team that runs the pipeline produces the data; it does not grade it. The ongoing assessments, and the analysis the authorizing official receives, come from assessors with the independence the official set (CA-7(1), in the Moderate and High baselines; SP 800-37 Appendix F, for moderate- and high-impact systems).
9. **Status reaches the authorizing official, on schedule and on triggers.** The status report is generated from the stored results at the strategy's frequency, and shows each source's newest result and its coverage. Crossing a threshold the strategy names notifies the official without waiting for the report (CA-7g; tasks M-5 and M-6).
10. **Manual assessments cover what the pipeline cannot.** Controls and parts of controls no automated source covers, such as policies, training, physical protection and contingency planning, are on the manual assessment schedule. The strategy's table covers every control, so no control falls between the two (CA-7c; SP 800-37 Appendix F).

**Inherited controls are monitored by their provider.** Your strategy lists them with the provider as the source, and your system watches the provider's reports and changes, as [condition 8 of the platform inheritance page](/devsecops/platform-inheritance/#when-a-control-is-inherited-from-the-platform) sets out. Pipeline output covers only the system's own part of each hybrid control.

**Risk monitoring maps onto pipeline output.** CA-7(4) names three kinds. Effectiveness monitoring is whether controls still work: post-deployment tests and scheduled checks of running controls. Compliance monitoring is whether required settings are in place: configuration and policy checks against the [baseline](/devsecops/configuration-baselines/). Change monitoring is what changed: deployment records, and drift between the running system and version control.

**Typical values.** Your strategy sets these; the [Continuous Monitoring Strategy](/templates/plans/continuous-monitoring-strategy/) gives typical values that suit a pipeline as written. Monitoring is continuous for automated controls and at least monthly for vulnerability, configuration and account data (CA-7b). Status goes to the authorizing official and the Chief Information Security Officer at least quarterly (CA-7g). Typically, also: a result's maximum age is its scheduled interval plus the time a run takes, so one missed run shows as a gap; and stored results are kept for at least three years, the cycle in which every control is assessed under those typical values, or longer where your records schedule requires.

## Team practice

OWASP and DoD describe how pipeline teams do this work. OWASP text is licensed CC BY-SA 4.0 (DSOMM's data GPL-3.0), so this section cites names and IDs and says what each covers in the guide's own words.

- **[OWASP DevSecOps Guideline](https://owasp.org/www-project-devsecops-guideline/)** (incubator project, no version number; read in November 2026). Its [documentation](https://owasp.github.io/DevSecOpsGuideline/) section 3.1.1 Compliance Auditing contrasts point-in-time audits with continuous compliance. It describes mapping each control to an automated check, with the mapping written down so evidence traces to requirements, and collecting evidence automatically into a tamper-resistant store for the audit period. It names collecting evidence only at audit time as a common pitfall. Section 2.7.2 Logging and Monitoring covers making records trustworthy: centralized, written to append-only storage the application cannot change, retained long enough, with synchronized clocks, and with alerts when a source stops sending. Its example retention periods come from other frameworks, so use your own.
- **[OWASP DevSecOps Maturity Model (DSOMM)](https://dsomm.owasp.org/)** (lab project; data release 5.0.2, September 17, 2026). Under Information Gathering, Monitoring: *Simple system metrics* (level 1), *Alerting* and *Visualized metrics* (level 2), *Deactivation of unused metrics* (level 3) and *Coverage and control metrics* (level 4), which measures how fully each security control is applied across its targets. Under Information Gathering, Logging: *Centralized system logging* (level 1) and *Correlation of security events* (level 5).
- **[OWASP Top 10 CI/CD Security Risks](https://owasp.org/www-project-top-10-ci-cd-security-risks/)** (lab project). CICD-SEC-10, Insufficient Logging and Visibility, is the attacker's view of a pipeline whose own activity is not recorded or watched.
- **[DoD Enterprise DevSecOps Activities & Tools Guidebook](https://dodcio.defense.gov/Portals/0/Documents/Library/DevSecOpsActivitesToolsGuidebook.pdf)**, version 2.5, April 2025 (Distribution Statement A). Section 3.10 quotes SP 800-137's definition of continuous monitoring. Its Monitor phase table (Table 12) lists as REQUIRED: asset inventory including SBOMs; compliance monitoring of deployed cloud resources and services against SP 800-53 controls; log analysis and auditing, including making sure the logs are held and aggregated correctly; system security monitoring; and a test audit record of who ran which test, when, with what result.

## Evidence

An assessor tests CA-7 by following the strategy into the records. Pick a control the strategy says is monitored automatically, find its source, and check that results exist at the stated frequency, for the whole population, through the period under review.

| Objective | Pipeline output that meets it | What the assessor checks |
| --- | --- | --- |
| CA-07[01], [02] | The system-level strategy, with its table of automated sources, approved and consistent with the organization-level strategy | Every source named exists and runs; every control has a source or a manual assessment |
| CA-07a | Metric definitions with their data sources and thresholds; metric values computed from stored results | Values can be recomputed from the stored results |
| CA-07b | Scheduled job definitions; result timestamps | Results exist at the stated frequency, including in weeks with no deployments |
| CA-07c | Stored check results tied to controls and objectives; manual assessment results for the rest | The ongoing assessments cover the year's planned set |
| CA-07d | Coverage reports reconciling each source with the inventory | Gaps are reported as gaps, not counted as passes |
| CA-07e | Correlated findings, joined by component and time | Analysis happened before the report, not only data collection |
| CA-07f | Findings opened from failed checks; blocked deployments; plan of action and milestones entries | A sample of failed checks each led to a recorded response |
| CA-07g | Status reports to the named roles, with source age and coverage | Reports went out on schedule and match the stored results |
| CA-07(01) | Records of who analyzed the results and reviewed the reports | The analysts are independent of the team that runs the pipeline |
| CA-07(04) | Post-deployment tests, configuration and policy check results, deployment and drift records | Each of the three kinds is present and reviewed |
| CA-07(06) | Result timestamps, rule versions, store settings that prevent changes and deletion | Results cannot be altered by the pipeline's identities and are retained for the period set |

Interviews and tests still matter. An assessor will ask the analysts how they decide a result is current and complete, and the authorizing official what they receive and how often. Expect a test too: stop a source, or remove a component from its scope, and show that the report flags the gap.

### FedRAMP's model: the KSIs and Collaborative Continuous Monitoring

FedRAMP 20x states part of this as Key Security Indicators. These are FedRAMP's, from the [FedRAMP Consolidated Rules for 2026](https://www.fedramp.gov/2026/reference/key-security-indicators/#monitoring-logging-and-auditing), and they apply to FedRAMP cloud services. This table reads the [rules repository](https://github.com/FedRAMP/rules), version 2026.11.02.01 (November 2, 2026; still the latest as of November 2026), and lists the KSIs whose control lists name CA-7 or its enhancements. For an agency system outside FedRAMP they are a model of outcome-based evidence, not a requirement.

| KSI | FedRAMP's statement | SP 800-53 controls FedRAMP lists |
| --- | --- | --- |
| KSI-MLA-EVC, Evaluating Configurations | "The configuration of machine-based information resources, especially infrastructure as code, is persistently evaluated and tested." | AC-19, CA-7, CM-2, CM-6, CM-6(1), RA-3, SI-7(7) |
| KSI-CMT-LMC, Logging Changes | "Modifications to the cloud service offering are logged and monitored." | AU-2, CA-7(4), CM-3, CM-3(1), CM-3(2), CM-3(6), CM-4(2), CM-6, CM-8(3) |
| KSI-SVC-EIS, Evaluating and Improving Security | "Information resources are persistently evaluated for opportunities to improve security and those improvements are persistently made." | CA-7(4), CM-5(5), CM-7(1), CM-12(1), IR-9(4), PL-8, RA-3, SC-7, SC-39, SI-2(2), SI-4, SR-10 |
| KSI-SCR-MIT, Mitigating Supply Chain Risk | "Potential supply chain risks are persistently identified, reviewed, and mitigated." | AC-19, AC-20, CA-7(4), RA-3, RA-3(1), SA-4, SA-4(1), SA-4(2), SA-4(5), SA-4(9), SA-9, SA-9(1), SA-9(2), SA-9(5), SA-10, SA-11, SA-11(1), SA-11(2), SA-15, SA-15(3), SA-16, SA-17, SA-21, SA-22, SC-18, SI-7(1), SI-7(15), SR-2, SR-3, SR-5, SR-6 |

FedRAMP defines [persistently](https://www.fedramp.gov/2026/definitions/#persistently) as repeated in cycles that "may not always occur continuously", and adds that "the status of persistent activities will always be known". That is condition 3 in FedRAMP's words.

Several FedRAMP rules name CA-7 too, or bear on it by topic. Each sets what a provider does, for 20x and Rev5 Certifications at Classes B to D unless noted; one sets what the agency does:

- **[Collaborative Continuous Monitoring](https://www.fedramp.gov/2026/providers/20x/rules/collaborative-continuous-monitoring/) (CCM).** Providers must supply an Ongoing Certification Report "every 3 months, covering the entire period since the previous summary", summarizing changes, planned changes, accepted vulnerabilities, transformative changes and incidents (CCM-OCR-AVL, which lists CA-7). Providers with Class C and D Certifications must host a Quarterly Review on it, and Class B providers should (CCM-QTR-MTG, CA-7). The [agency rules](https://www.fedramp.gov/2026/agencies/rules/collaborative-continuous-monitoring/) say agencies must review each report against the risk tolerance in their authorization (CCM-AGM-ROR), and should staff that review according to the system's security category (CCM-AGM-CSC). FedRAMP marks the rule set stable; for 20x it applies from July 4, 2026 to obtain a Certification and from January 1, 2027 to maintain one, and for Rev5 from January 1, 2027 and April 2, 2027.
- **[Independent Verification and Validation](https://www.fedramp.gov/2026/providers/20x/rules/independent-verification-and-validation/) (IVV).** Providers with Class B to D Certifications must complete an independent assessment of all applicable FedRAMP rules at least once a year (IVV-CSO-FIA, which lists CA-7(1) and CA-7(4)).
- **[FedRAMP Certification](https://www.fedramp.gov/2026/providers/20x/rules/fedramp-certification/) (FRC), 20x only.** Providers "implement automated methods to persistently verify and validate the accuracy and completeness of Key Security Indicators": at least one automated method for each KSI at Class B (should), two at Class C and four at Class D (must) (FRC-CSX-VVK).
- **[Security Decision Record](https://www.fedramp.gov/2026/providers/20x/rules/security-decision-record/) (SDR), 20x only.** Providers with Class C Certifications must include "All daily metric data (including status of persistent validation) up to the past year (where available)" for each applicable KSI; Class B should include 30-day and yearly summaries (SDR-CSX-KMT).

Read against the conditions above, FRC-CSX-VVK is conditions 3 to 5, SDR-CSX-KMT is conditions 3 and 6, IVV-CSO-FIA is condition 8, CCM-OCR-AVL is condition 9, KSI-MLA-EVC is conditions 2 and 5, and KSI-CMT-LMC and KSI-SVC-EIS are the change and effectiveness monitoring of CA-7(4). That alignment is this guide's reading, not FedRAMP's.

## Templates to use or change

- **[Continuous Monitoring Strategy](/templates/plans/continuous-monitoring-strategy/).** Section 7 now has a table of automated sources: the controls and objectives each informs, the population it must cover, how often it runs, the maximum age of a result, and where results are kept and for how long. Section 10 now has each status report give every source's newest result and its coverage, so a gap is not read as a pass. Fill in both.
- **[Security and privacy assessment report](/templates/reports/security-and-privacy-assessment-report/).** Ongoing assessments update it (task M-4). A report generated from stored results can stand in for it if it holds what the report requires (SP 800-37 footnote 108).
- **[Plan of action and milestones](/templates/forms/plan-of-action-and-milestones/).** Findings from failed checks reach it through the tracker, as the [findings to the POA&M](/devsecops/findings-to-poam/) page sets out.
- **[Audit logging standard](/templates/standards/audit-logging-standard/)** and **[System monitoring standard](/templates/standards/system-monitoring-standard/).** Their protection and retention rules for logs are the model for the store of results; keep the retention periods consistent.
- **[Assessment, Authorization, and Monitoring policy](/templates/policies/ca/).** Its CA-7 clauses need no change; their typical values match the strategy's.

:::note[Federal systems]
[OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.d(7), requires agencies to ensure "that all selected and implemented controls are addressed in the ISCM strategy and are effectively monitored on an ongoing basis". Section 5.e says agencies "must continuously monitor all implemented security and privacy controls" at the frequency their strategies set, and that the strategies define the controls assessed in each one-year "annual assessment window". Section 5.h sets the two conditions for ongoing authorization, and requires the authorizing official to formally acknowledge the transition; until then, systems keep specific authorization termination dates. As of November 2026.

An agency system that runs on a FedRAMP Certified cloud service still needs its own monitoring. FedRAMP's [Ongoing Agency Authorization](https://www.fedramp.gov/2026/agencies/use/ongoing/) page says FedRAMP Certification "does not replace the agency's own information security continuous monitoring program", nor "agency responsibilities for monitoring agency-managed configurations, reviewing logs, managing agency accounts, maintaining agency POA&Ms". It asks agencies to "treat FedRAMP's monitoring as shared provider evidence". In this page's terms, the provider's reports are the source for inherited controls, and the pipeline's output is the source for the agency's own part. As of November 2026.
:::

## Common findings

- Pipeline dashboards presented as continuous monitoring, with no strategy that ties any check to a control.
- Checks that run only on deployment, so a system that did not deploy for weeks was not monitored for weeks.
- Results kept for the platform's default log retention, a few weeks or months, so the assessor's period cannot be shown.
- Reports that show a passing status built from results months old, or from scans that skipped part of the inventory.
- A disabled or misconfigured check that has reported "pass" ever since, with no test that it can fail.
- Results the pipeline's own identity can edit or delete.
- Metrics collected but never analyzed or acted on, so failed checks stay failed with no finding.
- The system's own engineers analyzing the results and writing the report to the authorizing official, in a Moderate or High system.
- Controls no tool covers left out of the strategy, so they are never assessed between authorizations.
- A system moved to ongoing authorization without the authorizing official's documented decision, still running against an expired termination date.

## Key references

- [NIST SP 800-137](https://csrc.nist.gov/pubs/sp/800/137/final), chapter 3, especially sections 3.1.4, 3.2.1 to 3.2.3 and 3.3
- [NIST SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final), tasks S-5 and M-1 to M-6, and Appendix F (ongoing authorization, event-driven triggers)
- [NIST SP 800-137A](https://csrc.nist.gov/pubs/sp/800/137/a/final), section 2.1.7, Ongoing Authorization
- [NIST IR 8011 Vol. 1](https://csrc.nist.gov/pubs/ir/8011/v1/final), section 4.2, Collectors and the Collection System
- [NIST SP 800-53A Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final) (January 2022; release 5.2.0), the CA-7 assessment procedures, shown on the control page
- The [DevSecOps overview](/devsecops/) lists every source this section relies on, with its status
