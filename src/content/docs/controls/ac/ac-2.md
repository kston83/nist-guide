---
title: 'AC-2 Account Management'
description: 'NIST SP 800-53 Rev. 5 control AC-2, Account Management: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'AC-2 Account Management'
  order: 2
control:
  id: AC-2
  family: AC
  baselines: [Low, Moderate, High]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 12 (8 in a baseline) |

**Related controls:** [AC-3](/controls/ac/ac-3/), [AC-5](/controls/ac/ac-5/), [AC-6](/controls/ac/ac-6/), [AC-17](/controls/ac/ac-17/), [AC-18](/controls/ac/ac-18/), [AC-20](/controls/ac/ac-20/), [AC-24](/controls/ac/ac-24/), [AU-2](/controls/au/au-2/), [AU-12](/controls/au/au-12/), [CM-5](/controls/cm/cm-5/), [IA-2](/controls/ia/ia-2/), [IA-4](/controls/ia/ia-4/), [IA-5](/controls/ia/ia-5/), [IA-8](/controls/ia/ia-8/), [MA-3](/controls/ma/ma-3/), [MA-5](/controls/ma/ma-5/), [PE-2](/controls/pe/pe-2/), [PL-4](/controls/pl/pl-4/), [PS-2](/controls/ps/ps-2/), [PS-4](/controls/ps/ps-4/), [PS-5](/controls/ps/ps-5/), [PS-7](/controls/ps/ps-7/), [PT-2](/controls/pt/pt-2/), [PT-3](/controls/pt/pt-3/), [SC-7](/controls/sc/sc-7/), [SC-12](/controls/sc/sc-12/), [SC-13](/controls/sc/sc-13/), [SC-37](/controls/sc/sc-37/)

## Control statement

- **a.** Define and document the types of accounts allowed and specifically prohibited for use within the system;
- **b.** Assign account managers;
- **c.** Require [Assignment: organization-defined prerequisites and criteria] for group and role membership;
- **d.** Specify:
  - **1.** Authorized users of the system;
  - **2.** Group and role membership; and
  - **3.** Access authorizations (i.e., privileges) and [Assignment: organization-defined attributes (as required)] for each account;
- **e.** Require approvals by [Assignment: organization-defined personnel or roles] for requests to create accounts;
- **f.** Create, enable, modify, disable, and remove accounts in accordance with [Assignment: organization-defined policy, procedures, prerequisites, and criteria];
- **g.** Monitor the use of accounts;
- **h.** Notify account managers and [Assignment: organization-defined personnel or roles] within:
  - **1.** [Assignment: organization-defined time period] when accounts are no longer required;
  - **2.** [Assignment: organization-defined time period] when users are terminated or transferred; and
  - **3.** [Assignment: organization-defined time period] when system usage or need-to-know changes for an individual;
- **i.** Authorize access to the system based on:
  - **1.** A valid access authorization;
  - **2.** Intended system usage; and
  - **3.** [Assignment: organization-defined attributes (as required)];
- **j.** Review accounts for compliance with account management requirements [Assignment: organization-defined frequency];
- **k.** Establish and implement a process for changing shared or group account authenticators (if deployed) when individuals are removed from the group; and
- **l.** Align account management processes with personnel termination and transfer processes.

<details>
<summary>NIST discussion</summary>

Examples of system account types include individual, shared, group, system, guest, anonymous, emergency, developer, temporary, and service. Identification of authorized system users and the specification of access privileges reflect the requirements in other controls in the security plan. Users requiring administrative privileges on system accounts receive additional scrutiny by organizational personnel responsible for approving such accounts and privileged access, including system owner, mission or business owner, senior agency information security officer, or senior agency official for privacy. Types of accounts that organizations may wish to prohibit due to increased risk include shared, group, emergency, anonymous, temporary, and guest accounts.

Where access involves personally identifiable information, security programs collaborate with the senior agency official for privacy to establish the specific conditions for group and role membership; specify authorized users, group and role membership, and access authorizations for each account; and create, adjust, or remove system accounts in accordance with organizational policies. Policies can include such information as account expiration dates or other factors that trigger the disabling of accounts. Organizations may choose to define access privileges or other attributes by account, type of account, or a combination of the two. Examples of other attributes required for authorizing access include restrictions on time of day, day of week, and point of origin. In defining other system account attributes, organizations consider system-related requirements and mission/business requirements. Failure to consider these factors could affect system availability.

