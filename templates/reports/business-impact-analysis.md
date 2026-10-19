---
title: Business Impact Analysis
type: report
description: The analysis of a system's disruption impact on the processes it supports, setting the recovery objectives and priorities the contingency plan uses, following NIST SP 800-34 Rev. 1.
controls: [cp-2, cp-2.3, cp-2.8]
status: draft
stage: core
role: system-owner
typical:
  cp-02.03_odp.01: essential
  cp-02.08_odp: essential
---

:::guidance
The business impact analysis (BIA) connects a system to the business: which processes depend on it, how long they can do without it, and how much data they can afford to lose. This template follows the sample BIA in Appendix B of [NIST SP 800-34 Rev. 1](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final) (current as of September 2026) and its three steps: determine mission and business processes and recovery criticality, identify resource requirements, and identify recovery priorities for system resources. Do it with the business owners; the recovery times are their decision, not the IT team's. The results go into the [contingency plan](/templates/plans/contingency-plan/).
:::

| System name | System identifier | Prepared by | Date |
| --- | --- | --- | --- |
| {{fill:system name}} | {{fill:unique system identifier}} | {{fill:names and titles}} | {{fill:date}} |

## 1. Overview

This analysis identifies the mission and business processes {{fill:system name}} supports, the impact of a disruption to them, and the system's recovery objectives and priorities (CP-2a.1, CP-2a.2).

## 2. System description

{{fill:a short description of the system, its purpose, where it runs and its main components, or a reference to the system security plan}}

## 3. Determine process and system criticality

### 3.1 Mission and business processes

| Mission or business process | Description | Process owner |
| --- | --- | --- |
| {{fill:process}} | {{fill:description}} | {{fill:owner}} |

### 3.2 Outage impacts

Rate the impact of an outage on each process in each category the organization uses, for example with the impact levels of the security categorization.

| Process | {{fill:impact category, for example operations}} | {{fill:impact category, for example finances}} | {{fill:impact category, for example individuals}} | {{fill:impact category, for example legal or regulatory}} | Overall impact |
| --- | --- | --- | --- | --- | --- |
| {{fill:process}} | {{fill:impact}} | {{fill:impact}} | {{fill:impact}} | {{fill:impact}} | {{fill:impact}} |

### 3.3 Estimated downtime

- **Maximum tolerable downtime (MTD):** "the total amount of time leaders/managers are willing to accept for a mission/business process outage or disruption and includes all impact considerations" (SP 800-34 Rev. 1).
- **Recovery time objective (RTO):** "the maximum amount of time that a system resource can remain unavailable before there is an unacceptable impact on other system resources, supported mission/business processes, and the MTD."
- **Recovery point objective (RPO):** "the point in time, prior to a disruption or system outage, to which mission/business process data must be recovered (given the most recent backup copy of the data) after an outage."

| Process | Essential? | MTD | RTO | RPO |
| --- | --- | --- | --- | --- |
| {{fill:process}} | {{fill:yes or no}} | {{fill:time}} | {{fill:time}} | {{fill:time}} |

The RTO must be shorter than the MTD, leaving time to validate the recovered system. Backups must be frequent enough to meet the RPO (CP-9).

## 4. Identify resource requirements

List the resources the system needs to run its processes: hardware, software, cloud services, data, facilities, connections and people. Mark the critical assets that support {{param:cp-02.08_odp}} mission and business functions (CP-2(8)).

| System resource or component | Platform, operating system and version | Description | Critical asset? |
| --- | --- | --- | --- |
| {{fill:resource or component}} | {{fill:platform}} | {{fill:description}} | {{fill:yes or no}} |

## 5. Identify recovery priorities for system resources

Recovery priorities follow from the processes' outage impacts and RTOs. The plan resumes {{param:cp-02.03_odp.01}} mission and business functions first (CP-2(3)).

| Priority | System resource or component | Recovery time objective |
| --- | --- | --- |
| 1 | {{fill:resource}} | {{fill:time}} |
| 2 | {{fill:resource}} | {{fill:time}} |

## 6. Approval

The business or process owner and the {{org:system-owner}} approve this analysis. Each approval, review and change is recorded under Approval and version history at the end of this analysis.

Review this analysis with the contingency plan, and whenever the processes the system supports, or their priorities, change.

## Approval and version history

{{org:name}} records here the approval of each version of this document and each review of it, including a review that changes nothing. This is the record of the approval, review and update that SP 800-53 Rev. 5 asks for: item c of each family's -1 control for policies and procedures (for example AC-1c), PM-1a.4 and PM-1b for the information security program plan, and PL-2a.15, PL-2c and PL-2d for system plans.

:::guidance
Assessors ask for evidence that a document was approved, and that it was reviewed and updated on its cycle and after the events its review section names. This section is that evidence. It is the same in every template in the kit, so the records read alike across the program. Between them, the two tables hold what [NIST SP 800-18 Rev. 2](https://csrc.nist.gov/pubs/sp/800/18/r2/final) (June 2026, section 3.2) says system plan approval, review records and change records include: the approvers' full names, roles, organizational titles, signatures and signature dates; who reviewed the plan, when, and the outcome; and for each change, its date, revision, who made it, the sections affected and what changed. Add a version history row for every review, including one that changes nothing: keep the version number, write "Reviewed, no change", and say what prompted the review, the scheduled cycle or an event. SP 800-18 Rev. 2 notes that document management systems can capture the signatures electronically; an approval recorded that way can stand in for the Signature column.
:::

### Approval

| Version | Name, role and title | Signature | Date |
| --- | --- | --- | --- |
|  |  |  |  |

### Version history

| Version and date | Review or change (what, where and why) | By (name and role) | Approved by |
| --- | --- | --- | --- |
|  |  |  |  |
