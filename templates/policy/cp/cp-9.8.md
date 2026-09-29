---
control: cp-9.8
title: 'Cryptographic protection'
status: draft
stage: core
typical:
  cp-09.08_odp: 'all backup information'
---

:::guidance
Encrypt backups with the cryptography the organization approves under SC-13, and keep the keys where a loss of the primary site does not take them too.
:::

- The {{org:system-owner}} shall implement cryptographic mechanisms to prevent unauthorized disclosure and modification of {{param:cp-09.08_odp}}. (CP-9(8))

:::federal
Federal systems use cryptographic modules validated by the NIST Cryptographic Module Validation Program, as SC-13 requires. The CMVP's [FIPS 140-3 transition page](https://csrc.nist.gov/projects/fips-140-3-transition-effort) sets the schedule for moving FIPS 140-2 validations to the Historical List in September 2026, and says that modules on the Historical List remain supported for existing systems (as of September 2026).

- The {{org:system-owner}} shall encrypt backup information with CMVP-validated cryptographic modules. (CP-9(8))

:::
