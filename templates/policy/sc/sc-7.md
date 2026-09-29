---
control: sc-7
title: 'Boundary protection'
status: draft
stage: core
typical:
  sc-07_odp: 'logically'
---

:::guidance
Every external connection goes through a managed interface, such as a firewall, cloud security group, gateway or proxy, and public-facing components sit in their own subnetwork. The boundary diagram in the system security plan is where assessors start. Put the rule sets, allowed flows and review cycle in the boundary protection standard.
:::

- The {{org:system-owner}} shall monitor and control communications at the external managed interfaces to the system and at key internal managed interfaces within the system. (SC-7a)
- The {{org:system-owner}} shall implement subnetworks for publicly accessible system components that are {{param:sc-07_odp}} separated from internal organizational networks. (SC-7b)
- The {{org:system-owner}} shall connect the system to external networks or systems only through managed interfaces consisting of boundary protection devices arranged in accordance with the organization's security and privacy architecture. (SC-7c)

:::federal
Federal civilian agencies secure their network connections under CISA's [Trusted Internet Connections (TIC) 3.0](https://www.cisa.gov/resources-tools/programs/trusted-internet-connections-tic) program, which implements OMB M-19-26, Update to the Trusted Internet Connections (TIC) Initiative (September 12, 2019). TIC 3.0 is set out in CISA's core guidance documents and use cases (as of September 2026).

- The {{org:system-owner}} shall implement the system's external connections in accordance with the agency's TIC 3.0 architecture and the TIC 3.0 use cases that apply to the system. (SC-7c)

:::
