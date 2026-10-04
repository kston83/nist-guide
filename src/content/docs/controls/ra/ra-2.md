---
title: 'RA-2 Security Categorization'
description: 'NIST SP 800-53 Rev. 5 control RA-2, Security Categorization: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'RA-2 Security Categorization'
  order: 2
control:
  id: RA-2
  family: RA
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 1 (0 in a baseline) |

**Related controls:** [CM-8](/controls/cm/cm-8/), [MP-4](/controls/mp/mp-4/), [PL-2](/controls/pl/pl-2/), [PL-10](/controls/pl/pl-10/), [PL-11](/controls/pl/pl-11/), [PM-7](/controls/pm/pm-7/), [RA-3](/controls/ra/ra-3/), [RA-5](/controls/ra/ra-5/), [RA-7](/controls/ra/ra-7/), [RA-8](/controls/ra/ra-8/), [SA-8](/controls/sa/sa-8/), [SC-7](/controls/sc/sc-7/), [SC-38](/controls/sc/sc-38/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Categorize the system and information it processes, stores, and transmits;
- **b.** Document the security categorization results, including supporting rationale, in the security plan for the system; and
- **c.** Verify that the authorizing official or authorizing official designated representative reviews and approves the security categorization decision.

<details>
<summary>NIST discussion</summary>

Security categories describe the potential adverse impacts or negative consequences to organizational operations, organizational assets, and individuals if organizational information and systems are compromised through a loss of confidentiality, integrity, or availability. Security categorization is also a type of asset loss characterization in systems security engineering processes that is carried out throughout the system development life cycle. Organizations can use privacy risk assessments or privacy impact assessments to better understand the potential adverse effects on individuals. CNSSI 1253 provides additional guidance on categorization for national security systems.

Organizations conduct the security categorization process as an organization-wide activity with the direct involvement of chief information officers, senior agency information security officers, senior agency officials for privacy, system owners, mission and business owners, and information owners or stewards. Organizations consider the potential adverse impacts to other organizations and, in accordance with USA PATRIOT and Homeland Security Presidential Directives, potential national-level adverse impacts.

Security categorization processes facilitate the development of inventories of information assets and, along with CM-8 , mappings to specific system components where information is processed, stored, or transmitted. The security categorization process is revisited throughout the system development life cycle to ensure that the security categories remain accurate and relevant.

</details>

## Control enhancements

<a id="ra-2.1"></a>

### RA-2(1) Impact-level Prioritization

*Baselines: Not in a baseline*

Conduct an impact-level prioritization of organizational systems to obtain additional granularity on system impact levels.

<details>
<summary>Discussion and assessment objectives for RA-2(1)</summary>

Organizations apply the "high-water mark" concept to each system categorized in accordance with FIPS 199 , resulting in systems designated as low impact, moderate impact, or high impact. Organizations that desire additional granularity in the system impact designations for risk-based decision-making, can further partition the systems into sub-categories of the initial system categorization. For example, an impact-level prioritization on a moderate-impact system can produce three new sub-categories: low-moderate systems, moderate-moderate systems, and high-moderate systems. Impact-level prioritization and the resulting sub-categories of the system give organizations an opportunity to focus their investments related to security control selection and the tailoring of control baselines in responding to identified risks. Impact-level prioritization can also be used to determine those systems that may be of heightened interest or value to adversaries or represent a critical loss to the federal enterprise, sometimes described as high value assets. For such high value assets, organizations may be more focused on complexity, aggregation, and information exchanges. Systems with high value assets can be prioritized by partitioning high-impact systems into low-high systems, moderate-high systems, and high-high systems. Alternatively, organizations can apply the guidance in CNSSI 1253 for security objective-related categorization.

Determine if an impact-level prioritization of organizational systems is conducted to obtain additional granularity on system impact levels.

**Examine:** Risk assessment policy; security and privacy planning policy and procedures; procedures addressing security categorization of organizational information and systems; security categorization documentation; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with security categorization and risk assessment responsibilities; organizational personnel with security and privacy responsibilities.

**Test:** Organizational processes for security categorization.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for RA-2</summary>

Determine if:

- **RA-02a.** the system and the information it processes, stores, and transmits are categorized;
- **RA-02b.** the security categorization results, including supporting rationale, are documented in the security plan for the system;
- **RA-02c.** the authorizing official or authorizing official designated representative reviews and approves the security categorization decision.

**Examine:** Risk assessment policy; security planning policy and procedures; procedures addressing security categorization of organizational information and systems; security categorization documentation; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with security categorization and risk assessment responsibilities; organizational personnel with security and privacy responsibilities.

**Test:** Organizational processes for security categorization.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

RA-2 asks you to categorize the system and the information it processes, stores and transmits, record the result and its rationale in the security plan, and have the authorizing official or a designated representative approve it. Categorization picks the control baseline (PL-10), so finish it and get it approved before you select controls.

**Common implementations.** The system owner and the information owners list the system's information types, rate the impact of a loss of confidentiality, integrity and availability for each, and take the highest rating for each objective as the system's rating. The highest of the three then picks the baseline, the "high-water mark" that [SP 800-53B](https://csrc.nist.gov/pubs/sp/800/53/b/upd1/final) section 2.2 describes. The [security categorization worksheet](/templates/forms/security-categorization-worksheet/) walks through each step and records the approval, and the result goes in section 6 of the [system security plan](/templates/plans/system-security-plan/).

[SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) (December 2018) sets out who does what:

- **Task C-2:** the system owner and the information owner or steward categorize the system, working with senior leaders who hold mission and risk responsibilities. They consider the security risk assessment, and the privacy risk assessment when the system processes personally identifiable information. Business impact analyses or criticality analyses are among its inputs.
- **Task C-3:** for systems that process personally identifiable information, the senior agency official for privacy reviews and approves the categorization before the authorizing official does. The authorizing official checks it against the categorizations of the organization's other systems, and can limit the tailoring allowed later (PL-11).

NIST's RA-2 discussion makes categorization an organization-wide activity. It names the chief information officer, the senior information security and privacy officials, system owners, mission and business owners, and information owners. Revisit it through the life cycle.

**Organization-defined parameters.** RA-2 has none. In the [Risk Assessment policy](/templates/policies/ra/), the system owner categorizes the system, documents the results with their rationale in the system security plan, and has the authorizing official or a designated representative approve them. The system owner also reviews the categorization whenever the system, the information it handles or its environment of operation changes significantly.

**Evidence assessors ask for.**

- The categorization worksheet, listing every information type with its ratings and the reason for each rating and for any change from a provisional rating
- The authorizing official's or designated representative's approval, dated before the baseline was selected and the plan approved
- The privacy official's review, for a system that processes personally identifiable information
- Section 6 of the system security plan, matching the worksheet
- Evidence that the categorization was reviewed after the last significant change, such as a new information type or a new interconnection

**Inheritance.** The organization usually provides the method, the information type list and the approval process as common elements. The categorization itself is always system-specific.

**Common findings.**

- No approval, or an approval dated after controls were selected and implemented.
- Missing information types, most often the system's own security, audit and administration data.
- Provisional ratings lowered with no recorded reason.
- A system that holds personally identifiable information rated low for confidentiality.
- A categorization not revisited after the system took on new data or new users.
- The worksheet, the security plan and the system inventory showing different results.

**Enhancements in the Moderate baseline.** None. [RA-2(1)](#ra-2.1) impact-level prioritization is in no baseline; SP 800-37 Rev. 2 task P-6 describes it as an optional organization-level task.

**Federal systems** (as of October 2026). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.a(2), requires agencies to categorize information and systems "in accordance with FIPS Publication 199 and NIST SP 800-60". Use [FIPS 199](https://csrc.nist.gov/pubs/fips/199/final) (February 2004) and [SP 800-60 Vol. 1 Rev. 1](https://csrc.nist.gov/pubs/sp/800/60/v1/r1/final) (August 2008), whose [Volume 2](https://csrc.nist.gov/pubs/sp/800/60/v2/r1/final) lists the information types and their provisional impact levels. NIST published an [SP 800-60 Rev. 2 initial working draft](https://csrc.nist.gov/pubs/sp/800/60/r2/iwd) on January 31, 2024; comments closed March 18, 2024, and no later draft or final has appeared. Section 4.e(7) has the senior agency official for privacy review and approve the categorization of systems that process personally identifiable information. Its footnote 86 says agencies should generally categorize those systems at the moderate or high confidentiality impact level. For national security systems, NIST's RA-2 discussion points to CNSSI 1253.
