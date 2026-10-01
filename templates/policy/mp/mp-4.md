---
control: mp-4
title: 'Media storage'
status: draft
stage: operate
typical:
  mp-04_odp.01: 'removable and portable storage media, backup media, and storage removed from service and awaiting sanitization'
  mp-04_odp.02: 'paper and microfilm containing information not approved for public release'
  mp-04_odp.03: 'removable and portable storage media, backup media, and storage removed from service and awaiting sanitization'
  mp-04_odp.04: 'paper and microfilm containing information not approved for public release'
  mp-04_odp.05: 'the data center, the media library, or a locked container in an area with physical access control, with access limited to authorized personnel'
  mp-04_odp.06: 'locked cabinets, drawers or rooms with access limited to authorized personnel'
---

:::guidance
MP-4 is in the Moderate and High baselines. NIST's MP-4 discussion describes physical control as inventories, check-out and return procedures, and accountability for stored media, and secure storage as a locked drawer, desk or cabinet or a controlled media library, matched to the security category of the information. MP-4b covers media until they are sanitized or destroyed, so failed drives and retired equipment waiting for sanitization stay in a controlled area and on the inventory. The [media sanitization record](/templates/forms/media-sanitization-record/) closes each item out.
:::

- The {{org:system-owner}} shall physically control {{param:mp-04_odp.01}} and {{param:mp-04_odp.02}}. (MP-4a)
- The {{org:system-owner}} shall securely store {{param:mp-04_odp.03}} within {{param:mp-04_odp.05}}. (MP-4a)
- The {{org:system-owner}} shall securely store {{param:mp-04_odp.04}} within {{param:mp-04_odp.06}}. (MP-4a)
- The {{org:system-owner}} shall keep an inventory of the digital media in each media library or store, with check-out and return records, and reconcile it at least quarterly. (MP-4a)
- Digital media stored outside the data center shall be encrypted as the encryption and key management standard requires for removable media (SC-28(1)). (MP-4a)
- The {{org:system-owner}} shall protect these media until they are destroyed or sanitized using approved equipment, techniques and procedures, keeping media that are awaiting sanitization in the same controlled areas and on the inventory until the sanitization is recorded. (MP-4b)

:::federal
Under [32 CFR 2002.14(c)](https://www.ecfr.gov/current/title-32/section-2002.14), authorized holders of controlled unclassified information (CUI) must take reasonable precautions against its unauthorized disclosure, including establishing and using controlled environments in which to protect it from unauthorized access or disclosure, and, when it is outside a controlled environment, keeping it under the authorized holder's direct control or protecting it with at least one physical barrier. As of October 2026.

- The {{org:system-owner}} shall store media containing CUI only in controlled environments that meet 32 CFR 2002.14(c), and shall keep such media under an authorized holder's direct control, or behind at least one physical barrier such as a locked container, whenever they are outside a controlled environment. (MP-4a)

:::
