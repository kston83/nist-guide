---
title: 'SR-4 Provenance'
description: 'NIST SP 800-53 Rev. 5 control SR-4, Provenance: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SR-4 Provenance'
  order: 4
control:
  id: SR-4
  family: SR
  baselines: []
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Not in a baseline | Organization | 4 (0 in a baseline) |

**Related controls:** [CM-8](/controls/cm/cm-8/), [MA-2](/controls/ma/ma-2/), [MA-6](/controls/ma/ma-6/), [RA-9](/controls/ra/ra-9/), [SA-3](/controls/sa/sa-3/), [SA-8](/controls/sa/sa-8/), [SI-4](/controls/si/si-4/)

## Control statement

Document, monitor, and maintain valid provenance of the following systems, system components, and associated data: [Assignment: organization-defined systems, system components, and associated data].

<details>
<summary>NIST discussion</summary>

Every system and system component has a point of origin and may be changed throughout its existence. Provenance is the chronology of the origin, development, ownership, location, and changes to a system or system component and associated data. It may also include personnel and processes used to interact with or make modifications to the system, component, or associated data. Organizations consider developing procedures (see SR-1 ) for allocating responsibilities for the creation, maintenance, and monitoring of provenance for systems and system components; transferring provenance documentation and responsibility between organizations; and preventing and monitoring for unauthorized changes to the provenance records. Organizations have methods to document, monitor, and maintain valid provenance baselines for systems, system components, and related data. These actions help track, assess, and document any changes to the provenance, including changes in supply chain elements or configuration, and help ensure non-repudiation of provenance information and the provenance change records. Provenance considerations are addressed throughout the system development life cycle and incorporated into contracts and other arrangements, as appropriate.

</details>

## Control enhancements

<a id="sr-4.1"></a>

### SR-4(1) Identity

*Baselines: Not in a baseline*

Establish and maintain unique identification of the following supply chain elements, processes, and personnel associated with the identified system and critical system components: [Assignment: organization-defined supply chain elements, processes, and personnel].

<details>
<summary>Discussion and assessment objectives for SR-4(1)</summary>

Knowing who and what is in the supply chains of organizations is critical to gaining visibility into supply chain activities. Visibility into supply chain activities is also important for monitoring and identifying high-risk events and activities. Without reasonable visibility into supply chains elements, processes, and personnel, it is very difficult for organizations to understand and manage risk and reduce their susceptibility to adverse events. Supply chain elements include organizations, entities, or tools used for the research and development, design, manufacturing, acquisition, delivery, integration, operations, maintenance, and disposal of systems and system components. Supply chain processes include development processes for hardware, software, and firmware; shipping and handling procedures; configuration management tools, techniques, and measures to maintain provenance; personnel and physical security programs; or other programs, processes, or procedures associated with the production and distribution of supply chain elements. Supply chain personnel are individuals with specific roles and responsibilities related to the secure the research and development, design, manufacturing, acquisition, delivery, integration, operations and maintenance, and disposal of a system or system component. Identification methods are sufficient to support an investigation in case of a supply chain change (e.g. if a supply company is purchased), compromise, or event.

Determine if:

- **SR-04(01)[01]** unique identification of [Assignment: organization-defined supply chain elements, processes, and personnel] is established;
- **SR-04(01)[02]** unique identification of [Assignment: organization-defined supply chain elements, processes, and personnel] is maintained.

**Examine:** Supply chain risk management policy and procedures; supply chain risk management plan; system and services acquisition policy; procedures addressing supply chain protection; procedures addressing the integration of information security requirements into the acquisition process; list of supply chain elements, processes, and actors (associated with the system, system component, or system service) requiring implementation of unique identification processes, procedures, tools, mechanisms, equipment, techniques, and/or configurations; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system and services acquisition responsibilities; organizational personnel with information security responsibilities; organizational personnel with supply chain protection responsibilities; organizational personnel with responsibilities for establishing and retaining the unique identification of supply chain elements, processes, and actors.

