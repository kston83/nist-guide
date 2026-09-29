---
title: Patch and Flaw Remediation Standard
type: standard
description: The sources of flaws, installation times, testing, deployment, verification and exception rules that make the system and information integrity policy's flaw remediation requirements (SP 800-53 SI-2 and SI-2(2)) measurable.
controls: [si-2, si-2.2, si-3, si-5, si-7.15]
status: draft
stage: operate
typical:
  si-02_odp: 'known exploited: as soon as possible, within days; critical and high: 30 days; moderate: 90 days; low: 180 days'
  si-02.02_odp.01: 'the patch management and vulnerability scanning tools'
  si-02.02_odp.02: 'at least weekly'
  si-05_odp.01: 'CISA, the vendors of the system''s components, and the organization''s information sharing and analysis center'
  si-07.15_odp: 'operating system and application updates, firmware updates, drivers and container images'
---

:::guidance
The system and information integrity policy says flaws must be fixed and security updates installed on time; this standard says where flaws come from, how fast each kind of update goes in, how updates are tested and rolled out, and how the organization knows they were installed. Keep the values here in step with the SI-2 and SI-2(2) statements in the policy, since assessors compare the two. The [Vulnerability Management Standard](/templates/standards/vulnerability-management-standard/) covers finding, rating and tracking vulnerabilities (RA-5); this standard covers installing the fixes. The two sets of times measure different things: installation times here count from the release of an update, while remediation times in the vulnerability management standard count from when a finding is reported. Set them so that meeting one does not break the other. [NIST SP 800-40 Rev. 4](https://csrc.nist.gov/pubs/sp/800/40/r4/final), Guide to Enterprise Patch Management Planning (April 2022, current as of September 2026), describes how to plan patching as routine preventive maintenance.
:::

| Owner | Approved by | Version | Effective date |
| --- | --- | --- | --- |
| {{org:ciso}} | {{fill:name and title}} | {{fill:version}} | {{fill:date}} |

## 1. Purpose and scope

This standard sets the minimum requirements for identifying, testing, installing and verifying security-relevant software and firmware updates in the systems of {{org:name}}. It applies to every system in the system inventory and every component in each system's component inventory: operating systems, firmware, network and security devices, databases, middleware, applications, libraries, container images and cloud services the organization configures.

## 2. Roles

| Role | Responsibilities |
| --- | --- |
| {{org:ciso}} | Owns this standard; provides the patch management and vulnerability scanning tools; approves exceptions to installation times; reports status to leadership |
| {{fill:patching function, for example the IT operations team}} | Installs updates for operating systems and common software through the patch management tools; runs the test group and deployment groups; reports patch compliance |
| {{org:system-owner}} | Keeps the component inventory complete; makes sure every component is updated within the times below, including applications, libraries, appliances and images the enterprise tools do not cover; requests exceptions |
| {{org:security-operations}} | Receives and routes security alerts and advisories; flags updates for known exploited vulnerabilities; checks patch status against vulnerability scans |

## 3. Identifying flaws and updates

- Each system owner shall identify system flaws from vulnerability scanning and monitoring, vendor security advisories, assessments and incident analysis. (SI-2a)
- The {{org:security-operations}} shall receive security alerts, advisories and directives from {{param:si-05_odp.01}} on an ongoing basis, and route each one that affects a component in the inventory to the owners of that component. (SI-5a, SI-5c)
- Each identified flaw that affects the system shall be reported to the {{org:security-operations}} and recorded in the system's flaw tracking, with the component, the update that corrects it and its release date. (SI-2a)
- Each flaw shall be given a severity using the severity scale in the vulnerability management standard, with flaws listed in the CISA Known Exploited Vulnerabilities Catalog, or seen exploited by the organization, rated known exploited. (SI-2c)

## 4. Installation times

- Security-relevant software and firmware updates shall be installed within {{param:si-02_odp}} of the release of the updates. (SI-2c)
- The time is counted from the day the vendor releases the update, or from the day the organization learns of it where the vendor gives notice later. (SI-2c)
- Where the vendor offers no update, the time applies to the vendor's published mitigation or workaround, and the flaw stays open until the update is installed. (SI-2c)

| Severity | Installation time from release |
| --- | --- |
| Known exploited | {{fill:for example 14 days, or sooner when the vulnerability is on an internet-facing component}} |
| Critical | {{fill:for example 30 days}} |
| High | {{fill:for example 30 days}} |
| Moderate | {{fill:for example 90 days}} |
| Low | {{fill:for example 180 days}} |

## 5. Testing and deployment

- Software and firmware updates related to flaw remediation shall be tested for effectiveness and potential side effects before they are installed in production. (SI-2b)
- Updates shall be deployed in groups: first a test group of {{fill:for example non-production systems and a sample of representative production components}}, then the remaining components, with the time between groups set so that the installation times in section 4 are met. (SI-2b)
- For an update to a known exploited vulnerability, testing may be shortened to what fits the installation time, with the testing done recorded in the change record. (SI-2b)
- Container images, virtual machine images and infrastructure defined as code shall be rebuilt from updated base images and redeployed, rather than patched in place, where the system is built that way. (SI-2c)
- Each deployment shall have a way to roll back, and a failed update shall be recorded as a flaw that is still open. (SI-2b)
- Malicious code protection mechanisms shall update automatically as new releases are available, in accordance with the configuration management policy and procedures. (SI-3b)

This paragraph applies to High systems.

- Cryptographic mechanisms shall authenticate the following software and firmware components before installation: {{param:si-07.15_odp}}. An unsigned or wrongly signed component shall be treated as a failed installation. (SI-7(15))

## 6. Configuration management

- Flaw remediation shall be carried out through the configuration change process. (SI-2d)
- Routine updates from approved sources, installed by the patch management tools on their normal schedule, shall be recorded as standard (pre-approved) changes. (SI-2d, CM-3)
- Updates for known exploited vulnerabilities that cannot wait for the normal schedule shall go through the emergency change process, with the change record completed after installation. (SI-2d, CM-3)
- Baseline configurations and images shall be updated to include installed updates, so that new components are not built with old flaws. (SI-2d, CM-2)

## 7. Verifying update status

- Each system owner shall determine whether system components have applicable security-relevant software and firmware updates installed, using {{param:si-02.02_odp.01}}, {{param:si-02.02_odp.02}}. (SI-2(2))
- Patch compliance reports from the patch management tools shall be checked against authenticated vulnerability scans, and differences resolved. (SI-2(2))
- Components the tools cannot reach, such as appliances and embedded devices, shall be checked manually on the same schedule, with the check recorded. (SI-2(2))
- An update is installed when a later scan or report shows the component at the fixed version. (SI-2c)

## 8. Unsupported components

- A component whose vendor no longer provides security updates shall be recorded as a flaw, with a replacement date in the system's plan of action and milestones, until it is removed or replaced. (SA-22)
- Where an unsupported component must stay in use, the system owner shall record the compensating measures, such as isolation and extra monitoring, and have the risk accepted under section 9. (SA-22, RA-7)

## 9. Exceptions

- A security-relevant update that cannot be installed within its time shall be entered in the system's plan of action and milestones, with a planned date and any compensating measures, before its installation time ends. (SI-2c)
- An update that will not be installed shall be accepted only by an official the risk management strategy authorizes to accept risk at its level, with the compensating measures and an expiry date recorded. (RA-7)
- Exceptions shall be reviewed {{fill:for example quarterly}} and at expiry. (RA-7)

## 10. Reporting

- The {{org:ciso}} shall report {{fill:for example monthly}} on patch compliance by system and component type, updates installed within and outside their times by severity, unsupported components, and open exceptions. (SI-2c)

:::federal
CISA binding operational directives set minimums for federal civilian agencies; they do not apply to national security systems. As of September 2026.

- [BOD 26-04](https://www.cisa.gov/news-events/directives/bod-26-04-prioritizing-security-updates-based-risk), Prioritizing Security Updates Based on Risk (June 10, 2026), sets remediation deadlines by whether an asset is publicly exposed, whether the vulnerability is in the KEV catalog, whether exploitation can be automated, and its technical impact, from 3 days to "fix on system upgrade". Its clock starts when CISA adds a vulnerability to the KEV catalog or the agency identifies it, whichever is first. It revoked BOD 22-01 and BOD 19-02.
- [BOD 23-01](https://www.cisa.gov/news-events/directives/bod-23-01-improving-asset-visibility-and-vulnerability-detection-federal-networks), Improving Asset Visibility and Vulnerability Detection on Federal Networks (October 3, 2022), requires automated asset discovery every 7 days and vulnerability enumeration across all discovered assets, including roaming devices such as laptops, every 14 days.
- The Federal Information Security Modernization Act requires the head of each agency to comply with binding operational directives and emergency directives ([44 U.S.C. § 3554(a)(1)(B)(ii) and (v)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title44-section3554&num=0&edition=prelim)); CISA publishes them on its [Cybersecurity Directives](https://www.cisa.gov/directives) page.

- Installation times in section 4 shall be no longer than the deadlines CISA BOD 26-04 sets, counted from the start BOD 26-04 uses where that is earlier than the update's release. (SI-2c)
- Each system's assets shall be covered by automated asset discovery at least every 7 days and by vulnerability enumeration at least every 14 days, as CISA BOD 23-01 requires. (SI-2(2))
- Updates and mitigations that a CISA emergency directive requires shall be installed within the time frames it sets. (SI-5d)

:::

## 11. Review

The {{org:ciso}} reviews this standard {{fill:for example annually}}, and whenever the system and information integrity policy, a CISA directive or the organization's risk tolerance changes.

| Version | Date | Change | Approved by |
| --- | --- | --- | --- |
| {{fill:version}} | {{fill:date}} | {{fill:summary of change}} | {{fill:name and title}} |
