---
title: 'AC-3 Access Enforcement'
description: 'NIST SP 800-53 Rev. 5 control AC-3, Access Enforcement: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'AC-3 Access Enforcement'
  order: 3
control:
  id: AC-3
  family: AC
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | System | 13 (1 in a baseline) |

**Related controls:** [AC-2](/controls/ac/ac-2/), [AC-4](/controls/ac/ac-4/), [AC-5](/controls/ac/ac-5/), [AC-6](/controls/ac/ac-6/), [AC-16](/controls/ac/ac-16/), [AC-17](/controls/ac/ac-17/), [AC-18](/controls/ac/ac-18/), [AC-19](/controls/ac/ac-19/), [AC-20](/controls/ac/ac-20/), [AC-21](/controls/ac/ac-21/), [AC-22](/controls/ac/ac-22/), [AC-24](/controls/ac/ac-24/), [AC-25](/controls/ac/ac-25/), [AT-2](/controls/at/at-2/), [AT-3](/controls/at/at-3/), [AU-9](/controls/au/au-9/), [CA-9](/controls/ca/ca-9/), [CM-5](/controls/cm/cm-5/), [CM-11](/controls/cm/cm-11/), [IA-2](/controls/ia/ia-2/), [IA-5](/controls/ia/ia-5/), [IA-6](/controls/ia/ia-6/), [IA-7](/controls/ia/ia-7/), [IA-11](/controls/ia/ia-11/), [IA-13](/controls/ia/ia-13/), [MA-3](/controls/ma/ma-3/), [MA-4](/controls/ma/ma-4/), [MA-5](/controls/ma/ma-5/), [MP-4](/controls/mp/mp-4/), [PM-2](/controls/pm/pm-2/), [PS-3](/controls/ps/ps-3/), [PT-2](/controls/pt/pt-2/), [PT-3](/controls/pt/pt-3/), [SA-17](/controls/sa/sa-17/), [SC-2](/controls/sc/sc-2/), [SC-3](/controls/sc/sc-3/), [SC-4](/controls/sc/sc-4/), [SC-12](/controls/sc/sc-12/), [SC-13](/controls/sc/sc-13/), [SC-28](/controls/sc/sc-28/), [SC-31](/controls/sc/sc-31/), [SC-34](/controls/sc/sc-34/), [SI-4](/controls/si/si-4/), [SI-8](/controls/si/si-8/)

## Control statement

Enforce approved authorizations for logical access to information and system resources in accordance with applicable access control policies.

<details>
<summary>NIST discussion</summary>

Access control policies control access between active entities or subjects (i.e., users or processes acting on behalf of users) and passive entities or objects (i.e., devices, files, records, domains) in organizational systems. In addition to enforcing authorized access at the system level and recognizing that systems can host many applications and services in support of mission and business functions, access enforcement mechanisms can also be employed at the application and service level to provide increased information security and privacy. In contrast to logical access controls that are implemented within the system, physical access controls are addressed by the controls in the Physical and Environmental Protection ( PE ) family.

</details>

## Control enhancements

<a id="ac-3.2"></a>

### AC-3(2) Dual Authorization

*Baselines: Not in a baseline*

Enforce dual authorization for [Assignment: organization-defined privileged commands and/or other actions].

<details>
<summary>Discussion and assessment objectives for AC-3(2)</summary>

Dual authorization, also known as two-person control, reduces risk related to insider threats. Dual authorization mechanisms require the approval of two authorized individuals to execute. To reduce the risk of collusion, organizations consider rotating dual authorization duties. Organizations consider the risk associated with implementing dual authorization mechanisms when immediate responses are necessary to ensure public and environmental safety.

Determine if dual authorization is enforced for [Assignment: organization-defined privileged commands and/or other actions].

**Examine:** Access control policy; procedures addressing access enforcement and dual authorization; system design documentation; system configuration settings and associated documentation; list of privileged commands requiring dual authorization; list of actions requiring dual authorization; list of approved authorizations (user privileges); system security plan; other relevant documents or records.

