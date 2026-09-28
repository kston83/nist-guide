---
title: 'SI-4 System Monitoring'
description: 'NIST SP 800-53 Rev. 5 control SI-4, System Monitoring: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SI-4 System Monitoring'
  order: 4
control:
  id: SI-4
  family: SI
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | 23 (8 in a baseline) |

**Related controls:** [AC-2](/controls/ac/ac-2/), [AC-3](/controls/ac/ac-3/), [AC-4](/controls/ac/ac-4/), [AC-8](/controls/ac/ac-8/), [AC-17](/controls/ac/ac-17/), [AU-2](/controls/au/au-2/), [AU-6](/controls/au/au-6/), [AU-7](/controls/au/au-7/), [AU-9](/controls/au/au-9/), [AU-12](/controls/au/au-12/), [AU-13](/controls/au/au-13/), [AU-14](/controls/au/au-14/), [CA-7](/controls/ca/ca-7/), [CM-3](/controls/cm/cm-3/), [CM-6](/controls/cm/cm-6/), [CM-8](/controls/cm/cm-8/), [CM-11](/controls/cm/cm-11/), [IA-10](/controls/ia/ia-10/), [IR-4](/controls/ir/ir-4/), [MA-3](/controls/ma/ma-3/), [MA-4](/controls/ma/ma-4/), [PL-9](/controls/pl/pl-9/), [PM-12](/controls/pm/pm-12/), [RA-5](/controls/ra/ra-5/), [RA-10](/controls/ra/ra-10/), [SC-5](/controls/sc/sc-5/), [SC-7](/controls/sc/sc-7/), [SC-18](/controls/sc/sc-18/), [SC-26](/controls/sc/sc-26/), [SC-31](/controls/sc/sc-31/), [SC-35](/controls/sc/sc-35/), [SC-36](/controls/sc/sc-36/), [SC-37](/controls/sc/sc-37/), [SC-43](/controls/sc/sc-43/), [SI-3](/controls/si/si-3/), [SI-6](/controls/si/si-6/), [SI-7](/controls/si/si-7/), [SR-9](/controls/sr/sr-9/), [SR-10](/controls/sr/sr-10/)

## Control statement

- **a.** Monitor the system to detect:
  - **1.** Attacks and indicators of potential attacks in accordance with the following monitoring objectives: [Assignment: organization-defined monitoring objectives] ; and
  - **2.** Unauthorized local, network, and remote connections;
- **b.** Identify unauthorized use of the system through the following techniques and methods: [Assignment: organization-defined techniques and methods];
- **c.** Invoke internal monitoring capabilities or deploy monitoring devices:
  - **1.** Strategically within the system to collect organization-determined essential information; and
  - **2.** At ad hoc locations within the system to track specific types of transactions of interest to the organization;
- **d.** Analyze detected events and anomalies;
- **e.** Adjust the level of system monitoring activity when there is a change in risk to organizational operations and assets, individuals, other organizations, or the Nation;
- **f.** Obtain legal opinion regarding system monitoring activities; and
- **g.** Provide [Assignment: organization-defined system monitoring information] to [Assignment: organization-defined personnel or roles] [Selection (one or more): as needed; [Assignment: organization-defined frequency] ].

<details>
<summary>NIST discussion</summary>

System monitoring includes external and internal monitoring. External monitoring includes the observation of events occurring at external interfaces to the system. Internal monitoring includes the observation of events occurring within the system. Organizations monitor systems by observing audit activities in real time or by observing other system aspects such as access patterns, characteristics of access, and other actions. The monitoring objectives guide and inform the determination of the events. System monitoring capabilities are achieved through a variety of tools and techniques, including intrusion detection and prevention systems, malicious code protection software, scanning tools, audit record monitoring software, and network monitoring software.

Depending on the security architecture, the distribution and configuration of monitoring devices may impact throughput at key internal and external boundaries as well as at other locations across a network due to the introduction of network throughput latency. If throughput management is needed, such devices are strategically located and deployed as part of an established organization-wide security architecture. Strategic locations for monitoring devices include selected perimeter locations and near key servers and server farms that support critical applications. Monitoring devices are typically employed at the managed interfaces associated with controls SC-7 and AC-17 . The information collected is a function of the organizational monitoring objectives and the capability of systems to support such objectives. Specific types of transactions of interest include Hypertext Transfer Protocol (HTTP) traffic that bypasses HTTP proxies. System monitoring is an integral part of organizational continuous monitoring and incident response programs, and output from system monitoring serves as input to those programs. System monitoring requirements, including the need for specific types of system monitoring, may be referenced in other controls (e.g., AC-2g, AC-2(7), AC-2(12)(a), AC-17(1), AU-13, AU-13(1), AU-13(2), CM-3f, CM-6d, MA-3a, MA-4a, SC-5(3)(b), SC-7a, SC-7(24)(b), SC-18b, SC-43b ). Adjustments to levels of system monitoring are based on law enforcement information, intelligence information, or other sources of information. The legality of system monitoring activities is based on applicable laws, executive orders, directives, regulations, policies, standards, and guidelines.

</details>

## Control enhancements

