---
title: 'SI-3 Malicious Code Protection'
description: 'NIST SP 800-53 Rev. 5 control SI-3, Malicious Code Protection: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SI-3 Malicious Code Protection'
  order: 3
control:
  id: SI-3
  family: SI
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 4 (0 in a baseline) |

**Related controls:** [AC-4](/controls/ac/ac-4/), [AC-19](/controls/ac/ac-19/), [CM-3](/controls/cm/cm-3/), [CM-8](/controls/cm/cm-8/), [IR-4](/controls/ir/ir-4/), [MA-3](/controls/ma/ma-3/), [MA-4](/controls/ma/ma-4/), [PL-9](/controls/pl/pl-9/), [RA-5](/controls/ra/ra-5/), [SC-7](/controls/sc/sc-7/), [SC-23](/controls/sc/sc-23/), [SC-26](/controls/sc/sc-26/), [SC-28](/controls/sc/sc-28/), [SC-44](/controls/sc/sc-44/), [SI-2](/controls/si/si-2/), [SI-4](/controls/si/si-4/), [SI-7](/controls/si/si-7/), [SI-8](/controls/si/si-8/), [SI-15](/controls/si/si-15/)

## Control statement

- **a.** Implement [Selection (one or more): signature-based; non-signature-based] malicious code protection mechanisms at system entry and exit points to detect and eradicate malicious code;
- **b.** Automatically update malicious code protection mechanisms as new releases are available in accordance with organizational configuration management policy and procedures;
- **c.** Configure malicious code protection mechanisms to:
  - **1.** Perform periodic scans of the system [Assignment: organization-defined frequency] and real-time scans of files from external sources at [Selection (one or more): endpoint; network entry and exit points] as the files are downloaded, opened, or executed in accordance with organizational policy; and
  - **2.** [Selection (one or more): block malicious code; quarantine malicious code; take [Assignment: organization-defined action] ] ; and send alert to [Assignment: organization-defined personnel or roles] in response to malicious code detection; and
- **d.** Address the receipt of false positives during malicious code detection and eradication and the resulting potential impact on the availability of the system.

<details>
<summary>NIST discussion</summary>

System entry and exit points include firewalls, remote access servers, workstations, electronic mail servers, web servers, proxy servers, notebook computers, and mobile devices. Malicious code includes viruses, worms, Trojan horses, and spyware. Malicious code can also be encoded in various formats contained within compressed or hidden files or hidden in files using techniques such as steganography. Malicious code can be inserted into systems in a variety of ways, including by electronic mail, the world-wide web, and portable storage devices. Malicious code insertions occur through the exploitation of system vulnerabilities. A variety of technologies and methods exist to limit or eliminate the effects of malicious code.

Malicious code protection mechanisms include both signature- and nonsignature-based technologies. Nonsignature-based detection mechanisms include artificial intelligence techniques that use heuristics to detect, analyze, and describe the characteristics or behavior of malicious code and to provide controls against such code for which signatures do not yet exist or for which existing signatures may not be effective. Malicious code for which active signatures do not yet exist or may be ineffective includes polymorphic malicious code (i.e., code that changes signatures when it replicates). Nonsignature-based mechanisms also include reputation-based technologies. In addition to the above technologies, pervasive configuration management, comprehensive software integrity controls, and anti-exploitation software may be effective in preventing the execution of unauthorized code. Malicious code may be present in commercial off-the-shelf software as well as custom-built software and could include logic bombs, backdoors, and other types of attacks that could affect organizational mission and business functions.

In situations where malicious code cannot be detected by detection methods or technologies, organizations rely on other types of controls, including secure coding practices, configuration management and control, trusted procurement processes, and monitoring practices to ensure that software does not perform functions other than the functions intended. Organizations may determine that, in response to the detection of malicious code, different actions may be warranted. For example, organizations can define actions in response to malicious code detection during periodic scans, the detection of malicious downloads, or the detection of maliciousness when attempting to open or execute files.

</details>

## Control enhancements

<a id="si-3.4"></a>

### SI-3(4) Updates Only by Privileged Users

*Baselines: Not in a baseline*

Update malicious code protection mechanisms only when directed by a privileged user.

