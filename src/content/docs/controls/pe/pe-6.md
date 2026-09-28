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
---

<!-- nist:start -->
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
<!-- nist:end -->

<!-- guidance: write below this line -->
