---
title: 'PM-8 Critical Infrastructure Plan'
description: 'NIST SP 800-53 Rev. 5 control PM-8, Critical Infrastructure Plan: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PM-8 Critical Infrastructure Plan'
  order: 8
control:
  id: PM-8
  family: PM
  baselines: [Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Privacy | Organization | None |

**Related controls:** [CP-2](/controls/cp/cp-2/), [CP-4](/controls/cp/cp-4/), [PE-18](/controls/pe/pe-18/), [PL-2](/controls/pl/pl-2/), [PM-9](/controls/pm/pm-9/), [PM-11](/controls/pm/pm-11/), [PM-18](/controls/pm/pm-18/), [RA-3](/controls/ra/ra-3/), [SI-12](/controls/si/si-12/)

## Control statement

Address information security and privacy issues in the development, documentation, and updating of a critical infrastructure and key resources protection plan.

<details>
<summary>NIST discussion</summary>

Protection strategies are based on the prioritization of critical assets and resources. The requirement and guidance for defining critical infrastructure and key resources and for preparing an associated critical infrastructure protection plan are found in applicable laws, executive orders, directives, policies, regulations, standards, and guidelines.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PM-8</summary>

Determine if:

- **PM-08[01]** information security issues are addressed in the development of a critical infrastructure and key resources protection plan;
- **PM-08[02]** information security issues are addressed in the documentation of a critical infrastructure and key resources protection plan;
- **PM-08[03]** information security issues are addressed in the update of a critical infrastructure and key resources protection plan;
- **PM-08[04]** privacy issues are addressed in the development of a critical infrastructure and key resources protection plan;
- **PM-08[05]** privacy issues are addressed in the documentation of a critical infrastructure and key resources protection plan;
- **PM-08[06]** privacy issues are addressed in the update of a critical infrastructure and key resources protection plan.

**Examine:** Information security program plan; privacy program plan; critical infrastructure and key resources protection plan; procedures addressing the development, documentation, and updating of the critical infrastructure and key resources protection plan; HSPD 7; National Infrastructure Protection Plan; other relevant documents or records.

**Interview:** Organizational personnel with information security and privacy program planning and plan implementation responsibilities; organizational personnel responsible for developing, documenting, and updating the critical infrastructure and key resources protection plan; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for developing, documenting, and updating the critical infrastructure and key resources protection plan; mechanisms supporting the development, documentation, and updating of the critical infrastructure and key resources protection plan.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PM-8 applies where the organization owns or operates critical infrastructure and key resources, or helps protect them. It asks you to address information security and privacy whenever the critical infrastructure and key resources protection plan is developed, documented or updated. NIST's PM-8 discussion says protection strategies rest on prioritizing critical assets, and that the requirements for defining critical infrastructure and preparing the plan come from applicable laws, directives and policies.

If your organization has no such role, PM-8 does not apply. Record that decision and the reason in the program plan, as the [decision worksheet](/templates/worksheets/pm/) suggests. PM-8 is in the SP 800-53B Privacy baseline.

**Common implementations.** The protection plan is often owned by an emergency management, continuity or operations office, and the security and privacy officials contribute to it. The [Program Management policy](/templates/policies/pm/) has the Chief Information Security Officer and the senior privacy official address security and privacy each time the plan is developed or updated. Their contributions usually cover:

- The critical assets and systems, prioritized from the criticality analysis ([RA-9](/controls/ra/ra-9/)) and the [business impact analysis](/templates/reports/business-impact-analysis/)
- The cyber dependencies of physical operations, such as control systems, communications and the providers behind them
- How the plan coordinates with the [contingency plan](/templates/plans/contingency-plan/) (CP-2) and its testing (CP-4), and with incident response
- Privacy safeguards for personally identifiable information shared with partners and government bodies under the plan

**Organization-defined parameters.** PM-8 has none. The family's decision worksheet poses one choice, with a typical value your organization may set differently:

| Choice | Typical value |
| --- | --- |
| Whether PM-8 applies | Only where the organization owns or operates critical infrastructure or key resources, or helps protect them; the decision is recorded in the program plan |

**Evidence assessors ask for.**

- The critical infrastructure and key resources protection plan, with its security and privacy content
- Records showing the security and privacy officials took part in its last update
- Or, where PM-8 does not apply, the recorded decision and its reason in the program plan (section 7)

**Inheritance.** PM-8 is implemented once, for the whole organization, and every system relies on it. Systems that support critical infrastructure feed their criticality and contingency information into the plan.

**Common findings.**

- A protection plan that covers physical security only, with no cyber dependencies.
- A plan not updated after major system changes or a move to new providers.
- PM-8 marked not applicable with no recorded reason.
- Sharing of personal information with partners under the plan with no privacy review.

**Enhancements.** PM-8 has no enhancements.

**Federal systems** (as of October 2026). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 5.l, in its discussion of the major provisions, says agencies that operate systems that are part of the critical infrastructure must assess risk so those systems' controls are tailored appropriately, adding controls when needed. It also calls for privacy controls that meet applicable requirements, and continuous monitoring of the controls on systems designated as critical infrastructure. A-130 defines critical infrastructure by reference to [42 U.S.C. § 5195c(e)](https://www.govinfo.gov/link/uscode/42/5195c?link-type=html).
