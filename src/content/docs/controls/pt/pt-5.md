---
title: 'PT-5 Privacy Notice'
description: 'NIST SP 800-53 Rev. 5 control PT-5, Privacy Notice: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PT-5 Privacy Notice'
  order: 5
control:
  id: PT-5
  family: PT
  baselines: [Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Privacy | Organization | 2 (1 in a baseline) |

**Related controls:** [PM-20](/controls/pm/pm-20/), [PM-22](/controls/pm/pm-22/), [PT-2](/controls/pt/pt-2/), [PT-3](/controls/pt/pt-3/), [PT-4](/controls/pt/pt-4/), [PT-7](/controls/pt/pt-7/), [RA-3](/controls/ra/ra-3/), [SC-42](/controls/sc/sc-42/), [SI-18](/controls/si/si-18/)

## Control statement

Provide notice to individuals about the processing of personally identifiable information that:

- **a.** Is available to individuals upon first interacting with an organization, and subsequently at [Assignment: organization-defined frequency];
- **b.** Is clear and easy-to-understand, expressing information about personally identifiable information processing in plain language;
- **c.** Identifies the authority that authorizes the processing of personally identifiable information;
- **d.** Identifies the purposes for which personally identifiable information is to be processed; and
- **e.** Includes [Assignment: organization-defined information].

<details>
<summary>NIST discussion</summary>

Privacy notices help inform individuals about how their personally identifiable information is being processed by the system or organization. Organizations use privacy notices to inform individuals about how, under what authority, and for what purpose their personally identifiable information is processed, as well as other information such as choices individuals might have with respect to that processing and other parties with whom information is shared. Laws, executive orders, directives, regulations, or policies may require that privacy notices include specific elements or be provided in specific formats. Federal agency personnel consult with the senior agency official for privacy and legal counsel regarding when and where to provide privacy notices, as well as elements to include in privacy notices and required formats. In circumstances where laws or government-wide policies do not require privacy notices, organizational policies and determinations may require privacy notices and may serve as a source of the elements to include in privacy notices.

Privacy risk assessments identify the privacy risks associated with the processing of personally identifiable information and may help organizations determine appropriate elements to include in a privacy notice to manage such risks. To help individuals understand how their information is being processed, organizations write materials in plain language and avoid technical jargon.

</details>

## Control enhancements

<a id="pt-5.1"></a>

### PT-5(1) Just-in-time Notice

*Baselines: Not in a baseline*

Present notice of personally identifiable information processing to individuals at a time and location where the individual provides personally identifiable information or in conjunction with a data action, or [Assignment: organization-defined frequency].

<details>
<summary>Discussion and assessment objectives for PT-5(1)</summary>

Just-in-time notices inform individuals of how organizations process their personally identifiable information at a time when such notices may be most useful to the individuals. Individual assumptions about how personally identifiable information will be processed might not be accurate or reliable if time has passed since the organization last presented notice or the circumstances under which the individual was last provided notice have changed. A just-in-time notice can explain data actions that organizations have identified as potentially giving rise to greater privacy risk for individuals. Organizations can use a just-in-time notice to update or remind individuals about specific data actions as they occur or highlight specific changes that occurred since last presenting notice. A just-in-time notice can be used in conjunction with just-in-time consent to explain what will occur if consent is declined. Organizations use discretion to determine when to use a just-in-time notice and may use supporting information on user demographics, focus groups, or surveys to learn about users’ privacy interests and concerns.

Determine if a notice of personally identifiable information processing is presented to individuals at a time and location where the individual provides personally identifiable information, in conjunction with a data action, or [Assignment: organization-defined frequency].

**Examine:** Personally identifiable information processing and transparency policy and procedures; privacy notice; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with personally identifiable information processing and transparency responsibilities; organizational personnel with user interface or user experience responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes and implementation support or mechanisms for providing notice to individuals regarding the processing of their personally identifiable information.

</details>

<a id="pt-5.2"></a>

### PT-5(2) Privacy Act Statements

*Baselines: Privacy*

Include Privacy Act statements on forms that collect information that will be maintained in a Privacy Act system of records, or provide Privacy Act statements on separate forms that can be retained by individuals.

<details>
<summary>Discussion and assessment objectives for PT-5(2)</summary>

If a federal agency asks individuals to supply information that will become part of a system of records, the agency is required to provide a PRIVACT statement on the form used to collect the information or on a separate form that can be retained by the individual. The agency provides a PRIVACT statement in such circumstances regardless of whether the information will be collected on a paper or electronic form, on a website, on a mobile application, over the telephone, or through some other medium. This requirement ensures that the individual is provided with sufficient information about the request for information to make an informed decision on whether or not to respond.

PRIVACT statements provide formal notice to individuals of the authority that authorizes the solicitation of the information; whether providing the information is mandatory or voluntary; the principal purpose(s) for which the information is to be used; the published routine uses to which the information is subject; the effects on the individual, if any, of not providing all or any part of the information requested; and an appropriate citation and link to the relevant system of records notice. Federal agency personnel consult with the senior agency official for privacy and legal counsel regarding the notice provisions of the PRIVACT.

Determine if Privacy Act statements are included on forms that collect information that will be maintained in a Privacy Act system of records, or Privacy Act statements are provided on separate forms that can be retained by individuals.

**Examine:** Personally identifiable information processing and transparency policy and procedures; privacy notice; Privacy Act system of records; forms that include Privacy Act statements; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with personally identifiable information processing and transparency responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for including Privacy Act statements on forms that collect information or on separate forms that can be retained by individuals.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PT-5</summary>

Determine if:

- **PT-05a.**
  - **PT-05a.[01]** a notice to individuals about the processing of personally identifiable information is provided such that the notice is available to individuals upon first interacting with an organization;
  - **PT-05a.[02]** a notice to individuals about the processing of personally identifiable information is provided such that the notice is subsequently available to individuals [Assignment: organization-defined frequency];
- **PT-05b.** a notice to individuals about the processing of personally identifiable information is provided that is clear, easy-to-understand, and expresses information about personally identifiable information processing in plain language;
- **PT-05c.** a notice to individuals about the processing of personally identifiable information that identifies the authority that authorizes the processing of personally identifiable information is provided;
- **PT-05d.** a notice to individuals about the processing of personally identifiable information that identifies the purpose for which personally identifiable information is to be processed is provided;
- **PT-05e.** a notice to individuals about the processing of personally identifiable information which includes [Assignment: organization-defined information] is provided.

**Examine:** Personally identifiable information processing and transparency policy and procedures; privacy notice; Privacy Act statements; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with personally identifiable information processing and transparency responsibilities; organizational personnel with user interface or user experience responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes and implementation support or mechanisms for providing notice to individuals regarding the processing of their personally identifiable information.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PT-5 asks you to give individuals notice about the processing of their personally identifiable information. The notice is available when they first interact with the organization and again at a set frequency (a), is written in plain language (b), names the authority for the processing (c) and its purposes (d), and includes whatever else you define (e). PT-5 is in the SP 800-53B Privacy baseline only.

NIST's PT-5 discussion says notices tell individuals how, under what authority and for what purpose their information is processed, along with the choices they have and the other parties it is shared with. Laws may require specific elements or formats; federal staff consult the senior privacy official and legal counsel on when and where to give notice and what it contains. Where no law requires a notice, organizational policy can, and the privacy risk assessment helps decide what to include.

**Common implementations.** The PT-5 clause of the [PII Processing and Transparency policy](/templates/policies/pt/) gives notices to the senior privacy official, who approves each notice and each change before it is published. The [privacy notice](/templates/forms/privacy-notice/) template has three parts:

- Part 1, the full notice for the privacy page ([PM-20](/controls/pm/pm-20/)), which also serves as the website privacy policy PM-20(1) asks for
- Part 2, a short notice for each form or screen that collects information, linking to Part 1, which makes the notice available at first interaction (a)
- Part 3, a Privacy Act statement for federal collections (PT-5(2))

Its register lists every notice, where it is posted, its version, and its approval, effective and review dates. Write each notice from the system's [privacy impact assessment](/templates/reports/privacy-impact-assessment/), so the two describe the same information, purposes, authority and sharing (PT-2, PT-3). A notice is only accurate if the privacy office hears about changes first: the privacy notice and the change request form both route changes in collection or sharing to the privacy office before they take effect.

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| When notice is given again after first interaction (a) | At each later collection of personally identifiable information, and whenever the notice changes materially |
| What else the notice includes (e) | What information is collected, with whom it is shared, the choices individuals have and how to exercise them, how individuals can access and correct their information, how long it is kept, how it is protected, and how to contact the privacy office |

These match the PT-5 clause and the privacy notice template, whose sections follow the list in (e).

**Evidence assessors ask for.**

- The published notices, and the register showing each one's approval and posting
- The short notice at a sample of collection points, with its link to the full notice
- A comparison of each notice with what the system actually collects and shares, from its privacy impact assessment
- The record of the last review of each notice, and of notices updated after a change
- How a material change was communicated to individuals before it took effect

**Inheritance.** The privacy office writes, approves and publishes the full notice for the organization, and systems inherit it. Each system provides the short notice at its own collection points and keeps its part of the notice accurate, so PT-5 is usually hybrid.

**Common findings.**

- A notice that describes the organization's website but not the systems behind it.
- Forms and mobile screens that collect information with no notice or link.
- A notice that does not name the authority (c), or lists purposes that differ from the privacy impact assessment (d).
- Legal language that fails the plain-language test (b).
- No approval record, so nobody can show the posted text is the approved text.

**Enhancements in the Privacy baseline.** [PT-5(2)](#pt-5.2) asks for a Privacy Act statement on each form that collects information to be kept in a Privacy Act system of records, or on a separate form the individual can keep. NIST's discussion says the statement is given whatever the medium (paper or electronic form, website, mobile application or telephone) and names the authority, whether providing the information is mandatory or voluntary, the principal purposes, the published routine uses, the effects of not providing it, and a citation and link to the system of records notice.

The PT-5(2) clause has the system owner include the statement and the senior privacy official approve it before the form is used. Part 3 of the privacy notice is a Privacy Act statement with a row for each element. The Privacy Act applies to federal agencies and to contractors that operate a system of records for an agency ([5 U.S.C. § 552a(m)](https://www.govinfo.gov/link/uscode/5/552a?link-type=html)); an organization that maintains no system of records records that PT-5(2) does not apply. Common findings are online forms that carried over a paper form's statement without the link to the notice, statements citing a notice that has since been revised, and telephone collections with no statement at all. PT-5(1), just-in-time notice, is in no baseline and has no clause.

**Federal systems** (as of October 2026). [Section 208(c)(1)(B) of the E-Government Act of 2002](https://www.congress.gov/107/plaws/publ347/PLAW-107publ347.htm) (Pub. L. 107-347) directs OMB to issue guidance under which a privacy notice on an agency website addresses, consistent with the Privacy Act, what information is collected, why, the intended use, with whom it will be shared, what notice or opportunities for consent individuals have, how it will be secured, and the individual's rights under the Privacy Act and other privacy laws. [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), main body section 5.f(1)(j), requires agencies to "maintain and post privacy policies on all agency websites, mobile applications, and other digital services". [OMB M-23-22](https://www.whitehouse.gov/wp-content/uploads/2023/09/M-23-22-Delivering-a-Digital-First-Public-Experience.pdf), section III.A.9.a, adds that each policy is in plain language, linked from major entry points and pages that collect PII, and updated with a time-and-date stamp after substantive changes; the PM-20 page covers it.

For PT-5(2), the Privacy Act, subsection (e)(3), requires the statement on the collection form or a separate form the individual can keep. [OMB Circular A-108](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A108/omb_circular_a-108.pdf), section 6.l, requires it in plain language whatever the medium, with a citation and, if practicable, a link to the system of records notice. Its footnote 59 has the agency give the information orally on the telephone and provide a way to receive it in writing, and footnote 61 allows a plain-language summary of the routine uses with a link to the full list.
