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
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
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
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

AC-8 asks every system with a human logon to show a notice before granting access, and to keep it on screen until the user acknowledges it. The notice tells users their use may be monitored and recorded, that unauthorized use is prohibited, and that using the system means consent to monitoring. It is how users learn of the monitoring the organization does under [SI-4](/controls/si/si-4/). NIST's discussion says to have the privacy office review the privacy messaging and legal counsel approve the banner text.

**Common implementations.** One banner text approved by legal counsel and reused on every system. On Windows, the interactive logon message title and text set by group policy or device management. On Linux servers and network devices, a banner shown before the logon prompt. For web applications and single sign-on, a click-through page at the identity provider before the sign-in form, which covers every application behind it. For public websites (item c), a terms of use or privacy page linked from the landing page, with no monitoring warning that conflicts with the site's [privacy notice](/templates/forms/privacy-notice/). The [Rules of Behavior](/templates/forms/rules-of-behavior/) and the [access agreement](/templates/forms/access-agreement/) repeat the monitoring notice, so users acknowledge it in writing as well as on screen.

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| System use notification (a) | The organization's approved logon banner |
| Conditions for displaying use information on public systems (c.1) | On the landing page, before users submit any information |

**Evidence assessors ask for.**

- The approved banner text, with the record of legal and privacy review
- Screenshots or a demonstration of the banner on each logon interface: workstation, server, network device, identity provider and remote access
- The group policy, device management profile or configuration file that sets the banner
- For public systems, the landing page and the terms of use or privacy page it links to

**Inheritance.** The banner text and the settings pushed to workstations and the identity provider are usually common controls. The system owns the banner on its own logon interfaces, such as network devices, servers and applications outside single sign-on, and the use information on its public pages.

**Common findings.**

- Network devices, out-of-band management interfaces or console logons with no banner, or the vendor's default text.
- A banner that shows but does not require acknowledgment (item b).
- Banner text that differs between systems, or that was never reviewed by counsel.
- On federal systems, a banner that leaves out the government-system or penalties statements.

**Enhancements in the Moderate baseline.** AC-8 has no enhancements.

**Federal systems** (as of September 2026). The control text itself sets the content for federal systems: AC-8a requires the notice to state that users are accessing a U.S. Government system (a.1) and that unauthorized use is subject to criminal and civil penalties (a.3), besides the monitoring, prohibition and consent statements every organization includes. The [Access Control policy](/templates/policies/ac/) keeps those two statements in its federal section.
