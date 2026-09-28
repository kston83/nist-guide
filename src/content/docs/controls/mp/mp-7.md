---
title: 'MP-7 Media Use'
description: 'NIST SP 800-53 Rev. 5 control MP-7, Media Use: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'MP-7 Media Use'
  order: 7
control:
  id: MP-7
  family: MP
  baselines: [Low, Moderate, High]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 1 (0 in a baseline) |

**Related controls:** [AC-19](/controls/ac/ac-19/), [AC-20](/controls/ac/ac-20/), [PL-4](/controls/pl/pl-4/), [PM-12](/controls/pm/pm-12/), [SC-34](/controls/sc/sc-34/), [SC-41](/controls/sc/sc-41/)

## Control statement

- **a.** [Selection: restrict; prohibit] the use of [Assignment: organization-defined types of system media] on [Assignment: organization-defined systems or system components] using [Assignment: organization-defined controls] ; and
- **b.** Prohibit the use of portable storage devices in organizational systems when such devices have no identifiable owner.

<details>
<summary>NIST discussion</summary>

System media includes both digital and non-digital media. Digital media includes diskettes, magnetic tapes, flash drives, compact discs, digital versatile discs, and removable hard disk drives. Non-digital media includes paper and microfilm. Media use protections also apply to mobile devices with information storage capabilities. In contrast to MP-2 , which restricts user access to media, MP-7 restricts the use of certain types of media on systems, for example, restricting or prohibiting the use of flash drives or external hard disk drives. Organizations use technical and nontechnical controls to restrict the use of system media. Organizations may restrict the use of portable storage devices, for example, by using physical cages on workstations to prohibit access to certain external ports or disabling or removing the ability to insert, read, or write to such devices. Organizations may also limit the use of portable storage devices to only approved devices, including devices provided by the organization, devices provided by other approved organizations, and devices that are not personally owned. Finally, organizations may restrict the use of portable storage devices based on the type of device, such as by prohibiting the use of writeable, portable storage devices and implementing this restriction by disabling or removing the capability to write to such devices. Requiring identifiable owners for storage devices reduces the risk of using such devices by allowing organizations to assign responsibility for addressing known vulnerabilities in the devices.

</details>

## Control enhancements

<a id="mp-7.2"></a>

### MP-7(2) Prohibit Use of Sanitization-resistant Media

*Baselines: Not in a baseline*

Prohibit the use of sanitization-resistant media in organizational systems.

<details>
<summary>Discussion and assessment objectives for MP-7(2)</summary>

Sanitization resistance refers to how resistant media are to non-destructive sanitization techniques with respect to the capability to purge information from media. Certain types of media do not support sanitization commands, or if supported, the interfaces are not supported in a standardized way across these devices. Sanitization-resistant media includes compact flash, embedded flash on boards and devices, solid state drives, and USB removable media.

Determine if:

- **MP-07(02)[01]** sanitization-resistant media is identified;
- **MP-07(02)[02]** the use of sanitization-resistant media in organizational systems is prohibited.

**Examine:** System media protection policy; system use policy; procedures addressing media usage restrictions; rules of behavior; system configuration settings and associated documentation; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system media use responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for media use; mechanisms prohibiting use of media on systems or system components.

</details>

*Withdrawn enhancements: MP-7(1).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for MP-7</summary>

Determine if:

- **MP-07a.** the use of [Assignment: organization-defined types of system media] is [Selection: restrict; prohibit] on [Assignment: organization-defined systems or system components] using [Assignment: organization-defined controls];
- **MP-07b.** the use of portable storage devices in organizational systems is prohibited when such devices have no identifiable owner.

**Examine:** System media protection policy; system use policy; procedures addressing media usage restrictions; rules of behavior; system design documentation; system configuration settings and associated documentation; audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system media use responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for media use; mechanisms restricting or prohibiting the use of system media on systems or system components.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
