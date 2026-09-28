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
---

<!-- nist:start -->
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
<!-- nist:end -->

<!-- guidance: write below this line -->
