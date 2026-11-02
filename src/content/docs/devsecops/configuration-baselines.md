---
title: Configuration baselines as code
description: How a team that builds its system from code meets CM-2, CM-6 and CM-8, when the repository is the baseline, and what an assessor checks.
sidebar:
  order: 2
controls: [cm-2, cm-2.2, cm-2.3, cm-6, cm-6.1, cm-6.2, cm-8, cm-8.1, cm-8.2, cm-8.3]
guidance: draft
---

A team that defines its infrastructure, images and settings in code can meet [CM-2](/controls/cm/cm-2/), [CM-6](/controls/cm/cm-6/) and [CM-8](/controls/cm/cm-8/) from its repository. The reviewed, versioned code is the baseline, policy checks enforce the settings, and the deployed resources are the inventory. That holds only if the code is complete, an approved version is identifiable, and the running system is checked against it. This page sets out those conditions and what an assessor will check. Status as of November 2026.

## The problem

CM-2, CM-6 and CM-8 were written for systems that change slowly. A baseline document lists the components and their versions, a hardening checklist is applied to long-lived servers, and an inventory is updated by hand and reviewed each quarter. A system built through a pipeline replaces servers rather than patching them, scales instances up and down by the hour, and keeps its configuration in infrastructure-as-code modules, image build files and deployment manifests.

The two failures are mirror images. Some teams write a baseline document for the assessor that no longer matches the code by the next deployment. Others say "the code is the baseline" and stop there: no version is identified as approved, settings made in a console never reach the code, suppressed checks are undocumented deviations, and nobody compares the running system with what the code declares.

NIST's definition already fits code. [SP 800-128](https://csrc.nist.gov/pubs/sp/800/128/upd1/final), section 2.3.7, defines a baseline configuration as "a set of specifications for a system, or Configuration Item (CI) within a system, that has been formally reviewed and agreed on at a given point in time, and which can be changed only through change control procedures." Version-controlled code, merged through review, is such a set of specifications. CM-2's own discussion says baselines "serve as a basis for future builds, releases, or changes to systems", which is what a pipeline does with them.

## The requirement

