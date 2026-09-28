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
