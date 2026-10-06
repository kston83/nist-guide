---
title: 'AU-3 Content of Audit Records'
description: 'NIST SP 800-53 Rev. 5 control AU-3, Content of Audit Records: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'AU-3 Content of Audit Records'
  order: 3
control:
  id: AU-3
  family: AU
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | System | 2 (2 in a baseline) |

**Related controls:** [AU-2](/controls/au/au-2/), [AU-8](/controls/au/au-8/), [AU-12](/controls/au/au-12/), [AU-14](/controls/au/au-14/), [MA-4](/controls/ma/ma-4/), [PL-9](/controls/pl/pl-9/), [SA-8](/controls/sa/sa-8/), [SI-7](/controls/si/si-7/), [SI-11](/controls/si/si-11/)

## Control statement

Ensure that audit records contain information that establishes the following:

- **a.** What type of event occurred;
- **b.** When the event occurred;
- **c.** Where the event occurred;
- **d.** Source of the event;
- **e.** Outcome of the event; and
- **f.** Identity of any individuals, subjects, or objects/entities associated with the event.

<details>
<summary>NIST discussion</summary>

Audit record content that may be necessary to support the auditing function includes event descriptions (item a), time stamps (item b), source and destination addresses (item c), user or process identifiers (items d and f), success or fail indications (item e), and filenames involved (items a, c, e, and f) . Event outcomes include indicators of event success or failure and event-specific results, such as the system security and privacy posture after the event occurred. Organizations consider how audit records can reveal information about individuals that may give rise to privacy risks and how best to mitigate such risks. For example, there is the potential to reveal personally identifiable information in the audit trail, especially if the trail records inputs or is based on patterns or time of usage.

</details>

## Control enhancements

<a id="au-3.1"></a>

### AU-3(1) Additional Audit Information

*Baselines: Moderate, High*

Generate audit records containing the following additional information: [Assignment: organization-defined additional information].

<details>
<summary>Discussion and assessment objectives for AU-3(1)</summary>

The ability to add information generated in audit records is dependent on system functionality to configure the audit record content. Organizations may consider additional information in audit records including, but not limited to, access control or flow control rules invoked and individual identities of group account users. Organizations may also consider limiting additional audit record information to only information that is explicitly needed for audit requirements. This facilitates the use of audit trails and audit logs by not including information in audit records that could potentially be misleading, make it more difficult to locate information of interest, or increase the risk to individuals' privacy.

Determine if generated audit records contain the following [Assignment: organization-defined additional information].

**Examine:** Audit and accountability policy; procedures addressing content of audit records; system security plan; privacy plan; system design documentation; system configuration settings and associated documentation; list of organization-defined auditable events; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with audit and accountability responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators; system developers.

**Test:** system audit capability.

</details>

<a id="au-3.3"></a>

### AU-3(3) Limit Personally Identifiable Information Elements

*Baselines: Privacy*

Limit personally identifiable information contained in audit records to the following elements identified in the privacy risk assessment: [Assignment: organization-defined elements].

<details>
<summary>Discussion and assessment objectives for AU-3(3)</summary>

Limiting personally identifiable information in audit records when such information is not needed for operational purposes helps reduce the level of privacy risk created by a system.

Determine if personally identifiable information contained in audit records is limited to [Assignment: organization-defined elements] identified in the privacy risk assessment.

**Examine:** Audit and accountability policy; system security plan; privacy plan; privacy risk assessment; privacy risk assessment results; procedures addressing content of audit records; system design documentation; system configuration settings and associated documentation; list of organization-defined auditable events; system audit records; third party contracts; other relevant documents or records.

**Interview:** Organizational personnel with audit and accountability responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators; system developers.

**Test:** system audit capability.

</details>

*Withdrawn enhancements: AU-3(2).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for AU-3</summary>

Determine if:

- **AU-03a.** audit records contain information that establishes what type of event occurred;
- **AU-03b.** audit records contain information that establishes when the event occurred;
- **AU-03c.** audit records contain information that establishes where the event occurred;
- **AU-03d.** audit records contain information that establishes the source of the event;
- **AU-03e.** audit records contain information that establishes the outcome of the event;
- **AU-03f.** audit records contain information that establishes the identity of any individuals, subjects, or objects/entities associated with the event.

**Examine:** Audit and accountability policy; system security plan; privacy plan; procedures addressing content of audit records; system design documentation; system configuration settings and associated documentation; list of organization-defined auditable events; system audit records; system incident reports; other relevant documents or records.

