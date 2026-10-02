---
title: 'PE-3 Physical Access Control'
description: 'NIST SP 800-53 Rev. 5 control PE-3, Physical Access Control: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PE-3 Physical Access Control'
  order: 3
control:
  id: PE-3
  family: PE
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 7 (1 in a baseline) |

**Related controls:** [AT-3](/controls/at/at-3/), [AU-2](/controls/au/au-2/), [AU-6](/controls/au/au-6/), [AU-9](/controls/au/au-9/), [AU-13](/controls/au/au-13/), [CP-10](/controls/cp/cp-10/), [IA-3](/controls/ia/ia-3/), [IA-8](/controls/ia/ia-8/), [MA-5](/controls/ma/ma-5/), [MP-2](/controls/mp/mp-2/), [MP-4](/controls/mp/mp-4/), [PE-2](/controls/pe/pe-2/), [PE-4](/controls/pe/pe-4/), [PE-5](/controls/pe/pe-5/), [PE-8](/controls/pe/pe-8/), [PS-2](/controls/ps/ps-2/), [PS-3](/controls/ps/ps-3/), [PS-6](/controls/ps/ps-6/), [PS-7](/controls/ps/ps-7/), [RA-3](/controls/ra/ra-3/), [SC-28](/controls/sc/sc-28/), [SI-4](/controls/si/si-4/), [SR-3](/controls/sr/sr-3/)

## Control statement

- **a.** Enforce physical access authorizations at [Assignment: organization-defined entry and exit points] by:
  - **1.** Verifying individual access authorizations before granting access to the facility; and
  - **2.** Controlling ingress and egress to the facility using [Selection (one or more): [Assignment: organization-defined systems or devices] ; guards];
- **b.** Maintain physical access audit logs for [Assignment: organization-defined entry or exit points];
- **c.** Control access to areas within the facility designated as publicly accessible by implementing the following controls: [Assignment: organization-defined physical access controls];
- **d.** Escort visitors and control visitor activity [Assignment: organization-defined circumstances];
- **e.** Secure keys, combinations, and other physical access devices;
- **f.** Inventory [Assignment: organization-defined physical access devices] every [Assignment: organization-defined frequency] ; and
- **g.** Change combinations and keys [Assignment: organization-defined frequency] and/or when keys are lost, combinations are compromised, or when individuals possessing the keys or combinations are transferred or terminated.

<details>
<summary>NIST discussion</summary>

Physical access control applies to employees and visitors. Individuals with permanent physical access authorizations are not considered visitors. Physical access controls for publicly accessible areas may include physical access control logs/records, guards, or physical access devices and barriers to prevent movement from publicly accessible areas to non-public areas. Organizations determine the types of guards needed, including professional security staff, system users, or administrative staff. Physical access devices include keys, locks, combinations, biometric readers, and card readers. Physical access control systems comply with applicable laws, executive orders, directives, policies, regulations, standards, and guidelines. Organizations have flexibility in the types of audit logs employed. Audit logs can be procedural, automated, or some combination thereof. Physical access points can include facility access points, interior access points to systems that require supplemental access controls, or both. Components of systems may be in areas designated as publicly accessible with organizations controlling access to the components.

</details>

## Control enhancements

<a id="pe-3.1"></a>

### PE-3(1) System Access

*Baselines: High*

Enforce physical access authorizations to the system in addition to the physical access controls for the facility at [Assignment: organization-defined physical spaces].

<details>
<summary>Discussion and assessment objectives for PE-3(1)</summary>

Control of physical access to the system provides additional physical security for those areas within facilities where there is a concentration of system components.

Determine if:

- **PE-03(01)[01]** physical access authorizations to the system are enforced;
- **PE-03(01)[02]** physical access controls are enforced for the facility at [Assignment: organization-defined physical spaces].

**Examine:** Physical and environmental protection policy; procedures addressing physical access control; physical access control logs or records; physical access control devices; access authorizations; access credentials; system entry and exit points; list of areas within the facility containing concentrations of system components or system components requiring additional physical protection; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with physical access authorization responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for physical access control to the information system/components; mechanisms supporting and/or implementing physical access control for facility areas containing system components.

</details>

<a id="pe-3.2"></a>

### PE-3(2) Facility and Systems

*Baselines: Not in a baseline*

Perform security checks [Assignment: organization-defined frequency] at the physical perimeter of the facility or system for exfiltration of information or removal of system components.

<details>
<summary>Discussion and assessment objectives for PE-3(2)</summary>

Organizations determine the extent, frequency, and/or randomness of security checks to adequately mitigate risk associated with exfiltration.

Determine if security checks are performed [Assignment: organization-defined frequency] at the physical perimeter of the facility or system for exfiltration of information or removal of system components.

