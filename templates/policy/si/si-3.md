---
control: si-3
title: 'Malicious code protection'
status: draft
stage: operate
typical:
  si-03_odp.01: 'signature-based and non-signature-based'
  si-03_odp.02: 'at least weekly'
  si-03_odp.03: 'endpoint and network entry and exit points'
  si-03_odp.04: 'block and quarantine malicious code'
  si-03_odp.06: 'the security operations team'
---

:::guidance
Endpoint detection and response on servers and workstations, together with malware scanning in the email and web gateways, usually covers system entry and exit points. Non-signature-based means behavior or reputation analysis, which catches malware no signature yet describes. Enterprise tools are often common controls; the system owner makes sure every component that can run an agent has one.
:::

- The {{org:system-owner}} shall implement {{param:si-03_odp.01}} malicious code protection mechanisms at system entry and exit points to detect and eradicate malicious code. (SI-3a)
- The {{org:system-owner}} shall ensure malicious code protection mechanisms update automatically as new releases are available, in accordance with the organization's configuration management policy and procedures. (SI-3b)
- The {{org:system-owner}} shall configure malicious code protection mechanisms to perform periodic scans of the system {{param:si-03_odp.02}}. (SI-3c.1)
- The {{org:system-owner}} shall configure malicious code protection mechanisms to perform real-time scans of files from external sources at {{param:si-03_odp.03}} as the files are downloaded, opened or executed. (SI-3c.1)
- The {{org:system-owner}} shall configure malicious code protection mechanisms to {{param:si-03_odp.04}} and to send an alert to {{param:si-03_odp.06}} when malicious code is detected. (SI-3c.2)
- The {{org:security-operations}} shall review reported false positives, approve any scan exclusion with a documented reason and an expiry date, and record the effect of false positives on the availability of the system. (SI-3d)
