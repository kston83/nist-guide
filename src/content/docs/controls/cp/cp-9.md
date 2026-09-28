---
title: 'CP-9 System Backup'
description: 'NIST SP 800-53 Rev. 5 control CP-9, System Backup: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CP-9 System Backup'
  order: 9
control:
  id: CP-9
  family: CP
  baselines: [Low, Moderate, High]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 7 (5 in a baseline) |

**Related controls:** [CP-2](/controls/cp/cp-2/), [CP-6](/controls/cp/cp-6/), [CP-10](/controls/cp/cp-10/), [MP-4](/controls/mp/mp-4/), [MP-5](/controls/mp/mp-5/), [SC-8](/controls/sc/sc-8/), [SC-12](/controls/sc/sc-12/), [SC-13](/controls/sc/sc-13/), [SI-4](/controls/si/si-4/), [SI-13](/controls/si/si-13/)

## Control statement

- **a.** Conduct backups of user-level information contained in [Assignment: organization-defined system components] [Assignment: organization-defined frequency];
- **b.** Conduct backups of system-level information contained in the system [Assignment: organization-defined frequency];
- **c.** Conduct backups of system documentation, including security- and privacy-related documentation [Assignment: organization-defined frequency] ; and
- **d.** Protect the confidentiality, integrity, and availability of backup information.

<details>
<summary>NIST discussion</summary>

System-level information includes system state information, operating system software, middleware, application software, and licenses. User-level information includes information other than system-level information. Mechanisms employed to protect the integrity of system backups include digital signatures and cryptographic hashes. Protection of system backup information while in transit is addressed by MP-5 and SC-8 . System backups reflect the requirements in contingency plans as well as other organizational requirements for backing up information. Organizations may be subject to laws, executive orders, directives, regulations, or policies with requirements regarding specific categories of information (e.g., personal health information). Organizational personnel consult with the senior agency official for privacy and legal counsel regarding such requirements.

</details>

## Control enhancements

<a id="cp-9.1"></a>

### CP-9(1) Testing for Reliability and Integrity

*Baselines: Moderate, High*

Test backup information [Assignment: organization-defined organization-defined frequency] to verify media reliability and information integrity.

<details>
<summary>Discussion and assessment objectives for CP-9(1)</summary>

Organizations need assurance that backup information can be reliably retrieved. Reliability pertains to the systems and system components where the backup information is stored, the operations used to retrieve the information, and the integrity of the information being retrieved. Independent and specialized tests can be used for each of the aspects of reliability. For example, decrypting and transporting (or transmitting) a random sample of backup files from the alternate storage or backup site and comparing the information to the same information at the primary processing site can provide such assurance.

Determine if:

- **CP-09(01)[01]** backup information is tested [Assignment: organization-defined frequency] to verify media reliability;
- **CP-09(01)[02]** backup information is tested [Assignment: organization-defined frequency] to verify information integrity.

**Examine:** Contingency planning policy; procedures addressing system backup; contingency plan; system backup test results; contingency plan test documentation; contingency plan test results; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system backup responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for conducting system backups; mechanisms supporting and/or implementing system backups.

</details>

<a id="cp-9.2"></a>

### CP-9(2) Test Restoration Using Sampling

*Baselines: High*

Use a sample of backup information in the restoration of selected system functions as part of contingency plan testing.

<details>
<summary>Discussion and assessment objectives for CP-9(2)</summary>

Organizations need assurance that system functions can be restored correctly and can support established organizational missions. To ensure that the selected system functions are thoroughly exercised during contingency plan testing, a sample of backup information is retrieved to determine whether the functions are operating as intended. Organizations can determine the sample size for the functions and backup information based on the level of assurance needed.

Determine if a sample of backup information in the restoration of selected system functions is used as part of contingency plan testing.

**Examine:** Contingency planning policy; procedures addressing system backup; contingency plan; system backup test results; contingency plan test documentation; contingency plan test results; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system backup responsibilities; organizational personnel with contingency planning/contingency plan testing responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for conducting system backups; mechanisms supporting and/or implementing system backups.

</details>

<a id="cp-9.3"></a>

### CP-9(3) Separate Storage for Critical Information

*Baselines: High*

Store backup copies of [Assignment: organization-defined critical system software and other security-related information] in a separate facility or in a fire rated container that is not collocated with the operational system.

<details>
<summary>Discussion and assessment objectives for CP-9(3)</summary>

Separate storage for critical information applies to all critical information regardless of the type of backup storage media. Critical system software includes operating systems, middleware, cryptographic key management systems, and intrusion detection systems. Security-related information includes inventories of system hardware, software, and firmware components. Alternate storage sites, including geographically distributed architectures, serve as separate storage facilities for organizations. Organizations may provide separate storage by implementing automated backup processes at alternative storage sites (e.g., data centers). The General Services Administration (GSA) establishes standards and specifications for security and fire rated containers.

Determine if backup copies of [Assignment: organization-defined critical system software and other security-related information] are stored in a separate facility or in a fire rated container that is not collocated with the operational system.

**Examine:** Contingency planning policy; procedures addressing system backup; contingency plan; backup storage location(s); system backup configurations and associated documentation; system backup logs or records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency planning and plan implementation responsibilities; organizational personnel with system backup responsibilities; organizational personnel with information security responsibilities.

</details>

<a id="cp-9.5"></a>

### CP-9(5) Transfer to Alternate Storage Site

