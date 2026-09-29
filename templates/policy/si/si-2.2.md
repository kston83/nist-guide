---
control: si-2.2
title: 'Automated flaw remediation status'
status: draft
stage: operate
typical:
  si-02.02_odp.01: 'the patch management and vulnerability scanning tools'
  si-02.02_odp.02: 'at least weekly'
---

:::guidance
Patch compliance reports from the patch management tool, checked against authenticated vulnerability scans, show which components are missing updates. Components the tools cannot reach, such as appliances, need a manual check on the same schedule.
:::

- The {{org:system-owner}} shall determine whether system components have applicable security-relevant software and firmware updates installed, using {{param:si-02.02_odp.01}}, {{param:si-02.02_odp.02}}. (SI-2(2))

:::federal
CISA [BOD 23-01](https://www.cisa.gov/news-events/directives/bod-23-01-improving-asset-visibility-and-vulnerability-detection-federal-networks), Improving Asset Visibility and Vulnerability Detection on Federal Networks (October 3, 2022), requires federal civilian agencies to perform automated asset discovery every 7 days and to initiate vulnerability enumeration across all discovered assets, including roaming devices such as laptops, every 14 days. As of September 2026.

- The {{org:system-owner}} shall ensure the system's assets are covered by automated asset discovery at least every 7 days and by vulnerability enumeration at least every 14 days, as CISA BOD 23-01 requires. (SI-2(2))

:::
