---
title: 'SC-8 Transmission Confidentiality and Integrity'
description: 'NIST SP 800-53 Rev. 5 control SC-8, Transmission Confidentiality and Integrity: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SC-8 Transmission Confidentiality and Integrity'
  order: 8
control:
  id: SC-8
  family: SC
  baselines: [Moderate, High]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | System | 5 (1 in a baseline) |

**Related controls:** [AC-17](/controls/ac/ac-17/), [AC-18](/controls/ac/ac-18/), [AU-10](/controls/au/au-10/), [IA-3](/controls/ia/ia-3/), [IA-8](/controls/ia/ia-8/), [IA-9](/controls/ia/ia-9/), [MA-4](/controls/ma/ma-4/), [PE-4](/controls/pe/pe-4/), [SA-4](/controls/sa/sa-4/), [SA-8](/controls/sa/sa-8/), [SC-7](/controls/sc/sc-7/), [SC-16](/controls/sc/sc-16/), [SC-20](/controls/sc/sc-20/), [SC-23](/controls/sc/sc-23/), [SC-28](/controls/sc/sc-28/)

## Control statement

Protect the [Selection (one or more): confidentiality; integrity] of transmitted information.

<details>
<summary>NIST discussion</summary>

Protecting the confidentiality and integrity of transmitted information applies to internal and external networks as well as any system components that can transmit information, including servers, notebook computers, desktop computers, mobile devices, printers, copiers, scanners, facsimile machines, and radios. Unprotected communication paths are exposed to the possibility of interception and modification. Protecting the confidentiality and integrity of information can be accomplished by physical or logical means. Physical protection can be achieved by using protected distribution systems. A protected distribution system is a wireline or fiber-optics telecommunications system that includes terminals and adequate electromagnetic, acoustical, electrical, and physical controls to permit its use for the unencrypted transmission of classified information. Logical protection can be achieved by employing encryption techniques.

Organizations that rely on commercial providers who offer transmission services as commodity services rather than as fully dedicated services may find it difficult to obtain the necessary assurances regarding the implementation of needed controls for transmission confidentiality and integrity. In such situations, organizations determine what types of confidentiality or integrity services are available in standard, commercial telecommunications service packages. If it is not feasible to obtain the necessary controls and assurances of control effectiveness through appropriate contracting vehicles, organizations can implement appropriate compensating controls.

</details>

## Control enhancements

<a id="sc-8.1"></a>

### SC-8(1) Cryptographic Protection

*Baselines: Moderate, High*

Implement cryptographic mechanisms to [Selection (one or more): prevent unauthorized disclosure of information; detect changes to information] during transmission.

<details>
<summary>Discussion and assessment objectives for SC-8(1)</summary>

Encryption protects information from unauthorized disclosure and modification during transmission. Cryptographic mechanisms that protect the confidentiality and integrity of information during transmission include TLS and IPSec. Cryptographic mechanisms used to protect information integrity include cryptographic hash functions that have applications in digital signatures, checksums, and message authentication codes.

Determine if cryptographic mechanisms are implemented to [Selection (one or more): prevent unauthorized disclosure of information; detect changes to information] during transmission.

**Examine:** System and communications protection policy; procedures addressing transmission confidentiality and integrity; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer.

**Test:** Cryptographic mechanisms supporting and/or implementing transmission confidentiality and/or integrity; mechanisms supporting and/or implementing alternative physical safeguards; organizational processes for defining and implementing alternative physical safeguards.

</details>

<a id="sc-8.2"></a>

### SC-8(2) Pre- and Post-transmission Handling

*Baselines: Not in a baseline*

Maintain the [Selection (one or more): confidentiality; integrity] of information during preparation for transmission and during reception.

<details>
<summary>Discussion and assessment objectives for SC-8(2)</summary>

Information can be unintentionally or maliciously disclosed or modified during preparation for transmission or during reception, including during aggregation, at protocol transformation points, and during packing and unpacking. Such unauthorized disclosures or modifications compromise the confidentiality or integrity of the information.

Determine if:

