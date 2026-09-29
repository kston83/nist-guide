---
title: Boundary Protection Standard
type: standard
description: The managed interfaces, traffic rules, segmentation, remote access and monitoring requirements that make the system and communications protection policy's boundary requirements (SP 800-53 SC-7) and information flow enforcement (AC-4) measurable.
controls: [sc-7, sc-7.3, sc-7.4, sc-7.5, sc-7.7, sc-7.8, sc-7.18, sc-7.21, ac-4]
status: draft
stage: core
typical:
  sc-07_odp: 'logically'
  sc-07.04_odp: 'at least annually, and when the system changes'
  sc-07.05_odp.01: 'at managed interfaces'
  sc-07.07_odp: 'none; split tunneling is disabled for organization-managed remote devices'
  sc-07.08_odp.01: 'outbound web traffic from internal users'
  sc-07.08_odp.02: 'the internet'
  sc-07.21_odp.01: 'components that process the most sensitive information, and security management components such as identity, key management and logging services'
  sc-07.21_odp.02: 'the essential mission and business functions named in the business impact analysis'
---

:::guidance
The system and communications protection policy says each system's boundary must be controlled; this standard says where the managed interfaces are, what traffic they allow, how rules are approved and reviewed, and what is logged. Keep the values here in step with the SC-7 statements in the policy, since assessors compare the two. The same rules are the information flow policies that AC-4 enforces. Much of the boundary is usually a common control: the enterprise perimeter, the internet connection and the cloud landing zone. Record in each system security plan which interfaces the system inherits and which it runs itself.
:::

| Owner | Approved by | Version | Effective date |
| --- | --- | --- | --- |
| {{org:ciso}} | {{fill:name and title}} | {{fill:version}} | {{fill:date}} |

## 1. Purpose and scope

This standard sets the minimum requirements for protecting the boundaries of the systems and networks of {{org:name}}. It applies to every system in the system inventory, to the enterprise network and cloud environments they run in, and to every connection between them and other networks, including the internet, partners, service providers and remote users.

## 2. Roles

| Role | Responsibilities |
| --- | --- |
| {{org:ciso}} | Owns this standard and the security architecture it follows; approves shared managed interfaces and exceptions |
| {{fill:network security function, for example the network engineering team}} | Runs the enterprise perimeter, internet connections, proxies, remote access service and cloud landing zone; changes and reviews their rules |
| {{org:system-owner}} | Documents the system's boundary and data flows, runs the managed interfaces the system owns, justifies each rule the system needs, and requests exceptions |
| {{org:security-operations}} | Monitors the logs and alerts from boundary devices, and responds to what they show |

## 3. Boundary documentation

- Each system security plan shall include a boundary diagram and a data flow diagram showing every external connection, every managed interface, and the key internal interfaces between parts of the system that handle information at different sensitivity. (SC-7a)
- Each connection to a system outside the authorization boundary shall be listed with the other party, the information exchanged, the managed interface it passes through and the agreement that approves it. (SC-7c)
- The diagrams and the list of connections shall be updated whenever a connection or managed interface is added, changed or removed. (SC-7c)

## 4. Managed interfaces

- Each system shall connect to external networks or systems only through managed interfaces consisting of boundary protection devices arranged in accordance with the organization's security and privacy architecture. (SC-7c)
- Each system shall monitor and control communications at its external managed interfaces and at key internal managed interfaces within the system. (SC-7a)
- The number of external network connections to each system shall be kept to the fewest that its mission needs; each new connection shall be approved by the {{org:ciso}} before it is made. (SC-7(3))
- Each external telecommunication service shall have its own managed interface, and the confidentiality and integrity of the information transmitted across each interface shall be protected. (SC-7(4)(a), SC-7(4)(c))

