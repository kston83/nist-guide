---
control: ca-3
title: 'Information exchange'
status: draft
stage: operate
typical:
  ca-03_odp.01: 'interconnection security agreements or information exchange security agreements, and service level agreements or contract terms with the same content for external services'
  ca-03_odp.03: 'at least annually, and when either system makes a significant change that affects the exchange'
---

:::guidance
CA-3 covers every exchange of information with a system outside the authorization boundary, whether over a dedicated connection, an application programming interface or a file transfer. The [information exchange agreement](/templates/forms/information-exchange-agreement/) records what is exchanged, how it is protected and who is responsible on each side. NIST SP 800-47 Rev. 1, Managing the Security of Information Exchanges ([July 2021](https://csrc.nist.gov/pubs/sp/800/47/r1/final), current as of September 2026), describes how to plan, establish, maintain and end exchanges and their agreements. NIST's CA-3 discussion notes that when both systems have the same authorizing official, no separate agreement is needed: the security and privacy plans describe the interface instead.
:::

- The authorizing official shall approve each exchange of information between the system and another system before the exchange begins. (CA-3a)
- The {{org:system-owner}} shall manage each exchange of information between the system and other systems using {{param:ca-03_odp.01}}. (CA-3a)
- The {{org:system-owner}} shall record each exchange and the agreement that approves it in the system security plan. (CA-3a)
- Each exchange agreement shall document the interface characteristics, the security and privacy requirements, the controls and the responsibilities for each system, and the impact level of the information communicated. (CA-3b)
- The {{org:system-owner}} shall review and update each exchange agreement {{param:ca-03_odp.03}}. (CA-3c)
- The {{org:system-owner}} shall end an exchange, and close its agreement, when it is no longer needed or when the other party no longer meets the agreement's security and privacy requirements. (CA-3a)

:::federal
[OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.c(16), requires agencies to obtain approval from the authorizing official for connections from an information system, as defined by its authorization boundary, to other information systems, based on the risk to the agency's operations and assets, individuals, other organizations and the Nation. Section 4.j(2)(f) requires agreements, such as memoranda of understanding, interconnection security agreements or contracts, for interfaces between agency-owned or operated systems and information systems that contractors or other entities use or operate on behalf of the Federal Government. As of September 2026.

- The authorizing official shall base the approval of each connection to another system on the risk to agency operations and assets, individuals, other organizations and the Nation, as OMB Circular A-130, Appendix I, section 4.c(16), requires. (CA-3a)
- The {{org:system-owner}} shall ensure a written agreement is in place for each interface between the system and a system that a contractor or other entity uses or operates on behalf of the agency, as OMB Circular A-130, Appendix I, section 4.j(2)(f), requires. (CA-3a)

:::
