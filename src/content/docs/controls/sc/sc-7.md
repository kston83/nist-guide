---
title: 'SC-7 Boundary Protection'
description: 'NIST SP 800-53 Rev. 5 control SC-7, Boundary Protection: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SC-7 Boundary Protection'
  order: 7
control:
  id: SC-7
  family: SC
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | System | 26 (8 in a baseline) |

**Related controls:** [AC-4](/controls/ac/ac-4/), [AC-17](/controls/ac/ac-17/), [AC-18](/controls/ac/ac-18/), [AC-19](/controls/ac/ac-19/), [AC-20](/controls/ac/ac-20/), [AU-13](/controls/au/au-13/), [CA-3](/controls/ca/ca-3/), [CM-2](/controls/cm/cm-2/), [CM-4](/controls/cm/cm-4/), [CM-7](/controls/cm/cm-7/), [CM-10](/controls/cm/cm-10/), [CP-8](/controls/cp/cp-8/), [CP-10](/controls/cp/cp-10/), [IR-4](/controls/ir/ir-4/), [MA-4](/controls/ma/ma-4/), [PE-3](/controls/pe/pe-3/), [PL-8](/controls/pl/pl-8/), [PM-12](/controls/pm/pm-12/), [SA-8](/controls/sa/sa-8/), [SA-17](/controls/sa/sa-17/), [SC-5](/controls/sc/sc-5/), [SC-26](/controls/sc/sc-26/), [SC-32](/controls/sc/sc-32/), [SC-35](/controls/sc/sc-35/), [SC-43](/controls/sc/sc-43/)

## Control statement

- **a.** Monitor and control communications at the external managed interfaces to the system and at key internal managed interfaces within the system;
- **b.** Implement subnetworks for publicly accessible system components that are [Selection: physically; logically] separated from internal organizational networks; and
- **c.** Connect to external networks or systems only through managed interfaces consisting of boundary protection devices arranged in accordance with an organizational security and privacy architecture.

<details>
<summary>NIST discussion</summary>

Managed interfaces include gateways, routers, firewalls, guards, network-based malicious code analysis, virtualization systems, or encrypted tunnels implemented within a security architecture. Subnetworks that are physically or logically separated from internal networks are referred to as demilitarized zones or DMZs. Restricting or prohibiting interfaces within organizational systems includes restricting external web traffic to designated web servers within managed interfaces, prohibiting external traffic that appears to be spoofing internal addresses, and prohibiting internal traffic that appears to be spoofing external addresses. SP 800-189 provides additional information on source address validation techniques to prevent ingress and egress of traffic with spoofed addresses. Commercial telecommunications services are provided by network components and consolidated management systems shared by customers. These services may also include third party-provided access lines and other service elements. Such services may represent sources of increased risk despite contract security provisions. Boundary protection may be implemented as a common control for all or part of an organizational network such that the boundary to be protected is greater than a system-specific boundary (i.e., an authorization boundary).

</details>

## Control enhancements

<a id="sc-7.3"></a>

### SC-7(3) Access Points

*Baselines: Moderate, High*

Limit the number of external network connections to the system.

<details>
<summary>Discussion and assessment objectives for SC-7(3)</summary>

Limiting the number of external network connections facilitates monitoring of inbound and outbound communications traffic. The Trusted Internet Connection DHS TIC initiative is an example of a federal guideline that requires limits on the number of external network connections. Limiting the number of external network connections to the system is important during transition periods from older to newer technologies (e.g., transitioning from IPv4 to IPv6 network protocols). Such transitions may require implementing the older and newer technologies simultaneously during the transition period and thus increase the number of access points to the system.

Determine if the number of external network connections to the system is limited.

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; boundary protection hardware and software; system architecture and configuration documentation; system configuration settings and associated documentation; communications and network traffic monitoring logs; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms implementing boundary protection capabilities; mechanisms limiting the number of external network connections to the system.

</details>

<a id="sc-7.4"></a>

### SC-7(4) External Telecommunications Services

*Baselines: Moderate, High*

- **(a)** Implement a managed interface for each external telecommunication service;
- **(b)** Establish a traffic flow policy for each managed interface;
- **(c)** Protect the confidentiality and integrity of the information being transmitted across each interface;
- **(d)** Document each exception to the traffic flow policy with a supporting mission or business need and duration of that need;
- **(e)** Review exceptions to the traffic flow policy [Assignment: organization-defined frequency] and remove exceptions that are no longer supported by an explicit mission or business need;
- **(f)** Prevent unauthorized exchange of control plane traffic with external networks;
- **(g)** Publish information to enable remote networks to detect unauthorized control plane traffic from internal networks; and
- **(h)** Filter unauthorized control plane traffic from external networks.

