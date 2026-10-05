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
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | 4 (1 in a baseline) |

**Related controls:** [AC-3](/controls/ac/ac-3/), [AC-17](/controls/ac/ac-17/), [AC-22](/controls/ac/ac-22/), [AT-2](/controls/at/at-2/), [AT-4](/controls/at/at-4/), [CP-3](/controls/cp/cp-3/), [IR-2](/controls/ir/ir-2/), [IR-4](/controls/ir/ir-4/), [IR-7](/controls/ir/ir-7/), [IR-9](/controls/ir/ir-9/), [PL-4](/controls/pl/pl-4/), [PM-13](/controls/pm/pm-13/), [PM-23](/controls/pm/pm-23/), [PS-7](/controls/ps/ps-7/), [PS-9](/controls/ps/ps-9/), [SA-3](/controls/sa/sa-3/), [SA-8](/controls/sa/sa-8/), [SA-11](/controls/sa/sa-11/), [SA-16](/controls/sa/sa-16/), [SR-5](/controls/sr/sr-5/), [SR-6](/controls/sr/sr-6/), [SR-11](/controls/sr/sr-11/)

## Control statement

- **a.** Provide role-based security and privacy training to personnel with the following roles and responsibilities: [Assignment: organization-defined roles and responsibilities]:
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
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

AT-3 asks for training shaped to the people with security and privacy roles. They get it before they are authorized to access the system or information or to perform their duties, when system changes require it, and at a set interval. You also update the content on a schedule and after set events, and feed in lessons learned from incidents and breaches. Literacy training ([AT-2](/controls/at/at-2/)) is what every user learns; AT-3 adds what each role needs on top.

NIST's AT-3 discussion lists roles that may need it, among them senior leaders, system owners, authorizing officials, system security and privacy officers, and acquisition officials. It adds architects and engineers, software developers, administrators, auditors and control assessors, and staff with configuration management duties. Staff with contingency planning, incident response or privacy duties, and anyone with access to personally identifiable information, are on the list too. The discussion also says role-based training applies to contractors who provide services to federal agencies.

**Common implementations.** A table in section 5 of the [Security and Privacy Training Plan](/templates/plans/security-and-privacy-training-plan/) lists each role, its courses, their source and the hours. Build the role list from position descriptions ([PS-9](/controls/ps/ps-9/)), so the human resources office knows who holds which role. The NICE Workforce Framework for Cybersecurity ([SP 800-181 Rev. 1](https://csrc.nist.gov/pubs/sp/800/181/r1/final), November 2020, with its components on the [NICE Framework Resource Center](https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center/nice-framework-current-versions)) describes work roles and the knowledge and skills each needs. It is a useful starting point for the course list.

Typical content by role:

- Administrators: secure configuration of the platforms they run, privileged account use, and the change process
- Developers: secure coding and the organization's development security requirements
- Authorizing officials and system owners: the RMF, their own decisions in it, and how to read an assessment report
- Privacy staff and people who handle personally identifiable information: the privacy requirements that apply and how to handle requests and breaches
- Control assessors: the assessment procedures in SP 800-53A and the organization's evidence standards

Incident response training ([IR-2](/controls/ir/ir-2/)) and contingency training ([CP-3](/controls/cp/cp-3/)) are role-based training too; list them in the same plan so one record shows a person's whole training load. The learning management system assigns the courses when the human resources office records a role change. The [access request form](/templates/forms/access-request-form/) has a line for role-based training, so the account manager checks it before granting privileged access.

**Organization-defined parameters.** Typical values, from the [Awareness and Training policy](/templates/policies/at/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Roles that receive role-based security training (a) | System administrators, developers, security staff, incident responders, system owners and authorizing officials |
| Roles that receive role-based privacy training (a) | Staff who handle personally identifiable information as part of their duties, the privacy office, and owners of systems that process it |
| Refresher frequency after initial training (a.1) | Annually |
| Content update frequency (b) | Annually |
| Events that trigger a content update (b) | A significant incident, a change in a role's tools or duties, or a new legal or policy requirement |

In the policy, the Chief Information Security Officer provides the role-based security training and the senior privacy official the role-based privacy training. Both update the content. The refresher and update cycles match AT-2's, so one annual cycle covers both.

**Evidence assessors ask for.**

- The list of roles that need role-based training, with the courses for each (section 5 of the training plan)
- The people in those roles, for example from position descriptions or the system's privileged groups
- Completion records for a sample of them, dated before privileged access was granted or duties began
- Refresher records for the last cycle, including contractors in those roles
- The date of the last content review, and an example of content changed after an incident or breach

**Inheritance.** The organization usually provides the courses, the learning management system and the records as common controls. The system still names its own roles and adds training specific to it, such as administration of its platforms, so AT-3 is often a hybrid control.

**Common findings.**

- Privileged users with no role-based training, or training completed after access was granted.
- Role-based training that is only the annual awareness course again.
- Contractor administrators and developers missing from the records.
- No list linking roles to people, so no one can show that everyone in a role is trained.
- Authorizing officials and system owners left out, though NIST's discussion names both.

**Enhancements in the Moderate baseline.** None. [AT-3(1)](#at-3.1) environmental controls, [AT-3(2)](#at-3.2) physical security controls and [AT-3(3)](#at-3.3) practical exercises are in no baseline.

**Enhancements in the Privacy baseline.** [AT-3(5)](#at-3.5) processing personally identifiable information: initial and refresher training for named personnel in how to use and operate the controls for processing personally identifiable information and for transparency. NIST's discussion says the training covers the authority to process personally identifiable information. That authority is documented in privacy notices, system of records notices, computer matching agreements, privacy impact assessments, Privacy Act statements, contracts and information sharing agreements. Typical values, from the policy: personnel who design, operate or manage systems or processes that handle personally identifiable information, and the privacy office; refresher training annually. The senior privacy official provides it, covering the controls in the [PII Processing and Transparency policy](/templates/policies/pt/), the [privacy notice](/templates/forms/privacy-notice/) and the [privacy impact assessment](/templates/reports/privacy-impact-assessment/). Assessors ask for the curriculum, the list of people who must take it, and their completion records.

**Federal systems** (as of October 2026). OPM's [5 CFR 930.301](https://www.ecfr.gov/current/title-5/chapter-I/subchapter-B/part-930/subpart-C/section-930.301)(a) requires agencies to identify employees with significant information security responsibilities and give them role-specific training in accordance with NIST standards and guidance. Paragraphs (a)(2) to (a)(5) set the training for executives, program and functional managers, security staff such as system and network administrators, and IT management and operations staff. Paragraph (c) leaves the refresher frequency to the agency, based on the sensitivity of the information; annually is the typical value here. Paragraph (d) requires training when the system environment or procedures change significantly, or when an employee enters a position that needs more role-specific training. [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.h(5), requires role-based security and privacy training for employees and contractors with those roles, including managers, before they are authorized to access federal information or systems or to perform their duties.
