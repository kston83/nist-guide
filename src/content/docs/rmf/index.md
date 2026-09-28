---
title: How to use this guide
description: The RMF at a glance, where to start for your situation, and the core source documents.
sidebar:
  order: 0
---

This guide is a working reference for the NIST Risk Management Framework (RMF) in [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final), for anyone taking a system to an authorization to operate (ATO) or keeping one. SP 800-37 Rev. 2 (December 2018) is still the current RMF; there is no Rev. 3. Agency and program processes (DoD, the Intelligence Community, FedRAMP) add their own rules on top, and where they differ, they govern. See [Program variants](/rmf/program-variants/).

## Where to start

| If you are | Start here | Then |
| --- | --- | --- |
| Standing up a new system | [Prepare](/rmf/steps/prepare/) (system-level tasks P-8 to P-18) | Work forward through each step in order |
| Inheriting a system with an ATO | [ATO package checklist](/rmf/ato-package/), then [Monitor](/rmf/steps/monitor/) | Check the POA&M and the ATO expiry or ongoing-authorization terms |
| Facing a significant change | [Monitor](/rmf/steps/monitor/) (task M-1) | Re-enter at Categorize or Select for the changed parts |
| An ISSO | [Roles](/rmf/roles/), then Select, Implement and Assess | Keep the SSP and POA&M current |
| A control assessor | [Assess](/rmf/steps/assess/) | The [control pages](/controls/) for SP 800-53A objectives |
| An AO or AO designated representative | [Authorize](/rmf/steps/authorize/) | [ATO package checklist](/rmf/ato-package/) |
| A common control provider | [Prepare](/rmf/steps/prepare/) (task P-5) and [Select](/rmf/steps/select/) (task S-3) | Publish what tenants can inherit |

Each step page follows the same layout: purpose, the tasks with who does them, how to apply the step in practice, a done checklist and common findings.

## The RMF at a glance

The RMF is seven steps and 47 tasks that turn an organization's risk tolerance into an authorization decision an official is accountable for. Prepare runs once at the organization level and again for each system; the other six steps repeat whenever the system or its threat picture changes.

![The seven RMF steps. Prepare sets the context; Categorize, Select, Implement, Assess, Authorize and Monitor form a cycle, and a significant change found in Monitor sends the system back to Categorize.](/diagrams/rmf-cycle.svg)

The arrow that matters most is the loop: a significant change found in Monitor sends the system back to Categorize or Select for the affected parts, not back to square one.

| Step | Question it answers | Key outputs | SDLC phase |
| --- | --- | --- | --- |
| [0 Prepare](/rmf/steps/prepare/) | What are we protecting, why, and inside what boundary? | Roles, risk strategy, common control list, boundary, information types, system registration | Initiation (and organization-wide) |
| [1 Categorize](/rmf/steps/categorize/) | How bad would a loss of confidentiality, integrity or availability be? | System description, FIPS 199 security category, approved categorization | Initiation |
| [2 Select](/rmf/steps/select/) | Which controls, tailored how, and who provides them? | Tailored baseline, security and privacy plans (SSP), ConMon strategy | Development and acquisition |
| [3 Implement](/rmf/steps/implement/) | Are the controls built and documented as built? | Implemented controls, updated SSP, configuration baselines, evidence | Development and implementation |
| [4 Assess](/rmf/steps/assess/) | Do the controls work as intended? | Assessment plan (SAP), assessment report (SAR), remediation, POA&M | Implementation |
| [5 Authorize](/rmf/steps/authorize/) | Is the remaining risk acceptable to the mission? | Authorization package, risk determination, decision letter | Implementation to operations |
| [6 Monitor](/rmf/steps/monitor/) | Is it still acceptable today? | Change analysis, ongoing assessments, updated package, status reports, disposal plan | Operations, maintenance and disposal |

Four ideas carry through every step:

- **Risk, not checklists.** Controls are chosen and judged against mission risk. The AO accepts residual risk; a clean control count is not the goal.
- **Three tiers.** [SP 800-39](https://csrc.nist.gov/pubs/sp/800/39/final) splits risk work across the organization (Tier 1), mission and business process (Tier 2) and system (Tier 3). Much of Prepare is Tier 1 and 2 work the system team should inherit, not redo.
- **Inheritance.** Common controls (data center, identity, logging, policy) are authorized once and inherited by many systems. Knowing what you inherit shrinks every later step.
- **Life cycle, not event.** Each step maps to a phase of the system development life cycle; the ATO is a checkpoint, and Monitor keeps it valid.

## Core source documents

| Document | What it governs | Current version (as of Sep 2026) | Used in |
| --- | --- | --- | --- |
| [NIST SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) | RMF steps, tasks, roles, authorization types | Dec 2018; no Rev. 3 | All steps |
| [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) | Security and privacy control catalog | Release 5.2.0, Aug 27, 2025 ([summary of changes](https://csrc.nist.gov/csrc/media/Projects/risk-management/800-53%20Comment%20Site/SP800-53-r5.2.0-changes.pdf)) | Select, Implement |
| [NIST SP 800-53B](https://csrc.nist.gov/pubs/sp/800/53/b/upd1/final) | Low, Moderate, High and privacy baselines | 2020, updated Dec 2020 | Select |
| [NIST SP 800-53A Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final) | Assessment procedures and objectives | 2022, with a matching 5.2.0 release | Assess, Monitor |
| [FIPS 199](https://csrc.nist.gov/pubs/fips/199/final) | Security categorization (Low, Moderate, High) | 2004 | Categorize |
| [FIPS 200](https://csrc.nist.gov/pubs/fips/200/final) | Minimum security requirements | 2006 | Select |
| [NIST SP 800-60 Vol. 1 and 2 Rev. 1](https://csrc.nist.gov/pubs/sp/800/60/v2/r1/final) | Information types and provisional impact levels | 2008; [Rev. 2 in draft](https://csrc.nist.gov/pubs/sp/800/60/r2/iwd) since Jan 2024 | Prepare, Categorize |
| [NIST SP 800-30 Rev. 1](https://csrc.nist.gov/pubs/sp/800/30/r1/final) | Risk assessment method | 2012 | Prepare, Authorize, Monitor |
| [NIST SP 800-137](https://csrc.nist.gov/pubs/sp/800/137/final) and [800-137A](https://csrc.nist.gov/pubs/sp/800/137/a/final) | Information security continuous monitoring (ISCM) | 2011 and 2020 | Prepare, Select, Monitor |
| [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf) | Federal policy requiring the RMF and ongoing authorization | 2016 | All steps |

Since release 5.2.0, NIST publishes 800-53 updates through its [Cybersecurity and Privacy Reference Tool (CPRT)](https://csrc.nist.gov/projects/cprt), with OSCAL and JSON downloads. Release 5.2.0 added SA-15(13), SA-24 and SI-2(7) and revised SI-7(12), focused on secure software updates.
