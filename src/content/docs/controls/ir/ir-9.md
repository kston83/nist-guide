---
title: 'IR-9 Information Spillage Response'
description: 'NIST SP 800-53 Rev. 5 control IR-9, Information Spillage Response: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'IR-9 Information Spillage Response'
  order: 9
control:
  id: IR-9
  family: IR
  baselines: []
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Not in a baseline | Organization | 3 (0 in a baseline) |

**Related controls:** [CP-2](/controls/cp/cp-2/), [IR-6](/controls/ir/ir-6/), [PM-26](/controls/pm/pm-26/), [PM-27](/controls/pm/pm-27/), [PT-2](/controls/pt/pt-2/), [PT-3](/controls/pt/pt-3/), [PT-7](/controls/pt/pt-7/), [RA-7](/controls/ra/ra-7/)

## Control statement

Respond to information spills by:

- **a.** Assigning [Assignment: organization-defined personnel or roles] with responsibility for responding to information spills;
- **b.** Identifying the specific information involved in the system contamination;
- **c.** Alerting [Assignment: organization-defined personnel or roles] of the information spill using a method of communication not associated with the spill;
- **d.** Isolating the contaminated system or system component;
- **e.** Eradicating the information from the contaminated system or component;
- **f.** Identifying other systems or system components that may have been subsequently contaminated; and
- **g.** Performing the following additional actions: [Assignment: organization-defined actions].

<details>
<summary>NIST discussion</summary>

Information spillage refers to instances where information is placed on systems that are not authorized to process such information. Information spills occur when information that is thought to be a certain classification or impact level is transmitted to a system and subsequently is determined to be of a higher classification or impact level. At that point, corrective action is required. The nature of the response is based on the classification or impact level of the spilled information, the security capabilities of the system, the specific nature of the contaminated storage media, and the access authorizations of individuals with authorized access to the contaminated system. The methods used to communicate information about the spill after the fact do not involve methods directly associated with the actual spill to minimize the risk of further spreading the contamination before such contamination is isolated and eradicated.

</details>

## Control enhancements

<a id="ir-9.2"></a>

### IR-9(2) Training

*Baselines: Not in a baseline*

Provide information spillage response training [Assignment: organization-defined frequency].

<details>
<summary>Discussion and assessment objectives for IR-9(2)</summary>

Organizations establish requirements for responding to information spillage incidents in incident response plans. Incident response training on a regular basis helps to ensure that organizational personnel understand their individual responsibilities and what specific actions to take when spillage incidents occur.

Determine if information spillage response training is provided [Assignment: organization-defined frequency].

**Examine:** Incident response policy; procedures addressing information spillage response training; information spillage response training curriculum; information spillage response training materials; incident response plan; system security plan; information spillage response training records; other relevant documents or records.

**Interview:** Organizational personnel with incident response training responsibilities; organizational personnel with information security responsibilities.

</details>

<a id="ir-9.3"></a>

### IR-9(3) Post-spill Operations

*Baselines: Not in a baseline*

Implement the following procedures to ensure that organizational personnel impacted by information spills can continue to carry out assigned tasks while contaminated systems are undergoing corrective actions: [Assignment: organization-defined procedures].

<details>
<summary>Discussion and assessment objectives for IR-9(3)</summary>

Corrective actions for systems contaminated due to information spillages may be time-consuming. Personnel may not have access to the contaminated systems while corrective actions are being taken, which may potentially affect their ability to conduct organizational business.

Determine if [Assignment: organization-defined procedures] are implemented to ensure that organizational personnel impacted by information spills can continue to carry out assigned tasks while contaminated systems are undergoing corrective actions.

**Examine:** Incident response policy; procedures addressing incident response; procedures addressing information spillage; incident response plan; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with incident response responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for post-spill operations.

</details>

<a id="ir-9.4"></a>

### IR-9(4) Exposure to Unauthorized Personnel

*Baselines: Not in a baseline*

Employ the following controls for personnel exposed to information not within assigned access authorizations: [Assignment: organization-defined controls].

<details>
<summary>Discussion and assessment objectives for IR-9(4)</summary>

Controls include ensuring that personnel who are exposed to spilled information are made aware of the laws, executive orders, directives, regulations, policies, standards, and guidelines regarding the information and the restrictions imposed based on exposure to such information.

Determine if [Assignment: organization-defined controls] are employed for personnel exposed to information not within assigned access authorizations.

**Examine:** Incident response policy; procedures addressing incident response; procedures addressing information spillage; incident response plan; system security plan; security safeguards regarding information spillage/exposure to unauthorized personnel; other relevant documents or records.

**Interview:** Organizational personnel with incident response responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for dealing with information exposed to unauthorized personnel; mechanisms supporting and/or implementing safeguards for personnel exposed to information not within assigned access authorizations.

</details>

*Withdrawn enhancements: IR-9(1).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for IR-9</summary>

Determine if:

- **IR-09a.** [Assignment: organization-defined personnel or roles] is/are assigned the responsibility to respond to information spills;
- **IR-09b.** the specific information involved in the system contamination is identified in response to information spills;
- **IR-09c.** [Assignment: organization-defined personnel or roles] is/are alerted of the information spill using a method of communication not associated with the spill;
- **IR-09d.** the contaminated system or system component is isolated in response to information spills;
- **IR-09e.** the information is eradicated from the contaminated system or component in response to information spills;
- **IR-09f.** other systems or system components that may have been subsequently contaminated are identified in response to information spills;
- **IR-09g.** [Assignment: organization-defined actions] are performed in response to information spills.

**Examine:** Incident response policy; procedures addressing information spillage; incident response plan; system security plan; records of information spillage alerts/notifications; list of personnel who should receive alerts of information spillage; list of actions to be performed regarding information spillage; other relevant documents or records.

**Interview:** Organizational personnel with incident response responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for information spillage response; mechanisms supporting and/or implementing information spillage response actions and related communications.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
