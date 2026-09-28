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
---

<!-- nist:start -->
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

- **(a)** Schedule, conduct, and document maintenance, repair, and replacement actions for the system using [Assignment: organization-defined organization-defined automated mechanisms] ; and
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
<!-- nist:end -->

<!-- guidance: write below this line -->