<a id="si-4.1"></a>

### SI-4(1) System-wide Intrusion Detection System

*Baselines: Not in a baseline*

Connect and configure individual intrusion detection tools into a system-wide intrusion detection system.

<details>
<summary>Discussion and assessment objectives for SI-4(1)</summary>

Linking individual intrusion detection tools into a system-wide intrusion detection system provides additional coverage and effective detection capabilities. The information contained in one intrusion detection tool can be shared widely across the organization, making the system-wide detection capability more robust and powerful.

Determine if:

- **SI-04(01)[01]** individual intrusion detection tools are connected to a system-wide intrusion detection system;
- **SI-04(01)[02]** individual intrusion detection tools are configured into a system-wide intrusion detection system.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing system monitoring tools and techniques; system design documentation; system monitoring tools and techniques documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring the system; organizational personnel responsible for the intrusion detection system.

**Test:** Organizational processes for intrusion detection and system monitoring; mechanisms supporting and/or implementing intrusion detection capabilities.

</details>

<a id="si-4.2"></a>

### SI-4(2) Automated Tools and Mechanisms for Real-time Analysis

*Baselines: Moderate, High*

Employ automated tools and mechanisms to support near real-time analysis of events.

<details>
<summary>Discussion and assessment objectives for SI-4(2)</summary>

Automated tools and mechanisms include host-based, network-based, transport-based, or storage-based event monitoring tools and mechanisms or security information and event management (SIEM) technologies that provide real-time analysis of alerts and notifications generated by organizational systems. Automated monitoring techniques can create unintended privacy risks because automated controls may connect to external or otherwise unrelated systems. The matching of records between these systems may create linkages with unintended consequences. Organizations assess and document these risks in their privacy impact assessment and make determinations that are in alignment with their privacy program plan.

Determine if automated tools and mechanisms are employed to support a near real-time analysis of events.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing system monitoring tools and techniques; system design documentation; system monitoring tools and techniques documentation; system configuration settings and associated documentation; system audit records; system security plan; privacy plan; privacy program plan; privacy impact assessment; privacy risk management documentation; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security and privacy responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring the system; organizational personnel responsible for incident response/management.

**Test:** Organizational processes for the near real-time analysis of events; organizational processes for system monitoring; mechanisms supporting and/or implementing system monitoring; mechanisms/tools supporting and/or implementing an analysis of events.

</details>

<a id="si-4.3"></a>

### SI-4(3) Automated Tool and Mechanism Integration

*Baselines: Not in a baseline*

Employ automated tools and mechanisms to integrate intrusion detection tools and mechanisms into access control and flow control mechanisms.

<details>
<summary>Discussion and assessment objectives for SI-4(3)</summary>

Using automated tools and mechanisms to integrate intrusion detection tools and mechanisms into access and flow control mechanisms facilitates a rapid response to attacks by enabling the reconfiguration of mechanisms in support of attack isolation and elimination.

Determine if:

- **SI-04(03)[01]** automated tools and mechanisms are employed to integrate intrusion detection tools and mechanisms into access control mechanisms;
- **SI-04(03)[02]** automated tools and mechanisms are employed to integrate intrusion detection tools and mechanisms into flow control mechanisms.

**Examine:** System and information integrity policy; system and information integrity procedures; access control policy and procedures; procedures addressing system monitoring tools and techniques; system design documentation; system monitoring tools and techniques documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring the system; organizational personnel responsible for the intrusion detection system.

**Test:** Organizational processes for intrusion detection and system monitoring; mechanisms supporting and/or implementing the intrusion detection and system monitoring capability; mechanisms and tools supporting and/or implementing the access and flow control capabilities; mechanisms and tools supporting and/or implementing the integration of intrusion detection tools into the access and flow control mechanisms.

</details>

<a id="si-4.4"></a>

### SI-4(4) Inbound and Outbound Communications Traffic

*Baselines: Moderate, High*

- **(a)** Determine criteria for unusual or unauthorized activities or conditions for inbound and outbound communications traffic;
- **(b)** Monitor inbound and outbound communications traffic [Assignment: organization-defined frequency] for [Assignment: organization-defined unusual or unauthorized activities or conditions].

<details>
<summary>Discussion and assessment objectives for SI-4(4)</summary>

Unusual or unauthorized activities or conditions related to system inbound and outbound communications traffic includes internal traffic that indicates the presence of malicious code or unauthorized use of legitimate code or credentials within organizational systems or propagating among system components, signaling to external systems, and the unauthorized exporting of information. Evidence of malicious code or unauthorized use of legitimate code or credentials is used to identify potentially compromised systems or system components.

Determine if:

- **SI-04(04)(a)**
  - **SI-04(04)(a)[01]** criteria for unusual or unauthorized activities or conditions for inbound communications traffic are defined;
  - **SI-04(04)(a)[02]** criteria for unusual or unauthorized activities or conditions for outbound communications traffic are defined;
