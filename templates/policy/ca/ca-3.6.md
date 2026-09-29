---
control: ca-3.6
title: 'Transfer authorizations'
status: draft
stage: operate
---

:::guidance
Transfer authorization checks the sender, not only the connection: before the system accepts data from an interconnected system, it confirms that the person or system sending it is permitted to write that data. Service accounts used for transfers are the usual gap; give each one only the write permissions its exchange agreement names.
:::

- The {{org:system-owner}} shall ensure the system verifies that individuals or systems transferring data between interconnecting systems have the requisite authorizations, such as write permissions or privileges, before it accepts the data. (CA-3(6))
- Each exchange agreement shall name the accounts or systems authorized to transfer data under it and the permissions each holds. (CA-3(6))
