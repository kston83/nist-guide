---
title: 'SI-8 Spam Protection'
description: 'NIST SP 800-53 Rev. 5 control SI-8, Spam Protection: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SI-8 Spam Protection'
  order: 8
control:
  id: SI-8
  family: SI
  baselines: [Moderate, High]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | Organization | 2 (1 in a baseline) |

**Related controls:** [PL-9](/controls/pl/pl-9/), [SC-5](/controls/sc/sc-5/), [SC-7](/controls/sc/sc-7/), [SC-38](/controls/sc/sc-38/), [SI-3](/controls/si/si-3/), [SI-4](/controls/si/si-4/)

## Control statement

- **a.** Employ spam protection mechanisms at system entry and exit points to detect and act on unsolicited messages; and
- **b.** Update spam protection mechanisms when new releases are available in accordance with organizational configuration management policy and procedures.

<details>
<summary>NIST discussion</summary>

System entry and exit points include firewalls, remote-access servers, electronic mail servers, web servers, proxy servers, workstations, notebook computers, and mobile devices. Spam can be transported by different means, including email, email attachments, and web accesses. Spam protection mechanisms include signature definitions.

</details>

## Control enhancements

<a id="si-8.2"></a>

### SI-8(2) Automatic Updates

*Baselines: Moderate, High*

Automatically update spam protection mechanisms [Assignment: organization-defined frequency].

<details>
<summary>Discussion and assessment objectives for SI-8(2)</summary>

Using automated mechanisms to update spam protection mechanisms helps to ensure that updates occur on a regular basis and provide the latest content and protection capabilities.

Determine if spam protection mechanisms are automatically updated [Assignment: organization-defined frequency].

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing spam protection; spam protection mechanisms; records of spam protection updates; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel responsible for spam protection; organizational personnel with information security responsibilities; system/network administrators; system developer.

**Test:** Organizational processes for spam protection; mechanisms supporting and/or implementing automatic updates to spam protection mechanisms.

</details>

<a id="si-8.3"></a>

### SI-8(3) Continuous Learning Capability

*Baselines: Not in a baseline*

Implement spam protection mechanisms with a learning capability to more effectively identify legitimate communications traffic.

<details>
<summary>Discussion and assessment objectives for SI-8(3)</summary>

Learning mechanisms include Bayesian filters that respond to user inputs that identify specific traffic as spam or legitimate by updating algorithm parameters and thereby more accurately separating types of traffic.

Determine if spam protection mechanisms with a learning capability are implemented to more effectively identify legitimate communications traffic.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing spam protection; spam protection mechanisms; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel responsible for spam protection; organizational personnel with information security responsibilities; system/network administrators; system developer.

**Test:** Organizational processes for spam protection; mechanisms supporting and/or implementing spam protection mechanisms with a learning capability.

</details>

*Withdrawn enhancements: SI-8(1).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SI-8</summary>

Determine if:

- **SI-08a.**
  - **SI-08a.[01]** spam protection mechanisms are employed at system entry points to detect unsolicited messages;
  - **SI-08a.[02]** spam protection mechanisms are employed at system exit points to detect unsolicited messages;
  - **SI-08a.[03]** spam protection mechanisms are employed at system entry points to act on unsolicited messages;
  - **SI-08a.[04]** spam protection mechanisms are employed at system exit points to act on unsolicited messages;
- **SI-08b.** spam protection mechanisms are updated when new releases are available in accordance with organizational configuration management policies and procedures.

**Examine:** System and information integrity policy; system and information integrity procedures; configuration management policies and procedures (CM-01); procedures addressing spam protection; spam protection mechanisms; records of spam protection updates; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel responsible for spam protection; organizational personnel with information security responsibilities; system/network administrators; system developer.

**Test:** Organizational processes for implementing spam protection; mechanisms supporting and/or implementing spam protection.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