**Examine:** Physical and environmental protection policy; procedures addressing physical access control; physical access control logs or records; records of security checks; security audit reports; security inspection reports; facility layout documentation; system entry and exit points; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with physical access control responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for physical access control to the facility and/or system; mechanisms supporting and/or implementing physical access control for the facility or system; mechanisms supporting and/or implementing security checks for the unauthorized exfiltration of information.

</details>

<a id="pe-3.3"></a>

### PE-3(3) Continuous Guards

*Baselines: Not in a baseline*

Employ guards to control [Assignment: organization-defined physical access points] to the facility where the system resides 24 hours per day, 7 days per week.

<details>
<summary>Discussion and assessment objectives for PE-3(3)</summary>

Employing guards at selected physical access points to the facility provides a more rapid response capability for organizations. Guards also provide the opportunity for human surveillance in areas of the facility not covered by video surveillance.

Determine if guards are employed to control [Assignment: organization-defined physical access points] to the facility where the system resides 24 hours per day, 7 days per week.

**Examine:** Physical and environmental protection policy; procedures addressing physical access control; physical access control logs or records; physical access control devices; facility surveillance records; facility layout documentation; system entry and exit points; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with physical access control responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for physical access control to the facility where the system resides; mechanisms supporting and/or implementing physical access control for the facility where the system resides.

</details>

<a id="pe-3.4"></a>

### PE-3(4) Lockable Casings

*Baselines: Not in a baseline*

Use lockable physical casings to protect [Assignment: organization-defined system components] from unauthorized physical access.

<details>
<summary>Discussion and assessment objectives for PE-3(4)</summary>

The greatest risk from the use of portable devices—such as smart phones, tablets, and notebook computers—is theft. Organizations can employ lockable, physical casings to reduce or eliminate the risk of equipment theft. Such casings come in a variety of sizes, from units that protect a single notebook computer to full cabinets that can protect multiple servers, computers, and peripherals. Lockable physical casings can be used in conjunction with cable locks or lockdown plates to prevent the theft of the locked casing containing the computer equipment.

Determine if lockable physical casings are used to protect [Assignment: organization-defined system components] from unauthorized access.

**Examine:** Physical and environmental protection policy; procedures addressing physical access control; list of system components requiring protection through lockable physical casings; lockable physical casings; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with physical access control responsibilities; organizational personnel with information security responsibilities.

**Test:** Lockable physical casings.

</details>

<a id="pe-3.5"></a>

### PE-3(5) Tamper Protection

*Baselines: Not in a baseline*

Employ [Assignment: organization-defined anti-tamper technologies] to [Selection (one or more): detect; prevent] physical tampering or alteration of [Assignment: organization-defined hardware components] within the system.

<details>
<summary>Discussion and assessment objectives for PE-3(5)</summary>

Organizations can implement tamper detection and prevention at selected hardware components or implement tamper detection at some components and tamper prevention at other components. Detection and prevention activities can employ many types of anti-tamper technologies, including tamper-detection seals and anti-tamper coatings. Anti-tamper programs help to detect hardware alterations through counterfeiting and other supply chain-related risks.

Determine if [Assignment: organization-defined anti-tamper technologies] are employed to [Selection (one or more): detect; prevent] physical tampering or alteration of [Assignment: organization-defined hardware components] within the system.

**Examine:** Physical and environmental protection policy; procedures addressing physical access control; list of security safeguards to detect/prevent physical tampering or alteration of system hardware components; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with physical access control responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes to detect/prevent physical tampering or alteration of system hardware components; mechanisms/security safeguards supporting and/or implementing the detection/prevention of physical tampering/alternation of system hardware components.

</details>

<a id="pe-3.7"></a>

### PE-3(7) Physical Barriers

*Baselines: Not in a baseline*

Limit access using physical barriers.

<details>
<summary>Discussion and assessment objectives for PE-3(7)</summary>

Physical barriers include bollards, concrete slabs, jersey walls, and hydraulic active vehicle barriers.

Determine if physical barriers are used to limit access.

**Examine:** Physical and environmental protection policy; procedures addressing physical access control; list of physical barriers to limit access to the system; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with physical access control responsibilities; organizational personnel with information security responsibilities.

</details>

<a id="pe-3.8"></a>

### PE-3(8) Access Control Vestibules

*Baselines: Not in a baseline*

Employ access control vestibules at [Assignment: organization-defined locations].

<details>
<summary>Discussion and assessment objectives for PE-3(8)</summary>

