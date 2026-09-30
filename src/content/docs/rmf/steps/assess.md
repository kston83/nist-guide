---
title: 'Step 4: Assess'
description: Control assessment, the SAR and the POA&M, tasks A-1 to A-6, with SP 800-53A methods.
sidebar:
  label: '4 Assess'
  order: 4
---

Assess tells the AO whether the controls are implemented correctly, operating as intended and producing the desired outcome. Its outputs are the assessment report (SAR) and the plan of action and milestones (POA&M), the two documents the AO reads most closely. Source: [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final), section 3.5; procedures in [SP 800-53A Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final).

## Tasks

| Task | What it means in practice | Primary role | Output |
| --- | --- | --- | --- |
| A-1 Assessor selection | Pick an assessor or team with the right skills and independence | AO or AODR | Named assessor |
| A-2 Assessment plan | Scope, objectives, methods, schedule, sampling, rules of engagement | Control assessor; AO approves | [Security and privacy assessment plan (SAP)](/templates/plans/security-and-privacy-assessment-plan/) |
| A-3 Control assessments | Run the SAP and record a finding for each assessment objective | Control assessor | Findings |
| A-4 Assessment reports | Write up results, weaknesses and recommendations | Control assessor | [Security and privacy assessment reports (SAR)](/templates/reports/security-and-privacy-assessment-report/) |
| A-5 Remediation actions | Fix what you can; the assessor reassesses fixed items | System owner, CCP | Reassessed controls, updated SAR |
| A-6 Plan of action and milestones | Track every remaining weakness to closure | System owner, CCP | POA&M |

## How assessment works

SP 800-53A breaks each control into assessment objectives, the individual "determine if" statements shown at the bottom of every [control page](/controls/). Each objective is judged **satisfied** or **other than satisfied**; there is no partial credit at objective level.

Assessors use three methods. **Examine** reviews documents, configurations and records. **Interview** asks the people who operate the control. **Test** exercises mechanisms, for example trying a login after lockout. Depth and coverage (basic, focused or comprehensive) scale with the impact level and the AO's needs.

## How to apply it

**Agree independence early.** The AO decides how independent the assessor must be; higher impact systems usually need an assessor outside the system owner's chain. FedRAMP requires an accredited third-party assessment organization (3PAO); DoD components use designated security control assessor (SCA) teams.

**Make the SAP concrete.** A good SAP lists the controls and objectives in scope, the method for each, the sampling approach, the tools and scan credentials, the pen-test rules of engagement, the schedule and an evidence request list. Get AO approval before testing starts.

**Answer evidence requests from your folder.** If Implement was done well, most requests are a link to an existing artifact. Keep a request log with dates so delays are visible.

**Rate risk, not just pass or fail.** For each weakness the SAR should give likelihood, impact and a resulting risk level using [SP 800-30 Rev. 1](https://csrc.nist.gov/pubs/sp/800/30/r1/final), plus a recommendation. Scan findings are often rated with CVSS and adjusted for context.

**Remediate during the assessment.** Task A-5 lets you fix findings and have them re-tested before the SAR is final. Quick fixes (a setting, a missing record) should never reach the POA&M.

**Build a POA&M the AO can trust.** Each open weakness gets one entry. The fields below are common across agency and FedRAMP templates, rooted in OMB POA&M guidance.

| POA&M field | What to put in it |
| --- | --- |
| Weakness ID and description | Unique ID; what is wrong, in plain words |
| Source | SAR, scan, audit, incident or self-identified |
| Control and assessment objective | For example, AC-2(3) |
| Risk level | From the SAR, with any approved adjustment |
| Point of contact | A named person, not a team |
| Resources required | Funding, staff or vendor action needed |
| Scheduled completion date | Set by the risk level and agency deadlines |
| Milestones with dates | Interim steps that show progress |
| Milestone changes | Every slipped date, with reason |
| Status | Open, delayed, completed, or risk accepted |
| Deviation request | False positive, operational requirement or risk adjustment, with approval |

Remediation deadlines come from agency policy. As an example, FedRAMP Rev. 5 continuous monitoring required high-risk findings fixed within 30 days, moderate within 90 and low within 180; CISA's [Known Exploited Vulnerabilities catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) sets its own due dates for federal agencies.

## Done when

- [ ] Assessor named with independence the AO accepts
- [ ] SAP approved by the AO
- [ ] Every objective in scope has a satisfied or other-than-satisfied finding
- [ ] Penetration test done if required ([CA-8](/controls/ca/ca-8/) is in the High baseline; FedRAMP also requires it at Moderate)
- [ ] Fixed findings reassessed and closed in the SAR
- [ ] SAR (and privacy assessment report, if separate) final
- [ ] Every remaining weakness in the POA&M with owner, dates and milestones

## Common findings

- Assessor tests against the plan, and the plan no longer matches the system.
- Sampling so thin the AO cannot rely on the result.
- POA&M entries with no milestones, or completion dates that are years out.
- Inherited controls "assessed" by assuming the provider's authorization covers the hybrid part.
- Scan results older than the agency's freshness limit.

## Key references

[SP 800-53A Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final), [SP 800-115](https://csrc.nist.gov/pubs/sp/800/115/final) (technical testing), [SP 800-30 Rev. 1](https://csrc.nist.gov/pubs/sp/800/30/r1/final), [CISA KEV catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog), [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) section 3.5.
