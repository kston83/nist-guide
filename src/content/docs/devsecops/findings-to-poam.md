---
title: Scanner findings to risk decisions and the POA&M
description: How a team that ships through a pipeline turns scanner findings into RA-5, SI-2, RA-7 and CA-5 records, from one tracker to the POA&M, and what an assessor checks.
sidebar:
  order: 3
controls: [ra-5, ra-5.2, ra-7, si-2, si-2.2, si-2.3, ca-5, ca-5.1]
guidance: draft
---

A team that ships through a pipeline can meet [RA-5](/controls/ra/ra-5/), [SI-2](/controls/si/si-2/), [RA-7](/controls/ra/ra-7/) and [CA-5](/controls/ca/ca-5/) from the records its scanners and pipeline already produce. Every finding in the running system goes to one tracker, gets a risk decision, and is fixed by a new artifact that the pipeline tests and deploys. Open findings are plan of action and milestones (POA&M) entries, generated from the tracker rather than copied by hand. This page sets out the conditions that make that work, and what an assessor will check. Status as of November 2026.

## The problem

RA-5, SI-2 and CA-5 were written around a monthly cycle. A scanner runs against a fixed set of servers, a team installs patches in a maintenance window, and someone copies the findings that missed their deadline into a POA&M spreadsheet. A pipeline team scans every build, every image in its registry and every running workload, with several tools that each report the same vulnerability their own way.

The two failures are mirror images. Some teams treat each tool's dashboard as the record, so findings never reach the POA&M, a rebuilt image restarts the clock, and an ignore file quietly closes what nobody analyzed. Others push every raw finding into the POA&M, including findings in code that never shipped, so it holds thousands of duplicates and nobody can say which risks are real.

NIST already draws the line. RA-5 covers vulnerabilities "in the system and hosted applications", and RA-7's discussion says to decide the response before creating a POA&M entry: "if the risk response is to mitigate the risk, and the mitigation cannot be completed immediately, a plan of action and milestones entry is generated." The question is how a pipeline shows an assessor that every finding in the running system got that decision, and that every fix reached production.

## The requirement