**Test:** Organizational processes for defining, establishing, and retaining unique identification for supply chain elements, processes, and actors; mechanisms supporting and/or implementing the definition, establishment, and retention of unique identification for supply chain elements, processes, and actors.

</details>

<a id="sr-4.2"></a>

### SR-4(2) Track and Trace

*Baselines: Not in a baseline*

Establish and maintain unique identification of the following systems and critical system components for tracking through the supply chain: [Assignment: organization-defined systems and critical system components].

<details>
<summary>Discussion and assessment objectives for SR-4(2)</summary>

Tracking the unique identification of systems and system components during development and transport activities provides a foundational identity structure for the establishment and maintenance of provenance. For example, system components may be labeled using serial numbers or tagged using radio-frequency identification tags. Labels and tags can help provide better visibility into the provenance of a system or system component. A system or system component may have more than one unique identifier. Identification methods are sufficient to support a forensic investigation after a supply chain compromise or event.

Determine if:

- **SR-04(02)[01]** the unique identification of [Assignment: organization-defined systems and critical system components] is established for tracking through the supply chain;
- **SR-04(02)[02]** the unique identification of [Assignment: organization-defined systems and critical system components] is maintained for tracking through the supply chain.

**Examine:** Supply chain risk management policy and procedures; system and services acquisition policy; procedures addressing supply chain protection; procedures addressing the integration of information security requirements into the acquisition process; supply chain risk management plan; list of supply chain elements, processes, and actors (associated with the system, system component, or system service) requiring implementation of unique identification processes, procedures, tools, mechanisms, equipment, techniques, and/or configurations; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system and services acquisition responsibilities; organizational personnel with information security responsibilities; organizational personnel with supply chain protection responsibilities; organizational personnel with responsibilities for establishing and retaining the unique identification of supply chain elements, processes, and actors.

**Test:** Organizational processes for defining, establishing, and retaining unique identification for supply chain elements, processes, and actors; mechanisms supporting and/or implementing the definition, establishment, and retention of unique identification for supply chain elements, processes, and actors.

</details>

<a id="sr-4.3"></a>

### SR-4(3) Validate as Genuine and Not Altered

*Baselines: Not in a baseline*

Employ the following controls to validate that the system or system component received is genuine and has not been altered: [Assignment: organization-defined controls].

<details>
<summary>Discussion and assessment objectives for SR-4(3)</summary>

For many systems and system components, especially hardware, there are technical means to determine if the items are genuine or have been altered, including optical and nanotechnology tagging, physically unclonable functions, side-channel analysis, cryptographic hash verifications or digital signatures, and visible anti-tamper labels or stickers. Controls can also include monitoring for out of specification performance, which can be an indicator of tampering or counterfeits. Organizations may leverage supplier and contractor processes for validating that a system or component is genuine and has not been altered and for replacing a suspect system or component. Some indications of tampering may be visible and addressable before accepting delivery, such as inconsistent packaging, broken seals, and incorrect labels. When a system or system component is suspected of being altered or counterfeit, the supplier, contractor, or original equipment manufacturer may be able to replace the item or provide a forensic capability to determine the origin of the counterfeit or altered item. Organizations can provide training to personnel on how to identify suspicious system or component deliveries.

Determine if:

- **SR-04(03)[01]** [Assignment: organization-defined controls] are employed to validate that the system or system component received is genuine;
- **SR-04(03)[02]** [Assignment: organization-defined controls] are employed to validate that the system or system component received has not been altered.

**Examine:** Supply chain risk management policy and procedures; supply chain risk management plan; system and services acquisition policy; procedures addressing supply chain protection; procedures addressing the security design principle of trusted components used in the specification, design, development, implementation, and modification of the system; system design documentation; procedures addressing the integration of information security requirements into the acquisition process; solicitation documentation; acquisition documentation; service level agreements; acquisition contracts for the system, system component, or system service; evidentiary documentation (including applicable configurations) indicating that the system or system component is genuine and has not been altered; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system and services acquisition responsibilities; organizational personnel with information security responsibilities; organizational personnel with supply chain risk management responsibilities.

