---
control: si-5
title: 'Security alerts, advisories and directives'
status: draft
stage: operate
typical:
  si-05_odp.01: 'CISA, the vendors of the system''s components, and the organization''s information sharing and analysis center'
  si-05_odp.02: 'system owners and system administrators, the security operations and incident response teams, and the service providers who operate systems for the organization, where an alert affects them'
  si-05_odp.03: 'system owners and system administrators'
  si-05_odp.04: 'the security operations and incident response teams'
  si-05_odp.05: 'the service providers who operate systems for the organization, where an alert affects them'
---

:::guidance
Subscribing to the CISA advisories and the vendor security bulletins for every product in the component inventory (CM-8) is the usual starting point. The value is in routing: each alert reaches the people who run the affected component, with a due date.
:::

- The {{org:security-operations}} shall receive system security alerts, advisories and directives from {{param:si-05_odp.01}} on an ongoing basis. (SI-5a)
- The {{org:security-operations}} shall generate internal security alerts, advisories and directives as deemed necessary. (SI-5b)
- The {{org:security-operations}} shall disseminate security alerts, advisories and directives to {{param:si-05_odp.02}}. (SI-5c)
- The {{org:system-owner}} shall implement security directives in accordance with their established time frames, or notify the issuing organization of the degree of noncompliance. (SI-5d)

:::federal
The Federal Information Security Modernization Act requires the head of each agency to comply with the binding operational directives and emergency directives the Secretary of Homeland Security issues under 44 U.S.C. § 3553(b) and (h) ([44 U.S.C. § 3554(a)(1)(B)(ii) and (v)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title44-section3554&num=0&edition=prelim)). CISA publishes them on its [Cybersecurity Directives](https://www.cisa.gov/directives) page; they do not apply to national security systems. As of September 2026.

- The {{org:ciso}} shall track each CISA binding operational directive and emergency directive that applies to the agency, and ensure system owners complete its required actions and reports within the time frames it sets. (SI-5d)

:::
