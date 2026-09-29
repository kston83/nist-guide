---
control: sc-8
title: 'Transmission confidentiality and integrity'
status: draft
stage: core
typical:
  sc-08_odp: 'confidentiality and integrity'
---

:::guidance
Protect information while it moves, inside the system as well as across its boundary. At Moderate and High, SC-8(1) makes that protection cryptographic, using the cryptography SC-13 requires.
:::

- The {{org:system-owner}} shall ensure the system protects the {{param:sc-08_odp}} of transmitted information. (SC-8)

:::federal
CISA [Binding Operational Directive 18-01](https://www.cisa.gov/news-events/directives/bod-18-01-enhance-email-and-web-security), Enhance Email and Web Security (October 16, 2017), requires that "All publicly accessible Federal websites and web services provide service through a secure connection (HTTPS-only, with HSTS)", that internet-facing mail servers offer STARTTLS, and that SSLv2, SSLv3, 3DES and RC4 are disabled on mail servers. CISA's directive page does not mark it revoked (as of September 2026).

- The {{org:system-owner}} shall ensure each publicly accessible website and web service of the system provides service only through HTTPS, with HTTP Strict Transport Security. (SC-8)
- The {{org:system-owner}} shall ensure each internet-facing mail server of the system offers STARTTLS. (SC-8)
- The {{org:system-owner}} shall ensure SSLv2, SSLv3 and the 3DES and RC4 ciphers are disabled on the system's mail servers. (SC-8)

:::