- **SI-04(04)(b)**
  - **SI-04(04)(b)[01]** inbound communications traffic is monitored [Assignment: organization-defined frequency] for [Assignment: organization-defined unusual or unauthorized activities or conditions];
  - **SI-04(04)(b)[02]** outbound communications traffic is monitored [Assignment: organization-defined frequency] for [Assignment: organization-defined unusual or unauthorized activities or conditions].

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing system monitoring tools and techniques; system design documentation; system monitoring tools and techniques documentation; system configuration settings and associated documentation; system protocols; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring the system; organizational personnel responsible for the intrusion detection system.

**Test:** Organizational processes for intrusion detection and system monitoring; mechanisms supporting and/or implementing intrusion detection and system monitoring capabilities; mechanisms supporting and/or implementing the monitoring of inbound and outbound communications traffic.

</details>

<a id="si-4.5"></a>

### SI-4(5) System-generated Alerts

*Baselines: Moderate, High*

Alert [Assignment: organization-defined personnel or roles] when the following system-generated indications of compromise or potential compromise occur: [Assignment: organization-defined compromise indicators].

<details>
<summary>Discussion and assessment objectives for SI-4(5)</summary>

Alerts may be generated from a variety of sources, including audit records or inputs from malicious code protection mechanisms, intrusion detection or prevention mechanisms, or boundary protection devices such as firewalls, gateways, and routers. Alerts can be automated and may be transmitted telephonically, by electronic mail messages, or by text messaging. Organizational personnel on the alert notification list can include system administrators, mission or business owners, system owners, information owners/stewards, senior agency information security officers, senior agency officials for privacy, system security officers, or privacy officers. In contrast to alerts generated by the system, alerts generated by organizations in SI-4(12) focus on information sources external to the system, such as suspicious activity reports and reports on potential insider threats.

Determine if [Assignment: organization-defined personnel or roles] are alerted when system-generated [Assignment: organization-defined compromise indicators] occur.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing system monitoring tools and techniques; system monitoring tools and techniques documentation; system configuration settings and associated documentation; list of personnel selected to receive alerts; documentation of alerts generated based on compromise indicators; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security and privacy responsibilities; system developers; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring the system; organizational personnel on the system alert notification list; organizational personnel responsible for the intrusion detection system.

**Test:** Organizational processes for intrusion detection and system monitoring; mechanisms supporting and/or implementing intrusion detection and system monitoring capabilities; mechanisms supporting and/or implementing alerts for compromise indicators.

</details>

<a id="si-4.7"></a>

### SI-4(7) Automated Response to Suspicious Events

*Baselines: Not in a baseline*

- **(a)** Notify [Assignment: organization-defined incident response personnel] of detected suspicious events; and
- **(b)** Take the following actions upon detection: [Assignment: organization-defined least-disruptive actions].

<details>
<summary>Discussion and assessment objectives for SI-4(7)</summary>

Least-disruptive actions include initiating requests for human responses.

Determine if:

- **SI-04(07)(a)** [Assignment: organization-defined incident response personnel] are notified of detected suspicious events;
- **SI-04(07)(b)** [Assignment: organization-defined least-disruptive actions] are taken upon the detection of suspicious events.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing system monitoring tools and techniques; system design documentation; system monitoring tools and techniques documentation; system configuration settings and associated documentation; alerts and notifications generated based on detected suspicious events; records of actions taken to terminate suspicious events; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developers; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring the system; organizational personnel responsible for the intrusion detection system.

**Test:** Organizational processes for intrusion detection and system monitoring; mechanisms supporting and/or implementing intrusion detection and system monitoring capabilities; mechanisms supporting and/or implementing notifications to incident response personnel; mechanisms supporting and/or implementing actions to terminate suspicious events.

</details>

<a id="si-4.9"></a>

### SI-4(9) Testing of Monitoring Tools and Mechanisms

*Baselines: Not in a baseline*

Test intrusion-monitoring tools and mechanisms [Assignment: organization-defined frequency].

<details>
<summary>Discussion and assessment objectives for SI-4(9)</summary>

Testing intrusion-monitoring tools and mechanisms is necessary to ensure that the tools and mechanisms are operating correctly and continue to satisfy the monitoring objectives of organizations. The frequency and depth of testing depends on the types of tools and mechanisms used by organizations and the methods of deployment.

Determine if intrusion-monitoring tools and mechanisms are tested [Assignment: organization-defined frequency].

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing the testing of system monitoring tools and techniques; documentation providing evidence of testing intrusion-monitoring tools; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring the system; organizational personnel responsible for the intrusion detection system.

**Test:** Organizational processes for intrusion detection and system monitoring; mechanisms supporting and/or implementing intrusion detection and system monitoring capabilities; mechanisms supporting and/or implementing the testing of intrusion-monitoring tools.

</details>

<a id="si-4.10"></a>

### SI-4(10) Visibility of Encrypted Communications

*Baselines: High*

Make provisions so that [Assignment: organization-defined encrypted communications traffic] is visible to [Assignment: organization-defined system monitoring tools and mechanisms].

<details>
<summary>Discussion and assessment objectives for SI-4(10)</summary>

Organizations balance the need to encrypt communications traffic to protect data confidentiality with the need to maintain visibility into such traffic from a monitoring perspective. Organizations determine whether the visibility requirement applies to internal encrypted traffic, encrypted traffic intended for external destinations, or a subset of the traffic types.

