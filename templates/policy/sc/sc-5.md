---
control: sc-5
title: 'Denial-of-service protection'
status: draft
stage: core
typical:
  sc-05_odp.01: 'network floods, protocol attacks and application-layer floods against internet-facing services'
  sc-05_odp.02: 'protect against'
  sc-05_odp.03: 'an upstream or cloud denial-of-service protection service for internet-facing services, rate limiting at load balancers and application gateways, and capacity that scales automatically'
---

:::guidance
Most organizations meet this through their internet or cloud provider's denial-of-service protection, plus rate limiting and autoscaling for their own services. Record which protections are inherited and which the system provides.
:::

- The {{org:system-owner}} shall ensure the system can {{param:sc-05_odp.02}} the effects of the following types of denial-of-service events: {{param:sc-05_odp.01}}. (SC-5a)
- The {{org:system-owner}} shall employ the following controls to achieve the denial-of-service objective: {{param:sc-05_odp.03}}. (SC-5b)
