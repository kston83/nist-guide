---
title: 'IR-2 Incident Response Training'
description: 'NIST SP 800-53 Rev. 5 control IR-2, Incident Response Training: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'IR-2 Incident Response Training'
  order: 2
control:
  id: IR-2
  family: IR
  baselines: [Low, Moderate, High, Privacy]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | 3 (3 in a baseline) |

**Related controls:** [AT-2](/controls/at/at-2/), [AT-3](/controls/at/at-3/), [AT-4](/controls/at/at-4/), [CP-3](/controls/cp/cp-3/), [IR-3](/controls/ir/ir-3/), [IR-4](/controls/ir/ir-4/), [IR-8](/controls/ir/ir-8/), [IR-9](/controls/ir/ir-9/)

## Control statement

- **a.** Provide incident response training to system users consistent with assigned roles and responsibilities:
  - **1.** Within [Assignment: organization-defined time period] of assuming an incident response role or responsibility or acquiring system access;
  - **2.** When required by system changes; and
  - **3.** [Assignment: organization-defined frequency] thereafter; and
- **b.** Review and update incident response training content [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].

<details>
<summary>NIST discussion</summary>

Incident response training is associated with the assigned roles and responsibilities of organizational personnel to ensure that the appropriate content and level of detail are included in such training. For example, users may only need to know who to call or how to recognize an incident; system administrators may require additional training on how to handle incidents; and incident responders may receive more specific training on forensics, data collection techniques, reporting, system recovery, and system restoration. Incident response training includes user training in identifying and reporting suspicious activities from external and internal sources. Incident response training for users may be provided as part of AT-2 or AT-3 . Events that may precipitate an update to incident response training content include, but are not limited to, incident response plan testing or response to an actual incident (lessons learned), assessment or audit findings, or changes in applicable laws, executive orders, directives, regulations, policies, standards, and guidelines.

</details>

## Control enhancements

<a id="ir-2.1"></a>

### IR-2(1) Simulated Events

*Baselines: High*

Incorporate simulated events into incident response training to facilitate the required response by personnel in crisis situations.

<details>
<summary>Discussion and assessment objectives for IR-2(1)</summary>

Organizations establish requirements for responding to incidents in incident response plans. Incorporating simulated events into incident response training helps to ensure that personnel understand their individual responsibilities and what specific actions to take in crisis situations.

Determine if simulated events are incorporated into incident response training to facilitate the required response by personnel in crisis situations.

**Examine:** Incident response policy; procedures addressing incident response training; incident response training curriculum; incident response training materials; incident response plan; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with incident response training and operational responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Mechanisms that support and/or implement simulated events for incident response training.

</details>

<a id="ir-2.2"></a>

### IR-2(2) Automated Training Environments

*Baselines: High*

Provide an incident response training environment using [Assignment: organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for IR-2(2)</summary>

Automated mechanisms can provide a more thorough and realistic incident response training environment. This can be accomplished, for example, by providing more complete coverage of incident response issues, selecting more realistic training scenarios and environments, and stressing the response capability.

Determine if an incident response training environment is provided using [Assignment: organization-defined automated mechanisms].

**Examine:** Incident response policy; procedures addressing incident response training; incident response training curriculum; incident response training materials; automated mechanisms supporting incident response training; incident response plan; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with incident response training and operational responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Automated mechanisms that provide a thorough and realistic incident response training environment.

</details>

<a id="ir-2.3"></a>

### IR-2(3) Breach

*Baselines: Privacy*

Provide incident response training on how to identify and respond to a breach, including the organization’s process for reporting a breach.

<details>
<summary>Discussion and assessment objectives for IR-2(3)</summary>

For federal agencies, an incident that involves personally identifiable information is considered a breach. A breach results in the loss of control, compromise, unauthorized disclosure, unauthorized acquisition, or a similar occurrence where a person other than an authorized user accesses or potentially accesses personally identifiable information or an authorized user accesses or potentially accesses such information for other than authorized purposes. The incident response training emphasizes the obligation of individuals to report both confirmed and suspected breaches involving information in any medium or form, including paper, oral, and electronic. Incident response training includes tabletop exercises that simulate a breach. See IR-2(1).

Determine if:

- **IR-02(03)[01]** incident response training on how to identify and respond to a breach is provided;
- **IR-02(03)[02]** incident response training on the organization’s process for reporting a breach is provided.

**Examine:** Incident response policy; contingency planning policy; procedures addressing incident response testing; procedures addressing contingency plan testing; incident response testing material; incident response test results; incident response test plan; incident response plan; contingency plan; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with incident response training responsibilities; organizational personnel with information security and privacy responsibilities.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for IR-2</summary>

Determine if:

- **IR-02a.**
  - **IR-02a.01** incident response training is provided to system users consistent with assigned roles and responsibilities within [Assignment: organization-defined time period] of assuming an incident response role or responsibility or acquiring system access;
  - **IR-02a.02** incident response training is provided to system users consistent with assigned roles and responsibilities when required by system changes;
  - **IR-02a.03** incident response training is provided to system users consistent with assigned roles and responsibilities [Assignment: organization-defined frequency] thereafter;
- **IR-02b.**
  - **IR-02b.[01]** incident response training content is reviewed and updated [Assignment: organization-defined frequency];
  - **IR-02b.[02]** incident response training content is reviewed and updated following [Assignment: organization-defined events].

**Examine:** Incident response policy; procedures addressing incident response training; incident response training curriculum; incident response training materials; privacy plan; incident response plan; incident response training records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with incident response training and operational responsibilities; organizational personnel with information security and privacy responsibilities.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
