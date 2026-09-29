---
title: Security and Privacy Assessment Plan
type: plan
description: The plan for one control assessment of a system or of common controls, with its scope, SP 800-53A procedures and methods, environment, team, assessor independence, schedule and approval, as SP 800-53 CA-2 requires.
controls: [ca-2, ca-2.1, ca-2.2, ca-8, ca-7.1]
status: draft
stage: operate
typical:
  ca-02_odp.01: 'annually for a subset of controls set by the system''s continuous monitoring strategy, so every control is assessed at least every three years and within the authorization period'
  ca-02_odp.02: 'the authorizing official, the system owner and the Chief Information Security Officer'
---

:::guidance
The assessor writes this plan, and the authorizing official or a designated representative approves it before any testing starts (CA-2c). Its steps follow section 3.2 of [NIST SP 800-53A Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final), Assessing Security and Privacy Controls in Information Systems and Organizations (January 2022, updated by release 5.2.0 in August 2025; current as of September 2026): decide which controls to assess, select and tailor the assessment procedures, add procedures for any organization-specific controls, optimize the order, then finalize and approve the plan. SP 800-53A allows one integrated plan for security and privacy, or two separate plans. Record the results in a [Security and Privacy Assessment Report](/templates/reports/security-and-privacy-assessment-report/).
:::

| System | System identifier | Assessment type | Plan version | Prepared by |
| --- | --- | --- | --- | --- |
| {{fill:system name, or the common controls under assessment}} | {{fill:unique system identifier}} | {{fill:initial, annual, significant change or common control assessment}} | {{fill:version}} | {{fill:lead assessor name and organization}} |

## 1. Purpose

This assessment determines whether the controls in scope are implemented correctly, operating as intended and producing the desired outcome with respect to the system's security and privacy requirements (CA-2d).