<details>
<summary>Discussion and assessment objectives for SC-7(4)</summary>

External telecommunications services can provide data and/or voice communications services. Examples of control plane traffic include Border Gateway Protocol (BGP) routing, Domain Name System (DNS), and management protocols. See SP 800-189 for additional information on the use of the resource public key infrastructure (RPKI) to protect BGP routes and detect unauthorized BGP announcements.

Determine if:

- **SC-07(04)(a)** a managed interface is implemented for each external telecommunication service;
- **SC-07(04)(b)** a traffic flow policy is established for each managed interface;
- **SC-07(04)(c)**
  - **SC-07(04)(c)[01]** the confidentiality of the information being transmitted across each interface is protected;
  - **SC-07(04)(c)[02]** the integrity of the information being transmitted across each interface is protected;
- **SC-07(04)(d)** each exception to the traffic flow policy is documented with a supporting mission or business need and duration of that need;
- **SC-07(04)(e)**
  - **SC-07(04)(e)[01]** exceptions to the traffic flow policy are reviewed [Assignment: organization-defined frequency];
  - **SC-07(04)(e)[02]** exceptions to the traffic flow policy that are no longer supported by an explicit mission or business need are removed;
- **SC-07(04)(f)** unauthorized exchanges of control plan traffic with external networks are prevented;
- **SC-07(04)(g)** information is published to enable remote networks to detect unauthorized control plane traffic from internal networks;
- **SC-07(04)(h)** unauthorized control plane traffic is filtered from external networks.

**Examine:** System and communications protection policy; traffic flow policy; information flow control policy; procedures addressing boundary protection; system security architecture; system design documentation; boundary protection hardware and software; system architecture and configuration documentation; system configuration settings and associated documentation; records of traffic flow policy exceptions; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel with boundary protection responsibilities.

**Test:** Organizational processes for documenting and reviewing exceptions to the traffic flow policy; organizational processes for removing exceptions to the traffic flow policy; mechanisms implementing boundary protection capabilities; managed interfaces implementing traffic flow policy.

</details>

<a id="sc-7.5"></a>

### SC-7(5) Deny by Default — Allow by Exception

*Baselines: Moderate, High*

Deny network communications traffic by default and allow network communications traffic by exception [Selection (one or more): at managed interfaces; for [Assignment: organization-defined systems] ].

<details>
<summary>Discussion and assessment objectives for SC-7(5)</summary>

Denying by default and allowing by exception applies to inbound and outbound network communications traffic. A deny-all, permit-by-exception network communications traffic policy ensures that only those system connections that are essential and approved are allowed. Deny by default, allow by exception also applies to a system that is connected to an external system.

Determine if:

- **SC-07(05)[01]** network communications traffic is denied by default [Selection (one or more): at managed interfaces; for [Assignment: organization-defined systems] ];
- **SC-07(05)[02]** network communications traffic is allowed by exception [Selection (one or more): at managed interfaces; for [Assignment: organization-defined systems] ].

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms implementing traffic management at managed interfaces.

</details>

<a id="sc-7.7"></a>

### SC-7(7) Split Tunneling for Remote Devices

*Baselines: Moderate, High*

Prevent split tunneling for remote devices connecting to organizational systems unless the split tunnel is securely provisioned using [Assignment: organization-defined safeguards].

<details>
<summary>Discussion and assessment objectives for SC-7(7)</summary>

Split tunneling is the process of allowing a remote user or device to establish a non-remote connection with a system and simultaneously communicate via some other connection to a resource in an external network. This method of network access enables a user to access remote devices and simultaneously, access uncontrolled networks. Split tunneling might be desirable by remote users to communicate with local system resources, such as printers or file servers. However, split tunneling can facilitate unauthorized external connections, making the system vulnerable to attack and to exfiltration of organizational information. Split tunneling can be prevented by disabling configuration settings that allow such capability in remote devices and by preventing those configuration settings from being configurable by users. Prevention can also be achieved by the detection of split tunneling (or of configuration settings that allow split tunneling) in the remote device, and by prohibiting the connection if the remote device is using split tunneling. A virtual private network (VPN) can be used to securely provision a split tunnel. A securely provisioned VPN includes locking connectivity to exclusive, managed, and named environments, or to a specific set of pre-approved addresses, without user control.

