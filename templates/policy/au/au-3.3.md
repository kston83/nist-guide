---
control: au-3.3
title: 'Limit personally identifiable information elements'
status: draft
stage: core
typical:
  au-03.03_odp: 'the account identifier, the source address and device, and the identifiers of records accessed, not their contents'
---

:::guidance
AU-3(3) is in the Privacy baseline only. NIST's discussion says limiting personally identifiable information in audit records when it is not needed for operational purposes helps reduce the privacy risk a system creates, and its AU-2 and AU-3 discussions warn that the audit trail can reveal personal information, especially when it records inputs or is based on patterns or time of usage. Limiting what is logged never removes the identity of the person who acted, which AU-3f requires: an account identifier is needed, the full record a user looked at is not. Section 5 of the [audit logging standard](/templates/standards/audit-logging-standard/) sets the masking, and its Part B lists the elements each log source writes. Record the elements in section 3 of the [privacy impact assessment](/templates/reports/privacy-impact-assessment/), which lists information the system creates, including logs.
:::

- For a system that processes personally identifiable information, the {{org:system-owner}} shall limit personally identifiable information contained in audit records to the following elements identified in the privacy risk assessment: {{param:au-03.03_odp}}. (AU-3(3))
- The {{org:privacy-official}} shall review, with the {{org:system-owner}}, the personally identifiable information elements the system writes to audit records, and the {{org:system-owner}} shall record the approved elements in the privacy impact assessment. (AU-3(3))
- The {{org:system-owner}} shall ensure request bodies, form inputs, query strings and other content that may hold personally identifiable information are masked, truncated or left out of audit records unless the privacy impact assessment lists them as needed. (AU-3(3))
