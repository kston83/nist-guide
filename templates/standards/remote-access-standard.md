---
title: Remote Access Standard
type: standard
description: The allowed remote access methods, and the device, authentication, encryption, connection, session, monitoring and privileged access requirements for each, that make the access control policy's remote access requirements (SP 800-53 AC-17 and its enhancements) measurable.
controls: [ac-17, ac-17.1, ac-17.2, ac-17.3, ac-17.4, ac-12, sc-10]
status: draft
stage: core
typical:
  ac-17.04_odp.01: emergency administration outside business hours and administration of cloud-hosted components
  ac-17.04_odp.02: investigation of security incidents
  ac-12_odp: '30 minutes of inactivity for remote and web sessions, or at the end of the maximum session lifetime'
  sc-10_odp: '30 minutes'
---

:::guidance
AC-17a asks the organization to establish and document usage restrictions, configuration and connection requirements, and implementation guidance for each type of remote access it allows; AC-17b asks each system to authorize each type before it is used. This standard is the first half, and the system security plan records the second. It follows [NIST SP 800-46 Rev. 2](https://csrc.nist.gov/pubs/sp/800/46/r2/final), Guide to Enterprise Telework, Remote Access, and Bring Your Own Device (BYOD) Security (July 2016), the final version as of October 2026. Its section 5.1 says a telework security policy should define which forms of remote access the organization permits, which types of device may use each, the type of access each type of teleworker is granted, and how accounts are provisioned, and that it should be documented in the system security plan. Sections 3 and 4 below are those decisions. The typical values are copied from the Access Control policy's AC-12 and AC-17(4) clauses and the System and Communications Protection policy's SC-10 clause; keep them in step. The remote access service itself is usually a common control that systems inherit.
:::

| Owner | Approved by | Version | Effective date |
| --- | --- | --- | --- |
| {{org:ciso}} | {{fill:name and title}} | {{fill:version}} | {{fill:date}} |

## 1. Purpose and scope

This standard sets the requirements for remote access to the systems of {{org:name}}. Remote access is access to organizational systems by users, or processes acting on their behalf, that communicate through external networks such as the internet. It covers employees, contractors, partners and maintenance providers, working from home, from travel, or from another organization's network. It does not cover public web services and other systems designed for public access.

## 2. Roles

| Role | Responsibilities |
| --- | --- |
| {{org:ciso}} | Owns this standard; approves new remote access methods and exceptions (AC-17a) |
| {{fill:remote access service owner, for example the network engineering team}} | Runs the remote access service and its gateways; keeps them patched and configured to this standard |
| {{org:system-owner}} | Authorizes the remote access methods the system allows, records them in the system security plan, and approves remote privileged access (AC-17b, AC-17(4)) |
| {{org:account-manager}} | Grants remote access only to users whose access request includes it |
| {{org:security-operations}} | Monitors remote access and responds to alerts (AC-17(1)) |
| Users | Connect only through the approved methods, as the [Rules of Behavior](/templates/forms/rules-of-behavior/) require |

## 3. Allowed remote access methods

- Remote access shall use only the methods in this table, each with the requirements listed for it. (AC-17a)
- Each system owner shall authorize, in the system security plan, each remote access method the system allows before any connection by that method is made. (AC-17b)
- A new method, or a major change to one, shall be approved by the {{org:ciso}} after a test of a prototype covering connectivity, traffic protection, authentication, management, logging and performance, before it is put into production. (AC-17a)

| Method | Category (SP 800-46) | Allowed users | Allowed devices (section 4) | Authentication | Connection point | Status |
| --- | --- | --- | --- | --- | --- | --- |
| {{fill:for example the organization's virtual private network}} | Tunneling | {{fill:for example employees and contractors}} | {{fill:organization-issued}} | {{fill:multi-factor, with a device certificate}} | {{fill:VPN gateway at the internet edge}} | {{fill:approved}} |
| {{fill:for example a zero trust access service}} | Direct application access through a policy enforcement point | {{fill:users}} | {{fill:organization-issued; managed personally owned devices for listed applications}} | {{fill:phishing-resistant multi-factor}} | {{fill:the service's enforcement points}} | {{fill:status}} |
| {{fill:for example virtual desktop infrastructure}} | Remote desktop access, through a gateway | {{fill:users}} | {{fill:devices}} | {{fill:authentication}} | {{fill:remote desktop gateway}} | {{fill:status}} |
| {{fill:for example web email and software-as-a-service applications}} | Portal or direct application access | {{fill:users}} | {{fill:devices}} | {{fill:authentication, through the identity provider}} | {{fill:the provider's service}} | {{fill:status}} |
| {{fill:for example the privileged access service}} | Remote desktop or shell access, through a gateway | Administrators | Organization-issued, hardened administration devices | Phishing-resistant multi-factor | {{fill:privileged access gateway}} | {{fill:status}} |

These methods are prohibited:

- Remote desktop, secure shell, database and other administrative services exposed directly to the internet. (AC-17(3))
- Remote support or remote control tools a vendor or user installs outside the methods above. (AC-17a)
- Dial-in modems and other connections that bypass the managed connection points. (AC-17(3))
- {{fill:other prohibited methods}}

:::guidance
SP 800-46 Rev. 2 section 2.2 groups remote access methods into four categories by architecture: tunneling, portals, remote desktop access and direct application access. It asks organizations to weigh the security of each against how well it meets operational needs, and its section 5.1.1 says a method that cannot be secured as the organization's security policy requires, such as with approved cryptography, should not be used. A zero trust access service, where enforcement sits in front of each application, fits the direct application access category; record its policy enforcement points as the connection points.
:::

## 4. Devices and access tiers

- Remote access shall be allowed only from the device types this table permits, to the resources it lists for each. (AC-17a)
- Personally owned devices the organization does not manage, and public or shared computers, shall not be used for remote access, as the Access Control Policy's AC-20 statements require. (AC-17a)
- A personally owned device shall be used only where the organization has approved and enrolled it in device management, and only for the resources this table allows. (AC-17a)
- The remote access service shall check each device's identity and compliance before connecting it, where the method supports it, and block devices that fail. (AC-17(1))

| Resource tier | Organization-issued device | Personally owned device, approved and managed | Unmanaged or public device |
| --- | --- | --- | --- |
| Email, calendar and collaboration | {{fill:allowed}} | {{fill:allowed}} | Not allowed |
| Internal business applications | {{fill:allowed}} | {{fill:for example through virtual desktop only}} | Not allowed |
| Systems holding sensitive or personally identifiable information | {{fill:allowed}} | {{fill:for example not allowed}} | Not allowed |
| Administration of systems and security functions | {{fill:allowed from hardened administration devices only}} | Not allowed | Not allowed |

Organization-issued remote devices shall have full-disk encryption, endpoint protection, current security updates and the organization's secure configuration, the same as devices used on site. (AC-17a)

:::guidance
SP 800-46 Rev. 2 section 5.1.2 describes tiered access: the most-controlled devices get the most access, and the least-controlled get minimal or none. It cautions against unknown devices, since the risk of using them for remote access without a secure environment is extremely high. Its Table 5-1 is an example with seven device categories, which this table condenses to three, matching the AC-19 and AC-20 statements of the Access Control Policy and the alternate work site controls (PE-17). NIST's AC-20(3) discussion counts personally owned devices among non-organizationally owned systems, whose use is either prohibited (AC-20b) or allowed with restrictions, such as approved controls before connection, limits on the information, services or applications they reach, and virtualization that keeps processing and storage on organization servers; so the AC-20 terms apply to them. Section 2.1 of SP 800-46 also says to plan on the assumptions that the networks between device and organization cannot be trusted, that client devices will be acquired by malicious parties, and that they will become infected with malware.
:::

## 5. Authentication

- Every remote access session shall authenticate the user with multi-factor authentication, using a replay-resistant authenticator, before granting access to any resource. (AC-17a)
- Privileged remote access shall use a phishing-resistant authenticator, such as a public key credential bound to the device or a hardware security key. (AC-17(4))
- Where the method supports it, the remote access service and the client shall authenticate each other, so the user can verify the service before providing credentials. (AC-17a)
- Remote access shall be granted only to accounts whose approved access request includes it, and shall end when the account is disabled. (AC-17b)

:::guidance
The multi-factor and replay-resistance requirements are those of IA-2(1), IA-2(2) and IA-2(8), set out in the identification and authentication policy and made measurable in the [identification and authentication standard](/templates/standards/identification-and-authentication-standard/), whose section 5 lists the approved authenticators and which are phishing-resistant; this standard applies them to every remote session. SP 800-46 Rev. 2 section 3.3 says remote access servers should authenticate each user before granting any access, use authorization technologies so only the necessary resources can be used, and implement mutual authentication whenever feasible. [NIST SP 800-63B-4](https://pages.nist.gov/800-63-4/sp800-63b.html) (July 2025, final as of October 2026) describes phishing-resistant authenticators and the authentication assurance levels.
:::

## 6. Encryption

- Remote access sessions shall be protected with cryptographic mechanisms that protect their confidentiality and integrity from end to end over external networks. (AC-17(2))
- The protocols, versions, algorithms and modules shall be those the [encryption and key management standard](/templates/standards/encryption-and-key-management-standard/) sets for data in transit. (AC-17(2))
- Protocols that send credentials or session content unencrypted shall not be used for remote access. (AC-17(2))

## 7. Managed connection points

- All remote access shall be routed through the authorized and managed network access control points listed in section 3. (AC-17(3))
- The connection points shall be few, placed at the network edge or in front of the resources they protect, and managed as managed interfaces under the [boundary protection standard](/templates/standards/boundary-protection-standard/), including its split tunneling rule (SC-7(7)). (AC-17(3))
- Remote access servers and gateways shall be kept fully patched, operated to the organization's secure configuration baseline, and administered only by authorized administrators from trusted hosts. (AC-17(3))

## 8. Sessions

- The system shall automatically terminate a remote user session after {{param:ac-12_odp}}. (AC-12)
- The network connection associated with a remote session shall be terminated at the end of the session or after {{param:sc-10_odp}} of inactivity. (SC-10)
- A user shall reauthenticate after a session is terminated, and after {{fill:for example 12 hours}}, the maximum session lifetime, even if the session is active. (AC-12)

:::guidance
SP 800-63B-4 section 2.2.3 says that at authentication assurance level 2, the overall session timeout should be no more than 24 hours and the inactivity timeout no more than one hour. The typical values here fall within both. NIST's AC-12 discussion separates session termination, which ends the user's logical session, from SC-10, which ends the network connection.
:::

## 9. Monitoring and control

- The remote access service shall log each connection: the user, the device, the source address, the method, the start and end times, and the resources reached. Logs shall be sent to {{fill:for example the security information and event management system}}. (AC-17(1))
- The {{org:security-operations}} shall alert on and review {{fill:for example logons from unexpected countries, impossible travel, connections from devices that failed compliance checks, repeated failed authentication, and remote access by disabled or dormant accounts}}. (AC-17(1))
- The remote access service shall be able to disconnect a user's sessions and block an account or device within {{fill:for example 15 minutes}} of a decision to do so. (AC-17(1))
- The {{fill:remote access service owner}} shall review the remote access configuration and the list of authorized users {{fill:for example quarterly}}, and remove access no longer needed. (AC-17(1))

## 10. Remote privileged access

- Privileged commands shall be executed via remote access only for {{param:ac-17.04_odp.01}}. (AC-17(4)(a))
- Security-relevant information, such as audit logs, security settings and access control lists, shall be accessed via remote access only for {{param:ac-17.04_odp.02}}. (AC-17(4)(a))
- Remote privileged access shall pass through the privileged access service, which records each session in a format that provides assessable evidence: who connected, when, to what, and the commands run or a recording of the session. (AC-17(4)(a))
- The {{org:system-owner}} shall document in the system security plan the rationale for each kind of remote privileged access the system allows. (AC-17(4)(b))

## 11. External parties and maintenance

- Contractors, partners and maintenance providers shall use the same approved methods and meet the same device and authentication requirements, or the requirements of an approved agreement that the {{org:ciso}} has accepted. (AC-17a)
- Nonlocal maintenance shall follow the Maintenance Policy: each session approved in advance, the provider's account disabled outside approved sessions, and each session recorded in the [maintenance log](/templates/forms/maintenance-log/) (MA-4). (AC-17a)
- A connection from another organization's system, rather than from individual users, is an interconnection and needs an approved [information exchange agreement](/templates/forms/information-exchange-agreement/) (CA-3). (AC-17b)

:::federal
For federal agencies, SP 800-46 Rev. 2 section 3.3 states that "Federal agencies are required to use cryptographic algorithms that are NIST-approved and contained in FIPS-validated modules." [OMB M-22-09](https://www.whitehouse.gov/wp-content/uploads/2022/01/M-22-09.pdf), Moving the U.S. Government Toward Zero Trust Cybersecurity Principles (January 26, 2022), requires phishing-resistant multi-factor authentication for agency staff, contractors and partners. [OMB M-19-17](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf) (May 21, 2019), Section III, item 2, requires Personal Identity Verification (PIV) credentials, where applicable in accordance with OPM requirements, as the primary means of identification and authentication to federal information systems by federal employees and contractors; [OMB M-26-18](https://www.whitehouse.gov/wp-content/uploads/2026/08/M-26-18-Scaling-Use-of-Login.gov-to-Deliver-a-Universal-Sign-on-for-Public-Services.pdf) (August 31, 2026), footnote 5, lists both memoranda as existing OMB policy. CISA's [Trusted Internet Connections (TIC) 3.0](https://www.cisa.gov/resources-tools/programs/trusted-internet-connections-tic) program implements OMB M-19-26, Update to the Trusted Internet Connections (TIC) Initiative (September 2019); its Remote User Use Case (version 2.2, September 2026) describes the architecture and security capabilities for agency users who perform sanctioned business functions outside agency premises, including on personally owned devices used under a BYOD policy. As of October 2026.

- Remote access sessions shall use NIST-approved cryptographic algorithms in FIPS-validated cryptographic modules. (AC-17(2))
- Remote access by agency staff, contractors and partners shall use phishing-resistant multi-factor authentication, as OMB M-22-09 requires, with a PIV or derived PIV credential where the person holds one, as OMB M-19-17 requires. (AC-17a)
- The remote access methods in section 3 shall be implemented in accordance with the agency's TIC 3.0 architecture and the TIC 3.0 Remote User Use Case, and the system security plan shall show which TIC security capabilities each method provides or inherits. (AC-17(3))

:::

## 12. Exceptions

- A method, device or setting that does not meet this standard shall be approved by the {{org:ciso}} as an exception, with the business need, compensating measures and an expiry date, and entered in the system's plan of action and milestones where it is a weakness. (AC-17a)
- Exceptions shall be reviewed at least annually and at expiry. (AC-17a)

## 13. Review

The {{org:ciso}} reviews this standard {{fill:for example annually}}, and whenever a remote access method is added or retired, after incidents involving remote access, and when the Access Control Policy changes. SP 800-46 Rev. 2 section 5.1.2 advises reassessing periodically which device types are permitted and what access each is given, as device capabilities and threats change.

| Version | Date | Change | Approved by |
| --- | --- | --- | --- |
| {{fill:version}} | {{fill:date}} | {{fill:summary of change}} | {{fill:name and title}} |
