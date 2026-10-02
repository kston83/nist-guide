---
title: Supplier Assessment Questionnaire
type: form
description: The assessment of one supplier and the products or services it provides, before award or renewal and at each review after that, with the organization's scoping and criticality answers, the supplier's questionnaire, the organization's own research with its sources, a rating against the same core risk factors for every supplier, and the decision, with a register of every supplier assessment, as SP 800-53 SR-6 requires.
controls: [sr-6, sr-5, ra-3.1]
status: draft
stage: mature
typical:
  sr-06_odp: 'before each contract award or renewal, and annually for suppliers of critical components and services'
---

:::guidance
Use one assessment for each supplier and the products or services it provides to the organization: a hardware or software vendor, a developer, an integrator, a reseller, or a service provider. NIST's SR-6 discussion says a supplier review covers the supplier's security and supply chain risk management processes, its foreign ownership, control or influence (FOCI), and its ability to assess its own second- and third-tier suppliers, and considers documented processes and controls, all-source intelligence and publicly available information. [NIST SP 800-161 Rev. 1](https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final), Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations (May 2022, updated November 1, 2024; current as of October 2026), adds that assessments apply a consistent set of core factors and criteria, so suppliers can be compared with each other and over time, and that the sources of information are documented (Appendix A, SR-6). Its Appendix D.4 is a sample supply chain risk assessment, a toolbox of questions to choose from, with five steps: information gathering and scoping, threat analysis, vulnerability analysis, impact analysis and risk response analysis. Its Table 26, the Supply Chain Risk Management Assessment Scoping Questionnaire, groups questions by who answers them, the acquirer, the supplier or the manufacturer; NIST added a fillable spreadsheet version of Table 26 to the publication's page on December 2, 2025.

This form follows those steps. Part A is answered by the organization and sets the supplier's criticality; Part B is the questionnaire the supplier completes; Part C is the organization's own research, with a source for every finding; Part D rates the same core risk factors for every supplier and combines them into a risk level; Part E records the responses and the decision; Part F sets the next review. Questionnaire answers alone are not an assessment: assessors expect the organization to check them. For a cloud or other external service, complete the [external service review](/templates/forms/external-service-review/) (SA-9) as well, and use the provider's independent attestation as evidence in Part C. Each completed assessment is an attachment to the [Supply Chain Risk Management Plan](/templates/plans/supply-chain-risk-management-plan/) of every system that relies on the supplier. The register at the end lists every supplier assessment and when it is next due.
:::

| Assessment ID | Assessment type | Supplier | Products or services assessed | Assessor | Date completed | Next assessment due |
| --- | --- | --- | --- | --- | --- | --- |
| {{fill:unique ID, as in the register}} | {{fill:initial (before award), renewal, annual, or triggered, with the trigger}} | {{fill:supplier legal name}} | {{fill:products or services, with versions or part numbers}} | {{fill:name and title}} | {{fill:date}} | {{fill:date}} |

- The {{org:ciso}}, through the supply chain risk management team, shall assess and review the supply chain risks of each supplier, and of the systems, components or services it provides, {{param:sr-06_odp}}. (SR-6)
- Every assessment shall rate all the core risk factors in Part D, and record the source of each finding. (SR-6)

## Part A. Scope and criticality (completed by the organization)

### A1. Request

| Item | Response |
| --- | --- |
| Requested by | {{fill:name, title and organizational unit}} |
| Purpose of the assessment | {{fill:for example a new purchase, a contract renewal, a supplier change, or a review after a notification}} |
| Systems that use or will use the product or service | {{fill:system names and identifiers}} |
| Description of the product or service, and how it will be used | {{fill:description}} |
| Product or service type | {{fill:hardware, software, firmware, cloud or other external service, development, integration, maintenance or disposal service}} |
| Where it sits in the system | {{fill:for example inside the authorization boundary, at the boundary, or an external service the system connects to}} |
| Contract, solicitation or agreement | {{fill:number, value and term, or "not yet awarded"}} |
| Point in the life cycle | {{fill:for example market research, source selection, before award, operational use, renewal}} |

### A2. Criticality

