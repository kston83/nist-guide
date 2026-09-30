---
title: 'SC-2 Separation of System and User Functionality'
description: 'NIST SP 800-53 Rev. 5 control SC-2, Separation of System and User Functionality: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SC-2 Separation of System and User Functionality'
  order: 2
control:
  id: SC-2
  family: SC
  baselines: [Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | System | 2 (0 in a baseline) |

**Related controls:** [AC-6](/controls/ac/ac-6/), [SA-4](/controls/sa/sa-4/), [SA-8](/controls/sa/sa-8/), [SC-3](/controls/sc/sc-3/), [SC-7](/controls/sc/sc-7/), [SC-22](/controls/sc/sc-22/), [SC-32](/controls/sc/sc-32/), [SC-39](/controls/sc/sc-39/)

## Control statement

Separate user functionality, including user interface services, from system management functionality.

<details>
<summary>NIST discussion</summary>

System management functionality includes functions that are necessary to administer databases, network components, workstations, or servers. These functions typically require privileged user access. The separation of user functions from system management functions is physical or logical. Organizations may separate system management functions from user functions by using different computers, instances of operating systems, central processing units, or network addresses; by employing virtualization techniques; or some combination of these or other methods. Separation of system management functions from user functions includes web administrative interfaces that employ separate authentication methods for users of any other system resources. Separation of system and user functions may include isolating administrative interfaces on different domains and with additional access controls. The separation of system and user functionality can be achieved by applying the systems security engineering design principles in SA-8 , including SA-8(1), SA-8(3), SA-8(4), SA-8(10), SA-8(12), SA-8(13), SA-8(14) , and SA-8(18).

</details>

## Control enhancements

<a id="sc-2.1"></a>

### SC-2(1) Interfaces for Non-privileged Users

*Baselines: Not in a baseline*

Prevent the presentation of system management functionality at interfaces to non-privileged users.

<details>
<summary>Discussion and assessment objectives for SC-2(1)</summary>

Preventing the presentation of system management functionality at interfaces to non-privileged users ensures that system administration options, including administrator privileges, are not available to the general user population. Restricting user access also prohibits the use of the grey-out option commonly used to eliminate accessibility to such information. One potential solution is to withhold system administration options until users establish sessions with administrator privileges.

Determine if the presentation of system management functionality is prevented at interfaces to non-privileged users.

**Examine:** System and communications protection policy; procedures addressing application partitioning; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; non-privileged users of the system; system developer.

**Test:** Separation of user functionality from system management functionality.

</details>

<a id="sc-2.2"></a>

### SC-2(2) Disassociability

*Baselines: Not in a baseline*

Store state information from applications and software separately.

<details>
<summary>Discussion and assessment objectives for SC-2(2)</summary>

If a system is compromised, storing applications and software separately from state information about users’ interactions with an application may better protect individuals’ privacy.

Determine if state information is stored separately from applications and software.

**Examine:** System and communications protection policy; procedures addressing application and software partitioning; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security and privacy responsibilities; system developer.

**Test:** Separation of application state information from software.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SC-2</summary>

Determine if user functionality, including user interface services, is separated from system management functionality.

**Examine:** System and communications protection policy; procedures addressing application partitioning; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer.

**Test:** Separation of user functionality from system management functionality.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

SC-2 asks you to keep the functions that administer a system apart from the functions its users use. System management covers what is needed to administer databases, network components, workstations and servers, which usually takes privileged access. NIST's discussion allows the separation to be physical or logical: different computers, operating system instances, processors or network addresses, virtualization, or a mix. It includes web administrative interfaces that use separate authentication, and administrative interfaces isolated on different domains with added access controls. SC-2 is in the Moderate and High baselines, not Low.

**Common implementations.** Administrative consoles and APIs on their own host names, ports or network segments, reachable only from the management network or through the organization's privileged access service. The [boundary protection standard](/templates/standards/boundary-protection-standard/) requires that for the management interfaces of network devices, servers and cloud consoles, and never directly from the internet. Applications serve their administrative functions from a separate application or path that the user-facing load balancer does not route, with separate authentication for administrators. Administrators use separate privileged accounts, often from privileged access workstations, rather than their everyday accounts (AC-6(2), non-privileged access for nonsecurity functions, is in the Moderate baseline). In the cloud, the provider's management console and APIs are the management plane: access to them is limited to administrators, with multi-factor authentication and conditions such as a managed device or a known network.

NIST's discussion points to the design principles of [SA-8](/controls/sa/sa-8/), including modularity and layering (SA-8(3)), hierarchical protection (SA-8(12)), least privilege (SA-8(14)) and trusted communications channels (SA-8(18)), as a way to achieve the separation. Build it in at design time: separating an administrative page from a user application after it ships usually means rework.

**Organization-defined parameters.** SC-2 has no parameters. In the [System and Communications Protection policy](/templates/policies/sc/), the system owner ensures the system separates user functionality, including user interface services, from system management functionality.

**Evidence assessors ask for.**

- The architecture and data flow diagrams in the [system security plan](/templates/plans/system-security-plan/), showing where management interfaces sit and how administrators reach them
- The firewall, security group or access policy rules that limit management interfaces to the management network or privileged access service
- A demonstration that the administrative interface cannot be reached, or does not appear, from a user network or the internet
- The list of administrator accounts, showing they are separate from the same people's everyday accounts
- The cloud access policies for the management console and APIs

**Inheritance.** For infrastructure the provider runs, the provider separates its own management plane; record that in the system security plan's inheritance table. The privileged access service and management network are often common controls. The system owns the separation inside its own application and the rules for its own components, so SC-2 is usually a hybrid control.

**Common findings.**

- An administrative page at a path such as `/admin` on the public site, protected only by a role check in the application.
- Management interfaces of network devices, hypervisors or databases reachable from the user network.
- Administrators doing administrative work from their everyday accounts on their everyday devices.
- A cloud management console open to any network, with administrative roles granted to accounts that do not need them.

**Enhancements in the Moderate baseline.** SC-2 has no enhancements in any baseline. [SC-2(1)](#sc-2.1) interfaces for non-privileged users and [SC-2(2)](#sc-2.2) disassociability are in no baseline. SC-2(1), hiding administrative options from non-privileged users rather than greying them out, is a common design choice that supports SC-2.
