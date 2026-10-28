---
title: Contingency Plan After-Action Report
type: report
description: The report of a contingency plan test, exercise or real activation, with findings, evaluation against objectives and corrective actions, based on the sample after-action reports in NIST SP 800-84.
controls: [cp-4, cp-2]
status: draft
stage: operate
role: system-owner
---

:::guidance
Write this report after every contingency plan test and every real activation of the plan. Its sections follow the sample after-action reports in [NIST SP 800-84](https://csrc.nist.gov/pubs/sp/800/84/final) (September 2006, current as of September 2026): introduction, scope, objectives, scenario, findings and evaluation results. Assessors look for two things: that findings led to corrective actions, and that the lessons changed the plan, the training or the next test (CP-2g).
:::

| System | Event | Date | Report author | Report date |
| --- | --- | --- | --- | --- |
| {{fill:system name and identifier}} | {{fill:tabletop exercise, functional exercise or actual activation}} | {{fill:date}} | {{fill:name and title}} | {{fill:date}} |

## 1. Introduction

{{fill:what was tested or what happened, why, and who took part; reference the test plan for a test}}

## 2. Scope

{{fill:the components, sites, teams and plan sections involved}}

## 3. Objectives and evaluation results

| Objective | Met? | Observed result |
| --- | --- | --- |
| {{fill:objective from the test plan}} | {{fill:met, partly met or not met}} | {{fill:what happened, with times against the RTO and RPO where measured}} |

## 4. Scenario and timeline

{{fill:the scenario, or for a real event what happened}}

| Time | Event or action |
| --- | --- |
| {{fill:time}} | {{fill:event or action}} |

## 5. Findings

### 5.1 General findings

{{fill:overall observations, including what worked well}}

### 5.2 Specific findings and recommendations

| ID | Finding | Recommendation | Owner | Due date | Tracking reference |
| --- | --- | --- | --- | --- | --- |
| {{fill:ID}} | {{fill:finding}} | {{fill:recommended action}} | {{fill:role}} | {{fill:date}} | {{fill:plan of action and milestones item or ticket}} |

## 6. Plan, training and test changes

The results were reviewed by {{fill:who}} on {{fill:date}} (CP-4b). These changes follow from them (CP-2e, CP-2g, CP-4c):

- **Contingency plan:** {{fill:sections to update, or "none"}}
- **Contingency training:** {{fill:changes, or "none"}}
- **Next test:** {{fill:what the next test should cover}}

## 7. Supporting data

{{fill:logs, screenshots, restore times, sign-in sheets and other evidence, or where they are kept}}

## 8. Approval

The {{org:system-owner}} approves this report. Each approval, review and change is recorded under Approval and version history at the end of this report.

## Approval and version history

{{org:name}} records here the approval of each version of this document and each review of it, including a review that changes nothing. This is the record of the approval, review and update that SP 800-53 Rev. 5 asks for: item c of each family's -1 control for policies and procedures (for example AC-1c), PM-1a.4 and PM-1b for the information security program plan, and PL-2a.15, PL-2c and PL-2d for system plans.

:::guidance
Assessors ask for evidence that a document was approved, and that it was reviewed and updated on its cycle and after the events its review section names. This section is that evidence. It is the same in every template in the kit, so the records read alike across the program. Between them, the two tables hold what [NIST SP 800-18 Rev. 2](https://csrc.nist.gov/pubs/sp/800/18/r2/final) (June 2026, section 3.2) says system plan approval, review records and change records include: the approvers' full names, roles, organizational titles, signatures and signature dates; who reviewed the plan, when, and the outcome; and for each change, its date, revision, who made it, the sections affected and what changed. Add a version history row for every review, including one that changes nothing: keep the version number, write "Reviewed, no change", and say what prompted the review, the scheduled cycle or an event. SP 800-18 Rev. 2 notes that document management systems can capture the signatures electronically; an approval recorded that way can stand in for the Signature column.
:::

### Approval

| Version | Name, role and title | Signature | Date |
| --- | --- | --- | --- |
|  |  |  |  |

### Version history

| Version and date | Review or change (what, where and why) | By (name and role) | Approved by |
| --- | --- | --- | --- |
|  |  |  |  |
