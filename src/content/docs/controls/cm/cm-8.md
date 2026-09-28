---
title: 'CM-8 System Component Inventory'
description: 'NIST SP 800-53 Rev. 5 control CM-8, System Component Inventory: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CM-8 System Component Inventory'
  order: 8
control:
  id: CM-8
  family: CM
  baselines: [Low, Moderate, High]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 8 (4 in a baseline) |

**Related controls:** [CM-2](/controls/cm/cm-2/), [CM-7](/controls/cm/cm-7/), [CM-9](/controls/cm/cm-9/), [CM-10](/controls/cm/cm-10/), [CM-11](/controls/cm/cm-11/), [CM-13](/controls/cm/cm-13/), [CP-2](/controls/cp/cp-2/), [CP-9](/controls/cp/cp-9/), [MA-2](/controls/ma/ma-2/), [MA-6](/controls/ma/ma-6/), [PE-20](/controls/pe/pe-20/), [PL-9](/controls/pl/pl-9/), [PM-5](/controls/pm/pm-5/), [SA-4](/controls/sa/sa-4/), [SA-5](/controls/sa/sa-5/), [SI-2](/controls/si/si-2/), [SR-4](/controls/sr/sr-4/)

## Control statement

- **a.** Develop and document an inventory of system components that:
  - **1.** Accurately reflects the system;
  - **2.** Includes all components within the system;
  - **3.** Does not include duplicate accounting of components or components assigned to any other system;
  - **4.** Is at the level of granularity deemed necessary for tracking and reporting; and
  - **5.** Includes the following information to achieve system component accountability: [Assignment: organization-defined information] ; and
- **b.** Review and update the system component inventory [Assignment: organization-defined frequency].

<details>
<summary>NIST discussion</summary>

System components are discrete, identifiable information technology assets that include hardware, software, and firmware. Organizations may choose to implement centralized system component inventories that include components from all organizational systems. In such situations, organizations ensure that the inventories include system-specific information required for component accountability. The information necessary for effective accountability of system components includes the system name, software owners, software version numbers, hardware inventory specifications, software license information, and for networked components, the machine names and network addresses across all implemented protocols (e.g., IPv4, IPv6). Inventory specifications include date of receipt, cost, model, serial number, manufacturer, supplier information, component type, and physical location.

Preventing duplicate accounting of system components addresses the lack of accountability that occurs when component ownership and system association is not known, especially in large or complex connected systems. Effective prevention of duplicate accounting of system components necessitates use of a unique identifier for each component. For software inventory, centrally managed software that is accessed via other systems is addressed as a component of the system on which it is installed and managed. Software installed on multiple organizational systems and managed at the system level is addressed for each individual system and may appear more than once in a centralized component inventory, necessitating a system association for each software instance in the centralized inventory to avoid duplicate accounting of components. Scanning systems implementing multiple network protocols (e.g., IPv4 and IPv6) can result in duplicate components being identified in different address spaces. The implementation of CM-8(7) can help to eliminate duplicate accounting of components.

</details>

## Control enhancements

<a id="cm-8.1"></a>

### CM-8(1) Updates During Installation and Removal

*Baselines: Moderate, High*

Update the inventory of system components as part of component installations, removals, and system updates.

<details>
<summary>Discussion and assessment objectives for CM-8(1)</summary>

Organizations can improve the accuracy, completeness, and consistency of system component inventories if the inventories are updated as part of component installations or removals or during general system updates. If inventories are not updated at these key times, there is a greater likelihood that the information will not be appropriately captured and documented. System updates include hardware, software, and firmware components.

Determine if:

- **CM-08(01)[01]** the inventory of system components is updated as part of component installations;
- **CM-08(01)[02]** the inventory of system components is updated as part of component removals;
- **CM-08(01)[03]** the inventory of system components is updated as part of system updates.

**Examine:** Configuration management policy; procedures addressing system component inventory; configuration management plan; system security plan; system component inventory; inventory reviews and update records; change control records; component installation records; component removal records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with component inventory updating responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for updating the system component inventory; mechanisms supporting and/or implementing system component inventory updates.

</details>

<a id="cm-8.2"></a>

### CM-8(2) Automated Maintenance

*Baselines: High*

