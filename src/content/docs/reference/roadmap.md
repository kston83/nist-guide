---
title: Roadmap
description: Where the RMF Field Guide is going, what is available today, and what each phase adds, across its two frameworks, the NIST RMF with SP 800-53 and the NIST AI RMF.
sidebar:
  order: 89
---

The RMF Field Guide is a practical guidebook to two NIST frameworks: the **Risk Management Framework (RMF)** with its SP 800-53 controls, and the **AI Risk Management Framework (AI RMF)**. For each one, it explains what the framework asks of you and ships the documents to act on it, so an organization can **learn, build and prove** its program. It is written for any organization. Where systems governed by NIST frameworks, such as federal systems, have extra requirements, the guide marks them.

This page shows the plan and where the work stands. For what changed recently, see the [changelog](/reference/changelog/); for live progress by control, see [guidance coverage](/controls/coverage/).

## Two frameworks

### The RMF and SP 800-53

The first guidebook covers the RMF from start to finish: the seven steps, every SP 800-53 control, and a program kit to adopt. Every control page will answer six questions, in order, and every answer after the first is something you can copy or follow.

| Question | What the guide gives you | Status |
| --- | --- | --- |
| **Requirement:** what does NIST require? | The control text, parameters and assessment objectives, generated from NIST's official catalog | Available for all 300 controls |
| **Policy:** what do we commit to? | A policy clause for the control, assembled into family policies | In progress (Phase 3) |
| **Method:** what is the established way to do it? | The NIST publication that shows how, such as the Secure Software Development Framework (SSDF) | Planned (Phase 4) |
| **Procedure:** how do we do it here? | Standards, procedures and plans to adopt | In progress (Phase 3) |
| **Implementation:** where is it configured? | Technology playbooks for specific platforms | Planned (Phase 6) |
| **Evidence:** how do we prove it? | What assessors ask for, and the forms and registers that record it | Available for the priority controls; growing with each family |

Families roll these pieces up into the documents an organization actually adopts: a policy per family (or one consolidated policy), the plans the controls require, and a decision worksheet listing every choice the family forces.

### The AI RMF and AI security

