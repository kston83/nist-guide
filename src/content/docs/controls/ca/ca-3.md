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
---

<!-- nist:start -->
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
<!-- nist:end -->

<!-- guidance: write below this line -->
