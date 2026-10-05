---
title: 'PS-2 Position Risk Designation'
description: 'NIST SP 800-53 Rev. 5 control PS-2, Position Risk Designation: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PS-2 Position Risk Designation'
  order: 2
control:
  id: PS-2
  family: PS
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | None |

**Related controls:** [AC-5](/controls/ac/ac-5/), [AT-3](/controls/at/at-3/), [PE-2](/controls/pe/pe-2/), [PE-3](/controls/pe/pe-3/), [PL-2](/controls/pl/pl-2/), [PS-3](/controls/ps/ps-3/), [PS-6](/controls/ps/ps-6/), [SA-5](/controls/sa/sa-5/), [SA-21](/controls/sa/sa-21/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Assign a risk designation to all organizational positions;
- **b.** Establish screening criteria for individuals filling those positions; and
- **c.** Review and update position risk designations [Assignment: organization-defined frequency].

<details>
<summary>NIST discussion</summary>

Position risk designations reflect Office of Personnel Management (OPM) policy and guidance. Proper position designation is the foundation of an effective and consistent suitability and personnel security program. The Position Designation System (PDS) assesses the duties and responsibilities of a position to determine the degree of potential damage to the efficiency or integrity of the service due to misconduct of an incumbent of a position and establishes the risk level of that position. The PDS assessment also determines if the duties and responsibilities of the position present the potential for position incumbents to bring about a material adverse effect on national security and the degree of that potential effect, which establishes the sensitivity level of a position. The results of the assessment determine what level of investigation is conducted for a position. Risk designations can guide and inform the types of authorizations that individuals receive when accessing organizational information and information systems. Position screening criteria include explicit information security role appointment requirements. Parts 1400 and 731 of Title 5, Code of Federal Regulations, establish the requirements for organizations to evaluate relevant covered positions for a position sensitivity and position risk designation commensurate with the duties and responsibilities of those positions.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PS-2</summary>

Determine if:

- **PS-02a.** a risk designation is assigned to all organizational positions;
- **PS-02b.** screening criteria are established for individuals filling organizational positions;
- **PS-02c.** position risk designations are reviewed and updated [Assignment: organization-defined frequency].

**Examine:** Personnel security policy; procedures addressing position categorization; appropriate codes of federal regulations; list of risk designations for organizational positions; records of position risk designation reviews and updates; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with personnel security responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for assigning, reviewing, and updating position risk designations; organizational processes for establishing screening criteria.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PS-2 asks you to give every position a risk designation, set screening criteria for the people who fill each level, and review the designations on a schedule. A designation rates the harm a person in the position could do through misconduct. It drives the screening the position needs ([PS-3](/controls/ps/ps-3/)), so designate the position before you hire into it.

NIST's PS-2 discussion calls proper position designation "the foundation of an effective and consistent suitability and personnel security program." It adds that risk designations can guide the kinds of system authorizations people receive, and that screening criteria include explicit information security role appointment requirements.

**Common implementations.** The human resources office records a designation (low, moderate or high) in each position's record, working with the security team. Positions with privileged access, control of money or access to large amounts of sensitive information rate higher. A one-page table sets the screening for each level, from identity and employment checks at low to criminal history checks at high, where the law allows them. Positions filled by contractors get a designation too, written into the contract (PS-7).

Designations go stale when duties change, most often when a position gains privileged access. Make a change in duties a trigger: the supervisor tells the human resources office, which reviews the designation and, if it rises, starts rescreening (PS-3).

**Organization-defined parameters.** Typical values, from the [Personnel Security policy](/templates/policies/ps/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Review and update frequency for position risk designations (c) | At least every 3 years, and whenever a position's duties change |

In the policy, the human resources office assigns each designation in consultation with the Chief Information Security Officer, and sets the screening criteria for each level. The policy's [decision worksheet](/templates/worksheets/ps/) asks who designates positions and what screening each level requires.

**Evidence assessors ask for.**

- The list of positions with their risk designations, including positions filled by contractors
- The screening criteria for each designation
- Records of the last review, and of designations changed when duties changed
- For a sample of privileged users, the designation of their position and the screening it required

**Inheritance.** PS-2 is a common control, run by the human resources office for the whole organization. The system's part is to make sure the people who hold its privileged roles sit in positions designated for that access.

**Common findings.**

- Positions with privileged access designated low risk.
- Contractor positions never designated.
- Designations never reviewed, or not changed when a position gained administrator rights.
- No written screening criteria for each level, so screening varies by hiring manager.

**Enhancements in the Moderate baseline.** PS-2 has no enhancements.

**Federal systems** (as of October 2026). [5 CFR 731.106](https://www.ecfr.gov/current/title-5/section-731.106)(a) (as amended June 30, 2026) requires the agency head to designate every covered position at high, moderate or low risk level. That includes positions whose occupant performs service as a contractor employee. Positions at high or moderate risk are public trust positions (731.106(b)). Each position also gets a sensitivity designation: Special-Sensitive, Critical-Sensitive, Noncritical-Sensitive or Non-sensitive (731.106(c)(2)). [5 CFR 1400.201](https://www.ecfr.gov/current/title-5/section-1400.201) defines the levels for national security positions. OPM, with the Defense Counterintelligence and Security Agency, provides the [Position Designation Tool](https://www.opm.gov/suitability/suitability-executive-agent/position-designation-tool/) for making these designations; keep its output with the position record as the evidence.
