---
title: 'IR-4 Incident Handling'
description: 'NIST SP 800-53 Rev. 5 control IR-4, Incident Handling: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'IR-4 Incident Handling'
  order: 4
control:
  id: IR-4
  family: IR
  baselines: [Low, Moderate, High, Privacy]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | 15 (3 in a baseline) |

**Related controls:** [AC-19](/controls/ac/ac-19/), [AU-6](/controls/au/au-6/), [AU-7](/controls/au/au-7/), [CM-6](/controls/cm/cm-6/), [CP-2](/controls/cp/cp-2/), [CP-3](/controls/cp/cp-3/), [CP-4](/controls/cp/cp-4/), [IR-2](/controls/ir/ir-2/), [IR-3](/controls/ir/ir-3/), [IR-5](/controls/ir/ir-5/), [IR-6](/controls/ir/ir-6/), [IR-8](/controls/ir/ir-8/), [PE-6](/controls/pe/pe-6/), [PL-2](/controls/pl/pl-2/), [PM-12](/controls/pm/pm-12/), [SA-8](/controls/sa/sa-8/), [SC-5](/controls/sc/sc-5/), [SC-7](/controls/sc/sc-7/), [SI-3](/controls/si/si-3/), [SI-4](/controls/si/si-4/), [SI-7](/controls/si/si-7/)

## Control statement

- **a.** Implement an incident handling capability for incidents that is consistent with the incident response plan and includes preparation, detection and analysis, containment, eradication, and recovery;
- **b.** Coordinate incident handling activities with contingency planning activities;
- **c.** Incorporate lessons learned from ongoing incident handling activities into incident response procedures, training, and testing, and implement the resulting changes accordingly; and
- **d.** Ensure the rigor, intensity, scope, and results of incident handling activities are comparable and predictable across the organization.

<details>
<summary>NIST discussion</summary>

Organizations recognize that incident response capabilities are dependent on the capabilities of organizational systems and the mission and business processes being supported by those systems. Organizations consider incident response as part of the definition, design, and development of mission and business processes and systems. Incident-related information can be obtained from a variety of sources, including audit monitoring, physical access monitoring, and network monitoring; user or administrator reports; and reported supply chain events. An effective incident handling capability includes coordination among many organizational entities (e.g., mission or business owners, system owners, authorizing officials, human resources offices, physical security offices, personnel security offices, legal departments, risk executive [function], operations personnel, procurement offices). Suspected security incidents include the receipt of suspicious email communications that can contain malicious code. Suspected supply chain incidents include the insertion of counterfeit hardware or malicious code into organizational systems or system components. For federal agencies, an incident that involves personally identifiable information is considered a breach. A breach results in unauthorized disclosure, the loss of control, unauthorized acquisition, compromise, or a similar occurrence where a person other than an authorized user accesses or potentially accesses personally identifiable information or an authorized user accesses or potentially accesses such information for other than authorized purposes.

</details>

## Control enhancements

<a id="ir-4.1"></a>

### IR-4(1) Automated Incident Handling Processes

*Baselines: Moderate, High*

