---
title: 'SC-3 Security Function Isolation'
description: 'NIST SP 800-53 Rev. 5 control SC-3, Security Function Isolation: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SC-3 Security Function Isolation'
  order: 3
control:
  id: SC-3
  family: SC
  baselines: [High]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| High | System | 5 (0 in a baseline) |

**Related controls:** [AC-3](/controls/ac/ac-3/), [AC-6](/controls/ac/ac-6/), [AC-25](/controls/ac/ac-25/), [CM-2](/controls/cm/cm-2/), [CM-4](/controls/cm/cm-4/), [SA-4](/controls/sa/sa-4/), [SA-5](/controls/sa/sa-5/), [SA-8](/controls/sa/sa-8/), [SA-15](/controls/sa/sa-15/), [SA-17](/controls/sa/sa-17/), [SC-2](/controls/sc/sc-2/), [SC-7](/controls/sc/sc-7/), [SC-32](/controls/sc/sc-32/), [SC-39](/controls/sc/sc-39/), [SI-16](/controls/si/si-16/)

## Control statement

Isolate security functions from nonsecurity functions.

<details>
<summary>NIST discussion</summary>

Security functions are isolated from nonsecurity functions by means of an isolation boundary implemented within a system via partitions and domains. The isolation boundary controls access to and protects the integrity of the hardware, software, and firmware that perform system security functions. Systems implement code separation in many ways, such as through the provision of security kernels via processor rings or processor modes. For non-kernel code, security function isolation is often achieved through file system protections that protect the code on disk and address space protections that protect executing code. Systems can restrict access to security functions using access control mechanisms and by implementing least privilege capabilities. While the ideal is for all code within the defined security function isolation boundary to only contain security-relevant code, it is sometimes necessary to include nonsecurity functions as an exception. The isolation of security functions from nonsecurity functions can be achieved by applying the systems security engineering design principles in SA-8 , including SA-8(1), SA-8(3), SA-8(4), SA-8(10), SA-8(12), SA-8(13), SA-8(14) , and SA-8(18).

</details>

## Control enhancements

<a id="sc-3.1"></a>

### SC-3(1) Hardware Separation

*Baselines: Not in a baseline*

Employ hardware separation mechanisms to implement security function isolation.

<details>
<summary>Discussion and assessment objectives for SC-3(1)</summary>

Hardware separation mechanisms include hardware ring architectures that are implemented within microprocessors and hardware-enforced address segmentation used to support logically distinct storage objects with separate attributes (i.e., readable, writeable).

Determine if hardware separation mechanisms are employed to implement security function isolation.

**Examine:** System and communications protection policy; procedures addressing security function isolation; system design documentation; hardware separation mechanisms; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer.

**Test:** Separation of security functions from non-security functions within the system.

</details>

<a id="sc-3.2"></a>

### SC-3(2) Access and Flow Control Functions

*Baselines: Not in a baseline*

Isolate security functions enforcing access and information flow control from nonsecurity functions and from other security functions.

<details>
<summary>Discussion and assessment objectives for SC-3(2)</summary>

Security function isolation occurs because of implementation. The functions can still be scanned and monitored. Security functions that are potentially isolated from access and flow control enforcement functions include auditing, intrusion detection, and malicious code protection functions.

Determine if:

- **SC-03(02)[01]** security functions enforcing access control are isolated from non-security functions;
- **SC-03(02)[02]** security functions enforcing access control are isolated from other security functions;
- **SC-03(02)[03]** security functions enforcing information flow control are isolated from non-security functions;
- **SC-03(02)[04]** security functions enforcing information flow control are isolated from other security functions.

**Examine:** System and communications protection policy; procedures addressing security function isolation; list of critical security functions; system design documentation; system configuration settings and associated documentation; system audit records system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer.

**Test:** Isolation of security functions enforcing access and information flow control.

</details>

<a id="sc-3.3"></a>

### SC-3(3) Minimize Nonsecurity Functionality

*Baselines: Not in a baseline*

Minimize the number of nonsecurity functions included within the isolation boundary containing security functions.

<details>
<summary>Discussion and assessment objectives for SC-3(3)</summary>

Where it is not feasible to achieve strict isolation of nonsecurity functions from security functions, it is necessary to take actions to minimize nonsecurity-relevant functions within the security function boundary. Nonsecurity functions contained within the isolation boundary are considered security-relevant because errors or malicious code in the software can directly impact the security functions of systems. The fundamental design objective is that the specific portions of systems that provide information security are of minimal size and complexity. Minimizing the number of nonsecurity functions in the security-relevant system components allows designers and implementers to focus only on those functions which are necessary to provide the desired security capability (typically access enforcement). By minimizing the nonsecurity functions within the isolation boundaries, the amount of code that is trusted to enforce security policies is significantly reduced, thus contributing to understandability.

Determine if the number of non-security functions included within the isolation boundary containing security functions is minimized.

**Examine:** System and communications protection policy; procedures addressing security function isolation; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms supporting and/or implementing an isolation boundary.

</details>

<a id="sc-3.4"></a>

### SC-3(4) Module Coupling and Cohesiveness

*Baselines: Not in a baseline*

Implement security functions as largely independent modules that maximize internal cohesiveness within modules and minimize coupling between modules.

<details>
<summary>Discussion and assessment objectives for SC-3(4)</summary>

The reduction of inter-module interactions helps to constrain security functions and manage complexity. The concepts of coupling and cohesion are important with respect to modularity in software design. Coupling refers to the dependencies that one module has on other modules. Cohesion refers to the relationship between functions within a module. Best practices in software engineering and systems security engineering rely on layering, minimization, and modular decomposition to reduce and manage complexity. This produces software modules that are highly cohesive and loosely coupled.

Determine if:

- **SC-03(04)[01]** security functions are implemented as largely independent modules that maximize internal cohesiveness within modules;
- **SC-03(04)[02]** security functions are implemented as largely independent modules that minimize coupling between modules.

**Examine:** System and communications protection policy; procedures addressing security function isolation; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities.

**Test:** Organizational processes for maximizing internal cohesiveness within modules and minimizing coupling between modules; mechanisms supporting and/or implementing security functions as independent modules.

</details>

<a id="sc-3.5"></a>

### SC-3(5) Layered Structures

*Baselines: Not in a baseline*

Implement security functions as a layered structure minimizing interactions between layers of the design and avoiding any dependence by lower layers on the functionality or correctness of higher layers.

<details>
<summary>Discussion and assessment objectives for SC-3(5)</summary>

The implementation of layered structures with minimized interactions among security functions and non-looping layers (i.e., lower-layer functions do not depend on higher-layer functions) enables the isolation of security functions and the management of complexity.

Determine if security functions are implemented as a layered structure, minimizing interactions between layers of the design and avoiding any dependence by lower layers on the functionality or correctness of higher layers.

**Examine:** System and communications protection policy; procedures addressing security function isolation; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities.

**Test:** Organizational processes for implementing security functions as a layered structure that minimizes interactions between layers and avoids dependence by lower layers on functionality/correctness of higher layers; mechanisms supporting and/or implementing security functions as a layered structure.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SC-3</summary>

Determine if security functions are isolated from non-security functions.

**Examine:** System and communications protection policy; procedures addressing security function isolation; list of security functions to be isolated from non-security functions; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer.

**Test:** Separation of security functions from non-security functions within the system.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