Determine if provisions are made so that [Assignment: organization-defined encrypted communications traffic] is visible to [Assignment: organization-defined system monitoring tools and mechanisms].

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing system monitoring tools and techniques; system design documentation; system monitoring tools and techniques documentation; system configuration settings and associated documentation; system protocols; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring the system; organizational personnel responsible for the intrusion detection system.

**Test:** Organizational processes for intrusion detection and system monitoring; mechanisms supporting and/or implementing intrusion detection and system monitoring capabilities; mechanisms supporting and/or implementing the visibility of encrypted communications traffic to monitoring tools.

</details>

<a id="si-4.11"></a>

### SI-4(11) Analyze Communications Traffic Anomalies

*Baselines: Not in a baseline*

Analyze outbound communications traffic at the external interfaces to the system and selected [Assignment: organization-defined interior points] to discover anomalies.

<details>
<summary>Discussion and assessment objectives for SI-4(11)</summary>

Organization-defined interior points include subnetworks and subsystems. Anomalies within organizational systems include large file transfers, long-time persistent connections, attempts to access information from unexpected locations, the use of unusual protocols and ports, the use of unmonitored network protocols (e.g., IPv6 usage during IPv4 transition), and attempted communications with suspected malicious external addresses.

Determine if:

- **SI-04(11)[01]** outbound communications traffic at the external interfaces to the system is analyzed to discover anomalies;
- **SI-04(11)[02]** outbound communications traffic at [Assignment: organization-defined interior points] is analyzed to discover anomalies.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing system monitoring tools and techniques; system design documentation; network diagram; system monitoring tools and techniques documentation; system configuration settings and associated documentation; system monitoring logs or records; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring the system; organizational personnel responsible for the intrusion detection system.

**Test:** Organizational processes for intrusion detection and system monitoring; mechanisms supporting and/or implementing intrusion detection and system monitoring capabilities; mechanisms supporting and/or implementing the analysis of communications traffic.

</details>

<a id="si-4.12"></a>

### SI-4(12) Automated Organization-generated Alerts

*Baselines: High*

Alert [Assignment: organization-defined personnel or roles] using [Assignment: organization-defined automated mechanisms] when the following indications of inappropriate or unusual activities with security or privacy implications occur: [Assignment: organization-defined activities that trigger alerts].

<details>
<summary>Discussion and assessment objectives for SI-4(12)</summary>

Organizational personnel on the system alert notification list include system administrators, mission or business owners, system owners, senior agency information security officer, senior agency official for privacy, system security officers, or privacy officers. Automated organization-generated alerts are the security alerts generated by organizations and transmitted using automated means. The sources for organization-generated alerts are focused on other entities such as suspicious activity reports and reports on potential insider threats. In contrast to alerts generated by the organization, alerts generated by the system in SI-4(5) focus on information sources that are internal to the systems, such as audit records.

Determine if [Assignment: organization-defined personnel or roles] is/are alerted using [Assignment: organization-defined automated mechanisms] when [Assignment: organization-defined activities that trigger alerts] indicate inappropriate or unusual activities with security or privacy implications.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing system monitoring tools and techniques; system design documentation; system monitoring tools and techniques documentation; system configuration settings and associated documentation; list of inappropriate or unusual activities with security and privacy implications that trigger alerts; suspicious activity reports; alerts provided to security and privacy personnel; system monitoring logs or records; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security and privacy responsibilities; system developers; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring the system; organizational personnel responsible for the intrusion detection system.

**Test:** Organizational processes for intrusion detection and system monitoring; automated mechanisms supporting and/or implementing intrusion detection and system monitoring capabilities; automated mechanisms supporting and/or implementing automated alerts to security personnel.

</details>

<a id="si-4.13"></a>

### SI-4(13) Analyze Traffic and Event Patterns

*Baselines: Not in a baseline*

- **(a)** Analyze communications traffic and event patterns for the system;
- **(b)** Develop profiles representing common traffic and event patterns; and
- **(c)** Use the traffic and event profiles in tuning system-monitoring devices.

<details>
<summary>Discussion and assessment objectives for SI-4(13)</summary>

Identifying and understanding common communications traffic and event patterns help organizations provide useful information to system monitoring devices to more effectively identify suspicious or anomalous traffic and events when they occur. Such information can help reduce the number of false positives and false negatives during system monitoring.

Determine if:

- **SI-04(13)(a)**
  - **SI-04(13)(a)[01]** communications traffic for the system is analyzed;
  - **SI-04(13)(a)[02]** event patterns for the system are analyzed;
- **SI-04(13)(b)**
  - **SI-04(13)(b)[01]** profiles representing common traffic are developed;
  - **SI-04(13)(b)[02]** profiles representing event patterns are developed;
- **SI-04(13)(c)**
  - **SI-04(13)(c)[01]** traffic profiles are used in tuning system-monitoring devices;
  - **SI-04(13)(c)[02]** event profiles are used in tuning system-monitoring devices.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing system monitoring tools and techniques; system design documentation; system monitoring tools and techniques documentation; system configuration settings and associated documentation; list of profiles representing common traffic patterns and/or events; system protocols documentation; list of acceptable thresholds for false positives and false negatives; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring the system; organizational personnel responsible for the intrusion detection system.

