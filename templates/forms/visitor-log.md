---
title: Visitor Log
type: form
description: The record of each visit to the non-public areas of a facility, with the visitor, the person visited, the times, the badge and the escort, its retention and review, and the anomalies reported, limited to the elements the privacy risk assessment allows, as SP 800-53 PE-8 requires.
controls: [pe-8, pe-8.1, pe-8.3, pe-3]
status: draft
stage: operate
typical:
  pe-08_odp.01: '2 years, or longer where the organization''s records retention schedule requires'
  pe-08_odp.02: 'at least monthly'
  pe-08_odp.03: 'the facilities manager and the security operations team'
  pe-08.03_odp: 'the visitor''s name and organization, the person visited, the purpose of the visit, the date and times of entry and departure, the badge issued and the escort; the type of identification checked, but not its number or a copy of it unless a law or regulation requires one'
  pe-03_odp.06: 'at all times in non-public areas, for every visitor and for anyone without a physical access authorization for the area, including maintenance personnel who are not on the authorized maintenance list'
---

:::guidance
Keep one log for each facility entrance where visitors are received. An electronic visitor management system can hold it instead, which is how PE-8(1) is usually met for a High system, as long as each record holds the fields below. NIST's PE-8 discussion says records are not required for publicly accessible areas, and that people with permanent credentials are not visitors: they belong on the [physical access list](/templates/forms/physical-access-list/). Maintenance personnel who visit to work on the system also appear in the [maintenance log](/templates/forms/maintenance-log/), which records their escort for the work itself. Assessors pick a few dates, ask for that day's records and check that each visitor had an escort and a departure time. The register at the end is also downloadable as a CSV file.
:::

| Facility and entrance | Log owner | Records kept for | Last reviewed |
| --- | --- | --- | --- |
| {{fill:facility and entrance}} | {{org:facilities-manager}} | {{param:pe-08_odp.01}} | {{fill:date}} |

## 1. How to use this log

- Record every visitor to a non-public area when they arrive, check their identification, and issue a visitor badge that looks different from permanent badges and is valid only for that day (PE-8a, PE-3d).
- Escort and control visitors {{param:pe-03_odp.06}}. Record the escort; the escort stays with the visitor until they leave the non-public area (PE-3d).
- Record the departure time and collect the badge when the visitor leaves. A badge that is not returned is disabled and reported as an anomaly.
- Keep the records for {{param:pe-08_odp.01}} (PE-8a).
- Review the records {{param:pe-08_odp.02}} and record the review in section 3 (PE-8b).
- Report anomalies to {{param:pe-08_odp.03}} (PE-8c). An anomaly that suggests a security incident is reported under the [incident response plan](/templates/plans/incident-response-plan/).
- A person who visits so often that they need regular access should be authorized under PE-2 and added to the physical access list instead.

| Field | What to record |
| --- | --- |
| Visit ID | A unique ID, or the line number on a paper log |
| Date | Date of the visit |
| Visitor | Name and organization |
| Identification checked | The type of identification checked, for example a driver's license or a government ID card; not its number, unless section 2 allows it |
| Person visited | Name and organization of the person visited |
| Purpose | Why the visitor came, for example a meeting, a delivery or maintenance |
| Areas | The non-public areas the visitor entered |
| Badge | The visitor badge number issued, and whether it was returned |
| Escort | Name of the employee who escorted the visitor (PE-3d) |
| Entry and departure | Times of entry and departure |

## 2. Limits on personally identifiable information

For a facility whose systems are under the Privacy baseline, the log collects only these elements, identified in the privacy risk assessment: {{param:pe-08.03_odp}} (PE-8(3)). Record the decision in the minimization entry of the [privacy impact assessment](/templates/reports/privacy-impact-assessment/), and remove any field, form or system setting that collects anything else. On a paper log, use one sheet per visitor, or a cover, so that visitors cannot read earlier entries.

:::federal
The National Archives and Records Administration's [General Records Schedule 5.6](https://www.archives.gov/files/records-mgmt/grs/grs05-6.pdf) (GRS Transmittal 35, May 2024), items 110 and 111, covers visitor processing records: destroy when 5 years old for areas requiring the highest level of security awareness, including Facility Security Level V, and when 2 years old for all other facility security areas, including Facility Security Levels I to IV, with longer retention allowed if required for business use. Under the Privacy Act, records retrieved by an individual's name or other identifier are a system of records ([5 U.S.C. § 552a(a)(5)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title5-section552a&num=0&edition=prelim)), and an agency must give each individual it asks for information in one the notice that [§ 552a(e)(3)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title5-section552a&num=0&edition=prelim) describes. As of October 2026.

- The "Records kept for" value shall be at least 5 years for a Facility Security Level V facility and at least 2 years for any other, as GRS 5.6 items 110 and 111 set, unless the agency's approved records schedule sets a different period. (PE-8a)
- Where the log is retrieved by a visitor's name or other identifier, it shall be covered by a published system of records notice, and the sign-in form or visitor management system shall present the Privacy Act statement that 5 U.S.C. § 552a(e)(3) requires. (PE-8(3))

:::

## 3. Reviews

| Review date | Reviewed by | Period covered | Checks (missing departure times, badges not returned, visits outside hours, no escort, repeat visitors) | Anomalies found, and to whom reported | Next review |
| --- | --- | --- | --- | --- | --- |
| {{fill:date}} | {{fill:name and title}} | {{fill:dates}} | {{fill:checks done}} | {{fill:anomalies and report date, or "none"}} | {{fill:date}} |

## Register

| Visit ID | Date | Visitor | Identification checked | Person visited | Purpose | Areas | Badge | Escort | Entry and departure |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:ID}} | {{fill:date}} | {{fill:name and organization}} | {{fill:type of identification}} | {{fill:name and organization}} | {{fill:purpose}} | {{fill:areas}} | {{fill:badge number, returned or not}} | {{fill:name}} | {{fill:times}} |
