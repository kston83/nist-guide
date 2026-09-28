---
title: 'PL-2 System Security and Privacy Plans'
description: 'NIST SP 800-53 Rev. 5 control PL-2, System Security and Privacy Plans: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PL-2 System Security and Privacy Plans'
  order: 2
control:
  id: PL-2
  family: PL
  baselines: [Low, Moderate, High, Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | None |

**Related controls:** [AC-2](/controls/ac/ac-2/), [AC-6](/controls/ac/ac-6/), [AC-14](/controls/ac/ac-14/), [AC-17](/controls/ac/ac-17/), [AC-20](/controls/ac/ac-20/), [CA-2](/controls/ca/ca-2/), [CA-3](/controls/ca/ca-3/), [CA-7](/controls/ca/ca-7/), [CM-9](/controls/cm/cm-9/), [CM-13](/controls/cm/cm-13/), [CP-2](/controls/cp/cp-2/), [CP-4](/controls/cp/cp-4/), [IR-4](/controls/ir/ir-4/), [IR-8](/controls/ir/ir-8/), [MA-4](/controls/ma/ma-4/), [MA-5](/controls/ma/ma-5/), [MP-4](/controls/mp/mp-4/), [MP-5](/controls/mp/mp-5/), [PL-7](/controls/pl/pl-7/), [PL-8](/controls/pl/pl-8/), [PL-10](/controls/pl/pl-10/), [PL-11](/controls/pl/pl-11/), [PM-1](/controls/pm/pm-1/), [PM-7](/controls/pm/pm-7/), [PM-8](/controls/pm/pm-8/), [PM-9](/controls/pm/pm-9/), [PM-10](/controls/pm/pm-10/), [PM-11](/controls/pm/pm-11/), [RA-3](/controls/ra/ra-3/), [RA-8](/controls/ra/ra-8/), [RA-9](/controls/ra/ra-9/), [SA-5](/controls/sa/sa-5/), [SA-17](/controls/sa/sa-17/), [SA-22](/controls/sa/sa-22/), [SI-12](/controls/si/si-12/), [SR-2](/controls/sr/sr-2/), [SR-4](/controls/sr/sr-4/)

## Control statement

- **a.** Develop security and privacy plans for the system that:
  - **1.** Are consistent with the organization’s enterprise architecture;
  - **2.** Explicitly define the constituent system components;
  - **3.** Describe the operational context of the system in terms of mission and business processes;
  - **4.** Identify the individuals that fulfill system roles and responsibilities;
  - **5.** Identify the information types processed, stored, and transmitted by the system;
  - **6.** Provide the security categorization of the system, including supporting rationale;
  - **7.** Describe any specific threats to the system that are of concern to the organization;
  - **8.** Provide the results of a privacy risk assessment for systems processing personally identifiable information;
  - **9.** Describe the operational environment for the system and any dependencies on or connections to other systems or system components;
  - **10.** Provide an overview of the security and privacy requirements for the system;
  - **11.** Identify any relevant control baselines or overlays, if applicable;
  - **12.** Describe the controls in place or planned for meeting the security and privacy requirements, including a rationale for any tailoring decisions;
  - **13.** Include risk determinations for security and privacy architecture and design decisions;
  - **14.** Include security- and privacy-related activities affecting the system that require planning and coordination with [Assignment: organization-defined individuals or groups] ; and
  - **15.** Are reviewed and approved by the authorizing official or designated representative prior to plan implementation.
- **b.** Distribute copies of the plans and communicate subsequent changes to the plans to [Assignment: organization-defined personnel or roles];
- **c.** Review the plans [Assignment: organization-defined frequency];
- **d.** Update the plans to address changes to the system and environment of operation or problems identified during plan implementation or control assessments; and
- **e.** Protect the plans from unauthorized disclosure and modification.

<details>
<summary>NIST discussion</summary>

System security and privacy plans are scoped to the system and system components within the defined authorization boundary and contain an overview of the security and privacy requirements for the system and the controls selected to satisfy the requirements. The plans describe the intended application of each selected control in the context of the system with a sufficient level of detail to correctly implement the control and to subsequently assess the effectiveness of the control. The control documentation describes how system-specific and hybrid controls are implemented and the plans and expectations regarding the functionality of the system. System security and privacy plans can also be used in the design and development of systems in support of life cycle-based security and privacy engineering processes. System security and privacy plans are living documents that are updated and adapted throughout the system development life cycle (e.g., during capability determination, analysis of alternatives, requests for proposal, and design reviews). Section 2.1 describes the different types of requirements that are relevant to organizations during the system development life cycle and the relationship between requirements and controls.

Organizations may develop a single, integrated security and privacy plan or maintain separate plans. Security and privacy plans relate security and privacy requirements to a set of controls and control enhancements. The plans describe how the controls and control enhancements meet the security and privacy requirements but do not provide detailed, technical descriptions of the design or implementation of the controls and control enhancements. Security and privacy plans contain sufficient information (including specifications of control parameter values for selection and assignment operations explicitly or by reference) to enable a design and implementation that is unambiguously compliant with the intent of the plans and subsequent determinations of risk to organizational operations and assets, individuals, other organizations, and the Nation if the plan is implemented.

Security and privacy plans need not be single documents. The plans can be a collection of various documents, including documents that already exist. Effective security and privacy plans make extensive use of references to policies, procedures, and additional documents, including design and implementation specifications where more detailed information can be obtained. The use of references helps reduce the documentation associated with security and privacy programs and maintains the security- and privacy-related information in other established management and operational areas, including enterprise architecture, system development life cycle, systems engineering, and acquisition. Security and privacy plans need not contain detailed contingency plan or incident response plan information but can instead provide—explicitly or by reference—sufficient information to define what needs to be accomplished by those plans.

Security- and privacy-related activities that may require coordination and planning with other individuals or groups within the organization include assessments, audits, inspections, hardware and software maintenance, acquisition and supply chain risk management, patch management, and contingency plan testing. Planning and coordination include emergency and nonemergency (i.e., planned or non-urgent unplanned) situations. The process defined by organizations to plan and coordinate security- and privacy-related activities can also be included in other documents, as appropriate.

</details>

*Withdrawn enhancements: PL-2(1), PL-2(2), PL-2(3).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PL-2</summary>

Determine if:

- **PL-02a.**
  - **PL-02a.01**
    - **PL-02a.01[01]** a security plan for the system is developed that is consistent with the organization’s enterprise architecture;
    - **PL-02a.01[02]** a privacy plan for the system is developed that is consistent with the organization’s enterprise architecture;
  - **PL-02a.02**
    - **PL-02a.02[01]** a security plan for the system is developed that explicitly defines the constituent system components;
    - **PL-02a.02[02]** a privacy plan for the system is developed that explicitly defines the constituent system components;
  - **PL-02a.03**
    - **PL-02a.03[01]** a security plan for the system is developed that describes the operational context of the system in terms of mission and business processes;
    - **PL-02a.03[02]** a privacy plan for the system is developed that describes the operational context of the system in terms of mission and business processes;
  - **PL-02a.04**
    - **PL-02a.04[01]** a security plan for the system is developed that identifies the individuals that fulfill system roles and responsibilities;
    - **PL-02a.04[02]** a privacy plan for the system is developed that identifies the individuals that fulfill system roles and responsibilities;
  - **PL-02a.05**
    - **PL-02a.05[01]** a security plan for the system is developed that identifies the information types processed, stored, and transmitted by the system;
    - **PL-02a.05[02]** a privacy plan for the system is developed that identifies the information types processed, stored, and transmitted by the system;
  - **PL-02a.06**
    - **PL-02a.06[01]** a security plan for the system is developed that provides the security categorization of the system, including supporting rationale;
    - **PL-02a.06[02]** a privacy plan for the system is developed that provides the security categorization of the system, including supporting rationale;
  - **PL-02a.07**
    - **PL-02a.07[01]** a security plan for the system is developed that describes any specific threats to the system that are of concern to the organization;
    - **PL-02a.07[02]** a privacy plan for the system is developed that describes any specific threats to the system that are of concern to the organization;
  - **PL-02a.08**
    - **PL-02a.08[01]** a security plan for the system is developed that provides the results of a privacy risk assessment for systems processing personally identifiable information;
    - **PL-02a.08[02]** a privacy plan for the system is developed that provides the results of a privacy risk assessment for systems processing personally identifiable information;
  - **PL-02a.09**
    - **PL-02a.09[01]** a security plan for the system is developed that describes the operational environment for the system and any dependencies on or connections to other systems or system components;
    - **PL-02a.09[02]** a privacy plan for the system is developed that describes the operational environment for the system and any dependencies on or connections to other systems or system components;
  - **PL-02a.10**
    - **PL-02a.10[01]** a security plan for the system is developed that provides an overview of the security requirements for the system;
    - **PL-02a.10[02]** a privacy plan for the system is developed that provides an overview of the privacy requirements for the system;
  - **PL-02a.11**
    - **PL-02a.11[01]** a security plan for the system is developed that identifies any relevant control baselines or overlays, if applicable;
    - **PL-02a.11[02]** a privacy plan for the system is developed that identifies any relevant control baselines or overlays, if applicable;
  - **PL-02a.12**
    - **PL-02a.12[01]** a security plan for the system is developed that describes the controls in place or planned for meeting the security requirements, including rationale for any tailoring decisions;
    - **PL-02a.12[02]** a privacy plan for the system is developed that describes the controls in place or planned for meeting the privacy requirements, including rationale for any tailoring decisions;
  - **PL-02a.13**
    - **PL-02a.13[01]** a security plan for the system is developed that includes risk determinations for security architecture and design decisions;
    - **PL-02a.13[02]** a privacy plan for the system is developed that includes risk determinations for privacy architecture and design decisions;
  - **PL-02a.14**
    - **PL-02a.14[01]** a security plan for the system is developed that includes security-related activities affecting the system that require planning and coordination with [Assignment: organization-defined individuals or groups];
    - **PL-02a.14[02]** a privacy plan for the system is developed that includes privacy-related activities affecting the system that require planning and coordination with [Assignment: organization-defined individuals or groups];
  - **PL-02a.15**
    - **PL-02a.15[01]** a security plan for the system is developed that is reviewed and approved by the authorizing official or designated representative prior to plan implementation;
    - **PL-02a.15[02]** a privacy plan for the system is developed that is reviewed and approved by the authorizing official or designated representative prior to plan implementation.
- **PL-02b.**
  - **PL-02b.[01]** copies of the plans are distributed to [Assignment: organization-defined personnel or roles];
  - **PL-02b.[02]** subsequent changes to the plans are communicated to [Assignment: organization-defined personnel or roles];
- **PL-02c.** plans are reviewed [Assignment: organization-defined frequency];
- **PL-02d.**
  - **PL-02d.[01]** plans are updated to address changes to the system and environment of operations;
  - **PL-02d.[02]** plans are updated to address problems identified during the plan implementation;
  - **PL-02d.[03]** plans are updated to address problems identified during control assessments;
- **PL-02e.**
  - **PL-02e.[01]** plans are protected from unauthorized disclosure;
  - **PL-02e.[02]** plans are protected from unauthorized modification.

**Examine:** Security and privacy planning policy; procedures addressing system security and privacy plan development and implementation; procedures addressing security and privacy plan reviews and updates; enterprise architecture documentation; system security plan; privacy plan; records of system security and privacy plan reviews and updates; security and privacy architecture and design documentation; risk assessments; risk assessment results; control assessment documentation; other relevant documents or records.

**Interview:** Organizational personnel with system security and privacy planning and plan implementation responsibilities; system developers; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for system security and privacy plan development, review, update, and approval; mechanisms supporting the system security and privacy plan.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write bel

## How to apply it

PL-2 asks for a security plan (and a privacy plan where the system processes personally identifiable information) that describes the system, its boundary, roles, information types, categorization, threats, environment, connections, requirements and the controls that meet them. The authorizing official approves it before it is put into effect, and it is reviewed, updated and protected afterward. The plan is the main input to the assessment and the authorization decision.

**Common implementations.** A system security plan following the outline NIST publishes with [SP 800-18 Rev. 2](https://csrc.nist.gov/pubs/sp/800/18/r2/final) (June 2026); the [System Security Plan template](/templates/plans/system-security-plan/) follows it and names the PL-2a item each section meets. Control implementation details are often kept in a GRC tool and exported into the plan, increasingly in the machine-readable OSCAL format. One integrated security and privacy plan is allowed, as is a separate privacy plan.

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Who plans and coordinates security and privacy activities (a.14) | The system's stakeholders, the common control providers, and the security and privacy teams |
| Who receives the plan and its changes (b) | The authorizing official, the system owner, the system security officer and the assessor |
| Review frequency (c) | Annually |

**Evidence assessors ask for.**

- The current plan, with the authorizing official's approval and date (a.15)
- A boundary diagram and component inventory that match the plan (a.2, a.9)
- Tailoring decisions with their rationale (a.12)
- The plan's review and change history
- The distribution list and the access controls on the plan's storage

**Inheritance.** None as a whole: every system needs its own plan. Common control providers supply the descriptions of inherited controls that the plan references.

**Common findings.**

- Implementation statements that repeat the control text instead of describing what the system does.
- A boundary or inventory that no longer matches the running system.
- The plan not updated after significant changes or assessments.
- Inherited controls claimed with no reference to the provider's documentation.

**Enhancements in the Moderate baseline.** None; PL-2 has no active enhancements.
