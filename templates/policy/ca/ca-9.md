---
control: ca-9
title: 'Internal system connections'
status: draft
stage: operate
typical:
  ca-09_odp.01: 'classes of components that connect to the system from inside its boundary, such as printers, scanners, copiers, sensors, and mobile devices with the approved baseline configuration'
  ca-09_odp.02: 'the component is retired or reassigned, fails a compliance check, is involved in an incident, or no longer needs the connection'
  ca-09_odp.03: 'at least annually'
---

:::guidance
Internal connections are connections between the system and its own separate components, such as printers or mobile devices, rather than other systems (CA-3). NIST's CA-9 discussion lets the organization authorize a whole class of components with a common configuration instead of each device, which is the usual approach. Record each authorized class in the system security plan.
:::

- The {{org:system-owner}} shall authorize internal connections of {{param:ca-09_odp.01}} to the system. (CA-9a)
- The {{org:system-owner}} shall document, for each internal connection or class of connection, the interface characteristics, the security and privacy requirements, and the nature of the information communicated, in the system security plan. (CA-9b)
- The {{org:system-owner}} shall terminate an internal system connection when {{param:ca-09_odp.02}}. (CA-9c)
- The {{org:system-owner}} shall review {{param:ca-09_odp.03}} the continued need for each internal connection, based on whether it supports the organization's missions or business functions. (CA-9d)
