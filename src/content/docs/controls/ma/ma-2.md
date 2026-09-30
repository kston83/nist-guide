---
title: 'MA-2 Controlled Maintenance'
description: 'NIST SP 800-53 Rev. 5 control MA-2, Controlled Maintenance: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'MA-2 Controlled Maintenance'
  order: 2
control:
  id: MA-2
  family: MA
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 1 (1 in a baseline) |

**Related controls:** [CM-2](/controls/cm/cm-2/), [CM-3](/controls/cm/cm-3/), [CM-4](/controls/cm/cm-4/), [CM-5](/controls/cm/cm-5/), [CM-8](/controls/cm/cm-8/), [MA-4](/controls/ma/ma-4/), [MP-6](/controls/mp/mp-6/), [PE-16](/controls/pe/pe-16/), [SI-2](/controls/si/si-2/), [SR-3](/controls/sr/sr-3/), [SR-4](/controls/sr/sr-4/), [SR-11](/controls/sr/sr-11/)

## Control statement

- **a.** Schedule, document, and review records of maintenance, repair, and replacement on system components in accordance with manufacturer or vendor specifications and/or organizational requirements;
- **b.** Approve and monitor all maintenance activities, whether performed on site or remotely and whether the system or system components are serviced on site or removed to another location;
- **c.** Require that [Assignment: organization-defined personnel or roles] explicitly approve the removal of the system or system components from organizational facilities for off-site maintenance, repair, or replacement;
- **d.** Sanitize equipment to remove the following information from associated media prior to removal from organizational facilities for off-site maintenance, repair, or replacement: [Assignment: organization-defined information];
- **e.** Check all potentially impacted controls to verify that the controls are still functioning properly following maintenance, repair, or replacement actions; and
- **f.** Include the following information in organizational maintenance records: [Assignment: organization-defined information].

<details>
<summary>NIST discussion</summary>

Controlling system maintenance addresses the information security aspects of the system maintenance program and applies to all types of maintenance to system components conducted by local or nonlocal entities. Maintenance includes peripherals such as scanners, copiers, and printers. Information necessary for creating effective maintenance records includes the date and time of maintenance, a description of the maintenance performed, names of the individuals or group performing the maintenance, name of the escort, and system components or equipment that are removed or replaced. Organizations consider supply chain-related risks associated with replacement components for systems.

</details>

## Control enhancements

<a id="ma-2.2"></a>

### MA-2(2) Automated Maintenance Activities

*Baselines: High*

- **(a)** Schedule, conduct, and document maintenance, repair, and replacement actions for the system using [Assignment: organization-defined automated mechanisms] ; and
- **(b)** Produce up-to date, accurate, and complete records of all maintenance, repair, and replacement actions requested, scheduled, in process, and completed.

<details>
<summary>Discussion and assessment objectives for MA-2(2)</summary>

The use of automated mechanisms to manage and control system maintenance programs and activities helps to ensure the generation of timely, accurate, complete, and consistent maintenance records.

Determine if:

- **MA-02(02)(a)**
  - **MA-02(02)(a)[01]** [Assignment: organization-defined automated mechanisms] are used to schedule maintenance, repair, and replacement actions for the system;
  - **MA-02(02)(a)[02]** [Assignment: organization-defined automated mechanisms] are used to conduct maintenance, repair, and replacement actions for the system;
  - **MA-02(02)(a)[03]** [Assignment: organization-defined automated mechanisms] are used to document maintenance, repair, and replacement actions for the system;
- **MA-02(02)(b)**
  - **MA-02(02)(b)[01]** up-to date, accurate, and complete records of all maintenance actions requested, scheduled, in process, and completed are produced.
  - **MA-02(02)(b)[02]** up-to date, accurate, and complete records of all repair actions requested, scheduled, in process, and completed are produced.
  - **MA-02(02)(b)[03]** up-to date, accurate, and complete records of all replacement actions requested, scheduled, in process, and completed are produced.

**Examine:** Maintenance policy; procedures addressing controlled system maintenance; automated mechanisms supporting system maintenance activities; system configuration settings and associated documentation; maintenance records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Automated mechanisms supporting and/or implementing controlled maintenance; automated mechanisms supporting and/or implementing the production of records of maintenance and repair actions.

</details>

*Withdrawn enhancements: MA-2(1).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for MA-2</summary>

Determine if:

- **MA-02a.**
  - **MA-02a.[01]** maintenance, repair, and replacement of system components are scheduled in accordance with manufacturer or vendor specifications and/or organizational requirements;
  - **MA-02a.[02]** maintenance, repair, and replacement of system components are documented in accordance with manufacturer or vendor specifications and/or organizational requirements;
  - **MA-02a.[03]** records of maintenance, repair, and replacement of system components are reviewed in accordance with manufacturer or vendor specifications and/or organizational requirements;
- **MA-02b.**
  - **MA-02b.[01]** all maintenance activities, whether performed on site or remotely and whether the system or system components are serviced on site or removed to another location, are approved;
  - **MA-02b.[02]** all maintenance activities, whether performed on site or remotely and whether the system or system components are serviced on site or removed to another location, are monitored;
