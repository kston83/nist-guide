---
title: 'PT-6 System of Records Notice'
description: 'NIST SP 800-53 Rev. 5 control PT-6, System of Records Notice: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PT-6 System of Records Notice'
  order: 6
control:
  id: PT-6
  family: PT
  baselines: [Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Privacy | Organization | 2 (2 in a baseline) |

**Related controls:** [AC-3](/controls/ac/ac-3/), [PM-20](/controls/pm/pm-20/), [PT-2](/controls/pt/pt-2/), [PT-3](/controls/pt/pt-3/), [PT-5](/controls/pt/pt-5/)

## Control statement

For systems that process information that will be maintained in a Privacy Act system of records:

- **a.** Draft system of records notices in accordance with OMB guidance and submit new and significantly modified system of records notices to the OMB and appropriate congressional committees for advance review;
- **b.** Publish system of records notices in the Federal Register; and
- **c.** Keep system of records notices accurate, up-to-date, and scoped in accordance with policy.

<details>
<summary>NIST discussion</summary>

The PRIVACT requires that federal agencies publish a system of records notice in the Federal Register upon the establishment and/or modification of a PRIVACT system of records. As a general matter, a system of records notice is required when an agency maintains a group of any records under the control of the agency from which information is retrieved by the name of an individual or by some identifying number, symbol, or other identifier. The notice describes the existence and character of the system and identifies the system of records, the purpose(s) of the system, the authority for maintenance of the records, the categories of records maintained in the system, the categories of individuals about whom records are maintained, the routine uses to which the records are subject, and additional details about the system as described in OMB A-108.

</details>

## Control enhancements

<a id="pt-6.1"></a>

### PT-6(1) Routine Uses

*Baselines: Privacy*

Review all routine uses published in the system of records notice at [Assignment: organization-defined frequency] to ensure continued accuracy, and to ensure that routine uses continue to be compatible with the purpose for which the information was collected.

<details>
<summary>Discussion and assessment objectives for PT-6(1)</summary>

A PRIVACT routine use is a particular kind of disclosure of a record outside of the federal agency maintaining the system of records. A routine use is an exception to the PRIVACT prohibition on the disclosure of a record in a system of records without the prior written consent of the individual to whom the record pertains. To qualify as a routine use, the disclosure must be for a purpose that is compatible with the purpose for which the information was originally collected. The PRIVACT requires agencies to describe each routine use of the records maintained in the system of records, including the categories of users of the records and the purpose of the use. Agencies may only establish routine uses by explicitly publishing them in the relevant system of records notice.

Determine if all routine uses published in the system of records notice are reviewed [Assignment: organization-defined frequency] to ensure continued accuracy, and to ensure that routine uses continue to be compatible with the purpose for which the information was collected.

**Examine:** Personally identifiable information processing and transparency policy and procedures; privacy notice; Privacy Act system of records; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with personally identifiable information processing and transparency responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for reviewing system of records notices.

</details>

<a id="pt-6.2"></a>

### PT-6(2) Exemption Rules

*Baselines: Privacy*

Review all Privacy Act exemptions claimed for the system of records at [Assignment: organization-defined frequency] to ensure they remain appropriate and necessary in accordance with law, that they have been promulgated as regulations, and that they are accurately described in the system of records notice.

<details>
<summary>Discussion and assessment objectives for PT-6(2)</summary>

The PRIVACT includes two sets of provisions that allow federal agencies to claim exemptions from certain requirements in the statute. In certain circumstances, these provisions allow agencies to promulgate regulations to exempt a system of records from select provisions of the PRIVACT . At a minimum, organizations’ PRIVACT exemption regulations include the specific name(s) of any system(s) of records that will be exempt, the specific provisions of the PRIVACT from which the system(s) of records is to be exempted, the reasons for the exemption, and an explanation for why the exemption is both necessary and appropriate.

Determine if:

- **PT-06(02)[01]** all Privacy Act exemptions claimed for the system of records are reviewed [Assignment: organization-defined frequency] to ensure that they remain appropriate and necessary in accordance with law;
- **PT-06(02)[02]** all Privacy Act exemptions claimed for the system of records are reviewed [Assignment: organization-defined frequency] to ensure that they have been promulgated as regulations;
- **PT-06(02)[03]** all Privacy Act exemptions claimed for the system of records are reviewed [Assignment: organization-defined frequency] to ensure that they are accurately described in the system of records notice.

**Examine:** Personally identifiable information processing and transparency policy and procedures; privacy notice; Privacy Act system of records; Privacy Act exemptions; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with personally identifiable information processing and transparency responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for Privacy Act system of records maintenance.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PT-6</summary>

Determine if:

- **PT-06a.**
  - **PT-06a.[01]** system of records notices are drafted in accordance with OMB guidance for systems that process information that will be maintained in a Privacy Act system of records;
  - **PT-06a.[02]** new and significantly modified system of records notices are submitted to the OMB and appropriate congressional committees for advance review for systems that process information that will be maintained in a Privacy Act system of records;
- **PT-06b.** system of records notices are published in the Federal Register for systems that process information that will be maintained in a Privacy Act system of records;
- **PT-06c.** system of records notices are kept accurate, up-to-date, and scoped in accordance with policy for systems that process information that will be maintained in a Privacy Act system of records.

**Examine:** Personally identifiable information processing and transparency policy and procedures; privacy notice; Privacy Act system of records; Federal Register notices; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with personally identifiable information processing and transparency responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for Privacy Act system of records maintenance.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PT-6 applies to systems that process information kept in a Privacy Act system of records. For each one, draft the system of records notice in line with OMB guidance and send new and significantly changed notices to OMB and the congressional committees for advance review (a), publish the notice in the Federal Register (b), and keep it accurate, up to date and scoped in line with policy (c). PT-6 is in the SP 800-53B Privacy baseline only.

NIST's PT-6 discussion explains when a notice is needed: as a general matter, when an agency maintains a group of records under its control from which information is retrieved by an individual's name or other identifier. The notice describes the system, its purposes, the authority for keeping the records, the categories of records and of individuals, the routine uses, and the further details OMB Circular A-108 sets out.

The Privacy Act binds U.S. federal agencies, and contractors that operate a system of records for an agency through their contracts ([5 U.S.C. § 552a(m)](https://www.govinfo.gov/link/uscode/5/552a?link-type=html)). The PT decision worksheet asks whether the organization maintains systems of records; any other organization records that PT-6 and its enhancements do not apply, and keeps that decision in the privacy plan.

**Common implementations.** The PT-6 clause of the [PII Processing and Transparency policy](/templates/policies/pt/) gives drafting, submission, publication and upkeep to the senior privacy official, and has the system owner report any change that could affect the notice before the change is made. In practice:

- The federal table in the [privacy impact assessment](/templates/reports/privacy-impact-assessment/) asks whether a system of records is being created or changed, and for its notice; section 208(b)(2)(B)(ii) of the E-Government Act requires every federal assessment to address that question
- An inventory maps each system to the notices that cover it, so a change to the system can be checked against its notice
- The [change request form](/templates/forms/change-request-form/) asks, in Part B5, whether a system of records notice needs updating
- Every current notice is listed and linked on the privacy page ([PM-20](/controls/pm/pm-20/))

Keeping a notice scoped (c) means one notice describes one system of records clearly: neither so broad it hides what the records are for, nor split so finely that the public cannot see how records link.

**Organization-defined parameters.** PT-6 has none. Its clause leaves these choices open, with typical values your organization may set differently:

| Choice | Typical value |
| --- | --- |
| Who drafts, submits and publishes notices | The senior privacy official (the clause) |
| Who reports changes that could affect a notice | The system owner, before the change is made (the clause) |
| How often each notice is checked for accuracy and scope (c) | Annually, or at the frequency the privacy continuous monitoring strategy sets, and with every significant change |
| Where the decision is recorded if the organization keeps no system of records | The privacy plan, and the PT decision worksheet |

**Evidence assessors ask for.**

- The inventory of systems of records, mapped to systems and their notices
- The published notices, with their Federal Register citations
- For a recent new or changed notice, the report to OMB and Congress and its date (a)
- Records of the last review of each notice, and changes made since (c)
- Change records for a sample of systems, checked against whether the notice needed revising

**Inheritance.** PT-6 is carried out by the agency's privacy office for the whole organization; a system inherits it but must report changes that affect its notice. Contractor-operated systems rely on the agency's notice and the Privacy Act clauses in their contract.

**Common findings.**

- A system retrieving records by name or identifier with no notice, because nobody recognized it as a system of records.
- Notices years old that no longer describe the categories of records, the location or the routine uses.
- A cloud migration or new interface treated as routine, without considering whether it was a significant change to the notice.
- Notices missing from the privacy page.

**Enhancements in the Privacy baseline.** [PT-6(1)](#pt-6.1) asks you to review every routine use in each notice at a set frequency, to make sure it is still accurate and compatible with the purpose of collection. NIST's discussion explains that a routine use is a disclosure outside the agency, an exception to the Privacy Act's rule against disclosure without consent, and exists only if published in the notice. The PT-6(1) clause gives the review to the senior privacy official; the typical frequency (`pt-06.01_odp`) is annually. Compare each routine use with the disclosures the system actually makes, from section 6 of its privacy impact assessment and its accounting of disclosures ([PM-21](/controls/pm/pm-21/)). Retire uses no one relies on, and revise ones that no longer describe what happens.

[PT-6(2)](#pt-6.2) asks you to review every Privacy Act exemption claimed for the system at a set frequency, to make sure it is still appropriate and necessary under law, was issued as a regulation, and is accurately described in the notice. The PT-6(2) clause gives the review to the senior privacy official; the typical frequency (`pt-06.02_odp`) is annually. A system that claims no exemptions meets PT-6(2) by recording that. A common finding is a notice that claims an exemption with no final rule behind it, or a rule naming a system by a different name than its notice.

**Federal systems** (as of October 2026). The Privacy Act ([5 U.S.C. § 552a](https://www.govinfo.gov/link/uscode/5/552a?link-type=html)) requires a Federal Register notice of the existence and character of each system of records on establishment or revision, with the contents listed in subsection (e)(4)(A) to (I), and 30 days' notice and comment for any new use (subsection (e)(11)). Subsection (r) requires advance notice to OMB and the congressional committees of any proposal to establish or significantly change a system of records. Under subsection (i)(2), an officer or employee who willfully maintains a system of records without meeting the notice requirement commits a misdemeanor.

[OMB Circular A-108](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A108/omb_circular_a-108.pdf) sets how. Section 6.b lists examples of significant changes that need a revised notice, among them more categories of individuals or records, a changed purpose or authority, a change that creates substantially greater access, and a new or changed routine use. Section 6.c requires the Office of the Federal Register templates in its appendices, and 6.e makes a notice effective on publication except for new or significantly changed routine uses, which wait at least 30 days. Section 6.f requires a notice of rescindment when the agency stops maintaining a system, 6.h sets the factors for scoping, and 6.j covers systems operated by contractors. Section 7.b requires the report to OMB and Congress at least 30 days before the notice goes to the Federal Register, with OMB's 30-day review not running at the same time as publication. Section 12 has the controls for each system of records keep notices accurate, up to date, appropriately scoped and published (12.b), routine uses appropriate and compatible (12.c), and exemptions appropriate and necessary (12.d). It also says the agency-wide privacy continuous monitoring program replaced OMB's earlier requirement for annual Privacy Act reviews, so the PT-6(1) and PT-6(2) frequencies are the ones the agency's privacy continuous monitoring strategy assigns.

For PT-6(1), section 6.k requires the agency to stop all disclosures under a routine use it finds no longer necessary or appropriate and publish a revised notice rescinding it. For PT-6(2), exemptions are issued only by rule under 5 U.S.C. § 553, stating the reasons (subsections (j) and (k)). Section 11 of A-108 requires each rule to name the system, the provisions exempted and the reasons, and to explain why the exemption is necessary and appropriate. The notice must identify the exemption, and agencies exempt only the records for which it is necessary.
