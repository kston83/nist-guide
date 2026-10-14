---
title: Tabletop Exercise Kit
type: plan
description: Everything for one incident response tabletop exercise, from planning and logistics through the facilitator guide, participant guide, scenarios with injects, the debrief and the after-action report, based on the sample tabletop exercise documentation in NIST SP 800-84.
controls: [ir-3, ir-3.2, ir-2.3, ir-4, ir-8]
status: draft
stage: core
typical:
  ir-03_odp.01: annually
  ir-03_odp.02: 'a tabletop exercise based on a realistic scenario, and a functional test of notification and escalation'
---

:::guidance
[NIST SP 800-84](https://csrc.nist.gov/pubs/sp/800/84/final), Guide to Test, Training, and Exercise Programs for IT Plans and Capabilities (September 2006; current as of October 2026), section 4.3, says a tabletop exercise usually has four documents: a briefing with the agenda and logistics, a facilitator guide, a participant guide, and an after-action report written afterwards. Its Appendix A gives a sample of each. This kit puts all four in one template, so the exercise and its results stay together as the evidence IR-3 asks for: Part A plans the exercise, Part B is the facilitator guide, Part C the participant guide, Part D the debrief, and Part E the after-action report. Part B offers three scenarios; use one per exercise and write your own as the program matures. SP 800-84 section 4.3 warns that long, detailed scenarios pull discussion away from the objectives, so keep each one short. The typical values come from the IR-3 clause; keep them in step. For a contingency plan test, use the [contingency plan test plan](/templates/plans/contingency-plan-test-plan/) and [after-action report](/templates/reports/contingency-plan-after-action-report/), which follow the same structure.
:::

| Exercise title | Date | Facilitator | Plan exercised and version | Status |
| --- | --- | --- | --- | --- |
| {{fill:exercise title}} | {{fill:date}} | {{fill:name and title}} | {{fill:for example Incident Response Plan, version and date}} | {{fill:planned, held, or report approved}} |

## Part A. Exercise plan

### A.1 Purpose and scope

The incident response capability is tested {{param:ir-03_odp.01}} using {{param:ir-03_odp.02}} (IR-3). This exercise validates {{org:name}}'s Incident Response Plan and incident handling playbook: whether the plan's content works in practice, whether participants know their roles and responsibilities, and whether the dependencies the plan names are accurate and current.

| Item | Description |
| --- | --- |
| Scenario | {{fill:scenario chosen from Part B, or your own}} |
| Level | {{fill:senior-level, operational, or combined}} |
| Systems and teams in scope | {{fill:systems, sites and teams the scenario involves}} |
| Related plans exercised | {{fill:related plans and the teams responsible for them, for example the contingency plan and the crisis communications plan (IR-3(2))}} |
| Out of scope | {{fill:what is not tested}} |
| Previous exercise and its open actions | {{fill:date, and the actions from its after-action report still open}} |

:::guidance
SP 800-84 section 4.2.2 has senior-level and operational teams exercise separately at first, then together to check coordination between them. Senior-level exercises run two to four hours and focus on decisions and oversight; operational exercises run two to eight hours and focus on procedures. Section 4.1 suggests holding the exercise soon after the participants are trained on their roles, and getting management's approval before it is scheduled. To meet IR-3(2) and CP-4(1) together, choose the ransomware scenario and invite the contingency plan's team, so the discussion runs from containment into recovery under the [contingency plan](/templates/plans/contingency-plan/).
:::

### A.2 Objectives and evaluation criteria

Set the criteria before the exercise, so the data collector knows what to record (SP 800-84 section 4.3).

| # | Objective | Evaluation criteria |
| --- | --- | --- |
| 1 | Validate that participants know their roles and responsibilities under the Incident Response Plan | {{fill:for example each role names its first three actions without prompting}} |
| 2 | Validate the escalation and declaration path, from first report to the decision on a major incident | {{fill:for example the group reaches the declaration decision and names who makes it}} |
| 3 | Validate the notification decisions: which outside parties must be told, by whom and by when | {{fill:for example the group identifies every party on the notification list that applies, with its deadline}} |
| 4 | Validate coordination with the related plans in scope (IR-3(2)) | {{fill:for example the contingency team names the point at which the contingency plan is started}} |
| 5 | Identify parts of the plan and playbook that need to change | {{fill:for example at least the gaps found are recorded as actions}} |
| 6 | {{fill:objective}} | {{fill:criteria}} |

### A.3 Participants and exercise staff

| Role in the exercise | Name | Role in the plan |
| --- | --- | --- |
| Facilitator | {{fill:name}} | Leads the discussion; knows the plan and the objectives |
| Data collector | {{fill:name}} | Records observations against the evaluation criteria |
| Logistics coordinator | {{fill:name}} | Runs the checklist in A.4 |
| Participant | {{fill:name}} | {{fill:role in the Incident Response Plan, for example incident response lead}} |
| Participant | {{fill:name}} | {{org:ciso}} |
| Participant | {{fill:name}} | {{org:privacy-official}} |
| Participant | {{fill:name}} | {{fill:other role, for example system owner, legal counsel, communications, contingency plan coordinator}} |

### A.4 Logistics checklist

Adapted from SP 800-84 Table 4-1. Start at least a month ahead, or three months for a large exercise (section 4.2).

| Task | Owner | Target date | Done |
| --- | --- | --- | --- |
| Get management approval for the date and participants | {{fill:name}} | {{fill:date}} | |
| Choose the date; book the room or the video meeting | {{fill:name}} | {{fill:date}} | |
| Name the facilitator and data collector; meet to review the objectives and the last exercise's results | {{fill:name}} | {{fill:date}} | |
| Invite participants in writing | {{fill:name}} | {{fill:date}} | |
| Prepare the briefing, the facilitator guide and the participant guides | {{fill:name}} | {{fill:date}} | |
| Send participant guides, if sent ahead (about a week before) | {{fill:name}} | {{fill:date}} | |
| Set up screens, name cards, and copies of the plan and playbook | {{fill:name}} | {{fill:date}} | |

### A.5 Agenda and briefing

| Time | Activity |
| --- | --- |
| {{fill:time}} | Welcome and introductions: each participant gives their name and role |
| {{fill:time}} | Briefing: purpose, scope, objectives and ground rules |
| {{fill:time}} | Scenario discussion, module by module |
| {{fill:time}} | Debrief (hotwash) |

Ground rules for the briefing: this is a discussion, not a test of individuals; answer as you would in a real incident, using the plan and playbook; say when the plan is unclear, since finding gaps is the purpose; what is said in the exercise stays in the exercise, except what goes in the after-action report.

## Part B. Facilitator guide

The facilitator guide holds the purpose, scope and objectives (Part A), the scenario, and the questions that steer the discussion to the objectives (SP 800-84 section 4.3). Choose one scenario. Present one module at a time; give each inject, then ask the questions until the objectives for that module are met. Tailor questions to the level: decisions and oversight for senior leaders, procedures for operational staff.

### B.1 Scenario 1: Ransomware

**Module 1. Detection.** At {{fill:time}} on a weekday, the security operations team sees an alert for unusual encryption activity on a file server that supports {{fill:a mission-critical service}}. Twenty minutes later, the service desk receives calls from users who cannot open shared files.

| Inject | Facilitator questions | Expected response, from the plan and playbook |
| --- | --- | --- |
| Users report files renamed with an unknown extension | Who is told first, and how? When is this declared an incident, and by whom? What severity? | Playbook 5.1 and 5.2: report form or case opened, team alerted, incident declared and severity set; system owner and CISO told |
| A ransom note appears on several servers | What do you contain first? Who approves isolating the servers? What happens to the backups? | Playbook 5.4 and section 6: isolate, protect backups by taking them offline; system owner approves |

**Module 2. Escalation.** By midday, analysis shows the attacker copied data from the file server before encrypting it. The data includes {{fill:a type of information the organization holds, for example customer records}}.

| Inject | Facilitator questions | Expected response, from the plan and playbook |
| --- | --- | --- |
| Data was copied out before encryption | Is this now a breach? Who decides? Who must be told outside the organization, and by when? | Playbook 5.2 step 3 and 5.8: privacy official engaged; notification list checked (5.7) |
| The service will be down for at least two days | When does the contingency plan start? Who decides? How do the incident and recovery teams coordinate? | Playbook 5.2 step 6 and 5.5; contingency plan activation (IR-4b, IR-3(2)) |
| An email arrives demanding payment | Who decides how to respond? Who may contact the attacker? | Playbook section 6: no contact or payment without the CISO and legal counsel |

**Module 3. Recovery and communication.**

| Inject | Facilitator questions | Expected response, from the plan and playbook |
| --- | --- | --- |
| A reporter calls asking about an outage | Who speaks for the organization? Who approves what is said? | Playbook 5.7 step 5: communications prepares; CISO approves |
| Backups are available from three days ago | How do you know they are clean? Who signs off before the system returns to production? | Playbook 5.5 steps 2 and 4 |

### B.2 Scenario 2: Compromised administrator account

**Module 1.** A cloud administrator's account signs in from an unfamiliar country at {{fill:time}}, adds a new multifactor device, and creates an access key. The administrator is on leave.

| Inject | Facilitator questions | Expected response, from the plan and playbook |
| --- | --- | --- |
| Sign-in alert from the identity provider | Who receives the alert? How quickly is it triaged? Who can disable the account at this hour? | Playbook 5.1 step 3, 5.2, and section 6 (account takeover); on-call coverage (IR-7) |
| The new access key was used to list storage buckets | How do you find out what was accessed? What evidence do you keep, and where? | Playbook 5.3 steps 1 to 4 |

**Module 2.**

| Inject | Facilitator questions | Expected response, from the plan and playbook |
| --- | --- | --- |
| Two other administrator accounts show the same sign-in pattern | How do you find every affected account? When is containment complete? | Playbook 5.3 step 2 and 5.4 |
| The cloud provider sends a notice about a campaign against its customers | How do you work with the provider? What do you share with them? | Playbook 5.7 step 4 and section 6 (supplier or cloud provider incident; IR-6(3)) |

### B.3 Scenario 3: Breach of personally identifiable information

Use this scenario for the breach exercise the IR-2(3) clause sets in each annual training cycle.

**Module 1.** An employee emails a spreadsheet to a personal email address to work from home. A colleague mentions it to their supervisor two days later. The spreadsheet holds {{fill:for example names, dates of birth and account numbers}} for about {{fill:number}} people.

| Inject | Facilitator questions | Expected response, from the plan and playbook |
| --- | --- | --- |
| The supervisor hears about it | Is this an incident? Must the supervisor report it, and how quickly? Is it a breach if no one outside saw it? | IR-2(3) training: report confirmed and suspected breaches within the reporting time; playbook 5.1 |
| The employee says they deleted it | What do you need to confirm? Who talks to the employee? | Playbook 5.8 steps 1 and 2; section 6 (insider or misuse): involve human resources and legal counsel |

**Module 2.**

| Inject | Facilitator questions | Expected response, from the plan and playbook |
| --- | --- | --- |
| The personal email account was itself compromised last month | How likely is harm now? What kinds of harm? | Playbook 5.8 step 3: harm assessment (IR-8(1)(b)) |
| Legal counsel asks which laws and contracts apply | Where is the list? Who decides whether to notify the individuals, and when? | Plan breach section; playbook 5.8 steps 4 and 5 (IR-8(1)(a), (c)) |
| The individuals live in several states or countries | Does that change who must be told, or how fast? | Applicable requirements list (IR-8(1)(c)) |
| Notices are approved | What do they say? What help is offered? Who answers the calls? | Playbook 5.8 steps 6 to 8 |

### B.4 Your own scenario

| Module | Inject | Facilitator questions | Expected response |
| --- | --- | --- | --- |
| {{fill:module}} | {{fill:new information given to participants}} | {{fill:questions tied to an objective in A.2}} | {{fill:what the plan or playbook says should happen}} |

:::guidance
Good scenarios come from the organization's own risk assessment and recent incidents, including incidents at others in the same sector. Rotate scenarios from year to year, and make sure at least one exercise each year reaches a decision about notifying outside parties; an exercise that stops at containment leaves the hardest decisions untested.
:::

## Part C. Participant guide

Give participants Part A (A.1, A.2 and A.5), the scenario's opening paragraph for each module, and these orientation questions, without the facilitator's questions and expected responses (SP 800-84 section 4.3).

- What is your role in the Incident Response Plan, and what would you do first?
- Who do you need to hear from, and who needs to hear from you?
- What decisions would you make, and what information would you need to make them?
- Where does the plan or playbook not match what you would really do?

## Part D. Debrief (hotwash)

Hold the debrief right after the discussion (SP 800-84 section 4.4). The data collector records the answers.

- What worked well, and which areas do you feel the team handles well?
- Where do you need more training?
- Which parts of the plan or playbook should be updated?
- Are there issues we did not discuss that we should have?
- How could the next exercise be better?

### Data collector's log

| Time | Objective | Observation | Plan or playbook section |
| --- | --- | --- | --- |
| {{fill:time}} | {{fill:objective number from A.2}} | {{fill:what was said or decided, and by whom}} | {{fill:section}} |

## Part E. After-action report

Write the report within {{fill:time, for example 10 business days}} of the exercise. SP 800-84 section 4.5 puts the debrief comments and the data collector's lessons learned in the report, with background on the exercise, the observations, and recommendations for the plan.

### E.1 Introduction

On {{fill:date}}, {{org:name}} held a {{fill:duration}}-hour tabletop exercise to validate its Incident Response Plan, using the {{fill:scenario}} scenario, with {{fill:number}} participants from {{fill:teams}}.

### E.2 Objectives and results

| # | Objective | Met? | What was observed |
| --- | --- | --- | --- |
| {{fill:number}} | {{fill:objective from A.2}} | {{fill:met, partly met, or not met}} | {{fill:observation against the evaluation criteria}} |

### E.3 Findings and recommendations

General findings: {{fill:overall observations, including what worked well}}

| ID | Finding | Recommendation | Owner | Due date | Tracking reference |
| --- | --- | --- | --- | --- | --- |
| {{fill:ID}} | {{fill:finding}} | {{fill:recommended action}} | {{fill:role}} | {{fill:date}} | {{fill:plan of action and milestones item or ticket}} |

### E.4 Changes that follow

The results were reviewed by {{fill:who}} on {{fill:date}}. These changes follow from them (IR-4c, IR-8c):

- **Incident Response Plan:** {{fill:sections to update, or none}}
- **Incident handling playbook:** {{fill:steps to update, or none}}
- **Training:** {{fill:changes to incident response training (IR-2), or none}}
- **Related plans:** {{fill:changes to the contingency plan or other related plans (IR-3(2)), or none}}
- **Next exercise:** {{fill:what the next exercise should cover, and its planned date}}

### E.5 Approval

| Name | Title | Signature | Date |
| --- | --- | --- | --- |
| {{fill:name}} | {{org:ciso}} | | {{fill:date}} |

:::guidance
Assessors look for three things in IR-3 evidence: the exercise met the stated frequency, the after-action report exists, and its actions were tracked to closure and changed the plan, playbook or training. A report with every objective "met" and no findings is a common finding in itself; ask what the exercise taught.
:::
