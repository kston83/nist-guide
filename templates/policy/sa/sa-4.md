---
control: sa-4
title: 'Acquisition process'
status: draft
stage: operate
typical:
  sa-04_odp.01: 'standardized contract language that the procurement office maintains and the Chief Information Security Officer and senior privacy official approve, with system-specific requirements added for each acquisition'
---

:::guidance
SA-4 puts the security and privacy requirements into the contract, where a supplier is bound by them. NIST's SA-4 discussion derives the functional requirements from the high-level requirements set under SA-2, and points to NIST SP 800-160 Vol. 1 Rev. 1, Engineering Trustworthy Secure Systems ([November 2022](https://csrc.nist.gov/pubs/sp/800/160/v1/r1/final), current as of September 2026), for requirements engineering. Standard clauses keep contracts consistent; each acquisition still needs its own requirements, controls and acceptance criteria. Assessors sample recent contracts for a system and check each item a to i is present, in the text or by reference. The [acquisition security requirements](/templates/standards/acquisition-security-requirements/) standard gives the standard contract requirements and the checklist for the solicitation review.
:::

- The {{org:system-owner}} shall include the following requirements, descriptions and criteria, explicitly or by reference, using {{param:sa-04_odp.01}}, in the acquisition contract for each system, system component or system service. (SA-4)
- The contract shall state the security and privacy functional requirements. (SA-4a)
- The contract shall state the strength of mechanism requirements, such as resistance to tampering, bypass and direct attack. (SA-4b)
- The contract shall state the security and privacy assurance requirements, including the development processes and the evidence from development and assessment that the supplier provides. (SA-4c)
- The contract shall state the controls needed to satisfy the security and privacy requirements, with any control parameter values the supplier must meet. (SA-4d)
- The contract shall state the security and privacy documentation requirements (SA-5). (SA-4e)
- The contract shall state the requirements for protecting security and privacy documentation. (SA-4f)
- The contract shall describe the system development environment and the environment in which the system is intended to operate. (SA-4g)
- The contract shall allocate responsibility for, or identify the parties responsible for, information security, privacy and supply chain risk management. (SA-4h)
- The contract shall state the acceptance criteria for the system, component or service. (SA-4i)
- The {{org:ciso}} shall review each solicitation for a system, system component or system service for these requirements before it is issued, and the {{org:privacy-official}} shall review each one for a system that processes personally identifiable information. (SA-4)

:::guidance
NIST's SA-4 discussion also suggests other requirements that support security and operations: the responsibilities of the organization and the developer, and notice and timing for support, maintenance and updates. Add the time within which a supplier must report an incident or a vulnerability in its product, and how long it will provide security updates, since both drive IR-6 and SA-22.
:::

:::federal
[OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.j(1), requires agencies to ensure that the terms and conditions of contracts and other agreements involving Federal information incorporate security and privacy requirements sufficient to meet Federal and agency-specific requirements for its protection; section 4.j(5) requires them to include provisions for Federal Government notification and access, and for cooperation with agency personnel and Inspectors General. [OMB M-26-05](https://www.whitehouse.gov/wp-content/uploads/2026/01/M-26-05-Adopting-a-Risk-based-Approach-to-Software-and-Hardware-Security.pdf), Adopting a Risk-based Approach to Software and Hardware Security (January 23, 2026), rescinds M-22-18 and M-23-16, so agencies are no longer required to collect the Secure Software Development Attestation Form. It requires agencies to develop software and hardware assurance policies and processes that match their risk determinations, and lets them use the attestation form, and contract terms requiring a current software bill of materials on request, where they choose to. As of September 2026.

- The {{org:system-owner}} shall ensure each contract or agreement involving Federal information incorporates the security and privacy requirements that apply to that information, and provisions for Federal Government notification and access and for cooperation with agency personnel and the Inspector General, as OMB Circular A-130, Appendix I, sections 4.j(1) and 4.j(5), require. (SA-4)
- The {{org:ciso}} shall decide, for each acquisition of software or hardware and based on a risk assessment, whether to require a secure software development attestation or a software bill of materials, following the agency's assurance policy under OMB M-26-05. (SA-4c)

<!-- TODO(verify): FAR contract requirements for IT security. The FAR as codified on acquisition.gov (FAC 2026-01, effective March 13, 2026) has 39.101(c), requiring agencies to include the appropriate information technology security policies and requirements, including use of common security configurations from NIST, in IT acquisitions, and the 52.239-1 clause at 39.106. Many agencies (for example GSA, Treasury, DOL and HUD) have issued Revolutionary FAR Overhaul class deviations for Part 39, and whether the deviation text keeps these requirements was not confirmed on 2026-09-29. Cite the FAR here once it is clear which text governs. -->

:::
