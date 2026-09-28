---
title: 'SC-4 Information in Shared System Resources'
description: 'NIST SP 800-53 Rev. 5 control SC-4, Information in Shared System Resources: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SC-4 Information in Shared System Resources'
  order: 4
control:
  id: SC-4
  family: SC
  baselines: [Moderate, High]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | System | 1 (0 in a baseline) |

**Related controls:** [AC-3](/controls/ac/ac-3/), [AC-4](/controls/ac/ac-4/), [SA-8](/controls/sa/sa-8/)

## Control statement

Prevent unauthorized and unintended information transfer via shared system resources.

<details>
<summary>NIST discussion</summary>

Preventing unauthorized and unintended information transfer via shared system resources stops information produced by the actions of prior users or roles (or the actions of processes acting on behalf of prior users or roles) from being available to current users or roles (or current processes acting on behalf of current users or roles) that obtain access to shared system resources after those resources have been released back to the system. Information in shared system resources also applies to encrypted representations of information. In other contexts, control of information in shared system resources is referred to as object reuse and residual information protection. Information in shared system resources does not address information remanence, which refers to the residual representation of data that has been nominally deleted; covert channels (including storage and timing channels), where shared system resources are manipulated to violate information flow restrictions; or components within systems for which there are only single users or roles.

</details>

## Control enhancements

<a id="sc-4.2"></a>

### SC-4(2) Multilevel or Periods Processing

*Baselines: Not in a baseline*

Prevent unauthorized information transfer via shared resources in accordance with [Assignment: organization-defined procedures] when system processing explicitly switches between different information classification levels or security categories.

<details>
<summary>Discussion and assessment objectives for SC-4(2)</summary>

Changes in processing levels can occur during multilevel or periods processing with information at different classification levels or security categories. It can also occur during serial reuse of hardware components at different classification levels. Organization-defined procedures can include approved sanitization processes for electronically stored information.

Determine if unauthorized information transfer via shared resources is prevented in accordance with [Assignment: organization-defined procedures] when system processing explicitly switches between different information classification levels or security categories.

**Examine:** System and communications protection policy; procedures addressing information protection in shared system resources; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer.

**Test:** Mechanisms preventing the unauthorized transfer of information via shared system resources.

</details>

*Withdrawn enhancements: SC-4(1).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SC-4</summary>

Determine if:

- **SC-04[01]** unauthorized information transfer via shared system resources is prevented;
- **SC-04[02]** unintended information transfer via shared system resources is prevented.

**Examine:** System and communications protection policy; procedures addressing information protection in shared system resources; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer.

**Test:** Mechanisms preventing the unauthorized and unintended transfer of information via shared system resources.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
