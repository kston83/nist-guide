---
title: Secure Software Development Framework (SSDF)
description: What NIST's Secure Software Development Framework (SP 800-218) is, who uses it, how it relates to the SA and SR controls, and its version status.
sidebar:
  label: Overview
  order: 0
source:
  id: 'SP 800-218'
  version: '1.1'
  status: final
  checked: '2026-10'
guidance: draft
---

The Secure Software Development Framework (SSDF) is NIST's set of practices for building software securely. [SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) defines it as "a core set of high-level secure software development practices that can be integrated into each SDLC implementation". It does not replace your development life cycle; you add its practices to the one you have. Status as of October 2026.

The SSDF is the guide's first method: a NIST publication that says how a set of controls is normally met. The controls say what is required; the SSDF says what a software producer does to meet them.

## Who it is for

SP 800-218 names two primary audiences:

- **Software producers**, "regardless of size, sector, or level of maturity": commercial product vendors, government-off-the-shelf developers, custom software developers and internal development teams. If your team writes, builds or releases software, the practices apply to that work.
- **Software acquirers**, "both federal agencies and other organizations". An acquirer uses the SSDF as a common vocabulary to state what it requires of suppliers. The executive summary says organizations should "express their secure software development requirements to third-party suppliers using SSDF conventions, and acquire software that meets the practices described in the SSDF".

When a cloud or platform provider shares the work, SP 800-218 expects a shared responsibility model: the tenant "should establish an agreement with the providers that specifies which party is responsible for each practice and task" (section 1).

## How to read it

NIST is clear that the SSDF is not a checklist. "The intention of the SSDF is not to create a checklist to follow, but to provide a basis for planning and implementing a risk-based approach to adopting secure software development practices" (section 1). How far you implement each practice, and how formally, depends on your risk, cost, feasibility and applicability.

Each practice has four parts in NIST's table (section 2):

| Part | What it is |
| --- | --- |
| Practice | The name, an identifier such as PO.1, and why the practice matters |
| Tasks | One or more actions that may be needed to perform the practice, such as PO.1.1 |
| Notional implementation examples | Tools, processes or methods that could help with a task. None is required |
| References | Other secure development documents that map to the task, including SP 800-53 |

SP 800-218 leaves some terms undefined on purpose, such as "sensitive data", "qualified person", "well-secured" and the names of your environments (section 2). Define them for your own organization before you adopt the practices; the order of practices and tasks implies no sequence or priority.

## The practices

The practices fall into four groups. Each practice has its own page with NIST's text of the practice, its tasks and their notional implementation examples.

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from the NIST SP 800-218, SSDF version 1.1 table (nist.sp.800-218.ssdf-table.xlsx). Edits between the nist markers are overwritten by npm run ssdf. -->

<a id="po"></a>

### Prepare the Organization (PO)

Organizations should ensure that their people, processes, and technology are prepared to perform secure software development at the organization level. Many organizations will find some PO practices to also be applicable to subsets of their software development, like individual development groups or projects.

| Practice | Tasks |
| --- | --- |
| [PO.1 Define Security Requirements for Software Development](/methods/ssdf/po-1/) | PO.1.1, PO.1.2, PO.1.3 |
| [PO.2 Implement Roles and Responsibilities](/methods/ssdf/po-2/) | PO.2.1, PO.2.2, PO.2.3 |
| [PO.3 Implement Supporting Toolchains](/methods/ssdf/po-3/) | PO.3.1, PO.3.2, PO.3.3 |
| [PO.4 Define and Use Criteria for Software Security Checks](/methods/ssdf/po-4/) | PO.4.1, PO.4.2 |
| [PO.5 Implement and Maintain Secure Environments for Software Development](/methods/ssdf/po-5/) | PO.5.1, PO.5.2 |

<a id="ps"></a>

### Protect the Software (PS)

Organizations should protect all components of their software from tampering and unauthorized access.

| Practice | Tasks |
| --- | --- |
| [PS.1 Protect All Forms of Code from Unauthorized Access and Tampering](/methods/ssdf/ps-1/) | PS.1.1 |
| [PS.2 Provide a Mechanism for Verifying Software Release Integrity](/methods/ssdf/ps-2/) | PS.2.1 |
| [PS.3 Archive and Protect Each Software Release](/methods/ssdf/ps-3/) | PS.3.1, PS.3.2 |

<a id="pw"></a>

### Produce Well-Secured Software (PW)

Organizations should produce well-secured software with minimal security vulnerabilities in its releases.

