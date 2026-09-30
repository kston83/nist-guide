---
control: sa-9.2
title: 'Identification of functions, ports, protocols and services'
status: draft
stage: operate
typical:
  sa-09.02_odp: 'all external system services that connect to the system'
---

:::guidance
A provider's list of the functions, ports, protocols and services its service needs lets the organization weigh the trade-offs of blocking or restricting them, as NIST's SA-9(2) discussion notes. Use the list to set the boundary protection rules for the connection (SC-7) and to spot anything the service needs that the organization prohibits (CM-7).
:::

- The {{org:system-owner}} shall require providers of {{param:sa-09.02_odp}} to identify the functions, ports, protocols and other services required for the use of those services. (SA-9(2))
- The {{org:system-owner}} shall record each provider's list with the service in the system security plan, and update it when the provider changes the service. (SA-9(2))
