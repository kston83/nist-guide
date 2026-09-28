---
title: 'IA-2 Identification and Authentication (Organizational Users)'
description: 'NIST SP 800-53 Rev. 5 control IA-2, Identification and Authentication (Organizational Users): requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'IA-2 Identification and Authentication (Organizational Users)'
  order: 2
control:
  id: IA-2
  family: IA
  baselines: [Low, Moderate, High]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 8 (5 in a baseline) |

**Related controls:** [AC-2](/controls/ac/ac-2/), [AC-3](/controls/ac/ac-3/), [AC-4](/controls/ac/ac-4/), [AC-14](/controls/ac/ac-14/), [AC-17](/controls/ac/ac-17/), [AC-18](/controls/ac/ac-18/), [AU-1](/controls/au/au-1/), [AU-6](/controls/au/au-6/), [IA-4](/controls/ia/ia-4/), [IA-5](/controls/ia/ia-5/), [IA-8](/controls/ia/ia-8/), [IA-13](/controls/ia/ia-13/), [MA-4](/controls/ma/ma-4/), [MA-5](/controls/ma/ma-5/), [PE-2](/controls/pe/pe-2/), [PL-4](/controls/pl/pl-4/), [SA-4](/controls/sa/sa-4/), [SA-8](/controls/sa/sa-8/)

## Control statement

Uniquely identify and authenticate organizational users and associate that unique identification with processes acting on behalf of those users.

<details>
<summary>NIST discussion</summary>

Organizations can satisfy the identification and authentication requirements by complying with the requirements in HSPD 12 . Organizational users include employees or individuals who organizations consider to have an equivalent status to employees (e.g., contractors and guest researchers). Unique identification and authentication of users applies to all accesses other than those that are explicitly identified in AC-14 and that occur through the authorized use of group authenticators without individual authentication. Since processes execute on behalf of groups and roles, organizations may require unique identification of individuals in group accounts or for detailed accountability of individual activity.

Organizations employ passwords, physical authenticators, or biometrics to authenticate user identities or, in the case of multi-factor authentication, some combination thereof. Access to organizational systems is defined as either local access or network access. Local access is any access to organizational systems by users or processes acting on behalf of users, where access is obtained through direct connections without the use of networks. Network access is access to organizational systems by users (or processes acting on behalf of users) where access is obtained through network connections (i.e., nonlocal accesses). Remote access is a type of network access that involves communication through external networks. Internal networks include local area networks and wide area networks.

The use of encrypted virtual private networks for network connections between organization-controlled endpoints and non-organization-controlled endpoints may be treated as internal networks with respect to protecting the confidentiality and integrity of information traversing the network. Identification and authentication requirements for non-organizational users are described in IA-8.

</details>

## Control enhancements

<a id="ia-2.1"></a>

### IA-2(1) Multi-factor Authentication to Privileged Accounts

*Baselines: Low, Moderate, High*

Implement multi-factor authentication for access to privileged accounts.

<details>
<summary>Discussion and assessment objectives for IA-2(1)</summary>

Multi-factor authentication requires the use of two or more different factors to achieve authentication. The authentication factors are defined as follows: something you know (e.g., a personal identification number [PIN]), something you have (e.g., a physical authenticator such as a cryptographic private key), or something you are (e.g., a biometric). Multi-factor authentication solutions that feature physical authenticators include hardware authenticators that provide time-based or challenge-response outputs and smart cards such as the U.S. Government Personal Identity Verification (PIV) card or the Department of Defense (DoD) Common Access Card (CAC). In addition to authenticating users at the system level (i.e., at logon), organizations may employ authentication mechanisms at the application level, at their discretion, to provide increased security. Regardless of the type of access (i.e., local, network, remote), privileged accounts are authenticated using multi-factor options appropriate for the level of risk. Organizations can add additional security measures, such as additional or more rigorous authentication mechanisms, for specific types of access.

Determine if multi-factor authentication is implemented for access to privileged accounts.

**Examine:** Identification and authentication policy; procedures addressing user identification and authentication; system security plan; system design documentation; system configuration settings and associated documentation; system audit records; list of system accounts; other relevant documents or records.

**Interview:** Organizational personnel with system operations responsibilities; organizational personnel with account management responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms supporting and/or implementing a multi-factor authentication capability.

</details>

<a id="ia-2.2"></a>

### IA-2(2) Multi-factor Authentication to Non-privileged Accounts

*Baselines: Low, Moderate, High*

Implement multi-factor authentication for access to non-privileged accounts.

<details>
<summary>Discussion and assessment objectives for IA-2(2)</summary>

