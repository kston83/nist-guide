---
title: The pipeline as part of the system boundary
description: Where a team's build and deployment pipeline sits in the authorization boundary, how its secrets and machine identities meet AC-2, AC-6 and IA-5, and what an assessor checks.
sidebar:
  order: 4
controls: [pl-2, cm-8, ac-2, ac-6, ac-6.1, ac-6.5, ac-6.7, ia-5, ia-5.6, ia-5.7, ia-9]
guidance: draft
---

A pipeline that can change production is part of what the authorizing official accepts risk for. It holds credentials to production, runs code from many sources, and decides what deploys. This page shows where the pipeline sits in the authorization boundary, how its machine identities meet [AC-2](/controls/ac/ac-2/) and [AC-6](/controls/ac/ac-6/), how its secrets meet [IA-5](/controls/ia/ia-5/), and what an assessor will check. Status as of November 2026.

## The problem

Most system security plans describe the system as it runs: its servers, services, data stores and connections. The pipeline that builds and deploys all of it is often missing. It runs in a provider's service or a platform team's account, so nobody lists it, and its accounts are not people, so no access review sees them.

The two failures are mirror images. Some teams leave the pipeline out of every boundary: its runners, registry and deployment identity are in no inventory, no plan and no assessment, though whoever controls them controls production. Others draw the boundary around every repository and tool the organization uses, so the plan cannot be assessed and the system's real path to production is lost in it.

NIST settles both. [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) section 2.4 says a system may be supported by enabling systems outside its boundary, and its footnote 37 adds that "Risk management and accountability for enabling systems and other systems are addressed within their respective authorization boundaries." So the pipeline sits inside your boundary or inside another one, never in none. Its accounts are service accounts under AC-2, and its credentials are authenticators under IA-5.

## The requirement

The controls are [PL-2](/controls/pl/pl-2/) System Security and Privacy Plans and [CM-8](/controls/cm/cm-8/) System Component Inventory for the boundary, [AC-2](/controls/ac/ac-2/) Account Management and [AC-6](/controls/ac/ac-6/) Least Privilege for the pipeline's machine identities, and [IA-5](/controls/ia/ia-5/) Authenticator Management for its secrets. Of their enhancements in the Moderate baseline, this page covers [AC-6(1)](/controls/ac/ac-6/#ac-6.1) access to security functions, [AC-6(5)](/controls/ac/ac-6/#ac-6.5) privileged accounts, [AC-6(7)](/controls/ac/ac-6/#ac-6.7) review of privileges and [IA-5(6)](/controls/ia/ia-5/#ia-5.6) protection of authenticators; the control pages cover the others. Two items in no baseline fit a pipeline well and cost little once the rest is in place: [IA-5(7)](/controls/ia/ia-5/#ia-5.7) no embedded unencrypted static authenticators, and [IA-9](/controls/ia/ia-9/) service identification and authentication.

