---
title: 'MA-4 Nonlocal Maintenance'
description: 'NIST SP 800-53 Rev. 5 control MA-4, Nonlocal Maintenance: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'MA-4 Nonlocal Maintenance'
  order: 4
control:
  id: MA-4
  family: MA
  baselines: [Low, Moderate, High]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 6 (1 in a baseline) |

**Related controls:** [AC-2](/controls/ac/ac-2/), [AC-3](/controls/ac/ac-3/), [AC-6](/controls/ac/ac-6/), [AC-17](/controls/ac/ac-17/), [AU-2](/controls/au/au-2/), [AU-3](/controls/au/au-3/), [IA-2](/controls/ia/ia-2/), [IA-4](/controls/ia/ia-4/), [IA-5](/controls/ia/ia-5/), [IA-8](/controls/ia/ia-8/), [MA-2](/controls/ma/ma-2/), [MA-5](/controls/ma/ma-5/), [PL-2](/controls/pl/pl-2/), [SC-7](/controls/sc/sc-7/), [SC-10](/controls/sc/sc-10/)

## Control statement

- **a.** Approve and monitor nonlocal maintenance and diagnostic activities;
- **b.** Allow the use of nonlocal maintenance and diagnostic tools only as consistent with organizational policy and documented in the security plan for the system;
- **c.** Employ strong authentication in the establishment of nonlocal maintenance and diagnostic sessions;
- **d.** Maintain records for nonlocal maintenance and diagnostic activities; and
- **e.** Terminate session and network connections when nonlocal maintenance is completed.

<details>
<summary>NIST discussion</summary>

Nonlocal maintenance and diagnostic activities are conducted by individuals who communicate through either an external or internal network. Local maintenance and diagnostic activities are carried out by individuals who are physically present at the system location and not communicating across a network connection. Authentication techniques used to establish nonlocal maintenance and diagnostic sessions reflect the network access requirements in IA-2 . Strong authentication requires authenticators that are resistant to replay attacks and employ multi-factor authentication. Strong authenticators include PKI where certificates are stored on a token protected by a password, passphrase, or biometric. Enforcing requirements in MA-4 is accomplished, in part, by other controls. SP 800-63B provides additional guidance on strong authentication and authenticators.

</details>

## Control enhancements

<a id="ma-4.1"></a>

### MA-4(1) Logging and Review

*Baselines: Not in a baseline*

- **(a)** Log [Assignment: organization-defined audit events] for nonlocal maintenance and diagnostic sessions; and
- **(b)** Review the audit records of the maintenance and diagnostic sessions to detect anomalous behavior.

<details>
<summary>Discussion and assessment objectives for MA-4(1)</summary>

Audit logging for nonlocal maintenance is enforced by AU-2 . Audit events are defined in AU-2a.

Determine if:

- **MA-04(01)(a)**
  - **MA-04(01)(a)[01]** [Assignment: organization-defined audit events] are logged for nonlocal maintenance sessions;
  - **MA-04(01)(a)[02]** [Assignment: organization-defined audit events] are logged for nonlocal diagnostic sessions;
- **MA-04(01)(b)**
  - **MA-04(01)(b)[01]** the audit records of the maintenance sessions are reviewed to detect anomalous behavior;
  - **MA-04(01)(b)[02]** the audit records of the diagnostic sessions are reviewed to detect anomalous behavior.

**Examine:** Maintenance policy; procedures addressing nonlocal system maintenance; list of audit events; system configuration settings and associated documentation; maintenance records; diagnostic records; audit records; reviews of maintenance and diagnostic session records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; organizational personnel with information security responsibilities; organizational personnel with audit and review responsibilities; system/network administrators.

**Test:** Organizational processes for audit and review of nonlocal maintenance; mechanisms supporting and/or implementing audit and review of nonlocal maintenance.

</details>

<a id="ma-4.3"></a>

### MA-4(3) Comparable Security and Sanitization

*Baselines: High*

- **(a)** Require that nonlocal maintenance and diagnostic services be performed from a system that implements a security capability comparable to the capability implemented on the system being serviced; or
- **(b)** Remove the component to be serviced from the system prior to nonlocal maintenance or diagnostic services; sanitize the component (for organizational information); and after the service is performed, inspect and sanitize the component (for potentially malicious software) before reconnecting the component to the system.

