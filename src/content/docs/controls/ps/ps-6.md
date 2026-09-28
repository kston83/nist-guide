---
title: 'PS-6 Access Agreements'
description: 'NIST SP 800-53 Rev. 5 control PS-6, Access Agreements: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PS-6 Access Agreements'
  order: 6
control:
  id: PS-6
  family: PS
  baselines: [Low, Moderate, High, Privacy]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | 2 (0 in a baseline) |

**Related controls:** [AC-17](/controls/ac/ac-17/), [PE-2](/controls/pe/pe-2/), [PL-4](/controls/pl/pl-4/), [PS-2](/controls/ps/ps-2/), [PS-3](/controls/ps/ps-3/), [PS-6](/controls/ps/ps-6/), [PS-7](/controls/ps/ps-7/), [PS-8](/controls/ps/ps-8/), [SA-21](/controls/sa/sa-21/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Develop and document access agreements for organizational systems;
- **b.** Review and update the access agreements [Assignment: organization-defined frequency] ; and
- **c.** Verify that individuals requiring access to organizational information and systems:
  - **1.** Sign appropriate access agreements prior to being granted access; and
  - **2.** Re-sign access agreements to maintain access to organizational systems when access agreements have been updated or [Assignment: organization-defined frequency].

<details>
<summary>NIST discussion</summary>

Access agreements include nondisclosure agreements, acceptable use agreements, rules of behavior, and conflict-of-interest agreements. Signed access agreements include an acknowledgement that individuals have read, understand, and agree to abide by the constraints associated with organizational systems to which access is authorized. Organizations can use electronic signatures to acknowledge access agreements unless specifically prohibited by organizational policy.

</details>

## Control enhancements

<a id="ps-6.2"></a>

### PS-6(2) Classified Information Requiring Special Protection

*Baselines: Not in a baseline*

Verify that access to classified information requiring special protection is granted only to individuals who:

- **(a)** Have a valid access authorization that is demonstrated by assigned official government duties;
- **(b)** Satisfy associated personnel security criteria; and
- **(c)** Have read, understood, and signed a nondisclosure agreement.

<details>
<summary>Discussion and assessment objectives for PS-6(2)</summary>

Classified information that requires special protection includes collateral information, Special Access Program (SAP) information, and Sensitive Compartmented Information (SCI). Personnel security criteria reflect applicable laws, executive orders, directives, regulations, policies, standards, and guidelines.

Determine if:

- **PS-06(02)(a)** access to classified information requiring special protection is granted only to individuals who have a valid access authorization that is demonstrated by assigned official government duties;
- **PS-06(02)(b)** access to classified information requiring special protection is granted only to individuals who satisfy associated personnel security criteria;
- **PS-06(02)(c)** access to classified information requiring special protection is granted only to individuals who have read, understood, and signed a non-disclosure agreement.

**Examine:** Personnel security policy; procedures addressing access agreements for organizational information and systems; access agreements; access authorizations; personnel security criteria; signed non-disclosure agreements; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with personnel security responsibilities; organizational personnel who have signed non-disclosure agreements; organizational personnel with information security responsibilities.

**Test:** Organizational processes for access to classified information requiring special protection.

</details>

<a id="ps-6.3"></a>

### PS-6(3) Post-employment Requirements

*Baselines: Not in a baseline*

- **(a)** Notify individuals of applicable, legally binding post-employment requirements for protection of organizational information; and
- **(b)** Require individuals to sign an acknowledgment of these requirements, if applicable, as part of granting initial access to covered information.

<details>
<summary>Discussion and assessment objectives for PS-6(3)</summary>

Organizations consult with the Office of the General Counsel regarding matters of post-employment requirements on terminated individuals.

Determine if:

- **PS-06(03)(a)** individuals are notified of applicable, legally binding post-employment requirements for the protection of organizational information;
- **PS-06(03)(b)** individuals are required to sign an acknowledgement of applicable, legally binding post-employment requirements as part of being granted initial access to covered information.

**Examine:** Personnel security policy; procedures addressing access agreements for organizational information and systems; signed post-employment acknowledgement forms; access agreements; list of applicable, legally binding post-employment requirements; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with personnel security responsibilities; organizational personnel who have signed access agreements that include post-employment requirements; organizational personnel with information security responsibilities.

**Test:** Organizational processes for post-employment requirements; mechanisms supporting notifications and individual acknowledgements of post-employment requirements.

</details>

*Withdrawn enhancements: PS-6(1).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PS-6</summary>

Determine if:

- **PS-06a.** access agreements are developed and documented for organizational systems;
- **PS-06b.** the access agreements are reviewed and updated [Assignment: organization-defined frequency];
- **PS-06c.**
  - **PS-06c.01** individuals requiring access to organizational information and systems sign appropriate access agreements prior to being granted access;
  - **PS-06c.02** individuals requiring access to organizational information and systems re-sign access agreements to maintain access to organizational systems when access agreements have been updated or [Assignment: organization-defined frequency].

**Examine:** Personnel security policy; personnel security procedures; procedures addressing access agreements for organizational information and systems; access control policy; access control procedures; access agreements (including non-disclosure agreements, acceptable use agreements, rules of behavior, and conflict-of-interest agreements); documentation of access agreement reviews, updates, and re-signing; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with personnel security responsibilities; organizational personnel who have signed/resigned access agreements; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for reviewing, updating, and re-signing access agreements; mechanisms supporting the reviewing, updating, and re-signing of access agreements.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
