---
title: 'AT-3 Role-based Training'
description: 'NIST SP 800-53 Rev. 5 control AT-3, Role-based Training: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'AT-3 Role-based Training'
  order: 3
control:
  id: AT-3
  family: AT
  baselines: [Low, Moderate, High, Privacy]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | 4 (1 in a baseline) |

**Related controls:** [AC-3](/controls/ac/ac-3/), [AC-17](/controls/ac/ac-17/), [AC-22](/controls/ac/ac-22/), [AT-2](/controls/at/at-2/), [AT-4](/controls/at/at-4/), [CP-3](/controls/cp/cp-3/), [IR-2](/controls/ir/ir-2/), [IR-4](/controls/ir/ir-4/), [IR-7](/controls/ir/ir-7/), [IR-9](/controls/ir/ir-9/), [PL-4](/controls/pl/pl-4/), [PM-13](/controls/pm/pm-13/), [PM-23](/controls/pm/pm-23/), [PS-7](/controls/ps/ps-7/), [PS-9](/controls/ps/ps-9/), [SA-3](/controls/sa/sa-3/), [SA-8](/controls/sa/sa-8/), [SA-11](/controls/sa/sa-11/), [SA-16](/controls/sa/sa-16/), [SR-5](/controls/sr/sr-5/), [SR-6](/controls/sr/sr-6/), [SR-11](/controls/sr/sr-11/)

## Control statement

- **a.** Provide role-based security and privacy training to personnel with the following roles and responsibilities: [Assignment: organization-defined organization-defined roles and responsibilities]:
  - **1.** Before authorizing access to the system, information, or performing assigned duties, and [Assignment: organization-defined frequency] thereafter; and
  - **2.** When required by system changes;
- **b.** Update role-based training content [Assignment: organization-defined frequency] and following [Assignment: organization-defined events] ; and
- **c.** Incorporate lessons learned from internal or external security incidents or breaches into role-based training.

<details>
<summary>NIST discussion</summary>

Organizations determine the content of training based on the assigned roles and responsibilities of individuals as well as the security and privacy requirements of organizations and the systems to which personnel have authorized access, including technical training specifically tailored for assigned duties. Roles that may require role-based training include senior leaders or management officials (e.g., head of agency/chief executive officer, chief information officer, senior accountable official for risk management, senior agency information security officer, senior agency official for privacy), system owners; authorizing officials; system security officers; privacy officers; acquisition and procurement officials; enterprise architects; systems engineers; software developers; systems security engineers; privacy engineers; system, network, and database administrators; auditors; personnel conducting configuration management activities; personnel performing verification and validation activities; personnel with access to system-level software; control assessors; personnel with contingency planning and incident response duties; personnel with privacy management responsibilities; and personnel with access to personally identifiable information.

Comprehensive role-based training addresses management, operational, and technical roles and responsibilities covering physical, personnel, and technical controls. Role-based training also includes policies, procedures, tools, methods, and artifacts for the security and privacy roles defined. Organizations provide the training necessary for individuals to fulfill their responsibilities related to operations and supply chain risk management within the context of organizational security and privacy programs. Role-based training also applies to contractors who provide services to federal agencies. Types of training include web-based and computer-based training, classroom-style training, and hands-on training (including micro-training). Updating role-based training on a regular basis helps to ensure that the content remains relevant and effective. Events that may precipitate an update to role-based training content include, but are not limited to, assessment or audit findings, security incidents or breaches, or changes in applicable laws, executive orders, directives, regulations, policies, standards, and guidelines.

</details>

## Control enhancements

<a id="at-3.1"></a>

### AT-3(1) Environmental Controls

*Baselines: Not in a baseline*

Provide [Assignment: organization-defined personnel or roles] with initial and [Assignment: organization-defined frequency] training in the employment and operation of environmental controls.

<details>
<summary>Discussion and assessment objectives for AT-3(1)</summary>

Environmental controls include fire suppression and detection devices or systems, sprinkler systems, handheld fire extinguishers, fixed fire hoses, smoke detectors, temperature or humidity, heating, ventilation, air conditioning, and power within the facility.

Determine if [Assignment: organization-defined personnel or roles] are provided with initial and refresher training [Assignment: organization-defined frequency] in the employment and operation of environmental controls.

**Examine:** Security and privacy awareness and training policy; procedures addressing security and privacy training implementation; security and privacy training curriculum; security and privacy training materials; system security plan; privacy plan; training records; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for role-based security and privacy training; organizational personnel with responsibilities for employing and operating environmental controls.

</details>

<a id="at-3.2"></a>

### AT-3(2) Physical Security Controls

*Baselines: Not in a baseline*

Provide [Assignment: organization-defined personnel or roles] with initial and [Assignment: organization-defined frequency] training in the employment and operation of physical security controls.

<details>
<summary>Discussion and assessment objectives for AT-3(2)</summary>

