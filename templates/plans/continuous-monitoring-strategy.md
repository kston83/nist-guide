---
title: Continuous Monitoring Strategy
type: plan
description: The organization-wide continuous monitoring strategy (PM-31) and each system's strategy under it (CA-7), with metrics, monitoring and assessment frequencies, reporting, response, and the triggers for ongoing authorization and reauthorization, following the NIST SP 800-137 process.
controls: [ca-7, ca-7.1, ca-7.4, pm-31, ca-2, ca-5, ca-6]
status: draft
stage: operate
typical:
  pm-31_odp.01: 'systems with a current authorization, plan of action items past due, vulnerabilities remediated within the required times, and staff with current security awareness training'
  pm-31_odp.02: 'continuously for automated controls, and at least monthly for vulnerability, configuration and account data'
  pm-31_odp.03: 'a third of each system''s controls each year, so every control is assessed at least every three years'
  pm-31_odp.04: the senior leader and the authorizing officials
  pm-31_odp.05: the senior leader and the authorizing officials
  pm-31_odp.06: monthly
  pm-31_odp.07: quarterly
  ca-07_odp.01: 'open vulnerabilities by severity and age, configuration compliance rate, plan of action and milestones items past due, and unauthorized components found'
  ca-07_odp.02: 'continuously for automated controls, and at least monthly for vulnerability, configuration and account data'
  ca-07_odp.03: 'the schedule in the system''s continuous monitoring strategy, assessing a third of the controls each year so every control is assessed at least every three years'
  ca-07_odp.04: 'the authorizing official and the Chief Information Security Officer'
  ca-07_odp.05: 'at least quarterly'
  ca-07_odp.06: 'the authorizing official and the senior privacy official'
  ca-07_odp.07: 'at least quarterly'
  ca-02_odp.01: 'annually for a subset of controls set by the system''s continuous monitoring strategy, so every control is assessed at least every three years and within the authorization period'
  ca-05_odp: 'at least monthly, and whenever an assessment, audit, scan or monitoring activity finds a new weakness'
  ca-06_odp: 'at least every three years and after a significant change, or on the time- or event-driven basis the continuous monitoring strategy sets once the authorizing official moves the system to ongoing authorization'
---

:::guidance
Continuous monitoring keeps risk decisions current between full assessments. This template has two levels: Part A is the organization-wide strategy the Chief Information Security Officer owns (PM-31), and Part B is each system's strategy (CA-7), which follows Part A and may tighten it but not loosen it. A small organization can keep both in one document; a larger one keeps Part A once and a Part B for each system. The sections follow the process in [NIST SP 800-137](https://csrc.nist.gov/pubs/sp/800/137/final), Information Security Continuous Monitoring (ISCM) for Federal Information Systems and Organizations (September 2011, current as of September 2026): define the strategy, establish the program, implement it, analyze and report, respond, and review and update. [NIST SP 800-137A](https://csrc.nist.gov/pubs/sp/800/137/a/final) (May 2020, current as of September 2026) describes how to assess a continuous monitoring program once it runs. The strategy covers privacy controls too, so one document can serve as both the security and the privacy continuous monitoring strategy.
:::

| Scope | System (Part B only) | Version | Owner | Approved by | Approval date |
| --- | --- | --- | --- | --- | --- |
| {{fill:organization-wide, system-level, or both}} | {{fill:system name and identifier}} | {{fill:version}} | {{fill:the Chief Information Security Officer for Part A; the system owner for Part B}} | {{fill:name and title}} | {{fill:date}} |

## 1. Purpose and risk tolerance

This strategy sets how {{org:name}} maintains ongoing awareness of the security and privacy of its systems, the effectiveness of their controls, and the threats and vulnerabilities they face, to support risk-based decisions.

- **Risk tolerance:** the tolerance and approval levels in the organization's [risk management strategy](/templates/plans/risk-management-strategy/) apply. {{fill:any tolerance statements specific to continuous monitoring, for example the metric values that call for escalation}}
- **Coverage:** every control selected and implemented for each system in the [system inventory](/templates/forms/system-inventory/), including common and hybrid controls, is addressed in this strategy and monitored on an ongoing basis.
- **Privacy:** privacy controls are monitored under this strategy, with the {{org:privacy-official}} responsible for their results. {{fill:or state that a separate privacy continuous monitoring strategy exists, and where}}

