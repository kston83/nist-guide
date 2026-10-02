---
title: 'IR-6 Incident Reporting'
description: 'NIST SP 800-53 Rev. 5 control IR-6, Incident Reporting: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'IR-6 Incident Reporting'
  order: 6
control:
  id: IR-6
  family: IR
  baselines: [Low, Moderate, High, Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | 3 (2 in a baseline) |

**Related controls:** [CM-6](/controls/cm/cm-6/), [CP-2](/controls/cp/cp-2/), [IR-4](/controls/ir/ir-4/), [IR-5](/controls/ir/ir-5/), [IR-8](/controls/ir/ir-8/), [IR-9](/controls/ir/ir-9/)

## Control statement

- **a.** Require personnel to report suspected incidents to the organizational incident response capability within [Assignment: organization-defined time period] ; and
- **b.** Report incident information to [Assignment: organization-defined authorities].

<details>
<summary>NIST discussion</summary>

The types of incidents reported, the content and timeliness of the reports, and the designated reporting authorities reflect applicable laws, executive orders, directives, regulations, policies, standards, and guidelines. Incident information can inform risk assessments, control effectiveness assessments, security requirements for acquisitions, and selection criteria for technology products.

</details>

## Control enhancements

<a id="ir-6.1"></a>

### IR-6(1) Automated Reporting

*Baselines: Moderate, High*

Report incidents using [Assignment: organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for IR-6(1)</summary>

The recipients of incident reports are specified in IR-6b . Automated reporting mechanisms include email, posting on websites (with automatic updates), and automated incident response tools and programs.

Determine if incidents are reported using [Assignment: organization-defined automated mechanisms].

**Examine:** Incident response policy; procedures addressing incident reporting; automated mechanisms supporting incident reporting; system design documentation; system configuration settings and associated documentation; incident response plan; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with incident reporting responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for incident reporting; automated mechanisms supporting and/or implementing the reporting of security incidents.

</details>

<a id="ir-6.2"></a>

### IR-6(2) Vulnerabilities Related to Incidents

*Baselines: Not in a baseline*

Report system vulnerabilities associated with reported incidents to [Assignment: organization-defined personnel or roles].

<details>
<summary>Discussion and assessment objectives for IR-6(2)</summary>

Reported incidents that uncover system vulnerabilities are analyzed by organizational personnel including system owners, mission and business owners, senior agency information security officers, senior agency officials for privacy, authorizing officials, and the risk executive (function). The analysis can serve to prioritize and initiate mitigation actions to address the discovered system vulnerability.

Determine if system vulnerabilities associated with reported incidents are reported to [Assignment: organization-defined personnel or roles].

**Examine:** Incident response policy; procedures addressing incident reporting; incident response plan; system security plan; privacy plan; security incident reports and associated system vulnerabilities; other relevant documents or records.

**Interview:** Organizational personnel with incident reporting responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators; personnel to whom vulnerabilities associated with security incidents are to be reported.

**Test:** Organizational processes for incident reporting; mechanisms supporting and/or implementing the reporting of vulnerabilities associated with security incidents.

</details>

<a id="ir-6.3"></a>

### IR-6(3) Supply Chain Coordination

*Baselines: Moderate, High*

Provide incident information to the provider of the product or service and other organizations involved in the supply chain or supply chain governance for systems or system components related to the incident.

<details>
<summary>Discussion and assessment objectives for IR-6(3)</summary>

Organizations involved in supply chain activities include product developers, system integrators, manufacturers, packagers, assemblers, distributors, vendors, and resellers. Entities that provide supply chain governance include the Federal Acquisition Security Council (FASC). Supply chain incidents include compromises or breaches that involve information technology products, system components, development processes or personnel, distribution processes, or warehousing facilities. Organizations determine the appropriate information to share and consider the value gained from informing external organizations about supply chain incidents, including the ability to improve processes or to identify the root cause of an incident.

Determine if incident information is provided to the provider of the product or service and other organizations involved in the supply chain or supply chain governance for systems or system components related to the incident.

**Examine:** Incident response policy; procedures addressing supply chain coordination and supply chain risk information sharing with the Federal Acquisition Security Council; acquisition policy; acquisition contracts; service-level agreements; incident response plan; supply chain risk management plan; system security plan; plans of other organizations involved in supply chain activities; other relevant documents or records.

**Interview:** Organizational personnel with incident reporting responsibilities; organizational personnel with information security responsibilities; organizational personnel with supply chain risk management responsibilities; organization personnel with acquisition responsibilities.

**Test:** Organizational processes for incident reporting; organizational processes for supply chain risk information sharing; mechanisms supporting and/or implementing the reporting of incident information involved in the supply chain.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for IR-6</summary>

Determine if:

- **IR-06a.** personnel is/are required to report suspected incidents to the organizational incident response capability within [Assignment: organization-defined time period];
- **IR-06b.** incident information is reported to [Assignment: organization-defined authorities].

**Examine:** Incident response policy; procedures addressing incident reporting; incident reporting records and documentation; incident response plan; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with incident reporting responsibilities; organizational personnel with information security and privacy responsibilities; personnel who have/should have reported incidents; personnel (authorities) to whom incident information is to be reported; system users.

**Test:** Organizational processes for incident reporting; mechanisms supporting and/or implementing incident reporting.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

IR-6 has two parts: everyone reports suspected incidents to the incident response capability within a set time (a), and the organization reports incident information to the authorities you name (b). NIST's IR-6 discussion says the types of incidents reported, the content and timing of reports, and the reporting authorities follow the laws, directives, regulations, policies and standards that apply. IR-6 is in the Low, Moderate, High and Privacy baselines.

[NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final) (April 2025; current as of October 2026) covers both parts. Its Incident Management (RS.MA) rows recommend mechanisms for third parties to report possible incidents involving the organization. Its Incident Response Reporting and Communication (RS.CO) rows recommend set procedures for what is reported to whom and when, notifications that comply with the laws and regulations for the organization's sectors and locations, and contact with law enforcement and regulators based on criteria in the incident response plan and management approval.

**Common implementations.** A single, well-known way to report: a service desk phone number, a shared mailbox and a reporting form, published on the intranet and in the awareness course. The rule for staff is "when in doubt, report it", which the [Incident Response Plan](/templates/plans/incident-response-plan/) states in section 4; nobody waits to confirm an incident before reporting. For part b, the plan's section 5 names the parties, the Chief Information Security Officer decides on outside notification with legal counsel (section 3), and a contact list holds each regulator, customer and partner the organization must notify, with the time each requires.

**Organization-defined parameters.** Typical values, from the [Incident Response policy](/templates/policies/ir/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Time to report a suspected incident (a) | 1 hour of discovery |
| Authorities that receive incident information (b) | Senior leadership, legal counsel, and any regulator, customer or partner that law or contract requires be notified |
| Automated reporting mechanisms (IR-6(1)) | The incident reporting form and case management system, which notify the incident response team automatically |

The Incident Response Plan uses the same two IR-6 values. IR-6(3) has no parameters. Contract notice times run the other way: the [acquisition security requirements](/templates/standards/acquisition-security-requirements/) standard (section 4.6) has suppliers notify the organization of incidents affecting its information or products, which then enter this reporting process.

**Evidence assessors ask for.**

- The reporting procedure and the channels published to staff
- A sample of incident records showing when each incident was discovered, reported and declared, compared against the reporting time
- The list of outside parties to notify, with the law or contract behind each and the time it allows
- Records of notifications made to outside parties, and for federal systems the reports to CISA with their tracking numbers
- Interviews with a few users who can say how and when they would report a suspected incident
- For IR-6(1), the reporting form and the configuration that alerts the team when a report arrives

**Inheritance.** Reporting is usually a common control: the reporting channels, the case management system and the outside notifications belong to the incident response team and legal counsel. The system owner makes sure the system's users and administrators know the channels, and that any notification duties specific to the system, such as those in a customer contract, are on the team's list. Record the split in the [system security plan](/templates/plans/system-security-plan/).

**Common findings.**

- Users who do not know how to report, or who report to their manager and stop there.
- No record of when an incident was discovered, so the reporting time cannot be checked.
- Notification duties in laws and contracts that nobody has listed, found only during a real incident.
- Federal reports to CISA timed from the end of the investigation instead of from identification.

**Enhancements in the Moderate baseline.**

- [IR-6(1)](#ir-6.1) automated reporting: report incidents through automated mechanisms. NIST's discussion names email, website postings with automatic updates, and automated incident response tools. In the typical value, the reporting form feeds the case management system, which alerts the team. The form is planned for this kit as the incident report form; until then, a service desk or case management intake form works.
- [IR-6(3)](#ir-6.3) supply chain coordination: give incident information to the provider of the product or service, and to other organizations in the supply chain or supply chain governance, for components related to an incident. This is the other direction from [SR-8](/controls/sr/sr-8/), which covers the notices suppliers send to the organization. NIST's discussion leaves the choice of what to share to the organization, weighing the value of telling others, such as finding the root cause. SP 800-61 Rev. 3 (RS.CO rows) recommends sharing information securely, consistent with the response plans and information sharing agreements, including contracts with suppliers. The plan's section 7 covers this; the supply chain risk management team can identify the affected components and their suppliers from the [component inventory](/templates/forms/component-inventory/).

[IR-6(2)](#ir-6.2) vulnerabilities related to incidents is in no baseline. High adds nothing beyond the Moderate enhancements.

**Federal systems** (as of October 2026). FISMA requires each agency's incident procedures to include notifying and consulting with the Federal information security incident center, and, as appropriate, law enforcement agencies, Offices of Inspector General and Offices of General Counsel ([44 U.S.C. § 3554](https://www.govinfo.gov/link/uscode/44/3554?link-type=html)(b)(7)(C), United States Code, 2024 edition). For a major incident, the agency notifies the committees of Congress named in the statute within 7 days of having a reasonable basis to conclude it occurred. The [CISA Federal Incident Notification Guidelines](https://www.cisa.gov/federal-incident-notification-guidelines) (effective April 1, 2017) say FISMA requires executive branch civilian agencies to notify and consult with CISA. Agencies report incidents to CISA within one hour of identification by the agency's top-level incident response team, security operations center or IT department, as the policy's federal block requires.

The one-hour clock to CISA starts at identification by that top-level team, so the 1-hour internal reporting time and the CISA report are separate deadlines that can run one after the other. CISA's guidelines also tell agencies to use OMB's most recent guidance to decide whether an incident is major. <!-- TODO(verify): which OMB memorandum currently defines a major incident and sets agency reporting under FISMA; the OMB memoranda page lists only 2025 and 2026 memoranda and none on this topic, so no memo is named here. -->

For [IR-6(3)](#ir-6.3), the Federal Acquisition Security Council (FASC) is the supply chain governance body NIST's discussion names. Executive agencies must expeditiously submit supply chain risk information to the FASC's information sharing agency when the FASC asks, or when the agency concludes there is a reasonable basis to find a substantial supply chain risk ([41 CFR 201-1.201](https://www.ecfr.gov/current/title-41/section-201-1.201)(b)).
