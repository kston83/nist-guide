---
title: 'IR-7 Incident Response Assistance'
description: 'NIST SP 800-53 Rev. 5 control IR-7, Incident Response Assistance: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'IR-7 Incident Response Assistance'
  order: 7
control:
  id: IR-7
  family: IR
  baselines: [Low, Moderate, High, Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | 2 (1 in a baseline) |

**Related controls:** [AT-2](/controls/at/at-2/), [AT-3](/controls/at/at-3/), [IR-4](/controls/ir/ir-4/), [IR-6](/controls/ir/ir-6/), [IR-8](/controls/ir/ir-8/), [PM-22](/controls/pm/pm-22/), [PM-26](/controls/pm/pm-26/), [SA-9](/controls/sa/sa-9/), [SI-18](/controls/si/si-18/)

## Control statement

Provide an incident response support resource, integral to the organizational incident response capability, that offers advice and assistance to users of the system for the handling and reporting of incidents.

<details>
<summary>NIST discussion</summary>

Incident response support resources provided by organizations include help desks, assistance groups, automated ticketing systems to open and track incident response tickets, and access to forensics services or consumer redress services, when required.

</details>

## Control enhancements

<a id="ir-7.1"></a>

### IR-7(1) Automation Support for Availability of Information and Support

*Baselines: Moderate, High*

Increase the availability of incident response information and support using [Assignment: organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for IR-7(1)</summary>

Automated mechanisms can provide a push or pull capability for users to obtain incident response assistance. For example, individuals may have access to a website to query the assistance capability, or the assistance capability can proactively send incident response information to users (general distribution or targeted) as part of increasing understanding of current response capabilities and support.

Determine if the availability of incident response information and support is increased using [Assignment: organization-defined automated mechanisms].

**Examine:** Incident response policy; procedures addressing incident response assistance; automated mechanisms supporting incident response support and assistance; system design documentation; system configuration settings and associated documentation; incident response plan; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with incident response support and assistance responsibilities; organizational personnel with access to incident response support and assistance capability; organizational personnel with information security responsibilities.

**Test:** Organizational processes for incident response assistance; automated mechanisms supporting and/or implementing an increase in the availability of incident response information and support.

</details>

<a id="ir-7.2"></a>

### IR-7(2) Coordination with External Providers

*Baselines: Not in a baseline*

- **(a)** Establish a direct, cooperative relationship between its incident response capability and external providers of system protection capability; and
- **(b)** Identify organizational incident response team members to the external providers.

<details>
<summary>Discussion and assessment objectives for IR-7(2)</summary>

External providers of a system protection capability include the Computer Network Defense program within the U.S. Department of Defense. External providers help to protect, monitor, analyze, detect, and respond to unauthorized activity within organizational information systems and networks. It may be beneficial to have agreements in place with external providers to clarify the roles and responsibilities of each party before an incident occurs.

Determine if:

- **IR-07(02)(a)** a direct, cooperative relationship is established between its incident response capability and external providers of the system protection capability;
- **IR-07(02)(b)** organizational incident response team members are identified to the external providers.

**Examine:** Incident response policy; procedures addressing incident response assistance; incident response plan; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with incident response support and assistance responsibilities; external providers of system protection capability; organizational personnel with information security and privacy responsibilities.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for IR-7</summary>

Determine if:

- **IR-07[01]** an incident response support resource, integral to the organizational incident response capability, is provided;
- **IR-07[02]** the incident response support resource offers advice and assistance to users of the system for the response and reporting of incidents.

**Examine:** Incident response policy; procedures addressing incident response assistance; incident response plan; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with incident response assistance and support responsibilities; organizational personnel with access to incident response support and assistance capability; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for incident response assistance; mechanisms supporting and/or implementing incident response assistance.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

IR-7 asks for a support resource, part of the incident response capability, that gives the system's users advice and help with handling and reporting incidents. NIST's IR-7 discussion names help desks, assistance groups, automated ticketing systems that open and track incident tickets, and access to forensics services or consumer redress services when needed. IR-7 is in the Low, Moderate, High and Privacy baselines.

[NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final) (April 2025; current as of October 2026), section 2.2, notes that incident handlers may be on staff, on contract (such as a managed security services provider), or available when needed from a parent organization, a services provider, a business partner or law enforcement. Its Incident Management (RS.MA) rows recommend contacting the organization's incident response service provider for assistance when appropriate.

**Common implementations.** The service desk is the front door: staff take the call or ticket, ask a short set of questions, give the user first steps (for example, disconnect from the network but leave the device on), and hand the report to the incident response team. The team's on-call rotation backs the desk outside business hours. A retained incident response provider backs the team for major incidents, as the typical answer in the [IR decision worksheet](/templates/worksheets/ir/) has it, and supplies forensics the team cannot do itself. The [Incident Response Plan](/templates/plans/incident-response-plan/) lists the provider in its contacts appendix.

**Organization-defined parameters.** IR-7 has none. The Moderate baseline adds one in IR-7(1). Typical value, from the [Incident Response policy](/templates/policies/ir/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Automated mechanisms that make incident response information and support available (IR-7(1)) | A self-service reporting portal and an incident response page on the intranet |

In the policy, the incident response team provides the support resource.

**Evidence assessors ask for.**

- The procedure or script the service desk follows for incident calls, and its escalation path to the incident response team
- The on-call schedule for the incident response team
- The contract or retainer with any outside incident response provider, with how to invoke it
- A few incident tickets showing the advice users were given and the hand-off to the team
- For IR-7(1), the reporting portal and the intranet page, with the date the page was last updated

**Inheritance.** The service desk, the on-call rotation and any retained provider are usually common controls. The system owner makes sure the system's users know where to get help, and that the desk can reach the system's administrators. Record the split in the [system security plan](/templates/plans/system-security-plan/).

**Common findings.**

- Service desk staff who treat incident calls as routine tickets, with no escalation.
- No coverage outside business hours, or an on-call number that goes to voicemail.
- A retained provider whose contract nobody can find, or whose activation steps were never tested.
- An intranet page with outdated contacts or a broken reporting link.

**Enhancements in the Moderate baseline.** [IR-7(1)](#ir-7.1) automation support for availability of information and support. NIST's discussion describes a push or pull capability: a website where users can ask for help, or messages the capability sends to users. In the typical value, the portal is the pull side and the intranet page holds the reporting channels and first steps; alerts sent to users during a major incident are the push side. Training (IR-2) should point users to both.

High adds nothing beyond IR-7(1). [IR-7(2)](#ir-7.2) coordination with external providers is in no baseline.
