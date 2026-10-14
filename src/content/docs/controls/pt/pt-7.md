---
title: 'PT-7 Specific Categories of Personally Identifiable Information'
description: 'NIST SP 800-53 Rev. 5 control PT-7, Specific Categories of Personally Identifiable Information: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PT-7 Specific Categories of Personally Identifiable Information'
  order: 7
control:
  id: PT-7
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

**Related controls:** [IR-9](/controls/ir/ir-9/), [PT-2](/controls/pt/pt-2/), [PT-3](/controls/pt/pt-3/), [RA-3](/controls/ra/ra-3/)

## Control statement

Apply [Assignment: organization-defined processing conditions] for specific categories of personally identifiable information.

<details>
<summary>NIST discussion</summary>

Organizations apply any conditions or protections that may be necessary for specific categories of personally identifiable information. These conditions may be required by laws, executive orders, directives, regulations, policies, standards, or guidelines. The requirements may also come from the results of privacy risk assessments that factor in contextual changes that may result in an organizational determination that a particular category of personally identifiable information is particularly sensitive or raises particular privacy risks. Organizations consult with the senior agency official for privacy and legal counsel regarding any protections that may be necessary.

</details>

## Control enhancements

<a id="pt-7.1"></a>

### PT-7(1) Social Security Numbers

*Baselines: Privacy*

When a system processes Social Security numbers:

- **(a)** Eliminate unnecessary collection, maintenance, and use of Social Security numbers, and explore alternatives to their use as a personal identifier;
- **(b)** Do not deny any individual any right, benefit, or privilege provided by law because of such individual’s refusal to disclose his or her Social Security number; and
- **(c)** Inform any individual who is asked to disclose his or her Social Security number whether that disclosure is mandatory or voluntary, by what statutory or other authority such number is solicited, and what uses will be made of it.

<details>
<summary>Discussion and assessment objectives for PT-7(1)</summary>

Federal law and policy establish specific requirements for organizations’ processing of Social Security numbers. Organizations take steps to eliminate unnecessary uses of Social Security numbers and other sensitive information and observe any particular requirements that apply.

Determine if:

- **PT-07(01)(a)**
  - **PT-07(01)(a)[01]** when a system processes Social Security numbers, the unnecessary collection, maintenance, and use of Social Security numbers are eliminated;
  - **PT-07(01)(a)[02]** when a system processes Social Security numbers, alternatives to the use of Social Security Numbers as a personal identifier are explored;
- **PT-07(01)(b)** when a system processes Social Security numbers, individual rights, benefits, or privileges provided by law are not denied because of an individual’s refusal to disclose their Social Security number;
- **PT-07(01)(c)**
  - **PT-07(01)(c)[01]** when a system processes Social Security numbers, any individual who is asked to disclose their Social Security number is informed whether that disclosure is mandatory or voluntary, by what statutory or other authority such number is solicited, and what uses will be made of it;
  - **PT-07(01)(c)[02]** when a system processes Social Security numbers, any individual who is asked to disclose their Social Security number is informed by what statutory or other authority the number is solicited;
  - **PT-07(01)(c)[03]** when a system processes Social Security numbers, any individual who is asked to disclose their Social Security number is informed what uses will be made of it.

**Examine:** Personally identifiable information processing and transparency policy and procedures; privacy notice; Privacy Act system of records; privacy notice; separate notice regarding the use of Social Security numbers; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with personally identifiable information processing and transparency responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for identifying, reviewing, and taking action to control the unnecessary use of Social Security numbers; implementation of an alternative to Social Security numbers as identifiers.

</details>

<a id="pt-7.2"></a>

### PT-7(2) First Amendment Information

*Baselines: Privacy*

Prohibit the processing of information describing how any individual exercises rights guaranteed by the First Amendment unless expressly authorized by statute or by the individual or unless pertinent to and within the scope of an authorized law enforcement activity.

<details>
<summary>Discussion and assessment objectives for PT-7(2)</summary>

The PRIVACT limits agencies’ ability to process information that describes how individuals exercise rights guaranteed by the First Amendment. Organizations consult with the senior agency official for privacy and legal counsel regarding these requirements.

Determine if the processing of information describing how any individual exercises rights guaranteed by the First Amendment is prohibited unless expressly authorized by statute or by the individual or unless pertinent to and within the scope of an authorized law enforcement activity.

**Examine:** Personally identifiable information processing and transparency policy and procedures; privacy notice; Privacy Act system of records; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with personally identifiable information processing and transparency responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for supporting and/or implementing personally identifiable information processing.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PT-7</summary>

Determine if [Assignment: organization-defined processing conditions] are applied for specific categories of personally identifiable information.

**Examine:** Personally identifiable information processing and transparency policy and procedures; privacy notice; Privacy Act system of records; computer matching agreements and notices; contracts; privacy information sharing agreements; memoranda of understanding; governing requirements; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with personally identifiable information processing and transparency responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for supporting and/or implementing personally identifiable information processing.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PT-7 asks you to apply set processing conditions to specific categories of personally identifiable information. PT-7 is in the SP 800-53B Privacy baseline only.

