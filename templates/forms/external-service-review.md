---
title: External Service Review
type: form
description: The review of one external system service before the organization uses it and at each review after that, covering the contract's security and privacy requirements, the provider's evidence of compliance, the shared responsibilities and the decision, with a register of every external service and its next review, as SP 800-53 SA-9 requires.
controls: [sa-9, sa-9.2, sa-4, ca-3, ca-5]
status: draft
stage: operate
typical:
  sa-09_odp.01: 'the controls of the system''s baseline that the provider is responsible for, per the shared responsibility matrix, with evidence from an independent attestation'
  sa-09_odp.02: 'annual review of independent attestation reports, review of the provider''s continuous monitoring or status reports, and contract service reviews'
  sa-09.02_odp: 'all external system services that connect to the system'
---

:::guidance
Use one review for each external system service: a cloud platform, software as a service, hosting, managed security or other service the system relies on but does not run. Complete it before the contract is awarded or the service is first used, then again at each annual review and whenever a trigger in section 7 occurs. NIST's SA-9 discussion keeps the responsibility for the risk of external services with the authorizing official, and has the organization document the basis of its trust in each provider so the relationship can be monitored; this review is that record. The contract terms themselves come from the [acquisition security requirements](/templates/standards/acquisition-security-requirements/) (SA-4), and a connection or data exchange with the service also needs an [information exchange agreement](/templates/forms/information-exchange-agreement/) (CA-3) or the same terms in the contract. The register at the end lists every external service and when it is next reviewed.
:::

| Review ID | Review type | Review date | Reviewer | Next review due |
| --- | --- | --- | --- | --- |
| {{fill:unique ID, as in the register}} | {{fill:initial (before use), annual, or triggered, with the trigger}} | {{fill:date}} | {{fill:name and title}} | {{fill:date}} |

## 1. Service and provider

| Item | Description |
| --- | --- |
| Service name and edition | {{fill:the service, and the edition or tier actually used}} |
| Provider | {{fill:organization, and any sub-service providers the service relies on, such as the hosting platform}} |
| Service type | {{fill:infrastructure, platform or software as a service; hosting; managed security; other outsourced operation}} |
| Systems that rely on it | {{fill:system names and identifiers}} |
| Business purpose | {{fill:why the organization uses the service}} |
| Contract or agreement | {{fill:contract number, term and end date, or the online terms accepted and their date}} |
| Information and impact level | {{fill:each type of information the service processes, stores or transmits, with its impact level}} |
| Personally identifiable information | {{fill:the types involved, or "none"}} |
| Data location | {{fill:countries or regions where data is stored and processed, including backups and support access}} |
| Connection to the system | {{fill:how the system connects, and the information exchange agreement ID, or "no connection"}} |
| Service owner | {{fill:name and title of the person who manages the relationship}} |

## 2. Security and privacy requirements in the contract

This section confirms the contract or service agreement states the organization's requirements before the service is used.

- The provider shall comply with the organization's security and privacy requirements and employ {{param:sa-09_odp.01}}. (SA-9a)

| Requirement | In the contract (yes, no or not applicable) | Where | Notes |
| --- | --- | --- | --- |
| Controls the provider implements, and the baseline or framework they meet | {{fill:answer}} | {{fill:clause}} | {{fill:notes}} |
| Independent attestation provided, and how often | {{fill:answer}} | {{fill:clause}} | {{fill:notes}} |
| Security incident and breach notification, with the time | {{fill:answer}} | {{fill:clause}} | {{fill:notes}} |
| Notice of significant changes to the service, its sub-service providers or its data locations | {{fill:answer}} | {{fill:clause}} | {{fill:notes}} |
| Functions, ports, protocols and services the service needs, identified by the provider | {{fill:answer}} | {{fill:clause}} | {{fill:notes}} |
| Privacy requirements, such as use limits and breach notification | {{fill:answer}} | {{fill:clause}} | {{fill:notes}} |
| Data location limits | {{fill:answer}} | {{fill:clause}} | {{fill:notes}} |
| Availability, backup and recovery commitments | {{fill:answer}} | {{fill:clause}} | {{fill:notes}} |
| Right to assess, or access to evidence on request | {{fill:answer}} | {{fill:clause}} | {{fill:notes}} |
| Return and deletion of the organization's data when the service ends | {{fill:answer}} | {{fill:clause}} | {{fill:notes}} |
| Requirements flowed down to the provider's subcontractors | {{fill:answer}} | {{fill:clause}} | {{fill:notes}} |