Maintain the currency, completeness, accuracy, and availability of the inventory of system components using [Assignment: organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for CM-8(2)</summary>

Organizations maintain system inventories to the extent feasible. For example, virtual machines can be difficult to monitor because such machines are not visible to the network when not in use. In such cases, organizations maintain as up-to-date, complete, and accurate an inventory as is deemed reasonable. Automated maintenance can be achieved by the implementation of CM-2(2) for organizations that combine system component inventory and baseline configuration activities.

Determine if:

- **CM-08(02)[01]** [Assignment: organization-defined automated mechanisms] are used to maintain the currency of the system component inventory;
- **CM-08(02)[02]** [Assignment: organization-defined automated mechanisms] are used to maintain the completeness of the system component inventory;
- **CM-08(02)[03]** [Assignment: organization-defined automated mechanisms] are used to maintain the accuracy of the system component inventory;
- **CM-08(02)[04]** [Assignment: organization-defined automated mechanisms] are used to maintain the availability of the system component inventory.

**Examine:** Configuration management policy; procedures addressing system component inventory; configuration management plan; system design documentation; system security plan; system component inventory; change control records; system maintenance records; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with component inventory management responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Organizational processes for maintaining the system component inventory; automated mechanisms supporting and/or implementing the system component inventory.

</details>

<a id="cm-8.3"></a>

### CM-8(3) Automated Unauthorized Component Detection

*Baselines: Moderate, High*

- **(a)** Detect the presence of unauthorized hardware, software, and firmware components within the system using [Assignment: organization-defined automated mechanisms] [Assignment: organization-defined frequency] ; and
- **(b)** Take the following actions when unauthorized components are detected: [Selection (one or more): disable network access by unauthorized components; isolate unauthorized components; notify [Assignment: organization-defined personnel or roles] ].

<details>
<summary>Discussion and assessment objectives for CM-8(3)</summary>

Automated unauthorized component detection is applied in addition to the monitoring for unauthorized remote connections and mobile devices. Monitoring for unauthorized system components may be accomplished on an ongoing basis or by the periodic scanning of systems for that purpose. Automated mechanisms may also be used to prevent the connection of unauthorized components (see CM-7(9) ). Automated mechanisms can be implemented in systems or in separate system components. When acquiring and implementing automated mechanisms, organizations consider whether such mechanisms depend on the ability of the system component to support an agent or supplicant in order to be detected since some types of components do not have or cannot support agents (e.g., IoT devices, sensors). Isolation can be achieved , for example, by placing unauthorized system components in separate domains or subnets or quarantining such components. This type of component isolation is commonly referred to as "sandboxing."

Determine if:

- **CM-08(03)(a)**
  - **CM-08(03)(a)[01]** the presence of unauthorized hardware within the system is detected using [Assignment: organization-defined automated mechanisms] [Assignment: organization-defined frequency];
  - **CM-08(03)(a)[02]** the presence of unauthorized software within the system is detected using [Assignment: organization-defined automated mechanisms] [Assignment: organization-defined frequency];
  - **CM-08(03)(a)[03]** the presence of unauthorized firmware within the system is detected using [Assignment: organization-defined automated mechanisms] [Assignment: organization-defined frequency];
- **CM-08(03)(b)**
  - **CM-08(03)(b)[01]** [Selection (one or more): disable network access by unauthorized components; isolate unauthorized components; notify [Assignment: organization-defined personnel or roles] ] are taken when unauthorized hardware is detected;
  - **CM-08(03)(b)[02]** [Selection (one or more): disable network access by unauthorized components; isolate unauthorized components; notify [Assignment: organization-defined personnel or roles] ] are taken when unauthorized software is detected;
  - **CM-08(03)(b)[03]** [Selection (one or more): disable network access by unauthorized components; isolate unauthorized components; notify [Assignment: organization-defined personnel or roles] ] are taken when unauthorized firmware is detected.

**Examine:** Configuration management policy; procedures addressing system component inventory; configuration management plan; system design documentation; system security plan; system component inventory; change control records; alerts/notifications of unauthorized components within the system; system monitoring records; system maintenance records; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with component inventory management responsibilities; organizational personnel with responsibilities for managing the automated mechanisms implementing unauthorized system component detection; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Organizational processes for detection of unauthorized system components; organizational processes for taking action when unauthorized system components are detected; automated mechanisms supporting and/or implementing the detection of unauthorized system components; automated mechanisms supporting and/or implementing actions taken when unauthorized system components are detected.

</details>

<a id="cm-8.4"></a>

### CM-8(4) Accountability Information

*Baselines: High*

Include in the system component inventory information, a means for identifying by [Selection (one or more): name; position; role] , individuals responsible and accountable for administering those components.

<details>
<summary>Discussion and assessment objectives for CM-8(4)</summary>

Identifying individuals who are responsible and accountable for administering system components ensures that the assigned components are properly administered and that organizations can contact those individuals if some action is required (e.g., when the component is determined to be the source of a breach, needs to be recalled or replaced, or needs to be relocated).

Determine if individuals responsible and accountable for administering system components are identified by [Selection (one or more): name; position; role] in the system component inventory.

**Examine:** Configuration management policy; procedures addressing system component inventory; configuration management plan; system security plan; system component inventory; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with component inventory management responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for managing the system component inventory; mechanisms supporting and/or implementing the system component inventory.

</details>

<a id="cm-8.6"></a>

### CM-8(6) Assessed Configurations and Approved Deviations

*Baselines: Not in a baseline*

Include assessed component configurations and any approved deviations to current deployed configurations in the system component inventory.

<details>
<summary>Discussion and assessment objectives for CM-8(6)</summary>

Assessed configurations and approved deviations focus on configuration settings established by organizations for system components, the specific components that have been assessed to determine compliance with the required configuration settings, and any approved deviations from established configuration settings.

Determine if:

- **CM-08(06)[01]** assessed component configurations are included in the system component inventory;
- **CM-08(06)[02]** any approved deviations to current deployed configurations are included in the system component inventory.

**Examine:** Configuration management policy; procedures addressing system component inventory; configuration management plan; system security plan; system design documentation; system component inventory; system configuration settings and associated documentation; change control records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with component inventory management responsibilities; organizational personnel with assessment responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for managing the system component inventory; mechanisms supporting and/or implementing system component inventory.

</details>

<a id="cm-8.7"></a>

### CM-8(7) Centralized Repository

*Baselines: Not in a baseline*

Provide a centralized repository for the inventory of system components.

<details>
<summary>Discussion and assessment objectives for CM-8(7)</summary>

Organizations may implement centralized system component inventories that include components from all organizational systems. Centralized repositories of component inventories provide opportunities for efficiencies in accounting for organizational hardware, software, and firmware assets. Such repositories may also help organizations rapidly identify the location and responsible individuals of components that have been compromised, breached, or are otherwise in need of mitigation actions. Organizations ensure that the resulting centralized inventories include system-specific information required for proper component accountability.

Determine if a centralized repository for the system component inventory is provided.

**Examine:** Configuration management policy; procedures addressing system component inventory; configuration management plan; system design documentation; system security plan; system component inventory; system configuration settings and associated documentation; change control records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with component inventory management responsibilities; organizational personnel with security responsibilities.

**Test:** Organizational processes for managing the system component inventory; mechanisms supporting and/or implementing system component inventory.

</details>

<a id="cm-8.8"></a>

### CM-8(8) Automated Location Tracking

*Baselines: Not in a baseline*

Support the tracking of system components by geographic location using [Assignment: organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for CM-8(8)</summary>

The use of automated mechanisms to track the location of system components can increase the accuracy of component inventories. Such capability may help organizations rapidly identify the location and responsible individuals of system components that have been compromised, breached, or are otherwise in need of mitigation actions. The use of tracking mechanisms can be coordinated with senior agency officials for privacy if there are implications that affect individual privacy.

Determine if [Assignment: organization-defined automated mechanisms] are used to support the tracking of system components by geographic location.

**Examine:** Configuration management policy; procedures addressing system component inventory; configuration management plan; system design documentation; system component inventory; system configuration settings and associated documentation; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with component inventory management responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators; system developers.

**Test:** Organizational processes for managing the system component inventory; automated mechanisms supporting and/or implementing system component inventory; automated mechanisms supporting and/or implementing tracking of components by geographic locations.

</details>

<a id="cm-8.9"></a>

### CM-8(9) Assignment of Components to Systems

*Baselines: Not in a baseline*

- **(a)** Assign system components to a system; and
- **(b)** Receive an acknowledgement from [Assignment: organization-defined personnel or roles] of this assignment.

<details>
<summary>Discussion and assessment objectives for CM-8(9)</summary>

System components that are not assigned to a system may be unmanaged, lack the required protection, and become an organizational vulnerability.

Determine if:

- **CM-08(09)(a)** system components are assigned to a system;
- **CM-08(09)(b)** an acknowledgement of the component assignment is received from [Assignment: organization-defined personnel or roles].

**Examine:** Configuration management policy; procedures addressing system component inventory; configuration management plan; system security plan; system design documentation; system component inventory; change control records; acknowledgements of system component assignments; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with component inventory management responsibilities; system owner; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for assigning components to systems; organizational processes for acknowledging assignment of components to systems; mechanisms implementing assignment of components to the system; mechanisms implementing acknowledgment of assignment of components to the system.

</details>

*Withdrawn enhancements: CM-8(5).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CM-8</summary>

Determine if:

- **CM-08a.**
  - **CM-08a.01** an inventory of system components that accurately reflects the system is developed and documented;
  - **CM-08a.02** an inventory of system components that includes all components within the system is developed and documented;
  - **CM-08a.03** an inventory of system components that does not include duplicate accounting of components or components assigned to any other system is developed and documented;
  - **CM-08a.04** an inventory of system components that is at the level of granularity deemed necessary for tracking and reporting is developed and documented;
  - **CM-08a.05** an inventory of system components that includes [Assignment: organization-defined information] is developed and documented;
- **CM-08b.** the system component inventory is reviewed and updated [Assignment: organization-defined frequency].

**Examine:** Configuration management policy; procedures addressing system component inventory; configuration management plan; system security plan; system design documentation; system component inventory; inventory reviews and update records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with component inventory management responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for managing the system component inventory; mechanisms supporting and/or implementing system component inventory.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
