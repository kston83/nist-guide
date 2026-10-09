# DevSecOps and the RMF: what already exists

Research notes for the owner, not a site page and not a PRD change. The question (owner, 2026-10-09): the guide explains the RMF and SP 800-53 and ships the paperwork, but teams that build software in pipelines, and programs moving to FedRAMP 20x, need the step from "the control says" to "the pipeline does, and here is the evidence". Do public resources already bridge that, and where do they stop?

Everything below was checked at the source on 2026-10-09 unless marked otherwise. Treat statuses as "as of October 2026". Statements taken only from vendor or press articles are marked as such and are not to be cited on the site until checked at a primary source.

## The short answer

Most of the pieces exist. What is missing is the thread through them.

| Layer | The problem it answers | Already solved by | State |
| --- | --- | --- | --- |
| Requirement | What must be true (the control or outcome) | SP 800-53, FedRAMP 20x Key Security Indicators (KSIs), OSPS Baseline | Solved |
| Mapping | Which requirements in one framework relate to another | OpenCRE, FedRAMP's KSI-to-800-53 lists, the SSDF's informative references, SAMM and OSPS Baseline crosswalks | Largely solved |
| Practice | How a team normally meets it in software delivery | SSDF, SP 800-204D, SP 1800-44, OWASP SAMM, DevSecOps Guideline, ASVS, SLSA | Solved, but scattered and written for engineers or for program managers, rarely both |
| Tooling | What runs in the pipeline and how its output is normalized | MITRE SAF, ComplianceAsCode, OSCAL-COMPASS, Lula, the FedRAMP 20x pilot repositories | Solved for people who already know what evidence they need |
| Evidence format | How results reach an assessor or authorizing official | OSCAL, OASIS Heimdall Data Format, FedRAMP's machine-readable rules | Solved in format; the "what counts" judgment is not written down |
| Authorization model | How the RMF process behaves when the system changes daily | FedRAMP CR26 and 20x, DoD continuous ATO, DoD CSRMC | Defined as policy; little vendor-neutral practitioner guidance |

