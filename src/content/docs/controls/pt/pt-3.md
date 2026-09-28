---
title: 'PT-3 Personally Identifiable Information Processing Purposes'
description: 'NIST SP 800-53 Rev. 5 control PT-3, Personally Identifiable Information Processing Purposes: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PT-3 Personally Identifiable Information Processing Purposes'
  order: 3
control:
  id: PT-3
  family: PT
  baselines: [Privacy]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Privacy | Organization | 2 (0 in a baseline) |

**Related controls:** [AC-2](/controls/ac/ac-2/), [AC-3](/controls/ac/ac-3/), [AT-3](/controls/at/at-3/), [CM-13](/controls/cm/cm-13/), [IR-9](/controls/ir/ir-9/), [PM-9](/controls/pm/pm-9/), [PM-25](/controls/pm/pm-25/), [PT-2](/controls/pt/pt-2/), [PT-5](/controls/pt/pt-5/), [PT-6](/controls/pt/pt-6/), [PT-7](/controls/pt/pt-7/), [RA-8](/controls/ra/ra-8/), [SC-43](/controls/sc/sc-43/), [SI-12](/controls/si/si-12/), [SI-18](/controls/si/si-18/)

## Control statement

- **a.** Identify and document the [Assignment: organization-defined purpose(s)] for processing personally identifiable information;
- **b.** Describe the purpose(s) in the public privacy notices and policies of the organization;
- **c.** Restrict the [Assignment: organization-defined processing] of personally identifiable information to only that which is compatible with the identified purpose(s); and
- **d.** Monitor changes in processing personally identifiable information and implement [Assignment: organization-defined mechanisms] to ensure that any changes are made in accordance with [Assignment: organization-defined requirements].

<details>
<summary>NIST discussion</summary>

Identifying and documenting the purpose for processing provides organizations with a basis for understanding why personally identifiable information may be processed. The term "process" includes every step of the information life cycle, including creation, collection, use, processing, storage, maintenance, dissemination, disclosure, and disposal. Identifying and documenting the purpose of processing is a prerequisite to enabling owners and operators of the system and individuals whose information is processed by the system to understand how the information will be processed. This enables individuals to make informed decisions about their engagement with information systems and organizations and to manage their privacy interests. Once the specific processing purpose has been identified, the purpose is described in the organization’s privacy notices, policies, and any related privacy compliance documentation, including privacy impact assessments, system of records notices, PRIVACT statements, computer matching notices, and other applicable Federal Register notices.

Organizations take steps to help ensure that personally identifiable information is processed only for identified purposes, including training organizational personnel and monitoring and auditing organizational processing of personally identifiable information.

Organizations monitor for changes in personally identifiable information processing. Organizational personnel consult with the senior agency official for privacy and legal counsel to ensure that any new purposes that arise from changes in processing are compatible with the purpose for which the information was collected, or if the new purpose is not compatible, implement mechanisms in accordance with defined requirements to allow for the new processing, if appropriate. Mechanisms may include obtaining consent from individuals, revising privacy policies, or other measures to manage privacy risks that arise from changes in personally identifiable information processing purposes.

</details>

## Control enhancements

<a id="pt-3.1"></a>

### PT-3(1) Data Tagging

*Baselines: Not in a baseline*

Attach data tags containing the following purposes to [Assignment: organization-defined elements of personally identifiable information]: [Assignment: organization-defined processing purposes].

<details>
<summary>Discussion and assessment objectives for PT-3(1)</summary>

Data tags support the tracking of processing purposes by conveying the purposes along with the relevant elements of personally identifiable information throughout the system. By conveying the processing purposes in a data tag along with the personally identifiable information as the information transits a system, a system owner or operator can identify whether a change in processing would be compatible with the identified and documented purposes. Data tags may also support the use of automated tools.

Determine if data tags containing [Assignment: organization-defined processing purposes] are attached to [Assignment: organization-defined elements of personally identifiable information].

**Examine:** Personally identifiable information processing and transparency policy and procedures; documented description of how data tags are used to identify personally identifiable information data elements and their authorized uses; data tag schema; data extracts with corresponding data tags; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with personally identifiable information processing and transparency responsibilities; organizational personnel with data tagging responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for authorizing the processing of personally identifiable information; mechanisms supporting and/or implementing data tagging.

</details>

<a id="pt-3.2"></a>

### PT-3(2) Automation

*Baselines: Not in a baseline*

Track processing purposes of personally identifiable information using [Assignment: organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for PT-3(2)</summary>

Automated mechanisms augment tracking of the processing purposes.

Determine if the processing purposes of personally identifiable information are tracked using [Assignment: organization-defined automated mechanisms].

**Examine:** Personally identifiable information processing and transparency policy and procedures; data extracts with corresponding data tags; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with personally identifiable information processing and transparency responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for managing the enforcement of authorized processing of personally identifiable information; automated tracking mechanisms.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PT-3</summary>

Determine if:

- **PT-03a.** the [Assignment: organization-defined purpose(s)] for processing personally identifiable information is/are identified and documented;
- **PT-03b.**
  - **PT-03b.[01]** the purpose(s) is/are described in the public privacy notices of the organization;
  - **PT-03b.[02]** the purpose(s) is/are described in the policies of the organization;
- **PT-03c.** the [Assignment: organization-defined processing] of personally identifiable information are restricted to only that which is compatible with the identified purpose(s);
- **PT-03d.**
  - **PT-03d.[01]** changes in the processing of personally identifiable information are monitored;
  - **PT-03d.[02]** [Assignment: organization-defined mechanisms] are implemented to ensure that any changes are made in accordance with [Assignment: organization-defined requirements].

**Examine:** Personally identifiable information processing and transparency policy and procedures; configuration management plan; organizational privacy notices; organizational policies; Privacy Act statements; computer matching notices; applicable Federal Register notices; documented requirements for enforcing and monitoring the processing of personally identifiable information; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with personally identifiable information processing and transparency responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for authorizing the processing of personally identifiable information; mechanisms supporting and/or implementing the management of authorized personally identifiable information processing; organizational processes for monitoring changes in processing personally identifiable information.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
