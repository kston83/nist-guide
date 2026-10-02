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
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
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

Maintain and review visitor access records using [Assignment: organization-defined automated mechanisms].

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
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PE-8 asks you to keep records of visitors to the facility where the system resides for a set period (a), review them on a schedule (b), and report anomalies (c). NIST's PE-8 discussion lists what the records include: names and organizations of visitors, visitor signatures, forms of identification, dates of access, entry and departure times, purpose of visits, and names and organizations of the individuals visited. It says reviews determine whether access authorizations are current and still required, and that records are not required for publicly accessible areas. People with permanent credentials are not visitors; they are on the [physical access list](/templates/forms/physical-access-list/) ([PE-2](/controls/pe/pe-2/)).

The [visitor log](/templates/forms/visitor-log/) holds the record fields, the retention period, the monthly reviews and the anomalies reported. It also records each visitor's escort and badge, the evidence for the escort requirement in [PE-3](/controls/pe/pe-3/) (PE-3d).

**Common implementations.** Reception signs in every visitor to a non-public area, checks identification, issues a day badge and records the escort, in a paper log or an electronic visitor management system that prints the badge. Departure times and returned badges are recorded at sign-out. Each month the facilities manager reviews the records for visitors with no departure time, badges not returned, visits outside normal hours, visits with no escort, and repeat visitors who should have a PE-2 authorization instead, and reports anomalies to the security operations team. Maintenance personnel who work on the system also appear in the [maintenance log](/templates/forms/maintenance-log/) ([MA-5](/controls/ma/ma-5/)).

**Organization-defined parameters.** Typical values, from the [Physical and Environmental Protection policy](/templates/policies/pe/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Retention period for visitor access records (a) | 2 years, or longer where the organization's records retention schedule requires |
| Review frequency (b) | At least monthly |
| Who receives reports of anomalies (c) | The facilities manager and the security operations team |

The policy lists the fields each record holds and the checks each review makes, and has the security operations team handle any anomaly that suggests an incident under the [incident response plan](/templates/plans/incident-response-plan/) ([IR-6](/controls/ir/ir-6/)).

**Evidence assessors ask for.**

- The visitor log or visitor management system for each entrance where visitors are received
- The records for a few dates the assessor picks, checked for escorts, badges and departure times
- The retention setting or records schedule, and the oldest records still held
- The last few monthly reviews, with the anomalies found and to whom they were reported
- For PE-8(1), the visitor management system and its review reports

**Inheritance.** For a system hosted in a cloud service or colocation data center, the provider keeps visitor records for its facility, and the [system security plan](/templates/plans/system-security-plan/) records PE-8 as inherited for it. The organization keeps its own records for its offices and equipment rooms, usually as a common control run by the facilities manager for every system in the building. In a shared building, a landlord's lobby sign-in does not record escorts or the person visited; keep the organization's own log at its own reception.

**Common findings.**

- Visitor logs with missing departure times, unreadable names, or no escort recorded.
- Records discarded after a few months, or kept in a binder no one reviews.
- Contractors who come every day signing in as visitors for months instead of being authorized under PE-2.
- Paper sign-in sheets that show every earlier visitor's name and details to the next one.

**Enhancements in the Moderate baseline.** None. High adds [PE-8(1)](#pe-8.1) automated records maintenance and review. PE-8(2) is withdrawn.

- **PE-8(1)** (High) maintains and reviews visitor access records with automated mechanisms. NIST's discussion says the records may be kept in a database accessible to organizational personnel, and that automated access makes regular reviews easier. Typical values: maintain them using an electronic visitor management system, and review them using the visitor management system's reports, compared with the physical access control system's logs. The system meets the maintenance half by printing the badge and recording the escort; the review half needs reports, such as open visits and badges not returned, that someone reads on the PE-8 schedule.

**Enhancements in the Privacy baseline.** [PE-8(3)](#pe-8.3) limits the personally identifiable information in visitor access records to the elements the privacy risk assessment identifies. NIST's discussion says organizations may have requirements that specify the contents of visitor records, and that limiting personally identifiable information not needed for operational purposes reduces privacy risk. Typical value: the visitor's name and organization, the person visited, the purpose of the visit, the date and times of entry and departure, the badge issued and the escort; the type of identification checked, but not its number or a copy of it unless a law or regulation requires one. Decide the elements in the [privacy impact assessment](/templates/reports/privacy-impact-assessment/) and record them in its minimization entry; the senior privacy official reviews them before a visitor log, form or visitor management system is introduced or changed, and any field that collects other elements is removed. Section 2 of the visitor log carries the limits, and a paper log uses one sheet per visitor, or a cover, so that visitors cannot read earlier entries. Common excess elements are identification numbers, photocopies or scans of identification, home addresses, dates of birth, and vehicle details where no parking control needs them.

**Federal systems** (as of October 2026). The National Archives and Records Administration's [General Records Schedule 5.6](https://www.archives.gov/files/records-mgmt/grs/grs05-6.pdf), Security Management Records (GRS Transmittal 35, May 2024, still the current version on NARA's GRS page), covers visitor processing records, such as registers or logs of visitors, contractors and service personnel. Item 110, for areas requiring the highest level of security awareness, including areas the Interagency Security Committee designates as Facility Security Level V, says destroy when 5 years old; item 111, for all other facility security areas, including Facility Security Levels I to IV, says destroy when 2 years old; both allow longer retention if required for business use. The PE-8 clause's federal block keeps visitor records at least that long unless the agency's own approved records schedule sets a different period. For PE-8(3), under the Privacy Act a system of records is a group of records under an agency's control from which information is retrieved by the name of the individual or by an identifying number, symbol or other identifying particular ([5 U.S.C. § 552a(a)(5)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title5-section552a&num=0&edition=prelim)), and an agency must tell each individual it asks to supply information for one the authority for asking and whether disclosure is mandatory or voluntary, the principal purposes, the routine uses, and the effects of not providing it ([§ 552a(e)(3)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title5-section552a&num=0&edition=prelim)). The PE-8(3) clause's federal block has the senior privacy official confirm that visitor records retrieved by name or other identifier are covered by a published system of records notice, and has the log or visitor management system present the Privacy Act statement.
