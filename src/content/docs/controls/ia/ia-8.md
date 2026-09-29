---
title: 'IA-8 Identification and Authentication (Non-organizational Users)'
description: 'NIST SP 800-53 Rev. 5 control IA-8, Identification and Authentication (Non-organizational Users): requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'IA-8 Identification and Authentication (Non-organizational Users)'
  order: 8
control:
  id: IA-8
  family: IA
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | System | 5 (3 in a baseline) |

**Related controls:** [AC-2](/controls/ac/ac-2/), [AC-6](/controls/ac/ac-6/), [AC-14](/controls/ac/ac-14/), [AC-17](/controls/ac/ac-17/), [AC-18](/controls/ac/ac-18/), [AU-6](/controls/au/au-6/), [IA-2](/controls/ia/ia-2/), [IA-4](/controls/ia/ia-4/), [IA-5](/controls/ia/ia-5/), [IA-10](/controls/ia/ia-10/), [IA-11](/controls/ia/ia-11/), [IA-13](/controls/ia/ia-13/), [MA-4](/controls/ma/ma-4/), [RA-3](/controls/ra/ra-3/), [SA-4](/controls/sa/sa-4/), [SC-8](/controls/sc/sc-8/)

## Control statement

Uniquely identify and authenticate non-organizational users or processes acting on behalf of non-organizational users.

<details>
<summary>NIST discussion</summary>

Non-organizational users include system users other than organizational users explicitly covered by IA-2 . Non-organizational users are uniquely identified and authenticated for accesses other than those explicitly identified and documented in AC-14 . Identification and authentication of non-organizational users accessing federal systems may be required to protect federal, proprietary, or privacy-related information (with exceptions noted for national security systems). Organizations consider many factors—including security, privacy, scalability, and practicality—when balancing the need to ensure ease of use for access to federal information and systems with the need to protect and adequately mitigate risk.

</details>

## Control enhancements

<a id="ia-8.1"></a>

### IA-8(1) Acceptance of PIV Credentials from Other Agencies

*Baselines: Low, Moderate, High*

Accept and electronically verify Personal Identity Verification-compliant credentials from other federal agencies.

<details>
<summary>Discussion and assessment objectives for IA-8(1)</summary>

Acceptance of Personal Identity Verification (PIV) credentials from other federal agencies applies to both logical and physical access control systems. PIV credentials are those credentials issued by federal agencies that conform to FIPS Publication 201 and supporting guidelines. The adequacy and reliability of PIV card issuers are addressed and authorized using SP 800-79-2.

Determine if:

- **IA-08(01)[01]** Personal Identity Verification-compliant credentials from other federal agencies are accepted;
- **IA-08(01)[02]** Personal Identity Verification-compliant credentials from other federal agencies are electronically verified.

**Examine:** Identification and authentication policy; system security plan; procedures addressing user identification and authentication; system design documentation; system configuration settings and associated documentation; system audit records; PIV verification records; evidence of PIV credentials; PIV credential authorizations; other relevant documents or records.

**Interview:** Organizational personnel with system operations responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers; organizational personnel with account management responsibilities.

**Test:** Mechanisms supporting and/or implementing identification and authentication capabilities; mechanisms that accept and verify PIV credentials.

</details>

<a id="ia-8.2"></a>

### IA-8(2) Acceptance of External Authenticators

*Baselines: Low, Moderate, High*

- **(a)** Accept only external authenticators that are NIST-compliant; and
- **(b)** Document and maintain a list of accepted external authenticators.

<details>
<summary>Discussion and assessment objectives for IA-8(2)</summary>

Acceptance of only NIST-compliant external authenticators applies to organizational systems that are accessible to the public (e.g., public-facing websites). External authenticators are issued by nonfederal government entities and are compliant with SP 800-63B . Approved external authenticators meet or exceed the minimum Federal Government-wide technical, security, privacy, and organizational maturity requirements. Meeting or exceeding Federal requirements allows Federal Government relying parties to trust external authenticators in connection with an authentication transaction at a specified authenticator assurance level.

Determine if:

- **IA-08(02)(a)** only external authenticators that are NIST-compliant are accepted;
- **IA-08(02)(b)**
  - **IA-08(02)(b)[01]** a list of accepted external authenticators is documented;
  - **IA-08(02)(b)[02]** a list of accepted external authenticators is maintained.

