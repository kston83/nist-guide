---
title: Contingency Plan Test Plan
type: plan
description: The plan for one contingency plan test or exercise, tabletop or functional, with objectives, scenario, participants and evaluation, based on the sample exercise documentation in NIST SP 800-84.
controls: [cp-4, cp-4.1, cp-4.2, cp-3.1, cp-9.2]
status: draft
stage: operate
role: system-owner
typical:
  cp-04_odp.01: annually
  cp-04_odp.02: 'a functional test that restores the system, or a representative part of it, from backup'
  cp-04_odp.03: 'a tabletop exercise that walks the contingency team through the plan'
---

:::guidance
[NIST SP 800-84](https://csrc.nist.gov/pubs/sp/800/84/final), Guide to Test, Training, and Exercise Programs for IT Plans and Capabilities (September 2006, current as of September 2026), describes two kinds of exercise. A tabletop exercise is discussion-based: the team talks through its roles and the plan in response to a scenario. A functional exercise lets personnel validate their readiness in a simulated operational environment, for example by actually restoring the system. Its appendices give sample documents for each; this template draws on their sections. Record the results in a [contingency plan after-action report](/templates/reports/contingency-plan-after-action-report/).
:::

| System | Test type | Test date | Test lead | Plan version tested |
| --- | --- | --- | --- | --- |
| {{fill:system name and identifier}} | {{fill:tabletop or functional}} | {{fill:date}} | {{fill:name and title}} | {{fill:version}} |

## 1. Introduction

The contingency plan is tested {{param:cp-04_odp.01}}, using {{param:cp-04_odp.02}} to determine its effectiveness and {{param:cp-04_odp.03}} to determine readiness to execute it (CP-4a). This test is {{fill:which of those tests this is, and why it was chosen}}.

## 2. Scope and concept of operations

| Item | Description |
| --- | --- |
| In scope | {{fill:components, sites, teams and plan sections tested}} |
| Out of scope | {{fill:what is not tested}} |
| Location | {{fill:where the test takes place, including the alternate processing site for High systems (CP-4(2))}} |
| Safeguards | {{fill:how production is protected during a functional test, and who can stop the test}} |
| Related plans | {{fill:related plans and the teams responsible for them, involved in this test (CP-4(1))}} |

## 3. Objectives

| Objective | How it is measured |
| --- | --- |
| {{fill:for example the team activates the plan and notifies everyone within 1 hour}} | {{fill:measure}} |
| {{fill:for example the database is restored from backup within the RTO and to the RPO (CP-9(2))}} | {{fill:measure}} |
| {{fill:for example personnel at the alternate site can reach the resources they need (CP-4(2))}} | {{fill:measure}} |

## 4. Participants

| Role | Name | Test role |
| --- | --- | --- |
| Test lead or facilitator | {{fill:name}} | Runs the test |
| {{fill:contingency role}} | {{fill:name}} | Player |
| Observer or evaluator | {{fill:name}} | Records what happens against the objectives |

## 5. Agenda

| Time | Activity |
| --- | --- |
| {{fill:time}} | Briefing: objectives, rules and safeguards |
| {{fill:time}} | Scenario and exercise |
| {{fill:time}} | Debrief (hotwash) |

## 6. Scenario and injects

**Scenario:** {{fill:the event that triggers the plan, for example ransomware encrypts the primary database server at the start of the business day}}

| Time or step | Inject or action | Expected response |
| --- | --- | --- |
| {{fill:time or step}} | {{fill:new information given to players, or a recovery action to perform}} | {{fill:what the plan says should happen}} |

:::guidance
For a tabletop exercise, write questions for the facilitator to ask at each step, such as who decides to activate the plan and how the team knows the backups are clean. For a functional exercise, list the actions to perform and the validation checks, and use simulated events so personnel practice the response under realistic pressure (CP-3(1)).
:::

## 7. Debrief questions

- {{fill:for example what worked well}}
- {{fill:for example where the plan was unclear or out of date}}
- {{fill:for example what slowed recovery}}

## 8. Evaluation

The evaluators record, for each objective, whether it was met and what they observed. The results, findings and recommendations go in the after-action report, and corrective actions are tracked to completion (CP-4b, CP-4c).

## 9. Approval

The {{org:system-owner}} approves this test plan. Each approval, review and change is recorded under Approval and version history at the end of this plan.

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