Support the incident handling process using [Assignment: organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for IR-4(1)</summary>

Automated mechanisms that support incident handling processes include online incident management systems and tools that support the collection of live response data, full network packet capture, and forensic analysis.

Determine if the incident handling process is supported using [Assignment: organization-defined automated mechanisms].

**Examine:** Incident response policy; procedures addressing incident handling; automated mechanisms supporting incident handling; system design documentation; system configuration settings and associated documentation; system audit records; incident response plan; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with incident handling responsibilities; organizational personnel with information security responsibilities.

**Test:** Automated mechanisms that support and/or implement the incident handling process.

</details>

<a id="ir-4.2"></a>

### IR-4(2) Dynamic Reconfiguration

*Baselines: Not in a baseline*

Include the following types of dynamic reconfiguration for [Assignment: organization-defined system components] as part of the incident response capability: [Assignment: organization-defined types of dynamic reconfiguration].

<details>
<summary>Discussion and assessment objectives for IR-4(2)</summary>

Dynamic reconfiguration includes changes to router rules, access control lists, intrusion detection or prevention system parameters, and filter rules for guards or firewalls. Organizations may perform dynamic reconfiguration of systems to stop attacks, misdirect attackers, and isolate components of systems, thus limiting the extent of the damage from breaches or compromises. Organizations include specific time frames for achieving the reconfiguration of systems in the definition of the reconfiguration capability, considering the potential need for rapid response to effectively address cyber threats.

Determine if [Assignment: organization-defined types of dynamic reconfiguration] for [Assignment: organization-defined system components] are included as part of the incident response capability.

**Examine:** Incident response policy; procedures addressing incident handling; mechanisms supporting incident handling; list of system components to be dynamically reconfigured as part of incident response capability; system design documentation; system configuration settings and associated documentation; system audit records; incident response plan; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with incident handling responsibilities; organizational personnel with information security responsibilities.

**Test:** Mechanisms that support and/or implement the dynamic reconfiguration of components as part of incident response.

</details>

<a id="ir-4.3"></a>

### IR-4(3) Continuity of Operations

*Baselines: Not in a baseline*

Identify [Assignment: organization-defined classes of incidents] and take the following actions in response to those incidents to ensure continuation of organizational mission and business functions: [Assignment: organization-defined actions].

<details>
<summary>Discussion and assessment objectives for IR-4(3)</summary>

Classes of incidents include malfunctions due to design or implementation errors and omissions, targeted malicious attacks, and untargeted malicious attacks. Incident response actions include orderly system degradation, system shutdown, fall back to manual mode or activation of alternative technology whereby the system operates differently, employing deceptive measures, alternate information flows, or operating in a mode that is reserved for when systems are under attack. Organizations consider whether continuity of operations requirements during an incident conflict with the capability to automatically disable the system as specified as part of IR-4(5).

Determine if:

- **IR-04(03)[01]** [Assignment: organization-defined classes of incidents] are identified;
- **IR-04(03)[02]** [Assignment: organization-defined actions] are taken in response to those incidents (defined in IR-04(03)_ODP[01]) to ensure the continuation of organizational mission and business functions.

**Examine:** Incident response policy; procedures addressing incident handling; incident response plan; privacy plan; list of classes of incidents; list of appropriate incident response actions; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with incident handling responsibilities; organizational personnel with information security responsibilities.

**Test:** Mechanisms that support and/or implement continuity of operations.

</details>

<a id="ir-4.4"></a>

### IR-4(4) Information Correlation

*Baselines: High*

Correlate incident information and individual incident responses to achieve an organization-wide perspective on incident awareness and response.

<details>
<summary>Discussion and assessment objectives for IR-4(4)</summary>

Sometimes, a threat event, such as a hostile cyber-attack, can only be observed by bringing together information from different sources, including various reports and reporting procedures established by organizations.

Determine if incident information and individual incident responses are correlated to achieve an organization-wide perspective on incident awareness and response.

**Examine:** Incident response policy; procedures addressing incident handling; incident response plan; privacy plan; mechanisms supporting incident and event correlation; system design documentation; system configuration settings and associated documentation; system security plan; privacy plan; incident management correlation logs; event management correlation logs; security information and event management logs; incident management correlation reports; event management correlation reports; security information and event management reports; audit records; other relevant documents or records.

**Interview:** Organizational personnel with incident handling responsibilities; organizational personnel with information security and privacy responsibilities; organizational personnel with whom incident information and individual incident responses are to be correlated.

**Test:** Organizational processes for correlating incident information and individual incident responses; mechanisms that support and or implement the correlation of incident response information with individual incident responses.

</details>

<a id="ir-4.5"></a>

### IR-4(5) Automatic Disabling of System

*Baselines: Not in a baseline*

Implement a configurable capability to automatically disable the system if [Assignment: organization-defined security violations] are detected.

<details>
<summary>Discussion and assessment objectives for IR-4(5)</summary>

Organizations consider whether the capability to automatically disable the system conflicts with continuity of operations requirements specified as part of CP-2 or IR-4(3) . Security violations include cyber-attacks that have compromised the integrity of the system or exfiltrated organizational information and serious errors in software programs that could adversely impact organizational missions or functions or jeopardize the safety of individuals.

Determine if a configurable capability is implemented to automatically disable the system if [Assignment: organization-defined security violations] are detected.

**Examine:** Incident response policy; procedures addressing incident handling; automated mechanisms supporting incident handling; system design documentation; system configuration settings and associated documentation; system security plan; incident response plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with incident handling responsibilities; organizational personnel with information security responsibilities; system developers.

**Test:** Incident handling capability for the organization; automated mechanisms supporting and/or implementing automatic disabling of the system.

</details>

<a id="ir-4.6"></a>

### IR-4(6) Insider Threats

*Baselines: Not in a baseline*

Implement an incident handling capability for incidents involving insider threats.

<details>
<summary>Discussion and assessment objectives for IR-4(6)</summary>

Explicit focus on handling incidents involving insider threats provides additional emphasis on this type of threat and the need for specific incident handling capabilities to provide appropriate and timely responses.

Determine if an incident handling capability is implemented for incidents involving insider threats.

**Examine:** Incident response policy; procedures addressing incident handling; mechanisms supporting incident handling; system design documentation; system configuration settings and associated documentation; incident response plan; system security plan; audit records; other relevant documents or records.

**Interview:** Organizational personnel with incident handling responsibilities; organizational personnel with information security responsibilities.

**Test:** Incident handling capability for the organization.

</details>

<a id="ir-4.7"></a>

### IR-4(7) Insider Threats — Intra-organization Coordination

*Baselines: Not in a baseline*

Coordinate an incident handling capability for insider threats that includes the following organizational entities [Assignment: organization-defined entities].

<details>
<summary>Discussion and assessment objectives for IR-4(7)</summary>

Incident handling for insider threat incidents (e.g., preparation, detection and analysis, containment, eradication, and recovery) requires coordination among many organizational entities, including mission or business owners, system owners, human resources offices, procurement offices, personnel offices, physical security offices, senior agency information security officer, operations personnel, risk executive (function), senior agency official for privacy, and legal counsel. In addition, organizations may require external support from federal, state, and local law enforcement agencies.

Determine if:

- **IR-04(07)[01]** an incident handling capability is coordinated for insider threats;
- **IR-04(07)[02]** the coordinated incident handling capability includes [Assignment: organization-defined entities].

**Examine:** Incident response policy; procedures addressing incident handling; incident response plan; insider threat program plan; insider threat CONOPS; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with incident handling responsibilities; organizational personnel with information security and privacy responsibilities; organizational personnel/elements with whom the incident handling capability is to be coordinated.

**Test:** Organizational processes for coordinating incident handling.

</details>

<a id="ir-4.8"></a>

### IR-4(8) Correlation with External Organizations

*Baselines: Not in a baseline*

Coordinate with [Assignment: organization-defined external organizations] to correlate and share [Assignment: organization-defined incident information] to achieve a cross-organization perspective on incident awareness and more effective incident responses.

<details>
<summary>Discussion and assessment objectives for IR-4(8)</summary>

The coordination of incident information with external organizations—including mission or business partners, military or coalition partners, customers, and developers—can provide significant benefits. Cross-organizational coordination can serve as an important risk management capability. This capability allows organizations to leverage information from a variety of sources to effectively respond to incidents and breaches that could potentially affect the organization’s operations, assets, and individuals.

Determine if there is coordination with [Assignment: organization-defined external organizations] to correlate and share [Assignment: organization-defined incident information] to achieve a cross-organization perspective on incident awareness and more effective incident responses.

**Examine:** Incident response policy; procedures addressing incident handling; list of external organizations; records of incident handling coordination with external organizations; incident response plan; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with incident handling responsibilities; organizational personnel with information security and privacy responsibilities; personnel from external organizations with whom incident response information is to be coordinated, shared, and correlated.

**Test:** Organizational processes for coordinating incident handling information with external organizations.

</details>

<a id="ir-4.9"></a>

### IR-4(9) Dynamic Response Capability

*Baselines: Not in a baseline*

Employ [Assignment: organization-defined dynamic response capabilities] to respond to incidents.

<details>
<summary>Discussion and assessment objectives for IR-4(9)</summary>

The dynamic response capability addresses the timely deployment of new or replacement organizational capabilities in response to incidents. This includes capabilities implemented at the mission and business process level and at the system level.

Determine if [Assignment: organization-defined dynamic response capabilities] are employed to respond to incidents.

**Examine:** Incident response policy; procedures addressing incident handling; automated mechanisms supporting dynamic response capabilities; system design documentation; system configuration settings and associated documentation; incident response plan; system security plan; audit records; other relevant documents or records.

**Interview:** Organizational personnel with incident handling responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for dynamic response capability; automated mechanisms supporting and/or implementing the dynamic response capability for the organization.

</details>

<a id="ir-4.10"></a>

### IR-4(10) Supply Chain Coordination

*Baselines: Not in a baseline*

Coordinate incident handling activities involving supply chain events with other organizations involved in the supply chain.

<details>
<summary>Discussion and assessment objectives for IR-4(10)</summary>

Organizations involved in supply chain activities include product developers, system integrators, manufacturers, packagers, assemblers, distributors, vendors, and resellers. Supply chain incidents can occur anywhere through or to the supply chain and include compromises or breaches that involve primary or sub-tier providers, information technology products, system components, development processes or personnel, and distribution processes or warehousing facilities. Organizations consider including processes for protecting and sharing incident information in information exchange agreements and their obligations for reporting incidents to government oversight bodies (e.g., Federal Acquisition Security Council).

Determine if incident handling activities involving supply chain events are coordinated with other organizations involved in the supply chain.

**Examine:** Incident response policy; procedures addressing supply chain coordination and supply chain risk information sharing with the Federal Acquisition Security Council; acquisition contracts; service-level agreements; incident response plan; supply chain risk management plan; system security plan; incident response plans of other organization involved in supply chain activities; other relevant documents or records.

**Interview:** Organizational personnel with incident handling responsibilities; organizational personnel with mission and business responsibilities; organizational personnel with legal responsibilities; organizational personnel with information security responsibilities; organizational personnel with supply chain risk management responsibilities; organizational personnel with acquisition responsibilities.

</details>

<a id="ir-4.11"></a>

### IR-4(11) Integrated Incident Response Team

*Baselines: High*

Establish and maintain an integrated incident response team that can be deployed to any location identified by the organization in [Assignment: organization-defined time period].

<details>
<summary>Discussion and assessment objectives for IR-4(11)</summary>

An integrated incident response team is a team of experts that assesses, documents, and responds to incidents so that organizational systems and networks can recover quickly and implement the necessary controls to avoid future incidents. Incident response team personnel include forensic and malicious code analysts, tool developers, systems security and privacy engineers, and real-time operations personnel. The incident handling capability includes performing rapid forensic preservation of evidence and analysis of and response to intrusions. For some organizations, the incident response team can be a cross-organizational entity.

An integrated incident response team facilitates information sharing and allows organizational personnel (e.g., developers, implementers, and operators) to leverage team knowledge of the threat and implement defensive measures that enable organizations to deter intrusions more effectively. Moreover, integrated teams promote the rapid detection of intrusions, the development of appropriate mitigations, and the deployment of effective defensive measures. For example, when an intrusion is detected, the integrated team can rapidly develop an appropriate response for operators to implement, correlate the new incident with information on past intrusions, and augment ongoing cyber intelligence development. Integrated incident response teams are better able to identify adversary tactics, techniques, and procedures that are linked to the operations tempo or specific mission and business functions and to define responsive actions in a way that does not disrupt those mission and business functions. Incident response teams can be distributed within organizations to make the capability resilient.

Determine if:

- **IR-04(11)[01]** an integrated incident response team is established and maintained;
- **IR-04(11)[02]** the integrated incident response team can be deployed to any location identified by the organization in [Assignment: organization-defined time period].

**Examine:** Incident response policy; procedures addressing incident handling; procedures addressing incident response planning; incident response plan; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with incident handling responsibilities; organizational personnel with information security and privacy responsibilities; members of the integrated incident response team.

</details>

<a id="ir-4.12"></a>

### IR-4(12) Malicious Code and Forensic Analysis

*Baselines: Not in a baseline*

Analyze malicious code and/or other residual artifacts remaining in the system after the incident.

<details>
<summary>Discussion and assessment objectives for IR-4(12)</summary>

When conducted carefully in an isolated environment, analysis of malicious code and other residual artifacts of a security incident or breach can give the organization insight into adversary tactics, techniques, and procedures. It can also indicate the identity or some defining characteristics of the adversary. In addition, malicious code analysis can help the organization develop responses to future incidents.

Determine if:

- **IR-04(12)[01]** malicious code remaining in the system is analyzed after the incident;
- **IR-04(12)[02]** other residual artifacts remaining in the system (if any) are analyzed after the incident.

**Examine:** Incident response policy; procedures addressing incident handling; procedures addressing code and forensic analysis; procedures addressing incident response; incident response plan; system design documentation; malicious code protection mechanisms, tools, and techniques; results from malicious code analyses; system security plan; system audit records; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel with responsibility for malicious code protection; organizational personnel responsible for incident response/management.

**Test:** Organizational process for incident response; organizational processes for conducting forensic analysis; tools and techniques for analysis of malicious code characteristics and behavior.

</details>

<a id="ir-4.13"></a>

### IR-4(13) Behavior Analysis

*Baselines: Not in a baseline*

Analyze anomalous or suspected adversarial behavior in or related to [Assignment: organization-defined environments or resources].

<details>
<summary>Discussion and assessment objectives for IR-4(13)</summary>

If the organization maintains a deception environment, an analysis of behaviors in that environment, including resources targeted by the adversary and timing of the incident or event, can provide insight into adversarial tactics, techniques, and procedures. External to a deception environment, the analysis of anomalous adversarial behavior (e.g., changes in system performance or usage patterns) or suspected behavior (e.g., changes in searches for the location of specific resources) can give the organization such insight.

Determine if anomalous or suspected adversarial behavior in or related to [Assignment: organization-defined environments or resources] are analyzed.

**Examine:** Incident response policy; procedures addressing system monitoring tools and techniques; incident response plan; system monitoring logs or records; system monitoring tools and techniques documentation; system configuration settings and associated documentation; security plan; system component inventory; network diagram; system protocols documentation; list of acceptable thresholds for false positives and false negatives; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for detecting anomalous behavior.

</details>

<a id="ir-4.14"></a>

### IR-4(14) Security Operations Center

*Baselines: Not in a baseline*

Establish and maintain a security operations center.

<details>
<summary>Discussion and assessment objectives for IR-4(14)</summary>

A security operations center (SOC) is the focal point for security operations and computer network defense for an organization. The purpose of the SOC is to defend and monitor an organization’s systems and networks (i.e., cyber infrastructure) on an ongoing basis. The SOC is also responsible for detecting, analyzing, and responding to cybersecurity incidents in a timely manner. The organization staffs the SOC with skilled technical and operational personnel (e.g., security analysts, incident response personnel, systems security engineers) and implements a combination of technical, management, and operational controls (including monitoring, scanning, and forensics tools) to monitor, fuse, correlate, analyze, and respond to threat and security-relevant event data from multiple sources. These sources include perimeter defenses, network devices (e.g., routers, switches), and endpoint agent data feeds. The SOC provides a holistic situational awareness capability to help organizations determine the security posture of the system and organization. A SOC capability can be obtained in a variety of ways. Larger organizations may implement a dedicated SOC while smaller organizations may employ third-party organizations to provide such a capability.

Determine if:

- **IR-04(14)[01]** a security operations center is established;
- **IR-04(14)[02]** a security operations center is maintained.

**Examine:** Incident response policy; contingency planning policy; procedures addressing incident handling; procedures addressing the security operations center operations; mechanisms supporting dynamic response capabilities; incident response plan; contingency plan; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with incident handling responsibilities; organizational personnel with contingency planning responsibilities; security operations center personnel; organizational personnel with information security responsibilities.

**Test:** Mechanisms that support and/or implement the security operations center capability; mechanisms that support and/or implement the incident handling process.

</details>

<a id="ir-4.15"></a>

### IR-4(15) Public Relations and Reputation Repair

*Baselines: Not in a baseline*

- **(a)** Manage public relations associated with an incident; and
- **(b)** Employ measures to repair the reputation of the organization.

<details>
<summary>Discussion and assessment objectives for IR-4(15)</summary>

It is important for an organization to have a strategy in place for addressing incidents that have been brought to the attention of the general public, have cast the organization in a negative light, or have affected the organization’s constituents (e.g., partners, customers). Such publicity can be extremely harmful to the organization and affect its ability to carry out its mission and business functions. Taking proactive steps to repair the organization’s reputation is an essential aspect of reestablishing the trust and confidence of its constituents.

Determine if:

- **IR-04(15)(a)** public relations associated with an incident are managed;
- **IR-04(15)(b)** measures are employed to repair the reputation of the organization.

**Examine:** Incident response policy; procedures addressing incident response; procedures addressing incident handling; incident response plan; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with incident handling responsibilities; organizational personnel with information security responsibilities; organizational personnel with communications or public relations responsibilities.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for IR-4</summary>

Determine if:

- **IR-04a.**
  - **IR-04a.[01]** an incident handling capability for incidents is implemented that is consistent with the incident response plan;
  - **IR-04a.[02]** the incident handling capability for incidents includes preparation;
  - **IR-04a.[03]** the incident handling capability for incidents includes detection and analysis;
  - **IR-04a.[04]** the incident handling capability for incidents includes containment;
  - **IR-04a.[05]** the incident handling capability for incidents includes eradication;
  - **IR-04a.[06]** the incident handling capability for incidents includes recovery;
- **IR-04b.** incident handling activities are coordinated with contingency planning activities;
- **IR-04c.**
  - **IR-04c.[01]** lessons learned from ongoing incident handling activities are incorporated into incident response procedures, training, and testing;
  - **IR-04c.[02]** the changes resulting from the incorporated lessons learned are implemented accordingly;
- **IR-04d.**
  - **IR-04d.[01]** the rigor of incident handling activities is comparable and predictable across the organization;
  - **IR-04d.[02]** the intensity of incident handling activities is comparable and predictable across the organization;
  - **IR-04d.[03]** the scope of incident handling activities is comparable and predictable across the organization;
  - **IR-04d.[04]** the results of incident handling activities are comparable and predictable across the organization.

**Examine:** Incident response policy; contingency planning policy; procedures addressing incident handling; incident response plan; contingency plan; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with incident handling responsibilities; organizational personnel with contingency planning responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Incident handling capability for the organization.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
