---
title: 'AU-4 Audit Log Storage Capacity'
description: 'NIST SP 800-53 Rev. 5 control AU-4, Audit Log Storage Capacity: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'AU-4 Audit Log Storage Capacity'
  order: 4
control:
  id: AU-4
  family: AU
  baselines: [Low, Moderate, High]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 1 (0 in a baseline) |

**Related controls:** [AU-2](/controls/au/au-2/), [AU-5](/controls/au/au-5/), [AU-6](/controls/au/au-6/), [AU-7](/controls/au/au-7/), [AU-9](/controls/au/au-9/), [AU-11](/controls/au/au-11/), [AU-12](/controls/au/au-12/), [AU-14](/controls/au/au-14/), [SI-4](/controls/si/si-4/)

## Control statement

Allocate audit log storage capacity to accommodate [Assignment: organization-defined audit log retention requirements].

<details>
<summary>NIST discussion</summary>

Organizations consider the types of audit logging to be performed and the audit log processing requirements when allocating audit log storage capacity. Allocating sufficient audit log storage capacity reduces the likelihood of such capacity being exceeded and resulting in the potential loss or reduction of audit logging capability.

</details>

## Control enhancements

<a id="au-4.1"></a>

### AU-4(1) Transfer to Alternate Storage

*Baselines: Not in a baseline*

Transfer audit logs [Assignment: organization-defined frequency] to a different system, system component, or media other than the system or system component conducting the logging.

<details>
<summary>Discussion and assessment objectives for AU-4(1)</summary>

Audit log transfer, also known as off-loading, is a common process in systems with limited audit log storage capacity and thus supports availability of the audit logs. The initial audit log storage is only used in a transitory fashion until the system can communicate with the secondary or alternate system allocated to audit log storage, at which point the audit logs are transferred. Transferring audit logs to alternate storage is similar to AU-9(2) in that audit logs are transferred to a different entity. However, the purpose of selecting AU-9(2) is to protect the confidentiality and integrity of audit records. Organizations can select either control enhancement to obtain the benefit of increased audit log storage capacity and preserving the confidentiality, integrity, and availability of audit records and logs.

Determine if audit logs are transferred [Assignment: organization-defined frequency] to a different system, system component, or media other than the system or system component conducting the logging.

**Examine:** Audit and accountability policy; system security plan; privacy plan; procedures addressing audit storage capacity; procedures addressing transfer of system audit records to secondary or alternate systems; system design documentation; system configuration settings and associated documentation; logs of audit record transfers to secondary or alternate systems; system audit records transferred to secondary or alternate systems; other relevant documents or records.

**Interview:** Organizational personnel with audit storage capacity planning responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators.

**Test:** Mechanisms supporting the transfer of audit records onto a different system.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for AU-4</summary>

Determine if audit log storage capacity is allocated to accommodate [Assignment: organization-defined audit log retention requirements].

**Examine:** Audit and accountability policy; procedures addressing audit storage capacity; system security plan; privacy plan; system design documentation; system configuration settings and associated documentation; audit record storage requirements; audit record storage capability for system components; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with audit and accountability responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators; system developers.

**Test:** Audit record storage capacity and related configuration settings.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
