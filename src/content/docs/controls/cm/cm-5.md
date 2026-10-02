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
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
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

Enforce dual authorization for implementing changes to [Assignment: organization-defined system components and system-level information].

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
- **(b)** Review and reevaluate privileges [Assignment: organization-defined frequency].

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
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

CM-5 asks you to decide who may make changes to the system, write that down, approve it and enforce it, both logically and physically. NIST's CM-5 discussion says only qualified and authorized people should be able to start changes, and lists the ways to restrict them: physical and logical access controls ([AC-3](/controls/ac/ac-3/), [PE-3](/controls/pe/pe-3/)), software libraries, workflow automation, media libraries, abstract layers (changes made through external interfaces rather than directly on the system) and change windows. Change control ([CM-3](/controls/cm/cm-3/)) decides which changes may happen; CM-5 makes sure nobody can go around it.

**Common implementations.**

- Changes to production made through a deployment pipeline or configuration management tool, whose service accounts hold the change rights, rather than by people logging in to make them by hand
- Protected branches in version control that require an approved review before code or infrastructure definitions merge
- A small, named group of administrators with direct change rights for break-glass use, with each use logged and reviewed
- Developers with no standing write access to production, which also supports separation of duties ([AC-5](/controls/ac/ac-5/)) and least privilege ([AC-6](/controls/ac/ac-6/))
- Change windows for changes that affect availability
- Physical access limits on data center and network rooms for hardware changes

**Organization-defined parameters.** Typical value, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Automated mechanisms that enforce access restrictions (CM-5(1), High) | Role-based permissions in the deployment pipeline and the configuration management tools |

The base control has no parameter. In the [Configuration Management policy](/templates/policies/cm/), the system owner defines, documents, approves and enforces the restrictions.

**Evidence assessors ask for.**

- The documented access restrictions for change, and their approval
- The list of people and service accounts that can change production, and what each can change
- Pipeline and version control settings that require approval before deployment
- Records of break-glass use and its review
- [Physical access lists](/templates/forms/physical-access-list/) for the rooms that hold the system's hardware
- For High, the role-based permissions and the audit records of their enforcement (CM-5(1))

**Inheritance.** Physical access restrictions for a data center or cloud provider are inherited. The deployment pipeline and version control platform may be common. The system owns who can change its components, so CM-5 is usually a hybrid control.

**Common findings.**

- Developers or contractors with standing administrator rights in production.
- Administrators who can bypass pipeline approvals, with no alert or review when they do.
- Shared administrator accounts, so changes cannot be tied to a person.
- Restrictions written down but not configured, such as branch protection turned off.
- Cloud console access broader than the documented change roles.

**Enhancements in the Moderate baseline.** None. High adds [CM-5(1)](#cm-5.1) automated access enforcement and audit records: the restrictions are enforced by automated mechanisms, and each enforcement action generates an audit record. NIST's discussion explains why: the logs show change control is followed and support follow-up if unauthorized changes are found. [CM-5(4)](#cm-5.4), [CM-5(5)](#cm-5.5) and [CM-5(6)](#cm-5.6) are in no baseline.