Determine if split tunneling is prevented for remote devices connecting to organizational systems unless the split tunnel is securely provisioned using [Assignment: organization-defined safeguards].

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; system hardware and software; system architecture; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms implementing boundary protection capabilities; mechanisms supporting/restricting non-remote connections.

</details>

<a id="sc-7.8"></a>

### SC-7(8) Route Traffic to Authenticated Proxy Servers

*Baselines: Moderate, High*

Route [Assignment: organization-defined internal communications traffic] to [Assignment: organization-defined external networks] through authenticated proxy servers at managed interfaces.

<details>
<summary>Discussion and assessment objectives for SC-7(8)</summary>

External networks are networks outside of organizational control. A proxy server is a server (i.e., system or application) that acts as an intermediary for clients requesting system resources from non-organizational or other organizational servers. System resources that may be requested include files, connections, web pages, or services. Client requests established through a connection to a proxy server are assessed to manage complexity and provide additional protection by limiting direct connectivity. Web content filtering devices are one of the most common proxy servers that provide access to the Internet. Proxy servers can support the logging of Transmission Control Protocol sessions and the blocking of specific Uniform Resource Locators, Internet Protocol addresses, and domain names. Web proxies can be configured with organization-defined lists of authorized and unauthorized websites. Note that proxy servers may inhibit the use of virtual private networks (VPNs) and create the potential for "man-in-the-middle" attacks (depending on the implementation).

Determine if [Assignment: organization-defined internal communications traffic] is routed to [Assignment: organization-defined external networks] through authenticated proxy servers at managed interfaces.

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; system hardware and software; system architecture; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms implementing traffic management through authenticated proxy servers at managed interfaces.

</details>

<a id="sc-7.9"></a>

### SC-7(9) Restrict Threatening Outgoing Communications Traffic

*Baselines: Not in a baseline*

- **(a)** Detect and deny outgoing communications traffic posing a threat to external systems; and
- **(b)** Audit the identity of internal users associated with denied communications.

<details>
<summary>Discussion and assessment objectives for SC-7(9)</summary>

Detecting outgoing communications traffic from internal actions that may pose threats to external systems is known as extrusion detection. Extrusion detection is carried out within the system at managed interfaces. Extrusion detection includes the analysis of incoming and outgoing communications traffic while searching for indications of internal threats to the security of external systems. Internal threats to external systems include traffic indicative of denial-of-service attacks, traffic with spoofed source addresses, and traffic that contains malicious code. Organizations have criteria to determine, update, and manage identified threats related to extrusion detection.

Determine if:

- **SC-07(09)(a)**
  - **SC-07(09)(a)[01]** outgoing communications traffic posing a threat to external systems is detected;
  - **SC-07(09)(a)[02]** outgoing communications traffic posing a threat to external systems is denied;
- **SC-07(09)(b)** the identity of internal users associated with denied communications is audited.

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; system hardware and software; system architecture; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms implementing boundary protection capabilities; mechanisms implementing the detection and denial of threatening outgoing communications traffic; mechanisms implementing auditing of outgoing communications traffic.

</details>

<a id="sc-7.10"></a>

### SC-7(10) Prevent Exfiltration

*Baselines: Not in a baseline*

- **(a)** Prevent the exfiltration of information; and
- **(b)** Conduct exfiltration tests [Assignment: organization-defined frequency].

<details>
<summary>Discussion and assessment objectives for SC-7(10)</summary>

Prevention of exfiltration applies to both the intentional and unintentional exfiltration of information. Techniques used to prevent the exfiltration of information from systems may be implemented at internal endpoints, external boundaries, and across managed interfaces and include adherence to protocol formats, monitoring for beaconing activity from systems, disconnecting external network interfaces except when explicitly needed, employing traffic profile analysis to detect deviations from the volume and types of traffic expected, call backs to command and control centers, conducting penetration testing, monitoring for steganography, disassembling and reassembling packet headers, and using data loss and data leakage prevention tools. Devices that enforce strict adherence to protocol formats include deep packet inspection firewalls and Extensible Markup Language (XML) gateways. The devices verify adherence to protocol formats and specifications at the application layer and identify vulnerabilities that cannot be detected by devices that operate at the network or transport layers. The prevention of exfiltration is similar to data loss prevention or data leakage prevention and is closely associated with cross-domain solutions and system guards that enforce information flow requirements.

