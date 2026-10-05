---
title: 'PS-8 Personnel Sanctions'
description: 'NIST SP 800-53 Rev. 5 control PS-8, Personnel Sanctions: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PS-8 Personnel Sanctions'
  order: 8
control:
  id: PS-8
  family: PS
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | None |

**Related controls:** [PL-4](/controls/pl/pl-4/), [PM-12](/controls/pm/pm-12/), [PS-6](/controls/ps/ps-6/), [PT-1](/controls/pt/pt-1/)

## Control statement

- **a.** Employ a formal sanctions process for individuals failing to comply with established information security and privacy policies and procedures; and
- **b.** Notify [Assignment: organization-defined personnel or roles] within [Assignment: organization-defined time period] when a formal employee sanctions process is initiated, identifying the individual sanctioned and the reason for the sanction.

<details>
<summary>NIST discussion</summary>

Organizational sanctions reflect applicable laws, executive orders, directives, regulations, policies, standards, and guidelines. Sanctions processes are described in access agreements and can be included as part of general personnel policies for organizations and/or specified in security and privacy policies. Organizations consult with the Office of the General Counsel regarding matters of employee sanctions.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PS-8</summary>

Determine if:

- **PS-08a.** a formal sanctions process is employed for individuals failing to comply with established information security and privacy policies and procedures;
- **PS-08b.** [Assignment: organization-defined personnel or roles] is/are notified within [Assignment: organization-defined time period] when a formal employee sanctions process is initiated, identifying the individual sanctioned and the reason for the sanction.

**Examine:** Personnel security policy; personnel security procedures; procedures addressing personnel sanctions; access agreements (including non-disclosure agreements, acceptable use agreements, rules of behavior, and conflict-of-interest agreements); list of personnel or roles to be notified of formal employee sanctions; records or notifications of formal employee sanctions; system security plan; privacy plan; personally identifiable information processing policy; other relevant documents or records.

**Interview:** Organizational personnel with personnel security responsibilities; legal counsel; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for managing formal employee sanctions; mechanisms supporting and/or implementing formal employee sanctions notifications.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PS-8 asks for a formal sanctions process for people who do not comply with information security and privacy policies and procedures. When a formal employee sanctions process starts, set roles are notified within a set time, with who was sanctioned and why. NIST's PS-8 discussion says sanctions are described in access agreements, and can be part of general personnel policies or set out in security and privacy policies. It advises consulting the general counsel on sanctions matters.

**Common implementations.** The human resources disciplinary process handles the sanction; the security policy makes security and privacy violations subject to it and names who is told. The shared Compliance section of every family policy says violations are handled through the sanctions process. The [access agreement](/templates/forms/access-agreement/) and the [Rules of Behavior](/templates/forms/rules-of-behavior/) both state the consequences, so people know them before they sign. Sanctions are graduated to the violation, for example retraining, loss of access, a written warning, or termination. For contractor staff, the usual remedy is through the contract, such as removing the person from the work.

**Organization-defined parameters.** Typical values, from the [Personnel Security policy](/templates/policies/ps/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Who is notified when a sanctions process starts (b) | The Chief Information Security Officer, and the senior privacy official when the violation concerns privacy |
| Time to notify (b) | 2 business days |

In the policy, the human resources office runs the sanctions process and sends the notice.

**Evidence assessors ask for.**

- The documented sanctions process, and where security and privacy violations enter it
- The consequences stated in the access agreement and the Rules of Behavior
- Notices of sanctions to the security and privacy officials, with their dates, for a sample (assessors accept redacted records)
- An example of a violation found by monitoring or an incident that led to a sanction

**Inheritance.** PS-8 is a common control, provided once for the organization by the human resources office. Systems inherit it.

**Common findings.**

- A disciplinary process with no stated link to security and privacy violations.
- No notice to the security or privacy official when a sanction starts, so access is not reviewed.
- Violations found by monitoring that never reach the sanctions process.
- Contractor staff left outside any process.

**Enhancements in the Moderate baseline.** PS-8 has no enhancements.

**Federal systems** (as of October 2026). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 3.b(9), requires agencies to implement policies and procedures to ensure all personnel are held accountable for complying with agency-wide information security and privacy requirements and policies. Section 4.h(6) requires the rules of behavior to include the consequences of violating them.
