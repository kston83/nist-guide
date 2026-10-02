---
title: 'CM-7 Least Functionality'
description: 'NIST SP 800-53 Rev. 5 control CM-7, Least Functionality: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CM-7 Least Functionality'
  order: 7
control:
  id: CM-7
  family: CM
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 9 (3 in a baseline) |

**Related controls:** [AC-3](/controls/ac/ac-3/), [AC-4](/controls/ac/ac-4/), [CM-2](/controls/cm/cm-2/), [CM-5](/controls/cm/cm-5/), [CM-6](/controls/cm/cm-6/), [CM-11](/controls/cm/cm-11/), [RA-5](/controls/ra/ra-5/), [SA-4](/controls/sa/sa-4/), [SA-5](/controls/sa/sa-5/), [SA-8](/controls/sa/sa-8/), [SA-9](/controls/sa/sa-9/), [SA-15](/controls/sa/sa-15/), [SC-2](/controls/sc/sc-2/), [SC-3](/controls/sc/sc-3/), [SC-7](/controls/sc/sc-7/), [SC-37](/controls/sc/sc-37/), [SI-4](/controls/si/si-4/)

## Control statement

- **a.** Configure the system to provide only [Assignment: organization-defined mission-essential capabilities] ; and
- **b.** Prohibit or restrict the use of the following functions, ports, protocols, software, and/or services: [Assignment: organization-defined prohibited or restricted functions, system ports, protocols, software, and/or services].

<details>
<summary>NIST discussion</summary>

Systems provide a wide variety of functions and services. Some of the functions and services routinely provided by default may not be necessary to support essential organizational missions, functions, or operations. Additionally, it is sometimes convenient to provide multiple services from a single system component, but doing so increases risk over limiting the services provided by that single component. Where feasible, organizations limit component functionality to a single function per component. Organizations consider removing unused or unnecessary software and disabling unused or unnecessary physical and logical ports and protocols to prevent unauthorized connection of components, transfer of information, and tunneling. Organizations employ network scanning tools, intrusion detection and prevention systems, and end-point protection technologies, such as firewalls and host-based intrusion detection systems, to identify and prevent the use of prohibited functions, protocols, ports, and services. Least functionality can also be achieved as part of the fundamental design and development of the system (see SA-8, SC-2 , and SC-3).

</details>

## Control enhancements

<a id="cm-7.1"></a>

### CM-7(1) Periodic Review

*Baselines: Moderate, High*

- **(a)** Review the system [Assignment: organization-defined frequency] to identify unnecessary and/or nonsecure functions, ports, protocols, software, and services; and
- **(b)** Disable or remove [Assignment: organization-defined functions, ports, protocols, software, and services within the system deemed to be unnecessary and/or nonsecure].

<details>
<summary>Discussion and assessment objectives for CM-7(1)</summary>

Organizations review functions, ports, protocols, and services provided by systems or system components to determine the functions and services that are candidates for elimination. Such reviews are especially important during transition periods from older technologies to newer technologies (e.g., transition from IPv4 to IPv6). These technology transitions may require implementing the older and newer technologies simultaneously during the transition period and returning to minimum essential functions, ports, protocols, and services at the earliest opportunity. Organizations can either decide the relative security of the function, port, protocol, and/or service or base the security decision on the assessment of other entities. Unsecure protocols include Bluetooth, FTP, and peer-to-peer networking.

Determine if:

- **CM-07(01)(a)** the system is reviewed [Assignment: organization-defined frequency] to identify unnecessary and/or non-secure functions, ports, protocols, software, and services:
- **CM-07(01)(b)**
  - **CM-07(01)(b)[01]** [Assignment: organization-defined functions] deemed to be unnecessary and/or non-secure are disabled or removed;
  - **CM-07(01)(b)[02]** [Assignment: organization-defined ports] deemed to be unnecessary and/or non-secure are disabled or removed;
  - **CM-07(01)(b)[03]** [Assignment: organization-defined protocols] deemed to be unnecessary and/or non-secure are disabled or removed;
  - **CM-07(01)(b)[04]** [Assignment: organization-defined software] deemed to be unnecessary and/or non-secure is disabled or removed;
  - **CM-07(01)(b)[05]** [Assignment: organization-defined services] deemed to be unnecessary and/or non-secure are disabled or removed.

**Examine:** Configuration management policy; procedures addressing least functionality in the system; configuration management plan; system design documentation; system configuration settings and associated documentation; common secure configuration checklists; documented reviews of functions, ports, protocols, and/or services; change control records; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for reviewing functions, ports, protocols, and services on the system; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Organizational processes for reviewing or disabling functions, ports, protocols, and services on the system; mechanisms implementing review and disabling of functions, ports, protocols, and/or services.

</details>

<a id="cm-7.2"></a>

