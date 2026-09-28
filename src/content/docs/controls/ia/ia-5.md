---
title: 'IA-5 Authenticator Management'
description: 'NIST SP 800-53 Rev. 5 control IA-5, Authenticator Management: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'IA-5 Authenticator Management'
  order: 5
control:
  id: IA-5
  family: IA
  baselines: [Low, Moderate, High]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 15 (3 in a baseline) |

**Related controls:** [AC-3](/controls/ac/ac-3/), [AC-6](/controls/ac/ac-6/), [CM-6](/controls/cm/cm-6/), [IA-2](/controls/ia/ia-2/), [IA-4](/controls/ia/ia-4/), [IA-7](/controls/ia/ia-7/), [IA-8](/controls/ia/ia-8/), [IA-9](/controls/ia/ia-9/), [MA-4](/controls/ma/ma-4/), [PE-2](/controls/pe/pe-2/), [PL-4](/controls/pl/pl-4/), [SC-12](/controls/sc/sc-12/), [SC-13](/controls/sc/sc-13/)

## Control statement

Manage system authenticators by:

- **a.** Verifying, as part of the initial authenticator distribution, the identity of the individual, group, role, service, or device receiving the authenticator;
- **b.** Establishing initial authenticator content for any authenticators issued by the organization;
- **c.** Ensuring that authenticators have sufficient strength of mechanism for their intended use;
- **d.** Establishing and implementing administrative procedures for initial authenticator distribution, for lost or compromised or damaged authenticators, and for revoking authenticators;
- **e.** Changing default authenticators prior to first use;
- **f.** Changing or refreshing authenticators [Assignment: organization-defined time period by authenticator type] or when [Assignment: organization-defined events] occur;
- **g.** Protecting authenticator content from unauthorized disclosure and modification;
- **h.** Requiring individuals to take, and having devices implement, specific controls to protect authenticators; and
- **i.** Changing authenticators for group or role accounts when membership to those accounts changes.

<details>
<summary>NIST discussion</summary>

Authenticators include passwords, cryptographic devices, biometrics, certificates, one-time password devices, and ID badges. Device authenticators include certificates and passwords. Initial authenticator content is the actual content of the authenticator (e.g., the initial password). In contrast, the requirements for authenticator content contain specific criteria or characteristics (e.g., minimum password length). Developers may deliver system components with factory default authentication credentials (i.e., passwords) to allow for initial installation and configuration. Default authentication credentials are often well known, easily discoverable, and present a significant risk. The requirement to protect individual authenticators may be implemented via control PL-4 or PS-6 for authenticators in the possession of individuals and by controls AC-3, AC-6 , and SC-28 for authenticators stored in organizational systems, including passwords stored in hashed or encrypted formats or files containing encrypted or hashed passwords accessible with administrator privileges.

Systems support authenticator management by organization-defined settings and restrictions for various authenticator characteristics (e.g., minimum password length, validation time window for time synchronous one-time tokens, and number of allowed rejections during the verification stage of biometric authentication). Actions can be taken to safeguard individual authenticators, including maintaining possession of authenticators, not sharing authenticators with others, and immediately reporting lost, stolen, or compromised authenticators. Authenticator management includes issuing and revoking authenticators for temporary access when no longer needed.

</details>

## Control enhancements

<a id="ia-5.1"></a>

### IA-5(1) Password-based Authentication

*Baselines: Low, Moderate, High*

For password-based authentication:

- **(a)** Maintain a list of commonly-used, expected, or compromised passwords and update the list [Assignment: organization-defined frequency] and when organizational passwords are suspected to have been compromised directly or indirectly;
- **(b)** Verify, when users create or update passwords, that the passwords are not found on the list of commonly-used, expected, or compromised passwords in IA-5(1)(a);
- **(c)** Transmit passwords only over cryptographically-protected channels;
- **(d)** Store passwords using an approved salted key derivation function, preferably using a keyed hash;
- **(e)** Require immediate selection of a new password upon account recovery;
- **(f)** Allow user selection of long passwords and passphrases, including spaces and all printable characters;
- **(g)** Employ automated tools to assist the user in selecting strong password authenticators; and
- **(h)** Enforce the following composition and complexity rules: [Assignment: organization-defined composition and complexity rules].