Physical security controls include physical access control devices, physical intrusion and detection alarms, operating procedures for facility security guards, and monitoring or surveillance equipment.

Determine if [Assignment: organization-defined personnel or roles] is/are provided with initial and refresher training [Assignment: organization-defined frequency] in the employment and operation of physical security controls.

**Examine:** Security and privacy awareness and training policy; procedures addressing security and privacy training implementation; security and privacy training curriculum; security and privacy training materials; system security plan; privacy plan; training records; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for role-based security and privacy training; organizational personnel with responsibilities for employing and operating physical security controls.

</details>

<a id="at-3.3"></a>

### AT-3(3) Practical Exercises

*Baselines: Not in a baseline*

Provide practical exercises in security and privacy training that reinforce training objectives.

<details>
<summary>Discussion and assessment objectives for AT-3(3)</summary>

Practical exercises for security include training for software developers that addresses simulated attacks that exploit common software vulnerabilities or spear or whale phishing attacks targeted at senior leaders or executives. Practical exercises for privacy include modules with quizzes on identifying and processing personally identifiable information in various scenarios or scenarios on conducting privacy impact assessments.

Determine if:

- **AT-03(03)[01]** practical exercises in security training that reinforce training objectives are provided;
- **AT-03(03)[02]** practical exercises in privacy training that reinforce training objectives are provided.

**Examine:** Security and privacy awareness and training policy; procedures addressing security and privacy awareness training implementation; security and privacy awareness training curriculum; security and privacy awareness training materials; security and privacy awareness training reports and results; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for role-based security and privacy training; organizational personnel who participate in security and privacy awareness training.

</details>

<a id="at-3.5"></a>

### AT-3(5) Processing Personally Identifiable Information

*Baselines: Privacy*

Provide [Assignment: organization-defined personnel or roles] with initial and [Assignment: organization-defined frequency] training in the employment and operation of personally identifiable information processing and transparency controls.

<details>
<summary>Discussion and assessment objectives for AT-3(5)</summary>

Personally identifiable information processing and transparency controls include the organization’s authority to process personally identifiable information and personally identifiable information processing purposes. Role-based training for federal agencies addresses the types of information that may constitute personally identifiable information and the risks, considerations, and obligations associated with its processing. Such training also considers the authority to process personally identifiable information documented in privacy policies and notices, system of records notices, computer matching agreements and notices, privacy impact assessments, PRIVACT statements, contracts, information sharing agreements, memoranda of understanding, and/or other documentation.

Determine if [Assignment: organization-defined personnel or roles] are provided with initial and refresher training [Assignment: organization-defined frequency] in the employment and operation of personally identifiable information processing and transparency controls.

**Examine:** Security and privacy awareness and training policy; procedures addressing security and privacy awareness training implementation; security and privacy awareness training curriculum; security and privacy awareness training materials; system security plan; privacy plan; organizational privacy notices; organizational policies; system of records notices; Privacy Act statements; computer matching agreements and notices; privacy impact assessments; information sharing agreements; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for role-based security and privacy training; organizational personnel who participate in security and privacy awareness training.

</details>

*Withdrawn enhancements: AT-3(4).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for AT-3</summary>

Determine if:

- **AT-03a.**
  - **AT-03a.01**
    - **AT-03a.01[01]** role-based security training is provided to [Assignment: organization-defined roles and responsibilities] before authorizing access to the system, information, or performing assigned duties;
    - **AT-03a.01[02]** role-based privacy training is provided to [Assignment: organization-defined roles and responsibilities] before authorizing access to the system, information, or performing assigned duties;
    - **AT-03a.01[03]** role-based security training is provided to [Assignment: organization-defined roles and responsibilities] [Assignment: organization-defined frequency] thereafter;
    - **AT-03a.01[04]** role-based privacy training is provided to [Assignment: organization-defined roles and responsibilities] [Assignment: organization-defined frequency] thereafter;
  - **AT-03a.02**
    - **AT-03a.02[01]** role-based security training is provided to personnel with assigned security roles and responsibilities when required by system changes;
    - **AT-03a.02[02]** role-based privacy training is provided to personnel with assigned security roles and responsibilities when required by system changes;
- **AT-03b.**
  - **AT-03b.[01]** role-based training content is updated [Assignment: organization-defined frequency];
  - **AT-03b.[02]** role-based training content is updated following [Assignment: organization-defined events];
- **AT-03c.** lessons learned from internal or external security incidents or breaches are incorporated into role-based training.

**Examine:** System security plan; privacy plan; security and privacy awareness and training policy; procedures addressing security and privacy training implementation; codes of federal regulations; security and privacy training curriculum; security and privacy training materials; training records; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for role-based security and privacy training; organizational personnel with assigned system security and privacy roles and responsibilities.

**Test:** Mechanisms managing role-based security and privacy training.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
