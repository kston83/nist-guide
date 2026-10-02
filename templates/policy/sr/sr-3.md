---
control: sr-3
title: 'Supply chain controls and processes'
status: draft
stage: mature
typical:
  sr-03_odp.01: 'each system and the components and services the criticality analysis (RA-9) identifies as critical'
  sr-03_odp.02: 'the supply chain risk management team (SR-2(1)), the procurement office, and the designated supply chain contacts of the suppliers and contractors involved'
  sr-03_odp.03: 'the controls the supply chain risk management plan selects, including at least the supply chain terms of the acquisition security requirements standard (SA-4, SR-5), supplier assessments (SR-6), notification agreements (SR-8), inspection of components on receipt and after repair (SR-10), anti-counterfeit measures (SR-11) and controlled disposal (SR-12)'
  sr-03_odp.04: 'the supply chain risk management plan, summarized and referenced in the security and privacy plans'
---

:::guidance
NIST's SR-3 discussion defines supply chain elements as the organizations, entities and tools involved in the research and development, design, manufacturing, acquisition, delivery, integration, operations and maintenance, and disposal of systems and components. Supply chain processes include hardware, software and firmware development, shipping and handling, personnel and physical security programs, and the configuration management that maintains provenance. Weaknesses in either are potential vulnerabilities. SP 800-161 Rev. 1 points to its Section 2 and Appendix C for implementing SR-3. None of the SR-3 enhancements is in a baseline; the acquisition security requirements standard already requires suppliers to flow security requirements down to subcontractors, which is SR-3(3)'s aim.
:::

- The {{org:system-owner}} shall establish a process to identify and address weaknesses or deficiencies in the supply chain elements and processes of {{param:sr-03_odp.01}} in coordination with {{param:sr-03_odp.02}}. (SR-3a)
- The process shall draw on supplier assessments, supplier notifications, inspection results, security advisories, incidents, and changes in a supplier's ownership, location or sources. (SR-3a)
- Each weakness or deficiency found shall be recorded in the risk register or the plan of action and milestones, with an owner, a response and a due date. (SR-3a)
- The {{org:system-owner}} shall employ the following controls to protect against supply chain risks to the system, system component or system service and to limit the harm or consequences from supply chain-related events: {{param:sr-03_odp.03}}. (SR-3b)
- The {{org:system-owner}} shall document the selected and implemented supply chain processes and controls in {{param:sr-03_odp.04}}. (SR-3c)

:::federal
[OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 3.b(8), requires agencies' information security and privacy programs to implement supply chain risk management principles to protect against the insertion of counterfeits, unauthorized production, tampering, theft, insertion of malicious software, and poor manufacturing and development practices throughout the system development life cycle. [41 U.S.C. § 1326](https://www.govinfo.gov/link/uscode/41/1326?link-type=html)(b)(2) includes integrating supply chain risk management practices throughout the life cycle of the system, component, service or asset in each agency's responsibilities. Text checked in the United States Code, 2024 edition, as of October 2026.

- The {{org:system-owner}} shall ensure the controls selected under SR-3b protect against the insertion of counterfeits, unauthorized production, tampering, theft, insertion of malicious software, and poor manufacturing and development practices throughout the system development life cycle, as OMB Circular A-130, Appendix I, section 3.b(8), requires. (SR-3b)

:::
