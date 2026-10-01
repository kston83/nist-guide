---
control: ma-3.3
title: 'Prevent unauthorized removal'
status: draft
stage: operate
typical:
  ma-03.03_odp: 'the Chief Information Security Officer'
---

:::guidance
MA-3(3) covers maintenance equipment, such as a vendor's diagnostic laptop or analyzer, that may have picked up organizational information during the work. Organizational information includes information the organization holds as a steward for others, as NIST's discussion of this enhancement says. The four measures are alternatives; the maintenance log records which one was used. Sanitize as the media sanitization procedure sets out (MP-6), and record it in the [media sanitization record](/templates/forms/media-sanitization-record/).
:::

- The {{org:system-owner}} shall prevent the removal of maintenance equipment containing organizational information from the facility by verifying that there is no organizational information on the equipment, sanitizing or destroying the equipment, retaining the equipment within the facility, or obtaining a written exemption from {{param:ma-03.03_odp}} explicitly authorizing its removal. (MA-3(3))
- The {{org:system-owner}} shall record in the maintenance records which of these four measures was used for each piece of maintenance equipment. (MA-3(3))
- Maintenance contracts shall allow the organization to keep, sanitize or destroy maintenance equipment or its storage media that contain organizational information. (MA-3(3))

:::federal
Under [32 CFR 2002.14(f)(2)](https://www.ecfr.gov/current/title-32/subtitle-B/chapter-XX/part-2002/subpart-A/section-2002.14), agencies that destroy controlled unclassified information (CUI), including in electronic form, must make it unreadable, indecipherable and irrecoverable. They must use any destruction method specifically required by law, regulation or Government-wide policy for that CUI; otherwise they must use the destruction guidance in NIST SP 800-53 and SP 800-88, or a method approved for classified national security information under 32 CFR 2001.47. As of September 2026.

- Where maintenance equipment containing CUI is destroyed to prevent its removal, the {{org:system-owner}} shall destroy it by a method that 32 CFR 2002.14(f)(2) permits. (MA-3(3)(b))

:::