Determine if:

- **SC-07(10)(a)** the exfiltration of information is prevented;
- **SC-07(10)(b)** exfiltration tests are conducted [Assignment: organization-defined frequency].

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms implementing boundary protection capabilities that prevent the unauthorized exfiltration of information across managed interfaces.

</details>

<a id="sc-7.11"></a>

### SC-7(11) Restrict Incoming Communications Traffic

*Baselines: Not in a baseline*

Only allow incoming communications from [Assignment: organization-defined authorized sources] to be routed to [Assignment: organization-defined authorized destinations].

<details>
<summary>Discussion and assessment objectives for SC-7(11)</summary>

General source address validation techniques are applied to restrict the use of illegal and unallocated source addresses as well as source addresses that should only be used within the system. The restriction of incoming communications traffic provides determinations that source and destination address pairs represent authorized or allowed communications. Determinations can be based on several factors, including the presence of such address pairs in the lists of authorized or allowed communications, the absence of such address pairs in lists of unauthorized or disallowed pairs, or meeting more general rules for authorized or allowed source and destination pairs. Strong authentication of network addresses is not possible without the use of explicit security protocols, and thus, addresses can often be spoofed. Further, identity-based incoming traffic restriction methods can be employed, including router access control lists and firewall rules.

Determine if only incoming communications from [Assignment: organization-defined authorized sources] are allowed to be routed to [Assignment: organization-defined authorized destinations].

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms implementing boundary protection capabilities with respect to source/destination address pairs.

</details>

<a id="sc-7.12"></a>

### SC-7(12) Host-based Protection

*Baselines: Not in a baseline*

Implement [Assignment: organization-defined host-based boundary protection mechanisms] at [Assignment: organization-defined system components].

<details>
<summary>Discussion and assessment objectives for SC-7(12)</summary>

Host-based boundary protection mechanisms include host-based firewalls. System components that employ host-based boundary protection mechanisms include servers, workstations, notebook computers, and mobile devices.

Determine if [Assignment: organization-defined host-based boundary protection mechanisms] are implemented at [Assignment: organization-defined system components].

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; boundary protection hardware and software; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel with boundary protection responsibilities; system users.

**Test:** Mechanisms implementing host-based boundary protection capabilities.

</details>

<a id="sc-7.13"></a>

### SC-7(13) Isolation of Security Tools, Mechanisms, and Support Components

*Baselines: Not in a baseline*

Isolate [Assignment: organization-defined information security tools, mechanisms, and support components] from other internal system components by implementing physically separate subnetworks with managed interfaces to other components of the system.

<details>
<summary>Discussion and assessment objectives for SC-7(13)</summary>

Physically separate subnetworks with managed interfaces are useful in isolating computer network defenses from critical operational processing networks to prevent adversaries from discovering the analysis and forensics techniques employed by organizations.

Determine if [Assignment: organization-defined information security tools, mechanisms, and support components] are isolated from other internal system components by implementing physically separate subnetworks with managed interfaces to other components of the system.

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; system hardware and software; system architecture; system configuration settings and associated documentation; list of security tools and support components to be isolated from other internal system components; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms supporting and/or implementing the isolation of information security tools, mechanisms, and support components.

</details>

<a id="sc-7.14"></a>

### SC-7(14) Protect Against Unauthorized Physical Connections

*Baselines: Not in a baseline*

Protect against unauthorized physical connections at [Assignment: organization-defined managed interfaces].

<details>
<summary>Discussion and assessment objectives for SC-7(14)</summary>

Systems that operate at different security categories or classification levels may share common physical and environmental controls, since the systems may share space within the same facilities. In practice, it is possible that these separate systems may share common equipment rooms, wiring closets, and cable distribution paths. Protection against unauthorized physical connections can be achieved by using clearly identified and physically separated cable trays, connection frames, and patch panels for each side of managed interfaces with physical access controls that enforce limited authorized access to these items.

Determine if [Assignment: organization-defined managed interfaces] are protected against unauthorized physical connections.

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; system hardware and software; system architecture; system configuration settings and associated documentation; facility communications and wiring diagram system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms supporting and/or implementing protection against unauthorized physical connections.

</details>

<a id="sc-7.15"></a>

### SC-7(15) Networked Privileged Accesses

*Baselines: Not in a baseline*