### CM-7(2) Prevent Program Execution

*Baselines: Moderate, High*

Prevent program execution in accordance with [Selection (one or more): [Assignment: organization-defined policies, rules of behavior, and/or access agreements regarding software program usage and restrictions] ; rules authorizing the terms and conditions of software program usage].

<details>
<summary>Discussion and assessment objectives for CM-7(2)</summary>

Prevention of program execution addresses organizational policies, rules of behavior, and/or access agreements that restrict software usage and the terms and conditions imposed by the developer or manufacturer, including software licensing and copyrights. Restrictions include prohibiting auto-execute features, restricting roles allowed to approve program execution, permitting or prohibiting specific software programs, or restricting the number of program instances executed at the same time.

Determine if program execution is prevented in accordance with [Selection (one or more): [Assignment: organization-defined policies, rules of behavior, and/or access agreements regarding software program usage and restrictions] ; rules authorizing the terms and conditions of software program usage].

**Examine:** Configuration management policy; procedures addressing least functionality in the system; configuration management plan; system design documentation; system configuration settings and associated documentation; system component inventory; common secure configuration checklists; specifications for preventing software program execution; change control records; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Organizational processes preventing program execution on the system; organizational processes for software program usage and restrictions; mechanisms preventing program execution on the system; mechanisms supporting and/or implementing software program usage and restrictions.

</details>

<a id="cm-7.3"></a>

### CM-7(3) Registration Compliance

*Baselines: Not in a baseline*

Ensure compliance with [Assignment: organization-defined registration requirements].

<details>
<summary>Discussion and assessment objectives for CM-7(3)</summary>

Organizations use the registration process to manage, track, and provide oversight for systems and implemented functions, ports, protocols, and services.

Determine if [Assignment: organization-defined registration requirements] are complied with.

**Examine:** System security plan; configuration management policy; procedures addressing least functionality in the system; configuration management plan; system configuration settings and associated documentation; system component inventory; audit and compliance reviews; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with security responsibilities; system/network administrators; system developers.

**Test:** Organizational processes ensuring compliance with registration requirements for functions, ports, protocols, and/or services; mechanisms implementing compliance with registration requirements for functions, ports, protocols, and/or services.

</details>

<a id="cm-7.4"></a>

### CM-7(4) Unauthorized Software — Deny-by-exception

*Baselines: Not in a baseline*

- **(a)** Identify [Assignment: organization-defined software programs];
- **(b)** Employ an allow-all, deny-by-exception policy to prohibit the execution of unauthorized software programs on the system; and
- **(c)** Review and update the list of unauthorized software programs [Assignment: organization-defined frequency].

<details>
<summary>Discussion and assessment objectives for CM-7(4)</summary>

Unauthorized software programs can be limited to specific versions or from a specific source. The concept of prohibiting the execution of unauthorized software may also be applied to user actions, system ports and protocols, IP addresses/ranges, websites, and MAC addresses.

Determine if:

- **CM-07(04)(a)** [Assignment: organization-defined software programs] are identified;
- **CM-07(04)(b)** an allow-all, deny-by-exception policy is employed to prohibit the execution of unauthorized software programs on the system;
- **CM-07(04)(c)** the list of unauthorized software programs is reviewed and updated [Assignment: organization-defined frequency].

**Examine:** Configuration management policy; procedures addressing least functionality in the system; configuration management plan; system design documentation; system configuration settings and associated documentation; list of software programs not authorized to execute on the system; system component inventory; common secure configuration checklists; review and update records associated with list of unauthorized software programs; change control records; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for identifying software not authorized to execute on the system; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational process for identifying, reviewing, and updating programs not authorized to execute on the system; organizational process for implementing unauthorized software policy; mechanisms supporting and/or implementing unauthorized software policy.

</details>

<a id="cm-7.5"></a>

### CM-7(5) Authorized Software — Allow-by-exception

*Baselines: Moderate, High*

- **(a)** Identify [Assignment: organization-defined software programs];
- **(b)** Employ a deny-all, permit-by-exception policy to allow the execution of authorized software programs on the system; and
- **(c)** Review and update the list of authorized software programs [Assignment: organization-defined frequency].

<details>
<summary>Discussion and assessment objectives for CM-7(5)</summary>

Authorized software programs can be limited to specific versions or from a specific source. To facilitate a comprehensive authorized software process and increase the strength of protection for attacks that bypass application level authorized software, software programs may be decomposed into and monitored at different levels of detail. These levels include applications, application programming interfaces, application modules, scripts, system processes, system services, kernel functions, registries, drivers, and dynamic link libraries. The concept of permitting the execution of authorized software may also be applied to user actions, system ports and protocols, IP addresses/ranges, websites, and MAC addresses. Organizations consider verifying the integrity of authorized software programs using digital signatures, cryptographic checksums, or hash functions. Verification of authorized software can occur either prior to execution or at system startup. The identification of authorized URLs for websites is addressed in CA-3(5) and SC-7.