NIST's PT-7 discussion says the conditions may come from laws, executive orders, directives, regulations, policies, standards or guidelines, or from privacy risk assessments that find a category particularly sensitive in context. Organizations consult the senior privacy official and legal counsel on the protections needed.

**Common implementations.** The PT-7 clause of the [PII Processing and Transparency policy](/templates/policies/pt/) has the senior privacy official designate the categories, such as Social Security numbers, health, financial and biometric information, and information about children, and the system owner apply the conditions to them. Section 3 of the [privacy impact assessment](/templates/reports/privacy-impact-assessment/) records which designated categories a system holds and which conditions apply, and the [privacy notice](/templates/forms/privacy-notice/) tells individuals if the organization collects them and why.

Write the conditions as a short table the privacy office owns: one row per category, with its source (a law, a contract, or the organization's risk decision) and its conditions. Typical conditions are:

- Collect only where law requires it or a documented need exists, and say why in the privacy impact assessment
- Encrypt in storage and in transit (SC-28, SC-8), and mask or truncate in displays and reports
- Limit access to named roles, and log each access (AC-3, AU-2)
- Keep it out of test environments, analytics extracts and email
- Set shorter retention, and dispose of it securely (SI-12, MP-6)
- Treat any loss as a possible breach that needs a harm assessment (IR-8(1))

**Organization-defined parameters.** Typical value, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Processing conditions for the designated categories | The conditions the senior privacy official sets for each designated category, such as collection only where law requires it or a documented need exists, encryption, and access limited to named roles |

This matches the PT-7 clause and section 3 of the privacy impact assessment. The PT decision worksheet's typical designated categories are Social Security numbers, health, financial and biometric information, and information about children, plus a ban on records of how individuals exercise First Amendment rights (PT-7(2)).

**Evidence assessors ask for.**

- The list of designated categories and the conditions for each, with its source
- Privacy impact assessments for a sample of systems, showing which categories each holds
- Configuration evidence that the conditions are applied, such as encryption, masking and access lists
- The review of Social Security number uses, and the alternatives considered (PT-7(1))

**Inheritance.** The privacy office designates the categories and sets the conditions for the organization. Each system applies them to what it holds, so PT-7 is hybrid; encryption or masking may also be inherited from a common platform.

**Common findings.**

- Categories designated in policy but never traced to the systems that hold them.
- Social Security numbers used as account numbers or keys, and displayed in full on screens and reports.
- Sensitive categories copied into test or analytics environments without the same conditions.
- Conditions copied from a law that does not apply, while one that does is missed.

**Enhancements in the Privacy baseline.** [PT-7(1)](#pt-7.1) applies when a system processes Social Security numbers. Eliminate their unnecessary collection, maintenance and use, and explore alternatives to them as a personal identifier (a). Do not deny anyone a right, benefit or privilege provided by law because they refuse to disclose their number (b). Tell anyone asked for their number whether disclosure is mandatory or voluntary, under what authority it is requested, and how it will be used (c). The PT-7(1) clause gives all three to the system owner. In practice, keep an inventory of where numbers are collected and stored, replace them with an internal identifier wherever a statute does not require them, and put the (c) statement on each form that asks for one, next to the short notice or the Privacy Act statement in the [privacy notice](/templates/forms/privacy-notice/). The rules in (b) and (c) come from section 7 of the U.S. Privacy Act and bind federal, state and local government agencies; other organizations adopt them as good practice or as other laws require.

[PT-7(2)](#pt-7.2) prohibits processing information that describes how anyone exercises rights guaranteed by the First Amendment (such as religion, speech, the press, assembly and petition), unless a statute or the individual expressly authorizes it, or it is pertinent to and within the scope of an authorized law enforcement activity. The PT-7(2) clause gives the prohibition to the system owner. Look for it where it is easy to miss: social media monitoring, records of who attended a meeting or protest, and free-text fields where staff note what someone said or believes. The privacy impact assessment's section 3 asks about it for each system.

**Federal systems** (as of October 2026). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), main body section 5.f(1)(f) and Appendix II, section 5.b, require agencies to "take steps to eliminate unnecessary collection, maintenance, and use of Social Security numbers, and explore alternatives to the use of Social Security numbers as a personal identifier". Section 7 of the Privacy Act of 1974 (Pub. L. 93-579, printed as a note to [5 U.S.C. § 552a](https://www.govinfo.gov/link/uscode/5/552a?link-type=html)) makes it unlawful for any federal, state or local government agency to deny a right, benefit or privilege because an individual refuses to disclose their Social Security number. The exceptions are disclosure required by federal statute, and disclosure to a system of records in existence before January 1, 1975 where an earlier statute or regulation required it to verify identity. Section 7(b) requires the statement in PT-7(1)(c).

For PT-7(2), the Privacy Act, subsection (e)(7), requires each agency to "maintain no record describing how any individual exercises rights guaranteed by the First Amendment" except as PT-7(2) allows. Subsection (j) lets an agency exempt a system from most of the Act by rule, but not from (e)(7), and subsection (k) does not list it.