## 2. Roles and responsibilities

| Role | Responsibilities under this strategy |
| --- | --- |
| {{org:ciso}} | Owns Part A; runs the organization-wide monitoring program and its tools; reports security status across systems |
| {{org:privacy-official}} | Sets privacy monitoring requirements; reports privacy status across systems |
| {{org:system-owner}} | Owns Part B for the system; collects and analyzes its data; acts on results; reports its status |
| Authorizing official | Receives status reports; accepts or rejects risk; decides on ongoing authorization and reauthorization |
| Independent assessors | Carry out the ongoing control assessments (CA-7(1)) |
| {{org:security-operations}} | Operates the automated monitoring tools and feeds their data into this program |
| Common control providers | Monitor and report on the common controls they provide, on the same schedule |

## Part A. Organization-wide strategy

### 3. Organization-wide metrics and frequencies

The organization-wide continuous monitoring programs:

- monitor these organization-wide metrics: {{param:pm-31_odp.01}} (PM-31a);
- monitor control effectiveness {{param:pm-31_odp.02}} (PM-31b);
- assess control effectiveness {{param:pm-31_odp.03}} (PM-31b);
- report the security status of organizational systems to {{param:pm-31_odp.04}} {{param:pm-31_odp.06}}, and the privacy status to {{param:pm-31_odp.05}} {{param:pm-31_odp.07}} (PM-31f).

| Metric | How it is calculated | Data source | Monitoring frequency | Threshold for escalation | Reported to |
| --- | --- | --- | --- | --- | --- |
| {{fill:for example systems with a current authorization}} | {{fill:for example authorized systems divided by systems in the inventory}} | {{fill:for example the system inventory}} | {{fill:frequency}} | {{fill:for example any system operating past its termination date}} | {{fill:roles}} |

### 4. Minimum monitoring and assessment frequencies

Every system meets at least these frequencies. A system owner may set higher frequencies in Part B.

| Area | Example controls | Monitoring method | Minimum monitoring frequency | Minimum assessment frequency |
| --- | --- | --- | --- | --- |
| Vulnerability and patch management | RA-5, SI-2 | {{fill:automated scanning}} | {{fill:frequency}} | {{fill:frequency}} |
| Configuration management | CM-2, CM-6, CM-8 | {{fill:automated compliance scanning and inventory}} | {{fill:frequency}} | {{fill:frequency}} |
| Accounts and access | AC-2, AC-6, IA-2 | {{fill:automated account reports and access reviews}} | {{fill:frequency}} | {{fill:frequency}} |
| Event and incident management | AU-6, SI-4, IR-4 | {{fill:security monitoring tools}} | {{fill:frequency}} | {{fill:frequency}} |
| Controls that change rarely, such as policies, plans and physical protection | PL-2, CP-2, PE-3, -1 controls | {{fill:manual assessment}} | {{fill:frequency}} | {{fill:frequency}} |

:::guidance
SP 800-137 lists what to weigh when setting a frequency: how often the control is likely to change (volatility), the system's impact level, whether the control provides a critical function, known weaknesses in it, the organization's risk tolerance, current threat and vulnerability information, risk assessment results, the output of strategy reviews, and reporting requirements. Configuration management controls are its example of volatile controls that need frequent, preferably automated, monitoring. A common starting point: continuous automated monitoring wherever a tool can measure the control, monthly for vulnerability, configuration and account data, and a third of the remaining controls assessed each year.
:::

### 5. Technical architecture

| Security automation domain | Tool or data source | Systems covered | Where the data goes |
| --- | --- | --- | --- |
| {{fill:for example vulnerability management, patch management, event management, incident management, malware detection, asset management, configuration management, network management, license management, information management, software assurance}} | {{fill:tool}} | {{fill:systems}} | {{fill:for example the monitoring dashboard or GRC tool}} |

