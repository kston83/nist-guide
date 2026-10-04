---
title: Identification and Authentication Standard
type: standard
description: The assurance levels, identifiers, approved authenticators, multi-factor and password rules, authenticator life cycle, and the service account, device and federation requirements that make the identification and authentication policy (SP 800-53 IA-2, IA-5 and related controls) measurable, with a part where each system records how it authenticates.
controls: [ia-2, ia-2.1, ia-2.2, ia-2.8, ia-2.12, ia-5, ia-5.1, ia-5.2, ia-5.6, ia-3, ia-4, ia-4.4, ia-6, ia-7, ia-8, ia-8.1, ia-8.2, ia-8.4, ia-11, ia-12, ac-7]
status: draft
stage: core
typical:
  ia-02.08_odp: privileged accounts and non-privileged accounts
  ia-03_odp.01: 'all organization-managed endpoints, servers and network devices'
  ia-03_odp.02: remote and network
  ia-04_odp.01: 'the system owner, through the approved access request'
  ia-04_odp.02: at least two years
  ia-04.04_odp: 'employee, contractor, or foreign national'
  ia-05_odp.01: no scheduled change for user passwords; certificates at expiry; shared and service account secrets at least annually
  ia-05_odp.02: 'evidence or suspicion of compromise, and departure of a person who knew a shared authenticator'
  ia-05.01_odp.01: 'at least monthly, and whenever a relevant breach corpus is published'
  ia-05.01_odp.02: 'a minimum length of 15 characters for passwords used as the only factor and 8 for passwords used with another factor, and no other composition rules'
  ia-08.04_odp: 'the federation profiles the organization publishes for its identity provider, such as SAML 2.0 or OpenID Connect'
  ia-11_odp: 'a session timeout, a change of role or privilege, a privileged action, or a change of authenticators'
  ac-07_odp.01: '3'
  ac-07_odp.02: 15 minutes
  ac-07_odp.03: 'lock the account or node for 30 minutes, or until released by an administrator for privileged accounts'
---

