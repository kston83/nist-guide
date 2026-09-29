---
title: Security and Privacy Assessment Report
type: report
description: The results of one control assessment, with a finding of satisfied or other than satisfied for each control and the evidence behind it, following the key elements in SP 800-53A Rev. 5 Appendix E; its findings feed the POA&M (CA-5) and the authorization package (CA-6).
controls: [ca-2, ca-2.1, ca-5, ca-6, ca-7]
status: draft
stage: operate
typical:
  ca-02_odp.02: 'the authorizing official, the system owner and the Chief Information Security Officer'
  ca-05_odp: 'at least monthly, and whenever an assessment, audit, scan or monitoring activity finds a new weakness'
---

:::guidance
This report records what the assessors found when they carried out the [Security and Privacy Assessment Plan](/templates/plans/security-and-privacy-assessment-plan/). Its contents follow Appendix E, Assessment Reports, of [NIST SP 800-53A Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final) (January 2022, updated by release 5.2.0 in August 2025; current as of September 2026): a summary of every control assessed and its overall status, then the detail for each control. The report is one of the documents in the authorization package, with the security and privacy plans, the [plan of action and milestones](/templates/forms/plan-of-action-and-milestones/) and an executive summary. Findings are facts: the assessor reports what was found and recommends, and the organization decides the risk response afterward. Information already in the security plan, risk assessment or plan of action and milestones need not be repeated here.
:::

| System name | System identifier | Security categorization | Assessment dates | Report version | Lead assessor |
| --- | --- | --- | --- | --- | --- |
| {{fill:system name, or the common controls assessed}} | {{fill:unique system identifier}} | {{fill:low, moderate or high}} | {{fill:first and last day}} | {{fill:draft or final, with version}} | {{fill:name and organization}} |

## 1. Executive summary

- **Assessment:** {{fill:the reason for the assessment, for example initial authorization, and whether it was complete or partial}}
- **Results:** {{fill:the number of controls assessed, the number satisfied, and the number other than satisfied}}
- **Most significant weaknesses:** {{fill:the weaknesses that matter most to the authorizing official, one or two sentences each}}
- **Assessor's recommendations:** {{fill:the priorities for correction, in order}}

## 2. Assessment information

| Item | Description |
| --- | --- |
| Assessment plan | {{fill:plan version and the date the authorizing official or designated representative approved it}} |
| Sites assessed and dates | {{fill:sites, environments and dates}} |
| Assessors and independence | {{fill:names, organizations, and the independence the authorizing official required (CA-2(1))}} |
| Changes from the plan | {{fill:controls, methods or dates that changed, and why, or "none"}} |
| Previous results reused | {{fill:the controls, the earlier assessment and its date, or "none"}} |
| Inherited common controls | {{fill:the provider assessments relied on, with their dates}} |
| Limitations | {{fill:anything the assessors could not see or test, and its effect on the findings}} |

## 3. Summary of results

Every control and control enhancement assessed, with its overall status (CA-2e):

| Control or enhancement | Implementation (system-specific, hybrid or inherited) | Methods used | Overall result | Finding IDs |
| --- | --- | --- | --- | --- |
| {{fill:for example AC-2}} | {{fill:implementation}} | {{fill:examine, interview, test}} | {{fill:satisfied or other than satisfied}} | {{fill:IDs from section 4, or "none"}} |

## 4. Findings

Each determination statement in the assessment procedures produced a finding of "satisfied" or "other than satisfied". A statement the assessors could not determine, for example because evidence was not provided or a parameter is not defined, is recorded as other than satisfied, with the reason.