:::guidance
The eleven domains in the first column are the security automation domains in SP 800-137 Appendix D. List only the ones you monitor. Data collected once by an organization-wide tool can serve every system's Part B, so each system does not need its own scanner.
:::

## Part B. System-level strategy

This part applies to {{fill:system name and identifier}} and follows Part A. {{fill:any organization-wide frequency this system exceeds, and why, for example more frequent scanning of public-facing components}}

### 6. System-level metrics

The system-level metrics monitored are {{param:ca-07_odp.01}} (CA-7a).

| Metric | How it is calculated | Data source | Threshold for action |
| --- | --- | --- | --- |
| {{fill:for example open vulnerabilities by severity and age}} | {{fill:calculation}} | {{fill:source}} | {{fill:for example any critical vulnerability past its remediation time}} |

### 7. Monitoring and assessment frequencies

Control effectiveness is monitored {{param:ca-07_odp.02}}, and assessed at {{param:ca-07_odp.03}} (CA-7b). Ongoing assessments follow this schedule (CA-7c), and together make up the system's control assessment, which CA-2d requires {{param:ca-02_odp.01}}.

| Control or group | Implementation (system-specific, hybrid or inherited) | How monitored | Monitoring frequency | Assessment year (1, 2 or 3) | Assessor |
| --- | --- | --- | --- | --- | --- |
| {{fill:control or group}} | {{fill:implementation}} | {{fill:automated tool, or manual assessment}} | {{fill:frequency}} | {{fill:year}} | {{fill:assessor}} |

:::guidance
Assessing a third of the controls each year means every control is assessed at least once in a three-year authorization period. Put volatile and critical controls, and any with open weaknesses, in every year's set. Inherited controls are assessed by their provider; list them with the provider as the assessor, so the table covers every control.
:::

### 8. Independent assessment

