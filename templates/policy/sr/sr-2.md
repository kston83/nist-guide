---
control: sr-2
title: 'Supply chain risk management plan'
status: draft
stage: mature
typical:
  sr-02_odp.01: 'each system, including the components and services the criticality analysis (RA-9) identifies as critical and the external services the system depends on'
  sr-02_odp.02: 'annually, and at each life cycle milestone or gate review and each significant contracting action, such as a new contract, a renewal or a change of supplier for a critical component or service'
---

:::guidance
SR-2 asks for a plan, for each system, that covers supply chain risk across the whole life cycle. NIST's SR-2 discussion says the plan expresses the organization's supply chain risk tolerance, the acceptable mitigation strategies or controls, a process for evaluating and monitoring supply chain risk, how the plan is implemented and communicated, the justification for the mitigation measures taken, and the roles and responsibilities; it can stand alone or be part of the system security and privacy plans. [NIST SP 800-161 Rev. 1](https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final), Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations (May 2022, updated November 1, 2024; current as of October 2026) recommends a stand-alone plan, and says a plan incorporated into the system security plan must keep its supply chain parts clearly discernible (Appendix A, SR-2, and Appendix D.3). Its Appendix D.3.1 is a sample plan outline, and D.3.1.11 has the plan reviewed at least at life cycle milestones, gate reviews and significant contracting activities. The plan applies the organization-wide supply chain risk management strategy (PM-30) to one system. The [Supply Chain Risk Management Plan](/templates/plans/supply-chain-risk-management-plan/) template follows that outline and the more detailed outline example NIST publishes with SP 800-18 Rev. 2 (June 2026). Assessors examine the plan, its review history and who can read and change it.
:::

- The {{org:system-owner}} shall develop a plan for managing supply chain risks associated with the research and development, design, manufacturing, acquisition, delivery, integration, operations and maintenance, and disposal of {{param:sr-02_odp.01}}. (SR-2a)
- The plan shall be a stand-alone document or a clearly identifiable section of the system security plan. (SR-2a)
- The plan shall state the supply chain risk tolerance it applies from the organization's supply chain risk management strategy (PM-30), the supply chain controls selected for the system (SR-3), the process for evaluating and monitoring supply chain risk, how the plan is implemented and communicated, the justification for each mitigation measure, and the roles and responsibilities for each. (SR-2a)
- The plan shall list the system's critical components and services and their suppliers, drawing on the criticality analysis (RA-9) and the component inventory (CM-8). (SR-2a)
- The authorizing official shall approve the plan and each significant change to it. (SR-2a)
- The {{org:system-owner}} shall review and update the plan {{param:sr-02_odp.02}}, and whenever threat, organizational or environmental changes require it. (SR-2b)
- The {{org:system-owner}} shall protect the plan from unauthorized disclosure and modification by marking it, limiting access to those who need it, and controlling changes to it. (SR-2c)

:::guidance
A plan that names critical components, suppliers and known weaknesses is useful to an adversary, which is why SR-2c asks for its protection. Handle it at least as carefully as the system security plan.
:::

:::federal
[OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.c(4), requires agencies to develop supply chain risk management plans as described in NIST SP 800-161 to ensure the integrity, security, resilience and quality of information systems. Under the Federal Acquisition Supply Chain Security Act of 2018, [41 U.S.C. § 1326](https://www.govinfo.gov/link/uscode/41/1326?link-type=html)(a) and (b) makes the head of each executive agency responsible for assessing the supply chain risk posed by the acquisition and use of covered articles, including developing an overall supply chain risk management strategy and implementation plan and policies and processes, and integrating supply chain risk management practices throughout the life cycle of the system, component, service or asset. The subchapter terminates on December 31, 2033 ([41 U.S.C. § 1328](https://www.govinfo.gov/link/uscode/41/1328?link-type=html)). Text checked in the United States Code, 2024 edition, as of October 2026.

- The {{org:system-owner}} shall develop the system's supply chain risk management plan as NIST SP 800-161 Rev. 1 describes, as OMB Circular A-130, Appendix I, section 4.c(4), requires. (SR-2a)

:::