Route networked, privileged accesses through a dedicated, managed interface for purposes of access control and auditing.

<details>
<summary>Discussion and assessment objectives for SC-7(15)</summary>

Privileged access provides greater accessibility to system functions, including security functions. Adversaries attempt to gain privileged access to systems through remote access to cause adverse mission or business impacts, such as by exfiltrating information or bringing down a critical system capability. Routing networked, privileged access requests through a dedicated, managed interface further restricts privileged access for increased access control and auditing.

Determine if:

- **SC-07(15)[01]** networked, privileged accesses are routed through a dedicated, managed interface for purposes of access control;
- **SC-07(15)[02]** networked, privileged accesses are routed through a dedicated, managed interface for purposes of auditing.

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; system hardware and software; system architecture; system configuration settings and associated documentation; audit logs; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms supporting and/or implementing the routing of networked, privileged access through dedicated, managed interfaces.

</details>

<a id="sc-7.16"></a>

### SC-7(16) Prevent Discovery of System Components

*Baselines: Not in a baseline*

Prevent the discovery of specific system components that represent a managed interface.

<details>
<summary>Discussion and assessment objectives for SC-7(16)</summary>

Preventing the discovery of system components representing a managed interface helps protect network addresses of those components from discovery through common tools and techniques used to identify devices on networks. Network addresses are not available for discovery and require prior knowledge for access. Preventing the discovery of components and devices can be accomplished by not publishing network addresses, using network address translation, or not entering the addresses in domain name systems. Another prevention technique is to periodically change network addresses.

Determine if the discovery of specific system components that represent a managed interface is prevented.

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; system hardware and software; system architecture; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms supporting and/or implementing the prevention of discovery of system components at managed interfaces.

</details>

<a id="sc-7.17"></a>

### SC-7(17) Automated Enforcement of Protocol Formats

*Baselines: Not in a baseline*

Enforce adherence to protocol formats.

<details>
<summary>Discussion and assessment objectives for SC-7(17)</summary>

System components that enforce protocol formats include deep packet inspection firewalls and XML gateways. The components verify adherence to protocol formats and specifications at the application layer and identify vulnerabilities that cannot be detected by devices operating at the network or transport layers.

Determine if adherence to protocol formats is enforced.

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; system architecture; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms supporting and/or implementing the enforcement of adherence to protocol formats.

</details>

<a id="sc-7.18"></a>

### SC-7(18) Fail Secure

*Baselines: High*

Prevent systems from entering unsecure states in the event of an operational failure of a boundary protection device.

<details>
<summary>Discussion and assessment objectives for SC-7(18)</summary>

Fail secure is a condition achieved by employing mechanisms to ensure that in the event of operational failures of boundary protection devices at managed interfaces, systems do not enter into unsecure states where intended security properties no longer hold. Managed interfaces include routers, firewalls, and application gateways that reside on protected subnetworks (commonly referred to as demilitarized zones). Failures of boundary protection devices cannot lead to or cause information external to the devices to enter the devices nor can failures permit unauthorized information releases.

Determine if systems are prevented from entering unsecure states in the event of an operational failure of a boundary protection device.

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; system architecture; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms supporting and/or implementing secure failure.

</details>

<a id="sc-7.19"></a>

### SC-7(19) Block Communication from Non-organizationally Configured Hosts

*Baselines: Not in a baseline*

Block inbound and outbound communications traffic between [Assignment: organization-defined communication clients] that are independently configured by end users and external service providers.

<details>
<summary>Discussion and assessment objectives for SC-7(19)</summary>

Communication clients independently configured by end users and external service providers include instant messaging clients and video conferencing software and applications. Traffic blocking does not apply to communication clients that are configured by organizations to perform authorized functions.

Determine if:

- **SC-07(19)[01]** inbound communications traffic is blocked between [Assignment: organization-defined communication clients] that are independently configured by end users and external service providers;
- **SC-07(19)[02]** outbound communications traffic is blocked between [Assignment: organization-defined communication clients] that are independently configured by end users and external service providers.

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; system hardware and software; system architecture; system configuration settings and associated documentation; list of communication clients independently configured by end users and external service providers; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms supporting and/or implementing the blocking of inbound and outbound communications traffic between communication clients independently configured by end users and external service providers.

</details>

<a id="sc-7.20"></a>

### SC-7(20) Dynamic Isolation and Segregation

*Baselines: Not in a baseline*

