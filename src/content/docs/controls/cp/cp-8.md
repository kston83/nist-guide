---
title: 'CP-8 Telecommunications Services'
description: 'NIST SP 800-53 Rev. 5 control CP-8, Telecommunications Services: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CP-8 Telecommunications Services'
  order: 8
control:
  id: CP-8
  family: CP
  baselines: [Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | Organization | 5 (4 in a baseline) |

**Related controls:** [CP-2](/controls/cp/cp-2/), [CP-6](/controls/cp/cp-6/), [CP-7](/controls/cp/cp-7/), [CP-11](/controls/cp/cp-11/), [SC-7](/controls/sc/sc-7/)

## Control statement

Establish alternate telecommunications services, including necessary agreements to permit the resumption of [Assignment: organization-defined system operations] for essential mission and business functions within [Assignment: organization-defined time period] when the primary telecommunications capabilities are unavailable at either the primary or alternate processing or storage sites.

<details>
<summary>NIST discussion</summary>

Telecommunications services (for data and voice) for primary and alternate processing and storage sites are in scope for CP-8 . Alternate telecommunications services reflect the continuity requirements in contingency plans to maintain essential mission and business functions despite the loss of primary telecommunications services. Organizations may specify different time periods for primary or alternate sites. Alternate telecommunications services include additional organizational or commercial ground-based circuits or lines, network-based approaches to telecommunications, or the use of satellites. Organizations consider factors such as availability, quality of service, and access when entering into alternate telecommunications agreements.

</details>

## Control enhancements

<a id="cp-8.1"></a>

### CP-8(1) Priority of Service Provisions

*Baselines: Moderate, High*

- **(a)** Develop primary and alternate telecommunications service agreements that contain priority-of-service provisions in accordance with availability requirements (including recovery time objectives); and
- **(b)** Request Telecommunications Service Priority for all telecommunications services used for national security emergency preparedness if the primary and/or alternate telecommunications services are provided by a common carrier.

<details>
<summary>Discussion and assessment objectives for CP-8(1)</summary>

Organizations consider the potential mission or business impact in situations where telecommunications service providers are servicing other organizations with similar priority of service provisions. Telecommunications Service Priority (TSP) is a Federal Communications Commission (FCC) program that directs telecommunications service providers (e.g., wireline and wireless phone companies) to give preferential treatment to users enrolled in the program when they need to add new lines or have their lines restored following a disruption of service, regardless of the cause. The FCC sets the rules and policies for the TSP program, and the Department of Homeland Security manages the TSP program. The TSP program is always in effect and not contingent on a major disaster or attack taking place. Federal sponsorship is required to enroll in the TSP program.

Determine if:

- **CP-08(01)(a)**
  - **CP-08(01)(a)[01]** primary telecommunications service agreements that contain priority-of-service provisions in accordance with availability requirements (including recovery time objectives) are developed;
  - **CP-08(01)(a)[02]** alternate telecommunications service agreements that contain priority-of-service provisions in accordance with availability requirements (including recovery time objectives) are developed;
- **CP-08(01)(b)** Telecommunications Service Priority is requested for all telecommunications services used for national security emergency preparedness if the primary and/or alternate telecommunications services are provided by a common carrier.

**Examine:** Contingency planning policy; procedures addressing primary and alternate telecommunications services; contingency plan; primary and alternate telecommunications service agreements; Telecommunications Service Priority documentation; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency plan telecommunications responsibilities; organizational personnel with system recovery responsibilities; organizational personnel with information security responsibilities; organizational personnel with responsibility for acquisitions/contractual agreements.

**Test:** Mechanisms supporting telecommunications.

</details>

<a id="cp-8.2"></a>

### CP-8(2) Single Points of Failure

*Baselines: Moderate, High*

Obtain alternate telecommunications services to reduce the likelihood of sharing a single point of failure with primary telecommunications services.

<details>
<summary>Discussion and assessment objectives for CP-8(2)</summary>

In certain circumstances, telecommunications service providers or services may share the same physical lines, which increases the vulnerability of a single failure point. It is important to have provider transparency for the actual physical transmission capability for telecommunication services.

Determine if alternate telecommunications services to reduce the likelihood of sharing a single point of failure with primary telecommunications services are obtained.

**Examine:** Contingency planning policy; procedures addressing primary and alternate telecommunications services; contingency plan; primary and alternate telecommunications service agreements; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency plan telecommunications responsibilities; organizational personnel with system recovery responsibilities; primary and alternate telecommunications service providers; organizational personnel with information security responsibilities.

</details>

<a id="cp-8.3"></a>

### CP-8(3) Separation of Primary and Alternate Providers

*Baselines: High*

Obtain alternate telecommunications services from providers that are separated from primary service providers to reduce susceptibility to the same threats.

<details>
<summary>Discussion and assessment objectives for CP-8(3)</summary>

Threats that affect telecommunications services are defined in organizational assessments of risk and include natural disasters, structural failures, cyber or physical attacks, and errors of omission or commission. Organizations can reduce common susceptibilities by minimizing shared infrastructure among telecommunications service providers and achieving sufficient geographic separation between services. Organizations may consider using a single service provider in situations where the service provider can provide alternate telecommunications services that meet the separation needs addressed in the risk assessment.

Determine if alternate telecommunications services from providers that are separated from primary service providers are obtained to reduce susceptibility to the same threats.

**Examine:** Contingency planning policy; procedures addressing primary and alternate telecommunications services; contingency plan; primary and alternate telecommunications service agreements; alternate telecommunications service provider site; primary telecommunications service provider site; other relevant documents or records.

**Interview:** Organizational personnel with contingency plan telecommunications responsibilities; organizational personnel with system recovery responsibilities; primary and alternate telecommunications service providers; organizational personnel with information security responsibilities.

</details>

<a id="cp-8.4"></a>

### CP-8(4) Provider Contingency Plan

*Baselines: High*

- **(a)** Require primary and alternate telecommunications service providers to have contingency plans;
- **(b)** Review provider contingency plans to ensure that the plans meet organizational contingency requirements; and
- **(c)** Obtain evidence of contingency testing and training by providers [Assignment: organization-defined frequency].

<details>
<summary>Discussion and assessment objectives for CP-8(4)</summary>

Reviews of provider contingency plans consider the proprietary nature of such plans. In some situations, a summary of provider contingency plans may be sufficient evidence for organizations to satisfy the review requirement. Telecommunications service providers may also participate in ongoing disaster recovery exercises in coordination with the Department of Homeland Security and state and local governments. Organizations may use these types of activities to satisfy evidentiary requirements related to service provider contingency plan reviews, testing, and training.

Determine if:

- **CP-08(04)(a)**
  - **CP-08(04)(a)[01]** primary telecommunications service providers are required to have contingency plans;
  - **CP-08(04)(a)[02]** alternate telecommunications service providers are required to have contingency plans;
- **CP-08(04)(b)** provider contingency plans are reviewed to ensure that the plans meet organizational contingency requirements;
- **CP-08(04)(c)**
  - **CP-08(04)(c)[01]** evidence of contingency testing by providers is obtained [Assignment: organization-defined frequency].
  - **CP-08(04)(c)[02]** evidence of contingency training by providers is obtained [Assignment: organization-defined frequency].

**Examine:** Contingency planning policy; procedures addressing primary and alternate telecommunications services; contingency plan; provider contingency plans; evidence of contingency testing/training by providers; primary and alternate telecommunications service agreements; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency planning, plan implementation, and testing responsibilities; primary and alternate telecommunications service providers; organizational personnel with information security responsibilities; organizational personnel with responsibility for acquisitions/contractual agreements.

</details>

<a id="cp-8.5"></a>

### CP-8(5) Alternate Telecommunication Service Testing

*Baselines: Not in a baseline*

Test alternate telecommunication services [Assignment: organization-defined frequency].

<details>
<summary>Discussion and assessment objectives for CP-8(5)</summary>

Alternate telecommunications services testing is arranged through contractual agreements with service providers. The testing may occur in parallel with normal operations to ensure that there is no degradation in organizational missions or functions.

Determine if alternate telecommunications services are tested [Assignment: organization-defined frequency].

**Examine:** Contingency planning policy; procedures addressing alternate telecommunications services; contingency plan; evidence of testing alternate telecommunications services; alternate telecommunications service agreements; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency planning, plan implementation, and testing responsibilities; alternate telecommunications service providers; organizational personnel with information security responsibilities.

**Test:** Mechanisms supporting testing alternate telecommunications services.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CP-8</summary>

Determine if alternate telecommunications services, including necessary agreements to permit the resumption of [Assignment: organization-defined system operations] , are established for essential mission and business functions within [Assignment: organization-defined time period] when the primary telecommunications capabilities are unavailable at either the primary or alternate processing or storage sites.

**Examine:** Contingency planning policy; procedures addressing alternate telecommunications services; contingency plan; primary and alternate telecommunications service agreements; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with contingency plan telecommunications responsibilities; organizational personnel with system recovery responsibilities; organizational personnel with knowledge of requirements for mission and business functions; organizational personnel with information security responsibilities; organizational personnel with responsibility for acquisitions/contractual agreements.

**Test:** Mechanisms supporting telecommunications.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

CP-8 asks you to set up alternate telecommunications services, with the agreements needed, so the system can resume the operations that support essential functions within a set time when primary telecommunications fail. It applies at the primary site and at the alternate processing and storage sites. NIST's CP-8 discussion covers data and voice services, and names extra ground-based circuits, network-based approaches and satellites as options; it lets you set different time periods for the primary and alternate sites. CP-8 is in the Moderate and High baselines, not in Low.

[NIST SP 800-34 Rev. 1](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final) (May 2010, updated November 11, 2010; current as of October 2026), section 5.3, gives the telecommunications practices. Keep physical and logical network diagrams current, and record providers, contacts and service-level agreements in the plan. Find single points of failure, using the business impact analysis to set priorities. Where you use redundant links, make sure they are physically separated and do not follow the same path. Where you use more than one provider, make sure they share no common facilities, including building entries and demarcation points.

**Common implementations.** At an office or data center, two internet or wide area network circuits from different providers, entering the building by different routes, with automatic failover; or a wireless or satellite backup link for lower-bandwidth operation. For a cloud system, the provider's network is inherited. What the organization provides is its users' and administrators' path to the system: redundant connections from offices, remote access from other locations, and a second private connection if the system depends on one. Voice matters too: the contingency team needs a way to talk if the primary phone system fails. Record the services in Appendix F of the [contingency plan](/templates/plans/contingency-plan/) and the providers in Appendix B.

**Organization-defined parameters.** Typical values, from the [Contingency Planning policy](/templates/policies/cp/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| System operations to resume | The system operations that support essential mission and business functions |
| Time period for resumption | The recovery time objective set in the contingency plan from the business impact analysis |

In the policy, the system owner establishes the services and their agreements. Using the recovery time objective keeps the telecommunications target consistent with the alternate processing site ([CP-7](/controls/cp/cp-7/)), which uses the same value.

**Evidence assessors ask for.**

- The contracts or service orders for the primary and alternate telecommunications services, with their priority-of-service terms (CP-8(1))
- Network diagrams showing the primary and alternate paths, and how the alternate service connects at each site
- The provider's statement or route documentation showing the services do not share a single point of failure (CP-8(2))
- Records of failover tests or real outages, with the time it took to restore service
- For CP-8(1)(b), the Telecommunications Service Priority assignments, or the reason it does not apply

**Inheritance.** A cloud or data center provider's network redundancy is inherited. The organization usually provides the circuits at its own offices as a common control. The system owns the analysis of which telecommunications services it depends on and whether each has an alternate. Record the split in the [system security plan](/templates/plans/system-security-plan/).

**Common findings.**

- Two circuits from two providers that run through the same conduit or building entry, so one cut takes out both.
- An alternate circuit installed but never tested, or with too little bandwidth for the operations it must carry.
- Contracts with no priority-of-service terms, or standard terms nobody checked against the recovery time objective.
- No plan for voice communications when the primary phone system or collaboration service is down.

**Enhancements in the Moderate baseline.**

- [CP-8(1)](#cp-8.1) priority of service provisions: (a) put priority-of-service terms in the primary and alternate telecommunications agreements, in line with the system's availability requirements and recovery time objective; (b) request Telecommunications Service Priority (TSP) for services used for national security emergency preparedness when a common carrier provides them. NIST's discussion asks you to consider the impact when a provider serves other organizations with similar priority terms. It describes TSP as a Federal Communications Commission program, managed by the Department of Homeland Security, that requires federal sponsorship to enroll. Part (b) applies only to services used for national security emergency preparedness; where the system has none, say so in the system security plan.
- [CP-8(2)](#cp-8.2) single points of failure: obtain alternate services that reduce the chance of sharing a single point of failure with the primary services. NIST's discussion notes that providers may share the same physical lines, so ask each provider for transparency about the actual physical routes.

High adds [CP-8(3)](#cp-8.3) separation of primary and alternate providers and [CP-8(4)](#cp-8.4) provider contingency plan. [CP-8(5)](#cp-8.5) alternate telecommunication service testing is in no baseline.

**Federal systems** (as of October 2026). The Cybersecurity and Infrastructure Security Agency (CISA) describes [Telecommunications Service Priority](https://www.cisa.gov/resources-tools/services/telecommunications-service-priority-tsp) as a Federal Communications Commission program, managed by CISA, which requires service providers to prioritize provisioning and restoration requests for voice and data circuits from organizations with national security and emergency preparedness missions. Restoration priority must be requested on a circuit before an outage occurs. The CP-8(1) clause's federal block requires registering the system's national security and emergency preparedness circuits in the program.
