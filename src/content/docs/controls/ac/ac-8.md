---
title: 'AC-8 System Use Notification'
description: 'NIST SP 800-53 Rev. 5 control AC-8, System Use Notification: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'AC-8 System Use Notification'
  order: 8
control:
  id: AC-8
  family: AC
  baselines: [Low, Moderate, High]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | None |

**Related controls:** [AC-14](/controls/ac/ac-14/), [PL-4](/controls/pl/pl-4/), [SI-4](/controls/si/si-4/)

## Control statement

- **a.** Display [Assignment: organization-defined system use notification] to users before granting access to the system that provides privacy and security notices consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines and state that:
  - **1.** Users are accessing a U.S. Government system;
  - **2.** System usage may be monitored, recorded, and subject to audit;
  - **3.** Unauthorized use of the system is prohibited and subject to criminal and civil penalties; and
  - **4.** Use of the system indicates consent to monitoring and recording;
- **b.** Retain the notification message or banner on the screen until users acknowledge the usage conditions and take explicit actions to log on to or further access the system; and
- **c.** For publicly accessible systems:
  - **1.** Display system use information [Assignment: organization-defined conditions] , before granting further access to the publicly accessible system;
  - **2.** Display references, if any, to monitoring, recording, or auditing that are consistent with privacy accommodations for such systems that generally prohibit those activities; and
  - **3.** Include a description of the authorized uses of the system.

<details>
<summary>NIST discussion</summary>

System use notifications can be implemented using messages or warning banners displayed before individuals log in to systems. System use notifications are used only for access via logon interfaces with human users. Notifications are not required when human interfaces do not exist. Based on an assessment of risk, organizations consider whether or not a secondary system use notification is needed to access applications or other system resources after the initial network logon. Organizations consider system use notification messages or banners displayed in multiple languages based on organizational needs and the demographics of system users. Organizations consult with the privacy office for input regarding privacy messaging and the Office of the General Counsel or organizational equivalent for legal review and approval of warning banner content.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for AC-8</summary>

Determine if:

- **AC-08a.** [Assignment: organization-defined system use notification] is displayed to users before granting access to the system that provides privacy and security notices consistent with applicable laws, Executive Orders, directives, regulations, policies, standards, and guidelines;
  - **AC-08a.01** the system use notification states that users are accessing a U.S. Government system;
  - **AC-08a.02** the system use notification states that system usage may be monitored, recorded, and subject to audit;
  - **AC-08a.03** the system use notification states that unauthorized use of the system is prohibited and subject to criminal and civil penalties; and
  - **AC-08a.04** the system use notification states that use of the system indicates consent to monitoring and recording;
- **AC-08b.** the notification message or banner is retained on the screen until users acknowledge the usage conditions and take explicit actions to log on to or further access the system;
- **AC-08c.**
  - **AC-08c.01** for publicly accessible systems, system use information [Assignment: organization-defined conditions] is displayed before granting further access to the publicly accessible system;
  - **AC-08c.02** for publicly accessible systems, any references to monitoring, recording, or auditing that are consistent with privacy accommodations for such systems that generally prohibit those activities are displayed;
  - **AC-08c.03** for publicly accessible systems, a description of the authorized uses of the system is included.

**Examine:** Access control policy; privacy and security policies, procedures addressing system use notification; documented approval of system use notification messages or banners; system audit records; user acknowledgements of notification message or banner; system design documentation; system configuration settings and associated documentation; system use notification messages; system security plan; privacy plan; privacy impact assessment; privacy assessment report; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security and privacy responsibilities; legal counsel; system developers.

**Test:** Mechanisms implementing system use notification.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
