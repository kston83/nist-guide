---
control: ma-2
title: 'Controlled maintenance'
status: draft
stage: operate
typical:
  ma-02_odp.01: 'the system owner'
  ma-02_odp.02: 'all organizational information, including personally identifiable information, credentials and cryptographic keys'
  ma-02_odp.03: 'the date and time, the system and component, a description of the maintenance performed, the names and organization of the individuals performing it, the escort''s name, the components or equipment removed or replaced, the approval, and the result of the post-maintenance control check'
---

:::guidance
MA-2 covers every kind of maintenance, repair and replacement, on site or remote, including printers, scanners and copiers, which NIST's MA-2 discussion names. The information recorded for each activity is the list NIST's discussion gives, plus the approval and the control check that MA-2b and MA-2e ask for. The [maintenance log](/templates/forms/maintenance-log/) holds these records. Sanitize media before they leave for repair as the media sanitization procedure sets out (MP-6), following NIST SP 800-88 Rev. 2, [Guidelines for Media Sanitization](https://csrc.nist.gov/pubs/sp/800/88/r2/final) (September 2025, final; as of September 2026). Assessors sample maintenance records against the schedule and ask for the removal approvals and sanitization records.
:::

- The {{org:system-owner}} shall schedule maintenance, repair and replacement of system components in accordance with manufacturer or vendor specifications and organizational requirements. (MA-2a)
- The {{org:system-owner}} shall document each maintenance, repair and replacement activity in the system's maintenance records. (MA-2a)
- The {{org:system-owner}} shall review the maintenance records at least quarterly against the maintenance schedule and the system's change records. (MA-2a)
- The {{org:system-owner}} shall approve each maintenance activity before it starts, whether it is performed on site or remotely and whether components are serviced on site or removed to another location. (MA-2b)
- The {{org:system-owner}} shall ensure each maintenance activity is monitored while it is performed, by an escort or by review of the session and its records. (MA-2b)
- Maintenance that changes the system's configuration shall also follow the change control process (CM-3). (MA-2b)
- The {{org:system-owner}} shall require {{param:ma-02_odp.01}} to explicitly approve the removal of the system or system components from organizational facilities for off-site maintenance, repair or replacement. (MA-2c)
- The {{org:system-owner}} shall ensure equipment is sanitized to remove {{param:ma-02_odp.02}} from associated media before it is removed from organizational facilities for off-site maintenance, repair or replacement. (MA-2d)
- Where storage media cannot be sanitized, such as a failed drive, the {{org:system-owner}} shall keep the media within the organization and sanitize or destroy them there, rather than release them. (MA-2d)
- After each maintenance, repair or replacement action, the {{org:system-owner}} shall check all potentially impacted controls to verify that they are still functioning properly. (MA-2e)
- The {{org:system-owner}} shall include {{param:ma-02_odp.03}} in the organization's maintenance records. (MA-2f)

:::guidance
Replacement components bring supply chain risk, which NIST's MA-2 discussion asks organizations to consider: obtain them from the original manufacturer or its authorized channel, or from a source the supply chain risk management plan allows. The post-maintenance check can use the change's security impact analysis (CM-4) to decide which controls to verify.
:::
