---
title: 'IR-5 Incident Monitoring'
description: 'NIST SP 800-53 Rev. 5 control IR-5, Incident Monitoring: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'IR-5 Incident Monitoring'
  order: 5
control:
  id: IR-5
  family: IR
  baselines: [Low, Moderate, High, Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | 1 (1 in a baseline) |

**Related controls:** [AU-6](/controls/au/au-6/), [AU-7](/controls/au/au-7/), [IR-4](/controls/ir/ir-4/), [IR-6](/controls/ir/ir-6/), [IR-8](/controls/ir/ir-8/), [PE-6](/controls/pe/pe-6/), [PM-5](/controls/pm/pm-5/), [SC-5](/controls/sc/sc-5/), [SC-7](/controls/sc/sc-7/), [SI-3](/controls/si/si-3/), [SI-4](/controls/si/si-4/), [SI-7](/controls/si/si-7/)

## Control statement

Track and document incidents.

<details>
<summary>NIST discussion</summary>

Documenting incidents includes maintaining records about each incident, the status of the incident, and other pertinent information necessary for forensics as well as evaluating incident details, trends, and handling. Incident information can be obtained from a variety of sources, including network monitoring, incident reports, incident response teams, user complaints, supply chain partners, audit monitoring, physical access monitoring, and user and administrator reports. IR-4 provides information on the types of incidents that are appropriate for monitoring.

</details>

## Control enhancements

<a id="ir-5.1"></a>

### IR-5(1) Automated Tracking, Data Collection, and Analysis

*Baselines: High*

Track incidents and collect and analyze incident information using [Assignment: organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for IR-5(1)</summary>

Automated mechanisms for tracking incidents and collecting and analyzing incident information include Computer Incident Response Centers or other electronic databases of incidents and network monitoring devices.

Determine if:

- **IR-05(01)[01]** incidents are tracked using [Assignment: organization-defined automated mechanisms];
- **IR-05(01)[02]** incident information is collected using [Assignment: organization-defined automated mechanisms];
- **IR-05(01)[03]** incident information is analyzed using [Assignment: organization-defined automated mechanisms].

**Examine:** Incident response policy; procedures addressing incident monitoring; incident response records and documentation; system security plan; incident response plan; other relevant documents or records.

**Interview:** Organizational personnel with incident monitoring responsibilities; organizational personnel with information security responsibilities.

**Test:** Incident monitoring capability for the organization; automated mechanisms supporting and/or implementing the tracking and documenting of system security incidents.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for IR-5</summary>

Determine if:

- **IR-05[01]** incidents are tracked;
- **IR-05[02]** incidents are documented.

**Examine:** Incident response policy; procedures addressing incident monitoring; incident response records and documentation; incident response plan; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with incident monitoring responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Incident monitoring capability for the organization; mechanisms supporting and/or implementing the tracking and documenting of system security incidents.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

IR-5 asks you to track and document every incident. NIST's IR-5 discussion says that means keeping records about each incident, its status, and the other information needed for forensics and for evaluating incident details, trends and handling. Incidents come from many sources: network monitoring, incident reports, user complaints, supply chain partners, audit and physical access monitoring, and user and administrator reports. IR-5 is in the Low, Moderate, High and Privacy baselines.

[NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final) (April 2025; current as of October 2026) recommends, in its Incident Management (RS.MA) rows, tracking each incident's status with an incident summary, the indicators of compromise, the status and expected time frame of each assigned action, and next steps. Its Incident Analysis (RS.AN) rows add that actions taken during an investigation are recorded, and that incident records are protected so only authorized personnel can see them, since they hold data on exploited weaknesses and on people.

**Common implementations.** One incident record per incident, opened when the incident response team declares it, as section 6 of the [Incident Response Plan](/templates/plans/incident-response-plan/) describes. The record lives in a case management system or ticketing queue that only the team and named staff can read, separate from the general service desk queue. Typical fields:

- Identifier, title, type and severity, and the systems and data affected
- How it was reported or detected, by whom, and when it was discovered, reported and declared
- A time-stamped log of actions, decisions and who made them
- Evidence collected and where it is kept
- Notifications made under IR-6, to whom and when
- Root cause, closure date and lessons-learned actions (IR-4c)

An incident report form is planned for this kit, for the first report that opens a record. Trend reports from the records (incidents by type, severity and time to contain) feed the plan's metrics (IR-8a.6) and the risk assessment.

**Organization-defined parameters.** IR-5 has none. In the policy, the incident response team tracks and documents incidents. The High enhancement IR-5(1) adds a parameter for its automated mechanisms.

**Evidence assessors ask for.**

- The incident tracking system or log, and a list of incidents for the assessment period
- A sample of incident records, drawn by the assessor, showing status, actions, notifications and closure
- The access list for the tracking system
- A trend report or metrics produced from the records

**Inheritance.** Incident tracking is usually a common control, provided by the incident response team or security operations center for every system. The system owner makes sure incidents found by the system's own staff or tools reach the team and are recorded, not handled informally. Record the split in the [system security plan](/templates/plans/system-security-plan/).

**Common findings.**

- Incidents handled through email threads or chat, with no record to show the assessor.
- Records with no time stamps, so nobody can tell whether reporting deadlines were met.
- Records closed with no root cause or lessons learned.
- Incident records in the general service desk queue, readable by everyone who works it.

**Enhancements in the Moderate baseline.** None. High adds [IR-5(1)](#ir-5.1) automated tracking, data collection and analysis.

**Federal systems** (as of October 2026). The [CISA Federal Incident Notification Guidelines](https://www.cisa.gov/federal-incident-notification-guidelines) (effective April 1, 2017) list the information agencies must give CISA: functional impact, information impact, recoverability, when the activity was first detected, the number of systems, records and users affected, the network location, and a point of contact. Build those fields into the incident record so the one-hour report on the [IR-6](/controls/ir/ir-6/) page can be filed from it.