<details>
<summary>Discussion and assessment objectives for IA-5(1)</summary>

Password-based authentication applies to passwords regardless of whether they are used in single-factor or multi-factor authentication. Long passwords or passphrases are preferable over shorter passwords. Enforced composition rules provide marginal security benefits while decreasing usability. However, organizations may choose to establish certain rules for password generation (e.g., minimum character length for long passwords) under certain circumstances and can enforce this requirement in IA-5(1)(h). Account recovery can occur, for example, in situations when a password is forgotten. Cryptographically protected passwords include salted one-way cryptographic hashes of passwords. The list of commonly used, compromised, or expected passwords includes passwords obtained from previous breach corpuses, dictionary words, and repetitive or sequential characters. The list includes context-specific words, such as the name of the service, username, and derivatives thereof.

Determine if:

- **IA-05(01)(a)** for password-based authentication, a list of commonly used, expected, or compromised passwords is maintained and updated [Assignment: organization-defined frequency] and when organizational passwords are suspected to have been compromised directly or indirectly;
- **IA-05(01)(b)** for password-based authentication when passwords are created or updated by users, the passwords are verified not to be found on the list of commonly used, expected, or compromised passwords in IA-05(01)(a);
- **IA-05(01)(c)** for password-based authentication, passwords are only transmitted over cryptographically protected channels;
- **IA-05(01)(d)** for password-based authentication, passwords are stored using an approved salted key derivation function, preferably using a keyed hash;
- **IA-05(01)(e)** for password-based authentication, immediate selection of a new password is required upon account recovery;
- **IA-05(01)(f)** for password-based authentication, user selection of long passwords and passphrases is allowed, including spaces and all printable characters;
- **IA-05(01)(g)** for password-based authentication, automated tools are employed to assist the user in selecting strong password authenticators;
- **IA-05(01)(h)** for password-based authentication, [Assignment: organization-defined composition and complexity rules] are enforced.

**Examine:** Identification and authentication policy; password policy; procedures addressing authenticator management; system security plan; system design documentation; system configuration settings and associated documentation; password configurations and associated documentation; other relevant documents or records.

**Interview:** Organizational personnel with authenticator management responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms supporting and/or implementing password-based authenticator management capability.

</details>

<a id="ia-5.2"></a>

### IA-5(2) Public Key-based Authentication

*Baselines: Moderate, High*

- **(a)** For public key-based authentication:
  - **(1)** Enforce authorized access to the corresponding private key; and
  - **(2)** Map the authenticated identity to the account of the individual or group; and
- **(b)** When public key infrastructure (PKI) is used:
  - **(1)** Validate certificates by constructing and verifying a certification path to an accepted trust anchor, including checking certificate status information; and
  - **(2)** Implement a local cache of revocation data to support path discovery and validation.

<details>
<summary>Discussion and assessment objectives for IA-5(2)</summary>

Public key cryptography is a valid authentication mechanism for individuals, machines, and devices. For PKI solutions, status information for certification paths includes certificate revocation lists or certificate status protocol responses. For PIV cards, certificate validation involves the construction and verification of a certification path to the Common Policy Root trust anchor, which includes certificate policy processing. Implementing a local cache of revocation data to support path discovery and validation also supports system availability in situations where organizations are unable to access revocation information via the network.

Determine if:

- **IA-05(02)(a)**
  - **IA-05(02)(a)(01)** authorized access to the corresponding private key is enforced for public key-based authentication;
  - **IA-05(02)(a)(02)** the authenticated identity is mapped to the account of the individual or group for public key-based authentication;
- **IA-05(02)(b)**
  - **IA-05(02)(b)(01)** when public key infrastructure (PKI) is used, certificates are validated by constructing and verifying a certification path to an accepted trust anchor, including checking certificate status information;
  - **IA-05(02)(b)(02)** when public key infrastructure (PKI) is used, a local cache of revocation data is implemented to support path discovery and validation.