**Interview:** Organizational personnel with access enforcement responsibilities; system/network administrators; organizational personnel with information security responsibilities; system developers.

**Test:** Dual authorization mechanisms implementing access control policy.

</details>

<a id="ac-3.3"></a>

### AC-3(3) Mandatory Access Control

*Baselines: Not in a baseline*

Enforce [Assignment: organization-defined mandatory access control policy] over the set of covered subjects and objects specified in the policy, and where the policy:

- **(a)** Is uniformly enforced across the covered subjects and objects within the system;
- **(b)** Specifies that a subject that has been granted access to information is constrained from doing any of the following;
  - **(1)** Passing the information to unauthorized subjects or objects;
  - **(2)** Granting its privileges to other subjects;
  - **(3)** Changing one or more security attributes (specified by the policy) on subjects, objects, the system, or system components;
  - **(4)** Choosing the security attributes and attribute values (specified by the policy) to be associated with newly created or modified objects; and
  - **(5)** Changing the rules governing access control; and
- **(c)** Specifies that [Assignment: organization-defined subjects] may explicitly be granted [Assignment: organization-defined privileges] such that they are not limited by any defined subset (or all) of the above constraints.

<details>
<summary>Discussion and assessment objectives for AC-3(3)</summary>

Mandatory access control is a type of nondiscretionary access control. Mandatory access control policies constrain what actions subjects can take with information obtained from objects for which they have already been granted access. This prevents the subjects from passing the information to unauthorized subjects and objects. Mandatory access control policies constrain actions that subjects can take with respect to the propagation of access control privileges; that is, a subject with a privilege cannot pass that privilege to other subjects. The policy is uniformly enforced over all subjects and objects to which the system has control. Otherwise, the access control policy can be circumvented. This enforcement is provided by an implementation that meets the reference monitor concept as described in AC-25 . The policy is bounded by the system (i.e., once the information is passed outside of the control of the system, additional means may be required to ensure that the constraints on the information remain in effect).

The trusted subjects described above are granted privileges consistent with the concept of least privilege (see AC-6 ). Trusted subjects are only given the minimum privileges necessary for satisfying organizational mission/business needs relative to the above policy. The control is most applicable when there is a mandate that establishes a policy regarding access to controlled unclassified information or classified information and some users of the system are not authorized access to all such information resident in the system. Mandatory access control can operate in conjunction with discretionary access control as described in AC-3(4) . A subject constrained in its operation by mandatory access control policies can still operate under the less rigorous constraints of AC-3(4), but mandatory access control policies take precedence over the less rigorous constraints of AC-3(4). For example, while a mandatory access control policy imposes a constraint that prevents a subject from passing information to another subject operating at a different impact or classification level, AC-3(4) permits the subject to pass the information to any other subject with the same impact or classification level as the subject. Examples of mandatory access control policies include the Bell-LaPadula policy to protect confidentiality of information and the Biba policy to protect the integrity of information.

Determine if:

- **AC-03(03)[01]** [Assignment: organization-defined mandatory access control policy] is enforced over the set of covered subjects specified in the policy;
- **AC-03(03)[02]** [Assignment: organization-defined mandatory access control policy] is enforced over the set of covered objects specified in the policy;
- **AC-03(03)(a)**
  - **AC-03(03)(a)[01]** [Assignment: organization-defined mandatory access control policy] is uniformly enforced across the covered subjects within the system;
  - **AC-03(03)(a)[02]** [Assignment: organization-defined mandatory access control policy] is uniformly enforced across the covered objects within the system;
