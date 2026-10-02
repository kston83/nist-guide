---
title: 'SR-8 Notification Agreements'
description: 'NIST SP 800-53 Rev. 5 control SR-8, Notification Agreements: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SR-8 Notification Agreements'
  order: 8
control:
  id: SR-8
  family: SR
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | None |

**Related controls:** [IR-4](/controls/ir/ir-4/), [IR-6](/controls/ir/ir-6/), [IR-8](/controls/ir/ir-8/)

## Control statement

Establish agreements and procedures with entities involved in the supply chain for the system, system component, or system service for the [Selection (one or more): notification of supply chain compromises; [Assignment: organization-defined results of assessments or audits] ].

<details>
<summary>NIST discussion</summary>

The establishment of agreements and procedures facilitates communications among supply chain entities. Early notification of compromises and potential compromises in the supply chain that can potentially adversely affect or have adversely affected organizational systems or system components is essential for organizations to effectively respond to such incidents. The results of assessments or audits may include open-source information that contributed to a decision or result and could be used to help the supply chain entity resolve a concern or improve its processes.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SR-8</summary>

Determine if agreements and procedures are established with entities involved in the supply chain for the system, system components, or system service for [Selection (one or more): notification of supply chain compromises; [Assignment: organization-defined results of assessments or audits] ].

**Examine:** Supply chain risk management policy and procedures; supply chain risk management plan; system and services acquisition policy; procedures addressing supply chain protection; acquisition documentation; service level agreements; acquisition contracts for the system, system component, or system service; inter-organizational agreements and procedures; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system and service acquisition responsibilities; organizational personnel with information security responsibilities; organizational personnel with supply chain risk management responsibilities.

**Test:** Organizational processes for establishing inter-organizational agreements and procedures with supply chain entities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

SR-8 asks you to set up agreements and procedures with the entities in the supply chain of a system, component or service, for notification of supply chain compromises, for sharing the results of assessments or audits you name, or both. NIST's SR-8 discussion says agreements make communication among supply chain entities possible, that early notification of compromises and potential compromises is essential to responding to them, and that shared assessment or audit results, which may include the open-source information behind a decision, can help a supply chain entity resolve a concern or improve its processes. SR-8 is in the Low, Moderate and High baselines.

[NIST SP 800-161 Rev. 1](https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final), Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations (May 2022, updated November 1, 2024; current as of October 2026), adds in its Appendix A guidance for SR-8 that, at a minimum, organizations should require their suppliers to establish notification agreements with the entities in their own supply chains that have a role or responsibility in a critical product or service. Notification in the other direction, from the organization to its suppliers about an incident, is supply chain coordination, [IR-6(3)](/controls/ir/ir-6/#ir-6.3), in the Incident Response Policy.

**Common implementations.** Contract clauses, from the [acquisition security requirements](/templates/standards/acquisition-security-requirements/) standard, that require each supplier of a critical component or service to report a compromise or suspected compromise in its supply chain within the standard's incident notice time (section 4.6), to share the results of its independent assessments and audits, and to carry the same terms into its own supplier agreements. A contact list, kept by the supply chain risk management team, with a notification contact for each critical supplier and the organization's own address for supply chain notices, usually the incident response team's shared mailbox. Notices received go into the incident tracking system like any other report.

**Organization-defined parameters.** Typical values, from the [Supply Chain Risk Management policy](/templates/policies/sr/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| What the agreements and procedures cover | Notification of supply chain compromises, and the results of assessments or audits |
| Results of assessments or audits to be shared | The results of independent security assessments, audits or attestations of the supplier's products, services and development or manufacturing processes, and any finding that affects a product or service the organization uses |

The first row is a selection; the policy selects both choices. The policy also has the incident response team receive each supplier notification of a compromise and handle it under the [incident response plan](/templates/plans/incident-response-plan/), with the supply chain risk management team identifying the affected systems and components from the [component inventory](/templates/forms/component-inventory/).

**Evidence assessors ask for.**

- Contracts for a sample of critical components and services, showing the notification and assessment-sharing clauses and the flow-down to the supplier's own suppliers
- The supplier contact list, with the date each contact was last confirmed
- The procedure for receiving a supplier notice, and a recent notice followed to its incident ticket and the systems checked
- Assessment or audit results received from suppliers in the last year

**Inheritance.** The contract clauses and the intake procedure are usually common controls, from the procurement office and the incident response team. The system owner makes sure the contracts for the system's critical components and services carry the clauses, and acts on notices that affect the system. Record the split in the [system security plan](/templates/plans/system-security-plan/).

**Common findings.**

- Older contracts, signed before the clauses existed, with no notification terms.
- Supplier contacts out of date, or a notice sent to an account manager that never reached incident response.
- No flow-down, so a compromise at a supplier's own supplier reaches the organization only through the news.
- Assessment results available under the contract but never requested.

**Enhancements in the Moderate baseline.** SR-8 has no enhancements.
