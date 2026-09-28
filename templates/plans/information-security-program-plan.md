---
title: Information Security Program Plan
type: plan
description: The organization-wide plan for the information security program, covering every element SP 800-53 PM-1 requires, with the program management and common controls the organization provides.
controls: [pm-1, pm-2, pm-3, pm-6, pm-10, pm-29]
status: draft
stage: foundation
typical:
  pm-01_odp.01: annually
  pm-01_odp.02: a significant change to the organization's mission, structure, risk tolerance or systems, a major incident, or a finding from an assessment or audit of the program
---

:::guidance
PM-1 requires an organization-wide information security program plan that gives an overview of the program's requirements, describes the program management and common controls that meet them, assigns roles, and is approved by a senior official. NIST publishes no outline for this plan, so the sections below follow the elements of PM-1a in order, and each cites the item it meets. The plan can be one document or a set of documents, as long as this plan names the set. It describes how the organization defends itself, so restrict access to it (PM-1c).
:::

| Organization | Plan version | Approved by | Approval date | Next review |
| --- | --- | --- | --- | --- |
| {{org:name}} | {{fill:version}} | {{org:senior-leader}} | {{fill:date}} | {{fill:date}} |

## 1. Purpose and scope

This plan describes {{org:name}}'s information security program: the requirements it meets, the program management and common controls that meet them, and who is responsible for each (PM-1a.1).

It applies to all of {{org:name}}: {{fill:the organizational units, locations and mission and business functions the program covers}}. The systems in scope are listed in the system inventory (PM-5).

## 2. Program requirements

:::guidance
List the sources of requirements, not the requirements themselves. The policies and the system security plans carry the detail. Name the SP 800-53 baselines your systems use, so readers know which controls the common controls must support.
:::

| Source | What it requires of the program | Owner |
| --- | --- | --- |
| {{fill:law, regulation, contract or standard}} | {{fill:summary}} | {{fill:role}} |
| NIST SP 800-53 Rev. 5 and SP 800-53B | Controls for each system at its baseline: {{fill:baselines in use, for example Low and Moderate}} | {{org:ciso}} |
| {{org:name}} security policies | The family policies adopted by the organization, listed in section 8 | {{org:ciso}} |

## 3. Roles and responsibilities

:::guidance
Name roles, not people, in the plan, and keep the names of the people currently in each role in an appendix or a separate roster. Assessors check that each role in PM-2, PM-10, PM-19 and PM-29 is filled and that its appointment is recorded in writing.
:::

| Role | Responsibilities | Appointed by | Held by |
| --- | --- | --- | --- |
| {{org:senior-leader}} | Approves this plan and the risk management strategy; sets risk tolerance; provides resources (PM-1a.4, PM-3) | Governing body | {{fill:title of the person in the role}} |
| {{org:ciso}} | Leads the information security program; owns this plan (PM-2) | {{org:senior-leader}} | {{fill:title}} |
| {{org:privacy-official}} | Leads the privacy program and its plan (PM-18, PM-19) | {{org:senior-leader}} | {{fill:title}} |
| Senior accountable official for risk management | Aligns security and privacy processes with strategic, operational and budget planning (PM-29a) | {{org:senior-leader}} | {{fill:title}} |
| Risk executive (function) | Views risk across the organization and keeps risk decisions consistent (PM-29b) | {{org:senior-leader}} | {{fill:members}} |
| Authorizing officials | Accept risk for the systems they authorize (PM-10b) | {{org:senior-leader}} | {{fill:titles, and the systems each authorizes}} |
| {{org:system-owner}} | Implements controls for the system and maintains its security plan | {{fill:who appoints system owners}} | Named in each system security plan |
| Common control providers | Implement and maintain the common controls in section 7 | {{org:ciso}} | {{fill:teams}} |
| {{org:security-operations}} | Monitors, analyzes and reports security events | {{org:ciso}} | {{fill:team or provider}} |
| {{org:incident-response-team}} | Handles incidents under the incident response plan | {{org:ciso}} | {{fill:team and lead}} |

These roles are identified and assigned by this plan (PM-1a.2).

## 4. Management commitment and resources