| # | Question | Answer |
| --- | --- | --- |
| A2.1 | Does the product or service perform a security function, such as authentication, encryption, logging or boundary protection? If so, which? | {{fill:answer}} |
| A2.2 | Will it have privileged or administrative access to the organization's networks, operational technology or sensitive platforms? | {{fill:answer}} |
| A2.3 | Could its compromise or failure cause a system failure or serious degradation of a mission or business function? | {{fill:answer}} |
| A2.4 | If it failed or were compromised, is there an independent, reliable way to keep the function going? | {{fill:answer}} |
| A2.5 | Will it store, process or transmit sensitive information, such as personal, health or payment information, or have access to systems that do? | {{fill:answer}} |
| A2.6 | Will it connect to a platform the organization provides to its customers or the public? | {{fill:answer}} |
| A2.7 | Will the supplier's staff need physical access to the organization's facilities, or remote access to its systems? | {{fill:answer}} |
| A2.8 | How widely is, or will, the product or service be used across the organization? | {{fill:answer}} |
| A2.9 | Is it available from other suppliers, and what would switching cost in money and time? Is it single-source? | {{fill:answer}} |
| A2.10 | Does the organization keep spares or a reserve, and how well could it obtain the product or service during a major disruption? | {{fill:answer}} |
| A2.11 | Is it made or developed in a location the organization considers a geopolitical risk? | {{fill:answer}} |
| A2.12 | Is it fit for purpose, able to meet the required objectives and service levels? | {{fill:answer}} |

Criticality: {{fill:critical, if the criticality analysis (RA-9) identifies the product or service as critical or if A2.1 to A2.3 show it is; otherwise not critical}}.

Assessment depth: {{fill:full, for a critical product or service, or a supplier of one; standard, for any other}}.

:::guidance
SP 800-161 Rev. 1 Appendix D.4 says the organization weighs the priority of each assessment in deciding how rigorous it is. A full assessment uses every part of this form and verifies the supplier's key answers with evidence. A standard assessment still rates every core factor in Part D, but may rely on a shorter questionnaire (the sections of Part B marked as core) and on public sources for the rest. If a standard assessment finds a high concern, complete the full assessment.
:::

## Part B. Supplier questionnaire (completed by the supplier)

:::guidance
Send Part B to the supplier with the date it is due, and tell the supplier how its answers will be protected. Ask for evidence wherever the question says so; an answer with no evidence is rated with low confidence in Part D. Sections B1, B2, B3 and B6 are core and go to every supplier; B4 applies to software, firmware and products with code, and B5 to hardware and anything shipped.
:::

Supplier contact for this questionnaire: {{fill:name, title, business email and phone}}.

### B1. Company and ownership (core)

| # | Question | Supplier's answer | Evidence provided |
| --- | --- | --- | --- |
| B1.1 | Give your legal name, any other names you trade under, your parent company and your place of incorporation. | {{fill:answer}} | {{fill:evidence}} |
| B1.2 | Who owns or controls your company, directly or indirectly? Is any owner a foreign government or controlled by one? | {{fill:answer}} | {{fill:evidence}} |
| B1.3 | Where are your headquarters and the facilities that research, develop, manufacture, test, package, distribute or support the product or service? | {{fill:answer}} | {{fill:evidence}} |
| B1.4 | Do the laws of any country where you operate require you to share technology or data with that country's government? | {{fill:answer}} | {{fill:evidence}} |
| B1.5 | Do any of your officers, directors, staff or contractors have personal or professional ties to a foreign government? | {{fill:answer}} | {{fill:evidence}} |
| B1.6 | Has your company been acquired, merged or significantly restructured in the last three years, or is such a change pending? | {{fill:answer}} | {{fill:evidence}} |
| B1.7 | In the last three years, have you been subject to fines, sanctions, debarment, or litigation related to the product or service, its security or its delivery? | {{fill:answer}} | {{fill:evidence}} |

### B2. Supply chain risk management (core)

