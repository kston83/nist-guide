---
title: 'SI-2 Flaw Remediation'
description: 'NIST SP 800-53 Rev. 5 control SI-2, Flaw Remediation: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SI-2 Flaw Remediation'
  order: 2
control:
  id: SI-2
  family: SI
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 6 (1 in a baseline) |

**Related controls:** [CA-5](/controls/ca/ca-5/), [CM-3](/controls/cm/cm-3/), [CM-4](/controls/cm/cm-4/), [CM-5](/controls/cm/cm-5/), [CM-6](/controls/cm/cm-6/), [CM-8](/controls/cm/cm-8/), [MA-2](/controls/ma/ma-2/), [RA-5](/controls/ra/ra-5/), [SA-8](/controls/sa/sa-8/), [SA-10](/controls/sa/sa-10/), [SA-11](/controls/sa/sa-11/), [SI-3](/controls/si/si-3/), [SI-5](/controls/si/si-5/), [SI-7](/controls/si/si-7/), [SI-11](/controls/si/si-11/)

## Control statement

- **a.** Identify, report, and correct system flaws;
- **b.** Test software and firmware updates related to flaw remediation for effectiveness and potential side effects before installation;
- **c.** Install security-relevant software and firmware updates within [Assignment: organization-defined time period] of the release of the updates; and
- **d.** Incorporate flaw remediation into the organizational configuration management process.

<details>
<summary>NIST discussion</summary>

The need to remediate system flaws applies to all types of software and firmware. Organizations identify systems affected by software flaws, including potential vulnerabilities resulting from those flaws, and report this information to designated organizational personnel with information security and privacy responsibilities. Organizations consider establishing a controlled patching environment for mission-critical systems. Security-relevant updates include patches, service packs, and malicious code signatures. Organizations also address flaws discovered during assessments, continuous monitoring, incident response activities, and system error handling. By incorporating flaw remediation into configuration management processes, required remediation actions can be tracked and verified.

Organization-defined time periods for updating security-relevant software and firmware may vary based on a variety of risk factors, including the security category of the system, the criticality of the update (i.e., severity of the vulnerability related to the discovered flaw), the organizational risk tolerance, the mission supported by the system, or the threat environment. Some types of flaw remediation may require more testing than other types. Organizations determine the type of testing needed for the specific type of flaw remediation activity under consideration and the types of changes that are to be configuration-managed. Flaw remediation testing addresses both effectiveness of addressing security issues and for potential side effects on functionality, system and system component performance and operations. When implementing remediation activities, organizations consider the order and timing of updates to validate correct execution within the system environment, and to support system and component availability needs (i.e., implementing a staggered deployment strategy). In some situations, organizations may determine that the testing of software or firmware updates is not necessary or practical, such as when implementing simple malicious code signature updates. In testing decisions, organizations consider whether security-relevant software or firmware updates are obtained from authorized sources with appropriate digital signatures.

When implementing remediation activities, organizations consider the order and timing of updates to validate correct execution within the system environment, and to support system and component availability needs (i.e., implementing a staggered deployment strategy). Organizations verify that software and firmware updates come from authorized sources prior to downloading.

</details>

## Control enhancements

<a id="si-2.2"></a>

### SI-2(2) Automated Flaw Remediation Status

*Baselines: Moderate, High*

Determine if system components have applicable security-relevant software and firmware updates installed using [Assignment: organization-defined automated mechanisms] [Assignment: organization-defined frequency].

<details>
<summary>Discussion and assessment objectives for SI-2(2)</summary>

Automated mechanisms can track and determine the status of known flaws for system components.

Determine if system components have applicable security-relevant software and firmware updates installed [Assignment: organization-defined frequency] using [Assignment: organization-defined automated mechanisms].

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing flaw remediation; automated mechanisms supporting centralized management of flaw remediation; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for flaw remediation.

**Test:** Automated mechanisms used to determine the state of system components with regard to flaw remediation.

</details>

<a id="si-2.3"></a>

### SI-2(3) Time to Remediate Flaws and Benchmarks for Corrective Actions

*Baselines: Not in a baseline*

- **(a)** Measure the time between flaw identification and flaw remediation; and
- **(b)** Establish the following benchmarks for taking corrective actions: [Assignment: organization-defined benchmarks].

<details>
<summary>Discussion and assessment objectives for SI-2(3)</summary>

Organizations determine the time it takes on average to correct system flaws after such flaws have been identified and subsequently establish organizational benchmarks (i.e., time frames) for taking corrective actions. Benchmarks can be established by the type of flaw or the severity of the potential vulnerability if the flaw can be exploited.

Determine if:

- **SI-02(03)(a)** the time between flaw identification and flaw remediation is measured;
- **SI-02(03)(b)** [Assignment: organization-defined benchmarks] for taking corrective actions have been established.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing flaw remediation; system design documentation; system configuration settings and associated documentation; list of benchmarks for taking corrective action on identified flaws; records that provide timestamps of flaw identification and subsequent flaw remediation activities; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for flaw remediation.

**Test:** Organizational processes for identifying, reporting, and correcting system flaws; mechanisms used to measure the time between flaw identification and flaw remediation.

</details>

<a id="si-2.4"></a>

### SI-2(4) Automated Patch Management Tools

*Baselines: Not in a baseline*

Employ automated patch management tools to facilitate flaw remediation to the following system components: [Assignment: organization-defined components].

<details>
<summary>Discussion and assessment objectives for SI-2(4)</summary>

Using automated tools to support patch management helps to ensure the timeliness and completeness of system patching operations.

Determine if automated patch management tools are employed to facilitate flaw remediation to [Assignment: organization-defined components].

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing flaw remediation; mechanisms supporting flaw remediation and automatic software/firmware updates; system design documentation; system configuration settings and associated documentation; list of system flaws; records of recent security-relevant software and firmware updates that are automatically installed to system components; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for flaw remediation.

**Test:** Automated patch management tools; mechanisms implementing automatic software/firmware updates; mechanisms facilitating flaw remediation to system components.

</details>

<a id="si-2.5"></a>

### SI-2(5) Automatic Software and Firmware Updates

*Baselines: Not in a baseline*

Install [Assignment: organization-defined security-relevant software and firmware updates] automatically to [Assignment: organization-defined system components].

<details>
<summary>Discussion and assessment objectives for SI-2(5)</summary>

Due to system integrity and availability concerns, organizations consider the methodology used to carry out automatic updates. Organizations balance the need to ensure that the updates are installed as soon as possible with the need to maintain configuration management and control with any mission or operational impacts that automatic updates might impose (i.e., implementing a staggered deployment strategy).

Determine if [Assignment: organization-defined security-relevant software and firmware updates] are installed automatically to [Assignment: organization-defined system components].

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing flaw remediation; mechanisms supporting flaw remediation and automatic software/firmware updates; system design documentation; system configuration settings and associated documentation; records of recent security-relevant software and firmware updates automatically installed to system components; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for flaw remediation.

**Test:** Mechanisms implementing automatic software/firmware updates.

</details>

<a id="si-2.6"></a>

### SI-2(6) Removal of Previous Versions of Software and Firmware

*Baselines: Not in a baseline*

Remove previous versions of [Assignment: organization-defined software and firmware components] after updated versions have been installed.

<details>
<summary>Discussion and assessment objectives for SI-2(6)</summary>

Previous versions of software or firmware components that are not removed from the system after updates have been installed may be exploited by adversaries. Some products may automatically remove previous versions of software and firmware from the system.

Determine if previous versions of [Assignment: organization-defined software and firmware components] are removed after updated versions have been installed.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing flaw remediation; mechanisms supporting flaw remediation; system design documentation; system configuration settings and associated documentation; records of software and firmware component removals after updated versions are installed; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for flaw remediation.

**Test:** Mechanisms supporting and/or implementing the removal of previous versions of software/firmware.

</details>

<a id="si-2.7"></a>

### SI-2(7) Root Cause Analysis

*Baselines: Not in a baseline*

- **a.** Conduct root cause analysis to identify underlying causes of issues or failures.
- **b.** Develop actions to address the root cause of the issue or failure.
- **c.** Implement the actions and monitor the implementation for effectiveness.

<details>
<summary>Discussion and assessment objectives for SI-2(7)</summary>

Root cause analysis includes a wide range of approaches, tools, and techniques to systematically identify the underlying cause of issues or failures to systems and systems components (hardware, software, and firmware). Organizations consider the severity of the incident to determine what root cause analysis method is used and how quickly implementation of the remediation actions. The root cause analysis includes a timeline, missed warning signs, key decisions, gaps, mitigations, and verification of effectiveness. The actions identified to address the source of the issue are implemented and integrated into applicable organizational policy, procedures, and control implementation.

Determine if Determine if:

- **SI-02(07)a.** Root cause analysis is conducted to identify underlying causes of issues or failures
- **SI-02(07)b.** Actions to address the root cause of the issue of failure are developed
- **SI-02(07)c.**
  - The actions (defined in SI-02(07)b.) are implemented
  - The implementation of actions is monitored for effectiveness.

**Examine:** System and information integrity policy;; system and information integrity procedures;; procedures addressing flaw remediation;; procedures addressing root cause analysis/process improvement;; system design documentation;; system configuration settings and associated documentation;; system audit records;; system security and privacy plan;; other relevant documents or records.

