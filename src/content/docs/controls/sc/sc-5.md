---
title: 'SC-5 Denial-of-service Protection'
description: 'NIST SP 800-53 Rev. 5 control SC-5, Denial-of-service Protection: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SC-5 Denial-of-service Protection'
  order: 5
control:
  id: SC-5
  family: SC
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | System | 3 (0 in a baseline) |

**Related controls:** [CP-2](/controls/cp/cp-2/), [IR-4](/controls/ir/ir-4/), [SC-6](/controls/sc/sc-6/), [SC-7](/controls/sc/sc-7/), [SC-40](/controls/sc/sc-40/)

## Control statement

- **a.** [Selection: protect against; limit] the effects of the following types of denial-of-service events: [Assignment: organization-defined types of denial-of-service events] ; and
- **b.** Employ the following controls to achieve the denial-of-service objective: [Assignment: organization-defined controls by type of denial-of-service event].

<details>
<summary>NIST discussion</summary>

Denial-of-service events may occur due to a variety of internal and external causes, such as an attack by an adversary or a lack of planning to support organizational needs with respect to capacity and bandwidth. Such attacks can occur across a wide range of network protocols (e.g., IPv4, IPv6). A variety of technologies are available to limit or eliminate the origination and effects of denial-of-service events. For example, boundary protection devices can filter certain types of packets to protect system components on internal networks from being directly affected by or the source of denial-of-service attacks. Employing increased network capacity and bandwidth combined with service redundancy also reduces the susceptibility to denial-of-service events.

</details>

## Control enhancements

<a id="sc-5.1"></a>

### SC-5(1) Restrict Ability to Attack Other Systems

*Baselines: Not in a baseline*

Restrict the ability of individuals to launch the following denial-of-service attacks against other systems: [Assignment: organization-defined denial-of-service attacks].

<details>
<summary>Discussion and assessment objectives for SC-5(1)</summary>

Restricting the ability of individuals to launch denial-of-service attacks requires the mechanisms commonly used for such attacks to be unavailable. Individuals of concern include hostile insiders or external adversaries who have breached or compromised the system and are using it to launch a denial-of-service attack. Organizations can restrict the ability of individuals to connect and transmit arbitrary information on the transport medium (i.e., wired networks, wireless networks, spoofed Internet protocol packets). Organizations can also limit the ability of individuals to use excessive system resources. Protection against individuals having the ability to launch denial-of-service attacks may be implemented on specific systems or boundary devices that prohibit egress to potential target systems.

Determine if the ability of individuals to launch [Assignment: organization-defined denial-of-service attacks] against other systems is restricted.

**Examine:** System and communications protection policy; procedures addressing denial-of-service protection; system design documentation; list of denial-of-service attacks launched by individuals against systems; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel with incident response responsibilities; system developer.

**Test:** Mechanisms restricting the ability to launch denial-of-service attacks against other systems.

</details>

<a id="sc-5.2"></a>

### SC-5(2) Capacity, Bandwidth, and Redundancy

*Baselines: Not in a baseline*

Manage capacity, bandwidth, or other redundancy to limit the effects of information flooding denial-of-service attacks.

<details>
<summary>Discussion and assessment objectives for SC-5(2)</summary>

Managing capacity ensures that sufficient capacity is available to counter flooding attacks. Managing capacity includes establishing selected usage priorities, quotas, partitioning, or load balancing.

Determine if capacity, bandwidth, or other redundancies to limit the effects of information flooding denial-of-service attacks are managed.

**Examine:** System and communications protection policy; procedures addressing denial-of-service protection; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel with incident response responsibilities; system developer.

**Test:** Mechanisms implementing the management of system bandwidth, capacity, and redundancy to limit the effects of information flooding denial-of-service attacks.

</details>

<a id="sc-5.3"></a>

### SC-5(3) Detection and Monitoring

*Baselines: Not in a baseline*

- **(a)** Employ the following monitoring tools to detect indicators of denial-of-service attacks against, or launched from, the system: [Assignment: organization-defined monitoring tools] ; and
- **(b)** Monitor the following system resources to determine if sufficient resources exist to prevent effective denial-of-service attacks: [Assignment: organization-defined system resources].

<details>
<summary>Discussion and assessment objectives for SC-5(3)</summary>

Organizations consider the utilization and capacity of system resources when managing risk associated with a denial of service due to malicious attacks. Denial-of-service attacks can originate from external or internal sources. System resources that are sensitive to denial of service include physical disk storage, memory, and CPU cycles. Techniques used to prevent denial-of-service attacks related to storage utilization and capacity include instituting disk quotas, configuring systems to automatically alert administrators when specific storage capacity thresholds are reached, using file compression technologies to maximize available storage space, and imposing separate partitions for system and user data.

Determine if:

- **SC-05(03)(a)** [Assignment: organization-defined monitoring tools] are employed to detect indicators of denial-of-service attacks against or launched from the system;
- **SC-05(03)(b)** [Assignment: organization-defined system resources] are monitored to determine if sufficient resources exist to prevent effective denial-of-service attacks.

**Examine:** System and communications protection policy; procedures addressing denial-of-service protection; system design documentation; system monitoring tools and techniques documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel with detection and monitoring responsibilities.

**Test:** Mechanisms/tools implementing system monitoring for denial-of-service attacks.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SC-5</summary>

Determine if:

- **SC-05a.** the effects of [Assignment: organization-defined types of denial-of-service events] are [Selection: protect against; limit];
- **SC-05b.** [Assignment: organization-defined controls by type of denial-of-service event] are employed to achieve the denial-of-service protection objective.

**Examine:** System and communications protection policy; procedures addressing denial-of-service protection; system design documentation; list of denial-of-service attacks requiring employment of security safeguards to protect against or limit effects of such attacks; list of security safeguards protecting against or limiting the effects of denial-of-service attacks; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel with incident response responsibilities; system developer.

**Test:** Mechanisms protecting against or limiting the effects of denial-of-service attacks.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

SC-5 asks you to name the kinds of denial-of-service events the system must withstand, choose whether to protect against their effects or only limit them, and name the controls that do it. NIST's discussion notes that denial of service has internal as well as external causes: an adversary's attack, or simply not planning enough capacity and bandwidth. It names two broad remedies, boundary devices that filter attack traffic, and more capacity and bandwidth combined with service redundancy.

**Common implementations.** Internet-facing services sit behind an upstream or cloud denial-of-service protection service, often combined with a content delivery network or web application firewall that absorbs network and protocol floods before they reach the organization. Load balancers and application gateways rate limit requests per client and drop malformed ones, which is where most application-layer floods are stopped. Services scale automatically within set limits, and run in more than one zone or region where the business impact analysis calls for it. The [boundary protection standard](/templates/standards/boundary-protection-standard/) lists distributed denial-of-service protection among the devices at the internet connection. For organizations that route their own address space, [NIST SP 800-189](https://csrc.nist.gov/pubs/sp/800/189/final), Resilient Interdomain Traffic Exchange: BGP Security and DDoS Mitigation (December 2019, final and current as of September 2026), recommends preventing IP address spoofing with source address validation, which also keeps the organization's networks from being used in reflection attacks on others.

**Organization-defined parameters.** Typical values, from the [System and Communications Protection policy](/templates/policies/sc/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Types of denial-of-service events (a) | Network floods, protocol attacks and application-layer floods against internet-facing services |
| Protect against or limit their effects (a) | Protect against |
| Controls by type of event (b) | An upstream or cloud denial-of-service protection service for internet-facing services, rate limiting at load balancers and application gateways, and capacity that scales automatically |

"Protect against" is the stronger choice: the service keeps working through the event. "Limit" accepts some degradation, and suits internal systems that attackers cannot reach from the internet; if you choose it for any system, say so in its security plan.

**Evidence assessors ask for.**

- The list of internet-facing endpoints, and for each one the denial-of-service protection in front of it
- The protection service's configuration or subscription, and the provider's documentation of what it covers
- Rate limiting and autoscaling settings on load balancers, gateways and services
- Firewall or security group rules showing that origin servers accept traffic only from the protection service
- The incident response procedure for a denial-of-service attack, and records of any past event and how it was handled

**Inheritance.** Protection at the network edge is usually inherited from the internet or cloud provider, or provided once by the organization as a common control. Record which protections are inherited and which the system provides in the inheritance table of the [system security plan](/templates/plans/system-security-plan/), from the provider's customer responsibility matrix. The system owns its own rate limits, scaling and redundancy, so SC-5 is usually a hybrid control. NIST lists [CP-2](/controls/cp/cp-2/) and [IR-4](/controls/ir/ir-4/) as related controls: a denial-of-service attack is an incident, handled under the [incident response plan](/templates/plans/incident-response-plan/), and an outage it causes may call on the [contingency plan](/templates/plans/contingency-plan/).

**Common findings.**

- Some internet-facing endpoints, such as an older site, an API or a VPN gateway, not behind the protection service.
- Origin servers still reachable directly by their IP address, so an attacker can go around the protection service.
- No rate limiting on login, search or other expensive requests.
- Protection assumed to come from the cloud provider without checking which tier or service is subscribed and what it covers.
- No procedure for engaging the provider during an attack.

**Enhancements in the Moderate baseline.** SC-5 has no enhancements in any baseline. [SC-5(1)](#sc-5.1) restricting the ability to attack other systems, [SC-5(2)](#sc-5.2) capacity, bandwidth and redundancy, and [SC-5(3)](#sc-5.3) detection and monitoring are in no baseline. Autoscaling and monitoring of resource use, common parts of meeting SC-5, go a long way toward SC-5(2) and SC-5(3).
