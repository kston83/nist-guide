---
title: Audit Logging Standard
type: standard
description: The event list, record content, collection, time stamps, storage, failure response, protection and retention that make the audit and accountability policy's logging requirements (SP 800-53 AU-2, AU-3, AU-12 and related controls) measurable, with the limits on personal information in audit records (AU-3(3)) and a part where each system records what it logs and why.
controls: [au-2, au-3, au-3.1, au-3.3, au-4, au-5, au-8, au-9, au-9.4, au-11, au-12, au-5.1, au-5.2, au-9.2, au-9.3, au-10, au-12.1, au-12.3]
status: draft
stage: core
typical:
  au-02_odp.01: 'logons and logoffs, account and privilege changes, use of privileged functions, access to security-relevant files, configuration changes, and security tool events'
  au-2_prm_2: 'the event types listed in the audit logging standard, each logged whenever it occurs'
  au-02_odp.04: annually and after a significant incident or system change
  au-03.01_odp: 'session and request identifiers, source and destination addresses, and the full command line for privileged commands'
  au-03.03_odp: 'the account identifier, the source address and device, and the identifiers of records accessed, not their contents, as the system''s privacy impact assessment lists'
  au-04_odp: 'the retention period set under AU-11, with room for a year of growth'
  au-05_odp.01: the system administrators and the security operations team
  au-05_odp.02: 1 hour
  au-05_odp.03: 'restore logging and record the gap in the audit trail; for high-impact systems, stop processing that cannot be logged'
  au-08_odp: one second or finer
  au-09_odp: the security operations team and the system owner
  au-09.04_odp: 'the security operations administrators, who do not administer the systems being audited'
  au-11_odp: 'at least one year, or longer where the records retention schedule or a law requires it'
  au-12_odp.01: 'all servers, network devices, security tools, databases and applications in the system boundary'
  au-12_odp.02: 'the system administrators, with the security operations team approving changes'
  au-05.01_odp.01: the system administrators and the security operations team
  au-05.01_odp.02: 1 hour
  au-05.01_odp.03: 75 percent
  au-05.02_odp.01: 15 minutes
  au-05.02_odp.02: the security operations team
  au-05.02_odp.03: 'loss of log forwarding from any component, and failure of the central log repository'
  au-09.02_odp: in near real time
  au-10_odp: 'approving access and changes, signing records, and administering security settings'
  au-12.01_odp.01: all components that generate audit records
  au-12.01_odp.02: one second
  au-12.03_odp.01: the security operations administrators
  au-12.03_odp.02: all components in the system boundary
  au-12.03_odp.03: 'the event types in the audit logging standard, and additional detail for a user or component under investigation'
  au-12.03_odp.04: 1 hour
---