**Examine:** Identification and authentication policy; procedures addressing authenticator management; system security plan; system design documentation; system configuration settings and associated documentation; PKI certification validation records; PKI certification revocation lists; other relevant documents or records.

**Interview:** Organizational personnel with PKI-based, authenticator management responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms supporting and/or implementing PKI-based, authenticator management capability.

</details>

<a id="ia-5.5"></a>

### IA-5(5) Change Authenticators Prior to Delivery

*Baselines: Not in a baseline*

Require developers and installers of system components to provide unique authenticators or change default authenticators prior to delivery and installation.

<details>
<summary>Discussion and assessment objectives for IA-5(5)</summary>

Changing authenticators prior to the delivery and installation of system components extends the requirement for organizations to change default authenticators upon system installation by requiring developers and/or installers to provide unique authenticators or change default authenticators for system components prior to delivery and/or installation. However, it typically does not apply to developers of commercial off-the-shelf information technology products. Requirements for unique authenticators can be included in acquisition documents prepared by organizations when procuring systems or system components.

Determine if developers and installers of system components are required to provide unique authenticators or change default authenticators prior to delivery and installation.

**Examine:** Identification and authentication policy; system security plan; system and services acquisition policy; procedures addressing authenticator management; procedures addressing the integration of security requirements into the acquisition process; acquisition documentation; acquisition contracts for system procurements or services; other relevant documents or records.

**Interview:** Organizational personnel with authenticator management responsibilities; organizational personnel with information security, acquisition, and contracting responsibilities; system developers.

**Test:** Mechanisms supporting and/or implementing authenticator management capability.

</details>

<a id="ia-5.6"></a>

### IA-5(6) Protection of Authenticators

*Baselines: Moderate, High*

Protect authenticators commensurate with the security category of the information to which use of the authenticator permits access.

<details>
<summary>Discussion and assessment objectives for IA-5(6)</summary>

For systems that contain multiple security categories of information without reliable physical or logical separation between categories, authenticators used to grant access to the systems are protected commensurate with the highest security category of information on the systems. Security categories of information are determined as part of the security categorization process.

Determine if authenticators are protected commensurate with the security category of the information to which use of the authenticator permits access.

**Examine:** Identification and authentication policy; procedures addressing authenticator management; security categorization documentation for the system; security assessments of authenticator protections; risk assessment results; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with authenticator management responsibilities; organizational personnel implementing and/or maintaining authenticator protections; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Mechanisms supporting and/or implementing authenticator management capability; mechanisms protecting authenticators.

</details>

<a id="ia-5.7"></a>

### IA-5(7) No Embedded Unencrypted Static Authenticators

*Baselines: Not in a baseline*

Ensure that unencrypted static authenticators are not embedded in applications or other forms of static storage.

<details>
<summary>Discussion and assessment objectives for IA-5(7)</summary>

In addition to applications, other forms of static storage include access scripts and function keys. Organizations exercise caution when determining whether embedded or stored authenticators are in encrypted or unencrypted form. If authenticators are used in the manner stored, then those representations are considered unencrypted authenticators.

Determine if unencrypted static authenticators are not embedded in applications or other forms of static storage.

**Examine:** Identification and authentication policy; system security plan; procedures addressing authenticator management; system design documentation; system configuration settings and associated documentation; logical access scripts; application code reviews for detecting unencrypted static authenticators; other relevant documents or records.

**Interview:** Organizational personnel with authenticator management responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms supporting and/or implementing authenticator management capability; mechanisms implementing authentication in applications.

</details>

<a id="ia-5.8"></a>

### IA-5(8) Multiple System Accounts

*Baselines: Not in a baseline*

Implement [Assignment: organization-defined security controls] to manage the risk of compromise due to individuals having accounts on multiple systems.

<details>
<summary>Discussion and assessment objectives for IA-5(8)</summary>

When individuals have accounts on multiple systems and use the same authenticators such as passwords, there is the risk that a compromise of one account may lead to the compromise of other accounts. Alternative approaches include having different authenticators (passwords) on all systems, employing a single sign-on or federation mechanism, or using some form of one-time passwords on all systems. Organizations can also use rules of behavior (see PL-4 ) and access agreements (see PS-6 ) to mitigate the risk of multiple system accounts.

