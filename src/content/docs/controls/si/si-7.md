---
title: 'SI-7 Software, Firmware, and Information Integrity'
description: 'NIST SP 800-53 Rev. 5 control SI-7, Software, Firmware, and Information Integrity: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SI-7 Software, Firmware, and Information Integrity'
  order: 7
control:
  id: SI-7
  family: SI
  baselines: [Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | Organization | 13 (5 in a baseline) |

**Related controls:** [AC-4](/controls/ac/ac-4/), [CM-3](/controls/cm/cm-3/), [CM-7](/controls/cm/cm-7/), [CM-8](/controls/cm/cm-8/), [MA-3](/controls/ma/ma-3/), [MA-4](/controls/ma/ma-4/), [RA-5](/controls/ra/ra-5/), [SA-8](/controls/sa/sa-8/), [SA-9](/controls/sa/sa-9/), [SA-10](/controls/sa/sa-10/), [SC-8](/controls/sc/sc-8/), [SC-12](/controls/sc/sc-12/), [SC-13](/controls/sc/sc-13/), [SC-28](/controls/sc/sc-28/), [SC-37](/controls/sc/sc-37/), [SI-3](/controls/si/si-3/), [SR-3](/controls/sr/sr-3/), [SR-4](/controls/sr/sr-4/), [SR-5](/controls/sr/sr-5/), [SR-6](/controls/sr/sr-6/), [SR-9](/controls/sr/sr-9/), [SR-10](/controls/sr/sr-10/), [SR-11](/controls/sr/sr-11/)

## Control statement

- **a.** Employ integrity verification tools to detect unauthorized changes to the following software, firmware, and information: [Assignment: organization-defined software, firmware, and information] ; and
- **b.** Take the following actions when unauthorized changes to the software, firmware, and information are detected: [Assignment: organization-defined actions].

<details>
<summary>NIST discussion</summary>

Unauthorized changes to software, firmware, and information can occur due to errors or malicious activity. Software includes operating systems (with key internal components, such as kernels or drivers), middleware, and applications. Firmware interfaces include Unified Extensible Firmware Interface (UEFI) and Basic Input/Output System (BIOS). Information includes personally identifiable information and metadata that contains security and privacy attributes associated with information. Integrity-checking mechanisms—including parity checks, cyclical redundancy checks, cryptographic hashes, and associated tools—can automatically monitor the integrity of systems and hosted applications.

</details>

## Control enhancements

<a id="si-7.1"></a>

### SI-7(1) Integrity Checks

*Baselines: Moderate, High*

Perform an integrity check of [Assignment: organization-defined software, firmware, and information] [Selection (one or more): at startup; at [Assignment: organization-defined transitional states or security-relevant events] ; [Assignment: organization-defined frequency] ].

<details>
<summary>Discussion and assessment objectives for SI-7(1)</summary>

Security-relevant events include the identification of new threats to which organizational systems are susceptible and the installation of new hardware, software, or firmware. Transitional states include system startup, restart, shutdown, and abort.

Determine if:

- **SI-07(01)[01]** an integrity check of [Assignment: organization-defined software] is performed [Selection (one or more): at startup; at [Assignment: organization-defined transitional states or security-relevant events] ; [Assignment: organization-defined frequency] ];
- **SI-07(01)[02]** an integrity check of [Assignment: organization-defined firmware] is performed [Selection (one or more): at startup; at [Assignment: organization-defined transitional states or security-relevant events] ; [Assignment: organization-defined frequency] ];
- **SI-07(01)[03]** an integrity check of [Assignment: organization-defined information] is performed [Selection (one or more): at startup; at [Assignment: organization-defined transitional states or security-relevant events] ; [Assignment: organization-defined frequency] ].

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing software, firmware, and information integrity testing; system design documentation; system configuration settings and associated documentation; integrity verification tools and associated documentation; records of integrity scans; system security plan; other relevant documents or records.

**Interview:** Organizational personnel responsible for software, firmware, and/or information integrity; organizational personnel with information security responsibilities; system/network administrators; system developer.

**Test:** Software, firmware, and information integrity verification tools.

</details>

<a id="si-7.2"></a>

### SI-7(2) Automated Notifications of Integrity Violations

*Baselines: High*

Employ automated tools that provide notification to [Assignment: organization-defined personnel or roles] upon discovering discrepancies during integrity verification.

<details>
<summary>Discussion and assessment objectives for SI-7(2)</summary>

The employment of automated tools to report system and information integrity violations and to notify organizational personnel in a timely matter is essential to effective risk response. Personnel with an interest in system and information integrity violations include mission and business owners, system owners, senior agency information security official, senior agency official for privacy, system administrators, software developers, systems integrators, information security officers, and privacy officers.

Determine if automated tools that provide notification to [Assignment: organization-defined personnel or roles] upon discovering discrepancies during integrity verification are employed.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing software, firmware, and information integrity; personally identifiable information processing policy; system design documentation; system configuration settings and associated documentation; integrity verification tools and associated documentation; records of integrity scans; automated tools supporting alerts and notifications for integrity discrepancies; notifications provided upon discovering discrepancies during integrity verifications; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel responsible for software, firmware, and/or information integrity; organizational personnel with information security and privacy responsibilities; system administrators; software developers.

**Test:** Software, firmware, and information integrity verification tools; mechanisms providing integrity discrepancy notifications.

</details>

<a id="si-7.3"></a>

### SI-7(3) Centrally Managed Integrity Tools

*Baselines: Not in a baseline*

Employ centrally managed integrity verification tools.

<details>
<summary>Discussion and assessment objectives for SI-7(3)</summary>

Centrally managed integrity verification tools provides greater consistency in the application of such tools and can facilitate more comprehensive coverage of integrity verification actions.

Determine if centrally managed integrity verification tools are employed.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing software, firmware, and information integrity; system design documentation; system configuration settings and associated documentation; integrity verification tools and associated documentation; records of integrity scans; system security plan; other relevant documents or records.

**Interview:** Organizational personnel responsible for the central management of integrity verification tools; organizational personnel with information security responsibilities.

**Test:** Mechanisms supporting and/or implementing the central management of integrity verification tools.

</details>

<a id="si-7.5"></a>

### SI-7(5) Automated Response to Integrity Violations

*Baselines: High*

Automatically [Selection (one or more): shut down the system; restart the system; implement [Assignment: organization-defined controls] ] when integrity violations are discovered.

<details>
<summary>Discussion and assessment objectives for SI-7(5)</summary>

Organizations may define different integrity-checking responses by type of information, specific information, or a combination of both. Types of information include firmware, software, and user data. Specific information includes boot firmware for certain types of machines. The automatic implementation of controls within organizational systems includes reversing the changes, halting the system, or triggering audit alerts when unauthorized modifications to critical security files occur.

Determine if [Selection (one or more): shut down the system; restart the system; implement [Assignment: organization-defined controls] ] are automatically performed when integrity violations are discovered.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing software, firmware, and information integrity; system design documentation; system configuration settings and associated documentation; integrity verification tools and associated documentation; records of integrity scans; records of integrity checks and responses to integrity violations; audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel responsible for software, firmware, and/or information integrity; organizational personnel with information security responsibilities; system/network administrators; system developer.

**Test:** Software, firmware, and information integrity verification tools; mechanisms providing an automated response to integrity violations; mechanisms supporting and/or implementing security safeguards to be implemented when integrity violations are discovered.

</details>

<a id="si-7.6"></a>

### SI-7(6) Cryptographic Protection

*Baselines: Not in a baseline*

Implement cryptographic mechanisms to detect unauthorized changes to software, firmware, and information.

<details>
<summary>Discussion and assessment objectives for SI-7(6)</summary>

Cryptographic mechanisms used to protect integrity include digital signatures and the computation and application of signed hashes using asymmetric cryptography, protecting the confidentiality of the key used to generate the hash, and using the public key to verify the hash information. Organizations that employ cryptographic mechanisms also consider cryptographic key management solutions.

Determine if:

- **SI-07(06)[01]** cryptographic mechanisms are implemented to detect unauthorized changes to software;
- **SI-07(06)[02]** cryptographic mechanisms are implemented to detect unauthorized changes to firmware;
- **SI-07(06)[03]** cryptographic mechanisms are implemented to detect unauthorized changes to information.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing software, firmware, and information integrity; system design documentation; system configuration settings and associated documentation; cryptographic mechanisms and associated documentation; records of detected unauthorized changes to software, firmware, and information; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel responsible for software, firmware, and/or information integrity; organizational personnel with information security responsibilities; system/network administrators; system developer.

**Test:** Software, firmware, and information integrity verification tools; cryptographic mechanisms implementing software, firmware, and information integrity.

</details>

<a id="si-7.7"></a>

### SI-7(7) Integration of Detection and Response

*Baselines: Moderate, High*

Incorporate the detection of the following unauthorized changes into the organizational incident response capability: [Assignment: organization-defined changes].

<details>
<summary>Discussion and assessment objectives for SI-7(7)</summary>

Integrating detection and response helps to ensure that detected events are tracked, monitored, corrected, and available for historical purposes. Maintaining historical records is important for being able to identify and discern adversary actions over an extended time period and for possible legal actions. Security-relevant changes include unauthorized changes to established configuration settings or the unauthorized elevation of system privileges.

Determine if the detection of [Assignment: organization-defined changes] are incorporated into the organizational incident response capability.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing software, firmware, and information integrity; procedures addressing incident response; system design documentation; system configuration settings and associated documentation; incident response records; audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel responsible for software, firmware, and/or information integrity; organizational personnel with information security responsibilities; organizational personnel with incident response responsibilities.

**Test:** Organizational processes for incorporating the detection of unauthorized security-relevant changes into the incident response capability; software, firmware, and information integrity verification tools; mechanisms supporting and/or implementing the incorporation of detection of unauthorized security-relevant changes into the incident response capability.

</details>

<a id="si-7.8"></a>

### SI-7(8) Auditing Capability for Significant Events

*Baselines: Not in a baseline*

Upon detection of a potential integrity violation, provide the capability to audit the event and initiate the following actions: [Selection (one or more): generate an audit record; alert current user; alert [Assignment: organization-defined personnel or roles] ; [Assignment: organization-defined other actions] ].

<details>
<summary>Discussion and assessment objectives for SI-7(8)</summary>

Organizations select response actions based on types of software, specific software, or information for which there are potential integrity violations.

Determine if:

- **SI-07(08)[01]** the capability to audit an event upon the detection of a potential integrity violation is provided;
- **SI-07(08)[02]** [Selection (one or more): generate an audit record; alert current user; alert [Assignment: organization-defined personnel or roles] ; [Assignment: organization-defined other actions] ] is/are initiated upon the detection of a potential integrity violation.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing software, firmware, and information integrity; system design documentation; system configuration settings and associated documentation; integrity verification tools and associated documentation; records of integrity scans; incident response records; list of security-relevant changes to the system; automated tools supporting alerts and notifications if unauthorized security changes are detected; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel responsible for software, firmware, and/or information integrity; organizational personnel with information security responsibilities; system/network administrators; system developer.

**Test:** Software, firmware, and information integrity verification tools; mechanisms supporting and/or implementing the capability to audit potential integrity violations; mechanisms supporting and/or implementing alerts about potential integrity violations.

</details>

<a id="si-7.9"></a>

### SI-7(9) Verify Boot Process

*Baselines: Not in a baseline*

Verify the integrity of the boot process of the following system components: [Assignment: organization-defined system components].

<details>
<summary>Discussion and assessment objectives for SI-7(9)</summary>

Ensuring the integrity of boot processes is critical to starting system components in known, trustworthy states. Integrity verification mechanisms provide a level of assurance that only trusted code is executed during boot processes.

Determine if the integrity of the boot process of [Assignment: organization-defined system components] is verified.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing software, firmware, and information integrity; system design documentation; system configuration settings and associated documentation; integrity verification tools and associated documentation; documentation; records of integrity verification scans; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel responsible for software, firmware, and/or information integrity; organizational personnel with information security responsibilities; system developer.

**Test:** Software, firmware, and information integrity verification tools; mechanisms supporting and/or implementing integrity verification of the boot process.

</details>

<a id="si-7.10"></a>

### SI-7(10) Protection of Boot Firmware

*Baselines: Not in a baseline*

Implement the following mechanisms to protect the integrity of boot firmware in [Assignment: organization-defined system components]: [Assignment: organization-defined mechanisms].

<details>
<summary>Discussion and assessment objectives for SI-7(10)</summary>

Unauthorized modifications to boot firmware may indicate a sophisticated, targeted attack. These types of targeted attacks can result in a permanent denial of service or a persistent malicious code presence. These situations can occur if the firmware is corrupted or if the malicious code is embedded within the firmware. System components can protect the integrity of boot firmware in organizational systems by verifying the integrity and authenticity of all updates to the firmware prior to applying changes to the system component and preventing unauthorized processes from modifying the boot firmware.

Determine if [Assignment: organization-defined mechanisms] are implemented to protect the integrity of boot firmware in [Assignment: organization-defined system components].

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing software, firmware, and information integrity; system design documentation; system configuration settings and associated documentation; integrity verification tools and associated documentation; records of integrity verification scans; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel responsible for software, firmware, and/or information integrity; organizational personnel with information security responsibilities; system/network administrators; system developer.

**Test:** Software, firmware, and information integrity verification tools; mechanisms supporting and/or implementing protection of the integrity of boot firmware; safeguards implementing protection of the integrity of boot firmware.

</details>

<a id="si-7.12"></a>

### SI-7(12) Integrity Verification

*Baselines: Not in a baseline*

Require that the integrity of the following user-installed software be verified prior to execution: [Assignment: organization-defined user-installed software].

<details>
<summary>Discussion and assessment objectives for SI-7(12)</summary>

Organizations verify the integrity of user-installed software prior to execution to reduce the likelihood of executing malicious code or programs that contains errors from unauthorized modifications. Organizations consider the source of the software, ensuring the software and updates come from authorized sources and/or sites, and the practicality of approaches to verifying software integrity, including the availability of trustworthy checksums from software developers and vendors.

Determine if the integrity of [Assignment: organization-defined user-installed software] is verified prior to execution.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing software, firmware, and information integrity; system design documentation; system configuration settings and associated documentation; integrity verification records; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel responsible for software, firmware, and/or information integrity; organizational personnel with information security responsibilities.

**Test:** Software, firmware, and information integrity verification tools; mechanisms supporting and/or implementing verification of the integrity of user-installed software prior to execution.

</details>

<a id="si-7.15"></a>

### SI-7(15) Code Authentication

*Baselines: High*

Implement cryptographic mechanisms to authenticate the following software or firmware components prior to installation: [Assignment: organization-defined software or firmware components].

<details>
<summary>Discussion and assessment objectives for SI-7(15)</summary>

Cryptographic authentication includes verifying that software or firmware components have been digitally signed using certificates recognized and approved by organizations. Code signing is an effective method to protect against malicious code. Organizations that employ cryptographic mechanisms also consider cryptographic key management solutions.

Determine if cryptographic mechanisms are implemented to authenticate [Assignment: organization-defined software or firmware components] prior to installation.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing software, firmware, and information integrity; system design documentation; system configuration settings and associated documentation; cryptographic mechanisms and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel responsible for software, firmware, and/or information integrity; organizational personnel with information security responsibilities; system/network administrators; system developer.

**Test:** Cryptographic mechanisms authenticating software and firmware prior to installation.

</details>

<a id="si-7.16"></a>

### SI-7(16) Time Limit on Process Execution Without Supervision

*Baselines: Not in a baseline*

Prohibit processes from executing without supervision for more than [Assignment: organization-defined time period].

<details>
<summary>Discussion and assessment objectives for SI-7(16)</summary>

Placing a time limit on process execution without supervision is intended to apply to processes for which typical or normal execution periods can be determined and situations in which organizations exceed such periods. Supervision includes timers on operating systems, automated responses, and manual oversight and response when system process anomalies occur.

Determine if processes are prohibited from executing without supervision for more than [Assignment: organization-defined time period].

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing software and information integrity; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel responsible for software, firmware, and/or information integrity; organizational personnel with information security responsibilities; system/network administrators; system developer.

**Test:** Software, firmware, and information integrity verification tools; mechanisms supporting and/or implementing time limits on process execution without supervision.

</details>

<a id="si-7.17"></a>

### SI-7(17) Runtime Application Self-protection

*Baselines: Not in a baseline*

Implement [Assignment: organization-defined controls] for application self-protection at runtime.

<details>
<summary>Discussion and assessment objectives for SI-7(17)</summary>

Runtime application self-protection employs runtime instrumentation to detect and block the exploitation of software vulnerabilities by taking advantage of information from the software in execution. Runtime exploit prevention differs from traditional perimeter-based protections such as guards and firewalls which can only detect and block attacks by using network information without contextual awareness. Runtime application self-protection technology can reduce the susceptibility of software to attacks by monitoring its inputs and blocking those inputs that could allow attacks. It can also help protect the runtime environment from unwanted changes and tampering. When a threat is detected, runtime application self-protection technology can prevent exploitation and take other actions (e.g., sending a warning message to the user, terminating the user's session, terminating the application, or sending an alert to organizational personnel). Runtime application self-protection solutions can be deployed in either a monitor or protection mode.

Determine if [Assignment: organization-defined controls] are implemented for application self-protection at runtime.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing software and information integrity; system design documentation; system configuration settings and associated documentation; list of known vulnerabilities addressed by runtime instrumentation; system security plan; other relevant documents or records.

**Interview:** Organizational personnel responsible for software, firmware, and/or information integrity; organizational personnel with information security responsibilities; system/network administrators; system developer.

**Test:** Software, firmware, and information integrity verification tools; mechanisms supporting and/or implementing runtime application self-protection.

</details>

*Withdrawn enhancements: SI-7(4), SI-7(11), SI-7(13), SI-7(14).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SI-7</summary>

Determine if:

- **SI-07a.**
  - **SI-07a.[01]** integrity verification tools are employed to detect unauthorized changes to [Assignment: organization-defined software];
  - **SI-07a.[02]** integrity verification tools are employed to detect unauthorized changes to [Assignment: organization-defined firmware];
  - **SI-07a.[03]** integrity verification tools are employed to detect unauthorized changes to [Assignment: organization-defined information];
- **SI-07b.**
  - **SI-07b.[01]** [Assignment: organization-defined actions] are taken when unauthorized changes to the software, are detected;
  - **SI-07b.[02]** [Assignment: organization-defined actions] are taken when unauthorized changes to the firmware are detected;
  - **SI-07b.[03]** [Assignment: organization-defined actions] are taken when unauthorized changes to the information are detected.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing software, firmware, and information integrity; personally identifiable information processing policy; system design documentation; system configuration settings and associated documentation; integrity verification tools and associated documentation; records generated or triggered by integrity verification tools regarding unauthorized software, firmware, and information changes; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel responsible for software, firmware, and/or information integrity; organizational personnel with information security and privacy responsibilities; system/network administrators.

**Test:** Software, firmware, and information integrity verification tools.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

SI-7 asks you to use integrity verification tools to detect unauthorized changes to the software, firmware and information you name (a), and to take set actions when they find one (b). NIST's SI-7 discussion says unauthorized changes can come from errors or malicious activity. It says software includes operating systems, with key internal components such as kernels and drivers, middleware and applications; firmware interfaces include the Unified Extensible Firmware Interface and BIOS; and information includes personally identifiable information and metadata carrying security and privacy attributes. Its examples of integrity-checking mechanisms are parity checks, cyclical redundancy checks and cryptographic hashes. SI-7 is in the Moderate and High baselines, not Low.

SI-7 complements configuration management. Changes approved through the change request process ([CM-3](/controls/cm/cm-3/)) are expected; integrity verification finds the ones that were not approved, and the approved baseline ([CM-2](/controls/cm/cm-2/)) is what a changed file or setting is compared against. For firmware, NIST SP 800-193, [Platform Firmware Resiliency Guidelines](https://csrc.nist.gov/pubs/sp/800/193/final) (May 2018), the final version as of October 2026, describes protecting platform firmware from unauthorized change, detecting changes that happen, and recovering to a known good state.

**Common implementations.** File integrity monitoring, often a feature of the EDR agent or the configuration compliance tool, watching operating system files, application binaries and security configuration files and reporting changes to the SIEM. Package managers that verify signatures and hashes on install and can report modified files. Container images signed in the build pipeline and verified by the registry or the cluster's admission controller, with running containers treated as immutable. Secure boot and measured boot on servers and endpoints, with firmware versions checked by the endpoint or hardware management tools. Database and log integrity through checksums, write-once storage or hash chains. Every unexpected change matched against the change records, and anything unmatched handled as a suspected incident.

**Organization-defined parameters.** Typical values, from the [System and Information Integrity policy](/templates/policies/si/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Software covered by integrity verification (a) | Operating system files, installed applications, container images and security tool binaries |
| Firmware covered (a) | Server, network device and endpoint firmware and boot components, where the platform supports verification |
| Information covered (a) | Security configuration files, audit logs, and the critical data stores named in the system security plan |
| Action on an unauthorized change to software (b) | Alert the security operations team, restore the approved version, and handle an unauthorized change as a suspected incident |
| Action on an unauthorized change to firmware (b) | Alert the security operations team, restore the approved firmware, and handle an unauthorized change as a suspected incident |
| Action on an unauthorized change to information (b) | Alert the security operations team and the information owner, restore the information from a trusted source or backup, and handle an unauthorized change as a suspected incident |
| When software is checked (SI-7(1)) | At startup, after each update or change to the software, and at least weekly |
| When firmware is checked (SI-7(1)) | At startup, after each firmware update, and at least monthly |
| When information is checked (SI-7(1)) | After each authorized change to the information, and at least daily |
| Unauthorized changes fed into incident response (SI-7(7)) | Unauthorized changes to operating system and application files, security configuration settings, firmware and audit logging settings |

For SI-7(1), the policy checks the same software, firmware and information it names for SI-7; the events within each "when" value are the transitional states and security-relevant events NIST's selection asks for. Record the files, images, firmware and data stores covered for each component type in the [baseline configuration standard](/templates/standards/baseline-configuration-standard/) or the system security plan, so that coverage can be checked against the [component inventory](/templates/forms/component-inventory/).

**Evidence assessors ask for.**

- The integrity monitoring tool's configuration: the paths, images, firmware and data stores it watches on each component type
- A list of the components covered, compared with the component inventory
- Secure boot and firmware verification settings, from the endpoint or hardware management console
- A recent integrity alert followed to its change record, or to the incident it opened
- The schedule and results of the periodic checks for SI-7(1)
- The incident response plan's handling of unauthorized changes, for SI-7(7)

**Inheritance.** Enterprise file integrity monitoring and endpoint management are often common controls. The system owns deciding which of its files and data matter, adding them to the monitoring, and responding to its alerts. For a cloud service, the provider verifies its own infrastructure and firmware; the system still verifies the images, code and configuration it deploys. Record the split in the [system security plan](/templates/plans/system-security-plan/).

**Common findings.**

- File integrity monitoring left at vendor defaults, producing so many alerts from routine updates that no one reads them.
- Alerts not reconciled with change records, so an unauthorized change looks the same as a patch.
- Container images pulled from public registries with no signature or digest check.
- Firmware never checked, or secure boot turned off to get a driver working.
- Integrity alerts that go to an operations queue but never reach incident response.

**Enhancements in the Moderate baseline.** [SI-7(1)](#si-7.1) integrity checks and [SI-7(7)](#si-7.7) integration of detection and response, both with values in the table above. NIST's SI-7(1) discussion says security-relevant events include the identification of new threats and the installation of new hardware, software or firmware, and transitional states include startup, restart, shutdown and abort. Its SI-7(7) discussion says integrating detection and response helps ensure detected events are tracked, monitored, corrected and kept for historical purposes, including possible legal action. High adds three:

- **SI-7(2)** (High) has automated tools notify named people when integrity verification finds a discrepancy. Typical value: the security operations team and the system owner.
- **SI-7(5)** (High) responds automatically to integrity violations. Typical value: implement controls: block the changed component from running, isolate the affected host, and restore the approved version. NIST's discussion says responses can differ by type of information and can include reversing the changes, halting the system or triggering audit alerts.
- **SI-7(15)** (High) authenticates software and firmware with cryptographic mechanisms before installation. Typical value: operating system and application updates, firmware updates, drivers and container images. NIST's discussion says this includes verifying that components are signed with certificates the organization recognizes and approves. The [patch and flaw remediation standard](/templates/standards/patch-and-flaw-remediation-standard/) treats an unsigned or wrongly signed component as a failed installation.

SI-7(4), SI-7(11), SI-7(13) and SI-7(14) are withdrawn; SI-7(3), SI-7(6), SI-7(8), SI-7(9), SI-7(10), SI-7(12), SI-7(16) and SI-7(17) are in no baseline. Verifying the boot process, as secure boot does, is SI-7(9), and detecting changes with cryptographic mechanisms such as signed hashes is SI-7(6), so many Moderate systems already do more than the baseline asks.