- **MA-02c.** [Assignment: organization-defined personnel or roles] is/are required to explicitly approve the removal of the system or system components from organizational facilities for off-site maintenance, repair, or replacement;
- **MA-02d.** equipment is sanitized to remove [Assignment: organization-defined information] from associated media prior to removal from organizational facilities for off-site maintenance, repair, or replacement;
- **MA-02e.** all potentially impacted controls are checked to verify that the controls are still functioning properly following maintenance, repair, or replacement actions;
- **MA-02f.** [Assignment: organization-defined information] is included in organizational maintenance records.

**Examine:** Maintenance policy; procedures addressing controlled system maintenance; maintenance records; manufacturer/vendor maintenance specifications; equipment sanitization records; media sanitization records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; organizational personnel with information security responsibilities; organizational personnel responsible for media sanitization; system/network administrators.

**Test:** Organizational processes for scheduling, performing, documenting, reviewing, approving, and monitoring maintenance and repairs for the system; organizational processes for sanitizing system components; mechanisms supporting and/or implementing controlled maintenance; mechanisms implementing the sanitization of system components.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

MA-2 asks you to run maintenance as a controlled process: scheduled, approved, monitored and recorded, with a check afterward that the controls still work. It covers every kind of maintenance, repair and replacement, on site or remote, by your staff or a vendor. NIST's MA-2 discussion includes peripherals such as scanners, copiers and printers, which are easy to leave out.

**Common implementations.** Scheduled maintenance follows the manufacturer's or vendor's specifications and is booked in an IT service management system or a maintenance calendar. Each activity gets a record in the [maintenance log](/templates/forms/maintenance-log/), or in the service management system with the same fields. The system owner approves each activity before it starts. Maintenance that changes the configuration also goes through change control ([CM-3](/controls/cm/cm-3/)), and its security impact analysis ([CM-4](/controls/cm/cm-4/)) tells you which controls to check afterward. A person monitors each activity, by escorting on-site work or by supervising a remote session.

Before a component leaves the facility for repair, the system owner approves its removal and its media are sanitized. Follow the media sanitization procedure (MP-6) and NIST SP 800-88 Rev. 2, [Guidelines for Media Sanitization](https://csrc.nist.gov/pubs/sp/800/88/r2/final) (September 2025, final; as of September 2026). A failed drive that cannot be sanitized stays with the organization and is sanitized or destroyed there, as the [Maintenance policy](/templates/policies/ma/) requires. Where the vendor offers a media retention option, put it in the maintenance contract, so a warranty replacement does not require returning the failed drive. A media sanitization record is planned with the Media Protection policy; until then, record the sanitization in the maintenance log's "Removed or replaced" field.

NIST's discussion also asks you to consider supply chain risk in replacement components. The MA-2 clause's guidance suggests buying them from the original manufacturer or its authorized channel, or from a source the supply chain risk management plan allows.

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Who approves removal for off-site maintenance, repair or replacement (c) | The system owner |
| Information removed from media before off-site maintenance (d) | All organizational information, including personally identifiable information, credentials and cryptographic keys |
| Information included in maintenance records (f) | The date and time, the system and component, a description of the maintenance performed, the names and organization of the individuals performing it, the escort's name, the components or equipment removed or replaced, the approval, and the result of the post-maintenance control check |
| Automated mechanisms to schedule maintenance (MA-2(2), High) | The organization's IT service management system |
| Automated mechanisms to conduct maintenance (MA-2(2), High) | The endpoint and configuration management tools that deploy updates, firmware and configuration changes |
| Automated mechanisms to document maintenance (MA-2(2), High) | The organization's IT service management system, fed by the endpoint and configuration management tools |

The record contents are the list in NIST's MA-2 discussion, plus the approval (MA-2b) and the control check (MA-2e). In the Maintenance policy, the system owner also reviews the maintenance records at least quarterly against the maintenance schedule and the system's change records.

**Evidence assessors ask for.**

- The maintenance schedule, and the manufacturer or vendor specifications it follows
- The maintenance records for a period, with a sample traced to their approvals and to the change records
- Removal approvals and sanitization records for components sent off site
- The post-maintenance control checks for the sampled activities
- Records of the quarterly review of the maintenance records
- Maintenance records for printers, copiers and other peripherals, not only servers

**Inheritance.** For cloud services, the provider maintains its own infrastructure, and its authorization package or attestation covers MA-2 for those components. On premises, a central IT operations group or facilities team often runs maintenance as a common control. The system still owns approving and recording maintenance on its components and checking its controls afterward, so MA-2 is usually a hybrid control.

**Common findings.**

- Maintenance done with no record, often discovered through firmware versions or replaced parts that the log does not show.
- Records that miss the escort, the approval or the post-maintenance check.
- A failed drive sent back to the vendor under warranty without sanitization.
- Printers and multifunction devices with internal storage serviced or returned at lease end without their storage being sanitized.
- Maintenance that changed the configuration but never went through change control.

**Enhancements in the Moderate baseline.** MA-2 has no enhancements in the Moderate baseline. High adds [MA-2(2)](#ma-2.2) automated maintenance activities. MA-2(1) is withdrawn.

- **MA-2(2)** uses automated mechanisms to schedule, conduct and document maintenance, so the records are timely, accurate, complete and consistent, as NIST's discussion puts it. The records cover work requested, scheduled and in process, not only completed work. The maintenance log notes that a service management system holding the log's fields is how MA-2(2) is usually met.
