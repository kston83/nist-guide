---
title: 'IA-9 Service Identification and Authentication'
description: 'NIST SP 800-53 Rev. 5 control IA-9, Service Identification and Authentication: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'IA-9 Service Identification and Authentication'
  order: 9
control:
  id: IA-9
  family: IA
  baselines: []
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Not in a baseline | Organization | None |

**Related controls:** [IA-3](/controls/ia/ia-3/), [IA-4](/controls/ia/ia-4/), [IA-5](/controls/ia/ia-5/), [IA-13](/controls/ia/ia-13/), [SC-8](/controls/sc/sc-8/)

## Control statement

Uniquely identify and authenticate [Assignment: organization-defined system services and applications] before establishing communications with devices, users, or other services or applications.

<details>
<summary>NIST discussion</summary>

Services that may require identification and authentication include web applications using digital certificates or services or applications that query a database. Identification and authentication methods for system services and applications include information or code signing, provenance graphs, and electronic signatures that indicate the sources of services. Decisions regarding the validity of identification and authentication claims can be made by services separate from the services acting on those decisions. This can occur in distributed system architectures. In such situations, the identification and authentication decisions (instead of actual identifiers and authentication data) are provided to the services that need to act on those decisions.

</details>

*Withdrawn enhancements: IA-9(1), IA-9(2).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for IA-9</summary>

Determine if [Assignment: organization-defined system services and applications] are uniquely identified and authenticated before establishing communications with devices, users, or other services or applications.

**Examine:** Identification and authentication policy; procedures addressing service identification and authentication; system security plan; system design documentation; security safeguards used to identify and authenticate system services; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with system operations responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers; organizational personnel with identification and authentication responsibilities.

**Test:** Security safeguards implementing service identification and authentication capabilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