- **AC-03(03)(b)**
  - **AC-03(03)(b)(01)** [Assignment: organization-defined mandatory access control policy] and [Assignment: organization-defined mandatory access control policy] specifying that a subject that has been granted access to information is constrained from passing the information to unauthorized subjects or objects are enforced;
  - **AC-03(03)(b)(02)** [Assignment: organization-defined mandatory access control policy] and [Assignment: organization-defined mandatory access control policy] specifying that a subject that has been granted access to information is constrained from granting its privileges to other subjects are enforced;
  - **AC-03(03)(b)(03)** [Assignment: organization-defined mandatory access control policy] and [Assignment: organization-defined mandatory access control policy] specifying that a subject that has been granted access to information is constrained from changing one of more security attributes (specified by the policy) on subjects, objects, the system, or system components are enforced;
  - **AC-03(03)(b)(04)** [Assignment: organization-defined mandatory access control policy] and [Assignment: organization-defined mandatory access control policy] specifying that a subject that has been granted access to information is constrained from choosing the security attributes and attribute values (specified by the policy) to be associated with newly created or modified objects are enforced;
  - **AC-03(03)(b)(05)** [Assignment: organization-defined mandatory access control policy] and [Assignment: organization-defined mandatory access control policy] specifying that a subject that has been granted access to information is constrained from changing the rules governing access control are enforced;
- **AC-03(03)(c)** [Assignment: organization-defined mandatory access control policy] and [Assignment: organization-defined mandatory access control policy] specifying that [Assignment: organization-defined subjects] may explicitly be granted [Assignment: organization-defined privileges] such that they are not limited by any defined subset (or all) of the above constraints are enforced.

**Examine:** Access control policy; mandatory access control policies; procedures addressing access enforcement; system design documentation; system configuration settings and associated documentation; list of subjects and objects (i.e., users and resources) requiring enforcement of mandatory access control policies; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with access enforcement responsibilities; system/network administrators; organizational personnel with information security responsibilities; system developers.

**Test:** Automated mechanisms implementing mandatory access control.

</details>

<a id="ac-3.4"></a>

### AC-3(4) Discretionary Access Control

*Baselines: Not in a baseline*

Enforce [Assignment: organization-defined discretionary access control policy] over the set of covered subjects and objects specified in the policy, and where the policy specifies that a subject that has been granted access to information can do one or more of the following:

- **(a)** Pass the information to any other subjects or objects;
- **(b)** Grant its privileges to other subjects;
- **(c)** Change security attributes on subjects, objects, the system, or the system’s components;
- **(d)** Choose the security attributes to be associated with newly created or revised objects; or
- **(e)** Change the rules governing access control.

<details>
<summary>Discussion and assessment objectives for AC-3(4)</summary>

When discretionary access control policies are implemented, subjects are not constrained with regard to what actions they can take with information for which they have already been granted access. Thus, subjects that have been granted access to information are not prevented from passing the information to other subjects or objects (i.e., subjects have the discretion to pass). Discretionary access control can operate in conjunction with mandatory access control as described in AC-3(3) and AC-3(15) . A subject that is constrained in its operation by mandatory access control policies can still operate under the less rigorous constraints of discretionary access control. Therefore, while AC-3(3) imposes constraints that prevent a subject from passing information to another subject operating at a different impact or classification level, AC-3(4) permits the subject to pass the information to any subject at the same impact or classification level. The policy is bounded by the system. Once the information is passed outside of system control, additional means may be required to ensure that the constraints remain in effect. While traditional definitions of discretionary access control require identity-based access control, that limitation is not required for this particular use of discretionary access control.

Determine if:

- **AC-03(04)[01]** [Assignment: organization-defined discretionary access control policy] is enforced over the set of covered subjects specified in the policy;
- **AC-03(04)[02]** [Assignment: organization-defined discretionary access control policy] is enforced over the set of covered objects specified in the policy;
- **AC-03(04)(a)** [Assignment: organization-defined discretionary access control policy] and [Assignment: organization-defined discretionary access control policy] are enforced where the policy specifies that a subject that has been granted access to information can pass the information to any other subjects or objects;
- **AC-03(04)(b)** [Assignment: organization-defined discretionary access control policy] and [Assignment: organization-defined discretionary access control policy] are enforced where the policy specifies that a subject that has been granted access to information can grant its privileges to other subjects;
- **AC-03(04)(c)** [Assignment: organization-defined discretionary access control policy] and [Assignment: organization-defined discretionary access control policy] are enforced where the policy specifies that a subject that has been granted access to information can change security attributes on subjects, objects, the system, or the system’s components;
- **AC-03(04)(d)** [Assignment: organization-defined discretionary access control policy] and [Assignment: organization-defined discretionary access control policy] are enforced where the policy specifies that a subject that has been granted access to information can choose the security attributes to be associated with newly created or revised objects;
- **AC-03(04)(e)** [Assignment: organization-defined discretionary access control policy] and [Assignment: organization-defined discretionary access control policy] are enforced where the policy specifies that a subject that has been granted access to information can change the rules governing access control.

**Examine:** Access control policy; discretionary access control policies; procedures addressing access enforcement; system design documentation; system configuration settings and associated documentation; list of subjects and objects (i.e., users and resources) requiring enforcement of discretionary access control policies; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with access enforcement responsibilities; system/network administrators; organizational personnel with information security responsibilities; system developers.

**Test:** Mechanisms implementing discretionary access control policy.

</details>

<a id="ac-3.5"></a>

### AC-3(5) Security-relevant Information

*Baselines: Not in a baseline*

Prevent access to [Assignment: organization-defined security-relevant information] except during secure, non-operable system states.

<details>
<summary>Discussion and assessment objectives for AC-3(5)</summary>

Security-relevant information is information within systems that can potentially impact the operation of security functions or the provision of security services in a manner that could result in failure to enforce system security and privacy policies or maintain the separation of code and data. Security-relevant information includes access control lists, filtering rules for routers or firewalls, configuration parameters for security services, and cryptographic key management information. Secure, non-operable system states include the times in which systems are not performing mission or business-related processing, such as when the system is offline for maintenance, boot-up, troubleshooting, or shut down.

Determine if access to [Assignment: organization-defined security-relevant information] is prevented except during secure, non-operable system states.

**Examine:** Access control policy; procedures addressing access enforcement; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with access enforcement responsibilities; system/network administrators; organizational personnel with information security responsibilities; system developers.

**Test:** Mechanisms preventing access to security-relevant information within the system.

</details>

<a id="ac-3.7"></a>

### AC-3(7) Role-based Access Control

*Baselines: Not in a baseline*

Enforce a role-based access control policy over defined subjects and objects and control access based upon [Assignment: organization-defined roles and users authorized to assume such roles].

<details>
<summary>Discussion and assessment objectives for AC-3(7)</summary>

Role-based access control (RBAC) is an access control policy that enforces access to objects and system functions based on the defined role (i.e., job function) of the subject. Organizations can create specific roles based on job functions and the authorizations (i.e., privileges) to perform needed operations on the systems associated with the organization-defined roles. When users are assigned to specific roles, they inherit the authorizations or privileges defined for those roles. RBAC simplifies privilege administration for organizations because privileges are not assigned directly to every user (which can be a large number of individuals) but are instead acquired through role assignments. RBAC can also increase privacy and security risk if individuals assigned to a role are given access to information beyond what they need to support organizational missions or business functions. RBAC can be implemented as a mandatory or discretionary form of access control. For organizations implementing RBAC with mandatory access controls, the requirements in AC-3(3) define the scope of the subjects and objects covered by the policy.

Determine if:

- **AC-03(07)[01]** a role-based access control policy is enforced over defined subjects;
- **AC-03(07)[02]** a role-based access control policy is enforced over defined objects;
- **AC-03(07)[03]** access is controlled based on [Assignment: organization-defined roles] and [Assignment: organization-defined users authorized to assume such roles].

**Examine:** Access control policy; role-based access control policies; procedures addressing access enforcement; system design documentation; system configuration settings and associated documentation; list of roles, users, and associated privileges required to control system access; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with access enforcement responsibilities; system/network administrators; organizational personnel with information security and privacy responsibilities; system developers.

