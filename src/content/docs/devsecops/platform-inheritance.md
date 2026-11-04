---
title: Inheritance from a platform
description: How a team that deploys onto a shared platform or a cloud service inherits controls under PL-2, CA-6 and SA-9, how the system security plan records each one, and what an assessor checks.
sidebar:
  order: 5
controls: [pl-2, ca-6, sa-9]
guidance: draft
---

A team that deploys onto a shared platform, run by a platform team or a cloud provider, should not rebuild or re-describe what the platform already provides. It inherits those controls, and its system security plan says so. Inheritance holds only when the platform's controls are authorized for inheritance, the system's authorizing official accepts them, and the plan states which part of each control is the system's own. This page sets out those conditions under [PL-2](/controls/pl/pl-2/), [CA-6](/controls/ca/ca-6/) and [SA-9](/controls/sa/sa-9/), and what an assessor will check. Status as of November 2026.

## The problem

Platform teams exist so that delivery teams can build on a paved road: accounts and networks set up for them, a shared cluster, central logging, hardened base images, pipeline templates and policy checks. The security plan has to say which controls that road delivers, and which the team still owes. A platform that ships changes every week makes that harder, because what the team inherits keeps moving.

The two failures are mirror images. Some teams mark whole families "inherited from the platform" with nothing behind the claim: no authorization of the platform's controls, no record of what the team must still do, and gaps no one owns. Others copy the platform's implementation text into their own plan, and ask their assessor to test the platform again; the copy is out of date by the platform's next release.

NIST settles both. [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final), task P-5, says "System owners are not required to assess common controls that are inherited by their systems or document common control implementation details; that is the responsibility of the common control providers." The same task says a control a common control does not fully meet "is considered a hybrid control", and the organization specifies "which parts of the control requirement are provided for inheritance by the common control and which parts are to be provided at the system level."

## The requirement

The controls are [PL-2](/controls/pl/pl-2/) System Security and Privacy Plans, where inheritance is recorded; [CA-6](/controls/ca/ca-6/) Authorization, where the platform's controls are authorized for inheritance and the system's authorizing official accepts them; and [SA-9](/controls/sa/sa-9/) External System Services, when the platform is a provider's service. None of their enhancements turns on inheritance: PL-2 has none, CA-6's two (joint authorization) are in no baseline, and SA-9(2), in the Moderate baseline, covers a service's ports and protocols. Each control page lists the full SP 800-53A objectives; these are the ones inheritance changes most.

| Objective (SP 800-53A) | What the assessor determines | What changes with a platform |
| --- | --- | --- |
| PL-02a.09 | The plan describes the operational environment and the dependencies on or connections to other systems | Each platform and service the system runs on is named as a dependency |
| PL-02a.12 | The plan describes the controls in place or planned, with the rationale for tailoring | Each control is marked common, hybrid or system-specific, and each hybrid control's system part is described |
| PL-02d.[01] | The plans are updated for changes to the system and its environment of operation | A platform release that changes what it provides is a change to the environment |
| CA-06b | A senior official is the authorizing official for common controls available for inheritance | The platform's controls have an authorizing official of their own |
| CA-06c.01 | Before operations, the system's authorizing official accepts the common controls the system inherits | The acceptance names the platform and what the system inherits from it |
| CA-06d | The authorizing official for common controls authorizes their use for inheritance | The platform's controls are authorized before systems rely on them |
| CA-06e | The authorizations are updated at the organization-defined frequency | A lapsed or changed platform authorization reaches every inheriting system |
| SA-09a.[01] to [03] | External providers comply with the organization's requirements and employ the defined controls | The provider's authorization or attestation covers the service the system uses |
| SA-09b.[01], [02] | Oversight, user roles and responsibilities are defined and documented | The provider's responsibility matrix says which settings the customer owns |
| SA-09c | Provider compliance is monitored on an ongoing basis | The provider's monitoring reports and change notices are reviewed |

Three NIST passages settle points a platform team might leave open:

- **A control's wording does not decide it.** [SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final), section 2.3, says the approach "cannot be determined to be common, hybrid, or system-specific simply based on the language of the control." Technology controls, such as identification and authentication, boundary protection and audit, can be common too.
- **Unclear hybrids are a risk in themselves.** The same section warns that hybrid controls "can introduce risk if the responsibility for the implementation and ongoing management of the common and system-specific parts of the controls is unclear."
- **The risk stays with your authorizing official.** SA-9's discussion says "The responsibility for managing risks from the use of external system services remains with authorizing officials." Inheritance moves the work, not the accountability.

Related controls carry part of the load. [PM-10](/controls/pm/pm-10/) sets the authorization process the platform goes through, [CA-2](/controls/ca/ca-2/) covers the provider's assessment you rely on, [CA-7](/controls/ca/ca-7/) the monitoring that keeps inheritance current, and [SA-4](/controls/sa/sa-4/) the contract terms for a provider's service.

## The structure: SP 800-37 tasks P-5 and S-2 to S-4

[SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) (December 2018; final, no newer revision or draft as of November 2026) sets out inheritance in four tasks. [SP 800-18 Rev. 2](https://csrc.nist.gov/pubs/sp/800/18/r2/final) (June 2026) says how the plan records it.

**The organization publishes what can be inherited (P-5).** The expected output is a "List of common control providers and common controls available for inheritance", with plans describing each implementation. Its footnote 60 says common controls "are authorized by designated authorizing officials before the controls are made available for inheritance". Common controls "may differ based upon a variety of factors, such as hosting location, system architecture", so one platform's list is not another's.

**The system decides what it takes (S-2 and S-3).** Tailoring includes "identifying and designating common controls in the control baselines". Where the common controls fall short, system owners "supplement the common controls with system-specific or hybrid controls" or "recommend a greater acceptance of risk to the authorizing official". Allocation then marks each control system-specific, hybrid or common.

**The plan references, and describes only the system's part (S-4).** "There is no requirement to provide implementation details for inherited common controls." For hybrid controls, the plan specifies "the parts of the control that are provided by the common control provider and the parts of the control that are implemented at the system level." The documentation "also addresses platform dependencies".

SP 800-18 Rev. 2 adds the detail. Its Control Implementation Details element (section 3.2) has the plan include "a reference to common controls inherited by the system", and notes that controls inherited from cloud service providers "may require additional documentation, such as the Control Implementation Summary/Customer Responsibility Matrix (CIS/CRM)". Section 4.3.2 has plans "reference the source of the common control to avoid duplicating the common control implementation details."

**Inheritance is authorized and kept current.** Appendix F of SP 800-37 calls a common control authorization "similar to an authorization to operate for systems", with its own termination date. A system's initial authorization reviews "the system-level portion of the hybrid controls" and "the security status of inherited common controls". Its event-driven triggers include "Significant changes to the system, common controls, or the environments of operation".

Who runs the platform decides which of these instruments applies:

| Who runs the platform | What it is under the RMF | Who authorizes it | What your system security plan records |
| --- | --- | --- | --- |
| A platform team that offers designated common controls | Common controls (task P-5) with a common control authorization (CA-6b, CA-6d) | The authorizing official for common controls | The platform, its authorization, the controls inherited, the system's part of each hybrid control, and the platform plan it references |
| Another of the organization's systems, not designated as a common control provider | A system you inherit from (SP 800-37 Appendix F, footnote 139) | That system's authorizing official, through its authorization to operate | The same, with that system's authorization to operate; your authorizing official is made aware of the inheritance |
| A provider, as a cloud or hosted service | An external system service (SA-9) | The provider's authorizing body; your authorizing official accepts the risk of using it | The service, its authorization or attestation, the provider's responsibility matrix, and the settings you own |

Footnote 139 says system owners inheriting "from other than approved common control providers ensure that the systems providing such controls have valid authorizations to operate." So a platform with neither a common control authorization nor an authorization to operate offers nothing a system can inherit. Until it has one, treat its controls as the system's own, inside the system's boundary and assessment.

**Inheritance can be data.** SP 800-18 Rev. 2 section 3.3 covers automation support for plan information. NIST's [OSCAL](https://pages.nist.gov/OSCAL/) system security plan model (release 1.2.3, the latest as of November 2026) holds inheritance as structured data. Its `leveraged-authorizations` field describes "another authorized system from which this system inherits capabilities"; a provider's `export` lists what it `provided` and the `responsibilities` it imposes, and the inheriting plan records what is `inherited` and how each responsibility is `satisfied`.

## When a control is inherited from the platform

A control is inherited from a platform, and the platform's records are the evidence for the inherited part, when every condition below holds. Record how the system meets each one in its [System Security Plan](/templates/plans/system-security-plan/) (section 10). Where the platform is a provider's service, the [external service review](/templates/forms/external-service-review/) holds the provider's evidence.

1. **The provider and its authorization are named.** The plan names each platform and service the system inherits from, what kind of provider it is, and its authorization: a common control authorization, another system's authorization to operate, or the service's authorization or attestation. It gives the date, and the termination date or ongoing status (PL-2a.9; CA-6d; SP 800-37 Appendix F, footnote 139).
2. **The control is offered for inheritance, at the system's level.** The control appears on the platform's published list, and the platform's authorization supports the system's impact level. For common controls, SP 800-37 task R-4 has the decision state the impact level the controls support (CA-6d; task P-5).
3. **Every control is allocated.** Each control in the tailored baseline is marked common, hybrid or system-specific. Nothing is marked inherited because the platform "probably does it" (PL-2a.12; tasks S-2 and S-3).
4. **The inherited part is referenced, and the system's part is written.** For each inherited or hybrid control, the plan cites the provider's plan section or responsibility matrix row, with its version or date. For each hybrid control, it describes what the system does (PL-2a.12; task S-4; SP 800-18 Rev. 2 section 4.3.2).
5. **The customer responsibilities are met, and the pipeline checks them.** The provider's responsibility matrix and secure configuration guidance become the system's part of each hybrid control. Where the platform delivers a control only to workloads that use it as designed, such as its base images, ingress, log collector or identity service, the pipeline checks that the system does. A workload off the paved road does not inherit (SA-9b; task S-4).
6. **The authorizing official accepts the inherited controls before operation.** The authorizing official reviews the provider's plan, assessment results and open weaknesses, or a summary of them, and accepts the inherited controls in the authorization decision. Task P-5 says those materials "are made available to system owners" (CA-6c.1; SP 800-37 Appendix F).
7. **The provider's weaknesses reach the system.** Open plan of action and milestones items on inherited controls, and the provider's customer-facing exceptions, are tracked in the system's own risk picture. Where one affects the system, it becomes a system plan of action and milestones item or a recorded risk acceptance (SA-9c; CA-6c.1).
8. **Changes to the platform are watched.** The system learns of each platform release, change in its responsibility matrix, significant change and change in its authorization, and the plan is updated for those that affect it. A significant change to common controls is an event that can trigger a review of the system's authorization (PL-2d; CA-6e; SA-9c; SP 800-37 Appendix F).
9. **Inheritance is reviewed on a schedule.** At each plan review, and at each review of the provider, confirm the authorizations are current, the inherited list still matches what the platform offers, and the system still meets its responsibilities. Record the review (PL-2c; SA-9c).

**Inherited controls are assessed once, by the provider.** SP 800-37 task A-3 says inherited common controls "are assessed separately" and "need not be assessed as part of a system-level assessment." The system's assessor still examines the system's part of each hybrid control, and confirms the system really uses what it claims to inherit. The [security and privacy assessment plan](/templates/plans/security-and-privacy-assessment-plan/) section 2.1 sets this out.

**Typical values.** Your policy sets these; the [PL](/templates/policies/pl/), [CA](/templates/policies/ca/) and [SA](/templates/policies/sa/) policy clauses give typical values that suit a platform as written. The plan is reviewed annually (PL-2c). Authorizations are updated at least every three years and after a significant change, or under ongoing authorization (CA-6e). Providers must employ the controls of the system's baseline that the responsibility matrix gives them (SA-9a). Their compliance is monitored by an annual review of their attestation, review of their monitoring or status reports, and contract service reviews (SA-9c). Typically, also check inheritance whenever the platform publishes a new version of its responsibility matrix.

## Team practice

OWASP and DoD describe how platform and delivery teams share this work. OWASP text is licensed CC BY-SA 4.0 (DSOMM's data GPL-3.0), so this section cites names and IDs and says what each covers in the guide's own words.

- **[OWASP DevSecOps Guideline](https://owasp.org/www-project-devsecops-guideline/)** (incubator project, no version number; read in November 2026). Its [documentation](https://owasp.github.io/DevSecOpsGuideline/) section 2.7.9 Serverless and PaaS Runtime Security sets out a shared responsibility table, layer by layer, for function and managed container platforms. It makes the point that a managed platform moves risk rather than removing it: identity and permissions, event inputs, dependencies, secrets and configuration stay with the customer. Section 3.1.2 Policy as Code describes a platform team model for policy libraries: teams consume central policies, kept in one reviewed repository and released in versions that pipelines pin, with a changelog and exemptions that name an owner and an expiry date.
- **[OWASP DevSecOps Maturity Model (DSOMM)](https://dsomm.owasp.org/)** (lab project; data release 5.0.2, September 17, 2026). Under Implementation, Infrastructure Hardening: *Usage of security by default for components* (level 3), which stresses hardening the images other teams build on. Under Build and Deployment, Deployment: *Evaluation of the trust of used components* (level 2). Under Test and Verification: *Test the cloud configuration* (static depth for infrastructure) and *Test of the configuration of cloud environments* (dynamic depth for infrastructure), both level 2, which test cloud configuration with tools against hardening practice.
- **[OWASP Top 10 CI/CD Security Risks](https://owasp.org/www-project-top-10-ci-cd-security-risks/)** (lab project). CICD-SEC-8, Ungoverned Usage of 3rd Party Services, is the provider's service taken on with no review of what it can reach. CICD-SEC-7, Insecure System Configuration, is the customer's settings in systems supplied by many vendors, left weak.
- **[DoD Enterprise DevSecOps Activities & Tools Guidebook](https://dodcio.defense.gov/Portals/0/Documents/Library/DevSecOpsActivitesToolsGuidebook.pdf)**, version 2.5, April 2025 (Distribution Statement A). It names DoD Enterprise DevSecOps platform capability providers among its audience, and says its spreadsheet can serve as a template for "building a continuous ATO package that demonstrates process and responsibility mapping" (section 1). Section 2 separates the Release and Deliver phases "to highlight potential transitions between ATO boundaries in DoD software factories". Section 4 prefers enterprise-wide tooling that "has already either been approved or has obtained provisional authorization".

## Evidence

An assessor tests inheritance by tracing claims in both directions. From the plan, take a control marked inherited or hybrid and follow it to the provider's authorization, the document cited and, for a hybrid, the system's own part. From the platform, take what it offers and check that the system uses it as the provider requires.

| Objective | Platform or pipeline output that meets it | What the assessor checks |
| --- | --- | --- |
| PL-02a.09 | The plan's provider table and boundary description, naming each platform and service | Every platform the system runs on or depends on is named |
| PL-02a.12 | The control allocation: common, hybrid or system-specific, with the provider document cited and the system's part written | No control is claimed as inherited that the provider does not offer; every hybrid control has a system part |
| PL-02d.[01] | The plan's version history, with updates after platform releases that changed what the system inherits | The cited provider documents are current versions |
| CA-06b, CA-06d | The designation of the authorizing official for common controls; the common control authorization, with the impact level it supports | The platform's controls were authorized for inheritance at or above the system's level |
| CA-06c.01 | The system's authorization decision, accepting the inherited controls and naming their providers | Acceptance came before operation, and covers every provider in the plan |
| CA-06e | Updated decisions after a provider's authorization lapsed or changed | No system relies on an expired provider authorization |
| SA-09a, SA-09b | The contract or agreement; the provider's authorization or attestation; the responsibility matrix and oversight roles | The evidence covers the service used, and each customer responsibility has an owner |
| SA-09c | External service reviews; reviews of the provider's monitoring reports and change notices | Reviews happen on schedule and act on what they find |
| Customer responsibilities | Pipeline policy results showing workloads use the platform's base images, ingress, logging and identity service | Workloads that bypass the platform are found and do not claim its controls |

Interviews and tests still matter. An assessor will ask the system owner what the system inherits and from whom, and the platform team which systems inherit from it and how it tells them about changes. Expect a test too: pick a hybrid control, such as audit logging, and show both halves, the platform's collector and the system's own events.

### FedRAMP's model: the supply chain KSIs and the provider's records

FedRAMP 20x states part of this as Key Security Indicators. These are FedRAMP's, from the [FedRAMP Consolidated Rules for 2026](https://www.fedramp.gov/2026/reference/key-security-indicators/#supply-chain-risk), and they apply to FedRAMP cloud services. This table reads the [rules repository](https://github.com/FedRAMP/rules), version 2026.11.02.01 (November 2, 2026), and lists the KSIs whose control lists name this page's controls. Both name SA-9; none names PL-2 or CA-6. For an agency system outside FedRAMP they are a model of outcome-based evidence, not a requirement.

| KSI | FedRAMP's statement | SP 800-53 controls FedRAMP lists |
| --- | --- | --- |
| KSI-SCR-MIT, Mitigating Supply Chain Risk | "Potential supply chain risks are persistently identified, reviewed, and mitigated." | AC-19, AC-20, CA-7(4), RA-3, RA-3(1), SA-4, SA-4(1), SA-4(2), SA-4(5), SA-4(9), SA-9, SA-9(1), SA-9(2), SA-9(5), SA-10, SA-11, SA-11(1), SA-11(2), SA-15, SA-15(3), SA-16, SA-17, SA-21, SA-22, SC-18, SI-7(1), SI-7(15), SR-2, SR-3, SR-5, SR-6 |
| KSI-SCR-MON, Monitoring Supply Chain Risk | "Third party software information resources are automatically monitored for upstream vulnerabilities using mechanisms that may include contractual notification requirements or active monitoring services." | AC-19, AC-20, CA-2(3), CA-3, IR-6(3), PS-7, RA-3, RA-5, SA-9, SI-5, SR-3, SR-5, SR-6, SR-8 |

No FedRAMP rule lists PL-2, CA-6 or SA-9 among its controls. Three rule sets bear on inheritance by topic, for 20x and Rev5 Certifications at Classes B to D; each sets what a provider gives its customers, not what an agency does:

- **[Secure Configuration Guide](https://www.fedramp.gov/2026/providers/20x/rules/secure-configuration-guide/) (SCG).** Providers must create, maintain and make available recommendations for securely configuring their services, including the top-level administrative accounts and the settings only those accounts control (SCG-CSO-RSC), and explain how to obtain and use them (SCG-CSO-AUP). They should also offer the guidance in a machine-readable format that customers or third-party tools can compare against current settings (SCG-ENH-MRG). Required to obtain and maintain a Certification from March 1, 2026; the grace period ended July 1, 2026.
- **[Certification Data Sharing](https://www.fedramp.gov/2026/providers/20x/rules/certification-data-sharing/) (CDS).** Providers must give "sufficient information in FedRAMP Certification Data to support agency authorization decisions" (CDS-CSO-RIS), and should supply their Certification Package to agencies on request (CDS-UTC-AGA). For 20x it applies from July 4, 2026 to obtain a Certification and from January 1, 2027 to maintain one; for Rev5, from January 1, 2027 and August 1, 2027.
- **[Security Decision Record](https://www.fedramp.gov/2026/providers/20x/rules/security-decision-record/) (SDR).** FedRAMP says the Security Decision Record "replaced a traditional System Security Plan". For each applicable Rev5 control, it summarizes the mechanisms that address the control, "including inheritance from another cloud service offering if applicable" (SDR-CSF-CTF). For 20x it applies from July 4, 2026 to obtain a Certification and from January 1, 2027 to maintain one; for Rev5, from January 1, 2027 and August 1, 2027.

Read against the conditions above, SDR-CSF-CTF is the provider's side of condition 4, SCG-CSO-RSC and SCG-ENH-MRG feed condition 5, CDS-CSO-RIS supports condition 6, KSI-SCR-MON is condition 8, and KSI-SCR-MIT is conditions 1 and 9. That alignment is this guide's reading, not FedRAMP's.

## Templates to use or change

- **[System Security Plan](/templates/plans/system-security-plan/).** Section 10 now has a table of the providers the system inherits from: what each provides, its kind and authorization, the controls inherited in full, the hybrid controls with the system's part, and the provider document cited. It records the authorizing official's acceptance of the inherited controls, and how the system learns of changes to them.
- **[Information Security Program Plan](/templates/plans/information-security-program-plan/).** Section 7 is the organization's list of common controls (task P-5). Its status column now asks for each common control's authorization and the impact level it supports.
- **[External service review](/templates/forms/external-service-review/).** Section 4 now marks each control as common (inherited), hybrid or system-specific, the terms the plan uses. Record the provider's responsibility matrix there, and its controls in section 10 of the plan.
- **[System and Services Acquisition policy](/templates/policies/sa/).** Its SA-9 clauses need no change; the clause guidance now uses the same three terms. The [CA](/templates/policies/ca/) policy's CA-6b, CA-6c.1 and CA-6d clauses and the [PL](/templates/policies/pl/) policy's PL-2 clauses need no change.
- **[Security and privacy assessment plan](/templates/plans/security-and-privacy-assessment-plan/)** and **[Continuous Monitoring Strategy](/templates/plans/continuous-monitoring-strategy/).** Both already list inherited controls with their provider as the assessor; keep them in step with section 10 of the plan.

:::note[Federal systems]
[OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf) defines a common control as "a security or privacy control that is inherited by multiple information systems or programs", and a hybrid control as one "implemented for an information system in part as a common control and in part as a system-specific control" (section 10.a). Appendix I, section 4.c(12), has agencies designate common controls that "can be inherited by multiple agency information systems or programs". Its footnote 82 says that common controls protecting systems of differing impact levels "shall be implemented at the highest impact level among the systems", or the agency factors the gap into its risk assessments and mitigates it. As of November 2026.

Appendix I, section 4.d(1) and (2), has agencies designate senior Federal officials to authorize agency-designated common controls, and complete an initial authorization for them before operation. Section 5.j encourages leveraged authorizations: the leveraging agency reviews the owning agency's package, weighing the time elapsed since the results were produced, differences in environment, the impact of the information and its own risk tolerance. Where the system processes personally identifiable information, the agency consults its Senior Agency Official for Privacy first. SP 800-37 Appendix F calls the decision to accept another federal entity's authorization an authorization to use, issued "instead of an authorization to operate". As of November 2026.
:::

## Common findings

- Whole families marked "inherited from the platform" with no common control authorization, and no authorization to operate, behind the platform.
- Controls claimed as inherited that the platform does not offer, or offers only at a lower impact level than the system's.
- Hybrid controls marked fully inherited, so the system's own part, such as its application's audit events or its own accounts, has no owner.
- The platform's implementation text copied into the plan and out of date since the platform's last release.
- No record that the authorizing official accepted the inherited controls, or acceptance of a provider authorization that has since expired.
- The provider's responsibility matrix or secure configuration guidance never read, so settings the customer owns, such as logging or administrator multifactor authentication, are left at their defaults.
- Workloads that bypass the paved road, with their own base images, ingress or log shipping, still claiming the platform's controls.
- Platform weaknesses on its plan of action and milestones that never reach the inheriting systems' risk picture.
- The platform's controls assessed again in every system's assessment, while the system's part of each hybrid control is not assessed at all.

## Key references

- [NIST SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final), tasks P-5, S-2 to S-4, A-3 and R-4, and Appendix F (common control authorization, authorization to use, event-driven triggers)
- [NIST SP 800-18 Rev. 2](https://csrc.nist.gov/pubs/sp/800/18/r2/final) (June 2026), sections 3.2 (Control Implementation Details), 3.3 and 4.3.2
- [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final), section 2.3, Control Implementation Approaches
- [NIST SP 800-53A Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final) (January 2022; release 5.2.0), the PL-2, CA-6 and SA-9 assessment procedures, shown on each control page
- The [pipeline as part of the system boundary](/devsecops/pipeline-boundary/) page covers a pipeline that a platform team or a provider runs
- The [DevSecOps overview](/devsecops/) lists every source this section relies on, with its status
