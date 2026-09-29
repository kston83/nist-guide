---
title: Roadmap
description: Where the RMF Field Guide is going, what is available today, and what each phase adds, from the full program kit to methods, the AI security guide, industries and technology.
sidebar:
  order: 89
---

The RMF Field Guide helps an organization **learn, build and prove** a security program based on the NIST Risk Management Framework and SP 800-53. It explains every step and control, and it ships the documents to act on them: policies, plans, standards, procedures and forms, ready to fill in. You can start from nothing and follow a staged path, or take only the pieces you need.

This page shows the plan and where the work stands. For what changed recently, see the [changelog](/reference/changelog/); for live progress by control, see [guidance coverage](/controls/coverage/).

## The vision

Every control page will answer six questions, in order. Every answer after the first is something you can copy or follow.

| Question | What the guide gives you | Status |
| --- | --- | --- |
| **Requirement:** what does NIST require? | The control text, parameters and assessment objectives, generated from NIST's official catalog | Available for all 300 controls |
| **Policy:** what do we commit to? | A policy clause for the control, assembled into family policies | In progress (Phase 3) |
| **Method:** what is the established way to do it? | The NIST publication that shows how, such as the Secure Software Development Framework (SSDF) | Planned (Phase 4) |
| **Procedure:** how do we do it here? | Standards, procedures and plans to adopt | In progress (Phase 3) |
| **Implementation:** where is it configured? | Technology playbooks for specific platforms | Planned (Phase 6) |
| **Evidence:** how do we prove it? | What assessors ask for, and the forms and registers that record it | Available for the priority controls; growing with each family |

Families roll these pieces up into the documents an organization actually adopts: a policy per family (or one consolidated policy), the plans the controls require, and a decision worksheet listing every choice the family forces.

## Where it stands

As of September 2026:

- **The framework.** All seven RMF steps, roles, the ATO package checklist and program variants.
- **The controls.** All 300 SP 800-53 Rev. 5 controls and their enhancements, with practical guidance for the 31 [priority controls](/controls/coverage/).
- **The template kit.** [Version 1.0.0](https://github.com/kston83/nist-guide/releases/tag/v1.0.0) is released: every template in Word and Markdown, per baseline, with a [starter kit](/templates/starter-kit/) for a new program.
- **Policies.** Family policies for 11 of 20 families: AC, AT, AU, CM, CP, IA, IR, PL, PM, PS and RA. 171 of the 287 Moderate-baseline controls have a policy clause.
- **Plans, standards, forms and reports.** 18 of the 50 artifacts in the plan, including the System Security Plan, Incident Response Plan, Contingency Plan and POA&M. See [all templates](/templates/).
- **Build your program.** A [staged path](/program/) from Foundation to Mature, with the artifacts and decisions for each stage.

Everything is published as a draft, and marked reviewed only after the author has reviewed it.

## What's next

The work runs in phases. Each phase ends with a review before the next starts, and the phases are ordered by what depends on what, not by date.

| Phase | What it adds | Done when | Kit |
| --- | --- | --- | --- |
| 1 Launch | The public site, generated control pages and quality checks | Done | |
| 2 Templates and first kit | The template system, guidance for the priority controls, and the first five family policies with the SSP, IR plan and POA&M | Done, September 2026 | v1.0.0 |
| **3 Full program kit** | **The remaining family policies, a consolidated policy, and the other plans, standards and forms the controls call for** | **Every Low and Moderate control has a policy clause, and the program path is complete** | **v2.0.0** |
| 4 Methods and the SSDF | NIST's how-to guidance shown on each control page, starting with the SSDF, plus secure software development templates | Every family names its NIST methods, and every SSDF practice has a page | v2.1.0 |
| 5 AI security guide | A guide within the guide for adopting and securing AI, built on NIST and OWASP guidance | The guide, its AI templates and a current status table of NIST and OWASP publications are published | v2.2.0 |
| 6 Industries and technology | Three industry guides, four technology playbooks, and articles | All seven are published and linked from the control pages they cover | |
| 7 Depth | Guidance for every Moderate control, High-baseline clauses, NIST-published crosswalks and automated checks for new NIST releases | Every Moderate control has guidance | |

### Phase 3, the current phase

What remains:

- **Family policies** for CA, MA, MP, PE, PT, SA, SC, SI and SR, including the Privacy-baseline clauses of each family.
- **Artifacts** for those families: encryption, boundary protection, patching and monitoring standards; a privacy notice and privacy impact assessment; assessment plan and report, Continuous Monitoring Strategy and information exchange agreement; acquisition and external service documents; maintenance, media sanitization, physical access and visitor records; and a Supply Chain Risk Management Plan with a supplier questionnaire.
- **Artifacts for families already covered:** an account management procedure, access request and access review forms and a remote access standard; an identification and authentication standard; a Configuration Management Plan, baseline configuration standard, change request form and component inventory; an audit logging standard and log review procedure; and an incident handling playbook, incident report form and tabletop exercise kit.
- **A consolidated policy:** one Information Security and Privacy Policy per baseline, as an alternative to 20 family policies. The starter kit will use it.
- **The program path:** an artifact checklist, and guidance on scaling the program to the organization's size.
- **A template changelog** on each template page, then kit v2.0.0.

### Later phases

**Methods (Phase 4).** For many controls NIST publishes how to meet them, not only what to meet. Each control page will name those publications, linked only where the publication itself cites the control. The Secure Software Development Framework ([SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final)) comes first, with a secure software development policy and SDLC standard.

**AI security guide (Phase 5).** A separate section for bringing AI into an organization, and into a system authorized under the RMF. It will draw only on NIST guidance, such as the AI Risk Management Framework, and OWASP's AI security guidance. It will not make AI-specific control selections of its own; it waits for NIST's control overlays for AI systems.

**Industries and technology (Phase 6).** How the controls apply under sector rules, and how they are configured and evidenced on specific platforms.

## What the guide will not do

- Store your data, track your POA&M or act as a system of record. Templates are documents you download and complete in your own tools.
- Copy copyrighted standards or commercial template libraries. Templates are written from the NIST requirement up.
- Give legal or official advice. Confirm requirements with your agency, regulator or program office.
- Run AI tools, or test, evaluate or monitor models. The AI guide is guidance and templates only.

## Suggest something

The plan changes as the work does. Suggestions and corrections are welcome through the "Edit page" link at the bottom of every page, or as an issue on [GitHub](https://github.com/kston83/nist-guide).