:::guidance
The identification and authentication policy says every user is uniquely identified, authenticates with multiple factors, and holds authenticators that are issued, protected and replaced under control; this standard says which authenticators, how strong, and how they are managed. Its typical values are copied from the IA statements of the policy and the AC-7 statement of the Access Control Policy; keep them in step, since assessors compare the two. It is built on the NIST Digital Identity Guidelines, [SP 800-63-4](https://csrc.nist.gov/pubs/sp/800/63/4/final) and its volumes [SP 800-63A-4](https://csrc.nist.gov/pubs/sp/800/63/a/4/final) (identity proofing), [SP 800-63B-4](https://csrc.nist.gov/pubs/sp/800/63/b/4/final) (authentication and authenticator management) and [SP 800-63C-4](https://csrc.nist.gov/pubs/sp/800/63/c/4/final) (federation), all final July 2025 and current as of October 2026. Section numbers below refer to the online edition at pages.nist.gov/800-63-4. Part A applies across the organization and is usually a common control, run through the enterprise identity provider; each system completes Part B, which its system security plan references.
:::

| Owner | Approved by | Version | Effective date |
| --- | --- | --- | --- |
| {{org:ciso}} | {{fill:name and title}} | {{fill:version}} | {{fill:date}} |

## 1. Purpose and scope

This standard sets the requirements for identifying and authenticating the users, processes and devices that access the systems of {{org:name}}. It covers employees, contractors, partners, customers and members of the public, the accounts that services and applications use, and the devices that connect to organizational networks. It applies to every system in the system inventory, including cloud services, and to every way of signing in: web and application sign-in, local consoles, command-line and remote administration, and application programming interfaces.

Part A applies across the organization. Each system completes Part B.

## 2. Roles

| Role | Responsibilities |
| --- | --- |
| {{org:ciso}} | Owns this standard; selects the approved authenticators; approves exceptions; approves external identity providers the organization trusts |
| {{fill:identity provider owner, for example the identity and access management team}} | Runs the enterprise identity provider, the multi-factor authentication service and the self-service and recovery processes; keeps them configured to this standard |
| {{org:account-manager}} | Assigns identifiers, issues and replaces authenticators, verifies identity before issuing or resetting them, and revokes them |
| {{org:system-owner}} | Completes Part B; selects the system's assurance levels; makes the system use the enterprise identity provider or meet this standard itself; manages the system's local, service and device credentials |
| {{org:security-operations}} | Monitors authentication logs and alerts, and responds to suspected compromise of accounts and authenticators |
| Users | Protect their authenticators and report loss or suspected compromise at once, as the [Rules of Behavior](/templates/forms/rules-of-behavior/) require |

## Part A. Organization-wide requirements

### 3. Assurance levels

- Each system owner shall select, for each group of users of the system, an authentication assurance level (AAL), and an identity assurance level (IAL) and federation assurance level (FAL) where identity proofing or federation is used, through the digital identity risk management process of NIST SP 800-63-4, and record them in Part B. (IA-2)
- The initial levels shall follow the effective impact level found for the user group: AAL1, IAL1 and FAL1 for low impact; AAL2, IAL2 and FAL2 for moderate impact; AAL3 and IAL3 for high impact, with FAL2 or FAL3 chosen after assessing the risk of a compromised identity provider. (IA-2)
- Users who need accounts shall be identity proofed at the IAL that Part B records for their group, following NIST SP 800-63A-4, before an account or authenticator is issued to them. (IA-12a)
- A level tailored below its initial level shall be recorded with its rationale, compensating controls and residual risk, and approved by the authorizing official, who accepts that risk. (IA-2)
- Accounts that can perform privileged functions shall authenticate at AAL3, or with a phishing-resistant authenticator whose private key cannot be exported, as section 6 requires. (IA-2(1))

:::guidance
SP 800-63-4 section 3 is the digital identity risk management process: define the online service, assess the impact of identity failures for each user group (section 3.2), select initial levels (section 3.3.3, which maps low, moderate and high impact to AAL1, AAL2 and AAL3, IAL1 to IAL3, and FAL1, FAL2 and FAL2 or FAL3), then tailor and document them (section 3.4). The impact here is the effective impact level of the digital identity risk assessment, not the system's FIPS 199 category, though the two are usually close. Section 3.4.4 requires a Digital Identity Acceptance Statement with the impact results, the initial and tailored levels with the rationale, and the compensating and supplemental controls; Part B section 19 holds those fields, so this standard can serve as one. Requiring AAL3-grade authenticators for privileged accounts is a typical choice, not a NIST rule: privileged accounts are the most phished, and AAL3 is the level whose authenticators are phishing-resistant with keys that cannot be exported (SP 800-63B-4 section 2.3.2).
:::

### 4. Identifiers

- Each user shall have an individual identifier, used by one person only, and each process acting on a user's behalf shall carry that user's identifier. (IA-2)
- An identifier shall be assigned only with authorization from {{param:ia-04_odp.01}}, to the intended individual, group, role, service or device. (IA-4a)
- Identifiers for people shall be built from the authoritative personnel record, so that two people never share one, and identifiers for services and devices shall follow the naming convention in Part B. (IA-4b)
- Identifiers shall not be reused for {{param:ia-04_odp.02}}. (IA-4d)
- Each individual's identifier or directory record shall show the person's status as {{param:ia-04.04_odp}}. (IA-4(4))
- Shared and group accounts shall be allowed only as the [account management procedure](/templates/procedures/account-management-procedure/) permits, and their users shall authenticate individually first wherever the system supports it. (IA-2)
- Each person who performs privileged functions shall use a privileged account separate from the account used for email and web browsing. (IA-2(1))

### 5. Approved authenticators

- Only the authenticator types in this table shall be used, each only for the uses the table allows. (IA-5c)
- Every authenticator shall use approved cryptography where it uses cryptography, as the [encryption and key management standard](/templates/standards/encryption-and-key-management-standard/) sets. (IA-5c)
- Authentication shall pass over an authenticated, encrypted channel. (IA-5c)

| Authenticator type (SP 800-63B-4 section) | Phishing-resistant | Replay-resistant | Typical use |
| --- | --- | --- | --- |
| Smart card with a certificate, such as a PIV card (3.1.7) | Yes | Yes | {{fill:for example all access, including privileged}} |
| Hardware security key, FIDO2 or WebAuthn, device-bound (3.1.6, 3.1.7) | Yes | Yes | {{fill:for example all access, including privileged}} |
| Platform authenticator or passkey bound to a managed device (3.1.7) | Yes | Yes | {{fill:for example all access; privileged only where the key cannot be exported}} |
| Syncable passkey (3.1.7.4, Appendix B) | Yes | Yes | {{fill:for example non-privileged access, and external users}} |
| Authenticator app with a one-time code or a push request that requires entering a number shown at sign-in (3.1.3, 3.1.4) | No | Yes | {{fill:for example non-privileged access, as a second factor with a password}} |
| Hardware one-time password token (3.1.4, 3.1.5) | No | Yes | {{fill:for example where a phone or security key cannot be used}} |
| Password (3.1.1) | No | No | {{fill:for example one factor of multi-factor authentication only}} |
| Recovery codes (3.1.2, 4.2.1) | No | Yes | {{fill:for example account recovery only}} |
| One-time code by text message or voice call (3.1.3.3) | No | Yes | {{fill:for example not allowed, or external users only under section 6}} |

These are prohibited:

- Push requests that the user approves without entering a value from the sign-in screen. (IA-2(8))
- Email as a channel for one-time codes used to authenticate. (IA-5c)
- Security questions and other knowledge-based authentication, as an authenticator or for recovery. (IA-5c)
- {{fill:other prohibited authenticators}}

:::guidance
SP 800-63B-4 defines each authenticator type in section 3.1. Phishing resistance (section 3.2.5) needs cryptographic authentication bound to the channel or to the verifier's name; NIST names client-authenticated TLS, used by PIV cards, and WebAuthn, used by FIDO2 authenticators, as examples. Authenticators whose output the user types, such as one-time codes and out-of-band codes, are never phishing-resistant. Replay resistance (section 3.2.7) holds for one-time codes, cryptographic authenticators and look-up secrets, but not passwords. Section 3.1.3 says push approval by comparing codes is no longer acceptable, because of "authentication fatigue" attacks, and requires the user to transfer a secret between the sign-in screen and the device; it bans email for out-of-band authentication (section 3.1.3.1); section 3.1.1.2 bans prompting for security questions when passwords are chosen. Syncable authenticators may be used at AAL2 but not at AAL3 (section 2.3.2), and Appendix B.3 says verifiers must check the WebAuthn user verified flag, treating an authenticator without it as single-factor. Section 3.2.9 restricts text message and voice codes, the one restricted authenticator.
:::

### 6. Multi-factor authentication

- Access to privileged accounts shall require multi-factor authentication with a phishing-resistant authenticator whose private key cannot be exported. (IA-2(1))
- Access to non-privileged accounts shall require multi-factor authentication. (IA-2(2))
- Access to {{param:ia-02.08_odp}} shall use replay-resistant authentication: at least one factor shall be a cryptographic, one-time password or look-up secret authenticator, never a password alone. (IA-2(8))
- Multi-factor authentication shall apply to every access path: web and application sign-in, local console and device logons, command-line and remote administration, and programming interfaces used by people. (IA-2(1))
- Multi-factor authentication shall be enforced by the identity provider or the application itself, not only at the network edge, so that a user on the internal network meets the same requirement. (IA-2(2))
- Every system that can use the enterprise identity provider shall authenticate users through it, with single sign-on, rather than keeping its own passwords. (IA-2)
- Legacy protocols that cannot do multi-factor authentication, such as basic authentication to mail services, shall be blocked, or listed as an exception under section 17. (IA-2(2))
- Text message or voice call codes shall be used only where Part B records that no unrestricted authenticator works for the user group, the users are told of the risk and offered an unrestricted alternative, a migration plan is recorded, and the authorizing official has accepted the risk. (IA-5c)
- Users shall be encouraged to bind at least two authenticators, so that a lost one does not force account recovery. (IA-5d)

:::guidance
SP 800-63B-4 section 2.2.2 requires at AAL2 that at least one authenticator is replay-resistant and that verifiers offer at least one phishing-resistant option, and it encourages phishing-resistant authentication whenever practical. Section 3.2.9 says accepting a restricted authenticator means the organization assesses and accepts its risk, and that the provider must offer an unrestricted alternative, tell users of the risk and keep a migration plan; for an authorized system, only the authorizing official accepts risk, so the standard names that role. Section 4.1.2.1 encourages users to keep two authenticators. Local console logons to servers are a common gap: assessors ask how an administrator signs in at the console, and "with a password" fails IA-2(1) unless an exception is approved.
:::

### 7. Passwords

- A password used as the only factor shall be at least 15 characters long, and a password used only with another factor at least 8; no other composition rules shall be imposed, as {{param:ia-05.01_odp.02}} states. (IA-5(1)(h))
- Systems shall accept passwords of at least 64 characters, with spaces and all printable characters, count each Unicode character as one, and check the whole password, never a truncated part. (IA-5(1)(f))
- Users shall not be required to change passwords periodically; a password shall be changed when there is evidence or suspicion that it is compromised. (IA-5f)
- New and changed passwords shall be checked against a list of commonly used, expected or compromised passwords, including breached passwords, dictionary words and words specific to the service and the user, and rejected with the reason if found. (IA-5(1)(b))
- The list shall be updated {{param:ia-05.01_odp.01}}, and when organizational passwords are suspected to have been compromised. (IA-5(1)(a))
- Systems shall give users guidance on choosing a strong password, allow password managers, autofill and pasting, and offer a password generator where they can. (IA-5(1)(g))
- Systems shall not store password hints that an unauthenticated person can see. (IA-5(1)(g))
- A password set by an administrator or the help desk shall be single-use, and the user shall choose a new password at the next sign-in. (IA-5(1)(e))

:::guidance
These rules are SP 800-63B-4 section 3.1.1. Section 3.1.1.1 says other composition requirements "SHALL NOT be imposed", and section 3.1.1.2 sets the 15 and 8 character minimums, a maximum of at least 64 characters, no periodic change but a forced change on evidence of compromise, the blocklist with its examples (breach corpuses, dictionary words, context-specific words), guidance on strong passwords, no hints, and support for password managers and autofill. Appendix A explains why length and blocklists beat complexity rules. Section 4.2 treats replacing a forgotten password, where the user can still authenticate with another factor, as binding a new authenticator rather than account recovery.
:::

### 8. Failed attempts and feedback

- The system shall enforce a limit of {{param:ac-07_odp.01}} consecutive invalid logon attempts by a user during {{param:ac-07_odp.02}}, and when the limit is exceeded shall {{param:ac-07_odp.03}}. (AC-7)
- Authenticators that are not covered by the account lockout, such as one-time password and security key verifiers, shall be disabled after no more than 100 consecutive failed attempts, and rebound before further use. (AC-7)
- Activation PINs for smart cards, security keys and platform authenticators shall be at least 6 characters and lock after no more than 10 consecutive wrong entries. (IA-5c)
- Password and PIN entry shall be masked by default; a "show password" option the user chooses is allowed. (IA-6)
- A failed sign-in shall return the same message whether the identifier or the authenticator was wrong, and authentication secrets shall never appear in logs, error messages or web addresses. (IA-6)

:::guidance
SP 800-63B-4 section 3.2.2 caps consecutive failed attempts on one authenticator at 100 and lets organizations set lower limits, so the AC-7 values satisfy it. Section 3.2.10 requires activation secrets of at least 4 characters, recommends at least 6, and requires a limit of no more than 10 failed activation attempts. Section 3.1.1.2 says verifiers should offer an option to show the password while it is typed, which fits IA-6 because masking stays the default, as NIST's IA-6 discussion allows for brief display on mobile devices.
:::

### 9. Authenticator life cycle

- Before issuing, replacing or resetting an authenticator, the {{org:account-manager}} shall verify the identity of the recipient: in person or by a supervised video session against identity evidence, or by the person authenticating with another authenticator already bound to the account. (IA-5a)
- Authenticators the organization issues shall have initial content generated by an approved random generator, be delivered by a channel separate from the account identifier, and be activated only by the intended user. (IA-5b)
- Binding a new authenticator to an account shall require authentication at the highest level available on the account, up to the level the new authenticator will be used at, and shall notify the user through a channel other than the one used to bind it. (IA-5d)
- The identity provider shall keep a record of every authenticator bound to each account, its type and characteristics, and the date of each binding, renewal, suspension and revocation. (IA-5d)
- Account recovery shall use one of the methods in Part B section 18, and shall notify the user; a help desk recovery shall follow the identity check in the first statement of this section. (IA-5d)
- A lost, stolen, damaged or compromised authenticator shall be suspended or revoked within {{fill:for example 1 hour}} of the report, and users shall be able to report it by authenticating with another authenticator or by calling {{fill:service desk contact}}. (IA-5d)
- Authenticators shall be revoked when the account is disabled or removed, when the user asks, and when the authenticator is compromised; revoked hardware authenticators shall be collected or destroyed. (IA-5d)
- Expiring authenticators, such as certificates, shall be renewed by binding the replacement before expiry; expired authenticators shall not be accepted. (IA-5f)
- Authenticators shall be changed or refreshed as follows: {{param:ia-05_odp.01}}. (IA-5f)
- Authenticators shall be changed or refreshed when {{param:ia-05_odp.02}} occur. (IA-5f)
- Default passwords, keys and certificates on hardware, software and services shall be changed before first use, and default accounts disabled or renamed where possible. (IA-5e)
- The authenticators of group or role accounts shall be changed when the membership of the account changes. (IA-5i)

:::guidance
SP 800-63B-4 section 4 covers authenticator events. Section 4.1 requires a record of all authenticators bound to each account, with the dates of life cycle events; section 4.1.2.1 sets the authentication needed to bind another authenticator and requires an independent notice; section 4.2 lists the account recovery methods (saved or issued recovery codes, recovery contacts, repeated identity proofing) and requires notification of every recovery (section 4.2.3); section 4.3 requires prompt suspension or invalidation of compromised authenticators and suggests setting time limits; section 4.4 bars use of expired authenticators; section 4.5 requires prompt invalidation when an account ends, on request, or on compromise. Help desk resets are the weak point attackers use most: the assessor will ask how the help desk knows who is calling, and "they gave their employee number" is a finding.
:::

### 10. Protecting authenticators

- Authenticators shall be protected commensurate with the security category of the information they give access to; authenticators for High systems and privileged accounts shall be held in hardware, such as a smart card, security key or a platform's secure element. (IA-5(6))
- Passwords shall be sent only over encrypted channels. (IA-5(1)(c))
- Stored passwords shall be salted and hashed with an approved password hashing scheme and a cost factor set as high as performance allows, with a salt of at least 32 bits, and preferably an added keyed hash with a key held in a hardware security module. (IA-5(1)(d))
- Authentication secrets held by systems, such as recovery code hashes, private keys and service credentials, shall be protected from unauthorized disclosure and modification, with access limited to the services and administrators that need them. (IA-5g)
- Endpoints shall protect authenticators with full-disk encryption, a screen lock and the organization's secure configuration, as the device management baseline sets. (IA-5h)
- Users shall protect their authenticators as the Rules of Behavior require, never share them, and never reuse an organizational password on another site. (IA-5h)

:::guidance
The password storage rule follows SP 800-63B-4 section 3.1.1.2: a suitable password hashing scheme (NIST points to the latest revision of SP 800-132), a cost factor as high as practical, a salt of at least 32 bits, and a recommended keyed hash with the key stored separately, ideally in a hardware-protected area. IA-5(6) asks that protection match the impact level of the information behind the authenticator; holding high-value keys in hardware is the common way to show it.
:::

### 11. Public key-based authentication

- Certificates used for authentication shall be issued under the organization's certificate policy, or by a provider or federation the {{org:ciso}} approves, as section 7 of the encryption and key management standard requires. (IA-5(2))
- Access to private keys shall require the authorized user's activation factor, and private keys for user authentication shall be generated and kept in hardware where the authenticator supports it. (IA-5(2)(a)(1))
- The system shall map each authenticated certificate to the account of the individual or group it belongs to, using an identifier in the certificate, not the subject name alone. (IA-5(2)(a)(2))
- The system shall validate each certificate by building and verifying a certification path to an approved trust anchor and checking revocation status. (IA-5(2)(b)(1))
- The system shall keep a local cache of revocation data so that path validation works when the revocation service cannot be reached, and shall set how long cached data may be used. (IA-5(2)(b)(2))
- Where the organization issues or relies on PIV or PIV-interoperable credentials, systems shall accept and electronically verify them. (IA-2(12))

### 12. Service accounts and machine credentials

- Each service, application or workload account shall have a named owner, a recorded purpose and the least privilege it needs, and shall be listed in Part B section 20. (IA-2)
- Service accounts shall not be used for interactive sign-in by people, and shall be blocked from it where the platform allows. (IA-2)
- Systems shall prefer credentials that need no stored secret, such as workload identities issued by the platform, managed identities and short-lived tokens, and then certificates or keys held in a key management service. (IA-5g)
- Secrets for services, such as passwords, API keys and tokens, shall be kept in the organization's secrets manager, never in source code, scripts, configuration files, container images or tickets. (IA-5g)
- Service secrets shall be changed as section 9 sets, when a person who knew them leaves, and at once when they are found exposed, such as in a code repository. (IA-5f)
- {{org:security-operations}} shall alert on interactive or unexpected use of service accounts. (IA-2)

:::guidance
SP 800-63-4 section 1.1 says the guidelines do not explicitly address machine-to-machine authentication or access to programming interfaces on behalf of people, so this section is informed practice, written from IA-2 (which covers processes acting for users), IA-5 and IA-5(6). Service accounts with old, widely known passwords are among the most common findings, and leaked secrets in code repositories are a frequent cause of breaches. The encryption and key management standard sets how long keys and service secrets may be used; this section sets how they are owned and stored.
:::

### 13. Devices

- Systems shall uniquely identify and authenticate {{param:ia-03_odp.01}} before establishing a {{param:ia-03_odp.02}} connection. (IA-3)
- Device authentication shall use a certificate or key bound to the device, issued through device management, such as 802.1X with EAP-TLS for network access or a device certificate and compliance check for remote access. (IA-3)
- Devices that cannot hold a certificate, such as printers and building systems, shall be placed on separate network segments and identified by hardware address, as exceptions recorded in Part B. (IA-3)

### 14. Cryptographic modules

- Authentication to cryptographic modules, such as hardware security modules, key management services, smart cards and platform security chips, shall use the module's roles and authentication methods as its validated security policy describes. (IA-7)
- Administration of hardware security modules and key management services shall require multi-factor authentication, and the most sensitive roles a quorum of administrators where the module supports it. (IA-7)

### 15. External users and federation

- Non-organizational users, and processes acting for them, shall be uniquely identified and authenticated, at the assurance levels Part B records for their user group. (IA-8)
- Systems shall accept only external authenticators that meet NIST SP 800-63B-4 at the level required, and the {{org:ciso}} shall keep the list of accepted external authenticators and identity providers. (IA-8(2))
- Federation shall conform to {{param:ia-08.04_odp}}, with signed assertions restricted to the receiving system, replay protection, and a trust agreement in place before the first transaction. (IA-8(4))
- Partner organizations' identity providers shall be trusted only after the {{org:ciso}} approves them, with the agreement recording the assurance levels they assert and who to contact when an account is compromised. (IA-8)
- A system that receives a federated sign-in shall decide for itself whether its re-authentication requirements are met, and shall ask the identity provider to re-authenticate the user when they are not. (IA-11)

:::guidance
SP 800-63C-4 section 2 defines the federation assurance levels: at FAL1 the identity provider signs the assertion, which is restricted to its audience and protected from replay; FAL2 adds protection from assertion injection, a single receiving system per assertion, and a trust agreement established before the transaction; FAL3 adds proof that the user holds an authenticator bound to the assertion. SP 800-63B-4 section 5.2 says the relying party, not the identity provider, is authoritative on whether re-authentication requirements are met. Identity proofing of external users follows SP 800-63A-4 and the IA-12 statements of the policy.
:::

### 16. Re-authentication and sessions

- Users shall re-authenticate when {{param:ia-11_odp}}. (IA-11)
- Each system shall set and record in Part B an overall session limit and an inactivity limit no longer than {{fill:for example 12 hours and 15 minutes at AAL3, and 24 hours and 1 hour at AAL2}}, and the Access Control Policy's device lock and session termination values. (IA-11)
- Changing authenticators, recovery settings or notification addresses shall require fresh authentication at the account's highest level. (IA-11)
- Privileged actions shall require re-authentication within {{fill:for example 15 minutes}} before the action, or a privileged access tool that requires it. (IA-11)

:::guidance
SP 800-63B-4 sections 2.2.3 and 2.3.3 set the session limits: at AAL2 the overall timeout should be no more than 24 hours and the inactivity timeout no more than 1 hour; at AAL3 the overall timeout must be no more than 12 hours and the inactivity timeout should be no more than 15 minutes. Section 5.2 says organizations "SHALL establish and document the inactivity and overall time limits being enforced in a system security plan", which Part B section 23 does. AC-11 device lock and AC-12 session termination work alongside these limits.
:::

### 17. Exceptions

- A system, account or device that cannot meet this standard shall have an exception approved by the {{org:ciso}}, naming the requirement not met, the reason, the compensating measures and an expiry date, and recorded in Part B section 24. (IA-2)
- Where an exception leaves a weakness in an authorized system, it shall be entered in the system's plan of action and milestones, and the authorizing official shall accept the remaining risk. (CA-5)
- Exceptions shall be reviewed {{fill:for example quarterly}} and at expiry. (IA-2)

:::federal
For federal agencies, [SP 800-63B-4](https://csrc.nist.gov/pubs/sp/800/63/b/4/final) section 2.2.2 states that "Federal agencies SHALL require their staff, contractors, and partners to use phishing-resistant authentication to access federal information systems", that cryptographic authenticators agencies procure are validated to [FIPS 140](https://csrc.nist.gov/pubs/fips/140-3/final) Level 1, and that verifiers agencies operate at AAL2 use cryptography validated to FIPS 140 Level 1. Section 2 requires at least AAL2 when an agency makes personal information available online. [SP 800-63-4](https://csrc.nist.gov/pubs/sp/800/63/4/final) section 1.1 says [FIPS 201-3](https://csrc.nist.gov/pubs/fips/201-3/final), Personal Identity Verification (PIV) of Federal Employees and Contractors (January 2022), extends the guidelines for the federal enterprise, and section 3.4.4 says agencies should include the Digital Identity Acceptance Statement in the authorization package. [OMB M-22-09](https://www.whitehouse.gov/wp-content/uploads/2022/01/M-22-09.pdf), Moving the U.S. Government Toward Zero Trust Cybersecurity Principles (January 26, 2022), Section III.A, requires centralized identity management for agency users, multi-factor authentication enforced at the application layer, phishing-resistant multi-factor authentication for agency staff, contractors and partners, a phishing-resistant option for public users, and password policies without special character or regular rotation requirements; for routine self-service access by staff, contractors and partners, it requires agencies to discontinue methods that fail to resist phishing, such as text message or voice codes, one-time codes and push notifications. [OMB M-19-17](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf), Enabling Mission Delivery through Improved Identity, Credential, and Access Management (May 21, 2019), Section III, requires PIV credentials, where applicable in accordance with OPM requirements, as the primary means of identification and authentication to federal information systems by federal employees and contractors (item 2), with Derived PIV Credentials where applicable, and processes for the electronic verification of PIV identity assertions from other agencies (item 3). [OMB M-26-18](https://www.whitehouse.gov/wp-content/uploads/2026/08/M-26-18-Scaling-Use-of-Login.gov-to-Deliver-a-Universal-Sign-on-for-Public-Services.pdf) (August 31, 2026), footnote 5, lists M-19-17 and M-22-09 as existing OMB policy, and requires agencies to offer Login.gov on in-scope public-facing websites where individuals sign in for services. As of October 2026.

- Agency staff, contractors and partners shall use phishing-resistant multi-factor authentication for every agency system, with a PIV or derived PIV credential where the person holds one. (IA-2(1))
- Systems used by federal employees and contractors shall accept and electronically verify PIV credentials, including those issued by other agencies where their staff are authorized users. (IA-2(12), IA-8(1))
- Password policies shall not require special characters or periodic rotation. (IA-5(1)(h))
- Systems serving the public shall offer a phishing-resistant authentication option, and shall offer Login.gov where OMB M-26-18 applies to them. (IA-8)
- Cryptographic authenticators the agency buys, and verifiers it operates, shall use cryptography validated to FIPS 140. (IA-7)
- The Digital Identity Acceptance Statement in Part B section 19 shall be included in the system's authorization package. (IA-2)

:::

## Part B. System authentication record

Complete one Part B for each system, and reference it in the system security plan.

| System | System owner | Identity provider used | Last reviewed |
| --- | --- | --- | --- |
| {{fill:system name and identifier}} | {{fill:name and title}} | {{fill:for example the enterprise identity provider, or the system's own}} | {{fill:date}} |

### 18. Authentication methods

| User group | Access path | Account type | Authenticators accepted | Multi-factor | Phishing-resistant | Recovery method |
| --- | --- | --- | --- | --- | --- | --- |
| {{fill:for example employees and contractors}} | {{fill:web sign-in through single sign-on}} | {{fill:non-privileged}} | {{fill:for example platform authenticator; authenticator app and password}} | {{fill:yes}} | {{fill:yes or no}} | {{fill:for example help desk with identity check}} |
| {{fill:for example administrators}} | {{fill:privileged access service; local console}} | {{fill:privileged}} | {{fill:for example PIV card or security key}} | {{fill:yes}} | {{fill:yes}} | {{fill:method}} |
| {{fill:for example customers}} | {{fill:public web application}} | {{fill:external}} | {{fill:authenticators}} | {{fill:yes or no}} | {{fill:yes or no}} | {{fill:method}} |

### 19. Assurance levels

| User group | Impact assessment result | Initial IAL, AAL and FAL | Tailored levels and rationale | Compensating controls and residual risk | Supplemental controls | Approved by and date |
| --- | --- | --- | --- | --- | --- | --- |
| {{fill:user group}} | {{fill:low, moderate or high, with the assessment reference}} | {{fill:for example IAL2, AAL2, FAL2}} | {{fill:levels, or same as initial}} | {{fill:controls, or none}} | {{fill:controls, or none}} | {{fill:name and date}} |

### 20. Local, emergency, shared and service accounts

| Account | Type | Owner | Purpose | How it authenticates | Where its secret is kept | Last changed | Interactive sign-in blocked |
| --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:account name}} | {{fill:local, emergency, shared or service}} | {{fill:name}} | {{fill:purpose}} | {{fill:for example workload identity, certificate or password}} | {{fill:for example secrets manager path}} | {{fill:date}} | {{fill:yes or no}} |

### 21. Devices

| Device type | How it is identified and authenticated | Connection types | Exceptions and compensating measures |
| --- | --- | --- | --- |
| {{fill:for example laptops}} | {{fill:for example device certificate through 802.1X}} | {{fill:local, remote or network}} | {{fill:none}} |

### 22. External identity providers and authenticators

| Identity provider or authenticator | Organization | Federation profile | Assurance levels asserted | Agreement and date | Approved by |
| --- | --- | --- | --- | --- | --- |
| {{fill:name}} | {{fill:organization}} | {{fill:for example OpenID Connect}} | {{fill:for example IAL2, AAL2, FAL2}} | {{fill:reference and date}} | {{fill:name and date}} |

### 23. Session limits

| Access path | Overall session limit | Inactivity limit | Device lock | Re-authentication before privileged actions |
| --- | --- | --- | --- | --- |
| {{fill:access path}} | {{fill:for example 12 hours}} | {{fill:for example 15 minutes}} | {{fill:for example 15 minutes}} | {{fill:yes, within 15 minutes}} |

### 24. Exceptions in effect

| Exception ID | Requirement not met | Accounts, devices or paths affected | Reason | Compensating measures | Approved by and date | Plan of action and milestones ID | Expiry |
| --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:ID}} | {{fill:section and requirement}} | {{fill:scope}} | {{fill:reason}} | {{fill:measures}} | {{fill:name and date}} | {{fill:ID, or not a weakness}} | {{fill:date}} |

## 25. Review

The {{org:ciso}} reviews Part A {{fill:for example annually}}, and whenever NIST revises SP 800-63, a new authenticator type is adopted or retired, an incident involves stolen credentials, or the identification and authentication policy changes. Each system owner reviews Part B {{fill:for example annually}}, and when the system's users, access paths or identity provider change.

| Version | Date | Change | Approved by |
| --- | --- | --- | --- |
| {{fill:version}} | {{fill:date}} | {{fill:summary of change}} | {{fill:name and title}} |
