---
title: 'AU-6 Audit Record Review, Analysis, and Reporting'
description: 'NIST SP 800-53 Rev. 5 control AU-6, Audit Record Review, Analysis, and Reporting: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'AU-6 Audit Record Review, Analysis, and Reporting'
  order: 6
control:
  id: AU-6
  family: AU
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 8 (4 in a baseline) |

**Related controls:** [AC-2](/controls/ac/ac-2/), [AC-3](/controls/ac/ac-3/), [AC-5](/controls/ac/ac-5/), [AC-6](/controls/ac/ac-6/), [AC-7](/controls/ac/ac-7/), [AC-17](/controls/ac/ac-17/), [AU-7](/controls/au/au-7/), [AU-16](/controls/au/au-16/), [CA-2](/controls/ca/ca-2/), [CA-7](/controls/ca/ca-7/), [CM-2](/controls/cm/cm-2/), [CM-5](/controls/cm/cm-5/), [CM-6](/controls/cm/cm-6/), [CM-10](/controls/cm/cm-10/), [CM-11](/controls/cm/cm-11/), [IA-2](/controls/ia/ia-2/), [IA-3](/controls/ia/ia-3/), [IA-5](/controls/ia/ia-5/), [IA-8](/controls/ia/ia-8/), [IR-5](/controls/ir/ir-5/), [MA-4](/controls/ma/ma-4/), [MP-4](/controls/mp/mp-4/), [PE-3](/controls/pe/pe-3/), [PE-6](/controls/pe/pe-6/), [RA-5](/controls/ra/ra-5/), [SA-8](/controls/sa/sa-8/), [SC-7](/controls/sc/sc-7/), [SI-3](/controls/si/si-3/), [SI-4](/controls/si/si-4/), [SI-7](/controls/si/si-7/)

## Control statement

- **a.** Review and analyze system audit records [Assignment: organization-defined frequency] for indications of [Assignment: organization-defined inappropriate or unusual activity] and the potential impact of the inappropriate or unusual activity;
- **b.** Report findings to [Assignment: organization-defined personnel or roles] ; and
- **c.** Adjust the level of audit record review, analysis, and reporting within the system when there is a change in risk based on law enforcement information, intelligence information, or other credible sources of information.

<details>
<summary>NIST discussion</summary>

Audit record review, analysis, and reporting covers information security- and privacy-related logging performed by organizations, including logging that results from the monitoring of account usage, remote access, wireless connectivity, mobile device connection, configuration settings, system component inventory, use of maintenance tools and non-local maintenance, physical access, temperature and humidity, equipment delivery and removal, communications at system interfaces, and use of mobile code or Voice over Internet Protocol (VoIP). Findings can be reported to organizational entities that include the incident response team, help desk, and security or privacy offices. If organizations are prohibited from reviewing and analyzing audit records or unable to conduct such activities, the review or analysis may be carried out by other organizations granted such authority. The frequency, scope, and/or depth of the audit record review, analysis, and reporting may be adjusted to meet organizational needs based on new information received.

</details>

## Control enhancements

<a id="au-6.1"></a>

### AU-6(1) Automated Process Integration

*Baselines: Moderate, High*

