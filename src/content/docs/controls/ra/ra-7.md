---
title: 'RA-7 Risk Response'
description: 'NIST SP 800-53 Rev. 5 control RA-7, Risk Response: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'RA-7 Risk Response'
  order: 7
control:
  id: RA-7
  family: RA
  baselines: [Low, Moderate, High, Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | None |

**Related controls:** [CA-5](/controls/ca/ca-5/), [IR-9](/controls/ir/ir-9/), [PM-4](/controls/pm/pm-4/), [PM-28](/controls/pm/pm-28/), [RA-2](/controls/ra/ra-2/), [RA-3](/controls/ra/ra-3/), [SR-2](/controls/sr/sr-2/)

## Control statement

Respond to findings from security and privacy assessments, monitoring, and audits in accordance with organizational risk tolerance.

<details>
<summary>NIST discussion</summary>

Organizations have many options for responding to risk including mitigating risk by implementing new controls or strengthening existing controls, accepting risk with appropriate justification or rationale, sharing or transferring risk, or avoiding risk. The risk tolerance of the organization influences risk response decisions and actions. Risk response addresses the need to determine an appropriate response to risk before generating a plan of action and milestones entry. For example, the response may be to accept risk or reject risk, or it may be possible to mitigate the risk immediately so that a plan of action and milestones entry is not needed. However, if the risk response is to mitigate the risk, and the mitigation cannot be completed immediately, a plan of action and milestones entry is generated.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for RA-7</summary>

Determine if:

- **RA-07[01]** findings from security assessments are responded to in accordance with organizational risk tolerance;
- **RA-07[02]** findings from privacy assessments are responded to in accordance with organizational risk tolerance;
- **RA-07[03]** findings from monitoring are responded to in accordance with organizational risk tolerance;
- **RA-07[04]** findings from audits are responded to in accordance with organizational risk tolerance.

**Examine:** Risk assessment policy; assessment reports; audit records/event logs; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with assessment and auditing responsibilities; system/network administrators; organizational personnel with security and privacy responsibilities.

**Test:** Organizational processes for assessments and audits; mechanisms/tools supporting and/or implementing assessments and auditing.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

RA-7 asks you to decide a response to every finding from security and privacy assessments, monitoring and audits, within the organization's risk tolerance. NIST's RA-7 discussion lists the options: mitigate with new or stronger controls, accept with a justification, share or transfer, or avoid. It also says to decide the response before creating a plan of action and milestones entry. A finding fixed at once needs no entry; a mitigation that cannot be finished at once gets one.

**Common implementations.** Every source of findings feeds one process: assessment reports, vulnerability scans, continuous monitoring, internal and external audits, and privacy assessments. The system owner proposes a response for each finding, and the official the [Risk Management Strategy](/templates/plans/risk-management-strategy/) names for that risk level decides it. The strategy's section 3.3 sets the tolerance and who may accept each level. Each decision is recorded in the [risk register](/templates/forms/risk-register/), and mitigations that take time go into the [plan of action and milestones](/templates/forms/plan-of-action-and-milestones/) (CA-5).

[SP 800-39](https://csrc.nist.gov/pubs/sp/800/39/final) (March 2011), section 3.3, describes the steps behind each decision:

- Identify the possible responses (task 3-1). Acceptance fits a risk within tolerance; avoidance, a risk above it that can be designed out; mitigation, whatever cannot be accepted, avoided, shared or transferred.
- Evaluate them for effectiveness, feasibility and cost (task 3-2).
- Decide, knowing some residual risk always remains (task 3-3).
- Implement the chosen response (task 3-4).

SP 800-39 notes that transferring risk is less applicable in the public sector, where liability is generally set by law or policy.

[SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) (December 2018) task R-3 says "the authorizing official is the only person who can accept risk" for an authorized system. Its task M-3 has the authorizing official, system owner and common control provider respond to risk from ongoing monitoring, risk assessments and open plan of action items. So where the strategy lets more than one official accept risk, make sure no one below the authorizing official accepts risk for an authorized system. Keep the accepted deficiencies documented in the assessment reports and monitor them for changes in threat, vulnerability, likelihood or impact.

**Organization-defined parameters.** RA-7 has none. In the [Risk Assessment policy](/templates/policies/ra/), the system owner responds to findings within the risk tolerance set in the risk management strategy and records each response as a remediation, a plan of action and milestones item, or a risk acceptance. Only an official the strategy authorizes for that level may accept a risk.

**Evidence assessors ask for.**

- The risk management strategy, showing the tolerance and who may accept each risk level
- The risk register, with a response recorded for each risk
- A sample of findings from the last assessment, recent scans, an audit and a privacy assessment, each traced to a fix, a plan of action and milestones item or an acceptance
- Signed risk acceptances, each with the risk, its level, the reason, the compensating measures, the official who accepted it and an expiry or review date
- The plan of action and milestones, with dates that are being met

**Inheritance.** The organization provides the risk management strategy, the tolerance and the acceptance authority as common elements. Responding to the system's own findings is system-specific; a common control provider responds to findings in the controls it provides.

**Common findings.**

- Findings with no recorded decision, especially from audits and privacy assessments, which often sit outside the assessment and scanning workflow.
- Risks accepted by someone with no authority to accept them, such as a system administrator closing scan findings as "accepted".
- Acceptances with no expiry or review date, never revisited after the threat changed.
- A plan of action and milestones used as a standing acceptance, with dates pushed back again and again.
- False positives closed with no documented analysis.

**Enhancements in the Moderate baseline.** RA-7 has no enhancements.