*Baselines: High*

Transfer system backup information to the alternate storage site [Assignment: organization-defined organization-defined time period and transfer rate consistent with the recovery time and recovery point objectives].

<details>
<summary>Discussion and assessment objectives for CP-9(5)</summary>

System backup information can be transferred to alternate storage sites either electronically or by the physical shipment of storage media.

Determine if:

- **CP-09(05)[01]** system backup information is transferred to the alternate storage site for [Assignment: organization-defined time period];
- **CP-09(05)[02]** system backup information is transferred to the alternate storage site [Assignment: organization-defined transfer rate].

**Examine:** Contingency planning policy; procedures addressing system backup; contingency plan; system backup logs or records; evidence of system backup information transferred to alternate storage site; alternate storage site agreements; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system backup responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for transferring system backups to the alternate storage site; mechanisms supporting and/or implementing system backups; mechanisms supporting and/or implementing information transfer to the alternate storage site.

</details>

<a id="cp-9.6"></a>

### CP-9(6) Redundant Secondary System

*Baselines: Not in a baseline*

Conduct system backup by maintaining a redundant secondary system that is not collocated with the primary system and that can be activated without loss of information or disruption to operations.

<details>
<summary>Discussion and assessment objectives for CP-9(6)</summary>

The effect of system backup can be achieved by maintaining a redundant secondary system that mirrors the primary system, including the replication of information. If this type of redundancy is in place and there is sufficient geographic separation between the two systems, the secondary system can also serve as the alternate processing site.

Determine if:

- **CP-09(06)[01]** system backup is conducted by maintaining a redundant secondary system that is not collocated with the primary system;
- **CP-09(06)[02]** system backup is conducted by maintaining a redundant secondary system that can be activated without loss of information or disruption to operations.

**Examine:** Contingency planning policy; procedures addressing system backup; contingency plan; system backup test results; contingency plan test results; contingency plan test documentation; redundant secondary system for system backups; location(s) of redundant secondary backup system(s); system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system backup responsibilities; organizational personnel with information security responsibilities; organizational personnel with responsibility for the redundant secondary system.

**Test:** Organizational processes for maintaining redundant secondary systems; mechanisms supporting and/or implementing system backups; mechanisms supporting and/or implementing information transfer to a redundant secondary system.

</details>

<a id="cp-9.7"></a>

### CP-9(7) Dual Authorization for Deletion or Destruction

*Baselines: Not in a baseline*

Enforce dual authorization for the deletion or destruction of [Assignment: organization-defined backup information].

<details>
<summary>Discussion and assessment objectives for CP-9(7)</summary>

Dual authorization ensures that deletion or destruction of backup information cannot occur unless two qualified individuals carry out the task. Individuals deleting or destroying backup information possess the skills or expertise to determine if the proposed deletion or destruction of information reflects organizational policies and procedures. Dual authorization may also be known as two-person control. To reduce the risk of collusion, organizations consider rotating dual authorization duties to other individuals.

Determine if dual authorization for the deletion or destruction of [Assignment: organization-defined backup information] is enforced.

**Examine:** Contingency planning policy; procedures addressing system backup; contingency plan; system design documentation; system configuration settings and associated documentation; system generated list of dual authorization credentials or rules; logs or records of deletion or destruction of backup information; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system backup responsibilities; organizational personnel with information security responsibilities.

**Test:** Mechanisms supporting and/or implementing dual authorization; mechanisms supporting and/or implementing the deletion/destruction of backup information.

</details>

<a id="cp-9.8"></a>

### CP-9(8) Cryptographic Protection

*Baselines: Moderate, High*

Implement cryptographic mechanisms to prevent unauthorized disclosure and modification of [Assignment: organization-defined backup information].

<details>
<summary>Discussion and assessment objectives for CP-9(8)</summary>

The selection of cryptographic mechanisms is based on the need to protect the confidentiality and integrity of backup information. The strength of mechanisms selected is commensurate with the security category or classification of the information. Cryptographic protection applies to system backup information in storage at both primary and alternate locations. Organizations that implement cryptographic mechanisms to protect information at rest also consider cryptographic key management solutions.

Determine if cryptographic mechanisms are implemented to prevent unauthorized disclosure and modification of [Assignment: organization-defined backup information].

**Examine:** Contingency planning policy; procedures addressing system backup; contingency plan; system design documentation; system configuration settings and associated documentation; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system backup responsibilities; organizational personnel with information security responsibilities.

**Test:** Mechanisms supporting and/or implementing cryptographic protection of backup information.

</details>

*Withdrawn enhancements: CP-9(4).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CP-9</summary>

Determine if:

- **CP-09a.** backups of user-level information contained in [Assignment: organization-defined system components] are conducted [Assignment: organization-defined frequency];
- **CP-09b.** backups of system-level information contained in the system are conducted [Assignment: organization-defined frequency];
- **CP-09c.** backups of system documentation, including security- and privacy-related documentation are conducted [Assignment: organization-defined frequency];
- **CP-09d.**
  - **CP-09d.[01]** the confidentiality of backup information is protected;
  - **CP-09d.[02]** the integrity of backup information is protected;
  - **CP-09d.[03]** the availability of backup information is protected.

**Examine:** Contingency planning policy; procedures addressing system backup; contingency plan; backup storage location(s); system backup logs or records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with system backup responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for conducting system backups; mechanisms supporting and/or implementing system backups.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
