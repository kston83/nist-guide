---
title: Incident Response Plan
type: plan
description: The organization's plan for detecting, handling, reporting and recovering from cybersecurity incidents, with the ten elements NIST SP 800-53 IR-8 requires.
controls: [ir-8, ir-4, ir-5, ir-6, ir-7, ir-2, ir-3]
status: draft
stage: core
typical:
  ir-08_odp.01: the Chief Information Security Officer
  ir-08_odp.02: annually
  ir-08_odp.03: the incident response team, led by its designated lead
  ir-08_odp.04: the incident response team members, by role
  ir-08_odp.05: the security operations, legal, communications and human resources functions
  ir-8_prm_5: everyone who received the plan
  ir-06_odp.01: 1 hour of discovery
  ir-06_odp.02: senior leadership, legal counsel, and any regulator, customer or partner that law or contract requires be notified
---

:::guidance
This plan answers the ten questions IR-8a asks of an incident response plan; each section names the IR-8 item it meets. The handling sections follow the NIST Cybersecurity Framework (CSF) 2.0 Functions, as [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final) (April 2025) does: Detect, Respond and Recover for handling an incident, with preparation and improvement around them. Keep the plan short enough to use during an incident, and move step-by-step instructions into the incident handling playbook.
:::

| Plan owner | Approved by | Review cycle | Version and date |
| --- | --- | --- | --- |
| {{org:ciso}} | {{param:ir-08_odp.01}} | {{param:ir-08_odp.02}} | {{fill:version number and approval date}} |

## 1. Purpose and scope

This plan is {{org:name}}'s roadmap for its incident response capability: how incidents are detected, handled, reported and learned from (IR-8a.1). It applies to every system {{org:name}} owns or operates, or that is operated on its behalf, and to everyone with access to those systems.

## 2. How incident response fits the organization

Incident response is part of {{org:name}}'s security program and risk management. The {{org:incident-response-team}} works with system owners, who remain responsible for their systems during an incident, and with the contingency planning, business continuity and crisis communications functions when an incident affects operations (IR-8a.3).

The capability is sized for {{org:name}}'s mission, size, structure and functions as follows: {{fill:how the capability is staffed and sourced, for example an internal team with a retained incident response provider for major incidents}} (IR-8a.4).

## 3. Roles and responsibilities

Responsibility for incident response is designated to {{param:ir-08_odp.03}} (IR-8a.10). The capability is organized as follows (IR-8a.2).

| Role | Responsibility |
| --- | --- |
| {{org:ciso}} | Owns this plan; declares major incidents; decides with legal counsel on outside notification; reports to senior leadership |
| Incident response lead | Leads the {{org:incident-response-team}}; coordinates handling of each incident from declaration to closure |
| {{org:incident-response-team}} | Analyzes, contains, eradicates and recovers from incidents; keeps the incident record |
| {{org:security-operations}} | Monitors for and triages events; escalates suspected incidents |
| {{org:system-owner}} | Provides system knowledge and access; approves containment and recovery actions on their system |
| Legal counsel | Advises on evidence, notification duties and law enforcement contact |
| Communications | Prepares internal and external messages approved by the {{org:ciso}} |
| {{org:hr-office}} | Supports incidents that involve personnel |
| All personnel | Report suspected incidents promptly and follow the team's instructions |

## 4. Reportable incidents

A reportable incident is any event that actually or imminently jeopardizes the confidentiality, integrity or availability of {{org:name}}'s information or systems, or that violates security policy or acceptable use (IR-8a.5). Examples include malware infections, unauthorized access, lost or stolen devices with {{org:name}} information, and data sent to the wrong recipient. When in doubt, report it.

The {{org:incident-response-team}} assigns each incident a severity, which sets the response time and who is informed.

| Severity | Description | Response |
| --- | --- | --- |
| Critical | {{fill:description, for example widespread impact, confirmed data breach or ransomware}} | {{fill:response time and escalation, for example immediate; the Chief Information Security Officer and senior leadership informed}} |
| High | {{fill:description}} | {{fill:response time and escalation}} |
| Moderate | {{fill:description}} | {{fill:response time and escalation}} |
| Low | {{fill:description}} | {{fill:response time and escalation}} |

## 5. Reporting and notification

