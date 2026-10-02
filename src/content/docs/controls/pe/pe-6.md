---
title: 'PE-6 Monitoring Physical Access'
description: 'NIST SP 800-53 Rev. 5 control PE-6, Monitoring Physical Access: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PE-6 Monitoring Physical Access'
  order: 6
control:
  id: PE-6
  family: PE
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 4 (2 in a baseline) |

**Related controls:** [AU-2](/controls/au/au-2/), [AU-6](/controls/au/au-6/), [AU-9](/controls/au/au-9/), [AU-12](/controls/au/au-12/), [CA-7](/controls/ca/ca-7/), [CP-10](/controls/cp/cp-10/), [IR-4](/controls/ir/ir-4/), [IR-8](/controls/ir/ir-8/)

## Control statement

- **a.** Monitor physical access to the facility where the system resides to detect and respond to physical security incidents;
- **b.** Review physical access logs [Assignment: organization-defined frequency] and upon occurrence of [Assignment: organization-defined events] ; and
- **c.** Coordinate results of reviews and investigations with the organizational incident response capability.

<details>
<summary>NIST discussion</summary>

Physical access monitoring includes publicly accessible areas within organizational facilities. Examples of physical access monitoring include the employment of guards, video surveillance equipment (i.e., cameras), and sensor devices. Reviewing physical access logs can help identify suspicious activity, anomalous events, or potential threats. The reviews can be supported by audit logging controls, such as AU-2 , if the access logs are part of an automated system. Organizational incident response capabilities include investigations of physical security incidents and responses to the incidents. Incidents include security violations or suspicious physical access activities. Suspicious physical access activities include accesses outside of normal work hours, repeated accesses to areas not normally accessed, accesses for unusual lengths of time, and out-of-sequence accesses.

</details>

## Control enhancements

<a id="pe-6.1"></a>

### PE-6(1) Intrusion Alarms and Surveillance Equipment

*Baselines: Moderate, High*

Monitor physical access to the facility where the system resides using physical intrusion alarms and surveillance equipment.

<details>
<summary>Discussion and assessment objectives for PE-6(1)</summary>

Physical intrusion alarms can be employed to alert security personnel when unauthorized access to the facility is attempted. Alarm systems work in conjunction with physical barriers, physical access control systems, and security guards by triggering a response when these other forms of security have been compromised or breached. Physical intrusion alarms can include different types of sensor devices, such as motion sensors, contact sensors, and broken glass sensors. Surveillance equipment includes video cameras installed at strategic locations throughout the facility.

Determine if:

- **PE-06(01)[01]** physical access to the facility where the system resides is monitored using physical intrusion alarms;
- **PE-06(01)[02]** physical access to the facility where the system resides is monitored using physical surveillance equipment.

**Examine:** Physical and environmental protection policy; procedures addressing physical access monitoring; physical access logs or records; physical access monitoring records; physical access log reviews; system security plan; privacy plan; privacy impact assessment; privacy risk assessment documentation; other relevant documents or records.

**Interview:** Organizational personnel with physical access monitoring responsibilities; organizational personnel with incident response responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for monitoring physical intrusion alarms and surveillance equipment; mechanisms supporting and/or implementing physical access monitoring; mechanisms supporting and/or implementing physical intrusion alarms and surveillance equipment.

</details>

<a id="pe-6.2"></a>

### PE-6(2) Automated Intrusion Recognition and Responses

*Baselines: Not in a baseline*

