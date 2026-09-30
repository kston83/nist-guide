---
control: sa-8.33
title: 'Minimization'
status: draft
stage: operate
typical:
  sa-08.33_odp: 'the minimization review in the system''s privacy impact assessment, which lists the data elements needed for each stated purpose and those left out, and the retention periods and disposal steps set under SI-12'
---

:::guidance
Minimization means processing only the personally identifiable information that is directly relevant and necessary to an authorized purpose, and keeping it only as long as that purpose needs, as NIST's SA-8(33) discussion puts it. SA-8(33) builds the principle into the design; SI-12(1) limits the elements a running system processes, and SI-12(2) limits personally identifiable information in testing, training and research. The minimization section of the [privacy impact assessment](/templates/reports/privacy-impact-assessment/) is the usual record. SA-8(33) is in the Privacy baseline only.
:::

- For a system that processes personally identifiable information, the {{org:system-owner}} shall implement the privacy principle of minimization using {{param:sa-08.33_odp}}. (SA-8(33))
- The {{org:privacy-official}} shall review the minimization decisions for each new system, and for each change that adds personally identifiable information or a new purpose, before the change is approved. (SA-8(33))

:::federal
The Privacy Act requires each agency that maintains a system of records to "maintain in its records only such information about an individual as is relevant and necessary to accomplish a purpose of the agency required to be accomplished by statute or by executive order of the President" ([5 U.S.C. § 552a(e)(1)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title5-section552a&num=0&edition=prelim)). As of September 2026.

- For a system that contains a Privacy Act system of records, the {{org:system-owner}} shall design the system to maintain only the information about individuals that is relevant and necessary to a purpose of the agency required by statute or executive order, as 5 U.S.C. § 552a(e)(1) requires. (SA-8(33))

:::