The controls are [CM-2](/controls/cm/cm-2/) Baseline Configuration, [CM-6](/controls/cm/cm-6/) Configuration Settings and [CM-8](/controls/cm/cm-8/) System Component Inventory. The Moderate baseline adds [CM-2(2)](/controls/cm/cm-2/#cm-2.2) automation support, [CM-2(3)](/controls/cm/cm-2/#cm-2.3) retention of previous configurations, [CM-8(1)](/controls/cm/cm-8/#cm-8.1) updates during installation and removal, and [CM-8(3)](/controls/cm/cm-8/#cm-8.3) automated unauthorized component detection. High adds [CM-6(1)](/controls/cm/cm-6/#cm-6.1) automated management, application and verification, [CM-6(2)](/controls/cm/cm-6/#cm-6.2) response to unauthorized changes, and [CM-8(2)](/controls/cm/cm-8/#cm-8.2) automated maintenance. A pipeline is well placed to meet all three. Each control page lists the full SP 800-53A objectives; these are the ones code changes most.

| Objective (SP 800-53A) | What the assessor determines | What changes when the baseline is code |
| --- | --- | --- |
| CM-02a.[01] | A current baseline configuration is developed and documented | The baseline is the code at an approved version, plus a record of what the code does not hold |
| CM-02a.[02] | The baseline is maintained under configuration control | Only a reviewed merge changes it (see [change management](/devsecops/change-management/)) |
| CM-02b.01 to b.03 | The baseline is reviewed and updated on a schedule, when set circumstances arise, and when components are installed or upgraded | Every merge updates it; the scheduled review looks at the whole, not the latest diff |
| CM-02(02): [01] to [04] | Automated mechanisms keep the baseline current, complete, accurate and available | Version control keeps it current and available; completeness takes a coverage check |
| CM-02(03) | The set number of previous baselines are retained to support rollback | Version history keeps the code; the images and modules it pins must be kept too |
| CM-06a | Settings are established and documented, most restrictive, using common secure configurations | Benchmark rules are written as policy checks; the benchmark and its version are named |
| CM-06b | The settings are implemented | The code sets them; a scan of the running resources shows it |
| CM-06c.[01], c.[02] | Deviations are identified, documented and approved | A suppressed check is a deviation and needs an approval |
| CM-06d.[01], d.[02] | Changes to settings are monitored and controlled | The pipeline controls changes; drift detection monitors them |
| CM-06(01): [01] to [03] | Automated mechanisms manage, apply and verify the settings | Code manages and applies them; checks of the running state verify them |
| CM-06(02) | Set actions are taken on unauthorized changes | The response to drift: alert, restore, investigate |
| CM-08a.01 to a.05 | The inventory is accurate, complete, free of duplicates, at a chosen granularity, and holds the set information | Generated from the provider's resource lists and the deployment records |
| CM-08b | The inventory is reviewed and updated on a schedule | The review checks the reconciliation, not each entry |
| CM-08(01): [01] to [03] | The inventory is updated as part of installations, removals and updates | Each deployment updates it |
| CM-08(03)(a), (b) | Unauthorized hardware, software and firmware are detected, and set actions taken | A resource the pipeline did not create is unauthorized until shown otherwise |

In the RMF, the baseline is an output of the Implement step: [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) task I-2 lists "system configuration baseline" among its expected outputs. The inventory starts in the Prepare step, where task P-10 identifies the assets that need protection. Related controls carry part of the load: [CM-3](/controls/cm/cm-3/) and [CM-5](/controls/cm/cm-5/) keep changes on the controlled path, and [CM-7](/controls/cm/cm-7/) least functionality is part of each secure configuration.

## The structure: SP 800-128

[SP 800-128](https://csrc.nist.gov/pubs/sp/800/128/upd1/final), Guide for Security-Focused Configuration Management of Information Systems (August 2011, with updates as of October 10, 2019; final, no newer draft as of November 2026), sets the process. It ties each concept to its control: section 2.3.4 (component inventory) to CM-8, section 2.3.6 (secure configurations) to CM-6 and CM-7, section 2.3.7 (baseline configuration) to CM-2, and section 2.3.10 (configuration monitoring) to the whole CM family.

**The baseline is approved, then deployed.** Section 3.2.2 sets five steps for implementing secure configurations. In a pipeline, each has a place:

| SP 800-128 step (section 3.2.2) | Where it happens when the baseline is code |
| --- | --- |
| i. Prioritize configurations | Start with the shared modules and base images that most components use, the "degree of penetration" criterion, and with higher-impact systems |
| ii. Test configurations | Policy checks run on the code before it is applied, and the change is applied first to a test environment built from the same code |
| iii. Resolve issues and document deviations | A check the team cannot meet for a resource is suppressed only with a recorded reason and an approval through change control |
| iv. Record and approve the baseline | A tagged release of the repositories, with its approval record and the image digests and module versions it pins |
| v. Deploy the baseline | The pipeline applies the release; images are built from it and replaced rather than patched in place |

Step iv says a system's baseline is "the sum total of the secure configurations of its constituent CIs", and that there "could be a different baseline configuration for each life cycle stage (development, test, staging, production)". So each environment's code is its own baseline, and a test environment built from the production modules makes test results representative. Step v encourages deploying baselines "in a centralized and automated manner using automated configuration management tools, automated scripts, vendor-provided mechanisms, etc."

**Deviations are part of the baseline.** Appendix F, practice 2, says exceptions to centrally set configurations "are documented and approved as a part of the baseline configuration for that information system." A suppression annotation in the code is the technical half of that record; the approval is the other half.

**The inventory comes from discovery.** In section 3.1.2, "The component inventory is populated through a process of discovery." The same section warns that "even with automated inventory management tools, it may still be necessary to enter some component inventory data elements manually", such as the owner, the system and the configuration item. Section 2.3.4 leaves the granularity to the organization, and requires each component to belong to one system only.

**Monitoring closes the loop.** Section 3.4 says monitoring confirms "that the existing configuration is identical to the current approved baseline configuration", that every inventory item belongs to the right system, and whether unapproved components exist. Section 3.4.1 lists the means, including scans for unrecorded components and for differences from the baseline. It also lists the questions that reconcile a detected change with approved ones: who made it, whether it fell in a maintenance window, and whether it matches an approved change request or release. Section 3.4.2 adds that components the tools cannot monitor are documented and checked by a manual process.

## When code is the baseline

The code is the CM-2 baseline, and the source of the CM-6 settings and the CM-8 inventory, when every condition below holds. Record how the system meets each one in its [Configuration Management Plan](/templates/plans/configuration-management-plan/).

1. **The code covers the system, and the gaps are listed.** Every configuration item in the plan is defined in code, or listed with where its configuration is held and how it is checked. Typical gaps are settings made in a provider's console, managed services, the identity provider and vendor appliances (CM-2a, CM-8a.2; SP 800-128 section 3.4.2).
2. **An approved version is identifiable.** Each baseline version is a tagged release of the repositories, approved through change control. The release pins the image digests and module versions it uses, so the baseline on any past date can be named (CM-2a; SP 800-128 sections 2.3.7 and 3.2.2 step iv).
3. **Settings trace to a named secure configuration.** Each component type follows a benchmark named, with its version, in the [baseline configuration standard](/templates/standards/baseline-configuration-standard/). Its rules run as policy checks on the code before it is applied, and on the running resources after (CM-6a, CM-6b).
4. **Every deviation is explicit.** Each suppressed or skipped check names the rule, the resource, the reason and an expiry date, and matches an approved entry in the standard's deviation register. A suppression with no register entry is an unapproved deviation (CM-6c).
5. **Production runs only what the code describes.** The pipeline creates and changes resources. Images are rebuilt from the baseline and redeployed, not patched in place, and any manual change goes through the emergency change process (CM-6b, CM-6d; SP 800-128 section 3.3.1).
6. **Drift is detected and answered.** The running state is compared with the declared state, typically continuously, alongside the compliance scan on the cycle the standard sets. Each difference with no approved change is an unauthorized change: restored or approved after the fact, and investigated when its cause is unknown (CM-6d, CM-6(2); SP 800-128 section 3.4.1).
7. **The inventory is generated, then reconciled.** It is built from the provider's resource lists, the deployment records and the image software bills of materials. The fields people must supply, such as owner, system and configuration item, are set as required tags in the code. It is reconciled with network discovery to find what the pipeline did not create (CM-8a, CM-8(1), CM-8(3)).
8. **Previous baselines can be restored.** Keep the code history, and also the images, modules and deployment state that each retained version needs, for as many versions as CM-2(3) sets. Registry clean-up rules must not delete them (CM-2(3); SP 800-128 section 2.3.7).
9. **The whole baseline is reviewed on its cycle.** Each merge review sees one diff, so nobody sees the whole. On the schedule CM-2b sets, and when a benchmark version changes, review coverage, open deviations and the drift record together, and record the review (CM-2b).

**Short-lived components.** Instances that scale up and down, and containers that live for minutes, need not each be an inventory row. CM-8a.4 and SP 800-128 section 2.3.4 let the organization set the granularity. Where virtual machines are hard to see, the CM-8(2) discussion says organizations "maintain as up-to-date, complete, and accurate an inventory as is deemed reasonable." Record each group (the scaling group or the deployment, with its image digest, size range and owner) and keep the provider's or orchestrator's event logs, so you can show what ran when. State this granularity in the plan, so an assessor does not read it as a gap.

**Typical values.** Your policy sets these; the [CM policy](/templates/policies/cm/) clauses give typical values that suit a pipeline as written. Baseline review at least annually and on significant change, a new benchmark version or an incident (CM-2b); at least the two most recent previous baselines kept (CM-2(3)); inventory reviewed at least quarterly (CM-8b); unauthorized component detection continuously, and at least weekly by scan (CM-8(3)).

## Team practice

OWASP and DoD describe how pipeline teams do this work. OWASP text is licensed CC BY-SA 4.0 (DSOMM's data GPL-3.0), so this section cites names and IDs and says what each covers in the guide's own words.

- **[OWASP DevSecOps Guideline](https://owasp.org/www-project-devsecops-guideline/)** (incubator project, no version number; read in November 2026). Its [documentation](https://owasp.github.io/DevSecOpsGuideline/) sections 2.3.4.1 Infrastructure as Code (IaC) Scanning (checks on declared configuration before anything is provisioned, with a warning that a clean scan of the code says nothing about drift in the running environment), 2.3.3.2 Container Hardening (minimal base images pinned by digest and rebuilt on a schedule), 2.4.5 Misconfiguration Check (testing running applications, containers and cloud resources against secure baselines), 2.6.1 Deploy (declarative deployment from version control, with a reconciler that reverts manual changes), 2.7.1 Cloud-Native Security (posture management that watches cloud and cluster configuration for drift), 3.1.2 Policy as Code (rules as reviewed, versioned code, each decision logged with the policy version) and 3.1.3 Security Benchmarking (measuring against configuration benchmarks and tracking the result over time).
- **[OWASP DevSecOps Maturity Model (DSOMM)](https://dsomm.owasp.org/)** (lab project; data release 5.0.2, September 17, 2026). Under Implementation, Infrastructure Hardening: *Baseline Hardening of the environment* (level 2), *Infrastructure as Code* and *Immutable infrastructure* (level 3), and *Hardening of the Environment* (level 4). Under Build and Deployment, Deployment: *Inventory of production components* (level 1), *Inventory of production artifacts* (level 2), *Inventory of production dependencies* and *Drift detection for deployed configuration* (level 3); under Build: *SBOM of components* (level 2). Under Test and Verification: *Test the cloud configuration* and *Test the definition of virtualized environments* (static depth for infrastructure, level 2), and *Test for unauthorized installation* (dynamic depth for infrastructure, level 3).
- **[DoD Enterprise DevSecOps Activities & Tools Guidebook](https://dodcio.defense.gov/Portals/0/Documents/Library/DevSecOpsActivitesToolsGuidebook.pdf)**, version 2.5, April 2025 (Distribution Statement A). Section 3.1.3 splits configuration management into identification, control, and verification and audit. Its continuous configuration management activities (Table 3) include infrastructure provisioning automation, an asset inventory that includes software bills of materials, and system configuration monitoring. The Plan phase table lists IaC deployment, setting up the environment from infrastructure as code, as REQUIRED. Section 3.8.1 describes immutable infrastructure: only the master image is patched, and running machines are restarted from it. Its Monitor phase table lists the asset inventory and compliance monitoring, of commercial products against STIGs and of cloud resources and services against SP 800-53 controls, as REQUIRED.

## Evidence

An assessor tests these controls by sampling in both directions. From the running system, pick components and trace each to its definition in code, its baseline version and its benchmark. From the code, pick a baseline version and confirm that production matches it.

| Objective | Pipeline output that meets it | What the assessor checks |
| --- | --- | --- |
| CM-02a | The tagged release, its approval record, and the plan's list of items held outside code | The release in production can be named; the outside-code list is short and each item is checked |
| CM-02b | Merge history, and the record of the scheduled whole-baseline review | The review happened on schedule and looked at coverage, deviations and drift |
| CM-02(02) | Coverage report: resources in the provider's lists compared with resources declared in code | Resources outside code are listed, explained or removed |
| CM-02(03) | Retained releases, with their images and modules still in the registry | A previous version can be redeployed; an assessor may ask to see it done in test |
| CM-06a | The policy check library, mapped to the benchmark and version the standard names | Each check traces to a benchmark rule; custom rules say why |
| CM-06b | Policy check results on the code, and compliance scan results on the running resources | Results cover the running state, not only the code; failures are fixed or recorded |
| CM-06c | Suppressions in code, matched one to one with approved register entries | No suppression lacks an approval; expired entries were reviewed |
| CM-06d, CM-06(02) | Drift detection results, with the response to each difference | Each difference was restored or approved, and unknown causes were investigated |
| CM-06(01) | The pipeline jobs and checks that apply and verify settings | The mechanism covers the components the policy names |
| CM-08a | The generated inventory, with owner, system and configuration item for each entry | Sampled running resources appear once, in this system only |
| CM-08b, CM-08(01) | Inventory updates tied to deployments, and the reconciliation record | Additions and removals match the deployment history |
| CM-08(03) | Reconciliation of network discovery and provider lists with the inventory, and the action taken on each unknown | Unknown components were found within the set frequency and acted on |

Interviews still matter. An assessor will ask the engineers how a setting reaches production, and the system owner how a deviation is approved. Expect a test too: in a test environment, change a setting by hand or create a resource outside the pipeline, and show that it is detected and answered.

### FedRAMP's model: the configuration KSIs

FedRAMP 20x states these outcomes as Key Security Indicators. These are FedRAMP's, from the [FedRAMP Consolidated Rules for 2026](https://www.fedramp.gov/2026/reference/key-security-indicators/), and they apply to FedRAMP cloud services. This table reads the [rules repository](https://github.com/FedRAMP/rules), version 2026.11.02.01 (November 2, 2026); the KSIs listed are unchanged from version 2026.10.13.01. For an agency system outside FedRAMP they are a model of outcome-based evidence, not a requirement.

| KSI | FedRAMP's statement | SP 800-53 controls FedRAMP lists |
| --- | --- | --- |
| KSI-SVC-ACM, Automating Configuration Management | "The configuration of machine-based information resources is managed using automation and persistently reviewed for drift." | AC-2(4), AC-6(8), CM-2, CM-2(2), CM-2(3), CM-6, CM-7(1), PL-9, PL-10, SA-5, SC-7(18), SC-45, SC-45(1), SI-5, SR-10 |
| KSI-MLA-EVC, Evaluating Configurations | "The configuration of machine-based information resources, especially infrastructure as code, is persistently evaluated and tested." | AC-19, CA-7, CM-2, CM-6, CM-6(1), RA-3, SI-7(7) |
| KSI-CMT-RMV, Redeploying vs Modifying | Changes to machine-based resources are made by redeploying version-controlled resources, not by direct modification, wherever reasonable | CM-2, CM-3, CM-5, CM-6, CM-7, CM-8(1), SI-3 |
| KSI-PIY-GIV, Generating Inventories | "Authoritative sources are used to automatically generate real-time inventories of all information resources when needed." | CM-2(2), CM-7(5), CM-8, CM-8(1), CM-8(2), CM-8(4), CM-12, CM-12(1), CP-2(8) |
| KSI-CNA-EIS, Enforcing Intended State | Automated services persistently assess the security of all machine-based resources and automatically enforce their intended state; optional at Class B | CA-2(1), CM-6(2), CM-11, CP-10(4), IR-9(4), SC-7(18), SC-24, SI-4(22), SI-7, SI-7(1), SI-7(5), SI-7(7) |
| KSI-CNA-IBP, Implementing Best Practices | "The use and configuration of third-party machine-based information resources is persistently compared against the original provider's best practices and guidance." | AC-17(3), CM-2, PL-10, SC-7(18) |
| KSI-SVC-VRI, Validating Resource Integrity | "Use cryptographic methods to validate the integrity of machine-based information resources." | AC-17(4), AC-18, AC-19, AU-9(3), CM-2(2), CM-8(3), CM-14, SC-13, SC-23, SI-7, SI-7(1), SI-7(15), SR-10, SR-11 |

Five more KSIs list one of this page's controls among others: KSI-CMT-LMC (CM-6, CM-8(3)) and KSI-CMT-VTD (CM-6(2)), on the [change management page](/devsecops/change-management/#fedramps-model-the-change-management-ksis); KSI-CNA-DFP, Defining Functionality and Privileges (CM-2); KSI-RPL-ABO, Aligning Backups with Objectives (CM-2(3)); and KSI-IAM-SUS, Responding to Suspicious Activity (CM-6(2)). FedRAMP defines drift as "Changes to information resources that cause deviations from the intended and assessed state".

Read against the conditions above, KSI-SVC-ACM is conditions 5 and 6, KSI-MLA-EVC is condition 3, KSI-CMT-RMV is condition 5, KSI-PIY-GIV is condition 7, and KSI-CNA-EIS is condition 6 with automatic restoration. That alignment is this guide's reading, not FedRAMP's.

## Templates to use or change

- **[Baseline configuration standard](/templates/standards/baseline-configuration-standard/).** Section 3 names each component type's benchmark, section 7 requires settings applied through code and images rebuilt from the baseline, section 8 and the deviation register (section 14) hold the approvals behind suppressed checks, and section 12 records the image or code that applies each configuration item. Fill in Part B from the repositories.
- **[Configuration Management Plan](/templates/plans/configuration-management-plan/).** List infrastructure as code, images and cloud service settings as configuration items in section 3.1, set each environment's baseline and the criteria for approving one in section 3.2, and name the drift and reconciliation checks in section 3.4.3.
- **[Component inventory](/templates/forms/component-inventory/).** Its fields already cover container images and cloud resources. Record the granularity you chose for short-lived components in section 1, and each reconciliation in section 3.
- **[Configuration Management policy](/templates/policies/cm/).** Its CM-2, CM-6 and CM-8 clauses need no change; their typical values already name infrastructure-as-code tools (CM-2(2)) and compliance scanning (CM-6(1)).
- **[Continuous Monitoring Strategy](/templates/plans/continuous-monitoring-strategy/).** Its typical frequency, continuous for automated controls and at least monthly for configuration data, fits drift detection and compliance scans; keep the two in step.

:::note[Federal systems]
[SP 800-128](https://csrc.nist.gov/pubs/sp/800/128/upd1/final), section 3.5, says federal agencies use SCAP-enabled tools with SCAP-expressed checklists to automate configuration management and produce assessment evidence for SP 800-53 controls. CM-6's discussion names the United States Government Configuration Baseline and DISA STIGs as common secure configurations. Where no SCAP content exists for a component, as for many cloud services, record the benchmark and the check used instead in the baseline configuration standard. As of November 2026.

CISA [BOD 23-01](https://www.cisa.gov/news-events/directives/bod-23-01-improving-asset-visibility-and-vulnerability-detection-federal-networks), Improving Asset Visibility and Vulnerability Detection on Federal Networks (October 3, 2022), requires federal civilian executive branch agencies to perform automated asset discovery every 7 days. Many methods may be used, but at minimum discovery must cover the entire IPv4 space the agency uses. A generated cloud inventory helps, but reconcile it with network discovery that reaches that minimum. As of November 2026.
:::

## Common findings

- No identified baseline version: the baseline is "whatever is on the main branch", so nobody can say what was approved on a given date.
- Code that covers compute but not managed service settings, the identity provider or DNS, which were set by hand in a console.
- Policy checks suppressed in code with no reason, approval or expiry.
- Policy checks that trace to no named benchmark, or a check library whose version is not recorded.
- Code scanned before deployment but running resources never scanned, so drift goes unseen.
- Drift that is reverted automatically with no record, or alerts that nobody reviews.
- An inventory that lists only what the pipeline created, so resources made outside it, the most likely to be unauthorized, never appear.
- Inventory entries with no owner or system because tags are not required, and components claimed by two systems in a shared account.
- Images still running months after the baseline moved on.
- A previous baseline that cannot be restored, because a registry clean-up rule deleted the images it pinned.

## Key references

- [NIST SP 800-128](https://csrc.nist.gov/pubs/sp/800/128/upd1/final), sections 2.3.4 to 2.3.10, 3.1.2, 3.2, 3.4 and 3.5, and Appendix F
- [NIST SP 800-53A Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final) (January 2022; release 5.2.0), the CM-2, CM-6 and CM-8 assessment procedures, shown on each control page
- [NIST SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final), tasks P-10 and I-2
- The [DevSecOps overview](/devsecops/) lists every source this section relies on, with its status
