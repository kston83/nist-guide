---
title: Scaling the program
description: Which program artifacts a small organization can merge or skip, which ones a federal information system must have, and the NIST and OMB sources for each.
guidance: draft
sidebar:
  label: Scaling guidance
  order: 6
---

The [artifact checklist](/program/checklist/) lists every document this guide has a template for. A small organization does not need them all as separate documents. This page says which ones you can merge, which ones you can skip or put off, and which ones a federal information system must have.

One rule runs through the whole page. Merging documents changes how many files you keep, not which controls you meet. Every control in your baseline still has to be implemented, or tailored out with a recorded reason, and the evidence still has to exist.

## Start with two questions

**Is it a federal information system?** SP 800-53B defines one as "an information system used or operated by an agency, a contractor of an agency, or another organization on behalf of an agency" (section 1.1, footnote 3). A contractor running a system for an agency is in scope. If the answer is yes, read [Federal systems: what you cannot skip](#federal-systems-what-you-cannot-skip) first, and treat the rest of this page as ways to merge, not to skip.

**How big is the program?** This page uses "small organization" for one with a handful of systems or fewer, a small IT team, and one or two people who hold the security and privacy roles. That definition is this guide's, not NIST's.

NIST expects organizations of this size to combine roles. SP 800-37 Rev. 2 task P-1 allows "one individual filling multiple roles", with two limits. An authorizing official cannot be the system owner or common control provider for what they authorize. Combining security and privacy roles "requires care", because the two disciplines may need different expertise.

## Merge: fewer documents, same controls

Each row says where the permission comes from. "NIST" or "OMB" means a publication says you may combine the documents. "This guide" means the publications are silent, and the merge is this guide's judgment of what an assessor would accept.

| Merge | Into | Basis |
| --- | --- | --- |
| The 20 family policies | One [Information Security and Privacy Policy](/templates/policies/consolidated/) | NIST: the discussion of each policy and procedures control, AC-1 to SR-1 (for example [AC-1](/controls/ac/ac-1/)), says the policy "can be included as part of the general security and privacy policy or be represented by multiple policies" |
| Procedures | The System Security Plan, or the plan that owns the process | NIST: the same discussions say procedures "can be documented in system security and privacy plans or in one or more separate documents" |
| Standards (the values you set for controls) | The System Security Plan or the Information Security Program Plan | NIST: SP 800-53B section 2.4 says parameter values are "documented in security and privacy program plans or system security and privacy plans, as appropriate". "Standard" as a document type is this guide's |
| System security plan and system privacy plan | One [System Security Plan](/templates/plans/system-security-plan/) | NIST and OMB: [PL-2](/controls/pl/pl-2/) discussion, SP 800-37 task S-4, SP 800-18 Rev. 2 section 2.4; OMB Circular A-130 main body section 10 (footnotes 69 and 74) and Appendix II section 5.i(3) |
| System supply chain risk management plan | A section of the System Security Plan | NIST: the [SR-2](/controls/sr/sr-2/) discussion says the plan "can either be stand-alone, or incorporated into system security and privacy plans"; SP 800-18 Rev. 2 section 2.4 agrees |
| System-level continuous monitoring strategy | A section of the System Security Plan | NIST: SP 800-37 task S-5 says it "can be included in security and privacy plans", and its approval "can be obtained in conjunction with" the plan's |
| Security (ISCM) and privacy (PCM) continuous monitoring strategies | One [Continuous Monitoring Strategy](/templates/plans/continuous-monitoring-strategy/) | OMB: A-130 Appendix I footnote 85 says they "may be consolidated into a single unified continuous monitoring strategy". The template's Part A (organization) and Part B (system) can share one document |
| Security and privacy assessment reports | One [assessment report](/templates/reports/security-and-privacy-assessment-report/) | NIST: SP 800-37 task A-4 says organizations "may develop a single, integrated security and privacy assessment report" |
| Information security and privacy program plans | Two chapters of one [Information Security Program Plan](/templates/plans/information-security-program-plan/) | This guide: the [PM-1](/controls/pm/pm-1/) and [PM-18](/controls/pm/pm-18/) discussions each allow one document or a compilation of documents, but neither says one document may serve as both. The [PM-18 page](/controls/pm/pm-18/) maps each element to a section |
| Risk Management Strategy | A chapter of the Information Security Program Plan | This guide. Keep every [PM-9](/controls/pm/pm-9/) element: risk tolerance, mitigation strategies, assessment methods, and how you monitor risk over time |
| Business impact analysis, test plan and after-action report | Appendices to the [contingency plan](/templates/plans/contingency-plan/) | This guide. Keep the test results dated and signed: they are the [CP-4](/controls/cp/cp-4/) evidence |
| Incident handling playbook | An appendix to the [Incident Response Plan](/templates/plans/incident-response-plan/) | This guide |
| Assessment plan and report | One document: the plan, then the results | This guide. The plan part is still approved by the authorizing official or a designated representative before you assess (SP 800-37 task A-2) |
| Forms and registers | One tracker: a workbook with one tab per register, or a governance, risk and compliance (GRC) tool | This guide, in line with SP 800-37 task S-4 (use automated support tools "to reduce redundancy") and task R-1 (generate the package from a tool). Candidates: risk register, POA&M, component inventory, access review record, maintenance log, media sanitization record, physical access list, visitor log, training record log |

Merged documents still need their separate approvals. A combined security and privacy plan is reviewed and approved by the privacy official before the authorizing official sees it (SP 800-37 task S-4). A combined continuous monitoring strategy needs both approvals where OMB requires them (see the federal table below).

The same holds for the two program-plan merges. The privacy chapter is the senior privacy official's to develop (OMB A-130 Appendix I, section 4.e(1)), and a senior official accountable for privacy risk approves it ([PM-18](/controls/pm/pm-18/) a.6). A Risk Management Strategy chapter keeps its owner: SP 800-37 Rev. 2 task P-2 gives it to the head of the organization, with the senior accountable official for risk management in a supporting role.

:::caution[Keep the POA&M distinct]
You can keep the POA&M in the same tracker as the risk register, but keep it as its own view that you can export. The [CA-5](/controls/ca/ca-5/) discussion says POA&Ms "are required in authorization packages and subject to federal reporting requirements established by OMB". Federal agencies must make them available to OMB, DHS, inspectors general and GAO on request (A-130 Appendix I section 4.c(15)).
:::

## Skip or defer: small non-federal organizations

If you are not running a federal system, no law requires the RMF of you. SP 800-37 Rev. 2 section 1.2 says state, local and tribal governments and private organizations "are encouraged to use these guidelines, as appropriate". SP 800-53B section 2.3 notes that small businesses "may not be large enough or sufficiently resourced" to provide everything the baselines assume, and that organizations "consider such factors in their risk-based decisions" (footnote 22).

So what you skip is your decision, recorded with a reason. The table separates what NIST's own tailoring rules support from this guide's judgment.

| Artifact | What a small organization can do | Basis |
| --- | --- | --- |
| [Remote access standard](/templates/standards/remote-access-standard/) | Skip it if there is no remote access to the system | NIST: SP 800-53B section 2.4, technology considerations: controls for a technology apply "only if those technologies are implemented" |
| [Information exchange agreement](/templates/forms/information-exchange-agreement/) | Skip it if the system exchanges no information with systems outside its boundary | NIST: scoping under SP 800-53B section 2.4; [CA-3](/controls/ca/ca-3/) applies to exchanges |
| [Physical access list](/templates/forms/physical-access-list/) and [visitor log](/templates/forms/visitor-log/) | Skip them for the data center if a provider runs every facility that houses the system's servers and storage. Record those physical controls as inherited, and keep the provider's assessment evidence. Offices where workstations or other components sit are still in scope: keep short versions of both for them, a list of who may enter and a visitor sign-in. [PE-2](/controls/pe/pe-2/) and [PE-8](/controls/pe/pe-8/) are in all three security baselines | NIST: SP 800-53B section 2.4, common controls: an inherited control need not be implemented within the system, but owners check that it gives enough protection. The [PE-3](/controls/pe/pe-3/) discussion says physical access points "can include facility access points, interior access points to systems that require supplemental access controls, or both", and that audit logs "can be procedural, automated, or some combination" |
| [Configuration Management Plan](/templates/plans/configuration-management-plan/) and [change request form](/templates/forms/change-request-form/) | Not required at Low: [CM-9](/controls/cm/cm-9/) and [CM-3](/controls/cm/cm-3/) are Moderate and High controls. At Moderate, keep one organization-wide plan with a short part for each system | NIST: the SP 800-53B baselines; the CM-9 discussion allows a plan "for the organization with subsets of the plan implemented on a system by system basis" |
| [Tabletop exercise kit](/templates/plans/tabletop-exercise-kit/) | Not required at Low: incident response testing ([IR-3](/controls/ir/ir-3/)) is a Moderate and High control. Contingency plan testing ([CP-4](/controls/cp/cp-4/)) is in all three security baselines | NIST: the SP 800-53B baselines |
| [Supplier assessment questionnaire](/templates/forms/supplier-assessment-questionnaire/) | Not required at Low ([SR-6](/controls/sr/sr-6/) is Moderate and High). Defer the stand-alone [Supply Chain Risk Management Plan](/templates/plans/supply-chain-risk-management-plan/): [SR-2](/controls/sr/sr-2/) is in all three security baselines, so write a supply chain section in the System Security Plan instead | NIST: the SP 800-53B baselines; the SR-2 discussion |
| [Privacy notice](/templates/forms/privacy-notice/) | Defer a public-facing notice only if you collect no personal information from the public or customers. Check first whether a law requires a notice to your own employees | See [Privacy notice and PIA](#privacy-notice-and-pia) below |
| [Privacy impact assessment](/templates/reports/privacy-impact-assessment/) | Defer the full assessment when no law requires one. Still run a short privacy risk check before you start processing personal information in a new way | See [Privacy notice and PIA](#privacy-notice-and-pia) below |
| [Information Security Program Plan](/templates/plans/information-security-program-plan/) and [Risk Management Strategy](/templates/plans/risk-management-strategy/) | Keep them, but short: a few pages naming who is accountable, your risk tolerance, and which controls the organization provides to every system | This guide. PM controls are "implemented at the organization level and are not directed at individual information systems" (SP 800-53B section 3.13), so no system baseline selects them |
| Decision worksheets | Use them once to set your values, then keep them as the record of those choices | This guide |

The SP 800-53B baselines are the Low, Moderate and High lists on the [baselines pages](/controls/baselines/moderate/). A control your baseline does not select is not missing, but check the scoping rules before you rely on that: some controls enter through an overlay or your own risk assessment.

**The minimum to keep.** Whatever you merge or skip, keep these, because nearly every control depends on them and an assessor asks for them first:

- a policy (the consolidated one is enough);
- a System Security Plan for each system, with its privacy, continuous monitoring and supply chain sections;
- an inventory of systems and their components;
- a risk assessment, with a risk register;
- an Incident Response Plan, and a contingency plan tested at the frequency your policy sets;
- signed Rules of Behavior and a training record for each user;
- a POA&M, kept current.

The [starter kit](/templates/starter-kit/) packages most of this list.

### Privacy notice and PIA

NIST describes what a notice and an assessment contain, not when a non-federal organization must have them. [PT-5](/controls/pt/pt-5/) and [RA-8](/controls/ra/ra-8/) are in the Privacy baseline only. The PT-5 discussion says laws "may require that privacy notices include specific elements or be provided in specific formats", and organizational policy may require a notice where no law does. The RA-8 discussion says organizations "may develop such policies in the absence of applicable laws". The E-Government Act § 208 duty to conduct a PIA is a federal agency's.

So the duty comes from the laws that apply to you. Check the list below before you defer either document. Each entry states the trigger as the law or rule states it, as of October 2026. It is not a full test of coverage: confirm with counsel.

#### Privacy notice

- **California Consumer Privacy Act (CCPA).** It applies to a "business" (Cal. Civ. Code § 1798.140(d)): a for-profit entity that does business in California, decides why and how consumers' personal information is processed, and meets one threshold. The thresholds are annual gross revenue above $25,000,000 as adjusted (the California Privacy Protection Agency lists $26,625,000 from January 1, 2025); buying, selling or sharing the personal information of 100,000 or more consumers or households; or earning half its revenue or more from selling or sharing it.
  - A "consumer" is any California resident (§ 1798.140(i)), employees included. The exemptions for employee and business-to-business data became inoperative on January 1, 2023 (§ 1798.145(m)(4) and (n)(3)).
  - A business informs consumers at or before the point of collection (§ 1798.100(a)), and keeps the § 1798.130(a)(5) disclosures in its online privacy policy (or on its website, if it has no such policy), updated at least once every 12 months.
- **FTC Act § 5.** "Unfair or deceptive acts or practices in or affecting commerce" are unlawful (15 U.S.C. § 45(a)(1)). Whatever notice you post has to match what you do.
- **HIPAA.** A covered entity provides a notice of privacy practices (45 CFR 164.520).
- **Gramm-Leach-Bliley Act.** A financial institution gives its customers a privacy notice (Regulation P, 12 CFR 1016.4, or 16 CFR part 313 for institutions under the FTC's rulemaking authority). Both rules cover only individuals who obtain financial products or services for personal, family or household purposes (12 CFR 1016.1(b); 16 CFR 313.1(b)).
- **COPPA.** An operator of a website or online service directed to children under 13, or one that knows it collects personal information from a child, posts a notice of its practices (16 CFR 312.2 and 312.3(a)).
- **GDPR.** It reaches a controller established in the EU, and one outside it that offers goods or services to people in the EU or monitors their behavior there (Article 3). The controller provides the information in Article 13 when it collects personal data from the person, and in Article 14 when it obtains the data from elsewhere.

<!-- TODO(verify): the California Online Privacy Protection Act (Bus. & Prof. Code § 22575 and following) requires an operator of a commercial website or online service that collects personally identifiable information from California residents to post a privacy policy. Not cited because the California Legislature and Attorney General sites blocked scripted access on 2026-10-16; read § 22575 and § 22577 there before adding it to the list above. -->

#### Privacy impact assessment

- **GDPR Article 35.** A controller carries out a data protection impact assessment before processing that "is likely to result in a high risk to the rights and freedoms of natural persons". Article 35(3) names three cases that always need one: automated evaluation with legal or similarly significant effects, large-scale processing of special categories or criminal-offense data, and large-scale systematic monitoring of a publicly accessible area.
- **CCPA regulations.** Since January 1, 2026, a business conducts a risk assessment before processing that presents significant risk, such as selling or sharing personal information or processing sensitive personal information (California Code of Regulations, title 11, §§ 7150(b) and 7155(a)(1)). For such processing started before that date and still running, the deadline is December 31, 2027 (§ 7155(b)). Sensitive data about employees processed solely for payroll, benefits and other listed employment purposes is exempt (§ 7150(b)(2)(A)).
- **Other state privacy laws.** For example, Virginia requires a data protection assessment for targeted advertising, selling personal data, certain profiling, processing sensitive data, and other processing with a heightened risk of harm (Va. Code § 59.1-580(A)). Its law applies to persons that do business in Virginia or target products or services to its residents, and that control or process the personal data of at least 100,000 consumers during a calendar year, or of at least 25,000 consumers while deriving over half their gross revenue from selling personal data (§ 59.1-576(A)). Check the law of each state where you do business.

Where no law requires a PIA, a short privacy risk check is still good practice. The RA-8 discussion recognizes lighter related processes, "including privacy threshold analyses". For the method, use the [NIST Privacy Framework](https://www.nist.gov/privacy-framework), Version 1.0 (January 16, 2020; Version 1.1 has been an initial public draft since April 14, 2025). Or use [NIST IR 8062](https://csrc.nist.gov/pubs/ir/8062/final) (January 2017), which SP 800-37 Rev. 2 cites on the role of context in a privacy risk model (task S-2, footnote 80). The kit's [privacy impact assessment](/templates/reports/privacy-impact-assessment/) works as the full version.

## Federal systems: what you cannot skip

A federal information system has to have each item below. The sources are law (FISMA, the Privacy Act and the E-Government Act) and OMB Circular A-130, which requires agencies to apply NIST's standards and guidelines (Appendix I, section 3.g). Where a row says documents may be combined, the combined document still needs every element and every approval.

| Required | Artifact in this kit | Source |
| --- | --- | --- |
| An agency-wide information security program, with risk-based policies and procedures | [Information Security and Privacy Policy](/templates/policies/consolidated/) or the family policies, and the procedures | 44 U.S.C. § 3554(b) and (b)(2); A-130 Appendix I, section 3.b |
| Periodic risk assessments, and an agency-wide risk management process | [Risk assessment report](/templates/reports/risk-assessment-report/), [Risk Management Strategy](/templates/plans/risk-management-strategy/) | 44 U.S.C. § 3554(b)(1); A-130 Appendix I, sections 3.a and 5.b; SP 800-37 Rev. 2 tasks P-2, P-3 and P-14, which are not marked optional |
| An information security program plan and a privacy program plan | [Information Security Program Plan](/templates/plans/information-security-program-plan/), with a privacy chapter or a separate plan | A-130 Appendix I, sections 4.c(1), 4.c(2) and 4.e(1) (the Senior Agency Official for Privacy develops the privacy program plan) |
| An inventory of major information systems, and of systems that process PII | [System inventory](/templates/forms/system-inventory/) | A-130 main body, section 5.a(1)(a); footnote 4 cites 44 U.S.C. § 3505(c) |
| Security categorization under FIPS 199 and SP 800-60 | [Security categorization worksheet](/templates/forms/security-categorization-worksheet/) | A-130 Appendix I, section 4.a(2). For a system with PII, the privacy official reviews and approves the categorization (section 4.e(7)) |
| A security plan and a privacy plan for each system, with any tailoring justified in them | [System Security Plan](/templates/plans/system-security-plan/) (one integrated plan is allowed) | 44 U.S.C. § 3554(b)(3); A-130 Appendix I, sections 4.c(8), 4.c(9) and 5.d; A-130 main body section 10, footnotes 69 and 74; SP 800-37 Rev. 2 tasks S-4 and S-6. The privacy official approves the privacy plan before authorization (section 4.e(8)) |
| Supply chain risk management plans | [Supply Chain Risk Management Plan](/templates/plans/supply-chain-risk-management-plan/), or a section of the System Security Plan | A-130 Appendix I, section 4.c(4); the SR-2 discussion allows the section |
| Control assessments before operation and periodically after; testing at least annually | [Assessment plan](/templates/plans/security-and-privacy-assessment-plan/) and [report](/templates/reports/security-and-privacy-assessment-report/) | 44 U.S.C. § 3554(b)(5); A-130 Appendix I, sections 4.c(13) and 4.c(14). Section 5.e says not every control has to be assessed every year: the continuous monitoring strategies set the annual assessment window |
| A process for remedial action, recorded in POA&Ms | [POA&M](/templates/forms/plan-of-action-and-milestones/) | 44 U.S.C. § 3554(b)(6); A-130 Appendix I, sections 4.c(15) and 4.k; SP 800-37 Rev. 2 task A-6 |
| An authorization to operate, based on an authorization package | The System Security Plan, assessment report and POA&M, with an executive summary (see the [ATO package checklist](/rmf/ato-package/)) | A-130 Appendix I, sections 4.d(1) and 4.d(2); SP 800-37 Rev. 2 task R-1 lists the package |
| Information security and privacy continuous monitoring (ISCM and PCM) strategies | [Continuous Monitoring Strategy](/templates/plans/continuous-monitoring-strategy/) (one unified strategy is allowed) | A-130 Appendix I, sections 4.d(5) to 4.d(10) and footnote 85. Section 5.k: the authorizing official approves the ISCM strategy and the privacy official the PCM strategy |
| Incident detection, reporting and response procedures | [Incident Response Plan](/templates/plans/incident-response-plan/), [incident handling playbook](/templates/procedures/incident-handling-playbook/) | 44 U.S.C. § 3554(b)(7); A-130 Appendix I, section 4.f |
| Contingency plans for information systems, tested | [Contingency plan](/templates/plans/contingency-plan/), [test plan](/templates/plans/contingency-plan-test-plan/) | 44 U.S.C. § 3554(b)(8); A-130 Appendix I, section 4.g |
| Security and privacy awareness and role-based training | [Training plan](/templates/plans/security-and-privacy-training-plan/), [training record log](/templates/forms/training-record-log/) | 44 U.S.C. § 3554(b)(4); A-130 Appendix I, sections 4.h(1) to 4.h(5) |
| Rules of behavior, read and agreed to before access | [Rules of Behavior](/templates/forms/rules-of-behavior/) | A-130 Appendix I, sections 4.h(6) and 4.h(7) |
| Authorizing official approval of connections to other systems; written agreements when sharing PII | [Information exchange agreement](/templates/forms/information-exchange-agreement/) | A-130 Appendix I, sections 4.c(16) and 3.d |
| A privacy impact assessment when the agency develops or procures IT that handles identifiable information, or starts certain new collections | [Privacy impact assessment](/templates/reports/privacy-impact-assessment/) | E-Government Act of 2002, section 208(b)(1); A-130 main body, section 5.f(1)(i), and Appendix II, section 5.e |
| A system of records notice in the Federal Register for each Privacy Act system of records, published when it is established or revised; and a Privacy Act statement for each individual asked to supply information, on the form or a separate form they can keep | A notice the agency publishes; the [privacy notice](/templates/forms/privacy-notice/) covers the statement | 5 U.S.C. § 552a(e)(4) and (e)(3), duties of an agency that maintains a system of records, defined in § 552a(a)(5); A-130 main body, section 5.f(1)(g) |

The privacy baseline itself is a starting point, not a mandate: SP 800-53B section 1.1 says it "is not mandated by law or [OMB A-130]". The duty is A-130's: select and implement privacy controls that satisfy applicable privacy requirements (Appendix I, section 4.c(6)).

Your agency, and programs such as FedRAMP and the DoD RMF, can add to this list. See [program variants](/rmf/program-variants/), and confirm with your authorizing official.

## Tailoring is not skipping

Skipping a document and tailoring out a control are different acts. Tailoring is the NIST process for adjusting a baseline: designate common controls, apply scoping, select compensating controls, set parameter values, add controls, and specify how to implement them (SP 800-53B section 2.4; SP 800-37 Rev. 2 task S-2).

Tailoring has rules that merging documents does not change:

- **Every control is accounted for.** "Every control from the selected control baseline is accounted for by the organization." A control you tailor out has its reason recorded in the security and privacy plans (SP 800-53B section 2.4).
- **No arbitrary removal.** Organizations "do not arbitrarily remove security and privacy controls from baselines"; decisions must be "defensible based on mission and business needs, a sound rationale, and explicit risk-based determinations" (same section).
- **Law and policy controls stay.** It is "inappropriate" to tailor out controls that "pertain to applicable federal legislative, regulatory, or policy requirements" (SP 800-53B section 2.4, footnote 24). Federal agencies may not change a baseline in a way that conflicts with statute or policy (A-130 Appendix I, section 5.d).
- **Compensate rather than drop.** A small organization that cannot separate duties may use "more frequent auditing, targeted role-based training, or stronger personnel screening" instead (SP 800-53B section 2.4, footnote 33). Compensating controls "are not used to avoid the need to comply with requirements" (footnote 34).
- **Scale the paperwork, not the process.** SP 800-37 Rev. 2 task S-2 says a scoping decision for a high-impact system "may necessitate greater specificity" than a similar one for a low-impact system. Section 2.2 of the same publication expects every task except those marked optional, with "significant flexibility" in how each is carried out.

An organization can also set one tailored baseline for all its systems (SP 800-37 Rev. 2 task P-4, an optional task). For a small organization with similar systems, that one decision, written once, saves repeating the tailoring rationale in every plan.

## Sources

Each source was checked on October 16, 2026, and is current as of October 2026.

- [NIST SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final), Risk Management Framework for Information Systems and Organizations (December 2018): sections 1.2 and 2.2; tasks P-1 to P-4, P-14, S-2, S-4 to S-6, A-2, A-4, A-6 and R-1.
- [NIST SP 800-53B](https://csrc.nist.gov/pubs/sp/800/53/b/upd1/final), Control Baselines for Information Systems and Organizations (September 2020, updated December 2020): sections 1.1, 2.3, 2.4 and 3.13, and the baseline tables.
- [NIST SP 800-18 Rev. 2](https://csrc.nist.gov/pubs/sp/800/18/r2/final), Developing Security, Privacy, and Cybersecurity Supply Chain Risk Management Plans for Systems (June 2026): section 2.4.
- NIST SP 800-53 Rev. 5 (release 5.2.0) control discussions for the -1 controls, CA-5, CM-9, PL-2, PM-1, PM-9, PM-18 and SR-2, as shown on this site's control pages.
- [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Managing Information as a Strategic Resource (July 2016): main body sections 5.a, 5.f and 10; Appendix I sections 3, 4 and 5; Appendix II sections 5.e and 5.i.
- [44 U.S.C. § 3554](https://www.govinfo.gov/link/uscode/44/3554?link-type=html) (FISMA), United States Code, 2024 edition: subsection (b).
- [5 U.S.C. § 552a](https://www.govinfo.gov/link/uscode/5/552a?link-type=html) (Privacy Act), United States Code, 2024 edition: subsections (a)(5), (e)(3) and (e)(4).
- [E-Government Act of 2002](https://www.congress.gov/107/plaws/publ347/PLAW-107publ347.htm) (Pub. L. 107-347), section 208(b).
- NIST SP 800-53 Rev. 5 control discussions for PE-2, PE-3, PT-5 and RA-8, as shown on this site's control pages.
- [NIST Privacy Framework](https://www.nist.gov/privacy-framework): [Version 1.0](https://csrc.nist.gov/pubs/cswp/10/nist-privacy-framework-version-10/final) (CSWP 10, final, January 16, 2020) and [Version 1.1](https://csrc.nist.gov/pubs/cswp/40/nist-privacy-framework-11/ipd) (CSWP 40, initial public draft, April 14, 2025); [NIST IR 8062](https://csrc.nist.gov/pubs/ir/8062/final) (final, January 2017).
- [California Consumer Privacy Act](https://cppa.ca.gov/regulations/), Cal. Civ. Code §§ 1798.100(a), 1798.130(a)(5), 1798.140(d) and (i), and 1798.145(m) and (n), from the California Privacy Protection Agency's text effective January 1, 2026; its monetary threshold page (effective January 1, 2025); and its regulations, California Code of Regulations, title 11, §§ 7150 and 7155, approved September 22, 2025 and effective January 1, 2026.
- [15 U.S.C. § 45](https://www.govinfo.gov/link/uscode/15/45?link-type=html) (FTC Act § 5), United States Code, 2024 edition: subsection (a)(1).
- [eCFR](https://www.ecfr.gov/), current through October 14, 2026: [45 CFR 164.520](https://www.ecfr.gov/current/title-45/section-164.520) (HIPAA notice of privacy practices); [12 CFR 1016.1 and 1016.4](https://www.ecfr.gov/current/title-12/part-1016) (Regulation P); [16 CFR 313.1](https://www.ecfr.gov/current/title-16/part-313) (FTC privacy rule); [16 CFR 312.2 and 312.3](https://www.ecfr.gov/current/title-16/part-312) (COPPA rule).
- [Regulation (EU) 2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng) (GDPR), Official Journal L 119, 4 May 2016: Articles 3, 13(1), 14(1) and 35(1) and (3). The EU Publications Office lists no consolidated version later than 4 May 2016.
- [Code of Virginia §§ 59.1-576 and 59.1-580](https://law.lis.virginia.gov/vacode/title59.1/chapter53/section59.1-580/) (Consumer Data Protection Act).
