---
title: 'CM-2 Baseline Configuration'
description: 'NIST SP 800-53 Rev. 5 control CM-2, Baseline Configuration: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CM-2 Baseline Configuration'
  order: 2
control:
  id: CM-2
  family: CM
  baselines: [Low, Moderate, High]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 4 (3 in a baseline) |

**Related controls:** [AC-19](/controls/ac/ac-19/), [AU-6](/controls/au/au-6/), [CA-9](/controls/ca/ca-9/), [CM-1](/controls/cm/cm-1/), [CM-3](/controls/cm/cm-3/), [CM-5](/controls/cm/cm-5/), [CM-6](/controls/cm/cm-6/), [CM-8](/controls/cm/cm-8/), [CM-9](/controls/cm/cm-9/), [CP-9](/controls/cp/cp-9/), [CP-10](/controls/cp/cp-10/), [CP-12](/controls/cp/cp-12/), [MA-2](/controls/ma/ma-2/), [PL-8](/controls/pl/pl-8/), [PM-5](/controls/pm/pm-5/), [SA-8](/controls/sa/sa-8/), [SA-10](/controls/sa/sa-10/), [SA-15](/controls/sa/sa-15/), [SC-18](/controls/sc/sc-18/)

## Control statement

- **a.** Develop, document, and maintain under configuration control, a current baseline configuration of the system; and
- **b.** Review and update the baseline configuration of the system:
  - **1.** [Assignment: organization-defined frequency];
  - **2.** When required due to [Assignment: organization-defined circumstances] ; and
  - **3.** When system components are installed or upgraded.

<details>
<summary>NIST discussion</summary>

Baseline configurations for systems and system components include connectivity, operational, and communications aspects of systems. Baseline configurations are documented, formally reviewed, and agreed-upon specifications for systems or configuration items within those systems. Baseline configurations serve as a basis for future builds, releases, or changes to systems and include security and privacy control implementations, operational procedures, information about system components, network topology, and logical placement of components in the system architecture. Maintaining baseline configurations requires creating new baselines as organizational systems change over time. Baseline configurations of systems reflect the current enterprise architecture.

</details>

## Control enhancements

<a id="cm-2.2"></a>

### CM-2(2) Automation Support for Accuracy and Currency

*Baselines: Moderate, High*