:::guidance
The audit and accountability policy says each system logs the right events, with the right content, and keeps them safe for long enough; this standard says which events, which fields, where they go, how they are protected and how long they are kept. Its typical values are copied from the AU statements of the policy; keep them in step, since assessors compare the two. The event list in section 3 is the one AU-2 asks for, with the rationale AU-2d requires, so every system starts from the same list. It follows the aspects of log management that [NIST SP 800-92](https://csrc.nist.gov/pubs/sp/800/92/final), Guide to Computer Security Log Management (September 2006), section 4.2 says a logging policy should define: log generation, transmission, storage and disposal, and analysis. SP 800-92 Rev. 1, Cybersecurity Log Management Planning Guide, is still an [initial public draft](https://csrc.nist.gov/pubs/sp/800/92/r1/ipd) (October 11, 2023), with no later version as of October 2026. Reviewing the logs is in the [log review procedure](/templates/procedures/log-review-procedure/), and detection and alert handling in the [system monitoring standard](/templates/standards/system-monitoring-standard/). Part A applies across the organization and is usually a common control, provided through the central log platform; each system completes Part B, which its system security plan references.
:::

| Owner | Approved by | Version | Effective date |
| --- | --- | --- | --- |
| {{org:ciso}} | {{fill:name and title}} | {{fill:version}} | {{fill:date}} |

## 1. Purpose and scope

This standard sets the minimum requirements for generating, collecting, protecting and keeping the audit records of the systems of {{org:name}}. It applies to every system in the system inventory and every component in each system's component inventory: servers, workstations, network and security devices, databases, applications, identity services, and cloud services, including systems that providers operate for the organization.

Part A applies across the organization. Each system completes Part B.

## 2. Roles

| Role | Responsibilities |
| --- | --- |
| {{org:ciso}} | Owns this standard and the event list; coordinates the event list with the teams that use audit information; approves exceptions |
| {{org:security-operations}} | Runs the central log platform; onboards log sources; monitors that every source is reporting; manages logging functions and the platform's access; reviews the logs under the log review procedure |
| {{org:system-owner}} | Completes Part B; makes every component log the events in section 3 with the content in section 4 and send them to the central log platform; sizes local log storage; responds to logging failures |
| System administrators and developers | Configure logging on components and in applications as this standard and the baseline configuration standard set |
| {{org:privacy-official}} | Reviews the personal information written to audit records, with the system owner, and the event list's effect on privacy |
| {{fill:records officer and legal counsel}} | Set retention under the records retention schedule, and issue and release legal holds on audit records |

## Part A. Organization-wide requirements

### 3. Event types

- Each system owner shall identify, in Part B, the event types the system's components are capable of logging in support of the audit function, covering at least {{param:au-02_odp.01}}. (AU-2a)
- The {{org:ciso}} shall coordinate the event list with the {{org:security-operations}}, the {{org:incident-response-team}}, the {{org:privacy-official}}, legal counsel and other organizational entities that need audit-related information, before it is approved and at each review. (AU-2b)
- Each system shall log {{param:au-2_prm_2}}; the table below is the minimum list, and Part B adds the system's own event types. (AU-2c)
- The rationale column of the table records why each event type is logged, and each system owner shall record in Part B why the system's selection, with its additions and any event types its components cannot log, is adequate to support after-the-fact investigation of incidents. (AU-2d)
- The {{org:ciso}} shall review and update the event list {{param:au-02_odp.04}}, and each system owner shall review Part B at the same time. (AU-2e)
- Event logging shall cover every protocol and access path the system supports, including local consoles, remote administration, web sign-in and programming interfaces. (AU-2c)

| # | Category | Event types logged | Logged | Related controls | Why it is logged (AU-2d) |
| --- | --- | --- | --- | --- | --- |
| 1 | Authentication | Successful and failed logons and logoffs by people and services at every access path; multi-factor authentication failures; account lockouts and unlocks | Every occurrence | AC-7, IA-2 | Shows who used the system and when; failures reveal password guessing and the use of stolen credentials |
| 2 | Account management | Account creation, modification, enabling, disabling and removal; password and authenticator changes and resets | Every occurrence | AC-2(4) | Unauthorized accounts and resets are a common way to gain and keep access |
| 3 | Privileges | Changes to group, role and privilege assignments, and to security or privacy attributes; use of privileged functions, including elevation such as "run as" | Every occurrence | AC-6(9) | Privilege misuse and escalation are the steps that turn a foothold into control of the system |
| 4 | Remote access | Start and end of remote access sessions, with the method and source address | Every occurrence | AC-17(1) | Most intrusions arrive remotely; sessions tie activity to an entry point |
| 5 | Security-relevant objects | Access, and failed access, to security-relevant files, audit records, key and secrets stores, and access control settings | Every occurrence | AU-9 | Shows tampering with the controls and the evidence itself |
| 6 | Configuration and software | Changes to configuration and security settings; installation and removal of software; new or changed services and scheduled tasks | Every occurrence | CM-3f | Unapproved changes are both an attack technique and a control failure; records are compared with change requests |
| 7 | Logging and security tools | Logging started, stopped, changed or cleared; log forwarding failures; security tools stopped or disabled; malicious code detections and security tool alerts | Every occurrence | AU-5, SI-3 | Attackers disable logging and security tools first; tool events are the earliest signs of compromise |
| 8 | System events | Start-up and shutdown; services started and stopped; system time changes; components added or removed | Every occurrence | AU-8, CM-8 | Explains gaps and order in the record, and shows unauthorized components |
| 9 | Network | Connections allowed and denied at managed interfaces; domain name queries; network flow records from boundary components | Every occurrence, or continuously for flow records | AC-4, SC-7 | Traces lateral movement and data leaving the system, and ties addresses to activity |
| 10 | Sensitive information | Access to, export of, and deletion of sensitive information, and bulk downloads, with the query parameters where the privacy impact assessment allows | Every occurrence | AC-3 | Shows what information was affected during an incident, and by whom |
| 11 | Applications | Authorization failures; administrative actions in the application; input validation failures and security-relevant errors | Every occurrence | AC-3, SI-10 | Application attacks and misuse leave no trace in operating system logs |
| 12 | Cloud management | Management console and programming interface calls that create, change or delete resources; identity and access management changes | Every occurrence | AC-2(4), CM-3f | Control plane changes can alter every workload in the account at once |

:::guidance
NIST's AU-2 discussion gives event types that include password changes, failed logons or failed accesses, security or privacy attribute changes, administrative privilege usage, PIV credential usage, data action changes, query parameters and external credential usage. It names controls whose logging needs feed the list, including AC-2(4), AC-6(9), AC-17(1) and CM-3f in the Moderate baseline; the "Related controls" column cites those, and adds other controls, as the author's judgment, where an event type supports them. The discussion also says to log every protocol the system supports, and that a system may need the capability to log an event type, such as every file access, without turning it on except in specific circumstances; record such event types in Part B as capable but not logged, with the reason. SP 800-92 section 4.2 adds that recording more data is not necessarily better: log and analyze what matters most. An event list with no written rationale is the most common AU-2 finding.
:::

### 4. Content of audit records

- Each audit record shall contain the fields in the table below, establishing what type of event occurred, when and where it occurred, its source, its outcome, and the identity of any individuals, subjects or objects associated with it. (AU-3)
- Each system shall also generate audit records that contain {{param:au-03.01_odp}}. (AU-3(1))
- Applications written by or for the organization shall write structured records, such as JSON, using the field names in the table, and the central log platform shall parse every log source into the same field names. (AU-3)
- Actions taken through a shared, group or service account shall be traceable to the individual or process that took them, through the session, the privileged access tool or the request that started them. (AU-3)
- Audit records shall not contain passwords, authenticators, session tokens, cryptographic keys or other secrets; applications shall mask them before the record is written. (IA-5g)

| Field | AU-3 item | Examples |
| --- | --- | --- |
| Event type | What type of event (a) | Event name or identifier, such as "logon failed" or "user added to group" |
| Time stamp | When it occurred (b) | Date and time in Coordinated Universal Time (UTC), or with its offset from UTC, to the granularity in section 7 |
| Location | Where it occurred (c) | Host name, component, application, cloud account and region |
| Source | Source of the event (d) | Source address, device, process or service |
| Outcome | Outcome of the event (e) | Success or failure, with the reason or error code |
| Identity | Who or what was involved (f) | User or service account, the individual behind a shared account, and the files, records or resources acted on |

:::guidance
NIST's AU-3 discussion gives examples for each item: event descriptions, time stamps, source and destination addresses, user or process identifiers, success or fail indications, and filenames. Its AU-3(1) discussion suggests access control or flow control rules invoked and the individual identities of group account users, and suggests limiting additional information to what audit needs, since extra content can mislead, hide what matters and add privacy risk. Records the platform stores as unparsed text have the fields but cannot be searched by them, which [AU-7(1)](/controls/au/au-7/) needs.
:::

### 5. Personal information in audit records

This section applies to systems that process personally identifiable information.

- Personally identifiable information contained in audit records shall be limited to {{param:au-03.03_odp}} identified in the privacy risk assessment. (AU-3(3))
- The {{org:system-owner}} shall list in Part B the personally identifiable information elements each log source writes, and record them in the system's privacy impact assessment. (AU-3(3))
- Request bodies, form inputs, query strings and other content that may hold personal information shall be masked, truncated or left out of audit records unless the privacy impact assessment lists them as needed. (AU-3(3))
- Access to audit records that contain personally identifiable information shall be limited to the roles that need it for review, investigation and audit. (AU-9)

:::guidance
NIST's AU-3(3) discussion says limiting personally identifiable information in audit records when it is not needed for operational purposes reduces privacy risk; its AU-2 and AU-3 discussions note that the audit trail can reveal personal information, especially when it records inputs or is based on patterns or time of usage. Limiting personal information never removes the identity of the person who acted (AU-3f): an account identifier is needed, a customer's full record is not. Section 3 of the [privacy impact assessment](/templates/reports/privacy-impact-assessment/) lists information the system creates, including logs.
:::

### 6. Generation and collection

- {{param:au-12_odp.01}} shall provide an audit record generation capability for the event types in section 3. (AU-12a)
- Only {{param:au-12_odp.02}} shall select the event types that specific components of the system log. (AU-12b)
- Each system shall generate audit records for the event types in section 3 and Part B, with the content in section 4. (AU-12c)
- Each component type's logging settings shall be part of its secure configuration in the [baseline configuration standard](/templates/standards/baseline-configuration-standard/), and checked by its configuration scans. (CM-6)
- A new component shall have logging configured, and its records confirmed arriving on the central log platform, before it goes into production. (AU-12a)
- Each component shall send its audit records to the central log platform, as section 4 of the system monitoring standard sets, over a channel that protects them as the [encryption and key management standard](/templates/standards/encryption-and-key-management-standard/) requires. (AU-9)
- A component that cannot send its records to the platform shall keep them locally under this standard, and Part B shall record it as an exception with how its records are reviewed. (AU-12a)

### 7. Time stamps

- Each system shall use internal system clocks to generate time stamps for audit records. (AU-8a)
- Audit record time stamps shall meet a granularity of {{param:au-08_odp}} and use Coordinated Universal Time, a fixed offset from it, or include the local offset in the time stamp. (AU-8b)
- Every component shall synchronize its clock with {{fill:the organization's authoritative time source, for example its network time servers}}, so that records from different components can be put in order. (AU-8)

### 8. Storage capacity and logging failures

- Each system owner, with the {{org:security-operations}}, shall allocate audit log storage capacity to accommodate {{param:au-04_odp}}, on each component and on the central log platform. (AU-4)
- Components shall buffer audit records locally for at least {{fill:for example 72 hours}} when they cannot reach the central log platform, and send them when the connection returns. (AU-4)
- The {{org:security-operations}} shall check storage use on the central log platform {{fill:for example monthly}} and plan capacity before new log sources are added. (AU-4)
- Each system shall alert {{param:au-05_odp.01}} within {{param:au-05_odp.02}} of an audit logging process failure, including software and hardware errors, failures of the mechanisms that capture records, a log source that stops reporting, and storage reaching capacity. (AU-5a)
- When an audit logging process fails, the {{org:system-owner}} shall {{param:au-05_odp.03}}. (AU-5b)
- Each failure shall be recorded with its start and end, the components affected, the cause, and the gap left in the audit trail. (AU-5b)

### 9. Protection of audit information

- Audit information and audit logging tools shall be protected from unauthorized access, modification and deletion: records on the central log platform shall be stored so that no user, including the platform's administrators, can change them, and deleted only by the retention process in section 10. (AU-9a)
- The central log platform shall alert {{param:au-09_odp}} when unauthorized access, modification or deletion of audit information is detected. (AU-9b)
- Access to management of audit logging functionality shall be authorized only for {{param:au-09.04_odp}}. (AU-9(4))
- Administrators of a system shall not be able to delete or change its audit records on the central log platform, or turn off forwarding without the change being logged and alerted. (AU-9(4))
- Read access to audit records shall be role-based, limited to those who review, investigate and audit, and itself logged. (AU-9a)
- Audit records shall be encrypted at rest, and backups and archives of them protected like the originals. (AU-9a)

:::guidance
NIST's AU-9 discussion counts audit records, audit log settings, audit reports and personally identifiable information as audit information. Keeping the people who run a system away from its audit records is the separation of duties the [account management procedure](/templates/procedures/account-management-procedure/) records in section 4. SP 800-92 section 5.4 recommends verifying the integrity of logs moved to an archive by comparing message digests of the original and the copy, and storing archive media securely.
:::

### 10. Retention and disposal

- Audit records shall be retained for {{param:au-11_odp}}, to support after-the-fact investigation of incidents and to meet regulatory and organizational retention requirements. (AU-11)
- Audit records shall be kept {{fill:for example 6 months}} in a form that can be searched at once, and the rest of the retention period in a form that can be restored for search when needed, as the system monitoring standard sets. (AU-11)
- Audit records named in a legal hold, or needed for an investigation, a records request or a law enforcement action, shall be kept until {{fill:legal counsel}} releases them, even after the retention period ends. (AU-11)
- When audit records are moved to an archive, their integrity shall be verified, for example by comparing hashes of the original and the copy. (AU-9)
- At the end of the retention period, audit records shall be disposed of under the records retention schedule, and media holding them sanitized as the media protection policy requires. (AU-11)
- Restoring archived audit records for search shall be tested {{fill:for example annually}}. (AU-11)

### 11. Additional requirements for High systems

This section applies to High systems.

- The system shall provide a warning to {{param:au-05.01_odp.01}} within {{param:au-05.01_odp.02}} when allocated audit log storage volume reaches {{param:au-05.01_odp.03}} of the repository's maximum audit log storage capacity. (AU-5(1))
- The system shall provide an alert within {{param:au-05.02_odp.01}} to {{param:au-05.02_odp.02}} when the following audit failure events occur: {{param:au-05.02_odp.03}}. (AU-5(2))
- Audit records shall be stored {{param:au-09.02_odp}} in a repository that is part of a physically different system or system component than the system or component being audited. (AU-9(2))
- Cryptographic mechanisms shall protect the integrity of audit information and audit tools, such as signed hashes of records and of the logging software. (AU-9(3))
- The system shall provide irrefutable evidence that an individual, or a process acting on behalf of an individual, has performed {{param:au-10_odp}}, such as by digital signatures bound to the individual's credential. (AU-10)
- Audit records from {{param:au-12.01_odp.01}} shall be compiled into a system-wide audit trail that is time-correlated to within {{param:au-12.01_odp.02}}. (AU-12(1))
- The capability shall be provided for {{param:au-12.03_odp.01}} to change the logging to be performed on {{param:au-12.03_odp.02}} based on {{param:au-12.03_odp.03}} within {{param:au-12.03_odp.04}}. (AU-12(3))

### 12. Testing and exceptions

- The {{org:security-operations}} shall test logging when a component type is onboarded, and on a sample of components {{fill:for example at least annually}}, by generating test events such as a failed logon, a privileged command and a configuration change, and confirming each reaches the central log platform with the content in section 4. (AU-12c)
- A system or component that cannot meet this standard shall have an exception approved by the {{org:ciso}}, naming the requirement not met, the reason, the compensating measures and an expiry date, and recorded in Part B section 17. (AU-12)
- Where an exception leaves a weakness in an authorized system, it shall be entered in the system's plan of action and milestones, and the authorizing official shall accept the remaining risk. (CA-5)

:::guidance
SP 800-92 section 5.6 describes passive testing, reviewing logging settings and logs on a sample of systems, and active testing, creating security events and checking that the logs they should produce exist and are handled as policy requires; it calls active testing more effective because it tests the logging process itself. Section 5.5 adds the routine checks: that every log source is enabled and working, that log rotation and archiving work, that space remains, and that clocks are synchronized. Assessors often ask for a recent test event and trace it end to end.
:::

:::federal
[OMB M-26-14](https://www.whitehouse.gov/wp-content/uploads/2026/05/M-26-14-Ensuring-Effective-and-Efficient-Agency-Logging-and-Network-Visibility-to-Defend-Against-Evolving-Cyber-Threats.pdf), Ensuring Effective and Efficient Agency Logging and Network Visibility to Defend Against Evolving Cyber Threats (May 22, 2026), rescinded OMB M-21-31. Each agency submits an Agency Logging Plan to OMB and CISA within 90 days of the publication of CISA's [Logging Reference Architecture](https://www.cisa.gov/resources-tools/resources/logging-reference-architecture), which CISA published on August 20, 2026, and measures each system against the memo's logging maturity model (Appendix C). Appendix B sets the minimum logging baseline: retained logs actively searchable for at least 6 months after creation and retrievable for a year (item 1), without relieving agencies of records schedules; logs readily available to the agency's top-level security operations center (item 2); a consistently accurate time stamp, with network time synchronized through the Network Time Protocol or an equivalent to a traceable time source the agency designates, with sources traceable to the U.S. Naval Observatory or NIST encouraged (item 3); and logs that support a list of minimum activities (item 5). Item 4 says agencies should use Continuous Diagnostics and Mitigation, hardware asset management and software asset management data to check that log coverage takes in all information technology, including internet-of-things devices and operational technology. The memo does not apply to national security systems, or to the Department of Defense and Intelligence Community systems described in 44 U.S.C. § 3553(e). As of October 2026.

<!-- TODO(verify): NARA GRS 3.2 (Transmittal 33, January 2023) item 036, "Cybersecurity event logs", covers logs required by OMB M-21-31 and says destroy when 30 months old. M-26-14 rescinded M-21-31; confirm with NARA whether item 036 still applies and how before citing it here or in the AU-11 clause. -->

- Each system's audit records shall be actively searchable for at least 6 months after creation, and retrievable for at least one year after creation, as OMB M-26-14 Appendix B item 1 requires, and kept longer where a records schedule requires it. (AU-11)
- Each system's audit records shall be readily available to the agency's top-level security operations center, as Appendix B item 2 requires. (AU-6(3))
- Each component's clock shall be synchronized through the Network Time Protocol or an equivalent mechanism to the traceable time source the agency designates, as Appendix B item 3 requires. (AU-8)
- The event list in section 3 and each Part B shall support these activities, as Appendix B item 5 requires: determining the identity used to perform operations in applications and on systems; determining source and destination network addresses, including protocols, ports and session attributes; identifying data and resources accessed, modified or destroyed; identifying actions that change privilege levels; identifying changes to infrastructure, such as endpoints added, removed or modified; monitoring for suspicious activity security tooling identifies; monitoring, detecting and hunting for known indicators of compromise and for anomalous system or user activity; determining the quantity and types of data affected during an incident; determining the attack vectors, including initial access and lateral movement; and generating automated alerts for all of these. (AU-2c)
- Each system's logging shall be described in, and kept consistent with, the agency's Agency Logging Plan. (AU-2c)

:::

## Part B. System logging record

Complete one Part B for each system, and reference it in the system security plan.

| System | System owner | Central log platform | Last reviewed |
| --- | --- | --- | --- |
| {{fill:system name and identifier}} | {{fill:name and title}} | {{fill:for example the enterprise SIEM platform}} | {{fill:date}} |

### 13. Log sources and event types

| Component or component type | Event types it can log | Event list rows logged (section 3) | Event types added for this system | Event types it can log but are not logged, and why | How records reach the platform |
| --- | --- | --- | --- | --- | --- |
| {{fill:for example Windows servers}} | {{fill:for example the operating system security log}} | {{fill:for example 1 to 8}} | {{fill:event types, or none}} | {{fill:for example object access auditing on all files, enabled only during an investigation}} | {{fill:for example agent forwarding}} |
| {{fill:for example the application}} | {{fill:event types}} | {{fill:rows}} | {{fill:event types, or none}} | {{fill:event types and reason, or none}} | {{fill:method}} |

### 14. Rationale

{{fill:why the event types logged for this system are adequate to support after-the-fact investigation of incidents, including what the system's own additions cover and how gaps from section 13 are covered by other sources}}

### 15. Personal information in audit records

Complete for a system that processes personally identifiable information.

| Log source | Personally identifiable information elements written | Why each is needed | Masking or omission applied | Privacy impact assessment reference |
| --- | --- | --- | --- | --- |
| {{fill:log source}} | {{fill:for example account identifier, source address}} | {{fill:reason}} | {{fill:for example request bodies omitted}} | {{fill:section and date}} |

### 16. Storage and retention

| Store | Location | Capacity allocated | Searchable for | Retained for | Protection |
| --- | --- | --- | --- | --- | --- |
| {{fill:for example local buffer on each component}} | {{fill:location}} | {{fill:capacity}} | {{fill:period}} | {{fill:period}} | {{fill:for example local access restricted to administrators}} |
| {{fill:for example central log platform}} | {{fill:location}} | {{fill:capacity}} | {{fill:period}} | {{fill:period}} | {{fill:for example immutable storage, encrypted}} |

### 17. Exceptions in effect

| Exception ID | Requirement not met | Components affected | Reason | Compensating measures | Approved by and date | Plan of action and milestones ID | Expiry |
| --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:ID}} | {{fill:section and requirement}} | {{fill:components}} | {{fill:reason}} | {{fill:measures}} | {{fill:name and date}} | {{fill:ID, or not a weakness}} | {{fill:date}} |

## 18. Review

The {{org:ciso}} reviews Part A {{param:au-02_odp.04}}, and whenever the audit and accountability policy, the central log platform, or a federal logging requirement changes. Each system owner reviews Part B at the same time, and when the system's components or log sources change.

| Version | Date | Change | Approved by |
| --- | --- | --- | --- |
| {{fill:version}} | {{fill:date}} | {{fill:summary of change}} | {{fill:name and title}} |
