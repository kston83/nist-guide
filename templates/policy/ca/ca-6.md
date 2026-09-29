---
control: ca-6
title: 'Authorization'
status: draft
stage: operate
typical:
  ca-06_odp: 'at least every three years and after a significant change, or on the time- or event-driven basis the continuous monitoring strategy sets once the authorizing official moves the system to ongoing authorization'
---

:::guidance
Authorization is a senior official's decision to accept the risk of operating a system, based on the authorization package: the system security plan, the [assessment report](/templates/reports/security-and-privacy-assessment-report/) and the plan of action and milestones. The authorizing official should have budget or mission responsibility for the system, so the person who accepts the risk also owns its consequences. Ongoing authorization replaces the fixed termination date with decisions made from continuous monitoring results; it needs an initial authorization and a working continuous monitoring program (CA-7) first.
:::

- The {{org:senior-leader}} shall assign a senior official, with budget or mission responsibility for the system, as the authorizing official for the system. (CA-6a)
- The {{org:senior-leader}} shall assign a senior official as the authorizing official for the common controls available for inheritance by organizational systems. (CA-6b)
- The {{org:system-owner}} shall ensure that, before the system begins operating, the authorizing official for the system accepts the use of the common controls the system inherits. (CA-6c.1)
- The {{org:system-owner}} shall ensure that the authorizing official authorizes the system to operate, based on the authorization package, before the system begins operating. (CA-6c.2)
- The authorizing official's decision shall be recorded in a signed authorization decision document that states the decision, any terms and conditions, and the authorization termination date or that the system is under ongoing authorization. (CA-6c.2)
- The {{org:ciso}} shall ensure that the authorizing official for common controls authorizes the use of those controls for inheritance by organizational systems. (CA-6d)
- The authorizing official shall update the authorization {{param:ca-06_odp}}. (CA-6e)
- When the authorizing official changes, the new authorizing official shall review the current authorization and either accept the documented risk in a new signed decision or begin a reauthorization. (CA-6e)

:::federal
[OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.d(1) to (4), requires agencies to designate senior Federal officials to authorize systems and agency-designated common controls; to complete an initial authorization to operate for each system and all agency-designated common controls, based on an explicit acceptance of risk, before operation; to move systems and common controls to an ongoing authorization process when eligible and with the authorizing official's formal approval; and to reauthorize them as needed, on a time- or event-driven basis, in line with agency risk tolerance. Section 5.f states that only Federal Government personnel may serve as an authorizing official, and that the agency must consider the Senior Agency Official for Privacy's input in the authorization decision. Section 5.h sets two conditions for ongoing authorization: an initial authorization to operate, and continuous monitoring programs that monitor all implemented security and privacy controls at the frequencies the strategies set; until the authorizing official formally approves the transition, the system keeps a specific authorization termination date. NIST SP 800-37 Rev. 2 ([December 2018](https://csrc.nist.gov/pubs/sp/800/37/r2/final), current as of September 2026) describes the authorization tasks. As of September 2026.

- The {{org:senior-leader}} shall assign only Federal Government personnel as authorizing officials, as OMB Circular A-130, Appendix I, section 5.f, requires. (CA-6a)
- For a system that processes personally identifiable information, the authorizing official shall consider the input and recommendations of the Senior Agency Official for Privacy before making the authorization decision, as OMB Circular A-130, Appendix I, section 5.f, requires. (CA-6c.2)
- The {{org:system-owner}} shall move the system to ongoing authorization only after an initial authorization to operate, with a continuous monitoring program that meets the conditions of OMB Circular A-130, Appendix I, section 5.h, and with the authorizing official's formal approval. (CA-6e)

:::
