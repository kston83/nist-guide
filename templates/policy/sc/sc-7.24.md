---
control: sc-7.24
title: 'Personally identifiable information'
status: draft
stage: core
typical:
  sc-07.24_odp: 'the permitted purposes, recipients and data elements for each flow of personally identifiable information, as set out in the system''s privacy impact assessment'
---

:::guidance
Processing rules say which data elements of personally identifiable information may cross each boundary, to whom and for what purpose. Data loss prevention tools and interface allow lists are the usual monitoring mechanisms. SC-7(24) is in the Privacy baseline only.
:::

- For a system that processes personally identifiable information, the {{org:system-owner}} shall apply {{param:sc-07.24_odp}} to its data elements of personally identifiable information. (SC-7(24)(a))
- For such a system, the {{org:system-owner}} shall monitor for permitted processing at the external interfaces to the system and at key internal boundaries within the system. (SC-7(24)(b))
- For such a system, the {{org:system-owner}} shall document each processing exception. (SC-7(24)(c))
- For such a system, the {{org:system-owner}} shall review processing exceptions and remove those that are no longer supported. (SC-7(24)(d))