Recognize [Assignment: organization-defined classes or types of intrusions] and initiate [Assignment: organization-defined response actions] using [Assignment: organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for PE-6(2)</summary>

Response actions can include notifying selected organizational personnel or law enforcement personnel. Automated mechanisms implemented to initiate response actions include system alert notifications, email and text messages, and activating door locking mechanisms. Physical access monitoring can be coordinated with intrusion detection systems and system monitoring capabilities to provide integrated threat coverage for the organization.

Determine if:

- **PE-06(02)[01]** [Assignment: organization-defined classes or types of intrusions] are recognized;
- **PE-06(02)[02]** [Assignment: organization-defined response actions] are initiated using [Assignment: organization-defined automated mechanisms].

**Examine:** Physical and environmental protection policy; procedures addressing physical access monitoring; system design documentation; system configuration settings and associated documentation; system audit records; list of response actions to be initiated when specific classes/types of intrusions are recognized; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with physical access monitoring responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for monitoring physical access; automated mechanisms supporting and/or implementing physical access monitoring; automated mechanisms supporting and/or implementing recognition of classes/types of intrusions and initiation of a response.

</details>

<a id="pe-6.3"></a>

### PE-6(3) Video Surveillance

*Baselines: Not in a baseline*

- **(a)** Employ video surveillance of [Assignment: organization-defined operational areas];
- **(b)** Review video recordings [Assignment: organization-defined frequency] ; and
- **(c)** Retain video recordings for [Assignment: organization-defined time period].

<details>
<summary>Discussion and assessment objectives for PE-6(3)</summary>

Video surveillance focuses on recording activity in specified areas for the purposes of subsequent review, if circumstances so warrant. Video recordings are typically reviewed to detect anomalous events or incidents. Monitoring the surveillance video is not required, although organizations may choose to do so. There may be legal considerations when performing and retaining video surveillance, especially if such surveillance is in a public location.

Determine if:

- **PE-06(03)(a)** video surveillance of [Assignment: organization-defined operational areas] is employed;
- **PE-06(03)(b)** video recordings are reviewed [Assignment: organization-defined frequency];
- **PE-06(03)(c)** video recordings are retained for [Assignment: organization-defined time period].

**Examine:** Physical and environmental protection policy; procedures addressing physical access monitoring; video surveillance equipment used to monitor operational areas; video recordings of operational areas where video surveillance is employed; video surveillance equipment logs or records; system security plan; privacy plan; privacy impact assessment; privacy risk assessment documentation; other relevant documents or records.

**Interview:** Organizational personnel with physical access monitoring responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for monitoring physical access; mechanisms supporting and/or implementing physical access monitoring; mechanisms supporting and/or implementing video surveillance.

</details>

<a id="pe-6.4"></a>

### PE-6(4) Monitoring Physical Access to Systems

*Baselines: High*

Monitor physical access to the system in addition to the physical access monitoring of the facility at [Assignment: organization-defined physical spaces].

<details>
<summary>Discussion and assessment objectives for PE-6(4)</summary>

Monitoring physical access to systems provides additional monitoring for those areas within facilities where there is a concentration of system components, including server rooms, media storage areas, and communications centers. Physical access monitoring can be coordinated with intrusion detection systems and system monitoring capabilities to provide comprehensive and integrated threat coverage for the organization.

Determine if physical access to the system is monitored in addition to the physical access monitoring of the facility at [Assignment: organization-defined physical spaces].

**Examine:** Physical and environmental protection policy; procedures addressing physical access monitoring; physical access control logs or records; physical access control devices; access authorizations; access credentials; list of areas within the facility containing concentrations of system components or system components requiring additional physical access monitoring; system security plan; privacy plan; privacy impact assessment; privacy risk assessment documentation; other relevant documents or records.

**Interview:** Organizational personnel with physical access monitoring responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for monitoring physical access to the system; mechanisms supporting and/or implementing physical access monitoring for facility areas containing system components.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PE-6</summary>

Determine if:

- **PE-06a.** physical access to the facility where the system resides is monitored to detect and respond to physical security incidents;
- **PE-06b.**
  - **PE-06b.[01]** physical access logs are reviewed [Assignment: organization-defined frequency];
  - **PE-06b.[02]** physical access logs are reviewed upon occurrence of [Assignment: organization-defined events];
- **PE-06c.**
  - **PE-06c.[01]** results of reviews are coordinated with organizational incident response capabilities;
  - **PE-06c.[02]** results of investigations are coordinated with organizational incident response capabilities.

**Examine:** Physical and environmental protection policy; procedures addressing physical access monitoring; physical access logs or records; physical access monitoring records; physical access log reviews; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with physical access monitoring responsibilities; organizational personnel with incident response responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for monitoring physical access; mechanisms supporting and/or implementing physical access monitoring; mechanisms supporting and/or implementing the review of physical access logs.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PE-6 asks you to watch physical access, not just control it: monitor the facility to detect and respond to physical security incidents (a), review the physical access logs on a schedule and when something happens (b), and coordinate the results with the incident response capability (c). NIST's PE-6 discussion says monitoring includes publicly accessible areas, and gives guards, video surveillance and sensors as examples. It lists suspicious physical access activity: accesses outside normal work hours, repeated accesses to areas not normally accessed, accesses for unusual lengths of time, and out-of-sequence accesses. Where the access logs are part of an automated system, audit logging controls such as [AU-2](/controls/au/au-2/) support the reviews.

**Common implementations.** Guards or reception staff watch the entrances and camera feeds during business hours, and an alarm monitoring service covers the rest. The physical access control system's reports flag after-hours entries, denied attempts, doors forced or held open, and badges used at doors their holders rarely use; the facilities manager reviews them each month and records the review. Many organizations also send the access control system's events to the security operations team's log platform, where they can be correlated with logons and VPN sessions ([AU-6](/controls/au/au-6/)). A suspected physical security incident, such as a forced door, a stolen laptop or an unknown person in a server room, is reported and handled under the [incident response plan](/templates/plans/incident-response-plan/) ([IR-6](/controls/ir/ir-6/)).

**Organization-defined parameters.** Typical values, from the [Physical and Environmental Protection policy](/templates/policies/pe/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Log review frequency (b) | At least monthly |
| Events that trigger a log review (b) | A physical security incident or alarm, a lost or stolen badge or key, reported tailgating, access attempts outside normal working hours, and a request from the incident response team |

The policy has each review look for the four kinds of suspicious activity in NIST's discussion and be recorded with its date, the reviewer, the period covered and the anomalies found, and has the facilities manager coordinate results with the incident response team.

**Evidence assessors ask for.**

- How the facility is monitored: guard posts and hours, cameras, alarms and who receives them
- The records of the last few log reviews, with the anomalies found and what was done
- A sample of event-driven reviews, such as the review after a lost badge was reported
- Incident reports for physical security events, and how they reached the incident response team
- For PE-6(1), the alarm and camera coverage, the monitoring arrangement and the last test

**Inheritance.** For a system hosted in a cloud service or colocation data center, the provider monitors its facility, and the [system security plan](/templates/plans/system-security-plan/) records PE-6 and PE-6(1) as inherited for it. The organization still monitors its own offices and equipment rooms, usually as a common control run by the facilities manager, and the coordination with incident response (c) often stays with the organization even where the provider monitors.

**Common findings.**

- Access logs collected but never reviewed, or reviews with no record.
- Reviews that look only at denied attempts and miss after-hours entries by authorized badges.
- Physical security incidents handled by facilities or building management and never reported to the incident response team.
- Cameras that do not record, point at the wrong door, or overwrite their footage before anyone could review it.
- Alarms that go to a mailbox or panel no one watches after hours.

**Enhancements in the Moderate baseline.** [PE-6(1)](#pe-6.1) intrusion alarms and surveillance equipment. High adds [PE-6(4)](#pe-6.4) monitoring physical access to systems. [PE-6(2)](#pe-6.2) automated intrusion recognition and responses and [PE-6(3)](#pe-6.3) video surveillance are in no baseline.

- **PE-6(1)** monitors physical access using intrusion alarms and surveillance equipment. It has no parameters. NIST's discussion says intrusion alarms alert security personnel when unauthorized access is attempted, working with barriers, access control systems and guards by triggering a response when they are breached; sensors include motion, contact and glass-break sensors, and surveillance equipment includes cameras at strategic locations. The policy has alarms cover the facility's entry points and each area that contains system components when it is unoccupied, alerting guards, a monitoring service or designated staff who respond; cameras cover the entry points to the facility and to those areas, with recordings kept for the period the records schedule sets and access limited to authorized staff; and the alarms and cameras tested at least annually. Recordings show identifiable people, so treat them as personally identifiable information.
- **PE-6(4)** (High) adds monitoring of physical access to the system itself, in addition to the facility, at the spaces you name. NIST's discussion says it adds monitoring where system components are concentrated, such as server rooms, media storage areas and communications centers, and that it can be coordinated with intrusion detection and system monitoring. Typical value: data centers, server rooms, wiring closets and media storage areas that contain components of the system, the same spaces as [PE-3(1)](/controls/pe/pe-3/#pe-3.1). The policy sends physical access events for those spaces to the security operations team for correlation with system monitoring.
