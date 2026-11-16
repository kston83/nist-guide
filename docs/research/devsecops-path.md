# The DevSecOps path: from zero automation to authorization on pipeline evidence

Research notes for the owner, not a site page and not a PRD change. They are the input to the PRD amendment that widens the DevSecOps section, which the owner will write in a fresh session. This note is the companion to [`devsecops-landscape.md`](devsecops-landscape.md): that note catalogs the public resources, and this one asks how a team gets from nothing to authorization that runs on pipeline evidence, using those resources in order.

**The question (owner, 2026-11-16).** The six DevSecOps topic pages (PRD 3.17, DSO-04) meet one need: for a team that already ships through a pipeline, which outputs prove compliance. The larger goal is a set of site materials, a "kit" but not a released download, that a team with **zero automation** can read through and come away understanding how the process works, what is already solved (linked, not rewritten), short informed advice where nothing is published, and where each step lands in the requirements (SP 800-53 or another authority). The six pages become the end of that path, not the whole section.

**Method.** Four research streams ran on 2026-11-16: destinations and the path's structure; pipeline and supply chain; evidence formats and automation; application security, mapping and the KSI map. Every status below was checked at its primary source that day unless marked; treat statuses as "as of November 2026". The claims the conclusions rest on were checked a second time by the orchestrating session (SP 800-37 Rev. 2 Appendix F, the fedramp.gov agency pages, RFC-0024, the rules dataset's SDR and AGU text, CSWP 3, the CISA SBOM minimum elements, the SSDF 1.2 draft). Vendor material was read for understanding only and is never cited. Labels: **[synthesis]** marks this note's own reading or recommendation; everything else is what a source says.

## Owner decisions, 2026-11-16

