---
control: pe-8.3
title: 'Limit personally identifiable information elements'
status: draft
stage: operate
typical:
  pe-08.03_odp: 'the visitor''s name and organization, the person visited, the purpose of the visit, the date and times of entry and departure, the badge issued and the escort; the type of identification checked, but not its number or a copy of it unless a law or regulation requires one'
---

:::guidance
PE-8(3) is in the Privacy baseline only. NIST's discussion of this enhancement says organizations may have requirements that specify the contents of visitor access records, and that limiting personally identifiable information in them when it is not needed for operational purposes reduces privacy risk. Decide the elements in the system's or facility's [privacy impact assessment](/templates/reports/privacy-impact-assessment/) and record them in the minimization entry, then configure the [visitor log](/templates/forms/visitor-log/) or visitor management system to collect only those. Common excess elements are identity document numbers, photocopies or scans of identification, home addresses, dates of birth and vehicle details where no parking control needs them.
:::

- The {{org:facilities-manager}} shall limit personally identifiable information contained in visitor access records to the following elements identified in the privacy risk assessment: {{param:pe-08.03_odp}}. (PE-8(3))
- The {{org:privacy-official}} shall review the elements before a visitor log, form or visitor management system is introduced or changed, and the {{org:facilities-manager}} shall remove any field that collects other elements. (PE-8(3))
- Visitor sign-in sheets shall be designed so that visitors cannot read earlier entries. (PE-8(3))

:::federal
Under the Privacy Act, a system of records is a group of records under an agency's control from which information is retrieved by the name of the individual or by an identifying number, symbol or other identifying particular ([5 U.S.C. § 552a(a)(5)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title5-section552a&num=0&edition=prelim)), and an agency must inform each individual it asks to supply information for one of the authority for asking and whether disclosure is mandatory or voluntary, the principal purposes, the routine uses, and the effects of not providing it ([§ 552a(e)(3)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title5-section552a&num=0&edition=prelim)). Text checked in the United States Code, 2024 edition, as of October 2026.

- Where visitor access records are retrieved by a visitor's name or other identifier, the {{org:privacy-official}} shall confirm they are covered by a published system of records notice, and the visitor log or visitor management system shall present the Privacy Act statement that 5 U.S.C. § 552a(e)(3) requires. (PE-8(3))

:::
