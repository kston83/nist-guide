---
control: si-4.10
title: 'Visibility of encrypted communications'
status: draft
stage: operate
typical:
  si-04.10_odp.01: 'encrypted traffic crossing the internet connection and the public-facing subnetwork, except categories exempted after legal and privacy review, such as health and financial sites'
  si-04.10_odp.02: 'the intrusion detection and prevention systems and data loss prevention tools at the boundary'
---

:::guidance
Most traffic is encrypted, so monitoring tools see little unless it is decrypted at a proxy or gateway, or the tools read it at the endpoint. Decryption raises privacy and legal questions: decide the exempt categories with legal counsel and the senior privacy official, and protect the decryption keys under SC-12.
:::

- The {{org:system-owner}} shall make provisions so that {{param:si-04.10_odp.01}} is visible to {{param:si-04.10_odp.02}}. (SI-4(10))
