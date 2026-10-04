---
title: 'AT-4 Training Records'
description: 'NIST SP 800-53 Rev. 5 control AT-4, Training Records: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'AT-4 Training Records'
  order: 4
control:
  id: AT-4
  family: AT
  baselines: [Low, Moderate, High, Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | None |

**Related controls:** [AT-2](/controls/at/at-2/), [AT-3](/controls/at/at-3/), [CP-3](/controls/cp/cp-3/), [IR-2](/controls/ir/ir-2/), [PM-14](/controls/pm/pm-14/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Document and monitor information security and privacy training activities, including security and privacy awareness training and specific role-based security and privacy training; and
- **b.** Retain individual training records for [Assignment: organization-defined time period].

<details>
<summary>NIST discussion</summary>

Documentation for specialized training may be maintained by individual supervisors at the discretion of the organization. The National Archives and Records Administration provides guidance on records retention for federal agencies.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for AT-4</summary>

Determine if:

- **AT-04a.**
  - **AT-04a.[01]** information security and privacy training activities, including security and privacy awareness training and specific role-based security and privacy training, are documented;
  - **AT-04a.[02]** information security and privacy training activities, including security and privacy awareness training and specific role-based security and privacy training, are monitored;
- **AT-04b.** individual training records are retained for [Assignment: organization-defined time period].

**Examine:** Security and privacy awareness and training policy; procedures addressing security and privacy training records; security and privacy awareness and training records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with information security and privacy training record retention responsibilities.

**Test:** Mechanisms supporting the management of security and privacy training records.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

AT-4 asks you to document and monitor each person's security and privacy training, covering literacy training, awareness activities and role-based training. You also keep individual training records for a set period. Monitoring is the part assessors probe: someone checks the records for overdue training and acts on it, not just keeps them.

**Common implementations.** A learning management system is the system of record. It assigns courses, sends reminders, records completions and reports overdue training. Training given outside it, such as vendor courses, conferences, instructor-led sessions, and exercises counted as training under [CP-3](/controls/cp/cp-3/) or [IR-2](/controls/ir/ir-2/), goes in the [training record log](/templates/forms/training-record-log/) or is uploaded with its certificate. Awareness activities tracked by person, such as phishing simulation results, can be recorded the same way.

NIST's AT-4 discussion lets supervisors keep the records of specialized training, at the organization's discretion. If you allow that, say in the [Security and Privacy Training Plan](/templates/plans/security-and-privacy-training-plan/) (section 7) where the records are, so they can be produced for an assessment. A monthly overdue report goes to each supervisor, and the plan sets what happens next, for example suspension of access until the training is done.

**Organization-defined parameters.** Typical values, from the [Awareness and Training policy](/templates/policies/at/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Retention period for individual training records (b) | 3 years after completion, or longer where a law, the records retention schedule or a business need requires it |

In the policy, the Chief Information Security Officer documents the training, monitors the records for overdue training and reports it to the person's supervisor. The training record log carries the same retention period.

**Evidence assessors ask for.**

- Training records for a sample of users and of people in roles that need role-based training, exported from the learning management system or the log
- Overdue training reports, and what was done about each one: reminders, supervisor notices or suspended access
- Proof of completion for training outside the learning management system, such as certificates or sign-in sheets
- The retention setting or records schedule, and records old enough to show it is followed

**Inheritance.** The learning management system and the records are usually a common control for the whole organization. A system that gives its own training, such as administrator training on its platforms, keeps those records itself or adds them to the common system.

**Common findings.**

- Records kept, but no one reviews them for overdue training.
- Training given outside the learning management system with no record at all.
- History lost when the organization moved to a new learning management system, or deleted when a person left.
- Contractor training tracked only by the contractor, with no copy the organization can produce ([PS-7](/controls/ps/ps-7/)).

**Enhancements in the Moderate baseline.** AT-4 has no enhancements. It is also in the Privacy baseline, which the privacy training records serve.

**Federal systems** (as of October 2026). NIST's AT-4 discussion points federal agencies to NARA for records retention. NARA's [General Records Schedule 2.6](https://www.archives.gov/files/records-mgmt/grs/grs02-6.pdf), Employee Training Records (Transmittal 35, May 2024), item 030, covers individual employee training records, including information system security training. It reads: "Destroy when superseded, 3 years old, or 1 year after separation, whichever comes first, but longer retention is authorized if required for business use." NARA's [General Records Schedules page](https://www.archives.gov/records-mgmt/grs) says use of the GRS is mandatory unless an agency justifies its own schedule. The typical value keeps records for 3 years after completion, which can run past the GRS period, for example after a person leaves. An agency that keeps them longer records the business need, or sets the parameter to GRS 2.6 item 030.
