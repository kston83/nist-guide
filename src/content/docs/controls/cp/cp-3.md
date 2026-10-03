---
title: 'CP-3 Contingency Training'
description: 'NIST SP 800-53 Rev. 5 control CP-3, Contingency Training: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CP-3 Contingency Training'
  order: 3
control:
  id: CP-3
  family: CP
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 2 (1 in a baseline) |

**Related controls:** [AT-2](/controls/at/at-2/), [AT-3](/controls/at/at-3/), [AT-4](/controls/at/at-4/), [CP-2](/controls/cp/cp-2/), [CP-4](/controls/cp/cp-4/), [CP-8](/controls/cp/cp-8/), [IR-2](/controls/ir/ir-2/), [IR-4](/controls/ir/ir-4/), [IR-9](/controls/ir/ir-9/)

## Control statement

- **a.** Provide contingency training to system users consistent with assigned roles and responsibilities:
  - **1.** Within [Assignment: organization-defined time period] of assuming a contingency role or responsibility;
  - **2.** When required by system changes; and
  - **3.** [Assignment: organization-defined frequency] thereafter; and
- **b.** Review and update contingency training content [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].

<details>
<summary>NIST discussion</summary>

Contingency training provided by organizations is linked to the assigned roles and responsibilities of organizational personnel to ensure that the appropriate content and level of detail is included in such training. For example, some individuals may only need to know when and where to report for duty during contingency operations and if normal duties are affected; system administrators may require additional training on how to establish systems at alternate processing and storage sites; and organizational officials may receive more specific training on how to conduct mission-essential functions in designated off-site locations and how to establish communications with other governmental entities for purposes of coordination on contingency-related activities. Training for contingency roles or responsibilities reflects the specific continuity requirements in the contingency plan. Events that may precipitate an update to contingency training content include, but are not limited to, contingency plan testing or an actual contingency (lessons learned), assessment or audit findings, security incidents or breaches, or changes in laws, executive orders, directives, regulations, policies, standards, and guidelines. At the discretion of the organization, participation in a contingency plan test or exercise, including lessons learned sessions subsequent to the test or exercise, may satisfy contingency plan training requirements.

</details>

## Control enhancements

<a id="cp-3.1"></a>

### CP-3(1) Simulated Events

*Baselines: High*

Incorporate simulated events into contingency training to facilitate effective response by personnel in crisis situations.

<details>
<summary>Discussion and assessment objectives for CP-3(1)</summary>

The use of simulated events creates an environment for personnel to experience actual threat events, including cyber-attacks that disable websites, ransomware attacks that encrypt organizational data on servers, hurricanes that damage or destroy organizational facilities, or hardware or software failures.

Determine if simulated events are incorporated into contingency training to facilitate effective response by personnel in crisis situations.

**Examine:** Contingency planning policy; procedures addressing contingency training; contingency plan; contingency training curriculum; contingency training material; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency planning, plan implementation, and training responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for contingency training; mechanisms for simulating contingency events.

</details>

<a id="cp-3.2"></a>

### CP-3(2) Mechanisms Used in Training Environments

*Baselines: Not in a baseline*

Employ mechanisms used in operations to provide a more thorough and realistic contingency training environment.

<details>
<summary>Discussion and assessment objectives for CP-3(2)</summary>

Operational mechanisms refer to processes that have been established to accomplish an organizational goal or a system that supports a particular organizational mission or business objective. Actual mission and business processes, systems, and/or facilities may be used to generate simulated events and enhance the realism of simulated events during contingency training.

Determine if mechanisms used in operations are employed to provide a more thorough and realistic contingency training environment.

**Examine:** Contingency planning policy; procedures addressing contingency training; contingency plan; contingency training curriculum; contingency training material; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency planning, plan implementation, and training responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for contingency training; mechanisms for providing contingency training environments.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CP-3</summary>

Determine if:

- **CP-03a.**
  - **CP-03a.01** contingency training is provided to system users consistent with assigned roles and responsibilities within [Assignment: organization-defined time period] of assuming a contingency role or responsibility;
  - **CP-03a.02** contingency training is provided to system users consistent with assigned roles and responsibilities when required by system changes;
  - **CP-03a.03** contingency training is provided to system users consistent with assigned roles and responsibilities [Assignment: organization-defined frequency] thereafter;
- **CP-03b.**
  - **CP-03b.[01]** the contingency plan training content is reviewed and updated [Assignment: organization-defined frequency];
  - **CP-03b.[02]** the contingency plan training content is reviewed and updated following [Assignment: organization-defined events].

