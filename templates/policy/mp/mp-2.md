---
control: mp-2
title: 'Media access'
status: draft
stage: operate
typical:
  mp-02_odp.01: 'removable and portable storage media (flash drives, external drives, memory cards and optical discs), backup media, and storage removed from service'
  mp-02_odp.02: 'personnel whose access authorizations for the system permit access to the information on the media'
  mp-02_odp.03: 'paper and microfilm containing information not approved for public release, including printed system output'
  mp-02_odp.04: 'personnel whose access authorizations permit access to the information on the media'
---

:::guidance
MP-2 restricts who may access media; MP-7 restricts which media may be used on systems, a distinction NIST's MP-7 discussion draws. NIST's MP-2 discussion covers digital media (flash drives, tapes, external drives, optical discs) and non-digital media (paper and microfilm). The usual way to restrict access is to keep media where only authorized people can reach them (MP-4) and to encrypt digital media so that only holders of the key can read them, as the [encryption and key management standard](/templates/standards/encryption-and-key-management-standard/) requires for removable media (SC-28(1)). Assessors ask who can get into the media library or cabinets, and compare that list with the people authorized for the information.
:::

- The {{org:system-owner}} shall restrict access to {{param:mp-02_odp.01}} to {{param:mp-02_odp.02}}. (MP-2)
- The {{org:system-owner}} shall restrict access to {{param:mp-02_odp.03}} to {{param:mp-02_odp.04}}. (MP-2)
- The {{org:system-owner}} shall enforce these restrictions by storing the media in controlled areas (MP-4) and, for digital media, by encryption whose keys only authorized personnel can use (SC-28(1)). (MP-2)
- The {{org:system-owner}} shall review the list of people with access to each media library or storage area at least annually, and remove those who no longer need it. (MP-2)
