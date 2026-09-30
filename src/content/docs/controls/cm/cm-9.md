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
guidance: draft
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

## How to apply it

CM-9 asks for a configuration management plan for each system: who does what, how configuration items are identified and managed through the life cycle, which items are under configuration management, who approves the plan, and how the plan itself is protected. NIST's CM-9 discussion says the plan meets the policy's requirements tailored to the system, is written during development and acquisition, and describes how changes move through change management, how settings and baselines are updated, how inventories are kept, how development, test and operational environments are controlled, and how key documents are released and updated. Configuration items are the hardware, software, firmware and documentation to be configuration-managed.

**Common implementations.** An organization-wide plan template with a system-specific part, which NIST's discussion suggests: the organization's plan sets the common process, and each system's part names its configuration items, tools, environments and people. The plan usually covers:

- Roles: the system owner, the change control board ([CM-3](/controls/cm/cm-3/)), the people who perform impact analyses ([CM-4](/controls/cm/cm-4/)) and the administrators who make changes
- The configuration items, for example operating system images, application code and its dependencies, infrastructure-as-code definitions, network device configurations, cloud service settings and key documents such as the security plan
- Where each item's approved version lives, usually version control, and how baselines are recorded ([CM-2](/controls/cm/cm-2/))
- How new items are identified as the system changes, and how items leave configuration management when retired
- The development, test and operational environments, and how changes move between them

SP 800-128 ([August 2011, with updates as of October 10, 2019](https://csrc.nist.gov/pubs/sp/800/128/upd1/final)) gives a sample outline for the plan in Appendix D. A Configuration Management Plan template is planned for this family. The [system security plan](/templates/plans/system-security-plan/) records where the plan and the change records are kept.

**Organization-defined parameters.** Typical value, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Who reviews and approves the plan (d) | The system owner and the Chief Information Security Officer |

In the [Configuration Management policy](/templates/policies/cm/), the system owner develops, documents and implements the plan and protects it from unauthorized disclosure and modification.

**Evidence assessors ask for.**

- The approved plan, with the approvers, the approval date and the version history
- The list of configuration items, and evidence that a sample of them are under configuration management, such as their history in version control
- Evidence that the plan's processes are followed, drawn from the change records
- The access controls on the plan and its repository

**Inheritance.** The organization's plan template and shared tooling are common. Each system owns its plan and its configuration items, so CM-9 is usually a hybrid control.

**Common findings.**

- A generic plan that names no configuration items for the system.
- Configuration items missing from the list, most often infrastructure-as-code, cloud settings and documentation.
- A plan that describes tools or environments the system no longer uses.
- No record of approval, or approval by someone other than the roles the policy names.
- The plan stored where anyone in the organization can edit it.

**Enhancements in the Moderate baseline.** None. [CM-9(1)](#cm-9.1) assignment of responsibility, which gives the job of developing the configuration management process to people not directly involved in system development, is in no baseline.