The ongoing assessments are carried out by {{fill:the assessor or team, for example the security office's continuous monitoring team or the third-party assessor that performs the yearly assessment}}, who meet the independence the authorizing official set for the system under CA-2(1) (CA-7(1)). Data from the system's own tools may be used, but the system's administrators do not assess the results.

### 9. Risk monitoring

Risk monitoring is part of this strategy, informed by the organization's risk tolerance (CA-7(4)).

| Type | What is monitored | Sources | Frequency |
| --- | --- | --- | --- |
| Effectiveness monitoring (CA-7(4)(a)) | Whether the risk responses in place remain effective | {{fill:for example control assessment results, incident trends}} | {{fill:frequency}} |
| Compliance monitoring (CA-7(4)(b)) | Whether required risk responses are implemented and requirements are met | {{fill:for example configuration compliance scans, plan of action and milestones status}} | {{fill:frequency}} |
| Change monitoring (CA-7(4)(c)) | Changes to the system and its environment that may affect risk | {{fill:for example change requests and security impact analyses (CM-3, CM-4), the component inventory (CM-8), threat intelligence}} | {{fill:frequency}} |

## Carrying out the strategy

### 10. Analysis and reporting

The {{org:system-owner}} correlates and analyzes the information that control assessments and monitoring produce (CA-7e), and reports:

| Report | Content | Recipient | Frequency |
| --- | --- | --- | --- |
| System metrics | The section 6 metrics against their thresholds, and new weaknesses | {{org:system-owner}} | Monthly |
| System security status | Metrics, trends, assessment results, open and past-due plan of action and milestones items, significant changes | {{param:ca-07_odp.04}} | {{param:ca-07_odp.05}} (CA-7g) |
| System privacy status | Privacy control results and privacy risks | {{param:ca-07_odp.06}} | {{param:ca-07_odp.07}} (CA-7g) |
| Organization-wide status | The section 3 metrics across all systems, and common weaknesses | Part A recipients | Part A frequencies (PM-31f) |

### 11. Response

- The {{org:system-owner}} takes response actions on the results of the analysis (CA-7f): correcting the weakness, adding or changing controls, changing monitoring frequencies, or asking for more analysis.
- Each weakness found is recorded in the [plan of action and milestones](/templates/forms/plan-of-action-and-milestones/), which is updated {{param:ca-05_odp}} (CA-5b).
- A risk above the organization's tolerance is raised with the authorizing official within {{fill:time allowed to raise it}}, who decides whether to accept, mitigate, share or avoid it (RA-7).
- The {{org:ciso}} reviews the plans of action and milestones across systems for common weaknesses and adjusts common controls or this strategy to address them.

### 12. Ongoing authorization and reauthorization

The authorization is updated {{param:ca-06_odp}} (CA-6e).

A system moves to ongoing authorization only when both conditions are met and the authorizing official formally approves the transition: it holds an initial authorization to operate, and this strategy monitors all of its implemented security and privacy controls at the frequencies set here. Until then, the system keeps a specific authorization termination date.

Under ongoing authorization, the authorizing official reviews the system's status and decides whether its risk remains acceptable {{fill:the time-driven review frequency, for example at each quarterly status report}}. These events trigger an unscheduled review, and possibly reauthorization:

| Trigger event | Action |
| --- | --- |
| A significant change: one likely to affect the security or privacy state of the system, such as a new hosting environment or a major architecture change | Security impact analysis (CM-4); targeted assessment of the affected controls; authorizing official decides whether to reauthorize |
| A metric beyond its escalation threshold for {{fill:how long}} | Report to the authorizing official; risk response |
| A significant incident or breach involving the system | Post-incident review; targeted reassessment |
| New threat or vulnerability information that affects the system | Risk assessment update (RA-3); response |
| Assessment results showing risk above tolerance | Authorizing official decides on risk response or reauthorization |
| A change of authorizing official | New authorizing official reviews the authorization and accepts it or starts a reauthorization |
| {{fill:other organization-defined events}} | {{fill:action}} |

### 13. Review and update

The owner of each part reviews and updates it at least annually, when the system changes significantly, and when the organization-wide strategy changes (CA-7). The review checks whether the metrics are still relevant and correct, whether the frequencies still match the risk, and what trends in the data suggest, for example monitoring less often where results are stable, or more often where anomalies increase.

| Date | Version | Change or review | By |
| --- | --- | --- | --- |
| {{fill:date}} | {{fill:version}} | {{fill:description}} | {{fill:name and title}} |

:::federal
[OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.d(5) to (8), requires agencies to develop and maintain an information security continuous monitoring (ISCM) strategy, update it at an agency-defined frequency, ensure all selected and implemented controls are addressed in it and effectively monitored on an ongoing basis, and keep an ISCM program with metrics that show security status and trends at every risk management tier. Section 4.d(9) adds a privacy continuous monitoring (PCM) strategy, and footnote 85 allows the two to be combined. Section 5.e says the strategies define the controls selected for assessment in each one-year period, the "annual assessment window", so not every control need be assessed every year, and that assessment frequencies are set in accordance with NIST SP 800-137. Section 5.h sets the two conditions for ongoing authorization described in section 12 and requires a process in which the authorizing official formally acknowledges the transition; until then, systems keep specific termination dates. Section 5.i says that under ongoing authorization, reauthorization is typically event-driven, in response to an event or significant change that raises risk above the agency's tolerance, and may be a complete or a targeted review. As of September 2026.

- The {{org:ciso}} shall maintain this strategy as the agency ISCM strategy and, with the {{org:privacy-official}}, as the PCM strategy, or state where the separate PCM strategy is kept, as OMB Circular A-130, Appendix I, section 4.d(5) to (9), requires. (PM-31)
- The {{org:system-owner}} shall ensure every control selected and implemented for the system is addressed in Part B and monitored on an ongoing basis, as section 4.d(7) requires. (CA-7)
- The {{org:system-owner}} shall move the system to ongoing authorization only with the authorizing official's formal, recorded approval, after both conditions of OMB Circular A-130, Appendix I, section 5.h, are met. (CA-6e)

:::

## 14. Approval

| Name | Title | Signature | Date |
| --- | --- | --- | --- |
| {{fill:name}} | {{org:ciso}} (Part A) | | {{fill:date}} |
| {{fill:name}} | {{org:system-owner}} (Part B) | | {{fill:date}} |
| {{fill:name}} | Authorizing official (Part B) | | {{fill:date}} |
