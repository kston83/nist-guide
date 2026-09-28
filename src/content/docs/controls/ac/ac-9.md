---
title: 'AC-9 Previous Logon Notification'
description: 'NIST SP 800-53 Rev. 5 control AC-9, Previous Logon Notification: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'AC-9 Previous Logon Notification'
  order: 9
control:
  id: AC-9
  family: AC
  baselines: []
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Not in a baseline | System | 4 (0 in a baseline) |

**Related controls:** [AC-7](/controls/ac/ac-7/), [PL-4](/controls/pl/pl-4/)

## Control statement

Notify the user, upon successful logon to the system, of the date and time of the last logon.

<details>
<summary>NIST discussion</summary>

Previous logon notification is applicable to system access via human user interfaces and access to systems that occurs in other types of architectures. Information about the last successful logon allows the user to recognize if the date and time provided is not consistent with the user’s last access.

</details>

## Control enhancements

<a id="ac-9.1"></a>

### AC-9(1) Unsuccessful Logons

*Baselines: Not in a baseline*

Notify the user, upon successful logon, of the number of unsuccessful logon attempts since the last successful logon.

<details>
<summary>Discussion and assessment objectives for AC-9(1)</summary>

Information about the number of unsuccessful logon attempts since the last successful logon allows the user to recognize if the number of unsuccessful logon attempts is consistent with the user’s actual logon attempts.

Determine if the user is notified, upon successful logon, of the number of unsuccessful logon attempts since the last successful logon.

**Examine:** Access control policy; procedures addressing previous logon notification; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developers.

**Test:** Mechanisms implementing access control policy for previous logon notification.

</details>

<a id="ac-9.2"></a>

### AC-9(2) Successful and Unsuccessful Logons

*Baselines: Not in a baseline*

Notify the user, upon successful logon, of the number of [Selection: successful logons; unsuccessful logon attempts; both] during [Assignment: organization-defined time period].

<details>
<summary>Discussion and assessment objectives for AC-9(2)</summary>

Information about the number of successful and unsuccessful logon attempts within a specified time period allows the user to recognize if the number and type of logon attempts are consistent with the user’s actual logon attempts.

Determine if the user is notified, upon successful logon, of the number of [Selection: successful logons; unsuccessful logon attempts; both] during [Assignment: organization-defined time period].

**Examine:** Access control policy; procedures addressing previous logon notification; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developers.

**Test:** Mechanisms implementing access control policy for previous logon notification.

</details>

<a id="ac-9.3"></a>

### AC-9(3) Notification of Account Changes

*Baselines: Not in a baseline*

Notify the user, upon successful logon, of changes to [Assignment: organization-defined security-related characteristics or parameters] during [Assignment: organization-defined time period].

<details>
<summary>Discussion and assessment objectives for AC-9(3)</summary>

Information about changes to security-related account characteristics within a specified time period allows users to recognize if changes were made without their knowledge.

Determine if the user is notified, upon successful logon, of changes to [Assignment: organization-defined security-related characteristics or parameters] during [Assignment: organization-defined time period].

**Examine:** Access control policy; procedures addressing previous logon notification; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developers.

**Test:** Mechanisms implementing access control policy for previous logon notification.

</details>

<a id="ac-9.4"></a>

### AC-9(4) Additional Logon Information

*Baselines: Not in a baseline*

Notify the user, upon successful logon, of the following additional information: [Assignment: organization-defined additional information].

<details>
<summary>Discussion and assessment objectives for AC-9(4)</summary>

Organizations can specify additional information to be provided to users upon logon, including the location of the last logon. User location is defined as information that can be determined by systems, such as Internet Protocol (IP) addresses from which network logons occurred, notifications of local logons, or device identifiers.

Determine if the user is notified, upon successful logon, of [Assignment: organization-defined additional information].

**Examine:** Access control policy; procedures addressing previous logon notification; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developers.

**Test:** Mechanisms implementing access control policy for previous logon notification.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for AC-9</summary>

Determine if the user is notified, upon successful logon to the system, of the date and time of the last logon.

**Examine:** Access control policy; procedures addressing previous logon notification; system design documentation; system configuration settings and associated documentation; system notification messages; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developers.

**Test:** Mechanisms implementing access control policy for previous logon notification.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