The gap is the last two rows read together with the first four: a vendor-neutral account, for one security outcome at a time, of which practice meets it, what the pipeline produces as evidence, and how that evidence is used in an authorization package and in continuous monitoring. Tools explain how to run the tool; crosswalks explain what relates to what; policy explains what the authorizer wants. Most of the practitioner material that joins them is written by vendors and ends in a product. See [What is still open](#what-is-still-open).

## Reading paths

Pick the path that matches the question. Each step names the resource and the one thing to take from it.

### 1. Two-hour orientation

1. **FedRAMP Consolidated Rules for 2026, the timeline and definitions pages.** Where federal cloud authorization is going: Rev5 is defined as "a legacy approach based primarily on documented plans" and 20x as "a modern approach based primarily on measured outcomes".
2. **One FedRAMP 20x KSI page.** What an outcome-based requirement looks like and how FedRAMP lists the related 800-53 controls under it.
3. **OpenSSF Gemara, the model page.** A seven-layer vocabulary for the whole problem: guidance, controls, policy, the activity being governed, evaluation, enforcement, audit. Useful for placing every other resource.
4. **NIST SP 1800-44 web edition, the reference model.** NIST's notional DevSecOps life cycle (plan, develop, build, test, release, deploy, operate) mapped to the SSDF.
5. **OpenCRE, one search.** Look up a topic (for example "session management") and see the ASVS requirement, the 800-53 control, the SSDF task, the cheat sheet and the test guide linked in one place.

### 2. An RMF practitioner learning DevSecOps

1. **SP 800-218 (SSDF 1.1)**, the practice table. The informative-references column is the bridge NIST already built: each task cites SP 800-53 controls and OWASP documents (ASVS, MASVS, SAMM, SCVS) side by side. Note the OWASP versions it cites are old (see the SSDF entry below).
2. **SP 800-204D**, for what a CI/CD pipeline must do about supply chain security, mapped to the SSDF.
3. **OWASP DevSecOps Guideline**, for the pipeline stages engineers will talk about (secrets scanning, SCA, SAST, IaC scanning, SBOM and signing, DAST and IAST).
4. **OWASP Top 10 CI/CD Security Risks**, for how the pipeline itself is attacked; the pipeline is part of the system boundary.
5. **MITRE SAF**, to see how scan results are normalized and tagged to controls for an ATO.

### 3. An engineer learning how pipeline output becomes authorization evidence

1. **One FedRAMP 20x KSI page and the FedRAMP rules repository.** What the authorizer measures and the machine-readable form of the rules.
2. **SP 800-53 control pages in this guide** for CM-3, CM-4, RA-5, SA-11, SI-2, and the CA family (assessment and continuous monitoring). These are the controls most pipeline evidence lands on.
3. **OSCAL**, the component definition, SSP and assessment results models: how evidence is expressed in a form tools exchange.
4. **MITRE SAF** (Heimdall and the SAF CLI) and **ComplianceAsCode**, for producing that evidence from real scanners and configuration checks.
5. **A public FedRAMP 20x pilot submission** (Paramify or InfusionPoints on GitHub), to see a real machine-readable package. These are vendor submissions: read them as examples, not as rules.

### 4. Application security requirements (what to build, not how to authorize it)

1. **OWASP ASVS 5.0** for verifiable application requirements by level.
2. **OWASP SAMM 2** to assess and plan the program that produces secure software.
3. **OWASP DSOMM** for pipeline-specific maturity steps.
4. **OpenCRE** to move between ASVS, SAMM, 800-53 and the SSDF without writing a mapping.

### 5. Department of Defense

1. **DoD continuous ATO (cATO)**: the February 2022 memo, the evaluation criteria and the April 2024 implementation guide.
2. **DoD Cybersecurity Risk Management Construct (CSRMC)**, announced September 2025, which the Department describes as replacing the RMF's snapshot-in-time approach.
3. **Software Fast Track (SWFT)**, the April 2025 initiative on acquiring and authorizing software.

## The resources

Each entry: what it is, the problem it solves, where it stops, status, and license where it matters for this repo (CC BY-SA text cannot be copied into CC BY or CC0 content; see the PRD's Copyright section).

### Authorization models

**FedRAMP Consolidated Rules for 2026 (CR26) and 20x.** [fedramp.gov/2026](https://www.fedramp.gov/2026/), [timeline](https://www.fedramp.gov/2026/timeline/), [definitions](https://www.fedramp.gov/2026/definitions/), [KSIs](https://www.fedramp.gov/2026/reference/20x/a/key-security-indicators/), [machine-readable rules](https://github.com/FedRAMP/rules).

- *Solves:* states what the federal cloud authorizer will measure, as outcomes, with an automated, machine-readable path.
- *Stops at:* KSIs say what must be true, not how a team makes it true or what evidence is good enough.
- *Status:* CR26 launched June 24, 2026; optional early adoption from July 4, 2026; mandatory from January 1, 2027; "FedRAMP will no longer accept applications for new FedRAMP Rev5 Certifications" after June 11, 2027. FedRAMP Ready closed to new submissions on July 28, 2026. A certification has a type (Rev5 or 20x) and a class, A to D, "increasing from minimal assurance at Class A to significant assurance at Class D". Each KSI lists "Related SP 800-53 Controls"; for example KSI-CMT-LMC ("Modifications to the cloud service offering are logged and monitored") lists AU-2, CM-3, CM-3(2), CM-4(2), CM-6, CM-8(3) and MA-2.
- *Not verified at FedRAMP:* the number of KSIs per class and how classes correspond to the old Low, Moderate and High levels. Vendor articles give figures; check the rules repository before citing any.

**DoD continuous ATO.** [cATO memo, February 2022](https://dodcio.defense.gov/Portals/0/Documents/Library/20220204-cATO-memo-Signed-Cleared.pdf), [evaluation criteria](https://dodcio.defense.gov/Portals/0/Documents/Library/cATO-EvaluationCriteria.pdf), [implementation guide, April 2024](https://dodcio.defense.gov/Portals/0/Documents/Library/DoDCIO-ContinuousAuthorizationImplementationGuide.pdf).

- *Solves:* the most complete government statement of what an authorizer needs to trust a system that changes continuously: continuous monitoring of RMF controls, active cyber defense, and an approved DevSecOps platform and reference design.
- *Stops at:* written for DoD programs on DoD platforms; assumes the platform does much of the work.

**DoD Cybersecurity Risk Management Construct (CSRMC).** [Announcement, September 24, 2025](https://dowcio.war.gov/In-the-News/Article/4367432/department-of-war-announces-new-cybersecurity-risk-management-construct/).

- *Solves:* sets a five-phase life cycle (design, build, test, onboard, operations) and ten tenets, including automation, continuous monitoring, and DevSecOps.
- *Stops at:* a construct, not implementation guidance. How it relates to DoDI 8510.01 and the RMF in practice was not checked.

**DoD Software Fast Track (SWFT).** [DoD CIO article, May 2025](https://dowcio.war.gov/In-the-News/Article/4367436/software-fast-track-initiative).

- *Solves:* aims to reform how the Department "acquires, tests, and authorizes secure software".
- *Status:* the article describes a 90-day sprint to build a framework. Press reports of later phases and requirements were not checked at a DoD source.

**OMB M-26-05** (January 23, 2026, already in `sources.md`): rescinds M-22-18 and M-23-16, so agencies are no longer required to collect the CISA secure software development attestation form; they set risk-based software assurance requirements of their own. Relevant because the SSDF stays the reference, without a mandated form.

### NIST

**SP 800-218, Secure Software Development Framework (SSDF) 1.1.** [Project page](https://csrc.nist.gov/projects/ssdf). Final, February 2022. SP 800-218 Rev. 1 (SSDF 1.2) was an initial public draft in December 2025 (see `sources.md`).

- *Solves:* the practice set for secure development, already the PRD's first method. Its informative-references column cites SP 800-53 controls and OWASP documents for the same task: 57 reference entries, 24 to SAMM, 13 to ASVS, 12 to MASVS and 8 to SCVS (counted in the PDF on 2026-10-09).
- *Stops at:* the OWASP versions cited are dated: ASVS 4.0.3 and SAMM 1.5. ASVS 5.0 renumbered its requirements and SAMM is now version 2, so the cited section numbers no longer match current OWASP documents. Whether the 1.2 draft updates them was not checked.

**SP 800-204D, Strategies for the Integration of Software Supply Chain Security in DevSecOps CI/CD Pipelines.** [Final, February 2024](https://csrc.nist.gov/pubs/sp/800/204/d/final).

- *Solves:* what a pipeline must do to protect the software supply chain (build integrity, provenance, signing, SBOM), with a mapping to the SSDF.
- *Stops at:* cloud-native and pipeline-level; says little about authorization evidence.

**SP 1800-44, Secure Software Development, Security, and Operations (DevSecOps) Practices (NCCoE).** [Volume A preliminary draft, July 2025](https://csrc.nist.gov/pubs/sp/1800/44/iprd), [current web edition](https://pages.nist.gov/nccoe-devsecops/).

- *Solves:* NIST's practical DevSecOps reference model, built with industry collaborators, mapped to the SSDF: a seven-phase life cycle, two example implementations and many functional demonstrations.
- *Status:* the July 2025 draft is marked obsolete as of March 24, 2026; the web edition is dated September 2026. <!-- TODO(verify): whether the September 2026 web edition is a draft or final, and its comment period; the NCCoE project page returned 403 on 2026-10-09 -->
- *Stops at:* developer and platform practice; it does not address authorization packages.

**OSCAL.** [pages.nist.gov/OSCAL](https://pages.nist.gov/OSCAL/); latest release v1.2.3 (GitHub, August 2026).

- *Solves:* a machine-readable format for catalogs, baselines, component definitions, SSPs, assessment plans and results, and POA&Ms, so evidence can move between tools.
- *Stops at:* a format, not guidance; widely described as hard to adopt (Lula's maintainers dropped it for that reason; see Lula below).

### OWASP

**ASVS (Application Security Verification Standard).** [Project](https://owasp.org/www-project-application-security-verification-standard/). Version 5.0.0, May 30, 2025 (GitHub release); Flagship; CC BY-SA 4.0.

- *Solves:* testable application security requirements by level; the most precise "what good looks like" for application code.
- *Stops at:* no OWASP-published mapping to SP 800-53 found; OpenCRE links them.

**SAMM (Software Assurance Maturity Model).** [Model](https://owaspsamm.org/model/). Version 2.0; CC BY-SA 4.0. Five business functions (governance, design, implementation, verification, operations), 15 practices.

- *Solves:* assesses and plans the program that produces secure software; the program-level view an RMF practitioner will recognize.
- *Stops at:* maturity, not authorization. SAMM's stream pages link to OpenCRE.

**DevSecOps Guideline.** [Project](https://owasp.org/www-project-devsecops-guideline/). Incubator project. The repository README describes a 2025/2026 refresh organized as people, process and governance, aligned with the SSDF, SAMM, DSOMM and SLSA.

- *Solves:* the plain-language list of pipeline security stages: secrets scanning, SCA, SAST, IaC scanning, supply chain (SBOM, signing, provenance), IAST and DAST, API security, container and cloud-native protection, compliance checks.
- *Stops at:* tool and stage level; compliance is one short section. License: the repository asserts none in its metadata. <!-- TODO(verify): the DevSecOps Guideline's content license -->

**DSOMM (DevSecOps Maturity Model).** [Project](https://owasp.org/www-project-devsecops-maturity-model/), [model](https://dsomm.owasp.org/). Lab project; code GPL-3.0, content "Attribution-ShareAlike".

- *Solves:* concrete maturity steps for pipeline activities; OpenCRE includes it.

**Top 10 CI/CD Security Risks.** [Project](https://owasp.org/www-project-top-10-ci-cd-security-risks/). Lab project. CICD-SEC-1 to CICD-SEC-10, from insufficient flow control mechanisms to insufficient logging and visibility.

- *Solves:* how the pipeline itself is attacked; useful when a pipeline sits inside, or connects to, an authorization boundary.

**OpenCRE (Open Common Requirement Enumeration).** [opencre.org](https://www.opencre.org/), [repository](https://github.com/OWASP/OpenCRE) (repository license CC0 1.0).

- *Solves:* the mapping problem. It links requirements across, among others, NIST 800-53 v5, NIST SSDF, NIST 800-63, ASVS, SAMM, DSOMM, the OWASP Cheat Sheets, the Web Security Testing Guide, Proactive Controls, CWE, CAPEC, ISO 27001, PCI DSS and the Cloud Controls Matrix (from its standards API on 2026-10-09). Has a public REST API and a local MCP server.
- *Stops at:* links, not guidance; the links are community-maintained, not NIST's. If the site ever uses them, label them as OpenCRE's, as the PRD already requires for third-party mappings.

### OpenSSF and supply chain

**Gemara (GRC Engineering Model for Automated Risk Assessment).** [gemara.openssf.org](https://gemara.openssf.org/), [repository](https://github.com/ossf/gemara) (Apache-2.0).

- *Solves:* a shared model and schemas for compliance activities in seven layers, from guidance down to audit, so tools can interoperate. FINOS Common Cloud Controls and the OSPS Baseline use it.
- *Stops at:* a model; no federal authorization content.

**OSPS Baseline (Open Source Project Security Baseline).** [baseline.openssf.org](https://baseline.openssf.org/). Version v2026.08.28, three maturity levels.

- *Solves:* minimum security controls for open-source projects, with crosswalks to SSDF 1.1, NIST CSF 2.0, SP 800-161, SAMM, SLSA, OpenCRE, the EU Cyber Resilience Act and others. No SP 800-53 crosswalk.

**SLSA (Supply-chain Levels for Software Artifacts).** [slsa.dev](https://slsa.dev/spec/). Version 1.2 (approved), with build and source tracks.

- *Solves:* graded, verifiable guarantees about how an artifact was built and where its source came from; the usual answer to "prove this build was not tampered with".

### Tools

**MITRE SAF (Security Automation Framework).** [saf.mitre.org](https://saf.mitre.org/), [repository](https://github.com/mitre/saf) (Apache-2.0).

- *Solves:* in MITRE's words, choosing baselines, managing security data from many tools, and "generating evidence for system authorization (ATO)". Heimdall visualizes results; the SAF CLI converts scanner output into the OASIS Heimdall Data Format; InSpec profiles test against baselines such as DISA STIGs; Vulcan authors guidance.
- *Stops at:* the closest thing to the bridge in tooling, but it assumes you know which baseline and evidence the authorizer wants.

**ComplianceAsCode.** [Repository](https://github.com/ComplianceAsCode/content) (license not asserted in GitHub metadata). Security automation content "in SCAP, Bash, Ansible, and other formats": configuration checks and remediations for operating systems and platforms.

**OSCAL-COMPASS (compliance-trestle, compliance-to-policy).** [Organization](https://github.com/oscal-compass) (Apache-2.0).

- *Solves:* manages OSCAL documents as code in git, with CI; turns OSCAL into policy-engine checks and collects results back; a FedRAMP plugin validates OSCAL SSPs.

**Lula.** [Repository](https://github.com/defenseunicorns/lula) (Apache-2.0).

- *Solves:* manages controls as YAML in a repository, GitOps style. Lula 2 is a redesign that drops OSCAL, which its maintainers found "too complex for most teams to work with effectively". Early stage; breaking changes expected. A signal that the format layer is still painful.

**FedRAMP 20x pilot submissions and helpers.** [Paramify](https://github.com/paramify/fedramp-20x-pilot), [InfusionPoints](https://github.com/InfusionPoints/fedramp20x-low-pilot-final), [a GitHub Action that checks Terraform against KSIs](https://github.com/marketplace/actions/fedramp-20x-ksi-action).

- *Solves:* real examples of machine-readable packages and evidence. Vendor work: examples, not rules.

## What is still open

Read across the layers, these are the questions the resources above leave to the practitioner:

1. **Change management under continuous delivery.** CM-3 and CM-4, and FedRAMP's significant change rules, assume discrete changes; teams deploy many times a day. What is the change record, who approves what, and which changes need the authorizer?
2. **What evidence is good enough.** Tools produce results and KSIs name outcomes, but nothing vendor-neutral says, outcome by outcome, which pipeline outputs an assessor will accept, for how long, and with what coverage.
3. **Scanner findings to POA&M.** How SAST, SCA, container and DAST findings become risk decisions, deviations and POA&M items without flooding them.
4. **Inheritance from the platform.** What a team inherits from a hardened pipeline or platform (the cATO model's assumption) and how that is recorded in the SSP.
5. **The pipeline as part of the boundary.** Securing the pipeline itself (the CI/CD Top 10, SLSA, SP 800-204D) and documenting it as a system component.
6. **Stale cross-references.** The SSDF's OWASP references point to ASVS 4.0.3 and SAMM 1.5; OpenCRE fills some of that, but nothing official does.

The site's existing layers (control pages, guidance, templates) are the natural landing place for answers: each open question ends at a control page and a template (the change management procedure, the POA&M, the SSP). A possible direction, not yet a PRD change: "implementation patterns", one per outcome, that cite FedRAMP's and NIST's published mappings and link OWASP and OpenSSF material by ID rather than copying it.

## Open points for the owner

- Is the pain in "What is still open" the one you and peers hit? Practitioner experience is the test; this note rests on published sources only.
- Several vendor guides on 20x evidence and continuous monitoring were not read closely. Read two or three before calling the gap open.
- Whether to publish a version of this note on the site (for example under Reference), which would need a navigation change.
