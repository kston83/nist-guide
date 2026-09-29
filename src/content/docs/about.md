---
title: About this guide
description: Who this guide is for, how it is made, how it is organized, and how it is maintained. The guide is a research project, and most of its content is written by Claude Opus 5.5.
---

The RMF Field Guide explains how to apply the NIST Risk Management Framework (RMF) and the SP 800-53 control catalog to real systems, from the first boundary diagram to ongoing authorization. It is written for system owners, information system security officers (ISSOs), assessors, authorizing officials and the consultants who support them.

## How this guide is made

This guide is a research project. It began as a test of what Claude Opus 5.5, Anthropic's model, can do on a real, demanding body of work: a practitioner-grade RMF guide and program kit.

Most, if not all, of the content is written by Claude Opus 5.5 working in Claude Code. That includes the guidance, the templates and the site's code. The owner directs the work: he sets the scope and priorities, makes the decisions, and reviews and merges every change. The history on GitHub shows this: each [pull request](https://github.com/kston83/nist-guide/pulls?q=is%3Apr) notes that it was generated with Claude Code, and its commits carry a co-author line for the model. The merged changes are in the [commit history](https://github.com/kston83/nist-guide/commits/main).

What this means for you:

- **Check the status.** Control pages and templates show a status. **Draft** means written and source-checked but not yet reviewed by the owner. **Reviewed** means the owner has reviewed it. The [guidance coverage](/controls/coverage/) page shows the status of every control.
- **Sources are cited.** Factual claims about rules, versions and dates are checked against primary sources and cited on the page. Anything that cannot be verified is flagged, not guessed.
- **Confirm before you rely on it.** Check requirements with your agency or program office before you act on them.

This is an ongoing effort. The aim is for the guide to grow into a complete, dependable resource over time, and the [roadmap](/reference/roadmap/) shows the plan. For now, treat it as a work in progress.

## How it is organized

The guide has five layers, from general to specific:

1. **The framework.** The seven RMF steps from [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final), with the tasks, roles, outputs and pitfalls for each.
2. **The controls.** Every SP 800-53 Rev. 5 control, generated from NIST's official machine-readable catalog, with practical guidance added over time.
3. **Program templates (in progress).** Policies for every control family, plus the plans, standards, procedures and forms the controls call for, ready to fill in or modify.
4. **Industries (planned).** How the framework and controls apply under sector rules such as HIPAA, NERC CIP, PCI DSS and CMMC.
5. **Technologies (planned).** How specific controls are implemented and evidenced on specific platforms.

Two further parts build on this:

- **Methods (planned).** Where NIST publishes how to meet a control, the control page will name it. The Secure Software Development Framework ([SSDF](https://csrc.nist.gov/pubs/sp/800/218/final)) comes first.
- **The AI RMF and AI security (planned).** A second guidebook, for the NIST AI Risk Management Framework: how to apply it, and how to adopt and secure AI, in any organization and in systems authorized under the RMF. It is built on NIST and OWASP guidance.

The [roadmap](/reference/roadmap/) shows what is available now and what comes next.

## About the author

The owner directs this project and reviews its work, drawing on his federal RMF practice.

**Kristopher Stone, CISSP** is a father and an AI security lead who works on federal systems, where the RMF and SP 800-53 are part of everyday work. Kristopher holds the CISSP along with CompTIA and ITIL certifications, and studied at Western Governors University.

The guide aims to collect the practical side of that work: what each step and control actually asks for, what assessors look for, and the documents that make a security program real.

Connect with Kristopher on [LinkedIn](https://www.linkedin.com/in/kristopher-stone-cissp-655b4866).

## Sources and accuracy

Control statements, discussion and assessment objectives are reproduced from NIST SP 800-53 Rev. 5 and SP 800-53A Rev. 5 (release 5.2.0), which are U.S. government works in the public domain. Everything else is original, not copied from other sources, and is written by Claude Opus 5.5 under the owner's direction (see [How this guide is made](#how-this-guide-is-made)). Program rules change often, especially for FedRAMP and DoD, so each page shows when it was last updated. Always confirm requirements with your agency or program office.

This guide is independent and is not endorsed by NIST, any agency or any employer.

## License

Original content is licensed under [Creative Commons Attribution 4.0 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/): you may reuse and adapt it with credit. Program templates are dedicated to the public domain under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/), so you can adopt them in your own policies and plans without attribution. Suggestions and corrections are welcome through the "Edit page" link at the bottom of every page.
