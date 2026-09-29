---
control: si-4
title: 'System monitoring'
status: draft
stage: operate
typical:
  si-04_odp.01: 'detecting attacks, malware, unauthorized access, privilege misuse and data exfiltration'
  si-04_odp.02: 'log correlation in the security information and event management (SIEM) platform, endpoint detection and response, network intrusion detection and user behavior analytics'
  si-04_odp.03: 'alerts and monitoring reports'
  si-04_odp.04: 'the system owner and the incident response team'
  si-04_odp.05: 'as needed, and at least monthly'
  si-04_odp.06: 'at least monthly'
---

:::guidance
System monitoring takes in the audit records reviewed under AU-6 and adds endpoint, network and cloud detection. The [System Monitoring Standard](/templates/standards/system-monitoring-standard/) sets the log sources, detection coverage, alert handling and reporting. Legal review of monitoring (SI-4f) is usually done once for the organization's monitoring program and repeated when monitoring changes, with a system use notification under AC-8.
:::

- The {{org:security-operations}} shall monitor the system to detect attacks and indicators of potential attacks in accordance with the following monitoring objectives: {{param:si-04_odp.01}}. (SI-4a.1)
- The {{org:security-operations}} shall monitor the system to detect unauthorized local, network and remote connections. (SI-4a.2)
- The {{org:security-operations}} shall identify unauthorized use of the system through {{param:si-04_odp.02}}. (SI-4b)
- The {{org:system-owner}} shall ensure monitoring capabilities are deployed strategically within the system to collect the essential information the monitoring objectives call for, including at the managed interfaces under SC-7. (SI-4c.1)
- The {{org:system-owner}} shall ensure monitoring capabilities can be deployed at ad hoc locations within the system to track specific types of transactions of interest to the organization. (SI-4c.2)
- The {{org:security-operations}} shall analyze detected events and anomalies, and refer suspected incidents to the {{org:incident-response-team}}. (SI-4d)
- The {{org:ciso}} shall adjust the level of system monitoring activity when there is a change in risk to organizational operations and assets, individuals, other organizations or the Nation. (SI-4e)
- The {{org:ciso}} shall obtain a legal opinion on system monitoring activities before they begin and whenever they change significantly. (SI-4f)
- The {{org:security-operations}} shall provide {{param:si-04_odp.03}} to {{param:si-04_odp.04}}, {{param:si-04_odp.05}}. (SI-4g)

:::federal
[OMB M-26-14](https://www.whitehouse.gov/wp-content/uploads/2026/05/M-26-14-Ensuring-Effective-and-Efficient-Agency-Logging-and-Network-Visibility-to-Defend-Against-Evolving-Cyber-Threats.pdf), Ensuring Effective and Efficient Agency Logging and Network Visibility to Defend Against Evolving Cyber Threats (May 22, 2026), rescinded M-21-31. It directs agencies to prioritize two logging objectives, continuous event monitoring and threat hunting, investigation, response and forensics, for all information systems owned or operated by the agency or by third parties on its behalf, and to adhere to CISA's [Logging Reference Architecture](https://www.cisa.gov/resources-tools/resources/logging-reference-architecture) (published August 20, 2026). Its Appendix B requires logs that support monitoring for suspicious activity identified by security tooling, known indicators of compromise and anomalous system or user activity, with automated alerts, and that are readily available to the agency's top-level security operations center. It does not apply to national security systems. As of September 2026.

- The {{org:system-owner}} shall ensure the system's logs are readily available to the agency's top-level security operations center, as OMB M-26-14 requires. (SI-4c.1)
- The {{org:security-operations}} shall use the system's logs to monitor for suspicious activity identified by security tooling, known indicators of compromise and anomalous system or user activity, and generate automated alerts for them, as OMB M-26-14 Appendix B requires. (SI-4a.1)
- In the event of a known or suspected compromise, the {{org:ciso}} shall provide logs and other relevant data to CISA and the FBI on request, to the extent consistent with applicable law, as OMB M-26-14 requires. (SI-4g)

:::
