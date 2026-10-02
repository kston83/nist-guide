---
title: Physical Access List
type: form
description: The list of individuals authorized to enter a facility and each controlled area within it, with the credential issued, the approval, each review and each removal, plus the facility's areas and its inventory of keys, combinations and badges, as SP 800-53 PE-2 and PE-3 require.
controls: [pe-2, pe-3, pe-3.1, ps-4, ps-5]
status: draft
stage: operate
typical:
  pe-02_odp: 'at least quarterly for areas that contain system components, such as data centers, server rooms, wiring closets and media storage areas, and at least annually for the rest of the facility'
  pe-03_odp.07: 'keys, lock combinations, and badges and access cards, including unissued, temporary and visitor badges'
  pe-03_odp.08: 'at least annually'
  pe-03_odp.09: 'at least annually'
  pe-03_odp.10: 'at least every five years, and sooner when an inventory cannot account for an issued key'
---

:::guidance
Keep one list for each facility. Where the physical access control system holds the authorizations, this list can be a report from it, as long as each entry carries the fields below and the approvals are kept. NIST's PE-2 discussion says authorizations apply to employees and visitors, but people with permanent credentials are not visitors: visitors go in the [visitor log](/templates/forms/visitor-log/). Assessors compare the register with a list of recent departures and transfers, check that each departed person's credential was disabled on time, and ask for the last review. Where the system runs in a provider's facility, the provider keeps its own access list and the system security plan records PE-2 as inherited; keep this list for the organization's own offices and equipment rooms. The register at the end is also downloadable as a CSV file.
:::

| Facility | Address or site identifier | Systems with components here | List owner | Last reviewed |
| --- | --- | --- | --- | --- |
| {{fill:facility name}} | {{fill:address or identifier}} | {{fill:system names}} | {{org:facilities-manager}} | {{fill:date}} |

## 1. How to use this list

- Add a person only on a request from their supervisor, approved by the {{org:facilities-manager}} and, for areas that contain system components, also by the {{org:system-owner}} (PE-2a).
- Issue a credential, such as a badge or access card, and record it against the person's entry (PE-2b).
- Grant only the areas the person's duties require; areas that contain system components are authorized separately from the building (PE-3(1)).
- Review the list {{param:pe-02_odp}}, with each supervisor or area owner confirming that their people still need the access, and record the review in section 4 (PE-2c).
- When a person leaves, disable the credential within the time the Personnel Security Policy sets for disabling system access, record the date the credential was returned, and remove the person from the list (PE-2d, PS-4). The [onboarding, transfer and termination checklist](/templates/forms/onboarding-transfer-and-termination-checklist/) starts each change.
- When a person transfers, remove the areas the new position does not need (PE-2d, PS-5).
- Keep removed entries, marked as removed, for {{fill:retention period from the organization's records retention schedule}}.

| Field | What to record |
| --- | --- |
| Person | Name, and employer for a contractor |
| Role or position | Job title or role that needs the access |
| Areas authorized | The facility, and each controlled area within it, from section 2 |
| Credential | Badge or card number, or key number; the type (permanent, temporary) |
| Requested by | The supervisor who requested the access, and the date |
| Approved by | The facilities manager, and the system owner for areas that contain system components, with dates (PE-2a) |
| Issued | The date the credential was issued (PE-2b) |
| Expires | The end date for a temporary authorization or a contract |
| Last confirmed | The date of the last review that confirmed the access (PE-2c) |
| Removed | The date access was removed, the reason (termination, transfer, no longer needed), and the date the credential was returned or disabled (PE-2d) |

## 2. Areas

List each area that has its own access control. Areas designated as publicly accessible need no authorization, but record the controls between them and the non-public areas (PE-3c).

| Area | Type (public, general, restricted) | Contains system components | Entry control (badge reader, key, combination, guard) | Access logged | Area owner who confirms access |
| --- | --- | --- | --- | --- | --- |
| {{fill:area, for example the server room}} | {{fill:type}} | {{fill:yes or no, and which systems}} | {{fill:control}} | {{fill:yes or no}} | {{fill:name and title}} |

## 3. Physical access devices

Inventory {{param:pe-03_odp.07}} {{param:pe-03_odp.08}} (PE-3f). Keep unissued devices locked away, and limit knowledge of each combination to the people authorized to use it (PE-3e). Change combinations {{param:pe-03_odp.09}} and keys {{param:pe-03_odp.10}}, and change both when a key is lost, a combination is compromised, or someone holding it is transferred or terminated (PE-3g).

| Device | Identifier | Opens | Held by, or stored at | Issued | Last inventoried | Last changed (combination or key) | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:key, combination or badge stock}} | {{fill:number}} | {{fill:area or lock}} | {{fill:person or location}} | {{fill:date}} | {{fill:date}} | {{fill:date and reason}} | {{fill:lost, returned, or none}} |

:::federal
[FIPS 201-3](https://csrc.nist.gov/pubs/fips/201-3/final) (January 2022), section 6.3.1, states that the selection of PIV authentication assurance levels for physical access "SHALL be made in accordance with the applicable policies for a facility's security level", and [NIST SP 800-116 Rev. 1](https://csrc.nist.gov/pubs/sp/800/116/r1/final) (June 2018), section 4.3 and Table 4-3, recommends at least one authentication factor for Controlled areas, two for Limited areas and three for Exclusion areas. FIPS 201-3 section 2.9.4 requires a PIV Card to be terminated when a federal employee separates from federal service or a contractor no longer needs access to federal buildings or systems. As of October 2026.

- In section 2, the "Type" column shall record each area of a federally controlled facility as Controlled, Limited or Exclusion, with the number of authentication factors its entry control requires, consistent with the facility's Facility Security Level determination. (PE-3a)
- For each person who holds a PIV Card, the "Credential" field shall identify the PIV Card registered in the physical access control system, and the "Removed" field shall record when that registration was removed after the card was terminated. (PE-2d)

:::

## 4. Reviews

| Review date | Reviewed by | Areas covered | Entries confirmed | Entries removed or changed | Devices not accounted for, and action | Next review |
| --- | --- | --- | --- | --- | --- | --- |
| {{fill:date}} | {{fill:name and title}} | {{fill:areas}} | {{fill:number}} | {{fill:number, with reasons}} | {{fill:items, or "none"}} | {{fill:date}} |

## Register

| Person | Role or position | Areas authorized | Credential | Requested by | Approved by | Issued | Expires | Last confirmed | Removed |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:name and employer}} | {{fill:role}} | {{fill:facility and areas}} | {{fill:badge, card or key number, and type}} | {{fill:supervisor and date}} | {{fill:names and dates}} | {{fill:date}} | {{fill:date, or none}} | {{fill:date}} | {{fill:date, reason and credential returned or disabled, or blank}} |