| # | Question | Supplier's answer | Evidence provided |
| --- | --- | --- | --- |
| B2.1 | Do you have a documented supply chain risk management program, with policies and procedures? | {{fill:answer}} | {{fill:evidence}} |
| B2.2 | Have you identified your own critical suppliers for the product or service? How do you assess and monitor them and their suppliers? | {{fill:answer}} | {{fill:evidence}} |
| B2.3 | Can you list the sources of the hardware, software and services you use to provide the product or service, including distributors? | {{fill:answer}} | {{fill:evidence}} |
| B2.4 | Do you pass security and supply chain requirements down to your subcontractors and suppliers in your contracts with them? | {{fill:answer}} | {{fill:evidence}} |
| B2.5 | Where will replacement components come from during the contract? | {{fill:answer}} | {{fill:evidence}} |
| B2.6 | How do you make sure none of your suppliers or third-party components is on a list of prohibited sources or products? | {{fill:answer}} | {{fill:evidence}} |

### B3. Security program and personnel (core)

| # | Question | Supplier's answer | Evidence provided |
| --- | --- | --- | --- |
| B3.1 | Which security framework or standard does your program follow, and what independent assessments, audits or certifications cover the product or service? Give the scope and period of each. | {{fill:answer}} | {{fill:evidence}} |
| B3.2 | Have you had a security incident or breach in the last three years that affected customers or the product or service? How were customers told? | {{fill:answer}} | {{fill:evidence}} |
| B3.3 | How do you vet staff who work on the product or service, or on the organization's account, and do you have an insider threat program? | {{fill:answer}} | {{fill:evidence}} |
| B3.4 | Do your staff or your suppliers access customer or production environments remotely? How is that access controlled and logged? | {{fill:answer}} | {{fill:evidence}} |
| B3.5 | Do your staff receive security training, including role-based training for developers and administrators? | {{fill:answer}} | {{fill:evidence}} |

### B4. Product integrity and secure development

| # | Question | Supplier's answer | Evidence provided |
| --- | --- | --- | --- |
| B4.1 | Which secure development practices or framework do you follow, for example the NIST Secure Software Development Framework (SP 800-218)? | {{fill:answer}} | {{fill:evidence}} |
| B4.2 | How do you protect your development and build environments and tools from tampering? | {{fill:answer}} | {{fill:evidence}} |
| B4.3 | How do you select, check and keep track of open-source and third-party components before and after you use them? | {{fill:answer}} | {{fill:evidence}} |
| B4.4 | Can you provide a software bill of materials, or for hardware a bill of materials covering logic-bearing parts and firmware? | {{fill:answer}} | {{fill:evidence}} |
| B4.5 | Are releases, updates and firmware digitally signed, or published with hashes customers can verify? | {{fill:answer}} | {{fill:evidence}} |
| B4.6 | How do you receive, prioritize and fix reported vulnerabilities, and in what time frames? Do you publish a vulnerability disclosure policy? | {{fill:answer}} | {{fill:evidence}} |
| B4.7 | Do you run a product security incident response team, and how are customers told when a product they use is affected? | {{fill:answer}} | {{fill:evidence}} |
| B4.8 | Until what date will the product be supported with security updates? | {{fill:answer}} | {{fill:evidence}} |
| B4.9 | If the product uses cryptography, are its modules validated under the FIPS 140 standard? Give the certificate numbers. | {{fill:answer}} | {{fill:evidence}} |

### B5. Logistics, delivery and counterfeit prevention

| # | Question | Supplier's answer | Evidence provided |
| --- | --- | --- | --- |
| B5.1 | Do you buy hardware only from original manufacturers or their authorized distributors or resellers? | {{fill:answer}} | {{fill:evidence}} |
| B5.2 | What controls do you have to detect and prevent counterfeit, tampered or nonconforming parts, and do you report the ones you find? | {{fill:answer}} | {{fill:evidence}} |
| B5.3 | Can you trace part numbers and serial numbers back to their manufacturers? | {{fill:answer}} | {{fill:evidence}} |
| B5.4 | How are finished products stored and protected from tampering before shipment, and is inventory inspected periodically? | {{fill:answer}} | {{fill:evidence}} |
| B5.5 | Do you ship in tamper-evident packaging, with tracked delivery and a documented chain of custody? | {{fill:answer}} | {{fill:evidence}} |
| B5.6 | How do you destroy scrap, rejected and unused parts so they cannot re-enter the supply chain? | {{fill:answer}} | {{fill:evidence}} |
| B5.7 | Have you analyzed events, natural or human-made, that could interrupt your supply, and what are your continuity arrangements? | {{fill:answer}} | {{fill:evidence}} |

