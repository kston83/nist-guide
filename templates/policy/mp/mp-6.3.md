---
control: mp-6.3
title: 'Nondestructive techniques'
status: draft
stage: operate
typical:
  mp-06.03_odp: 'before first use of a device newly purchased or received from outside the organization, and whenever the organization cannot maintain a positive chain of custody for the device'
---

:::guidance
MP-6(3) is in the High baseline. NIST's discussion of this enhancement explains that portable storage devices from untrustworthy sources can carry malicious code, and that sanitization gives more assurance than scanning alone. It names the two circumstances in the typical value: devices bought from manufacturers or vendors before first use, and devices whose positive chain of custody the organization cannot maintain. A nondestructive technique, such as clear or purge, leaves the device usable.
:::

- The {{org:system-owner}} shall apply nondestructive sanitization techniques to portable storage devices prior to connecting them to the system under the following circumstances: {{param:mp-06.03_odp}}. (MP-6(3))
- Portable storage devices shall also be scanned for malicious code before they are connected to the system (SI-3). (MP-6(3))
