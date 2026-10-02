---
title: Baseline Configuration Standard
type: standard
description: The secure configuration each component type follows, the functions, ports, protocols and services it prohibits, how baselines are built, reviewed and kept, the register of approved deviations, and the scan evidence that shows compliance, making the configuration management policy's CM-2, CM-6 and CM-7 requirements measurable.
controls: [cm-6, cm-6.1, cm-6.2, cm-2, cm-2.2, cm-2.3, cm-2.7, cm-7, cm-7.1]
status: draft
stage: core
typical:
  cm-06_odp.01: the secure configuration baselines named in the baseline configuration standard
  cm-06_odp.02: all system components
  cm-06_odp.03: documented operational needs that the system owner approves and the security team reviews
  cm-06.01_odp.01: 'all servers, workstations and network devices'
  cm-6.1_prm_2: configuration management tools and compliance scanning
  cm-06.02_odp.01: 'alert the security operations team, restore the approved setting and investigate the change as a potential incident'
  cm-06.02_odp.02: security-relevant settings in the baseline configuration
  cm-02_odp.01: at least annually
  cm-02_odp.02: 'a significant change to the system, a new version of the secure configuration it is based on, or a security incident'
  cm-02.02_odp: configuration management and infrastructure-as-code tools that record the approved baseline
  cm-02.03_odp: at least the two most recent
  cm-02.07_odp.01: loaner laptops and mobile devices
  cm-02.07_odp.02: 'a minimal configuration with full-disk encryption, no stored organizational data and access only through the organization''s VPN'
  cm-02.07_odp.03: 'inspecting the device, wiping and reimaging it before reuse, and resetting the user''s credentials'
  cm-07_odp.01: the capabilities documented in the system security plan
  cm-7_prm_2: 'the functions, ports, protocols, software and services listed as prohibited or restricted in the baseline configuration standard'
  cm-07.01_odp.01: at least quarterly
  cm-7.1_prm_2: 'any function, port, protocol, software or service the review finds unnecessary or nonsecure'
---

