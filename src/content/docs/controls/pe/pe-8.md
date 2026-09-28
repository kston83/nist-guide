---
title: 'PE-8 Visitor Access Records'
description: 'NIST SP 800-53 Rev. 5 control PE-8, Visitor Access Records: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PE-8 Visitor Access Records'
  order: 8
control:
  id: PE-8
  family: PE
  baselines: [Low, Moderate, High]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 2 (2 in a baseline) |

**Related controls:** [PE-2](/controls/pe/pe-2/), [PE-3](/controls/pe/pe-3/), [PE-6](/controls/pe/pe-6/)

## Control statement

- **a.** Maintain visitor access records to the facility where the system resides for [Assignment: organization-defined time period];
- **b.** Review visitor access records [Assignment: organization-defined frequency] ; and
- **c.** Report anomalies in visitor access records to [Assignment: organization-defined personnel].

<details>
<summary>NIST discussion</summary>

Visitor access records include the names and organizations of individuals visiting, visitor signatures, forms of identification, dates of access, entry and departure times, purpose of visits, and the names and organizations of individuals visited. Access record reviews determine if access authorizations are current and are still required to support organizational mission and business functions. Access records are not required for publicly accessible areas.

</details>

## Control enhancements

<a id="pe-8.1"></a>

### PE-8(1) Automated Records Maintenance and Review

*Baselines: High*

Maintain and review visitor access records using [Assignment: organization-defined organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for PE-8(1)</summary>

Visitor access records may be stored and maintained in a database management system that is accessible by organizational personnel. Automated access to such records facilitates record reviews on a regular basis to determine if access authorizations are current and still required to support organizational mission and business functions.

Determine if:

- **PE-08(01)[01]** visitor access records are maintained using [Assignment: organization-defined automated mechanisms];
- **PE-08(01)[02]** visitor access records are reviewed using [Assignment: organization-defined automated mechanisms].

**Examine:** Physical and environmental protection policy; procedures addressing visitor access records; automated mechanisms supporting management of visitor access records; visitor access control logs or records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with visitor access record responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for maintaining and reviewing visitor access records; automated mechanisms supporting and/or implementing the maintenance and review of visitor access records.

</details>

<a id="pe-8.3"></a>

### PE-8(3) Limit Personally Identifiable Information Elements

*Baselines: Privacy*

Limit personally identifiable information contained in visitor access records to the following elements identified in the privacy risk assessment: [Assignment: organization-defined elements].

<details>
<summary>Discussion and assessment objectives for PE-8(3)</summary>

Organizations may have requirements that specify the contents of visitor access records. Limiting personally identifiable information in visitor access records when such information is not needed for operational purposes helps reduce the level of privacy risk created by a system.

Determine if personally identifiable information contained in visitor access records is limited to [Assignment: organization-defined elements] identified in the privacy risk assessment.

**Examine:** Physical and environmental protection policy; personally identifiable information processing policy; privacy risk assessment documentation; privacy impact assessment; visitor access records; personally identifiable information inventory; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with visitor access records responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for maintaining and reviewing visitor access records.

</details>

*Withdrawn enhancements: PE-8(2).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PE-8</summary>

Determine if:

- **PE-08a.** visitor access records for the facility where the system resides are maintained for [Assignment: organization-defined time period];
- **PE-08b.** visitor access records are reviewed [Assignment: organization-defined frequency];
- **PE-08c.** visitor access records anomalies are reported to [Assignment: organization-defined personnel].

**Examine:** Physical and environmental protection policy; procedures addressing visitor access records; visitor access control logs or records; visitor access record or log reviews; system security plan; privacy plan; privacy impact assessment; privacy risk assessment documentation; other relevant documents or records.

**Interview:** Organizational personnel with visitor access record responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for maintaining and reviewing visitor access records; mechanisms supporting and/or implementing the maintenance and review of visitor access records.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
