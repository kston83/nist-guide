---
title: System Monitoring Standard
type: standard
description: The monitoring objectives, log sources, detections, alert handling, retention and reporting that make the system and information integrity policy's monitoring requirements (SP 800-53 SI-4) measurable, with audit record review (AU-6) and retention (AU-11).
controls: [si-4, si-4.2, si-4.4, si-4.5, si-4.10, si-4.12, si-4.14, si-4.20, si-4.22, au-6, au-11]
status: draft
stage: operate
typical:
  si-04_odp.01: 'detecting attacks, malware, unauthorized access, privilege misuse and data exfiltration'
  si-04_odp.02: 'log correlation in the security information and event management (SIEM) platform, endpoint detection and response, network intrusion detection and user behavior analytics'
  si-04_odp.03: 'alerts and monitoring reports'
  si-04_odp.04: 'the system owner and the incident response team'
  si-04_odp.05: 'as needed, and at least monthly'
  si-04.04_odp.01: 'continuously'
  si-04.04_odp.02: 'connections from known malicious sources, unapproved protocols and ports, and scanning or password-guessing patterns'
  si-04.04_odp.03: 'continuously'
  si-04.04_odp.04: 'connections to known malicious destinations, unusual data volumes, unapproved protocols and regular beaconing to external hosts'
  si-04.05_odp.01: 'the security operations team'
  si-04.05_odp.02: 'indicators of compromise from the detection tools and threat intelligence feeds'
  si-04.10_odp.01: 'encrypted traffic crossing the internet connection and the public-facing subnetwork, except categories exempted after legal and privacy review, such as health and financial sites'
  si-04.10_odp.02: 'the intrusion detection and prevention systems and data loss prevention tools at the boundary'
  si-04.12_odp.01: 'the security operations team and the system owner'
  si-04.12_odp.02: 'the security information and event management (SIEM) platform'
  si-04.12_odp.03: 'use of privileged accounts outside approved change windows, bulk downloads or exports of sensitive information, disabled security tools, and new administrative accounts'
  si-04.20_odp: 'recording of privileged sessions, alerts on high-risk privileged commands, and a review of privileged activity at least weekly'
  si-04.22_odp.01: 'the change control process and the approved ports, protocols and services list'
  si-04.22_odp.02: 'audit, and alert the security operations team and the system owner'
  au-06_odp.01: 'continuously through automated alerting, with a documented manual review at least weekly'
  au-06_odp.02: 'the activity listed in the log review procedure, such as repeated failed logons, privilege escalation and access outside normal patterns'
  au-06_odp.03: the system owner and the incident response team
  au-11_odp: 'at least one year, or longer where the records retention schedule or a law requires it'
---