### B6. Notification and transparency (core)

| # | Question | Supplier's answer | Evidence provided |
| --- | --- | --- | --- |
| B6.1 | Will you notify the organization of a compromise or suspected compromise in your supply chain that may affect the product or service, and how quickly? | {{fill:answer}} | {{fill:evidence}} |
| B6.2 | Will you share the results of independent assessments or audits of the product, service, or your development or manufacturing processes? | {{fill:answer}} | {{fill:evidence}} |
| B6.3 | Do your agreements with your own suppliers require them to notify you of compromises? | {{fill:answer}} | {{fill:evidence}} |
| B6.4 | Who is your contact for supply chain and security notices, and how is it kept current? | {{fill:answer}} | {{fill:evidence}} |

### B7. Supplier attestation

The answers in Part B are accurate and complete to the best of my knowledge, and the supplier will tell {{org:name}} of any material change to them during the contract.

| Name | Title | Signature | Date |
| --- | --- | --- | --- |
| {{fill:name}} | {{fill:title}} | | {{fill:date}} |

## Part C. Research and verification (completed by the organization)

| # | Check | Sources used | Date checked | Finding | Confidence (high, medium or low) |
| --- | --- | --- | --- | --- | --- |
| C1 | Ownership, corporate family and key leadership, compared with B1 | {{fill:for example business registries, public filings, commercial company data}} | {{fill:date}} | {{fill:finding}} | {{fill:confidence}} |
| C2 | Indicators of foreign ownership, control or influence | {{fill:sources}} | {{fill:date}} | {{fill:finding}} | {{fill:confidence}} |
| C3 | Sanctions, exclusion and prohibited-source lists that apply to the organization | {{fill:the lists checked}} | {{fill:date}} | {{fill:finding}} | {{fill:confidence}} |
| C4 | Litigation, fines, regulatory actions and fraud | {{fill:sources}} | {{fill:date}} | {{fill:finding}} | {{fill:confidence}} |
| C5 | Breaches, incidents and intellectual property theft involving the supplier | {{fill:for example news, regulator disclosures, threat intelligence}} | {{fill:date}} | {{fill:finding}} | {{fill:confidence}} |
| C6 | Known vulnerabilities in the products, and how fast the supplier fixed past ones | {{fill:for example the National Vulnerability Database, CISA's Known Exploited Vulnerabilities Catalog, the supplier's advisories}} | {{fill:date}} | {{fill:finding}} | {{fill:confidence}} |
| C7 | Financial health and stability | {{fill:sources}} | {{fill:date}} | {{fill:finding}} | {{fill:confidence}} |
| C8 | Quality and past performance: recalls, complaints, the organization's own experience | {{fill:sources}} | {{fill:date}} | {{fill:finding}} | {{fill:confidence}} |
| C9 | Reports of counterfeit or nonconforming products associated with the supplier | {{fill:sources}} | {{fill:date}} | {{fill:finding}} | {{fill:confidence}} |
| C10 | The supplier's independent assessments and certifications: current, from a credible assessor, covering the product or service used, and their exceptions | {{fill:the reports reviewed}} | {{fill:date}} | {{fill:finding}} | {{fill:confidence}} |
| C11 | Supplier answers checked against evidence: which answers, and what was seen | {{fill:the evidence reviewed}} | {{fill:date}} | {{fill:finding}} | {{fill:confidence}} |

- The assessor shall check, against evidence or an independent source, every supplier answer that bears on a factor rated a high concern, and for a full assessment the answers to B1.2, B2.2, B3.1, B3.2 and B6.1 at least. (SR-6)
- Each finding shall record the source it came from and the date it was checked; a factor for which nothing could be found shall be recorded as such, not left blank. (SR-6)

:::guidance
SP 800-161 Rev. 1 Appendix E.3.1 says information quality matters: it should be timely, relevant, unbiased, sufficiently complete and from credible sources, and the confidence in each finding should be recorded. Keep a copy or a durable reference of each source behind a finding that affects the decision, since a source may change or disappear.
:::