**Examine:** Identification and authentication policy; system security plan; procedures addressing user identification and authentication; system design documentation; system configuration settings and associated documentation; system audit records; list of third-party credentialing products, components, or services procured and implemented by organization; third-party credential verification records; evidence of third-party credentials; third-party credential authorizations; other relevant documents or records.

**Interview:** Organizational personnel with system operations responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers; organizational personnel with account management responsibilities.

**Test:** Mechanisms supporting and/or implementing identification and authentication capabilities; mechanisms that accept external credentials.

</details>

<a id="ia-8.4"></a>

### IA-8(4) Use of Defined Profiles

*Baselines: Low, Moderate, High*

Conform to the following profiles for identity management [Assignment: organization-defined identity management profiles].

<details>
<summary>Discussion and assessment objectives for IA-8(4)</summary>

Organizations define profiles for identity management based on open identity management standards. To ensure that open identity management standards are viable, robust, reliable, sustainable, and interoperable as documented, the Federal Government assesses and scopes the standards and technology implementations against applicable laws, executive orders, directives, policies, regulations, standards, and guidelines.

Determine if there is conformance with [Assignment: organization-defined identity management profiles] for identity management.

**Examine:** Identification and authentication policy; system security plan; system design documentation; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with system operations responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers; organizational personnel with account management responsibilities.

**Test:** Mechanisms supporting and/or implementing identification and authentication capabilities; mechanisms supporting and/or implementing conformance with profiles.

</details>

<a id="ia-8.5"></a>

### IA-8(5) Acceptance of PIV-I Credentials

*Baselines: Not in a baseline*

Accept and verify federated or PKI credentials that meet [Assignment: organization-defined policy].

<details>
<summary>Discussion and assessment objectives for IA-8(5)</summary>

Acceptance of PIV-I credentials can be implemented by PIV, PIV-I, and other commercial or external identity providers. The acceptance and verification of PIV-I-compliant credentials apply to both logical and physical access control systems. The acceptance and verification of PIV-I credentials address nonfederal issuers of identity cards that desire to interoperate with United States Government PIV systems and that can be trusted by Federal Government-relying parties. The X.509 certificate policy for the Federal Bridge Certification Authority (FBCA) addresses PIV-I requirements. The PIV-I card is commensurate with the PIV credentials as defined in cited references. PIV-I credentials are the credentials issued by a PIV-I provider whose PIV-I certificate policy maps to the Federal Bridge PIV-I Certificate Policy. A PIV-I provider is cross-certified with the FBCA (directly or through another PKI bridge) with policies that have been mapped and approved as meeting the requirements of the PIV-I policies defined in the FBCA certificate policy.

Determine if:

- **IA-08(05)[01]** federated or PKI credentials that meet [Assignment: organization-defined policy] are accepted;
- **IA-08(05)[02]** federated or PKI credentials that meet [Assignment: organization-defined policy] are verified.

**Examine:** Identification and authentication policy; system security plan; procedures addressing user identification and authentication; system design documentation; system configuration settings and associated documentation; system audit records; PIV-I verification records; evidence of PIV-I credentials; PIV-I credential authorizations; other relevant documents or records.

**Interview:** Organizational personnel with system operations responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers; organizational personnel with account management responsibilities.

**Test:** Mechanisms supporting and/or implementing identification and authentication capabilities; mechanisms that accept and verify PIV-I credentials.

</details>

<a id="ia-8.6"></a>

### IA-8(6) Disassociability

*Baselines: Not in a baseline*

Implement the following measures to disassociate user attributes or identifier assertion relationships among individuals, credential service providers, and relying parties: [Assignment: organization-defined measures].

<details>
<summary>Discussion and assessment objectives for IA-8(6)</summary>

Federated identity solutions can create increased privacy risks due to the tracking and profiling of individuals. Using identifier mapping tables or cryptographic techniques to blind credential service providers and relying parties from each other or to make identity attributes less visible to transmitting parties can reduce these privacy risks.

Determine if [Assignment: organization-defined measures] to disassociate user attributes or identifier assertion relationships among individuals, credential service providers, and relying parties are implemented.

