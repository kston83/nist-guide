---
title: 'IA-3 Device Identification and Authentication'
description: 'NIST SP 800-53 Rev. 5 control IA-3, Device Identification and Authentication: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'IA-3 Device Identification and Authentication'
  order: 3
control:
  id: IA-3
  family: IA
  baselines: [Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | System | 3 (0 in a baseline) |

**Related controls:** [AC-17](/controls/ac/ac-17/), [AC-18](/controls/ac/ac-18/), [AC-19](/controls/ac/ac-19/), [AU-6](/controls/au/au-6/), [CA-3](/controls/ca/ca-3/), [CA-9](/controls/ca/ca-9/), [IA-4](/controls/ia/ia-4/), [IA-5](/controls/ia/ia-5/), [IA-9](/controls/ia/ia-9/), [IA-11](/controls/ia/ia-11/), [IA-13](/controls/ia/ia-13/), [SI-4](/controls/si/si-4/)

## Control statement

Uniquely identify and authenticate [Assignment: organization-defined devices and/or types of devices] before establishing a [Selection (one or more): local; remote; network] connection.

<details>
<summary>NIST discussion</summary>

Devices that require unique device-to-device identification and authentication are defined by type, device, or a combination of type and device. Organization-defined device types include devices that are not owned by the organization. Systems use shared known information (e.g., Media Access Control [MAC], Transmission Control Protocol/Internet Protocol [TCP/IP] addresses) for device identification or organizational authentication solutions (e.g., Institute of Electrical and Electronics Engineers (IEEE) 802.1x and Extensible Authentication Protocol [EAP], RADIUS server with EAP-Transport Layer Security [TLS] authentication, Kerberos) to identify and authenticate devices on local and wide area networks. Organizations determine the required strength of authentication mechanisms based on the security categories of systems and mission or business requirements. Because of the challenges of implementing device authentication on a large scale, organizations can restrict the application of the control to a limited number/type of devices based on mission or business needs.

</details>

## Control enhancements

<a id="ia-3.1"></a>

### IA-3(1) Cryptographic Bidirectional Authentication

*Baselines: Not in a baseline*

Authenticate [Assignment: organization-defined devices and/or types of devices] before establishing [Selection (one or more): local; remote; network] connection using bidirectional authentication that is cryptographically based.

<details>
<summary>Discussion and assessment objectives for IA-3(1)</summary>

A local connection is a connection with a device that communicates without the use of a network. A network connection is a connection with a device that communicates through a network. A remote connection is a connection with a device that communicates through an external network. Bidirectional authentication provides stronger protection to validate the identity of other devices for connections that are of greater risk.

Determine if [Assignment: organization-defined devices and/or types of devices] are authenticated before establishing [Selection (one or more): local; remote; network] connection using bidirectional authentication that is cryptographically based.

**Examine:** Identification and authentication policy; system security plan; procedures addressing device identification and authentication; system design documentation; list of devices requiring unique identification and authentication; device connection reports; system configuration settings and associated documentation; other relevant documents or records.

**Interview:** Organizational personnel with operational responsibilities for device identification and authentication; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms supporting and/or implementing device authentication capability; cryptographically based bidirectional authentication mechanisms.

</details>

<a id="ia-3.3"></a>

### IA-3(3) Dynamic Address Allocation

*Baselines: Not in a baseline*

- **(a)** Where addresses are allocated dynamically, standardize dynamic address allocation lease information and the lease duration assigned to devices in accordance with [Assignment: organization-defined lease information and lease duration] ; and
- **(b)** Audit lease information when assigned to a device.

<details>
<summary>Discussion and assessment objectives for IA-3(3)</summary>

The Dynamic Host Configuration Protocol (DHCP) is an example of a means by which clients can dynamically receive network address assignments.

Determine if:

- **IA-03(03)(a)**
  - **IA-03(03)(a)[01]** dynamic address allocation lease information assigned to devices where addresses are allocated dynamically are standardized in accordance with [Assignment: organization-defined lease information];
  - **IA-03(03)(a)[02]** dynamic address allocation lease duration assigned to devices where addresses are allocated dynamically are standardized in accordance with [Assignment: organization-defined lease duration];
- **IA-03(03)(b)** lease information is audited when assigned to a device.

**Examine:** Identification and authentication policy; system security plan; procedures addressing device identification and authentication; system design documentation; system configuration settings and associated documentation; evidence of lease information and lease duration assigned to devices; device connection reports; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with operational responsibilities for device identification and authentication; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms supporting and/or implementing device identification and authentication capabilities; mechanisms supporting and/or implementing dynamic address allocation; mechanisms supporting and/or implanting auditing of lease information.

</details>

<a id="ia-3.4"></a>

### IA-3(4) Device Attestation

*Baselines: Not in a baseline*

Handle device identification and authentication based on attestation by [Assignment: organization-defined configuration management process].

<details>
<summary>Discussion and assessment objectives for IA-3(4)</summary>

Device attestation refers to the identification and authentication of a device based on its configuration and known operating state. Device attestation can be determined via a cryptographic hash of the device. If device attestation is the means of identification and authentication, then it is important that patches and updates to the device are handled via a configuration management process such that the patches and updates are done securely and do not disrupt identification and authentication to other devices.

Determine if device identification and authentication are handled based on attestation by [Assignment: organization-defined configuration management process].

**Examine:** Identification and authentication policy; system security plan; procedures addressing device identification and authentication; procedures addressing device configuration management; system design documentation; system configuration settings and associated documentation; configuration management records; change control records; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with operational responsibilities for device identification and authentication; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Mechanisms supporting and/or implementing device identification and authentication capabilities; mechanisms supporting and/or implementing configuration management; cryptographic mechanisms supporting device attestation.

</details>

*Withdrawn enhancements: IA-3(2).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for IA-3</summary>

Determine if [Assignment: organization-defined devices and/or types of devices] are uniquely identified and authenticated before establishing a [Selection (one or more): local; remote; network] connection.

**Examine:** Identification and authentication policy; system security plan; procedures addressing device identification and authentication; system design documentation; list of devices requiring unique identification and authentication; device connection reports; system configuration settings and associated documentation; other relevant documents or records.

**Interview:** Organizational personnel with operational responsibilities for device identification and authentication; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms supporting and/or implementing device identification and authentication capabilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

IA-3 asks the system to know which device is connecting, and to prove it, before the connection is allowed. An IP or MAC address identifies a device but does not authenticate it, since both are easy to spoof. The [Identification and Authentication policy](/templates/policies/ia/) applies IA-3 to every organization-managed endpoint, server and network device.

**Common implementations.** Network access control with IEEE 802.1X and EAP-TLS, where each managed device holds a certificate from the organization's public key infrastructure. Remote access (VPN or zero trust access) that requires a device certificate and a healthy compliance state from device management, not just the user's sign-in. Mutual TLS between servers and services. Devices that cannot hold a certificate, such as printers and building systems, sit on their own network segment with MAC-based identification and a documented exception. Certificates follow section 7 of the [encryption and key management standard](/templates/standards/encryption-and-key-management-standard/).

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Devices and types of devices to identify and authenticate | All organization-managed endpoints, servers and network devices |
| Connection types (local, remote, network) | Remote and network |

**Evidence assessors ask for.**

- The list of device types in scope, with the authentication method for each and any exceptions
- Network access control and 802.1X configuration, including the MAC authentication bypass list
- Remote access settings showing device certificates or device compliance are required
- Certificate templates and issuance records for device certificates
- A test, often run by the assessor, showing an unmanaged device is refused or sent to a restricted network

**Inheritance.** The network access control service, the public key infrastructure and device management are usually common controls. The system owns authentication between its own servers and services, and the exceptions for its own devices.

**Common findings.**

- MAC authentication bypass lists that grow without review and let any device with a copied address on to the network.
- Remote access that authenticates the user but accepts any device.
- Device certificates left valid after the device is retired or lost.
- Server-to-server connections inside the boundary with no authentication at all.

**Enhancements in the Moderate baseline.** None. IA-3 has no enhancements in the Low, Moderate or High baselines.

**Federal systems** (as of September 2026). OMB [M-19-17](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf) (May 21, 2019) requires agencies to manage the digital identity life cycle of devices, non-person entities and automated technologies. That includes mechanisms "to bind, update, revoke, and destroy credentials for the device" (Section IV, Architecture, item 3). OMB M-26-18 (August 31, 2026) lists M-19-17 as existing OMB policy.