**Interview:** System/network administrators;; organizational personnel with information security and privacy responsibilities;; organizational personnel responsible for installing, configuring, and/or maintaining the system;; organizational personnel responsible for flaw remediation;; organizational personnel with configuration management responsibilities.

**Test:** Organizational processes for identifying, reporting, and correcting system flaws;; organizational process for installing software and firmware updates;; mechanisms supporting and/or implementing the reporting and correcting of system flaws;; mechanisms supporting and/or implementing testing software and firmware updates.

</details>

*Withdrawn enhancements: SI-2(1).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SI-2</summary>

Determine if:

- **SI-02a.**
  - **SI-02a.[01]** system flaws are identified;
  - **SI-02a.[02]** system flaws are reported;
  - **SI-02a.[03]** system flaws are corrected;
- **SI-02b.**
  - **SI-02b.[01]** software updates related to flaw remediation are tested for effectiveness before installation;
  - **SI-02b.[02]** software updates related to flaw remediation are tested for potential side effects before installation;
  - **SI-02b.[03]** firmware updates related to flaw remediation are tested for effectiveness before installation;
  - **SI-02b.[04]** firmware updates related to flaw remediation are tested for potential side effects before installation;
- **SI-02c.**
  - **SI-02c.[01]** security-relevant software updates are installed within [Assignment: organization-defined time period] of the release of the updates;
  - **SI-02c.[02]** security-relevant firmware updates are installed within [Assignment: organization-defined time period] of the release of the updates;
- **SI-02d.** flaw remediation is incorporated into the organizational configuration management process.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing flaw remediation; procedures addressing configuration management; list of flaws and vulnerabilities potentially affecting the system; list of recent security flaw remediation actions performed on the system (e.g., list of installed patches, service packs, hot fixes, and other software updates to correct system flaws); test results from the installation of software and firmware updates to correct system flaws; installation/change control records for security-relevant software and firmware updates; system security plan; privacy plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security and privacy responsibilities; organizational personnel responsible for installing, configuring, and/or maintaining the system; organizational personnel responsible for flaw remediation; organizational personnel with configuration management responsibilities.

**Test:** Organizational processes for identifying, reporting, and correcting system flaws; organizational process for installing software and firmware updates; mechanisms supporting and/or implementing the reporting and correcting of system flaws; mechanisms supporting and/or implementing testing software and firmware updates.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write bel

## How to apply it

SI-2 asks you to find, report and fix flaws, test fixes before installing them, install security updates within set times, and run patching through configuration management. It pairs with [RA-5](/controls/ra/ra-5/): scanning finds the flaws, and SI-2 is the process that fixes them.

**Common implementations.** Patch management tools for operating systems and third-party software (for example Microsoft Intune, Configuration Manager, WSUS, or Linux package management through Ansible), with a test group that gets updates before production. Container images and infrastructure rebuilt from patched base images instead of patched in place. Vendor security advisories monitored for appliances and applications that the patch tools do not cover. Emergency changes for actively exploited flaws, and standard or pre-approved changes for routine monthly patching, recorded under [CM-3](/controls/cm/cm-3/).

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Time to install security updates (c) | Known exploited: as soon as possible, within days; critical and high: 30 days; moderate: 90 days; low: 180 days, from the update's release |
| Automated mechanisms to check update status (SI-2(2)) | The patch management and vulnerability scanning tools |
| How often to check update status (SI-2(2)) | At least weekly |

**Evidence assessors ask for.**

- The flaw remediation or patch management procedure, with installation times
- Patch compliance reports by component
- Test records for a sample of updates
- Change records for recent patching
- A sample of vendor advisories with the date each update was installed

**Inheritance.** Enterprise patch management tools and operating system patching are often common controls. The system owns patching of its applications, middleware, containers and appliances.

**Common findings.**

- Patching measured for operating systems only, with applications and appliances left out.
- Unsupported software or firmware with no fixes available and no POA&M item.
- Remediation times in the procedure that differ from those in the policy or the scanner's reports.
- Servers excluded from patching "temporarily" for months.

**Enhancements in the Moderate baseline.** [SI-2(2)](#si-2.2) automated flaw remediation status, also in High.

**Federal systems** (as of September 2026). CISA [BOD 26-04](https://www.cisa.gov/news-events/directives/bod-26-04-prioritizing-security-updates-based-risk), Prioritizing Security Updates Based on Risk (June 10, 2026), sets deadlines for federal civilian agencies by exposure, KEV status, whether exploitation can be automated and technical impact, from 3 days to "fix on system upgrade". It replaced BOD 22-01. Set the SI-2c value no weaker than its deadlines.
