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
