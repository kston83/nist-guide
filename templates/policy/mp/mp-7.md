---
control: mp-7
title: 'Media use'
status: draft
stage: operate
typical:
  mp-07_odp.01: 'writable portable storage devices, such as USB flash drives, external hard drives and memory cards, and writable optical media'
  mp-07_odp.02: restrict
  mp-07_odp.03: 'all organizational workstations, laptops and servers'
  mp-07_odp.04: 'endpoint device control that blocks portable storage devices other than encrypted, organization-issued devices assigned to a named owner, with exceptions approved by the system owner and recorded'
---

:::guidance
NIST's MP-7 discussion contrasts it with MP-2: MP-2 restricts who may access media, while MP-7 restricts which media may be used on systems. It lists the usual technical controls: disabling ports or the ability to read or write to devices, limiting use to approved, organization-provided devices that are not personally owned, and blocking writes to portable devices. Requiring an identifiable owner, MP-7b, lets the organization assign responsibility for a device's known vulnerabilities. The typical values match the [Access Control Policy](/templates/policies/ac/), which allows only encrypted, organization-issued devices on external systems (AC-20(2)), and the encryption and key management standard, which requires encryption of removable media (SC-28(1)). Choose "prohibit" for systems whose risk does not justify any portable storage.
:::

- The {{org:system-owner}} shall {{param:mp-07_odp.02}} the use of {{param:mp-07_odp.01}} on {{param:mp-07_odp.03}} using {{param:mp-07_odp.04}}. (MP-7a)
- Personally owned portable storage devices shall not be connected to organizational systems. (MP-7a)
- The {{org:system-owner}} shall prohibit the use of portable storage devices in organizational systems when such devices have no identifiable owner. (MP-7b)
- Each organization-issued portable storage device shall be recorded with its owner in the component inventory (CM-8), and personnel shall turn in any device they find whose owner is unknown, without connecting it, to the {{org:security-operations}}. (MP-7b)