**Interview:** Organizational personnel with audit and accountability responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators.

**Test:** Mechanisms implementing system auditing of auditable events.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

AU-3 sets the minimum content of every audit record: what happened, when, where, from what source, with what outcome, and who or what was involved. NIST's AU-3 discussion gives examples for each item: event descriptions, time stamps, source and destination addresses, user or process identifiers, success or failure indications, and file names. Assessors test it by pulling records from a sample of components and checking each item is there.

**Common implementations.** Operating systems, databases and network devices record most of these items once logging is turned on. Applications are where the gaps are, so an application logging standard sets structured records (for example JSON) with named fields for the event type, a UTC time stamp, the host, the source address, the user or service identity and the outcome. The central log platform parses each source into the same field names, which is what makes searching by field under [AU-7(1)](/controls/au/au-7/) work. The event types themselves are chosen under [AU-2](/controls/au/au-2/), and [AU-12](/controls/au/au-12/) makes each component generate them. Section 4 of the [audit logging standard](/templates/standards/audit-logging-standard/) template sets the fields for each AU-3 item.

**Organization-defined parameters.** AU-3 has none. Typical value for its Moderate enhancement, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Additional information in audit records (AU-3(1)) | Session and request identifiers, source and destination addresses, and the full command line for privileged commands |

In the [Audit and Accountability policy](/templates/policies/au/), the system owner ensures the system's audit records contain the AU-3 items and the AU-3(1) information.

**Evidence assessors ask for.**

- The logging configuration or application logging standard that sets record content
- Sample records from each type of component, showing all six AU-3 items
- Sample records showing the AU-3(1) information, such as session identifiers and the command line of a privileged command
- The field mapping the log platform uses to parse each source

**Inheritance.** Record content for a cloud provider's control plane or a managed platform is inherited from the provider, as far as its logs go. Content for operating systems and network devices often comes from common configuration baselines. The system owns the content of its own application records, so AU-3 is usually a hybrid control.

**Common findings.**

- Application records that show a shared service account instead of the person who acted, or leave out the outcome.
- Time stamps with no time zone or offset, so records from different components cannot be put in order ([AU-8](/controls/au/au-8/)).
- Passwords, session tokens or personal data written into records, often through full command lines or request bodies. Mask them before the record is stored.
- Records that the log platform stores as unparsed text, so the items are present but cannot be searched.

**Enhancements in the Moderate baseline.** [AU-3(1)](#au-3.1) additional audit information, which is also in High. NIST's AU-3(1) discussion suggests access control or flow control rules invoked and the individual identities of group account users. It also suggests limiting the additional information to what audit needs, since extra content can mislead, hide what matters and add privacy risk.

**Enhancements in the Privacy baseline.** [AU-3(3)](#au-3.3) limit personally identifiable information elements, for systems that process personally identifiable information. NIST's discussion says limiting such information in audit records, when it is not needed for operational purposes, reduces the privacy risk the system creates. Its parameter is the elements allowed, which the privacy risk assessment identifies. Typical value, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Personally identifiable information elements allowed in audit records (AU-3(3)) | The account identifier, the source address and device, and the identifiers of records accessed, not their contents |

In the [Audit and Accountability policy](/templates/policies/au/) (Privacy baseline), the system owner limits the elements, the privacy official reviews them with the system owner, and request bodies, form inputs and query strings are masked or left out unless the [privacy impact assessment](/templates/reports/privacy-impact-assessment/) lists them as needed. Section 5 of the [audit logging standard](/templates/standards/audit-logging-standard/) sets the masking, and its Part B lists the elements each log source writes. Limiting personal information never removes the identity of the person who acted (AU-3f). Assessors examine the privacy risk assessment and its results, the logging configuration, and sample audit records, checking that the records hold only the listed elements; logs that capture full requests or form fields are the usual finding.

**Federal systems** (as of September 2026). OMB [M-26-14](https://www.whitehouse.gov/wp-content/uploads/2026/05/M-26-14-Ensuring-Effective-and-Efficient-Agency-Logging-and-Network-Visibility-to-Defend-Against-Evolving-Cyber-Threats.pdf) (May 22, 2026), Appendix B item 5, requires agencies to collect logs that support, among other activities, determining the identity used for operations, and source and destination network addresses with protocols, ports and session attributes. Check that the AU-3 content and the AU-3(1) value cover them; protocols and ports usually come from network device and flow logs. The [system monitoring standard](/templates/standards/system-monitoring-standard/) carries the full list in its federal block. M-26-14 does not apply to national security systems.
