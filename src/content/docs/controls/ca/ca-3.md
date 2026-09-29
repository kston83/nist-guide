---
title: 'CA-3 Information Exchange'
description: 'NIST SP 800-53 Rev. 5 control CA-3, Information Exchange: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CA-3 Information Exchange'
  order: 3
control:
  id: CA-3
  family: CA
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 2 (1 in a baseline) |

**Related controls:** [AC-4](/controls/ac/ac-4/), [AC-20](/controls/ac/ac-20/), [AU-16](/controls/au/au-16/), [CA-6](/controls/ca/ca-6/), [IA-3](/controls/ia/ia-3/), [IR-4](/controls/ir/ir-4/), [PL-2](/controls/pl/pl-2/), [PT-7](/controls/pt/pt-7/), [RA-3](/controls/ra/ra-3/), [SA-9](/controls/sa/sa-9/), [SC-7](/controls/sc/sc-7/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Approve and manage the exchange of information between the system and other systems using [Selection (one or more): interconnection security agreements; information exchange security agreements; memoranda of understanding or agreement; service level agreements; user agreements; non-disclosure agreements; [Assignment: organization-defined type of agreement] ];
- **b.** Document, as part of each exchange agreement, the interface characteristics, security and privacy requirements, controls, and responsibilities for each system, and the impact level of the information communicated; and
- **c.** Review and update the agreements [Assignment: organization-defined frequency].

<details>
<summary>NIST discussion</summary>

System information exchange requirements apply to information exchanges between two or more systems. System information exchanges include connections via leased lines or virtual private networks, connections to internet service providers, database sharing or exchanges of database transaction information, connections and exchanges with cloud services, exchanges via web-based services, or exchanges of files via file transfer protocols, network protocols (e.g., IPv4, IPv6), email, or other organization-to-organization communications. Organizations consider the risk related to new or increased threats that may be introduced when systems exchange information with other systems that may have different security and privacy requirements and controls. This includes systems within the same organization and systems that are external to the organization. A joint authorization of the systems exchanging information, as described in CA-6(1) or CA-6(2) , may help to communicate and reduce risk.

Authorizing officials determine the risk associated with system information exchange and the controls needed for appropriate risk mitigation. The types of agreements selected are based on factors such as the impact level of the information being exchanged, the relationship between the organizations exchanging information (e.g., government to government, government to business, business to business, government or business to service provider, government or business to individual), or the level of access to the organizational system by users of the other system. If systems that exchange information have the same authorizing official, organizations need not develop agreements. Instead, the interface characteristics between the systems (e.g., how the information is being exchanged. how the information is protected) are described in the respective security and privacy plans. If the systems that exchange information have different authorizing officials within the same organization, the organizations can develop agreements or provide the same information that would be provided in the appropriate agreement type from CA-3a in the respective security and privacy plans for the systems. Organizations may incorporate agreement information into formal contracts, especially for information exchanges established between federal agencies and nonfederal organizations (including service providers, contractors, system developers, and system integrators). Risk considerations include systems that share the same networks.

</details>

## Control enhancements

<a id="ca-3.6"></a>

### CA-3(6) Transfer Authorizations

*Baselines: High*

Verify that individuals or systems transferring data between interconnecting systems have the requisite authorizations (i.e., write permissions or privileges) prior to accepting such data.

<details>
<summary>Discussion and assessment objectives for CA-3(6)</summary>

To prevent unauthorized individuals and systems from making information transfers to protected systems, the protected system verifies—via independent means— whether the individual or system attempting to transfer information is authorized to do so. Verification of the authorization to transfer information also applies to control plane traffic (e.g., routing and DNS) and services (e.g., authenticated SMTP relays).

Determine if individuals or systems transferring data between interconnecting systems have the requisite authorizations (i.e., write permissions or privileges) prior to accepting such data.

**Examine:** Access control policy; procedures addressing system connections; system and communications protection policy; system interconnection agreements; information exchange security agreements; memoranda of understanding or agreements; service level agreements; non-disclosure agreements; system design documentation; system configuration settings and associated documentation; control assessment report; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for managing connections to external systems; network administrators; organizational personnel with information security and privacy responsibilities.

**Test:** Mechanisms implementing restrictions on external system connections.

</details>

<a id="ca-3.7"></a>

### CA-3(7) Transitive Information Exchanges

*Baselines: Not in a baseline*

- **(a)** Identify transitive (downstream) information exchanges with other systems through the systems identified in CA-3a ; and
- **(b)** Take measures to ensure that transitive (downstream) information exchanges cease when the controls on identified transitive (downstream) systems cannot be verified or validated.

<details>
<summary>Discussion and assessment objectives for CA-3(7)</summary>

Transitive or "downstream" information exchanges are information exchanges between the system or systems with which the organizational system exchanges information and other systems. For mission-essential systems, services, and applications, including high value assets, it is necessary to identify such information exchanges. The transparency of the controls or protection measures in place in such downstream systems connected directly or indirectly to organizational systems is essential to understanding the security and privacy risks resulting from those information exchanges. Organizational systems can inherit risk from downstream systems through transitive connections and information exchanges, which can make the organizational systems more susceptible to threats, hazards, and adverse impacts.

Determine if:

- **CA-03(07)(a)** transitive (downstream) information exchanges with other systems through the systems identified in CA-03a are identified;
- **CA-03(07)(b)** measures are taken to ensure that transitive (downstream) information exchanges cease when the controls on identified transitive (downstream) systems cannot be verified or validated.

**Examine:** Access control policy; procedures addressing system connections; system and communications protection policy; system interconnection agreements; information exchange security agreements; memoranda of understanding or agreements; service level agreements; non-disclosure agreements; system design documentation; system configuration settings and associated documentation; control assessment report; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for managing connections to external systems; network administrators; organizational personnel with information security and privacy responsibilities.

**Test:** Mechanisms implementing restrictions on external system connections.

</details>

*Withdrawn enhancements: CA-3(1), CA-3(2), CA-3(3), CA-3(4), CA-3(5).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CA-3</summary>

Determine if:

- **CA-03a.** the exchange of information between the system and other systems is approved and managed using [Selection (one or more): interconnection security agreements; information exchange security agreements; memoranda of understanding or agreement; service level agreements; user agreements; non-disclosure agreements; [Assignment: organization-defined type of agreement] ];
- **CA-03b.**
  - **CA-03b.[01]** the interface characteristics are documented as part of each exchange agreement;
  - **CA-03b.[02]** security requirements are documented as part of each exchange agreement;
  - **CA-03b.[03]** privacy requirements are documented as part of each exchange agreement;
  - **CA-03b.[04]** controls are documented as part of each exchange agreement;
  - **CA-03b.[05]** responsibilities for each system are documented as part of each exchange agreement;
  - **CA-03b.[06]** the impact level of the information communicated is documented as part of each exchange agreement;
- **CA-03c.** agreements are reviewed and updated [Assignment: organization-defined frequency].

**Examine:** Access control policy; procedures addressing system connections; system and communications protection policy; system interconnection security agreements; information exchange security agreements; memoranda of understanding or agreements; service level agreements; non-disclosure agreements; system design documentation; enterprise architecture; system architecture; system configuration settings and associated documentation; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for developing, implementing, or approving system interconnection agreements; organizational personnel with information security and privacy responsibilities; personnel managing the system(s) to which the interconnection security agreement applies.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

CA-3 covers every exchange of information between the system and a system outside its authorization boundary: a dedicated line or virtual private network, an application programming interface, a shared database, a file transfer or a cloud service. The authorizing official approves each exchange, and a written agreement records what is exchanged, how it is protected and who is responsible on each side. NIST SP 800-47 Rev. 1, Managing the Security of Information Exchanges ([July 2021](https://csrc.nist.gov/pubs/sp/800/47/r1/final), current as of September 2026), describes how to plan, establish, maintain and end an exchange and its agreement.

**Common implementations.** An interconnection security agreement for a system-to-system connection, or an information exchange security agreement for other exchanges, often paired with a memorandum of understanding that sets the business terms. For an external service, the same content in the contract or service level agreement instead of a separate agreement. Each exchange listed in the interconnections table of the [system security plan](/templates/plans/system-security-plan/) and in the interconnections field of the [system inventory](/templates/forms/system-inventory/), with the agreement reference. Where both systems have the same authorizing official, NIST's discussion allows the security and privacy plans to describe the interface instead of an agreement. The [Assessment, Authorization, and Monitoring policy](/templates/policies/ca/) sets the rules, and the [Information Exchange Agreement](/templates/forms/information-exchange-agreement/) template follows SP 800-47 Rev. 1 and keeps a register of every exchange.

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Types of agreement (a) | Interconnection security agreements or information exchange security agreements, and service level agreements or contract terms with the same content for external services |
| Agreement review frequency (c) | At least annually, and when either system makes a significant change that affects the exchange |

**Evidence assessors ask for.**

- The list of exchanges with systems outside the boundary, from the system security plan
- A signed agreement for each exchange, with the interface characteristics, security and privacy requirements, controls, responsibilities and impact level of the information (CA-3b)
- The authorizing official's approval of each exchange
- Records of the last review of each agreement, with the changes made
- Network diagrams and configuration that match the listed exchanges, so the assessor can find any connection with no agreement

**Inheritance.** CA-3 is usually system-specific: each system owner manages the exchanges that cross their boundary. An enterprise network or cloud platform may provide shared connections, such as a managed gateway to a partner, and their agreements, which the systems behind them inherit and reference in their security plans.

**Common findings.**

- Connections found in firewall rules or flow logs with no agreement or approval, often to software-as-a-service tools added outside the authorization process.
- Agreements past their review date, or still in force after the connection ended.
- Agreements that name the systems but omit the impact level of the information or the security responsibilities of each side.
- An interconnections table in the security plan out of step with the system inventory.

**Enhancements in the Moderate baseline.** None. High adds [CA-3(6)](#ca-3.6) transfer authorizations: the system verifies that whoever sends data has permission to write it before accepting it.

**Federal systems** (as of September 2026). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.c(16), requires the authorizing official's approval for connections from a system, as defined by its authorization boundary, to other systems, based on the risk to agency operations and assets, individuals, other organizations and the Nation. Section 4.j(2)(f) requires agreements, such as memoranda of understanding, interconnection security agreements or contracts, for interfaces between agency systems and systems that contractors or other entities use or operate on the Government's behalf.
