---
control: ca-8
title: 'Penetration testing'
status: draft
stage: operate
typical:
  ca-08_odp.01: 'at least annually, and after a significant change to the system'
  ca-08_odp.02: 'the system''s internet-facing components and applications, and a sample of its internal components'
---

:::guidance
Penetration testing goes beyond automated vulnerability scanning: skilled testers try to exploit weaknesses the way an adversary would, within agreed limits of time, scope and method. Written rules of engagement, approved before testing, set the scope, times, methods allowed, contacts and how a test is stopped. NIST SP 800-115, Technical Guide to Information Security Testing and Assessment ([September 2008](https://csrc.nist.gov/pubs/sp/800/115/final), current as of September 2026), describes planning and running penetration tests.
:::

- The {{org:ciso}} shall conduct penetration testing {{param:ca-08_odp.01}} on {{param:ca-08_odp.02}}. (CA-8)
- The authorizing official shall approve written rules of engagement, covering scope, timing, methods, contacts and how testing is stopped, before each penetration test begins. (CA-8)
- The {{org:system-owner}} shall enter each weakness a penetration test finds into the system's plan of action and milestones or vulnerability remediation process. (CA-8)
