---
title: 'IR-8 Incident Response Plan'
description: 'NIST SP 800-53 Rev. 5 control IR-8, Incident Response Plan: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'IR-8 Incident Response Plan'
  order: 8
control:
  id: IR-8
  family: IR
  baselines: [Low, Moderate, High, Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | 1 (1 in a baseline) |

**Related controls:** [AC-2](/controls/ac/ac-2/), [CP-2](/controls/cp/cp-2/), [CP-4](/controls/cp/cp-4/), [IR-4](/controls/ir/ir-4/), [IR-7](/controls/ir/ir-7/), [IR-9](/controls/ir/ir-9/), [PE-6](/controls/pe/pe-6/), [PL-2](/controls/pl/pl-2/), [SA-15](/controls/sa/sa-15/), [SI-12](/controls/si/si-12/), [SR-8](/controls/sr/sr-8/)

## Control statement

- **a.** Develop an incident response plan that:
  - **1.** Provides the organization with a roadmap for implementing its incident response capability;
  - **2.** Describes the structure and organization of the incident response capability;
  - **3.** Provides a high-level approach for how the incident response capability fits into the overall organization;
  - **4.** Meets the unique requirements of the organization, which relate to mission, size, structure, and functions;
  - **5.** Defines reportable incidents;
  - **6.** Provides metrics for measuring the incident response capability within the organization;
  - **7.** Defines the resources and management support needed to effectively maintain and mature an incident response capability;
  - **8.** Addresses the sharing of incident information;
  - **9.** Is reviewed and approved by [Assignment: organization-defined personnel or roles] [Assignment: organization-defined frequency] ; and
  - **10.** Explicitly designates responsibility for incident response to [Assignment: organization-defined entities, personnel, or roles].
- **b.** Distribute copies of the incident response plan to [Assignment: organization-defined incident response personnel];
- **c.** Update the incident response plan to address system and organizational changes or problems encountered during plan implementation, execution, or testing;
- **d.** Communicate incident response plan changes to [Assignment: organization-defined incident response personnel (identified by name and/or by role) and organizational elements] ; and
- **e.** Protect the incident response plan from unauthorized disclosure and modification.

<details>
<summary>NIST discussion</summary>

It is important that organizations develop and implement a coordinated approach to incident response. Organizational mission and business functions determine the structure of incident response capabilities. As part of the incident response capabilities, organizations consider the coordination and sharing of information with external organizations, including external service providers and other organizations involved in the supply chain. For incidents involving personally identifiable information (i.e., breaches), include a process to determine whether notice to oversight organizations or affected individuals is appropriate and provide that notice accordingly.

</details>

## Control enhancements

<a id="ir-8.1"></a>

### IR-8(1) Breaches

*Baselines: Privacy*

Include the following in the Incident Response Plan for breaches involving personally identifiable information:

- **(a)** A process to determine if notice to individuals or other organizations, including oversight organizations, is needed;
- **(b)** An assessment process to determine the extent of the harm, embarrassment, inconvenience, or unfairness to affected individuals and any mechanisms to mitigate such harms; and
- **(c)** Identification of applicable privacy requirements.

<details>
<summary>Discussion and assessment objectives for IR-8(1)</summary>

Organizations may be required by law, regulation, or policy to follow specific procedures relating to breaches, including notice to individuals, affected organizations, and oversight bodies; standards of harm; and mitigation or other specific requirements.

Determine if:

- **IR-08(01)(a)** the incident response plan for breaches involving personally identifiable information includes a process to determine if notice to individuals or other organizations, including oversight organizations, is needed;
- **IR-08(01)(b)** the incident response plan for breaches involving personally identifiable information includes an assessment process to determine the extent of the harm, embarrassment, inconvenience, or unfairness to affected individuals and any mechanisms to mitigate such harms;
- **IR-08(01)(c)** the incident response plan for breaches involving personally identifiable information includes the identification of applicable privacy requirements.

**Examine:** Incident response policy; procedures addressing incident response planning; incident response plan; system security plan; privacy plan; records of incident response plan reviews and approvals; other relevant documents or records.

**Interview:** Organizational personnel with incident response planning responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational incident response plan and related organizational processes.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for IR-8</summary>

Determine if:

- **IR-08a.**
  - **IR-08a.01** an incident response plan is developed that provides the organization with a roadmap for implementing its incident response capability;
  - **IR-08a.02** an incident response plan is developed that describes the structure and organization of the incident response capability;
  - **IR-08a.03** an incident response plan is developed that provides a high-level approach for how the incident response capability fits into the overall organization;
  - **IR-08a.04** an incident response plan is developed that meets the unique requirements of the organization with regard to mission, size, structure, and functions;
  - **IR-08a.05** an incident response plan is developed that defines reportable incidents;
  - **IR-08a.06** an incident response plan is developed that provides metrics for measuring the incident response capability within the organization;
  - **IR-08a.07** an incident response plan is developed that defines the resources and management support needed to effectively maintain and mature an incident response capability;
  - **IR-08a.08** an incident response plan is developed that addresses the sharing of incident information;
  - **IR-08a.09** an incident response plan is developed that is reviewed and approved by [Assignment: organization-defined personnel or roles] [Assignment: organization-defined frequency];
  - **IR-08a.10** an incident response plan is developed that explicitly designates responsibility for incident response to [Assignment: organization-defined entities, personnel, or roles].
- **IR-08b.**
  - **IR-08b.[01]** copies of the incident response plan are distributed to [Assignment: organization-defined incident response personnel];
  - **IR-08b.[02]** copies of the incident response plan are distributed to [Assignment: organization-defined organizational elements];
- **IR-08c.** the incident response plan is updated to address system and organizational changes or problems encountered during plan implementation, execution, or testing;
- **IR-08d.**
  - **IR-08d.[01]** incident response plan changes are communicated to [Assignment: organization-defined incident response personnel];
  - **IR-08d.[02]** incident response plan changes are communicated to [Assignment: organization-defined organizational elements];
- **IR-08e.**
  - **IR-08e.[01]** the incident response plan is protected from unauthorized disclosure;
  - **IR-08e.[02]** the incident response plan is protected from unauthorized modification.

**Examine:** Incident response policy; procedures addressing incident response planning; incident response plan; system security plan; privacy plan; records of incident response plan reviews and approvals; other relevant documents or records.

**Interview:** Organizational personnel with incident response planning responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational incident response plan and related organizational processes.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

IR-8 asks for a written incident response plan that sets out how the capability is organized, what counts as a reportable incident, how the capability is measured and resourced, and who is responsible. The plan is approved, distributed, kept current and protected. Start from the [Incident Response Plan template](/templates/plans/incident-response-plan/), which covers each IR-8a element.

**Common implementations.** One organization-wide plan, approved by the Chief Information Security Officer, with system-specific appendices for contacts and recovery steps. Reportable incidents defined by severity with examples. Metrics such as time to detect, time to contain and number of incidents by type. The plan stored in a controlled document repository with access limited to the response team and named functions, and a copy kept offline so it is available during an outage.

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Who reviews and approves the plan (a.9) | The Chief Information Security Officer |
| Review and approval frequency (a.9) | Annually |
| Who holds responsibility for incident response (a.10) | The incident response team, led by its designated lead |
| Who receives copies (b) | The incident response team members, by role, and the security operations, legal, communications and human resources functions |
| Who is told of changes (d) | Everyone who received the plan |

**Evidence assessors ask for.**

- The current plan, with its approval signature and date
- The distribution list and evidence the latest version reached it
- The change history, including changes made after tests or incidents (IR-8c)
- Access controls on the plan's storage location

**Inheritance.** The organization-wide plan is usually a common control. The system provides its appendix and confirms the plan covers its incident types.

**Common findings.**

- The plan not reviewed or re-approved in over a year.
- No definition of a reportable incident, or one that differs from the reporting procedure.
- Metrics listed in the plan but never collected.
- Changes after an exercise made in practice but not in the plan.

**Enhancements in the Moderate baseline.** None. [IR-8(1)](#ir-8.1), breaches, is in the Privacy baseline.
