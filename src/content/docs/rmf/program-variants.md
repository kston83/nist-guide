---
title: Program variants
description: How FedRAMP, DoD, the Intelligence Community and CMMC differ from the base NIST RMF, with status as of September 2026.
---

The NIST RMF is the base layer; FedRAMP, DoD and the Intelligence Community each add their own rules, tools and vocabulary on top. Both FedRAMP and DoD are mid-transition in 2026, so confirm the current rules with your program office before planning.

| Program | Applies to | What changes from the NIST RMF | Status as of Sep 2026 |
| --- | --- | --- | --- |
| FedRAMP Rev. 5 path | Cloud services sold to federal agencies | SP 800-53 Rev. 5 baselines with FedRAMP additions, agency sponsor, accredited 3PAO assessor, FedRAMP templates, monthly ConMon deliverables | Closes to new applications June 11, 2027; existing Rev. 5 certifications sunset December 31, 2028 ([Crowell](https://www.crowell.com/en/insights/client-alerts/time-for-a-change-fedramp-fundamentally-revamps-program-with-consolidated-rules-for-2026)) |
| FedRAMP 20x and Consolidated Rules 2026 (CR26) | Cloud services, all FedRAMP paths | Key Security Indicators with automated, machine-readable validation instead of long narrative documents; no agency sponsor required; classes A to D replace Low, Moderate and High; "FedRAMP Certified" replaces "FedRAMP Authorized" | CR26 released June 25, 2026; mandatory for all providers January 1, 2027 ([Crowell](https://www.crowell.com/en/insights/client-alerts/time-for-a-change-fedramp-fundamentally-revamps-program-with-consolidated-rules-for-2026), [FedRAMP 20x](https://www.fedramp.gov/20x)) |
| DoD RMF ([DoDI 8510.01](https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/851001p.pdf)) | DoD systems and DoD-connected systems | CNSSI 1253 categorization (separate C, I, A values), DISA STIGs, eMASS as the system of record, ISSM role, IATT and ATO-with-conditions decisions, continuous ATO (cATO) for mature DevSecOps programs | Still the issued instruction until replaced; check your component |
| DoD Cybersecurity Risk Management Construct (CSRMC) | DoD systems | Announced September 24, 2025 as the RMF's replacement: five phases (Design, Build, Test, Onboard, Operate), with automation, continuous monitoring and reciprocity at the core ([Breaking Defense](https://breakingdefense.com/2025/09/dod-issues-replacement-for-risk-management-framework/), [Akin](https://www.akingump.com/en/insights/alerts/department-of-defense-launches-csrmc-a-new-cybersecurity-risk-management-construct)) | Implementation guidance still rolling out; RMF artifacts remain the evidence base |
| Intelligence Community (ICD 503) | IC systems, including classified | NIST RMF plus CNSSI 1253 and IC-specific overlays and reciprocity rules | Stable |
| CMMC and SP 800-171 | Contractor systems holding CUI | Not the RMF: SP 800-171 requirements assessed under CMMC levels; no AO or ATO | Phased into DoD contracts since November 10, 2025 |

## What stays the same everywhere

Every variant still needs a defined boundary, a categorization, an agreed control set, evidence that controls work, a tracked list of weaknesses and an accountable official who accepts the risk. If you follow the step pages, you will have the raw material for any of these programs; mainly the templates, tools and cadence change.

## Common controls, inheritance and reciprocity

**Inheritance** lets a system rely on controls another provider has already authorized, such as a data center's physical controls or an agency identity service. Always get the provider's authorization status and a customer responsibility matrix that says which parts of each hybrid control are yours.

**Reciprocity** means one organization accepting another's authorization instead of repeating the assessment. OMB A-130, DoDI 8510.01 and FedRAMP all encourage it. The receiving AO reviews the existing package, adds any organization-specific conditions and issues an authorization to use (ATU).
