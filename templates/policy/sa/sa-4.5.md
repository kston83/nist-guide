---
control: sa-4.5
title: 'System, component and service configurations'
status: draft
stage: operate
typical:
  sa-04.05_odp: 'the secure configuration baselines named in the baseline configuration standard for that type of component, with default passwords changed and the functions, ports, protocols and services not needed disabled'
---

:::guidance
Delivering secure configurations saves hardening each component after it arrives, and keeps reinstallation from quietly restoring insecure defaults. NIST's SA-4(5) discussion gives as examples the U.S. Government Configuration Baseline (USGCB), Security Technical Implementation Guides (STIGs), limits on functions, ports, protocols and services, and changed default passwords. Use the same baselines as configuration settings (CM-6), so delivered components pass the same checks as the rest of the system.
:::

- The {{org:system-owner}} shall require the developer of the system, system component or system service to deliver it with {{param:sa-04.05_odp}} implemented. (SA-4(5)(a))
- The {{org:system-owner}} shall require the developer to use those configurations as the default for any later reinstallation or upgrade of the system, component or service. (SA-4(5)(b))
