---
title: 'CM-3 Configuration Change Control'
description: 'NIST SP 800-53 Rev. 5 control CM-3, Configuration Change Control: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CM-3 Configuration Change Control'
  order: 3
control:
  id: CM-3
  family: CM
  baselines: [Moderate, High]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | Organization | 8 (4 in a baseline) |

**Related controls:** [CA-7](/controls/ca/ca-7/), [CM-2](/controls/cm/cm-2/), [CM-4](/controls/cm/cm-4/), [CM-5](/controls/cm/cm-5/), [CM-6](/controls/cm/cm-6/), [CM-9](/controls/cm/cm-9/), [CM-11](/controls/cm/cm-11/), [IA-3](/controls/ia/ia-3/), [MA-2](/controls/ma/ma-2/), [PE-16](/controls/pe/pe-16/), [PT-6](/controls/pt/pt-6/), [RA-8](/controls/ra/ra-8/), [SA-8](/controls/sa/sa-8/), [SA-10](/controls/sa/sa-10/), [SC-28](/controls/sc/sc-28/), [SC-34](/controls/sc/sc-34/), [SC-37](/controls/sc/sc-37/), [SI-2](/controls/si/si-2/), [SI-3](/controls/si/si-3/), [SI-4](/controls/si/si-4/), [SI-7](/controls/si/si-7/), [SI-10](/controls/si/si-10/), [SR-11](/controls/sr/sr-11/)

## Control statement

- **a.** Determine and document the types of changes to the system that are configuration-controlled;
- **b.** Review proposed configuration-controlled changes to the system and approve or disapprove such changes with explicit consideration for security and privacy impact analyses;
- **c.** Document configuration change decisions associated with the system;
- **d.** Implement approved configuration-controlled changes to the system;
- **e.** Retain records of configuration-controlled changes to the system for [Assignment: organization-defined time period];
- **f.** Monitor and review activities associated with configuration-controlled changes to the system; and
- **g.** Coordinate and provide oversight for configuration change control activities through [Assignment: organization-defined configuration change control element] that convenes [Selection (one or more): [Assignment: organization-defined frequency] ; when [Assignment: organization-defined configuration change conditions] ].

<details>
<summary>NIST discussion</summary>

Configuration change control for organizational systems involves the systematic proposal, justification, implementation, testing, review, and disposition of system changes, including system upgrades and modifications. Configuration change control includes changes to baseline configurations, configuration items of systems, operational procedures, configuration settings for system components, remediate vulnerabilities, and unscheduled or unauthorized changes. Processes for managing configuration changes to systems include Configuration Control Boards or Change Advisory Boards that review and approve proposed changes. For changes that impact privacy risk, the senior agency official for privacy updates privacy impact assessments and system of records notices. For new systems or major upgrades, organizations consider including representatives from the development organizations on the Configuration Control Boards or Change Advisory Boards. Auditing of changes includes activities before and after changes are made to systems and the auditing activities required to implement such changes. See also SA-10.

</details>

## Control enhancements

<a id="cm-3.1"></a>

### CM-3(1) Automated Documentation, Notification, and Prohibition of Changes

*Baselines: High*

Use [Assignment: organization-defined automated mechanisms] to:

- **(a)** Document proposed changes to the system;
- **(b)** Notify [Assignment: organization-defined approval authorities] of proposed changes to the system and request change approval;
- **(c)** Highlight proposed changes to the system that have not been approved or disapproved within [Assignment: organization-defined time period];
- **(d)** Prohibit changes to the system until designated approvals are received;
- **(e)** Document all changes to the system; and
- **(f)** Notify [Assignment: organization-defined personnel] when approved changes to the system are completed.

<details>
<summary>Discussion and assessment objectives for CM-3(1)</summary>

None.

Determine if:

- **CM-03(01)(a)** [Assignment: organization-defined automated mechanisms] are used to document proposed changes to the system;
- **CM-03(01)(b)** [Assignment: organization-defined automated mechanisms] are used to notify [Assignment: organization-defined approval authorities] of proposed changes to the system and request change approval;
- **CM-03(01)(c)** [Assignment: organization-defined automated mechanisms] are used to highlight proposed changes to the system that have not been approved or disapproved within [Assignment: organization-defined time period];
- **CM-03(01)(d)** [Assignment: organization-defined automated mechanisms] are used to prohibit changes to the system until designated approvals are received;
- **CM-03(01)(e)** [Assignment: organization-defined automated mechanisms] are used to document all changes to the system;
- **CM-03(01)(f)** [Assignment: organization-defined automated mechanisms] are used to notify [Assignment: organization-defined personnel] when approved changes to the system are completed.

**Examine:** Configuration management policy; procedures addressing system configuration change control; configuration management plan; system design documentation; system architecture and configuration documentation; automated configuration control mechanisms; system configuration settings and associated documentation; change control records; system audit records; change approval requests; change approvals; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with configuration change control responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers; members of change control board or similar.

