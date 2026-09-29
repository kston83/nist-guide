---
control: ra-5.4
title: Discoverable information
status: draft
stage: core
typical:
  ra-05.04_odp: 'removing or restricting the information where possible, and treating any that exposes a weakness as a finding for the plan of action and milestones'
---

:::guidance
Discoverable information is what an outsider can learn about the system without authorized access: banners and version strings, public DNS and certificate records, code repositories, job postings and documents on public sites. Check it the way an attacker would, as part of scanning or a penetration test.
:::

- The {{org:system-owner}} shall determine what information about the system is discoverable. (RA-5(4))
- The {{org:system-owner}} shall take the following corrective actions for discoverable information: {{param:ra-05.04_odp}}. (RA-5(4))
