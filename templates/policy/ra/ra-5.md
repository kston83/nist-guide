---
control: ra-5
title: Vulnerability monitoring and scanning
status: draft
stage: core
typical:
  ra-05_odp.01: 'continuously, through vendor advisories, vulnerability feeds and the CISA Known Exploited Vulnerabilities Catalog'
  ra-05_odp.02: 'at least monthly for infrastructure, and before each major release for applications'
  ra-05_odp.03: 'known exploited: as soon as possible, within days; critical and high: 30 days; moderate: 90 days; low: 180 days'
  ra-05_odp.04: 'the owners of similar systems and the security operations team'
---

:::guidance
Monitoring means watching for newly announced vulnerabilities that affect the system's components; scanning means testing the components themselves. Set remediation times by risk, and move known exploited vulnerabilities to the front. A vulnerability not fixed in time becomes a plan of action and milestones item (CA-5) or an approved risk acceptance (RA-7). Standards for naming and scoring vulnerabilities include CVE, CPE and CVSS.
:::

- Each {{org:system-owner}} shall ensure the system and its hosted applications are monitored for vulnerabilities {{param:ra-05_odp.01}}. (RA-5a)
- The {{org:system-owner}} shall ensure the system and its hosted applications are scanned for vulnerabilities {{param:ra-05_odp.02}}, and when new vulnerabilities potentially affecting the system are identified and reported. (RA-5a)
- The {{org:ciso}} shall provide vulnerability monitoring tools that use standards for enumerating platforms, software flaws and improper configurations, for formatting checklists and test procedures, and for measuring vulnerability impact. (RA-5b)
- The {{org:ciso}} shall provide vulnerability monitoring tools that can readily update the vulnerabilities to be scanned. (RA-5f)
- The {{org:system-owner}} shall analyze vulnerability scan reports and the results of vulnerability monitoring, and record any finding judged a false positive with the reason. (RA-5c)
- The {{org:system-owner}} shall remediate legitimate vulnerabilities within {{param:ra-05_odp.03}}, in accordance with an organizational assessment of risk. (RA-5d)
- The {{org:system-owner}} shall share information obtained from vulnerability monitoring and control assessments with {{param:ra-05_odp.04}}, to help eliminate similar vulnerabilities in other systems. (RA-5e)

:::federal
CISA binding operational directives set minimums for federal civilian agencies (as of September 2026). [BOD 26-04](https://www.cisa.gov/news-events/directives/bod-26-04-prioritizing-security-updates-based-risk), Prioritizing Security Updates Based on Risk (June 10, 2026), sets remediation deadlines by exposure, KEV status, whether exploitation can be automated, and technical impact; its clock starts when CISA adds a vulnerability to the KEV catalog or the agency identifies it, whichever is first. [BOD 23-01](https://www.cisa.gov/news-events/directives/bod-23-01-improving-asset-visibility-and-vulnerability-detection-federal-networks), Improving Asset Visibility and Vulnerability Detection on Federal Networks (October 3, 2022), requires automated asset discovery every 7 days and vulnerability enumeration across discovered assets every 14 days.

- The {{org:system-owner}} shall remediate vulnerabilities no later than the deadlines CISA BOD 26-04 sets. (RA-5d)
- The {{org:system-owner}} shall ensure the system's assets are covered by automated asset discovery at least every 7 days and by vulnerability enumeration at least every 14 days, as CISA BOD 23-01 requires. (RA-5a)

:::