**Test:** Organizational processes for intrusion detection and system monitoring; mechanisms supporting and/or implementing intrusion detection and system monitoring capabilities; mechanisms supporting and/or implementing the analysis of communications traffic and event patterns.

</details>

<a id="si-4.14"></a>

### SI-4(14) Wireless Intrusion Detection

*Baselines: High*

Employ a wireless intrusion detection system to identify rogue wireless devices and to detect attack attempts and potential compromises or breaches to the system.

<details>
<summary>Discussion and assessment objectives for SI-4(14)</summary>

Wireless signals may radiate beyond organizational facilities. Organizations proactively search for unauthorized wireless connections, including the conduct of thorough scans for unauthorized wireless access points. Wireless scans are not limited to those areas within facilities containing systems but also include areas outside of facilities to verify that unauthorized wireless access points are not connected to organizational systems.

Determine if:

- **SI-04(14)[01]** a wireless intrusion detection system is employed to identify rogue wireless devices;
- **SI-04(14)[02]** a wireless intrusion detection system is employed to detect attack attempts on the system;
- **SI-04(14)[03]** a wireless intrusion detection system is employed to detect potential compromises or breaches to the system.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing system monitoring tools and techniques; system design documentation; system monitoring tools and techniques documentation; system configuration settings and associated documentation; system protocols; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring the system; organizational personnel responsible for the intrusion detection system.

**Test:** Organizational processes for intrusion detection; mechanisms supporting and/or implementing a wireless intrusion detection capability.

</details>

<a id="si-4.15"></a>

### SI-4(15) Wireless to Wireline Communications

*Baselines: Not in a baseline*

Employ an intrusion detection system to monitor wireless communications traffic as the traffic passes from wireless to wireline networks.

<details>
<summary>Discussion and assessment objectives for SI-4(15)</summary>

Wireless networks are inherently less secure than wired networks. For example, wireless networks are more susceptible to eavesdroppers or traffic analysis than wireline networks. When wireless to wireline communications exist, the wireless network could become a port of entry into the wired network. Given the greater facility of unauthorized network access via wireless access points compared to unauthorized wired network access from within the physical boundaries of the system, additional monitoring of transitioning traffic between wireless and wired networks may be necessary to detect malicious activities. Employing intrusion detection systems to monitor wireless communications traffic helps to ensure that the traffic does not contain malicious code prior to transitioning to the wireline network.

Determine if an intrusion detection system is employed to monitor wireless communications traffic as the traffic passes from wireless to wireline networks.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing system monitoring tools and techniques; system design documentation; system monitoring tools and techniques documentation; system configuration settings and associated documentation; system protocols documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring the system; organizational personnel responsible for the intrusion detection system.

**Test:** Organizational processes for intrusion detection and system monitoring; mechanisms supporting and/or implementing intrusion detection and system monitoring capabilities; mechanisms supporting and/or implementing a wireless intrusion detection capability.

</details>

<a id="si-4.16"></a>

### SI-4(16) Correlate Monitoring Information

*Baselines: Not in a baseline*

Correlate information from monitoring tools and mechanisms employed throughout the system.

<details>
<summary>Discussion and assessment objectives for SI-4(16)</summary>

Correlating information from different system monitoring tools and mechanisms can provide a more comprehensive view of system activity. Correlating system monitoring tools and mechanisms that typically work in isolation—including malicious code protection software, host monitoring, and network monitoring—can provide an organization-wide monitoring view and may reveal otherwise unseen attack patterns. Understanding the capabilities and limitations of diverse monitoring tools and mechanisms and how to maximize the use of information generated by those tools and mechanisms can help organizations develop, operate, and maintain effective monitoring programs. The correlation of monitoring information is especially important during the transition from older to newer technologies (e.g., transitioning from IPv4 to IPv6 network protocols).

Determine if information from monitoring tools and mechanisms employed throughout the system is correlated.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing system monitoring tools and techniques; system design documentation; system monitoring tools and techniques documentation; system configuration settings and associated documentation; event correlation logs or records; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring the system; organizational personnel responsible for the intrusion detection system.

**Test:** Organizational processes for intrusion detection and system monitoring; mechanisms supporting and/or implementing intrusion detection and system monitoring capabilities; mechanisms supporting and/or implementing the correlation of information from monitoring tools.

</details>

<a id="si-4.17"></a>

### SI-4(17) Integrated Situational Awareness

*Baselines: Not in a baseline*

Correlate information from monitoring physical, cyber, and supply chain activities to achieve integrated, organization-wide situational awareness.

<details>
<summary>Discussion and assessment objectives for SI-4(17)</summary>

