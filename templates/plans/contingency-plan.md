---
title: Information System Contingency Plan
type: plan
description: The plan for recovering one system after a disruption, compromise or failure, following the NIST SP 800-34 Rev. 1 template and covering every element SP 800-53 CP-2 requires.
controls: [cp-2, cp-2.1, cp-2.3, cp-2.8, cp-6, cp-7, cp-8, cp-9, cp-10]
status: draft
stage: core
typical:
  cp-02_odp.01: the system owner and the system security officer
  cp-02_odp.02: the authorizing official, or the business owner the authorizing official names
  cp-02_odp.03: the contingency team members, by role
  cp-02_odp.04: the operations, facilities and communications functions
  cp-02_odp.05: annually
  cp-02_odp.06: the contingency team members, by role
  cp-02_odp.07: the operations, facilities and communications functions
---

:::guidance
This outline follows the Moderate sample plan in Appendix A of [NIST SP 800-34 Rev. 1](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final), Contingency Planning Guide for Federal Information Systems (May 2010, updated November 2010; current as of September 2026): an introduction, a concept of operations, and three phases, activation and notification, recovery, and reconstitution, followed by appendices. Complete the [business impact analysis](/templates/reports/business-impact-analysis/) first; its recovery objectives drive this plan. Low systems can shorten sections 4 and 5; High systems add detail for the alternate processing site and for continuing essential functions (CP-2(5)). The plan describes how to restore the system, so protect it like the system itself (CP-2h).
:::

| System name | System identifier | Plan version | Approved by | Approval date |
| --- | --- | --- | --- | --- |
| {{fill:system name}} | {{fill:unique system identifier}} | {{fill:version}} | {{fill:name and title}} | {{fill:date}} |

## Plan approval

This plan was reviewed by {{param:cp-02_odp.01}} and is approved by {{param:cp-02_odp.02}} (CP-2a.7).

| Name | Title | Signature | Date |
| --- | --- | --- | --- |
| {{fill:name}} | {{fill:title}} | | {{fill:date}} |

## 1. Introduction

### 1.1 Background

This plan sets out how {{fill:system name}} is recovered after a disruption, compromise or failure. The system supports these mission and business functions: {{fill:the functions, from the business impact analysis}}. Of these, the essential functions are {{fill:the essential functions}} (CP-2a.1).

### 1.2 Scope

