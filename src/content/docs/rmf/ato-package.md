---
title: ATO package checklist
description: The four required authorization documents and the supporting artifacts AOs expect, with where each is produced.
---

SP 800-37 requires four documents in every authorization package: an executive summary, the security and privacy plans, the assessment reports and the POA&M. In practice AOs also expect the supporting artifacts below, most of which are attachments to the SSP or evidence for specific controls. Use this list to check completeness before task R-1.

| Artifact | Required or supporting | Produced in | Owner |
| --- | --- | --- | --- |
| Executive summary | Required | [Authorize](/rmf/steps/authorize/) (R-1) | System owner |
| System security and privacy plans (SSP) | Required | [Select](/rmf/steps/select/) (S-4), updated in [Implement](/rmf/steps/implement/) (I-2) | System owner, ISSO |
| [Security and privacy assessment reports (SAR)](/templates/reports/security-and-privacy-assessment-report/) | Required | [Assess](/rmf/steps/assess/) (A-4) | Control assessor |
| Plan of action and milestones (POA&M) | Required | [Assess](/rmf/steps/assess/) (A-6) | System owner |
| FIPS 199 categorization with approval | Supporting | [Categorize](/rmf/steps/categorize/) (C-2, C-3) | System owner, AO |
| Boundary, network and data flow diagrams | Supporting | [Prepare](/rmf/steps/prepare/) (P-11), updated in Implement | System owner |
| Hardware and software inventory; ports, protocols and services | Supporting | Prepare (P-10), Implement | System owner |
| Privacy threshold analysis, PIA and SORN | Supporting (required if PII) | Prepare, Select | Privacy officer |
| System risk assessment | Supporting | Prepare (P-14), refreshed after Assess | System owner |
| [Security assessment plan (SAP)](/templates/plans/security-and-privacy-assessment-plan/) | Supporting | Assess (A-2) | Control assessor |
| Scan results and penetration test report | Supporting | Assess (A-3) | Control assessor |
| Configuration management plan and baselines | Supporting | Select, Implement | System owner |
| Contingency plan, business impact analysis and test report | Supporting | Select, Implement | System owner |
| Incident response plan and exercise report | Supporting | Select, Implement | ISSO |
| [Interconnection agreements (ISA, MOU)](/templates/forms/information-exchange-agreement/) | Supporting | Prepare, Implement | System owner |
| [Continuous monitoring strategy](/templates/plans/continuous-monitoring-strategy/) | Supporting | Select (S-5) | System owner, ISSO |
| Customer responsibility matrix for inherited services | Supporting | Select (S-3) | System owner, CCP |
| Digital identity risk assessment ([SP 800-63-4](https://pages.nist.gov/800-63-4/)) | Supporting | Select, Implement | System owner |
| Policies, procedures and rules of behavior | Supporting | Select, Implement | CISO office, system owner |
| Risk acceptance memos | Supporting (if any) | Authorize (R-3) | AO |
| Authorization decision document | Output of the process | Authorize (R-4) | AO |

## Deficiencies that send packages back

- The SSP, diagrams and inventory describe different systems.
- The SAR is draft, unsigned or older than the agency's freshness limit.
- High-risk weaknesses with no POA&M entry, milestone or risk acceptance.
- Inherited controls claimed with no provider authorization or responsibility matrix.
- Missing privacy artifacts for a system that processes PII.
- Executive summary lists control counts but not the actual risks.
