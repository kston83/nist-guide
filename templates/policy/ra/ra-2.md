---
control: ra-2
title: Security categorization
status: draft
stage: foundation
---

:::guidance
Categorization rates how badly a loss of confidentiality, integrity or availability of the system and its information would hurt the organization, and it drives the choice of baseline (PL-10). Work it out with the [Security Categorization Worksheet](/templates/forms/security-categorization-worksheet/) and record the result in the categorization section of the [System Security Plan template](/templates/plans/system-security-plan/).
:::

- Each {{org:system-owner}} shall categorize the system and the information it processes, stores and transmits. (RA-2a)
- The {{org:system-owner}} shall document the categorization results, with the supporting rationale, in the system security plan. (RA-2b)
- The {{org:system-owner}} shall have the authorizing official, or a designated representative, review and approve the categorization decision. (RA-2c)
- The {{org:system-owner}} shall review the categorization whenever the system, the information it handles or its environment of operation changes significantly. (RA-2a)

:::federal
Federal systems categorize information and systems under [FIPS 199](https://csrc.nist.gov/pubs/fips/199/final), Standards for Security Categorization of Federal Information and Information Systems (February 2004), and identify information types from [NIST SP 800-60 Rev. 1](https://csrc.nist.gov/pubs/sp/800/60/v1/r1/final) (August 2008; Volume 2 lists the types). A [Rev. 2 initial working draft](https://csrc.nist.gov/pubs/sp/800/60/r2/iwd) (January 2024) is not final, as of September 2026.

- The {{org:system-owner}} shall identify the system's information types using NIST SP 800-60. (RA-2a)
- The {{org:system-owner}} shall categorize the system under FIPS 199, using the highest impact level of its information types for each security objective. (RA-2a)

:::
