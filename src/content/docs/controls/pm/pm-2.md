---
title: 'PM-2 Information Security Program Leadership Role'
description: 'NIST SP 800-53 Rev. 5 control PM-2, Information Security Program Leadership Role: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PM-2 Information Security Program Leadership Role'
  order: 2
control:
  id: PM-2
  family: PM
  baselines: []
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Not in a baseline | Organization | None |

## Control statement

Appoint a senior agency information security officer with the mission and resources to coordinate, develop, implement, and maintain an organization-wide information security program.

<details>
<summary>NIST discussion</summary>

The senior agency information security officer is an organizational official. For federal agencies (as defined by applicable laws, executive orders, regulations, directives, policies, and standards), this official is the senior agency information security officer. Organizations may also refer to this official as the senior information security officer or chief information security officer.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PM-2</summary>

Determine if:

- **PM-02[01]** a senior agency information security officer is appointed;
- **PM-02[02]** the senior agency information security officer is provided with the mission and resources to coordinate an organization-wide information security program;
- **PM-02[03]** the senior agency information security officer is provided with the mission and resources to develop an organization-wide information security program;
- **PM-02[04]** the senior agency information security officer is provided with the mission and resources to implement an organization-wide information security program;
- **PM-02[05]** the senior agency information security officer is provided with the mission and resources to maintain an organization-wide information security program.

**Examine:** Information security program plan; procedures addressing program plan development and implementation; procedures addressing program plan reviews and updates; procedures addressing coordination of the program plan with relevant entities; other relevant documents or records.

**Interview:** Organizational personnel with information security program planning and plan implementation responsibilities; senior information security officer; organizational personnel with information security responsibilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PM-2 asks for one senior official who owns the information security program, with the mission and resources to coordinate, develop, implement and maintain it. NIST's PM-2 discussion says federal agencies call this official the senior agency information security officer; other organizations may say senior information security officer or Chief Information Security Officer. Assessors look for the appointment in writing and for proof the role has authority, staff and budget, not just a title.

**Common implementations.** The head of the organization signs an appointment memo or charter naming the Chief Information Security Officer. The charter states the mission and authority, for example to issue security policy, require remediation, and report risk directly to the senior leader. The position description makes security the primary duty. The [Information Security Program Plan](/templates/plans/information-security-program-plan/) names the role in section 3 and shows its staff and budget in section 4.

The [Program Management policy](/templates/policies/pm/) has the senior leader appoint the Chief Information Security Officer, record the appointment in writing, and provide the mission and resources the role needs.

**Organization-defined parameters.** PM-2 has none. The choices the PM-2 clause makes, typical values your organization may set differently:

| Choice | Typical value |
| --- | --- |
| Who appoints the official | The senior leader (the head of the organization) |
| How the appointment is recorded | A signed appointment memo or charter, kept with the program plan |
| Title of the official | Chief Information Security Officer |

**Evidence assessors ask for.**

- The signed appointment memo or charter, naming the current holder of the role
- The position description, showing security as the primary duty
- An organization chart showing the role's reporting line
- The program's staffing and budget (section 4 of the program plan)
- An interview with the official about the program and its resources

**Inheritance.** PM-2 is implemented once, for the whole organization, and every system relies on it. System security plans name the Chief Information Security Officer but do not implement PM-2 themselves.

**Common findings.**

- An appointment memo that names the person who held the role before.
- Security as a collateral duty of an IT operations manager, with no staff or budget of its own.
- A title with no written mission or authority, so the official cannot require remediation.
- No written appointment at all; the role exists only on the organization chart.

**Enhancements.** PM-2 has no enhancements.

**Federal systems** (as of October 2026). FISMA has the agency head delegate to the Chief Information Officer the authority to ensure compliance, including designating a senior agency information security officer ([44 U.S.C. § 3554(a)(3)(A)](https://www.govinfo.gov/link/uscode/44/3554?link-type=html)). That official carries out the Chief Information Officer's responsibilities under the section, has the professional qualifications the functions require, has information security duties as the primary duty, and heads an office "with the mission and resources to assist in ensuring agency compliance." [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), main body section 5.f(2)(a), has agencies ensure the Chief Information Officer designates this official to develop and maintain an agency-wide information security program in accordance with FISMA. The PM-2 clause's federal block makes the Chief Information Security Officer that official.
