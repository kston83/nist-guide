---
title: Security and Privacy Training Plan
type: plan
description: The organization's plan for security and privacy literacy training, awareness activities and role-based training, with audiences, courses, schedule and tracking, as SP 800-53 AT-2, AT-3 and AT-4 require.
controls: [at-2, at-2.2, at-2.3, at-3, at-3.5, at-4, pm-13, pm-14]
status: draft
stage: core
typical:
  at-02_odp.01: annually
  at-02_odp.02: annually
  at-02_odp.05: 'phishing simulations, short awareness messages and posters'
  at-02_odp.06: annually
  at-02_odp.07: 'a significant incident, or a significant change in threats'
  at-03_odp.03: annually
  at-03_odp.04: annually
---

:::guidance
The training plan turns the awareness and training policy into a schedule: who gets which course, when, how completion is tracked, and how content stays current. Keep it short and keep the course tables accurate; assessors test it by picking a few users and roles and checking their records against it. It also serves as the organization's training plan under PM-14. [NIST SP 800-50 Rev. 1](https://csrc.nist.gov/pubs/sp/800/50/r1/final), Building a Cybersecurity and Privacy Learning Program (September 2024, current as of September 2026), describes how to plan, build and run such a program; it replaced SP 800-50 (2003) and SP 800-16.
:::

| Plan owner | Approved by | Version | Effective date |
| --- | --- | --- | --- |
| {{org:ciso}} | {{fill:name and title}} | {{fill:version}} | {{fill:date}} |

## 1. Purpose and scope

This plan sets out how {{org:name}} gives every system user security and privacy literacy training, keeps them aware between courses, and gives people in security and privacy roles the training their duties need. It covers employees, contractors, managers and senior executives with access to organizational systems or information.

## 2. Roles

| Role | Responsibilities |
| --- | --- |
| {{org:ciso}} | Owns this plan and the security content; reports completion |
| {{org:privacy-official}} | Owns the privacy content and privacy role-based training |
| {{org:hr-office}} | Tells the training team about new hires, role changes and departures |
| {{org:supervisor}} | Makes sure their staff complete training on time |
| {{org:account-manager}} | Checks that initial training is complete before creating an account |
| {{fill:training administrator, for example the learning management system team}} | Assigns courses, sends reminders and keeps the training records |

## 3. Literacy training for all users

Every user completes the courses below before being given access, and security literacy training {{param:at-02_odp.01}} and privacy literacy training {{param:at-02_odp.02}} after that (AT-2a.1).

| Course | Covers | Audience | When | Length and format |
| --- | --- | --- | --- | --- |
| {{fill:security and privacy awareness course}} | {{fill:for example acceptable use and the rules of behavior, passwords and multifactor authentication, phishing and social engineering (AT-2(3)), insider threat indicators (AT-2(2)), handling personally identifiable information, reporting incidents}} | All users | {{fill:before access, then at the refresher interval}} | {{fill:for example 45 minutes online, with a short test}} |
| {{fill:course}} | {{fill:topics}} | {{fill:audience}} | {{fill:when}} | {{fill:length and format}} |

Users also receive training when system changes require it, or after the events the awareness and training policy names (AT-2a.2), for example {{fill:a new system, a change to how users sign in, or an incident caused by user error}}.

## 4. Awareness activities

Between courses, the organization keeps security and privacy in view through {{param:at-02_odp.05}} (AT-2b).

| Activity | Audience | Frequency | Measure |
| --- | --- | --- | --- |
| {{fill:for example phishing simulation}} | {{fill:all users}} | {{fill:for example monthly}} | {{fill:for example report rate and click rate}} |
| {{fill:for example awareness newsletter or message}} | {{fill:all users}} | {{fill:for example monthly}} | {{fill:measure, if any}} |

## 5. Role-based training

People in the roles below complete role-based training before being authorized to access the system or information, or to perform their duties, and {{param:at-03_odp.03}} after that, and when system changes require it (AT-3a).

| Role | Security or privacy | Course or training | Source | Hours |
| --- | --- | --- | --- | --- |
| {{fill:for example system administrator}} | {{fill:security}} | {{fill:for example secure configuration and privileged account use}} | {{fill:internal, vendor or external}} | {{fill:hours}} |
| {{fill:for example developer}} | {{fill:security}} | {{fill:for example secure coding}} | {{fill:source}} | {{fill:hours}} |
| {{fill:for example authorizing official}} | {{fill:security and privacy}} | {{fill:for example the RMF and risk acceptance}} | {{fill:source}} | {{fill:hours}} |
| {{fill:for example staff who handle personally identifiable information}} | {{fill:privacy}} | {{fill:for example privacy requirements and privacy controls (AT-3(5))}} | {{fill:source}} | {{fill:hours}} |

## 6. Keeping content current

- The {{org:ciso}} and the {{org:privacy-official}} review and update literacy and awareness content {{param:at-02_odp.06}} and following {{param:at-02_odp.07}} (AT-2c).
- They review and update role-based content {{param:at-03_odp.04}} (AT-3b).
- Lessons learned from internal and external incidents and breaches are added to the content, with the change and its date recorded in section 9 (AT-2d, AT-3c).

## 7. Tracking and records

Assignments and completions are recorded in {{fill:for example the learning management system}}, and in the [training record log](/templates/forms/training-record-log/) for training given outside it (AT-4a). Records are kept for the period the awareness and training policy sets (AT-4b).

| Situation | Action |
| --- | --- |
| Initial training not complete | {{fill:for example no account is created}} |
| Refresher overdue | {{fill:for example reminders to the user and supervisor; access suspended after 30 days overdue}} |
| Role-based training overdue | {{fill:for example privileged access suspended until complete}} |

## 8. Measures

| Measure | Target | Reported to | Frequency |
| --- | --- | --- | --- |
| Users with current literacy training | {{fill:for example 100 percent; 95 percent within the reporting month}} | {{fill:role}} | {{fill:for example monthly}} |
| Role-based training current, by role | {{fill:target}} | {{fill:role}} | {{fill:frequency}} |
| Phishing simulation report rate | {{fill:target}} | {{fill:role}} | {{fill:frequency}} |

:::federal
Federal agencies set the schedule in sections 3 and 5 to meet [5 CFR 930.301](https://www.ecfr.gov/current/title-5/chapter-I/subchapter-B/part-930/subpart-C/section-930.301) (OPM): awareness material for new employees before access, exposure of every user to awareness materials at least annually, role-specific training for employees with significant information security responsibilities, and training when the environment changes significantly or an employee moves into a role that needs more of it. [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix II, section 5.g, adds mandatory privacy awareness and training for all employees and contractors, and role-based privacy training before access for those with privacy roles. Training records follow NARA [GRS 2.6](https://www.archives.gov/files/records-mgmt/grs/grs02-6.pdf) item 030. Checked September 2026.
:::

## 9. Approval and change history

| Name | Title | Signature | Date |
| --- | --- | --- | --- |
| {{fill:name}} | {{org:ciso}} | | {{fill:date}} |
| {{fill:name}} | {{org:privacy-official}} | | {{fill:date}} |

| Version | Date | Change | Approved by |
| --- | --- | --- | --- |
| {{fill:version}} | {{fill:date}} | {{fill:summary of change}} | {{fill:name and title}} |
