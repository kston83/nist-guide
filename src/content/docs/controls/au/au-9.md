---
title: 'AU-9 Protection of Audit Information'
description: 'NIST SP 800-53 Rev. 5 control AU-9, Protection of Audit Information: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'AU-9 Protection of Audit Information'
  order: 9
control:
  id: AU-9
  family: AU
  baselines: [Low, Moderate, High]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | System | 7 (3 in a baseline) |

**Related controls:** [AC-3](/controls/ac/ac-3/), [AC-6](/controls/ac/ac-6/), [AU-6](/controls/au/au-6/), [AU-11](/controls/au/au-11/), [AU-14](/controls/au/au-14/), AU-15, [MP-2](/controls/mp/mp-2/), [MP-4](/controls/mp/mp-4/), [PE-2](/controls/pe/pe-2/), [PE-3](/controls/pe/pe-3/), [PE-6](/controls/pe/pe-6/), [SA-8](/controls/sa/sa-8/), [SC-8](/controls/sc/sc-8/), [SI-4](/controls/si/si-4/)

## Control statement

- **a.** Protect audit information and audit logging tools from unauthorized access, modification, and deletion; and
- **b.** Alert [Assignment: organization-defined personnel or roles] upon detection of unauthorized access, modification, or deletion of audit information.

<details>
<summary>NIST discussion</summary>

Audit information includes all information needed to successfully audit system activity, such as audit records, audit log settings, audit reports, and personally identifiable information. Audit logging tools are those programs and devices used to conduct system audit and logging activities. Protection of audit information focuses on technical protection and limits the ability to access and execute audit logging tools to authorized individuals. Physical protection of audit information is addressed by both media protection controls and physical and environmental protection controls.

</details>

## Control enhancements

<a id="au-9.1"></a>

### AU-9(1) Hardware Write-once Media

*Baselines: Not in a baseline*

Write audit trails to hardware-enforced, write-once media.

<details>
<summary>Discussion and assessment objectives for AU-9(1)</summary>

Writing audit trails to hardware-enforced, write-once media applies to the initial generation of audit trails (i.e., the collection of audit records that represents the information to be used for detection, analysis, and reporting purposes) and to the backup of those audit trails. Writing audit trails to hardware-enforced, write-once media does not apply to the initial generation of audit records prior to being written to an audit trail. Write-once, read-many (WORM) media includes Compact Disc-Recordable (CD-R), Blu-Ray Disc Recordable (BD-R), and Digital Versatile Disc-Recordable (DVD-R). In contrast, the use of switchable write-protection media, such as tape cartridges, Universal Serial Bus (USB) drives, Compact Disc Re-Writeable (CD-RW), and Digital Versatile Disc-Read Write (DVD-RW) results in write-protected but not write-once media.

Determine if audit trails are written to hardware-enforced, write-once media.

**Examine:** Audit and accountability policy; system security plan; privacy plan; access control policy and procedures; procedures addressing protection of audit information; system design documentation; system hardware settings; system configuration settings and associated documentation; system storage media; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with audit and accountability responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators; system developers.

**Test:** System media storing audit trails.

</details>

<a id="au-9.2"></a>

### AU-9(2) Store on Separate Physical Systems or Components

*Baselines: High*

Store audit records [Assignment: organization-defined frequency] in a repository that is part of a physically different system or system component than the system or component being audited.

<details>
<summary>Discussion and assessment objectives for AU-9(2)</summary>

Storing audit records in a repository separate from the audited system or system component helps to ensure that a compromise of the system being audited does not also result in a compromise of the audit records. Storing audit records on separate physical systems or components also preserves the confidentiality and integrity of audit records and facilitates the management of audit records as an organization-wide activity. Storing audit records on separate systems or components applies to initial generation as well as backup or long-term storage of audit records.

Determine if audit records are stored [Assignment: organization-defined frequency] in a repository that is part of a physically different system or system component than the system or component being audited.

**Examine:** Audit and accountability policy; system security plan; privacy plan; procedures addressing protection of audit information; system design documentation; system configuration settings and associated documentation; system or media storing backups of system audit records; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with audit and accountability responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators; system developers.

**Test:** Mechanisms implementing the backing up of audit records.

</details>

<a id="au-9.3"></a>

### AU-9(3) Cryptographic Protection

*Baselines: High*

Implement cryptographic mechanisms to protect the integrity of audit information and audit tools.

<details>
<summary>Discussion and assessment objectives for AU-9(3)</summary>

Cryptographic mechanisms used for protecting the integrity of audit information include signed hash functions using asymmetric cryptography. This enables the distribution of the public key to verify the hash information while maintaining the confidentiality of the secret key used to generate the hash.

