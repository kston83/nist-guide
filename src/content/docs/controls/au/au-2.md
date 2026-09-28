---
title: 'AU-2 Event Logging'
description: 'NIST SP 800-53 Rev. 5 control AU-2, Event Logging: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'AU-2 Event Logging'
  order: 2
control:
  id: AU-2
  family: AU
  baselines: [Low, Moderate, High, Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | None |

**Related controls:** [AC-2](/controls/ac/ac-2/), [AC-3](/controls/ac/ac-3/), [AC-6](/controls/ac/ac-6/), [AC-7](/controls/ac/ac-7/), [AC-8](/controls/ac/ac-8/), [AC-16](/controls/ac/ac-16/), [AC-17](/controls/ac/ac-17/), [AU-3](/controls/au/au-3/), [AU-4](/controls/au/au-4/), [AU-5](/controls/au/au-5/), [AU-6](/controls/au/au-6/), [AU-7](/controls/au/au-7/), [AU-11](/controls/au/au-11/), [AU-12](/controls/au/au-12/), [CM-3](/controls/cm/cm-3/), [CM-5](/controls/cm/cm-5/), [CM-6](/controls/cm/cm-6/), [CM-13](/controls/cm/cm-13/), [IA-3](/controls/ia/ia-3/), [MA-4](/controls/ma/ma-4/), [MP-4](/controls/mp/mp-4/), [PE-3](/controls/pe/pe-3/), [PM-21](/controls/pm/pm-21/), [PT-2](/controls/pt/pt-2/), [PT-7](/controls/pt/pt-7/), [RA-8](/controls/ra/ra-8/), [SA-8](/controls/sa/sa-8/), [SC-7](/controls/sc/sc-7/), [SC-18](/controls/sc/sc-18/), [SI-3](/controls/si/si-3/), [SI-4](/controls/si/si-4/), [SI-7](/controls/si/si-7/), [SI-10](/controls/si/si-10/), [SI-11](/controls/si/si-11/)

## Control statement

- **a.** Identify the types of events that the system is capable of logging in support of the audit function: [Assignment: organization-defined event types];
- **b.** Coordinate the event logging function with other organizational entities requiring audit-related information to guide and inform the selection criteria for events to be logged;
- **c.** Specify the following event types for logging within the system: [Assignment: organization-defined event types (subset of the event types defined in AU-2a.) along with the frequency of (or situation requiring) logging for each identified event type];
- **d.** Provide a rationale for why the event types selected for logging are deemed to be adequate to support after-the-fact investigations of incidents; and
- **e.** Review and update the event types selected for logging [Assignment: organization-defined frequency].

<details>
<summary>NIST discussion</summary>

An event is an observable occurrence in a system. The types of events that require logging are those events that are significant and relevant to the security of systems and the privacy of individuals. Event logging also supports specific monitoring and auditing needs. Event types include password changes, failed logons or failed accesses related to systems, security or privacy attribute changes, administrative privilege usage, PIV credential usage, data action changes, query parameters, or external credential usage. In determining the set of event types that require logging, organizations consider the monitoring and auditing appropriate for each of the controls to be implemented. For completeness, event logging includes all protocols that are operational and supported by the system.

To balance monitoring and auditing requirements with other system needs, event logging requires identifying the subset of event types that are logged at a given point in time. For example, organizations may determine that systems need the capability to log every file access successful and unsuccessful, but not activate that capability except for specific circumstances due to the potential burden on system performance. The types of events that organizations desire to be logged may change. Reviewing and updating the set of logged events is necessary to help ensure that the events remain relevant and continue to support the needs of the organization. Organizations consider how the types of logging events can reveal information about individuals that may give rise to privacy risk and how best to mitigate such risks. For example, there is the potential to reveal personally identifiable information in the audit trail, especially if the logging event is based on patterns or time of usage.

Event logging requirements, including the need to log specific event types, may be referenced in other controls and control enhancements. These include AC-2(4), AC-3(10), AC-6(9), AC-17(1), CM-3f, CM-5(1), IA-3(3)(b), MA-4(1), MP-4(2), PE-3, PM-21, PT-7, RA-8, SC-7(9), SC-7(15), SI-3(8), SI-4(22), SI-7(8) , and SI-10(1) . Organizations include event types that are required by applicable laws, executive orders, directives, policies, regulations, standards, and guidelines. Audit records can be generated at various levels, including at the packet level as information traverses the network. Selecting the appropriate level of event logging is an important part of a monitoring and auditing capability and can identify the root causes of problems. When defining event types, organizations consider the logging necessary to cover related event types, such as the steps in distributed, transaction-based processes and the actions that occur in service-oriented architectures.

</details>

*Withdrawn enhancements: AU-2(1), AU-2(2), AU-2(3), AU-2(4).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for AU-2</summary>

Determine if:

- **AU-02a.** [Assignment: organization-defined event types] that the system is capable of logging are identified in support of the audit logging function;
- **AU-02b.** the event logging function is coordinated with other organizational entities requiring audit-related information to guide and inform the selection criteria for events to be logged;
- **AU-02c.**
  - **AU-02c.[01]** [Assignment: organization-defined event types (subset of AU-02_ODP[01])] are specified for logging within the system;
  - **AU-02c.[02]** the specified event types are logged within the system [Assignment: organization-defined frequency or situation];
- **AU-02d.** a rationale is provided for why the event types selected for logging are deemed to be adequate to support after-the-fact investigations of incidents;
- **AU-02e.** the event types selected for logging are reviewed and updated [Assignment: organization-defined frequency].

**Examine:** Audit and accountability policy; procedures addressing auditable events; system security plan; privacy plan; system design documentation; system configuration settings and associated documentation; system audit records; system auditable events; other relevant documents or records.

**Interview:** Organizational personnel with audit and accountability responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators.

**Test:** Mechanisms implementing system auditing.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

AU-2 is about choosing what to log. First list every event type the system can log, then pick the subset you will log and write down why that subset is enough to investigate an incident. Most organizations do this once, in an audit logging standard, and every system starts from it.

**Common implementations.** An audit logging standard listing the minimum event types: logons and logoffs, account and privilege changes, use of privileged functions, access to security-relevant files, configuration changes and security tool events. Each system's security plan records which events its components log and any additions. The standard is coordinated with the security operations, legal and privacy teams (AU-2b).

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Event types the system can log (a) | Logons and logoffs, account and privilege changes, use of privileged functions, access to security-relevant files, configuration changes and security tool events |
| Event types logged, with frequency (c) | The event types listed in the audit logging standard, each logged whenever it occurs |
| Review of selected event types (e) | Annually and after a significant incident or system change |

**Evidence assessors ask for.**

- The audit logging standard or event list, with its rationale (AU-2d)
- Configuration of logging on a sample of components
- Records of the last review of the event list

**Inheritance.** The event list is usually an organization-wide standard; each system owns applying it to its components.

**Common findings.**

- No written rationale for the events chosen.
- Application events missing because only operating system logs were considered.
- An event list that has not been reviewed since it was written.
