---
title: 'AC-7 Unsuccessful Logon Attempts'
description: 'NIST SP 800-53 Rev. 5 control AC-7, Unsuccessful Logon Attempts: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'AC-7 Unsuccessful Logon Attempts'
  order: 7
control:
  id: AC-7
  family: AC
  baselines: [Low, Moderate, High]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | System | 3 (0 in a baseline) |

**Related controls:** [AC-2](/controls/ac/ac-2/), [AC-9](/controls/ac/ac-9/), [AU-2](/controls/au/au-2/), [AU-6](/controls/au/au-6/), [IA-5](/controls/ia/ia-5/)

## Control statement

- **a.** Enforce a limit of [Assignment: organization-defined number] consecutive invalid logon attempts by a user during a [Assignment: organization-defined time period] ; and
- **b.** Automatically [Selection (one or more): lock the account or node for [Assignment: organization-defined time period] ; lock the account or node until released by an administrator; delay next logon prompt per [Assignment: organization-defined delay algorithm] ; notify system administrator; take other [Assignment: organization-defined action] ] when the maximum number of unsuccessful attempts is exceeded.

<details>
<summary>NIST discussion</summary>

The need to limit unsuccessful logon attempts and take subsequent action when the maximum number of attempts is exceeded applies regardless of whether the logon occurs via a local or network connection. Due to the potential for denial of service, automatic lockouts initiated by systems are usually temporary and automatically release after a predetermined, organization-defined time period. If a delay algorithm is selected, organizations may employ different algorithms for different components of the system based on the capabilities of those components. Responses to unsuccessful logon attempts may be implemented at the operating system and the application levels. Organization-defined actions that may be taken when the number of allowed consecutive invalid logon attempts is exceeded include prompting the user to answer a secret question in addition to the username and password, invoking a lockdown mode with limited user capabilities (instead of full lockout), allowing users to only logon from specified Internet Protocol (IP) addresses, requiring a CAPTCHA to prevent automated attacks, or applying user profiles such as location, time of day, IP address, device, or Media Access Control (MAC) address. If automatic system lockout or execution of a delay algorithm is not implemented in support of the availability objective, organizations consider a combination of other actions to help prevent brute force attacks. In addition to the above, organizations can prompt users to respond to a secret question before the number of allowed unsuccessful logon attempts is exceeded. Automatically unlocking an account after a specified period of time is generally not permitted. However, exceptions may be required based on operational mission or need.

</details>

## Control enhancements

<a id="ac-7.2"></a>

### AC-7(2) Purge or Wipe Mobile Device

*Baselines: Not in a baseline*

Purge or wipe information from [Assignment: organization-defined mobile devices] based on [Assignment: organization-defined purging or wiping requirements and techniques] after [Assignment: organization-defined number] consecutive, unsuccessful device logon attempts.

<details>
<summary>Discussion and assessment objectives for AC-7(2)</summary>

A mobile device is a computing device that has a small form factor such that it can be carried by a single individual; is designed to operate without a physical connection; possesses local, non-removable or removable data storage; and includes a self-contained power source. Purging or wiping the device applies only to mobile devices for which the organization-defined number of unsuccessful logons occurs. The logon is to the mobile device, not to any one account on the device. Successful logons to accounts on mobile devices reset the unsuccessful logon count to zero. Purging or wiping may be unnecessary if the information on the device is protected with sufficiently strong encryption mechanisms.

Determine if information is purged or wiped from [Assignment: organization-defined mobile devices] based on [Assignment: organization-defined purging or wiping requirements and techniques] after [Assignment: organization-defined number] consecutive, unsuccessful device logon attempts.

**Examine:** Access control policy; procedures addressing unsuccessful logon attempts on mobile devices; system design documentation; system configuration settings and associated documentation; list of mobile devices to be purged/wiped after organization-defined consecutive, unsuccessful device logon attempts; list of purging/wiping requirements or techniques for mobile devices; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing access control policy for unsuccessful device logon attempts.

</details>

<a id="ac-7.3"></a>

### AC-7(3) Biometric Attempt Limiting

*Baselines: Not in a baseline*

Limit the number of unsuccessful biometric logon attempts to [Assignment: organization-defined number].

<details>
<summary>Discussion and assessment objectives for AC-7(3)</summary>

Biometrics are probabilistic in nature. The ability to successfully authenticate can be impacted by many factors, including matching performance and presentation attack detection mechanisms. Organizations select the appropriate number of attempts for users based on organizationally-defined factors.

Determine if unsuccessful biometric logon attempts are limited to [Assignment: organization-defined number].

**Examine:** Access control policy; procedures addressing unsuccessful logon attempts on biometric devices; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing access control policy for unsuccessful logon attempts.

</details>

<a id="ac-7.4"></a>

### AC-7(4) Use of Alternate Authentication Factor

*Baselines: Not in a baseline*

- **(a)** Allow the use of [Assignment: organization-defined authentication factors] that are different from the primary authentication factors after the number of organization-defined consecutive invalid logon attempts have been exceeded; and
- **(b)** Enforce a limit of [Assignment: organization-defined number] consecutive invalid logon attempts through use of the alternative factors by a user during a [Assignment: organization-defined time period].

<details>
<summary>Discussion and assessment objectives for AC-7(4)</summary>

The use of alternate authentication factors supports the objective of availability and allows a user who has inadvertently been locked out to use additional authentication factors to bypass the lockout.

Determine if:

- **AC-07(04)(a)** [Assignment: organization-defined authentication factors] that are different from the primary authentication factors are allowed to be used after the number of organization-defined consecutive invalid logon attempts have been exceeded;
- **AC-07(04)(b)** a limit of [Assignment: organization-defined number] consecutive invalid logon attempts through the use of the alternative factors by the user during a [Assignment: organization-defined time period] is enforced.

**Examine:** Access control policy; procedures addressing unsuccessful logon attempts for primary and alternate authentication factors; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing access control policy for unsuccessful logon attempts.

</details>

*Withdrawn enhancements: AC-7(1).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for AC-7</summary>

Determine if:

- **AC-07a.** a limit of [Assignment: organization-defined number] consecutive invalid logon attempts by a user during [Assignment: organization-defined time period] is enforced;
- **AC-07b.** automatically [Selection (one or more): lock the account or node for [Assignment: organization-defined time period] ; lock the account or node until released by an administrator; delay next logon prompt per [Assignment: organization-defined delay algorithm] ; notify system administrator; take other [Assignment: organization-defined action] ] when the maximum number of unsuccessful attempts is exceeded.

**Examine:** Access control policy; procedures addressing unsuccessful logon attempts; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with information security responsibilities; system developers; system/network administrators.

**Test:** Mechanisms implementing access control policy for unsuccessful logon attempts.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