Correlating monitoring information from a more diverse set of information sources helps to achieve integrated situational awareness. Integrated situational awareness from a combination of physical, cyber, and supply chain monitoring activities enhances the capability of organizations to more quickly detect sophisticated attacks and investigate the methods and techniques employed to carry out such attacks. In contrast to SI-4(16) , which correlates the various cyber monitoring information, integrated situational awareness is intended to correlate monitoring beyond the cyber domain. Correlation of monitoring information from multiple activities may help reveal attacks on organizations that are operating across multiple attack vectors.

Determine if information from monitoring physical, cyber, and supply chain activities are correlated to achieve integrated, organization-wide situational awareness.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing system monitoring tools and techniques; system design documentation; system monitoring tools and techniques documentation; system configuration settings and associated documentation; event correlation logs or records resulting from physical, cyber, and supply chain activities; system audit records; system security plan; supply chain risk management plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring the system; organizational personnel responsible for the intrusion detection system.

**Test:** Organizational processes for intrusion detection and system monitoring; mechanisms supporting and/or implementing intrusion detection and system monitoring capabilities; mechanisms supporting and/or implementing the correlation of information from monitoring tools.

</details>

<a id="si-4.18"></a>

### SI-4(18) Analyze Traffic and Covert Exfiltration

*Baselines: Not in a baseline*

Analyze outbound communications traffic at external interfaces to the system and at the following interior points to detect covert exfiltration of information: [Assignment: organization-defined interior points].

<details>
<summary>Discussion and assessment objectives for SI-4(18)</summary>

Organization-defined interior points include subnetworks and subsystems. Covert means that can be used to exfiltrate information include steganography.

Determine if:

- **SI-04(18)[01]** outbound communications traffic is analyzed at interfaces external to the system to detect covert exfiltration of information;
- **SI-04(18)[02]** outbound communications traffic is analyzed at [Assignment: organization-defined interior points] to detect covert exfiltration of information.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing system monitoring tools and techniques; system design documentation; network diagram; system monitoring tools and techniques documentation; system configuration settings and associated documentation; system monitoring logs or records; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring the system; organizational personnel responsible for the intrusion detection system.

**Test:** Organizational processes for intrusion detection and system monitoring; mechanisms supporting and/or implementing intrusion detection and system monitoring capabilities; mechanisms supporting and/or implementing an analysis of outbound communications traffic.

</details>

<a id="si-4.19"></a>

### SI-4(19) Risk for Individuals

*Baselines: Not in a baseline*

Implement [Assignment: organization-defined additional monitoring] of individuals who have been identified by [Assignment: organization-defined sources] as posing an increased level of risk.

<details>
<summary>Discussion and assessment objectives for SI-4(19)</summary>

Indications of increased risk from individuals can be obtained from different sources, including personnel records, intelligence agencies, law enforcement organizations, and other sources. The monitoring of individuals is coordinated with the management, legal, security, privacy, and human resource officials who conduct such monitoring. Monitoring is conducted in accordance with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines.

Determine if [Assignment: organization-defined additional monitoring] is implemented on individuals who have been identified by [Assignment: organization-defined sources] as posing an increased level of risk.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing system monitoring; system design documentation; system monitoring tools and techniques documentation; system configuration settings and associated documentation; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security and privacy responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring the system; legal counsel; human resource officials; organizational personnel with personnel security responsibilities.

**Test:** Organizational processes for system monitoring; mechanisms supporting and/or implementing a system monitoring capability.

</details>

<a id="si-4.20"></a>

### SI-4(20) Privileged Users

*Baselines: High*

Implement the following additional monitoring of privileged users: [Assignment: organization-defined additional monitoring].

<details>
<summary>Discussion and assessment objectives for SI-4(20)</summary>

Privileged users have access to more sensitive information, including security-related information, than the general user population. Access to such information means that privileged users can potentially do greater damage to systems and organizations than non-privileged users. Therefore, implementing additional monitoring on privileged users helps to ensure that organizations can identify malicious activity at the earliest possible time and take appropriate actions.

Determine if [Assignment: organization-defined additional monitoring] of privileged users is implemented.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing system monitoring tools and techniques; system design documentation; system monitoring tools and techniques documentation; system configuration settings and associated documentation; system monitoring logs or records; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring the system.

**Test:** Organizational processes for system monitoring; mechanisms supporting and/or implementing a system monitoring capability.

</details>

<a id="si-4.21"></a>

### SI-4(21) Probationary Periods

*Baselines: Not in a baseline*

Implement the following additional monitoring of individuals during [Assignment: organization-defined probationary period]: [Assignment: organization-defined additional monitoring].

<details>
<summary>Discussion and assessment objectives for SI-4(21)</summary>

During probationary periods, employees do not have permanent employment status within organizations. Without such status or access to information that is resident on the system, additional monitoring can help identify any potentially malicious activity or inappropriate behavior.

Determine if [Assignment: organization-defined additional monitoring] of individuals is implemented during [Assignment: organization-defined probationary period].

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing system monitoring; system design documentation; system monitoring tools and techniques documentation; system configuration settings and associated documentation; system monitoring logs or records; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring the system.

**Test:** Organizational processes for system monitoring; mechanisms supporting and/or implementing a system monitoring capability.

</details>

<a id="si-4.22"></a>

### SI-4(22) Unauthorized Network Services

