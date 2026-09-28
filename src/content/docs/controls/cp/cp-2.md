---
title: 'CP-2 Contingency Plan'
description: 'NIST SP 800-53 Rev. 5 control CP-2, Contingency Plan: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CP-2 Contingency Plan'
  order: 2
control:
  id: CP-2
  family: CP
  baselines: [Low, Moderate, High]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 7 (5 in a baseline) |

**Related controls:** [CP-3](/controls/cp/cp-3/), [CP-4](/controls/cp/cp-4/), [CP-6](/controls/cp/cp-6/), [CP-7](/controls/cp/cp-7/), [CP-8](/controls/cp/cp-8/), [CP-9](/controls/cp/cp-9/), [CP-10](/controls/cp/cp-10/), [CP-11](/controls/cp/cp-11/), [CP-13](/controls/cp/cp-13/), [IR-4](/controls/ir/ir-4/), [IR-6](/controls/ir/ir-6/), [IR-8](/controls/ir/ir-8/), [IR-9](/controls/ir/ir-9/), [MA-6](/controls/ma/ma-6/), [MP-2](/controls/mp/mp-2/), [MP-4](/controls/mp/mp-4/), [MP-5](/controls/mp/mp-5/), [PL-2](/controls/pl/pl-2/), [PM-8](/controls/pm/pm-8/), [PM-11](/controls/pm/pm-11/), [SA-15](/controls/sa/sa-15/), [SA-20](/controls/sa/sa-20/), [SC-7](/controls/sc/sc-7/), [SC-23](/controls/sc/sc-23/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Develop a contingency plan for the system that:
  - **1.** Identifies essential mission and business functions and associated contingency requirements;
  - **2.** Provides recovery objectives, restoration priorities, and metrics;
  - **3.** Addresses contingency roles, responsibilities, assigned individuals with contact information;
  - **4.** Addresses maintaining essential mission and business functions despite a system disruption, compromise, or failure;
  - **5.** Addresses eventual, full system restoration without deterioration of the controls originally planned and implemented;
  - **6.** Addresses the sharing of contingency information; and
  - **7.** Is reviewed and approved by [Assignment: organization-defined personnel or roles];
- **b.** Distribute copies of the contingency plan to [Assignment: organization-defined key contingency personnel (identified by name and/or by role) and organizational elements];
- **c.** Coordinate contingency planning activities with incident handling activities;
- **d.** Review the contingency plan for the system [Assignment: organization-defined frequency];
- **e.** Update the contingency plan to address changes to the organization, system, or environment of operation and problems encountered during contingency plan implementation, execution, or testing;
- **f.** Communicate contingency plan changes to [Assignment: organization-defined key contingency personnel (identified by name and/or by role) and organizational elements];
- **g.** Incorporate lessons learned from contingency plan testing, training, or actual contingency activities into contingency testing and training; and
- **h.** Protect the contingency plan from unauthorized disclosure and modification.

<details>
<summary>NIST discussion</summary>

Contingency planning for systems is part of an overall program for achieving continuity of operations for organizational mission and business functions. Contingency planning addresses system restoration and implementation of alternative mission or business processes when systems are compromised or breached. Contingency planning is considered throughout the system development life cycle and is a fundamental part of the system design. Systems can be designed for redundancy, to provide backup capabilities, and for resilience. Contingency plans reflect the degree of restoration required for organizational systems since not all systems need to fully recover to achieve the level of continuity of operations desired. System recovery objectives reflect applicable laws, executive orders, directives, regulations, policies, standards, guidelines, organizational risk tolerance, and system impact level.

Actions addressed in contingency plans include orderly system degradation, system shutdown, fallback to a manual mode, alternate information flows, and operating in modes reserved for when systems are under attack. By coordinating contingency planning with incident handling activities, organizations ensure that the necessary planning activities are in place and activated in the event of an incident. Organizations consider whether continuity of operations during an incident conflicts with the capability to automatically disable the system, as specified in IR-4(5) . Incident response planning is part of contingency planning for organizations and is addressed in the IR (Incident Response) family.

</details>

## Control enhancements

<a id="cp-2.1"></a>

### CP-2(1) Coordinate with Related Plans

*Baselines: Moderate, High*

Coordinate contingency plan development with organizational elements responsible for related plans.

<details>
<summary>Discussion and assessment objectives for CP-2(1)</summary>

Plans that are related to contingency plans include Business Continuity Plans, Disaster Recovery Plans, Critical Infrastructure Plans, Continuity of Operations Plans, Crisis Communications Plans, Insider Threat Implementation Plans, Data Breach Response Plans, Cyber Incident Response Plans, Breach Response Plans, and Occupant Emergency Plans.

Determine if contingency plan development is coordinated with organizational elements responsible for related plans.

**Examine:** Contingency planning policy; procedures addressing contingency operations for the system; contingency plan; business contingency plans; disaster recovery plans; continuity of operations plans; crisis communications plans; critical infrastructure plans; cyber incident response plan; insider threat implementation plans; occupant emergency plans; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency planning and plan implementation responsibilities; organizational personnel with information security responsibilities; personnel with responsibility for related plans.

</details>

<a id="cp-2.2"></a>

### CP-2(2) Capacity Planning

*Baselines: High*

Conduct capacity planning so that necessary capacity for information processing, telecommunications, and environmental support exists during contingency operations.

<details>
<summary>Discussion and assessment objectives for CP-2(2)</summary>

Capacity planning is needed because different threats can result in a reduction of the available processing, telecommunications, and support services intended to support essential mission and business functions. Organizations anticipate degraded operations during contingency operations and factor the degradation into capacity planning. For capacity planning, environmental support refers to any environmental factor for which the organization determines that it needs to provide support in a contingency situation, even if in a degraded state. Such determinations are based on an organizational assessment of risk, system categorization (impact level), and organizational risk tolerance.

Determine if:

- **CP-02(02)[01]** capacity planning is conducted so that the necessary capacity exists during contingency operations for information processing;
- **CP-02(02)[02]** capacity planning is conducted so that the necessary capacity exists during contingency operations for telecommunications;
- **CP-02(02)[03]** capacity planning is conducted so that the necessary capacity exists during contingency operations for environmental support.

**Examine:** Contingency planning policy; procedures addressing contingency operations for the system; contingency plan; capacity planning documents; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency planning and plan implementation responsibilities; organizational personnel responsible for capacity planning; organizational personnel with information security responsibilities.

</details>

<a id="cp-2.3"></a>

### CP-2(3) Resume Mission and Business Functions

*Baselines: Moderate, High*

Plan for the resumption of [Selection: all; essential] mission and business functions within [Assignment: organization-defined time period] of contingency plan activation.

<details>
<summary>Discussion and assessment objectives for CP-2(3)</summary>

Organizations may choose to conduct contingency planning activities to resume mission and business functions as part of business continuity planning or as part of business impact analyses. Organizations prioritize the resumption of mission and business functions. The time period for resuming mission and business functions may be dependent on the severity and extent of the disruptions to the system and its supporting infrastructure.

Determine if the resumption of [Selection: all; essential] mission and business functions are planned for within [Assignment: organization-defined time period] of contingency plan activation.

**Examine:** Contingency planning policy; procedures addressing contingency operations for the system; contingency plan; business impact assessment; system security plan; privacy plan; other related plans; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency planning and plan implementation responsibilities; organizational personnel with information security and privacy responsibilities; organizational personnel with knowledge of requirements for mission and business functions.

**Test:** Organizational processes for resumption of missions and business functions.

</details>

<a id="cp-2.5"></a>

### CP-2(5) Continue Mission and Business Functions

*Baselines: High*

Plan for the continuance of [Selection: all; essential] mission and business functions with minimal or no loss of operational continuity and sustains that continuity until full system restoration at primary processing and/or storage sites.

<details>
<summary>Discussion and assessment objectives for CP-2(5)</summary>

Organizations may choose to conduct the contingency planning activities to continue mission and business functions as part of business continuity planning or business impact analyses. Primary processing and/or storage sites defined by organizations as part of contingency planning may change depending on the circumstances associated with the contingency.

Determine if:

- **CP-02(05)[01]** the continuance of [Selection: all; essential] mission and business functions with minimal or no loss of operational continuity is planned for;
- **CP-02(05)[02]** continuity is sustained until full system restoration at primary processing and/or storage sites.

**Examine:** Contingency planning policy; procedures addressing contingency operations for the system; contingency plan; business impact assessment; primary processing site agreements; primary storage site agreements; alternate processing site agreements; alternate storage site agreements; contingency plan test documentation; contingency plan test results; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency planning and plan implementation responsibilities; organizational personnel with knowledge of requirements for mission and business functions; organizational personnel with information security responsibilities.

**Test:** Organizational processes for continuing missions and business functions.

</details>

<a id="cp-2.6"></a>

### CP-2(6) Alternate Processing and Storage Sites

*Baselines: Not in a baseline*

Plan for the transfer of [Selection: all; essential] mission and business functions to alternate processing and/or storage sites with minimal or no loss of operational continuity and sustain that continuity through system restoration to primary processing and/or storage sites.

<details>
<summary>Discussion and assessment objectives for CP-2(6)</summary>

Organizations may choose to conduct contingency planning activities for alternate processing and storage sites as part of business continuity planning or business impact analyses. Primary processing and/or storage sites defined by organizations as part of contingency planning may change depending on the circumstances associated with the contingency.

Determine if:

- **CP-02(06)[01]** the transfer of [Selection: all; essential] mission and business functions to alternate processing and/or storage sites with minimal or no loss of operational continuity is planned for;
- **CP-02(06)[02]** operational continuity is sustained until full system restoration at primary processing and/or storage sites.

**Examine:** Contingency planning policy; procedures addressing contingency operations for the system; contingency plan; business impact assessment; alternate processing site agreements; alternate storage site agreements; contingency plan testing documentation; contingency plan test results; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency planning and plan implementation responsibilities; organizational personnel with knowledge of requirements for mission and business functions; organizational personnel with information security responsibilities.

**Test:** Organizational processes for transfer of essential mission and business functions to alternate processing/storage sites.

</details>

<a id="cp-2.7"></a>

### CP-2(7) Coordinate with External Service Providers

*Baselines: Not in a baseline*

Coordinate the contingency plan with the contingency plans of external service providers to ensure that contingency requirements can be satisfied.

<details>
<summary>Discussion and assessment objectives for CP-2(7)</summary>

When the capability of an organization to carry out its mission and business functions is dependent on external service providers, developing a comprehensive and timely contingency plan may become more challenging. When mission and business functions are dependent on external service providers, organizations coordinate contingency planning activities with the external entities to ensure that the individual plans reflect the overall contingency needs of the organization.

Determine if the contingency plan is coordinated with the contingency plans of external service providers to ensure that contingency requirements can be satisfied.

**Examine:** Contingency planning policy; procedures addressing contingency operations for the system; contingency plan; contingency plans of external; service providers; service level agreements; contingency plan requirements; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency planning and plan implementation responsibilities; external service providers; organizational personnel with information security responsibilities.

</details>

<a id="cp-2.8"></a>

### CP-2(8) Identify Critical Assets

*Baselines: Moderate, High*

Identify critical system assets supporting [Selection: all; essential] mission and business functions.

<details>
<summary>Discussion and assessment objectives for CP-2(8)</summary>

Organizations may choose to identify critical assets as part of criticality analysis, business continuity planning, or business impact analyses. Organizations identify critical system assets so that additional controls can be employed (beyond the controls routinely implemented) to help ensure that organizational mission and business functions can continue to be conducted during contingency operations. The identification of critical information assets also facilitates the prioritization of organizational resources. Critical system assets include technical and operational aspects. Technical aspects include system components, information technology services, information technology products, and mechanisms. Operational aspects include procedures (i.e., manually executed operations) and personnel (i.e., individuals operating technical controls and/or executing manual procedures). Organizational program protection plans can assist in identifying critical assets. If critical assets are resident within or supported by external service providers, organizations consider implementing CP-2(7) as a control enhancement.

Determine if critical system assets supporting [Selection: all; essential] mission and business functions are identified.

**Examine:** Contingency planning policy; procedures addressing contingency operations for the system; contingency plan; business impact assessment; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency planning and plan implementation responsibilities; organizational personnel with knowledge of requirements for mission and business functions; organizational personnel with information security responsibilities.

</details>

*Withdrawn enhancements: CP-2(4).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CP-2</summary>

Determine if:

- **CP-02a.**
  - **CP-02a.01** a contingency plan for the system is developed that identifies essential mission and business functions and associated contingency requirements;
  - **CP-02a.02**
    - **CP-02a.02[01]** a contingency plan for the system is developed that provides recovery objectives;
    - **CP-02a.02[02]** a contingency plan for the system is developed that provides restoration priorities;
    - **CP-02a.02[03]** a contingency plan for the system is developed that provides metrics;
  - **CP-02a.03**
    - **CP-02a.03[01]** a contingency plan for the system is developed that addresses contingency roles;
    - **CP-02a.03[02]** a contingency plan for the system is developed that addresses contingency responsibilities;
    - **CP-02a.03[03]** a contingency plan for the system is developed that addresses assigned individuals with contact information;
  - **CP-02a.04** a contingency plan for the system is developed that addresses maintaining essential mission and business functions despite a system disruption, compromise, or failure;
  - **CP-02a.05** a contingency plan for the system is developed that addresses eventual, full-system restoration without deterioration of the controls originally planned and implemented;
  - **CP-02a.06** a contingency plan for the system is developed that addresses the sharing of contingency information;
  - **CP-02a.07**
    - **CP-02a.07[01]** a contingency plan for the system is developed that is reviewed by [Assignment: organization-defined personnel or roles];
    - **CP-02a.07[02]** a contingency plan for the system is developed that is approved by [Assignment: organization-defined personnel or roles];
- **CP-02b.**
  - **CP-02b.[01]** copies of the contingency plan are distributed to [Assignment: organization-defined key contingency personnel];
  - **CP-02b.[02]** copies of the contingency plan are distributed to [Assignment: organization-defined organizational elements];
- **CP-02c.** contingency planning activities are coordinated with incident handling activities;
- **CP-02d.** the contingency plan for the system is reviewed [Assignment: organization-defined frequency];
- **CP-02e.**
  - **CP-02e.[01]** the contingency plan is updated to address changes to the organization, system, or environment of operation;
  - **CP-02e.[02]** the contingency plan is updated to address problems encountered during contingency plan implementation, execution, or testing;
- **CP-02f.**
  - **CP-02f.[01]** contingency plan changes are communicated to [Assignment: organization-defined key contingency personnel];
  - **CP-02f.[02]** contingency plan changes are communicated to [Assignment: organization-defined organizational elements];
- **CP-02g.**
  - **CP-02g.[01]** lessons learned from contingency plan testing or actual contingency activities are incorporated into contingency testing;
  - **CP-02g.[02]** lessons learned from contingency plan training or actual contingency activities are incorporated into contingency testing and training;
- **CP-02h.**
  - **CP-02h.[01]** the contingency plan is protected from unauthorized disclosure;
  - **CP-02h.[02]** the contingency plan is protected from unauthorized modification.

**Examine:** Contingency planning policy; procedures addressing contingency operations for the system; contingency plan; evidence of contingency plan reviews and updates; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency planning and plan implementation responsibilities; organizational personnel with incident handling responsibilities; organizational personnel with knowledge of requirements for mission and business functions; organizational personnel with information security responsibilities.

**Test:** Organizational processes for contingency plan development, review, update, and protection; mechanisms for developing, reviewing, updating, and/or protecting the contingency plan.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