:::guidance
The configuration management policy says every component is configured to the most restrictive settings that still let the system work, using published secure configurations, and that every deviation is approved; this standard names those configurations, records the deviations and holds the evidence. Keep its values in step with the CM-2, CM-6 and CM-7 statements in the policy, since assessors compare the two. Configuration settings are among the most tested controls because scanners make them easy to measure: assessors run or ask for a compliance scan, and ask for the approval behind every failed setting. Start from a published configuration rather than writing your own. [NIST SP 800-128](https://csrc.nist.gov/pubs/sp/800/128/upd1/final) (August 2011, with updates as of October 10, 2019) section 3.2.1 names the National Checklist Program, DISA Security Technical Implementation Guides (STIGs) and CIS Benchmarks as sources of common secure configurations, and product vendors as another. [NIST SP 800-70 Rev. 5](https://csrc.nist.gov/pubs/sp/800/70/r5/final), National Checklist Program for IT Products (final May 8, 2026, superseding Rev. 4), explains how to find and use checklists in the [National Checklist Program repository](https://ncp.nist.gov/repository). Both are current as of October 2026. Reference a benchmark by name and version; do not copy its text into this standard, since some benchmarks carry license terms.
:::

| Owner | Approved by | Version | Effective date |
| --- | --- | --- | --- |
| {{org:ciso}} | {{fill:name and title}} | {{fill:version}} | {{fill:date}} |

## 1. Purpose and scope

This standard sets the minimum requirements for the secure configuration of the systems of {{org:name}}: the published configurations each component type starts from, the functions the organization prohibits or restricts, how baselines are recorded and kept current, how deviations are approved, and how compliance is shown. It applies to every component in each system's [component inventory](/templates/forms/component-inventory/), including virtual machines, container images, network and security devices, databases, applications and the settings of cloud services the organization configures.

Part A applies across the organization. Each system completes Part B, which its [Configuration Management Plan](/templates/plans/configuration-management-plan/) references.

## 2. Roles

| Role | Responsibilities |
| --- | --- |
| {{org:ciso}} | Owns this standard; selects the secure configuration for each component type; provides the compliance scanning tools and content; reviews deviations that affect more than one system |
| {{org:system-owner}} | Completes Part B for the system; keeps the baseline current; approves the system's deviations; acts on scan results |
| Security representative, such as the system security officer | Reviews each deviation request before the system owner approves it; reviews scan results |
| System administrators and engineers | Build and maintain components to the baseline; test configurations; request deviations through change control |
| {{org:security-operations}} | Runs compliance scans, reports results, and responds to unauthorized changes |

## Part A. Organization-wide requirements

### 3. Secure configurations

- Each component type shall be configured using {{param:cm-06_odp.01}}, set to the most restrictive mode consistent with operational requirements. (CM-6a)
- The secure configuration for a component type shall be chosen in this order: a checklist for the product and version from the National Checklist Program repository, which includes DISA STIGs and CIS Benchmarks; failing that, the vendor's published security baseline; and only where none exists, a configuration the {{org:ciso}} approves, written from the vendor's hardening documentation. (CM-6a)
- The configuration settings shall be implemented on every component before it is connected to a production network or placed in service. (CM-6b)
- Each component type's configuration shall be tested before use, in a test environment where one exists, and conflicts resolved or recorded as deviations under section 8. (CM-6b)

| Component type | Secure configuration and version | Source | Profile or level | Scan content used to check it | Owner |
| --- | --- | --- | --- | --- | --- |
| {{fill:for example server operating system, by product and version}} | {{fill:benchmark name and version}} | {{fill:National Checklist Program, DISA, CIS, or vendor}} | {{fill:for example the level 1 or the member-server profile}} | {{fill:for example the SCAP content or scanner policy name and version}} | {{fill:role}} |

:::guidance
SP 800-128 section 3.2.2 suggests where to start when not everything can be done at once: higher-impact systems first, then the components risk assessments and vulnerability scans point to, and the product deployed most widely, since one configuration covers the most components. Benchmarks are written for a product version; when the version changes, the benchmark usually changes too, which is a trigger for the baseline review in section 6.
:::

### 4. Settings every baseline includes

Whatever its source, each baseline shall include these settings where the component supports them. (CM-6a)

- disable portable storage devices on servers, and on other components allow only the organization-issued devices the Media Protection Policy permits (MP-7);
- keep the platform's memory protections on, such as address space layout randomization and data execution prevention (SI-16);
- restrict mobile code and active content, such as office document macros, scripts and browser extensions, to what the organization allows (SC-18);
- change or disable default accounts and passwords, and remove sample content and unused default services (CM-6, IA-5);
- enable the audit events the Audit and Accountability Policy requires (AU-2, AU-12);
- turn on host firewalls, allowing only the ports and protocols in Part B (CM-7, SC-7);
- set session lock and time limits (AC-11, AC-12);
- install updates automatically or through the patch management tools (SI-2).

### 5. Prohibited and restricted functions, ports, protocols, software and services

- Each system shall be configured to provide only {{param:cm-07_odp.01}}. (CM-7a)
- The use of {{param:cm-7_prm_2}} shall be prohibited or restricted: the table below lists those that apply to all systems, and each system adds its own in Part B. (CM-7b)

| Item | Prohibited or restricted | Condition for restricted use |
| --- | --- | --- |
| {{fill:for example unencrypted remote administration protocols, such as Telnet}} | {{fill:prohibited}} | |
| {{fill:for example file sharing protocols on internet-facing components}} | {{fill:restricted}} | {{fill:for example only on internal file servers}} |
| {{fill:for example peer-to-peer file sharing software}} | {{fill:prohibited}} | |
| {{fill:for example remote access tools other than the managed remote access service}} | {{fill:prohibited}} | |

### 6. Baseline configuration

- Each system shall develop, document and maintain under configuration control a current baseline configuration, recorded in Part B and in the locations its Configuration Management Plan names. (CM-2a)
- The baseline shall record, for each configuration item, the secure configuration and version it follows, its approved deviations, its software and firmware versions, and its place in the system architecture. (CM-2a)
- The baseline shall be reviewed and updated {{param:cm-02_odp.01}}, when required by {{param:cm-02_odp.02}}, and when components are installed or upgraded. (CM-2b)
- Changes to the baseline shall be made only through the change request process, and each new baseline version shall name the change requests it includes. (CM-2a, CM-3)
- {{param:cm-02.03_odp}} previous versions of each baseline shall be retained, protected to the same level as the system, to support rollback. (CM-2(3))
- Baselines shall be kept current, complete, accurate and available using {{param:cm-02.02_odp}}. (CM-2(2))
- Individuals traveling to locations the organization deems to be of significant risk shall be issued {{param:cm-02.07_odp.01}} with {{param:cm-02.07_odp.02}}, and on their return {{param:cm-02.07_odp.03}} shall be applied. (CM-2(7))

### 7. Implementing and enforcing settings

- Settings shall be applied centrally, through group policy, configuration management tools or infrastructure as code, rather than by hand, wherever the component supports it. (CM-6b)
- Images and templates shall be built from the current baseline and rebuilt when it changes, so new components start compliant. (CM-2, CM-6b)
- Changes to configuration settings shall be monitored and controlled through the change request process. (CM-6d)

This paragraph applies to High systems.

- Configuration settings for {{param:cm-06.01_odp.01}} shall be managed, applied and verified using {{param:cm-6.1_prm_2}}. (CM-6(1))
- In response to an unauthorized change to {{param:cm-06.02_odp.02}}, the {{org:system-owner}} shall {{param:cm-06.02_odp.01}}. (CM-6(2))

### 8. Deviations

- Any deviation from the established settings for {{param:cm-06_odp.02}} shall be identified, documented and approved, based on {{param:cm-06_odp.03}}. (CM-6c)
- A deviation shall be requested through a change request, with the operational need, the risk and any compensating measures, reviewed by the security representative, and approved by the {{org:system-owner}} before the setting is changed. (CM-6c)
- A deviation that leaves a high-risk setting unmet, such as one the benchmark marks as most severe, shall also be accepted by an official the risk management strategy authorizes to accept risk at that level. (CM-6c, RA-7)
- Each approved deviation shall be entered in the system's deviation register in Part B and configured as an exception in the scanner, so compliance reports show it as approved rather than as a failure. (CM-6c)
- Each deviation shall have an expiry or review date, and shall be reviewed at each baseline review, when the benchmark version changes, and when the component is upgraded. (CM-6c)

### 9. Compliance scanning and evidence

- Every component in the component inventory shall be scanned against its secure configuration {{fill:frequency, for example at least monthly, matching the frequency the Continuous Monitoring Strategy sets for configuration data}}, using authenticated scans with SCAP-validated tools and SCAP content where available. (CM-6d)
- Each scan cycle shall report the components the scan did not reach, and those components shall be checked by another means and recorded. (CM-6d)
- Components the tools cannot check, such as some appliances, shall be checked manually against their configuration on the same cycle, with the check recorded. (CM-6d)
- A failed setting with no approved deviation shall be corrected, or entered in the system's plan of action and milestones, within {{fill:time, for example 30 days}}. (CM-6b, CA-5)
- Scan results shall be kept as evidence for at least {{fill:retention, for example three years, or the authorization period}}. (CM-6)

### 10. Unauthorized changes

- Differences between a component's settings and its baseline that match no approved change request or deviation shall be treated as unauthorized changes: reported to the {{org:system-owner}}, reversed or approved after the fact through change control, and investigated as a potential incident where the cause is unknown. (CM-3, CM-6d)

### 11. Least functionality review

- Each system shall be reviewed {{param:cm-07.01_odp.01}}, using port, service and software scans compared with Part B, to identify unnecessary or nonsecure functions, ports, protocols, software and services. (CM-7(1)(a))
- The {{org:system-owner}} shall disable or remove {{param:cm-7.1_prm_2}}, through a change request. (CM-7(1)(b))

## Part B. System baseline

Complete one Part B for each system.

| System | System owner | Configuration Management Plan | Baseline version | Last reviewed |
| --- | --- | --- | --- | --- |
| {{fill:system name and identifier}} | {{fill:name and title}} | {{fill:location}} | {{fill:version}} | {{fill:date}} |

### 12. Configuration items and their secure configurations

| Configuration item | Component type | Secure configuration and version | Image, template or code that applies it | Components covered | Last scan and result |
| --- | --- | --- | --- | --- | --- |
| {{fill:CI ID and name from the Configuration Management Plan}} | {{fill:type}} | {{fill:benchmark and version}} | {{fill:image or repository path and version}} | {{fill:count or component IDs}} | {{fill:date and percentage compliant}} |

### 13. Approved ports, protocols and services

| Port and protocol | Service | Components | Direction | Purpose | Approved by and change request ID |
| --- | --- | --- | --- | --- | --- |
| {{fill:for example 443/TCP}} | {{fill:service}} | {{fill:components}} | {{fill:inbound or outbound}} | {{fill:purpose}} | {{fill:name and ID}} |

### 14. Deviation register

| Deviation ID | Configuration item and components | Benchmark rule ID and title | Required setting | Actual setting | Operational need | Compensating measures | Security review by and date | Approved by and date | Change request ID | Review or expiry date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:ID}} | {{fill:CI and components}} | {{fill:rule ID and title}} | {{fill:setting}} | {{fill:setting}} | {{fill:the documented operational need}} | {{fill:measures, or none}} | {{fill:name and date}} | {{fill:system owner and date}} | {{fill:ID}} | {{fill:date}} |