Temporary and emergency accounts are intended for short-term use. Organizations establish temporary accounts as part of normal account activation procedures when there is a need for short-term accounts without the demand for immediacy in account activation. Organizations establish emergency accounts in response to crisis situations and with the need for rapid account activation. Therefore, emergency account activation may bypass normal account authorization processes. Emergency and temporary accounts are not to be confused with infrequently used accounts, including local logon accounts used for special tasks or when network resources are unavailable (may also be known as accounts of last resort). Such accounts remain available and are not subject to automatic disabling or removal dates. Conditions for disabling or deactivating accounts include when shared/group, emergency, or temporary accounts are no longer required and when individuals are transferred or terminated. Changing shared/group authenticators when members leave the group is intended to ensure that former group members do not retain access to the shared or group account. Some types of system accounts may require specialized training.

</details>

## Control enhancements

<a id="ac-2.1"></a>

### AC-2(1) Automated System Account Management

*Baselines: Moderate, High*

Support the management of system accounts using [Assignment: organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for AC-2(1)</summary>

Automated system account management includes using automated mechanisms to create, enable, modify, disable, and remove accounts; notify account managers when an account is created, enabled, modified, disabled, or removed, or when users are terminated or transferred; monitor system account usage; and report atypical system account usage. Automated mechanisms can include internal system functions and email, telephonic, and text messaging notifications.

Determine if the management of system accounts is supported using [Assignment: organization-defined automated mechanisms].

**Examine:** Access control policy; procedures for addressing account management; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with account management responsibilities; system/network administrators; organizational personnel with information security with information security responsibilities; system developers.

**Test:** Automated mechanisms for implementing account management functions.

</details>

<a id="ac-2.2"></a>

### AC-2(2) Automated Temporary and Emergency Account Management

*Baselines: Moderate, High*

Automatically [Selection: remove; disable] temporary and emergency accounts after [Assignment: organization-defined time period].

<details>
<summary>Discussion and assessment objectives for AC-2(2)</summary>

Management of temporary and emergency accounts includes the removal or disabling of such accounts automatically after a predefined time period rather than at the convenience of the system administrator. Automatic removal or disabling of accounts provides a more consistent implementation.

Determine if temporary and emergency accounts are automatically [Selection: remove; disable] after [Assignment: organization-defined time period].

**Examine:** Access control policy; procedures for addressing account management; system design documentation; system configuration settings and associated documentation; system-generated list of temporary accounts removed and/or disabled; system-generated list of emergency accounts removed and/or disabled; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with account management responsibilities; system/network administrators; organizational personnel with information security with information security responsibilities; system developers.

**Test:** Automated mechanisms for implementing account management functions.

</details>

<a id="ac-2.3"></a>

### AC-2(3) Disable Accounts

*Baselines: Moderate, High*

Disable accounts within [Assignment: organization-defined time period] when the accounts:

- **(a)** Have expired;
- **(b)** Are no longer associated with a user or individual;
- **(c)** Are in violation of organizational policy; or
- **(d)** Have been inactive for [Assignment: organization-defined time period].

<details>
<summary>Discussion and assessment objectives for AC-2(3)</summary>

Disabling expired, inactive, or otherwise anomalous accounts supports the concepts of least privilege and least functionality which reduce the attack surface of the system.

Determine if:

- **AC-02(03)(a)** accounts are disabled within [Assignment: organization-defined time period] when the accounts have expired;
- **AC-02(03)(b)** accounts are disabled within [Assignment: organization-defined time period] when the accounts are no longer associated with a user or individual;
- **AC-02(03)(c)** accounts are disabled within [Assignment: organization-defined time period] when the accounts are in violation of organizational policy;
- **AC-02(03)(d)** accounts are disabled within [Assignment: organization-defined time period] when the accounts have been inactive for [Assignment: organization-defined time period].

**Examine:** Access control policy; procedures for addressing account management; system security plan; system design documentation; system configuration settings and associated documentation; system-generated list of accounts removed; system-generated list of emergency accounts disabled; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with account management responsibilities; system/network administrators; organizational personnel with information security responsibilities; system developers.

**Test:** Mechanisms for implementing account management functions.

</details>

<a id="ac-2.4"></a>

### AC-2(4) Automated Audit Actions

*Baselines: Moderate, High*

Automatically audit account creation, modification, enabling, disabling, and removal actions.

<details>
<summary>Discussion and assessment objectives for AC-2(4)</summary>

Account management audit records are defined in accordance with AU-02 and reviewed, analyzed, and reported in accordance with AU-06.

Determine if:

- **AC-02(04)[01]** account creation is automatically audited;
- **AC-02(04)[02]** account modification is automatically audited;
- **AC-02(04)[03]** account enabling is automatically audited;
- **AC-02(04)[04]** account disabling is automatically audited;
- **AC-02(04)[05]** account removal actions are automatically audited.

**Examine:** Access control policy; procedures addressing account management; system design documentation; system configuration settings and associated documentation; notifications/alerts of account creation, modification, enabling, disabling, and removal actions; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with account management responsibilities; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Automated mechanisms implementing account management functions.

</details>

<a id="ac-2.5"></a>

### AC-2(5) Inactivity Logout

*Baselines: Moderate, High*

Require that users log out when [Assignment: organization-defined time period of expected inactivity or description of when to log out].

<details>
<summary>Discussion and assessment objectives for AC-2(5)</summary>

Inactivity logout is behavior- or policy-based and requires users to take physical action to log out when they are expecting inactivity longer than the defined period. Automatic enforcement of inactivity logout is addressed by AC-11.

Determine if users are required to log out when [Assignment: organization-defined time period of expected inactivity or description of when to log out].

**Examine:** Access control policy; procedures addressing account management; system design documentation; system configuration settings and associated documentation; security violation reports; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with account management responsibilities; system/network administrators; organizational personnel with information security responsibilities; users that must comply with inactivity logout policy.

</details>

<a id="ac-2.6"></a>

### AC-2(6) Dynamic Privilege Management

*Baselines: Not in a baseline*

Implement [Assignment: organization-defined dynamic privilege management capabilities].

<details>
<summary>Discussion and assessment objectives for AC-2(6)</summary>

In contrast to access control approaches that employ static accounts and predefined user privileges, dynamic access control approaches rely on runtime access control decisions facilitated by dynamic privilege management, such as attribute-based access control. While user identities remain relatively constant over time, user privileges typically change more frequently based on ongoing mission or business requirements and the operational needs of organizations. An example of dynamic privilege management is the immediate revocation of privileges from users as opposed to requiring that users terminate and restart their sessions to reflect changes in privileges. Dynamic privilege management can also include mechanisms that change user privileges based on dynamic rules as opposed to editing specific user profiles. Examples include automatic adjustments of user privileges if they are operating out of their normal work times, if their job function or assignment changes, or if systems are under duress or in emergency situations. Dynamic privilege management includes the effects of privilege changes, for example, when there are changes to encryption keys used for communications.

Determine if [Assignment: organization-defined dynamic privilege management capabilities] are implemented.

**Examine:** Access control policy; procedures addressing account management; system design documentation; system configuration settings and associated documentation; system-generated list of dynamic privilege management capabilities; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with account management responsibilities; system/network administrators; organizational personnel with information security responsibilities; system developers.

**Test:** system or mechanisms implementing dynamic privilege management capabilities.

</details>

<a id="ac-2.7"></a>

### AC-2(7) Privileged User Accounts

*Baselines: Not in a baseline*

- **(a)** Establish and administer privileged user accounts in accordance with [Selection: a role-based access scheme; an attribute-based access scheme];
- **(b)** Monitor privileged role or attribute assignments;
- **(c)** Monitor changes to roles or attributes; and
- **(d)** Revoke access when privileged role or attribute assignments are no longer appropriate.

<details>
<summary>Discussion and assessment objectives for AC-2(7)</summary>

Privileged roles are organization-defined roles assigned to individuals that allow those individuals to perform certain security-relevant functions that ordinary users are not authorized to perform. Privileged roles include key management, account management, database administration, system and network administration, and web administration. A role-based access scheme organizes permitted system access and privileges into roles. In contrast, an attribute-based access scheme specifies allowed system access and privileges based on attributes.

Determine if:

- **AC-02(07)(a)** privileged user accounts are established and administered in accordance with [Selection: a role-based access scheme; an attribute-based access scheme];
- **AC-02(07)(b)** privileged role or attribute assignments are monitored;
- **AC-02(07)(c)** changes to roles or attributes are monitored;
- **AC-02(07)(d)** access is revoked when privileged role or attribute assignments are no longer appropriate.

**Examine:** Access control policy; procedures addressing account management; system design documentation; system configuration settings and associated documentation; system-generated list of privileged user accounts and associated roles; records of actions taken when privileged role assignments are no longer appropriate; system audit records; audit tracking and monitoring reports; system monitoring records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with account management responsibilities; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing account management functions; mechanisms monitoring privileged role assignments.

</details>

<a id="ac-2.8"></a>

### AC-2(8) Dynamic Account Management

*Baselines: Not in a baseline*

Create, activate, manage, and deactivate [Assignment: organization-defined system accounts] dynamically.

<details>
<summary>Discussion and assessment objectives for AC-2(8)</summary>

Approaches for dynamically creating, activating, managing, and deactivating system accounts rely on automatically provisioning the accounts at runtime for entities that were previously unknown. Organizations plan for the dynamic management, creation, activation, and deactivation of system accounts by establishing trust relationships, business rules, and mechanisms with appropriate authorities to validate related authorizations and privileges.

Determine if:

- **AC-02(08)[01]** [Assignment: organization-defined system accounts] are created dynamically;
- **AC-02(08)[02]** [Assignment: organization-defined system accounts] are activated dynamically;
- **AC-02(08)[03]** [Assignment: organization-defined system accounts] are managed dynamically;
- **AC-02(08)[04]** [Assignment: organization-defined system accounts] are deactivated dynamically.

**Examine:** Access control policy; procedures addressing account management; system design documentation; system configuration settings and associated documentation; system-generated list of system accounts; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with account management responsibilities; system/network administrators; organizational personnel with information security responsibilities; system developers.

**Test:** Automated mechanisms implementing account management functions.

</details>

<a id="ac-2.9"></a>

### AC-2(9) Restrictions on Use of Shared and Group Accounts

*Baselines: Not in a baseline*

Only permit the use of shared and group accounts that meet [Assignment: organization-defined conditions].

<details>
<summary>Discussion and assessment objectives for AC-2(9)</summary>

Before permitting the use of shared or group accounts, organizations consider the increased risk due to the lack of accountability with such accounts.

Determine if the use of shared and group accounts is only permitted if [Assignment: organization-defined conditions] are met.

**Examine:** Access control policy; procedures addressing account management; system design documentation; system configuration settings and associated documentation; system-generated list of shared/group accounts and associated roles; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with account management responsibilities; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing management of shared/group accounts.

</details>

<a id="ac-2.11"></a>

### AC-2(11) Usage Conditions

*Baselines: High*

Enforce [Assignment: organization-defined circumstances and/or usage conditions] for [Assignment: organization-defined system accounts].

<details>
<summary>Discussion and assessment objectives for AC-2(11)</summary>

Specifying and enforcing usage conditions helps to enforce the principle of least privilege, increase user accountability, and enable effective account monitoring. Account monitoring includes alerts generated if the account is used in violation of organizational parameters. Organizations can describe specific conditions or circumstances under which system accounts can be used, such as by restricting usage to certain days of the week, time of day, or specific durations of time.

Determine if [Assignment: organization-defined circumstances and/or usage conditions] for [Assignment: organization-defined system accounts] are enforced.

**Examine:** Access control policy; procedures addressing account management; system design documentation; system configuration settings and associated documentation; system-generated list of system accounts and associated assignments of usage circumstances and/or usage conditions; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with account management responsibilities; system/network administrators; organizational personnel with information security responsibilities; system developers.

**Test:** Mechanisms implementing account management functions.

</details>

<a id="ac-2.12"></a>

### AC-2(12) Account Monitoring for Atypical Usage

*Baselines: High*

- **(a)** Monitor system accounts for [Assignment: organization-defined atypical usage] ; and
- **(b)** Report atypical usage of system accounts to [Assignment: organization-defined personnel or roles].

<details>
<summary>Discussion and assessment objectives for AC-2(12)</summary>

Atypical usage includes accessing systems at certain times of the day or from locations that are not consistent with the normal usage patterns of individuals. Monitoring for atypical usage may reveal rogue behavior by individuals or an attack in progress. Account monitoring may inadvertently create privacy risks since data collected to identify atypical usage may reveal previously unknown information about the behavior of individuals. Organizations assess and document privacy risks from monitoring accounts for atypical usage in their privacy impact assessment and make determinations that are in alignment with their privacy program plan.

Determine if:

- **AC-02(12)(a)** system accounts are monitored for [Assignment: organization-defined atypical usage];
- **AC-02(12)(b)** atypical usage of system accounts is reported to [Assignment: organization-defined personnel or roles].

**Examine:** Access control policy; procedures addressing account management; system design documentation; system configuration settings and associated documentation; system monitoring records; system audit records; audit tracking and monitoring reports; privacy impact assessment; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with account management responsibilities; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing account management functions.

</details>

<a id="ac-2.13"></a>

### AC-2(13) Disable Accounts for High-risk Individuals

*Baselines: Moderate, High*

Disable accounts of individuals within [Assignment: organization-defined time period] of discovery of [Assignment: organization-defined significant risks].

<details>
<summary>Discussion and assessment objectives for AC-2(13)</summary>

Users who pose a significant security and/or privacy risk include individuals for whom reliable evidence indicates either the intention to use authorized access to systems to cause harm or through whom adversaries will cause harm. Such harm includes adverse impacts to organizational operations, organizational assets, individuals, other organizations, or the Nation. Close coordination among system administrators, legal staff, human resource managers, and authorizing officials is essential when disabling system accounts for high-risk individuals.

Determine if accounts of individuals are disabled within [Assignment: organization-defined time period] of discovery of [Assignment: organization-defined significant risks].

**Examine:** Access control policy; procedures addressing account management; system design documentation; system configuration settings and associated documentation; system-generated list of disabled accounts; list of user activities posing significant organizational risk; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with account management responsibilities; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing account management functions.

</details>

*Withdrawn enhancements: AC-2(10).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for AC-2</summary>

Determine if:

- **AC-02a.**
  - **AC-02a.[01]** account types allowed for use within the system are defined and documented;
  - **AC-02a.[02]** account types specifically prohibited for use within the system are defined and documented;
- **AC-02b.** account managers are assigned;
- **AC-02c.** [Assignment: organization-defined prerequisites and criteria] for group and role membership are required;
- **AC-02d.**
  - **AC-02d.01** authorized users of the system are specified;
  - **AC-02d.02** group and role membership are specified;
  - **AC-02d.03**
    - **AC-02d.03[01]** access authorizations (i.e., privileges) are specified for each account;
    - **AC-02d.03[02]** [Assignment: organization-defined attributes (as required)] are specified for each account;
- **AC-02e.** approvals are required by [Assignment: organization-defined personnel or roles] for requests to create accounts;
- **AC-02f.**
  - **AC-02f.[01]** accounts are created in accordance with [Assignment: organization-defined policy, procedures, prerequisites, and criteria];
  - **AC-02f.[02]** accounts are enabled in accordance with [Assignment: organization-defined policy, procedures, prerequisites, and criteria];
  - **AC-02f.[03]** accounts are modified in accordance with [Assignment: organization-defined policy, procedures, prerequisites, and criteria];
  - **AC-02f.[04]** accounts are disabled in accordance with [Assignment: organization-defined policy, procedures, prerequisites, and criteria];
  - **AC-02f.[05]** accounts are removed in accordance with [Assignment: organization-defined policy, procedures, prerequisites, and criteria];
- **AC-02g.** the use of accounts is monitored;
- **AC-02h.**
  - **AC-02h.01** account managers and [Assignment: organization-defined personnel or roles] are notified within [Assignment: organization-defined time period] when accounts are no longer required;
  - **AC-02h.02** account managers and [Assignment: organization-defined personnel or roles] are notified within [Assignment: organization-defined time period] when users are terminated or transferred;
  - **AC-02h.03** account managers and [Assignment: organization-defined personnel or roles] are notified within [Assignment: organization-defined time period] when system usage or the need to know changes for an individual;
- **AC-02i.**
  - **AC-02i.01** access to the system is authorized based on a valid access authorization;
  - **AC-02i.02** access to the system is authorized based on intended system usage;
  - **AC-02i.03** access to the system is authorized based on [Assignment: organization-defined attributes (as required)];
- **AC-02j.** accounts are reviewed for compliance with account management requirements [Assignment: organization-defined frequency];
- **AC-02k.**
  - **AC-02k.[01]** a process is established for changing shared or group account authenticators (if deployed) when individuals are removed from the group;
  - **AC-02k.[02]** a process is implemented for changing shared or group account authenticators (if deployed) when individuals are removed from the group;
- **AC-02l.**
  - **AC-02l.[01]** account management processes are aligned with personnel termination processes;
  - **AC-02l.[02]** account management processes are aligned with personnel transfer processes.

**Examine:** Access control policy; personnel termination policy and procedure; personnel transfer policy and procedure; procedures for addressing account management; system design documentation; system configuration settings and associated documentation; list of active system accounts along with the name of the individual associated with each account; list of recently disabled system accounts and the name of the individual associated with each account; list of conditions for group and role membership; notifications of recent transfers, separations, or terminations of employees; access authorization records; account management compliance reviews; system monitoring records; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with account management responsibilities; system/network administrators; organizational personnel with information security with information security and privacy responsibilities.

**Test:** Organizational processes for account management on the system; mechanisms for implementing account management.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

AC-2 asks you to run account management as a controlled life cycle: every account has a known type, an owner, an approval, and a removal date or trigger. Assessors test it heavily because weak account management sits behind a large share of real incidents.

**Common implementations.** Accounts are provisioned from an identity provider (for example Microsoft Entra ID, Okta or Active Directory) through a ticketed request that records the approver. Group and role membership drives access rather than direct grants. HR termination and transfer events feed the identity system automatically, which covers items h and l. A periodic access review, run in the identity governance tool or by exporting account lists to managers, covers item j.

**Organization-defined parameters.** Typical values, which your agency policy may set differently:

| Parameter | Typical value |
| --- | --- |
| Account review frequency (j) | Quarterly for privileged accounts; semiannually or annually for standard users |
| Notice when accounts are no longer required (h.1) | Within 24 hours to 5 business days |
| Notice when users are terminated or transferred (h.2) | Within 24 hours; same day for privileged users |
| Approvers for new accounts (e) | Supervisor plus system owner or data owner for privileged roles |

**Evidence assessors ask for.**

- Account management procedure naming account types, including which types are prohibited
- A current list of all accounts with type, role and owner, including service and emergency accounts
- A sample of account requests showing approvals, drawn by the assessor
- Records of the last access review, with actions taken on accounts flagged for removal
- A sample of recent terminations compared against the date each account was disabled
- The configuration of automated disabling for inactive accounts, if AC-2(3) applies

**Inheritance.** Organizations often provide the identity platform and the HR feed as common controls. The system still owns its own account types, application-level roles, service accounts and the review of who holds access to it, so AC-2 is almost always a hybrid control.

**Common findings.**

- Service and shared accounts with no named owner or credential rotation (item k).
- Terminated users still enabled days or weeks after departure.
- Access reviews completed as a rubber stamp, with no accounts ever removed.
- Application-local accounts outside the identity provider, missed by every review.
- Emergency ("break glass") accounts with no monitoring of their use.

**Enhancements in the Moderate baseline.** [AC-2(1)](#ac-2.1) automated account management, [AC-2(2)](#ac-2.2) automatic removal of temporary and emergency accounts, [AC-2(3)](#ac-2.3) disabling accounts, [AC-2(4)](#ac-2.4) automated audit of account actions, [AC-2(5)](#ac-2.5) inactivity logout and [AC-2(13)](#ac-2.13) disabling accounts of high-risk individuals. High adds [AC-2(11)](#ac-2.11) and [AC-2(12)](#ac-2.12).