- **SC-08(02)[01]** information [Selection (one or more): confidentiality; integrity] is/are maintained during preparation for transmission;
- **SC-08(02)[02]** information [Selection (one or more): confidentiality; integrity] is/are maintained during reception.

**Examine:** System and communications protection policy; procedures addressing transmission confidentiality and integrity; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer.

**Test:** Mechanisms supporting and/or implementing transmission confidentiality and/or integrity.

</details>

<a id="sc-8.3"></a>

### SC-8(3) Cryptographic Protection for Message Externals

*Baselines: Not in a baseline*

Implement cryptographic mechanisms to protect message externals unless otherwise protected by [Assignment: organization-defined alternative physical controls].

<details>
<summary>Discussion and assessment objectives for SC-8(3)</summary>

Cryptographic protection for message externals addresses protection from the unauthorized disclosure of information. Message externals include message headers and routing information. Cryptographic protection prevents the exploitation of message externals and applies to internal and external networks or links that may be visible to individuals who are not authorized users. Header and routing information is sometimes transmitted in clear text (i.e., unencrypted) because the information is not identified by organizations as having significant value or because encrypting the information can result in lower network performance or higher costs. Alternative physical controls include protected distribution systems.

Determine if cryptographic mechanisms are implemented to protect message externals unless otherwise protected by [Assignment: organization-defined alternative physical controls].

**Examine:** System and communications protection policy; procedures addressing transmission confidentiality and integrity; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer.

**Test:** Cryptographic mechanisms supporting and/or implementing transmission confidentiality and/or integrity for message externals; mechanisms supporting and/or implementing alternative physical safeguards; organizational processes for defining and implementing alternative physical safeguards.

</details>

<a id="sc-8.4"></a>

### SC-8(4) Conceal or Randomize Communications

*Baselines: Not in a baseline*

Implement cryptographic mechanisms to conceal or randomize communication patterns unless otherwise protected by [Assignment: organization-defined alternative physical controls].

<details>
<summary>Discussion and assessment objectives for SC-8(4)</summary>

Concealing or randomizing communication patterns addresses protection from unauthorized disclosure of information. Communication patterns include frequency, periods, predictability, and amount. Changes to communications patterns can reveal information with intelligence value, especially when combined with other available information related to the mission and business functions of the organization. Concealing or randomizing communications prevents the derivation of intelligence based on communications patterns and applies to both internal and external networks or links that may be visible to individuals who are not authorized users. Encrypting the links and transmitting in continuous, fixed, or random patterns prevents the derivation of intelligence from the system communications patterns. Alternative physical controls include protected distribution systems.

Determine if cryptographic mechanisms are implemented to conceal or randomize communication patterns unless otherwise protected by [Assignment: organization-defined alternative physical controls].

**Examine:** System and communications protection policy; procedures addressing transmission confidentiality and integrity; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer.

**Test:** Cryptographic mechanisms supporting and/or implementing concealment or randomization of communication patterns; mechanisms supporting and/or implementing alternative physical safeguards; organizational processes for defining and implementing alternative physical safeguards.

</details>

<a id="sc-8.5"></a>

### SC-8(5) Protected Distribution System

*Baselines: Not in a baseline*

Implement [Assignment: organization-defined protected distribution system] to [Selection (one or more): prevent unauthorized disclosure of information; detect changes to information] during transmission.

<details>
<summary>Discussion and assessment objectives for SC-8(5)</summary>

The purpose of a protected distribution system is to deter, detect, and/or make difficult physical access to the communication lines that carry national security information.

Determine if the [Assignment: organization-defined protected distribution system] is implemented to [Selection (one or more): prevent unauthorized disclosure of information; detect changes to information] during transmission.

**Examine:** System and communications protection policy; procedures addressing transmission confidentiality and integrity; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer.

**Test:** Cryptographic mechanisms supporting and/or implementing concealment or randomization of communication patterns; mechanisms supporting and/or implementing protected distribution systems.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SC-8</summary>

Determine if the [Selection (one or more): confidentiality; integrity] of transmitted information is/are protected.

**Examine:** System and communications protection policy; procedures addressing transmission confidentiality and integrity; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer.

**Test:** Mechanisms supporting and/or implementing transmission confidentiality and/or integrity.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