**Test:** Organizational processes for configuration change control; automated mechanisms implementing configuration change control activities.

</details>

<a id="cm-3.2"></a>

### CM-3(2) Testing, Validation, and Documentation of Changes

*Baselines: Moderate, High*

Test, validate, and document changes to the system before finalizing the implementation of the changes.

<details>
<summary>Discussion and assessment objectives for CM-3(2)</summary>

Changes to systems include modifications to hardware, software, or firmware components and configuration settings defined in CM-6 . Organizations ensure that testing does not interfere with system operations that support organizational mission and business functions. Individuals or groups conducting tests understand security and privacy policies and procedures, system security and privacy policies and procedures, and the health, safety, and environmental risks associated with specific facilities or processes. Operational systems may need to be taken offline, or replicated to the extent feasible, before testing can be conducted. If systems must be taken offline for testing, the tests are scheduled to occur during planned system outages whenever possible. If the testing cannot be conducted on operational systems, organizations employ compensating controls.

Determine if:

- **CM-03(02)[01]** changes to the system are tested before finalizing the implementation of the changes;
- **CM-03(02)[02]** changes to the system are validated before finalizing the implementation of the changes;
- **CM-03(02)[03]** changes to the system are documented before finalizing the implementation of the changes.

**Examine:** Configuration management policy; configuration management plan; procedures addressing system configuration change control; system design documentation; system architecture and configuration documentation; system configuration settings and associated documentation; test records; validation records; change control records; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with configuration change control responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers; members of change control board or similar.

**Test:** Organizational processes for configuration change control; mechanisms supporting and/or implementing, testing, validating, and documenting system changes.

</details>

<a id="cm-3.3"></a>

### CM-3(3) Automated Change Implementation

*Baselines: Not in a baseline*