**Test:** Mechanisms implementing role-based access control policy.

</details>

<a id="ac-3.8"></a>

### AC-3(8) Revocation of Access Authorizations

*Baselines: Not in a baseline*

Enforce the revocation of access authorizations resulting from changes to the security attributes of subjects and objects based on [Assignment: organization-defined rules].

<details>
<summary>Discussion and assessment objectives for AC-3(8)</summary>

Revocation of access rules may differ based on the types of access revoked. For example, if a subject (i.e., user or process acting on behalf of a user) is removed from a group, access may not be revoked until the next time the object is opened or the next time the subject attempts to access the object. Revocation based on changes to security labels may take effect immediately. Organizations provide alternative approaches on how to make revocations immediate if systems cannot provide such capability and immediate revocation is necessary.

Determine if:

- **AC-03(08)[01]** revocation of access authorizations is enforced, resulting from changes to the security attributes of subjects based on [Assignment: organization-defined rules];
- **AC-03(08)[02]** revocation of access authorizations is enforced resulting from changes to the security attributes of objects based on [Assignment: organization-defined rules].

**Examine:** Access control policy; procedures addressing access enforcement; system design documentation; system configuration settings and associated documentation; rules governing revocation of access authorizations, system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with access enforcement responsibilities; system/network administrators; organizational personnel with information security responsibilities; system developers.

**Test:** Mechanisms implementing access enforcement functions.

</details>

<a id="ac-3.9"></a>

### AC-3(9) Controlled Release

*Baselines: Not in a baseline*

Release information outside of the system only if:

- **(a)** The receiving [Assignment: organization-defined system or system component] provides [Assignment: organization-defined controls] ; and
- **(b)** [Assignment: organization-defined controls] are used to validate the appropriateness of the information designated for release.

<details>
<summary>Discussion and assessment objectives for AC-3(9)</summary>

Organizations can only directly protect information when it resides within the system. Additional controls may be needed to ensure that organizational information is adequately protected once it is transmitted outside of the system. In situations where the system is unable to determine the adequacy of the protections provided by external entities, as a mitigation measure, organizations procedurally determine whether the external systems are providing adequate controls. The means used to determine the adequacy of controls provided by external systems include conducting periodic assessments (inspections/tests), establishing agreements between the organization and its counterpart organizations, or some other process. The means used by external entities to protect the information received need not be the same as those used by the organization, but the means employed are sufficient to provide consistent adjudication of the security and privacy policy to protect the information and individuals’ privacy.

Controlled release of information requires systems to implement technical or procedural means to validate the information prior to releasing it to external systems. For example, if the system passes information to a system controlled by another organization, technical means are employed to validate that the security and privacy attributes associated with the exported information are appropriate for the receiving system. Alternatively, if the system passes information to a printer in organization-controlled space, procedural means can be employed to ensure that only authorized individuals gain access to the printer.

Determine if:

- **AC-03(09)(a)** information is released outside of the system only if the receiving [Assignment: organization-defined system or system component] provides [Assignment: organization-defined controls];
- **AC-03(09)(b)** information is released outside of the system only if [Assignment: organization-defined controls] are used to validate the appropriateness of the information designated for release.

**Examine:** Access control policy; procedures addressing access enforcement; system design documentation; system configuration settings and associated documentation; list of security and privacy safeguards provided by receiving system or system components; list of security and privacy safeguards validating appropriateness of information designated for release; system audit records; results of period assessments (inspections/tests) of the external system; information sharing agreements; memoranda of understanding; acquisitions/contractual agreements; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with access enforcement responsibilities; system/network administrators; organizational personnel with information security and privacy responsibilities; organizational personnel with responsibility for acquisitions/contractual agreements; legal counsel; system developers.

**Test:** Mechanisms implementing access enforcement functions.

</details>

<a id="ac-3.10"></a>

