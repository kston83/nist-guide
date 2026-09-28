---
title: 'CM-6 Configuration Settings'
description: 'NIST SP 800-53 Rev. 5 control CM-6, Configuration Settings: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CM-6 Configuration Settings'
  order: 6
control:
  id: CM-6
  family: CM
  baselines: [Low, Moderate, High]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 2 (2 in a baseline) |

**Related controls:** [AC-3](/controls/ac/ac-3/), [AC-19](/controls/ac/ac-19/), [AU-2](/controls/au/au-2/), [AU-6](/controls/au/au-6/), [CA-9](/controls/ca/ca-9/), [CM-2](/controls/cm/cm-2/), [CM-3](/controls/cm/cm-3/), [CM-5](/controls/cm/cm-5/), [CM-7](/controls/cm/cm-7/), [CM-11](/controls/cm/cm-11/), [CP-7](/controls/cp/cp-7/), [CP-9](/controls/cp/cp-9/), [CP-10](/controls/cp/cp-10/), [IA-3](/controls/ia/ia-3/), [IA-5](/controls/ia/ia-5/), [PL-8](/controls/pl/pl-8/), [PL-9](/controls/pl/pl-9/), [RA-5](/controls/ra/ra-5/), [SA-4](/controls/sa/sa-4/), [SA-5](/controls/sa/sa-5/), [SA-8](/controls/sa/sa-8/), [SA-9](/controls/sa/sa-9/), [SC-18](/controls/sc/sc-18/), [SC-28](/controls/sc/sc-28/), [SC-43](/controls/sc/sc-43/), [SI-2](/controls/si/si-2/), [SI-4](/controls/si/si-4/), [SI-6](/controls/si/si-6/)

## Control statement

- **a.** Establish and document configuration settings for components employed within the system that reflect the most restrictive mode consistent with operational requirements using [Assignment: organization-defined common secure configurations];
- **b.** Implement the configuration settings;
- **c.** Identify, document, and approve any deviations from established configuration settings for [Assignment: organization-defined system components] based on [Assignment: organization-defined operational requirements] ; and
- **d.** Monitor and control changes to the configuration settings in accordance with organizational policies and procedures.

<details>
<summary>NIST discussion</summary>

Configuration settings are the parameters that can be changed in the hardware, software, or firmware components of the system that affect the security and privacy posture or functionality of the system. Information technology products for which configuration settings can be defined include mainframe computers, servers, workstations, operating systems, mobile devices, input/output devices, protocols, and applications. Parameters that impact the security posture of systems include registry settings; account, file, or directory permission settings; and settings for functions, protocols, ports, services, and remote connections. Privacy parameters are parameters impacting the privacy posture of systems, including the parameters required to satisfy other privacy controls. Privacy parameters include settings for access controls, data processing preferences, and processing and retention permissions. Organizations establish organization-wide configuration settings and subsequently derive specific configuration settings for systems. The established settings become part of the configuration baseline for the system.

Common secure configurations (also known as security configuration checklists, lockdown and hardening guides, and security reference guides) provide recognized, standardized, and established benchmarks that stipulate secure configuration settings for information technology products and platforms as well as instructions for configuring those products or platforms to meet operational requirements. Common secure configurations can be developed by a variety of organizations, including information technology product developers, manufacturers, vendors, federal agencies, consortia, academia, industry, and other organizations in the public and private sectors.

Implementation of a common secure configuration may be mandated at the organization level, mission and business process level, system level, or at a higher level, including by a regulatory agency. Common secure configurations include the United States Government Configuration Baseline USGCB and security technical implementation guides (STIGs), which affect the implementation of CM-6 and other controls such as AC-19 and CM-7 . The Security Content Automation Protocol (SCAP) and the defined standards within the protocol provide an effective method to uniquely identify, track, and control configuration settings.

</details>

## Control enhancements

<a id="cm-6.1"></a>

### CM-6(1) Automated Management, Application, and Verification

*Baselines: High*

Manage, apply, and verify configuration settings for [Assignment: organization-defined system components] using [Assignment: organization-defined organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for CM-6(1)</summary>

Automated tools (e.g., hardening tools, baseline configuration tools) can improve the accuracy, consistency, and availability of configuration settings information. Automation can also provide data aggregation and data correlation capabilities, alerting mechanisms, and dashboards to support risk-based decision-making within the organization.

Determine if:

- **CM-06(01)[01]** configuration settings for [Assignment: organization-defined system components] are managed using [Assignment: organization-defined automated mechanisms];
- **CM-06(01)[02]** configuration settings for [Assignment: organization-defined system components] are applied using [Assignment: organization-defined automated mechanisms];
- **CM-06(01)[03]** configuration settings for [Assignment: organization-defined system components] are verified using [Assignment: organization-defined automated mechanisms].

**Examine:** Configuration management policy; procedures addressing configuration settings for the system; configuration management plan; system design documentation; system configuration settings and associated documentation; system component inventory; common secure configuration checklists; change control records; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with security configuration management responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators; system developers.

**Test:** Organizational processes for managing configuration settings; automated mechanisms implemented to manage, apply, and verify system configuration settings.

</details>

<a id="cm-6.2"></a>

### CM-6(2) Respond to Unauthorized Changes

*Baselines: High*

Take the following actions in response to unauthorized changes to [Assignment: organization-defined configuration settings]: [Assignment: organization-defined actions].

<details>
<summary>Discussion and assessment objectives for CM-6(2)</summary>

Responses to unauthorized changes to configuration settings include alerting designated organizational personnel, restoring established configuration settings, or—in extreme cases—halting affected system processing.

Determine if [Assignment: organization-defined actions] are taken in response to unauthorized changes to [Assignment: organization-defined configuration settings].

**Examine:** System security plan; privacy plan; configuration management policy; procedures addressing configuration settings for the system; configuration management plan; system design documentation; system configuration settings and associated documentation; alerts/notifications of unauthorized changes to system configuration settings; system component inventory; documented responses to unauthorized changes to system configuration settings; change control records; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with security configuration management responsibilities; organizational personnel with security and privacy responsibilities; system/network administrators.

**Test:** Organizational process for responding to unauthorized changes to system configuration settings; mechanisms supporting and/or implementing actions in response to unauthorized changes.

</details>

*Withdrawn enhancements: CM-6(3), CM-6(4).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CM-6</summary>

Determine if:

- **CM-06a.** configuration settings that reflect the most restrictive mode consistent with operational requirements are established and documented for components employed within the system using [Assignment: organization-defined common secure configurations];
- **CM-06b.** the configuration settings documented in CM-06a are implemented;
- **CM-06c.**
  - **CM-06c.[01]** any deviations from established configuration settings for [Assignment: organization-defined system components] are identified and documented based on [Assignment: organization-defined operational requirements];
  - **CM-06c.[02]** any deviations from established configuration settings for [Assignment: organization-defined system components] are approved;
- **CM-06d.**
  - **CM-06d.[01]** changes to the configuration settings are monitored in accordance with organizational policies and procedures;
  - **CM-06d.[02]** changes to the configuration settings are controlled in accordance with organizational policies and procedures.

**Examine:** Configuration management policy; procedures addressing configuration settings for the system; configuration management plan; system design documentation; system configuration settings and associated documentation; common secure configuration checklists; system component inventory; evidence supporting approved deviations from established configuration settings; change control records; system data processing and retention permissions; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with security configuration management responsibilities; organizational personnel with privacy configuration management responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators.

**Test:** Organizational processes for managing configuration settings; mechanisms that implement, monitor, and/or control system configuration settings; mechanisms that identify and/or document deviations from established configuration settings.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
