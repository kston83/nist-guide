---
control: sc-7.21
title: 'Isolation of system components'
status: draft
stage: core
typical:
  sc-07.21_odp.01: 'components that process the most sensitive information, and security management components such as identity, key management and logging services'
  sc-07.21_odp.02: 'the essential mission and business functions named in the business impact analysis'
---

:::guidance
SC-7(21) is in the High baseline. Isolation is usually a separate network segment or cloud account with its own boundary rules.
:::

- The {{org:system-owner}} shall employ boundary protection mechanisms to isolate {{param:sc-07.21_odp.01}} supporting {{param:sc-07.21_odp.02}}. (SC-7(21))
