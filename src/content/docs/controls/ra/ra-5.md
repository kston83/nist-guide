---
title: 'RA-5 Vulnerability Monitoring and Scanning'
description: 'NIST SP 800-53 Rev. 5 control RA-5, Vulnerability Monitoring and Scanning: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'RA-5 Vulnerability Monitoring and Scanning'
  order: 5
control:
  id: RA-5
  family: RA
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 8 (4 in a baseline) |

**Related controls:** [CA-2](/controls/ca/ca-2/), [CA-7](/controls/ca/ca-7/), [CA-8](/controls/ca/ca-8/), [CM-2](/controls/cm/cm-2/), [CM-4](/controls/cm/cm-4/), [CM-6](/controls/cm/cm-6/), [CM-8](/controls/cm/cm-8/), [RA-2](/controls/ra/ra-2/), [RA-3](/controls/ra/ra-3/), [SA-11](/controls/sa/sa-11/), [SA-15](/controls/sa/sa-15/), [SC-38](/controls/sc/sc-38/), [SI-2](/controls/si/si-2/), [SI-3](/controls/si/si-3/), [SI-4](/controls/si/si-4/), [SI-7](/controls/si/si-7/), [SR-11](/controls/sr/sr-11/)

## Control statement

- **a.** Monitor and scan for vulnerabilities in the system and hosted applications [Assignment: organization-defined frequency and/or randomly in accordance with organization-defined process] and when new vulnerabilities potentially affecting the system are identified and reported;
- **b.** Employ vulnerability monitoring tools and techniques that facilitate interoperability among tools and automate parts of the vulnerability management process by using standards for:
  - **1.** Enumerating platforms, software flaws, and improper configurations;
  - **2.** Formatting checklists and test procedures; and
  - **3.** Measuring vulnerability impact;
- **c.** Analyze vulnerability scan reports and results from vulnerability monitoring;
- **d.** Remediate legitimate vulnerabilities [Assignment: organization-defined response times] in accordance with an organizational assessment of risk;
- **e.** Share information obtained from the vulnerability monitoring process and control assessments with [Assignment: organization-defined personnel or roles] to help eliminate similar vulnerabilities in other systems; and
- **f.** Employ vulnerability monitoring tools that include the capability to readily update the vulnerabilities to be scanned.

<details>
<summary>NIST discussion</summary>

Security categorization of information and systems guides the frequency and comprehensiveness of vulnerability monitoring (including scans). Organizations determine the required vulnerability monitoring for system components, ensuring that the potential sources of vulnerabilities—such as infrastructure components (e.g., switches, routers, guards, sensors), networked printers, scanners, and copiers—are not overlooked. The capability to readily update vulnerability monitoring tools as new vulnerabilities are discovered and announced and as new scanning methods are developed helps to ensure that new vulnerabilities are not missed by employed vulnerability monitoring tools. The vulnerability monitoring tool update process helps to ensure that potential vulnerabilities in the system are identified and addressed as quickly as possible. Vulnerability monitoring and analyses for custom software may require additional approaches, such as static analysis, dynamic analysis, binary analysis, or a hybrid of the three approaches. Organizations can use these analysis approaches in source code reviews and in a variety of tools, including web-based application scanners, static analysis tools, and binary analyzers.

Vulnerability monitoring includes scanning for patch levels; scanning for functions, ports, protocols, and services that should not be accessible to users or devices; and scanning for flow control mechanisms that are improperly configured or operating incorrectly. Vulnerability monitoring may also include continuous vulnerability monitoring tools that use instrumentation to continuously analyze components. Instrumentation-based tools may improve accuracy and may be run throughout an organization without scanning. Vulnerability monitoring tools that facilitate interoperability include tools that are Security Content Automated Protocol (SCAP)-validated. Thus, organizations consider using scanning tools that express vulnerabilities in the Common Vulnerabilities and Exposures (CVE) naming convention and that employ the Open Vulnerability Assessment Language (OVAL) to determine the presence of vulnerabilities. Sources for vulnerability information include the Common Weakness Enumeration (CWE) listing and the National Vulnerability Database (NVD). Control assessments, such as red team exercises, provide additional sources of potential vulnerabilities for which to scan. Organizations also consider using scanning tools that express vulnerability impact by the Common Vulnerability Scoring System (CVSS).