*Baselines: High*

- **(a)** Detect network services that have not been authorized or approved by [Assignment: organization-defined authorization or approval processes] ; and
- **(b)** [Selection (one or more): audit; alert [Assignment: organization-defined personnel or roles] ] when detected.

<details>
<summary>Discussion and assessment objectives for SI-4(22)</summary>

Unauthorized or unapproved network services include services in service-oriented architectures that lack organizational verification or validation and may therefore be unreliable or serve as malicious rogues for valid services.

Determine if:

- **SI-04(22)(a)** network services that have not been authorized or approved by [Assignment: organization-defined authorization or approval processes] are detected;
- **SI-04(22)(b)** [Selection (one or more): audit; alert [Assignment: organization-defined personnel or roles] ] is/are initiated when network services that have not been authorized or approved by authorization or approval processes are detected.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing system monitoring tools and techniques; system design documentation; system monitoring tools and techniques documentation; system configuration settings and associated documentation; documented authorization/approval of network services; notifications or alerts of unauthorized network services; system monitoring logs or records; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring the system.

**Test:** Organizational processes for system monitoring; mechanisms supporting and/or implementing a system monitoring capability; mechanisms for auditing network services; mechanisms for providing alerts.

</details>

<a id="si-4.23"></a>

### SI-4(23) Host-based Devices

*Baselines: Not in a baseline*

Implement the following host-based monitoring mechanisms at [Assignment: organization-defined system components]: [Assignment: organization-defined host-based monitoring mechanisms].

<details>
<summary>Discussion and assessment objectives for SI-4(23)</summary>

Host-based monitoring collects information about the host (or system in which it resides). System components in which host-based monitoring can be implemented include servers, notebook computers, and mobile devices. Organizations may consider employing host-based monitoring mechanisms from multiple product developers or vendors.

Determine if [Assignment: organization-defined host-based monitoring mechanisms] are implemented on [Assignment: organization-defined system components].

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing system monitoring tools and techniques; system design documentation; host-based monitoring mechanisms; system monitoring tools and techniques documentation; system configuration settings and associated documentation; list of system components requiring host-based monitoring; system monitoring logs or records; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring system hosts.

**Test:** Organizational processes for system monitoring; mechanisms supporting and/or implementing a host-based monitoring capability.

</details>

<a id="si-4.24"></a>

### SI-4(24) Indicators of Compromise

*Baselines: Not in a baseline*

Discover, collect, and distribute to [Assignment: organization-defined personnel or roles] , indicators of compromise provided by [Assignment: organization-defined sources].

<details>
<summary>Discussion and assessment objectives for SI-4(24)</summary>

Indicators of compromise (IOC) are forensic artifacts from intrusions that are identified on organizational systems at the host or network level. IOCs provide valuable information on systems that have been compromised. IOCs can include the creation of registry key values. IOCs for network traffic include Universal Resource Locator or protocol elements that indicate malicious code command and control servers. The rapid distribution and adoption of IOCs can improve information security by reducing the time that systems and organizations are vulnerable to the same exploit or attack. Threat indicators, signatures, tactics, techniques, procedures, and other indicators of compromise may be available via government and non-government cooperatives, including the Forum of Incident Response and Security Teams, the United States Computer Emergency Readiness Team, the Defense Industrial Base Cybersecurity Information Sharing Program, and the CERT Coordination Center.

Determine if:

- **SI-04(24)[01]** indicators of compromise provided by [Assignment: organization-defined sources] are discovered;
- **SI-04(24)[02]** indicators of compromise provided by [Assignment: organization-defined sources] are collected;
- **SI-04(24)[03]** indicators of compromise provided by [Assignment: organization-defined sources] are distributed to [Assignment: organization-defined personnel or roles].

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing system monitoring; system design documentation; system monitoring tools and techniques documentation; system configuration settings and associated documentation; system monitoring logs or records; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring system hosts.

**Test:** Organizational processes for system monitoring; organizational processes for the discovery, collection, distribution, and use of indicators of compromise; mechanisms supporting and/or implementing a system monitoring capability; mechanisms supporting and/or implementing the discovery, collection, distribution, and use of indicators of compromise.

</details>

<a id="si-4.25"></a>

### SI-4(25) Optimize Network Traffic Analysis

*Baselines: Not in a baseline*

Provide visibility into network traffic at external and key internal system interfaces to optimize the effectiveness of monitoring devices.

<details>
<summary>Discussion and assessment objectives for SI-4(25)</summary>

Encrypted traffic, asymmetric routing architectures, capacity and latency limitations, and transitioning from older to newer technologies (e.g., IPv4 to IPv6 network protocol transition) may result in blind spots for organizations when analyzing network traffic. Collecting, decrypting, pre-processing, and distributing only relevant traffic to monitoring devices can streamline the efficiency and use of devices and optimize traffic analysis.

Determine if:

- **SI-04(25)[01]** visibility into network traffic at external system interfaces is provided to optimize the effectiveness of monitoring devices;
- **SI-04(25)[02]** visibility into network traffic at key internal system interfaces is provided to optimize the effectiveness of monitoring devices.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing system monitoring; system design documentation; system monitoring tools and techniques documentation; system configuration settings and associated documentation; system monitoring logs or records; system architecture; system audit records; network traffic reports; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring system hosts.

