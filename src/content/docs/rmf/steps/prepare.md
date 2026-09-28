---
title: 'Step 0: Prepare'
description: Organization and system-level preparation, tasks P-1 to P-18, with how to draw the authorization boundary.
sidebar:
  label: '0 Prepare'
  order: 0
---

Prepare fixes the context every later decision depends on: who decides, how much risk is acceptable, what the system is, and where its boundary sits. It was added in Rev. 2 because most failed authorizations trace back to a vague boundary or missing organizational inputs. Source: [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final), section 3.1.

Prepare has two halves. The organization tasks (P-1 to P-7) are usually done once by the CISO or risk office, and a system team should find and reuse them. The system tasks (P-8 to P-18) are yours.

## Organization-level tasks

| Task | What it means in practice | Primary role | Output |
| --- | --- | --- | --- |
| P-1 Risk management roles | Name the AOs, SAISO, SAOP, risk executive and CCPs; write down delegations | Head of agency | Appointment and delegation memos |
| P-2 Risk management strategy | State risk tolerance, assumptions, constraints and priorities | Head of agency | Risk management strategy |
| P-3 Risk assessment, organization | Assess threats and risks that cut across all systems | Risk executive, SAISO, SAOP | Organization-level risk assessment |
| P-4 Tailored baselines and CSF profiles (optional) | Build organization overlays or Cybersecurity Framework profiles systems can adopt | Mission owner, SAISO | Organization baselines, overlays, CSF profiles |
| P-5 Common control identification | Publish the controls systems can inherit and who provides them | SAISO, SAOP | Common control catalog with authorization status |
| P-6 Impact-level prioritization (optional) | Rank systems within the same FIPS 199 level (for example, low-Moderate vs high-Moderate) | Risk executive | Prioritized system list |
| P-7 Continuous monitoring strategy, organization | Set how and how often controls are monitored agency-wide | SAISO, SAOP | Organization ISCM strategy ([SP 800-137](https://csrc.nist.gov/pubs/sp/800/137/final)) |

## System-level tasks

| Task | What it means in practice | Primary role | Output |
| --- | --- | --- | --- |
| P-8 Mission or business focus | Name the missions and business functions the system supports | Mission or business owner | Mission and business function list |
| P-9 System stakeholders | Identify everyone with a stake in design, operation or risk | Mission owner, system owner | Stakeholder list |
| P-10 Asset identification | Inventory hardware, software, data, services and interfaces to protect | System owner | Asset inventory |
| P-11 Authorization boundary | Decide exactly what the AO is authorizing | AO | Boundary description and diagram |
| P-12 Information types | List the information the system processes, stores or transmits | System owner, information owner | Information type list |
| P-13 Information life cycle | Trace each type from collection through disposal | System owner, SAOP | Data flow and life cycle map |
| P-14 Risk assessment, system | Assess system-level threats, vulnerabilities, likelihood and impact | System owner, ISSO | System risk assessment ([SP 800-30 Rev. 1](https://csrc.nist.gov/pubs/sp/800/30/r1/final)) |
| P-15 Requirements definition | Turn laws, policies and mission needs into security and privacy requirements | Mission owner, system owner, SAOP | Requirements set |
| P-16 Enterprise architecture | Place the system in the enterprise architecture and reuse shared services | Enterprise architect | Architecture placement |
| P-17 Requirements allocation | Assign each requirement to the system, its environment or a common provider | Security and privacy architects | Allocated requirements |
| P-18 System registration | Register the system in the agency inventory | System owner | System ID in the GRC tool (for example CSAM, eMASS or Xacta) |

## How to apply it

**Collect before you create.** Before writing anything, ask the CISO or ISSM office for the risk strategy, the common control catalog, organization overlays, the ISCM strategy and the SSP template. Your system tasks should cite them, not restate them.

**Draw the boundary around authority, not wiring.** A boundary holds components under the same AO, the same mission and the same management and operating environment. Everything the system team can configure is in; anything it only connects to is an interconnection documented under [SP 800-47 Rev. 1](https://csrc.nist.gov/pubs/sp/800/47/r1/final). For cloud, the boundary includes your tenant configuration and names the provider authorization you leverage.

A usable boundary package has four drawings: an authorization boundary diagram, a network diagram, a data flow diagram and a list of ports, protocols and services. Assessors test against these, so keep them to the as-built state.

**Pick information types from the catalog.** Use [SP 800-60 Vol. 2 Rev. 1](https://csrc.nist.gov/pubs/sp/800/60/v2/r1/final) and add Controlled Unclassified Information (CUI) categories from the [NARA CUI Registry](https://www.archives.gov/cui/registry/category-list). Most systems have 3 to 10 types, including management and support types such as IT infrastructure maintenance. Write one sentence per type on why it applies.

**Start privacy early.** Run your agency's privacy threshold analysis (PTA) now. If the system handles personally identifiable information (PII), it will need a privacy impact assessment (PIA) and may need a system of records notice (SORN) before it goes live.

**Treat the risk assessment as a living draft.** Do a design-level assessment now using SP 800-30's steps: identify threat sources and events, vulnerabilities and predisposing conditions, likelihood, impact and resulting risk. Refine it after Assess and keep it current in Monitor.

**Register early.** Most GRC tools key every artifact to the system ID from task P-18, and many agencies will not assign an assessor or AO until the system is registered.

## Done when

- [ ] Roles named for this system: AO, AODR, system owner, ISSO, information owner, privacy officer
- [ ] Organization risk strategy, common control catalog and ISCM strategy located and cited
- [ ] Mission and business functions documented
- [ ] Asset inventory complete (hardware, software, services, interfaces)
- [ ] Authorization boundary, network, data flow and ports-and-protocols diagrams drafted and agreed with the AO
- [ ] Interconnections listed with an agreement status for each
- [ ] Information types selected with rationale; CUI categories identified
- [ ] Privacy threshold analysis done; PIA and SORN needs known
- [ ] Initial system risk assessment drafted
- [ ] Security and privacy requirements defined and allocated
- [ ] System registered in the agency inventory

## Common findings

- The boundary leaves out SaaS tools, APIs, admin workstations or CI/CD pipelines that can change the system.
- The boundary diagram and the asset inventory do not match each other or the environment.
- Information types are copied from another system without rationale, so categorization is challenged later.
- Organization tasks are skipped, and the system team invents its own risk tolerance.
- Privacy is left until Authorize, and a missing PIA or SORN blocks the ATO.

## Key references

[SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) section 3.1, [SP 800-39](https://csrc.nist.gov/pubs/sp/800/39/final), [SP 800-30 Rev. 1](https://csrc.nist.gov/pubs/sp/800/30/r1/final), [SP 800-60 Rev. 1](https://csrc.nist.gov/pubs/sp/800/60/v2/r1/final), [SP 800-47 Rev. 1](https://csrc.nist.gov/pubs/sp/800/47/r1/final), [SP 800-137](https://csrc.nist.gov/pubs/sp/800/137/final), [SP 800-160 Vol. 1 Rev. 1](https://csrc.nist.gov/pubs/sp/800/160/v1/r1/final), [NIST CSF 2.0](https://www.nist.gov/cyberframework).