Vulnerability monitoring includes a channel and process for receiving reports of security vulnerabilities from the public at-large. Vulnerability disclosure programs can be as simple as publishing a monitored email address or web form that can receive reports, including notification authorizing good-faith research and disclosure of security vulnerabilities. Organizations generally expect that such research is happening with or without their authorization and can use public vulnerability disclosure channels to increase the likelihood that discovered vulnerabilities are reported directly to the organization for remediation.

Organizations may also employ the use of financial incentives (also known as "bug bounties" ) to further encourage external security researchers to report discovered vulnerabilities. Bug bounty programs can be tailored to the organization’s needs. Bounties can be operated indefinitely or over a defined period of time and can be offered to the general public or to a curated group. Organizations may run public and private bounties simultaneously and could choose to offer partially credentialed access to certain participants in order to evaluate security vulnerabilities from privileged vantage points.

</details>

## Control enhancements

<a id="ra-5.2"></a>

### RA-5(2) Update Vulnerabilities to Be Scanned

*Baselines: Low, Moderate, High*

Update the system vulnerabilities to be scanned [Selection (one or more): [Assignment: organization-defined frequency] ; prior to a new scan; when new vulnerabilities are identified and reported].

<details>
<summary>Discussion and assessment objectives for RA-5(2)</summary>

Due to the complexity of modern software, systems, and other factors, new vulnerabilities are discovered on a regular basis. It is important that newly discovered vulnerabilities are added to the list of vulnerabilities to be scanned to ensure that the organization can take steps to mitigate those vulnerabilities in a timely manner.

Determine if the system vulnerabilities to be scanned are updated [Selection (one or more): [Assignment: organization-defined frequency] ; prior to a new scan; when new vulnerabilities are identified and reported].

**Examine:** Procedures addressing vulnerability scanning; assessment report; vulnerability scanning tools and associated configuration documentation; vulnerability scanning results; patch and vulnerability management records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with vulnerability scanning responsibilities; organizational personnel with vulnerability scan analysis responsibilities; organizational personnel with security responsibilities; system/network administrators.

**Test:** Organizational processes for vulnerability scanning; mechanisms/tools supporting and/or implementing vulnerability scanning.

</details>

<a id="ra-5.3"></a>

### RA-5(3) Breadth and Depth of Coverage

*Baselines: Not in a baseline*

Define the breadth and depth of vulnerability scanning coverage.

<details>
<summary>Discussion and assessment objectives for RA-5(3)</summary>

The breadth of vulnerability scanning coverage can be expressed as a percentage of components within the system, by the particular types of systems, by the criticality of systems, or by the number of vulnerabilities to be checked. Conversely, the depth of vulnerability scanning coverage can be expressed as the level of the system design that the organization intends to monitor (e.g., component, module, subsystem, element). Organizations can determine the sufficiency of vulnerability scanning coverage with regard to its risk tolerance and other factors. Scanning tools and how the tools are configured may affect the depth and coverage. Multiple scanning tools may be needed to achieve the desired depth and coverage. SP 800-53A provides additional information on the breadth and depth of coverage.

Determine if the breadth and depth of vulnerability scanning coverage are defined.

**Examine:** Procedures addressing vulnerability scanning; assessment report; vulnerability scanning tools and associated configuration documentation; vulnerability scanning results; patch and vulnerability management records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with vulnerability scanning responsibilities; organizational personnel with vulnerability scan analysis responsibilities; organizational personnel with security responsibilities.

**Test:** Organizational processes for vulnerability scanning; mechanisms/tools supporting and/or implementing vulnerability scanning.

</details>

<a id="ra-5.4"></a>

### RA-5(4) Discoverable Information

*Baselines: High*

Determine information about the system that is discoverable and take [Assignment: organization-defined corrective actions].

<details>
<summary>Discussion and assessment objectives for RA-5(4)</summary>

Discoverable information includes information that adversaries could obtain without compromising or breaching the system, such as by collecting information that the system is exposing or by conducting extensive web searches. Corrective actions include notifying appropriate organizational personnel, removing designated information, or changing the system to make the designated information less relevant or attractive to adversaries. This enhancement excludes intentionally discoverable information that may be part of a decoy capability (e.g., honeypots, honeynets, or deception nets) deployed by the organization.

Determine if:

- **RA-05(04)[01]** information about the system is discoverable;
- **RA-05(04)[02]** [Assignment: organization-defined corrective actions] are taken when information about the system is confirmed as discoverable.

