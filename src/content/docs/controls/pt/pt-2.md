---
title: 'PT-2 Authority to Process Personally Identifiable Information'
description: 'NIST SP 800-53 Rev. 5 control PT-2, Authority to Process Personally Identifiable Information: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PT-2 Authority to Process Personally Identifiable Information'
  order: 2
control:
  id: PT-2
  family: PT
  baselines: [Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Privacy | Organization | 2 (0 in a baseline) |

**Related controls:** [AC-2](/controls/ac/ac-2/), [AC-3](/controls/ac/ac-3/), [CM-13](/controls/cm/cm-13/), [IR-9](/controls/ir/ir-9/), [PM-9](/controls/pm/pm-9/), [PM-24](/controls/pm/pm-24/), [PT-1](/controls/pt/pt-1/), [PT-3](/controls/pt/pt-3/), [PT-5](/controls/pt/pt-5/), [PT-6](/controls/pt/pt-6/), [RA-3](/controls/ra/ra-3/), [RA-8](/controls/ra/ra-8/), [SI-12](/controls/si/si-12/), [SI-18](/controls/si/si-18/)

## Control statement

- **a.** Determine and document the [Assignment: organization-defined authority] that permits the [Assignment: organization-defined processing] of personally identifiable information; and
- **b.** Restrict the [Assignment: organization-defined processing] of personally identifiable information to only that which is authorized.

<details>
<summary>NIST discussion</summary>

The processing of personally identifiable information is an operation or set of operations that the information system or organization performs with respect to personally identifiable information across the information life cycle. Processing includes but is not limited to creation, collection, use, processing, storage, maintenance, dissemination, disclosure, and disposal. Processing operations also include logging, generation, and transformation, as well as analysis techniques, such as data mining.

Organizations may be subject to laws, executive orders, directives, regulations, or policies that establish the organization’s authority and thereby limit certain types of processing of personally identifiable information or establish other requirements related to the processing. Organizational personnel consult with the senior agency official for privacy and legal counsel regarding such authority, particularly if the organization is subject to multiple jurisdictions or sources of authority. For organizations whose processing is not determined according to legal authorities, the organization’s policies and determinations govern how they process personally identifiable information. While processing of personally identifiable information may be legally permissible, privacy risks may still arise. Privacy risk assessments can identify the privacy risks associated with the authorized processing of personally identifiable information and support solutions to manage such risks.

Organizations consider applicable requirements and organizational policies to determine how to document this authority. For federal agencies, the authority to process personally identifiable information is documented in privacy policies and notices, system of records notices, privacy impact assessments, PRIVACT statements, computer matching agreements and notices, contracts, information sharing agreements, memoranda of understanding, and other documentation.

Organizations take steps to ensure that personally identifiable information is only processed for authorized purposes, including training organizational personnel on the authorized processing of personally identifiable information and monitoring and auditing organizational use of personally identifiable information.

</details>

## Control enhancements

<a id="pt-2.1"></a>

### PT-2(1) Data Tagging

*Baselines: Not in a baseline*

Attach data tags containing [Assignment: organization-defined authorized processing] to [Assignment: organization-defined elements of personally identifiable information].

<details>
<summary>Discussion and assessment objectives for PT-2(1)</summary>

Data tags support the tracking and enforcement of authorized processing by conveying the types of processing that are authorized along with the relevant elements of personally identifiable information throughout the system. Data tags may also support the use of automated tools.

Determine if data tags containing [Assignment: organization-defined authorized processing] are attached to [Assignment: organization-defined elements of personally identifiable information].

**Examine:** Personally identifiable information processing and transparency policy and procedures including procedures addressing data tagging; data tag definitions; documented requirements for use and monitoring of data tagging; data extracts with corresponding data tags; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with personally identifiable information processing and transparency responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for authorizing the processing of personally identifiable information; organizational processes for data tagging; mechanisms for applying and monitoring data tagging; mechanisms supporting and/or implementing the restriction of personally identifiable information processing.

</details>

<a id="pt-2.2"></a>

### PT-2(2) Automation

*Baselines: Not in a baseline*

Manage enforcement of the authorized processing of personally identifiable information using [Assignment: organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for PT-2(2)</summary>

Automated mechanisms augment verification that only authorized processing is occurring.

Determine if enforcement of the authorized processing of personally identifiable information is managed using [Assignment: organization-defined automated mechanisms].

**Examine:** Personally identifiable information processing and transparency policy and procedures; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with personally identifiable information processing and transparency responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for authorizing the processing of personally identifiable information; automated mechanisms supporting and/or implementing the management of authorized personally identifiable information processing.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PT-2</summary>

Determine if:

- **PT-02a.** the [Assignment: organization-defined authority] that permits the [Assignment: organization-defined processing] of personally identifiable information is determined and documented;
- **PT-02b.** the [Assignment: organization-defined processing] of personally identifiable information is restricted to only that which is authorized.

**Examine:** Personally identifiable information processing and transparency policy and procedures; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with personally identifiable information processing and transparency responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for authorizing the processing of personally identifiable information; mechanisms supporting and/or implementing the restriction of personally identifiable information processing.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PT-2 asks you to determine and write down what authority permits each processing of personally identifiable information (a), and to keep processing within that authority (b). PT-2 is in the SP 800-53B Privacy baseline only.

NIST's PT-2 discussion defines processing broadly: creation, collection, use, processing, storage, maintenance, dissemination, disclosure and disposal, and also logging, generation, transformation and analysis such as data mining. Staff consult the senior privacy official and legal counsel about authority, especially where several jurisdictions or sources of authority apply. An organization not governed by legal authorities follows its own policies and determinations. A lawful processing can still create privacy risk, which the privacy risk assessment (RA-3, RA-8) addresses.

**Common implementations.** The PT-2 clause of the [PII Processing and Transparency policy](/templates/policies/pt/) has the system owner record the authority in the system's [privacy impact assessment](/templates/reports/privacy-impact-assessment/), and the senior privacy official confirm it with legal counsel before new processing begins. Section 4 of the assessment holds the authority; section 6 records the authority or agreement behind each disclosure. The [privacy notice](/templates/forms/privacy-notice/) tells the public the same authority (PT-5c).

Restricting processing to what is authorized (b) is mostly done with other controls, which NIST's discussion names: training staff on authorized processing (AT-3), and monitoring and auditing use. In practice:

- Role-based access to the fields and records each role needs (AC-2, AC-3)
- Contracts, data use agreements and [information exchange agreements](/templates/forms/information-exchange-agreement/) that bind recipients to the authorized processing (CA-3, SA-4)
- Change control that sends any new use, recipient or data element to the privacy office (CM-3, PT-3d)
- Audit logs of access to personally identifiable information, reviewed for use outside the authorized purposes (AU-6)

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Authority that permits the processing (a) | The law, regulation, contract or consent |
| Processing the authority must cover (a) | Each collection, use, sharing, retention and disposal |
| Processing restricted to what is authorized (b) | All processing |

These match the PT-2 clause and section 4 of the privacy impact assessment. Write the specific authority, not a general one: the statute and section, the contract and clause, or the consent and the notice version it was given under.

**Evidence assessors ask for.**

- The privacy impact assessment for a sample of systems, with the authority recorded for each processing
- The privacy office's record of confirming the authority with legal counsel
- Agreements and contracts for the disclosures the assessment lists
- Access control settings and audit records showing processing stays within the authority
- Training records for staff who handle personally identifiable information

**Inheritance.** The privacy office provides the method, the legal review and the training as common controls. Each system documents its own authority and enforces its own restrictions, so PT-2 is usually hybrid: the organization decides what is authorized, and the system keeps processing within it.

**Common findings.**

- An authority so general it permits anything, such as an agency's organic statute or "business purposes".
- Processing the privacy impact assessment does not list, often logging, analytics or test copies of production data.
- Disclosures to service providers with no agreement limiting what they may do with the information.
- An authority recorded once at launch and never checked after the system changed.

**Enhancements.** PT-2 has two enhancements, PT-2(1) data tagging and PT-2(2) automation, in no baseline. Neither has a clause in the policy template.

**Federal systems** (as of October 2026). The Privacy Act ([5 U.S.C. § 552a](https://www.govinfo.gov/link/uscode/5/552a?link-type=html)), subsection (e)(1), requires each agency to maintain in its records only information about an individual that is "relevant and necessary to accomplish a purpose of the agency required to be accomplished by statute or by executive order of the President". Subsection (b) bars disclosure of a record in a system of records without the individual's written request or prior written consent, unless one of its listed conditions applies. [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), main body section 5.f(1)(d), requires agencies to limit the processing of PII "to that which is legally authorized, relevant, and reasonably deemed necessary for the proper performance of agency functions". Its Appendix II, section 3.c, lists Authority among the Fair Information Practice Principles; the Circular says these principles "are not OMB requirements" but should be applied to each agency's mission. [OMB Circular A-108](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A108/omb_circular_a-108.pdf), section 7.e(2)(B), has the agency cite the specific programmatic authority for a system of records and avoid authority "that is overly general".
