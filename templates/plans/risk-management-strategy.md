---
title: Risk Management Strategy
type: plan
description: The organization-wide strategy for how the organization frames, assesses, responds to and monitors security and privacy risk, including its risk tolerance, following NIST SP 800-39 and RMF Prepare task P-2.
controls: [pm-9, pm-28, pm-29, pm-31]
status: draft
stage: foundation
typical:
  pm-09_odp: annually
  pm-28_odp.01: authorizing officials, system owners, and the leaders of mission and business functions
  pm-28_odp.02: annually, with this strategy
---

:::guidance
In [NIST SP 800-39](https://csrc.nist.gov/pubs/sp/800/39/final) (March 2011, current as of September 2026), risk framing "produces a risk management strategy that addresses how organizations intend to assess risk, respond to risk, and monitor risk" (section 3.1). The sections below follow its four components: frame, assess, respond and monitor. RMF task P-2 in [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) asks for the same strategy, "that includes a determination of risk tolerance". Its discussion lists what the strategy includes: risk tolerance, acceptable risk assessment methodologies and risk response strategies, a process for evaluating risk consistently across the organization, and approaches for monitoring risk over time. Every authorization decision should be traceable to this document, so write the risk tolerance so that an authorizing official can apply it.
:::

| Organization | Strategy version | Approved by | Approval date | Next review |
| --- | --- | --- | --- | --- |
| {{org:name}} | {{fill:version}} | {{org:senior-leader}} | {{fill:date}} | {{fill:date}} |

## 1. Purpose and scope

This strategy sets out how {{org:name}} manages security risk to its operations and assets, individuals, other organizations and the Nation from operating and using its systems (PM-9a.1), and privacy risk to individuals from its authorized processing of personally identifiable information (PM-9a.2). It applies across the organization, and every system's risk decisions follow it (PM-9b).

Supply chain risk is managed under the supply chain risk management strategy (PM-30), which follows the risk tolerance set here.

## 2. Governance

| Role | Part in risk management |
| --- | --- |
| {{org:senior-leader}} | Approves this strategy and sets risk tolerance (PM-28a.4) |
| Senior accountable official for risk management | Aligns security and privacy risk management with strategic, operational and budget planning (PM-29a) |
| Risk executive (function) | Reviews risk across the organization, resolves conflicts between units, and keeps decisions consistent (PM-29b). Members: {{fill:members}}. Meets {{fill:how often}} |
| {{org:ciso}} | Maintains this strategy and runs the processes in it |
| {{org:privacy-official}} | Assesses and advises on privacy risk |
| Authorizing officials | Accept risk for their systems within the tolerance in section 3.3 |
| {{org:system-owner}} | Assesses and responds to risk for the system, and proposes risk acceptance |

## 3. Risk framing

:::guidance
Framing is the context every other risk decision uses: SP 800-39 tasks 1-1 to 1-4. Keep each entry short and specific. "We assume attackers will target our public web services" is useful; "we take threats seriously" is not.
:::

### 3.1 Assumptions

The assumptions that affect how {{org:name}} assesses, responds to and monitors risk (PM-28a.1):

| Topic | Assumption |
| --- | --- |
| Threat sources | {{fill:who is likely to attack or disrupt the organization, for example criminal groups seeking ransom, insiders, suppliers, natural hazards}} |
| Vulnerabilities and conditions | {{fill:for example reliance on a few cloud providers, legacy systems that cannot be patched quickly}} |
| Consequences | {{fill:the harms that matter most, for example loss of service to customers, disclosure of personal data}} |
| Likelihood | {{fill:how likelihood is judged, for example from incident history, threat intelligence and sector reports}} |

### 3.2 Constraints

The constraints on risk assessment, response and monitoring (PM-28a.2): {{fill:for example budget limits, laws and contracts, legacy technology, staffing, supplier contracts}}.

### 3.3 Risk tolerance

:::guidance
Risk tolerance is the level of risk the organization will accept in pursuit of its mission. Say it per risk level and per impact type, and say who can accept each level. Tie the levels to the scale in section 4, so an assessed risk maps straight to a decision maker.
:::

The {{org:senior-leader}} sets the organization's risk tolerance as follows (PM-28a.4):

| Assessed risk level | Tolerance | Who may accept it | Conditions |
| --- | --- | --- | --- |
| Very high | {{fill:for example not accepted; the system does not operate until the risk is reduced}} | {{fill:role}} | {{fill:conditions}} |
| High | {{fill:for example accepted only for a limited time with a plan of action}} | {{fill:role, for example the senior leader}} | {{fill:for example no longer than 90 days}} |
| Moderate | {{fill:tolerance}} | {{fill:role, for example the authorizing official}} | {{fill:conditions}} |
| Low | {{fill:tolerance}} | {{fill:role, for example the authorizing official}} | {{fill:conditions}} |
| Very low | {{fill:tolerance}} | {{fill:role, for example the system owner}} | {{fill:conditions}} |

Additional statements of tolerance: {{fill:for example no tolerance for loss of personal data of more than a set number of individuals; no single outage of a mission-essential service longer than a set time}}.

### 3.4 Priorities and trade-offs

The priorities and trade-offs {{org:name}} considers in managing risk (PM-28a.3): {{fill:for example mission-essential services before internal services; availability of patient-facing systems weighed against speed of patching}}.

### 3.5 Distribution

The {{org:ciso}} shall distribute the results of risk framing, this section, to {{param:pm-28_odp.01}}. (PM-28b)

## 4. Risk assessment

:::guidance
Name one methodology and one scale for the whole organization, so risks from different systems can be compared. NIST SP 800-30 Rev. 1 (September 2012) is the usual reference for the method; SP 800-39 calls this component threat and vulnerability identification (task 2-1) and risk determination (task 2-2).
:::

| Item | Approach |
| --- | --- |
| Methodology | {{fill:for example NIST SP 800-30 Rev. 1, tailored as described here}} |
| Scale | {{fill:for example five qualitative levels, very low to very high, for likelihood, impact and risk}} |
| How likelihood and impact combine | {{fill:for example the risk matrix in an appendix}} |
| Threat information | {{fill:sources, for example the threat awareness program (PM-16), sector sharing groups, vendor advisories}} |
| Organization-level assessment | {{fill:how often the organization-wide risk assessment is done, and by whom}} |
| System-level assessments | Each system follows RA-3 and the risk assessment policy, using this methodology and scale |
| Privacy risk | {{fill:how privacy risk is assessed, for example through privacy impact assessments}} |

## 5. Risk response

:::guidance
SP 800-39 splits response into identifying responses, evaluating alternatives, deciding and implementing (tasks 3-1 to 3-4). Assessors check that accepted risks were accepted by someone allowed to accept them, so keep the record in section 5.3.
:::

### 5.1 Response options

For each risk above the tolerance in section 3.3, the system owner proposes one of these responses: accept, avoid, mitigate, share or transfer. The proposal evaluates the alternatives for cost, effectiveness and effect on the mission.

### 5.2 Decisions

The role named in section 3.3 for the assessed risk level decides the response. Mitigations are tracked in the system's plan of action and milestones (CA-5), within the organization's plan of action and milestones process (PM-4).

### 5.3 Record of accepted risk

Each risk acceptance is recorded with the risk, its level, the reason, the compensating measures, the person who accepted it and an expiry date, in {{fill:where accepted risks are recorded, for example the risk register}}.

## 6. Risk monitoring

Risk is monitored under the continuous monitoring strategy (PM-31), which sets the metrics, frequencies and reporting. These events trigger a new assessment of the affected risk: {{fill:for example a significant change to a system, a major incident, a new threat or vulnerability affecting the organization, a change in law or mission}}.

## 7. Approval

| Name | Title | Signature | Date |
| --- | --- | --- | --- |
| {{fill:name}} | {{org:senior-leader}} | | {{fill:date}} |

## 8. Review and change history

- The {{org:ciso}} shall review and update this strategy {{param:pm-09_odp}}, and whenever organizational changes require it. (PM-9c)
- The {{org:ciso}} shall review and update the risk framing in section 3 {{param:pm-28_odp.02}}. (PM-28c)

| Version | Date | Change | Approved by |
| --- | --- | --- | --- |
| {{fill:version}} | {{fill:date}} | {{fill:summary of change}} | {{fill:name and title}} |

<!-- TODO(verify): federal block. Confirm the exact OMB Circular A-130 requirement for an organization-wide risk management strategy (Appendix I section and wording) before citing it. -->
