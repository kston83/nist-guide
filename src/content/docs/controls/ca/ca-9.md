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