- **Reason for this assessment:** {{fill:for example the initial authorization, this year's assessment under the continuous monitoring strategy, a significant change, or a reauthorization}}
- **Decision it supports:** {{fill:for example the authorizing official's decision to authorize the system, or the next ongoing authorization review}}
- **Assessment frequency:** the controls are assessed before the initial authorization, and {{param:ca-02_odp.01}} after it (CA-2d). This assessment covers {{fill:which part of that cycle, for example year 2 of 3}}.

## 2. Scope

| Item | Description |
| --- | --- |
| Authorization boundary | {{fill:the boundary, components, locations and environments, from the system security plan}} |
| Security categorization | {{fill:low, moderate or high, from the security categorization worksheet}} |
| Personally identifiable information | {{fill:whether the system processes it, and so whether privacy controls are in scope}} |
| Sites assessed | {{fill:the sites, data centers or cloud regions the assessors will visit or test}} |
| Out of scope | {{fill:anything excluded, and why}} |
| Security and privacy plans used | {{fill:plan titles, versions and dates}} |

### 2.1 Controls to be assessed

The controls and control enhancements under assessment are those in the table below (CA-2b.1). {{fill:state whether this is a complete assessment of every control in the security and privacy plans, or a partial assessment, and how the subset was chosen}}

| Control or enhancement | Implementation (system-specific, hybrid or inherited) | Provider of inherited part | Included in this assessment? | Reason |
| --- | --- | --- | --- | --- |
| {{fill:for example AC-2}} | {{fill:implementation}} | {{fill:common control provider, or "none"}} | {{fill:yes or no}} | {{fill:for example scheduled for this year in the continuous monitoring strategy}} |

:::guidance
A common control is assessed by the organization that provides it, not by each system that inherits it. For an inherited control, the assessor verifies only that the system really does inherit and use it, and cites the provider's assessment. SP 800-53A notes that a system assessment is not complete until the results for the common controls it depends on are available.
:::

## 3. Assessment procedures

The assessors use the assessment procedures in SP 800-53A Rev. 5, Chapter 4, for each control in scope, tailored as described below (CA-2b.2). Each procedure has determination statements, and each statement produces a finding of "satisfied" or "other than satisfied".

### 3.1 Methods and objects

| Method | What the assessor does | Typical objects in this assessment |
| --- | --- | --- |
| Examine | Reviews, inspects, observes, studies or analyzes specifications, mechanisms or activities | {{fill:for example policies, procedures, the system security plan, configuration exports, audit records}} |
| Interview | Holds discussions with individuals or groups to build understanding, clarify or obtain evidence | {{fill:for example the system owner, administrators, the system security officer, users}} |
| Test | Exercises activities or mechanisms under specified conditions to compare their actual state with the desired state or expected behavior | {{fill:for example authenticated vulnerability scans, configuration compliance scans, account and access tests}} |

### 3.2 Tailoring

| Item | Decision for this assessment |
| --- | --- |
| Depth (basic, focused or comprehensive) | {{fill:the depth for each method, set by the security categorization and the assurance the authorizing official needs}} |
| Coverage (basic, focused or comprehensive) | {{fill:the number and types of objects, and how samples are drawn, for example the sample size for accounts, servers and changes, and how each sample is selected}} |
| Organization-specific controls | {{fill:controls in the plans that are not in SP 800-53, with the procedures written for them, or "none"}} |
| System- or platform-specific procedures | {{fill:adaptations for the system's technologies, for example cloud service or container platform checks}} |
| External providers | {{fill:how evidence is obtained for controls an external provider implements, for example its own assessment report under the contract}} |

### 3.3 Reuse of previous results

| Control | Previous assessment, date and assessor | Why it is still valid | Additional testing needed |
| --- | --- | --- | --- |
| {{fill:control}} | {{fill:source}} | {{fill:no relevant change since, recent enough, obtained with the same independence}} | {{fill:none, or what is added}} |

:::guidance
SP 800-53A lists three things to weigh before reusing a result: changes to the system or its environment since, how much time has passed, and whether the earlier assessment had the independence this one needs. A self-assessment cannot be reused where independence is required. Continuous monitoring results (CA-7) from this assessment period are the most common reuse.
:::

### 3.4 Order of assessment

{{fill:the sequence, for example the controls that describe the system first (PL-2, RA-2, RA-3, CM-2, CM-8), then related controls together, such as AC-19, MP-4 and MP-5}}

## 4. Assessment environment

The assessment environment is described below (CA-2b.3).

| Item | Description |
| --- | --- |
| Environments tested | {{fill:production, or a test environment that matches it, and why}} |
| Assessor access | {{fill:the accounts, network access and physical access the assessors get, and when they are removed}} |
| Tools | {{fill:scanning and testing tools, with versions and configuration profiles}} |
| Safeguards | {{fill:how production is protected during testing, and who can stop a test}} |
| Handling of assessment evidence | {{fill:where evidence and results are stored, who can see them, and how long they are kept}} |

## 5. Assessment team, roles and responsibilities

| Role | Name and organization | Responsibilities |
| --- | --- | --- |
| Lead assessor | {{fill:name}} | Writes this plan, leads the assessment and signs the report |
| Assessor | {{fill:name}} | Carries out the procedures assigned in this plan |
| {{org:system-owner}} | {{fill:name}} | Provides documentation, access and people; reviews the draft report |
| System security officer | {{fill:name}} | Coordinates evidence and interviews |
| {{org:privacy-official}} or delegate | {{fill:name}} | Coordinates the privacy control assessment, where in scope |
| Authorizing official or designated representative | {{fill:name}} | Sets the required independence and approves this plan |

The assessors have the skills and technical knowledge that this type of assessment and the system's technologies call for (CA-2a): {{fill:relevant qualifications and experience with the system's technologies}}.

### 5.1 Assessor independence

The authorizing official has set the required level of independence as {{fill:for example an internal assessment team outside the system's development, operation and management chain, or a third-party assessor that the system owner does not contract or direct}} (CA-2(1)). The assessors confirm that:

- they do not develop, operate, sustain or manage the system, and do not assess their own work;
- they have no actual or perceived conflict of interest with the system or with the determination of control effectiveness;
- where contracted, the {{org:system-owner}} was not directly involved in the contracting and cannot unduly influence their work or findings.

Ongoing assessments under the continuous monitoring strategy meet the same independence (CA-7(1)).

:::guidance
SP 800-53A has the authorizing official decide the required independence from the system's security categorization and risk, and judge whether it is enough to trust the results. It treats contracted assessors as independent when the system owner is not directly involved in the contracting and cannot unduly influence them. Where an organization is so small that every possible assessor is in the system owner's chain, independence can instead come from an independent team of experts that reviews the results for completeness, consistency and accuracy.
:::

## 6. Specialized assessments and penetration testing

Complete this section when the system is in the High baseline or the continuous monitoring strategy calls for it; otherwise write "not included".

- **Specialized assessments (CA-2(2)):** {{fill:the methods, for example announced vulnerability scanning, malicious user testing, insider threat assessment, or data leakage assessment, and whether they are announced or unannounced}}
- **Penetration testing (CA-8):** {{fill:scope, testing team and its independence (CA-8(1)), and dates}}
- **Rules of engagement:** approved by the authorizing official before testing begins, covering scope, timing, methods allowed, contacts and how testing is stopped: {{fill:reference to the approved rules of engagement}}

## 7. Schedule and milestones

| Milestone | Planned date | Responsible |
| --- | --- | --- |
| Plan approved | {{fill:date}} | Authorizing official or designated representative |
| Kickoff and document requests | {{fill:date}} | Lead assessor |
| Examine and interview | {{fill:dates}} | Assessors |
| Testing | {{fill:dates}} | Assessors |
| Draft report to the {{org:system-owner}} | {{fill:date}} | Lead assessor |
| System owner review and any corrections reassessed | {{fill:dates}} | {{org:system-owner}}, assessors |
| Final report delivered | {{fill:date}} | Lead assessor |

## 8. Communication and issue handling

- **Points of contact:** {{fill:the named contacts on each side for access, evidence and escalation}}
- **Status updates:** {{fill:for example a short daily check-in during testing}}
- **Urgent findings:** a finding that poses an immediate risk, such as an exploitable critical vulnerability, is reported to the {{org:system-owner}} and the {{org:ciso}} {{fill:how quickly, for example the same day}}, without waiting for the report.
- **Disagreements:** questions about how a control is implemented, or about a finding, are raised during the assessment and settled by {{fill:how, for example a review meeting with the lead assessor and the system security officer}}, so the report records facts both sides have seen.

## 9. Deliverables and distribution

- The assessors produce an assessment report that records whether each control assessed is satisfied or other than satisfied, and the evidence for each result (CA-2e).
- The results go to {{param:ca-02_odp.02}} (CA-2f), and privacy control results also go to the {{org:privacy-official}}.
- This plan, the report and the evidence describe the system's weaknesses. They are marked and stored as {{fill:the organization's handling marking}} and shared only with the people named here.

:::federal
The Federal Information Security Modernization Act requires periodic testing and evaluation of the effectiveness of information security policies, procedures and practices, "to be performed with a frequency depending on risk, but no less than annually", covering every system in the agency's inventory ([44 U.S.C. § 3554(b)(5)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title44-section3554&num=0&edition=prelim)). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.c(13) and (14), requires agencies to assess all selected and implemented controls before operation and periodically after, at the frequency their information security and privacy continuous monitoring strategies set. Section 5.e explains that this does not mean every control is assessed every year: the strategies define the controls selected for assessment in each one-year period, the "annual assessment window", which assumes an initial authorization in which all controls were assessed. As of September 2026.

- The lead assessor shall confirm that the controls in scope match the controls the continuous monitoring strategy selects for this annual assessment window, or that the assessment covers every control for an initial authorization. (CA-2d)
- The lead assessor shall include automated tools among the test methods where they apply, as 44 U.S.C. § 3554(b)(5) requires. (CA-2d)

:::

## 10. Approval

The authorizing official or designated representative has reviewed this plan, confirmed that the assessors' independence is sufficient, and approves the assessment to begin (CA-2c, CA-2(1)).

| Name | Title | Signature | Date |
| --- | --- | --- | --- |
| {{fill:name}} | {{fill:authorizing official or designated representative}} | | {{fill:date}} |
| {{fill:name}} | Lead assessor | | {{fill:date}} |
| {{fill:name}} | {{org:system-owner}} | | {{fill:date}} |