**Test:** Organizational processes for system monitoring; organizational processes for the discovery, collection, distribution, and use of indicators of compromise; mechanisms supporting and/or implementing a system monitoring capability; mechanisms supporting and/or implementing the discovery, collection, distribution, and use of indicators of compromise.

</details>

*Withdrawn enhancements: SI-4(6), SI-4(8).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SI-4</summary>

Determine if:

- **SI-04a.**
  - **SI-04a.01** the system is monitored to detect attacks and indicators of potential attacks in accordance with [Assignment: organization-defined monitoring objectives];
  - **SI-04a.02**
    - **SI-04a.02[01]** the system is monitored to detect unauthorized local connections;
    - **SI-04a.02[02]** the system is monitored to detect unauthorized network connections;
    - **SI-04a.02[03]** the system is monitored to detect unauthorized remote connections;
- **SI-04b.** unauthorized use of the system is identified through [Assignment: organization-defined techniques and methods];
- **SI-04c.**
  - **SI-04c.01** internal monitoring capabilities are invoked or monitoring devices are deployed strategically within the system to collect organization-determined essential information;
  - **SI-04c.02** internal monitoring capabilities are invoked or monitoring devices are deployed at ad hoc locations within the system to track specific types of transactions of interest to the organization;
- **SI-04d.**
  - **SI-04d.[01]** detected events are analyzed;
  - **SI-04d.[02]** detected anomalies are analyzed;
- **SI-04e.** the level of system monitoring activity is adjusted when there is a change in risk to organizational operations and assets, individuals, other organizations, or the Nation;
- **SI-04f.** a legal opinion regarding system monitoring activities is obtained;
- **SI-04g.** [Assignment: organization-defined system monitoring information] is provided to [Assignment: organization-defined personnel or roles] [Selection (one or more): as needed; [Assignment: organization-defined frequency] ].

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing system monitoring tools and techniques; continuous monitoring strategy; facility diagram/layout; system design documentation; system monitoring tools and techniques documentation; locations within the system where monitoring devices are deployed; system configuration settings and associated documentation; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel installing, configuring, and/or maintaining the system; organizational personnel responsible for monitoring the system.

**Test:** Organizational processes for system monitoring; mechanisms supporting and/or implementing system monitoring capabilities.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write bel

## How to apply it

SI-4 asks you to watch the system for attacks, unauthorized connections and misuse, place monitoring where it sees the important activity, analyze what it finds, increase monitoring when risk rises, and get legal review of how you monitor. It works with [AU-6](/controls/au/au-6/) (reviewing audit records) and [IR-4](/controls/ir/ir-4/) (handling what monitoring finds).

**Common implementations.** A security information and event management (SIEM) platform collecting logs from the identity provider, endpoints, network and cloud services, with detection rules mapped to known attack techniques. Endpoint detection and response on servers and workstations. Network intrusion detection or cloud-native threat detection at boundaries and key internal points. A security operations team or managed provider that triages alerts continuously. Legal or privacy review of monitoring, and a login banner under [AC-8](/controls/ac/ac-8/).

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Monitoring objectives (a.1) | Detecting attacks, malware, unauthorized access, privilege misuse and data exfiltration |
| Techniques to identify unauthorized use (b) | Log correlation in the SIEM, endpoint detection and response, network intrusion detection and user behavior analytics |
| Monitoring information to provide, to whom and how often (g) | Alerts and monitoring reports, to the system owner and the incident response team, as needed and at least monthly |
| Traffic monitoring frequency and what to look for (SI-4(4)) | Continuously, for unusual or unauthorized activities or conditions such as connections to known malicious destinations, unusual data volumes and unapproved protocols |
| Who is alerted and on which indicators (SI-4(5)) | The security operations team, on indicators of compromise from the detection tools and threat intelligence feeds |

**Evidence assessors ask for.**

- The monitoring strategy or architecture: what is monitored, where and by which tool
- The list of log sources in the SIEM, compared with the component inventory
- A sample of alerts and how each was triaged
- Records of legal review of monitoring (f)
- Evidence that monitoring increased when risk changed (e)

**Inheritance.** A central security operations center and its tools are usually common controls. The system owns sending its logs and events to them, application-specific detections, and making sure its components are covered.

**Common findings.**

- Components not sending logs, or endpoint agents missing from some servers.
- Alerts generated but not reviewed, or closed with no notes.
- Detection rules left at vendor defaults and never tuned.
- No legal review of monitoring activities.

**Enhancements in the Moderate baseline.** [SI-4(2)](#si-4.2) automated real-time analysis, [SI-4(4)](#si-4.4) monitoring inbound and outbound traffic and [SI-4(5)](#si-4.5) system-generated alerts. High adds [SI-4(10)](#si-4.10), [SI-4(12)](#si-4.12), [SI-4(14)](#si-4.14), [SI-4(20)](#si-4.20) and [SI-4(22)](#si-4.22).
