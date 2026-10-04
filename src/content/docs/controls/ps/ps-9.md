---
title: 'PS-9 Position Descriptions'
description: 'NIST SP 800-53 Rev. 5 control PS-9, Position Descriptions: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PS-9 Position Descriptions'
  order: 9
control:
  id: PS-9
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

## Control statement

Incorporate security and privacy roles and responsibilities into organizational position descriptions.

<details>
<summary>NIST discussion</summary>

Specification of security and privacy roles in individual organizational position descriptions facilitates clarity in understanding the security or privacy responsibilities associated with the roles and the role-based security and privacy training requirements for the roles.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PS-9</summary>

Determine if:

- **PS-09[01]** security roles and responsibilities are incorporated into organizational position descriptions;
- **PS-09[02]** privacy roles and responsibilities are incorporated into organizational position descriptions.

**Examine:** Personnel security policy; personnel security procedures; procedures addressing position descriptions; security and privacy position descriptions; system security plan; privacy plan; privacy program plan; other relevant documents or records.

**Interview:** Organizational personnel with personnel security responsibilities; organizational personnel with information security and privacy responsibilities; organizational personnel with human capital management responsibilities.

**Test:** Organizational processes for managing position descriptions.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PS-9 asks you to write security and privacy roles and responsibilities into position descriptions. NIST's PS-9 discussion gives two reasons: people understand the duties of their role, and the role-based training each role needs becomes clear ([AT-3](/controls/at/at-3/)).

**Common implementations.** The human resources office keeps a standard paragraph that goes in every position description: follow the security and privacy policies and the [Rules of Behavior](/templates/forms/rules-of-behavior/), protect information, and report incidents. Positions with security or privacy roles get those duties written in, for example system administrators, system security officers, developers, privacy officers and system owners. The same role names appear in section 5 of the [Security and Privacy Training Plan](/templates/plans/security-and-privacy-training-plan/), so the human resources office can tell the training team who needs which course. For contractor staff, the statement of work or labor category descriptions carry the same duties.

**Organization-defined parameters.** PS-9 has none. In the [Personnel Security policy](/templates/policies/ps/), the human resources office incorporates security and privacy roles and responsibilities into position descriptions.

**Evidence assessors ask for.**

- The standard security and privacy paragraph used in position descriptions
- Position descriptions for a sample of security and privacy roles, such as a system administrator and a system security officer, showing those duties
- A match between the roles in position descriptions and the roles in the training plan

**Inheritance.** PS-9 is a common control, provided by the human resources office. Systems inherit it.

**Common findings.**

- Administrators whose position descriptions say nothing about security.
- System security officer duties held as a collateral duty that no position description records.
- Only the general paragraph, with no role-specific duties.

**Enhancements in the Moderate baseline.** PS-9 has no enhancements.

**Federal systems** (as of October 2026). OPM's [5 CFR 930.301](https://www.ecfr.gov/current/title-5/chapter-I/subchapter-B/part-930/subpart-C/section-930.301)(a) requires agencies to identify employees with significant information security responsibilities and give them role-specific training. Security duties written into position descriptions are a ready way to identify those employees.
