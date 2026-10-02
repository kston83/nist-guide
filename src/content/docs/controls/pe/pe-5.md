---
title: 'PE-5 Access Control for Output Devices'
description: 'NIST SP 800-53 Rev. 5 control PE-5, Access Control for Output Devices: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PE-5 Access Control for Output Devices'
  order: 5
control:
  id: PE-5
  family: PE
  baselines: [Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | Organization | 1 (0 in a baseline) |

**Related controls:** [PE-2](/controls/pe/pe-2/), [PE-3](/controls/pe/pe-3/), [PE-4](/controls/pe/pe-4/), [PE-18](/controls/pe/pe-18/)

## Control statement

Control physical access to output from [Assignment: organization-defined output devices] to prevent unauthorized individuals from obtaining the output.

<details>
<summary>NIST discussion</summary>

Controlling physical access to output devices includes placing output devices in locked rooms or other secured areas with keypad or card reader access controls and allowing access to authorized individuals only, placing output devices in locations that can be monitored by personnel, installing monitor or screen filters, and using headphones. Examples of output devices include monitors, printers, scanners, audio devices, facsimile machines, and copiers.

</details>

## Control enhancements

<a id="pe-5.2"></a>

### PE-5(2) Link to Individual Identity

*Baselines: Not in a baseline*

Link individual identity to receipt of output from output devices.

<details>
<summary>Discussion and assessment objectives for PE-5(2)</summary>

Methods for linking individual identity to the receipt of output from output devices include installing security functionality on facsimile machines, copiers, and printers. Such functionality allows organizations to implement authentication on output devices prior to the release of output to individuals.

Determine if individual identity is linked to the receipt of output from output devices.

**Examine:** Physical and environmental protection policy; procedures addressing physical access control; system design documentation; system configuration settings and associated documentation; list of output devices and associated outputs requiring physical access controls; physical access control logs or records for areas containing output devices and related outputs; system audit records; system security plan; privacy plan; privacy impact assessment; privacy risk assessment documentation; other relevant documents or records.

**Interview:** Organizational personnel with physical access control responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators; system developers.

**Test:** Organizational processes for access control to output devices; mechanisms supporting and/or implementing access control to output devices.

</details>

*Withdrawn enhancements: PE-5(1), PE-5(3).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PE-5</summary>

Determine if physical access to output from [Assignment: organization-defined output devices] is controlled to prevent unauthorized individuals from obtaining the output.

**Examine:** Physical and environmental protection policy; procedures addressing access control for display medium; facility layout of system components; actual displays from system components; list of output devices and associated outputs requiring physical access controls; physical access control logs or records for areas containing output devices and related outputs; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with physical access control responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for access control to output devices; mechanisms supporting and/or implementing access control to output devices.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PE-5 keeps the output of printers, copiers, monitors and similar devices away from people who should not see it. NIST's PE-5 discussion lists the ways to do it: putting output devices in locked rooms or other secured areas with keypad or card reader access, placing them where personnel can monitor them, installing monitor or screen filters, and using headphones. Its examples of output devices are monitors, printers, scanners, audio devices, fax machines and copiers. PE-5 is in the Moderate and High baselines, not Low.

**Common implementations.** Shared printers and multifunction devices use secure print release: a job waits on the print server until the user badges or signs in at the device, so nothing sits in the output tray. Devices that cannot do this sit in a room limited to authorized staff. Monitors at reception and in other areas visitors can see face away from them or have privacy filters. Uncollected output is cleared and destroyed at least daily, typically into locked shred bins. The storage inside multifunction printers and copiers is media: it is sanitized under the [Media Protection policy](/templates/policies/mp/) before the device is returned to a lessor or disposed of ([MP-6](/controls/mp/mp-6/)), and recorded in the [media sanitization record](/templates/forms/media-sanitization-record/).

**Organization-defined parameters.** Typical values, from the [Physical and Environmental Protection policy](/templates/policies/pe/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Output devices whose output is controlled | Printers, copiers, scanners and fax machines in shared areas, and monitors that display information not approved for public release in areas visitors can see |

The policy makes the system owner and the facilities manager jointly responsible, requires secure release or a restricted room for shared devices, privacy filters or positioning for monitors visitors can see, and destruction of uncollected output at least daily.

**Evidence assessors ask for.**

- The list of shared output devices that handle the system's information, and where each one is
- The print server or device configuration showing secure release, or the access list for the room that holds a device without it
- Observation of output trays, fax machines and monitors in reception and open areas
- The procedure for clearing uncollected output, and the shred bins or service that destroys it
- Records of sanitizing the storage of printers and copiers that left the organization

**Inheritance.** PE-5 is about devices in the organization's own spaces, so a cloud provider rarely covers it; output devices in its data center are inherited with its other facility controls. The organization's print service and office layout are usually common controls, so PE-5 is often inherited from the organization by each system, with the system owner confirming which devices print its information.

**Common findings.**

- Sensitive output left in a shared printer tray or on a fax machine in a hallway.
- Secure print release installed but bypassed by a default "print immediately" queue.
- Reception or help desk monitors readable from the visitor side of the counter.
- Leased copiers returned with their hard drives intact.

**Enhancements in the Moderate baseline.** None. [PE-5(2)](#pe-5.2) link to individual identity is in no baseline; NIST's discussion of it describes authentication at the device before output is released, which is what secure print release does. PE-5(1) and PE-5(3) are withdrawn.
