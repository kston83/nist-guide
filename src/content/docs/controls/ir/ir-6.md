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
