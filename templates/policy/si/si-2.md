---
control: si-2
title: 'Flaw remediation'
status: draft
stage: operate
typical:
  si-02_odp: 'known exploited: as soon as possible, within days; critical and high: 30 days; moderate: 90 days; low: 180 days'
---

:::guidance
SI-2 is the fixing half of vulnerability management: RA-5 finds the flaws, and SI-2 installs the updates that correct them. The installation times here count from the release of the update, while the RA-5 remediation times count from when a finding is reported, so keep the two sets of values consistent. The [Patch and Flaw Remediation Standard](/templates/standards/patch-and-flaw-remediation-standard/) sets the test groups, deployment rings and schedules. NIST SP 800-40 Rev. 4, Guide to Enterprise Patch Management Planning (April 2022, current as of September 2026), describes how to plan patching as routine preventive maintenance.
:::

- The {{org:system-owner}} shall identify system flaws from vulnerability scanning and monitoring, vendor security advisories, assessments and incident analysis. (SI-2a)
- The {{org:system-owner}} shall report identified flaws that affect the system to the {{org:security-operations}} and record each in the system's flaw tracking. (SI-2a)
- The {{org:system-owner}} shall correct identified system flaws. (SI-2a)
- The {{org:system-owner}} shall test software and firmware updates related to flaw remediation for effectiveness and potential side effects before installing them in production. (SI-2b)
- The {{org:system-owner}} shall install security-relevant software and firmware updates within {{param:si-02_odp}} of the release of the updates. (SI-2c)
- The {{org:system-owner}} shall enter any security-relevant update that cannot be installed in time in the system's plan of action and milestones, with a planned date and any compensating measures, before its installation time ends. (SI-2c)
- The {{org:system-owner}} shall incorporate flaw remediation into the organization's configuration management process, recording routine updates as standard changes and urgent updates as emergency changes. (SI-2d)

:::guidance
Unsupported software and firmware cannot be fixed. Record each unsupported component as a flaw, with a replacement date in the plan of action and milestones, until it is removed (SA-22).
:::

:::federal
CISA [BOD 26-04](https://www.cisa.gov/news-events/directives/bod-26-04-prioritizing-security-updates-based-risk), Prioritizing Security Updates Based on Risk (June 10, 2026), sets remediation deadlines for federal civilian agencies by whether an asset is publicly exposed, whether the vulnerability is in CISA's Known Exploited Vulnerabilities (KEV) catalog, whether exploitation can be automated, and its technical impact, from 3 days to "fix on system upgrade". Its clock starts when CISA adds a vulnerability to the KEV catalog or the agency identifies it, whichever is first. It revoked BOD 22-01 and BOD 19-02. It does not apply to national security systems. As of September 2026.

- The {{org:system-owner}} shall set the SI-2c installation times no longer than the deadlines CISA BOD 26-04 sets, and install security updates within those deadlines. (SI-2c)

:::