Multi-factor authentication requires the use of two or more different factors to achieve authentication. The authentication factors are defined as follows: something you know (e.g., a personal identification number [PIN]), something you have (e.g., a physical authenticator such as a cryptographic private key), or something you are (e.g., a biometric). Multi-factor authentication solutions that feature physical authenticators include hardware authenticators that provide time-based or challenge-response outputs and smart cards such as the U.S. Government Personal Identity Verification card or the DoD Common Access Card. In addition to authenticating users at the system level, organizations may also employ authentication mechanisms at the application level, at their discretion, to provide increased information security. Regardless of the type of access (i.e., local, network, remote), non-privileged accounts are authenticated using multi-factor options appropriate for the level of risk. Organizations can provide additional security measures, such as additional or more rigorous authentication mechanisms, for specific types of access.

Determine if multi-factor authentication for access to non-privileged accounts is implemented.

**Examine:** Identification and authentication policy; system security plan; procedures addressing user identification and authentication; system design documentation; system configuration settings and associated documentation; system audit records; list of system accounts; other relevant documents or records.

**Interview:** Organizational personnel with system operations responsibilities; organizational personnel with account management responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms supporting and/or implementing a multi-factor authentication capability.

</details>

<a id="ia-2.5"></a>

### IA-2(5) Individual Authentication with Group Authentication

*Baselines: High*

When shared accounts or authenticators are employed, require users to be individually authenticated before granting access to the shared accounts or resources.

<details>
<summary>Discussion and assessment objectives for IA-2(5)</summary>

Individual authentication prior to shared group authentication mitigates the risk of using group accounts or authenticators.

Determine if users are required to be individually authenticated before granting access to the shared accounts or resources when shared accounts or authenticators are employed.

**Examine:** Identification and authentication policy; system security plan; procedures addressing user identification and authentication; system design documentation; system configuration settings and associated documentation; system audit records; list of system accounts; other relevant documents or records.

**Interview:** Organizational personnel with system operations responsibilities; organizational personnel with account management responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms supporting and/or implementing an authentication capability for group accounts.

</details>

<a id="ia-2.6"></a>

### IA-2(6) Access to Accounts —separate Device

*Baselines: Not in a baseline*

Implement multi-factor authentication for [Selection (one or more): local; network; remote] access to [Selection (one or more): privileged accounts; non-privileged accounts] such that:

- **(a)** One of the factors is provided by a device separate from the system gaining access; and
- **(b)** The device meets [Assignment: organization-defined strength of mechanism requirements].

<details>
<summary>Discussion and assessment objectives for IA-2(6)</summary>

The purpose of requiring a device that is separate from the system to which the user is attempting to gain access for one of the factors during multi-factor authentication is to reduce the likelihood of compromising authenticators or credentials stored on the system. Adversaries may be able to compromise such authenticators or credentials and subsequently impersonate authorized users. Implementing one of the factors on a separate device (e.g., a hardware token), provides a greater strength of mechanism and an increased level of assurance in the authentication process.

Determine if:

- **IA-02(06)(a)** multi-factor authentication is implemented for [Selection (one or more): local; network; remote] access to [Selection (one or more): privileged accounts; non-privileged accounts] such that one of the factors is provided by a device separate from the system gaining access;
- **IA-02(06)(b)** multi-factor authentication is implemented for [Selection (one or more): local; network; remote] access to [Selection (one or more): privileged accounts; non-privileged accounts] such that the device meets [Assignment: organization-defined strength of mechanism requirements].

**Examine:** Identification and authentication policy; system security plan; procedures addressing user identification and authentication; system design documentation; system configuration settings and associated documentation; system audit records; list of system accounts; other relevant documents or records.

**Interview:** Organizational personnel with system operations responsibilities; organizational personnel with account management responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms supporting and/or implementing multi-factor authentication capability.

</details>

<a id="ia-2.8"></a>

### IA-2(8) Access to Accounts — Replay Resistant

*Baselines: Low, Moderate, High*

Implement replay-resistant authentication mechanisms for access to [Selection (one or more): privileged accounts; non-privileged accounts].

<details>
<summary>Discussion and assessment objectives for IA-2(8)</summary>

Authentication processes resist replay attacks if it is impractical to achieve successful authentications by replaying previous authentication messages. Replay-resistant techniques include protocols that use nonces or challenges such as time synchronous or cryptographic authenticators.

Determine if replay-resistant authentication mechanisms for access to [Selection (one or more): privileged accounts; non-privileged accounts] are implemented.

**Examine:** Identification and authentication policy; system security plan; procedures addressing user identification and authentication; system design documentation; system configuration settings and associated documentation; system audit records; list of privileged system accounts; other relevant documents or records.

**Interview:** Organizational personnel with system operations responsibilities; organizational personnel with account management responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms supporting and/or implementing identification and authentication capabilities; Mechanisms supporting and/or implementing replay-resistant authentication mechanisms.

</details>

<a id="ia-2.10"></a>

### IA-2(10) Single Sign-on

*Baselines: Not in a baseline*

