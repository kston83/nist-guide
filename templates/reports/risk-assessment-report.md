---
title: Risk Assessment Report
type: report
description: The report of a system risk assessment, following the three-part outline in NIST SP 800-30 Rev. 1 Appendix K, with the documentation, review and distribution SP 800-53 RA-3 requires.
controls: [ra-3, ra-3.1]
status: draft
stage: foundation
role: system-owner
typical:
  ra-03_odp.03: annually
  ra-03_odp.04: 'the authorizing official, the system owner and the Chief Information Security Officer'
  ra-03_odp.05: at least every three years
  ra-03.01_odp.01: 'each system, the components and services the criticality analysis (RA-9) identifies as critical, and the external services the system depends on'
---

:::guidance
This outline follows Appendix K, Risk Assessment Reports, of [NIST SP 800-30 Rev. 1](https://csrc.nist.gov/pubs/sp/800/30/r1/final) (September 2012, current as of September 2026): an executive summary, a main body with the detailed results, and supporting appendices. Use the methodology and scales in the organization's risk management strategy, so this system's risks can be compared with others. Each risk found here goes into the [risk register](/templates/forms/risk-register/), and each one that needs action goes into the plan of action and milestones. The report describes the system's weaknesses, so restrict access to it.
:::

| System name | System identifier | Report version | Assessment date | Prepared by |
| --- | --- | --- | --- | --- |
| {{fill:system name}} | {{fill:unique system identifier}} | {{fill:version}} | {{fill:date}} | {{fill:names and titles of the assessment team}} |

## 1. Executive summary

- **System and purpose of the assessment:** {{fill:the system, its security categorization, and why this assessment was done, for example initial authorization, a significant change or the scheduled update}}
- **Overall result:** {{fill:the number of risks at each level, and the most significant risks in one or two sentences each}}
- **Recommended actions:** {{fill:the main risk responses recommended, and any risk above the organization's tolerance}}

## 2. Purpose and scope

| Item | Description |
| --- | --- |
| Purpose | {{fill:the decision this assessment supports}} |
| Scope | {{fill:the system boundary, components, locations and external services covered, and anything excluded}} |
| Time frame | {{fill:the period for which the results are expected to be valid}} |
| Security categorization | {{fill:low, moderate or high, from the security categorization worksheet}} |
| Privacy | {{fill:whether the system processes personally identifiable information; if so, the privacy impact assessment it draws on}} |

## 3. Assumptions, constraints and risk tolerance

- **Assumptions:** {{fill:for example that inherited common controls operate as their providers describe}}
- **Constraints:** {{fill:for example time, access or information not available to the assessors}}
- **Risk tolerance:** the tolerance and approval levels in section 3.3 of the organization's risk management strategy apply, together with {{fill:any system-specific tolerance statements, or "none"}}.
- **Organization and mission inputs:** {{fill:the organization-level and mission or business process risk decisions this assessment builds on (RA-3b), for example the risk framing and the organization's threat information}}.

## 4. Risk model and approach

| Item | Approach |
| --- | --- |
| Risk model | {{fill:for example SP 800-30 Rev. 1: threat sources, threat events, vulnerabilities and predisposing conditions, likelihood and impact}} |
| Assessment approach | {{fill:qualitative, semi-quantitative or quantitative}} |
| Analysis approach | {{fill:threat-oriented, asset or impact-oriented, or vulnerability-oriented}} |
| Scales | {{fill:the likelihood, impact and risk scales from the risk management strategy}} |
| Information sources | {{fill:for example control assessment results, vulnerability scans, penetration tests, threat intelligence, incident history, interviews}} |

:::guidance
If the organization has not yet set its own scale, SP 800-30 Rev. 1 Appendix I, Table I-2, "Assessment Scale – Level of Risk (Combination of Likelihood and Impact)", combines five levels of likelihood and impact as shown below.

| Likelihood | Very low impact | Low impact | Moderate impact | High impact | Very high impact |
| --- | --- | --- | --- | --- | --- |
| Very high | Very low | Low | Moderate | High | Very high |
| High | Very low | Low | Moderate | High | Very high |
| Moderate | Very low | Low | Moderate | Moderate | High |
| Low | Very low | Low | Low | Low | Moderate |
| Very low | Very low | Very low | Very low | Low | Low |

:::

## 5. Results

The assessment identified threats to and vulnerabilities in the system (RA-3a.1), and determined the likelihood and magnitude of harm to the organization, its information and related information (RA-3a.2) and, where the system processes personally identifiable information, the likelihood and impact of adverse effects on individuals (RA-3a.3).

| ID | Threat source and event | Vulnerability or predisposing condition | Likelihood | Impact | Risk level | Recommended response |
| --- | --- | --- | --- | --- | --- | --- |
| {{fill:ID from the risk register}} | {{fill:threat source and event}} | {{fill:vulnerability or condition}} | {{fill:level}} | {{fill:level}} | {{fill:level}} | {{fill:accept, avoid, mitigate, share or transfer, with the action}} |
| {{fill:ID}} | {{fill:threat source and event}} | {{fill:vulnerability or condition}} | {{fill:level}} | {{fill:level}} | {{fill:level}} | {{fill:response}} |

### 5.1 Risks to individuals

{{fill:the privacy risks found, with likelihood, impact and recommended response, or "the system does not process personally identifiable information"}} (RA-3a.3)

### 5.2 Supply chain risks

Supply chain risks were assessed for {{param:ra-03.01_odp.01}} (RA-3(1)(a)). {{fill:the suppliers, products and services considered, the risks found and the recommended responses}}

## 6. Documentation, review and distribution

- The {{org:system-owner}} shall keep this report as the record of the risk assessment results. (RA-3c)
- The {{org:system-owner}} shall review the results {{param:ra-03_odp.03}}. (RA-3d)
- The {{org:system-owner}} shall share the results with {{param:ra-03_odp.04}}. (RA-3e)
- The {{org:system-owner}} shall update the assessment {{param:ra-03_odp.05}}, and whenever there are significant changes to the system, its environment of operation, or other conditions that may affect its security or privacy state. (RA-3f)
- The {{org:system-owner}} shall record each review, update and distribution of the results, with the recipients, in the version history at the end of this report. (RA-3d, RA-3e, RA-3f)

## Appendix A. Assessment team and sources

{{fill:the assessment team members and their roles, and the documents, tools and people consulted}}

## Appendix B. Supporting data

{{fill:the detailed threat, vulnerability, likelihood and impact analysis behind section 5, or a reference to where it is kept}}

## Approval and version history

{{org:name}} records here the approval of each version of this document and each review of it, including a review that changes nothing. This is the record of the approval, review and update that SP 800-53 Rev. 5 asks for: item c of each family's -1 control for policies and procedures (for example AC-1c), PM-1a.4 and PM-1b for the information security program plan, and PL-2a.15, PL-2c and PL-2d for system plans.

:::guidance
Assessors ask for evidence that a document was approved, and that it was reviewed and updated on its cycle and after the events its review section names. This section is that evidence. It is the same in every template in the kit, so the records read alike across the program. Between them, the two tables hold what [NIST SP 800-18 Rev. 2](https://csrc.nist.gov/pubs/sp/800/18/r2/final) (June 2026, section 3.2) says system plan approval, review records and change records include: the approvers' full names, roles, organizational titles, signatures and signature dates; who reviewed the plan, when, and the outcome; and for each change, its date, revision, who made it, the sections affected and what changed. Add a version history row for every review, including one that changes nothing: keep the version number, write "Reviewed, no change", and say what prompted the review, the scheduled cycle or an event. SP 800-18 Rev. 2 notes that document management systems can capture the signatures electronically; an approval recorded that way can stand in for the Signature column.
:::

### Approval

| Version | Name, role and title | Signature | Date |
| --- | --- | --- | --- |
|  |  |  |  |

### Version history

| Version and date | Review or change (what, where and why) | By (name and role) | Approved by |
| --- | --- | --- | --- |
|  |  |  |  |
