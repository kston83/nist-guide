---
title: 'PM-5 System Inventory'
description: 'NIST SP 800-53 Rev. 5 control PM-5, System Inventory: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PM-5 System Inventory'
  order: 5
control:
  id: PM-5
  family: PM
  baselines: []
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Not in a baseline | Organization | 1 (1 in a baseline) |

## Control statement

Develop and update [Assignment: organization-defined frequency] an inventory of organizational systems.

<details>
<summary>NIST discussion</summary>

OMB A-130 provides guidance on developing systems inventories and associated reporting requirements. System inventory refers to an organization-wide inventory of systems, not system components as described in CM-8.

</details>

## Control enhancements

<a id="pm-5.1"></a>

### PM-5(1) Inventory of Personally Identifiable Information

*Baselines: Privacy*

Establish, maintain, and update [Assignment: organization-defined frequency] an inventory of all systems, applications, and projects that process personally identifiable information.

<details>
<summary>Discussion and assessment objectives for PM-5(1)</summary>

An inventory of systems, applications, and projects that process personally identifiable information supports the mapping of data actions, providing individuals with privacy notices, maintaining accurate personally identifiable information, and limiting the processing of personally identifiable information when such information is not needed for operational purposes. Organizations may use this inventory to ensure that systems only process the personally identifiable information for authorized purposes and that this processing is still relevant and necessary for the purpose specified therein.

Determine if:

- **PM-05(01)[01]** an inventory of all systems, applications, and projects that process personally identifiable information is established;
- **PM-05(01)[02]** an inventory of all systems, applications, and projects that process personally identifiable information is maintained;
- **PM-05(01)[03]** an inventory of all systems, applications, and projects that process personally identifiable information is updated [Assignment: organization-defined frequency].

**Examine:** Procedures addressing system inventory development, maintenance, and updates; OMB FISMA reporting guidance; privacy program plan; information security program plan; personally identifiable information processing policy; system inventory; personally identifiable information inventory; data mapping documentation; other relevant documents or records.

**Interview:** Organizational personnel with privacy program planning and plan implementation responsibilities; organizational personnel responsible for developing and maintaining the system inventory; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for system inventory development, maintenance, and updates; mechanisms supporting the system inventory.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PM-5</summary>

Determine if:

- **PM-05[01]** an inventory of organizational systems is developed;
- **PM-05[02]** the inventory of organizational systems is updated [Assignment: organization-defined frequency].

**Examine:** Information security program plan; system inventory; procedures addressing system inventory development and maintenance; OMB FISMA reporting guidance; other relevant documents or records.

**Interview:** Organizational personnel with information security program planning and plan implementation responsibilities; organizational personnel responsible for developing and maintaining the system inventory; organizational personnel with information security responsibilities.

**Test:** Organizational processes for system inventory development and maintenance; mechanisms supporting the system inventory.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PM-5 asks for one organization-wide inventory of systems, updated at a frequency you set. NIST's PM-5 discussion says it is an inventory of systems, not of the components inside them, which is [CM-8](/controls/cm/cm-8/). The inventory is the starting point for authorization, continuous monitoring and reporting: a system missing from it has no owner, no authorization and no assessment.

[SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) task P-18 has the system owner register each system, and "as part of the system registration process, organizations add the system to the organization-wide system inventory." The entry is updated with the security categorization once the Categorize step is done.

**Common implementations.** A register in a GRC tool or spreadsheet, using the [System Inventory template](/templates/forms/system-inventory/). Each entry records the system owner, authorizing official, categorization, baseline, hosting, interconnections, authorization status and dates, and whether it processes personally identifiable information. The [Program Management policy](/templates/policies/pm/) has the Chief Information Security Officer keep the inventory, and each system owner add a system before it is authorized or placed in operation.

Keep it complete by reconciling it on each update with the authorization records, the cloud and software-as-a-service subscriptions that procurement and finance pay for, and network discovery. Each system's [component inventory](/templates/forms/component-inventory/) is compared with it to confirm the boundary. Keep retired systems with their retirement date rather than deleting them.

**Organization-defined parameters.** From `templates/policy/pm/`. Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Inventory update frequency (PM-5) | Quarterly, and whenever a system is authorized, significantly changed or retired |
| Personally identifiable information inventory update frequency (PM-5(1)) | At least annually, and whenever a privacy impact assessment is completed or updated |

**Evidence assessors ask for.**

- The current inventory, with its update history
- The procedure for registering a new system and retiring an old one
- Records of reconciliation against authorization records, subscriptions and discovery scans
- A sample check: every authorization decision matches an inventory entry, with the same status and dates
- For PM-5(1), the list of systems, applications and projects that process personally identifiable information, with the privacy official's review dates

**Inheritance.** PM-5 is implemented once, for the whole organization, and every system relies on it. Each system owner supplies and maintains the system's entry.

**Common findings.**

- Software-as-a-service applications bought by business units and never registered.
- Systems operated by contractors on the organization's behalf left off the inventory.
- Authorization status and dates that do not match the authorization letters.
- Entries with no owner or authorizing official.
- An inventory updated only before an audit.

**Enhancements in the Privacy baseline.** [PM-5(1)](#pm-5.1) asks for an inventory of all systems, applications and projects that process personally identifiable information, kept and updated at a frequency you set. NIST's discussion says it supports mapping data actions, giving privacy notices, keeping the information accurate, and limiting processing to authorized and still-necessary purposes. The PM-5(1) clause gives this inventory to the senior privacy official.

The System Inventory template's "Processes PII" column, with its privacy impact assessment reference, covers the systems. PM-5(1) also reaches applications and projects that are not systems, so add rows for them or keep a separate list the privacy official owns. Each entry links its [privacy impact assessment](/templates/reports/privacy-impact-assessment/), which is why a new or updated assessment triggers an update.

**Federal systems** (as of October 2026). [44 U.S.C. § 3505(c)](https://www.govinfo.gov/link/uscode/44/3505?link-type=html) requires the agency head to keep an inventory of information systems. The Code carries two subsections (c), added by two 2002 laws: one for major information systems and one for all information systems, each including national security systems. Both require the inventory to identify each system's interfaces with other systems and networks, to be updated at least annually, and to be available to the Comptroller General. [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), main body section 5.a(1)(a), requires an inventory of major information systems (i) and an inventory of systems that process personally identifiable information (ii). Its footnote 4 says every system is subject to FISMA whether or not it is major, and footnote 5 allows the two inventories to be combined. Appendix I, section 4.j(2)(c), requires systems operated by contractors on the agency's behalf to be included.