Provide the capability to dynamically isolate [Assignment: organization-defined system components] from other system components.

<details>
<summary>Discussion and assessment objectives for SC-7(20)</summary>

The capability to dynamically isolate certain internal system components is useful when it is necessary to partition or separate system components of questionable origin from components that possess greater trustworthiness. Component isolation reduces the attack surface of organizational systems. Isolating selected system components can also limit the damage from successful attacks when such attacks occur.

Determine if the capability to dynamically isolate [Assignment: organization-defined system components] from other system components is provided.

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; system hardware and software; system architecture; system configuration settings and associated documentation; list of system components to be dynamically isolated/segregated from other components of the system; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms supporting and/or implementing the capability to dynamically isolate/segregate system components.

</details>

<a id="sc-7.21"></a>

### SC-7(21) Isolation of System Components

*Baselines: High*

Employ boundary protection mechanisms to isolate [Assignment: organization-defined system components] supporting [Assignment: organization-defined missions and/or business functions].

<details>
<summary>Discussion and assessment objectives for SC-7(21)</summary>

Organizations can isolate system components that perform different mission or business functions. Such isolation limits unauthorized information flows among system components and provides the opportunity to deploy greater levels of protection for selected system components. Isolating system components with boundary protection mechanisms provides the capability for increased protection of individual system components and to more effectively control information flows between those components. Isolating system components provides enhanced protection that limits the potential harm from hostile cyber-attacks and errors. The degree of isolation varies depending upon the mechanisms chosen. Boundary protection mechanisms include routers, gateways, and firewalls that separate system components into physically separate networks or subnetworks; cross-domain devices that separate subnetworks; virtualization techniques; and the encryption of information flows among system components using distinct encryption keys.

Determine if boundary protection mechanisms are employed to isolate [Assignment: organization-defined system components] supporting [Assignment: organization-defined missions and/or business functions].

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; system hardware and software; enterprise architecture documentation; system architecture; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms supporting and/or implementing the capability to separate system components supporting organizational missions and/or business functions.

</details>

<a id="sc-7.22"></a>

### SC-7(22) Separate Subnets for Connecting to Different Security Domains

*Baselines: Not in a baseline*

Implement separate network addresses to connect to systems in different security domains.

<details>
<summary>Discussion and assessment objectives for SC-7(22)</summary>

The decomposition of systems into subnetworks (i.e., subnets) helps to provide the appropriate level of protection for network connections to different security domains that contain information with different security categories or classification levels.

Determine if separate network addresses are implemented to connect to systems in different security domains.

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; system hardware and software; system architecture; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms supporting and/or implementing separate network addresses/different subnets.

</details>

<a id="sc-7.23"></a>

### SC-7(23) Disable Sender Feedback on Protocol Validation Failure

*Baselines: Not in a baseline*

Disable feedback to senders on protocol format validation failure.

<details>
<summary>Discussion and assessment objectives for SC-7(23)</summary>

Disabling feedback to senders when there is a failure in protocol validation format prevents adversaries from obtaining information that would otherwise be unavailable.

Determine if feedback to senders is disabled on protocol format validation failure.

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; system hardware and software; system architecture; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms supporting and/or implementing the disabling of feedback to senders on protocol format validation failure.

</details>

<a id="sc-7.24"></a>

### SC-7(24) Personally Identifiable Information

*Baselines: Privacy*

For systems that process personally identifiable information:

- **(a)** Apply the following processing rules to data elements of personally identifiable information: [Assignment: organization-defined processing rules];
- **(b)** Monitor for permitted processing at the external interfaces to the system and at key internal boundaries within the system;
- **(c)** Document each processing exception; and
- **(d)** Review and remove exceptions that are no longer supported.

<details>
<summary>Discussion and assessment objectives for SC-7(24)</summary>

Managing the processing of personally identifiable information is an important aspect of protecting an individual’s privacy. Applying, monitoring for, and documenting exceptions to processing rules ensure that personally identifiable information is processed only in accordance with established privacy requirements.

Determine if:

- **SC-07(24)(a)** [Assignment: organization-defined processing rules] are applied to data elements of personally identifiable information on systems that process personally identifiable information;
- **SC-07(24)(b)**
  - **SC-07(24)(b)[01]** permitted processing is monitored at the external interfaces to the systems that process personally identifiable information;
  - **SC-07(24)(b)[02]** permitted processing is monitored at key internal boundaries within the systems that process personally identifiable information;
