---
title: 'PM-9 Risk Management Strategy'
description: 'NIST SP 800-53 Rev. 5 control PM-9, Risk Management Strategy: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PM-9 Risk Management Strategy'
  order: 9
control:
  id: PM-9
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

**Related controls:** [AC-1](/controls/ac/ac-1/), [AU-1](/controls/au/au-1/), [AT-1](/controls/at/at-1/), [CA-1](/controls/ca/ca-1/), [CA-2](/controls/ca/ca-2/), [CA-5](/controls/ca/ca-5/), [CA-6](/controls/ca/ca-6/), [CA-7](/controls/ca/ca-7/), [CM-1](/controls/cm/cm-1/), [CP-1](/controls/cp/cp-1/), [IA-1](/controls/ia/ia-1/), [IR-1](/controls/ir/ir-1/), [MA-1](/controls/ma/ma-1/), [MP-1](/controls/mp/mp-1/), [PE-1](/controls/pe/pe-1/), [PL-1](/controls/pl/pl-1/), [PL-2](/controls/pl/pl-2/), [PM-2](/controls/pm/pm-2/), [PM-8](/controls/pm/pm-8/), [PM-18](/controls/pm/pm-18/), [PM-28](/controls/pm/pm-28/), [PM-30](/controls/pm/pm-30/), [PS-1](/controls/ps/ps-1/), [PT-1](/controls/pt/pt-1/), [PT-2](/controls/pt/pt-2/), [PT-3](/controls/pt/pt-3/), [RA-1](/controls/ra/ra-1/), [RA-3](/controls/ra/ra-3/), [RA-9](/controls/ra/ra-9/), [SA-1](/controls/sa/sa-1/), [SA-4](/controls/sa/sa-4/), [SC-1](/controls/sc/sc-1/), [SC-38](/controls/sc/sc-38/), [SI-1](/controls/si/si-1/), [SI-12](/controls/si/si-12/), [SR-1](/controls/sr/sr-1/), [SR-2](/controls/sr/sr-2/)

## Control statement

- **a.** Develops a comprehensive strategy to manage:
  - **1.** Security risk to organizational operations and assets, individuals, other organizations, and the Nation associated with the operation and use of organizational systems; and
  - **2.** Privacy risk to individuals resulting from the authorized processing of personally identifiable information;
- **b.** Implement the risk management strategy consistently across the organization; and
- **c.** Review and update the risk management strategy [Assignment: organization-defined frequency] or as required, to address organizational changes.

<details>
<summary>NIST discussion</summary>

An organization-wide risk management strategy includes an expression of the security and privacy risk tolerance for the organization, security and privacy risk mitigation strategies, acceptable risk assessment methodologies, a process for evaluating security and privacy risk across the organization with respect to the organization’s risk tolerance, and approaches for monitoring risk over time. The senior accountable official for risk management (agency head or designated official) aligns information security management processes with strategic, operational, and budgetary planning processes. The risk executive function, led by the senior accountable official for risk management, can facilitate consistent application of the risk management strategy organization-wide. The risk management strategy can be informed by security and privacy risk-related inputs from other sources, both internal and external to the organization, to ensure that the strategy is broad-based and comprehensive. The supply chain risk management strategy described in PM-30 can also provide useful inputs to the organization-wide risk management strategy.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PM-9</summary>

Determine if:

- **PM-09a.**
  - **PM-09a.01** a comprehensive strategy is developed to manage security risk to organizational operations and assets, individuals, other organizations, and the Nation associated with the operation and use of organizational systems;
  - **PM-09a.02** a comprehensive strategy is developed to manage privacy risk to individuals resulting from the authorized processing of personally identifiable information;
- **PM-09b.** the risk management strategy is implemented consistently across the organization;
- **PM-09c.** the risk management strategy is reviewed and updated [Assignment: organization-defined frequency] or as required to address organizational changes.

**Examine:** Information security program plan; privacy program plan; risk management strategy; supply chain risk management strategy; procedures addressing the development, implementation, review, and update of the risk management strategy; risk assessment results relevant to the risk management strategy; other relevant documents or records.

**Interview:** Organizational personnel with information security and privacy program planning and plan implementation responsibilities; organizational personnel responsible for the development, implementation, review, and update of the risk management strategy; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for the development, implementation, review, and update of the risk management strategy; mechanisms supporting the development, implementation, review, and update of the risk management strategy.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PM-9 asks for one organization-wide strategy for managing two kinds of risk. One is security risk from operating and using your systems; the other is privacy risk to individuals from processing personally identifiable information. You apply it consistently across the organization (b), and review and update it at a set frequency or when organizational changes require it (c). PM-9 is in the SP 800-53B Privacy baseline.