Determine if [Assignment: organization-defined security controls] are implemented to manage the risk of compromise due to individuals having accounts on multiple systems.

**Examine:** Identification and authentication policy; procedures addressing authenticator management; system security plan; list of individuals having accounts on multiple systems; list of security safeguards intended to manage risk of compromise due to individuals having accounts on multiple systems; other relevant documents or records.

**Interview:** Organizational personnel with authenticator management responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Mechanisms supporting and/or implementing safeguards for authenticator management.

</details>

<a id="ia-5.9"></a>

### IA-5(9) Federated Credential Management

*Baselines: Not in a baseline*

Use the following external organizations to federate credentials: [Assignment: organization-defined external organizations].

<details>
<summary>Discussion and assessment objectives for IA-5(9)</summary>

Federation provides organizations with the capability to authenticate individuals and devices when conducting cross-organization activities involving the processing, storage, or transmission of information. Using a specific list of approved external organizations for authentication helps to ensure that those organizations are vetted and trusted.

Determine if [Assignment: organization-defined external organizations] are used to federate credentials.

**Examine:** Identification and authentication policy; procedures addressing authenticator management; procedures addressing account management; system security plan; security agreements; other relevant documents or records.

**Interview:** Organizational personnel with authenticator management responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Mechanisms supporting and/or implementing safeguards for authenticator management.

</details>

<a id="ia-5.10"></a>

### IA-5(10) Dynamic Credential Binding

*Baselines: Not in a baseline*

Bind identities and authenticators dynamically using the following rules: [Assignment: organization-defined binding rules].

<details>
<summary>Discussion and assessment objectives for IA-5(10)</summary>

Authentication requires some form of binding between an identity and the authenticator that is used to confirm the identity. In conventional approaches, binding is established by pre-provisioning both the identity and the authenticator to the system. For example, the binding between a username (i.e., identity) and a password (i.e., authenticator) is accomplished by provisioning the identity and authenticator as a pair in the system. New authentication techniques allow the binding between the identity and the authenticator to be implemented external to a system. For example, with smartcard credentials, the identity and authenticator are bound together on the smartcard. Using these credentials, systems can authenticate identities that have not been pre-provisioned, dynamically provisioning the identity after authentication. In these situations, organizations can anticipate the dynamic provisioning of identities. Pre-established trust relationships and mechanisms with appropriate authorities to validate identities and related credentials are essential.

Determine if identities and authenticators are dynamically bound using [Assignment: organization-defined binding rules].

**Examine:** Identification and authentication policy; procedures addressing identifier management; system security plan; system design documentation; automated mechanisms providing dynamic binding of identifiers and authenticators; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with identifier management responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Automated mechanisms implementing identifier management capability; automated mechanisms implementing dynamic binding of identities and authenticators.

</details>

<a id="ia-5.12"></a>

### IA-5(12) Biometric Authentication Performance

*Baselines: Not in a baseline*

For biometric-based authentication, employ mechanisms that satisfy the following biometric quality requirements [Assignment: organization-defined biometric quality requirements].

<details>
<summary>Discussion and assessment objectives for IA-5(12)</summary>

Unlike password-based authentication, which provides exact matches of user-input passwords to stored passwords, biometric authentication does not provide exact matches. Depending on the type of biometric and the type of collection mechanism, there is likely to be some divergence from the presented biometric and the stored biometric that serves as the basis for comparison. Matching performance is the rate at which a biometric algorithm correctly results in a match for a genuine user and rejects other users. Biometric performance requirements include the match rate, which reflects the accuracy of the biometric matching algorithm used by a system.

Determine if mechanisms that satisfy [Assignment: organization-defined biometric quality requirements] are employed for biometric-based authentication.

**Examine:** Identification and authentication policy; procedures addressing authenticator management; system security plan; system design documentation; mechanisms employing biometric-based authentication for the system; list of biometric quality requirements; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with authenticator management responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms supporting and/or implementing biometric-based authenticator management capability.

