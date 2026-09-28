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