**Test:** Organizational processes for defining and employing validation safeguards; mechanisms supporting and/or implementing the definition and employment of validation safeguards; mechanisms supporting the application of the security design principle of trusted components in system specification, design, development, implementation, and modification.

</details>

<a id="sr-4.4"></a>

### SR-4(4) Supply Chain Integrity — Pedigree

*Baselines: Not in a baseline*

Employ [Assignment: organization-defined controls] and conduct [Assignment: organization-defined analysis method] to ensure the integrity of the system and system components by validating the internal composition and provenance of critical or mission-essential technologies, products, and services.

<details>
<summary>Discussion and assessment objectives for SR-4(4)</summary>

Authoritative information regarding the internal composition of system components and the provenance of technology, products, and services provides a strong basis for trust. The validation of the internal composition and provenance of technologies, products, and services is referred to as the pedigree. For microelectronics, this includes material composition of components. For software this includes the composition of open-source and proprietary code, including the version of the component at a given point in time. Pedigrees increase the assurance that the claims suppliers assert about the internal composition and provenance of the products, services, and technologies they provide are valid. The validation of the internal composition and provenance can be achieved by various evidentiary artifacts or records that manufacturers and suppliers produce during the research and development, design, manufacturing, acquisition, delivery, integration, operations and maintenance, and disposal of technology, products, and services. Evidentiary artifacts include, but are not limited to, software identification (SWID) tags, software component inventory, the manufacturers’ declarations of platform attributes (e.g., serial numbers, hardware component inventory), and measurements (e.g., firmware hashes) that are tightly bound to the hardware itself.

Determine if:

- **SR-04(04)[01]** [Assignment: organization-defined controls] are employed to ensure the integrity of the system and system components;
- **SR-04(04)[02]** [Assignment: organization-defined analysis method] is conducted to ensure the integrity of the system and system components.

**Examine:** Supply chain risk management policy and procedures; supply chain risk management plan; system and services acquisition policy; procedures addressing supply chain protection; bill of materials for critical systems or system components; acquisition documentation; software identification tags; manufacturer declarations of platform attributes (e.g., serial numbers, hardware component inventory) and measurements (e.g., firmware hashes) that are tightly bound to the hardware itself; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system and services acquisition responsibilities; organizational personnel with information security responsibilities; organizational personnel with supply chain risk management responsibilities.

**Test:** Organizational processes for identifying pedigree information; organizational processes to determine and validate the integrity of the internal composition of critical systems and critical system components; mechanisms to determine and validate the integrity of the internal composition of critical systems and critical system components.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SR-4</summary>

Determine if:

- **SR-04[01]** valid provenance is documented for [Assignment: organization-defined systems, system components, and associated data];
- **SR-04[02]** valid provenance is monitored for [Assignment: organization-defined systems, system components, and associated data];
- **SR-04[03]** valid provenance is maintained for [Assignment: organization-defined systems, system components, and associated data].

**Examine:** Supply chain risk management policy; supply chain risk management procedures; supply chain risk management plan; documentation of critical systems, critical system components, and associated data; documentation showing the history of ownership, custody, and location of and changes to critical systems or critical system components; system architecture; inter-organizational agreements and procedures; contracts; system security plan; privacy plan; personally identifiable information processing policy; other relevant documents or records.

**Interview:** Organizational personnel with acquisition responsibilities; organizational personnel with information security and privacy responsibilities; organizational personnel with supply chain risk management responsibilities.

**Test:** Organizational processes for identifying the provenance of critical systems and critical system components; mechanisms used to document, monitor, or maintain provenance.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
