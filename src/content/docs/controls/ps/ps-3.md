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
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
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
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PS-3 asks you to screen people before you authorize their access to a system, and to rescreen them under conditions and, where called for, at a frequency you set. The screening is what the position's risk designation requires ([PS-2](/controls/ps/ps-2/)). NIST's PS-3 discussion gives background investigations and agency checks as examples. It also lets you set different rescreening conditions and frequencies by the kind of information a system handles.

**Common implementations.** The human resources office, or a screening vendor it hires, runs the checks the position's level requires and records the completion date. Employment and privacy laws limit what may be checked and when, and they vary by country and state, so settle the screening criteria with legal counsel. The [access request form](/templates/forms/access-request-form/) has a line for screening, so the account manager confirms it is complete before creating the account. On a transfer to a position with a higher designation, the [onboarding, transfer and termination checklist](/templates/forms/onboarding-transfer-and-termination-checklist/) has a rescreening step before the new access is granted.

For contractors, the contract requires the provider to screen its staff to the same criteria as employees in comparable positions, and to give you evidence ([PS-7](/controls/ps/ps-7/)).

**Organization-defined parameters.** Typical values, from the [Personnel Security policy](/templates/policies/ps/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Conditions that require rescreening (b) | The individual moves to a position with a higher risk designation, or information comes to light that raises a concern about their suitability |
| Rescreening frequency, where periodic rescreening applies (b) | Every 5 years for positions designated high risk |

In the policy, the human resources office does the screening and the rescreening.

**Evidence assessors ask for.**

- The screening criteria for each position designation
- For a sample of users, the screening completion date compared with the date their account was created
- Rescreening records for people who moved to positions with a higher designation
- For high-risk positions, the date of each person's last screening
- Evidence from external providers that their staff were screened

**Inheritance.** PS-3 is a common control, run by the human resources office. A system with users outside the organization's screening, such as contractor administrators or partner staff, must show how they were screened, which makes it hybrid for those users.

**Common findings.**

- Accounts created before screening was complete, with no recorded decision allowing it.
- Contractor staff screened by their employer, with no evidence given to the organization.
- No rescreening when someone moved into a privileged or higher-risk role.
- Periodic rescreening overdue for high-risk positions.

**Enhancements in the Moderate baseline.** None. [PS-3(1)](#ps-3.1) classified information, [PS-3(2)](#ps-3.2) formal indoctrination, [PS-3(3)](#ps-3.3) information requiring special protective measures and [PS-3(4)](#ps-3.4) citizenship requirements are in no baseline.

**Federal systems** (as of October 2026). [5 CFR 731.106](https://www.ecfr.gov/current/title-5/section-731.106) (as amended June 30, 2026) requires a background investigation for each person entering a covered position. It should be initiated before appointment, or as soon as possible where the agency did not initiate it in time (731.106(c)(1)). A hiring agency may not ask about criminal history, and for competitive service or career Senior Executive Service positions about credit history, before a conditional offer of employment, with limited exceptions (731.106(g)). Rescreening is now continuous vetting: "Continuous vetting for an individual in a public trust position satisfies the requirement for a periodic reinvestigation" (731.106(d)(1)). The agency must tell each covered employee of the requirement (731.106(d)(3)). So for federal positions, record the frequency parameter as continuous vetting to OPM's standards in place of a fixed interval. An upgraded investigation after a move to a higher risk level "should be initiated within 14 days" (731.106(e)). [FIPS 201-3](https://csrc.nist.gov/pubs/fips/201-3/final) (January 2022), section 2.2, requires the FBI National Criminal History Check to be completed and favorably adjudicated before a PIV Card is issued to someone with no prior investigation.