<details>
<summary>Discussion and assessment objectives for MA-4(3)</summary>

Comparable security capability on systems, diagnostic tools, and equipment providing maintenance services implies that the implemented controls on those systems, tools, and equipment are at least as comprehensive as the controls on the system being serviced.

Determine if:

- **MA-04(03)(a)**
  - **MA-04(03)(a)[01]** nonlocal maintenance services are required to be performed from a system that implements a security capability comparable to the capability implemented on the system being serviced;
  - **MA-04(03)(a)[02]** nonlocal diagnostic services are required to be performed from a system that implements a security capability comparable to the capability implemented on the system being serviced; or
- **MA-04(03)(b)**
  - **MA-04(03)(b)[01]** the component to be serviced is removed from the system prior to nonlocal maintenance or diagnostic services;
  - **MA-04(03)(b)[02]** the component to be serviced is sanitized (for organizational information);
  - **MA-04(03)(b)[03]** the component is inspected and sanitized (for potentially malicious software) after the service is performed and before reconnecting the component to the system.

**Examine:** Maintenance policy; procedures addressing nonlocal system maintenance; service provider contracts and/or service-level agreements; maintenance records; inspection records; audit records; equipment sanitization records; media sanitization records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; system maintenance provider; organizational personnel with information security responsibilities; organizational personnel responsible for media sanitization; system/network administrators.

**Test:** Organizational processes for comparable security and sanitization for nonlocal maintenance; organizational processes for the removal, sanitization, and inspection of components serviced via nonlocal maintenance; mechanisms supporting and/or implementing component sanitization and inspection.

</details>

<a id="ma-4.4"></a>

### MA-4(4) Authentication and Separation of Maintenance Sessions

*Baselines: Not in a baseline*

Protect nonlocal maintenance sessions by:

- **(a)** Employing [Assignment: organization-defined authenticators that are replay resistant] ; and
- **(b)** Separating the maintenance sessions from other network sessions with the system by either:
  - **(1)** Physically separated communications paths; or
  - **(2)** Logically separated communications paths.

<details>
<summary>Discussion and assessment objectives for MA-4(4)</summary>

Communications paths can be logically separated using encryption.

Determine if:

- **MA-04(04)(a)** nonlocal maintenance sessions are protected by employing [Assignment: organization-defined authenticators that are replay resistant];
- **MA-04(04)(b)**
  - **MA-04(04)(b)(01)** nonlocal maintenance sessions are protected by separating maintenance sessions from other network sessions with the system by physically separated communication paths; or
  - **MA-04(04)(b)(02)** nonlocal maintenance sessions are protected by logically separated communication paths.

**Examine:** Maintenance policy; procedures addressing nonlocal system maintenance; system design documentation; system configuration settings and associated documentation; maintenance records; audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; network engineers; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for protecting nonlocal maintenance sessions; mechanisms implementing replay-resistant authenticators; mechanisms implementing logically separated/encrypted communication paths.

</details>

<a id="ma-4.5"></a>

### MA-4(5) Approvals and Notifications

*Baselines: Not in a baseline*

- **(a)** Require the approval of each nonlocal maintenance session by [Assignment: organization-defined personnel or roles] ; and
- **(b)** Notify the following personnel or roles of the date and time of planned nonlocal maintenance: [Assignment: organization-defined personnel and roles].

<details>
<summary>Discussion and assessment objectives for MA-4(5)</summary>

Notification may be performed by maintenance personnel. Approval of nonlocal maintenance is accomplished by personnel with sufficient information security and system knowledge to determine the appropriateness of the proposed maintenance.

Determine if:

- **MA-04(05)(a)** the approval of each nonlocal maintenance session is required by [Assignment: organization-defined personnel or roles];
- **MA-04(05)(b)** [Assignment: organization-defined personnel and roles] is/are notified of the date and time of planned nonlocal maintenance.

