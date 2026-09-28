---
title: 'IA-4 Identifier Management'
description: 'NIST SP 800-53 Rev. 5 control IA-4, Identifier Management: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'IA-4 Identifier Management'
  order: 4
control:
  id: IA-4
  family: IA
  baselines: [Low, Moderate, High]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 6 (1 in a baseline) |

**Related controls:** [AC-5](/controls/ac/ac-5/), [IA-2](/controls/ia/ia-2/), [IA-3](/controls/ia/ia-3/), [IA-5](/controls/ia/ia-5/), [IA-8](/controls/ia/ia-8/), [IA-9](/controls/ia/ia-9/), [IA-12](/controls/ia/ia-12/), [MA-4](/controls/ma/ma-4/), [PE-2](/controls/pe/pe-2/), [PE-3](/controls/pe/pe-3/), [PE-4](/controls/pe/pe-4/), [PL-4](/controls/pl/pl-4/), [PM-12](/controls/pm/pm-12/), [PS-3](/controls/ps/ps-3/), [PS-4](/controls/ps/ps-4/), [PS-5](/controls/ps/ps-5/), [SC-37](/controls/sc/sc-37/)

## Control statement

Manage system identifiers by:

- **a.** Receiving authorization from [Assignment: organization-defined personnel or roles] to assign an individual, group, role, service, or device identifier;
- **b.** Selecting an identifier that identifies an individual, group, role, service, or device;
- **c.** Assigning the identifier to the intended individual, group, role, service, or device; and
- **d.** Preventing reuse of identifiers for [Assignment: organization-defined time period].

<details>
<summary>NIST discussion</summary>

Common device identifiers include Media Access Control (MAC) addresses, Internet Protocol (IP) addresses, or device-unique token identifiers. The management of individual identifiers is not applicable to shared system accounts. Typically, individual identifiers are the usernames of the system accounts assigned to those individuals. In such instances, the account management activities of AC-2 use account names provided by IA-4 . Identifier management also addresses individual identifiers not necessarily associated with system accounts. Preventing the reuse of identifiers implies preventing the assignment of previously used individual, group, role, service, or device identifiers to different individuals, groups, roles, services, or devices.

</details>

## Control enhancements

<a id="ia-4.1"></a>

### IA-4(1) Prohibit Account Identifiers as Public Identifiers

*Baselines: Not in a baseline*

Prohibit the use of system account identifiers that are the same as public identifiers for individual accounts.

<details>
<summary>Discussion and assessment objectives for IA-4(1)</summary>

Prohibiting account identifiers as public identifiers applies to any publicly disclosed account identifier used for communication such as, electronic mail and instant messaging. Prohibiting the use of systems account identifiers that are the same as some public identifier, such as the individual identifier section of an electronic mail address, makes it more difficult for adversaries to guess user identifiers. Prohibiting account identifiers as public identifiers without the implementation of other supporting controls only complicates guessing of identifiers. Additional protections are required for authenticators and credentials to protect the account.

Determine if the use of system account identifiers that are the same as public identifiers is prohibited for individual accounts.

**Examine:** Identification and authentication policy; system security plan; procedures addressing identifier management; procedures addressing account management; system design documentation; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with identifier management responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Mechanisms supporting and/or implementing identifier management.

</details>

<a id="ia-4.4"></a>

### IA-4(4) Identify User Status

*Baselines: Moderate, High*

Manage individual identifiers by uniquely identifying each individual as [Assignment: organization-defined characteristics].

<details>
<summary>Discussion and assessment objectives for IA-4(4)</summary>

Characteristics that identify the status of individuals include contractors, foreign nationals, and non-organizational users. Identifying the status of individuals by these characteristics provides additional information about the people with whom organizational personnel are communicating. For example, it might be useful for a government employee to know that one of the individuals on an email message is a contractor.

Determine if individual identifiers are managed by uniquely identifying each individual as [Assignment: organization-defined characteristics].

**Examine:** Identification and authentication policy; system security plan; procedures addressing identifier management; procedures addressing account management; list of characteristics identifying individual status; other relevant documents or records.

**Interview:** Organizational personnel with identifier management responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Mechanisms supporting and/or implementing identifier management.

</details>

<a id="ia-4.5"></a>

### IA-4(5) Dynamic Management

*Baselines: Not in a baseline*

Manage individual identifiers dynamically in accordance with [Assignment: organization-defined dynamic identifier policy].

