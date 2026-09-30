---
control: sa-4.2
title: 'Design and implementation information for controls'
status: draft
stage: operate
typical:
  sa-04.02_odp.01: 'security-relevant external system interfaces and high-level design, and for High systems also low-level design'
  sa-04.02_odp.03: 'enough detail to show, for each subsystem and interface, which controls it implements and how'
---

:::guidance
NIST's SA-4(2) discussion describes the levels: high-level design is expressed in subsystems and the interfaces between them, low-level design in modules, and source code or hardware schematics are the implementation itself. Most commercial products provide interface and high-level design information only; ask for more where the system's risk warrants it, and say so in the solicitation. The discussion adds that the information can include the manufacturer, version, serial number, verification hash, software libraries used, and the date and source of purchase or download.
:::

- The {{org:system-owner}} shall require the developer of the system, system component or system service, in the acquisition contract, to provide design and implementation information for the controls that includes {{param:sa-04.02_odp.01}} at {{param:sa-04.02_odp.03}}. (SA-4(2))
- The {{org:system-owner}} shall protect the design and implementation information according to the system's security category, as the contract's documentation protection requirements set (SA-4f). (SA-4(2))
