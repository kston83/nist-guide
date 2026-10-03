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
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
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
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

AC-5 asks you to name the duties that no one person should hold together, and to set up access so the system keeps them apart. The aim is that misuse of access, or a single mistake, needs a second person to go unnoticed. NIST's discussion gives one pairing every system should consider: people who administer access control should not also administer audit functions.

**Common implementations.** A short table in the [account management procedure](/templates/procedures/account-management-procedure/) (section 4) or the [system security plan](/templates/plans/system-security-plan/) listing the duty pairs and the roles that hold each side. Access requests approved by someone other than the requester, enforced in the ticketing or identity governance tool. Code changes that need an approving review from someone other than the author before the pipeline deploys them to production (see [CM-5](/controls/cm/cm-5/)). Audit logs sent to a log platform that system administrators cannot change or delete (see [AU-9](/controls/au/au-9/)). Identity governance tools that flag toxic combinations of roles at request time and in each access review.

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Duties of individuals that require separation (a) | Requesting and approving access; developing and deploying code to production; administering a system and reviewing its audit logs |

**Evidence assessors ask for.**

- The documented list of duties that require separation, with the roles on each side
- Role definitions or a role matrix for the system, from the identity provider or the application
- A sample of access requests showing the approver is not the requester
- Pipeline or repository settings requiring an independent review before deployment, and a sample of merged changes
- Permissions on the audit log platform, showing who can administer it and who can change or delete records
- The last access review, with any conflicting role combinations found and how they were resolved

**Inheritance.** The identity governance tool and the central log platform are often common controls, and they carry part of the separation. The system owns its own duty pairs and its application roles, so AC-5 is usually a hybrid control.

**Common findings.**

- Small teams where one administrator requests, approves and grants their own access, with no compensating review.
- Developers with standing write access to production.
- System administrators who can delete or alter the audit logs of the systems they run.
- A documented list of duties that the role design does not enforce.

**Enhancements in the Moderate baseline.** AC-5 has no enhancements.