Personnel report suspected incidents to the {{org:incident-response-team}} within {{param:ir-06_odp.01}}, through {{fill:reporting channels, for example the service desk phone number and the incident reporting form}}. The {{org:incident-response-team}} reports incident information to {{param:ir-06_odp.02}}.

:::federal
Federal agencies notify the Cybersecurity and Infrastructure Security Agency (CISA) of incidents under FISMA (44 U.S.C. §§ 3553 and 3554). As of September 2026, the [CISA Federal Incident Notification Guidelines](https://www.cisa.gov/federal-incident-notification-guidelines) (effective April 1, 2017) require notification within one hour of the incident being identified by the agency's top-level incident response team, security operations center or IT department. Record the agency's reporting channel to CISA and who submits the report: {{fill:agency CISA reporting procedure and submitter}}.
:::

## 6. Handling incidents

Handling follows the CSF 2.0 Functions. The incident handling playbook holds the step-by-step instructions for each type of incident.

### Detect

The {{org:security-operations}} monitors alerts, logs and user reports; triages events; and escalates suspected incidents to the {{org:incident-response-team}}. The team confirms whether an incident has occurred, declares it, assigns a severity and opens an incident record (IR-5).

### Respond

The {{org:incident-response-team}} analyzes the incident to understand its scope and cause, contains it to limit damage, and eradicates its cause, coordinating each action with the affected {{org:system-owner}}. It preserves evidence, keeps the incident record current, and coordinates communication and notification as section 5 describes.

### Recover

The {{org:system-owner}} restores affected systems and data, with the {{org:incident-response-team}} confirming they are clean and monitored for recurrence. Recovery that invokes a contingency plan follows that plan.

### Improve

After each incident of {{fill:severity that requires a lessons-learned review, for example High or Critical}}, the {{org:incident-response-team}} holds a lessons-learned review within {{fill:time after closure, for example 10 business days}}. Changes to procedures, training and testing that result are tracked to completion (IR-4c).

## 7. Sharing incident information

{{org:name}} shares incident information with {{fill:parties, for example sector information sharing organizations, suppliers involved in the incident, and law enforcement}} when {{fill:conditions and who approves}} (IR-8a.8). Suppliers of affected products or services receive the information they need to respond (IR-6(3)).

## 8. Metrics

The {{org:incident-response-team}} measures the capability with these metrics, reported to the {{org:ciso}} {{fill:frequency, for example quarterly}} (IR-8a.6):

- {{fill:metric, for example mean time from detection to containment by severity}}
- {{fill:metric, for example number of incidents by type and severity}}
- {{fill:metric, for example percentage of lessons-learned actions completed on time}}

## 9. Resources and management support

Maintaining and maturing the capability requires {{fill:staff, tools, retained services and budget}}, which the {{org:senior-leader}} supports through {{fill:how resources are approved, for example the annual security budget}} (IR-8a.7).

## 10. Training and testing

Incident response roles receive training on joining the role and at the interval the Incident Response Policy sets (IR-2). The capability is tested through exercises at the interval that policy sets, and the results feed section 6's improvement step (IR-3).

## 11. Plan maintenance

- {{param:ir-08_odp.01}} reviews and approves this plan {{param:ir-08_odp.02}} (IR-8a.9).
- The {{org:ciso}} distributes copies to {{param:ir-08_odp.04}} and {{param:ir-08_odp.05}} (IR-8b).
- The {{org:ciso}} updates the plan for system and organizational changes and for problems found in incidents or exercises (IR-8c), and communicates changes to {{param:ir-8_prm_5}} (IR-8d).
- The plan is stored in {{fill:location with restricted access}} to protect it from unauthorized disclosure and modification (IR-8e).

## Appendix A. Contacts

| Role | Name | Phone | Email | Backup |
| --- | --- | --- | --- | --- |
| Incident response lead | {{fill:name}} | {{fill:phone}} | {{fill:email}} | {{fill:backup name}} |
| {{org:ciso}} | {{fill:name}} | {{fill:phone}} | {{fill:email}} | {{fill:backup name}} |
| Legal counsel | {{fill:name}} | {{fill:phone}} | {{fill:email}} | {{fill:backup name}} |
| Communications | {{fill:name}} | {{fill:phone}} | {{fill:email}} | {{fill:backup name}} |
| Retained incident response provider | {{fill:company}} | {{fill:phone}} | {{fill:email}} | {{fill:contract reference}} |
