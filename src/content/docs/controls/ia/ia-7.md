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
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
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
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

IA-7 covers how people and processes authenticate to a cryptographic module, such as a hardware security module, a cloud key management service, a smart card or a trusted platform module. In practice, meeting the applicable standards means using a module validated under [FIPS 140-3](https://csrc.nist.gov/pubs/fips/140-3/final) in its approved mode. Operators then take on its roles and authenticate the way its security policy describes. The [Identification and Authentication policy](/templates/policies/ia/) states the requirement; [SC-13](/controls/sc/sc-13/) sets which cryptography is approved.

**Common implementations.** Hardware security module administration split across roles, with the crypto officer role needing a quorum of smart cards. Cloud key management where only named key administrators, signed in with multi-factor authentication, hold key management permissions. PIV cards and other smart cards that lock after repeated wrong PINs. Each module, its validation certificate number and its mode recorded in the system security plan, as section 8 of the [encryption and key management standard](/templates/standards/encryption-and-key-management-standard/) requires.

**Organization-defined parameters.** IA-7 has none.

**Evidence assessors ask for.**

- The cryptographic inventory, listing each module with its validation certificate number
- The module's security policy, published with its validation certificate, showing its roles and how operators authenticate
- The list of people and services holding each role on the module
- Configuration showing the module runs in its approved mode

**Inheritance.** Cloud providers and platform teams often provide the validated modules, so validation is inherited. The system owns who may administer its keys and modules, and how they sign in.

**Common findings.**

- Hardware security modules still using default or shared crypto officer credentials.
- Modules run outside their approved mode, so the validation does not cover the cryptography in use.
- Broad cloud permissions that let any administrator manage or use keys.
- New systems choosing modules that are no longer on the validation program's active list.

**Enhancements in the Moderate baseline.** IA-7 has no enhancements.

**Federal systems** (as of September 2026). FIPS 140-3 (March 22, 2019) "is applicable to all Federal agencies that use cryptography-based security systems to protect sensitive information", and modules validated under NIST's Cryptographic Module Validation Program are considered to conform to it. The program's [FIPS 140-3 transition schedule](https://csrc.nist.gov/projects/fips-140-3-transition-effort) moves all FIPS 140-2 certificates to the Historical List on September 22, 2026. Existing systems may keep using those modules; new systems should use FIPS 140-3 validated modules.
