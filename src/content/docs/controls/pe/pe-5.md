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