### AC-3(10) Audited Override of Access Control Mechanisms

*Baselines: Not in a baseline*

Employ an audited override of automated access control mechanisms under [Assignment: organization-defined conditions] by [Assignment: organization-defined roles].

<details>
<summary>Discussion and assessment objectives for AC-3(10)</summary>

In certain situations, such as when there is a threat to human life or an event that threatens the organization’s ability to carry out critical missions or business functions, an override capability for access control mechanisms may be needed. Override conditions are defined by organizations and used only in those limited circumstances. Audit events are defined in AU-2 . Audit records are generated in AU-12.

Determine if an audited override of automated access control mechanisms is employed under [Assignment: organization-defined conditions] by [Assignment: organization-defined roles].

**Examine:** Access control policy; procedures addressing access enforcement; system design documentation; system configuration settings and associated documentation; conditions for employing audited override of automated access control mechanisms; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with access enforcement responsibilities; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing access enforcement functions.

</details>

<a id="ac-3.11"></a>

### AC-3(11) Restrict Access to Specific Information Types

*Baselines: Not in a baseline*

Restrict access to data repositories containing [Assignment: organization-defined information types].

<details>
<summary>Discussion and assessment objectives for AC-3(11)</summary>

Restricting access to specific information is intended to provide flexibility regarding access control of specific information types within a system. For example, role-based access could be employed to allow access to only a specific type of personally identifiable information within a database rather than allowing access to the database in its entirety. Other examples include restricting access to cryptographic keys, authentication information, and selected system information.

Determine if access to data repositories containing [Assignment: organization-defined information types] is restricted.

**Examine:** Access control policy; procedures addressing access enforcement; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with access enforcement responsibilities; organizational personnel with responsibilities for data repositories; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing access enforcement functions.

</details>

<a id="ac-3.12"></a>

### AC-3(12) Assert and Enforce Application Access

*Baselines: Not in a baseline*

- **(a)** Require applications to assert, as part of the installation process, the access needed to the following system applications and functions: [Assignment: organization-defined system applications and functions];
- **(b)** Provide an enforcement mechanism to prevent unauthorized access; and
- **(c)** Approve access changes after initial installation of the application.

<details>
<summary>Discussion and assessment objectives for AC-3(12)</summary>

Asserting and enforcing application access is intended to address applications that need to access existing system applications and functions, including user contacts, global positioning systems, cameras, keyboards, microphones, networks, phones, or other files.

Determine if:

- **AC-03(12)(a)** as part of the installation process, applications are required to assert the access needed to the following system applications and functions: [Assignment: organization-defined system applications and functions];
- **AC-03(12)(b)** an enforcement mechanism to prevent unauthorized access is provided;
- **AC-03(12)(c)** access changes after initial installation of the application are approved.

**Examine:** Access control policy; procedures addressing access enforcement; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with access enforcement responsibilities; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing access enforcement functions.

</details>

<a id="ac-3.13"></a>

### AC-3(13) Attribute-based Access Control

*Baselines: Not in a baseline*

Enforce attribute-based access control policy over defined subjects and objects and control access based upon [Assignment: organization-defined attributes].

<details>
<summary>Discussion and assessment objectives for AC-3(13)</summary>

Attribute-based access control is an access control policy that restricts system access to authorized users based on specified organizational attributes (e.g., job function, identity), action attributes (e.g., read, write, delete), environmental attributes (e.g., time of day, location), and resource attributes (e.g., classification of a document). Organizations can create rules based on attributes and the authorizations (i.e., privileges) to perform needed operations on the systems associated with organization-defined attributes and rules. When users are assigned to attributes defined in attribute-based access control policies or rules, they can be provisioned to a system with the appropriate privileges or dynamically granted access to a protected resource. Attribute-based access control can be implemented as either a mandatory or discretionary form of access control. When implemented with mandatory access controls, the requirements in AC-3(3) define the scope of the subjects and objects covered by the policy.

