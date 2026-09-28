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
---

<!-- nist:start -->
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
<!-- nist:end -->

<!-- guidance: write below this line -->