The {{org:senior-leader}} commits to the program by approving this plan and by providing the resources in the table below (PM-1a.2). Security and privacy resources are included in each capital planning and investment request (PM-3a).

| Resource | Current period | Planned next period |
| --- | --- | --- |
| Security staff (full-time equivalents) | {{fill:number}} | {{fill:number}} |
| Privacy staff (full-time equivalents) | {{fill:number}} | {{fill:number}} |
| Budget for security tools and services | {{fill:amount}} | {{fill:amount}} |
| External services (for example assessment, monitoring, incident response retainer) | {{fill:services}} | {{fill:services}} |

## 5. Coordination

The program is coordinated with the organizational entities below (PM-1a.3).

| Entity | What is coordinated | How and how often |
| --- | --- | --- |
| Privacy office | Privacy risk, privacy controls, breach response | {{fill:for example monthly meeting and shared plan of action and milestones}} |
| Legal | Laws, contracts, notification obligations | {{fill:how}} |
| Human resources | Screening, onboarding, transfers, departures, sanctions | {{fill:how}} |
| Procurement | Security requirements in acquisitions, supplier risk | {{fill:how}} |
| Finance | Security and privacy resources in budgets | {{fill:how}} |
| Physical security | Facility access and protection | {{fill:how}} |
| Mission and business owners | Risk tolerance, system priorities, continuity | {{fill:how}} |

## 6. Compliance and performance

- Compliance with the security policies is checked through control assessments and continuous monitoring, following the continuous monitoring strategy (PM-31).
- Exceptions to policy are requested in writing, approved by the {{org:ciso}}, time-limited and recorded with compensating measures in {{fill:where exceptions are recorded}}.
- Violations are handled through the organization's sanctions process.
- The program reports these measures of performance to the {{org:senior-leader}} {{fill:how often, for example quarterly}} (PM-6):

| Measure | Target | Source of data |
| --- | --- | --- |
| Systems with a current authorization | {{fill:target, for example 100%}} | System inventory |
| Plan of action and milestones items past their due date | {{fill:target}} | Plans of action and milestones |
| Vulnerabilities remediated within the required times | {{fill:target}} | Vulnerability scanning |
| Personnel with current security awareness training | {{fill:target}} | Training records |
| {{fill:other measure}} | {{fill:target}} | {{fill:source}} |

These arrangements describe how compliance is achieved (PM-1a.2).

## 7. Program management and common controls

:::guidance
This is the heart of the plan for an assessor. List every program management control with how it is met, then every common control that systems inherit. A system security plan can then mark those controls as inherited from this plan, and its assessors test them once here. Mark planned controls with a target date.
:::

### Program management controls

The program management controls, their status and where each is carried out (PM-1a.1):