1. **Reader and destinations.** One path with three destinations: agency ongoing authorization under the RMF, DoD continuous authorization to operate (cATO), and FedRAMP 20x as the model of outcome-based evidence (made the north star by decision 5). It is written for **system teams that run their system on a FedRAMP-authorized cloud (for example AWS GovCloud)**: agency and DoD mission teams and their contractors. It is not written for cloud service providers, who are the smallest audience and mostly have this covered, except new providers.
2. **Tools.** Open-source and government tools may be named as "what's solved" (what each does, where it stops, status, license). No commercial products. This changes the PRD's "recommends no products" rule (Out of scope).
3. **Scope.** Pipeline and supply chain; evidence formats and automation; application security requirements (with a line drawn against the SSDF strand); and the control-to-KSI map is back on the table.
4. **Sequencing.** Merge #173 (topic page 5, platform inheritance). Hold topic page 6 (continuous monitoring, Phase 4 row 11) until the amendment settles its role. Carry on with the SSDF rows meanwhile.
5. **FedRAMP's methods are the north star** (added the same day, in the #182 review, and clarified by the owner). FedRAMP has worked out how to run security and authorization on automation, so its methods and processes guide the path, and the quality FedRAMP expects is the bar the system aims for. In most cases the reader is a system team operating on a FedRAMP-authorized cloud such as GovCloud. NIST stays the requirement and the agency or DoD AO still authorizes the system under the RMF; FedRAMP shows how to do the work and how good it has to be.
6. **Name only proven tools** (added in the #182 review). Be careful about referencing unproven open-source apps, including quickly generated ones with no track record. A tool is named only when it clears the stricter bar in section 8, with the evidence listed in the PR and the owner's review before it appears on a page.
7. **Class C is the Moderate benchmark** (#182 review). FedRAMP Class C expectations are the quality bar for a Moderate system. The owner's practitioner estimate is that about 95% of systems are Moderate, so Class C is the bar the path is written to; Low and High bars are left for later.

## The short answer

- **NIST already sets the gate the path leads to.** SP 800-37 Rev. 2 Appendix F ("Transitioning from Static Authorization to Ongoing Authorization"): "if a substantial portion of monitoring is not accomplished via automation, it will not be feasible or practical to move from the current static authorization approach to an effective and efficient ongoing authorization approach." It allows the move in phases, including "partitioning systems into subsystems or system elements and subsequently transitioning those subsystems or system elements to ongoing authorization one segment at a time". OMB Circular A-130 Appendix I (sections 4.d(3) and 5.h) sets the same two entry conditions and adds privacy continuous monitoring. So the path has a NIST-defined start (a static ATO), a NIST-defined finish (ongoing authorization) and a NIST-defined test (enough monitoring automated). What nobody publishes is the order of work for one system team in between, or what "a substantial portion" means.
- **No published source starts at zero.** SLSA starts once a build exists; the OSPS Baseline scales by open-source project size; DSOMM grades pipeline practice; SP 800-137 builds an organization's program. Each covers a slice. The sequence from "manual deploys, ticket change, paper evidence" to ongoing authorization is the gap the path fills.
- **Machine-readable does not mean OSCAL.** FedRAMP's 2026 rules replaced the provider SSP with a Security Decision Record "in both human-readable and JSON formats", validated against FedRAMP's own JSON schemas, which do not use OSCAL. OSCAL appears once in the rules, in an agency rule set the dataset still marks "placeholder". FedRAMP's RFC-0024 says: "In 2025, FedRAMP processed 100+ Rev5 authorizations without a single submission that used OSCAL". DoD's machine-readable route is the eMASS REST API (JSON), with no DoD source found on OSCAL. The path should not lead with OSCAL; the format is the authorizer's tool's choice.
- **For this reader, FedRAMP is the provider they inherit from and the north star they aim at, not the authorization they get (decision 5).** It is the certification of the cloud the team runs on, with duties for the agency (review the provider's Ongoing Certification Reports, configure from its Secure Configuration Guide). And it is the program that has worked out how to run on automation: persistent validation, machine-readable evidence produced by code, change tiers, vulnerability rules, quarterly reporting, refresh cadences by class. The path borrows FedRAMP's method for each stage and aims at FedRAMP's expected quality, so the system is run the way its provider is. Authorization stays with the agency: fedramp.gov is explicit that "An agency should never create a standalone authorization to operate for a cloud service offering" and that "each agency still authorizes its own federal information systems."
- **Published mappings to SP 800-53 for pipeline and supply chain work come from three places only:** the SSDF 1.1 informative references, FedRAMP's KSI control lists, and the OSPS Baseline's crosswalk to SP 800-161 (which uses SP 800-53 control IDs). SP 800-204D maps to the SSDF only. SLSA, Sigstore, in-toto, the SBOM standards and the OWASP CI/CD Top 10 publish none. OpenCRE's links exist but are coarse (one entry for all of SR-1 to SR-12).

## 1. Who it is for and where it ends

**The reader [synthesis, from the owner's decision].** A team that builds and runs one system on a FedRAMP-authorized cloud, has (or is getting) an authorization to operate, deploys by hand or with ad hoc scripts, tracks change in tickets, and assembles evidence in documents and screenshots at assessment time. They want to get to authorization that runs on what their pipeline produces. Their authorizing official (AO) is an agency or DoD official, not FedRAMP.

### The three destinations

| Destination | Entry conditions | Running state | Where the rules live |
| --- | --- | --- | --- |
| **Agency ongoing authorization** | An initial authorization "based on a complete, zero-based review"; a continuous monitoring program that "monitors implemented controls with the appropriate degree of rigor and at the required frequencies" (A-130 adds privacy continuous monitoring, PCM); the AO formally approves the transition and issues a new decision with no termination date (SP 800-37 Rev. 2 Appendix F; A-130 Appendix I 4.d(3), 5.h) | AO reviews at the CA-6 frequency (time-driven) and on organization-defined triggers; reauthorization "is typically an event-driven action" (A-130 5.i); tasks M-1 to M-6 | A-130 Appendix I; SP 800-37 Rev. 2 (task M-6, Appendix F); SP 800-137; the agency's ISCM strategy |
| **DoD cATO** | A valid ATO, in the Monitor step, no High or Very High unmitigated findings; three competencies from the February 2022 memo: "robust continuous monitoring of RMF controls", "active cyber defense", and "an approved DevSecOps reference design"; AO and component CISO present to the DoD CISO | No expiration; can be lost without losing the underlying ATO ("A system can temporarily lose its cATO privilege without any loss of existing ATO") | cATO memo (February 2, 2022); cATO Evaluation Criteria, DevSecOps Use Case (May 29, 2024, Distribution A); Continuous Authorization Implementation Guide (March 2024; conflicting markings, see open questions); DoDI 8510.01 (July 19, 2022) |
| **FedRAMP 20x, the north star** | Not an authorization for this system: FedRAMP certifies the cloud service offering, and the agency authorizes its own system. Its methods and expected quality are what the system's practice follows (decision 5) | What following it means for a system: FedRAMP's processes for change, vulnerabilities, evidence and reporting, adapted to one system (section 3); KSIs as outcome statements with related controls; the Security Decision Record's per-KSI record ("Explanation of measures", "Verification that the automation in place is accurate and sufficient", "Validation that the measures are accurately produced"); refresh cadences by Certification Class | fedramp.gov/2026 and the rules dataset (version 2026.11.02.01; no license file; cite IDs and titles as FedRAMP's) |

**What a team on a FedRAMP cloud must do about the provider (fedramp.gov, 2026-11-16).** FedRAMP certification "does not replace the agency's own information security continuous monitoring program"; agencies keep monitoring "agency-managed configurations, reviewing logs, managing agency accounts, maintaining agency POA&Ms". The stable rule CCM-AGM-ROR: "Agencies MUST review each Ongoing Certification Report" (providers report every three months). "The agency SSP should focus on what the agency implements, configures, operates, or inherits", and "Do not copy the provider's package into the SSP." Under the 2026 rules there is no named customer responsibility matrix; legacy Rev5 packages carry the "CIS and CRM Workbook" (SSP Appendix J). Providers move to "FedRAMP-compatible trust centers by August 2027", which "must make Certification Data available through APIs". The Certification Classes page settles a question the landscape note left open: "Agencies should not treat Certification Classes as one-for-one replacements for Low, Moderate, or High impact levels."

**CSRMC.** DoD's Cybersecurity Risk Management Construct (announced September 24, 2025) is two one-page documents. Each of its five phases is labelled with RMF steps (Design: Prepare, Categorize, Select; Build: Implement; Test: Assess; Onboard: Authorize; Operations: Monitor, "enabling cATO"). No implementation guidance or change to DoDI 8510.01 was found. Trade-press descriptions of it as replacing the RMF are not supported by the documents.

## 2. The spine: what orders the path

| Structure | What it is | Ordered from zero? | Role in the path [synthesis] |
| --- | --- | --- | --- |
| SP 800-37 Rev. 2 Appendix F, and Monitor tasks M-1 to M-6 | The only NIST text on moving from static to ongoing authorization: two entry conditions, automation as the feasibility test, phasing, the AO's decision | Start, finish and gate; "phased", but no stages | **Backbone** |
| SP 800-137 ISCM steps: Define, Establish, Implement, Analyze and Report, Respond, Review and Update | An organization's monitoring program cycle (final, September 2011; no revision or draft) | Yes, for building a program | **Order of work** in the middle stages, applied at system level through task S-5 |
| NIST IR 8011 Vol. 1 (June 2017; Rev. 1 initial public draft, February 2025) | "a method for identifying SP 800-53 controls that can be tested via automated means based on the assessment objectives" (Rev. 1 draft abstract); SP 800-37 cites it under M-6 | No | The NIST answer to "which controls can the pipeline evidence, and which stay manual" |
| A-130 Appendix I 4.d, 5.h | Policy: the same two conditions, plus PCM and formal AO approval | No | **Federal gate** |
| cATO competencies and evaluation criteria | DoD end-state criteria, organized as platform, process and people | No; a readiness assessment | **Destination checklist** for DoD readers |
| SP 1800-44 phases (Plan, Develop, Build, Test, Release, Deploy, Operate); DoD guidebook v2.5's ten phases | Where activities happen in a pipeline | No | **Cross-axis**: which pipeline phase produces each stage's evidence |
| SLSA build and source tracks; OSPS Baseline levels; DSOMM levels | Graded practice for builds, source, open-source projects and pipelines | Partly, each for its slice | Markers inside stages, cited by name and level |
| FedRAMP KSIs and Certification Classes A to D | Outcomes FedRAMP measures, and provider assurance levels | Ordered, but for providers | **North star**: the outcomes each stage aims at (decision 5) |

**Recommendation [synthesis].** Use SP 800-37 Rev. 2 Appendix F as the spine (start, finish, gate), SP 800-137's six steps as the order of work inside it, the Monitor tasks as the steady state, and A-130 as the federal note. Put the pipeline phases on the other axis. Treat cATO as the DoD destination and FedRAMP as the north star each stage aims at, not as stages. NIST gives the structure and the requirements, as the site's NIST-first rule asks; FedRAMP gives the target for what good looks like. The overview's existing seven-steps table stays.

**SP 1800-44's status.** The NCCoE "DevSecOps Practices Live Document" gave a comment period of "September 24, 2026, through November 9, 2026"; it is now closed. No newer edition was seen. The NCCoE project page blocked scripted access, so whether it now says "comments under review" is unverified (check in the browser). Keep citing it as a draft (DSO-06).

## 3. The path: draft stages

**[synthesis]** The stages, their order and the "done" lines are this note's proposal. Each cell in the anchor and "solved" columns names a published source. Stages overlap in practice. A team can start stage 3 while stage 2 is agreed, and Appendix F allows taking one subsystem through the stages before the rest.

| # | Stage | What "done" looks like | Requirement anchors | What's already solved (link, don't rewrite) | The gap the site fills | Existing pages |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | **Authorized, static** | A current ATO with a termination date; manual deploys, ticket change, paper evidence. Not authorized yet: finish the RMF first | A-130 5.h ("remain under a static authorization process with specific authorization termination dates"); SP 800-37 Appendix F condition 1 | The site's RMF steps and program kit | Where you are, and the destination options in one page | RMF section |
| 1 | **Boundary and inheritance known** | The boundary includes the pipeline; the provider's package read (Rev5 CIS/CRM, or 20x Security Decision Record and Secure Configuration Guide); the SSP says what the team implements, configures, operates or inherits; a routine for reviewing the provider's Ongoing Certification Reports | SP 800-37 tasks P-5, P-11, S-4; PL-2, CA-6, SA-9; CCM-AGM-ROR | fedramp.gov agency pages ("Using a FedRAMP Certified Cloud Service", "Initial" and "Ongoing Agency Authorization") | Recording inheritance from a 20x provider, which has no named CRM; folding Ongoing Certification Reports into the system's monitoring | Pipeline boundary; platform inheritance (#173) |
| 2 | **Monitoring strategy agreed with the AO** | A system-level strategy: per-control frequency, which controls are automated and which stay manual, metrics, the AO's review frequency, event triggers and significant-change criteria | SP 800-137 3.1 Define and 3.2 Establish; SP 800-37 P-7, S-5, R-4, Appendix F; CA-7; IR 8011 | SP 800-137; IR 8011 (testable controls); the cATO criteria's monitoring timelines as a DoD check; the site's Continuous Monitoring Strategy template | What "a substantial portion" means for one system; how to agree evidence, freshness and coverage with the AO | CM page (significant change) |
| 3 | **Everything through version control** | Code, infrastructure, configuration and pipeline definitions in repositories with protected branches and required review; change records come from merge requests | SP 800-128; CM-3, CM-5, SA-10; SSDF PS.1.1 (→ SA-10) | SLSA Source L1 "Version controlled" to L4 "Two-party review"; SP 800-204D's source code workflows; OSPS AC controls | Two-party review as the CM-3 approval record (largely written) | Change management; baselines as code |
| 4 | **The pipeline is the only path to production** | Scripted, repeatable build and deploy on a managed build service inside the boundary; secrets out of code; the pipeline's own least-privilege identity; no manual deploys | CM-3d, CM-5, AC-6, IA-5, IA-9; KSI-CMT-RMV as a model | SLSA Build L1 "Provenance exists" and L2 "Hosted build platform"; SP 800-204D 5.1; NSA and CISA, Defending CI/CD Environments; OWASP CICD-SEC-1 to 10 | The step before SLSA L1 (SLSA assumes a build exists) | Pipeline boundary; change management |
| 5 | **Tests and scans as gates** | Automated tests and security scans run before production; failures do not deploy; findings flow to one tracker | SA-11, RA-5, SI-2, CA-5; SSDF PW.7, PW.8 (→ SA-11) | SSDF PW.7 and PW.8 (the site's methods pages); ASVS and WSTG for what to test; OPA and Kyverno for policy gates | Where scan output goes as evidence (written) | Findings to the POA&M; SSDF pages |
| 6 | **Supply chain evidence per release** | An SBOM per build, kept with the release; artifacts signed in the pipeline and verified before deploy; build provenance kept | SR-3, SR-4, SA-10, CM-14, SI-7; SSDF PS.3.1, PS.3.2 (→ SA-10, SR-3, SR-4) | CISA 2026 SBOM Minimum Elements (final); SPDX 3.0, CycloneDX 1.7; Sigstore, in-toto; SLSA Build L3 | What provenance and SBOMs to keep and for how long; using SBOMs from suppliers in RA-5 and SR work; keyed or keyless signing as an AO decision | None yet |
| 7 | **Evidence generated, not gathered** | Scheduled and per-deploy checks write dated, machine-readable results, each kept with a short explanation of how it is produced and the code that produces it; results normalized to one format and tied to SP 800-53A objectives | SP 800-137 3.3 Implement ("Automate collection, analysis, and reporting of data where possible"); SP 800-37 Appendix F ("begin by generating security and privacy information from automated tools and fill in gaps by generating additional information from manual assessments"); SP 800-53A | MITRE SAF CLI and Heimdall (HDF); ComplianceAsCode with OpenSCAP; CINC Auditor with MITRE's InSpec-format profiles; FedRAMP's Minimum Assessment Scope pattern (output, human-readable explanation, code) as a model | The zero-to-one step from documents and spreadsheets to the first structured, dated evidence; mapping a tool's output to an assessment objective | Configuration baselines as code (part) |
| 8 | **Analyze, report and respond continuously** | A dashboard the AO can read; findings to risk decisions and the POA&M; the package updated from monitoring rather than rewritten | SP 800-137 3.4, 3.5; SP 800-37 M-2 to M-5; SP 800-40; CA-5, CA-7 | eMASS REST API and the SAF `emasser` CLI (DoD); the agency's GRC tool and CDM dashboard (civilian) | What the agency's tool ingests: ask before converting | Findings to the POA&M; page 6 (held) |
| 9 | **Monitoring shown to work** | An independent check that coverage, rigor and frequency meet the strategy, with provider data folded in | SP 800-37 Appendix F (independence); SP 800-137A; NIST IR 8212 | SP 800-137A, IR 8212 (ISCMAx) | Doing this for one system rather than an organization | None |
| 10 | **Ongoing authorization** | The AO approves the transition and issues a new decision with no termination date; time- and event-driven reviews run | SP 800-37 M-6, Appendix F; A-130 4.d(3), 5.h, 5.i | SP 800-37 Rev. 2 | Short: what to bring to the AO | None |
| then | **DoD cATO**, and **the system measured like its provider** | cATO: the three competencies shown to the DoD CISO. North star: each automated evidence stream documented the way FedRAMP documents a KSI (measures, verification of the automation, validation that it works) | cATO memo and criteria; FedRAMP SDR-CSX-KSI (labelled FedRAMP's) | The cATO documents; the KSI pages | What a mission team off the approved reference designs can do | None |
| ↺ | **Review and update** | Strategy and automation revised; more subsystems phased in | SP 800-137 3.6; Appendix F phasing | | | |

**FedRAMP's methods on each stage [synthesis, decision 5].** Each path page borrows FedRAMP's way of doing that part of the work, adapted to one system and labelled as FedRAMP's, and names the KSIs whose outcomes the stage reaches. What FedRAMP publishes that the stages can follow (rules dataset 2026.11.02.01, read 2026-11-16):

| Stages | FedRAMP's method to follow | FedRAMP source |
| --- | --- | --- |
| 3, 4 (change) | Sort changes into routine recurring, adaptive and transformative, with only the last two reaching the authorizer; redeploy rather than modify | Significant Change Notification rules (SCN); Change Management KSIs (KSI-CMT) |
| 5, 8 (vulnerabilities) | Detect, evaluate and report vulnerabilities on FedRAMP's rules | Vulnerability Detection and Response (VDR) and Vulnerability Evaluation and Reporting (VER) rules; the existing findings page already reads them |
| 6 (supply chain) | Identify, review and mitigate supply chain risk persistently; validate resource integrity cryptographically | KSI-SCR-MIT, KSI-SCR-MON, KSI-SVC-VRI |
| 7 (evidence) | For each automated check, keep three things: "A machine readable output", "A human readable explanation of how the machine readable output is derived" and "The code for the automated process used to generate the machine readable output"; validate persistently, so that "the status of persistent activities will always be known" | Minimum Assessment Scope rules (MAS); the persistent-validation definition (FRD-PER) |
| 7, 8 (the record) | Document each automated evidence stream the way FedRAMP documents a KSI: the measures, verification that the automation is accurate and sufficient, validation that it works | Security Decision Record rules (SDR-CSX-KSI) |
| 8 to 10 (reporting and monitoring) | Refresh the package on a set cadence; report on a regular cycle (FedRAMP's Ongoing Certification Report, under its Collaborative Continuous Monitoring rules); keep data machine-readable against a schema | CPO and CCM rules; FedRAMP's JSON schemas |

**The quality bar.** FedRAMP's Certification Classes say what assurance each level of commitment buys: "Class C: Adequate for use in most Low or Moderate impact agency information systems and some High impact agency information systems with appropriate compensating controls"; "Class D: Adequate for use in most agency information systems regardless of the impact level". Class C is the benchmark for a Moderate system (decision 7). For example, a 20x Class C provider "MUST persistently maintain their FedRAMP Certification Package to ensure it is up to date and complete at least once every 2 weeks"; its Security Decision Record includes "All daily metric data (including status of persistent validation) up to the past year"; and Class C providers "SHOULD persistently perform vulnerability detection on all information resources that are likely to drift, at least once every 14 days". Each path page states the Class C expectation for its stage, as FedRAMP's, beside what the system's AO has agreed.

Three rules keep this honest. The requirement stays NIST's: the anchors column cites SP 800-53, SP 800-37 and the other NIST and OMB sources, and a FedRAMP rule or KSI is never presented as the requirement. Where FedRAMP's method and the system's AO differ (for example on how often evidence must refresh), the AO decides for the system; FedRAMP's practice is the model, stated as FedRAMP's. And FedRAMP writes for cloud service providers, so a page says what the method means for one system rather than restating the rule.

## 4. What's solved, by area

### Authorization and monitoring

| Source | Solves for this reader | Stops at | Status (November 2026) | Reuse |
| --- | --- | --- | --- | --- |
| SP 800-37 Rev. 2 | Task M-6 and Appendix F: conditions, phasing, triggers, significant change | No threshold for "substantial portion"; no system-team sequence | Final, December 2018 | Public domain |
| CSWP 3, Supplemental Guidance on Ongoing Authorization (2014) | Nothing now | | "Withdrawn on April 19, 2019. Superseded by SP 800-37 Rev. 2"; A-130 footnote 106 still points to it, so cite SP 800-37 instead | |
| SP 800-137; SP 800-137A; IR 8212 | Program steps and eleven automation domains (Appendix D); how to assess the program; the ISCMAx workbook | Organization level; 2011 technology | 800-137 final September 2011, no draft; 800-137A final May 2020; IR 8212 final March 2021 | Public domain |
| NIST IR 8011 Vol. 1 | Which controls can be tested automatically, from SP 800-53A objectives | Not pipeline-specific | Final June 2017; Rev. 1 initial public draft February 20, 2025 (comments closed) | Public domain |
| OMB Circular A-130 Appendix I | Ongoing authorization conditions, PCM, event-driven reauthorization, leveraged authorizations (5.j) | Policy, no method | July 2016 | Public domain |
| CISA CDM program | Where civilian agency monitoring data often lands | Agency level | Current program page | U.S. government work |
| DoD cATO memo, criteria, implementation guide | The fullest government statement of what an authorizer needs to trust a continuously changing system | DoD software factories on approved reference designs; the AWS reference design is listed as DRAFT | Memo February 2022; criteria May 2024 (Distribution A); guide March 2024 (Distribution C on the cover, also stamped cleared for open publication) | Criteria: cite and adapt with citation (owner to confirm); guide: link only until the owner decides |
| FedRAMP agency pages and rules (CCM, AGU, SDR, MAS) | What the agency does about its provider; the outcome-evidence model | Providers only for KSIs; AGU still "placeholder" in the dataset | Rules version 2026.11.02.01 (GitHub release published 2026-11-05); two RFCs close this week, so recheck before citing | No license file: cite IDs and titles as FedRAMP's |

### Pipeline and supply chain

| Source | Solves | Stops at | Status | Reuse; published 800-53 mapping |
| --- | --- | --- | --- | --- |
| SP 800-204D | What a pipeline must do for supply chain security | No levels; maps to the SSDF only (Appendix A), mentions SP 800-53 once as background | Final, February 2024; no newer 800-204 draft | Public domain; none to 800-53 |
| NSA and CISA, Defending CI/CD Environments | Threats and mitigations for the pipeline itself | 2023; no levels or evidence | June 2023, version 1.0; no newer joint CI/CD guidance found on cisa.gov (nsa.gov blocked scripted access, so check in the browser) | U.S. government work; none |
| ESF, Securing the Software Supply Chain (developers, suppliers, customers) | The customer volume is the one closest to an agency team | 2022 | August, October and November 2022; SBOM consumption added November 2023 | U.S. government work; none found |
| OWASP Top 10 CI/CD Security Risks | The pipeline as an attack surface, CICD-SEC-1 to 10 | Risks, not controls | Lab project, no version | CC BY-SA: cite IDs; none |
| SLSA | Graded build (L0 to L3) and source (L1 to L4) guarantees; provenance in in-toto format | Starts once a build exists; its guide advises going straight to the highest level the platform supports | Version 1.2, Approved (announced November 24, 2025) | Community Specification License 1.0; none |
| CISA 2026 Minimum Elements for an SBOM | What an SBOM must contain; "updates and replaces" NTIA's 2021 minimum elements | Content, not where it is made or how an agency uses it | **Final**, version 2.1, July 29, 2026 (the registry still records the August 2025 draft) | U.S. government work, TLP:CLEAR; none |
| SPDX; CycloneDX | SBOM formats | Formats | SPDX 3.0 (release 3.0.1); CycloneDX 1.7, ECMA-424 | Community Specification License; Apache-2.0 |
| Sigstore (cosign, Fulcio, Rekor); in-toto | Signing with short-lived identities and a transparency log; the attestation format | Policy; whether a public log is acceptable for agency artifacts | Sigstore: OpenSSF; in-toto: CNCF Graduated, February 10, 2025 | Apache-2.0; none |
| OpenSSF OSPS Baseline; Scorecard | The most concrete pipeline and release checks; an automated repository score (cited in SP 800-204D 5.1.2) | Written for open-source projects; levels scale with project size | OSPS v2026.08.28; Scorecard v5.6.0 | Apache-2.0; OSPS crosswalks to SP 800-161 using SP 800-53 IDs (SI-7, SR-3 to SR-7, SA-11, SA-15) |

### Evidence formats and automation

| Source | Solves | Stops at | Status | Reuse; governance |
| --- | --- | --- | --- | --- |
| OSCAL | Machine-readable catalog, profile, component definition, SSP, assessment plan and results, POA&M, and (since 1.2.0) control mapping | A format; little adoption (FedRAMP's own words) | v1.2.3, August 2026; `oscal-content` v1.6.0 (October 22, 2026); the site pins v1.5.0 | CC0 and U.S. public domain; NIST |
| FedRAMP JSON schemas | Lightweight schemas for the Security Decision Record and ten other provider artifacts; an in-browser validator | Provider artifacts | Dated 2026-06-24 | See the dataset's reuse question |
| MITRE SAF CLI, Heimdall, HDF schema | Converts many scanners (including AWS Config, Prowler, Trivy, SARIF, CycloneDX SBOMs, XCCDF) to one format; thresholds for pipeline gates; manual attestations; a CLI for the eMASS API | Says nothing about what an AO accepts; no OSCAL converter | SAF CLI 1.8.0 (November 2, 2026); Heimdall2 v2.15.0; the OASIS OHDF effort shows no activity since January 2024 | Apache-2.0; MITRE |
| ComplianceAsCode; OpenSCAP | OS and platform configuration content (SCAP, Ansible) and the scanner that runs it | OS and platform only | ComplianceAsCode v0.1.82 (quarterly); OpenSCAP 1.4.6 (October 2026). Do not repeat "NIST certified": the validation records are from 2017 | BSD-3-Clause (the landscape note said no license was asserted); LGPL-2.1 |
| CINC Auditor (and MITRE's InSpec-format profiles) | Runs the validation profiles | | Current | Apache-2.0, no EULA. Chef InSpec's supported binaries need a commercial EULA, so name CINC Auditor |
| OSCAL-COMPASS (compliance-trestle, compliance-to-policy) | Compliance as code in OSCAL; policy-engine results back to OSCAL assessment results | Assumes the team authors OSCAL | trestle v5.2.1; C2P v1.0.0 (November 10, 2026); CNCF Sandbox | Apache-2.0 |
| Open Policy Agent; Kyverno | Policy gates for infrastructure plans, admission and CI | Enforce and report; evidence only if results are kept | OPA v1.22.4, Kyverno v1.20.0; both CNCF Graduated | Apache-2.0 |
| Gemara | A model and schemas for compliance tooling | For tool builders | v1.6.0; moved to `gemaraproj/gemara`; OpenSSF Sandbox | Apache-2.0 |
| eMASS REST API | DoD's machine-readable route: test results, POA&Ms, cloud resource, container and static code scans | DoD only; no OSCAL found | Spec v3.22 (MITRE's `emass_client` copy) | Cite as MITRE's copy of the spec |

Listing a project in these catalog tables is research, not a recommendation: section 8 sets the stricter bar a tool must clear before a site page names it (decision 6), and OSCAL-COMPASS and Gemara above stay "watch only" as Sandbox projects. Not named at all [synthesis, see section 8]: Lula (one company; early; the quote "OSCAL proved too complex for most teams to work with effectively" may be cited as evidence of the difficulty), the FedRAMP 20x pilot repositories and the KSI GitHub Action (vendor-owned; two have no license), `mitre/inspec_tools` (archived) and `compliance-trestle-fedramp` (last release 2024, built for the old FedRAMP OSCAL SSP). FedRAMP's old automation site (automate.fedramp.gov) no longer resolves, and `GSA/fedramp-automation` returns 404.

### Application security and mapping

| Source | Solves | Stops at | Status | Reuse |
| --- | --- | --- | --- | --- |
| OWASP ASVS | Testable requirements for the application, by level | Application only; no NIST mapping | 5.0.0, May 30, 2025, Flagship; next is a 5.0.1 patch. Cite IDs as `v5.0.0-x.y.z`: the numbering changed from 4.0.3, which the SSDF cites | CC BY-SA |
| OWASP SAMM | Program maturity for secure software | Maturity, not evidence; SSDF uses SAMM 1.5 IDs, OpenCRE uses SAMM 2 | Model page says 2.0; data release 2.2.0 (July 6, 2026) | CC BY-SA |
| OWASP WSTG | How to test a web application (SA-11(5), SA-11(8), CA-8) | Manual method; the SSDF does not cite it | 4.2 (December 2020); 5.0 in development | CC BY-SA |
| OWASP DevSecOps Guideline; DSOMM | Pipeline stages; levelled pipeline activities (now including an "Agentic AI" dimension) | Tools and maturity, not evidence | Guideline: Incubator, unversioned (repository `OWASP/DevSecOpsGuideline`); DSOMM release v5.1.0 (September 21, 2026), though the generated model still says 5.0.2 | CC BY-SA; DSOMM data GPL-3.0 |
| OpenCRE | Links between SP 800-53, the SSDF, ASVS, SAMM, DSOMM, WSTG and others; REST API and MCP server | Base controls only (300 entries, 2 enhancements); every ASVS link points to 4.0.3; how links are made is not stated | Live | CC0 |

## 5. Gaps the site would fill (short advice only)

Each gap is something no source above publishes for this reader. The site writes short guidance for these and links everything else.

1. **The sequence for one system team** (section 3). NIST and OMB set conditions for an organization; nobody gives one team the order of work.
2. **What "a substantial portion" means for one system.** Appendix F sets automation as the feasibility test but gives no measure. Advice: start from IR 8011's testable controls and SP 800-53A objectives, agree the automated and manual split with the AO in the monitoring strategy (CA-7, S-5), and record it.
3. **Evidence per SP 800-53A objective, with freshness, coverage and retention.** Tools produce results and FedRAMP sets cadences for providers, but nothing says which output satisfies which objective for an agency system, or how fresh it must be. The six topic pages answer this per control. What's missing is a cross-cutting answer: freshness, sampling, coverage, the integrity of the evidence store, retention (AU-11, CM-3e).
4. **The step from documents and spreadsheets to the first structured evidence.** Advice: make existing evidence dated and findable; script one check the team already runs; keep its output, a short explanation and the script together; then normalize. No neutral, maintained tool covers this step.
5. **Significant change under continuous delivery for agency systems.** Appendix F leaves the criteria to the organization, and FedRAMP's Significant Change Notification rules cover providers only. The change management page covers much of this already.
6. **Folding provider evidence into the system's monitoring and inheritance records.** FedRAMP requires agencies to review Ongoing Certification Reports and drops the named CRM under the 2026 rules, without saying how a system team records either.
7. **The step before SLSA Build L1, and what provenance to keep and for how long** (SA-10, SR-4; SSDF PS.3.1).
8. **Using SBOMs.** Generating one per build and keeping it as release evidence; using suppliers' SBOMs in RA-5 and SR-3, SR-4 work. CISA's document covers content, not use.
9. **Signing choices.** Keyed or keyless signing, private or public transparency log: present as a decision for the AO and ISSO (CM-14, SI-7(15)), since no federal guidance on a public log for agency artifacts was found.
10. **The agency package format.** Tell the reader to ask what the AO's tool ingests before converting anything; OSCAL is NIST's format, FedRAMP uses its own JSON for providers, eMASS takes JSON through its API.
11. **DoD teams off the approved reference designs.** cATO assumes an approved DevSecOps platform and CSSP integration; the AWS reference design is still a draft and CSRMC has no implementation guidance.
12. **Privacy continuous monitoring.** A-130 makes PCM part of the gate; SP 800-37 Rev. 2 (footnote 148) says "Guidance on privacy continuous monitoring will be provided in future publications"; nothing is pipeline-specific.

## 6. Where DevSecOps ends and the SSDF strand begins

**Proposed line [synthesis]: the SSDF strand owns the practice; DevSecOps owns the record.** The SSDF pages cover what a producer does to the software, by SSDF task, cited to SA and SR (SSDF 1.1's SP 800-53 references run to SA and SR only). DevSecOps covers how the pipeline's output becomes evidence for the system's operational controls and the AO's decision, by control and SP 800-53A objective. Application security requirements (ASVS, WSTG) belong with the SSDF as what "well-secured" means; DevSecOps links them by name and ID. Test for a new page: organized by SSDF task and about the code, it goes in Methods; naming an assessment objective and the artifact an assessor examines, it goes in DevSecOps.

| Topic | SSDF strand (Methods) | DevSecOps |
| --- | --- | --- |
| Review, SAST, DAST, fuzzing (PW.7, PW.8) | What to test and when; SA-11 | Where the output goes: RA-5, SI-2, CA-5, CA-7 |
| Toolchain and environments (PO.3, PO.5) | The producer's practice; SA-15 | The pipeline as a boundary component: CM-8, AC-2, AC-6, IA-5 |
| Code protection, release integrity, provenance (PS.1 to PS.3) | SA-10, SR-4, SBOM practice | The artifact as evidence: signed artifacts as the change record, SI-7 integrity |
| Vulnerability response (RV.1, RV.2) | The producer's disclosure and fix process | The system owner's handling of findings in deployed software |
| Change, baselines, deployment | Nothing today | DevSecOps owns these |

**Watch.** The SSDF 1.2 initial public draft (December 17, 2025; comments closed January 30, 2026; still a draft) adds practices PO.6 and PS.4. PS.4, "Updates Are Robust and Reliable", cites CM-02, CM-03, CM-04, CM-06, CM-09, CA-06 and CA-07 (read from the draft's interleaved table columns; confirm in the final). When 1.2 is final, the SSDF pages will appear on the same CM and CA control pages as the DevSecOps pages; link across, don't merge. The 1.2 draft keeps its OWASP references at ASVS 4.0.3 and SAMM 1.5.

## 7. The control-to-KSI map

**Dataset state.** Version 2026.11.02.01, now a formal GitHub release (published 2026-11-05) with a pinned, dated download, which the registry did not record. It has 46 KSIs in 10 themes, with control IDs in this repo's slug form (`cm-3.2`). A branch with commits from 2026-11-15 restructures class handling, so the shape may change. The landscape note's CM slice is stale: the 2026-10-13 mapping update added CM-3(1), CM-3(6), CM-5(1), CM-5(5), CM-6(1), CM-6(2), CM-8(2), CM-8(4), CM-11 and CM-14 to various KSIs, so its "CM-11 and CM-14 appear under no KSI" line no longer holds.

**Reuse.** There is still no license file in the repository or any FedRAMP organization repository, and the README and AGENTS.md say nothing on reuse. GSA's website policies: "Most material on our site is free of copyright and may be copied and distributed without permission"; whether they govern fedramp.gov or the GitHub repository is unverified. 17 U.S.C. § 105(a): "Copyright protection under this title is not available for any work of the United States Government". The changelog names outside contributors, so not every word is necessarily a government work. This note draws no legal conclusion; see the open questions.

**Options.**

| Option | Needs | For | Against |
| --- | --- | --- | --- |
| (a) Build-time import, like `npm run controls`: pin a dated release, invert `controls`, show "FedRAMP KSIs that list this control" | Owner approval of a new build step and a PRD requirement; settled reuse; a pinned version and hash; a CI diff check | Exact and easy to refresh, with no judgment of ours; fits decision 5 (FedRAMP as the north star) | Reuse unsettled; schema moving; mappings changed materially in October 2026; provider measures on agency-facing pages need clear labels |
| (b) A hand-curated page | A navigation change | No build change | The CM slice went stale within a week |
| (c) Link out to FedRAMP's KSI pages, citing IDs and names, as the topic pages do now | Nothing | No reuse risk; always current | KSI to control only; no public control-to-KSI view exists from FedRAMP or NIST |

**Suggested [synthesis].** Keep (c) on pages now. Build the static prototype outside the repo from the pinned release, as the landscape note proposed. Write a requirement for (a) only after the reuse question is answered and the restructuring lands.

## 8. Naming tools: proposed criteria

**[synthesis, tightened by decision 6]** The bar is high on purpose. A reader at zero automation will adopt what the guide names, and the guide's credibility rides on it. Specifications and formats (OSCAL, SLSA, SPDX, CycloneDX, the in-toto attestation format) are lower risk than applications and are judged mainly on who publishes them and whether they are final. An application is named as "what's solved" only if all of these hold:

1. **Who stands behind it.** A government body (NIST, CISA, DoD, GSA), an FFRDC operator publishing for public release (MITRE), a foundation project at a mature tier (CNCF Graduated or Incubating, or the equivalent at OpenSSF or OWASP, such as OWASP Flagship), or a long-running community project with maintainers from more than one organization. Sandbox, Lab, Incubator and "early stage" projects, and projects owned by one company, are not named as tools; at most they are noted as "watch".
2. **Track record.** A stable release (1.0 or later) and at least two years of regular public releases.
3. **Real use.** Cited in a NIST, CISA, DoD or FedRAMP publication, used by a government program, or at a foundation tier that requires production adopters.
4. **Hygiene.** An OSI-approved license or U.S. public domain or CC0, confirmed in the LICENSE file (GitHub's metadata reported NOASSERTION for OSCAL, SAF and ComplianceAsCode, all of which are fine); no commercial EULA to run it; a published security policy for reporting vulnerabilities; not archived; a release or non-bot commit within 12 months.
5. **No red flags.** Any one rules a tool out: a repository under two years old; one main contributor; a 0.x version with breaking-change warnings; claims that outrun the code or its tests; a marketplace action or app from an unknown publisher; code that appears to be quickly generated with no review history.
6. **Needed and linked well.** It does something the page's requirement needs, and the page links its primary home, never a vendor guide.
7. **Owner review.** The PR that first names a tool lists the evidence for criteria 1 to 5, and the owner approves it before it appears on a page.

**Recheck cadence.** Tool rows every 90 days and with any PR that touches a page naming the tool; the FedRAMP rules dataset every 30 days (the registry's existing rule). A tool that fails criterion 4 at a recheck is marked "no longer maintained as of <month>" for one cycle, then removed.

**Applied provisionally** (this research checked criteria 1, 2 and 4 in part; each tool is rechecked against all seven at the PR that names it):

- **Specifications and formats, likely to clear:** OSCAL (NIST), SLSA 1.2 (approved specification), SPDX (ISO/IEC 5962 for 2.2.1) and CycloneDX (ECMA-424), the in-toto attestation format.
- **Applications likely to clear:** Open Policy Agent and Kyverno (CNCF Graduated), in-toto (CNCF Graduated), the MITRE SAF CLI and Heimdall (MITRE, approved for public release), OpenSCAP and ComplianceAsCode (ComplianceAsCode's copyright line starts in 2012, and OpenSCAP's SCAP validation records date from 2017 and earlier), OpenSSF Scorecard (cited in SP 800-204D).
- **Confirm before naming:** Sigstore (its OpenSSF maturity tier and government use were not checked), and CINC Auditor (its maintainer base was not checked; it matters only as the free runner for MITRE's InSpec-format profiles).
- **Watch only, not named:** OSCAL-COMPASS (compliance-trestle, compliance-to-policy; CNCF Sandbox), Gemara (OpenSSF Sandbox). The OSPS Baseline is a young baseline (first version February 2025), not an application: cite it as a source with its date, if at all (question 13).
- **Not named:** Lula (one company, early stage; its quote on OSCAL's difficulty may be cited), the FedRAMP 20x pilot repositories and the KSI GitHub Action (vendor-owned; two have no license), `mitre/inspec_tools` (archived), `compliance-trestle-fedramp` (last release 2024, built for the old FedRAMP OSCAL SSP).

## 9. Proposed section architecture

**[synthesis]** One sidebar section, as today, with four kinds of page. The overview and stage pages are new; the topic pages stay; page 6 gets a new scope.

1. **Overview** (`devsecops/index.mdx`, rewritten): who it is for (decision 1), the path at a glance, the three destinations, how to use the section, the chain each page follows, the source status table (DSO-06).
2. **The path**: one page per group of stages, not per stage, to keep the count small:
   - *Get ready* (stages 0 to 2): where you start, the boundary and the provider, the monitoring strategy agreed with the AO.
   - *Build the pipeline* (stages 3 and 4): version control and the pipeline as the only path.
   - *Gate and secure what ships* (stages 5 and 6): tests, scans and supply chain evidence.
   - *Generate the evidence* (stages 7 and 8): evidence that is generated, not gathered, and continuous reporting.
   - *Make the move* (stages 9 and 10): showing the monitoring works and asking the AO for ongoing authorization.
   Each page follows one shape: what changes for the team, the requirement anchors, FedRAMP's method for the stage and the KSIs it reaches, what's solved (links with status), the gap and the short advice that fills it, the evidence the stage produces, and which topic pages go deeper.
3. **What's solved**: four catalog pages, one per area in section 4, each a short table of sources with what each solves, where it stops, status with an "as of" month, and license. They link out; they do not summarize at length.
4. **Topic pages** (the existing six), placed on the path: change management (stages 3 and 4), configuration baselines as code (stages 3 and 7), findings to the POA&M (stages 5 and 8), the pipeline boundary (stages 1 and 4), platform inheritance (stage 1). **Page 6, continuous monitoring from pipeline output, becomes the capstone of stages 7 to 10:** evidence freshness, coverage, sampling, integrity and retention across controls, and how monitoring output supports the AO's ongoing authorization decision (gap 3).
5. **Destination pages**: agency ongoing authorization; DoD cATO; and "FedRAMP for a system on a certified cloud": what the team gets from and owes about its provider, and FedRAMP's methods and quality bar as the north star for the system's own practice (decision 5).
6. **Self-checks (optional, site-only)**: a short readiness list at the end of each path page, rather than a separate worksheet or a kit artifact, since decision 1 makes this a set of site materials, not a release. The amendment should settle whether any of it becomes a template.

**Boundaries.** Platform settings, including GovCloud-specific services, stay in the Phase 6 technology playbooks. Practice belongs in the SSDF strand (section 6). Method pages for SP 800-128, SP 800-137 and SP 800-40 (METH-03 batch 1, Phase 4 row 14) are the natural targets for the path's "structure" links once they exist.

## 10. What the PRD amendment needs to change

1. **Summary and Vision:** describe DevSecOps as a path from zero automation to ongoing authorization, with topic pages as its evidence layer and FedRAMP's methods and expected quality as the north star the system's practice follows (decision 5), NIST remaining the requirement.
2. **Audience:** rewrite the DevSecOps persona row: a system team on a FedRAMP-authorized cloud, starting from manual deploys, with an authorization to keep or get; not cloud service providers.
3. **DSO requirements:** rewrite DSO-01 (overview), add requirements for path pages, catalog pages and destination pages, give DSO-04 page 6 its new scope, and keep DSO-02, DSO-03, DSO-05 and DSO-06.
4. **Out of scope:** replace "recommends no products" with the tool-naming rule (decisions 2 and 6, section 8): no commercial products; open-source and government tools only when they clear the stricter bar, with the owner's review of each; keep "runs no scanners or pipelines".
5. **Copyright table:** add rows for SLSA and SPDX (Community Specification License 1.0), Sigstore, in-toto, OSPS Baseline and Scorecard (Apache-2.0), CycloneDX (Apache-2.0), ASVS, SAMM and WSTG (CC BY-SA: cite IDs only), OpenCRE (CC0: link, label as OpenCRE's), the cATO documents (Distribution A: cite and adapt with citation; the implementation guide pending), and the FedRAMP rules dataset (unchanged until reuse is settled).
6. **Content requirements:** state the SSDF and DevSecOps dividing line (section 6), and the rule for linking SSDF 1.2's PS.4 and the DevSecOps pages on shared CM controls.
7. **Success measures:** add path, catalog and destination page counts at `draft`.
8. **Phase placement:** finish the widened section inside Phase 4 (moving kit v2.1.0 later) or move it to a new phase after Phase 4. Page 6 waits either way.
9. **Upkeep:** the 90-day tool recheck, the 30-day FedRAMP recheck, and the source status table rechecked at every kit release.
10. **The control-to-KSI map:** record option (c) now and the conditions for (a).

## 11. Open questions for the owner

Grouped as structure (1 to 5), sources and scope (6 to 15), the KSI map and mappings (16 to 19), housekeeping (20 and 21), and the FedRAMP quality bar (22, mostly settled).

1. *Structure.* Accept SP 800-37 Rev. 2 Appendix F as the spine, with SP 800-137's steps inside it and the pipeline phases as the cross-axis?
2. *Structure.* Five grouped path pages, or one page per stage?
3. *Structure.* Inside Phase 4, or a new phase? Kit v2.1.0 does not depend on DevSecOps pages, so it could ship first.
4. *Structure.* Stage 0 for systems not yet authorized: link to the RMF section, or a short pre-stage?
5. *Structure.* Self-checks on path pages only, or a template in the kit?

6. *Sources and scope.* **cATO implementation guide:** its cover says Distribution C but it is stamped cleared for open publication and is public. Link only, or treat it like the evaluation criteria?
7. *Sources and scope.* **CSRMC:** describe it only as DoD's life-cycle framing that maps to the RMF steps, with an "as of" note?
8. *Sources and scope.* **DISA Cloud Computing SRG** for DoD teams on commercial cloud: in scope? Its status was not verified (the site blocked scripted access).
9. *Sources and scope.* **Privacy continuous monitoring:** part of the stage 10 gate, as A-130 requires? Where?
10. *Sources and scope.* **OSCAL framing:** present it as "the NIST format your agency's tool may ingest", not "required"?
11. *Sources and scope.* **AGU-AGC-GRC** (agency GRC tools must ingest OSCAL and JSON): leave it out of site pages while the dataset marks AGU "placeholder" (the current watch-list rule)?
12. *Sources and scope.* **Public transparency log:** present keyless public-log signing for agency artifacts at all, or as an AO decision only?
13. *Sources and scope.* **OSPS Baseline:** cite its SP 800-161 crosswalk as OSPS's mapping, or link only?
14. *Sources and scope.* **Commercial names in linked sources:** SLSA's getting-started guide and SP 800-204D's references name commercial services. Is linking such pages acceptable?
15. *Sources and scope.* **Tool bar:** adopt section 8's stricter criteria as written, or set the thresholds differently (two years of releases, a mature foundation tier, a published security policy)? And quote Lula as evidence that OSCAL is hard, or leave it out?

16. *KSI map and mappings.* **FedRAMP dataset reuse:** ask FedRAMP for a license (an issue or discussion), or rely on § 105 and GSA's general statement? If relying on them, limit reuse to IDs, names and control lists?
17. *KSI map and mappings.* **Where KSIs appear:** decision 5 makes them the target on DevSecOps path pages (labelled FedRAMP's). Should control pages also list the KSIs that cite each control, which needs option (a) or (b) in section 7?
18. *KSI map and mappings.* **OpenCRE:** link per control with a "community mapping; base controls; ASVS 4.0.3" label, or not at all? Do not use it for SR links (too coarse).
19. *KSI map and mappings.* **SSDF and DevSecOps line:** adopt "the SSDF owns the practice, DevSecOps owns the record"?

20. *Housekeeping, not a decision.* Bump `oscal-content` from v1.5.0 to v1.6.0 (October 22, 2026; patches the SP 800-53 v5.2.0 artifacts) in its own PR, checking the generated control pages.
21. *Housekeeping, not a decision.* Check in the browser: NSA's publication list (for newer CI/CD guidance), the NCCoE project page (SP 1800-44 after comments closed), the DISA SRG, OpenCRE's per-control URL pattern.
22. *FedRAMP quality bar.* Settled in the #182 review: Class C is the Moderate benchmark (decision 7). Still open: whether Low or High systems get a different bar (Class B or Class D) when those pages are written.

## Corrections to the landscape note and the registry

Found on 2026-11-16; the landscape note is left as written, as a dated record, and this list is authoritative where they differ.

- **CISA SBOM minimum elements:** final, version 2.1, July 29, 2026; it replaces NTIA's 2021 list. `docs/sources.md` recorded the August 2025 draft (no site page cites it).
- **FedRAMP and OSCAL:** OSCAL is not required of providers; RFC-0024's OSCAL deadline was a proposal (closed March 11, 2026), not a rule.
- **FedRAMP Certification Classes:** answered by the Classes page; not one-for-one with impact levels.
- **FedRAMP rules dataset:** formal GitHub releases now exist (2026.11.02.01, published 2026-11-05). The CM slice in "Idea: a control-to-KSI relationship map" is stale (section 7).
- **ComplianceAsCode:** BSD-3-Clause (the note said the license was not asserted).
- **Gemara:** moved to `gemaraproj/gemara`; OpenSSF Sandbox.
- **OASIS OHDF:** no approved specification found; call the format "the Heimdall Data Format, maintained by MITRE".
- **InSpec:** supported Chef InSpec binaries need a commercial EULA; the free runner is CINC Auditor. `mitre/inspec_tools` is archived.
- **Lula:** Lula 2 is early stage, from one company, with no commits since September 24, 2026; Lula 1 is in maintenance mode.
- **OWASP DevSecOps Guideline repository:** `OWASP/DevSecOpsGuideline`, no hyphen.
- **CSWP 3** (the 2014 ongoing authorization white paper): withdrawn April 19, 2019, superseded by SP 800-37 Rev. 2.
- **SP 1800-44:** the comment period closed November 9, 2026.
- **automate.fedramp.gov** no longer resolves; `GSA/fedramp-automation` returns 404.