- The reviewer shall record each requirement that is missing, and the service shall not be used until it is added or the risk is accepted in section 6. (SA-9a)

## 3. Evidence of the provider's compliance

| Item | Description |
| --- | --- |
| Evidence type | {{fill:for example an independent service auditor's report on controls, a certification against a security standard, a government authorization, or the organization's own assessment}} |
| Issued by | {{fill:the independent assessor or authorizing body}} |
| Period or date covered | {{fill:start and end dates, or the certificate's validity}} |
| Scope matches the service used | {{fill:yes, or what is outside the scope}} |
| Result | {{fill:for example an unqualified opinion, or the qualifications and exceptions}} |
| Sub-service providers included or carved out | {{fill:list}} |

Exceptions and customer controls:

| Item from the evidence | Type | Effect on the system | Action | Tracked in |
| --- | --- | --- | --- | --- |
| {{fill:exception, or customer control the report expects the organization to operate}} | {{fill:exception or customer control}} | {{fill:effect}} | {{fill:what the organization does about it}} | {{fill:POA&M item, system security plan section, or "none needed"}} |

- The reviewer shall confirm the evidence is current and covers the service actually used. (SA-9c)
- The reviewer shall follow up each exception in the evidence, and each customer control the evidence expects the organization to operate, and record weaknesses that affect the system in its plan of action and milestones. (SA-9c, CA-5)

## 4. Shared responsibilities

| Control or area | Provider | {{org:name}} | Shared | Where recorded in the system security plan |
| --- | --- | --- | --- | --- |
| {{fill:for example account management, logging, encryption, backup, vulnerability remediation}} | {{fill:what the provider does}} | {{fill:what the organization does}} | {{fill:yes or no}} | {{fill:section}} |

Oversight and user roles:

| Role | Who | Responsibilities for this service |
| --- | --- | --- |
| Service owner | {{fill:name and title}} | {{fill:for example managing the contract, receiving the provider's reports and notices}} |
| Security oversight | {{fill:name and title}} | {{fill:for example this review, and reviewing the provider's evidence each year}} |
| Administrators | {{fill:team}} | {{fill:for example configuring the organization's settings and accounts in the service}} |
| Users | {{fill:group}} | {{fill:for example using the service only for the approved purpose and information}} |

- The {{org:system-owner}} shall record the oversight roles, the user roles and the shared responsibility matrix for the service, and show each control in the system security plan as inherited, shared or system-owned. (SA-9b)

## 5. Functions, ports, protocols and services

This section applies to {{param:sa-09.02_odp}}.

| Function or service | Port and protocol | Direction | Allowed under the organization's list (CM-7) | Boundary rule (SC-7) |
| --- | --- | --- | --- | --- |
| {{fill:function}} | {{fill:port and protocol}} | {{fill:inbound or outbound}} | {{fill:yes, or the exception}} | {{fill:rule reference}} |

- The {{org:system-owner}} shall require the provider to identify the functions, ports, protocols and other services required for the use of the service, and record the list in the system security plan. (SA-9(2))
- The reviewer shall check the list against the organization's prohibited and restricted functions, ports, protocols and services before the service is used. (SA-9(2))

## 6. Risks and decision

| Risk or weakness | Rating | Response | Tracked in |
| --- | --- | --- | --- |
| {{fill:risk}} | {{fill:rating}} | {{fill:mitigate, accept, transfer or avoid, with the measures}} | {{fill:risk register or POA&M item}} |

Decision: {{fill:approved for use; approved with conditions, listed below; or not approved}}.

Conditions: {{fill:conditions, or "none"}}.

- A risk that remains after the review shall be accepted by the authorizing official for each system that relies on the service, before the service is used. (SA-9)

## 7. Ongoing monitoring

- The {{org:system-owner}} shall employ {{param:sa-09_odp.02}} to monitor the provider's control compliance on an ongoing basis. (SA-9c)
- The {{org:system-owner}} shall repeat this review at least annually, when new evidence from the provider arrives, and when any of these occurs: a security incident or breach at the provider that affects the service, a significant change to the service or its sub-service providers, new evidence with exceptions, a change in the information the organization puts in the service or its impact level, or a contract renewal. (SA-9c)

| Monitoring activity | Frequency | Who | Last done |
| --- | --- | --- | --- |
| Review of the provider's independent attestation | {{fill:for example each year, when the new report is issued}} | {{fill:role}} | {{fill:date}} |
| Review of the provider's status or continuous monitoring reports | {{fill:for example monthly or as they arrive}} | {{fill:role}} | {{fill:date}} |
| Contract service review | {{fill:for example quarterly}} | {{fill:role}} | {{fill:date}} |
| Check of the provider's security notices and advisories | {{fill:for example as they arrive}} | {{fill:role}} | {{fill:date}} |

## 8. Approval

| Name | Role | Decision or recommendation | Signature | Date |
| --- | --- | --- | --- | --- |
| {{fill:name}} | Reviewer, security team | {{fill:recommendation}} | | {{fill:date}} |
| {{fill:name}} | System owner | {{fill:recommendation}} | | {{fill:date}} |
| {{fill:name}} | Authorizing official | {{fill:decision, and risk acceptance where section 6 needs it}} | | {{fill:date}} |

:::federal
[OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.j(2)(a) and (b), requires agencies to provide oversight of information systems used or operated by contractors or other entities on behalf of the Federal Government, including documented oversight policies and procedures, and to ensure that the security and privacy controls of those systems and services are effectively implemented and comply with NIST standards and guidelines and agency requirements. Under [OMB M-24-15](https://www.fedramp.gov/2026/authority/m-24-15/), Modernizing the Federal Risk and Authorization Management Program (July 25, 2024), agencies must obtain and maintain a FedRAMP authorization for cloud products and services that create, collect, process, store or maintain Federal information on the agency's behalf, unless the memo places them out of scope; agencies use the FedRAMP authorization package to issue their own authorization to operate or use (footnote 7). The assessment of security controls and materials in a FedRAMP authorization package is presumed adequate for use in an agency authorization to operate, which does not alter the agency's own responsibility for compliance or its authority to require more where it has a demonstrable need ([44 U.S.C. § 3613(e)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title44-section3613&num=0&edition=prelim)). As of September 2026.

- For a cloud product or service within the scope of OMB M-24-15, the reviewer shall record its FedRAMP authorization and impact level in section 3, and the service shall not process Federal information without one. (SA-9a)
- The authorizing official shall issue the agency's own authorization to use a FedRAMP-authorized service, relying on the FedRAMP package's assessment as 44 U.S.C. § 3613(e) provides, and recording any agency-specific requirements beyond it with the demonstrable need for them. (SA-9)
- For a system a contractor or other entity operates on the agency's behalf, the {{org:system-owner}} shall record in this review how the agency oversees it and verifies that its controls are effectively implemented, as OMB Circular A-130, Appendix I, section 4.j(2), requires. (SA-9c)

:::

## Register

| Review ID | Service | Provider | Systems that rely on it | Service type | Information and impact level | Evidence type and period end | Last review | Decision | Open exceptions | Next review due | Service owner |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:ID}} | {{fill:service}} | {{fill:provider}} | {{fill:systems}} | {{fill:type}} | {{fill:information and impact level}} | {{fill:evidence and date}} | {{fill:date}} | {{fill:approved, approved with conditions, or not approved}} | {{fill:number, with POA&M items}} | {{fill:date}} | {{fill:name}} |
