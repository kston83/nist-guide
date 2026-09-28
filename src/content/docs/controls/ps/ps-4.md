---
title: 'PS-4 Personnel Termination'
description: 'NIST SP 800-53 Rev. 5 control PS-4, Personnel Termination: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PS-4 Personnel Termination'
  order: 4
control:
  id: PS-4
  family: PS
  baselines: [Low, Moderate, High]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 2 (1 in a baseline) |

**Related controls:** [AC-2](/controls/ac/ac-2/), [IA-4](/controls/ia/ia-4/), [PE-2](/controls/pe/pe-2/), [PM-12](/controls/pm/pm-12/), [PS-6](/controls/ps/ps-6/), [PS-7](/controls/ps/ps-7/)

## Control statement

Upon termination of individual employment:

- **a.** Disable system access within [Assignment: organization-defined time period];
- **b.** Terminate or revoke any authenticators and credentials associated with the individual;
- **c.** Conduct exit interviews that include a discussion of [Assignment: organization-defined information security topics];
- **d.** Retrieve all security-related organizational system-related property; and
- **e.** Retain access to organizational information and systems formerly controlled by terminated individual.

<details>
<summary>NIST discussion</summary>

System property includes hardware authentication tokens, system administration technical manuals, keys, identification cards, and building passes. Exit interviews ensure that terminated individuals understand the security constraints imposed by being former employees and that proper accountability is achieved for system-related property. Security topics at exit interviews include reminding individuals of nondisclosure agreements and potential limitations on future employment. Exit interviews may not always be possible for some individuals, including in cases related to the unavailability of supervisors, illnesses, or job abandonment. Exit interviews are important for individuals with security clearances. The timely execution of termination actions is essential for individuals who have been terminated for cause. In certain situations, organizations consider disabling the system accounts of individuals who are being terminated prior to the individuals being notified.

</details>

## Control enhancements

<a id="ps-4.1"></a>

### PS-4(1) Post-employment Requirements

*Baselines: Not in a baseline*

- **(a)** Notify terminated individuals of applicable, legally binding post-employment requirements for the protection of organizational information; and
- **(b)** Require terminated individuals to sign an acknowledgment of post-employment requirements as part of the organizational termination process.

<details>
<summary>Discussion and assessment objectives for PS-4(1)</summary>

Organizations consult with the Office of the General Counsel regarding matters of post-employment requirements on terminated individuals.

Determine if:

- **PS-04(01)(a)** terminated individuals are notified of applicable, legally binding post-employment requirements for the protection of organizational information;
- **PS-04(01)(b)** terminated individuals are required to sign an acknowledgement of post-employment requirements as part of the organizational termination process.

**Examine:** Personnel security policy; procedures addressing personnel termination; signed post-employment acknowledgement forms; list of applicable, legally binding post-employment requirements; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with personnel security responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for post-employment requirements.

</details>

<a id="ps-4.2"></a>

### PS-4(2) Automated Actions

*Baselines: High*

Use [Assignment: organization-defined automated mechanisms] to [Selection (one or more): notify [Assignment: organization-defined personnel or roles] of individual termination actions; disable access to system resources].

<details>
<summary>Discussion and assessment objectives for PS-4(2)</summary>

In organizations with many employees, not all personnel who need to know about termination actions receive the appropriate notifications, or if such notifications are received, they may not occur in a timely manner. Automated mechanisms can be used to send automatic alerts or notifications to organizational personnel or roles when individuals are terminated. Such automatic alerts or notifications can be conveyed in a variety of ways, including via telephone, electronic mail, text message, or websites. Automated mechanisms can also be employed to quickly and thoroughly disable access to system resources after an employee is terminated.

Determine if [Assignment: organization-defined automated mechanisms] are used to [Selection (one or more): notify [Assignment: organization-defined personnel or roles] of individual termination actions; disable access to system resources].

**Examine:** Personnel security policy; procedures addressing personnel termination; system design documentation; system configuration settings and associated documentation; records of personnel termination actions; automated notifications of employee terminations; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with personnel security responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for personnel termination; automated mechanisms supporting and/or implementing personnel termination notifications.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PS-4</summary>

Determine if:

- **PS-04a.** upon termination of individual employment, system access is disabled within [Assignment: organization-defined time period];
- **PS-04b.** upon termination of individual employment, any authenticators and credentials are terminated or revoked;
- **PS-04c.** upon termination of individual employment, exit interviews that include a discussion of [Assignment: organization-defined information security topics] are conducted;
- **PS-04d.** upon termination of individual employment, all security-related organizational system-related property is retrieved;
- **PS-04e.** upon termination of individual employment, access to organizational information and systems formerly controlled by the terminated individual are retained.

**Examine:** Personnel security policy; procedures addressing personnel termination; records of personnel termination actions; list of system accounts; records of terminated or revoked authenticators/credentials; records of exit interviews; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with personnel security responsibilities; organizational personnel with account management responsibilities; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Organizational processes for personnel termination; mechanisms supporting and/or implementing personnel termination notifications; mechanisms for disabling system access/revoking authenticators.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
