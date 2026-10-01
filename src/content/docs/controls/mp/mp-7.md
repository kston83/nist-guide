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
guidance: draft
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

## How to apply it

MP-7 asks you to restrict or prohibit the use of chosen types of media on your systems, and to prohibit portable storage devices that have no identifiable owner. NIST's MP-7 discussion contrasts it with [MP-2](/controls/mp/mp-2/): MP-2 restricts who may access media, while MP-7 restricts which media may be used on systems. It lists the usual controls: physical cages over ports, disabling or removing the ability to insert, read or write to devices, limiting use to approved devices, such as those the organization provides and not personally owned ones, and blocking writes to portable devices. It also applies media use protections to mobile devices that can store information. Requiring an identifiable owner, MP-7b, lets the organization assign responsibility for a device's known vulnerabilities.

**Common implementations.** Endpoint device control, part of the endpoint management or endpoint protection service, blocks USB mass storage, memory cards and optical writers on every workstation, laptop and server, except devices on an allow list. The allow list names organization-issued, hardware-encrypted devices by their serial numbers, not just by vendor or model, so a personal device of the same model is still blocked. The service desk issues each device to a named person and records it in the component inventory ([CM-8](/controls/cm/cm-8/)), and recovers it when the person leaves ([PS-4](/controls/ps/ps-4/)). Servers have USB storage disabled in their baseline configuration ([CM-6](/controls/cm/cm-6/)). Exceptions are approved by the system owner, recorded with an end date, and reviewed. A managed file transfer service or approved cloud storage gives people a way to move files without portable media, which keeps the exceptions few. The [Rules of Behavior](/templates/forms/rules-of-behavior/) are the place to tell users the rules: only issued devices, never personal ones, and found devices handed in without being connected ([PL-4](/controls/pl/pl-4/) is one of NIST's related controls).

**Organization-defined parameters.** Typical values, from the [Media Protection policy](/templates/policies/mp/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Restrict or prohibit (a) | Restrict |
| Types of system media (a) | Writable portable storage devices, such as USB flash drives, external hard drives and memory cards, and writable optical media |
| Systems or system components (a) | All organizational workstations, laptops and servers |
| Controls (a) | Endpoint device control that blocks portable storage devices other than encrypted, organization-issued devices assigned to a named owner, with exceptions approved by the system owner and recorded |

Choose "prohibit" for systems whose risk does not justify any portable storage. The values match the [Access Control Policy](/templates/policies/ac/), which allows only encrypted, organization-issued devices on external systems ([AC-20(2)](/controls/ac/ac-20/)), and the [encryption and key management standard](/templates/standards/encryption-and-key-management-standard/), which requires encryption of removable media ([SC-28(1)](/controls/sc/sc-28/)). For MP-7b, the policy bars personally owned devices and has anyone who finds a device with no known owner turn it in, without connecting it, to the security operations team.

**Evidence assessors ask for.**

- The device control policy and its configuration, showing it is enforcing and not only auditing
- Device control reports of blocked connection attempts, and how they are followed up
- The list of issued portable storage devices with their owners, from the component inventory
- The approved exceptions, with approvals and end dates
- A test: connecting an unapproved device to a sample of workstations and servers
- The Rules of Behavior or other user guidance on portable storage

**Inheritance.** Endpoint device control is usually run by a central endpoint team and offered as a common control, which the system inherits for standard workstations and laptops. Cloud virtual servers expose no physical ports to the customer, so the provider's physical controls cover that path; record it in the [system security plan](/templates/plans/system-security-plan/). The system owns its exceptions and any components outside the central service, so MP-7 is usually a hybrid control.

**Common findings.**

- Device control left in audit mode, logging connections but blocking none.
- Servers, administrator workstations or a group of executives excluded from the policy.
- An allow list by vendor or model, so personal devices of the same model are accepted.
- Exceptions granted broadly and never expired.
- No record of who holds each issued device, so MP-7b cannot be shown.
- Mobile phones connected by USB used as storage, outside the policy.

**Enhancements in the Moderate baseline.** None. [MP-7(2)](#mp-7.2) prohibit use of sanitization-resistant media is in no baseline. Its discussion names solid state drives and USB removable media among sanitization-resistant media, one more reason to issue encrypted devices: cryptographic erase, where its conditions are met, can purge them when they are retired ([MP-6](/controls/mp/mp-6/)). MP-7(1) is withdrawn.
