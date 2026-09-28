---
title: 'AC-6 Least Privilege'
description: 'NIST SP 800-53 Rev. 5 control AC-6, Least Privilege: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'AC-6 Least Privilege'
  order: 6
control:
  id: AC-6
  family: AC
  baselines: [Moderate, High]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | Organization | 10 (7 in a baseline) |

**Related controls:** [AC-2](/controls/ac/ac-2/), [AC-3](/controls/ac/ac-3/), [AC-5](/controls/ac/ac-5/), [AC-16](/controls/ac/ac-16/), [CM-5](/controls/cm/cm-5/), [CM-11](/controls/cm/cm-11/), [PL-2](/controls/pl/pl-2/), [PM-12](/controls/pm/pm-12/), [SA-8](/controls/sa/sa-8/), [SA-15](/controls/sa/sa-15/), [SA-17](/controls/sa/sa-17/), [SC-38](/controls/sc/sc-38/)

## Control statement

Employ the principle of least privilege, allowing only authorized accesses for users (or processes acting on behalf of users) that are necessary to accomplish assigned organizational tasks.

<details>
<summary>NIST discussion</summary>

Organizations employ least privilege for specific duties and systems. The principle of least privilege is also applied to system processes, ensuring that the processes have access to systems and operate at privilege levels no higher than necessary to accomplish organizational missions or business functions. Organizations consider the creation of additional processes, roles, and accounts as necessary to achieve least privilege. Organizations apply least privilege to the development, implementation, and operation of organizational systems.

</details>

## Control enhancements

<a id="ac-6.1"></a>

### AC-6(1) Authorize Access to Security Functions

*Baselines: Moderate, High*

Authorize access for [Assignment: organization-defined individuals and roles] to:

- **(a)** [Assignment: organization-defined security functions (deployed in hardware, software, and firmware)] ; and
- **(b)** [Assignment: organization-defined security-relevant information].

<details>
<summary>Discussion and assessment objectives for AC-6(1)</summary>

Security functions include establishing system accounts, configuring access authorizations (i.e., permissions, privileges), configuring settings for events to be audited, and establishing intrusion detection parameters. Security-relevant information includes filtering rules for routers or firewalls, configuration parameters for security services, cryptographic key management information, and access control lists. Authorized personnel include security administrators, system administrators, system security officers, system programmers, and other privileged users.

Determine if:

- **AC-06(01)(a)**
  - **AC-06(01)(a)[01]** access is authorized for [Assignment: organization-defined individuals and roles] to [Assignment: organization-defined security functions (deployed in hardware)];
  - **AC-06(01)(a)[02]** access is authorized for [Assignment: organization-defined individuals and roles] to [Assignment: organization-defined security functions (deployed in software)];
  - **AC-06(01)(a)[03]** access is authorized for [Assignment: organization-defined individuals and roles] to [Assignment: organization-defined security functions (deployed in firmware)];
- **AC-06(01)(b)** access is authorized for [Assignment: organization-defined individuals and roles] to [Assignment: organization-defined security-relevant information].

**Examine:** Access control policy; procedures addressing least privilege; list of security functions (deployed in hardware, software, and firmware) and security-relevant information for which access must be explicitly authorized; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for defining least privileges necessary to accomplish specified tasks; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Mechanisms implementing least privilege functions.

</details>

<a id="ac-6.2"></a>

### AC-6(2) Non-privileged Access for Nonsecurity Functions

*Baselines: Moderate, High*

Require that users of system accounts (or roles) with access to [Assignment: organization-defined security functions or security-relevant information] use non-privileged accounts or roles, when accessing nonsecurity functions.

<details>
<summary>Discussion and assessment objectives for AC-6(2)</summary>

Requiring the use of non-privileged accounts when accessing nonsecurity functions limits exposure when operating from within privileged accounts or roles. The inclusion of roles addresses situations where organizations implement access control policies, such as role-based access control, and where a change of role provides the same degree of assurance in the change of access authorizations for the user and the processes acting on behalf of the user as would be provided by a change between a privileged and non-privileged account.

Determine if users of system accounts (or roles) with access to [Assignment: organization-defined security functions or security-relevant information] are required to use non-privileged accounts or roles when accessing non-security functions.