- **SC-07(24)(c)** each processing exception is documented for systems that process personally identifiable information;
- **SC-07(24)(d)**
  - **SC-07(24)(d)[01]** exceptions for systems that process personally identifiable information are reviewed;
  - **SC-07(24)(d)[02]** exceptions for systems that process personally identifiable information that are no longer supported are removed.

**Examine:** System and communications protection policy; procedures addressing boundary protection; personally identifiable information processing policies; list of key internal boundaries of the system; system design documentation; system configuration settings and associated documentation; enterprise security and privacy architecture documentation; system audit records; system security plan; privacy plan; personally identifiable information inventory documentation; data mapping documentation; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security and privacy responsibilities; system developer; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms implementing boundary protection capabilities.

</details>

<a id="sc-7.25"></a>

### SC-7(25) Unclassified National Security System Connections

*Baselines: Not in a baseline*

Prohibit the direct connection of [Assignment: organization-defined unclassified national security system] to an external network without the use of [Assignment: organization-defined boundary protection device].

<details>
<summary>Discussion and assessment objectives for SC-7(25)</summary>

A direct connection is a dedicated physical or virtual connection between two or more systems. Organizations typically do not have complete control over external networks, including the Internet. Boundary protection devices (e.g., firewalls, gateways, and routers) mediate communications and information flows between unclassified national security systems and external networks.

Determine if the direct connection of [Assignment: organization-defined unclassified national security system] to an external network without the use of [Assignment: organization-defined boundary protection device] is prohibited.

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; system hardware and software; system architecture; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms prohibiting the direct connection of unclassified national security systems to an external network.

</details>

<a id="sc-7.26"></a>

### SC-7(26) Classified National Security System Connections

*Baselines: Not in a baseline*

Prohibit the direct connection of a classified national security system to an external network without the use of [Assignment: organization-defined boundary protection device].

<details>
<summary>Discussion and assessment objectives for SC-7(26)</summary>

A direct connection is a dedicated physical or virtual connection between two or more systems. Organizations typically do not have complete control over external networks, including the Internet. Boundary protection devices (e.g., firewalls, gateways, and routers) mediate communications and information flows between classified national security systems and external networks. In addition, approved boundary protection devices (typically managed interface or cross-domain systems) provide information flow enforcement from systems to external networks.

Determine if the direct connection of classified national security system to an external network without the use of a [Assignment: organization-defined boundary protection device] is prohibited.

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; system hardware and software; system architecture; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms prohibiting the direct connection of classified national security systems to an external network.

</details>

<a id="sc-7.27"></a>

### SC-7(27) Unclassified Non-national Security System Connections

*Baselines: Not in a baseline*

Prohibit the direct connection of [Assignment: organization-defined unclassified, non-national security system] to an external network without the use of [Assignment: organization-defined boundary protection device].

<details>
<summary>Discussion and assessment objectives for SC-7(27)</summary>

A direct connection is a dedicated physical or virtual connection between two or more systems. Organizations typically do not have complete control over external networks, including the Internet. Boundary protection devices (e.g., firewalls, gateways, and routers) mediate communications and information flows between unclassified non-national security systems and external networks.

Determine if the direct connection of [Assignment: organization-defined unclassified, non-national security system] to an external network without the use of a [Assignment: organization-defined boundary protection device] is prohibited.

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; system hardware and software; system architecture; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms prohibiting the direct connection of unclassified, non-national security systems to an external network.

</details>

<a id="sc-7.28"></a>

### SC-7(28) Connections to Public Networks

*Baselines: Not in a baseline*

Prohibit the direct connection of [Assignment: organization-defined system] to a public network.

<details>
<summary>Discussion and assessment objectives for SC-7(28)</summary>

A direct connection is a dedicated physical or virtual connection between two or more systems. A public network is a network accessible to the public, including the Internet and organizational extranets with public access.

Determine if the direct connection of the [Assignment: organization-defined system] to a public network is prohibited.

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; system hardware and software; system architecture; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms prohibiting the direct connection of systems to an external network.

</details>

<a id="sc-7.29"></a>

### SC-7(29) Separate Subnets to Isolate Functions

*Baselines: Not in a baseline*

Implement [Selection: physically; logically] separate subnetworks to isolate the following critical system components and functions: [Assignment: organization-defined critical system components and functions].

<details>
<summary>Discussion and assessment objectives for SC-7(29)</summary>