**Examine:** Identification and authentication policy; system security plan; privacy plan; procedures addressing user identification and authentication; system design documentation; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with system operations responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators; system developers; organizational personnel with account management responsibilities.

**Test:** Mechanisms supporting and/or implementing identification and authentication capabilities.

</details>

*Withdrawn enhancements: IA-8(3).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for IA-8</summary>

Determine if non-organizational users or processes acting on behalf of non-organizational users are uniquely identified and authenticated.

**Examine:** Identification and authentication policy; system security plan; privacy plan; procedures addressing user identification and authentication; system design documentation; system configuration settings and associated documentation; system audit records; list of system accounts; other relevant documents or records.

**Interview:** Organizational personnel with system operations responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators; organizational personnel with account management responsibilities.

**Test:** Mechanisms supporting and/or implementing identification and authentication capabilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

IA-8 is the counterpart of [IA-2](/controls/ia/ia-2/) for people outside the organization: customers, members of the public, partners and staff of other organizations. Each is identified and authenticated as one person, and so is any process acting for them. The only exceptions are the actions [AC-14](/controls/ac/ac-14/) lists as allowed without identification.

**Common implementations.** A customer identity platform or an identity service for the public, kept separate from the workforce directory. Federation with partners' identity providers over SAML 2.0 or OpenID Connect, following the profiles the organization publishes (IA-8(4)). A maintained list of the external identity providers and authenticators the system accepts (IA-8(2)). Each group of external users gets an assurance level chosen through the digital identity risk management process in [NIST SP 800-63-4](https://csrc.nist.gov/pubs/sp/800/63/4/final) (July 2025, Section 3). The [Identification and Authentication policy](/templates/policies/ia/) states each requirement.

**Organization-defined parameters.** The base control has none. The one baseline parameter is in IA-8(4). Typical value, taken from the IA policy, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Identity management profiles (IA-8(4)) | The federation profiles the organization publishes for its identity provider, such as SAML 2.0 or OpenID Connect |

**Evidence assessors ask for.**

- The list of non-organizational user groups, with the authentication method and assurance level of each
- The list of accepted external authenticators and identity providers, for IA-8(2)
- Federation configuration or metadata for each trusted identity provider
- The AC-14 list of actions permitted without identification
- A demonstration that the system accepts and electronically verifies PIV credentials, where IA-8(1) applies

**Inheritance.** A shared customer identity platform or federation service is usually a common control. The system owns the choice of which external users it serves, the assurance level each needs, and any accounts it creates for them itself.

**Common findings.**

- Shared accounts issued to a partner organization rather than to each person.
- Public-facing services protected by a password alone where the risk assessment calls for more.
- No list of accepted identity providers, or trust kept with a partner after the agreement ended.
- Assurance levels never chosen or documented for each group of external users.

**Enhancements in the Moderate baseline.** [IA-8(1)](#ia-8.1) acceptance of PIV credentials from other agencies, [IA-8(2)](#ia-8.2) acceptance of external authenticators and [IA-8(4)](#ia-8.4) use of defined profiles, all also in Low. IA-8(1) applies only where federal users from other agencies use the system; otherwise record it as not applicable, with that reason, in the security plan. High adds none.

**Federal systems** (as of September 2026). OMB [M-26-18](https://www.whitehouse.gov/wp-content/uploads/2026/08/M-26-18-Scaling-Use-of-Login.gov-to-Deliver-a-Universal-Sign-on-for-Public-Services.pdf) (August 31, 2026) requires agencies to offer Login.gov as a sign-on option on public-facing websites where individuals sign in for services. Agencies must also use Login.gov's identity verification where verification is needed, unless it does not meet the service's requirements. Its appendix sets the deadlines: a digital identity risk management process for these services within 240 days, and Login.gov on all in-scope websites, or a notice to OMB, within two years. The Department of War, national security systems and the intelligence community are excepted. For IA-8(1), OMB [M-19-17](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf) (May 21, 2019, Section III, item 3) requires processes for electronically verifying PIV identity assertions from other agencies. It also requires agencies to accept partners' assertions based on NIST assurance levels (Section IV, Architecture, item 5).