Maintain the currency, completeness, accuracy, and availability of the baseline configuration of the system using [Assignment: organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for CM-2(2)</summary>

Automated mechanisms that help organizations maintain consistent baseline configurations for systems include configuration management tools, hardware, software, firmware inventory tools, and network management tools. Automated tools can be used at the organization level, mission and business process level, or system level on workstations, servers, notebook computers, network components, or mobile devices. Tools can be used to track version numbers on operating systems, applications, types of software installed, and current patch levels. Automation support for accuracy and currency can be satisfied by the implementation of CM-8(2) for organizations that combine system component inventory and baseline configuration activities.

Determine if:

- **CM-02(02)[01]** the currency of the baseline configuration of the system is maintained using [Assignment: organization-defined automated mechanisms];
- **CM-02(02)[02]** the completeness of the baseline configuration of the system is maintained using [Assignment: organization-defined automated mechanisms];
- **CM-02(02)[03]** the accuracy of the baseline configuration of the system is maintained using [Assignment: organization-defined automated mechanisms];
- **CM-02(02)[04]** the availability of the baseline configuration of the system is maintained using [Assignment: organization-defined automated mechanisms].

**Examine:** Configuration management policy; procedures addressing the baseline configuration of the system; configuration management plan; system design documentation; system architecture and configuration documentation; system configuration settings and associated documentation; system component inventory; configuration change control records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with configuration management responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for managing baseline configurations; automated mechanisms implementing baseline configuration maintenance.

</details>

<a id="cm-2.3"></a>

### CM-2(3) Retention of Previous Configurations

*Baselines: Moderate, High*

Retain [Assignment: organization-defined number] of previous versions of baseline configurations of the system to support rollback.

<details>
<summary>Discussion and assessment objectives for CM-2(3)</summary>

Retaining previous versions of baseline configurations to support rollback include hardware, software, firmware, configuration files, configuration records, and associated documentation.

Determine if [Assignment: organization-defined number] of previous baseline configuration version(s) of the system is/are retained to support rollback.

**Examine:** Configuration management policy; procedures addressing the baseline configuration of the system; configuration management plan; system architecture and configuration documentation; system configuration settings and associated documentation; copies of previous baseline configuration versions; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with configuration management responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for managing baseline configurations.

</details>

<a id="cm-2.6"></a>

### CM-2(6) Development and Test Environments

*Baselines: Not in a baseline*

Maintain a baseline configuration for system development and test environments that is managed separately from the operational baseline configuration.

<details>
<summary>Discussion and assessment objectives for CM-2(6)</summary>

Establishing separate baseline configurations for development, testing, and operational environments protects systems from unplanned or unexpected events related to development and testing activities. Separate baseline configurations allow organizations to apply the configuration management that is most appropriate for each type of configuration. For example, the management of operational configurations typically emphasizes the need for stability, while the management of development or test configurations requires greater flexibility. Configurations in the test environment mirror configurations in the operational environment to the extent practicable so that the results of the testing are representative of the proposed changes to the operational systems. Separate baseline configurations do not necessarily require separate physical environments.

Determine if:

- **CM-02(06)[01]** a baseline configuration for system development environments that is managed separately from the operational baseline configuration is maintained;
- **CM-02(06)[02]** a baseline configuration for test environments that is managed separately from the operational baseline configuration is maintained.

**Examine:** Configuration management policy; procedures addressing the baseline configuration of the system; configuration management plan; system design documentation; system architecture and configuration documentation; system configuration settings and associated documentation; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with configuration management responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for managing baseline configurations; mechanisms implementing separate baseline configurations for development, test, and operational environments.

</details>

<a id="cm-2.7"></a>

### CM-2(7) Configure Systems and Components for High-risk Areas

*Baselines: Moderate, High*

- **(a)** Issue [Assignment: organization-defined systems or system components] with [Assignment: organization-defined configurations] to individuals traveling to locations that the organization deems to be of significant risk; and
- **(b)** Apply the following controls to the systems or components when the individuals return from travel: [Assignment: organization-defined controls].

<details>
<summary>Discussion and assessment objectives for CM-2(7)</summary>

When it is known that systems or system components will be in high-risk areas external to the organization, additional controls may be implemented to counter the increased threat in such areas. For example, organizations can take actions for notebook computers used by individuals departing on and returning from travel. Actions include determining the locations that are of concern, defining the required configurations for the components, ensuring that components are configured as intended before travel is initiated, and applying controls to the components after travel is completed. Specially configured notebook computers include computers with sanitized hard drives, limited applications, and more stringent configuration settings. Controls applied to mobile devices upon return from travel include examining the mobile device for signs of physical tampering and purging and reimaging disk drives. Protecting information that resides on mobile devices is addressed in the MP (Media Protection) family.

Determine if:

- **CM-02(07)(a)** [Assignment: organization-defined systems or system components] with [Assignment: organization-defined configurations] are issued to individuals traveling to locations that the organization deems to be of significant risk;
- **CM-02(07)(b)** [Assignment: organization-defined controls] are applied to the systems or system components when the individuals return from travel.

**Examine:** Configuration management policy; configuration management plan; procedures addressing the baseline configuration of the system; procedures addressing system component installations and upgrades; system architecture and configuration documentation; system configuration settings and associated documentation; system component inventory; records of system baseline configuration reviews and updates; system component installations/upgrades and associated records; change control records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with configuration management responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for managing baseline configurations.

</details>

*Withdrawn enhancements: CM-2(1), CM-2(4), CM-2(5).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CM-2</summary>

Determine if:

- **CM-02a.**
  - **CM-02a.[01]** a current baseline configuration of the system is developed and documented;
  - **CM-02a.[02]** a current baseline configuration of the system is maintained under configuration control;
- **CM-02b.**
  - **CM-02b.01** the baseline configuration of the system is reviewed and updated [Assignment: organization-defined frequency];
  - **CM-02b.02** the baseline configuration of the system is reviewed and updated when required due to [Assignment: organization-defined circumstances];
  - **CM-02b.03** the baseline configuration of the system is reviewed and updated when system components are installed or upgraded.

**Examine:** Configuration management policy; procedures addressing the baseline configuration of the system; configuration management plan; enterprise architecture documentation; system design documentation; system security plan; privacy plan; system architecture and configuration documentation; system configuration settings and associated documentation; system component inventory; change control records; other relevant documents or records.

**Interview:** Organizational personnel with configuration management responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators.

**Test:** Organizational processes for managing baseline configurations; mechanisms supporting configuration control of the baseline configuration.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
