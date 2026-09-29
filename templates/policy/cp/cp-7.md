---
control: cp-7
title: 'Alternate processing site'
status: draft
stage: core
typical:
  cp-07_odp.01: 'the system operations that support essential mission and business functions'
  cp-07_odp.02: 'the recovery time objective set in the contingency plan from the business impact analysis'
---

:::guidance
The alternate processing site is where the system runs when the primary site cannot. For a system in the cloud, a separate region or availability zone from the same provider can serve as the alternate site, if it meets the separation and control requirements below and the provider agreement supports it.
:::

- The {{org:system-owner}} shall establish an alternate processing site, including the agreements needed to permit the transfer and resumption of {{param:cp-07_odp.01}} for essential mission and business functions within {{param:cp-07_odp.02}} when the primary processing capabilities are unavailable. (CP-7a)
- The {{org:system-owner}} shall make available at the alternate processing site the equipment and supplies needed to transfer and resume operations, or put contracts in place to deliver them to the site within that time period. (CP-7b)
- The {{org:system-owner}} shall provide controls at the alternate processing site equivalent to those at the primary site. (CP-7c)
