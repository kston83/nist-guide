---
title: 'SI-6 Security and Privacy Function Verification'
description: 'NIST SP 800-53 Rev. 5 control SI-6, Security and Privacy Function Verification: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SI-6 Security and Privacy Function Verification'
  order: 6
control:
  id: SI-6
  family: SI
  baselines: [High]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| High | System | 2 (0 in a baseline) |

**Related controls:** [CA-7](/controls/ca/ca-7/), [CM-4](/controls/cm/cm-4/), [CM-6](/controls/cm/cm-6/), [SI-7](/controls/si/si-7/)

## Control statement

- **a.** Verify the correct operation of [Assignment: organization-defined security and privacy functions];
- **b.** Perform the verification of the functions specified in SI-6a [Selection (one or more): [Assignment: organization-defined system transitional states] ; upon command by user with appropriate privilege; [Assignment: organization-defined frequency] ];
- **c.** Alert [Assignment: organization-defined personnel or roles] to failed security and privacy verification tests; and
- **d.** [Selection (one or more): shut the system down; restart the system; [Assignment: organization-defined alternative action(s)] ] when anomalies are discovered.

<details>
<summary>NIST discussion</summary>

Transitional states for systems include system startup, restart, shutdown, and abort. System notifications include hardware indicator lights, electronic alerts to system administrators, and messages to local computer consoles. In contrast to security function verification, privacy function verification ensures that privacy functions operate as expected and are approved by the senior agency official for privacy or that privacy attributes are applied or used as expected.

</details>

## Control enhancements

<a id="si-6.2"></a>

### SI-6(2) Automation Support for Distributed Testing

*Baselines: Not in a baseline*

Implement automated mechanisms to support the management of distributed security and privacy function testing.

<details>
<summary>Discussion and assessment objectives for SI-6(2)</summary>

The use of automated mechanisms to support the management of distributed function testing helps to ensure the integrity, timeliness, completeness, and efficacy of such testing.

Determine if:

- **SI-06(02)[01]** automated mechanisms are implemented to support the management of distributed security function testing;
- **SI-06(02)[02]** automated mechanisms are implemented to support the management of distributed privacy function testing.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing security and privacy function verification; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with security and privacy function verification responsibilities; organizational personnel implementing, operating, and maintaining the system; system/network administrators; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for security and privacy function verification; automated mechanisms supporting and/or implementing the management of distributed security and privacy testing.

</details>

<a id="si-6.3"></a>

### SI-6(3) Report Verification Results

*Baselines: Not in a baseline*

Report the results of security and privacy function verification to [Assignment: organization-defined personnel or roles].

<details>
<summary>Discussion and assessment objectives for SI-6(3)</summary>

Organizational personnel with potential interest in the results of the verification of security and privacy functions include systems security officers, senior agency information security officers, and senior agency officials for privacy.

Determine if:

- **SI-06(03)[01]** the results of security function verification are reported to [Assignment: organization-defined personnel or roles];
- **SI-06(03)[02]** the results of privacy function verification are reported to [Assignment: organization-defined personnel or roles].

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing security and privacy function verification; system design documentation; system configuration settings and associated documentation; reports of security and privacy function verification results; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with security and privacy function verification responsibilities; organizational personnel who are recipients of security and privacy function verification reports; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for reporting security and privacy function verification results; mechanisms supporting and/or implementing the reporting of security and privacy function verification results.

</details>

*Withdrawn enhancements: SI-6(1).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SI-6</summary>

Determine if:

- **SI-06a.**
  - **SI-06a.[01]** [Assignment: organization-defined security functions] are verified to be operating correctly;
  - **SI-06a.[02]** [Assignment: organization-defined privacy functions] are verified to be operating correctly;
- **SI-06b.**
  - **SI-06b.[01]** [Assignment: organization-defined security functions] are verified [Selection (one or more): [Assignment: organization-defined system transitional states] ; upon command by user with appropriate privilege; [Assignment: organization-defined frequency] ];
  - **SI-06b.[02]** [Assignment: organization-defined privacy functions] are verified [Selection (one or more): [Assignment: organization-defined system transitional states] ; upon command by user with appropriate privilege; [Assignment: organization-defined frequency] ];
- **SI-06c.**
  - **SI-06c.[01]** [Assignment: organization-defined personnel or roles] is/are alerted to failed security verification tests;
  - **SI-06c.[02]** [Assignment: organization-defined personnel or roles] is/are alerted to failed privacy verification tests;
- **SI-06d.** [Selection (one or more): shut the system down; restart the system; [Assignment: organization-defined alternative action(s)] ] is/are initiated when anomalies are discovered.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing security and privacy function verification; system design documentation; system configuration settings and associated documentation; alerts/notifications of failed security verification tests; list of system transition states requiring security functionality verification; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with security and privacy function verification responsibilities; organizational personnel implementing, operating, and maintaining the system; system/network administrators; organizational personnel with information security and privacy responsibilities; system developer.

**Test:** Organizational processes for security and privacy function verification; mechanisms supporting and/or implementing the security and privacy function verification capability.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
