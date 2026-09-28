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
---

<!-- nist:start -->
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
<!-- nist:end -->

<!-- guidance: write below this line -->