</details>

<a id="ia-5.13"></a>

### IA-5(13) Expiration of Cached Authenticators

*Baselines: Not in a baseline*

Prohibit the use of cached authenticators after [Assignment: organization-defined time period].

<details>
<summary>Discussion and assessment objectives for IA-5(13)</summary>

Cached authenticators are used to authenticate to the local machine when the network is not available. If cached authentication information is out of date, the validity of the authentication information may be questionable.

Determine if the use of cached authenticators is prohibited after [Assignment: organization-defined time period].

**Examine:** Identification and authentication policy; procedures addressing authenticator management; system security plan; system design documentation; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with authenticator management responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms supporting and/or implementing authenticator management capability.

</details>

<a id="ia-5.14"></a>

### IA-5(14) Managing Content of PKI Trust Stores

*Baselines: Not in a baseline*

For PKI-based authentication, employ an organization-wide methodology for managing the content of PKI trust stores installed across all platforms, including networks, operating systems, browsers, and applications.

<details>
<summary>Discussion and assessment objectives for IA-5(14)</summary>

An organization-wide methodology for managing the content of PKI trust stores helps improve the accuracy and currency of PKI-based authentication credentials across the organization.

Determine if an organization-wide methodology for managing the content of PKI trust stores is employed across all platforms, including networks, operating systems, browsers, and applications for PKI-based authentication.

**Examine:** Identification and authentication policy; procedures addressing authenticator management; system security plan; organizational methodology for managing content of PKI trust stores across installed all platforms; system design documentation; system configuration settings and associated documentation; enterprise security architecture documentation; enterprise architecture documentation; other relevant documents or records.

**Interview:** Organizational personnel with authenticator management responsibilities; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms supporting and/or implementing PKI-based authenticator management capability; mechanisms supporting and/or implementing the PKI trust store capability.

</details>

<a id="ia-5.15"></a>

### IA-5(15) GSA-approved Products and Services

*Baselines: Not in a baseline*

Use only General Services Administration-approved products and services for identity, credential, and access management.

<details>
<summary>Discussion and assessment objectives for IA-5(15)</summary>

General Services Administration (GSA)-approved products and services are products and services that have been approved through the GSA conformance program, where applicable, and posted to the GSA Approved Products List. GSA provides guidance for teams to design and build functional and secure systems that comply with Federal Identity, Credential, and Access Management (FICAM) policies, technologies, and implementation patterns.

Determine if only General Services Administration-approved products and services are used for identity, credential, and access management.

**Examine:** Identification and authentication policy; procedures addressing identifier management; system security plan; system design documentation; mechanisms providing dynamic binding of identifiers and authenticators; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with identification and authentication management responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Mechanisms supporting and/or implementing account management capability; mechanisms supporting and/or implementing identification and authentication management capabilities for the system.

</details>

<a id="ia-5.16"></a>

### IA-5(16) In-person or Trusted External Party Authenticator Issuance

*Baselines: Not in a baseline*

Require that the issuance of [Assignment: organization-defined types of and/or specific authenticators] be conducted [Selection: in person; by a trusted external party] before [Assignment: organization-defined registration authority] with authorization by [Assignment: organization-defined personnel or roles].

<details>
<summary>Discussion and assessment objectives for IA-5(16)</summary>

Issuing authenticators in person or by a trusted external party enhances and reinforces the trustworthiness of the identity proofing process.

Determine if the issuance of [Assignment: organization-defined types of and/or specific authenticators] is required to be conducted [Selection: in person; by a trusted external party] before [Assignment: organization-defined registration authority] with authorization by [Assignment: organization-defined personnel or roles].

**Examine:** Identification and authentication policy; procedures addressing identifier management; system security plan; system design documentation; mechanisms providing dynamic binding of identifiers and authenticators; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with identification and authentication management responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Mechanisms supporting and/or implementing account management capability; mechanisms supporting and/or implementing identification and authentication management capabilities for the system.

</details>

<a id="ia-5.17"></a>