<details>
<summary>Discussion and assessment objectives for SI-3(4)</summary>

Protection mechanisms for malicious code are typically categorized as security-related software and, as such, are only updated by organizational personnel with appropriate access privileges.

Determine if malicious code protection mechanisms are updated only when directed by a privileged user.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing malicious code protection; list of privileged users on system; system design documentation; malicious code protection mechanisms; records of malicious code protection updates; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developers; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for malicious code protection.

**Test:** Mechanisms supporting and/or implementing malicious code protection capabilities.

</details>

<a id="si-3.6"></a>

### SI-3(6) Testing and Verification

*Baselines: Not in a baseline*

- **(a)** Test malicious code protection mechanisms [Assignment: organization-defined frequency] by introducing known benign code into the system; and
- **(b)** Verify that the detection of the code and the associated incident reporting occur.

<details>
<summary>Discussion and assessment objectives for SI-3(6)</summary>

None.

Determine if:

- **SI-03(06)(a)** malicious code protection mechanisms are tested [Assignment: organization-defined frequency] by introducing known benign code into the system;
- **SI-03(06)(b)**
  - **SI-03(06)(b)[01]** the detection of (benign test) code occurs;
  - **SI-03(06)(b)[02]** the associated incident reporting occurs.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing malicious code protection; system design documentation; system configuration settings and associated documentation; test cases; records providing evidence of test cases executed on malicious code protection mechanisms; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for malicious code protection.

**Test:** Mechanisms supporting and/or implementing the testing and verification of malicious code protection capabilities.

</details>

<a id="si-3.8"></a>

### SI-3(8) Detect Unauthorized Commands

*Baselines: Not in a baseline*

- **(a)** Detect the following unauthorized operating system commands through the kernel application programming interface on [Assignment: organization-defined system hardware components]: [Assignment: organization-defined unauthorized operating system commands] ; and
- **(b)** [Selection (one or more): issue a warning; audit the command execution; prevent the execution of the command].

<details>
<summary>Discussion and assessment objectives for SI-3(8)</summary>

Detecting unauthorized commands can be applied to critical interfaces other than kernel-based interfaces, including interfaces with virtual machines and privileged applications. Unauthorized operating system commands include commands for kernel functions from system processes that are not trusted to initiate such commands as well as commands for kernel functions that are suspicious even though commands of that type are reasonable for processes to initiate. Organizations can define the malicious commands to be detected by a combination of command types, command classes, or specific instances of commands. Organizations can also define hardware components by component type, component, component location in the network, or a combination thereof. Organizations may select different actions for different types, classes, or instances of malicious commands.

Determine if:

- **SI-03(08)(a)** [Assignment: organization-defined unauthorized operating system commands] are detected through the kernel application programming interface on [Assignment: organization-defined system hardware components];
- **SI-03(08)(b)** [Selection (one or more): issue a warning; audit the command execution; prevent the execution of the command] is/are performed.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing malicious code protection; system design documentation; malicious code protection mechanisms; warning messages sent upon the detection of unauthorized operating system command execution; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developers; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for malicious code protection.

**Test:** Mechanisms supporting and/or implementing malicious code protection capabilities; mechanisms supporting and/or implementing the detection of unauthorized operating system commands through the kernel application programming interface.

</details>

<a id="si-3.10"></a>

### SI-3(10) Malicious Code Analysis

*Baselines: Not in a baseline*

- **(a)** Employ the following tools and techniques to analyze the characteristics and behavior of malicious code: [Assignment: organization-defined tools and techniques] ; and
- **(b)** Incorporate the results from malicious code analysis into organizational incident response and flaw remediation processes.

<details>
<summary>Discussion and assessment objectives for SI-3(10)</summary>

The use of malicious code analysis tools provides organizations with a more in-depth understanding of adversary tradecraft (i.e., tactics, techniques, and procedures) and the functionality and purpose of specific instances of malicious code. Understanding the characteristics of malicious code facilitates effective organizational responses to current and future threats. Organizations can conduct malicious code analyses by employing reverse engineering techniques or by monitoring the behavior of executing code.

Determine if:

- **SI-03(10)(a)** [Assignment: organization-defined tools and techniques] are employed to analyze the characteristics and behavior of malicious code;
- **SI-03(10)(b)**
  - **SI-03(10)(b)[01]** the results from malicious code analysis are incorporated into organizational incident response processes;
  - **SI-03(10)(b)[02]** the results from malicious code analysis are incorporated into organizational flaw remediation processes.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing malicious code protection; procedures addressing incident response; procedures addressing flaw remediation; system design documentation; malicious code protection mechanisms, tools, and techniques; system configuration settings and associated documentation; results from malicious code analyses; records of flaw remediation events resulting from malicious code analyses; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for malicious code protection; organizational personnel responsible for flaw remediation; organizational personnel responsible for incident response/management.

**Test:** Organizational process for incident response; organizational process for flaw remediation; mechanisms supporting and/or implementing malicious code protection capabilities; tools and techniques for the analysis of malicious code characteristics and behavior.

</details>

*Withdrawn enhancements: SI-3(1), SI-3(2), SI-3(3), SI-3(5), SI-3(7), SI-3(9).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SI-3</summary>

Determine if:

- **SI-03a.**
  - **SI-03a.[01]** [Selection (one or more): signature-based; non-signature-based] malicious code protection mechanisms are implemented at system entry and exit points to detect malicious code;
  - **SI-03a.[02]** [Selection (one or more): signature-based; non-signature-based] malicious code protection mechanisms are implemented at system entry and exit points to eradicate malicious code;
- **SI-03b.** malicious code protection mechanisms are updated automatically as new releases are available in accordance with organizational configuration management policy and procedures;
- **SI-03c.**
  - **SI-03c.01**
    - **SI-03c.01[01]** malicious code protection mechanisms are configured to perform periodic scans of the system [Assignment: organization-defined frequency];
    - **SI-03c.01[02]** malicious code protection mechanisms are configured to perform real-time scans of files from external sources at [Selection (one or more): endpoint; network entry and exit points] as the files are downloaded, opened, or executed in accordance with organizational policy;
  - **SI-03c.02**
    - **SI-03c.02[01]** malicious code protection mechanisms are configured to [Selection (one or more): block malicious code; quarantine malicious code; take [Assignment: organization-defined action] ] in response to malicious code detection;
    - **SI-03c.02[02]** malicious code protection mechanisms are configured to send alerts to [Assignment: organization-defined personnel or roles] in response to malicious code detection;
- **SI-03d.** the receipt of false positives during malicious code detection and eradication and the resulting potential impact on the availability of the system are addressed.

**Examine:** System and information integrity policy; system and information integrity procedures; configuration management policy and procedures; procedures addressing malicious code protection; malicious code protection mechanisms; records of malicious code protection updates; system design documentation; system configuration settings and associated documentation; scan results from malicious code protection mechanisms; record of actions initiated by malicious code protection mechanisms in response to malicious code detection; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for malicious code protection; organizational personnel with configuration management responsibilities.

**Test:** Organizational processes for employing, updating, and configuring malicious code protection mechanisms; organizational processes for addressing false positives and resulting potential impacts; mechanisms supporting and/or implementing, employing, updating, and configuring malicious code protection mechanisms; mechanisms supporting and/or implementing malicious code scanning and subsequent actions.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

SI-3 asks you to run malicious code protection at system entry and exit points (a), keep it updated automatically under configuration management (b), scan periodically and in real time, then block, quarantine or act and alert when it finds something (c), and deal with false positives and their effect on availability (d). NIST's SI-3 discussion lists entry and exit points: firewalls, remote access servers, workstations, email servers, web servers, proxy servers, notebook computers and mobile devices. It says protection includes both signature-based and non-signature-based technologies, such as heuristics and reputation, for code that has no signature yet. SI-3 is in the Low, Moderate and High baselines.

