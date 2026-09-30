---
control: sa-8
title: 'Security and privacy engineering principles'
status: draft
stage: operate
typical:
  sa-08_odp.01: 'the principles for trustworthy secure design in NIST SP 800-160 Vol. 1 Rev. 1, Appendix E, as the system''s security architecture selects them, including least privilege, least functionality, defense in depth, protective defaults and protective failure'
  sa-08_odp.02: 'the privacy engineering objectives of predictability, manageability and disassociability from NIST IR 8062, and minimization (SA-8(33))'
  sa-8_prm_1: 'for security, the principles for trustworthy secure design in NIST SP 800-160 Vol. 1 Rev. 1, Appendix E, that the system''s security architecture selects; for privacy, the objectives of predictability, manageability and disassociability from NIST IR 8062, and minimization (SA-8(33))'
---

:::guidance
NIST's SA-8 discussion lists examples of engineering principles: layered protections, security and privacy requirements built into the life cycle, clear physical and logical boundaries, developers trained to build secure software, and threat modeling. NIST SP 800-160 Vol. 1 Rev. 1, Engineering Trustworthy Secure Systems ([November 2022](https://csrc.nist.gov/pubs/sp/800/160/v1/r1/final), current as of September 2026), describes 30 design principles in Appendix E, and says they are a basis for reasoning about a design, not rules to be complied with. For privacy, NIST IR 8062, An Introduction to Privacy Engineering and Risk Management in Federal Systems ([January 2017](https://csrc.nist.gov/pubs/ir/8062/final), current as of September 2026), sets out three privacy engineering objectives.
:::

- The {{org:system-owner}} shall apply the following systems security and privacy engineering principles in the specification, design, development, implementation and modification of the system and system components: {{param:sa-8_prm_1}}. (SA-8)
- The {{org:system-owner}} shall record in the security and privacy architectures (PL-8) the principles applied to the system, and the reason for any principle not applied. (SA-8)
- For an existing system, the {{org:system-owner}} shall apply the principles to upgrades and modifications to the extent feasible, given the current state of its hardware, software and firmware. (SA-8)