### IA-5(17) Presentation Attack Detection for Biometric Authenticators

*Baselines: Not in a baseline*

Employ presentation attack detection mechanisms for biometric-based authentication.

<details>
<summary>Discussion and assessment objectives for IA-5(17)</summary>

Biometric characteristics do not constitute secrets. Such characteristics can be obtained by online web accesses, taking a picture of someone with a camera phone to obtain facial images with or without their knowledge, lifting from objects that someone has touched (e.g., a latent fingerprint), or capturing a high-resolution image (e.g., an iris pattern). Presentation attack detection technologies including liveness detection, can mitigate the risk of these types of attacks by making it difficult to produce artifacts intended to defeat the biometric sensor.

Determine if presentation attack detection mechanisms are employed for biometric-based authentication.

**Examine:** Identification and authentication policy; procedures addressing identifier management; system security plan; system design documentation; mechanisms providing dynamic binding of identifiers and authenticators; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with identification and authentication management responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Mechanisms supporting and/or implementing account management capability; mechanisms supporting and/or implementing identification and authentication management capabilities for the system.

</details>

<a id="ia-5.18"></a>

### IA-5(18) Password Managers

*Baselines: Not in a baseline*

- **(a)** Employ [Assignment: organization-defined password managers] to generate and manage passwords; and
- **(b)** Protect the passwords using [Assignment: organization-defined controls].

<details>
<summary>Discussion and assessment objectives for IA-5(18)</summary>

For systems where static passwords are employed, it is often a challenge to ensure that the passwords are suitably complex and that the same passwords are not employed on multiple systems. A password manager is a solution to this problem as it automatically generates and stores strong and different passwords for various accounts. A potential risk of using password managers is that adversaries can target the collection of passwords generated by the password manager. Therefore, the collection of passwords requires protection including encrypting the passwords (see IA-5(1)(d) ) and storing the collection offline in a token.

Determine if:

- **IA-05(18)(a)** [Assignment: organization-defined password managers] are employed to generate and manage passwords;
- **IA-05(18)(b)** the passwords are protected using [Assignment: organization-defined controls].

**Examine:** Identification and authentication policy; procedures addressing identifier management; system security plan; system design documentation; mechanisms providing dynamic binding of identifiers and authenticators; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with identification and authentication management responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Mechanisms supporting and/or implementing account management capability; mechanisms supporting and/or implementing identification and authentication management capabilities for the system.

</details>

*Withdrawn enhancements: IA-5(3), IA-5(4), IA-5(11).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for IA-5</summary>

Determine if:

- **IA-05a.** system authenticators are managed through the verification of the identity of the individual, group, role, service, or device receiving the authenticator as part of the initial authenticator distribution;
- **IA-05b.** system authenticators are managed through the establishment of initial authenticator content for any authenticators issued by the organization;
- **IA-05c.** system authenticators are managed to ensure that authenticators have sufficient strength of mechanism for their intended use;
- **IA-05d.** system authenticators are managed through the establishment and implementation of administrative procedures for initial authenticator distribution; lost, compromised, or damaged authenticators; and the revocation of authenticators;
- **IA-05e.** system authenticators are managed through the change of default authenticators prior to first use;
- **IA-05f.** system authenticators are managed through the change or refreshment of authenticators [Assignment: organization-defined time period by authenticator type] or when [Assignment: organization-defined events] occur;
- **IA-05g.** system authenticators are managed through the protection of authenticator content from unauthorized disclosure and modification;
- **IA-05h.**
  - **IA-05h.[01]** system authenticators are managed through the requirement for individuals to take specific controls to protect authenticators;
  - **IA-05h.[02]** system authenticators are managed through the requirement for devices to implement specific controls to protect authenticators;
- **IA-05i.** system authenticators are managed through the change of authenticators for group or role accounts when membership to those accounts changes.

**Examine:** Identification and authentication policy; system security plan; addressing authenticator management; system design documentation; system configuration settings and associated documentation; list of system authenticator types; change control records associated with managing system authenticators; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with authenticator management responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Mechanisms supporting and/or implementing authenticator management capability.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
