---
title: Roles and responsibilities
description: Who does what in the RMF, from the head of agency to the control assessor, with a responsibility matrix by step.
---

The system owner does most of the RMF work, the control assessor checks it, and only the Authorizing Official (AO) can accept the risk. Roles follow SP 800-37 Rev. 2 Appendix D; one person may hold several roles, except that the AO and assessor must stay independent of the system owner's day-to-day work.

| Role | Also called | What they own in the RMF |
| --- | --- | --- |
| Head of agency | Secretary, Director | Ultimate accountability for risk; appoints the CIO, SAISO, SAOP and AOs |
| Risk executive (function) | Enterprise risk council | Sets organization-wide risk tolerance and keeps AOs consistent with each other |
| Chief Information Officer (CIO) | | Runs the IT program; designates the SAISO; often an AO for enterprise systems |
| Senior Agency Information Security Officer (SAISO) | CISO | Security program, ISCM strategy, common control oversight, agency-wide reporting |
| Senior Agency Official for Privacy (SAOP) | Chief Privacy Officer | Privacy program; reviews privacy categorization, privacy controls and privacy risk before authorization |
| Authorizing Official (AO) | Designated Approving Authority (legacy) | Approves categorization, the security and privacy plans and assessment plan; accepts residual risk; signs the authorization decision |
| AO designated representative (AODR) | | Does the AO's legwork; cannot sign the decision or accept risk |
| System owner | Information system owner, program manager | Builds and runs the system; prepares the authorization package; owns the POA&M |
| Information owner or steward | Data owner | Rules for the information; key input to information types and impact levels |
| Mission or business owner | | Defines the mission, business value and acceptable downtime |
| Information System Security Officer (ISSO) | System security officer | Day-to-day security operations; keeps the SSP, POA&M and continuous monitoring current |
| Information System Security Manager (ISSM) | DoD term; not in NIST | Oversees ISSOs for a program or enclave; common in DoD and the IC |
| System privacy officer | | Privacy plan, privacy impact assessment (PIA), privacy control operation |
| Common control provider (CCP) | Enterprise service owner | Implements, documents, assesses and monitors controls other systems inherit |
| Control assessor | Security control assessor (SCA), 3PAO in FedRAMP | Plans and runs assessments; writes the security and privacy assessment reports |
| Security architect and systems security engineer | | Designs controls into the architecture; allocates requirements to components |

## Who does what at each step

R = does the work, A = approves or decides, C = contributes or reviews.

| Step | AO | System owner | ISSO | Control assessor | Common control provider | SAISO | SAOP |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 Prepare, organization (P-1 to P-7) | C | | | | R | R | R |
| 0 Prepare, system (P-8 to P-18) | A (boundary, P-11) | R | C | | C | C | C |
| 1 Categorize (C-1 to C-3) | A (C-3) | R | C | | | C | C |
| 2 Select (S-1 to S-6) | A (S-6) | R | R | | R | C | C |
| 3 Implement (I-1, I-2) | | R | R | | R | | |
| 4 Assess (A-1 to A-6) | A (A-1, A-2) | R (A-5, A-6) | C | R (A-2 to A-4) | R | | C |
| 5 Authorize (R-1 to R-5) | A (R-2 to R-5) | R (R-1) | C | C | R | C | C |
| 6 Monitor (M-1 to M-7) | A (M-4, M-6) | R | R | R (M-2) | R | C | C |

The head of agency and risk executive hold overall accountability for Prepare at the organization level. Your agency may shift approvals (for example, letting the AODR approve the assessment plan); write those delegations down during task P-1.
