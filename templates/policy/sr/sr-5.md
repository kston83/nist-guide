---
control: sr-5
title: 'Acquisition strategies, tools and methods'
status: draft
stage: mature
typical:
  sr-05_odp: 'the supply chain terms of the acquisition security requirements standard, including identification of the origin of critical components and flow-down to subcontractors; contract language prohibiting counterfeit or tainted components; purchase of hardware and software only from original manufacturers, their authorized distributors or resellers, or suppliers the supply chain risk management team has assessed; a supplier risk assessment before award as part of source selection for critical components and services; and tamper-evident packaging and tracked delivery for hardware'
---

:::guidance
NIST's SR-5 discussion calls the acquisition process an important vehicle to protect the supply chain, and names tools such as obscuring the end use of a component, blind or filtered buys, tamper-evident packaging, and trusted or controlled distribution. It suggests incentives for suppliers that implement controls and are transparent about their practices, contract language prohibiting tainted or counterfeit components, and restricting purchases from untrustworthy suppliers, chosen in light of the supply chain risk assessment (RA-3(1)). Blind buys and controlled distribution suit high-threat environments; most organizations start with authorized sources, contract terms and supplier assessments. The contract terms themselves live in the [acquisition security requirements](/templates/standards/acquisition-security-requirements/) standard (section 4.5); keep them in step with this clause. SP 800-161 Rev. 1, Section 3, covers supply chain risk management in the acquisition process.
:::

- The {{org:ciso}} shall employ the following acquisition strategies, contract tools and procurement methods to protect against, identify and mitigate supply chain risks: {{param:sr-05_odp}}. (SR-5)
- The {{org:ciso}} shall ensure each acquisition of a component or service that the criticality analysis (RA-9) identifies as critical is reviewed by the supply chain risk management team before award. (SR-5)
- The results of the system's supply chain risk assessment (RA-3(1)) shall inform the strategies, tools and methods chosen for each such acquisition. (SR-5)

:::federal
[OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), section 5.d(1)(a), requires agencies, when acquiring information technology, to analyze risks (including supply chain risks) associated with potential contractors and the products and services they provide, and to allocate risk responsibility between Government and contractor. Under [41 U.S.C. § 1323](https://www.govinfo.gov/link/uscode/41/1323?link-type=html)(c)(5) and (7), the Secretary of Homeland Security, the Secretary of Defense and the Director of National Intelligence may issue orders, on the Federal Acquisition Security Council's recommendation, excluding sources or covered articles from executive agency procurement actions or requiring the removal of covered articles from executive agency information systems, and requires executive agencies to comply with those orders; [41 CFR 201-1.304](https://www.ecfr.gov/current/title-41/section-201-1.304) repeats the duty and sets out how an agency requests an exception. [OMB M-26-05](https://www.whitehouse.gov/wp-content/uploads/2026/01/M-26-05-Adopting-a-Risk-based-Approach-to-Software-and-Hardware-Security.pdf), Adopting a Risk-based Approach to Software and Hardware Security (January 23, 2026), requires agencies to develop software and hardware assurance policies and processes that match their risk determinations and mission needs, and lets them choose to use the Secure Software Development Attestation Form and contract terms requiring a current software bill of materials on request; it names CISA's hardware bill of materials framework as a reference. Statute checked in the United States Code, 2024 edition, as of October 2026.

- The {{org:ciso}} shall ensure each acquisition of information technology analyzes the supply chain risks associated with potential contractors and the products and services they provide, and allocates risk responsibility between the Government and the contractor, as OMB Circular A-130, section 5.d(1)(a), requires. (SR-5)
- The {{org:ciso}} shall track the exclusion and removal orders issued under 41 U.S.C. § 1323(c)(5) that apply to the agency, ensure that procurement actions exclude the sources and covered articles they name, and ensure that system owners remove named covered articles from the agency's systems, as 41 U.S.C. § 1323(c)(7) and 41 CFR 201-1.304 require. (SR-5)
- The {{org:ciso}} shall apply the agency's software and hardware assurance policy under OMB M-26-05 when choosing the strategies, tools and methods for each acquisition. (SR-5)

<!-- TODO(verify): FAR provisions that carry supply chain requirements into contracts, such as the clauses implementing exclusion orders under 41 U.S.C. § 1323 and the Section 889 telecommunications prohibition, were not checked. As for SA-4, it is not settled whether the codified FAR or the Revolutionary FAR Overhaul class deviations govern (see Open questions in PROGRESS.md). Cite the FAR here once that is resolved. -->

:::