An access control vestibule is part of a physical access control system that typically provides a space between two sets of interlocking doors. Vestibules are designed to prevent unauthorized individuals from following authorized individuals into facilities with controlled access. This activity, also known as piggybacking or tailgating, results in unauthorized access to the facility. Interlocking door controllers can be used to limit the number of individuals who enter controlled access points and to provide containment areas while authorization for physical access is verified. Interlocking door controllers can be fully automated (i.e., controlling the opening and closing of the doors) or partially automated (i.e., using security guards to control the number of individuals entering the containment area).

Determine if access control vestibules are employed at [Assignment: organization-defined locations].

**Examine:** Physical and environmental protection policy; procedures addressing physical access control; list of access control vestibules and locations; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with physical access control responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for vestibules to prevent unauthorized access..

</details>

*Withdrawn enhancements: PE-3(6).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PE-3</summary>

Determine if:

- **PE-03a.**
  - **PE-03a.01** physical access authorizations are enforced at [Assignment: organization-defined entry and exit points] by verifying individual access authorizations before granting access to the facility;
  - **PE-03a.02** physical access authorizations are enforced at [Assignment: organization-defined entry and exit points] by controlling ingress and egress to the facility using [Selection (one or more): [Assignment: organization-defined systems or devices] ; guards];
- **PE-03b.** physical access audit logs are maintained for [Assignment: organization-defined entry or exit points];
- **PE-03c.** access to areas within the facility designated as publicly accessible are maintained by implementing [Assignment: organization-defined physical access controls];
- **PE-03d.**
  - **PE-03d.[01]** visitors are escorted;
  - **PE-03d.[02]** visitor activity is controlled [Assignment: organization-defined circumstances];
- **PE-03e.**
  - **PE-03e.[01]** keys are secured;
  - **PE-03e.[02]** combinations are secured;
  - **PE-03e.[03]** other physical access devices are secured;
- **PE-03f.** [Assignment: organization-defined physical access devices] are inventoried [Assignment: organization-defined frequency];
- **PE-03g.**
  - **PE-03g.[01]** combinations are changed [Assignment: organization-defined frequency] , when combinations are compromised, or when individuals possessing the combinations are transferred or terminated;
  - **PE-03g.[02]** keys are changed [Assignment: organization-defined frequency] , when keys are lost, or when individuals possessing the keys are transferred or terminated.

**Examine:** Physical and environmental protection policy; procedures addressing physical access control; physical access control logs or records; inventory records of physical access control devices; system entry and exit points; records of key and lock combination changes; storage locations for physical access control devices; physical access control devices; list of security safeguards controlling access to designated publicly accessible areas within facility; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with physical access control responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for physical access control; mechanisms supporting and/or implementing physical access control; physical access control devices.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PE-3 enforces the authorizations [PE-2](/controls/pe/pe-2/) grants. It covers verifying each person's authorization at the entry and exit points and controlling ingress and egress (a), access logs (b), the boundary between public and non-public areas (c), visitor escorts (d), and the keys, combinations and badges themselves: securing them (e), inventorying them (f) and changing them (g). NIST's PE-3 discussion says physical access devices include keys, locks, combinations, biometric readers and card readers; that controls for publicly accessible areas may include logs, guards, or devices and barriers that stop movement from public to non-public areas; and that audit logs can be procedural, automated or both. Access points can be the facility's doors, interior doors to areas that need extra control, or both.

**Common implementations.** An electronic physical access control system with a badge reader at each controlled door logs every entry, and a staffed reception desk or guard post at the main entrance checks people in during business hours. Interior doors to server rooms, wiring closets and media storage areas have their own readers and access levels. Visitors receive a day badge that looks different from permanent badges and are escorted in non-public areas; the [visitor log](/templates/forms/visitor-log/) records the escort. Keys and combinations are few, held by named people and recorded with the badge stock in the device inventory of the [physical access list](/templates/forms/physical-access-list/), which is counted each year. A lost badge is disabled the same day it is reported.

