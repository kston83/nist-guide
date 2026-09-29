---
control: sc-7.7
title: 'Split tunneling for remote devices'
status: draft
stage: core
typical:
  sc-07.07_odp: 'none; split tunneling is disabled for organization-managed remote devices'
---

:::guidance
Split tunneling lets a remote device reach the internet directly while connected to the organization's network, bypassing its boundary protections. Where a zero trust access service replaces the virtual private network, record how its design meets the intent.
:::

- The {{org:system-owner}} shall prevent split tunneling for remote devices connecting to organizational systems, except where the split tunnel is securely provisioned using these safeguards: {{param:sc-07.07_odp}}. (SC-7(7))
