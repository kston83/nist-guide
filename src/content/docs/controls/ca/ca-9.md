---
title: 'CA-9 Internal System Connections'
description: 'NIST SP 800-53 Rev. 5 control CA-9, Internal System Connections: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CA-9 Internal System Connections'
  order: 9
control:
  id: CA-9
  family: CA
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 1 (0 in a baseline) |

**Related controls:** [AC-3](/controls/ac/ac-3/), [AC-4](/controls/ac/ac-4/), [AC-18](/controls/ac/ac-18/), [AC-19](/controls/ac/ac-19/), [CM-2](/controls/cm/cm-2/), [IA-3](/controls/ia/ia-3/), [SC-7](/controls/sc/sc-7/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Authorize internal connections of [Assignment: organization-defined system components] to the system;
- **b.** Document, for each internal connection, the interface characteristics, security and privacy requirements, and the nature of the information communicated;
- **c.** Terminate internal system connections after [Assignment: organization-defined conditions] ; and
- **d.** Review [Assignment: organization-defined frequency] the continued need for each internal connection.

<details>
<summary>NIST discussion</summary>

Internal system connections are connections between organizational systems and separate constituent system components (i.e., connections between components that are part of the same system) including components used for system development. Intra-system connections include connections with mobile devices, notebook and desktop computers, tablets, printers, copiers, facsimile machines, scanners, sensors, and servers. Instead of authorizing each internal system connection individually, organizations can authorize internal connections for a class of system components with common characteristics and/or configurations, including printers, scanners, and copiers with a specified processing, transmission, and storage capability or smart phones and tablets with a specific baseline configuration. The continued need for an internal system connection is reviewed from the perspective of whether it provides support for organizational missions or business functions.

</details>

## Control enhancements

<a id="ca-9.1"></a>

### CA-9(1) Compliance Checks

*Baselines: Not in a baseline*

Perform security and privacy compliance checks on constituent system components prior to the establishment of the internal connection.

<details>
<summary>Discussion and assessment objectives for CA-9(1)</summary>

Compliance checks include verification of the relevant baseline configuration.

Determine if:

- **CA-09(01)[01]** security compliance checks are performed on constituent system components prior to the establishment of the internal connection;
- **CA-09(01)[02]** privacy compliance checks are performed on constituent system components prior to the establishment of the internal connection.

**Examine:** Assessment, authorization, and monitoring policy; access control policy; procedures addressing system connections; system and communications protection policy; system design documentation; system configuration settings and associated documentation; list of components or classes of components authorized as internal system connections; assessment report; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for developing, implementing, or authorizing internal system connections; organizational personnel with information security and privacy responsibilities.

**Test:** Mechanisms supporting compliance checks.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CA-9</summary>

Determine if:

- **CA-09a.** internal connections of [Assignment: organization-defined system components] to the system are authorized;
- **CA-09b.**
  - **CA-09b.[01]** for each internal connection, the interface characteristics are documented;
  - **CA-09b.[02]** for each internal connection, the security requirements are documented;
  - **CA-09b.[03]** for each internal connection, the privacy requirements are documented;
  - **CA-09b.[04]** for each internal connection, the nature of the information communicated is documented;
- **CA-09c.** internal system connections are terminated after [Assignment: organization-defined conditions];
- **CA-09d.** the continued need for each internal connection is reviewed [Assignment: organization-defined frequency].

**Examine:** Assessment, authorization, and monitoring policy; access control policy; procedures addressing system connections; system and communications protection policy; system design documentation; system configuration settings and associated documentation; list of components or classes of components authorized as internal system connections; assessment report; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for developing, implementing, or authorizing internal system connections; organizational personnel with information security and privacy responsibilities.

**Test:** Mechanisms supporting internal system connections.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

Internal connections are connections between the system and its own separate components, such as printers, scanners, sensors, mobile devices, or the servers and workstations used to develop it. Exchanges with other systems fall under CA-3 instead. NIST's CA-9 discussion lets the organization authorize a whole class of components with a common configuration, rather than each device, which is how most organizations meet it.

**Common implementations.** A table in the [system security plan](/templates/plans/system-security-plan/) of the authorized classes of internal connection, each with its interface, security requirements and the information it carries. Class membership enforced by network access control or device management, so only components with the approved configuration connect. Components tracked in the [system inventory](/templates/forms/system-inventory/), so a retired or reassigned device is disconnected. The [Assessment, Authorization, and Monitoring policy](/templates/policies/ca/) sets the rules.

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Components authorized for internal connection (a) | Classes of components that connect to the system from inside its boundary, such as printers, scanners, copiers, sensors, and mobile devices with the approved baseline configuration |
| Conditions for terminating a connection (c) | The component is retired or reassigned, fails a compliance check, is involved in an incident, or no longer needs the connection |
| Review of continued need (d) | At least annually |

**Evidence assessors ask for.**

- The list of authorized components or classes of components, and who authorized them
- The documented interface characteristics, security and privacy requirements, and nature of the information for each class
- Configuration of the network access control or device management that enforces the classes
- Records of connections terminated under the stated conditions
- The last review of continued need, with the connections removed

**Inheritance.** CA-9 is mostly system-specific. Network access control, device management and a shared print or mobile device service may be common controls the system inherits; the system still authorizes which classes connect to it.

**Common findings.**

- Printers, multifunction devices or sensors connected with default settings and no authorization.
- Classes described too broadly, such as "all network devices", to support a security requirement.
- No review of continued need, so connections for retired projects or test devices stay open.
- Devices that failed compliance checks still connected.

**Enhancements in the Moderate baseline.** None. CA-9 has one enhancement, [CA-9(1)](#ca-9.1) compliance checks, which is not in a baseline.
