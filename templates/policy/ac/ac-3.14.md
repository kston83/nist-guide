---
control: ac-3.14
title: 'Individual access'
status: draft
stage: core
typical:
  ac-03.14_odp.01: 'a request process described in the privacy notice, with identity verification before any information is released, and a self-service page where the system offers one'
  ac-03.14_odp.02: 'all personally identifiable information about the individual that the system holds, except elements a law, regulation or legal hold exempts from access, as the senior privacy official and legal counsel determine'
---

:::guidance
AC-3(14) is in the Privacy baseline only. NIST's discussion says individual access lets individuals review the personally identifiable information about them held in organizational records, regardless of format, which helps them understand how it is processed and check that it is accurate. Access mechanisms can include request forms and application interfaces. Access to some records may not be appropriate, or may require a certain level of authentication assurance, so personnel consult the senior privacy official and legal counsel on the mechanisms and on any limits. Describe the mechanism in the [privacy notice](/templates/forms/privacy-notice/) and in section 8 of the [privacy impact assessment](/templates/reports/privacy-impact-assessment/). Correction of what individuals find is SI-18(4).
:::

- For a system that processes personally identifiable information, the {{org:system-owner}} shall provide {{param:ac-03.14_odp.01}} to enable individuals to have access to the following elements of their personally identifiable information: {{param:ac-03.14_odp.02}}. (AC-3(14))
- The {{org:privacy-official}}, with legal counsel, shall approve the access mechanisms and any limits on the elements available, and the {{org:system-owner}} shall record them in the privacy impact assessment. (AC-3(14))
- The {{org:system-owner}} shall ensure the identity of each requester, or the authority of their designated representative, is verified at an assurance level suited to the sensitivity of the information before any information is released. (AC-3(14))
- The {{org:privacy-official}} shall ensure each access request is answered, and that a refusal or a partial release is given in writing with the reason and how to appeal. (AC-3(14))

:::federal
The Privacy Act requires each agency that maintains a system of records, upon request by any individual to gain access to their record or to any information about them in the system, to permit the individual, and upon request a person of their own choosing to accompany them, to review the record and have a copy made of all or any portion of it in a form comprehensible to them; the agency may require a written statement authorizing discussion of the record in the accompanying person's presence ([5 U.S.C. § 552a(d)(1)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title5-section552a&num=0&edition=prelim)). Each system of records notice must describe the agency procedures by which an individual can learn how to gain access to a record about them and how to contest its content (§ 552a(e)(4)(H)). The agency's Privacy Act rules must establish procedures for notifying individuals whether a system of records contains a record about them, define reasonable times, places and requirements for identifying requesters, establish procedures for disclosure to individuals, and set any fees for copies, excluding the cost of search and review (§ 552a(f)). Nothing in the section allows access to information compiled in reasonable anticipation of a civil action or proceeding (§ 552a(d)(5)), and subsections (j) and (k) let an agency exempt some systems of records from the access provisions by rule. Text checked in the United States Code, 2024 edition, as of October 2026.

- For each system of records, the {{org:privacy-official}} shall ensure that individuals can review, and have a copy made of, their records in a form comprehensible to them, accompanied by a person of their choosing on request, as 5 U.S.C. § 552a(d)(1) requires, except for information § 552a(d)(5) excludes and systems the agency has exempted by rule under § 552a(j) or (k). (AC-3(14))
- The access mechanisms for each system of records shall follow the agency's Privacy Act rules under 5 U.S.C. § 552a(f), and its system of records notice shall describe them as § 552a(e)(4)(H) requires. (AC-3(14))

:::
