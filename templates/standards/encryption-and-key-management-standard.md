---
title: Encryption and Key Management Standard
type: standard
description: The approved cryptography, the protection required for information in transit and at rest, and the key and certificate management rules that make the system and communications protection policy's cryptographic requirements (SP 800-53 SC-8, SC-12, SC-13, SC-17 and SC-28) measurable.
controls: [sc-8, sc-8.1, sc-12, sc-12.1, sc-13, sc-17, sc-28, sc-28.1]
status: draft
stage: core
typical:
  sc-13_odp.01: 'encryption in transit and at rest, digital signatures and authentication'
  sc-13_odp.02: 'NIST-approved algorithms in cryptographic modules validated under FIPS 140-3 (or FIPS 140-2 for existing systems)'
  sc-08_odp: 'confidentiality and integrity'
  sc-08.01_odp: 'prevent unauthorized disclosure of information and detect changes to information'
  sc-28_odp.01: 'confidentiality and integrity'
  sc-28_odp.02: 'all information stored by the system, including backups'
  sc-28.01_odp.01: 'all organizational information'
  sc-28.01_odp.02: 'servers, databases, storage services, backups, end-user devices and removable media'
  sc-17_odp: 'the organization''s certificate policy'
---

:::guidance
The system and communications protection policy says information must be encrypted and keys managed; this standard says with what, where and how. Keep the values here in step with the SC-8, SC-12, SC-13, SC-17 and SC-28 statements in the policy, since assessors compare the two. Most of this standard is met by choosing the right settings in services the organization already has: the operating system's validated cryptography, the cloud provider's key management service, and the load balancer's TLS policy. Where a system inherits a protection from its provider, record that in the system security plan rather than repeating it here.
:::

| Owner | Approved by | Version | Effective date |
| --- | --- | --- | --- |
| {{org:ciso}} | {{fill:name and title}} | {{fill:version}} | {{fill:date}} |

## 1. Purpose and scope

This standard sets the minimum requirements for using cryptography and managing cryptographic keys and certificates in the systems of {{org:name}}. It applies to every system in the system inventory, including cloud services, and to every use of cryptography in them: protocols, storage encryption, digital signatures, authentication and code the organization develops.

## 2. Roles

| Role | Responsibilities |
| --- | --- |
| {{org:ciso}} | Owns this standard; keeps the list of approved cryptography; provides the enterprise key management and certificate services; approves exceptions |
| {{fill:key management function, for example the security engineering team}} | Runs the key management service and hardware security modules, the certificate authority and the certificate inventory; keeps the cryptographic inventory |
| Key custodians | Administer keys for a system: create, rotate, suspend and destroy them. They do not use the keys to read the information they protect |
| {{org:system-owner}} | Applies this standard to the system, records its cryptographic uses and keys, and requests exceptions |

## 3. Approved cryptography

- The {{org:ciso}} shall determine the cryptographic uses for the organization's systems, which include {{param:sc-13_odp.01}}. (SC-13a)
- The {{org:system-owner}} shall implement the following types of cryptography for each cryptographic use: {{param:sc-13_odp.02}}. (SC-13b)
- Cryptography shall provide at least 112 bits of security strength, and shall use no algorithm, key length or mode that the table below does not approve. (SC-13b)
- Cryptographic modules shall run in their approved (validated) mode, where the module has one. (SC-13b)
- Code the organization develops shall call approved cryptographic modules, and shall not implement its own cryptographic algorithms. (SC-13b)