| Interface | Devices | Operated by |
| --- | --- | --- |
| Internet connection | {{fill:for example perimeter firewalls, intrusion prevention and distributed denial-of-service protection}} | {{fill:for example the network security function (common control)}} |
| Public-facing services | {{fill:for example web application firewall and load balancer in a separate subnetwork}} | {{fill:owner}} |
| Cloud environments | {{fill:for example the landing zone's network firewall, security groups and network access control lists}} | {{fill:for example landing zone: network security function; security groups: system owner}} |
| Outbound web traffic | {{fill:for example secure web gateway or authenticated proxy}} | {{fill:owner}} |
| Remote access | {{fill:for example virtual private network or zero trust access service}} | {{fill:owner}} |
| Partner and service provider connections | {{fill:for example site-to-site virtual private network ending in a partner subnetwork}} | {{fill:owner}} |
| Internal segments | {{fill:for example internal firewalls or security groups between user, server, management and sensitive segments}} | {{fill:owner}} |

:::guidance
[NIST SP 800-41 Rev. 1](https://csrc.nist.gov/pubs/sp/800/41/r1/final), Guidelines on Firewalls and Firewall Policy (September 2009, the current revision as of September 2026), describes firewall types, placement and rule policy. A zero trust architecture, described in [NIST SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final) (August 2020), moves enforcement closer to each resource; its policy enforcement points are managed interfaces too, and belong in the table and diagrams.
:::

## 5. Traffic rules

- Network communications traffic shall be denied by default and allowed by exception {{param:sc-07.05_odp.01}}. (SC-7(5))
- Each system shall enforce approved authorizations for controlling the flow of information within the system and between connected systems, based on the rules in this standard and the approved interconnection agreements. (AC-4)
- Each managed interface shall have a traffic flow policy: the rules it enforces, each with its source, destination, service, business reason, owner and review date. (SC-7(4)(b))
- Rules that allow any source, any destination or any service shall not be used, except as an exception under section 11. (SC-7(5))
- Rules shall be added, changed and removed only through the configuration change process, and each change shall name the approved request it implements. (CM-3)
- Each exception to a traffic flow policy shall be documented with the mission or business need that supports it and the duration of that need. (SC-7(4)(d))
- Traffic flow policy exceptions shall be reviewed {{param:sc-07.04_odp}}, and exceptions that an explicit mission or business need no longer supports shall be removed. (SC-7(4)(e))
- Rules on every managed interface shall be reviewed {{fill:for example every 6 months for external interfaces and annually for internal ones}}, and rules no one can justify, rules that have not matched traffic in {{fill:for example 90 days}}, and rules past their review date shall be removed. (SC-7(5))
- Management interfaces of network devices, servers and cloud consoles shall be reachable only from the management network or through the organization's privileged access service, never directly from the internet. (SC-7a)

## 6. Public-facing components

- Publicly accessible system components shall be placed in subnetworks that are {{param:sc-07_odp}} separated from internal organizational networks. (SC-7b)
- Traffic from the internet shall reach only the public-facing subnetwork; connections from it to internal networks shall be limited to the specific services the public components need. (SC-7b)
- Storage, databases and other services shall not be exposed to the internet except through a managed interface, and cloud policy shall block public access by default. (SC-7c)

## 7. Isolation of system components

This section applies to High systems.

- Boundary protection mechanisms shall isolate {{param:sc-07.21_odp.01}} supporting {{param:sc-07.21_odp.02}}. (SC-7(21))
- Isolated components shall be in their own network segment or cloud account, with rules that allow only the connections they need. (SC-7(21))

## 8. Outbound traffic

- Each system shall route {{param:sc-07.08_odp.01}} to {{param:sc-07.08_odp.02}} through authenticated proxy servers at managed interfaces. (SC-7(8))
- Servers shall reach the internet only to the destinations and services their rules allow, such as update and provider services. (SC-7(5))
- Outbound traffic shall be filtered against known malicious destinations and categories the organization blocks: {{fill:for example malware, phishing and newly registered domains}}. (SC-7a)

## 9. Remote access

- Split tunneling for remote devices connecting to organizational systems shall be prevented, except where it is securely provisioned using these safeguards: {{param:sc-07.07_odp}}. (SC-7(7))
- Remote access shall pass through the organization's remote access service, which is a managed interface under this standard. (SC-7c)

:::guidance
Where a zero trust access service replaces the virtual private network, the device may not tunnel all its traffic to the organization at all. Record how the service's design meets the intent of SC-7(7): the device cannot become a bridge between the internet and the organization's network.
:::

## 10. External telecommunications and routing

This section applies to connections the organization routes itself, such as its own internet connections or address space.

- Unauthorized exchange of control plane traffic, such as routing announcements, with external networks shall be prevented. (SC-7(4)(f))
- The organization shall publish the information remote networks need to detect unauthorized control plane traffic from its networks, such as route origin authorizations for its address space. (SC-7(4)(g))
- Unauthorized control plane traffic from external networks shall be filtered. (SC-7(4)(h))

:::guidance
For most organizations, routing is the internet or cloud provider's job, and these requirements are met by the provider; record that in the system security plan. [NIST SP 800-189](https://csrc.nist.gov/pubs/sp/800/189/final), Resilient Interdomain Traffic Exchange: BGP Security and DDoS Mitigation (December 2019, current as of September 2026), covers route filtering, route origin authorizations and origin validation for organizations that run their own routing.
:::

## 11. Monitoring and failure

- Each managed interface shall log allowed and denied connections and send the logs to {{fill:for example the security information and event management system}}, where the {{org:security-operations}} reviews them. (SC-7a)
- Boundary devices shall run intrusion detection or prevention, or equivalent inspection, at {{fill:for example the internet connection and the public-facing subnetwork}}. (SC-7a)

This paragraph applies to High systems.

- The system shall not enter an unsecure state when a boundary protection device fails: a failed device shall block traffic rather than pass it, and the setting shall be tested {{fill:for example annually}}. (SC-7(18))

:::federal
Federal civilian agencies secure their network connections under CISA's [Trusted Internet Connections (TIC) 3.0](https://www.cisa.gov/resources-tools/programs/trusted-internet-connections-tic) program, which implements OMB M-19-26, Update to the Trusted Internet Connections (TIC) Initiative (September 12, 2019). TIC 3.0 is set out in CISA's core guidance documents and use cases (as of September 2026).

- Each system's external connections shall be implemented in accordance with the agency's TIC 3.0 architecture and the TIC 3.0 use cases that apply to the system. (SC-7c)
- The table of managed interfaces in section 4 shall show which TIC 3.0 security capabilities each interface provides, and which the system inherits from the agency or a provider. (SC-7c)

:::

## 12. Exceptions

- A rule or design that does not meet this standard shall be approved by the {{org:ciso}} as an exception, with the business need, compensating measures and an expiry date, and entered in the system's plan of action and milestones where it is a weakness. (SC-7(4)(d))
- Exceptions shall be reviewed {{param:sc-07.04_odp}} and at expiry. (SC-7(4)(e))

## 13. Review

The {{org:ciso}} reviews this standard {{fill:for example annually}}, and whenever the security architecture, a major connection or the system and communications protection policy changes.

| Version | Date | Change | Approved by |
| --- | --- | --- | --- |
| {{fill:version}} | {{fill:date}} | {{fill:summary of change}} | {{fill:name and title}} |
