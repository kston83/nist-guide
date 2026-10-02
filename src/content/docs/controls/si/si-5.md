---
title: 'SI-5 Security Alerts, Advisories, and Directives'
description: 'NIST SP 800-53 Rev. 5 control SI-5, Security Alerts, Advisories, and Directives: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SI-5 Security Alerts, Advisories, and Directives'
  order: 5
control:
  id: SI-5
  family: SI
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 1 (1 in a baseline) |

**Related controls:** [PM-15](/controls/pm/pm-15/), [RA-5](/controls/ra/ra-5/), [SI-2](/controls/si/si-2/)

## Control statement

- **a.** Receive system security alerts, advisories, and directives from [Assignment: organization-defined external organizations] on an ongoing basis;
- **b.** Generate internal security alerts, advisories, and directives as deemed necessary;
- **c.** Disseminate security alerts, advisories, and directives to: [Selection (one or more): [Assignment: organization-defined personnel or roles] ; [Assignment: organization-defined elements] ; [Assignment: organization-defined external organizations] ] ; and
- **d.** Implement security directives in accordance with established time frames, or notify the issuing organization of the degree of noncompliance.

<details>
<summary>NIST discussion</summary>

The Cybersecurity and Infrastructure Security Agency (CISA) generates security alerts and advisories to maintain situational awareness throughout the Federal Government. Security directives are issued by OMB or other designated organizations with the responsibility and authority to issue such directives. Compliance with security directives is essential due to the critical nature of many of these directives and the potential (immediate) adverse effects on organizational operations and assets, individuals, other organizations, and the Nation should the directives not be implemented in a timely manner. External organizations include supply chain partners, external mission or business partners, external service providers, and other peer or supporting organizations.

</details>

## Control enhancements

<a id="si-5.1"></a>

### SI-5(1) Automated Alerts and Advisories

*Baselines: High*

