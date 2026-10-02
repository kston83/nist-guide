---
title: 'PE-2 Physical Access Authorizations'
description: 'NIST SP 800-53 Rev. 5 control PE-2, Physical Access Authorizations: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PE-2 Physical Access Authorizations'
  order: 2
control:
  id: PE-2
  family: PE
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 3 (0 in a baseline) |

**Related controls:** [AT-3](/controls/at/at-3/), [AU-9](/controls/au/au-9/), [IA-4](/controls/ia/ia-4/), [MA-5](/controls/ma/ma-5/), [MP-2](/controls/mp/mp-2/), [PE-3](/controls/pe/pe-3/), [PE-4](/controls/pe/pe-4/), [PE-5](/controls/pe/pe-5/), [PE-8](/controls/pe/pe-8/), [PM-12](/controls/pm/pm-12/), [PS-3](/controls/ps/ps-3/), [PS-4](/controls/ps/ps-4/), [PS-5](/controls/ps/ps-5/), [PS-6](/controls/ps/ps-6/)

## Control statement

- **a.** Develop, approve, and maintain a list of individuals with authorized access to the facility where the system resides;
- **b.** Issue authorization credentials for facility access;
- **c.** Review the access list detailing authorized facility access by individuals [Assignment: organization-defined frequency] ; and
- **d.** Remove individuals from the facility access list when access is no longer required.

<details>
<summary>NIST discussion</summary>

Physical access authorizations apply to employees and visitors. Individuals with permanent physical access authorization credentials are not considered visitors. Authorization credentials include ID badges, identification cards, and smart cards. Organizations determine the strength of authorization credentials needed consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines. Physical access authorizations may not be necessary to access certain areas within facilities that are designated as publicly accessible.

</details>

## Control enhancements

<a id="pe-2.1"></a>

### PE-2(1) Access by Position or Role

*Baselines: Not in a baseline*

Authorize physical access to the facility where the system resides based on position or role.

<details>
<summary>Discussion and assessment objectives for PE-2(1)</summary>

Role-based facility access includes access by authorized permanent and regular/routine maintenance personnel, duty officers, and emergency medical staff.

Determine if physical access to the facility where the system resides is authorized based on position or role.

**Examine:** Physical and environmental protection policy; procedures addressing physical access authorizations; physical access control logs or records; list of positions/roles and corresponding physical access authorizations; system entry and exit points; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with physical access authorization responsibilities; organizational personnel with physical access to system facility; organizational personnel with information security responsibilities.

**Test:** Organizational processes for physical access authorizations; mechanisms supporting and/or implementing physical access authorizations.

</details>

<a id="pe-2.2"></a>

### PE-2(2) Two Forms of Identification

*Baselines: Not in a baseline*

Require two forms of identification from the following forms of identification for visitor access to the facility where the system resides: [Assignment: organization-defined list of acceptable forms of identification].

<details>
<summary>Discussion and assessment objectives for PE-2(2)</summary>

Acceptable forms of identification include passports, REAL ID-compliant drivers’ licenses, and Personal Identity Verification (PIV) cards. For gaining access to facilities using automated mechanisms, organizations may use PIV cards, key cards, PINs, and biometrics.

Determine if two forms of identification are required from [Assignment: organization-defined list of acceptable forms of identification] for visitor access to the facility where the system resides.

**Examine:** Physical and environmental protection policy; procedures addressing physical access authorizations; list of acceptable forms of identification for visitor access to the facility where the system resides; access authorization forms; access credentials; physical access control logs or records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with physical access authorization responsibilities; organizational personnel with physical access to the system facility; organizational personnel with information security responsibilities.

**Test:** Organizational processes for physical access authorizations; mechanisms supporting and/or implementing physical access authorizations.

</details>

<a id="pe-2.3"></a>

### PE-2(3) Restrict Unescorted Access

*Baselines: Not in a baseline*

Restrict unescorted access to the facility where the system resides to personnel with [Selection (one or more): security clearances for all information contained within the system; formal access authorizations for all information contained within the system; need for access to all information contained within the system; [Assignment: organization-defined physical access authorizations] ].

<details>
<summary>Discussion and assessment objectives for PE-2(3)</summary>

Individuals without required security clearances, access approvals, or need to know are escorted by individuals with appropriate physical access authorizations to ensure that information is not exposed or otherwise compromised.

Determine if unescorted access to the facility where the system resides is restricted to personnel with [Selection (one or more): security clearances for all information contained within the system; formal access authorizations for all information contained within the system; need for access to all information contained within the system; [Assignment: organization-defined physical access authorizations] ].

**Examine:** Physical and environmental protection policy; procedures addressing physical access authorizations; authorized personnel access list; security clearances; access authorizations; access credentials; physical access control logs or records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with physical access authorization responsibilities; organizational personnel with physical access to the system facility; organizational personnel with information security responsibilities.

**Test:** Organizational processes for physical access authorizations; mechanisms supporting and/or implementing physical access authorizations.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PE-2</summary>

Determine if:

- **PE-02a.**
  - **PE-02a.[01]** a list of individuals with authorized access to the facility where the system resides has been developed;
  - **PE-02a.[02]** the list of individuals with authorized access to the facility where the system resides has been approved;
  - **PE-02a.[03]** the list of individuals with authorized access to the facility where the system resides has been maintained;