| Objective (SP 800-53A) | What the assessor determines | What changes with a pipeline |
| --- | --- | --- |
| PL-02a.02 | The security plan explicitly defines the constituent system components | The plan names the pipeline's components, or the enabling system that holds them |
| PL-02a.09 | The plan describes the operational environment and the dependencies on or connections to other systems | A shared or hosted pipeline is a dependency, and its connection to the system is described |
| CM-08a.01, a.02 | The inventory accurately reflects the system and includes all its components | Repositories, runners, registries and the secrets store inside the boundary are listed |
| CM-08a.03 | No component is counted twice or assigned to another system | A shared pipeline belongs to one system; the others reference it |
| AC-02a | Allowed and prohibited account types are defined | Pipeline identities are a defined type; people's personal tokens in automation are prohibited |
| AC-02d, AC-02e | Each account's access is specified, and its creation approved | Each pipeline identity has an owner, a purpose and an approved scope |
| AC-02g | The use of accounts is monitored | Deployment identities are used only from the pipeline, and other use raises an alert |
| AC-02j | Accounts are reviewed at the set frequency | Pipeline identities are in the access review |
| AC-06 | Users, and processes acting for them, get only the access their tasks need | Each job's credential is scoped to its repository, environment and actions |
| AC-06(01)(a), (b) | Access to security functions and security-relevant information is authorized for named roles | Changing pipeline definitions, gates, runner settings and secrets is limited to named roles |
| AC-06(05) | Privileged accounts are restricted to defined roles | Pipeline administrator roles and production deployment identities are privileged |
| AC-06(07)(a), (b) | Privileges are reviewed, and unneeded ones removed | Permissions granted are compared with permissions used |
| IA-05a, IA-05d | The recipient is verified at issue, and procedures cover issue, loss, compromise and revocation | A secret is issued to a named pipeline identity, and a leaked one is revoked |
| IA-05f | Authenticators are changed at set periods and on set events | Static secrets rotate on schedule; short-lived credentials expire on their own |
| IA-05g | Authenticator content is protected from disclosure and modification | Secrets sit in a secrets manager, reach jobs at run time and are masked in logs |
| IA-05(06) | Authenticators are protected to match the category of the information they unlock | A production deployment credential is protected at the system's category |
| IA-05(07) | Unencrypted static authenticators are not embedded in applications or other static storage | No secrets in code, pipeline definitions, scripts, images or logs |
| IA-09 | The defined services are uniquely identified and authenticated before they communicate | The pipeline authenticates to the cloud, the registry and production with its own identity |

Three NIST discussions settle points a pipeline team might leave open:

- **The pipeline is in scope for least privilege.** AC-6's discussion says "The principle of least privilege is also applied to system processes", and that organizations "apply least privilege to the development, implementation, and operation of organizational systems".
- **A pipeline file is static storage.** IA-5(7)'s discussion counts "access scripts" as static storage, so a pipeline definition or script holding a secret fails it.
- **Signing shows a service's source.** IA-9's discussion names "information or code signing, provenance graphs, and electronic signatures" among the ways to identify and authenticate a service.

NIST's digital identity guidelines do not settle machine credentials: [SP 800-63-4](https://csrc.nist.gov/pubs/sp/800/63/4/final) (July 2025) says they "do not explicitly address" machine-to-machine authentication (section 1.1). For pipeline identities, work from IA-5, IA-9 and AC-6 directly.

Related controls carry part of the load. [CM-5](/controls/cm/cm-5/) and the [change management page](/devsecops/change-management/) keep the pipeline the only path to production, [IA-4](/controls/ia/ia-4/) covers identifiers for services, [SA-9](/controls/sa/sa-9/) covers a pipeline a provider runs as a service, and [SC-12](/controls/sc/sc-12/) covers signing keys.

## The structure: SP 800-204D, with SP 800-37 for the boundary