NIST's PM-9 discussion lists what the strategy includes: the organization's security and privacy risk tolerance, risk mitigation strategies, acceptable risk assessment methodologies, a process for evaluating risk across the organization against the tolerance, and approaches for monitoring risk over time. [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) task P-2 asks for the same strategy, "that includes a determination of risk tolerance", with the head of the organization primarily responsible. It may be one document or separate security and privacy documents. [SP 800-39](https://csrc.nist.gov/pubs/sp/800/39/final) organizes it around framing, assessing, responding to and monitoring risk; the framing part is [PM-28](/controls/pm/pm-28/).

**Common implementations.** One strategy document, built from the [Risk Management Strategy template](/templates/plans/risk-management-strategy/), which follows SP 800-39's four components. The [Program Management policy](/templates/policies/pm/) has the Chief Information Security Officer develop it, with the senior privacy official for privacy risk, and the senior leader approve it. The Chief Information Security Officer then applies it across the organization and reviews it.

Write it so others can use it:

- A risk tolerance for each assessed risk level, with conditions and the roles to consult, that an authorizing official can apply (template section 3.3)
- One assessment methodology and one scale for every system, usually based on [SP 800-30 Rev. 1](https://csrc.nist.gov/pubs/sp/800/30/r1/final) (section 4)
- The response options, and a record of every accepted risk (section 5)
- Risk monitoring through the [Continuous Monitoring Strategy](/templates/plans/continuous-monitoring-strategy/) (section 6)

Consistent application (b) is what assessors probe. System risk assessments ([RA-3](/controls/ra/ra-3/)) use the strategy's method and scale, authorization decisions refer to its tolerance, and plan of action and milestones priorities follow it ([PM-4](/controls/pm/pm-4/)). NIST's discussion says the risk executive (function), led by the senior accountable official for risk management, can help apply the strategy consistently ([PM-29](/controls/pm/pm-29/)). It also names the supply chain risk management strategy ([PM-30](/controls/pm/pm-30/)) as an input.

Only the authorizing official accepts risk for an authorized system. SP 800-37 Rev. 2 task R-3 says "the authorizing official is the only person who can accept risk." The strategy sets the tolerance and names who the authorizing official consults at each risk level; it does not let anyone else accept the risk.

**Organization-defined parameters.** From `templates/policy/pm/`. Typical value, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Strategy review and update frequency (c) | Annually, and whenever organizational changes require it |

**Evidence assessors ask for.**

- The approved strategy, with the senior leader's approval, the date and the version history
- The statement of risk tolerance, and the privacy risk content developed with the senior privacy official (a.2)
- The record of the last review, and of updates made after organizational changes (c)
- A sample of system risk assessments that use the strategy's methodology and scale
- A sample of authorization decisions and risk acceptances that refer to the tolerance, each signed by the authorizing official

**Inheritance.** PM-9 is implemented once, for the whole organization, and every system relies on it. NIST's PM-1 discussion treats program management controls as independent of any system and distinct from common controls. Each system applies the strategy in its own risk assessment and authorization.

**Common findings.**

- A strategy that covers security risk only, with nothing on privacy risk to individuals (a.2).
- A risk tolerance of one word, such as "low", that no authorizing official can apply to a decision.
- Systems that each use their own risk scale, so their risks cannot be compared.
- A strategy approved once and never reviewed, naming offices that no longer exist.
- Risks accepted by system owners or the Chief Information Security Officer rather than the authorizing official.

**Enhancements.** PM-9 has no enhancements.

**Federal systems** (as of October 2026). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 3.a, says "agencies shall implement an agency-wide risk management process that frames, assesses, responds to, and monitors information security and privacy risk on an ongoing basis across the three organizational tiers." Its footnote 76 points to SP 800-39 and to section 5.b. Section 5.b, in the discussion of major provisions, says the strategy "describes how an agency intends to assess risk, respond to risk, and monitor risk," and that a credible one identifies risk assumptions, constraints, tolerance, and priorities and trade-offs. FISMA has the agency head ensure that information security management processes are integrated with strategic, operational and budgetary planning ([44 U.S.C. § 3554(a)(1)(C)](https://www.govinfo.gov/link/uscode/44/3554?link-type=html)).
