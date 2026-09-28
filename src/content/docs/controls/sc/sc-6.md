---
title: 'SC-6 Resource Availability'
description: 'NIST SP 800-53 Rev. 5 control SC-6, Resource Availability: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SC-6 Resource Availability'
  order: 6
control:
  id: SC-6
  family: SC
  baselines: []
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Not in a baseline | System | None |

**Related controls:** [SC-5](/controls/sc/sc-5/)

## Control statement

Protect the availability of resources by allocating [Assignment: organization-defined resources] by [Selection (one or more): priority; quota; [Assignment: organization-defined controls] ].

<details>
<summary>NIST discussion</summary>

Priority protection prevents lower-priority processes from delaying or interfering with the system that services higher-priority processes. Quotas prevent users or processes from obtaining more than predetermined amounts of resources.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SC-6</summary>

Determine if the availability of resources is protected by allocating [Assignment: organization-defined resources] by [Selection (one or more): priority; quota; [Assignment: organization-defined controls] ].

**Examine:** System and communications protection policy; procedures addressing prioritization of system resources; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer.

**Test:** Mechanisms supporting and/or implementing a resource allocation capability; safeguards employed to protect availability of resources.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