Determine if:

- **AC-03(13)[01]** the attribute-based access control policy is enforced over defined subjects;
- **AC-03(13)[02]** the attribute-based access control policy is enforced over defined objects;
- **AC-03(13)[03]** access is controlled based on [Assignment: organization-defined attributes].

**Examine:** Access control policy; procedures addressing access enforcement; system design documentation; system configuration settings and associated documentation; list of subjects and objects (i.e., users and resources) requiring enforcement of attribute-based access control policies; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with access enforcement responsibilities; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing access enforcement functions.

</details>

<a id="ac-3.14"></a>

### AC-3(14) Individual Access

*Baselines: Privacy*

Provide [Assignment: organization-defined mechanisms] to enable individuals to have access to the following elements of their personally identifiable information: [Assignment: organization-defined elements].

<details>
<summary>Discussion and assessment objectives for AC-3(14)</summary>

Individual access affords individuals the ability to review personally identifiable information about them held within organizational records, regardless of format. Access helps individuals to develop an understanding about how their personally identifiable information is being processed. It can also help individuals ensure that their data is accurate. Access mechanisms can include request forms and application interfaces. For federal agencies, PRIVACT processes can be located in systems of record notices and on agency websites. Access to certain types of records may not be appropriate (e.g., for federal agencies, law enforcement records within a system of records may be exempt from disclosure under the PRIVACT ) or may require certain levels of authentication assurance. Organizational personnel consult with the senior agency official for privacy and legal counsel to determine appropriate mechanisms and access rights or limitations.

Determine if [Assignment: organization-defined mechanisms] are provided to enable individuals to have access to [Assignment: organization-defined elements] of their personally identifiable information.

**Examine:** Access mechanisms (e.g., request forms and application interfaces); access control policy; procedures addressing access enforcement; system design documentation; system configuration settings and associated documentation; documentation regarding access to an individual’s personally identifiable information; system audit records; system security plan; privacy plan; privacy impact assessment; privacy assessment findings and/or reports; other relevant documents or records.

**Interview:** Organizational personnel with access enforcement responsibilities; system/network administrators; organizational personnel with information security and privacy responsibilities; legal counsel.

**Test:** Mechanisms implementing access enforcement functions; mechanisms enabling individual access to personally identifiable information.

</details>

<a id="ac-3.15"></a>

### AC-3(15) Discretionary and Mandatory Access Control

*Baselines: Not in a baseline*

- **(a)** Enforce [Assignment: organization-defined mandatory access control policy] over the set of covered subjects and objects specified in the policy; and
- **(b)** Enforce [Assignment: organization-defined discretionary access control policy] over the set of covered subjects and objects specified in the policy.

<details>
<summary>Discussion and assessment objectives for AC-3(15)</summary>

Simultaneously implementing a mandatory access control policy and a discretionary access control policy can provide additional protection against the unauthorized execution of code by users or processes acting on behalf of users. This helps prevent a single compromised user or process from compromising the entire system.

Determine if:

- **AC-03(15)(a)**
  - **AC-03(15)(a)[01]** [Assignment: organization-defined mandatory access control policy] is enforced over the set of covered subjects specified in the policy;
  - **AC-03(15)(a)[02]** [Assignment: organization-defined mandatory access control policy] is enforced over the set of covered objects specified in the policy;
- **AC-03(15)(b)**
  - **AC-03(15)(b)[01]** [Assignment: organization-defined discretionary access control policy] is enforced over the set of covered subjects specified in the policy;
  - **AC-03(15)(b)[02]** [Assignment: organization-defined discretionary access control policy] is enforced over the set of covered objects specified in the policy.

**Examine:** Access control policy; procedures addressing access enforcement; system design documentation; system configuration settings and associated documentation; list of subjects and objects (i.e., users and resources) requiring enforcement of mandatory access control policies; list of subjects and objects (i.e., users and resources) requiring enforcement of discretionary access control policies; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with access enforcement responsibilities; system/network administrators; organizational personnel with information security responsibilities; system developers.