[SP 800-204D](https://csrc.nist.gov/pubs/sp/800/204/d/final), Strategies for the Integration of Software Supply Chain Security in DevSecOps CI/CD Pipelines (February 2024; final, no newer draft as of November 2026), is NIST's publication for the pipeline. Its aim (section 1.1) is that pipeline activities "that take source code through the build, test, package, and deployment stages are not compromised." It maps its strategies to the SSDF in Appendix A, not to SP 800-53, and section 3.2.1 sends readers to SP 800-53 for the baseline security policy.

**The pipeline sits in a boundary, yours or another's.** SP 800-37 section 2.4 says enabling systems "are not contained within the authorization boundary of the system" and "may provide common (i.e., inherited) controls". Its footnote 40 asks organizations to consider "the risks introduced by such connections" with systems outside the boundary. Task P-11 gives the authorizing official the boundary decision, and section 2.5 says a boundary's elements are "generally under the same direct management", so the choice follows who manages the pipeline:

| Who runs the pipeline | Where it belongs | What your system security plan records |
| --- | --- | --- |
| Your team, in your own accounts | Inside your boundary, as system components | Its components in the inventory, and its controls like any other component's |
| A platform team, for many systems | An enabling system with its own authorization, often offering common controls | The enabling system by name, its authorization, the controls you inherit, and the interface: your repositories, environments and deployment identities |
| A provider, as a hosted service | An external system service under SA-9, in the provider's boundary | The service, its authorization status, the settings you own, and the identities and secrets you create in it |

Whoever runs it, what the pipeline can do in your environment stays yours. That means the deployment identities that can change your production, the secrets you place in the pipeline, the pipeline definitions in your repositories, and your people's access to all three. How common controls are inherited from a platform is a topic of its own; this page covers what stays with the system.

**Credentials are what attackers want.** Section 3.1.4 lists credentials and build systems among the assets attackers target, and section 3.1.5 names "Stealing secrets by submitting merge requests" as an exploit. Section 4.2 asks that the entities performing build, packaging and deployment "be authenticated through the verification of credentials" and given permissions by policy. Before a pipeline runs, section 5 asks you to harden its execution environment, define roles for the people who operate it, and identify "the granular authorizations" for each task.

**Secrets stay out of code and away from untrusted runs.** Section 5.1.4 asks for commits to be scanned for secrets, with push protection enabled (COMMIT-REQ-1, COMMIT-REQ-2), and section 5.2 for code ready to deploy to be scanned too (DEPLOY-REQ-1). Section 5.1.2 (PULL-PUSH-REQ-3) says workflows from outside contributors should run without network access, privileged access or "the ability to read secrets", or wait for a maintainer's approval. Section 5.3 adds that pipeline clients must be secured so malicious code cannot steal "signing keys, cloud credentials" or read environment variables holding secrets.

**Evidence comes from a trusted part of the pipeline.** Section 5.1.1 asks for build attestations signed by "a trusted component of the build framework that is not under the control of the developers". Section 5.1.3 says keys used online for signing need exceptional care, such as a hardware security module. That is IA-9 in practice: the service that built an artifact proves it, with a key no developer holds.

In the controls, each measure has a place. The alignment is this guide's reading; SP 800-204D does not map to SP 800-53.

| SP 800-204D measure | Where it lands in the controls |
| --- | --- |
| Section 5: roles for the people who operate pipelines, and granular authorizations per task | AC-2a, AC-6, AC-6(1) |
| Section 4.2: entities authenticated by their credentials, and authorized by policy | IA-9, AC-2 |
| Section 5.1.2 (PULL-PUSH-REQ-3): untrusted runs cannot read secrets | AC-6, IA-5g |
| Sections 5.1.4 and 5.2 (COMMIT-REQ-1, COMMIT-REQ-2, DEPLOY-REQ-1): secret scanning and push protection | IA-5(7), IA-5g |
| Sections 5.1.1 and 5.1.3: attestations signed by a trusted component; signing keys protected | IA-9, IA-5(6), SC-12 |
| Section 3.2.1: an isolated CI/CD environment, monitored for exfiltration and tampering | CM-8, AC-2g |

## When the pipeline is inside the controls

A pipeline is a controlled part of the system, and its own settings, records and logs are the evidence for these controls, when every condition below holds. Write how the system meets each one in its system security plan and its [Identification and Authentication Standard](/templates/standards/identification-and-authentication-standard/) (Part B). Where a platform team or a provider runs the pipeline, its own authorization covers its accounts and settings; you still own conditions 1 and 2, and conditions 3 to 9 for the identities, secrets and definitions you create.

1. **The boundary decision is written down.** The plan says whether the pipeline is inside the boundary, an enabling system or an external service, and names it. The authorizing official accepts the boundary with it (PL-2a.2, PL-2a.9; SP 800-37 task P-11).
2. **Its components are in an inventory.** Inside the boundary, the source repositories, build runners and their images, artifact registries and secrets store are listed with owners. An enabling system's components are in its own inventory, and your plan references it (CM-8a.1 to a.3).
3. **Every pipeline identity is a service account with an owner.** Deployment identities, runner identities, registry tokens, bots and third-party integrations are a defined account type. Each has a named owner, a purpose and an approval, and is listed in the system's authentication record. People's personal tokens are not used for automation (AC-2a, AC-2d, AC-2e).
4. **Each identity has only what its job needs.** A deployment identity can change only its own environment, and only from the protected branch after the environment's approval. Build jobs can read source and write to the registry but cannot deploy. Jobs that run unreviewed code, such as merge requests from forks, get no secrets and no write access (AC-6; SP 800-204D sections 5 and 5.1.2).
5. **Changing the pipeline is a privileged function.** Only named roles can change pipeline definitions on protected branches, gates, runner settings, secrets and the trust settings of deployment identities. Those roles and the production deployment identities are privileged accounts, and changes to pipeline definitions are reviewed by someone in those roles (AC-6(1), AC-6(5); CM-5).
6. **Short-lived credentials first; static secrets in the secrets manager.** Where the target supports it, the pipeline authenticates with credentials issued per run, through workload identity federation or the platform's managed identity, bound to the repository, branch or environment that may use them. Any static secret left is held in the secrets manager, injected at run time only into the jobs that need it, masked in logs, and rotated on the standard's schedule (IA-5f, IA-5g, IA-5(6), IA-9).
7. **No secret is stored in code, pipeline files or images.** Commits are scanned for secrets, with push protection where the platform allows, and repositories, build logs and images are scanned on a schedule. A secret found exposed is revoked and replaced at once, not only deleted from history, and the exposure is reported as a possible incident (IA-5(7), IA-5d; SP 800-204D sections 5.1.4 and 5.2).
8. **Use of pipeline identities is monitored.** Deployment identities are used only from the pipeline, and use from anywhere else raises an alert to security operations. The pipeline's audit log records who changed definitions, secrets and identity settings, and is kept with the change records (AC-2g).
9. **Pipeline identities are reviewed.** At each access review, every pipeline identity's granted permissions are compared with those it used. Unused identities and permissions are removed, and the review records what changed (AC-2j, AC-6(7)).

**Typical values.** Your policy sets these; the [AC](/templates/policies/ac/) and [IA](/templates/policies/ia/) policy clauses give typical values that suit a pipeline as written. Shared and service account secrets changed at least annually, and when compromise is suspected or a person who knew them leaves (IA-5f). Accounts reviewed quarterly if privileged and at least annually otherwise (AC-2j); a production deployment identity is privileged, so quarterly. Privileges reviewed quarterly for privileged roles (AC-6(7)). Privileged accounts restricted to the administrators the plan names (AC-6(5)); name the pipeline administrators and deployment identities there. Short-lived credentials typically expire within an hour, or when the job ends. If you select IA-9, its services are typically the pipeline's build and deployment services and every service they call to change the system.

## Team practice

OWASP, NSA and CISA, and DoD describe how pipeline teams do this work. OWASP text is licensed CC BY-SA 4.0 (DSOMM's data GPL-3.0), so this section cites names and IDs and says what each covers in the guide's own words.

- **[OWASP DevSecOps Guideline](https://owasp.org/www-project-devsecops-guideline/)** (incubator project, no version number; read in November 2026). Its [documentation](https://owasp.github.io/DevSecOpsGuideline/) section 2.3.6.3 CI/CD Pipeline Security treats the pipeline as a high-value target and takes the OWASP Top 10 CI/CD Security Risks as its threat model. It covers narrowly scoped job tokens, short-lived federated credentials in place of stored cloud keys, third-party pipeline components pinned to exact versions, and ephemeral, isolated runners. It also covers keeping secrets from fork and pull request runs, and treating the pipeline definition as a security perimeter: separate roles, protected branches, independent review and environment approval before a job can take on a deployment role. Section 2.2.1.2 Secrets Management layers detection (before commit, in the pipeline, push protection and history scans) and says to revoke a leaked secret first, with cleaning history second.
- **[OWASP DevSecOps Maturity Model (DSOMM)](https://dsomm.owasp.org/)** (lab project; data release 5.0.2, September 17, 2026). Under Implementation, Identity and Access Management: *Account inventory* and *Least-privilege access baseline* (level 2), *Periodic access recertification*, *Segregation of duties for critical actions* and *Workload and machine identity* (level 4). Under Implementation, Development and Source Control: *Block pushes containing secrets* (level 3). Under Test and Verification, Static depth for infrastructure: *Test for stored secrets in code* and *Test for stored secrets in build artifacts* (level 1). Under Build and Deployment: *Environment depending configuration parameters (secrets)* and *Building and testing of artifacts in virtualized environments* (level 2).
- **[OWASP Top 10 CI/CD Security Risks](https://owasp.org/www-project-top-10-ci-cd-security-risks/)** (lab project). CICD-SEC-2, Inadequate Identity and Access Management, is the unmanaged identity: overly permissive, stale, local, external or shared accounts, human and programmatic. CICD-SEC-5, Insufficient PBAC (Pipeline-Based Access Controls), is the job that can reach more than it needs. CICD-SEC-6, Insufficient Credential Hygiene, is the secret in code, history, image layers or logs, shared across contexts and never rotated. CICD-SEC-4, Poisoned Pipeline Execution, and CICD-SEC-8, Ungoverned Usage of 3rd Party Services, are how attackers reach those secrets.
- **[NSA and CISA, Defending Continuous Integration/Continuous Delivery (CI/CD) Environments](https://media.defense.gov/2023/Jun/28/2003249466/-1/-1/0/CSI_DEFENDING_CI_CD_ENVIRONMENTS.PDF)** (June 2023, version 1.0). It recommends minimizing long-term credentials, and for software-to-software authentication, using the cloud's temporary credentials in place of stored ones. It asks for least-privilege access to pipelines with separation of duties, audits of administrative accounts, and secrets never passed in plaintext or embedded in software. It aligns its least-privilege recommendation with SP 800-53 controls including AC-6, AC-6(1), AC-6(5) and several AC-2 enhancements.
- **[DoD Enterprise DevSecOps Activities & Tools Guidebook](https://dodcio.defense.gov/Portals/0/Documents/Library/DevSecOpsActivitesToolsGuidebook.pdf)**, version 2.5, April 2025 (Distribution Statement A). Section 3.2 says a policy and enforcement strategy should be set for access controls on the tools a team uses. Its Plan phase table counts DevSecOps tools among the software system components that configuration management planning takes in. Its Release phase table (Table 8) lists Software Factory Risk Continuous Monitoring, which monitors the software factory's own controls, as REQUIRED.

## Evidence

An assessor tests these controls by tracing access in both directions. From production, take the identities that can change it and trace each to an owner, an approval and a review. From the pipeline, take a recent deployment and show which identity ran it, what it could reach, and where its credential came from.

| Objective | Pipeline output that meets it | What the assessor checks |
| --- | --- | --- |
| PL-02a.02, a.09 | The plan's boundary section and diagram, naming the pipeline and where it sits; for an enabling system, its authorization and the interface | The pipeline that deploys production is in a boundary, and the diagram matches what runs |
| CM-08a.01 to a.03 | Inventory entries for repositories, runners, registries and the secrets store, or a reference to the enabling system's inventory | Resources found in the cloud account or platform match the inventory |
| AC-02a, d, e | The authentication record: each pipeline identity with its owner, purpose, approval and how it authenticates | Every identity in the platform is in the record; no personal tokens run automation |
| AC-02g | Alerts on use of deployment identities outside the pipeline; the pipeline's audit log | Alerts work and are handled |
| AC-02j, AC-06(07) | Access review records that include pipeline identities, with permissions granted against used, and removals | Machine identities are reviewed, and the review removes what is unneeded |
| AC-06, AC-06(01), AC-06(05) | Identity policies and trust conditions in code; the role assignments for pipeline administration | A build job cannot deploy, an untrusted run cannot read secrets, and only named roles change pipeline definitions and secrets |
| IA-05f, IA-05g, IA-05(06) | The secrets manager's inventory with rotation dates; federation settings showing credential lifetimes; masked logs | Static secrets rotate on schedule; deployment credentials are protected at the system's category |
| IA-05d, IA-05(07) | Secret scanning results for repositories, logs and images; push protection settings; revocation records | Every secret found was revoked, not only deleted |
| IA-09 | Federation and trust settings for each service the pipeline calls; signed attestations for built artifacts | Each target authenticates the pipeline's own identity before accepting a change |

Interviews and tests still matter. An assessor will ask the platform owner who can change the pipeline, and a developer how a job gets a credential. Expect a test too: a merge request from a fork that tries to print a secret, or a production deployment from an unprotected branch, should fail.

### FedRAMP's model: the identity KSIs and the scope rules

FedRAMP 20x states these outcomes partly as Key Security Indicators. These are FedRAMP's, from the [FedRAMP Consolidated Rules for 2026](https://www.fedramp.gov/2026/reference/key-security-indicators/#identity-and-access-management), and they apply to FedRAMP cloud services. This table reads the [rules repository](https://github.com/FedRAMP/rules), version 2026.11.02.01 (November 2, 2026), and lists the KSIs whose control lists name this page's controls; none names PL-2 or IA-9. For an agency system outside FedRAMP they are a model of outcome-based evidence, not a requirement.

| KSI | FedRAMP's statement | SP 800-53 controls FedRAMP lists |
| --- | --- | --- |
| KSI-IAM-SNU, Securing Non-User Authentication | "Appropriately secure authentication methods are used and persistently reviewed for non-user accounts and services." | AC-2, AC-2(2), AC-2(9), AC-4, AC-6(5), AU-10, IA-2(5), IA-3, IA-5(2), RA-5(5) |
| KSI-IAM-JIT, Authorizing Just-in-Time | "A least-privileged, role and attribute-based, and just-in-time security authorization model is used and persistently reviewed for all user and non-user accounts and services." | AC-2, AC-2(1), AC-2(2), AC-2(3), AC-2(4), AC-2(6), AC-2(7), AC-2(11), AC-3, AC-4, AC-5, AC-6, AC-6(1), AC-6(2), AC-6(3), AC-6(5), AC-6(7), AC-6(8), AC-6(9), AC-6(10), AC-7, AC-17, AC-17(4), AC-20(1), AC-21, AU-9(4), AU-10, AU-12(3), CA-3(6), CM-5, CM-5(1), CM-5(5), CM-7, CM-7(2), CM-7(5), CM-9, IA-4, IA-4(4), IA-7, IR-4(6), PS-2, PS-3, PS-4, PS-5, PS-6, PS-9, RA-5(5), SC-2, SC-3, SC-23, SC-39 |
| KSI-IAM-ELP, Ensuring Least Privilege | "Identity and access management measures are used and persistently reviewed to ensure each user or device can only access the resources they need." | AC-2(5), AC-2(6), AC-2(7), AC-2(9), AC-2(11), AC-3, AC-4, AC-6, AC-6(3), AC-6(8), AC-12, AC-14, AC-17, AC-17(1), AC-17(2), AC-17(3), AC-18(4), AC-20, AC-20(1), AC-21, AU-6(7), AU-12(3), CM-2(7), CM-5(1), CM-5(5), CM-7(2), CM-9, IA-2, IA-3, IA-4, IA-4(4), IA-5(2), IA-5(6), IA-11, IR-4(6), IR-9(4), PS-2, PS-3, PS-4, PS-5, PS-6, RA-5(5), SC-2, SC-3, SC-4, SC-20, SC-21, SC-22, SC-23, SC-39, SI-3, SI-4(19) |
| KSI-IAM-AAM, Automating Account Management | "The lifecycle and privileges of all accounts, roles, and groups are securely managed using automation." | AC-2(2), AC-2(3), AC-2(13), AC-6(7), IA-4(4), IA-8(4), IA-12, IA-12(2), IA-12(3), IA-12(5) |
| KSI-IAM-SUS, Responding to Suspicious Activity | "Accounts with privileged access are disabled or otherwise secured in response to suspicious activity." | AC-2, AC-2(1), AC-2(3), AC-2(11), AC-2(12), AC-2(13), AC-7, AU-6(5), CM-5(1), CM-6(2), IR-4(2), IR-4(6), PS-4, PS-8, SI-4, SI-4(1), SI-4(4), SI-4(19), SI-4(20), SI-4(22) |
| KSI-IAM-APM, Adopting Passwordless Methods | "Secure passwordless methods are used for user authentication and authorization when feasible, otherwise strong passwords with phishing-resistant MFA is used." | AC-2, AC-3, IA-2, IA-2(1), IA-2(2), IA-2(6), IA-2(8), IA-5, IA-5(1), IA-5(2), IA-5(6), IA-5(8), IA-6, IA-8, IA-8(2), IA-8(4), SC-23 |
| KSI-SVC-ASM, Automating Secret Management | "Management, protection, and regular rotation of digital keys, certificates, and other secrets is automated and persistently reviewed." | AC-17(2), IA-5(2), IA-5(6), SC-12, SC-12(1), SC-17 |
| KSI-PIY-GIV, Generating Inventories | "Authoritative sources are used to automatically generate real-time inventories of all information resources when needed." | CM-2(2), CM-7(5), CM-8, CM-8(1), CM-8(2), CM-8(4), CM-12, CM-12(1), CP-2(8) |
| KSI-PIY-RSD, Reviewing Security in the SDLC | "The effectiveness of building security and privacy considerations into the Software Development Lifecycle and aligning with CISA Secure By Design principles is persistently reviewed." | AC-5, AU-3(3), CM-3(4), IA-5(7), PL-8, PM-7, RA-9, SA-3, SA-8, SC-4, SC-18, SI-10, SI-11, SI-16 |

FedRAMP sets the scope of a certification in its [Minimum Assessment Scope](https://www.fedramp.gov/2026/providers/20x/rules/minimum-assessment-scope/) rules (MAS), for 20x and Rev5 Certifications at Classes B to D. MAS-CSO-IIR requires the offering to include every information resource "likely to handle federal customer data or likely to impact the confidentiality, integrity, or availability" of it. Anything not entirely inside is a third-party information resource, whose use, justification and mitigations the provider documents (MAS-CSO-TPR).

The MAS rules are required to obtain a 20x Certification from July 4, 2026, and a Rev5 Certification from January 1, 2027. To maintain a certification they apply from January 1, 2027, with a grace period that ends at the first independent assessment started after that date. A pipeline that deploys the offering is likely to affect its integrity, so under these rules it is in scope or documented as a third-party resource. That reading is this guide's.

Read against the conditions above, MAS-CSO-IIR is condition 1, KSI-PIY-GIV is condition 2, KSI-IAM-SNU is conditions 3 and 6, KSI-IAM-JIT and KSI-IAM-ELP are conditions 4 and 5, and KSI-SVC-ASM is condition 6. KSI-PIY-RSD reaches condition 7 through IA-5(7), KSI-IAM-SUS is condition 8, and KSI-IAM-AAM is condition 9. KSI-IAM-APM is about people's sign-in, so it applies to the pipeline's administrators. That alignment is this guide's reading, not FedRAMP's.

## Templates to use or change

- **[System Security Plan](/templates/plans/system-security-plan/).** Section 7 now records where the build and deployment pipeline sits: inside the boundary, an enabling system, or an external service, with its interface.
- **[Component inventory](/templates/forms/component-inventory/).** Its "How to use this inventory" section now lists the pipeline components to record when the pipeline is inside the boundary.
- **[Identification and Authentication Standard](/templates/standards/identification-and-authentication-standard/).** Section 12 now covers pipeline identities and secrets: one identity per pipeline and environment, short-lived credentials first, secrets only at run time and never for untrusted runs, and secret scanning with revocation. List each pipeline identity in Part B section 20.
- **[Account management procedure](/templates/procedures/account-management-procedure/).** Pipeline identities are the "Service or system (non-interactive)" type in section 3, and belong in the account export at the start of each review (section 5.8).
- **[Access Control](/templates/policies/ac/) and [Identification and Authentication](/templates/policies/ia/) policies.** Their AC-2, AC-6 and IA-5 clauses need no change. They have no IA-5(7) or IA-9 clause, as neither is in a baseline; if you select them, add a clause, and section 12 of the standard says how to meet them.
- **[Configuration Management Plan](/templates/plans/configuration-management-plan/).** Appendix B already excludes the pipeline's own gates, approval rules, identity and secrets from the preapproved class, so changing them is a normal change (see [change management](/devsecops/change-management/)).

:::note[Federal systems]
[OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf) defines the authorization boundary as "all components of an information system to be authorized for operation by an authorizing official", which "excludes separately authorized systems to which the information system is connected" (section 10.a). Appendix I, section 4.a, has agencies identify boundaries in accordance with SP 800-18 and SP 800-37. A pipeline the agency runs for one system is in that system's boundary; a shared pipeline is authorized on its own, and each system's plan records the connection. As of November 2026.

For a hosted pipeline service with a FedRAMP Certification, FedRAMP's [Agency Use rules](https://www.fedramp.gov/2026/agencies/rules/agency-use/) say agencies must complete the Authorization to Operate process for systems that use it (AGU-USE-ABU), and must review the provider's Secure Configuration Guides and configure the relevant settings (AGU-USE-RSG). The certification covers the service. The identities, secrets and settings the agency creates in it stay part of the agency system's authorization. As of November 2026.
:::

## Common findings

- The pipeline, its runners and its deployment identity in no inventory and no boundary, though they can change production.
- A long-lived cloud access key stored as a pipeline variable, created years ago by someone who has since left.
- One deployment identity with administrator rights over every environment, used by every job.
- Secrets readable by jobs that run merge requests from forks or outside contributors.
- Secrets in pipeline definitions, scripts, container image layers or build logs.
- A secret found in history and deleted from the repository, but never revoked.
- An engineer's personal access token running automation, so access outlives their role or breaks when they leave.
- Pipeline identities missing from the access review because they are not people.
- Anyone with write access to a repository able to change the pipeline definition that deploys production.
- Third-party pipeline components and integrations with broad access to repositories or secrets, approved by no one.

## Key references

- [NIST SP 800-204D](https://csrc.nist.gov/pubs/sp/800/204/d/final), sections 3.1.4, 3.1.5, 3.2.1, 4.2 and 5.1 to 5.3
- [NIST SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final), sections 2.4 and 2.5, task P-11 and Appendix G
- [NIST SP 800-53A Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final) (January 2022; release 5.2.0), the PL-2, CM-8, AC-2, AC-6, IA-5 and IA-9 assessment procedures, shown on each control page
- [NSA and CISA, Defending CI/CD Environments](https://media.defense.gov/2023/Jun/28/2003249466/-1/-1/0/CSI_DEFENDING_CI_CD_ENVIRONMENTS.PDF) (June 2023), Authentication and access mitigations
- The [DevSecOps overview](/devsecops/) lists every source this section relies on, with its status
