---
title: 'CA-5 Plan of Action and Milestones'
description: 'NIST SP 800-53 Rev. 5 control CA-5, Plan of Action and Milestones: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CA-5 Plan of Action and Milestones'
  order: 5
control:
  id: CA-5
  family: CA
  baselines: [Low, Moderate, High, Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | 1 (0 in a baseline) |

**Related controls:** [CA-2](/controls/ca/ca-2/), [CA-7](/controls/ca/ca-7/), [PM-4](/controls/pm/pm-4/), [PM-9](/controls/pm/pm-9/), [RA-7](/controls/ra/ra-7/), [SI-2](/controls/si/si-2/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Develop a plan of action and milestones for the system to document the planned remediation actions of the organization to correct weaknesses or deficiencies noted during the assessment of the controls and to reduce or eliminate known vulnerabilities in the system; and
- **b.** Update existing plan of action and milestones [Assignment: organization-defined frequency] based on the findings from control assessments, independent audits or reviews, and continuous monitoring activities.

<details>
<summary>NIST discussion</summary>

Plans of action and milestones are useful for any type of organization to track planned remedial actions. Plans of action and milestones are required in authorization packages and subject to federal reporting requirements established by OMB.

</details>

## Control enhancements

<a id="ca-5.1"></a>

### CA-5(1) Automation Support for Accuracy and Currency

*Baselines: Not in a baseline*

Ensure the accuracy, currency, and availability of the plan of action and milestones for the system using [Assignment: organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for CA-5(1)</summary>

Using automated tools helps maintain the accuracy, currency, and availability of the plan of action and milestones and facilitates the coordination and sharing of security and privacy information throughout the organization. Such coordination and information sharing help to identify systemic weaknesses or deficiencies in organizational systems and ensure that appropriate resources are directed at the most critical system vulnerabilities in a timely manner.

Determine if [Assignment: organization-defined automated mechanisms] are used to ensure the accuracy, currency, and availability of the plan of action and milestones for the system.

**Examine:** Assessment, authorization, and monitoring policy; procedures addressing plan of action and milestones; system design documentation; system configuration settings and associated documentation; system audit records; plan of action and milestones; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with plan of action and milestones development and implementation responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Automated mechanisms for developing, implementing, and maintaining a plan of action and milestones.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CA-5</summary>

Determine if:

- **CA-05a.** a plan of action and milestones for the system is developed to document the planned remediation actions of the organization to correct weaknesses or deficiencies noted during the assessment of the controls and to reduce or eliminate known vulnerabilities in the system;
- **CA-05b.** existing plan of action and milestones are updated [Assignment: organization-defined frequency] based on the findings from control assessments, independent audits or reviews, and continuous monitoring activities.

**Examine:** Assessment, authorization, and monitoring policy; procedures addressing plan of action and milestones; control assessment plan; control assessment report; control assessment evidence; plan of action and milestones; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with plan of action and milestones development and implementation responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Mechanisms for developing, implementing, and maintaining plan of action and milestones.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

The plan of action and milestones (POA&M) records every known weakness until it is fixed or formally accepted. It is the connection between assessments and remediation, and assessors read it closely because it shows whether the organization acts on what it finds.

**Common implementations.** One POA&M per system, kept in a spreadsheet or GRC tool, fed by assessment reports, vulnerability scans, audits and continuous monitoring. Each item has an owner, milestones and a scheduled completion date; changes to dates are explained. The [POA&M template](/templates/forms/plan-of-action-and-milestones/) lists the fields.

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Update frequency (b) | At least monthly, and whenever an assessment, audit, scan or monitoring activity finds a new weakness |

**Evidence assessors ask for.**

- The current POA&M and its update history
- Traceability from each "other than satisfied" finding and each unremediated scan result to a POA&M item
- Evidence for items marked completed

**Inheritance.** Each system keeps its own POA&M; weaknesses in inherited common controls belong on the provider's POA&M.

**Common findings.**

- Assessment findings or scan results missing from the POA&M.
- Scheduled completion dates moved repeatedly without explanation.
- Items closed without evidence of the fix.