**Examine:** Maintenance policy; procedures addressing nonlocal system maintenance; notifications supporting nonlocal maintenance sessions; maintenance records; audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; organizational personnel with notification responsibilities; organizational personnel with approval responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for approving and notifying personnel regarding nonlocal maintenance; mechanisms supporting the notification and approval of nonlocal maintenance.

</details>

<a id="ma-4.6"></a>

### MA-4(6) Cryptographic Protection

*Baselines: Not in a baseline*

Implement the following cryptographic mechanisms to protect the integrity and confidentiality of nonlocal maintenance and diagnostic communications: [Assignment: organization-defined cryptographic mechanisms].

<details>
<summary>Discussion and assessment objectives for MA-4(6)</summary>

Failure to protect nonlocal maintenance and diagnostic communications can result in unauthorized individuals gaining access to organizational information. Unauthorized access during remote maintenance sessions can result in a variety of hostile actions, including malicious code insertion, unauthorized changes to system parameters, and exfiltration of organizational information. Such actions can result in the loss or degradation of mission or business capabilities.

Determine if:

- **MA-04(06)[01]** [Assignment: organization-defined cryptographic mechanisms] are implemented to protect the integrity of nonlocal maintenance and diagnostic communications;
- **MA-04(06)[02]** [Assignment: organization-defined cryptographic mechanisms] are implemented to protect the confidentiality of nonlocal maintenance and diagnostic communications.

**Examine:** Maintenance policy; procedures addressing nonlocal system maintenance; system design documentation; system configuration settings and associated documentation; cryptographic mechanisms protecting nonlocal maintenance activities; maintenance records; diagnostic records; audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; network engineers; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Cryptographic mechanisms protecting nonlocal maintenance and diagnostic communications.

</details>

<a id="ma-4.7"></a>

### MA-4(7) Disconnect Verification

*Baselines: Not in a baseline*

Verify session and network connection termination after the completion of nonlocal maintenance and diagnostic sessions.

<details>
<summary>Discussion and assessment objectives for MA-4(7)</summary>

Verifying the termination of a connection once maintenance is completed ensures that connections established during nonlocal maintenance and diagnostic sessions have been terminated and are no longer available for use.

Determine if:

- **MA-04(07)[01]** session connection termination is verified after the completion of nonlocal maintenance and diagnostic sessions;
- **MA-04(07)[02]** network connection termination is verified after the completion of nonlocal maintenance and diagnostic sessions.

**Examine:** Maintenance policy; procedures addressing nonlocal system maintenance; system design documentation; system configuration settings and associated documentation; session/network termination logs; cryptographic mechanisms protecting nonlocal maintenance activities; maintenance records; diagnostic records; audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; network engineers; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Mechanisms implementing remote disconnect verifications of terminated nonlocal maintenance and diagnostic sessions.

</details>

*Withdrawn enhancements: MA-4(2).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for MA-4</summary>

Determine if:

- **MA-04a.**
  - **MA-04a.[01]** nonlocal maintenance and diagnostic activities are approved;
  - **MA-04a.[02]** nonlocal maintenance and diagnostic activities are monitored;
- **MA-04b.**
  - **MA-04b.[01]** the use of nonlocal maintenance and diagnostic tools are allowed only as consistent with organizational policy;
  - **MA-04b.[02]** the use of nonlocal maintenance and diagnostic tools are documented in the security plan for the system;
- **MA-04c.** strong authentication is employed in the establishment of nonlocal maintenance and diagnostic sessions;
- **MA-04d.** records for nonlocal maintenance and diagnostic activities are maintained;
- **MA-04e.**
  - **MA-04e.[01]** session connections are terminated when nonlocal maintenance is completed;
  - **MA-04e.[02]** network connections are terminated when nonlocal maintenance is completed.

**Examine:** Maintenance policy; procedures addressing nonlocal system maintenance; remote access policy; remote access procedures; system design documentation; system configuration settings and associated documentation; maintenance records; records of remote access; diagnostic records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for managing nonlocal maintenance; mechanisms implementing, supporting, and/or managing nonlocal maintenance; mechanisms for strong authentication of nonlocal maintenance diagnostic sessions; mechanisms for terminating nonlocal maintenance sessions and network connections.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
