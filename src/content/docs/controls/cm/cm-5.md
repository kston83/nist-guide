---
title: 'CM-5 Access Restrictions for Change'
description: 'NIST SP 800-53 Rev. 5 control CM-5, Access Restrictions for Change: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CM-5 Access Restrictions for Change'
  order: 5
control:
  id: CM-5
  family: CM
  baselines: [Low, Moderate, High]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 4 (1 in a baseline) |

**Related controls:** [AC-3](/controls/ac/ac-3/), [AC-5](/controls/ac/ac-5/), [AC-6](/controls/ac/ac-6/), [CM-9](/controls/cm/cm-9/), [PE-3](/controls/pe/pe-3/), [SC-28](/controls/sc/sc-28/), [SC-34](/controls/sc/sc-34/), [SC-37](/controls/sc/sc-37/), [SI-2](/controls/si/si-2/), [SI-10](/controls/si/si-10/)

## Control statement

Define, document, approve, and enforce physical and logical access restrictions associated with changes to the system.

<details>
<summary>NIST discussion</summary>

Changes to the hardware, software, or firmware components of systems or the operational procedures related to the system can potentially have significant effects on the security of the systems or individuals’ privacy. Therefore, organizations permit only qualified and authorized individuals to access systems for purposes of initiating changes. Access restrictions include physical and logical access controls (see AC-3 and PE-3 ), software libraries, workflow automation, media libraries, abstract layers (i.e., changes implemented into external interfaces rather than directly into systems), and change windows (i.e., changes occur only during specified times).

</details>

## Control enhancements

<a id="cm-5.1"></a>

### CM-5(1) Automated Access Enforcement and Audit Records

*Baselines: High*

- **(a)** Enforce access restrictions using [Assignment: organization-defined automated mechanisms] ; and
- **(b)** Automatically generate audit records of the enforcement actions.

<details>
<summary>Discussion and assessment objectives for CM-5(1)</summary>

Organizations log system accesses associated with applying configuration changes to ensure that configuration change control is implemented and to support after-the-fact actions should organizations discover any unauthorized changes.

Determine if:

- **CM-05(01)(a)** access restrictions for change are enforced using [Assignment: organization-defined automated mechanisms];
- **CM-05(01)(b)** audit records of enforcement actions are automatically generated.

**Examine:** Configuration management policy; procedures addressing access restrictions for changes to the system; system design documentation; system architecture and configuration documentation; system configuration settings and associated documentation; change control records; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with logical access control responsibilities; organizational personnel with physical access control responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for managing access restrictions to change; automated mechanisms implementing the enforcement of access restrictions for changes to the system; automated mechanisms supporting auditing of enforcement actions.

</details>

<a id="cm-5.4"></a>

### CM-5(4) Dual Authorization

*Baselines: Not in a baseline*

Enforce dual authorization for implementing changes to [Assignment: organization-defined organization-defined system components and system-level information].

<details>
<summary>Discussion and assessment objectives for CM-5(4)</summary>

Organizations employ dual authorization to help ensure that any changes to selected system components and information cannot occur unless two qualified individuals approve and implement such changes. The two individuals possess the skills and expertise to determine if the proposed changes are correct implementations of approved changes. The individuals are also accountable for the changes. Dual authorization may also be known as two-person control. To reduce the risk of collusion, organizations consider rotating dual authorization duties to other individuals. System-level information includes operational procedures.

Determine if:

- **CM-05(04)[01]** dual authorization for implementing changes to [Assignment: organization-defined system components] is enforced;
- **CM-05(04)[02]** dual authorization for implementing changes to [Assignment: organization-defined system-level information] is enforced.

**Examine:** Configuration management policy; procedures addressing access restrictions for changes to the system; configuration management plan; system design documentation; system architecture and configuration documentation; system configuration settings and associated documentation; change control records; system audit records; system component inventory; system information types information; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with dual authorization enforcement responsibilities for implementing system changes; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for managing access restrictions to change; mechanisms implementing dual authorization enforcement.

</details>

<a id="cm-5.5"></a>

### CM-5(5) Privilege Limitation for Production and Operation

*Baselines: Not in a baseline*

- **(a)** Limit privileges to change system components and system-related information within a production or operational environment; and
- **(b)** Review and reevaluate privileges [Assignment: organization-defined organization-defined frequency].

<details>
<summary>Discussion and assessment objectives for CM-5(5)</summary>

In many organizations, systems support multiple mission and business functions. Limiting privileges to change system components with respect to operational systems is necessary because changes to a system component may have far-reaching effects on mission and business processes supported by the system. The relationships between systems and mission/business processes are, in some cases, unknown to developers. System-related information includes operational procedures.

Determine if:

- **CM-05(05)(a)**
  - **CM-05(05)(a)[01]** privileges to change system components within a production or operational environment are limited;
  - **CM-05(05)(a)[02]** privileges to change system-related information within a production or operational environment are limited;
- **CM-05(05)(b)**
  - **CM-05(05)(b)[01]** privileges are reviewed [Assignment: organization-defined frequency];
  - **CM-05(05)(b)[02]** privileges are reevaluated [Assignment: organization-defined frequency].

**Examine:** Configuration management policy; procedures addressing access restrictions for changes to the system; configuration management plan; system design documentation; system architecture and configuration documentation; system configuration settings and associated documentation; user privilege reviews; user privilege recertifications; system component inventory; change control records; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for managing access restrictions to change; mechanisms supporting and/or implementing access restrictions for change.

</details>

<a id="cm-5.6"></a>

### CM-5(6) Limit Library Privileges

*Baselines: Not in a baseline*

Limit privileges to change software resident within software libraries.

<details>
<summary>Discussion and assessment objectives for CM-5(6)</summary>

Software libraries include privileged programs.

Determine if privileges to change software resident within software libraries are limited.

**Examine:** Configuration management policy; procedures addressing access restrictions for changes to the system; configuration management plan; system design documentation; system architecture and configuration documentation; system configuration settings and associated documentation; system component inventory; change control records; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for managing access restrictions to change; mechanisms supporting and/or implementing access restrictions for change.

</details>

*Withdrawn enhancements: CM-5(2), CM-5(3), CM-5(7).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CM-5</summary>

Determine if:

- **CM-05[01]** physical access restrictions associated with changes to the system are defined and documented;
- **CM-05[02]** physical access restrictions associated with changes to the system are approved;
- **CM-05[03]** physical access restrictions associated with changes to the system are enforced;
- **CM-05[04]** logical access restrictions associated with changes to the system are defined and documented;
- **CM-05[05]** logical access restrictions associated with changes to the system are approved;
- **CM-05[06]** logical access restrictions associated with changes to the system are enforced.

**Examine:** Configuration management policy; procedures addressing access restrictions for changes to the system; configuration management plan; system design documentation; system architecture and configuration documentation; system configuration settings and associated documentation; logical access approvals; physical access approvals; access credentials; change control records; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with logical access control responsibilities; organizational personnel with physical access control responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for managing access restrictions to change; mechanisms supporting, implementing, or enforcing access restrictions associated with changes to the system.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