:::guidance
The system and information integrity policy says each system must be monitored for attacks and misuse; this standard says what is monitored, where the data goes, which detections run, how fast alerts are handled, how long the data is kept and what is reported. Keep the values here in step with the SI-4 statements in the policy, and with the AU-6 and AU-11 statements in the audit and accountability policy, since assessors compare them. Which events each component logs, and what each record contains, belong to the audit and accountability policy (AU-2, AU-3 and AU-12). Most monitoring is a common control: the security operations team, the SIEM platform, endpoint detection and response, and network detection. Record in each system security plan which parts the system inherits and which it owns, such as sending its logs and its application-specific detections. [NIST SP 800-137](https://csrc.nist.gov/pubs/sp/800/137/final), Information Security Continuous Monitoring (ISCM) for Federal Information Systems and Organizations (September 2011, current as of September 2026), places system monitoring within an organization's continuous monitoring program.
:::

| Owner | Approved by | Version | Effective date |
| --- | --- | --- | --- |
| {{org:ciso}} | {{fill:name and title}} | {{fill:version}} | {{fill:date}} |

## 1. Purpose and scope

This standard sets the minimum requirements for monitoring the systems of {{org:name}} to detect attacks, unauthorized connections and unauthorized use, and for handling what monitoring finds. It applies to every system in the system inventory and every component in each system's component inventory, including cloud services, identity services, endpoints, network and security devices, and systems that providers operate for the organization.

## 2. Roles

| Role | Responsibilities |
| --- | --- |
| {{org:ciso}} | Owns this standard and the monitoring program; provides the monitoring platforms; obtains legal review of monitoring; decides when the level of monitoring changes |
| {{org:security-operations}} | Runs the SIEM platform and detection tools; writes, tunes and tests detections; triages alerts around the clock or at the hours set below; refers suspected incidents; reports on monitoring |
| {{org:system-owner}} | Makes sure every component sends its logs and runs the monitoring agents; tells the {{org:security-operations}} about new components and changes; owns application-specific detections; acts on alerts about the system |
| {{org:incident-response-team}} | Handles incidents that monitoring refers to it under the incident response plan |

## 3. Monitoring objectives and legal review

- Each system shall be monitored to detect attacks and indicators of potential attacks in accordance with the following monitoring objectives: {{param:si-04_odp.01}}. (SI-4a.1)
- Each system shall be monitored to detect unauthorized local, network and remote connections. (SI-4a.2)
- The {{org:ciso}} shall obtain a legal opinion on system monitoring activities before they begin and whenever they change significantly, including any decryption of traffic and any monitoring of individual users, and shall keep the opinion on record. (SI-4f)
- Systems shall display a system use notification that tells users their activity may be monitored. (AC-8)

## 4. Log sources and coverage

- Monitoring capabilities shall be deployed strategically within each system to collect the essential information the monitoring objectives call for, including at the managed interfaces in the boundary protection standard. (SI-4c.1)
- Each system shall send the log sources in the table below to {{fill:for example the SIEM platform}}, or make them available to it, within {{fill:for example 15 minutes}} of the event. (SI-4c.1)
- Endpoint detection and response shall run on every server and workstation that supports it. (SI-4c.1)
- Monitoring capabilities shall be deployable at ad hoc locations within each system to track specific types of transactions of interest, such as during an investigation. (SI-4c.2)
- The {{org:security-operations}} shall compare the log sources received with each system's component inventory {{fill:for example monthly}}, and report components that send no logs, or have stopped, to the system owner. (SI-4c.1)
- Log sources shall use a common time source, so that events from different sources can be put in order. (AU-8)

| Log source | Examples | Required for |
| --- | --- | --- |
| Identity and access | {{fill:for example the identity provider, directory services, single sign-on, multifactor authentication and privileged access management}} | {{fill:for example all systems}} |
| Endpoints | {{fill:for example endpoint detection and response, operating system security logs}} | {{fill:for example all servers and workstations}} |
| Network and boundary | {{fill:for example firewalls, proxies, DNS, VPN or zero trust access, intrusion detection and prevention, network flow records}} | {{fill:for example all managed interfaces}} |
| Cloud control plane | {{fill:for example cloud provider audit logs, configuration changes and threat detection findings}} | {{fill:for example all cloud accounts}} |
| Applications and databases | {{fill:for example authentication, authorization failures, administrative actions and access to sensitive records}} | {{fill:for example systems that process sensitive information}} |
| Email and collaboration | {{fill:for example email gateway, mailbox audit and file sharing logs}} | {{fill:for example the enterprise services}} |
| Security tools | {{fill:for example malicious code protection, data loss prevention and vulnerability scanning results}} | {{fill:for example all systems}} |

## 5. Detection

- Unauthorized use of each system shall be identified through {{param:si-04_odp.02}}. (SI-4b)
- The {{org:security-operations}} shall employ automated tools and mechanisms, such as correlation rules in the SIEM platform and endpoint detection and response, to support near real-time analysis of events. (SI-4(2))
- The {{org:security-operations}} shall determine and document criteria for unusual or unauthorized activities or conditions for inbound and outbound communications traffic. (SI-4(4)(a))
- Inbound communications traffic shall be monitored {{param:si-04.04_odp.01}} for {{param:si-04.04_odp.02}}. (SI-4(4)(b))
- Outbound communications traffic shall be monitored {{param:si-04.04_odp.03}} for {{param:si-04.04_odp.04}}. (SI-4(4)(b))
- Each system shall alert {{param:si-04.05_odp.01}} when the following system-generated indications of compromise or potential compromise occur: {{param:si-04.05_odp.02}}. (SI-4(5))
- Each detection shall be recorded with what it detects, its data sources, its severity, its owner and the response it calls for, and mapped to the attack techniques it covers where the organization uses a catalog of techniques. (SI-4b)
- Detections shall be tested {{fill:for example when written and at least annually}}, and tuned when they produce false positives, so that they still fire on the activity they are meant to catch. (SI-4b)
- Threat intelligence feeds that supply indicators of compromise and known malicious sources and destinations shall be kept current. (SI-4(5))

## 6. Alert handling

- The {{org:security-operations}} shall triage alerts {{fill:for example around the clock, directly or through a managed security service}}. (SI-4d)
- The {{org:security-operations}} shall analyze detected events and anomalies, and refer suspected incidents to the {{org:incident-response-team}} under the incident response plan. (SI-4d)
- Each alert shall be closed only with a recorded outcome: false positive, benign, or referred as a suspected incident, with a short note of what was checked. (SI-4d)

| Alert severity | Triage begins within | Examples |
| --- | --- | --- |
| Critical | {{fill:for example 15 minutes}} | {{fill:for example confirmed malware execution, a known indicator of compromise, a disabled security tool}} |
| High | {{fill:for example 1 hour}} | {{fill:for example suspicious privileged activity, traffic to a known malicious destination}} |
| Medium | {{fill:for example 8 hours}} | {{fill:for example repeated failed logons, an unapproved service}} |
| Low | {{fill:for example 3 business days}} | {{fill:for example policy violations with no sign of compromise}} |

## 7. Audit record review and retention

- The {{org:security-operations}} shall review and analyze system audit records {{param:au-06_odp.01}} for indications of {{param:au-06_odp.02}} and its potential impact, and report findings to {{param:au-06_odp.03}}. (AU-6a, AU-6b)
- Each manual review shall leave a dated record of what was reviewed, what was found and to whom it was reported. (AU-6a)
- Audit records and monitoring data shall be retained for {{param:au-11_odp}}, to support after-the-fact investigation of incidents and to meet regulatory and organizational retention requirements. (AU-11)
- Monitoring data shall be kept {{fill:for example 6 months}} in a form that can be searched at once, and the rest of the retention period in a form that can be restored for search when needed. (AU-11)

## 8. Changes in risk

- The {{org:ciso}} shall adjust the level of system monitoring activity when there is a change in risk to organizational operations and assets, individuals, other organizations or the Nation, such as a relevant threat advisory, an incident, or a major change to the system. (SI-4e)
- The {{org:security-operations}} shall adjust the level of audit record review, analysis and reporting when law enforcement information, intelligence information or other credible sources indicate a change in risk. (AU-6c)
- Each increase and its end shall be recorded with the reason and what changed. (SI-4e)

## 9. Additional monitoring for High systems

This section applies to High systems.

- Provisions shall be made so that {{param:si-04.10_odp.01}} is visible to {{param:si-04.10_odp.02}}. The keys used for decryption shall be protected under the encryption and key management standard. (SI-4(10))
- The {{org:security-operations}} shall alert {{param:si-04.12_odp.01}} using {{param:si-04.12_odp.02}} when the following indications of inappropriate or unusual activities with security or privacy implications occur: {{param:si-04.12_odp.03}}. (SI-4(12))
- A wireless intrusion detection system shall be employed to identify rogue wireless devices and to detect attack attempts and potential compromises or breaches to the system, covering the facilities where the system's components are located. (SI-4(14))
- The {{org:security-operations}} shall implement the following additional monitoring of privileged users: {{param:si-04.20_odp}}. (SI-4(20))
- The {{org:security-operations}} shall detect network services that have not been authorized or approved by {{param:si-04.22_odp.01}}, and when they are detected, shall {{param:si-04.22_odp.02}}. (SI-4(22))

## 10. Reporting

- The {{org:security-operations}} shall provide {{param:si-04_odp.03}} to {{param:si-04_odp.04}}, {{param:si-04_odp.05}}. (SI-4g)
- Monthly reports shall cover, at a minimum, alerts by severity and outcome, time to triage against section 6, log source coverage against the component inventory, detections added, changed and retired, and incidents referred. (SI-4g)

:::federal
[OMB M-26-14](https://www.whitehouse.gov/wp-content/uploads/2026/05/M-26-14-Ensuring-Effective-and-Efficient-Agency-Logging-and-Network-Visibility-to-Defend-Against-Evolving-Cyber-Threats.pdf), Ensuring Effective and Efficient Agency Logging and Network Visibility to Defend Against Evolving Cyber Threats (May 22, 2026), rescinded OMB M-21-31. It directs agencies to prioritize two logging objectives, continuous event monitoring and threat hunting, investigation, response and forensics, for all information systems owned or operated by the agency or by third parties on its behalf. Each agency submits an Agency Logging Plan to OMB and CISA, following CISA's [Logging Reference Architecture](https://www.cisa.gov/resources-tools/resources/logging-reference-architecture) (published August 20, 2026), and reaches the levels of the memo's logging maturity model on its schedule. Its Appendix B sets minimum logging requirements, including retention, availability to the agency's top-level security operations center, accurate timestamps from a traceable time source, and logs that support a list of minimum activities. It does not apply to national security systems. As of September 2026.

- Each system's logs shall be actively searchable for at least 6 months after creation and retrievable for at least a year after creation, as OMB M-26-14 Appendix B requires, and kept longer where a records schedule requires it. (AU-11)
- Each system's logs shall be readily available to the agency's top-level security operations center. (SI-4c.1)
- Log timestamps shall be synchronized to a traceable time source the agency designates. (AU-8)
- Each system shall collect logs that support determining the identity used for operations; source and destination network addresses, protocols, ports and session attributes; access to, change or destruction of objects and data; changes to privilege levels; and changes to infrastructure, as OMB M-26-14 Appendix B item 5 requires. (SI-4c.1)
- The {{org:security-operations}} shall use the logs to monitor for suspicious activity identified by security tooling, known indicators of compromise and anomalous system or user activity, and generate automated alerts for them, as OMB M-26-14 Appendix B requires. (SI-4a.1)
- The system's log collection shall be described in, and kept consistent with, the agency's Agency Logging Plan. (SI-4c.1)
- In the event of a known or suspected compromise, the {{org:ciso}} shall provide logs and other relevant data to CISA and the FBI on request, to the extent consistent with applicable law, as OMB M-26-14 requires. (SI-4g)

:::

## 11. Review

The {{org:ciso}} reviews this standard {{fill:for example annually}}, and whenever the system and information integrity policy, the monitoring platforms, the threat environment or a federal logging requirement changes.

| Version | Date | Change | Approved by |
| --- | --- | --- | --- |
| {{fill:version}} | {{fill:date}} | {{fill:summary of change}} | {{fill:name and title}} |