The controls are [RA-5](/controls/ra/ra-5/) Vulnerability Monitoring and Scanning, [SI-2](/controls/si/si-2/) Flaw Remediation, [RA-7](/controls/ra/ra-7/) Risk Response and [CA-5](/controls/ca/ca-5/) Plan of Action and Milestones. Of their enhancements in the Moderate baseline, this page covers [RA-5(2)](/controls/ra/ra-5/#ra-5.2) updating the vulnerabilities scanned (also Low) and [SI-2(2)](/controls/si/si-2/#si-2.2) automated flaw remediation status (also High); the RA-5 page covers the others. Two enhancements in no baseline fit a pipeline well and cost little once the tracker exists: [SI-2(3)](/controls/si/si-2/#si-2.3) time to remediate flaws and benchmarks, and [CA-5(1)](/controls/ca/ca-5/#ca-5.1) automation support for accuracy and currency. Each control page lists the full SP 800-53A objectives; these are the ones a pipeline changes most.

| Objective (SP 800-53A) | What the assessor determines | What changes with a pipeline |
| --- | --- | --- |
| RA-05a.[01], a.[02] | The system and hosted applications are monitored and scanned at the set frequency, and when new vulnerabilities are reported | Every build is scanned, but images already running must be rescanned when new vulnerabilities are published |
| RA-05b | Tools use standards to name platforms and flaws, format checks and measure impact | Each scanner's output keeps its CVE identifiers and CVSS scores in the tracker |
| RA-05c | Scan reports and monitoring results are analyzed | Several tools' findings are deduplicated and analyzed in one place |
| RA-05d | Legitimate vulnerabilities are remediated within the set response times, based on risk | The clock runs from the first report on a deployed artifact, not from each rebuild |
| RA-05(02) | The vulnerabilities scanned for are updated, typically before each new scan | Pipeline scanners load fresh vulnerability data at each run |
| RA-07[01] to [04] | Findings from assessments, monitoring and audits get a response within the risk tolerance | A gate exception is not a risk acceptance; only the authorizing official accepts |
| SI-02a.[01] to [03] | Flaws are identified, reported and corrected | The tracker is the report; a new artifact in production is the correction |
| SI-02b.[01] to [04] | Updates are tested for effectiveness and side effects before installation | The pipeline's tests run on the rebuilt artifact before it reaches production |
| SI-02c.[01], c.[02] | Security-relevant updates are installed within the set time of their release | Base image and library updates count from the upstream release |
| SI-02d | Flaw remediation is part of configuration management | Fixes deploy as changes, in the preapproved pipeline class or as emergency changes |
| SI-02(02) | Automated mechanisms check update status at the set frequency | Running artifacts are compared with the tracker's fixed versions |
| SI-02(03)(a), (b) | Time to remediate is measured, and benchmarks for corrective action are set | The tracker's dates give the measure; the remediation times are the benchmarks |
| CA-05a | The POA&M documents planned remediation of assessment weaknesses and known vulnerabilities | Open scanner findings are entries, generated from the tracker |
| CA-05b | The POA&M is updated at the set frequency from assessments, audits and monitoring | The tracker changes daily; the register is exported on the CA-5 cycle |
| CA-05(01) | Automated mechanisms keep the POA&M accurate, current and available | The tracker and its export are the mechanism |

[SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) places the decisions. Task A-5 has organizations sort out false positives, so that "only substantive items are identified and transferred to the plan of actions and milestones"; task A-6 prepares the POA&M; task R-3 says "the authorizing official is the only person who can accept risk".

Task M-3 settles where each decision goes: "When the risk response is mitigation, the planned mitigation actions are included in and tracked using the plans of action and milestones", and an accepted finding stays documented in the assessment reports, monitored for changes. Task M-4 updates the POA&M on an ongoing basis; its footnote accepts a report from a security management tool as the assessment report when it holds what the report needs.

Related controls carry part of the load. [CM-3](/controls/cm/cm-3/) and the [change management page](/devsecops/change-management/) govern how a fix deploys, [CM-8](/controls/cm/cm-8/) and the [configuration baselines page](/devsecops/configuration-baselines/) give the inventory that scan coverage is measured against, and [SA-11](/controls/sa/sa-11/) covers the developer testing that finds flaws before release.

## The structure: SP 800-40 Rev. 4

[SP 800-40 Rev. 4](https://csrc.nist.gov/pubs/sp/800/40/r4/final), Guide to Enterprise Patch Management Planning: Preventive Maintenance for Technology (April 2022; final, no newer draft as of November 2026), sets the process. It defines enterprise patch management as "the process of identifying, prioritizing, acquiring, installing, and verifying the installation of patches, updates, and upgrades throughout an organization." Its Appendix A lists the SP 800-53 controls "most important for enterprise patch management planning": CM-2, CM-3, CM-8, RA-7, SI-2, SR-2, SR-3 and SR-5. It does not list RA-5 or CA-5; this page links them through SP 800-37 and the controls' own text.

**Every finding gets a risk response.** Section 2.1 names four: accept, mitigate (patch, disable the feature, or add a control), transfer, and avoid (remove the vulnerable software). Section 2.2's life cycle is the same for each: know when a vulnerability affects your assets, plan the response, then execute it, which means prepare, implement, verify, and keep monitoring that the response stays in place.

**Decide in advance, by group.** Section 3 says a risk assessment of each new vulnerability to plan its optimal response "is simply not feasible", so planning is done in advance. Section 3.3 defines four risk response scenarios, section 3.4 assigns every asset to a maintenance group with similar maintenance needs, and section 3.5 gives each group a maintenance plan per scenario, "including the timeframes for beginning and ending each action".

In a pipeline, each scenario has a place:

| SP 800-40 scenario (section 3.3) | Where it happens for a system built through a pipeline |
| --- | --- |
| Routine patching | Base images and libraries are updated on a schedule, often by automated merge requests; the pipeline rebuilds, tests and deploys through the preapproved class, to a small set of instances first (section 3.5.1's canaries) |
| Emergency patching | A known exploited or severe vulnerability goes through the same pipeline on an accelerated schedule, as an emergency change if a gate or window must be skipped; section 3.5.2 still suggests a short canary stage, "a few minutes to a few hours" |
| Emergency mitigation | No fix exists yet: a configuration change, a disabled feature or a traffic filter deploys through the pipeline, with a date to remove it once the fix ships (section 3.5.3) |
| Unpatchable assets | A component with no fix, an end-of-life version or a vendor-managed appliance: isolation methods approved in advance for its group, and a POA&M item with a replacement date (section 3.5.4) |

Maintenance groups for a pipeline team usually follow how components are built: images from each base image family, application libraries, managed services the provider patches, and the pipeline's own runners and build images. Section 3.4 says "Instead of denoting certain assets or types of assets as 'exceptions,' there should be maintenance groups for them", and section 3.5.5 that organizations "should closely track and monitor all exceptions to maintenance plans."

**Use the pipeline, and measure it.** Section 3.1 suggests taking "advantage of existing toolchains that already build applications with updated components and test them before production release." Section 3.2 says the old model of updating inventories monthly or quarterly by vulnerability scan "should no longer be used"; inventories need constant, automated updates instead. Section 3.6 recommends metrics that are actionable: for each combination of asset importance and vulnerability importance, the share patched by the maintenance plan's deadline and the mean and median time to patch.

The SSDF covers the same loop for software the team writes. Its [RV.1](/methods/ssdf/rv-1/), [RV.2](/methods/ssdf/rv-2/) and [RV.3](/methods/ssdf/rv-3/) practices identify vulnerabilities, analyze each one "to gather sufficient information about risk to plan its remediation or other risk response", and look for root causes. NIST's SSDF table maps those tasks to SA and SR controls, such as SA-11 and SA-15(7), not to RA-5, SI-2 or CA-5, so they appear on those control pages rather than these.

## When the tracker is the record

A findings tracker, a vulnerability management system fed by every scanner, is the record for RA-5 analysis, SI-2 flaw reporting and the scanner part of the POA&M when every condition below holds. Write how the system meets each one in its [Vulnerability Management Standard](/templates/standards/vulnerability-management-standard/) and system security plan.

1. **Every source feeds one tracker.** Dependency, image, infrastructure-as-code, dynamic application, host and cloud configuration scans, penetration tests and vulnerability reports all reach the tracker. A tool's own dashboard is not the record (RA-5c, SI-2a).
2. **Coverage is measured against the inventory.** Each running component, identified by image digest or resource, was scanned within the RA-5a frequency, with fresh vulnerability data. Images already running are rescanned when new vulnerabilities are published, not only at build, and each cycle reports what was missed (RA-5a, RA-5(2)).
3. **One finding per vulnerability, with its first date.** The same vulnerability reported by three tools is one finding for each affected component, or for a group of components built from one image. Its remediation time starts when it is first reported on a deployed artifact or running component, and a rebuild or redeployment does not restart it (RA-5c, RA-5d).
4. **Each finding is analyzed and rated.** Severity follows the standard's scale, raised for known exploited, internet-facing or critical components. A false positive, or a finding marked not affected in a Vulnerability Exploitability eXchange (VEX) statement, closes only with the reason and who decided. Every suppression in a scanner's configuration matches such a record or an approved exception (RA-5c).
5. **Gates decide what deploys, not what is accepted.** The pipeline blocks artifacts with new findings above a set severity, and always known exploited ones. An exception that lets an artifact through names the finding, the approver and an expiry no later than the finding's remediation date. The finding stays open, and its clock keeps running (RA-5d, CM-3).
6. **Each open finding has a response, an owner and a date.** The tracker records the response (mitigate, avoid, transfer, or proposed for acceptance), the owning team, the due date from the remediation times, and the maintenance plan or merge request that will fix it (RA-7; SP 800-40 sections 2.1 and 3.5).
7. **Open findings are POA&M entries.** Any finding not fixed at once is an entry, as RA-7's discussion and SP 800-37 task M-3 expect. The tracker records the POA&M fields, and its open findings are exported into the register on the CA-5 cycle, with each changed due date explained and past-due items reported (CA-5a, CA-5b, CA-5(1)).
8. **Only the authorizing official accepts.** A finding that will not be fixed goes to the authorizing official, after the roles the risk management strategy names are consulted. The acceptance, its compensating measures and its expiry go in the risk register, and the POA&M item is marked risk accepted (RA-7; SP 800-37 task R-3).
9. **Closure is verified in production, and timed.** A fix deploys through the pipeline as a change, after its tests (SI-2b, SI-2d). The finding closes when a scan of the running system no longer finds it and no component still runs the vulnerable artifact. The tracker's dates give time to remediate by severity, reported each month (SI-2(2), SI-2(3); SP 800-40 sections 2.3.3 and 3.6).

**Findings that never shipped.** A finding that blocks a merge request or a build, and is fixed before anything deploys, is not a vulnerability in the system. The pipeline run is its record: it shows the scan ran and the gate held, which is evidence for SA-11 and the change record. It needs no tracker entry and no POA&M item. Once an artifact with the finding deploys, through an exception or because the finding was published later, condition 3 applies.

**Typical values.** Your policy sets these; the [RA](/templates/policies/ra/), [SI](/templates/policies/si/) and [CA](/templates/policies/ca/) policy clauses give typical values that suit a pipeline as written. Monitoring for new vulnerabilities continuously, through vendor advisories, vulnerability feeds and the CISA Known Exploited Vulnerabilities Catalog, and scanning at least monthly for infrastructure, before each major release for applications, and when a new vulnerability is reported (RA-5a). Scanner checks updated before each new scan (RA-5(2)). Remediation for known exploited vulnerabilities as soon as possible, within days; critical and high in 30 days, moderate in 90 and low in 180, counted from the report (RA-5d) and, for updates, from their release (SI-2c). Update status checked at least weekly (SI-2(2)), and the POA&M updated at least monthly and whenever a scan or assessment finds a new weakness (CA-5b). The Vulnerability Management Standard's examples go further for code: dependency scans on every build, and image scans at build, before deployment and daily for images in production.

## Team practice

OWASP and DoD describe how pipeline teams do this work. OWASP text is licensed CC BY-SA 4.0 (DSOMM's data GPL-3.0), so this section cites names and IDs and says what each covers in the guide's own words.

- **[OWASP DevSecOps Guideline](https://owasp.org/www-project-devsecops-guideline/)** (incubator project, no version number; read in November 2026). Its [documentation](https://owasp.github.io/DevSecOpsGuideline/) section 2.7.4 Vulnerability Management sets out the life cycle this page follows: collect every tool's findings in one place, deduplicate them, rank by real risk (known exploitation, exploit likelihood, reachability, exposure), give each an owner and a due date, fix or formally accept with an expiry, verify by rescanning, and track trends. It also describes VEX statements for findings that do not affect the product. Section 2.3.5 Security Gates covers blocking only new findings against a baseline, time-boxed exceptions kept in a central register, and emergency bypass. Section 2.3.2.1 Software Composition Analysis covers transitive dependencies, reachability and VEX in the pipeline; 2.3.3.1 Container Scanning covers scanning at build, rescanning stored images as new vulnerabilities are disclosed, and checks at deployment; and 3.3.2 Central Vulnerability Management Dashboard covers the single view, deduplication, ownership and audit evidence. Two points differ from this guide. Its example remediation times are its own, so use your policy's. It suggests letting product-team risk owners approve some exceptions; that fits gate exceptions, but for an authorized system only the authorizing official accepts risk (SP 800-37 task R-3).
- **[OWASP DevSecOps Maturity Model (DSOMM)](https://dsomm.owasp.org/)** (lab project; data release 5.0.2, September 17, 2026). Under Test and Verification, Consolidation: *Simple false positive treatment* and *Treatment of defects with high or critical severity* (level 1), *Usage of a vulnerability management system*, *Treatment of defects with medium severity*, *Global false positive treatment* and *Integration of vulnerability issues into the development process* (level 3). Under Build and Deployment, Patch Management: *A patch policy is defined* and *Automated PRs for patches* (level 1), *Nightly build of images (base images)* and *Usage of a maximum lifetime for images* (level 2). Under Information Gathering, Test KPI: *SLA per criticality* (level 3) and *Patching mean time to resolution via production* (level 4).
- **[DoD Enterprise DevSecOps Activities & Tools Guidebook](https://dodcio.defense.gov/Portals/0/Documents/Library/DevSecOpsActivitesToolsGuidebook.pdf)**, version 2.5, April 2025 (Distribution Statement A). Its Build phase table lists dependency vulnerability checking as REQUIRED, producing a vulnerability report, and build configuration control and audit, which tracks the static analysis and dependency reports into action items and a go/no-go decision. Its Deploy phase table includes a post-deployment security scan, and its Monitor phase table lists system security monitoring as REQUIRED, with vulnerabilities and findings fed to an issue tracking system. The Feedback phase's REQUIRED revise-product-backlog activity puts vulnerability remediations into the backlog, citing SSDF RV.2.2 and the RV.3 tasks.

## Evidence

An assessor tests these controls by sampling in both directions. From the running system, pick components and check that their current findings are in the tracker with a response and a date. From the tracker and the POA&M, pick closed findings and trace each to the merge request, the pipeline run and the deployment that removed it.

| Objective | Pipeline output that meets it | What the assessor checks |
| --- | --- | --- |
| RA-05a | Scan results for each running artifact by digest, registry rescans, and a coverage report against the inventory | Every running component was scanned within the frequency, and again after new vulnerabilities were published |
| RA-05(02) | Scanner run logs showing the vulnerability data version used | The data was updated before each scan |
| RA-05c | Tracker entries with their analysis; false positive and not-affected records with the reason and who decided | Each suppression in scanner configuration matches a record |
| RA-05d, SI-02c | Tracker dates: first report, due date, closure; upstream release dates for updates | Sampled findings closed within their times; no clock restarted on rebuild |
| RA-07 | The response recorded for each open finding; acceptances in the risk register | Every acceptance was made by the authorizing official and has an expiry |
| SI-02a, SI-02d | Links from each finding to the merge request, change record and deployment that fixed it | The fix went through change control |
| SI-02b | Test results on the rebuilt artifact, from the run that deployed it | Results predate deployment; failed tests did not deploy |
| SI-02(02) | The weekly comparison of running artifacts with fixed versions | It runs on schedule, and differences are acted on |
| SI-02(03) | Time to remediate by severity, against the remediation times | The measure is reported and acted on |
| CA-05a, CA-05(01) | The POA&M export, with tracker-generated entries alongside assessment findings | Sampled open findings appear, with owner, milestones and dates |
| CA-05b | Export history, reasons for changed dates, and the monthly past-due report | Updates happen on the cycle; slipped dates are explained |

Interviews still matter. An assessor will ask a developer what happens when a gate fails, and the system owner how a finding reaches the authorizing official. Expect a test too: take a recently published known exploited vulnerability and show whether the system has it, where it is in the tracker, and when it will be fixed.

### FedRAMP's model: the KSIs and the vulnerability rules

FedRAMP 20x states these outcomes partly as Key Security Indicators. These are FedRAMP's, from the [FedRAMP Consolidated Rules for 2026](https://www.fedramp.gov/2026/reference/key-security-indicators/), and they apply to FedRAMP cloud services. This table reads the [rules repository](https://github.com/FedRAMP/rules), version 2026.11.02.01 (November 2, 2026), and lists the KSIs whose control lists name this page's controls; none names CA-5 or RA-7. For an agency system outside FedRAMP they are a model of outcome-based evidence, not a requirement.

| KSI | FedRAMP's statement | SP 800-53 controls FedRAMP lists |
| --- | --- | --- |
| KSI-SCR-MON, Monitoring Supply Chain Risk | "Third party software information resources are automatically monitored for upstream vulnerabilities using mechanisms that may include contractual notification requirements or active monitoring services." | AC-19, AC-20, CA-2(3), CA-3, IR-6(3), PS-7, RA-3, RA-5, SA-9, SI-5, SR-3, SR-5, SR-6, SR-8 |
| KSI-CMT-VTD, Validating Throughout Deployment | "Persistent testing and validation of changes throughout deployment is automated." | CM-3, CM-3(2), CM-4(2), CM-6(2), IR-9(4), SI-2 |
| KSI-SVC-EIS, Evaluating and Improving Security | "Information resources are persistently evaluated for opportunities to improve security and those improvements are persistently made." | CA-7(4), CM-5(5), CM-7(1), CM-12(1), IR-9(4), PL-8, RA-3, SC-7, SC-39, SI-2(2), SI-4, SR-10 |

FedRAMP sets most of its vulnerability expectations in two rule sets: [Vulnerability Detection and Response](https://www.fedramp.gov/2026/providers/20x/rules/vulnerability-detection-and-response/) (VDR) and [Vulnerability Evaluation and Reporting](https://www.fedramp.gov/2026/providers/20x/rules/vulnerability-evaluation-and-reporting/) (VER). They apply to 20x and Rev5 Certifications at Classes B to D. FedRAMP marks both required, "Mandated by CISA BOD 26-04", for obtaining and maintaining a Certification from December 7, 2026, with a grace period to March 7, 2027.

- Detection covers all weaknesses, not only scanner results, and a failure of the process is itself a vulnerability (VDR-CSO-DET, VDR-CSO-RES, VDR-CSO-FAV).
- Providers should not deploy new machine-based resources with known exploited vulnerabilities, and should scan new or significantly changed resources automatically (VDR-CSO-AKE, VDR-CSO-DAC).
- Each detected vulnerability is evaluated for false positives, likely exploitability, internet reachability and potential agency impact, and related ones may be grouped (VER-EVA-EFP, VER-EVA-ELX, VER-EVA-EIR, VER-EVA-EPA, VER-EVA-GRV). Evaluation should take no more than 7 days at Class B, 5 at Class C and 2 at Class D (VER-TFR-EVU).
- Mitigation and remediation timeframes run from evaluation and depend on that impact rating, reachability and exploitability (VDR-TFR-PVR); known exploited vulnerabilities follow the KEV catalog's due dates (VDR-TFR-KEV).
- A vulnerability not fully mitigated or remediated within 192 days of evaluation is categorized as an "accepted vulnerability" and reported with an explanation (VER-TFR-MAV, VER-RPT-AVI). That is FedRAMP's reporting category, not an authorizing official's acceptance under RA-7.

Read against the conditions above, KSI-SCR-MON is conditions 1 and 2, KSI-CMT-VTD is conditions 5 and 9, and KSI-SVC-EIS is condition 9. Among the rules, VDR-CSO-AKE is condition 5, VER-EVA-GRV is condition 3 and VER-EVA-EFP is condition 4. That alignment is this guide's reading, not FedRAMP's.

## Templates to use or change

- **[Vulnerability Management Standard](/templates/standards/vulnerability-management-standard/).** Section 3 sets scan frequencies for code, images and cloud resources. Section 4 now says how pipeline findings are recorded and when a suppression counts as closed. Section 5 says a rebuild does not restart the clock. Section 6 says open findings are POA&M items, a gate exception is not a risk acceptance, and only the authorizing official accepts. Fill in the tables for your pipeline.
- **[Patch and Flaw Remediation Standard](/templates/standards/patch-and-flaw-remediation-standard/).** Section 5 rebuilds images rather than patching in place, section 6 routes routine and urgent fixes through standard and emergency changes, section 7 now treats an update as installed only when no component still runs the old image, and section 9 leaves acceptance to the authorizing official.
- **[Plan of Action and Milestones](/templates/forms/plan-of-action-and-milestones/).** Its "How to use this register" section now says when a tracker's open findings stand as the register's vulnerability items, and how to group them.
- **[Risk register](/templates/forms/risk-register/).** Record each acceptance here; it now says that only the authorizing official accepts a risk to an authorized system.
- **[Configuration Management Plan](/templates/plans/configuration-management-plan/).** Routine base image and library updates fit the preapproved pipeline class in Appendix B; urgent fixes that must skip a gate are emergency changes (see [change management](/devsecops/change-management/)).
- **[Risk Assessment](/templates/policies/ra/), [System and Information Integrity](/templates/policies/si/) and [Assessment, Authorization, and Monitoring](/templates/policies/ca/) policies.** Their RA-5, RA-7, SI-2 and CA-5 clauses need no change. The SI-2 clause's deadline for a POA&M entry, before an update's installation time ends, is the latest point; a tracker that creates the entry when the finding is recorded meets it.
- **[Continuous Monitoring Strategy](/templates/plans/continuous-monitoring-strategy/).** Its typical metrics, open vulnerabilities by severity and age and POA&M items past due, come straight from the tracker; keep the two in step.

:::note[Federal systems]
CISA [BOD 26-04](https://www.cisa.gov/news-events/directives/bod-26-04-prioritizing-security-updates-based-risk), Prioritizing Security Updates Based on Risk (June 10, 2026), sets remediation timelines for federal civilian agencies by KEV status, whether the asset is publicly exposed, whether exploitation can be automated, and technical impact. The clock starts when CISA adds the vulnerability to the [KEV catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) or the agency identifies it on an asset, whichever is first. It revoked BOD 22-01, the directive SP 800-40 Rev. 4 section 3.5 cites for its two-week deadline, and BOD 19-02. Set the standard's remediation times no longer than BOD 26-04's, and have the pipeline gate block anything listed in the catalog. As of November 2026.

[OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.c(15), requires agencies to use POA&Ms to record and manage the remediation of weaknesses not associated with accepted risks, and to make them available to OMB, DHS, inspectors general and GAO on request. A tracker that holds the POA&M entries must be able to produce that plan on request.

For a FedRAMP cloud service the agency uses, FedRAMP's rule VER-AGM-MAP says agencies should use the provider's vulnerability reports to maintain their own POA&Ms when relevant, for example when the agency mitigates a risk or authorizes continued use despite accepted vulnerabilities. BOD 26-04 says agencies work through the FedRAMP program office to ensure compliance for FedRAMP certified cloud services. As of November 2026.
:::

## Common findings

- Scanner results visible only in each tool's dashboard, so findings in images and libraries never reach the tracker or the POA&M.
- A remediation clock that restarts each time the image is rebuilt, so no finding ever goes past due.
- Ignore files and scanner suppressions with no reason, approver or expiry.
- Gate overrides treated as risk acceptances, approved by a team lead with no expiry.
- Images scanned only at build, so new vulnerabilities in images already running go unseen.
- Findings closed when the fix merged, while the old image still runs in production.
- A POA&M that holds assessment findings only, with open scanner findings tracked nowhere the authorizing official sees.
- Every raw finding copied into the POA&M, duplicates and unshipped code included, so real risks are lost in the noise.
- Severity lowered or a finding marked not affected with no recorded analysis.
- The pipeline's own runners and build images in no maintenance group, never scanned or patched.

## Key references

- [NIST SP 800-40 Rev. 4](https://csrc.nist.gov/pubs/sp/800/40/r4/final), sections 2.1 to 2.3, 3.1 to 3.6 and Appendix A
- [NIST SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final), tasks A-5, A-6, R-3, M-3 and M-4
- [NIST SP 800-53A Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final) (January 2022; release 5.2.0), the RA-5, RA-7, SI-2 and CA-5 assessment procedures, shown on each control page
- [NIST SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) (SSDF 1.1), practices RV.1 to RV.3
- The [DevSecOps overview](/devsecops/) lists every source this section relies on, with its status
