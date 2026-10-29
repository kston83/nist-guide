---
title: Change management under continuous delivery
description: How a team that deploys through a pipeline meets CM-3 and CM-4, when a pipeline run can be the change record, and what an assessor checks.
sidebar:
  order: 1
controls: [cm-3, cm-4]
guidance: draft
---

A team that deploys many times a day can still meet [CM-3](/controls/cm/cm-3/) and [CM-4](/controls/cm/cm-4/) without a board meeting per change. NIST already allows it: the change control board approves a class of low-risk changes once, and each change in the class is still reviewed, tested and recorded. This page shows how to define that class for pipeline changes, when the pipeline's own record is the change record, and what an assessor will check. Status as of October 2026.

## The problem

CM-3 assumes discrete changes, each one requested, analyzed, approved, made and recorded. Its NIST discussion names the usual mechanism: a configuration control board or change advisory board that reviews and approves proposed changes. A team shipping through a pipeline makes too many changes for a board to see each one.

The two failures are mirror images. Some teams route every merge through a weekly board, so the board approves changes it cannot read and the record becomes a rubber stamp. Others treat the pipeline as self-evidently controlled and keep no change records at all, so the assessor's sample of production changes traces back to nothing.

Neither is needed. [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) applies the RMF to any type of development approach, "including Agile and DevOps approaches" (The RMF Is Technology Neutral, in its front matter). Its Appendix F adds that most changes "can be handled through the continuous monitoring program and ongoing authorization". The question is how to show an assessor that each change went through control, when the control is the pipeline.

## The requirement

