---
title: 'PT-4 Consent'
description: 'NIST SP 800-53 Rev. 5 control PT-4, Consent: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PT-4 Consent'
  order: 4
control:
  id: PT-4
  family: PT
  baselines: [Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Privacy | Organization | 3 (0 in a baseline) |

**Related controls:** [AC-16](/controls/ac/ac-16/), [PT-2](/controls/pt/pt-2/), [PT-5](/controls/pt/pt-5/)

## Control statement

Implement [Assignment: organization-defined tools or mechanisms] for individuals to consent to the processing of their personally identifiable information prior to its collection that facilitate individuals’ informed decision-making.

<details>
<summary>NIST discussion</summary>

Consent allows individuals to participate in making decisions about the processing of their information and transfers some of the risk that arises from the processing of personally identifiable information from the organization to an individual. Consent may be required by applicable laws, executive orders, directives, regulations, policies, standards, or guidelines. Otherwise, when selecting consent as a control, organizations consider whether individuals can be reasonably expected to understand and accept the privacy risks that arise from their authorization. Organizations consider whether other controls may more effectively mitigate privacy risk either alone or in conjunction with consent. Organizations also consider any demographic or contextual factors that may influence the understanding or behavior of individuals with respect to the processing carried out by the system or organization. When soliciting consent from individuals, organizations consider the appropriate mechanism for obtaining consent, including the type of consent (e.g., opt-in, opt-out), how to properly authenticate and identity proof individuals and how to obtain consent through electronic means. In addition, organizations consider providing a mechanism for individuals to revoke consent once it has been provided, as appropriate. Finally, organizations consider usability factors to help individuals understand the risks being accepted when providing consent, including the use of plain language and avoiding technical jargon.

</details>

## Control enhancements

<a id="pt-4.1"></a>

### PT-4(1) Tailored Consent

*Baselines: Not in a baseline*

Provide [Assignment: organization-defined mechanisms] to allow individuals to tailor processing permissions to selected elements of personally identifiable information.

<details>
<summary>Discussion and assessment objectives for PT-4(1)</summary>

While some processing may be necessary for the basic functionality of the product or service, other processing may not. In these circumstances, organizations allow individuals to select how specific personally identifiable information elements may be processed. More tailored consent may help reduce privacy risk, increase individual satisfaction, and avoid adverse behaviors, such as abandonment of the product or service.

Determine if [Assignment: organization-defined mechanisms] are provided to allow individuals to tailor processing permissions to selected elements of personally identifiable information.

**Examine:** Personally identifiable information processing and transparency policy and procedures; consent policies and procedures; consent tools and mechanisms; consent presentation or display (user interface); privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with personally identifiable information processing and transparency responsibilities; organizational personnel with user interface or user experience responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for consenting to the processing of personally identifiable information; consent tools or mechanisms; mechanisms implementing consent.

</details>

<a id="pt-4.2"></a>

### PT-4(2) Just-in-time Consent

*Baselines: Not in a baseline*

Present [Assignment: organization-defined consent mechanisms] to individuals at [Assignment: organization-defined frequency] and in conjunction with [Assignment: organization-defined personally identifiable information processing].

<details>
<summary>Discussion and assessment objectives for PT-4(2)</summary>

Just-in-time consent enables individuals to participate in how their personally identifiable information is being processed at the time or in conjunction with specific types of data processing when such participation may be most useful to the individual. Individual assumptions about how personally identifiable information is being processed might not be accurate or reliable if time has passed since the individual last gave consent or the type of processing creates significant privacy risk. Organizations use discretion to determine when to use just-in-time consent and may use supporting information on demographics, focus groups, or surveys to learn more about individuals’ privacy interests and concerns.

Determine if [Assignment: organization-defined consent mechanisms] are presented to individuals [Assignment: organization-defined frequency] and in conjunction with [Assignment: organization-defined personally identifiable information processing].

**Examine:** Personally identifiable information processing and transparency policy and procedures; consent policies and procedures; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with personally identifiable information processing and transparency responsibilities; organizational personnel with user interface or user experience responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for the collection of personally identifiable information; mechanisms for obtaining just-in-time consent from users for the processing of their personally identifiable information; mechanisms implementing just-in-time consent.

</details>

<a id="pt-4.3"></a>

### PT-4(3) Revocation

*Baselines: Not in a baseline*

Implement [Assignment: organization-defined tools or mechanisms] for individuals to revoke consent to the processing of their personally identifiable information.

<details>
<summary>Discussion and assessment objectives for PT-4(3)</summary>

Revocation of consent enables individuals to exercise control over their initial consent decision when circumstances change. Organizations consider usability factors in enabling easy-to-use revocation capabilities.

Determine if the [Assignment: organization-defined tools or mechanisms] are implemented for individuals to revoke consent to the processing of their personally identifiable information.

**Examine:** Personally identifiable information processing and transparency policy and procedures; consent revocation policies and procedures; consent revocation user interface or user experience; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with personally identifiable information processing and transparency responsibilities; organizational personnel with user interface or user experience responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for consenting to the processing of personally identifiable information; tools or mechanisms for implementing consent revocation.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PT-4</summary>

Determine if the [Assignment: organization-defined tools or mechanisms] are implemented for individuals to consent to the processing of their personally identifiable information prior to its collection that facilitate individuals’ informed decision-making.

**Examine:** Personally identifiable information processing and transparency policy and procedures; consent policies and procedures; consent tools and mechanisms; consent presentation or display (user interface); evidence of individuals’ consent; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with personally identifiable information processing and transparency responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for the collection of personally identifiable information; consent tools or mechanisms for users to authorize the processing of their personally identifiable information; mechanisms implementing consent.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PT-4 asks you to give individuals tools or mechanisms to consent to the processing of their personally identifiable information before it is collected, in a way that helps them make an informed decision. PT-4 is in the SP 800-53B Privacy baseline only.

NIST's PT-4 discussion treats consent as one control among several, not a default. Consent may be required by law; otherwise, choose it only where individuals can reasonably be expected to understand and accept the privacy risk they are authorizing, and consider whether other controls would manage the risk better. NIST's discussion asks you to consider:

- Demographic and contextual factors that affect how people understand the request
- The type of consent, such as opt-in or opt-out
- How to authenticate and identity-proof the person giving consent, and how to obtain consent electronically
- A way to revoke consent once given
- Plain language, without technical jargon

**Common implementations.** The PT-4 clause of the [PII Processing and Transparency policy](/templates/policies/pt/) has the senior privacy official make sure consent mechanisms exist, each request use plain language and say what will be processed, why and with whom it will be shared, and the system owner keep a record of each consent given and withdrawn. The [privacy notice](/templates/forms/privacy-notice/) lists the choices individuals have and how to withdraw consent, and section 5 of the [privacy impact assessment](/templates/reports/privacy-impact-assessment/) records which processing relies on consent, or why consent is not the basis.

A consent mechanism that would pass an assessment usually has:

- An empty checkbox or a separate action for each optional use, not a single acceptance of terms
- The request shown next to the short notice at the point of collection, with a link to the full notice
- A record of who consented, to what, when, and under which version of the notice
- A withdrawal option in the same place, as easy to use as giving consent, which stops the processing that relied on it
- A check that downstream systems and recipients receive withdrawals

Where processing is required by law or needed to deliver what the individual asked for, do not ask for consent the individual cannot refuse. Say in the notice that the processing is required and why; purpose limits (PT-3) do the work instead.

**Organization-defined parameters.** Typical value, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Tools or mechanisms for consent | Opt-in consent forms and settings that record the date and the version of the notice shown, and let individuals withdraw consent as easily as they gave it |

This matches the PT-4 clause. The PT decision worksheet adds the choice of when to rely on consent; its typical answer is where law requires it or where the processing is not needed to deliver what the individual asked for.

**Evidence assessors ask for.**

- The consent screens or forms, with the wording shown to individuals
- Consent records for a sample of individuals, with the date and notice version
- A test that withdrawal works and stops the processing
- The privacy impact assessment's statement of which processing relies on consent

**Inheritance.** The privacy office often provides a common consent management tool and the wording standards. Each system that collects information presents the request and honors the result, so PT-4 is usually hybrid.

**Common findings.**

- Consent bundled into terms of service, with no separate choice for optional uses.
- Pre-ticked boxes, or consent implied from continued use of a site.
- No record of what the individual saw when consenting, so consent cannot be shown.
- Withdrawal that stops marketing email but not the sharing or analytics that relied on the same consent.

**Enhancements.** PT-4 has three enhancements, PT-4(1) tailored consent, PT-4(2) just-in-time consent and PT-4(3) revocation, in no baseline. None has a clause in the policy template; the PT-4 clause already covers withdrawal.

**Federal systems** (as of October 2026). Under the Privacy Act ([5 U.S.C. § 552a](https://www.govinfo.gov/link/uscode/5/552a?link-type=html)), subsection (b), an agency may disclose a record in a system of records "pursuant to a written request by, or with the prior written consent of" the individual, or under one of the subsection's listed conditions. [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix II, section 3.f, lists Individual Participation among the Fair Information Practice Principles: agencies should, "to the extent practicable, seek individual consent" for the processing of PII. The Circular says these principles "are not OMB requirements" but principles agencies should apply.