**Examine:** Contingency planning policy; procedures addressing contingency training; contingency plan; contingency training curriculum; contingency training material; contingency training records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency planning, plan implementation, and training responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for contingency training.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

CP-3 asks you to train the people with a role in the contingency plan for that role: when they take it on, when system changes require it, and at a set interval after that. You also review and update the training content on a schedule and after set events. NIST's CP-3 discussion scales the content to the role. Some people only need to know when and where to report during contingency operations. System administrators need to know how to set up systems at the alternate sites, and officials how to carry out essential functions from another location. CP-3 is in the Low, Moderate and High baselines.

[NIST SP 800-34 Rev. 1](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final) (May 2010, updated November 11, 2010; current as of October 2026), section 3.5.2, says training should be provided at least annually, and soon after someone is newly appointed to a plan role. Its goal is that recovery personnel can do their jobs without the plan in hand, because the plan may be unavailable in the first hours of a disruption. It lists what to cover: the plan's purpose, cross-team coordination and communication, reporting procedures, security requirements, team-specific processes, and individual responsibilities in each of the three phases (activation and notification, recovery, reconstitution).

**Common implementations.** A short briefing for each plan role, given by the contingency plan coordinator when someone joins the contingency team and repeated each year. It walks through the [contingency plan](/templates/plans/contingency-plan/): the roles table in section 2.3, the activation criteria and notification steps in section 3, and the person's own recovery procedures in Appendix C or D. Administrators also practice their recovery steps, for example restoring a server or database from backup. List the course in section 5 (role-based training) of the [Security and Privacy Training Plan](/templates/plans/security-and-privacy-training-plan/), and record completions in the learning management system or the [training record log](/templates/forms/training-record-log/).

NIST's discussion lets the organization count taking part in a contingency plan test or exercise, including its lessons-learned session, as training. Many programs schedule the annual training just before the annual test (CP-4), so people learn their role and then practice it. Users with no contingency role need only know where to get instructions, which literacy training ([AT-2](/controls/at/at-2/)) can cover.

**Organization-defined parameters.** Typical values, from the [Contingency Planning policy](/templates/policies/cp/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Time to train after assuming a contingency role (a.1) | 30 days |
| Refresher frequency (a.3) | Annually |
| Content review frequency (b) | Annually |
| Events that trigger a content review (b) | A change to the contingency plan, and lessons learned from a test or an actual contingency event |

The trigger events follow NIST's discussion, which names contingency plan testing and actual contingencies. In the policy, the system owner provides the training. The values match the incident response training in [IR-2](/controls/ir/ir-2/) (30 days, then annually), so one training cycle can cover both where the same people hold both roles.

**Evidence assessors ask for.**

- The training material for each contingency role, with the date it was last reviewed and what changed
- The list of people with contingency roles, from the plan's roles table and contact list, with their training dates
- Records showing new members were trained within 30 days of joining the contingency team
- Records of the annual refresher, or of exercise participation where the organization counts it as training
- Evidence that content was updated after a plan change or after the lessons learned from a test

**Inheritance.** CP-3 is usually system-specific, because the training follows each system's plan and roles. An organization can provide a common course on the contingency program, and each system adds its own role briefings. Where a cloud provider runs recovery, the provider trains its own staff, and the system trains only the roles it keeps. Record the split in the [system security plan](/templates/plans/system-security-plan/).

**Common findings.**

- No training records for the people named in the contingency plan, or names in the plan who have left.
- Training that covers the plan in general but not each person's own recovery steps.
- Content never updated after the plan changed, for example after a move to a new backup service or alternate site.
- Exercise participation counted as training, but no attendance list to show who took part.

**Enhancements in the Moderate baseline.** None. High adds [CP-3(1)](#cp-3.1) simulated events: training that puts people through realistic events, which NIST's discussion illustrates with cyber-attacks that disable websites, ransomware that encrypts data on servers, hurricanes that damage facilities, and hardware or software failures. [CP-3(2)](#cp-3.2) mechanisms used in training environments is in no baseline.

**Federal systems** (as of October 2026). FEMA's [Federal Continuity Directive: Federal Executive Branch Continuity Program Management Requirements](https://www.fema.gov/sites/default/files/documents/fema_oncp_fcd-federal-executive-branch-continuity-program-management-requirements.pdf) (August 2024), section 7.1.3, requires annual training on roles and responsibilities for all continuity personnel assigned to activate, support or sustain essential function operations. That training must include the use of continuity capabilities such as alternate sites and access to backup records, and the communications and IT system planning that supports continuity operations. Where a system supports the agency's essential functions, align its contingency training with the agency's continuity training so the two do not conflict.
