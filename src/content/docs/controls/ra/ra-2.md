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
---

<!-- nist:start -->
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
<!-- nist:end -->

<!-- guidance: write below this line -->