| Use | Approved | Not allowed |
| --- | --- | --- |
| Symmetric encryption | {{fill:for example AES with 128-bit or 256-bit keys, in GCM, CCM, XTS (storage) or CBC mode}} | {{fill:for example DES, three-key TDEA (3DES), RC4}} |
| Hashing | {{fill:for example SHA-256, SHA-384, SHA-512, SHA-3}} | {{fill:for example MD5; SHA-1 for digital signatures}} |
| Digital signatures | {{fill:for example RSA with 3072-bit or larger keys, ECDSA on P-256 or P-384, EdDSA, ML-DSA}} | {{fill:for example RSA below 2048 bits, DSA}} |
| Key establishment | {{fill:for example ECDH on P-256 or P-384, RSA with 3072-bit or larger keys, ML-KEM}} | {{fill:for example finite-field Diffie-Hellman below 2048 bits}} |
| Message authentication | {{fill:for example HMAC with SHA-256 or stronger, CMAC, KMAC}} | {{fill:for example HMAC with keys shorter than 112 bits}} |
| Password storage | {{fill:for example a salted, iterated key derivation function such as PBKDF2 with SHA-256}} | {{fill:for example unsalted hashes, reversible encryption}} |

:::guidance
The 112-bit floor comes from [NIST SP 800-131A Rev. 2](https://csrc.nist.gov/pubs/sp/800/131/a/r2/final), Transitioning the Use of Cryptographic Algorithms and Key Lengths (March 2019): "For the Federal Government, a security strength of at least 112 bits is required at this time for applying cryptographic protection". It also disallows three-key TDEA for encryption after December 31, 2023, and SHA-1 for digital signature generation except where NIST protocol guidance allows it. A third revision was published as a draft in October 2024 (as of September 2026); check it before the next review of this table.

The example key lengths in the table are one reasonable choice, not a NIST list; SP 800-131A Rev. 2 and SP 800-57 Part 1 give the security strength of each algorithm and key length. ML-KEM ([FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)) and ML-DSA ([FIPS 204](https://csrc.nist.gov/pubs/fips/204/final)), with SLH-DSA ([FIPS 205](https://csrc.nist.gov/pubs/fips/205/final)), are NIST's post-quantum standards, all final on August 13, 2024. NIST's plan for moving away from quantum-vulnerable algorithms, [NIST IR 8547](https://csrc.nist.gov/pubs/ir/8547/ipd), Transition to Post-Quantum Cryptography Standards, is an initial public draft (November 12, 2024, as of September 2026).
:::

## 4. Information in transit

- Each system shall protect the {{param:sc-08_odp}} of transmitted information, inside the system as well as across its boundary. (SC-8)
- Each system shall implement cryptographic mechanisms to {{param:sc-08.01_odp}} during transmission. (SC-8(1))
- Connections shall use the protocols in the table below; cleartext protocols that carry information or credentials shall be disabled. (SC-8(1))
- TLS shall end no earlier than the component that needs the information; where a load balancer or gateway ends TLS, traffic from it to the system's components shall be encrypted again. (SC-8(1))
- Clients shall validate the certificates of the services they connect to, and shall not be configured to accept any certificate. (SC-8(1))

| Connection | Approved | Not allowed |
| --- | --- | --- |
| Web, APIs and service to service | {{fill:for example TLS 1.2 or 1.3 with approved cipher suites; TLS 1.3 supported}} | {{fill:for example SSL, TLS 1.0 and 1.1, HTTP}} |
| Administration | {{fill:for example SSH version 2, or TLS to a management console}} | {{fill:for example Telnet, rlogin}} |
| File transfer | {{fill:for example SFTP, FTPS or HTTPS}} | {{fill:for example FTP}} |
| Site-to-site and remote access networks | {{fill:for example IPsec or TLS virtual private networks, or a zero trust access service using TLS}} | {{fill:for example PPTP}} |
| Database, directory and message queue connections | {{fill:for example TLS, or LDAPS for directories}} | {{fill:for example unencrypted database or LDAP connections}} |
| Email between mail servers | {{fill:for example STARTTLS offered on every internet-facing mail server}} | {{fill:for example SSLv2, SSLv3, 3DES and RC4}} |

:::guidance
[NIST SP 800-52 Rev. 2](https://csrc.nist.gov/pubs/sp/800/52/r2/final), Guidelines for the Selection, Configuration, and Use of Transport Layer Security (TLS) Implementations (August 2019; NIST noted in May 2026 that it is under review), is the usual reference for TLS settings. [NIST SP 800-77 Rev. 1](https://csrc.nist.gov/pubs/sp/800/77/r1/final), Guide to IPsec VPNs (June 2020), covers IPsec. Test the settings with a TLS configuration scanner against both external and internal endpoints: encryption at the edge only, with cleartext behind the load balancer, is a common finding.
:::

## 5. Information at rest

- Each system shall protect the {{param:sc-28_odp.01}} of {{param:sc-28_odp.02}}. (SC-28)
- Each system shall implement cryptographic mechanisms to prevent unauthorized disclosure and modification of {{param:sc-28.01_odp.01}} at rest on {{param:sc-28.01_odp.02}}. (SC-28(1))
- Encryption shall be enforced by default, through cloud policy, device management or storage configuration, so that a new store or device is encrypted without a separate step. (SC-28(1))
- Backups, snapshots, replicas and exports shall be encrypted as strongly as the store they come from. (SC-28(1))

| Store | Method | Key |
| --- | --- | --- |
| Laptops, desktops and mobile devices | {{fill:for example full-disk encryption managed by the endpoint management service}} | {{fill:for example device keys, with recovery keys escrowed centrally}} |
| Cloud storage, block volumes and managed databases | {{fill:for example provider encryption enabled by default}} | {{fill:for example customer-managed keys in the cloud key management service for sensitive data}} |
| Databases the organization runs | {{fill:for example transparent database encryption, and field-level encryption for the most sensitive values}} | {{fill:for example keys held in the key management service, not on the database server}} |
| Backups | {{fill:for example encrypted by the backup service}} | {{fill:for example keys stored apart from the backup copies}} |
| Removable media | {{fill:for example hardware-encrypted drives, or encryption applied by the endpoint management service}} | {{fill:for example a password or key held by the user, with recovery by the service desk}} |

## 6. Key management

- Each system that uses cryptography shall establish and manage its cryptographic keys in accordance with the requirements in this section for key generation, distribution, storage, access and destruction. (SC-12)
- Keys shall be generated inside approved cryptographic modules, such as the key management service or a hardware security module, using an approved random bit generator. (SC-12)
- Keys shall be distributed only by approved key establishment methods or by wrapping them with another key, never in cleartext. (SC-12)
- Keys shall be stored in the key management service, a hardware security module or another approved module, and never in source code, configuration files, container images or the same store as the information they protect. (SC-12)
- Access to each key shall be limited to the services and people that need it. People who administer a key shall not also be able to use it to read the information it protects, and every use and administrative action on a key shall be logged. (SC-12)
- Keys shall be replaced at the end of the periods in the table below, and at once when a key is suspected to be compromised or a person with access to it leaves. (SC-12)
- Keys no longer needed shall be destroyed, together with every copy, once no information that needs them is kept; the destruction shall be recorded. (SC-12)
- The key management function shall keep an inventory of keys for each system: purpose, algorithm and length, location, owner, custodians, creation date and next replacement date. (SC-12)
- The key management function shall keep a key compromise plan saying who is told, how affected keys are revoked and replaced, and how information protected by them is re-protected. (SC-12)

This paragraph applies to High systems.

- The {{org:system-owner}} shall maintain the availability of information when users lose cryptographic keys, by escrowing or backing up the keys that protect stored information, such as recovery keys for full-disk encryption. (SC-12(1))

| Key type | Maximum period of use | Notes |
| --- | --- | --- |
| Symmetric data encryption keys | {{fill:for example 2 years for applying protection}} | {{fill:for example automatic rotation in the key management service}} |
| Key-wrapping (key encryption) keys | {{fill:for example 2 years}} | {{fill:notes}} |
| Private signature keys, including code signing | {{fill:for example 1 to 3 years}} | {{fill:for example kept in a hardware security module}} |
| TLS server certificates and their keys | {{fill:for example the certificate's validity, and a new key at each renewal}} | {{fill:for example renewed automatically}} |
| SSH host and user keys | {{fill:for example 1 year for user keys; host keys when the host is rebuilt}} | {{fill:notes}} |
| Secrets and API keys used by services | {{fill:for example 90 days, or short-lived credentials issued at run time}} | {{fill:for example held in the secrets manager}} |

:::guidance
[NIST SP 800-57 Part 1 Rev. 5](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final), Recommendation for Key Management: Part 1 – General (May 2020, the current revision as of September 2026), is the usual reference. Its Table 1 suggests cryptoperiods by key type, for example an originator-usage period of up to 2 years for symmetric data encryption keys and 1 to 3 years for private signature keys, and section 5.5 covers what to do when a key is compromised. Cloud key management services generate, store and rotate keys in validated modules; the decisions left to the organization are who may use and administer each key, and how long it lives.
:::

## 7. Certificates

- Public key certificates shall be issued under {{param:sc-17_odp}}, or obtained from an approved service provider. (SC-17a)
- Only approved trust anchors shall be included in trust stores or certificate stores the organization manages. (SC-17b)
- The key management function shall keep an inventory of certificates in use, with their owners and expiry dates, and warn owners at least {{fill:for example 30 days}} before a certificate expires. (SC-17a)
- Certificates shall be renewed automatically where the service supports it. A certificate whose private key is compromised shall be revoked at once. (SC-17a)

## 8. Cryptographic inventory

- The {{org:system-owner}} shall record in the system security plan where the system uses cryptography, the algorithm and module used for each use, and the module's validation certificate number. (SC-13b)
- The key management function shall keep an organization-wide cryptographic inventory from these records, and use it to find cryptography that must be replaced when an algorithm or module is no longer approved. (SC-13a)

:::guidance
A cryptographic inventory answers the assessor's question "where is cryptography used, and is it validated?", and it is the starting point for the move to post-quantum algorithms. Build it from the system security plans, TLS scans, the certificate inventory and the key management service, rather than by hand.
:::

:::federal
[FIPS 140-3](https://csrc.nist.gov/pubs/fips/140-3/final) (March 22, 2019) "is applicable to all Federal agencies that use cryptography-based security systems to protect sensitive information", and modules validated under NIST's Cryptographic Module Validation Program (CMVP) are considered to conform to it. The CMVP's [FIPS 140-3 transition page](https://csrc.nist.gov/projects/fips-140-3-transition-effort) sets the schedule for moving all FIPS 140-2 certificates to the Historical List on September 22, 2026; modules on the Historical List remain supported for existing systems, but should not be used for procurement decisions (as of September 2026).

CISA [Binding Operational Directive 18-01](https://www.cisa.gov/news-events/directives/bod-18-01-enhance-email-and-web-security), Enhance Email and Web Security (October 16, 2017), requires HTTPS-only service with HTTP Strict Transport Security for publicly accessible federal websites and web services, STARTTLS on internet-facing mail servers, and SSLv2, SSLv3, 3DES and RC4 disabled on mail servers. CISA's directive page does not mark it revoked (as of September 2026).

- Cryptography that protects sensitive information shall use modules validated by the CMVP, and new systems and new purchases shall use FIPS 140-3 validated modules. (SC-13b)
- Each publicly accessible website and web service shall provide service only through HTTPS, with HTTP Strict Transport Security. (SC-8)
- Each internet-facing mail server shall offer STARTTLS, with SSLv2, SSLv3, 3DES and RC4 disabled. (SC-8)

:::

## 9. Exceptions

- A system that cannot meet this standard shall record the gap in its plan of action and milestones, with a planned date, and the {{org:ciso}} shall approve any compensating measure. (CA-5)
- An exception shall name the system, the requirement not met, the reason, the compensating measures and an expiry date, and shall be reviewed {{fill:for example quarterly}} and at expiry. (RA-7)

## 10. Review

The {{org:ciso}} reviews this standard {{fill:for example annually}}, and whenever NIST approves, deprecates or disallows an algorithm, a module used by the organization loses its validation, or the system and communications protection policy changes.

| Version | Date | Change | Approved by |
| --- | --- | --- | --- |
| {{fill:version}} | {{fill:date}} | {{fill:summary of change}} | {{fill:name and title}} |