## Part D. Risk analysis (completed by the organization)

### D1. Core risk factors

Rate every factor for every supplier, using the answers in Parts A and B and the findings in Part C.

| Factor | Considers | Questions and checks | Concern (none found, low, moderate or high) | Confidence | Notes |
| --- | --- | --- | --- | --- | --- |
| 1. Criticality and reliance | What the product or service does for the system, alternatives, single source, reserves | A2.1 to A2.4, A2.8 to A2.10 | {{fill:concern}} | {{fill:confidence}} | {{fill:notes}} |
| 2. Information and access | Sensitive information, privileged, remote and physical access, connections | A2.5 to A2.7, B3.4 | {{fill:concern}} | {{fill:confidence}} | {{fill:notes}} |
| 3. Ownership, control or influence | Owners, foreign government control or influence, legal duties to share data, ties of key people | B1.1 to B1.6, C1, C2 | {{fill:concern}} | {{fill:confidence}} | {{fill:notes}} |
| 4. Geography and location | Where the work is done; instability, natural hazards and trade route disruption there | A2.11, B1.3, B5.7 | {{fill:concern}} | {{fill:confidence}} | {{fill:notes}} |
| 5. Company stability and past performance | Financial health, restructuring, quality, recalls, the organization's experience | B1.6, C7, C8 | {{fill:concern}} | {{fill:confidence}} | {{fill:notes}} |
| 6. Compliance and legal | Fines, sanctions, exclusions, litigation, fraud | B1.7, C3, C4 | {{fill:concern}} | {{fill:confidence}} | {{fill:notes}} |
| 7. Security and supply chain risk management processes | The supplier's program, independent assessments, personnel security, training | B2.1, B3.1, B3.3, B3.5, C10 | {{fill:concern}} | {{fill:confidence}} | {{fill:notes}} |
| 8. Sub-tier suppliers | The supplier's ability to identify and assess its own second- and third-tier suppliers, and flow-down | B2.2 to B2.6 | {{fill:concern}} | {{fill:confidence}} | {{fill:notes}} |
| 9. Cybersecurity history | Incidents, breaches and theft at the supplier | B3.2, C5 | {{fill:concern}} | {{fill:confidence}} | {{fill:notes}} |
| 10. Product integrity and vulnerability handling | Secure development, build protection, bills of materials, signing, vulnerability response, support period | B4.1 to B4.9, C6 | {{fill:concern, or "not applicable" with the reason}} | {{fill:confidence}} | {{fill:notes}} |
| 11. Counterfeit and nonconforming products, and delivery | Authorized sources, counterfeit controls, traceability, packaging, chain of custody, scrap | B5.1 to B5.6, C9 | {{fill:concern, or "not applicable" with the reason}} | {{fill:confidence}} | {{fill:notes}} |
| 12. Notification and transparency | Compromise notice, sharing of assessment results, notice flowed down | B6.1 to B6.4 | {{fill:concern}} | {{fill:confidence}} | {{fill:notes}} |

:::guidance
Factors 3, 7 and 8 are the review topics NIST's SR-6 discussion names; factor 12 supports the notification agreements of SR-8; factor 11 supports SR-11. The other factors follow the baseline risk factors in SP 800-161 Rev. 1 Appendix E.2.2 and the topics of its Table 26. Define concern levels once, in the supply chain risk management team's procedure, so different assessors rate alike: for example, "high" where a finding shows the supplier cannot or will not protect the product or service, or where an owner or a law gives a hostile party control over it. A high concern on one factor does not by itself make the supplier unacceptable; SP 800-161 Rev. 1 (Appendix E.2.2) cautions that the combination of findings, and the mitigations available, decide the risk.
:::

### D2. Overall risk