### 15. Scan evidence

| Scan date | Scope | Tool and content version | Components scanned of components in the inventory | Compliance rate | Failures not covered by a deviation | Action taken | Reviewed by |
| --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:date}} | {{fill:CIs or environment}} | {{fill:tool, content and version}} | {{fill:for example 118 of 120, with the two explained}} | {{fill:percentage}} | {{fill:number, with rule IDs}} | {{fill:corrected, change request, or plan of action and milestones ID}} | {{fill:name and date}} |

### 16. Least functionality reviews

| Review date | Method | Findings | Items disabled or removed, with change request IDs | Reviewed by |
| --- | --- | --- | --- | --- |
| {{fill:date}} | {{fill:for example port and service scan compared with section 13}} | {{fill:findings, or none}} | {{fill:items and IDs}} | {{fill:name}} |

:::federal
[NIST SP 800-128](https://csrc.nist.gov/pubs/sp/800/128/upd1/final), section 3.5, says federal agencies use SCAP-enabled tools with SCAP-expressed checklists to automate configuration management and produce assessment evidence for SP 800-53 controls. [SP 800-70 Rev. 5](https://csrc.nist.gov/pubs/sp/800/70/r5/final) refers to FAR 39.101(c) on its pages 4 and 9; NIST's planning note on the publication page (June 8, 2026) says "the current RFO deviation specifically excludes FAR 39.101(c)" and that NIST will update the publication once the FAR RFO final rule is finalized. Check the FAR text your agency follows before relying on it. As of October 2026.

- Compliance scans shall use SCAP-validated tools and SCAP-expressed checklists from the National Checklist Program where one exists for the product, as SP 800-128 section 3.5 describes. (CM-6)

:::

## 17. Review

The {{org:ciso}} reviews Part A {{fill:for example annually}}, and whenever a benchmark the standard names is replaced or the configuration management policy changes. Each system owner reviews Part B with the baseline, {{param:cm-02_odp.01}}.

| Version | Date | Change | Approved by |
| --- | --- | --- | --- |
| {{fill:version}} | {{fill:date}} | {{fill:summary of change}} | {{fill:name and title}} |
