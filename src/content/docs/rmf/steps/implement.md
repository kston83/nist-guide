---
title: 'Step 3: Implement'
description: Building controls and documenting the as-built system, tasks I-1 and I-2, with the evidence assessors ask for.
sidebar:
  label: '3 Implement'
  order: 3
---

Implement builds the controls the SSP promised and then rewrites the SSP to describe what was actually built. Task I-2 is the one teams skip, and a plan that no longer matches the system is the most common reason assessments go badly. Source: [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final), section 3.4.

## Tasks

| Task | What it means in practice | Primary role | Output |
| --- | --- | --- | --- |
| I-1 Control implementation | Build, configure and operate the controls in the SSP, using secure engineering practices | System owner, CCP | Implemented controls |
| I-2 Update control implementation information | Record the as-built state: changes from plan, configuration baselines, status per control | System owner, CCP | As-built SSP, baseline configurations |

## How to apply it

**Harden from a published baseline.** Configure every component to a recognized secure configuration: DISA STIGs (required in DoD), CIS Benchmarks or checklists from the [National Checklist Program](https://ncp.nist.gov/). Document deviations with a reason; these become [CM-6](/controls/cm/cm-6/) evidence.

**Engineer security in.** Use [SP 800-160 Vol. 1 Rev. 1](https://csrc.nist.gov/pubs/sp/800/160/v1/r1/final) for systems security engineering. For software you build, follow the Secure Software Development Framework ([SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final)) and keep a software bill of materials. Release 5.2.0 of SP 800-53 added controls on secure updates and root-cause analysis ([SI-2(7)](/controls/si/si-2/#si-2.7)), so patch pipelines are now in scope.

**Use validated cryptography.** Encryption that protects federal information must use FIPS 140-validated modules ([SC-13](/controls/sc/sc-13/)). Keep the certificate numbers; assessors ask for them.

**Operate the procedures, not just the tools.** Run an incident response tabletop, test the contingency plan, complete an access review and deliver awareness training before assessment. Assessors test that procedures happen, and a first-ever run during the assessment rarely goes well.

**Build the evidence as you go.** Keep an evidence folder per control, named by control ID, with dated artifacts. The table lists what assessors most often request.

| Area | Evidence assessors typically request |
| --- | --- |
| Access control (AC) | Account list with roles, last access review record, privileged-user list, session lock settings |
| Audit (AU) | Log sources and retention settings, sample log review records, time sync configuration |
| Configuration (CM) | Baseline configurations, STIG or benchmark scan results, change tickets with approvals, inventory |
| Contingency (CP) | Contingency plan, business impact analysis, test or exercise report, backup job results |
| Identification (IA) | MFA configuration, password or authenticator settings, PIV or SSO integration |
| Incident response (IR) | IR plan, tabletop after-action report, reporting contacts |
| Risk assessment (RA) | Recent authenticated vulnerability scans, risk assessment |
| Acquisition (SA) | SSDF attestation, software bill of materials, vendor security terms |
| Communications (SC) | Boundary protection rules, TLS configuration, FIPS 140 certificate numbers |
| Integrity (SI) | Patch status report, endpoint protection status, integrity monitoring alerts |

**Rewrite the SSP to as-built (task I-2).** Change each implementation statement from "will" to "does", update the status (implemented, partially implemented, planned) and record anything built differently from the plan. Update diagrams, inventory and ports and protocols to match.

**Run a self-assessment first.** Scan with authenticated vulnerability and configuration tools, walk through the SP 800-53A objectives on the control pages for high-risk controls, and fix what you find. Anything you cannot fix before assessment goes into a draft POA&M.

## Done when

- [ ] All controls built or configured as planned, or deviations recorded
- [ ] Components hardened to a named baseline with documented exceptions
- [ ] Procedures exercised at least once: IR tabletop, contingency plan test, access review, training
- [ ] Evidence folder populated for every control
- [ ] SSP, diagrams, inventory and ports and protocols updated to as-built
- [ ] Authenticated scans clean or open items in a draft POA&M
- [ ] Privacy controls in place: notices published, PIA approved

## Common findings

- SSP still written in the future tense.
- Inventory and scan targets do not match, so parts of the boundary were never scanned.
- STIG or benchmark exceptions exist but are not documented or approved.
- Unvalidated cryptography, or validated modules not running in FIPS mode.
- Contingency plan never tested.

## Key references

[SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) section 3.4, [SP 800-160 Vol. 1 Rev. 1](https://csrc.nist.gov/pubs/sp/800/160/v1/r1/final), [SP 800-218 SSDF](https://csrc.nist.gov/pubs/sp/800/218/final), [National Checklist Program](https://ncp.nist.gov/), [SP 800-128](https://csrc.nist.gov/pubs/sp/800/128/upd1/final) (configuration management), [SP 800-34 Rev. 1](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final) (contingency planning), [SP 800-161 Rev. 1](https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final) (supply chain).
