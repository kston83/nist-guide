---
title: Risk Register
type: form
description: The register of a system's or an organization's identified risks, their assessed level, the response decided and who owns it, based on the cybersecurity risk register in NIST IR 8286 Rev. 1.
controls: [ra-3, ra-7]
status: draft
stage: foundation
---

:::guidance
The risk register is the running list of risks and what is being done about them. Risk assessment reports add risks to it; the risk response (RA-7) and risk acceptance decisions are recorded in it; items that need remediation also go into the plan of action and milestones. The fields follow the cybersecurity risk register in [NIST IR 8286 Rev. 1](https://csrc.nist.gov/pubs/ir/8286/r1/final) (December 2025, which replaced the October 2020 original), with fields added for the system, the controls and the RMF records. Keep one register per system, rolled up into an organization-level register, usually as a spreadsheet or in a GRC tool; the register below is also downloadable as a CSV file.
:::

| Scope | Register owner | Last updated | Updated by |
| --- | --- | --- | --- |
| {{fill:system name and identifier, or "organization"}} | {{org:system-owner}} | {{fill:date}} | {{fill:name and title}} |

## How to use this register

- Add each risk identified in a risk assessment, and each risk raised by an assessment, monitoring, an audit or an incident (RA-3).
- Rate likelihood, impact and exposure with the scales in the organization's risk management strategy, so risks can be compared across systems.
- Record the response decided for each risk, in line with the organization's risk tolerance (RA-7).
- Record who accepted a risk, when, and when the acceptance expires. Only an official the risk management strategy authorizes for that risk level may accept it.
- Review open risks {{fill:for example quarterly}}, and keep closed risks with their closure date.

| Field | What to record |
| --- | --- |
| ID | A unique, permanent identifier for the risk |
| Priority | The risk's rank relative to the others in the register |
| Risk description | The threat, the vulnerability or condition it exploits, and the harm that could result |
| Risk category | The organization's category, for example operational, privacy, supply chain or compliance |
| Affected system and components | Where the risk applies |
| Related controls | The controls whose weakness or absence creates the risk, such as AC-2 or SI-2 |
| Likelihood | The current likelihood, on the organization's scale |
| Impact | The current impact, on the organization's scale |
| Exposure rating | The resulting risk level |
| Response type | Accept, avoid, mitigate, share or transfer |
| Response description | What will be done, and the plan of action and milestones item, if any |
| Response cost | The estimated cost of the response |
| Risk owner | The role accountable for the risk and its response |
| Acceptance | For an accepted risk: who accepted it, the date, the compensating measures and the expiry date |
| Status | Open, in progress, accepted or closed |
| Date identified and source | When and how the risk was found, for example the risk assessment report reference |
| Last reviewed | The date of the last review |

## Register

| ID | Priority | Risk description | Risk category | Affected system and components | Related controls | Likelihood | Impact | Exposure rating | Response type | Response description | Response cost | Risk owner | Acceptance | Status | Date identified and source | Last reviewed |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:ID}} | {{fill:priority}} | {{fill:threat, vulnerability and harm}} | {{fill:category}} | {{fill:system and components}} | {{fill:controls}} | {{fill:level}} | {{fill:level}} | {{fill:level}} | {{fill:response type}} | {{fill:response and POA&M item}} | {{fill:cost}} | {{fill:owner role}} | {{fill:who, when, measures, expiry}} | {{fill:status}} | {{fill:date and source}} | {{fill:date}} |