| Practice | Tasks |
| --- | --- |
| [PW.1 Design Software to Meet Security Requirements and Mitigate Security Risks](/methods/ssdf/pw-1/) | PW.1.1, PW.1.2, PW.1.3 |
| [PW.2 Review the Software Design to Verify Compliance with Security Requirements and Risk Information](/methods/ssdf/pw-2/) | PW.2.1 |
| [PW.4 Reuse Existing, Well-Secured Software When Feasible Instead of Duplicating Functionality](/methods/ssdf/pw-4/) | PW.4.1, PW.4.2, PW.4.4 |
| [PW.5 Create Source Code by Adhering to Secure Coding Practices](/methods/ssdf/pw-5/) | PW.5.1 |
| [PW.6 Configure the Compilation, Interpreter, and Build Processes to Improve Executable Security](/methods/ssdf/pw-6/) | PW.6.1, PW.6.2 |
| [PW.7 Review and/or Analyze Human-Readable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements](/methods/ssdf/pw-7/) | PW.7.1, PW.7.2 |
| [PW.8 Test Executable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements](/methods/ssdf/pw-8/) | PW.8.1, PW.8.2 |
| [PW.9 Configure Software to Have Secure Settings by Default](/methods/ssdf/pw-9/) | PW.9.1, PW.9.2 |

<a id="rv"></a>

### Respond to Vulnerabilities (RV)

Organizations should identify residual vulnerabilities in their software releases and respond appropriately to address those vulnerabilities and prevent similar ones from occurring in the future.

| Practice | Tasks |
| --- | --- |
| [RV.1 Identify and Confirm Vulnerabilities on an Ongoing Basis](/methods/ssdf/rv-1/) | RV.1.1, RV.1.2, RV.1.3 |
| [RV.2 Assess, Prioritize, and Remediate Vulnerabilities](/methods/ssdf/rv-2/) | RV.2.1, RV.2.2 |
| [RV.3 Analyze Vulnerabilities to Identify Their Root Causes](/methods/ssdf/rv-3/) | RV.3.1, RV.3.2, RV.3.3, RV.3.4 |
<!-- markdownlint-restore -->
<!-- nist:end -->

## How it relates to the SA and SR controls

SP 800-53 sets the requirement; the SSDF describes the development practice that meets it. NIST's SSDF table maps tasks to SP 800-53 controls in its references column, and every control it cites is in two families:

- **[System and Services Acquisition (SA)](/controls/sa/)**, above all [SA-15](/controls/sa/sa-15/) (development process, standards and tools), [SA-11](/controls/sa/sa-11/) (developer testing and evaluation), [SA-8](/controls/sa/sa-8/) (security and privacy engineering principles) and [SA-10](/controls/sa/sa-10/) (developer configuration management).
- **[Supply Chain Risk Management (SR)](/controls/sr/)**, such as [SR-3](/controls/sr/sr-3/) (supply chain controls and processes) and [SR-4](/controls/sr/sr-4/) (provenance).

SA-10, SA-11 and SA-15 are written as requirements the organization places on "the developer of the system, system component, or system service". The SSDF gives you the practices to require, and the vocabulary to write them into an [SA-4](/controls/sa/sa-4/) acquisition requirement or a development standard. The task-by-task references will be shown on each practice page and on the control pages they cite in a later update.

## Version status

As of October 2026:

| Publication | Version | Status |
| --- | --- | --- |
| [SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) | SSDF 1.1 | Final, February 2022. Supersedes the SSDF 1.0 white paper (NIST CSWP 13, April 23, 2020). This guide follows it |
| [SP 800-218 Rev. 1](https://csrc.nist.gov/pubs/sp/800/218/r1/ipd) | SSDF 1.2 | Initial public draft, December 17, 2025; the comment period closed January 30, 2026. No later draft or final has been published |
| [SP 800-218A](https://csrc.nist.gov/pubs/sp/800/218/a/final) | SSDF community profile | Final, July 2024. Adds practices for developing generative AI and dual-use foundation models; covered in the AI security guide |

NIST's [SSDF project page](https://csrc.nist.gov/projects/ssdf) still presents version 1.1 as the current SSDF. These pages move to version 1.2 only when NIST publishes it as final.

## Where the text comes from

The practice, task and example text on these pages is NIST's, imported from the Microsoft Excel version of the SSDF 1.1 table that NIST publishes as supplemental material on the [SP 800-218 landing page](https://csrc.nist.gov/pubs/sp/800/218/final) (`nist.sp.800-218.ssdf-table.xlsx`), which the SSDF project page describes as "a Microsoft Excel version of the SSDF 1.1 table". SP 800-218 states that it "is not subject to copyright in the United States", so the text is used as published, with this citation.
