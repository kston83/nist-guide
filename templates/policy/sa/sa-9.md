---
control: sa-9
title: 'External system services'
status: draft
stage: operate
typical:
  sa-09_odp.01: 'the controls of the system''s baseline that the provider is responsible for, per the shared responsibility matrix, with evidence from an independent attestation'
  sa-09_odp.02: 'annual review of independent attestation reports, review of the provider''s continuous monitoring or status reports, and contract service reviews'
---

:::guidance
External system services are cloud platforms, software as a service, hosting, managed security and other services the system relies on but does not run. NIST's SA-9 discussion keeps the responsibility for their risk with the authorizing official, and has the organization document the basis of its trust in each provider so the relationship can be monitored. A shared responsibility matrix for each service, recorded in the system security plan as inherited, shared or system-owned controls, shows who does what. The [information exchange agreement](/templates/forms/information-exchange-agreement/) (CA-3) covers the connection; this clause covers the provider.
:::

- The {{org:system-owner}} shall require that providers of external system services comply with the organization's security and privacy requirements and employ {{param:sa-09_odp.01}}. (SA-9a)
- The {{org:system-owner}} shall record those requirements in the contract or service agreement before the service is used. (SA-9a)
- The {{org:system-owner}} shall define and document the organization's oversight roles and responsibilities, and the user roles and responsibilities, for each external system service, including a shared responsibility matrix. (SA-9b)
- The {{org:system-owner}} shall employ {{param:sa-09_odp.02}} to monitor the provider's control compliance on an ongoing basis. (SA-9c)
- The {{org:system-owner}} shall follow up each exception in a provider's attestation report, and each customer control the report expects the organization to operate, and record weaknesses that affect the system in its plan of action and milestones (CA-5). (SA-9c)

:::federal
[OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.j(2)(a) and (b), requires agencies to provide oversight of information systems used or operated by contractors or other entities on behalf of the Federal Government, including documented oversight policies and procedures and ensuring that the security and privacy controls of those systems and services are effectively implemented and comply with NIST standards and guidelines and agency requirements. Under [OMB M-24-15](https://www.fedramp.gov/2026/authority/m-24-15/), Modernizing the Federal Risk and Authorization Management Program (July 25, 2024), agencies must obtain and maintain a FedRAMP authorization for cloud products and services that create, collect, process, store or maintain federal information on the agency's behalf, unless the memo places them out of scope. As of September 2026.

- The {{org:system-owner}} shall ensure each cloud product or service within the scope of OMB M-24-15 has a FedRAMP authorization before it processes federal information, and that the agency issues its own authorization to use it. (SA-9a)
- The {{org:system-owner}} shall document the agency's oversight of each system a contractor or other entity operates on its behalf, and verify that its controls are effectively implemented, as OMB Circular A-130, Appendix I, section 4.j(2), requires. (SA-9c)

:::