The controls are [CM-3](/controls/cm/cm-3/) Configuration Change Control and [CM-4](/controls/cm/cm-4/) Impact Analyses, with the enhancements in the Moderate baseline: [CM-3(2)](/controls/cm/cm-3/#cm-3.2) testing, validation and documentation, [CM-3(4)](/controls/cm/cm-3/#cm-3.4) security and privacy representatives, and [CM-4(2)](/controls/cm/cm-4/#cm-4.2) verification of controls. High adds [CM-3(1)](/controls/cm/cm-3/#cm-3.1), automated documentation, notification and prohibition of changes, which a pipeline is well placed to meet. Each control page lists its full SP 800-53A objectives; these are the ones a pipeline changes most.

| Objective (SP 800-53A) | What the assessor determines | What changes with a pipeline |
| --- | --- | --- |
| CM-03a | The types of configuration-controlled changes are determined and documented | Pipeline changes need their own class, with written conditions |
| CM-03b.[01], b.[02] | Proposed changes are reviewed, and approved or disapproved with security and privacy impact analyses | Approval happens twice: once for the class, then a review of each change |
| CM-03c | Change decisions are documented | The merge approval and gate results are the decision record |
| CM-03d | Only approved changes are implemented | The pipeline must be the only path to production |
| CM-03e | Records are kept for the organization-defined period | Pipeline logs often expire before that period ends |
| CM-03f.[01], f.[02] | Change activity is monitored and reviewed | Someone reviews the class: overrides, failures, drift |
| CM-03g.[01], g.[02] | A defined body oversees change control and convenes on its schedule | The board oversees the class rather than each change |
| CM-03(02): [01] to [03] | Changes are tested, validated and documented before being finalized | Automated tests and gates run before production |
| CM-04[01], [02] | Changes are analyzed for security and privacy impact before implementation | The class analysis, plus a per-change check and scan results |
| CM-04(02): [01] to [06] | After a change, the affected controls are verified as implemented, operating and producing the desired outcome | Post-deployment checks tied to the deployment |

Related controls carry part of the load: [CM-5](/controls/cm/cm-5/) access restrictions for change keep changes on the controlled path, and [SA-10](/controls/sa/sa-10/) developer configuration management covers the developer's side of the same process.

## The structure: SP 800-128

[SP 800-128](https://csrc.nist.gov/pubs/sp/800/128/upd1/final), Guide for Security-Focused Configuration Management of Information Systems (August 2011, with updates as of October 10, 2019; final, no newer draft as of October 2026), sets the process. Three parts of it settle the pipeline question.

**Preapproved changes are allowed.** Section 3.1.1 lets the organization designate "the types of changes that are preapproved (i.e., changes that are not sent to the CCB for approval)". Its footnote adds that "Preapproved changes are still tested and documented prior to implementation." Section 3.3.2, step iii, says a preapproved change is noted on the change request and made "without further analysis or approval", though system documentation may still need updating.

**The record can live in a tool.** Step ii says organizations may use "automated tools to track change requests, route them based on workflow processes, and allow for electronic acknowledgements/approvals." Nothing in SP 800-128 requires a separate form when the tool's record holds what the process needs.

**The steps still all happen.** Section 3.3.2 lists nine steps. In a pipeline, each has a place:

| SP 800-128 step (section 3.3.2) | Where it happens for a pipeline change |
| --- | --- |
| i. Request the change | A merge request (pull request), linked to its work item |
| ii. Record the request | The merge request itself, in version control |
| iii. Decide if the change needs configuration control, or is preapproved | The reviewer confirms the change is inside the preapproved class |
| iv. Analyze the security impact | Done once for the class; per change, the in-class check and the security scans |
| v. Test for security and functional impacts | Automated tests and security gates in the pipeline |
| vi. Approve | The board approved the class; the reviewer approves the merge |
| vii. Implement | The deployment job, run by the pipeline's own identity |
| viii. Verify | Post-deployment checks, such as smoke tests and a configuration compliance scan |
| ix. Close out | The deployment record, linked back to the merge request |

Section 3.3.1 adds the enforcement side: access restrictions mean only authorized people, or here the pipeline, can make changes. Without that, a change can skip the process entirely. Section 3.4 then expects monitoring for unauthorized changes, which for a pipeline means detecting anything in production that the pipeline did not put there.

## When a pipeline run is the change record

A pipeline run is the change record when the change belongs to a preapproved pipeline class and the run's records hold everything the change control process needs. Write the class into the Configuration Management Plan, and have the board approve it with its own impact analysis. Then every condition below holds for every change in the class, or the change is not in the class.

1. **The class is written and approved.** The plan names the systems, environments and kinds of change the class covers, and what it excludes. The board approves it with a security and privacy impact analysis of the class, and reviews it on a set schedule (CM-3a, CM-3b, CM-4).
2. **The pipeline is the only path to production.** People cannot change production directly; their access is read-only or through a separate emergency process. The pipeline deploys with its own identity, which nothing else uses (CM-5, CM-3d).
3. **Someone other than the author approves each change.** Version control requires an approving review before merge, and a new commit after approval needs a new review. The author cannot approve their own change, and no one can bypass the rule unrecorded (CM-3b).
4. **The reviewer confirms the change is in the class.** The merge request records that the change touches nothing on the exclusion list. Rules that route changes to sensitive paths, such as identity, cryptography or the pipeline's own definition, to named reviewers back this up (SP 800-128 section 3.3.2 step iii; CM-4).
5. **Tests and security gates pass before production.** The run records each test and scan, its result, and the version of the gate's policy. A change that fails a gate does not deploy (CM-3(2), CM-4).
6. **The artifact deployed is the artifact tested.** The pipeline builds once and promotes the same artifact, identified by its digest, through each environment. The deployment record names that digest and the commit it came from (CM-3d).
7. **Deployment is verified.** After each deployment, checks confirm the affected controls still work, for example a configuration compliance scan of the changed resources. A failed check rolls the change back or opens a finding (CM-4(2)).
8. **The records are kept for the retention period.** The merge request, review, run log, gate results and deployment record are kept for the period CM-3e sets. Export them if the platform deletes logs sooner (CM-3e).
9. **Change activity is reviewed.** On the board's schedule, someone reviews the class: deployments compared with merge requests, gate overrides, failed verifications, and drift between production and version control. The board records what it found (CM-3f, CM-3g).

**What stays outside the class.** Exclude any change that could be significant. SP 800-37 Rev. 2 Appendix F lists the kinds of change that may be significant; turn them into the exclusion list. Typical exclusions:

- Changes to ports, protocols or services the system uses or provides
- Changes to cryptographic modules or services, authentication or authorization
- Changes to how information, including personally identifiable information, is processed, or new information types
- New interconnections, external services or data flows across the boundary
- A new or upgraded operating system, middleware component or hardware platform
- Changes to security or privacy controls, including logging and monitoring
- Changes to the pipeline itself: its gates, approval rules, deployment identity or secrets

**Changes outside the class still use the pipeline.** A normal change goes through the board on a [change request form](/templates/forms/change-request-form/); once approved, the pipeline deploys it, and the run is attached as its test and implementation evidence. An emergency change that has to bypass a gate is an emergency change under the plan: the named approver authorizes it, and the board reviews it at its next meeting. A bypass without that approval is an unauthorized change, handled as the plan sets out for changes found by monitoring. A significant change also goes to the authorizing official before it deploys, as the form's Part C sets out.

## Team practice

OWASP and DoD describe how pipeline teams do this work. OWASP text is licensed CC BY-SA 4.0 (DSOMM's data GPL-3.0), so this section cites names and IDs and says what each covers in the guide's own words.

- **[OWASP DevSecOps Guideline](https://owasp.org/www-project-devsecops-guideline/)** (incubator project, no version number). Its [documentation](https://owasp.github.io/DevSecOpsGuideline/) sections 2.2.1.4 Repository Hardening (branch protection and required review), 2.3.5 Security Gates (where gates sit and how to handle exceptions), 2.5.1 Release (release approval tied to change management, and promoting one immutable artifact), 2.6.1 Deploy (version control as the source of deployment state, with drift reverted) and 3.1.2 Policy as Code (gate rules as reviewed, versioned code).
- **[OWASP DevSecOps Maturity Model (DSOMM)](https://dsomm.owasp.org/)** (lab project). Under Culture and Organization, Process: *Definition of a change management process* and *Approval by reviewing any new version* (both level 3). Under Implementation, Development and Source Control: *Require a PR before merging* (level 2), *Require status checks to pass* and *Dismiss stale PR approvals* (level 3). Under Build and Deployment, Deployment: *Defined deployment process* (level 1), *Drift detection for deployed configuration* (level 3) and *Same artifact for environments* (level 4).
- **[OWASP Top 10 CI/CD Security Risks](https://owasp.org/www-project-top-10-ci-cd-security-risks/)** (lab project). CICD-SEC-1, Insufficient Flow Control Mechanisms, is the attacker's view of a missing change control: one identity can push code or an artifact to production with no second review. CICD-SEC-10, Insufficient Logging and Visibility, is the missing record.
- **[DoD Enterprise DevSecOps Activities & Tools Guidebook](https://dodcio.defense.gov/Portals/0/Documents/Library/DevSecOpsActivitesToolsGuidebook.pdf)**, version 2.5, April 2025 (Distribution Statement A). Section 3.1.3 splits configuration management into identification, control, and verification and audit, and treats verification and audit as control gates for the go/no-go decision between pipeline phases. Its Plan phase table lists change management planning as a REQUIRED activity, with change control procedures and a change management plan as outputs.
- **[NSA and CISA, Defending Continuous Integration/Continuous Delivery (CI/CD) Environments](https://media.defense.gov/2023/Jun/28/2003249466/-1/-1/0/CSI_DEFENDING_CI_CD_ENVIRONMENTS.PDF)** (June 2023, version 1.0). It recommends two-person rules for all code updates, so no developer checks in code without another's review, and audit logs showing who committed, reviewed and deployed what, when and where.

## Evidence

An assessor tests CM-3 by sampling changes from the system and tracing each back to an approved record. With a pipeline class, the sample comes from deployment history, and the trace runs through version control.

| Objective | Pipeline output that meets it | What the assessor checks |
| --- | --- | --- |
| CM-03a | The plan's change types and the pipeline class in Appendix B | The class names its conditions and exclusions |
| CM-03b | The board's class approval and analysis; the merge approval on each change | Approver differs from author; approval came before deployment |
| CM-03c | Merge approval, gate decisions and any override, with who and when | Each sampled change has a recorded decision |
| CM-03d | Deployment record naming the commit and artifact digest; access settings showing no other path | No production change lacks a merge request; drift reports are clean or explained |
| CM-03e | Exported or retained run logs, reviews and deployment records | Records exist across the whole retention period |
| CM-03f, CM-03g | Board minutes reviewing the class; reconciliation of deployments with merge requests | The review happens on schedule and acts on what it finds |
| CM-03(2) | Test and gate results in the run, before the production stage | Results predate deployment; failures did not deploy |
| CM-04 | The class analysis; the in-class confirmation; scan results for the change | Changes with privacy or security effects left the class |
| CM-04(2) | Post-deployment check results tied to the deployment | The checks cover the controls the change could affect |

Interviews still matter. An assessor will ask the reviewers what they check, and the board how it decides what belongs in the class. Expect a test of the controls too: an attempt to merge without review, or to change production directly, should fail.

### FedRAMP's model: the Change Management KSIs

FedRAMP 20x states change management as outcomes. These are FedRAMP's Key Security Indicators, from the [FedRAMP Consolidated Rules for 2026](https://www.fedramp.gov/2026/reference/key-security-indicators/#change-management), and they apply to FedRAMP cloud services. FedRAMP names the [rules repository](https://github.com/FedRAMP/rules) as the machine-readable source of truth; this table reads its version 2026.10.13.01, as of October 2026. For an agency system outside FedRAMP they are a model of outcome-based evidence, not a requirement.

| KSI | FedRAMP's statement | SP 800-53 controls FedRAMP lists |
| --- | --- | --- |
| KSI-CMT-LMC, Logging Changes | "Modifications to the cloud service offering are logged and monitored." | AU-2, CA-7(4), CM-3, CM-3(1), CM-3(2), CM-3(6), CM-4(2), CM-6, CM-8(3) |
| KSI-CMT-RMV, Redeploying vs Modifying | Changes to machine-based resources are made by redeploying version-controlled resources, not by direct modification, wherever reasonable | CM-2, CM-3, CM-5, CM-6, CM-7, CM-8(1), SI-3 |
| KSI-CMT-RVP, Reviewing Change Procedures | "The effectiveness of documented change management procedures is persistently reviewed." | CM-3, CM-3(2), CM-3(4), CM-5, CM-7(1), CM-9 |
| KSI-CMT-VTD, Validating Throughout Deployment | "Persistent testing and validation of changes throughout deployment is automated." | CM-3, CM-3(2), CM-4(2), CM-6(2), IR-9(4), SI-2 |

Read against the conditions above, KSI-CMT-RMV is condition 2, KSI-CMT-VTD is conditions 5 and 7, KSI-CMT-LMC is condition 8, and KSI-CMT-RVP is condition 9. That alignment is this guide's reading, not FedRAMP's.

FedRAMP's [Significant Change Notification rules](https://www.fedramp.gov/2026/providers/20x/rules/significant-change-notification/) (SCN) first set aside a change of FedRAMP Certification class, which needs a new assessment and cannot be made under the SCN rules (SCN-CSO-EVA). They sort a provider's other significant changes into three types, for 20x and Rev5 Certifications at Classes B to D:

- **[Routine recurring](https://www.fedramp.gov/2026/definitions/#routine-recurring-change):** recurs regularly as part of ongoing operations, or of vulnerability mitigation or remediation. No formal notification (SCN-RTR-NNR).
- **[Adaptive](https://www.fedramp.gov/2026/definitions/#adaptive-change):** not routine, but without substantive new risk needing in-depth assessment. Notify within 10 business days after finishing (SCN-ADP-NTF).
- **[Transformative](https://www.fedramp.gov/2026/definitions/#transformative-change):** substantive potential risks likely to affect existing risk determinations. Notify initial plans at least 30 business days before, and final plans at least 10 business days before (SCN-TRF-NIP, SCN-TRF-NFP).

The provider must evaluate every potential significant change and keep auditable records of that evaluation (SCN-CSO-EVA, SCN-CSO-MAR). The routine recurring type is the FedRAMP counterpart of a preapproved pipeline class. An agency authorizing official can adopt the same three tiers in the authorization's terms and conditions; that is an option, not a NIST or OMB requirement.

## Templates to use or change

- **[Configuration Management Plan](/templates/plans/configuration-management-plan/).** Section 3.3.1 defines when a pipeline run is the change record, and Appendix B holds the pipeline class with its conditions and exclusions. Fill in both.
- **[Change request form](/templates/forms/change-request-form/).** Use it for normal, emergency and significant changes. Its "How to use this form" section says when a pipeline record stands in for it.
- **[Configuration Management policy](/templates/policies/cm/).** Its CM-3 clauses need no change; their guidance asks for one change record per change, which a pipeline record is.
- **[Continuous Monitoring Strategy](/templates/plans/continuous-monitoring-strategy/).** Section 12 makes a significant change a trigger for review; keep its examples consistent with the class's exclusion list.
- **[Baseline configuration standard](/templates/standards/baseline-configuration-standard/)** and **[component inventory](/templates/forms/component-inventory/).** A pipeline change that alters a baseline or adds a component updates them, as SP 800-128 step vii expects.

:::note[Federal systems]
[OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 5.i, defines a significant change as "a change that is likely to affect the security or privacy state of an information system". Under ongoing authorization, reauthorization is typically event-driven, in response to an event or significant change that raises risk above the agency's tolerance. The authorizing official sets what counts as significant for the system; write the pipeline class's exclusions to match. As of October 2026.

An agency using a FedRAMP cloud service still authorizes its own system. FedRAMP's [2026 changes page](https://www.fedramp.gov/2026/providers/updating/changes/) says agencies must still perform continuous monitoring under Circular A-130. A provider's Significant Change Notifications are an input to the agency's own monitoring, not a substitute for its change control.
:::

## Common findings

- Pipeline logs and merge requests kept for 90 days or less when the retention period is a year or longer.
- Administrators able to bypass branch protection, with no record or review of each bypass.
- Self-approval: the author approves their own merge request, or a bot approves automatically.
- Urgent fixes made directly in production during an outage, with no emergency change record afterward.
- Changes to the pipeline itself, such as a disabled gate, merged without review.
- A pipeline class so broad that it covers changes on the exclusion list, so the authorizing official never hears of them.
- The artifact rebuilt for production, so what deployed is not what was tested.
- No post-deployment verification, or checks that never fail and so prove nothing.
- No reconciliation of deployments with merge requests, so out-of-band changes go unnoticed.

## Key references

- [NIST SP 800-128](https://csrc.nist.gov/pubs/sp/800/128/upd1/final), sections 3.1.1, 3.3 and 3.4
- [NIST SP 800-53A Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final) (January 2022; release 5.2.0), the CM-3 and CM-4 assessment procedures, shown on each control page
- [NIST SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final), task M-1 and Appendix F (event-driven triggers and significant changes)
- The [DevSecOps overview](/devsecops/) lists every source this section relies on, with its status
