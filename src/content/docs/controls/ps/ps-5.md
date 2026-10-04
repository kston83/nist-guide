---
title: 'PS-5 Personnel Transfer'
description: 'NIST SP 800-53 Rev. 5 control PS-5, Personnel Transfer: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PS-5 Personnel Transfer'
  order: 5
control:
  id: PS-5
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

**Related controls:** [AC-2](/controls/ac/ac-2/), [IA-4](/controls/ia/ia-4/), [PE-2](/controls/pe/pe-2/), [PM-12](/controls/pm/pm-12/), [PS-4](/controls/ps/ps-4/), [PS-7](/controls/ps/ps-7/)

## Control statement

- **a.** Review and confirm ongoing operational need for current logical and physical access authorizations to systems and facilities when individuals are reassigned or transferred to other positions within the organization;
- **b.** Initiate [Assignment: organization-defined transfer or reassignment actions] within [Assignment: organization-defined time period following the formal transfer action];
- **c.** Modify access authorization as needed to correspond with any changes in operational need due to reassignment or transfer; and
- **d.** Notify [Assignment: organization-defined personnel or roles] within [Assignment: organization-defined time period].

<details>
<summary>NIST discussion</summary>

Personnel transfer applies when reassignments or transfers of individuals are permanent or of such extended duration as to make the actions warranted. Organizations define actions appropriate for the types of reassignments or transfers, whether permanent or extended. Actions that may be required for personnel transfers or reassignments to other positions within organizations include returning old and issuing new keys, identification cards, and building passes; closing system accounts and establishing new accounts; changing system access authorizations (i.e., privileges); and providing for access to official records to which individuals had access at previous work locations and in previous system accounts.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PS-5</summary>

Determine if:

- **PS-05a.** the ongoing operational need for current logical and physical access authorizations to systems and facilities are reviewed and confirmed when individuals are reassigned or transferred to other positions within the organization;
- **PS-05b.** [Assignment: organization-defined transfer or reassignment actions] are initiated within [Assignment: organization-defined time period following the formal transfer action];
- **PS-05c.** access authorization is modified as needed to correspond with any changes in operational need due to reassignment or transfer;
- **PS-05d.** [Assignment: organization-defined personnel or roles] are notified within [Assignment: organization-defined time period].

**Examine:** Personnel security policy; procedures addressing personnel transfer; records of personnel transfer actions; list of system and facility access authorizations; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with personnel security responsibilities; organizational personnel with account management responsibilities; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Organizational processes for personnel transfer; mechanisms supporting and/or implementing personnel transfer notifications; mechanisms for disabling system access/revoking authenticators.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PS-5 asks you to act when someone moves to another position inside the organization. You review and confirm their need for current logical and physical access, and start set transfer actions within a set time. You also change their access to match the new position, and notify set roles within a set time. A transfer is where access accumulates: people keep what they had and gain what the new job needs.

NIST's PS-5 discussion applies the control to reassignments that are permanent or long enough to warrant the actions. It lists actions such as returning old keys, identification cards and building passes and issuing new ones, closing and opening accounts, changing privileges, and giving access to official records from the old position.

**Common implementations.** The transfer section of the [onboarding, transfer and termination checklist](/templates/forms/onboarding-transfer-and-termination-checklist/) records each step. The losing and gaining supervisors review the person's access together. Access tied to roles in the identity provider makes the change cleaner: the old role's groups come off and the new role's go on, and anything extra goes through a new [access request](/templates/forms/access-request-form/). The [access review record](/templates/forms/access-review-record/) compares accounts with the human resources office's list of transfers, which catches anything the transfer missed (AC-2j).

**Organization-defined parameters.** Typical values, from the [Personnel Security policy](/templates/policies/ps/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Transfer or reassignment actions (b) | A review of the individual's access by the losing and gaining supervisors, removal of access the new position does not need, and the return or issue of keys, badges and equipment |
| Time to initiate them after the formal transfer action (b) | 5 business days |
| Who is notified (d) | The account managers and system owners of the systems the individual has access to |
| Time to notify (d) | 24 hours |

The notice time agrees with AC-2h.2 in the [AC-2](/controls/ac/ac-2/) clause (24 hours). In the policy, the supervisor reviews the access, the human resources office starts the actions and gives the notice, and the account manager changes the access.

**Evidence assessors ask for.**

- A list of transfers for a period from the human resources office, with each person's access before and after
- Completed transfer checklists for a sample, with the notice dates
- Records of the supervisors' access review for each sampled transfer
- Access review results that flagged access left over from a previous position, and what was done

**Inheritance.** The organization usually provides the human resources feed and the identity provider as common controls. Each system still changes its own local and application roles, so PS-5 is often hybrid.

**Common findings.**

- People holding the access of every position they have held.
- Transfers recorded in the human resources system as a title change, with no notice to account managers.
- Long temporary assignments never treated as transfers.
- Physical access left unchanged after a move to another building or unit.

**Enhancements in the Moderate baseline.** PS-5 has no enhancements.

**Federal systems** (as of October 2026). [5 CFR 731.106](https://www.ecfr.gov/current/title-5/section-731.106)(e) (as amended June 30, 2026) covers a move to a higher position risk level through reassignment or transfer. The person may stay in the position, and any upgraded investigation "should be initiated within 14 days" after the move is final. The PS-3 clause's federal block sets that step, and the checklist's transfer section has a rescreening step. [FIPS 201-3](https://csrc.nist.gov/pubs/fips/201-3/final) (January 2022), section 2.9.4, requires a contractor's PIV Card to be terminated when the contractor changes positions and no longer needs access to federal buildings or systems.
