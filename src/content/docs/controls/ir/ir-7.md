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
---

<!-- nist:start -->
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
<!-- nist:end -->

<!-- guidance: write below this line -->
