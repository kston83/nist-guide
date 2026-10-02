---
title: 'AU-1 Policy and Procedures'
description: 'NIST SP 800-53 Rev. 5 control AU-1, Policy and Procedures: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'AU-1 Policy and Procedures'
  order: 1
control:
  id: AU-1
  family: AU
  baselines: [Low, Moderate, High, Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | None |

**Related controls:** [PM-9](/controls/pm/pm-9/), [PS-8](/controls/ps/ps-8/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Develop, document, and disseminate to [Assignment: organization-defined personnel or roles]:
  - **1.** [Selection (one or more): organization-level; mission/business process-level; system-level] audit and accountability policy that:
    - **(a)** Addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and
    - **(b)** Is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines; and
  - **2.** Procedures to facilitate the implementation of the audit and accountability policy and the associated audit and accountability controls;
- **b.** Designate an [Assignment: organization-defined official] to manage the development, documentation, and dissemination of the audit and accountability policy and procedures; and
- **c.** Review and update the current audit and accountability:
  - **1.** Policy [Assignment: organization-defined frequency] and following [Assignment: organization-defined events] ; and
  - **2.** Procedures [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].

<details>
<summary>NIST discussion</summary>

Audit and accountability policy and procedures address the controls in the AU family that are implemented within systems and organizations. The risk management strategy is an important factor in establishing such policies and procedures. Policies and procedures contribute to security and privacy assurance. Therefore, it is important that security and privacy programs collaborate on the development of audit and accountability policy and procedures. Security and privacy program policies and procedures at the organization level are preferable, in general, and may obviate the need for mission- or system-specific policies and procedures. The policy can be included as part of the general security and privacy policy or be represented by multiple policies that reflect the complex nature of organizations. Procedures can be established for security and privacy programs, for mission or business processes, and for systems, if needed. Procedures describe how the policies or controls are implemented and can be directed at the individual or role that is the object of the procedure. Procedures can be documented in system security and privacy plans or in one or more separate documents. Events that may precipitate an update to audit and accountability policy and procedures include assessment or audit findings, security incidents or breaches, or changes in applicable laws, executive orders, directives, regulations, policies, standards, and guidelines. Simply restating controls does not constitute an organizational policy or procedure.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for AU-1</summary>

Determine if:

- **AU-01a.**
  - **AU-01a.[01]** an audit and accountability policy is developed and documented;
  - **AU-01a.[02]** the audit and accountability policy is disseminated to [Assignment: organization-defined personnel or roles];
  - **AU-01a.[03]** audit and accountability procedures to facilitate the implementation of the audit and accountability policy and associated audit and accountability controls are developed and documented;
  - **AU-01a.[04]** the audit and accountability procedures are disseminated to [Assignment: organization-defined personnel or roles];
  - **AU-01a.01**
    - **AU-01a.01(a)**
      - **AU-01a.01(a)[01]** the [Selection (one or more): organization-level; mission/business process-level; system-level] of the audit and accountability policy addresses purpose;
      - **AU-01a.01(a)[02]** the [Selection (one or more): organization-level; mission/business process-level; system-level] of the audit and accountability policy addresses scope;
      - **AU-01a.01(a)[03]** the [Selection (one or more): organization-level; mission/business process-level; system-level] of the audit and accountability policy addresses roles;
      - **AU-01a.01(a)[04]** the [Selection (one or more): organization-level; mission/business process-level; system-level] of the audit and accountability policy addresses responsibilities;
      - **AU-01a.01(a)[05]** the [Selection (one or more): organization-level; mission/business process-level; system-level] of the audit and accountability policy addresses management commitment;
      - **AU-01a.01(a)[06]** the [Selection (one or more): organization-level; mission/business process-level; system-level] of the audit and accountability policy addresses coordination among organizational entities;
      - **AU-01a.01(a)[07]** the [Selection (one or more): organization-level; mission/business process-level; system-level] of the audit and accountability policy addresses compliance;
    - **AU-01a.01(b)** the [Selection (one or more): organization-level; mission/business process-level; system-level] of the audit and accountability policy is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines;
- **AU-01b.** the [Assignment: organization-defined official] is designated to manage the development, documentation, and dissemination of the audit and accountability policy and procedures;
- **AU-01c.**
  - **AU-01c.01**
    - **AU-01c.01[01]** the current audit and accountability policy is reviewed and updated [Assignment: organization-defined frequency];
    - **AU-01c.01[02]** the current audit and accountability policy is reviewed and updated following [Assignment: organization-defined events];
  - **AU-01c.02**
    - **AU-01c.02[01]** the current audit and accountability procedures are reviewed and updated [Assignment: organization-defined frequency];
    - **AU-01c.02[02]** the current audit and accountability procedures are reviewed and updated following [Assignment: organization-defined events].

**Examine:** Audit and accountability policy and procedures; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with audit and accountability responsibilities; organizational personnel with information security and privacy responsibilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

AU-1 asks for a written audit and accountability policy, procedures that carry it out, an official who manages both, and a set review cycle. The [Audit and Accountability policy template](/templates/policies/au/) meets the policy half through the sections every family policy shares. The procedures are yours to write.

**How the policy template meets each element.** The shared sections come before and after the policy statements, and each statement cites the AU-1 item it meets:

| AU-1 element | Where the policy template meets it |
| --- | --- |
| Policy at the selected level (a.1) | Scope: the policy applies at the level you select, to every system and every person with access |
| Purpose, scope, roles, responsibilities, management commitment, coordination and compliance (a.1(a)) | The Purpose, Scope, Roles and responsibilities, Management commitment, Coordination and Compliance sections, one for each |
| Consistent with applicable laws and guidance (a.1(b)) | Compliance: the first statement, where you list the laws, regulations and standards that apply; the federal block adds FISMA and OMB Circular A-130 |
| Procedures (a.2) | Procedures: the managing official ensures documented procedures exist |
| Dissemination of policy and procedures (a) | Dissemination: one statement for the policy and one for the procedures, each to the roles you name |
| Designated official (b) | Roles and responsibilities: the official who manages the policy and procedures |
| Review and update (c.1, c.2) | Review and update: a frequency and trigger events for the policy, and again for the procedures |

**Common implementations.** One organization-level policy, approved by a senior leader and published in the policy library. Procedures written for the work AU-2 to AU-12 describe:

- Choosing the event types each system logs, and the content of each record
- Sending logs to the central log platform, and sizing its storage
- Responding when logging fails or a log source goes silent
- Reviewing and analyzing logs, and reporting what the review finds
- Limiting who can manage logging, and protecting the logs themselves
- Keeping audit records for the retention period, and disposing of them after it

Templates for an audit logging standard and a log review procedure are planned for this family. Until they are published, the [system monitoring standard](/templates/standards/system-monitoring-standard/) covers log sources, review and retention for the monitoring platform. System-specific settings go in the [system security plan](/templates/plans/system-security-plan/).

NIST's log management guide, SP 800-92, Guide to Computer Security Log Management ([September 2006](https://csrc.nist.gov/pubs/sp/800/92/final), final), helps with planning the procedures. Its revision, SP 800-92 Rev. 1, Cybersecurity Log Management Planning Guide, is an [initial public draft](https://csrc.nist.gov/pubs/sp/800/92/r1/ipd) from October 11, 2023, with no later version as of September 2026.

**Organization-defined parameters.** The shared sections leave these as fields to fill. Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Who receives the policy (a) | Everyone within its scope, through the policy library |
| Who receives the procedures (a) | The people who carry them out, and the system owners |
| Policy level (a.1) | Organization-level |
| Official who manages the policy and procedures (b) | The Chief Information Security Officer |
| Policy review frequency (c.1) | Annually |
| Events that trigger a policy review (c.1) | Assessment or audit findings, security incidents or breaches, and changes in applicable laws, executive orders, directives, regulations, policies, standards or guidelines |
| Procedure review frequency (c.2) | Annually |
| Events that trigger a procedure review (c.2) | The same events as the policy, and changes to the systems, tools or services the procedures describe |

The trigger events follow NIST's AU-1 discussion. For AU, the people who carry out the procedures are, for example, system administrators, application developers, the security operations team and the team that runs the central log platform. The Chief Information Security Officer often delegates the day-to-day management to the security operations manager. A new log platform, a new kind of log source such as a cloud service, or a change in retention requirements is a typical procedure trigger.

**Evidence assessors ask for.**

- The approved policy, with the approver, the approval date and the version history
- The procedures, and who owns each one
- The record naming the official who manages the policy and procedures
- Records showing dissemination, including to the administrators and developers who configure logging
- Evidence of the last review of the policy and of each procedure, with the changes made

**Inheritance.** AU-1 is usually a common control, provided once for the organization. A system inherits the organization's policy and records that in its security plan. It adds its own procedures only where it logs differently, for example an application that keeps its own audit trail outside the central platform.

**Common findings.**

- A policy that restates the AU controls but has no procedures behind it. NIST's discussion of AU-1 says restating controls is not a policy or procedure.
- The policy or procedures not reviewed within the stated period, or not updated after an incident exposed a logging gap.
- Procedures that do not match the platform in use, such as a stated retention period the log platform is not set to keep.
- No evidence that the procedures reached the administrators and developers who configure logging.

**Enhancements in the Moderate baseline.** AU-1 has no enhancements.

**Federal systems** (as of September 2026). OMB [M-26-14](https://www.whitehouse.gov/wp-content/uploads/2026/05/M-26-14-Ensuring-Effective-and-Efficient-Agency-Logging-and-Network-Visibility-to-Defend-Against-Evolving-Cyber-Threats.pdf), Ensuring Effective and Efficient Agency Logging and Network Visibility to Defend Against Evolving Cyber Threats (May 22, 2026), rescinds M-21-31. Each agency submits an Agency Logging Plan to OMB and CISA within 90 days of the publication of CISA's [Logging Reference Architecture](https://www.cisa.gov/resources-tools/resources/logging-reference-architecture), which CISA published on August 20, 2026. Write the AU policy and procedures to agree with the agency's logging plan and the memo's Appendix B minimums. M-26-14 does not apply to national security systems.
