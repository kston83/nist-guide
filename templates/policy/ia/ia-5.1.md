---
control: ia-5.1
title: Password-based authentication
status: draft
stage: core
typical:
  ia-05.01_odp.01: 'at least monthly, and whenever a relevant breach corpus is published'
  ia-05.01_odp.02: 'a minimum length of 15 characters for passwords used as the only factor and 8 for passwords used with another factor, and no other composition rules'
---

:::guidance
The typical values follow [NIST SP 800-63B-4](https://csrc.nist.gov/pubs/sp/800/63/b/4/final) (July 2025): a minimum of 15 characters for a password used alone and 8 when it is one factor of several, no other composition rules, at least 64 characters allowed, and a check against a list of common and breached passwords. Section 7 of the [identification and authentication standard](/templates/standards/identification-and-authentication-standard/) sets out the full password rules.
:::

- The {{org:system-owner}} shall maintain a list of commonly used, expected or compromised passwords, and update it {{param:ia-05.01_odp.01}} and when organizational passwords are suspected to have been compromised. (IA-5(1)(a))
- The {{org:system-owner}} shall ensure the system verifies, when users create or update passwords, that the passwords are not on that list. (IA-5(1)(b))
- The {{org:system-owner}} shall ensure passwords are transmitted only over cryptographically protected channels. (IA-5(1)(c))
- The {{org:system-owner}} shall ensure passwords are stored using an approved salted key derivation function, preferably using a keyed hash. (IA-5(1)(d))
- The {{org:system-owner}} shall ensure the system requires immediate selection of a new password upon account recovery. (IA-5(1)(e))
- The {{org:system-owner}} shall ensure the system allows long passwords and passphrases, including spaces and all printable characters. (IA-5(1)(f))
- The {{org:system-owner}} shall employ automated tools to help users select strong passwords. (IA-5(1)(g))
- The {{org:system-owner}} shall ensure the system enforces these composition and complexity rules: {{param:ia-05.01_odp.02}}. (IA-5(1)(h))
