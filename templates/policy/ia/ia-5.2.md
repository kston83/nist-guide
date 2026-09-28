---
control: ia-5.2
title: Public key-based authentication
status: draft
stage: core
---

- For public key-based authentication, the {{org:system-owner}} shall ensure the system enforces authorized access to the corresponding private key. (IA-5(2)(a)(1))
- For public key-based authentication, the {{org:system-owner}} shall ensure the system maps the authenticated identity to the account of the individual or group. (IA-5(2)(a)(2))
- When public key infrastructure is used, the {{org:system-owner}} shall ensure the system validates certificates by constructing and verifying a certification path to an accepted trust anchor, including checking certificate status. (IA-5(2)(b)(1))
- When public key infrastructure is used, the {{org:system-owner}} shall ensure the system keeps a local cache of revocation data to support path discovery and validation. (IA-5(2)(b)(2))
