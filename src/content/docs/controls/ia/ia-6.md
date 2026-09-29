---
title: 'IA-6 Authentication Feedback'
description: 'NIST SP 800-53 Rev. 5 control IA-6, Authentication Feedback: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'IA-6 Authentication Feedback'
  order: 6
control:
  id: IA-6
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

**Related controls:** [AC-3](/controls/ac/ac-3/)

## Control statement

Obscure feedback of authentication information during the authentication process to protect the information from possible exploitation and use by unauthorized individuals.

<details>
<summary>NIST discussion</summary>

Authentication feedback from systems does not provide information that would allow unauthorized individuals to compromise authentication mechanisms. For some types of systems, such as desktops or notebooks with relatively large monitors, the threat (referred to as shoulder surfing) may be significant. For other types of systems, such as mobile devices with small displays, the threat may be less significant and is balanced against the increased likelihood of typographic input errors due to small keyboards. Thus, the means for obscuring authentication feedback is selected accordingly. Obscuring authentication feedback includes displaying asterisks when users type passwords into input devices or displaying feedback for a very limited time before obscuring it.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for IA-6</summary>

Determine if the feedback of authentication information is obscured during the authentication process to protect the information from possible exploitation and use by unauthorized individuals.

**Examine:** Identification and authentication policy; system security plan; procedures addressing authenticator feedback; system design documentation; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms supporting and/or implementing the obscuring of feedback of authentication information during authentication.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

IA-6 asks that what users type to authenticate, and what the system says back, gives nothing away to someone watching or probing. Check every place the system accepts credentials: web sign-in pages, command lines, device consoles and APIs. The [Identification and Authentication policy](/templates/policies/ia/) makes the system owner responsible.

**Common implementations.** Password and PIN fields masked by default. [NIST SP 800-63B-4](https://csrc.nist.gov/pubs/sp/800/63/b/4/final) (July 2025, Sec. 3.1.1.2) says verifiers should offer an option to display the password while it is typed. A "show password" toggle the user chooses fits IA-6, since masking stays the default. Mobile devices may show each character briefly before hiding it, as NIST's discussion of IA-6 notes. Failed sign-ins return one generic message that does not say whether the username or the password was wrong. Command-line tools do not echo passwords, and credentials never appear in logs or URLs.

**Organization-defined parameters.** IA-6 has none.

**Evidence assessors ask for.**

- Screenshots or a live demonstration of each sign-in page, console and command-line tool
- The error messages shown for a wrong username and for a wrong password
- The account recovery and password reset pages, and what they reveal
- Logging settings, or a sample of authentication logs, showing no passwords or one-time codes recorded

**Inheritance.** When users sign in through the enterprise identity provider, its sign-in page is inherited. The system owns its own sign-in forms, command-line tools, device and appliance consoles, and API error responses.

**Common findings.**

- Network devices or legacy applications that echo passwords in clear text.
- Error messages or reset pages that confirm whether an account exists, which lets an attacker list valid usernames.
- Passwords written to application or debug logs after failed sign-ins.
- Credentials passed in URL query strings, where browsers and proxies record them.

**Enhancements in the Moderate baseline.** IA-6 has no enhancements.
