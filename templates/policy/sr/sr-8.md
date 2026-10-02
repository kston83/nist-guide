---
control: sr-8
title: 'Notification agreements'
status: draft
stage: mature
typical:
  sr-08_odp.01: 'notification of supply chain compromises, and the results of assessments or audits'
  sr-08_odp.02: 'the results of independent security assessments, audits or attestations of the supplier''s products, services and development or manufacturing processes, and any finding that affects a product or service the organization uses'
---

:::guidance
NIST's SR-8 discussion says early notification of compromises and potential compromises in the supply chain is essential to responding to them, and that shared assessment or audit results can help a supply chain entity resolve a concern or improve its processes. SP 800-161 Rev. 1 adds that, at a minimum, organizations should require their suppliers to establish notification agreements with the entities in their own supply chains that have a role in a critical product or service. The notice times belong in the contract: the [acquisition security requirements](/templates/standards/acquisition-security-requirements/) standard (section 4.6) sets them for incidents and vulnerabilities. Notification in the other direction, from the organization to its suppliers about an incident, is the IR-6(3) clause of the Incident Response Policy.
:::

- The {{org:ciso}} shall establish agreements and procedures with the entities involved in the supply chain for the system, system component or system service for {{param:sr-08_odp.01}}. (SR-8)
- Each contract for a critical component or service shall require the supplier to notify the organization of a compromise or suspected compromise in its supply chain that may affect the organization's systems, within the time the acquisition security requirements standard sets for incident notice. (SR-8)
- Each such contract shall require the supplier to establish notification agreements with the entities in its own supply chain that have a role in the critical component or service. (SR-8)
- The {{org:ciso}} shall keep a current notification contact for each supplier of a critical component or service, and give each supplier the organization's contact for supply chain notices. (SR-8)
- The {{org:incident-response-team}} shall receive each supplier notification of a compromise and handle it under the [incident response plan](/templates/plans/incident-response-plan/), with the supply chain risk management team identifying the affected systems and components. (SR-8)
