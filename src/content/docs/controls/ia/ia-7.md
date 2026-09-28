---
title: 'IA-7 Cryptographic Module Authentication'
description: 'NIST SP 800-53 Rev. 5 control IA-7, Cryptographic Module Authentication: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'IA-7 Cryptographic Module Authentication'
  order: 7
control:
  id: IA-7
  family: IA
  baselines: [Low, Moderate, High]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | System | None |

**Related controls:** [AC-3](/controls/ac/ac-3/), [IA-5](/controls/ia/ia-5/), [SA-4](/controls/sa/sa-4/), [SC-12](/controls/sc/sc-12/), [SC-13](/controls/sc/sc-13/)

## Control statement

Implement mechanisms for authentication to a cryptographic module that meet the requirements of applicable laws, executive orders, directives, policies, regulations, standards, and guidelines for such authentication.

<details>
<summary>NIST discussion</summary>

Authentication mechanisms may be required within a cryptographic module to authenticate an operator accessing the module and to verify that the operator is authorized to assume the requested role and perform services within that role.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for IA-7</summary>

Determine if mechanisms for authentication to a cryptographic module are implemented that meet the requirements of applicable laws, executive orders, directives, policies, regulations, standards, and guidelines for such authentication.

**Examine:** Identification and authentication policy; system security plan; procedures addressing cryptographic module authentication; system design documentation; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with responsibility for cryptographic module authentication; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms supporting and/or implementing cryptographic module authentication.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