Broadcast security alert and advisory information throughout the organization using [Assignment: organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for SI-5(1)</summary>

The significant number of changes to organizational systems and environments of operation requires the dissemination of security-related information to a variety of organizational entities that have a direct interest in the success of organizational mission and business functions. Based on information provided by security alerts and advisories, changes may be required at one or more of the three levels related to the management of risk, including the governance level, mission and business process level, and the information system level.

Determine if [Assignment: organization-defined automated mechanisms] are used to broadcast security alert and advisory information throughout the organization.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing security alerts, advisories, and directives; system design documentation; system configuration settings and associated documentation; automated mechanisms supporting the distribution of security alert and advisory information; records of security alerts and advisories; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with security alert and advisory responsibilities; organizational personnel implementing, operating, maintaining, and using the system; organizational personnel, organizational elements, and/or external organizations to whom alerts and advisories are to be disseminated; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Organizational processes for defining, receiving, generating, and disseminating security alerts and advisories; automated mechanisms supporting and/or implementing the dissemination of security alerts and advisories.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SI-5</summary>

Determine if:

- **SI-05a.** system security alerts, advisories, and directives are received from [Assignment: organization-defined external organizations] on an ongoing basis;
- **SI-05b.** internal security alerts, advisories, and directives are generated as deemed necessary;
- **SI-05c.** security alerts, advisories, and directives are disseminated to [Selection (one or more): [Assignment: organization-defined personnel or roles] ; [Assignment: organization-defined elements] ; [Assignment: organization-defined external organizations] ];
- **SI-05d.** security directives are implemented in accordance with established time frames or if the issuing organization is notified of the degree of noncompliance.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing security alerts, advisories, and directives; records of security alerts and advisories; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with security alert and advisory responsibilities; organizational personnel implementing, operating, maintaining, and using the system; organizational personnel, organizational elements, and/or external organizations to whom alerts, advisories, and directives are to be disseminated; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Organizational processes for defining, receiving, generating, disseminating, and complying with security alerts, advisories, and directives; mechanisms supporting and/or implementing the definition, receipt, generation, and dissemination of security alerts, advisories, and directives; mechanisms supporting and/or implementing security directives.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

SI-5 asks you to receive security alerts, advisories and directives from outside sources on an ongoing basis (a), issue your own when needed (b), send them to the people and organizations who must act (c), and carry out security directives on time or tell the issuer how far you fall short (d). NIST's SI-5 discussion says CISA generates alerts and advisories to maintain situational awareness across the Federal Government, that directives come from OMB or other organizations with the authority to issue them, and that external organizations include supply chain partners, external mission or business partners, external service providers and peer organizations. SI-5 is in the Low, Moderate and High baselines.

The value of SI-5 is in routing. An advisory that sits in a shared mailbox protects nothing; one that reaches the owners of the affected component, with a due date, does. The [component inventory](/templates/forms/component-inventory/) is what makes routing possible: it records each component's product, version and owner.

**Common implementations.** The security operations team subscribes to [CISA's cybersecurity alerts and advisories](https://www.cisa.gov/news-events/cybersecurity-advisories), the [Known Exploited Vulnerabilities Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog), the security bulletins of each vendor in the component inventory, and the sector's information sharing and analysis center. An analyst reviews each item, matches it against the inventory and the vulnerability scan results, and opens a ticket for each affected component's owner, with a due date from the [patch and flaw remediation standard](/templates/standards/patch-and-flaw-remediation-standard/). Urgent items go out as an internal advisory by email or chat to system owners and administrators. Service providers who run systems for the organization receive the advisories that affect them, through the contact their contract names.

**Organization-defined parameters.** Typical values, from the [System and Information Integrity policy](/templates/policies/si/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| External organizations alerts are received from (a) | CISA, the vendors of the system's components, and the organization's information sharing and analysis center |
| Personnel or roles alerts go to (c) | System owners and system administrators |
| Elements within the organization alerts go to (c) | The security operations and incident response teams |
| External organizations alerts go to (c) | The service providers who operate systems for the organization, where an alert affects them |

The policy has the security operations team receive, generate and disseminate alerts (a to c), and each system owner implement directives within their time frames or notify the issuer of the degree of noncompliance (d). The patch and flaw remediation standard adds that each alert affecting a component in the inventory is routed to that component's owners, and its federal block has updates and mitigations a CISA emergency directive requires installed within the directive's time frames.

**Evidence assessors ask for.**

- The list of sources subscribed to, and who monitors each
- A sample of recent advisories, each followed to the ticket, the owner who received it and the action taken
- Internal advisories issued in the last year, and who they went to
- For each directive that applies, the required actions, the completion dates and any report of noncompliance
- How service providers receive advisories that affect them, such as a contract clause or a shared ticket queue

**Inheritance.** SI-5 is usually a common control run by the security operations team for every system. The system owner owns acting on what reaches them, and records in the [system security plan](/templates/plans/system-security-plan/) who receives advisories for the system's components. A system run by a service provider relies on the provider's own advisory process for its infrastructure; the contract should say how the provider tells the organization about advisories that affect it.

**Common findings.**

- Advisories received in a mailbox but not routed or tracked, so no one can show what was done.
- No coverage of appliances, firmware or open source libraries that the patch tools do not see.
- Directive actions completed late, with no notice of noncompliance to the issuer.
- A component inventory too incomplete to tell who owns an affected product.

**Enhancements in the Moderate baseline.** None. High adds [SI-5(1)](#si-5.1) automated alerts and advisories.

- **SI-5(1)** (High) broadcasts security alert and advisory information throughout the organization with automated mechanisms. NIST's discussion says the many changes to systems and environments call for sending security information to many organizational entities, and that alerts may require changes at the governance, mission and business process, or system level. Typical value: the ticketing system, which assigns each alert to the owners of the affected components, and the security team's distribution lists.

**Federal systems** (as of October 2026). The Federal Information Security Modernization Act requires the head of each agency to comply with the binding operational directives and emergency directives the Secretary of Homeland Security issues under 44 U.S.C. § 3553(b) and (h) ([44 U.S.C. § 3554(a)(1)(B)(ii) and (v)](https://www.govinfo.gov/link/uscode/44/3554?link-type=html), United States Code, 2024 edition). CISA publishes them on its [Cybersecurity Directives](https://www.cisa.gov/directives) page, which says they do not apply to national security systems or to certain systems operated by the Department of Defense or the Intelligence Community. Directives that SI controls depend on include [BOD 26-04](https://www.cisa.gov/news-events/directives/bod-26-04-prioritizing-security-updates-based-risk) and [BOD 23-01](https://www.cisa.gov/news-events/directives/bod-23-01-improving-asset-visibility-and-vulnerability-detection-federal-networks) for flaw remediation ([SI-2](/controls/si/si-2/)) and [BOD 18-01](https://www.cisa.gov/news-events/directives/bod-18-01-enhance-email-and-web-security) for email authentication ([SI-8](/controls/si/si-8/)); none of their pages is marked revoked. The SI-5 clause's federal block has the Chief Information Security Officer track each directive that applies to the agency and ensure system owners complete its required actions and reports within its time frames.
