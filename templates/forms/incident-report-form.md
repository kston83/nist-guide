---
title: Incident Report Form
type: form
description: The record of one report of a suspected incident or breach, from the first report through triage, notifications and closure, with a register of every report, as SP 800-53 IR-6 and IR-5 require.
controls: [ir-6, ir-6.1, ir-5, ir-7, ir-8.1]
status: draft
stage: core
typical:
  ir-06_odp.01: 1 hour of discovery
  ir-06_odp.02: 'senior leadership, legal counsel, and any regulator, customer or partner that law or contract requires be notified'
  ir-06.01_odp: 'the incident report form and case management system, which notify the incident response team automatically'
---

:::guidance
This is the form IR-6(1)'s typical value names: anyone can submit Parts A to C, and the case management system alerts the incident response team when they do. The team completes Parts D to F, so one record shows when the incident was discovered, reported and declared, which is the first thing an assessor checks against the reporting time (IR-6a). Section 5.1 of the [incident handling playbook](/templates/procedures/incident-handling-playbook/) is the process this form records, and the [Incident Response Plan](/templates/plans/incident-response-plan/) sets the severity levels in Part D. Part C's questions come from the list [NIST SP 800-122](https://csrc.nist.gov/pubs/sp/800/122/final) (April 2010), section 5.1, says is helpful to get from someone reporting a known or suspected breach involving personally identifiable information. Most organizations hold these fields in a web form that feeds the case management system rather than in a document; that is fine as long as each record has them. Keep the form short for reporters: Parts A to C should take a few minutes. The register at the end is also downloadable as a CSV file.
:::

| Report ID | Date and time received | Received through | Incident record ID | Status |
| --- | --- | --- | --- | --- |
| {{fill:unique report ID}} | {{fill:date and time}} | {{fill:phone, email, portal, alert, or outside party}} | {{fill:incident record ID, or none}} | {{fill:received, triaged, declared, not an incident, or closed}} |

## 1. How to use this form

- Anyone who suspects an incident or a breach completes Parts A to C, or calls the service desk, which completes them during the call. Report within {{param:ir-06_odp.01}} (IR-6a). Do not wait to confirm it, and do not investigate first.
- Report what you know. A blank answer is better than a guess, and the team will follow up.
- Describe information that was exposed without copying it into the form: write "a spreadsheet of customer names and account numbers", not the names and numbers.
- Submitting the form through {{param:ir-06.01_odp}} alerts the {{org:incident-response-team}} (IR-6(1)).
- The {{org:incident-response-team}} completes Parts D to F and enters the report in the register.

## Part A. Who is reporting

| Field | Entry |
| --- | --- |
| Name of the person reporting | {{fill:name}} |
| Contact phone and email | {{fill:phone and email}} |
| Organizational unit, or company for an outside reporter | {{fill:unit or company}} |
| Person who discovered it, if different | {{fill:name and contact}} |
| Best time and way to reach you | {{fill:time and method}} |

## Part B. What happened

| Field | Entry |
| --- | --- |
| Date and time it was discovered | {{fill:date and time}} |
| What you saw or what happened | {{fill:description in your own words}} |
| How it was noticed | {{fill:for example a suspicious email, a security alert, a missing device, a customer's call}} |
| Systems, devices or services involved | {{fill:names, addresses or asset tags, and any connection to other systems}} |
| Where it happened | {{fill:office, remote, a supplier, a cloud service}} |
| Is it still happening? | {{fill:yes, no, or not sure}} |
| What you have done so far | {{fill:for example disconnected the laptop, forwarded the email to the service desk, nothing}} |

## Part C. Information involved

| Question | Answer |
| --- | --- |
| What information was, or may have been, lost, exposed, changed or deleted? | {{fill:a description, not the information itself}} |
| Does it include personal information about people, such as names with identification numbers, financial, health or contact details? | {{fill:yes, no, or not sure}} |
| If yes: about how many people? | {{fill:number or estimate}} |
| What medium was it on? | {{fill:for example laptop, phone, removable media, paper, a cloud service, email, a conversation}} |
| Was it protected, for example encrypted or password protected? | {{fill:yes, no, or not sure, and how}} |
| Has anyone outside the organization been told, such as law enforcement or the recipient? | {{fill:no; or yes, who and when}} |

:::guidance
"Not sure" on personal information still sends the report to the privacy official: the incident handling playbook (5.2 step 3) brings them in whenever personally identifiable information is, or may be, involved. NIST's IR-2(3) discussion stresses reporting both confirmed and suspected breaches in any medium or form, including paper and oral, so the medium question lists both.
:::

## Part D. Triage

Completed by the {{org:incident-response-team}}.

| Field | Entry |
| --- | --- |
| Received by, and date and time | {{fill:name, date and time}} |
| Outcome | {{fill:incident declared; not an incident, with the reason; or referred elsewhere, such as a routine service request}} |
| Date and time declared | {{fill:date and time}} |
| Incident type | {{fill:from section 6 of the incident handling playbook, for example ransomware, account takeover, lost device}} |
| Severity | {{fill:from section 4 of the Incident Response Plan}} |
| Functional impact | {{fill:what the organization cannot do, or can do only with difficulty}} |
| Information impact | {{fill:none known, suspected, or the type of information compromised}} |
| Recoverability | {{fill:recoverable with existing resources, with added resources, or not recoverable}} |
| Personally identifiable information involved | {{fill:no; or yes or possibly, and the time the privacy official was told}} |
| Major incident | {{fill:no; or yes, declared by and time}} |
| Incident lead | {{fill:name}} |

## Part E. Notifications

The {{org:incident-response-team}} reports incident information to {{param:ir-06_odp.02}} (IR-6b). Record every notification, inside and outside the organization.

| Party | Required by | Deadline | Decided by | Sent by | Date and time sent | Reference |
| --- | --- | --- | --- | --- | --- | --- |
| {{org:ciso}} | Incident Response Plan | {{fill:for example at declaration for High and Critical}} | | {{fill:name}} | {{fill:date and time}} | |
| {{org:privacy-official}} | Incident Response Plan breach section | At identification, when personally identifiable information is or may be involved | | {{fill:name}} | {{fill:date and time}} | |
| Senior leadership | Incident Response Plan | {{fill:deadline}} | {{fill:name}} | {{fill:name}} | {{fill:date and time}} | |
| {{fill:regulator, customer, partner, supplier or law enforcement}} | {{fill:law, regulation or contract}} | {{fill:deadline}} | {{fill:name}} | {{fill:name}} | {{fill:date and time}} | {{fill:their reference}} |
| Affected individuals | {{fill:requirement, or the privacy official's decision}} | {{fill:deadline}} | {{fill:name}} | {{fill:name}} | {{fill:date range}} | {{fill:notice version}} |

:::federal
Federal agencies notify the Cybersecurity and Infrastructure Security Agency (CISA) of incidents under FISMA (44 U.S.C. §§ 3553 and 3554). As of October 2026, the [CISA Federal Incident Notification Guidelines](https://www.cisa.gov/federal-incident-notification-guidelines) (effective April 1, 2017) require a report within one hour of identification by the agency's top-level incident response team, security operations center or IT department, with seven required elements. Part D's impact fields follow the guidelines' functional impact, information impact and recoverability categories, so the report can be filed from this form. CISA asks agencies not to include sensitive personally identifiable information in submissions.

[OMB Memorandum M-25-04](https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-04-Fiscal-Year-2025-Guidance-on-Federal-Information-Security-and-Privacy-Management-Requirements.pdf) (January 15, 2025), the most recent FISMA guidance memorandum as of October 2026, section X, sets the major incident fields below. Events still unresolved after 72 hours of investigation are reported to CISA. A major incident determination is required for a breach affecting the personally identifiable information of 100,000 or more people. A major incident is reported to CISA and the OMB Office of the Federal Chief Information Officer within 1 hour of the determination, to the appropriate congressional committees and the Office of Inspector General within 7 days of the reasonable-basis determination, and, for a breach, in a supplemental report to Congress within 30 days of discovering it. [OMB Memorandum M-17-12](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2017/m-17-12_0.pdf), section VIII, requires the principal security operations center to track each breach, including the number of individuals, the types of information, whether individuals were notified or offered services, and whether it was reported to CISA or Congress.

| CISA element | Entry |
| --- | --- |
| Time of identification by the top-level team, which starts the one-hour clock | {{fill:date and time}} |
| Functional impact (CISA category) | {{fill:category}} |
| Information impact (CISA category, for example privacy data breach) | {{fill:one or more categories}} |
| Recoverability (CISA category) | {{fill:category}} |
| When the activity was first detected | {{fill:date and time}} |
| Number of systems, records and users affected | {{fill:numbers or estimates}} |
| Network location of the observed activity | {{fill:location}} |
| Point of contact | {{fill:name and contact}} |
| Attack vector, indicators of compromise and mitigation, if known | {{fill:details}} |
| Reported to CISA by, date and time | {{fill:name, date and time}} |
| CISA tracking number | {{fill:number}} |
| Unresolved after 72 hours of investigation; reported to CISA | {{fill:not applicable; or date and time reported}} |
| Major incident determination (M-25-04 section X) | {{fill:not major; or major, under criterion A or B, and whether the 100,000-person rule applies}} |
| Determination made by, with date and time; who took part | {{fill:name, date and time; for example the CIO, CISO, system owner and, for a breach, the senior agency official for privacy}} |
| Reported to CISA and the OMB Office of the Federal Chief Information Officer | {{fill:by whom, date and time, within 1 hour of the determination}} |
| Congressional committees and Office of Inspector General notified | {{fill:by whom and date, within 7 days of the reasonable-basis determination}} |
| Breach supplemental report to Congress | {{fill:not applicable; or date sent, within 30 days of discovering the breach}} |
| Breach tracked jointly by the principal security operations center and the senior agency official for privacy, for a breach that is a major incident (M-25-04 section X; M-17-12 section VIII) | {{fill:tracking reference}} |

:::

## Part F. Closure

| Field | Entry |
| --- | --- |
| Root cause | {{fill:summary, or a reference to the incident record}} |
| Records or individuals affected, final count | {{fill:number, or not applicable}} |
| Lessons-learned review held | {{fill:date, or not required at this severity}} |
| After-action report and action list | {{fill:reference}} |
| Closed by, and date | {{fill:name and date}} |

## Register

| Report ID | Received (date and time) | Reported by | Discovered (date and time) | Outcome | Declared (date and time) | Incident type | Severity | Personally identifiable information involved | Major incident | Outside notifications (party and date) | Closed |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:ID}} | {{fill:date and time}} | {{fill:name or source}} | {{fill:date and time}} | {{fill:declared, not an incident, or referred}} | {{fill:date and time}} | {{fill:type}} | {{fill:severity}} | {{fill:no, yes or possibly}} | {{fill:no or yes}} | {{fill:parties and dates, or none}} | {{fill:date}} |