Implement changes to the current system baseline and deploy the updated baseline across the installed base using [Assignment: organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for CM-3(3)</summary>

Automated tools can improve the accuracy, consistency, and availability of configuration baseline information. Automation can also provide data aggregation and data correlation capabilities, alerting mechanisms, and dashboards to support risk-based decision-making within the organization.

Determine if:

- **CM-03(03)[01]** changes to the current system baseline are implemented using [Assignment: organization-defined automated mechanisms];
- **CM-03(03)[02]** the updated baseline is deployed across the installed base using [Assignment: organization-defined automated mechanisms].

**Examine:** Configuration management policy; configuration management plan; procedures addressing system configuration change control; system design documentation; system architecture and configuration documentation; automated configuration control mechanisms; change control records; system component inventory; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with configuration change control responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers; members of change control board or similar.

**Test:** Organizational processes for configuration change control; automated mechanisms implementing changes to current system baseline.

</details>

<a id="cm-3.4"></a>

### CM-3(4) Security and Privacy Representatives

*Baselines: Moderate, High*

Require [Assignment: organization-defined security and privacy representatives] to be members of the [Assignment: organization-defined configuration change control element].

<details>
<summary>Discussion and assessment objectives for CM-3(4)</summary>

Information security and privacy representatives include system security officers, senior agency information security officers, senior agency officials for privacy, or system privacy officers. Representation by personnel with information security and privacy expertise is important because changes to system configurations can have unintended side effects, some of which may be security- or privacy-relevant. Detecting such changes early in the process can help avoid unintended, negative consequences that could ultimately affect the security and privacy posture of systems. The configuration change control element referred to in the second organization-defined parameter reflects the change control elements defined by organizations in CM-3g.

Determine if:

- **CM-03(04)[01]** [Assignment: organization-defined security representatives] are required to be members of the [Assignment: organization-defined configuration change control element];
- **CM-03(04)[02]** [Assignment: organization-defined privacy representatives] are required to be members of the [Assignment: organization-defined configuration change control element].

**Examine:** Configuration management policy; procedures addressing system configuration change control; configuration management plan; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with configuration change control responsibilities; organizational personnel with information security and privacy responsibilities; members of change control board or similar.

**Test:** Organizational processes for configuration change control.

</details>

<a id="cm-3.5"></a>

### CM-3(5) Automated Security Response

*Baselines: Not in a baseline*

Implement the following security responses automatically if baseline configurations are changed in an unauthorized manner: [Assignment: organization-defined security responses].

<details>
<summary>Discussion and assessment objectives for CM-3(5)</summary>

Automated security responses include halting selected system functions, halting system processing, and issuing alerts or notifications to organizational personnel when there is an unauthorized modification of a configuration item.

Determine if [Assignment: organization-defined security responses] are automatically implemented if baseline configurations are changed in an unauthorized manner.

**Examine:** System security plan; configuration management policy; procedures addressing system configuration change control; configuration management plan; system design documentation; system architecture and configuration documentation; system configuration settings and associated documentation; alerts/notifications of unauthorized baseline configuration changes; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with configuration change control responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers; members of change control board or similar.

**Test:** Organizational processes for configuration change control; automated mechanisms implementing security responses to unauthorized changes to the baseline configurations.

</details>

<a id="cm-3.6"></a>

### CM-3(6) Cryptography Management

*Baselines: High*

Ensure that cryptographic mechanisms used to provide the following controls are under configuration management: [Assignment: organization-defined controls].

<details>
<summary>Discussion and assessment objectives for CM-3(6)</summary>

The controls referenced in the control enhancement refer to security and privacy controls from the control catalog. Regardless of the cryptographic mechanisms employed, processes and procedures are in place to manage those mechanisms. For example, if system components use certificates for identification and authentication, a process is implemented to address the expiration of those certificates.

Determine if cryptographic mechanisms used to provide [Assignment: organization-defined controls] are under configuration management.

**Examine:** Configuration management policy; procedures addressing system configuration change control; configuration management plan; system design documentation; system architecture and configuration documentation; system configuration settings and associated documentation; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with configuration change control responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers; members of change control board or similar.

**Test:** Organizational processes for configuration change control; cryptographic mechanisms implementing organizational security safeguards (controls).

</details>

<a id="cm-3.7"></a>

### CM-3(7) Review System Changes

*Baselines: Not in a baseline*

Review changes to the system [Assignment: organization-defined frequency] or when [Assignment: organization-defined circumstances] to determine whether unauthorized changes have occurred.

<details>
<summary>Discussion and assessment objectives for CM-3(7)</summary>

Indications that warrant a review of changes to the system and the specific circumstances justifying such reviews may be obtained from activities carried out by organizations during the configuration change process or continuous monitoring process.

Determine if changes to the system are reviewed [Assignment: organization-defined frequency] or when [Assignment: organization-defined circumstances] to determine whether unauthorized changes have occurred.

**Examine:** Configuration management policy; procedures addressing system configuration change control; configuration management plan; change control records; system architecture and configuration documentation; system configuration settings and associated documentation; system audit records; system component inventory; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with configuration change control responsibilities; organizational personnel with security responsibilities; system/network administrators; members of change control board or similar.

**Test:** Organizational processes for configuration change control; mechanisms implementing audit records for changes.

</details>

<a id="cm-3.8"></a>

### CM-3(8) Prevent or Restrict Configuration Changes

*Baselines: Not in a baseline*

Prevent or restrict changes to the configuration of the system under the following circumstances: [Assignment: organization-defined circumstances].

<details>
<summary>Discussion and assessment objectives for CM-3(8)</summary>

System configuration changes can adversely affect critical system security and privacy functionality. Change restrictions can be enforced through automated mechanisms.

Determine if changes to the configuration of the system are prevented or restricted under [Assignment: organization-defined circumstances].

**Examine:** Configuration management policy; procedures addressing system configuration change control; configuration management plan; change control records; system architecture and configuration documentation; system configuration settings and associated documentation; system component inventory; system audit records; system security plan; other relevant documents or records.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CM-3</summary>

Determine if:

- **CM-03a.** the types of changes to the system that are configuration-controlled are determined and documented;
- **CM-03b.**
  - **CM-03b.[01]** proposed configuration-controlled changes to the system are reviewed;
  - **CM-03b.[02]** proposed configuration-controlled changes to the system are approved or disapproved with explicit consideration for security and privacy impact analyses;
- **CM-03c.** configuration change decisions associated with the system are documented;
- **CM-03d.** approved configuration-controlled changes to the system are implemented;
- **CM-03e.** records of configuration-controlled changes to the system are retained for [Assignment: organization-defined time period];
- **CM-03f.**
  - **CM-03f.[01]** activities associated with configuration-controlled changes to the system are monitored;
  - **CM-03f.[02]** activities associated with configuration-controlled changes to the system are reviewed;
- **CM-03g.**
  - **CM-03g.[01]** configuration change control activities are coordinated and overseen by [Assignment: organization-defined configuration change control element];
  - **CM-03g.[02]** the configuration control element convenes [Selection (one or more): [Assignment: organization-defined frequency] ; when [Assignment: organization-defined configuration change conditions] ].

**Examine:** Configuration management policy; procedures addressing system configuration change control; configuration management plan; system architecture and configuration documentation; change control records; system audit records; change control audit and review reports; agenda/minutes/documentation from configuration change control oversight meetings; system security plan; privacy plan; privacy impact assessments; system of records notices; other relevant documents or records.

**Interview:** Organizational personnel with configuration change control responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators; members of change control board or similar.

**Test:** Organizational processes for configuration change control; mechanisms that implement configuration change control.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