| Finding ID | Control and determination statement | Methods and objects | Depth and coverage | Result | Assessor comments | Potential impact | Recommendation | Severity |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:ID}} | {{fill:for example AC-02d.01}} | {{fill:what was examined, who was interviewed, what was tested}} | {{fill:for example focused, focused}} | {{fill:satisfied or other than satisfied}} | {{fill:for other than satisfied: which part of the control is affected, and how the actual state differs from the expected state}} | {{fill:the potential for compromise of confidentiality, integrity or availability, or the privacy risk}} | {{fill:the recommended correction or improvement}} | {{fill:the organization's severity scale, if it defines one}} |

:::guidance
SP 800-53A lets organizations define severity subcategories for "other than satisfied" findings, which helps the authorizing official and the risk assessment prioritize. Keep the evidence behind each determination: NIST expects organizations to retain enough of the assessment records to support an audit trail and reuse of evidence, even though the full set does not go in the report.
:::

## 5. Privacy control results

{{fill:for a system that processes personally identifiable information, the privacy control results and the privacy risks they indicate, or a reference to a separate privacy assessment report; otherwise "the system does not process personally identifiable information"}}

## 6. Weaknesses corrected before the final report

The {{org:system-owner}} reviewed the draft report and corrected the weaknesses below. The assessors reassessed each control before issuing this final report.

| Finding ID | Correction made | Date reassessed | Result after reassessment |
| --- | --- | --- | --- |
| {{fill:ID}} | {{fill:correction}} | {{fill:date}} | {{fill:satisfied or other than satisfied}} |

:::guidance
SP 800-53A lets the system owner act on the assessor's recommendations, or clarify misunderstandings, before the report is final, and requires the assessor to reassess any control changed in that time. This is a chance to fix quick items, not a replacement for the formal risk response that follows the final report.
:::

## 7. From findings to action

- The {{org:system-owner}} shall enter each weakness found in this assessment, and not corrected under section 6, in the system's [plan of action and milestones](/templates/forms/plan-of-action-and-milestones/), unless the authorizing official accepts the risk (RA-7). (CA-5a)
- The {{org:system-owner}} shall update the plan of action and milestones {{param:ca-05_odp}}, including the items this report adds. (CA-5b)
- The {{org:system-owner}} shall include this report in the authorization package, with the security and privacy plans, the plan of action and milestones and an executive summary, for the authorizing official's decision. (CA-6c.2)
- The {{org:system-owner}} shall update the security and privacy plans where the assessment showed that the implementation differs from what they describe. (CA-2)

| Finding ID | Plan of action and milestones item, or risk acceptance reference |
| --- | --- |
| {{fill:ID}} | {{fill:item ID or acceptance reference and date}} |

## 8. Distribution

The results of this assessment are provided to {{param:ca-02_odp.02}} (CA-2f). For a system that processes personally identifiable information, the privacy control results are also provided to the {{org:privacy-official}} (CA-2f). This report describes the system's weaknesses: it is marked {{fill:the organization's handling marking}} and shared only with these recipients and the people they designate.

| Recipient | Date provided |
| --- | --- |
| {{fill:name and title}} | {{fill:date}} |

:::federal
[OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.c(13), requires agencies to conduct and document assessments of all selected and implemented security and privacy controls. Section 4.c(15) requires plans of action and milestones for weaknesses and deficiencies not associated with accepted risks, available to OMB, DHS, inspectors general and the U.S. Government Accountability Office on request. Section 5.f requires the agency to consider the Senior Agency Official for Privacy's input in the authorization decision. As of September 2026.

- The {{org:system-owner}} shall record in the plan of action and milestones each weakness in this report that is not associated with an accepted risk, as OMB Circular A-130, Appendix I, section 4.c(15), requires. (CA-5a)
- For a system that processes personally identifiable information, the lead assessor shall provide the privacy control results to the Senior Agency Official for Privacy in time to inform the authorization decision, as OMB Circular A-130, Appendix I, section 5.f, requires. (CA-2f)

:::

## 9. Assessor signature

The findings in this report are an impartial record of what the assessors found.

| Name | Role | Signature | Date |
| --- | --- | --- | --- |
| {{fill:name}} | Lead assessor | | {{fill:date}} |

## Appendix A. Evidence and sources

{{fill:the documents examined, the people interviewed by role, and the tests run with tool names and versions, or where the assessment records are kept}}

## Appendix B. Scan and test results

{{fill:the vulnerability and configuration scan results and any penetration test report, or where they are kept}}