**Examine:** Access control policy; procedures addressing least privilege; list of system-generated security functions or security-relevant information assigned to system accounts or roles; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for defining least privileges necessary to accomplish specified tasks; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Mechanisms implementing least privilege functions.

</details>

<a id="ac-6.3"></a>

### AC-6(3) Network Access to Privileged Commands

*Baselines: High*

Authorize network access to [Assignment: organization-defined privileged commands] only for [Assignment: organization-defined compelling operational needs] and document the rationale for such access in the security plan for the system.

<details>
<summary>Discussion and assessment objectives for AC-6(3)</summary>

Network access is any access across a network connection in lieu of local access (i.e., user being physically present at the device).

Determine if:

- **AC-06(03)[01]** network access to [Assignment: organization-defined privileged commands] is authorized only for [Assignment: organization-defined compelling operational needs];
- **AC-06(03)[02]** the rationale for authorizing network access to privileged commands is documented in the security plan for the system.

**Examine:** Access control policy; procedures addressing least privilege; system configuration settings and associated documentation; system audit records; list of operational needs for authorizing network access to privileged commands; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for defining least privileges necessary to accomplish specified tasks; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing least privilege functions.

</details>

<a id="ac-6.4"></a>

### AC-6(4) Separate Processing Domains

*Baselines: Not in a baseline*

Provide separate processing domains to enable finer-grained allocation of user privileges.

<details>
<summary>Discussion and assessment objectives for AC-6(4)</summary>

Providing separate processing domains for finer-grained allocation of user privileges includes using virtualization techniques to permit additional user privileges within a virtual machine while restricting privileges to other virtual machines or to the underlying physical machine, implementing separate physical domains, and employing hardware or software domain separation mechanisms.

Determine if separate processing domains are provided to enable finer-grain allocation of user privileges.

**Examine:** Access control policy; procedures addressing least privilege; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for defining least privileges necessary to accomplish specified tasks; organizational personnel with information security responsibilities; system developers.

**Test:** Mechanisms implementing least privilege functions.

</details>

<a id="ac-6.5"></a>

### AC-6(5) Privileged Accounts

*Baselines: Moderate, High*

Restrict privileged accounts on the system to [Assignment: organization-defined personnel or roles].

<details>
<summary>Discussion and assessment objectives for AC-6(5)</summary>

Privileged accounts, including super user accounts, are typically described as system administrator for various types of commercial off-the-shelf operating systems. Restricting privileged accounts to specific personnel or roles prevents day-to-day users from accessing privileged information or privileged functions. Organizations may differentiate in the application of restricting privileged accounts between allowed privileges for local accounts and for domain accounts provided that they retain the ability to control system configurations for key parameters and as otherwise necessary to sufficiently mitigate risk.

Determine if privileged accounts on the system are restricted to [Assignment: organization-defined personnel or roles].

**Examine:** Access control policy; procedures addressing least privilege; list of system-generated privileged accounts; list of system administration personnel; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for defining least privileges necessary to accomplish specified tasks; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Mechanisms implementing least privilege functions.

</details>

<a id="ac-6.6"></a>

### AC-6(6) Privileged Access by Non-organizational Users

*Baselines: Not in a baseline*

Prohibit privileged access to the system by non-organizational users.

<details>
<summary>Discussion and assessment objectives for AC-6(6)</summary>

An organizational user is an employee or an individual considered by the organization to have the equivalent status of an employee. Organizational users include contractors, guest researchers, or individuals detailed from other organizations. A non-organizational user is a user who is not an organizational user. Policies and procedures for granting equivalent status of employees to individuals include a need-to-know, citizenship, and the relationship to the organization.

Determine if privileged access to the system by non-organizational users is prohibited.

**Examine:** Access control policy; procedures addressing least privilege; list of system-generated privileged accounts; list of non-organizational users; system configuration settings and associated documentation; audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for defining least privileges necessary to accomplish specified tasks; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Mechanisms prohibiting privileged access to the system.

</details>

<a id="ac-6.7"></a>

### AC-6(7) Review of User Privileges

*Baselines: Moderate, High*

- **(a)** Review [Assignment: organization-defined frequency] the privileges assigned to [Assignment: organization-defined roles and classes] to validate the need for such privileges; and
- **(b)** Reassign or remove privileges, if necessary, to correctly reflect organizational mission and business needs.