Provide a single sign-on capability for [Assignment: organization-defined system accounts and services].

<details>
<summary>Discussion and assessment objectives for IA-2(10)</summary>

Single sign-on enables users to log in once and gain access to multiple system resources. Organizations consider the operational efficiencies provided by single sign-on capabilities with the risk introduced by allowing access to multiple systems via a single authentication event. Single sign-on can present opportunities to improve system security, for example by providing the ability to add multi-factor authentication for applications and systems (existing and new) that may not be able to natively support multi-factor authentication.

Determine if a single sign-on capability is provided for [Assignment: organization-defined system accounts and services].

**Examine:** Identification and authentication policy; system security plan; procedures addressing single sign-on capability for system accounts and services; procedures addressing identification and authentication; system design documentation; system configuration settings and associated documentation; system audit records; list of system accounts and services requiring single sign-on capability; other relevant documents or records.

**Interview:** Organizational personnel with system operations responsibilities; organizational personnel with account management responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms supporting and/or implementing identification and authentication capabilities; mechanisms supporting and/or implementing single sign-on capability for system accounts and services.

</details>

<a id="ia-2.12"></a>

### IA-2(12) Acceptance of PIV Credentials

*Baselines: Low, Moderate, High*

Accept and electronically verify Personal Identity Verification-compliant credentials.

<details>
<summary>Discussion and assessment objectives for IA-2(12)</summary>

Acceptance of Personal Identity Verification (PIV)-compliant credentials applies to organizations implementing logical access control and physical access control systems. PIV-compliant credentials are those credentials issued by federal agencies that conform to FIPS Publication 201 and supporting guidance documents. The adequacy and reliability of PIV card issuers are authorized using SP 800-79-2 . Acceptance of PIV-compliant credentials includes derived PIV credentials, the use of which is addressed in SP 800-166 . The DOD Common Access Card (CAC) is an example of a PIV credential.

Determine if Personal Identity Verification-compliant credentials are accepted and electronically verified.

**Examine:** Identification and authentication policy; system security plan; procedures addressing user identification and authentication; system design documentation; system configuration settings and associated documentation; system audit records; PIV verification records; evidence of PIV credentials; PIV credential authorizations; other relevant documents or records.

**Interview:** Organizational personnel with system operations responsibilities; organizational personnel with account management responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms supporting and/or implementing acceptance and verification of PIV credentials.

</details>

<a id="ia-2.13"></a>

### IA-2(13) Out-of-band Authentication

*Baselines: Not in a baseline*

Implement the following out-of-band authentication mechanisms under [Assignment: organization-defined conditions]: [Assignment: organization-defined out-of-band authentication].

<details>
<summary>Discussion and assessment objectives for IA-2(13)</summary>

Out-of-band authentication refers to the use of two separate communication paths to identify and authenticate users or devices to an information system. The first path (i.e., the in-band path) is used to identify and authenticate users or devices and is generally the path through which information flows. The second path (i.e., the out-of-band path) is used to independently verify the authentication and/or requested action. For example, a user authenticates via a notebook computer to a remote server to which the user desires access and requests some action of the server via that communication path. Subsequently, the server contacts the user via the user’s cell phone to verify that the requested action originated from the user. The user may confirm the intended action to an individual on the telephone or provide an authentication code via the telephone. Out-of-band authentication can be used to mitigate actual or suspected "man-in the-middle" attacks. The conditions or criteria for activation include suspicious activities, new threat indicators, elevated threat levels, or the impact or classification level of information in requested transactions.

Determine if [Assignment: organization-defined out-of-band authentication] mechanisms are implemented under [Assignment: organization-defined conditions].

**Examine:** Identification and authentication policy; system security plan; procedures addressing user identification and authentication; system design documentation; system configuration settings and associated documentation; system audit records; system-generated list of out-of-band authentication paths; other relevant documents or records.

**Interview:** Organizational personnel with system operations responsibilities; organizational personnel with account management responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms supporting and/or implementing out-of-band authentication capability.

</details>

*Withdrawn enhancements: IA-2(3), IA-2(4), IA-2(7), IA-2(9), IA-2(11).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for IA-2</summary>

Determine if:

- **IA-02[01]** organizational users are uniquely identified and authenticated;
- **IA-02[02]** the unique identification of authenticated organizational users is associated with processes acting on behalf of those users.

**Examine:** Identification and authentication policy; procedures addressing user identification and authentication; system security plan, system design documentation; system configuration settings and associated documentation; system audit records; list of system accounts; other relevant documents or records.

**Interview:** Organizational personnel with system operations responsibilities; organizational personnel with information security responsibilities; system/network administrators; organizational personnel with account management responsibilities; system developers.

**Test:** Organizational processes for uniquely identifying and authenticating users; mechanisms supporting and/or implementing identification and authentication capabilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
