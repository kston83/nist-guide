---
title: 'PS-3 Personnel Screening'
description: 'NIST SP 800-53 Rev. 5 control PS-3, Personnel Screening: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PS-3 Personnel Screening'
  order: 3
control:
  id: PS-3
  family: PS
  baselines: [Low, Moderate, High]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 4 (0 in a baseline) |

**Related controls:** [AC-2](/controls/ac/ac-2/), [IA-4](/controls/ia/ia-4/), [MA-5](/controls/ma/ma-5/), [PE-2](/controls/pe/pe-2/), [PM-12](/controls/pm/pm-12/), [PS-2](/controls/ps/ps-2/), [PS-6](/controls/ps/ps-6/), [PS-7](/controls/ps/ps-7/), [SA-21](/controls/sa/sa-21/)

## Control statement

- **a.** Screen individuals prior to authorizing access to the system; and
- **b.** Rescreen individuals in accordance with [Assignment: organization-defined conditions requiring rescreening and, where rescreening is so indicated, the frequency of rescreening].

<details>
<summary>NIST discussion</summary>

Personnel screening and rescreening activities reflect applicable laws, executive orders, directives, regulations, policies, standards, guidelines, and specific criteria established for the risk designations of assigned positions. Examples of personnel screening include background investigations and agency checks. Organizations may define different rescreening conditions and frequencies for personnel accessing systems based on types of information processed, stored, or transmitted by the systems.

</details>

## Control enhancements

<a id="ps-3.1"></a>

### PS-3(1) Classified Information

*Baselines: Not in a baseline*

Verify that individuals accessing a system processing, storing, or transmitting classified information are cleared and indoctrinated to the highest classification level of the information to which they have access on the system.

<details>
<summary>Discussion and assessment objectives for PS-3(1)</summary>

Classified information is the most sensitive information that the Federal Government processes, stores, or transmits. It is imperative that individuals have the requisite security clearances and system access authorizations prior to gaining access to such information. Access authorizations are enforced by system access controls (see AC-3 ) and flow controls (see AC-4).

Determine if:

- **PS-03(01)[01]** individuals accessing a system processing, storing, or transmitting classified information are cleared;
- **PS-03(01)[02]** individuals accessing a system processing, storing, or transmitting classified information are indoctrinated to the highest classification level of the information to which they have access on the system.

**Examine:** Personnel security policy; procedures addressing personnel screening; records of screened personnel; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with personnel security responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for clearing and indoctrinating personnel for access to classified information.

</details>

<a id="ps-3.2"></a>

### PS-3(2) Formal Indoctrination

*Baselines: Not in a baseline*

Verify that individuals accessing a system processing, storing, or transmitting types of classified information that require formal indoctrination, are formally indoctrinated for all the relevant types of information to which they have access on the system.

<details>
<summary>Discussion and assessment objectives for PS-3(2)</summary>

Types of classified information that require formal indoctrination include Special Access Program (SAP), Restricted Data (RD), and Sensitive Compartmented Information (SCI).

Determine if individuals accessing a system processing, storing, or transmitting types of classified information that require formal indoctrination are formally indoctrinated for all of the relevant types of information to which they have access on the system.

**Examine:** Personnel security policy; procedures addressing personnel screening; indoctrination documents; records of screened personnel; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with personnel security responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for formal indoctrination for all relevant types of information to which personnel have access.

</details>

<a id="ps-3.3"></a>

### PS-3(3) Information Requiring Special Protective Measures

*Baselines: Not in a baseline*

Verify that individuals accessing a system processing, storing, or transmitting information requiring special protection:

- **(a)** Have valid access authorizations that are demonstrated by assigned official government duties; and
- **(b)** Satisfy [Assignment: organization-defined additional personnel screening criteria].

<details>
<summary>Discussion and assessment objectives for PS-3(3)</summary>

Organizational information that requires special protection includes controlled unclassified information. Personnel security criteria include position sensitivity background screening requirements.

Determine if:

- **PS-03(03)(a)** individuals accessing a system processing, storing, or transmitting information requiring special protection have valid access authorizations that are demonstrated by assigned official government duties;
- **PS-03(03)(b)** individuals accessing a system processing, storing, or transmitting information requiring special protection satisfy [Assignment: organization-defined additional personnel screening criteria].

**Examine:** Personnel security policy; access control policy, procedures addressing personnel screening; records of screened personnel; screening criteria; records of access authorizations; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with personnel security responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for ensuring valid access authorizations for information requiring special protection; organizational process for additional personnel screening for information requiring special protection.

</details>

<a id="ps-3.4"></a>

### PS-3(4) Citizenship Requirements

*Baselines: Not in a baseline*

Verify that individuals accessing a system processing, storing, or transmitting [Assignment: organization-defined information types] meet [Assignment: organization-defined citizenship requirements].

<details>
<summary>Discussion and assessment objectives for PS-3(4)</summary>

None.

Determine if individuals accessing a system processing, storing, or transmitting [Assignment: organization-defined information types] meet [Assignment: organization-defined citizenship requirements].

**Examine:** Personnel security policy; access control policy, procedures addressing personnel screening; records of screened personnel; screening criteria; records of access authorizations; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with personnel security responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for ensuring valid access authorizations for information requiring citizenship; organizational process for additional personnel screening for information requiring citizenship.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PS-3</summary>

Determine if:

- **PS-03a.** individuals are screened prior to authorizing access to the system;
- **PS-03b.**
  - **PS-03b.[01]** individuals are rescreened in accordance with [Assignment: organization-defined conditions requiring rescreening];
  - **PS-03b.[02]** where rescreening is so indicated, individuals are rescreened [Assignment: organization-defined frequency].

**Examine:** Personnel security policy; procedures addressing personnel screening; records of screened personnel; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with personnel security responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for personnel screening.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
