---
title: Log Review Procedure
type: procedure
description: The steps, by role, for reviewing and analyzing audit records, correlating them across systems, reporting findings and handing suspected incidents to the incident response team, with the inputs, outputs and record each step leaves, that carry out the audit and accountability policy's review requirements (SP 800-53 AU-6) and its reduction and reporting capability (AU-7).
controls: [au-6, au-6.1, au-6.3, au-6.5, au-6.6, au-7, au-7.1]
status: draft
stage: core
typical:
  au-06_odp.01: 'continuously through automated alerting, with a documented manual review at least weekly'
  au-06_odp.02: 'the activity listed in the log review procedure, such as repeated failed logons, privilege escalation and access outside normal patterns'
  au-06_odp.03: the system owner and the incident response team
  au-06.01_odp: a security information and event management (SIEM) platform
  au-06.05_odp.01: vulnerability scanning information and system monitoring information
  au-07.01_odp: 'event type, time, source and destination, user identity, outcome and system component'
---

:::guidance
The Audit and Accountability policy's AU-6 statements say audit records are reviewed, findings reported and the review stepped up when risk changes; this procedure says how, step by step, and section 3 is the list of inappropriate or unusual activity that the AU-6 clause's typical value points to. Its typical values are copied from the AU-6, AU-6(1), AU-6(5) and AU-7(1) clauses; keep them in step. Most AU-6 findings are about evidence, not effort: the review happened but left no record, so every step here names the record it leaves. Which events are logged, and how records are collected and kept, is in the [audit logging standard](/templates/standards/audit-logging-standard/); detections, alert severities and triage times are in the [system monitoring standard](/templates/standards/system-monitoring-standard/), which this procedure follows for alerts. The steps draw on [NIST SP 800-92](https://csrc.nist.gov/pubs/sp/800/92/final), Guide to Computer Security Log Management (September 2006), section 5.2 (analyzing log data) and section 5.3 (responding to identified events). One procedure can serve every system that sends its logs to the central log platform; a system whose logs stay local adds the system-level review in 5.3.
:::

| Owner | Approved by | Version | Effective date |
| --- | --- | --- | --- |
| {{org:ciso}} | {{fill:name and title}} | {{fill:version}} | {{fill:date}} |

## 1. Purpose and scope

This procedure carries out the audit record review, analysis and reporting requirements of the {{org:name}} Audit and Accountability Policy (AU-6). It applies to the audit records of every system in the system inventory, whether they are on the central log platform or kept on the system.

Audit records are reviewed and analyzed {{param:au-06_odp.01}}, for indications of {{param:au-06_odp.02}} and its potential impact (AU-6a). Review, analysis and reporting are integrated using {{param:au-06.01_odp}} (AU-6(1)), and findings are reported to {{param:au-06_odp.03}} (AU-6b).

## 2. Roles

| Role | Responsibilities in this procedure |
| --- | --- |
| {{org:security-operations}} | Runs the reviews, triages alerts, correlates records across systems, reports findings, and refers suspected incidents |
| {{fill:security operations lead}} | Assigns reviews, checks review records, signs off the monthly summary, and decides when the review level changes |
| {{org:system-owner}} | Explains activity on the system, confirms whether it was authorized, fixes what the review finds, and makes sure system-level reviews happen |
| System administrators | Review the logs that stay on the system (5.3), and provide context on activity |
| {{org:incident-response-team}} | Takes suspected incidents referred under 5.5 and handles them under the incident response plan |
| {{org:privacy-official}} | Receives findings that involve personally identifiable information |
| {{org:facilities-manager}} | Provides physical access records for correlation (High systems, 5.7) |
| {{org:ciso}} | Owns this procedure, and receives the monthly summary |

## 3. Inappropriate or unusual activity

The review looks for the activity in this table. Each row has a saved search, report or detection rule on the central log platform, named in the last column.

| # | Activity | Where it shows | Compared with | Saved search or rule |
| --- | --- | --- | --- | --- |
| 1 | Repeated failed logons on one account, or failures spread across many accounts from one source | Authentication records | Normal failure rates | {{fill:name}} |
| 2 | A successful logon after repeated failures, or from an unusual location, device or time | Authentication records | The user's usual pattern | {{fill:name}} |
| 3 | Accounts created, enabled or given privileges | Account management and privilege records | Approved [access requests](/templates/forms/access-request-form/) | {{fill:name}} |
| 4 | Use of privileged functions, emergency accounts, or dormant accounts; interactive use of service accounts | Privilege and authentication records | Approved change windows; emergency account use under the account management procedure | {{fill:name}} |
| 5 | Configuration changes and software installed outside approved change requests | Configuration and software records | Approved [change requests](/templates/forms/change-request-form/) | {{fill:name}} |
| 6 | Logging stopped, changed or cleared; a log source gone silent; security tools disabled | Logging and security tool records; log source health report | The log sources expected from the component inventory | {{fill:name}} |
| 7 | Access to audit records, key stores or secrets by anyone outside the roles allowed | Security-relevant object records | The roles in the audit logging standard, section 9 | {{fill:name}} |
| 8 | Bulk access, export or deletion of sensitive information | Sensitive information and application records | The user's role and usual volume | {{fill:name}} |
| 9 | Connections to known malicious addresses or domains, unusual outbound volumes, or new external destinations | Network records | Threat intelligence indicators; normal traffic | {{fill:name}} |
| 10 | Repeated authorization failures or input validation failures in an application | Application records | Normal error rates | {{fill:name}} |
| 11 | Changes to cloud resources, identity settings or audit settings in the management console or programming interfaces | Cloud management records | Approved change requests | {{fill:name}} |
| 12 | Log entries of a type not seen before, or not yet understood | All sources | The record of entry types already reviewed | {{fill:name}} |
| 13 | {{fill:other activity the organization or system owner adds}} | {{fill:source}} | {{fill:baseline}} | {{fill:name}} |

:::guidance
NIST's AU-6 discussion says review covers logging from monitoring account usage, remote access, wireless connectivity, mobile device connection, configuration settings, system component inventory, maintenance tools and non-local maintenance, physical access, temperature and humidity, equipment delivery and removal, communications at system interfaces, and use of mobile code or Voice over Internet Protocol; add rows for any your systems log. SP 800-92 section 5.2.1 says the key to analysis is understanding typical activity, which comes from reviewing portions of the logs regularly, and suggests two reports: one for the entries thought most important, and one for entries not yet understood (row 12), so the baseline of normal activity grows. Section 5.2.2 suggests setting your own priorities from the entry type, whether it is new, the log source, the addresses involved, the time of day and the frequency.
:::

## 4. Reduction and reporting capability

The central log platform provides the audit record reduction and report generation capability, so that reviews and investigations can run on demand (AU-7a). It is set up as follows:

- Records can be processed, sorted and searched for events of interest based on {{param:au-07.01_odp}} (AU-7(1)).
- Saved searches, reports and dashboards for each row in section 3 run on demand and on the schedule in section 5.
- Reduction, filtering and reports work on copies or views of the records. The original records keep their content and time order, and filtered-out entries stay available (AU-7b).

| Capability | Tool | Owner | Last checked |
| --- | --- | --- | --- |
| Search by the fields in AU-7(1) | {{fill:for example the SIEM platform}} | {{fill:role}} | {{fill:date}} |
| Saved searches and reports for section 3 | {{fill:tool}} | {{fill:role}} | {{fill:date}} |
| Restoring archived records for search | {{fill:tool}} | {{fill:role}} | {{fill:date}} |

## 5. Procedures

Each step names the role that performs it, what it starts from, what it produces, and the record it leaves. The records are the evidence an assessor samples.

### 5.1 Triage automated alerts

| # | Role | Action | Inputs | Outputs | Record |
| --- | --- | --- | --- | --- | --- |
| 1 | {{org:security-operations}} | Watch the alert queue on {{param:au-06.01_odp}}, which runs the detection rules for section 3 continuously (AU-6(1)) | Alerts | Alerts picked up within the triage times of section 6 of the system monitoring standard | Alert record, with the time it was picked up |
| 2 | {{org:security-operations}} | Add context: the asset and its owner, the user and their role, related alerts, approved access requests and change requests, and recent vulnerability findings | Alert; inventories; tickets | Alert with context | Notes on the alert |
| 3 | {{org:security-operations}} | Decide the outcome: false positive, benign and authorized, or a suspected incident; ask the {{org:system-owner}} to confirm whether the activity was authorized when it cannot be told from the records | Alert with context; system owner's answer | Outcome | Outcome and a short note of what was checked, on the alert |
| 4 | {{org:security-operations}} | Refer suspected incidents through 5.5; send other findings to the {{org:system-owner}} through 5.4; record tuning needed for false positives | Outcome | Referral, finding or tuning request | Ticket or incident reference on the alert |

### 5.2 Weekly manual review

| # | Role | Action | Inputs | Outputs | Record |
| --- | --- | --- | --- | --- | --- |
| 1 | {{fill:security operations lead}} | Assign the review for the week, and name the systems in scope | Schedule | Assigned reviewer | Review record opened, with the period covered |
| 2 | {{org:security-operations}} | Check log source health: every source expected from the component inventory is reporting, and gaps since the last review are explained (AU-5) | Log source health report; component inventory | Silent or failed sources listed | Health report attached to the review record |
| 3 | {{org:security-operations}} | Run the saved searches for each row in section 3 over the period, and look at what the automated rules do not alert on (AU-6a) | Saved searches | Entries needing a closer look | List of searches run and result counts |
| 4 | {{org:security-operations}} | Compare account, privilege and configuration changes with approved access requests and change requests; any change with no approval is a finding | Rows 3, 4, 5 and 11 results; tickets | Unapproved changes listed | Comparison, on the review record |
| 5 | {{org:security-operations}} | Review entries not yet understood (row 12), find out what they mean, and add them to the baseline or to a detection rule | Row 12 results | Baseline or rules updated | Note of the entry types reviewed |
| 6 | {{org:security-operations}} | Analyze the potential impact of each indication found, and decide the outcome as in 5.1 step 3 (AU-6a) | Entries needing a closer look | Findings, referrals, or nothing found | Each finding with its outcome |
| 7 | {{org:security-operations}} | Close the review: report findings through 5.4 and 5.5, and sign the record | Findings | Signed review record | Review record, with the reviewer, date, period, systems, searches run, findings and to whom each was reported |
| 8 | {{fill:security operations lead}} | Check a sample of review records each month for completeness | Review records | Gaps fixed | Initials and date on the records checked |

### 5.3 System-level review of logs that stay on the system

Some records cannot reach the central log platform, such as those of standalone systems, appliances with unusual formats, or entries that only make sense with context on the system. The audit logging standard's Part B lists them.

| # | Role | Action | Inputs | Outputs | Record |
| --- | --- | --- | --- | --- | --- |
| 1 | System administrators | Review the local logs listed in Part B at least as often as the weekly review, for the activity in section 3 | Local logs | Findings, or nothing found | System-level review record, with the date, logs reviewed and result |
| 2 | System administrators | Send the review record and any findings to the {{org:security-operations}}, so they can look for the same activity on other systems | Review record | Record received | Review record filed with the weekly review |

### 5.4 Report findings

| # | Role | Action | Inputs | Outputs | Record |
| --- | --- | --- | --- | --- | --- |
| 1 | {{org:security-operations}} | Report each finding that is not a suspected incident to {{param:au-06_odp.03}}, with what was found, its potential impact, and what is asked of them (AU-6b) | Finding | Ticket assigned to the system owner | Ticket, dated |
| 2 | {{org:security-operations}} | Report findings that involve personally identifiable information to the {{org:privacy-official}} as well | Finding | Notice | Ticket, with the privacy official added |
| 3 | {{org:system-owner}} | Fix the cause, such as removing an unapproved account or reversing an unapproved change, and confirm it in the ticket | Ticket | Cause fixed | Ticket closed, with the action taken |
| 4 | {{org:system-owner}} | Enter in the [plan of action and milestones](/templates/forms/plan-of-action-and-milestones/) any finding that shows a control weakness and cannot be fixed at once | Finding | Plan of action and milestones item | Item ID on the ticket |

### 5.5 Refer suspected incidents

| # | Role | Action | Inputs | Outputs | Record |
| --- | --- | --- | --- | --- | --- |
| 1 | {{org:security-operations}} | Refer the suspected incident to the {{org:incident-response-team}} under the [incident response plan](/templates/plans/incident-response-plan/), with the alert or finding, the records that support it and the systems involved | Suspected incident | Referral | Incident record opened, linked to the alert or review record |
| 2 | {{org:security-operations}} | Preserve the related audit records: export copies with their hashes, and ask {{fill:legal counsel}} for a legal hold where the records may be needed beyond the retention period | Incident record | Preserved records | Export with hashes; legal hold request |
| 3 | {{org:security-operations}} | Increase logging and review for the users, components or activity involved for as long as the investigation needs it, through the change process the audit logging standard sets | Request from the {{org:incident-response-team}} | Logging and review increased | Change record; note on the incident record |
| 4 | {{org:security-operations}} | Run searches across all systems for the same indicators (5.6), and add what is learned to detection rules and section 3 | Indicators from the incident | Other affected systems found, or none | Search results on the incident record |

### 5.6 Correlate across repositories

| # | Role | Action | Inputs | Outputs | Record |
| --- | --- | --- | --- | --- | --- |
| 1 | {{org:security-operations}} | Analyze and correlate audit records across systems and repositories, such as the same source, account or indicator appearing on several systems, to gain organization-wide awareness (AU-6(3)) | Records from every system on the platform; repositories outside it | Correlated findings | Correlation rules list; findings on the review record |
| 2 | {{org:security-operations}} | Where records sit in more than one repository, such as a cloud provider's logs or a separate platform, confirm they can be searched together or are brought together for the review | List of repositories | Gaps listed | Note on the monthly summary |

### 5.7 High systems: integrated analysis and physical access

This section applies to High systems.

| # | Role | Action | Inputs | Outputs | Record |
| --- | --- | --- | --- | --- | --- |
| 1 | {{org:security-operations}} | Integrate analysis of audit records with analysis of {{param:au-06.05_odp.01}}, for example by checking whether an attack recorded in the logs targets a known vulnerability on that component (AU-6(5)) | Audit records; scan results; monitoring alerts | Findings with their vulnerability context | Correlation rule or review note |
| 2 | {{org:security-operations}} | Correlate audit records with physical access monitoring records, such as a logon at a console when the badge records show the person was not in the facility (AU-6(6)) | Audit records; physical access records, such as the [physical access list](/templates/forms/physical-access-list/) and access logs, from the {{org:facilities-manager}} | Findings, or nothing found | Correlation rule or review note |

### 5.8 Change the level of review

| # | Role | Action | Inputs | Outputs | Record |
| --- | --- | --- | --- | --- | --- |
| 1 | {{fill:security operations lead}} | Increase the frequency, scope or depth of review when law enforcement information, intelligence information or other credible sources show a change in risk, such as a threat advisory naming the organization's technology (AU-6c) | Advisory or report | Review increased: more frequent manual reviews, new searches, or more systems in scope | Decision, with the reason, the change made and the end date |
| 2 | {{fill:security operations lead}} | Return the review to its normal level when the risk passes, and record why | Updated information | Normal review | Decision record closed |

### 5.9 Monthly summary

| # | Role | Action | Inputs | Outputs | Record |
| --- | --- | --- | --- | --- | --- |
| 1 | {{org:security-operations}} | Summarize the month: reviews done against the schedule, alerts by outcome, findings by system and status, suspected incidents referred, silent log sources, and changes to searches and rules | Review records; alert records; tickets | Monthly summary | Monthly summary |
| 2 | {{fill:security operations lead}} | Sign off the summary and send it to the {{org:ciso}} and the system owners | Summary | Summary sent | Summary, with the sign-off and distribution |

:::guidance
SP 800-92 section 5.2.3 says system-level administrators usually review the entries that never reach the central infrastructure, and are often asked to report their results so the infrastructure team can see patterns across systems, such as the same attack tried on several hosts, which is 5.3 and 5.6. Section 5.3 says administrators who find a likely incident follow the incident response procedures, should be ready to give incident handlers copies of logs, and may need to change logging during a response, such as collecting more data on an activity; that is 5.5. The monthly summary also serves the system monitoring standard's reporting (SI-4g) and the Continuous Monitoring Strategy's event and incident management row.
:::

:::federal
[OMB M-26-14](https://www.whitehouse.gov/wp-content/uploads/2026/05/M-26-14-Ensuring-Effective-and-Efficient-Agency-Logging-and-Network-Visibility-to-Defend-Against-Evolving-Cyber-Threats.pdf) (May 22, 2026), Appendix B item 5, requires agencies to collect logs that support monitoring for suspicious activity identified by security tooling, monitoring, detecting and hunting for known indicators of compromise and for anomalous system or user activity, and generating automated alerts for these; rows 6, 9 and 12 of section 3, and 5.1, are where this procedure does that. The memo also requires that, in the event of a known or suspected compromise of one or more federal networks, agencies provide logs and other relevant data to CISA and the FBI upon request, to the extent consistent with applicable law, in a format and by means agreed with them, and within the timeframes they request to the greatest extent practicable. When such a request arrives, the {{org:incident-response-team}} handles it under the incident response plan, and the {{org:security-operations}} exports the records as in 5.5 step 2. The memo does not apply to national security systems. As of October 2026.

:::

## 6. Records

| Record | Kept in | Retention |
| --- | --- | --- |
| Alert records, with outcomes | {{fill:for example the SIEM platform or case management tool}} | {{fill:for example 3 years}} |
| Weekly and system-level review records | {{fill:location}} | {{fill:for example 3 years, or at least until the next assessment}} |
| Findings tickets | {{fill:for example the service management tool}} | {{fill:period}} |
| Decisions to change the level of review | {{fill:location}} | {{fill:period}} |
| Monthly summaries | {{fill:location}} | {{fill:period}} |
| The audit records themselves | The central log platform | As the audit logging standard sets (AU-11) |

## 7. Review

The {{org:ciso}} reviews this procedure {{fill:for example annually}}, and after assessment or audit findings, security incidents that the review missed or found late, and changes to the central log platform or the event list.

| Version | Date | Change | Approved by |
| --- | --- | --- | --- |
| {{fill:version}} | {{fill:date}} | {{fill:summary of change}} | {{fill:name and title}} |