**Organization-defined parameters.** Typical values, from the [Physical and Environmental Protection policy](/templates/policies/pe/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Entry and exit points where authorizations are enforced (a) | Every entry and exit point of the facility, and of each area within it that contains system components |
| Systems or devices, guards, or both, controlling ingress and egress (a.2) | An electronic physical access control system with badge readers at each controlled entry point, and guards or staffed reception at the main entrance during business hours |
| Entry or exit points with physical access audit logs (b) | Every controlled entry point to the facility and to each area that contains system components |
| Controls for publicly accessible areas (c) | A staffed reception or guard post, locked or badge-controlled doors between public and non-public areas, and no unattended system components or live network jacks in public areas |
| Circumstances requiring visitor escorts (d) | At all times in non-public areas, for every visitor and for anyone without a physical access authorization for the area, including maintenance personnel who are not on the authorized maintenance list |
| Physical access devices to inventory (f) | Keys, lock combinations, and badges and access cards, including unissued, temporary and visitor badges |
| Inventory frequency (f) | At least annually |
| Combination change frequency (g) | At least annually |
| Key change frequency (g) | At least every five years, and sooner when an inventory cannot account for an issued key |

The a.2 selection takes both options: the access control system is the "systems or devices" the selection asks you to name, and guards or staffed reception cover the main entrance. The escort circumstances match the maintenance escorts in [MA-5](/controls/ma/ma-5/), and the policy adds that each person badges in individually, that tailgating is reported, that visitor and temporary badges look different and are returned on departure, and that a lost or stolen badge is disabled the same day. Changing keys and combinations when people who hold them leave or transfer (g) is required by the control itself, whatever frequency you set.

**Evidence assessors ask for.**

- The list of controlled entry points and areas, with the control at each (section 2 of the physical access list)
- Physical access control system logs for a sample of doors and dates, and how the logs are protected ([AU-9](/controls/au/au-9/))
- Observation of the entrances: whether reception checks people, whether doors are propped open, and whether a visitor can walk in unescorted
- Visitor log entries showing the escort for a sample of visits
- The key, combination and badge inventory, the last annual count, and the records of the last combination and key changes
- Records showing that badges of departed staff and lost badges were disabled, and that combinations were changed when holders left

**Inheritance.** For a system hosted in a cloud service or colocation data center, the provider controls access to its facility, and the [system security plan](/templates/plans/system-security-plan/) records PE-3 as inherited for it, backed by the provider's authorization or audit report. The organization still meets PE-3 for its own offices and equipment rooms, usually as a common control run by the facilities manager for every system in the building. A colocation cage with the organization's own lock or badge reader inside the provider's facility makes PE-3 a hybrid control.

**Common findings.**

- Server room or wiring closet doors propped open, or opened by the building badge every employee holds.
- Tailgating through badge-controlled doors, with no one challenging it.
- Visitors left alone in non-public areas, or visitor badges not collected at departure.
- No inventory of keys and combinations, or locks never rekeyed after keys went missing.
- Combinations unchanged for years, and known to people who have since left.
- Access control system logs kept only on a local controller, overwritten within days, so no one can answer who entered on a given date.

**Enhancements in the Moderate baseline.** None. High adds [PE-3(1)](#pe-3.1) system access. [PE-3(2)](#pe-3.2) facility and systems, [PE-3(3)](#pe-3.3) continuous guards, [PE-3(4)](#pe-3.4) lockable casings, [PE-3(5)](#pe-3.5) tamper protection, [PE-3(7)](#pe-3.7) physical barriers and [PE-3(8)](#pe-3.8) access control vestibules are in no baseline. PE-3(6) is withdrawn.

- **PE-3(1)** enforces physical access authorizations to the system in addition to the facility's controls, at the spaces you name. NIST's discussion says it adds protection where system components are concentrated. Typical value: data centers, server rooms, wiring closets and media storage areas that contain components of the system. In practice it is a second, separately authorized door: the building badge does not open the server room, and access to those spaces is approved by the system owner and limited to people whose duties require it. Section 2 of the physical access list records each such area and its entry control.

**Federal systems** (as of October 2026). [FIPS 201-3](https://csrc.nist.gov/pubs/fips/201-3/final) (January 2022, the current revision), section 6.3.1, lists the PIV authentication mechanisms for physical access and the assurance each provides, marks visual inspection (VIS) and SYM-CAK as deprecated, and states that "The selection of authentication assurance levels SHALL be made in accordance with the applicable policies for a facility's security level". [NIST SP 800-116 Rev. 1](https://csrc.nist.gov/pubs/sp/800/116/r1/final) (June 2018, final, with no newer revision or draft) recommends a risk-based selection organized by Controlled, Limited and Exclusion areas, with at least one, two and three authentication factors respectively (section 4.3, Table 4-3). The Interagency Security Committee's [The Risk Management Process: An Interagency Security Committee Standard](https://www.cisa.gov/publication/risk-management-process), 2024 Edition, the current edition on CISA's publication page, applies to federally owned or leased facilities regularly occupied by executive branch employees or contract workers for nonmilitary activities (section 3.0), and has the tenant make the final Facility Security Level (FSL) determination, from Level I to Level V (section 8.1.1). The PE-3 clause's federal block designates each area of a federally controlled facility as Controlled, Limited or Exclusion consistent with its FSL, records the designation in the physical access list, and has the access control system authenticate PIV Cards electronically with the number of factors Table 4-3 recommends, never by visual inspection of the card alone.