This plan covers {{fill:the system boundary, locations and components}}. It does not cover {{fill:what is out of scope, for example the facility, covered by the building's emergency plan}}.

### 1.3 Assumptions

- {{fill:for example the alternate processing site is available and unaffected}}
- {{fill:for example key personnel or their backups are available}}
- {{fill:for example current backups exist at the alternate storage site}}

## 2. Concept of operations

### 2.1 System description

{{fill:a short description of the system, its architecture, where it runs, its main components and its connections, or a reference to the system security plan}}

### 2.2 Recovery objectives and phases

The business impact analysis sets these objectives (CP-2a.2):

| Objective | Value |
| --- | --- |
| Maximum tolerable downtime | {{fill:time}} |
| Recovery time objective | {{fill:time}} |
| Recovery point objective | {{fill:time}} |

Essential functions are resumed within {{fill:the recovery time objective}} of plan activation (CP-2(3)). The critical system assets that support them are listed in Appendix H (CP-2(8)).

Recovery runs in three phases:

1. **Activation and notification:** the disruption is assessed, the plan is activated and the contingency team is notified (section 3).
2. **Recovery:** the system's capabilities are restored, at the primary site or at the alternate site (section 4).
3. **Reconstitution:** the system is tested and returned to normal operation, with its controls working as originally planned (section 5; CP-2a.5, CP-10).

### 2.3 Roles and responsibilities

| Role | Responsibilities | Primary | Alternate |
| --- | --- | --- | --- |
| Contingency plan coordinator | Activates the plan, leads recovery, reports status | {{fill:name}} | {{fill:name}} |
| {{org:system-owner}} | Approves activation; accepts the recovered system | {{fill:name}} | {{fill:name}} |
| Recovery team | Restores components and data | {{fill:names}} | {{fill:names}} |
| {{fill:other role, for example the network team or the cloud service provider}} | {{fill:responsibilities}} | {{fill:name}} | {{fill:name}} |

Contact details are in Appendix A (CP-2a.3).

## 3. Activation and notification

### 3.1 Activation criteria and procedure

The plan is activated when {{fill:for example the system is, or is expected to be, unavailable for longer than a set time, or a compromise requires rebuilding it}}. The {{fill:role}} decides whether to activate it. When a disruption is caused by an incident, the contingency plan coordinator works with the incident response team under the incident response plan (CP-2c).

### 3.2 Notification

On activation, the contingency plan coordinator notifies {{fill:who, and how, for example by the notification tool and by phone}}, using Appendix A. Status is shared with {{fill:who receives updates, for example users, the business owner and leadership}} {{fill:how often}} (CP-2a.6).

### 3.3 Outage assessment

The recovery team assesses the cause, the extent of damage and the expected outage time, and reports to the coordinator, who decides whether to recover at the primary site or at the alternate site.

## 4. Recovery

### 4.1 Sequence of recovery activities

Components are recovered in the priority order from the business impact analysis (CP-2a.2):

| Order | Component or service | Recovery time objective | Depends on |
| --- | --- | --- | --- |
| 1 | {{fill:component}} | {{fill:time}} | {{fill:dependencies}} |
| 2 | {{fill:component}} | {{fill:time}} | {{fill:dependencies}} |

### 4.2 Recovery procedures

Step-by-step procedures for each component are in Appendix C, and for moving operations to the alternate processing site in Appendix D. Backups are restored from {{fill:where, for example the backup service in the second region}} (CP-9, CP-10).

### 4.3 Recovery escalation and notices

The coordinator reports progress to {{fill:who}} {{fill:how often}}, and escalates to {{fill:who}} when a recovery step fails or the recovery time objective is at risk.

## 5. Reconstitution

### 5.1 Validation data testing

The recovery team confirms that data is complete and current to the recovery point objective, using {{fill:how, for example record counts and checks against the last transactions}}.

### 5.2 Validation functionality testing

The recovery team tests that the system works as expected and that its security controls operate as originally planned, using the system validation test plan in Appendix E (CP-2a.5).

### 5.3 Recovery declaration

The {{org:system-owner}} declares recovery complete when validation passes.

### 5.4 Notification

The coordinator tells users and stakeholders that the system is available again.

### 5.5 Cleanup

Temporary configurations, accounts and workarounds used during recovery are removed or brought under normal change control.

### 5.6 Offsite data storage

Media and copies used during recovery are returned to the alternate storage site, or replaced there (CP-6).

### 5.7 Data backup

A full backup of the recovered system is made as soon as it is back in operation (CP-9).

### 5.8 Event documentation

The coordinator records what happened, the timeline, the actions taken, the problems found and the lessons learned. The plan is updated where the event showed a gap (CP-2e, CP-2g).

### 5.9 Deactivation

The coordinator formally deactivates the plan and tells the contingency team.

## 6. Plan maintenance and distribution

- The {{org:system-owner}} shall distribute copies of this plan to {{param:cp-02_odp.03}} and to {{param:cp-02_odp.04}}. (CP-2b)
- The {{org:system-owner}} shall review this plan {{param:cp-02_odp.05}}. (CP-2d)
- The {{org:system-owner}} shall update this plan to address changes to the organization, the system or its environment of operation, and problems found when the plan is carried out or tested. (CP-2e)
- The {{org:system-owner}} shall communicate plan changes to {{param:cp-02_odp.06}} and to {{param:cp-02_odp.07}}. (CP-2f)
- This plan is coordinated with the related plans listed in Appendix K (CP-2(1)).

:::federal
Agency continuity programs follow FEMA's [Federal Continuity Directive: Federal Executive Branch Continuity Program Management Requirements](https://www.fema.gov/sites/default/files/documents/fema_oncp_fcd-federal-executive-branch-continuity-program-management-requirements.pdf) (August 2024), which rescinded and superseded FCD-1 (January 2017). Essential functions are identified under the [Federal Continuity Directive: Federal Executive Branch Essential Functions Risk Identification and Management](https://www.fema.gov/sites/default/files/documents/fema_oncp-fcd-federal-executive-branch-essential-functions-risk-identification-management.pdf) (August 2024), which rescinded and superseded FCD-2 (June 2017). Checked September 2026.

- The {{org:system-owner}} shall align the essential functions and recovery priorities in this plan with the agency's continuity plan and its identified essential functions. (CP-2(1))

:::

## Appendix A. Personnel contact list

| Role | Name | Phone | Alternate phone | Email |
| --- | --- | --- | --- | --- |
| {{fill:role}} | {{fill:name}} | {{fill:phone}} | {{fill:phone}} | {{fill:email}} |

## Appendix B. Vendor contact list

| Vendor | Product or service | Contract or support number | Contact | Phone and email |
| --- | --- | --- | --- | --- |
| {{fill:vendor}} | {{fill:product or service}} | {{fill:reference}} | {{fill:name}} | {{fill:phone and email}} |

## Appendix C. Detailed recovery procedures

{{fill:step-by-step procedures for recovering each component, or references to the runbooks that hold them}}

## Appendix D. Alternate processing procedures

{{fill:how operations move to the alternate processing site and back}}

## Appendix E. System validation test plan

{{fill:the tests that confirm the recovered system and its data are complete and working, and who signs them off}}

## Appendix F. Alternate storage, processing site and telecommunications

| Item | Details |
| --- | --- |
| Alternate storage site (CP-6) | {{fill:location or service, and the agreement}} |
| Alternate processing site (CP-7) | {{fill:location or service, and the agreement}} |
| Alternate telecommunications (CP-8) | {{fill:provider and service}} |

## Appendix G. Diagrams

{{fill:system and data flow diagrams, or a reference to the system security plan}}

## Appendix H. Hardware and software inventory

{{fill:the components needed to recover the system, marking the critical assets, or a reference to the component inventory}}

## Appendix I. Interconnections

| Connected system | Organization | Type of connection | Contact |
| --- | --- | --- | --- |
| {{fill:system}} | {{fill:organization}} | {{fill:type}} | {{fill:contact}} |

## Appendix J. Test and maintenance schedule

| Activity | Frequency | Last done | Next due |
| --- | --- | --- | --- |
| Plan review | {{param:cp-02_odp.05}} | {{fill:date}} | {{fill:date}} |
| Plan test (CP-4) | {{fill:frequency}} | {{fill:date}} | {{fill:date}} |
| Contingency training (CP-3) | {{fill:frequency}} | {{fill:date}} | {{fill:date}} |

## Appendix K. Associated plans and procedures

| Plan | Owner | Location |
| --- | --- | --- |
| {{fill:for example incident response plan, business continuity plan, disaster recovery plan}} | {{fill:owner}} | {{fill:location}} |

## Appendix L. Business impact analysis

{{fill:the business impact analysis, or a reference to it}}

## Appendix M. Document change page

| Version | Date | Change | Approved by |
| --- | --- | --- | --- |
| {{fill:version}} | {{fill:date}} | {{fill:summary of change}} | {{fill:name and title}} |
