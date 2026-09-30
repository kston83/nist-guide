---
title: 'AU-5 Response to Audit Logging Process Failures'
description: 'NIST SP 800-53 Rev. 5 control AU-5, Response to Audit Logging Process Failures: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'AU-5 Response to Audit Logging Process Failures'
  order: 5
control:
  id: AU-5
  family: AU
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | System | 5 (2 in a baseline) |

**Related controls:** [AU-2](/controls/au/au-2/), [AU-4](/controls/au/au-4/), [AU-7](/controls/au/au-7/), [AU-9](/controls/au/au-9/), [AU-11](/controls/au/au-11/), [AU-12](/controls/au/au-12/), [AU-14](/controls/au/au-14/), [SI-4](/controls/si/si-4/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Alert [Assignment: organization-defined personnel or roles] within [Assignment: organization-defined time period] in the event of an audit logging process failure; and
- **b.** Take the following additional actions: [Assignment: organization-defined additional actions].

<details>
<summary>NIST discussion</summary>

Audit logging process failures include software and hardware errors, failures in audit log capturing mechanisms, and reaching or exceeding audit log storage capacity. Organization-defined actions include overwriting oldest audit records, shutting down the system, and stopping the generation of audit records. Organizations may choose to define additional actions for audit logging process failures based on the type of failure, the location of the failure, the severity of the failure, or a combination of such factors. When the audit logging process failure is related to storage, the response is carried out for the audit log storage repository (i.e., the distinct system component where the audit logs are stored), the system on which the audit logs reside, the total audit log storage capacity of the organization (i.e., all audit log storage repositories combined), or all three. Organizations may decide to take no additional actions after alerting designated roles or personnel.

</details>

## Control enhancements

<a id="au-5.1"></a>

### AU-5(1) Storage Capacity Warning

*Baselines: High*

Provide a warning to [Assignment: organization-defined personnel, roles, and/or locations] within [Assignment: organization-defined time period] when allocated audit log storage volume reaches [Assignment: organization-defined percentage] of repository maximum audit log storage capacity.

<details>
<summary>Discussion and assessment objectives for AU-5(1)</summary>

Organizations may have multiple audit log storage repositories distributed across multiple system components with each repository having different storage volume capacities.

Determine if a warning is provided to [Assignment: organization-defined personnel, roles, and/or locations] within [Assignment: organization-defined time period] when allocated audit log storage volume reaches [Assignment: organization-defined percentage] of repository maximum audit log storage capacity.

**Examine:** Audit and accountability policy; procedures addressing response to audit processing failures; system design documentation; system security plan; privacy system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with audit and accountability responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators; system developers.

**Test:** Mechanisms implementing audit storage limit warnings.

</details>

<a id="au-5.2"></a>

### AU-5(2) Real-time Alerts

*Baselines: High*

Provide an alert within [Assignment: organization-defined real-time period] to [Assignment: organization-defined personnel, roles, and/or locations] when the following audit failure events occur: [Assignment: organization-defined audit logging failure events requiring real-time alerts].

<details>
<summary>Discussion and assessment objectives for AU-5(2)</summary>

Alerts provide organizations with urgent messages. Real-time alerts provide these messages at information technology speed (i.e., the time from event detection to alert occurs in seconds or less).

Determine if an alert is provided within [Assignment: organization-defined real-time period] to [Assignment: organization-defined personnel, roles, and/or locations] when [Assignment: organization-defined audit logging failure events requiring real-time alerts] occur.

**Examine:** Audit and accountability policy; procedures addressing response to audit processing failures; system design documentation; system security plan; privacy plan; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with audit and accountability responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators; system developers.

</details>

<a id="au-5.3"></a>

### AU-5(3) Configurable Traffic Volume Thresholds

*Baselines: Not in a baseline*

Enforce configurable network communications traffic volume thresholds reflecting limits on audit log storage capacity and [Selection (one or more): reject; delay] network traffic above those thresholds.

<details>
<summary>Discussion and assessment objectives for AU-5(3)</summary>

Organizations have the capability to reject or delay the processing of network communications traffic if audit logging information about such traffic is determined to exceed the storage capacity of the system audit logging function. The rejection or delay response is triggered by the established organizational traffic volume thresholds that can be adjusted based on changes to audit log storage capacity.

Determine if:

- **AU-05(03)[01]** configurable network communications traffic volume thresholds reflecting limits on audit log storage capacity are enforced;
- **AU-05(03)[02]** network traffic is [Selection (one or more): reject; delay] if network traffic volume is above configured thresholds.

**Examine:** Audit and accountability policy; procedures addressing response to audit processing failures; system design documentation; system security plan; privacy plan; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with audit and accountability responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators; system developers.

</details>

<a id="au-5.4"></a>

### AU-5(4) Shutdown on Failure

*Baselines: Not in a baseline*

Invoke a [Selection (one or more): full system shutdown; partial system shutdown; degraded operational mode with limited mission or business functionality available] in the event of [Assignment: organization-defined audit logging failures] , unless an alternate audit logging capability exists.

<details>
<summary>Discussion and assessment objectives for AU-5(4)</summary>

Organizations determine the types of audit logging failures that can trigger automatic system shutdowns or degraded operations. Because of the importance of ensuring mission and business continuity, organizations may determine that the nature of the audit logging failure is not so severe that it warrants a complete shutdown of the system supporting the core organizational mission and business functions. In those instances, partial system shutdowns or operating in a degraded mode with reduced capability may be viable alternatives.

Determine if [Selection (one or more): full system shutdown; partial system shutdown; degraded operational mode with limited mission or business functionality available] is/are invoked in the event of [Assignment: organization-defined audit logging failures] , unless an alternate audit logging capability exists.

**Examine:** Audit and accountability policy; procedures addressing response to audit processing failures; system design documentation; system security plan; privacy plan; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with audit and accountability responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators; system developers.

**Test:** System capability invoking system shutdown or degraded operational mode in the event of an audit processing failure.

</details>

<a id="au-5.5"></a>

### AU-5(5) Alternate Audit Logging Capability

*Baselines: Not in a baseline*

Provide an alternate audit logging capability in the event of a failure in primary audit logging capability that implements [Assignment: organization-defined alternate audit logging functionality].

<details>
<summary>Discussion and assessment objectives for AU-5(5)</summary>

Since an alternate audit logging capability may be a short-term protection solution employed until the failure in the primary audit logging capability is corrected, organizations may determine that the alternate audit logging capability need only provide a subset of the primary audit logging functionality that is impacted by the failure.

Determine if an alternate audit logging capability is provided in the event of a failure in primary audit logging capability that implements [Assignment: organization-defined alternate audit logging functionality].

**Examine:** Audit and accountability policy; procedures addressing response to audit processing failures; system design documentation; system security plan; privacy plan; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with audit and accountability responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators; system developers.

**Test:** Alternate audit logging capability.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for AU-5</summary>

Determine if:

- **AU-05a.** [Assignment: organization-defined personnel or roles] are alerted in the event of an audit logging process failure within [Assignment: organization-defined time period];
- **AU-05b.** [Assignment: organization-defined additional actions] are taken in the event of an audit logging process failure.

**Examine:** Audit and accountability policy; procedures addressing response to audit processing failures; system design documentation; system security plan; privacy plan; system configuration settings and associated documentation; list of personnel to be notified in case of an audit processing failure; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with audit and accountability responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators; system developers.

**Test:** Mechanisms implementing system response to audit processing failures.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

AU-5 asks the system to alert named people when audit logging fails, within a set time, and to take the actions you define. NIST's AU-5 discussion counts software and hardware errors, failures of the capture mechanism, and full audit log storage as failures. The actions it names include overwriting the oldest records, shutting the system down and stopping record generation; you may also decide on no action beyond the alert.

**Common implementations.** Components set to act on logging failures: on Linux, the auditd settings `space_left_action`, `admin_space_left_action`, `disk_full_action` and `disk_error_action`; on Windows, the audit failure policies and security log size settings. The central log platform raises an alert when a source stops sending for longer than its normal interval, and when forwarding or ingestion fails. Alerts open a ticket for the system administrators and the security operations team. The gap in the audit trail is recorded, so a later investigation knows which period has no logs.

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Who is alerted to a logging failure (a) | The system administrators and the security operations team |
| Time period for the alert (a) | 1 hour |
| Additional actions (b) | Restore logging and record the gap in the audit trail; for high-impact systems, stop processing that cannot be logged |
| Who is warned about storage capacity (AU-5(1), High) | The system administrators and the security operations team |
| Time period for the warning (AU-5(1), High) | 1 hour |
| Storage level that triggers the warning (AU-5(1), High) | 75 percent |
| Real-time period for alerts (AU-5(2), High) | 15 minutes |
| Who receives real-time alerts (AU-5(2), High) | The security operations team |
| Failure events that need real-time alerts (AU-5(2), High) | Loss of log forwarding from any component, and failure of the central log repository |

NIST's AU-5(2) discussion describes real-time alerts as taking seconds or less from detection to alert. The typical 15 minutes allows for noticing that a source has gone silent, which takes as long as its normal sending interval; send the alert itself as soon as the failure is detected. In the [Audit and Accountability policy](/templates/policies/au/), the system owner ensures the alerts are sent and the actions taken.

**Evidence assessors ask for.**

- Logging failure settings on a sample of components
- The log platform's rule for silent sources and failed forwarding, with its threshold
- An example alert and the ticket it opened, showing the time from failure to alert
- The record of a past logging gap and how it was closed
- For High, the storage warning setting (AU-5(1)) and the real-time alert rules (AU-5(2))

**Inheritance.** Silent-source detection on a central log platform is usually a common control. The system owns the failure settings on its components and acting on the alerts, so AU-5 is usually a hybrid control.

**Common findings.**

- A component that stopped sending logs weeks before anyone noticed.
- Alerts sent to a shared mailbox that nobody watches.
- Local logs overwritten when the disk filled, with no alert.
- Logging gaps restored but never recorded, so investigators assume the logs are complete.

**Enhancements in the Moderate baseline.** None. High adds [AU-5(1)](#au-5.1) storage capacity warning and [AU-5(2)](#au-5.2) real-time alerts. [AU-5(3)](#au-5.3), [AU-5(4)](#au-5.4) and [AU-5(5)](#au-5.5) are in no baseline.
