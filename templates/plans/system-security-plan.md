---
title: System Security Plan
type: plan
description: The security plan for one system, following the NIST SP 800-18 Rev. 2 outline and covering every element SP 800-53 PL-2 requires.
controls: [pl-2, ra-2, cm-8, ca-3, ca-5]
status: draft
stage: foundation
typical:
  pl-02_odp.01: the system's stakeholders named in section 5, the common control providers, and the security and privacy teams
  pl-02_odp.02: the authorizing official, the system owner, the system security officer and the assessor
  pl-02_odp.03: annually
---

:::guidance
This outline follows the System Security Plan Outline Example that NIST publishes with [SP 800-18 Rev. 2](https://csrc.nist.gov/pubs/sp/800/18/r2/final) (June 2026), which replaced Rev. 1. Each section names the PL-2a item it meets, so an assessor can trace every requirement. Many organizations keep the control details (section 10) in a GRC tool and attach an export; keep the rest here. Security plans describe the system's risk posture, so restrict access to them and redact before sharing.
:::

| System name | System identifier | Plan version | Approved by | Approval date |
| --- | --- | --- | --- | --- |
| {{fill:system name}} | {{fill:unique system identifier}} | {{fill:version}} | {{fill:authorizing official or designated representative}} | {{fill:date}} |

## 1. System name and identifier

{{fill:unique system name and identifier, and any previous names}}

## 2. System overview

{{fill:a short summary of what the system does and how it supports the mission}} (PL-2a.3)

| Characteristic | This system |
| --- | --- |
| Common control providers it relies on | {{fill:for example the data center, the identity provider, the security operations team}} |
| Technology | {{fill:for example cloud-based application, operational technology, AI system}} |
| Environment type | {{fill:development, test, training or production}} |
| Exposure | {{fill:for example public-facing, internal only, isolated}} |
| Criticality | {{fill:for example mission-critical or low priority}} |
| Ownership | {{fill:for example organization-owned, contractor-operated}} |
| Function | {{fill:for example transaction processing, decision support}} |

Technologies or factors that add security risk: {{fill:description}}.

The system is consistent with {{org:name}}'s enterprise architecture as follows: {{fill:how the system fits the enterprise architecture}} (PL-2a.1).

## 3. Laws, regulations and policies

The requirements that apply to this system come from {{fill:laws, regulations, contracts and organizational policies that apply}}. The security requirements they create are summarized in section 10 (PL-2a.10).

## 4. System status

| Item | Status |
| --- | --- |
| Plan approval | Approved by {{fill:authorizing official or designated representative}} on {{fill:date}} (PL-2a.15) |
| Authorization decision | {{fill:decision, issue date, effective date and termination date}} |
| Operational status | {{fill:under development, operational, undergoing a significant modification, or disposal}} |

## 5. Roles and responsible personnel

Use business contact details only (PL-2a.4).

| Role | Name and title | Organizational unit | Phone | Email |
| --- | --- | --- | --- | --- |
| Authorizing official | {{fill:name and title}} | {{fill:unit}} | {{fill:phone}} | {{fill:email}} |
| {{org:system-owner}} | {{fill:name and title}} | {{fill:unit}} | {{fill:phone}} | {{fill:email}} |
| Information owner | {{fill:name and title}} | {{fill:unit}} | {{fill:phone}} | {{fill:email}} |
| {{org:ciso}} | {{fill:name and title}} | {{fill:unit}} | {{fill:phone}} | {{fill:email}} |
| System security officer | {{fill:name and title}} | {{fill:unit}} | {{fill:phone}} | {{fill:email}} |
| Other contacts, such as vendors and facility staff | {{fill:names and titles}} | {{fill:unit}} | {{fill:phone}} | {{fill:email}} |

## 6. Information types and security categorization

The system processes, stores and transmits these information types (PL-2a.5). Rate the impact of a loss of confidentiality, integrity and availability for each as low, moderate or high.

| Information type | Confidentiality | Integrity | Availability |
| --- | --- | --- | --- |
| {{fill:information type}} | {{fill:impact}} | {{fill:impact}} | {{fill:impact}} |
| {{fill:information type}} | {{fill:impact}} | {{fill:impact}} | {{fill:impact}} |

The overall security categorization is {{fill:low, moderate or high}}, because {{fill:rationale, including any adjustments to the provisional impact levels}} (PL-2a.6, RA-2).

:::federal
Federal systems identify information types from [NIST SP 800-60 Rev. 1](https://csrc.nist.gov/pubs/sp/800/60/v1/r1/final) (Volume 2 lists the types) and categorize them with [FIPS 199](https://csrc.nist.gov/pubs/fips/199/final), Standards for Security Categorization of Federal Information and Information Systems, using the highest impact level for each security objective.
:::

## 7. Authorization boundary

The authorization boundary includes {{fill:the components, networks and services the authorizing official authorizes}} (PL-2a.2). The operational environment, and the system's dependencies on and connections to other systems, are {{fill:description}} (PL-2a.9).

Diagrams: {{fill:references to the current system, network architecture and data flow diagrams}}.

## 8. Information exchanges

For each exchange with another system (CA-3):

| Other system and owner | Agreement type and dates | Categorization of the other system and of the data | Purpose and data exchanged | Method | Security considerations |
| --- | --- | --- | --- | --- | --- |
| {{fill:system, owner and authorizing official}} | {{fill:for example interconnection security agreement, start and end dates}} | {{fill:categorizations}} | {{fill:description}} | {{fill:for example VPN or dedicated transfer application}} | {{fill:findings and mitigations that affect the exchange}} |

## 9. System component inventory

The authoritative component inventory is {{fill:location of the inventory, or the tool that holds it}} (CM-8, PL-2a.2). It records, for hardware, each component's function, identifiers, manufacturer and model, firmware and operating system versions, support status and location; and for software, each product's version, source, license and support status, with a software bill of materials where available.

Summary: {{fill:types and counts of components in the boundary}}.

## 10. Security requirements and control implementation

The system uses the {{fill:Low, Moderate or High}} control baseline with {{fill:overlays, if any}} (PL-2a.11). Its security requirements are {{fill:overview of the requirements}} (PL-2a.10).

Tailoring decisions and their rationale: {{fill:controls added, removed or changed, and why}} (PL-2a.12).

For each control, the implementation detail records:

| Field | Content |
| --- | --- |
| Implementation | How the control is or will be met, referencing policies, procedures and configurations (PL-2a.12) |
| Responsibility | System-specific, common (inherited from a named provider) or hybrid |
| Implementation status | Planned, partially implemented or fully implemented |
| Assessment status | Satisfied or other than satisfied, with the assessment date and report, and the POA&M item for anything other than satisfied (CA-5) |

Control details: {{fill:the control-by-control implementation, here or as an attached export}}.

Specific threats of concern to this system: {{fill:threats}} (PL-2a.7). Risk determinations for security and privacy architecture and design decisions: {{fill:decisions and the risk accepted}} (PL-2a.13).

## 11. Privacy

For systems that process personally identifiable information, the results of the privacy risk assessment are {{fill:summary of results, or a reference to the privacy impact assessment}} (PL-2a.8).

## 12. Digital identity acceptance statement

{{fill:assessed and implemented assurance levels, and the rationale for any difference, or "not applicable"}}.

:::federal
Federal systems include the Digital Identity Acceptance Statement that [NIST SP 800-63-4](https://pages.nist.gov/800-63-4/) describes: the assessed and implemented assurance levels, the rationale for any difference, how compensating controls are comparable, and the rationale if federated identities are not accepted.
:::

## 13. Planning and coordination

Security- and privacy-related activities affecting the system are planned and coordinated with {{param:pl-02_odp.01}} (PL-2a.14).

## 14. Referenced artifacts

| Artifact | Location |
| --- | --- |
| Authorization decision | {{fill:location}} |
| Contingency plan, with test and training records | {{fill:location}} |
| Configuration management plan and change records | {{fill:location}} |
| Incident response plan, with test and training records | {{fill:location}} |
| Information exchange agreements | {{fill:location}} |
| Continuous monitoring plan and results | {{fill:location}} |
| Plan of action and milestones | {{fill:location}} |
| Risk assessment reports | {{fill:location}} |

## 15. Plan distribution, review and change records

Copies of this plan, and changes to it, go to {{param:pl-02_odp.02}} (PL-2b). The plan is reviewed {{param:pl-02_odp.03}} (PL-2c), updated for changes to the system or its environment and for problems found during implementation or assessment (PL-2d), and stored in {{fill:location with restricted access}} (PL-2e).

| Date | Version | Change or review | Sections affected | By |
| --- | --- | --- | --- | --- |
| {{fill:date}} | {{fill:version}} | {{fill:description}} | {{fill:sections}} | {{fill:name and title}} |