| Control | Title | Status | How it is met | Owner |
| --- | --- | --- | --- | --- |
| PM-1 | Information Security Program Plan | {{fill:in place or planned}} | This plan | {{org:ciso}} |
| PM-2 | Information Security Program Leadership Role | {{fill:status}} | {{fill:appointment record}} | {{org:senior-leader}} |
| PM-3 | Information Security and Privacy Resources | {{fill:status}} | Section 4 | {{org:senior-leader}} |
| PM-4 | Plan of Action and Milestones Process | {{fill:status}} | {{fill:process and tool}} | {{org:ciso}} |
| PM-5 | System Inventory | {{fill:status}} | {{fill:where the inventory is kept}} | {{org:ciso}} |
| PM-6 | Measures of Performance | {{fill:status}} | Section 6 | {{org:ciso}} |
| PM-7 | Enterprise Architecture | {{fill:status}} | {{fill:document}} | {{fill:owner}} |
| PM-8 | Critical Infrastructure Plan | {{fill:status, or not applicable and why}} | {{fill:document}} | {{fill:owner}} |
| PM-9 | Risk Management Strategy | {{fill:status}} | Risk management strategy, listed in section 8 | {{org:ciso}} |
| PM-10 | Authorization Process | {{fill:status}} | {{fill:procedure}} | {{org:ciso}} |
| PM-11 | Mission and Business Process Definition | {{fill:status}} | {{fill:document}} | {{org:senior-leader}} |
| PM-12 | Insider Threat Program | {{fill:status}} | {{fill:program charter}} | {{org:ciso}} |
| PM-13 | Security and Privacy Workforce | {{fill:status}} | {{fill:program}} | {{org:ciso}} |
| PM-14 | Testing, Training, and Monitoring | {{fill:status}} | {{fill:plans}} | {{org:ciso}} |
| PM-15 | Security and Privacy Groups and Associations | {{fill:status}} | {{fill:groups}} | {{org:ciso}} |
| PM-16 | Threat Awareness Program | {{fill:status}} | {{fill:program and sharing partners}} | {{org:ciso}} |
| PM-17 | Protecting Controlled Unclassified Information on External Systems | {{fill:status, or not applicable and why}} | {{fill:policy and procedures}} | {{org:ciso}} |
| PM-18 to PM-27 | Privacy program controls | {{fill:status}} | Privacy program plan | {{org:privacy-official}} |
| PM-28 | Risk Framing | {{fill:status}} | Risk management strategy | {{org:ciso}} |
| PM-29 | Risk Management Program Leadership Roles | {{fill:status}} | Section 3 | {{org:senior-leader}} |
| PM-30 | Supply Chain Risk Management Strategy | {{fill:status}} | {{fill:document}} | {{org:ciso}} |
| PM-31 | Continuous Monitoring Strategy | {{fill:status}} | {{fill:document}} | {{org:ciso}} |
| PM-32 | Purposing | {{fill:status}} | {{fill:analysis}} | {{org:ciso}} |

### Common controls

Controls that the organization provides once and systems inherit, fully or in part (PM-1a.1):

| Control | Common control provider | Inherited by | Fully or partly | Status | Where documented |
| --- | --- | --- | --- | --- | --- |
| {{fill:for example AT-2}} | {{fill:for example the security awareness team}} | {{fill:all systems, or named systems}} | {{fill:fully or partly}} | {{fill:in place or planned, with date}} | {{fill:document or record}} |

## 8. Related plans, strategies and policies

| Document | Control | Location | Last approved |
| --- | --- | --- | --- |
| Risk management strategy | PM-9 | {{fill:location}} | {{fill:date}} |
| Privacy program plan | PM-18 | {{fill:location}} | {{fill:date}} |
| Supply chain risk management strategy | PM-30 | {{fill:location}} | {{fill:date}} |
| Continuous monitoring strategy | PM-31 | {{fill:location}} | {{fill:date}} |
| Family policies | The -1 control of each family | {{fill:location}} | {{fill:date}} |
| Incident response plan | IR-8 | {{fill:location}} | {{fill:date}} |

## 9. Approval

The {{org:senior-leader}} approves this plan as the senior official responsible and accountable for the risk that {{org:name}} incurs to its operations, assets, individuals, other organizations and the Nation (PM-1a.4).

| Name | Title | Signature | Date |
| --- | --- | --- | --- |
| {{fill:name}} | {{org:senior-leader}} | | {{fill:date}} |

## 10. Review, change history and protection

- The {{org:ciso}} shall review and update this plan {{param:pm-01_odp.01}} and following {{param:pm-01_odp.02}}. (PM-1b)
- The {{org:ciso}} shall protect this plan from unauthorized disclosure and modification by keeping it in {{fill:where the plan is kept, with access limited to named roles}} and keeping each approved version. (PM-1c)

| Version | Date | Change | Approved by |
| --- | --- | --- | --- |
| {{fill:version}} | {{fill:date}} | {{fill:summary of change}} | {{fill:name and title}} |

:::federal
For federal agencies, this plan documents the agency-wide information security program required by the Federal Information Security Modernization Act of 2014 ([44 U.S.C. § 3554(b)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title44-section3554&num=0&edition=prelim)). The {{org:ciso}} is the senior agency information security officer designated under 44 U.S.C. § 3554(a)(3)(A), and the {{org:privacy-official}} is the Senior Agency Official for Privacy designated under [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf).

- Section 2 shall list the federal laws, OMB policies and CISA directives that apply to the agency's systems. (PM-1a.1)

:::