<details>
<summary>Discussion and assessment objectives for AC-6(7)</summary>

The need for certain assigned user privileges may change over time to reflect changes in organizational mission and business functions, environments of operation, technologies, or threats. A periodic review of assigned user privileges is necessary to determine if the rationale for assigning such privileges remains valid. If the need cannot be revalidated, organizations take appropriate corrective actions.

Determine if:

- **AC-06(07)(a)** privileges assigned to [Assignment: organization-defined roles and classes] are reviewed [Assignment: organization-defined frequency] to validate the need for such privileges;
- **AC-06(07)(b)** privileges are reassigned or removed, if necessary, to correctly reflect organizational mission and business needs.

**Examine:** Access control policy; procedures addressing least privilege; list of system-generated roles or classes of users and assigned privileges; system design documentation; system configuration settings and associated documentation; validation reviews of privileges assigned to roles or classes or users; records of privilege removals or reassignments for roles or classes of users; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for reviewing least privileges necessary to accomplish specified tasks; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Mechanisms implementing review of user privileges.

</details>

<a id="ac-6.8"></a>

### AC-6(8) Privilege Levels for Code Execution

*Baselines: Not in a baseline*

Prevent the following software from executing at higher privilege levels than users executing the software: [Assignment: organization-defined software].

<details>
<summary>Discussion and assessment objectives for AC-6(8)</summary>

In certain situations, software applications or programs need to execute with elevated privileges to perform required functions. However, depending on the software functionality and configuration, if the privileges required for execution are at a higher level than the privileges assigned to organizational users invoking such applications or programs, those users may indirectly be provided with greater privileges than assigned.

Determine if [Assignment: organization-defined software] is prevented from executing at higher privilege levels than users executing the software.

**Examine:** Access control policy; procedures addressing least privilege; list of software that should not execute at higher privilege levels than users executing software; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for defining least privileges necessary to accomplish specified tasks; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms implementing least privilege functions for software execution.

</details>

<a id="ac-6.9"></a>

### AC-6(9) Log Use of Privileged Functions

*Baselines: Moderate, High*

Log the execution of privileged functions.

<details>
<summary>Discussion and assessment objectives for AC-6(9)</summary>

The misuse of privileged functions, either intentionally or unintentionally by authorized users or by unauthorized external entities that have compromised system accounts, is a serious and ongoing concern and can have significant adverse impacts on organizations. Logging and analyzing the use of privileged functions is one way to detect such misuse and, in doing so, help mitigate the risk from insider threats and the advanced persistent threat.

Determine if the execution of privileged functions is logged.

**Examine:** Access control policy; procedures addressing least privilege; system design documentation; system configuration settings and associated documentation; list of privileged functions to be audited; list of audited events; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for reviewing least privileges necessary to accomplish specified tasks; organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms auditing the execution of least privilege functions.

</details>

<a id="ac-6.10"></a>

### AC-6(10) Prohibit Non-privileged Users from Executing Privileged Functions

*Baselines: Moderate, High*

Prevent non-privileged users from executing privileged functions.

<details>
<summary>Discussion and assessment objectives for AC-6(10)</summary>

Privileged functions include disabling, circumventing, or altering implemented security or privacy controls, establishing system accounts, performing system integrity checks, and administering cryptographic key management activities. Non-privileged users are individuals who do not possess appropriate authorizations. Privileged functions that require protection from non-privileged users include circumventing intrusion detection and prevention mechanisms or malicious code protection mechanisms. Preventing non-privileged users from executing privileged functions is enforced by AC-3.

Determine if non-privileged users are prevented from executing privileged functions.

**Examine:** Access control policy; procedures addressing least privilege; system design documentation; system configuration settings and associated documentation; list of privileged functions and associated user account assignments; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for defining least privileges necessary to accomplish specified tasks; organizational personnel with information security responsibilities; system developers.

**Test:** Mechanisms implementing least privilege functions for non-privileged users.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for AC-6</summary>

Determine if the principle of least privilege is employed, allowing only authorized accesses for users (or processes acting on behalf of users) that are necessary to accomplish assigned organizational tasks.

**Examine:** Access control policy; procedures addressing least privilege; list of assigned access authorizations (user privileges); system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for defining least privileges necessary to accomplish specified tasks; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Mechanisms implementing least privilege functions.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