Separating critical system components and functions from other noncritical system components and functions through separate subnetworks may be necessary to reduce susceptibility to a catastrophic or debilitating breach or compromise that results in system failure. For example, physically separating the command and control function from the in-flight entertainment function through separate subnetworks in a commercial aircraft provides an increased level of assurance in the trustworthiness of critical system functions.

Determine if subnetworks are separated [Selection: physically; logically] to isolate [Assignment: organization-defined critical system components and functions].

**Examine:** System and communications protection policy; procedures addressing boundary protection; system design documentation; system hardware and software; system architecture; system configuration settings and associated documentation; criticality analysis; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms separating critical system components and functions.

</details>

*Withdrawn enhancements: SC-7(1), SC-7(2), SC-7(6).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SC-7</summary>

Determine if:

- **SC-07a.**
  - **SC-07a.[01]** communications at external managed interfaces to the system are monitored;
  - **SC-07a.[02]** communications at external managed interfaces to the system are controlled;
  - **SC-07a.[03]** communications at key internal managed interfaces within the system are monitored;
  - **SC-07a.[04]** communications at key internal managed interfaces within the system are controlled;
- **SC-07b.** subnetworks for publicly accessible system components are [Selection: physically; logically] separated from internal organizational networks;
- **SC-07c.** external networks or systems are only connected to through managed interfaces consisting of boundary protection devices arranged in accordance with an organizational security and privacy architecture.

**Examine:** System and communications protection policy; procedures addressing boundary protection; list of key internal boundaries of the system; system design documentation; boundary protection hardware and software; system configuration settings and associated documentation; enterprise security architecture documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer; organizational personnel with boundary protection responsibilities.

**Test:** Mechanisms implementing boundary protection capabilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write bel

## How to apply it

SC-7 asks you to control what crosses the system boundary and key internal boundaries: every external connection goes through a managed interface, public-facing components sit in their own subnetwork, and traffic is monitored and filtered at each interface according to a documented architecture. The boundary diagram in the security plan is the starting point for testing it.

**Common implementations.** Firewalls or cloud security groups and network access control lists at each managed interface, with rules that deny by default. Public-facing services in a demilitarized zone or a separate cloud network (virtual private cloud or virtual network), behind a web application firewall or load balancer. Outbound web traffic through a secure web gateway or authenticated proxy. Remote access through a virtual private network or a zero trust access service with split tunneling disabled. A firewall rule review that removes rules nobody can justify.

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Separation of public components (b) | Logically separated subnetworks, such as a demilitarized zone or separate cloud network |
| Review of traffic flow policy exceptions (SC-7(4)(e)) | At least annually, and when the system changes |
| Where traffic is denied by default (SC-7(5)) | At managed interfaces |
| Safeguards allowing split tunneling (SC-7(7)) | None; split tunneling is disabled for organization-managed remote devices |
| Traffic routed through authenticated proxy servers (SC-7(8)) | Outbound web traffic from internal users to the internet |

**Evidence assessors ask for.**

- The boundary and data flow diagrams, matching the security plan
- Firewall, security group and proxy rule sets, with the business reason for each rule
- The last rule review and the changes it produced
- Remote access configuration showing split tunneling disabled
- Monitoring records from the boundary devices

**Inheritance.** Enterprise perimeter firewalls, the internet connection and the cloud landing zone are often common controls. The system owns its own security groups, application firewall rules and internal segmentation.

**Common findings.**

- "Any-any" or overly broad rules added for troubleshooting and never removed.
- Undocumented connections that are not on the boundary diagram.
- Management interfaces reachable from the internet.
- Cloud storage or databases exposed publicly outside the managed interfaces.

**Enhancements in the Moderate baseline.** [SC-7(3)](#sc-7.3) limiting access points, [SC-7(4)](#sc-7.4) external telecommunications services, [SC-7(5)](#sc-7.5) deny by default, [SC-7(7)](#sc-7.7) split tunneling and [SC-7(8)](#sc-7.8) authenticated proxy servers. High adds [SC-7(18)](#sc-7.18) fail secure and [SC-7(21)](#sc-7.21) isolation of system components.

**Federal systems.** Federal civilian agencies also follow CISA's [Trusted Internet Connections (TIC) 3.0](https://www.cisa.gov/resources-tools/programs/trusted-internet-connections-tic) guidance, required by OMB M-19-26, Update to the Trusted Internet Connections (TIC) Initiative.