<details>
<summary>Discussion and assessment objectives for IA-4(5)</summary>

In contrast to conventional approaches to identification that presume static accounts for preregistered users, many distributed systems establish identifiers at runtime for entities that were previously unknown. When identifiers are established at runtime for previously unknown entities, organizations can anticipate and provision for the dynamic establishment of identifiers. Pre-established trust relationships and mechanisms with appropriate authorities to validate credentials and related identifiers are essential.

Determine if individual identifiers are dynamically managed in accordance with [Assignment: organization-defined dynamic identifier policy].

**Examine:** Identification and authentication policy; system security plan; procedures addressing identifier management; procedures addressing account management; system design documentation; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with identifier management responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms supporting and/or implementing dynamic identifier management.

</details>

<a id="ia-4.6"></a>

### IA-4(6) Cross-organization Management

*Baselines: Not in a baseline*

Coordinate with the following external organizations for cross-organization management of identifiers: [Assignment: organization-defined external organizations].

<details>
<summary>Discussion and assessment objectives for IA-4(6)</summary>

Cross-organization identifier management provides the capability to identify individuals, groups, roles, or devices when conducting cross-organization activities involving the processing, storage, or transmission of information.

Determine if cross-organization management of identifiers is coordinated with [Assignment: organization-defined external organizations].

**Examine:** Identification and authentication policy; procedures addressing identifier management; procedures addressing account management; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with identifier management responsibilities; organizational personnel with information security responsibilities.

**Test:** Mechanisms supporting and/or implementing identifier management.

</details>

<a id="ia-4.8"></a>

### IA-4(8) Pairwise Pseudonymous Identifiers

*Baselines: Not in a baseline*

Generate pairwise pseudonymous identifiers.

<details>
<summary>Discussion and assessment objectives for IA-4(8)</summary>

A pairwise pseudonymous identifier is an opaque unguessable subscriber identifier generated by an identity provider for use at a specific individual relying party. Generating distinct pairwise pseudonymous identifiers with no identifying information about a subscriber discourages subscriber activity tracking and profiling beyond the operational requirements established by an organization. The pairwise pseudonymous identifiers are unique to each relying party except in situations where relying parties can show a demonstrable relationship justifying an operational need for correlation, or all parties consent to being correlated in such a manner.

Determine if pairwise pseudonymous identifiers are generated.

**Examine:** Identification and authentication policy; system security plan; procedures addressing identifier management; procedures addressing account management; system design documentation; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with identifier management responsibilities; organizational personnel with information security responsibilities.

**Test:** Mechanisms supporting and/or implementing identifier management.

</details>

<a id="ia-4.9"></a>

### IA-4(9) Attribute Maintenance and Protection

*Baselines: Not in a baseline*

Maintain the attributes for each uniquely identified individual, device, or service in [Assignment: organization-defined protected central storage].

<details>
<summary>Discussion and assessment objectives for IA-4(9)</summary>

For each of the entities covered in IA-2, IA-3, IA-8 , and IA-9 , it is important to maintain the attributes for each authenticated entity on an ongoing basis in a central (protected) store.

Determine if the attributes for each uniquely identified individual, device, or service are maintained in [Assignment: organization-defined protected central storage].

**Examine:** Identification and authentication policy; system security plan; procedures addressing identifier management; procedures addressing account management; system design documentation; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with identifier management responsibilities; organizational personnel with information security responsibilities.

**Test:** Mechanisms supporting and/or implementing identifier management.

</details>

*Withdrawn enhancements: IA-4(2), IA-4(3), IA-4(7).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for IA-4</summary>

Determine if:

- **IA-04a.** system identifiers are managed by receiving authorization from [Assignment: organization-defined personnel or roles] to assign to an individual, group, role, or device identifier;
- **IA-04b.** system identifiers are managed by selecting an identifier that identifies an individual, group, role, service, or device;
- **IA-04c.** system identifiers are managed by assigning the identifier to the intended individual, group, role, service, or device;
- **IA-04d.** system identifiers are managed by preventing reuse of identifiers for [Assignment: organization-defined time period].

**Examine:** Identification and authentication policy; procedures addressing identifier management; procedures addressing account management; system security plan; system design documentation; system configuration settings and associated documentation; list of system accounts; list of identifiers generated from physical access control devices; other relevant documents or records.

**Interview:** Organizational personnel with identifier management responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms supporting and/or implementing identifier management.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