**Examine:** Procedures addressing vulnerability scanning; assessment report; penetration test results; vulnerability scanning results; risk assessment report; records of corrective actions taken; incident response records; audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with vulnerability scanning and/or penetration testing responsibilities; organizational personnel with vulnerability scan analysis responsibilities; organizational personnel responsible for risk response; organizational personnel responsible for incident management and response; organizational personnel with security responsibilities.

**Test:** Organizational processes for vulnerability scanning; organizational processes for risk response; organizational processes for incident management and response; mechanisms/tools supporting and/or implementing vulnerability scanning; mechanisms supporting and/or implementing risk response; mechanisms supporting and/or implementing incident management and response.

</details>

<a id="ra-5.5"></a>

### RA-5(5) Privileged Access

*Baselines: Moderate, High*

Implement privileged access authorization to [Assignment: organization-defined system components] for [Assignment: organization-defined vulnerability scanning activities].

<details>
<summary>Discussion and assessment objectives for RA-5(5)</summary>

In certain situations, the nature of the vulnerability scanning may be more intrusive, or the system component that is the subject of the scanning may contain classified or controlled unclassified information, such as personally identifiable information. Privileged access authorization to selected system components facilitates more thorough vulnerability scanning and protects the sensitive nature of such scanning.

Determine if privileged access authorization is implemented to [Assignment: organization-defined system components] for [Assignment: organization-defined vulnerability scanning activities].

**Examine:** Risk assessment policy; procedures addressing vulnerability scanning; system design documentation; system configuration settings and associated documentation; list of system components for vulnerability scanning; personnel access authorization list; authorization credentials; access authorization records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with vulnerability scanning responsibilities; system/network administrators; organizational personnel responsible for access control to the system; organizational personnel responsible for configuration management of the system; system developers; organizational personnel with security responsibilities.

**Test:** Organizational processes for vulnerability scanning; organizational processes for access control; mechanisms supporting and/or implementing access control; mechanisms/tools supporting and/or implementing vulnerability scanning.

</details>

<a id="ra-5.6"></a>

### RA-5(6) Automated Trend Analyses

*Baselines: Not in a baseline*

