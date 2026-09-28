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
---

<!-- nist:start -->
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
<!-- nist:end -->

<!-- guidance: write below this line -->
