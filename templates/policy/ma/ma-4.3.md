---
control: ma-4.3
title: 'Comparable security and sanitization'
status: draft
stage: operate
---

:::guidance
MA-4(3) is in the High baseline. Comparable security means the controls on the system, tools and equipment used for the maintenance are at least as comprehensive as those on the system being serviced, as NIST's discussion of this enhancement puts it. For an external provider, get that assurance in the maintenance contract and check it the way the external service review checks any provider (SA-9). Where no provider can show it, use the second option: take the component out, sanitize it, and inspect and sanitize it again before it goes back.
:::

- The {{org:system-owner}} shall require that nonlocal maintenance and diagnostic services be performed from a system that implements a security capability comparable to the capability implemented on the system being serviced. (MA-4(3)(a))
- The {{org:system-owner}} shall record, for each provider of nonlocal maintenance, the basis for concluding that its capability is comparable, such as its authorization or an independent attestation. (MA-4(3)(a))
- Where comparable capability cannot be shown, the {{org:system-owner}} shall remove the component to be serviced from the system and sanitize it of organizational information before the nonlocal service, and inspect it and sanitize it of potentially malicious software after the service and before reconnecting it to the system. (MA-4(3)(b))