- **PE-02b.** authorization credentials are issued for facility access;
- **PE-02c.** the access list detailing authorized facility access by individuals is reviewed [Assignment: organization-defined frequency];
- **PE-02d.** individuals are removed from the facility access list when access is no longer required.

**Examine:** Physical and environmental protection policy; procedures addressing physical access authorizations; authorized personnel access list; authorization credentials; physical access list reviews; physical access termination records and associated documentation; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with physical access authorization responsibilities; organizational personnel with physical access to system facility; organizational personnel with information security responsibilities.

**Test:** Organizational processes for physical access authorizations; mechanisms supporting and/or implementing physical access authorizations.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PE-2 decides who may enter the facility where the system resides; [PE-3](/controls/pe/pe-3/) enforces that decision at the doors. It asks for four things: an approved, maintained list of the people authorized to enter (a), a credential issued to each of them (b), a periodic review of the list (c), and removal of people who no longer need access (d). NIST's PE-2 discussion says the authorizations apply to employees and visitors, but that people with permanent credentials are not visitors; credentials include ID badges, identification cards and smart cards, with their strength set by the laws, policies and standards that apply. Areas designated as publicly accessible may not need an authorization.

The [physical access list](/templates/forms/physical-access-list/) holds the list: each person, the areas they may enter, the credential issued, who requested and approved it, each review and each removal. Visitors go in the [visitor log](/templates/forms/visitor-log/) instead ([PE-8](/controls/pe/pe-8/)).

**Common implementations.** An electronic physical access control system holds the authorizations as badge access levels, one per area, and the list is a report from it. The supervisor requests access through a ticket or form; the facilities manager approves it, and the system owner also approves access to areas that contain system components, such as server rooms and wiring closets. Badges are issued at enrollment, after the personnel screening in [PS-3](/controls/ps/ps-3/). Departures and transfers reach the badge office through the [onboarding, transfer and termination checklist](/templates/forms/onboarding-transfer-and-termination-checklist/) or an HR feed, so access is removed within the time the Personnel Security Policy sets for disabling system access ([PS-4](/controls/ps/ps-4/), [PS-5](/controls/ps/ps-5/)). Each quarter, area owners confirm the people with access to their equipment rooms.

**Organization-defined parameters.** Typical values, from the [Physical and Environmental Protection policy](/templates/policies/pe/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Access list review frequency (c) | At least quarterly for areas that contain system components, such as data centers, server rooms, wiring closets and media storage areas, and at least annually for the rest of the facility |

The quarterly review of equipment areas matches the review cadence of the maintenance personnel list ([MA-5](/controls/ma/ma-5/)) and media storage access ([MP-4](/controls/mp/mp-4/)). In each review, the supervisors or area owners confirm that each person still needs the access, and the review is recorded with the entries removed or changed.

**Evidence assessors ask for.**

- The physical access list for each facility, with the areas each person may enter
- A sample of access requests showing the supervisor's request and the approvals, including the system owner's for equipment areas
- The credential issued to each person, matched to the physical access control system's records
- Records of the last few reviews, with the entries removed
- A list of recent departures and transfers, compared with the date each person's badge was disabled or their areas changed

**Inheritance.** For a system hosted in a cloud service or colocation data center, the provider authorizes access to its facility, and the [system security plan](/templates/plans/system-security-plan/) records PE-2 as inherited for that facility, backed by the provider's authorization or audit report. The organization still meets PE-2 for its own offices, wiring closets and any rooms that hold its equipment, often as a common control run by the facilities manager for every system in the building. For a colocation cage, the organization usually names the people the provider may admit, so PE-2 is a hybrid control there.

**Common findings.**

- Departed employees and contractors still on the list, or their badges still active, weeks after they left.
- No review of the list, or a review with no record of who confirmed what.
- Everyone with a building badge able to open the server room or wiring closets.
- Generic or shared badges, such as "contractor 1" or a spare kept at reception, with no named holder.
- Access granted by building management or a landlord, outside the organization's list and review.

**Enhancements in the Moderate baseline.** None. [PE-2(1)](#pe-2.1) access by position or role, [PE-2(2)](#pe-2.2) two forms of identification and [PE-2(3)](#pe-2.3) restrict unescorted access are in no baseline. Badge access levels assigned by role meet most of PE-2(1).

**Federal systems** (as of October 2026). [FIPS 201-3](https://csrc.nist.gov/pubs/fips/201-3/final) (January 2022, the current revision) defines the Personal Identity Verification (PIV) Card as the common identity credential for federal employees and contractors for access to federally controlled facilities and information systems (section 1.2), and leaves the decision to authorize a cardholder's access out of its scope, so the PE-2 list and approvals are still needed. Section 2.9.4 requires a PIV Card to be terminated when, among other circumstances, a federal employee separates from federal service or a contractor no longer needs access to federal buildings or systems. The PE-2 clause's federal block makes the PIV Card, registered in the physical access control system, the authorization credential for people who hold one, gives everyone else a temporary or visitor credential that cannot be mistaken for a PIV Card, and removes the card's registration when it is terminated. The physical access list's "Credential" and "Removed" fields record both.
