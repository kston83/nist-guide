---
control: ps-4
title: 'Personnel termination'
status: draft
stage: core
typical:
  ps-04_odp.01: '24 hours, or the same day for privileged users; for an involuntary termination, no later than when the individual is told'
  ps-04_odp.02: 'the individual''s continuing duty not to disclose organizational information, the return of all organizational property and information, and that former credentials must not be used'
---

:::guidance
Termination is the most tested personnel control: assessors take a list of recent departures and check when each account was disabled. The time period should agree with the notice time in AC-2h.2. NIST notes that for a termination for cause, organizations consider disabling accounts before the individual is told, and that an exit interview is not always possible. The [onboarding, transfer and termination checklist](/templates/forms/onboarding-transfer-and-termination-checklist/) lists each step with its owner.
:::

- The {{org:account-manager}} shall disable the individual's system access within {{param:ps-04_odp.01}} of the termination of their employment. (PS-4a)
- The {{org:account-manager}} shall terminate or revoke every authenticator and credential associated with the individual, including tokens, certificates and building passes. (PS-4b)
- The {{org:hr-office}} shall conduct an exit interview with the individual that includes a discussion of {{param:ps-04_odp.02}}. (PS-4c)
- The {{org:supervisor}} shall retrieve all security-related organizational property from the individual, such as devices, authentication tokens, keys, identification cards and building passes. (PS-4d)
- The {{org:supervisor}} shall ensure the organization keeps access to the organizational information and systems the individual controlled. (PS-4e)

:::federal
[FIPS 201-3](https://csrc.nist.gov/pubs/fips/201-3/final) (January 2022), section 2.9.4, requires a PIV Card to be terminated when, among other circumstances, "A federal employee separates (voluntarily or involuntarily) from federal service" or "A contractor changes positions and no longer needs access to federal buildings or systems." Checked September 2026.

- The {{org:hr-office}} shall ensure the PIV Card issuer terminates the individual's PIV Card in each circumstance FIPS 201-3 section 2.9.4 lists, including separation from federal service. (PS-4b)

:::