Determine if cryptographic mechanisms to protect the integrity of audit information and audit tools are implemented.

**Examine:** Audit and accountability policy; system security plan; privacy plan; access control policy and procedures; procedures addressing protection of audit information; system design documentation; system hardware settings; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with audit and accountability responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators; system developers.

**Test:** Cryptographic mechanisms protecting the integrity of audit information and tools.

</details>

<a id="au-9.4"></a>

### AU-9(4) Access by Subset of Privileged Users

*Baselines: Moderate, High*

Authorize access to management of audit logging functionality to only [Assignment: organization-defined subset of privileged users or roles].

<details>
<summary>Discussion and assessment objectives for AU-9(4)</summary>

Individuals or roles with privileged access to a system and who are also the subject of an audit by that system may affect the reliability of the audit information by inhibiting audit activities or modifying audit records. Requiring privileged access to be further defined between audit-related privileges and other privileges limits the number of users or roles with audit-related privileges.

Determine if access to management of audit logging functionality is authorized only to [Assignment: organization-defined subset of privileged users or roles].

**Examine:** Audit and accountability policy; system security plan; privacy plan; access control policy and procedures; procedures addressing protection of audit information; system design documentation; system configuration settings and associated documentation; system-generated list of privileged users with access to management of audit functionality; access authorizations; access control list; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with audit and accountability responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators.

**Test:** Mechanisms managing access to audit functionality.

</details>

<a id="au-9.5"></a>

### AU-9(5) Dual Authorization

*Baselines: Not in a baseline*

Enforce dual authorization for [Selection (one or more): movement; deletion] of [Assignment: organization-defined audit information].

<details>
<summary>Discussion and assessment objectives for AU-9(5)</summary>

Organizations may choose different selection options for different types of audit information. Dual authorization mechanisms (also known as two-person control) require the approval of two authorized individuals to execute audit functions. To reduce the risk of collusion, organizations consider rotating dual authorization duties to other individuals. Organizations do not require dual authorization mechanisms when immediate responses are necessary to ensure public and environmental safety.

Determine if dual authorization is enforced for the [Selection (one or more): movement; deletion] of [Assignment: organization-defined audit information].

**Examine:** Audit and accountability policy; system security plan; privacy plan; access control policy and procedures; procedures addressing protection of audit information; system design documentation; system configuration settings and associated documentation; access authorizations; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with audit and accountability responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators.

**Test:** Mechanisms implementing the enforcement of dual authorization.

</details>

<a id="au-9.6"></a>

### AU-9(6) Read-only Access

*Baselines: Not in a baseline*

Authorize read-only access to audit information to [Assignment: organization-defined subset of privileged users or roles].

<details>
<summary>Discussion and assessment objectives for AU-9(6)</summary>

Restricting privileged user or role authorizations to read-only helps to limit the potential damage to organizations that could be initiated by such users or roles, such as deleting audit records to cover up malicious activity.

Determine if read-only access to audit information is authorized to [Assignment: organization-defined subset of privileged users or roles].

**Examine:** Audit and accountability policy; system security plan; privacy plan; access control policy and procedures; procedures addressing protection of audit information; system design documentation; system configuration settings and associated documentation; system-generated list of privileged users with read-only access to audit information; access authorizations; access control list; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with audit and accountability responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators.

**Test:** Mechanisms managing access to audit information.

</details>

<a id="au-9.7"></a>

### AU-9(7) Store on Component with Different Operating System

*Baselines: Not in a baseline*

Store audit information on a component running a different operating system than the system or component being audited.

<details>
<summary>Discussion and assessment objectives for AU-9(7)</summary>

Storing auditing information on a system component running a different operating system reduces the risk of a vulnerability specific to the system, resulting in a compromise of the audit records.

Determine if audit information is stored on a component running a different operating system than the system or component being audited.

**Examine:** Audit and accountability policy; system security plan; privacy plan; access control policy and procedures; procedures addressing protection of audit information; system design documentation; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with audit and accountability responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators.

**Test:** Mechanisms implementing operating system verification capability; mechanisms verifying audit information storage location.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for AU-9</summary>

Determine if:

- **AU-09a.** audit information and audit logging tools are protected from unauthorized access, modification, and deletion;
- **AU-09b.** [Assignment: organization-defined personnel or roles] are alerted upon detection of unauthorized access, modification, or deletion of audit information.

**Examine:** Audit and accountability policy; system security plan; privacy plan; access control policy and procedures; procedures addressing protection of audit information; system design documentation; system configuration settings and associated documentation; system audit records; audit tools; other relevant documents or records.

**Interview:** Organizational personnel with audit and accountability responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators; system developers.

**Test:** Mechanisms implementing audit information protection.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