| Element | Level | Basis |
| --- | --- | --- |
| Threat: an adversary's capability and intent to exploit the supplier, product or service, or a non-adversarial threat to it | {{fill:critical, high, moderate or low}} | {{fill:the findings that set the level}} |
| Vulnerability: how exposed and how easily exploited the supplier's or product's weaknesses are | {{fill:critical, high, moderate or low}} | {{fill:the findings that set the level}} |
| Impact: the harm to the organization if the product or service fails to perform as designed or is compromised | {{fill:critical, high, moderate or low}} | {{fill:criticality from Part A}} |
| Likelihood, from threat and vulnerability | {{fill:on the organization's likelihood scale}} | {{fill:basis}} |
| Risk, from likelihood and impact | {{fill:on the organization's risk scale}} | {{fill:basis}} |

:::guidance
The threat, vulnerability and impact analyses, each rated critical, high, moderate or low, follow SP 800-161 Rev. 1 Appendix D.4.1.4 to D.4.1.6, and D.4.1.7 combines threat and vulnerability into likelihood, then likelihood and impact into risk. Use the likelihood and risk scales of the organization's risk management strategy, as the [risk register](/templates/forms/risk-register/) does, so supplier risks can be compared with other risks.
:::

## Part E. Risk response and decision

| Risk | Rating | Response (accept, mitigate, transfer or avoid) | Measures | Owner | Tracked in |
| --- | --- | --- | --- | --- | --- |
| {{fill:risk}} | {{fill:rating}} | {{fill:response}} | {{fill:for example added contract terms (SR-5), notification terms (SR-8), inspection before use (SR-10), a second source, or limits on the supplier's access}} | {{fill:role}} | {{fill:risk register or POA&M item}} |

Decision: {{fill:proceed; proceed with the conditions listed; or do not proceed}}.

Conditions: {{fill:conditions, or "none"}}.

- A contract for a critical component or service shall not be awarded or renewed until this assessment is complete and each risk found is accepted or has a planned response. (SR-6)
- A risk that remains above the supply chain risk tolerance of a system that relies on the supplier shall be accepted by that system's authorizing official before award or renewal, and recorded in the system's Supply Chain Risk Management Plan. (SR-6, SR-2a)
- The results shall be shared with other organizations only as applicable rules, policies, agreements or contracts allow or require. (SR-6)

| Name | Role | Decision or recommendation | Signature | Date |
| --- | --- | --- | --- | --- |
| {{fill:name}} | Assessor, supply chain risk management team | {{fill:recommendation}} | | {{fill:date}} |
| {{fill:name}} | Lead of the supply chain risk management team | {{fill:recommendation}} | | {{fill:date}} |
| {{fill:name}} | System owner of each system that relies on the supplier | {{fill:decision}} | | {{fill:date}} |
| {{fill:name}} | Authorizing official, where a risk above tolerance is accepted | {{fill:decision}} | | {{fill:date}} |

## Part F. Monitoring and reassessment

- The supply chain risk management team shall reassess the supplier {{param:sr-06_odp}}, and when any of these occurs: a change in the supplier's ownership or control, a merger or acquisition, a move of manufacturing, development or support to another country, a compromise notification or a breach at the supplier, a counterfeit or tampered component traced to it, a new sanctions or exclusion listing, or a change in what the organization buys from it. (SR-6)
- For suppliers of critical components and services, the team shall monitor publicly available information {{fill:frequency, for example monthly}} for indications of stolen information, poor development or quality control practices, information spillage or counterfeits, and record what it found. (SR-6)

| Monitoring activity | Frequency | Who | Last done | Result |
| --- | --- | --- | --- | --- |
| Public-source monitoring of the supplier | {{fill:frequency}} | {{fill:role}} | {{fill:date}} | {{fill:result}} |
| Review of new independent assessments from the supplier | {{fill:for example when issued}} | {{fill:role}} | {{fill:date}} | {{fill:result}} |
| Check against sanctions and exclusion lists | {{fill:for example before each order and quarterly}} | {{fill:role}} | {{fill:date}} | {{fill:result}} |

The completed assessment, the supplier's answers and the evidence are kept for {{fill:retention period, for example the life of the contract plus three years}}, with access limited to {{fill:roles}}, since they may contain the supplier's proprietary information.

:::federal
[41 U.S.C. § 1326](https://www.govinfo.gov/link/uscode/41/1326?link-type=html)(a) makes the head of each executive agency responsible for assessing the supply chain risk posed by the acquisition and use of covered articles, and for prioritizing those assessments based on the criticality of the mission, system, component, service or asset. [NIST SP 800-161 Rev. 1](https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final), Appendix E, gives federal agencies baseline risk factors (Table 28 in section E.2.2) to address, at a minimum, for assessments of critical sources and critical covered articles, and lists federal prohibition and restriction lists to examine as part of the assessment, such as the Treasury sanctions lists and the exclusions in the System for Award Management. Section E.2.1 says determining assessment priorities, evaluating impact and making risk response decisions are inherently governmental functions that cannot be outsourced, although a qualified, vetted third party may support research and documentation. Section E.2.3 sets a five-level supply chain risk severity schema, and section E.2.4 says risks at Level 3 and above are "substantial risk" under the Federal Acquisition Security Council's rule and require sharing with the Council through its information sharing agency. Under [41 CFR 201-1.201(b)](https://www.ecfr.gov/current/title-41/section-201-1.201), an executive agency must expeditiously submit supply chain risk information to that agency when the Council requests it, or when the agency determines there is a reasonable basis to conclude that a substantial supply chain risk exists in connection with a source or covered article. Section E.3.1 (Table 30) lists the minimum content of an assessment record. Statute checked in the United States Code, 2024 edition, and regulation in the eCFR, as of October 2026.

- Assessments of critical sources and critical covered articles shall address every baseline risk factor in SP 800-161 Rev. 1, Appendix E, Table 28, recording where each is covered in Part D and any factor added. (SR-6)
- The assessor shall check the supplier and the covered article against the federal prohibition and restriction lists that SP 800-161 Rev. 1, Appendix E, section E.2.2 names, and any other federal restriction that applies, and record the result in check C3. (SR-6)
- Agency officials shall set assessment priorities, evaluate impact and make each risk response decision; a contractor may support research and documentation but shall not make those decisions. (SR-6)
- The assessor shall assign each assessed risk a level of the supply chain risk severity schema in SP 800-161 Rev. 1, Appendix E, section E.2.3, and record the level and the reason in Part D. (SR-6)
- When an assessment finds a reasonable basis to conclude that a substantial supply chain risk exists, the {{org:ciso}} shall submit the relevant supply chain risk information to the Federal Acquisition Security Council's information sharing agency, as 41 CFR 201-1.201(b) requires, and escalate the assessment to senior agency officials and legal counsel. (SR-6)
- The assessment record shall include at least the content in SP 800-161 Rev. 1, Appendix E, Table 30, including the methodology used and any deviation from it, the data sources, the confidence in the findings, and review and clearance by senior leadership and legal counsel for a risk assessed as substantial. (SR-6)

| SP 800-161 Rev. 1 Table 28 baseline risk factor | Where this form covers it |
| --- | --- |
| Purpose | Part A1 |
| Criticality | Part A2; factor 1 |
| Information and data | A2.5; factor 2 |
| Reliance on the covered article or source | A2.8 to A2.10; factor 1 |
| User or operational environment | A1; the system security plan and the Supply Chain Risk Management Plan |
| External agency interdependencies | {{fill:where recorded, for example A1 and the information exchange agreements}} |
| Functionality, features and components of the covered article | Factor 10 |
| Company (source) information | Factor 5 |
| Quality and past performance | Factor 5 |
| Personnel | B3.3; factor 7 |
| Physical | B5.4, B5.7; factor 4 |
| Geopolitical | Factor 4 |
| Foreign ownership, control or influence | Factor 3 |
| Compliance and legal | Factor 6 |
| Fraud, corruption, sanctions and alignment with government interests | C3, C4; factor 6 |
| Cybersecurity | Factor 9 |
| Counterfeit and non-conforming products | Factor 11 |
| Supply chain relationships, visibility and controls | Factor 8 |

:::

## Register

| Assessment ID | Supplier | Products or services | Systems that rely on it | Criticality | Assessment type | Date completed | Overall risk | Decision | Open risks and where tracked | Next assessment due | Assessor |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:ID}} | {{fill:supplier}} | {{fill:products or services}} | {{fill:systems}} | {{fill:critical or not critical}} | {{fill:initial, renewal, annual or triggered}} | {{fill:date}} | {{fill:risk level}} | {{fill:proceed, proceed with conditions, or do not proceed}} | {{fill:number, with risk register or POA&M items}} | {{fill:date}} | {{fill:name}} |