Integrate audit record review, analysis, and reporting processes using [Assignment: organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for AU-6(1)</summary>

Organizational processes that benefit from integrated audit record review, analysis, and reporting include incident response, continuous monitoring, contingency planning, investigation and response to suspicious activities, and Inspector General audits.

Determine if audit record review, analysis, and reporting processes are integrated using [Assignment: organization-defined automated mechanisms].

**Examine:** Audit and accountability policy; system security plan; privacy plan; procedures addressing audit review, analysis, and reporting; procedures addressing investigation and response to suspicious activities; system design documentation; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with audit review, analysis, and reporting responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Automated mechanisms integrating audit review, analysis, and reporting processes.

</details>

<a id="au-6.3"></a>

### AU-6(3) Correlate Audit Record Repositories

*Baselines: Moderate, High*

Analyze and correlate audit records across different repositories to gain organization-wide situational awareness.

<details>
<summary>Discussion and assessment objectives for AU-6(3)</summary>

Organization-wide situational awareness includes awareness across all three levels of risk management (i.e., organizational level, mission/business process level, and information system level) and supports cross-organization awareness.

Determine if audit records across different repositories are analyzed and correlated to gain organization-wide situational awareness.

**Examine:** Audit and accountability policy; system security plan; privacy plan; procedures addressing audit review, analysis, and reporting; system design documentation; system configuration settings and associated documentation; system audit records across different repositories; other relevant documents or records.

**Interview:** Organizational personnel with audit review, analysis, and reporting responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Mechanisms supporting the analysis and correlation of audit records.

</details>

<a id="au-6.4"></a>

### AU-6(4) Central Review and Analysis

*Baselines: Not in a baseline*

Provide and implement the capability to centrally review and analyze audit records from multiple components within the system.

<details>
<summary>Discussion and assessment objectives for AU-6(4)</summary>

Automated mechanisms for centralized reviews and analyses include Security Information and Event Management products.

Determine if:

- **AU-06(04)[01]** the capability to centrally review and analyze audit records from multiple components within the system is provided;
- **AU-06(04)[02]** the capability to centrally review and analyze audit records from multiple components within the system is implemented.

**Examine:** Audit and accountability policy; procedures addressing audit review, analysis, and reporting; system design documentation; system configuration settings and associated documentation; system security plan; privacy plan; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with audit review, analysis, and reporting responsibilities; organizational personnel with information security and privacy responsibilities; system developers.

**Test:** System capability to centralize review and analysis of audit records.

</details>

<a id="au-6.5"></a>

### AU-6(5) Integrated Analysis of Audit Records

*Baselines: High*

Integrate analysis of audit records with analysis of [Selection (one or more): vulnerability scanning information; performance data; system monitoring information; [Assignment: organization-defined data/information collected from other sources] ] to further enhance the ability to identify inappropriate or unusual activity.

<details>
<summary>Discussion and assessment objectives for AU-6(5)</summary>

Integrated analysis of audit records does not require vulnerability scanning, the generation of performance data, or system monitoring. Rather, integrated analysis requires that the analysis of information generated by scanning, monitoring, or other data collection activities is integrated with the analysis of audit record information. Security Information and Event Management tools can facilitate audit record aggregation or consolidation from multiple system components as well as audit record correlation and analysis. The use of standardized audit record analysis scripts developed by organizations (with localized script adjustments, as necessary) provides more cost-effective approaches for analyzing audit record information collected. The correlation of audit record information with vulnerability scanning information is important in determining the veracity of vulnerability scans of the system and in correlating attack detection events with scanning results. Correlation with performance data can uncover denial-of-service attacks or other types of attacks that result in the unauthorized use of resources. Correlation with system monitoring information can assist in uncovering attacks and in better relating audit information to operational situations.

Determine if analysis of audit records is integrated with analysis of [Selection (one or more): vulnerability scanning information; performance data; system monitoring information; [Assignment: organization-defined data/information collected from other sources] ] to further enhance the ability to identify inappropriate or unusual activity.

**Examine:** Audit and accountability policy; system security plan; privacy plan; procedures addressing audit review, analysis, and reporting; system design documentation; system configuration settings and associated documentation; integrated analysis of audit records, vulnerability scanning information, performance data, network monitoring information, and associated documentation; other relevant documents or records.

**Interview:** Organizational personnel with audit review, analysis, and reporting responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Mechanisms implementing the capability to integrate analysis of audit records with analysis of data/information sources.

</details>

<a id="au-6.6"></a>

### AU-6(6) Correlation with Physical Monitoring

*Baselines: High*

Correlate information from audit records with information obtained from monitoring physical access to further enhance the ability to identify suspicious, inappropriate, unusual, or malevolent activity.

<details>
<summary>Discussion and assessment objectives for AU-6(6)</summary>

The correlation of physical audit record information and the audit records from systems may assist organizations in identifying suspicious behavior or supporting evidence of such behavior. For example, the correlation of an individual’s identity for logical access to certain systems with the additional physical security information that the individual was present at the facility when the logical access occurred may be useful in investigations.

Determine if information from audit records is correlated with information obtained from monitoring physical access to further enhance the ability to identify suspicious, inappropriate, unusual, or malevolent activity.

**Examine:** Audit and accountability policy; procedures addressing audit review, analysis, and reporting; procedures addressing physical access monitoring; system design documentation; system configuration settings and associated documentation; documentation providing evidence of correlated information obtained from audit records and physical access monitoring records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with audit review, analysis, and reporting responsibilities; organizational personnel with physical access monitoring responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Mechanisms implementing the capability to correlate information from audit records with information from monitoring physical access.

</details>

<a id="au-6.7"></a>

### AU-6(7) Permitted Actions

*Baselines: Not in a baseline*

Specify the permitted actions for each [Selection (one or more): system process; role; user] associated with the review, analysis, and reporting of audit record information.

<details>
<summary>Discussion and assessment objectives for AU-6(7)</summary>

Organizations specify permitted actions for system processes, roles, and users associated with the review, analysis, and reporting of audit records through system account management activities. Specifying permitted actions on audit record information is a way to enforce the principle of least privilege. Permitted actions are enforced by the system and include read, write, execute, append, and delete.

Determine if the permitted actions for each [Selection (one or more): system process; role; user] associated with the review, analysis, and reporting of audit record information are specified.

**Examine:** Audit and accountability policy; procedures addressing process, role and/or user permitted actions from audit review, analysis, and reporting; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with audit review, analysis, and reporting responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Mechanisms supporting permitted actions for the review, analysis, and reporting of audit information.

</details>

<a id="au-6.8"></a>

### AU-6(8) Full Text Analysis of Privileged Commands

*Baselines: Not in a baseline*

Perform a full text analysis of logged privileged commands in a physically distinct component or subsystem of the system, or other system that is dedicated to that analysis.

<details>
<summary>Discussion and assessment objectives for AU-6(8)</summary>

Full text analysis of privileged commands requires a distinct environment for the analysis of audit record information related to privileged users without compromising such information on the system where the users have elevated privileges, including the capability to execute privileged commands. Full text analysis refers to analysis that considers the full text of privileged commands (i.e., commands and parameters) as opposed to analysis that considers only the name of the command. Full text analysis includes the use of pattern matching and heuristics.

Determine if a full text analysis of logged privileged commands in a physically distinct component or subsystem of the system or other system that is dedicated to that analysis is performed.

**Examine:** Audit and accountability policy; procedures addressing audit review, analysis, and reporting; system design documentation; system configuration settings and associated documentation; text analysis tools and techniques; text analysis documentation of audited privileged commands; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with audit review, analysis, and reporting responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Mechanisms implementing the capability to perform a full text analysis of audited privilege commands.

</details>

<a id="au-6.9"></a>

### AU-6(9) Correlation with Information from Nontechnical Sources

*Baselines: Not in a baseline*

Correlate information from nontechnical sources with audit record information to enhance organization-wide situational awareness.

<details>
<summary>Discussion and assessment objectives for AU-6(9)</summary>

Nontechnical sources include records that document organizational policy violations related to harassment incidents and the improper use of information assets. Such information can lead to a directed analytical effort to detect potential malicious insider activity. Organizations limit access to information that is available from nontechnical sources due to its sensitive nature. Limited access minimizes the potential for inadvertent release of privacy-related information to individuals who do not have a need to know. The correlation of information from nontechnical sources with audit record information generally occurs only when individuals are suspected of being involved in an incident. Organizations obtain legal advice prior to initiating such actions.

Determine if information from non-technical sources is correlated with audit record information to enhance organization-wide situational awareness.

**Examine:** Audit and accountability policy; system security plan; privacy plan; procedures addressing audit review, analysis, and reporting; system design documentation; system configuration settings and associated documentation; documentation providing evidence of correlated information obtained from audit records and organization-defined non-technical sources; list of information types from non-technical sources for correlation with audit information; other relevant documents or records.

**Interview:** Organizational personnel with audit review, analysis, and reporting responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Mechanisms implementing capability to correlate information from non-technical sources.

</details>

*Withdrawn enhancements: AU-6(2), AU-6(10).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for AU-6</summary>

Determine if:

- **AU-06a.** system audit records are reviewed and analyzed [Assignment: organization-defined frequency] for indications of [Assignment: organization-defined inappropriate or unusual activity] and the potential impact of the inappropriate or unusual activity;
- **AU-06b.** findings are reported to [Assignment: organization-defined personnel or roles];
- **AU-06c.** the level of audit record review, analysis, and reporting within the system is adjusted when there is a change in risk based on law enforcement information, intelligence information, or other credible sources of information.

**Examine:** Audit and accountability policy; system security plan; privacy plan; procedures addressing audit review, analysis, and reporting; reports of audit findings; records of actions taken in response to reviews/analyses of audit records; other relevant documents or records.

**Interview:** Organizational personnel with audit review, analysis, and reporting responsibilities; organizational personnel with information security and privacy responsibilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

AU-6 turns logs into detection: someone, or something, must review them for signs of trouble and report what they find. At Moderate the review is integrated through automation (AU-6(1)) and correlated across repositories (AU-6(3)), which in practice means a central log platform with alerting.

**Common implementations.** A security information and event management (SIEM) platform collects logs from every system, runs detection rules continuously and routes alerts to the security operations team. A documented manual review at a set interval covers what automation cannot. Findings go to the system owner and, when they are incidents, to the incident response team. The review level rises when threat intelligence indicates higher risk (AU-6c).

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Review frequency (a) | Continuously through automated alerting, with a documented manual review at least weekly |
| Inappropriate or unusual activity (a) | The activity listed in the log review procedure, such as repeated failed logons, privilege escalation and access outside normal patterns |
| Who receives findings (b) | The system owner and the incident response team |
| Automated mechanisms (AU-6(1)) | A security information and event management (SIEM) platform |

**Evidence assessors ask for.**

- The log review procedure
- Dated records of reviews, with what was found and who it was reported to
- The list of detection rules or use cases in the SIEM
- Examples of alerts that led to action

**Inheritance.** The SIEM and the security operations team are usually common controls; each system owns sending its logs and responding to findings about it.

**Common findings.**

- Reviews performed but not recorded, so there is no evidence.
- Systems not sending logs to the central platform.
- Alerts closed without investigation notes.

**Enhancements in the Moderate baseline.** [AU-6(1)](#au-6.1) automated process integration and [AU-6(3)](#au-6.3) correlating audit record repositories. High adds [AU-6(5)](#au-6.5) and [AU-6(6)](#au-6.6).