Determine if:

- **CM-07(05)(a)** [Assignment: organization-defined software programs] are identified;
- **CM-07(05)(b)** a deny-all, permit-by-exception policy to allow the execution of authorized software programs on the system is employed;
- **CM-07(05)(c)** the list of authorized software programs is reviewed and updated [Assignment: organization-defined frequency].

**Examine:** Configuration management policy; procedures addressing least functionality in the system; configuration management plan; system design documentation; system configuration settings and associated documentation; list of software programs authorized to execute on the system; system component inventory; common secure configuration checklists; review and update records associated with list of authorized software programs; change control records; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for identifying software authorized to execute on the system; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational process for identifying, reviewing, and updating programs authorized to execute on the system; organizational process for implementing authorized software policy; mechanisms supporting and/or implementing authorized software policy.

</details>

<a id="cm-7.6"></a>

### CM-7(6) Confined Environments with Limited Privileges

*Baselines: Not in a baseline*

Require that the following user-installed software execute in a confined physical or virtual machine environment with limited privileges: [Assignment: organization-defined user-installed software].

<details>
<summary>Discussion and assessment objectives for CM-7(6)</summary>

Organizations identify software that may be of concern regarding its origin or potential for containing malicious code. For this type of software, user installations occur in confined environments of operation to limit or contain damage from malicious code that may be executed.

Determine if [Assignment: organization-defined user-installed software] is required to be executed in a confined physical or virtual machine environment with limited privileges.

**Examine:** Configuration management policy; procedures addressing least functionality in the system; configuration management plan; system design documentation; system configuration settings and associated documentation; list or record of software required to execute in a confined environment; system component inventory; common secure configuration checklists; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for identifying and/or managing user-installed software and associated privileges; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational process for identifying user-installed software required to execute in a confined environment; mechanisms supporting and/or implementing the confinement of user-installed software to physical or virtual machine environments; mechanisms supporting and/or implementing privilege limitations on user-installed software.

</details>

<a id="cm-7.7"></a>

### CM-7(7) Code Execution in Protected Environments

*Baselines: Not in a baseline*

Allow execution of binary or machine-executable code only in confined physical or virtual machine environments and with the explicit approval of [Assignment: organization-defined personnel or roles] when such code is:

- **(a)** Obtained from sources with limited or no warranty; and/or
- **(b)** Without the provision of source code.

<details>
<summary>Discussion and assessment objectives for CM-7(7)</summary>

Code execution in protected environments applies to all sources of binary or machine-executable code, including commercial software and firmware and open-source software.

Determine if the execution of binary or machine-executable code is only allowed in confined physical or virtual machine environments;

- **CM-07(07)(a)** the execution of binary or machine-executable code obtained from sources with limited or no warranty is only allowed with the explicit approval of [Assignment: organization-defined personnel or roles];
- **CM-07(07)(b)** the execution of binary or machine-executable code without the provision of source code is only allowed with the explicit approval of [Assignment: organization-defined personnel or roles].

**Examine:** Configuration management policy; procedures addressing least functionality in the system; configuration management plan; system design documentation; system configuration settings and associated documentation; list or record of binary or machine-executable code; system component inventory; common secure configuration checklists; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for approving execution of binary or machine-executable code; organizational personnel with information security responsibilities; organizational personnel with software management responsibilities; system/network administrators; system developers.

**Test:** Organizational process for approving execution of binary or machine-executable code; organizational process for confining binary or machine-executable code to physical or virtual machine environments; mechanisms supporting and/or implementing the confinement of binary or machine-executable code to physical or virtual machine environments.

</details>

<a id="cm-7.8"></a>

### CM-7(8) Binary or Machine Executable Code

*Baselines: Not in a baseline*

- **(a)** Prohibit the use of binary or machine-executable code from sources with limited or no warranty or without the provision of source code; and
- **(b)** Allow exceptions only for compelling mission or operational requirements and with the approval of the authorizing official.

<details>
<summary>Discussion and assessment objectives for CM-7(8)</summary>

Binary or machine executable code applies to all sources of binary or machine-executable code, including commercial software and firmware and open-source software. Organizations assess software products without accompanying source code or from sources with limited or no warranty for potential security impacts. The assessments address the fact that software products without the provision of source code may be difficult to review, repair, or extend. In addition, there may be no owners to make such repairs on behalf of organizations. If open-source software is used, the assessments address the fact that there is no warranty, the open-source software could contain back doors or malware, and there may be no support available.

Determine if:

- **CM-07(08)(a)** the use of binary or machine-executable code is prohibited when it originates from sources with limited or no warranty or without the provision of source code;
- **CM-07(08)(b)**
  - **CM-07(08)(b)[01]** exceptions to the prohibition of binary or machine-executable code from sources with limited or no warranty or without the provision of source code are allowed only for compelling mission or operational requirements;
  - **CM-07(08)(b)[02]** exceptions to the prohibition of binary or machine-executable code from sources with limited or no warranty or without the provision of source code are allowed only with the approval of the authorizing official.

**Examine:** Configuration management policy; procedures addressing least functionality in the system; configuration management plan; system security plan; system design documentation; system configuration settings and associated documentation; list or record of binary or machine-executable code; system component inventory; common secure configuration checklists; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for determining mission and operational requirements; authorizing official for the system; organizational personnel with information security responsibilities; organizational personnel with software management responsibilities; system/network administrators.

**Test:** Organizational process for approving execution of binary or machine-executable code; mechanisms supporting and/or implementing the prohibition of binary or machine-executable code.

</details>

<a id="cm-7.9"></a>

### CM-7(9) Prohibiting The Use of Unauthorized Hardware

*Baselines: Not in a baseline*

- **(a)** Identify [Assignment: organization-defined hardware components];
- **(b)** Prohibit the use or connection of unauthorized hardware components;
- **(c)** Review and update the list of authorized hardware components [Assignment: organization-defined frequency].

<details>
<summary>Discussion and assessment objectives for CM-7(9)</summary>

Hardware components provide the foundation for organizational systems and the platform for the execution of authorized software programs. Managing the inventory of hardware components and controlling which hardware components are permitted to be installed or connected to organizational systems is essential in order to provide adequate security.

Determine if:

- **CM-07(09)(a)** [Assignment: organization-defined hardware components] are identified;
- **CM-07(09)(b)** the use or connection of unauthorized hardware components is prohibited;
- **CM-07(09)(c)** the list of authorized hardware components is reviewed and updated [Assignment: organization-defined frequency].

**Examine:** Configuration management policy; network connection policy and procedures; configuration management plan; system security plan; system design documentation; system component inventory; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system hardware management responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational process for approving execution of binary or machine-executable code; mechanisms supporting and/or implementing the prohibition of binary or machine-executable code.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CM-7</summary>

Determine if:

- **CM-07a.** the system is configured to provide only [Assignment: organization-defined mission-essential capabilities];
- **CM-07b.**
  - **CM-07b.[01]** the use of [Assignment: organization-defined functions] is prohibited or restricted;
  - **CM-07b.[02]** the use of [Assignment: organization-defined ports] is prohibited or restricted;
  - **CM-07b.[03]** the use of [Assignment: organization-defined protocols] is prohibited or restricted;
  - **CM-07b.[04]** the use of [Assignment: organization-defined software] is prohibited or restricted;
  - **CM-07b.[05]** the use of [Assignment: organization-defined services] is prohibited or restricted.

**Examine:** Configuration management policy; procedures addressing least functionality in the system; configuration management plan; system design documentation; system configuration settings and associated documentation; system component inventory; common secure configuration checklists; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with security configuration management responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Organizational processes prohibiting or restricting functions, ports, protocols, software, and/or services; mechanisms implementing restrictions or prohibition of functions, ports, protocols, software, and/or services.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

Least functionality removes what the system does not need: unused services, open ports, protocols and software. Every function left running is attack surface, so CM-7 pairs a defined set of essential capabilities with periodic reviews and, at Moderate, execution control.

**Common implementations.** Hardened images with unneeded services disabled. Host and network firewalls that allow only documented ports and protocols. Periodic port and service scans compared against the approved list (CM-7(1)). Application allow listing on servers and, increasingly, workstations (CM-7(2), CM-7(5)). The [baseline configuration standard](/templates/standards/baseline-configuration-standard/) lists the prohibited and restricted items, each system's approved ports, protocols and services, and the record of each periodic review.

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Mission-essential capabilities (a) | The capabilities documented in the system security plan |
| Prohibited or restricted functions, ports, protocols, software and services (b) | Those listed as prohibited or restricted in the baseline configuration standard |
| Review frequency (CM-7(1)) | At least quarterly |
| Authorized software list review (CM-7(5)) | At least quarterly |

**Evidence assessors ask for.**

- The list of approved ports, protocols and services for the system
- Recent scan results compared against that list
- The authorized software list and the allow-listing configuration

**Inheritance.** Network firewalls and allow-listing platforms may be common; the system owns its list of approved functions.

**Common findings.**

- Open ports or running services not on the approved list.
- Allow listing deployed in audit mode only.
- No record of the periodic review.

**Enhancements in the Moderate baseline.** [CM-7(1)](#cm-7.1) periodic review, [CM-7(2)](#cm-7.2) prevent program execution and [CM-7(5)](#cm-7.5) authorized software by exception.
