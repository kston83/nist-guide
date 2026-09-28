---
title: 'Step 2: Select'
description: Control selection, tailoring, allocation and the system security plan, tasks S-1 to S-6.
sidebar:
  label: '2 Select'
  order: 2
---

Select turns the security category into a tailored, allocated control set, written down in the security and privacy plans (SSP) the AO approves. The SSP becomes the contract the assessor tests against, so this is where most ATO effort goes. Source: [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final), section 3.3.

## Tasks

| Task | What it means in practice | Primary role | Output |
| --- | --- | --- | --- |
| S-1 Control selection | Start from the SP 800-53B baseline for your impact level, plus any required overlays | System owner, CCP | Initial control set |
| S-2 Control tailoring | Adjust the baseline: mark common controls, apply scoping, pick compensating controls, set parameter values, add controls for specific risks | System owner, CCP | Tailored baseline with rationale |
| S-3 Control allocation | Decide where each control lives: system-specific, hybrid or common (inherited) | Security architect, system owner, CCP | Allocation matrix |
| S-4 Planned implementation documentation | Describe how each control will be met, by whom, and at what status | System owner, CCP | Security and privacy plans |
| S-5 Continuous monitoring strategy, system | Say how each control will be monitored and how often | System owner, CCP | System ConMon strategy |
| S-6 Plan review and approval | AO reviews the plans for completeness and risk fit | AO | Approved SSP and ConMon strategy |

## Baselines and overlays

[SP 800-53B](https://csrc.nist.gov/pubs/sp/800/53/b/upd1/final) gives Low, Moderate and High security baselines and a separate privacy baseline, applied when the system processes PII. The catalog itself is [SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final), now at release 5.2.0. Every control page in this guide shows which baselines include it.

Overlays add or remove controls for a context. Common ones are CNSSI 1253 overlays for national security systems (privacy, classified information, space and others), FedRAMP baselines for cloud, and organization overlays from task P-4.

| Family | Covers | Family | Covers |
| --- | --- | --- | --- |
| [AC](/controls/ac/) | Access control | [PE](/controls/pe/) | Physical and environmental protection |
| [AT](/controls/at/) | Awareness and training | [PL](/controls/pl/) | Planning |
| [AU](/controls/au/) | Audit and accountability | [PM](/controls/pm/) | Program management (organization level) |
| [CA](/controls/ca/) | Assessment, authorization and monitoring | [PS](/controls/ps/) | Personnel security |
| [CM](/controls/cm/) | Configuration management | [PT](/controls/pt/) | PII processing and transparency |
| [CP](/controls/cp/) | Contingency planning | [RA](/controls/ra/) | Risk assessment |
| [IA](/controls/ia/) | Identification and authentication | [SA](/controls/sa/) | System and services acquisition |
| [IR](/controls/ir/) | Incident response | [SC](/controls/sc/) | System and communications protection |
| [MA](/controls/ma/) | Maintenance | [SI](/controls/si/) | System and information integrity |
| [MP](/controls/mp/) | Media protection | [SR](/controls/sr/) | Supply chain risk management |

## How to apply it

**Inherit first, then build.** Pull the common control catalog from Prepare (task P-5). For each baseline control, decide whether it is fully inherited (for example, PE controls from a data center or cloud provider), hybrid (the provider does part, you do part) or system-specific. Record the provider and its authorization for every inherited piece.

**Tailor in writing.** Every removed or modified control needs a rationale the AO can accept, such as "not applicable: no wireless in the boundary" for [AC-18](/controls/ac/ac-18/). Compensating controls must give equivalent protection and cite why the original cannot be met.

**Fill every parameter.** Organization-defined parameters (ODPs) are the blanks inside controls, such as how often accounts are reviewed under [AC-2](/controls/ac/ac-2/). Most are set by agency policy; cite it. Blank ODPs are an immediate assessment finding.

**Write implementation statements an assessor can test.** A good statement says who does what, with which tool, how often, and where the evidence is. Weak: "The organization reviews audit logs." Strong: "The ISSO reviews Splunk alerts daily and privileged-user activity weekly; review notes are kept in ticket queue SEC-AUDIT."

**Plan the attachments now.** A complete SSP usually attaches or references the documents below; many are also controls in their own right.

| Attachment | Related controls | Typical owner |
| --- | --- | --- |
| Security and privacy policies and procedures | The -1 control in every family | CISO office, system owner |
| Hardware and software inventory | [CM-8](/controls/cm/cm-8/) | System owner |
| Configuration management plan | [CM-9](/controls/cm/cm-9/) | System owner |
| Contingency plan and business impact analysis | [CP-2](/controls/cp/cp-2/), [CP-4](/controls/cp/cp-4/) | System owner |
| Incident response plan | [IR-8](/controls/ir/ir-8/) | ISSO, CISO office |
| Privacy impact assessment and SORN | [RA-8](/controls/ra/ra-8/), [PT-5](/controls/pt/pt-5/) | Privacy officer |
| Rules of behavior | [PL-4](/controls/pl/pl-4/) | System owner |
| Interconnection agreements | [CA-3](/controls/ca/ca-3/) | System owner |
| Supply chain risk management plan | [SR-2](/controls/sr/sr-2/) | System owner, acquisition |
| Continuous monitoring strategy | [CA-7](/controls/ca/ca-7/) | System owner, ISSO |

**Design the ConMon strategy for automation.** For each control, choose a frequency and method (automated scan, log check, manual review). Put volatile controls such as vulnerability scanning ([RA-5](/controls/ra/ra-5/)) and configuration checks ([CM-6](/controls/cm/cm-6/)) on automated weekly or monthly cycles; stable ones such as physical access policy can run annually. Use [SP 800-137A](https://csrc.nist.gov/pubs/sp/800/137/a/final) to judge the strategy.

**Consider OSCAL.** Machine-readable plans in [OSCAL](https://pages.nist.gov/OSCAL/) make assessment and monitoring faster and are becoming required in FedRAMP.

## Done when

- [ ] Baseline and overlays chosen and cited
- [ ] Every control marked system-specific, hybrid or inherited, with provider named
- [ ] Tailoring decisions and compensating controls justified
- [ ] All organization-defined parameters filled
- [ ] Implementation statement written for every control (status: planned, partial or implemented)
- [ ] Required attachments drafted or scheduled
- [ ] System ConMon strategy with frequency per control
- [ ] AO approval of the SSP and ConMon strategy recorded (task S-6)

## Common findings

- Implementation statements that restate the control text instead of describing the system.
- Controls marked "inherited" with no provider authorization to point to.
- Controls marked "implemented" in Select that do not exist yet.
- Tailoring by deletion with no rationale.
- Policies and procedures (the -1 controls) missing or never reviewed.

## Key references

[SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final), [SP 800-53B](https://csrc.nist.gov/pubs/sp/800/53/b/upd1/final), [SP 800-18 Rev. 1](https://csrc.nist.gov/pubs/sp/800/18/r1/final) (SSP guide), [SP 800-137A](https://csrc.nist.gov/pubs/sp/800/137/a/final), [CNSSI 1253](https://www.cnss.gov/CNSS/issuances/Instructions.cfm), [OSCAL](https://pages.nist.gov/OSCAL/), [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) section 3.3.
