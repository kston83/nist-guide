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
