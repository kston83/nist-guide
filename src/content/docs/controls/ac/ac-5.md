---
title: 'AC-5 Separation of Duties'
description: 'NIST SP 800-53 Rev. 5 control AC-5, Separation of Duties: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'AC-5 Separation of Duties'
  order: 5
control:
  id: AC-5
  family: AC
  baselines: [Moderate, High]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | Organization | None |

**Related controls:** [AC-2](/controls/ac/ac-2/), [AC-3](/controls/ac/ac-3/), [AC-6](/controls/ac/ac-6/), [AU-9](/controls/au/au-9/), [CM-5](/controls/cm/cm-5/), [CM-11](/controls/cm/cm-11/), [CP-9](/controls/cp/cp-9/), [IA-2](/controls/ia/ia-2/), [IA-4](/controls/ia/ia-4/), [IA-5](/controls/ia/ia-5/), [IA-12](/controls/ia/ia-12/), [MA-3](/controls/ma/ma-3/), [MA-5](/controls/ma/ma-5/), [PS-2](/controls/ps/ps-2/), [SA-8](/controls/sa/sa-8/), [SA-17](/controls/sa/sa-17/)

## Control statement

- **a.** Identify and document [Assignment: organization-defined duties of individuals] ; and
- **b.** Define system access authorizations to support separation of duties.

<details>
<summary>NIST discussion</summary>

Separation of duties addresses the potential for abuse of authorized privileges and helps to reduce the risk of malevolent activity without collusion. Separation of duties includes dividing mission or business functions and support functions among different individuals or roles, conducting system support functions with different individuals, and ensuring that security personnel who administer access control functions do not also administer audit functions. Because separation of duty violations can span systems and application domains, organizations consider the entirety of systems and system components when developing policy on separation of duties. Separation of duties is enforced through the account management activities in AC-2 , access control mechanisms in AC-3 , and identity management activities in IA-2, IA-4 , and IA-12.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for AC-5</summary>

Determine if:

- **AC-05a.** [Assignment: organization-defined duties of individuals] are identified and documented;
- **AC-05b.** system access authorizations to support separation of duties are defined.

**Examine:** Access control policy; procedures addressing divisions of responsibility and separation of duties; system configuration settings and associated documentation; list of divisions of responsibility and separation of duties; system access authorizations; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for defining appropriate divisions of responsibility and separation of duties; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Mechanisms implementing separation of duties policy.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
