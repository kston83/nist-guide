---
title: 'CA-6 Authorization'
description: 'NIST SP 800-53 Rev. 5 control CA-6, Authorization: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CA-6 Authorization'
  order: 6
control:
  id: CA-6
  family: CA
  baselines: [Low, Moderate, High, Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | 2 (0 in a baseline) |

**Related controls:** [CA-2](/controls/ca/ca-2/), [CA-3](/controls/ca/ca-3/), [CA-7](/controls/ca/ca-7/), [PM-9](/controls/pm/pm-9/), [PM-10](/controls/pm/pm-10/), [RA-3](/controls/ra/ra-3/), [SA-10](/controls/sa/sa-10/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Assign a senior official as the authorizing official for the system;
- **b.** Assign a senior official as the authorizing official for common controls available for inheritance by organizational systems;
- **c.** Ensure that the authorizing official for the system, before commencing operations:
  - **1.** Accepts the use of common controls inherited by the system; and
  - **2.** Authorizes the system to operate;
- **d.** Ensure that the authorizing official for common controls authorizes the use of those controls for inheritance by organizational systems;
- **e.** Update the authorizations [Assignment: organization-defined frequency].

<details>
<summary>NIST discussion</summary>

Authorizations are official management decisions by senior officials to authorize operation of systems, authorize the use of common controls for inheritance by organizational systems, and explicitly accept the risk to organizational operations and assets, individuals, other organizations, and the Nation based on the implementation of agreed-upon controls. Authorizing officials provide budgetary oversight for organizational systems and common controls or assume responsibility for the mission and business functions supported by those systems or common controls. The authorization process is a federal responsibility, and therefore, authorizing officials must be federal employees. Authorizing officials are both responsible and accountable for security and privacy risks associated with the operation and use of organizational systems. Nonfederal organizations may have similar processes to authorize systems and senior officials that assume the authorization role and associated responsibilities.

Authorizing officials issue ongoing authorizations of systems based on evidence produced from implemented continuous monitoring programs. Robust continuous monitoring programs reduce the need for separate reauthorization processes. Through the employment of comprehensive continuous monitoring processes, the information contained in authorization packages (i.e., security and privacy plans, assessment reports, and plans of action and milestones) is updated on an ongoing basis. This provides authorizing officials, common control providers, and system owners with an up-to-date status of the security and privacy posture of their systems, controls, and operating environments. To reduce the cost of reauthorization, authorizing officials can leverage the results of continuous monitoring processes to the maximum extent possible as the basis for rendering reauthorization decisions.

</details>

## Control enhancements

<a id="ca-6.1"></a>

### CA-6(1) Joint Authorization — Intra-organization

*Baselines: Not in a baseline*

Employ a joint authorization process for the system that includes multiple authorizing officials from the same organization conducting the authorization.

<details>
<summary>Discussion and assessment objectives for CA-6(1)</summary>

Assigning multiple authorizing officials from the same organization to serve as co-authorizing officials for the system increases the level of independence in the risk-based decision-making process. It also implements the concepts of separation of duties and dual authorization as applied to the system authorization process. The intra-organization joint authorization process is most relevant for connected systems, shared systems, and systems with multiple information owners.

Determine if:

- **CA-06(01)[01]** a joint authorization process is employed for the system;
- **CA-06(01)[02]** the joint authorization process employed for the system includes multiple authorizing officials from the same organization conducting the authorization.

**Examine:** Assessment, authorization, and monitoring policy; procedures addressing authorization; system security plan; privacy plan; assessment report; plan of action and milestones; authorization statement; other relevant documents or records.

**Interview:** Organizational personnel with authorization responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Mechanisms that facilitate authorizations and updates.

</details>

<a id="ca-6.2"></a>

### CA-6(2) Joint Authorization — Inter-organization

*Baselines: Not in a baseline*

Employ a joint authorization process for the system that includes multiple authorizing officials with at least one authorizing official from an organization external to the organization conducting the authorization.

<details>
<summary>Discussion and assessment objectives for CA-6(2)</summary>

Assigning multiple authorizing officials, at least one of whom comes from an external organization, to serve as co-authorizing officials for the system increases the level of independence in the risk-based decision-making process. It implements the concepts of separation of duties and dual authorization as applied to the system authorization process. Employing authorizing officials from external organizations to supplement the authorizing official from the organization that owns or hosts the system may be necessary when the external organizations have a vested interest or equities in the outcome of the authorization decision. The inter-organization joint authorization process is relevant and appropriate for connected systems, shared systems or services, and systems with multiple information owners. The authorizing officials from the external organizations are key stakeholders of the system undergoing authorization.

Determine if:

- **CA-06(02)[01]** a joint authorization process is employed for the system;
- **CA-06(02)[02]** the joint authorization process employed for the system includes multiple authorizing officials with at least one authorizing official from an organization external to the organization conducting the authorization.

**Examine:** Assessment, authorization, and monitoring policy; procedures addressing authorization; system security plan; privacy plan; assessment report; plan of action and milestones; authorization statement; other relevant documents or records.

**Interview:** Organizational personnel with authorization responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Mechanisms that facilitate authorizations and updates.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CA-6</summary>

Determine if:

- **CA-06a.** a senior official is assigned as the authorizing official for the system;
- **CA-06b.** a senior official is assigned as the authorizing official for common controls available for inheritance by organizational systems;
- **CA-06c.**
  - **CA-06c.01** before commencing operations, the authorizing official for the system accepts the use of common controls inherited by the system;
  - **CA-06c.02** before commencing operations, the authorizing official for the system authorizes the system to operate;
- **CA-06d.** the authorizing official for common controls authorizes the use of those controls for inheritance by organizational systems;
- **CA-06e.** the authorizations are updated [Assignment: organization-defined frequency].

**Examine:** Assessment, authorization, and monitoring policy; procedures addressing authorization; system security plan, privacy plan, assessment report, plan of action and milestones; authorization statement; other relevant documents or records.

**Interview:** Organizational personnel with authorization responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Mechanisms that facilitate authorizations and updates.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

Authorization is a senior official's decision to accept the risk of operating a system. The authorizing official decides from the authorization package: the security and privacy plans, the assessment report and the plan of action and milestones. The same decision is made for common controls, by an authorizing official for those controls, so that systems can inherit them. The authorizing official should have budget or mission responsibility for the system, so the person who accepts the risk also owns its consequences. NIST SP 800-37 Rev. 2 ([December 2018](https://csrc.nist.gov/pubs/sp/800/37/r2/final), current as of September 2026) describes the authorization tasks in its Authorize step.

**Common implementations.** A written designation of the authorizing official for each system and for the common controls. A signed authorization decision document that states the decision, any terms and conditions, and either a termination date or that the system is under ongoing authorization. The package assembled from the [system security plan](/templates/plans/system-security-plan/), the assessment report and the [plan of action and milestones](/templates/forms/plan-of-action-and-milestones/), and judged against the risk tolerance in the [risk management strategy](/templates/plans/risk-management-strategy/). Once continuous monitoring (CA-7) works, many organizations move systems to ongoing authorization, where the authorizing official reviews monitoring results on a set schedule instead of reauthorizing from scratch. The [Assessment, Authorization, and Monitoring policy](/templates/policies/ca/) sets the rules.

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Authorization update frequency (e) | At least every three years and after a significant change, or ongoing authorization once the authorizing official approves it, on the time- or event-driven basis the Continuous Monitoring Strategy sets |

The three-year cycle is a common practice, not a federal rule. OMB Circular A-130 calls for reauthorization on a time- or event-driven basis, in line with agency risk tolerance, and sets no fixed period (see Federal systems below).

**Evidence assessors ask for.**

- The designation of the authorizing official for the system and for the common controls
- The signed authorization decision, with its date, terms and conditions, and termination date or ongoing authorization status
- The authorization package the decision was based on
- The authorizing official's acceptance of the common controls the system inherits (CA-6c.1)
- For ongoing authorization, the authorizing official's formal approval of the transition and the monitoring reports reviewed since
- Records of reauthorization after significant changes

**Inheritance.** The authorization of each system is system-specific and cannot be inherited. The authorization of common controls (CA-6b and d) is done once, by the authorizing official for those controls, and each inheriting system's authorizing official accepts it (CA-6c.1).

**Common findings.**

- Systems operating past their authorization termination date, or before an authorization was signed.
- An authorizing official with no budget or mission responsibility for the system, or who is also the system owner.
- Decisions that do not record which common controls the system inherits, or that accept them without seeing the provider's assessment.
- Ongoing authorization claimed without a formal transition, or without monitoring reports reaching the authorizing official.
- No reauthorization after a significant change, such as a move to a new hosting environment.

**Enhancements in the Moderate baseline.** None. CA-6 has two enhancements, [CA-6(1)](#ca-6.1) joint authorization within the organization and [CA-6(2)](#ca-6.2) joint authorization across organizations; neither is in a baseline.

**Federal systems** (as of September 2026). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.d, requires agencies to designate senior Federal officials to authorize systems and common controls; to complete an initial authorization to operate before operation, based on an explicit acceptance of risk; to move systems and common controls to ongoing authorization when eligible, with the authorizing official's formal approval; and to reauthorize as needed, on a time- or event-driven basis, in line with agency risk tolerance. Section 5.f states that only Federal Government personnel may serve as authorizing officials, as NIST's CA-6 discussion also says, and that the Senior Agency Official for Privacy's input is considered in the decision. Section 5.h sets two conditions for ongoing authorization: an initial authorization to operate, and continuous monitoring programs that monitor all implemented security and privacy controls at the frequencies the strategies set. Until the authorizing official approves the transition, the system keeps a specific termination date.