The second guidebook does the same for AI: how to apply the AI RMF, and how to adopt, build and run AI securely. It will cover AI in any organization, and AI inside a system authorized under the RMF. It is built only on NIST publications and OWASP's AI security guidance, with each source's version and status shown. See [Phase 5](#ai-rmf-and-ai-security-phase-5) for what it will include.

## Where it stands

As of September 2026:

- **The framework.** All seven RMF steps, roles, the ATO package checklist and program variants.
- **The controls.** All 300 SP 800-53 Rev. 5 controls and their enhancements, with practical guidance for the 31 [priority controls](/controls/coverage/).
- **The template kit.** [Version 1.0.0](https://github.com/kston83/nist-guide/releases/tag/v1.0.0) is released: every template in Word and Markdown, per baseline, with a [starter kit](/templates/starter-kit/) for a new program.
- **Policies.** Family policies for 11 of 20 families: AC, AT, AU, CM, CP, IA, IR, PL, PM, PS and RA. 171 of the 287 Moderate-baseline controls have a policy clause.
- **Plans, standards, forms and reports.** 18 of the 50 artifacts in the plan, including the System Security Plan, Incident Response Plan, Contingency Plan and POA&M. See [all templates](/templates/).
- **Build your program.** A [staged path](/program/) from Foundation to Mature, with the artifacts and decisions for each stage.
- **The AI RMF guidebook.** Not started; it follows the program kit and the methods.

Everything is published as a draft, and marked reviewed only after the author has reviewed it.

## What's next

The work runs in phases. Each phase ends with a review before the next starts, and the phases are ordered by what depends on what, not by date.

| Phase | What it adds | Done when | Kit |
| --- | --- | --- | --- |
| 1 Launch | The public site, generated control pages and quality checks | Done | |
| 2 Templates and first kit | The template system, guidance for the priority controls, and the first five family policies with the SSP, IR plan and POA&M | Done, September 2026 | v1.0.0 |
| **3 Full program kit** | **The remaining family policies, a consolidated policy, the other plans, standards and forms the controls call for, and practical guidance for every Moderate control** | **Every Low and Moderate control has a policy clause, every Moderate control has guidance, and the program path is complete** | **v2.0.0** |
| 4 Methods and the SSDF | NIST's how-to guidance shown on each control page, starting with the SSDF, plus secure software development templates | Every family names its NIST methods, and every SSDF practice has a page | v2.1.0 |
| 5 AI RMF and AI security | The second guidebook: the AI RMF, securing AI systems through the RMF, NIST and OWASP AI security guidance, and AI templates | The AI RMF pages, the RMF walkthrough, the OWASP pages and the AI templates are published, with a current status table of every source | v2.2.0 |
| 6 Industries and technology | Three industry guides, four technology playbooks, and articles | All seven are published and linked from the control pages they cover | |
| 7 Depth | Guidance for High-baseline controls, High-baseline clauses, NIST-published crosswalks and automated checks for new NIST releases | Every High control has guidance | |

### Phase 3, the current phase

What remains:

- **Family policies** for CA, MA, MP, PE, PT, SA, SC, SI and SR, including the Privacy-baseline clauses of each family.
- **Artifacts** for those families: encryption, boundary protection, patching and monitoring standards; a privacy notice and privacy impact assessment; assessment plan and report, Continuous Monitoring Strategy and information exchange agreement; acquisition and external service documents; maintenance, media sanitization, physical access and visitor records; and a Supply Chain Risk Management Plan with a supplier questionnaire.
- **Artifacts for families already covered:** an account management procedure, access request and access review forms and a remote access standard; an identification and authentication standard; a Configuration Management Plan, baseline configuration standard, change request form and component inventory; an audit logging standard and log review procedure; and an incident handling playbook, incident report form and tabletop exercise kit.
- **Guidance for every Moderate control:** how to apply it, the typical values, the evidence assessors ask for, what is usually inherited and the common findings, family by family, alongside the policies.
- **A consolidated policy:** one Information Security and Privacy Policy per baseline, as an alternative to 20 family policies. The starter kit will use it.
- **The program path:** an artifact checklist, and guidance on scaling the program to the organization's size.
- **A template changelog** on each template page, then kit v2.0.0.

### Methods and the SSDF (Phase 4)

A control says what to do; for many controls, NIST also publishes how it is normally done. This phase adds that how-to layer to the RMF guidebook.

- **A methods index:** for each control family, the NIST publications that show how to meet its controls, such as SP 800-61 for incident response and SP 800-34 for contingency planning, each with its version and status.
- **A Methods section on each control page.** A method is linked to a control only where the NIST publication itself cites that control.
- **The Secure Software Development Framework (SSDF, [SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final)) first:** a page for each practice in its four groups (Prepare the Organization, Protect the Software, Produce Well-Secured Software, Respond to Vulnerabilities), with the SP 800-53 controls NIST says each task supports, shown on those control pages too.
- **Software development templates:** a Secure Software Development Policy and SDLC standard organized by SSDF practice, plus a vulnerability disclosure policy, SBOM guidance and an attestation readiness checklist for software producers.

### AI RMF and AI security (Phase 5)

A comprehensive guide to applying the AI RMF and to adopting and securing AI, with its own section and entry point.

- **The AI RMF itself:** an overview and a page for each of its four functions (Govern, Map, Measure, Manage), with their categories and subcategories from NIST's published framework, each linked to NIST's AI RMF Playbook.
- **The AI RMF alongside the RMF:** how the two frameworks fit together, for an organization that runs both.
- **Securing an AI system through the RMF:** taking a system with AI components (a hosted model, an AI service or an agent) through the seven RMF steps: inventory and categorization, the boundary, what the system security plan records, supply chain, assessment and monitoring.
- **NIST's AI security guidance:** the Generative AI Profile, NIST's taxonomy of attacks on machine learning and their mitigations, and secure development practices for generative AI, which extend the SSDF.
- **OWASP's AI security guidance:** the OWASP Top 10 for LLM Applications and for Agentic Applications, explained in the guide's own words with links to each entry, and the OWASP AI Exchange for application-level threats and defenses.
- **AI templates:** an AI acceptable use standard, an AI system and use-case inventory, an AI system description appendix for the system security plan, an AI risk and impact assessment, and a third-party AI service review.
- **A status table** of every NIST and OWASP publication the guide uses, with versions, rechecked at each release. NIST and OWASP both revise their AI guidance often, and the guide follows new editions.

The guide will not invent AI-specific control selections or mappings. NIST is developing SP 800-53 control overlays for AI systems; the guide adds them to the control pages once NIST finalizes each one.

### Industries and technology (Phase 6)

How the controls apply under sector rules, and how they are configured and evidenced on specific platforms.

## What the guide will not do

- Store your data, track your POA&M or act as a system of record. Templates are documents you download and complete in your own tools.
- Copy copyrighted standards or commercial template libraries. Templates are written from the NIST requirement up.
- Give legal or official advice. Confirm requirements with your agency, regulator or program office.
- Run AI tools, or test, evaluate or monitor models. The AI guidebook is guidance and templates only.

## Suggest something

The plan changes as the work does. Suggestions and corrections are welcome through the "Edit page" link at the bottom of every page, or as an issue on [GitHub](https://github.com/kston83/nist-guide).