NIST's discussion also says that where malicious code cannot be detected, organizations rely on other controls: secure coding, configuration management, trusted procurement and monitoring. Application allow listing ([CM-7](/controls/cm/cm-7/)), integrity verification ([SI-7](/controls/si/si-7/)) and timely patching ([SI-2](/controls/si/si-2/)) do much of that work. For a full treatment of preventing and handling malware incidents on endpoints, NIST SP 800-83 Rev. 1, [Guide to Malware Incident Prevention and Handling for Desktops and Laptops](https://csrc.nist.gov/pubs/sp/800/83/r1/final) (July 2013), is the final version as of October 2026, with no newer revision or draft listed.

**Common implementations.** Endpoint detection and response (EDR) on every server and workstation, combining signatures with behavior analysis, managed from one console that pushes updates automatically. Malware scanning in the email gateway and the web proxy or secure web gateway, so files are checked as they enter. Scanning of file uploads in the system's own applications and storage, where users can submit files. Detections that block or quarantine automatically and raise an alert in the security operations team's queue, where they are triaged with the other monitoring alerts ([SI-4](/controls/si/si-4/)). Cloud workloads and containers covered by the provider's or a third party's workload protection where a traditional agent cannot run.

**Organization-defined parameters.** Typical values, from the [System and Information Integrity policy](/templates/policies/si/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Type of malicious code protection (a) | Signature-based and non-signature-based |
| Frequency of periodic scans (c.1) | At least weekly |
| Where real-time scans run (c.1) | Endpoint and network entry and exit points |
| Action on detection (c.2) | Block and quarantine malicious code |
| Who is alerted (c.2) | The security operations team |

The policy leaves the third choice of the c.2 selection, an organization-defined action, unselected; add one if you want another response, such as isolating the host from the network. For SI-3d it has the security operations team review reported false positives, approve each scan exclusion with a documented reason and an expiry date, and record the effect of false positives on the system's availability. Under the [patch and flaw remediation standard](/templates/standards/patch-and-flaw-remediation-standard/), protection updates install automatically as they are released (SI-3b). Other policies use SI-3 too: diagnostic media are scanned before use under [MA-3(2)](/controls/ma/ma-3/), and portable storage devices before they are connected under [MP-6(3)](/controls/mp/mp-6/).

**Evidence assessors ask for.**

- The EDR and gateway configuration: detection types enabled, scan schedule, real-time scanning, and the action on detection
- The EDR console's list of protected hosts, compared with the [component inventory](/templates/forms/component-inventory/), with the components that cannot run an agent and how they are covered
- Signature and engine versions across hosts, showing updates arrive automatically
- A sample of recent detections, with the alert and how the security operations team handled it
- The list of scan exclusions, each with its reason, approver and expiry date
- The baseline configuration that keeps the agent installed and running ([CM-6](/controls/cm/cm-6/)), as the [baseline configuration standard](/templates/standards/baseline-configuration-standard/) records it

**Inheritance.** EDR, the email gateway and the web proxy are usually common controls, run by the security and IT operations teams for every system. The system owner makes sure every component that can run the agent has it, and covers what the enterprise tools do not, such as file uploads to the system's own applications. For a cloud service, the provider covers its own infrastructure; record in the [system security plan](/templates/plans/system-security-plan/) which parts are inherited, which are the organization's and which are the system's.

**Common findings.**

- Servers, especially Linux servers and appliances, with no agent, and no compensating protection recorded.
- Broad scan exclusions, such as whole drives or application folders, added to fix a performance problem and never reviewed.
- Agents installed but out of date, disabled by administrators, or reporting to a console no one watches.
- Detections that quarantine files with no alert to anyone, so an intrusion is never investigated.
- File upload features in applications that accept files with no scanning.

**Enhancements in the Moderate baseline.** None. SI-3 has no enhancements in any baseline. SI-3(1), SI-3(2), SI-3(3), SI-3(5), SI-3(7) and SI-3(9) are withdrawn. Four are in no baseline: [SI-3(4)](#si-3.4) updates only when a privileged user directs them, [SI-3(6)](#si-3.6) testing protection by introducing known benign code and checking that detection and incident reporting occur, [SI-3(8)](#si-3.8) detecting unauthorized operating system commands through the kernel interface, and [SI-3(10)](#si-3.10) malicious code analysis, whose results feed incident response and flaw remediation. A periodic test with a harmless test file is a cheap way to show the whole chain works, even where SI-3(6) is not selected.
