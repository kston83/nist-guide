---
control: mp-6.2
title: 'Equipment testing'
status: draft
stage: operate
typical:
  mp-06.02_odp.01: 'at least annually, and after the equipment is repaired, relocated or updated'
  mp-06.02_odp.02: 'at least annually, and when a new media type, tool or sanitization provider is introduced'
---

:::guidance
MP-6(2) is in the High baseline. NIST's discussion of this enhancement allows the testing to be done by qualified and authorized external entities, including federal agencies or external service providers. A test shows the intended sanitization is achieved: a degausser's field strength checked against the coercivity of the media it is used on, a shredder's output checked against the particle size the procedure sets, and a sample of cleared or purged media read back with a forensic tool. [NIST SP 800-88 Rev. 2](https://csrc.nist.gov/pubs/sp/800/88/r2/final) section 4.5.2 lists improperly calibrated equipment among the reasons a sanitization may not be effective. Record the tests in the [media sanitization record](/templates/forms/media-sanitization-record/).
:::

- The {{org:system-owner}} shall test sanitization equipment {{param:mp-06.02_odp.01}} to ensure that the intended sanitization is being achieved. (MP-6(2))
- The {{org:system-owner}} shall test sanitization procedures {{param:mp-06.02_odp.02}} to ensure that the intended sanitization is being achieved. (MP-6(2))
- Equipment that fails a test shall not be used until it is repaired and passes a new test, and media sanitized with it since its last passing test shall be sanitized again. (MP-6(2))
- Where an external provider performs sanitization, the contract shall require the provider to test its equipment and procedures at least as often, and to provide the results. (MP-6(2))
