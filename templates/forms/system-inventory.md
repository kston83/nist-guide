---
title: System Inventory
type: form
description: The organization-wide register of its systems, each with an owner, categorization, authorization status and boundary, and whether it processes personally identifiable information, as SP 800-53 PM-5 and PM-5(1) require.
controls: [pm-5, pm-5.1]
status: draft
stage: foundation
typical:
  pm-05_odp: quarterly, and whenever a system is authorized, significantly changed or retired
  pm-05.01_odp: at least annually, and whenever a privacy impact assessment is completed or updated
---

:::guidance
The system inventory lists every system the security program is responsible for. It is the starting point for authorization, continuous monitoring and reporting: a system that is not on it has no owner, no authorization and no assessment. Assessors compare it with authorization records, network scans and the list of cloud services in use, and look for systems missing from it. CM-8 is a different inventory: the components inside one system. Keep the register in a spreadsheet or a GRC tool; it is also downloadable as a CSV file.
:::

| Organization | Maintained by | Last updated | Updated by |
| --- | --- | --- | --- |
| {{org:name}} | {{org:ciso}} | {{fill:date}} | {{fill:name and title}} |

## How to use this register

- Add a system when it is first planned, and before it is authorized or placed in operation (PM-5).
- Update the register {{param:pm-05_odp}} (PM-5).
- Mark each system that processes personally identifiable information, and review those entries with the {{org:privacy-official}} {{param:pm-05.01_odp}} (PM-5(1)).
- Keep retired systems, with their retirement date, so the history supports audits.
- Record a system provided by an external service (for example a software-as-a-service application) as its own entry when the organization is responsible for authorizing its use.

| Field | What to record |
| --- | --- |
| ID | A unique, permanent system identifier |
| System name | The system's name, and any previous names |
| Description | What the system does and the mission or business function it supports |
| System owner | The role and organizational unit that owns the system |
| Authorizing official | The official who authorizes the system |
| Security categorization | The impact level for confidentiality, integrity and availability, and the overall level |
| Control baseline | The SP 800-53B baseline the system uses, with any tailoring noted in its security plan |
| Hosting | Where it runs: on premises, a named cloud service, or a provider |
| Processes PII | Yes or no; if yes, the privacy impact assessment reference |
| Interconnections | Other systems it exchanges information with, and the agreement reference (CA-3) |
| Authorization status | Authorized, in process or not authorized; decision date and termination date |
| Last assessment | Date of the last control assessment |
| Security plan | Where the system security plan is kept |
| Operational status | Planned, under development, operational, undergoing significant change, or retired |

## Register

| ID | System name | Description | System owner | Authorizing official | Security categorization | Control baseline | Hosting | Processes PII | Interconnections | Authorization status | Last assessment | Security plan | Operational status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:ID}} | {{fill:name}} | {{fill:description}} | {{fill:owner}} | {{fill:official}} | {{fill:for example Moderate}} | {{fill:for example Moderate}} | {{fill:hosting}} | {{fill:yes or no}} | {{fill:systems}} | {{fill:status and dates}} | {{fill:date}} | {{fill:location}} | {{fill:status}} |

:::federal
The Paperwork Reduction Act requires each agency head to maintain an inventory of major information systems, updated at least annually ([44 U.S.C. § 3505(c)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title44-section3505&num=0&edition=prelim)). Security categorization follows FIPS 199.

- The register shall mark each major information system and shall be updated at least annually. (PM-5)

:::