**Test:** Mechanisms implementing mandatory and discretionary access control policy.

</details>

*Withdrawn enhancements: AC-3(1), AC-3(6).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for AC-3</summary>

Determine if approved authorizations for logical access to information and system resources are enforced in accordance with applicable access control policies.

**Examine:** Access control policy; procedures addressing access enforcement; system design documentation; system configuration settings and associated documentation; list of approved authorizations (user privileges); system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with access enforcement responsibilities; system/network administrators; organizational personnel with information security and privacy responsibilities; system developers.

**Test:** Mechanisms implementing access control policy.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

AC-3 is the enforcement half of access control: AC-2 decides who gets an account and what they are approved for, and AC-3 makes the system allow exactly that and nothing more. It applies to every layer that makes an access decision, from the operating system and database to the application and the cloud management console.

**Common implementations.** Role-based access control in the identity provider and each application, with roles mapped to the access authorizations approved under AC-2. File and database permissions granted to groups, not individuals. Cloud identity and access management policies attached to roles, with no standing wildcard permissions. Application authorization checks enforced on the server, not only in the user interface.

**Organization-defined parameters.** None in the base control.

**Evidence assessors ask for.**

- The access control policy and the role definitions for the system
- A sample of accounts compared against their approved access requests
- Screenshots or exports of permission settings for key roles, groups and cloud policies
- Test results showing a user cannot reach functions or data outside their role

**Inheritance.** The identity provider and platform permission models are often common controls, but each system owns its own roles and the mapping of roles to data, so AC-3 is usually hybrid.

**Common findings.**

- Permissions granted directly to individuals instead of through roles, so reviews miss them.
- Application roles that do not match the approved access requests.
- Cloud policies with broad wildcard permissions left over from setup.
- Authorization enforced only in the user interface, bypassable through the API.

**Enhancements in the Moderate baseline.** None. AC-3 has enhancements, but none is in the Low, Moderate or High baseline.

**Enhancements in the Privacy baseline.** [AC-3(14)](#ac-3.14) individual access: give individuals a way to see the personally identifiable information about them that the system holds. NIST's discussion names request forms and application interfaces as mechanisms, and says access to some records may not be appropriate or may require a certain level of authentication assurance, so personnel consult the senior privacy official and legal counsel on the mechanisms and any limits. Typical values, from the [Access Control policy](/templates/policies/ac/): mechanisms, a request process described in the privacy notice, with identity verification before any information is released, and a self-service page where the system offers one; elements, all personally identifiable information about the individual that the system holds, except elements a law, regulation or legal hold exempts from access, as the senior privacy official and legal counsel determine. The clause has the senior privacy official approve the mechanisms and limits, and the system owner record them in section 8 of the [privacy impact assessment](/templates/reports/privacy-impact-assessment/); describe the request process in the [privacy notice](/templates/forms/privacy-notice/). Assessors ask for the access mechanism, a sample of requests with the identity check and the response, and any refusals with their reasons. Correcting what individuals find is [SI-18(4)](/controls/si/si-18/#si-18.4).

**Federal systems** (as of October 2026). For AC-3(14), the Privacy Act requires each agency that maintains a system of records, on an individual's request, to let them review their record and have a copy made of all or any portion of it in a form comprehensible to them, accompanied by a person of their choosing on request ([5 U.S.C. § 552a(d)(1)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title5-section552a&num=0&edition=prelim)). Each system of records notice describes how individuals can learn how to gain access to their records and contest their content (§ 552a(e)(4)(H)), and the agency's Privacy Act rules set the procedures, the identity requirements and any copying fees (§ 552a(f)). Information compiled in reasonable anticipation of a civil action or proceeding is excluded (§ 552a(d)(5)), and an agency may exempt some systems of records from the access provisions by rule under subsections (j) and (k). The AC-3(14) clause's federal block carries these into the policy.
