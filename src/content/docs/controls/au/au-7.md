---
title: 'AU-7 Audit Record Reduction and Report Generation'
description: 'NIST SP 800-53 Rev. 5 control AU-7, Audit Record Reduction and Report Generation: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'AU-7 Audit Record Reduction and Report Generation'
  order: 7
control:
  id: AU-7
  family: AU
  baselines: [Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | System | 1 (1 in a baseline) |

**Related controls:** [AC-2](/controls/ac/ac-2/), [AU-2](/controls/au/au-2/), [AU-3](/controls/au/au-3/), [AU-4](/controls/au/au-4/), [AU-5](/controls/au/au-5/), [AU-6](/controls/au/au-6/), [AU-12](/controls/au/au-12/), [AU-16](/controls/au/au-16/), [CM-5](/controls/cm/cm-5/), [IA-5](/controls/ia/ia-5/), [IR-4](/controls/ir/ir-4/), [PM-12](/controls/pm/pm-12/), [SI-4](/controls/si/si-4/)

## Control statement

Provide and implement an audit record reduction and report generation capability that:

- **a.** Supports on-demand audit record review, analysis, and reporting requirements and after-the-fact investigations of incidents; and
- **b.** Does not alter the original content or time ordering of audit records.

<details>
<summary>NIST discussion</summary>

Audit record reduction is a process that manipulates collected audit log information and organizes it into a summary format that is more meaningful to analysts. Audit record reduction and report generation capabilities do not always emanate from the same system or from the same organizational entities that conduct audit logging activities. The audit record reduction capability includes modern data mining techniques with advanced data filters to identify anomalous behavior in audit records. The report generation capability provided by the system can generate customizable reports. Time ordering of audit records can be an issue if the granularity of the timestamp in the record is insufficient.

</details>

## Control enhancements

<a id="au-7.1"></a>

### AU-7(1) Automatic Processing

*Baselines: Moderate, High*

Provide and implement the capability to process, sort, and search audit records for events of interest based on the following content: [Assignment: organization-defined fields within audit records].

<details>
<summary>Discussion and assessment objectives for AU-7(1)</summary>

Events of interest can be identified by the content of audit records, including system resources involved, information objects accessed, identities of individuals, event types, event locations, event dates and times, Internet Protocol addresses involved, or event success or failure. Organizations may define event criteria to any degree of granularity required, such as locations selectable by a general networking location or by specific system component.

Determine if:

- **AU-07(01)[01]** the capability to process, sort, and search audit records for events of interest based on [Assignment: organization-defined fields within audit records] are provided;
- **AU-07(01)[02]** the capability to process, sort, and search audit records for events of interest based on [Assignment: organization-defined fields within audit records] are implemented.

**Examine:** Audit and accountability policy; system security plan; privacy plan; procedures addressing audit reduction and report generation; system design documentation; system configuration settings and associated documentation; audit reduction, review, analysis, and reporting tools; audit record criteria (fields) establishing events of interest; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with audit reduction and report generation responsibilities; organizational personnel with information security and privacy responsibilities; system developers.

**Test:** Audit reduction and report generation capability.

</details>

*Withdrawn enhancements: AU-7(2).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for AU-7</summary>

Determine if:

- **AU-07a.**
  - **AU-07a.[01]** an audit record reduction and report generation capability is provided that supports on-demand audit record review, analysis, and reporting requirements and after-the-fact investigations of incidents;
  - **AU-07a.[02]** an audit record reduction and report generation capability is implemented that supports on-demand audit record review, analysis, and reporting requirements and after-the-fact investigations of incidents;
- **AU-07b.**
  - **AU-07b.[01]** an audit record reduction and report generation capability is provided that does not alter the original content or time ordering of audit records;
  - **AU-07b.[02]** an audit record reduction and report generation capability is implemented that does not alter the original content or time ordering of audit records.

**Examine:** Audit and accountability policy; system security plan; privacy plan; procedures addressing audit reduction and report generation; system design documentation; system configuration settings and associated documentation; audit reduction, review, analysis, and reporting tools; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with audit reduction and report generation responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Audit reduction and report generation capability.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

AU-7 asks for tools that summarize, search and report on audit records, for routine review and for investigating incidents. The same tools must never change the original records or their time order. NIST's AU-7 discussion describes record reduction as organizing collected logs into a summary that analysts can use, and notes that time ordering suffers when time stamps are too coarse.

**Common implementations.** The search, dashboards and scheduled reports of the central log platform or SIEM, which [AU-6](/controls/au/au-6/) review uses. The platform keeps each raw event as received and adds parsed fields alongside it, so summaries and reports run on the parsed fields while the original stays intact. Analysts work on search results or exports, never on the stored records. Each record keeps its own event time as well as the time the platform received it.

**Organization-defined parameters.** AU-7 has none. Typical value for its Moderate enhancement, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Fields that can be processed, sorted and searched (AU-7(1)) | Event type, time, source and destination, user identity, outcome and system component |

These fields match the content [AU-3](/controls/au/au-3/) requires, so records that meet AU-3 and parse cleanly can be searched on them. In the [Audit and Accountability policy](/templates/policies/au/), the system owner provides the capability, often by inheriting the organization's log platform.

**Evidence assessors ask for.**

- A demonstration: search the system's records by each AU-7(1) field, sort the results and produce a report
- Sample scheduled reports and the review records that used them
- Platform settings that show raw events are kept unchanged, and who can edit or delete stored records
- Records showing both event time and received time

**Inheritance.** The reduction and reporting capability is usually a common control, provided by the central log platform. The system owns sending records that parse into the platform's fields, so AU-7 is often mostly inherited.

**Common findings.**

- Records stored as unparsed text, so they cannot be searched by user or outcome.
- Reports built by exporting logs to spreadsheets and editing them, with no link back to the original records.
- A platform that replaces the event time with the time it received the record, which breaks time order when forwarding is delayed.
- Analysts with rights to edit or delete stored records ([AU-9](/controls/au/au-9/)).

**Enhancements in the Moderate baseline.** [AU-7(1)](#au-7.1) automatic processing, which is also in High. NIST's AU-7(1) discussion lists the content events of interest can be found by: resources involved, information objects accessed, identities, event types, locations, dates and times, IP addresses, and success or failure.