Compare the results of multiple vulnerability scans using [Assignment: organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for RA-5(6)</summary>

Using automated mechanisms to analyze multiple vulnerability scans over time can help determine trends in system vulnerabilities and identify patterns of attack.

Determine if the results of multiple vulnerability scans are compared using [Assignment: organization-defined automated mechanisms].

**Examine:** Risk assessment policy; procedures addressing vulnerability scanning; system design documentation; vulnerability scanning tools and techniques documentation; vulnerability scanning results; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with vulnerability scanning responsibilities; organizational personnel with vulnerability scan analysis responsibilities; organizational personnel with security responsibilities.

**Test:** Organizational processes for vulnerability scanning; automated mechanisms/tools supporting and/or implementing vulnerability scanning; automated mechanisms supporting and/or implementing trend analysis of vulnerability scan results.

</details>

<a id="ra-5.8"></a>

### RA-5(8) Review Historic Audit Logs

*Baselines: Not in a baseline*

Review historic audit logs to determine if a vulnerability identified in a [Assignment: organization-defined system] has been previously exploited within an [Assignment: organization-defined time period].

<details>
<summary>Discussion and assessment objectives for RA-5(8)</summary>

Reviewing historic audit logs to determine if a recently detected vulnerability in a system has been previously exploited by an adversary can provide important information for forensic analyses. Such analyses can help identify, for example, the extent of a previous intrusion, the trade craft employed during the attack, organizational information exfiltrated or modified, mission or business capabilities affected, and the duration of the attack.

Determine if historic audit logs are reviewed to determine if a vulnerability identified in a [Assignment: organization-defined system] has been previously exploited within [Assignment: organization-defined time period].

**Examine:** Risk assessment policy; procedures addressing vulnerability scanning; audit logs; records of audit log reviews; vulnerability scanning results; patch and vulnerability management records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with vulnerability scanning responsibilities; organizational personnel with vulnerability scan analysis responsibilities; organizational personnel with audit record review responsibilities; system/network administrators; organizational personnel with security responsibilities.

**Test:** Organizational processes for vulnerability scanning; organizational process for audit record review and response; mechanisms/tools supporting and/or implementing vulnerability scanning; mechanisms supporting and/or implementing audit record review.

</details>

<a id="ra-5.10"></a>

### RA-5(10) Correlate Scanning Information

*Baselines: Not in a baseline*

Correlate the output from vulnerability scanning tools to determine the presence of multi-vulnerability and multi-hop attack vectors.

<details>
<summary>Discussion and assessment objectives for RA-5(10)</summary>

An attack vector is a path or means by which an adversary can gain access to a system in order to deliver malicious code or exfiltrate information. Organizations can use attack trees to show how hostile activities by adversaries interact and combine to produce adverse impacts or negative consequences to systems and organizations. Such information, together with correlated data from vulnerability scanning tools, can provide greater clarity regarding multi-vulnerability and multi-hop attack vectors. The correlation of vulnerability scanning information is especially important when organizations are transitioning from older technologies to newer technologies (e.g., transitioning from IPv4 to IPv6 network protocols). During such transitions, some system components may inadvertently be unmanaged and create opportunities for adversary exploitation.

Determine if the output from vulnerability scanning tools is correlated to determine the presence of multi-vulnerability and multi-hop attack vectors.

**Examine:** Risk assessment policy; procedures addressing vulnerability scanning; risk assessment; vulnerability scanning tools and techniques documentation; vulnerability scanning results; vulnerability management records; audit records; event/vulnerability correlation logs; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with vulnerability scanning responsibilities; organizational personnel with vulnerability scan analysis responsibilities; organizational personnel with security responsibilities.

**Test:** Organizational processes for vulnerability scanning; mechanisms/tools supporting and/or implementing vulnerability scanning; mechanisms implementing the correlation of vulnerability scan results.

</details>

<a id="ra-5.11"></a>

### RA-5(11) Public Disclosure Program

*Baselines: Low, Moderate, High*

Establish a public reporting channel for receiving reports of vulnerabilities in organizational systems and system components.

<details>
<summary>Discussion and assessment objectives for RA-5(11)</summary>

The reporting channel is publicly discoverable and contains clear language authorizing good-faith research and the disclosure of vulnerabilities to the organization. The organization does not condition its authorization on an expectation of indefinite non-disclosure to the public by the reporting entity but may request a specific time period to properly remediate the vulnerability.

Determine if a public reporting channel is established for receiving reports of vulnerabilities in organizational systems and system components.

**Examine:** Risk assessment policy; procedures addressing vulnerability scanning; risk assessment; vulnerability scanning tools and techniques documentation; vulnerability scanning results; vulnerability management records; audit records; public reporting channel; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with vulnerability scanning responsibilities; organizational personnel with vulnerability scan analysis responsibilities; organizational personnel with security responsibilities.

**Test:** Organizational processes for vulnerability scanning; mechanisms/tools supporting and/or implementing vulnerability scanning; mechanisms implementing the public reporting of vulnerabilities.

</details>

*Withdrawn enhancements: RA-5(1), RA-5(7), RA-5(9).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for RA-5</summary>

Determine if:

- **RA-05a.**
  - **RA-05a.[01]** systems and hosted applications are monitored for vulnerabilities [Assignment: organization-defined frequency and/or randomly in accordance with organization-defined process] and when new vulnerabilities potentially affecting the system are identified and reported;
  - **RA-05a.[02]** systems and hosted applications are scanned for vulnerabilities [Assignment: organization-defined frequency and/or randomly in accordance with organization-defined process] and when new vulnerabilities potentially affecting the system are identified and reported;
- **RA-05b.** vulnerability monitoring tools and techniques are employed to facilitate interoperability among tools;
  - **RA-05b.01** vulnerability monitoring tools and techniques are employed to automate parts of the vulnerability management process by using standards for enumerating platforms, software flaws, and improper configurations;
  - **RA-05b.02** vulnerability monitoring tools and techniques are employed to facilitate interoperability among tools and to automate parts of the vulnerability management process by using standards for formatting checklists and test procedures;
  - **RA-05b.03** vulnerability monitoring tools and techniques are employed to facilitate interoperability among tools and to automate parts of the vulnerability management process by using standards for measuring vulnerability impact;
- **RA-05c.** vulnerability scan reports and results from vulnerability monitoring are analyzed;
- **RA-05d.** legitimate vulnerabilities are remediated [Assignment: organization-defined response times] in accordance with an organizational assessment of risk;
- **RA-05e.** information obtained from the vulnerability monitoring process and control assessments is shared with [Assignment: organization-defined personnel or roles] to help eliminate similar vulnerabilities in other systems;
- **RA-05f.** vulnerability monitoring tools that include the capability to readily update the vulnerabilities to be scanned are employed.

**Examine:** Risk assessment policy; procedures addressing vulnerability scanning; risk assessment; assessment report; vulnerability scanning tools and associated configuration documentation; vulnerability scanning results; patch and vulnerability management records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with risk assessment, control assessment, and vulnerability scanning responsibilities; organizational personnel with vulnerability scan analysis responsibilities; organizational personnel with vulnerability remediation responsibilities; organizational personnel with security responsibilities; system/network administrators.

**Test:** Organizational processes for vulnerability scanning, analysis, remediation, and information sharing; mechanisms supporting and/or implementing vulnerability scanning, analysis, remediation, and information sharing.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write bel

## How to apply it

RA-5 asks you to find vulnerabilities on a schedule and whenever new ones are announced, analyze the results, fix real vulnerabilities within set times based on risk, and share what you learn. Scanning tools must use standard naming and scoring (for example CVE, CPE and CVSS) and be able to take new vulnerability checks quickly.

**Common implementations.** Authenticated infrastructure scanning of servers, workstations, network devices and databases (for example Tenable, Qualys or Rapid7), container image and cloud configuration scanning, and web application scanning. Results flow into a ticketing system with due dates set by severity and exploitation status, using a known-exploited list such as CISA's [Known Exploited Vulnerabilities Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) to move urgent items forward. Vulnerabilities not fixed on time become POA&M items or approved risk acceptances. A published vulnerability disclosure policy receives outside reports (RA-5(11)).

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Scan frequency (a) | At least monthly for infrastructure and before each major release for applications, and when a new vulnerability affecting the system is reported |
| Remediation times (d) | Known exploited: as soon as possible, within days; critical and high: 30 days; moderate: 90 days; low: 180 days |
| Who receives shared results (e) | System owners of similar systems and the security operations team |
| When scanner checks are updated (RA-5(2)) | Before each new scan |
| Components and scans needing privileged access (RA-5(5)) | Operating systems, databases and web applications, for credentialed scans |

**Evidence assessors ask for.**

- The vulnerability management procedure, with remediation times
- Recent scan results showing authenticated scans and full coverage of the inventory
- A sample of findings with ticket dates, fix dates and any POA&M entries
- Scanner plug-in or signature update records
- The vulnerability disclosure policy and a record of reports handled

**Inheritance.** Scanning platforms and a central vulnerability management team are often common controls. The system owns remediation, coverage of its components and its own application testing.

**Common findings.**

- Unauthenticated scans only, which miss most missing patches.
- Scans that cover fewer hosts than the inventory lists.
- Old high and critical vulnerabilities with no POA&M item or risk acceptance.
- False positives closed with no documented analysis.

**Enhancements in the Moderate baseline.** [RA-5(2)](#ra-5.2) updating the vulnerabilities scanned and [RA-5(11)](#ra-5.11) public disclosure program (both also Low), and [RA-5(5)](#ra-5.5) privileged access for scanning. High adds [RA-5(4)](#ra-5.4) discoverable information.

**Federal systems** (as of September 2026). CISA binding operational directives set minimums for federal civilian agencies:

- [BOD 26-04](https://www.cisa.gov/news-events/directives/bod-26-04-prioritizing-security-updates-based-risk), Prioritizing Security Updates Based on Risk (June 10, 2026), sets remediation deadlines by exposure, KEV status, whether exploitation can be automated, and technical impact, from 3 days for a publicly exposed, known exploited, automatable vulnerability with total impact to "fix on system upgrade" for the lowest-risk cases. The clock starts when CISA adds a vulnerability to the KEV catalog or the agency identifies it, whichever is first. BOD 26-04 revoked BOD 22-01 and BOD 19-02.
- [BOD 23-01](https://www.cisa.gov/news-events/directives/bod-23-01-improving-asset-visibility-and-vulnerability-detection-federal-networks), Improving Asset Visibility and Vulnerability Detection on Federal Networks (October 3, 2022), requires automated asset discovery every 7 days and vulnerability enumeration across discovered assets every 14 days.
- [BOD 20-01](https://www.cisa.gov/news-events/directives/bod-20-01-develop-and-publish-vulnerability-disclosure-policy) (September 2, 2020) requires a published vulnerability disclosure policy, which meets RA-5(11).

Set the RA-5a and RA-5d values no weaker than these.
