---
control: sc-8.1
title: 'Cryptographic protection'
status: draft
stage: core
typical:
  sc-08.01_odp: 'prevent unauthorized disclosure of information and detect changes to information'
---

:::guidance
In practice: TLS 1.2 or later for web, API and database connections, SSH for administration, IPsec or TLS for virtual private networks, and encryption on internal service-to-service traffic. Cleartext protocols such as Telnet and unencrypted FTP are disabled.
:::

- The {{org:system-owner}} shall implement cryptographic mechanisms to {{param:sc-08.01_odp}} during transmission. (SC-8(1))
