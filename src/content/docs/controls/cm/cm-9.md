---
title: 'CM-9 Configuration Management Plan'
description: 'NIST SP 800-53 Rev. 5 control CM-9, Configuration Management Plan: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CM-9 Configuration Management Plan'
  order: 9
control:
  id: CM-9
  family: CM
  baselines: [Moderate, High]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | Organization | 1 (0 in a baseline) |

**Related controls:** [CM-2](/controls/cm/cm-2/), [CM-3](/controls/cm/cm-3/), [CM-4](/controls/cm/cm-4/), [CM-5](/controls/cm/cm-5/), [CM-8](/controls/cm/cm-8/), [PL-2](/controls/pl/pl-2/), [RA-8](/controls/ra/ra-8/), [SA-10](/controls/sa/sa-10/), [SI-12](/controls/si/si-12/)

## Control statement

Develop, document, and implement a configuration management plan for the system that:

- **a.** Addresses roles, responsibilities, and configuration management processes and procedures;
- **b.** Establishes a process for identifying configuration items throughout the system development life cycle and for managing the configuration of the configuration items;
- **c.** Defines the configuration items for the system and places the configuration items under configuration management;
- **d.** Is reviewed and approved by [Assignment: organization-defined personnel or roles] ; and
- **e.** Protects the configuration management plan from unauthorized disclosure and modification.

<details>
<summary>NIST discussion</summary>

Configuration management activities occur throughout the system development life cycle. As such, there are developmental configuration management activities (e.g., the control of code and software libraries) and operational configuration management activities (e.g., control of installed components and how the components are configured). Configuration management plans satisfy the requirements in configuration management policies while being tailored to individual systems. Configuration management plans define processes and procedures for how configuration management is used to support system development life cycle activities.

Configuration management plans are generated during the development and acquisition stage of the system development life cycle. The plans describe how to advance changes through change management processes; update configuration settings and baselines; maintain component inventories; control development, test, and operational environments; and develop, release, and update key documents.

Organizations can employ templates to help ensure the consistent and timely development and implementation of configuration management plans. Templates can represent a configuration management plan for the organization with subsets of the plan implemented on a system by system basis. Configuration management approval processes include the designation of key stakeholders responsible for reviewing and approving proposed changes to systems, and personnel who conduct security and privacy impact analyses prior to the implementation of changes to the systems. Configuration items are the system components, such as the hardware, software, firmware, and documentation to be configuration-managed. As systems continue through the system development life cycle, new configuration items may be identified, and some existing configuration items may no longer need to be under configuration control.

</details>

## Control enhancements

<a id="cm-9.1"></a>

### CM-9(1) Assignment of Responsibility

*Baselines: Not in a baseline*

Assign responsibility for developing the configuration management process to organizational personnel that are not directly involved in system development.

<details>
<summary>Discussion and assessment objectives for CM-9(1)</summary>

In the absence of dedicated configuration management teams assigned within organizations, system developers may be tasked with developing configuration management processes using personnel who are not directly involved in system development or system integration. This separation of duties ensures that organizations establish and maintain a sufficient degree of independence between the system development and integration processes and configuration management processes to facilitate quality control and more effective oversight.

Determine if the responsibility for developing the configuration management process is assigned to organizational personnel who are not directly involved in system development.

**Examine:** Configuration management policy; procedures addressing responsibilities for configuration management process development; configuration management plan; system security plan; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for configuration management process development; organizational personnel with information security responsibilities.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CM-9</summary>

Determine if:

- **CM-09[01]** a configuration management plan for the system is developed and documented;
- **CM-09[02]** a configuration management plan for the system is implemented;
- **CM-09a.**
  - **CM-09a.[01]** the configuration management plan addresses roles;
  - **CM-09a.[02]** the configuration management plan addresses responsibilities;
  - **CM-09a.[03]** the configuration management plan addresses configuration management processes and procedures;
- **CM-09b.**
  - **CM-09b.[01]** the configuration management plan establishes a process for identifying configuration items throughout the system development life cycle;
  - **CM-09b.[02]** the configuration management plan establishes a process for managing the configuration of the configuration items;
- **CM-09c.**
  - **CM-09c.[01]** the configuration management plan defines the configuration items for the system;
  - **CM-09c.[02]** the configuration management plan places the configuration items under configuration management;
- **CM-09d.** the configuration management plan is reviewed and approved by [Assignment: organization-defined personnel or roles];
- **CM-09e.**
  - **CM-09e.[01]** the configuration management plan is protected from unauthorized disclosure;
  - **CM-09e.[02]** the configuration management plan is protected from unauthorized modification.

**Examine:** Configuration management policy; procedures addressing configuration management planning; configuration management plan; system design documentation; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for developing the configuration management plan; organizational personnel with responsibilities for implementing and managing processes defined in the configuration management plan; organizational personnel with responsibilities for protecting the configuration management plan; organizational personnel with information security and privacy responsibilities; system/network administrators.

**Test:** Organizational processes for developing and documenting the configuration management plan; organizational processes for identifying and managing configuration items; organizational processes for protecting the configuration management plan; mechanisms implementing the configuration management plan; mechanisms for managing configuration items; mechanisms for protecting the configuration management plan.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
