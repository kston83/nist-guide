---
title: Configuration Management Plan
type: plan
description: A system's security configuration management plan, following the sample outline in NIST SP 800-128 Appendix D, with its configuration item list, the change control board charter (Appendix H), and how baselines, changes, monitoring and records are handled, as SP 800-53 CM-9 requires.
controls: [cm-9, cm-1, cm-2, cm-2.3, cm-3, cm-3.1, cm-3.4, cm-5]
status: draft
stage: core
typical:
  cm-09_odp: the system owner and the Chief Information Security Officer
  cm-02.03_odp: at least the two most recent
  cm-03_odp.01: 'at least one year, or the life of the system if longer'
  cm-03_odp.02: 'a change control board with the system owner, technical leads and a security representative'
  cm-03_odp.03: 'weekly, and when an emergency change is requested'
  cm-3.4_prm_1: 'a representative of the security team and, where the system processes personal information, of the privacy office'
  cm-03.04_odp.03: the change control board
  cm-03.01_odp.01: the change management system integrated with the deployment pipeline
  cm-03.01_odp.02: the change control board members
  cm-03.01_odp.03: 5 business days
  cm-03.01_odp.04: 'the requester, the system owner and the security operations team'
---

:::guidance
CM-9 asks for a configuration management plan for each system: roles and responsibilities, the processes and procedures, how configuration items are identified and managed through the life cycle, which items are under configuration management, who approves the plan, and how the plan is protected. This template follows the sample outline in Appendix D of [NIST SP 800-128](https://csrc.nist.gov/pubs/sp/800/128/upd1/final), Guide for Security-Focused Configuration Management of Information Systems (August 2011, with updates as of October 10, 2019; final, no newer revision or draft as of October 2026): an introduction, the configuration management program, and the configuration management activities. Its Appendix A is the change control board charter, built on the sample charter in SP 800-128 Appendix H. Appendix D also suggests a change request form and a security impact analysis report format as plan appendices; both live in the [change request form](/templates/forms/change-request-form/), and the secure configurations, deviations and scan evidence live in the [baseline configuration standard](/templates/standards/baseline-configuration-standard/). SP 800-128 section 2.3.2 allows one plan for the whole organization with a system-specific part, so a larger organization can keep sections 1 to 2 once and have each system fill in sections 3 to 5 and the configuration item list. Assessors look for a plan that names the system's own configuration items, not a generic one.
:::

| System name | System identifier | Plan version | Plan owner | Approval date |
| --- | --- | --- | --- | --- |
| {{fill:system name}} | {{fill:unique system identifier}} | {{fill:version}} | {{org:system-owner}} | {{fill:date}} |

## Plan approval

This plan was reviewed and is approved by {{param:cm-09_odp}} (CM-9d).

| Name | Title | Signature | Date |
| --- | --- | --- | --- |
| {{fill:name}} | {{org:system-owner}} | | {{fill:date}} |
| {{fill:name}} | {{org:ciso}} | | {{fill:date}} |

## 1. Introduction

### 1.1 Background

Configuration management keeps {{fill:system name}} in a known, approved and secure state. It does this by setting secure baseline configurations, controlling every change to them, analyzing each change for its security and privacy impact, and monitoring the system against the baselines. This plan sets out how that is done for this system, under the organization's Configuration Management Policy (CM-1, CM-9a).

### 1.2 Overview of the system

The system is described in its [system security plan](/templates/plans/system-security-plan/), sections {{fill:section numbers}}. In brief:

- **Mission:** {{fill:the mission or business functions the system supports}}
- **Data flow:** {{fill:the main information flows, or a reference to the data flow diagram in the system security plan}}
- **Architecture:** {{fill:hosting, main tiers and environments, or a reference to the architecture diagram}}
- **Administration and management:** {{fill:who administers the system, from where, and with which management tools}}

### 1.3 Purpose of this document

This plan describes the roles, responsibilities, processes and procedures for configuration management of the system (CM-9a). It is the document administrators, developers, the change control board and assessors use to see how a configuration item is identified, baselined, changed and monitored.

### 1.4 Scope

This plan applies to every configuration item in section 3.1, in every environment listed in section 3.2: {{fill:for example development, test and production}}. It covers changes made by staff, contractors and service providers. {{fill:components or services outside the plan's scope, such as those inherited from a cloud provider, and where their configuration management is described}}

### 1.5 Applicable policies and procedures

- The organization's Configuration Management Policy and its procedures (CM-1)
- The [baseline configuration standard](/templates/standards/baseline-configuration-standard/) (CM-2, CM-6, CM-7)
- The [change request form](/templates/forms/change-request-form/) (CM-3, CM-4)
- The [component inventory](/templates/forms/component-inventory/) (CM-8)
- The system's [Continuous Monitoring Strategy](/templates/plans/continuous-monitoring-strategy/) (CA-7)
- The [patch and flaw remediation standard](/templates/standards/patch-and-flaw-remediation-standard/) (SI-2)
- {{fill:other laws, regulations, standards and organizational procedures that apply}}

## 2. Configuration management program

### 2.1 Roles and responsibilities

| Role | Responsibilities under this plan |
| --- | --- |
| {{org:system-owner}} | Owns this plan and the system's baselines; chairs or designates the chair of the change control board; approves deviations from secure configurations; ensures only approved changes are made (CM-3d) |
| {{org:ciso}} | Approves this plan with the system owner (CM-9d); provides the organization-wide configuration management, scanning and inventory tools; sets the secure configurations in the baseline configuration standard |
| System security officer, or the security representative the system owner names | Carries out or reviews the security impact analysis of each change (CM-4); sits on the change control board (CM-3(4)); reviews deviations and monitoring results |
| {{org:privacy-official}}, or a privacy representative | Reviews changes that affect personal information; sits on the board where the system processes personal information (CM-3(4)) |
| Change control board | Reviews proposed changes and approves, disapproves or holds them (CM-3b), under the charter in Appendix A |
| System administrators, developers and release engineers | Request changes; make only approved changes, through the access restrictions in section 2.3 (CM-5); update the baseline and the component inventory as part of each change |
| {{org:security-operations}} | Runs configuration compliance scans and unauthorized-component detection; reports differences to the system owner |
| Authorizing official | Is told of each significant change and decides whether a targeted assessment or reauthorization is needed (CA-6) |

### 2.2 Program administration

#### 2.2.1 Policies and procedures

The system follows the organization's Configuration Management Policy and these procedures: {{fill:the procedures, by name and location, for example the change management procedure and the baseline build procedure, or "this plan" where the plan itself is the procedure}} (CM-1). Where the system works differently from the organization's procedures, this plan says so in the section concerned.

#### 2.2.2 Change control board functions

Configuration change control for the system is coordinated and overseen by {{param:cm-03_odp.02}}, which convenes {{param:cm-03_odp.03}} (CM-3g). The board reviews each proposed change with its security and privacy impact analysis, decides on it, records the decision, and reviews emergency changes after the fact (CM-3b, CM-3c). Its charter is Appendix A.

#### 2.2.3 Change control board at the organization level

{{fill:the organization-level board or change advisory board, if one exists, which changes it decides (for example changes to shared infrastructure or common controls), and how this system's board escalates to it; or "none"}}

#### 2.2.4 Change control board at the system level

{{fill:the system's own board, or the enterprise board on which the system has a seat, and its members by role, as in Appendix A}}. {{param:cm-3.4_prm_1}} are members of {{param:cm-03.04_odp.03}} (CM-3(4)).

#### 2.2.5 Schedules and resource requirements

| Activity | Schedule | Who | Resources needed |
| --- | --- | --- | --- |
| Change control board meetings | {{fill:for example weekly, Tuesdays}} | Board members | {{fill:time, tools}} |
| Baseline review | {{fill:the frequency in the baseline configuration standard}} | {{org:system-owner}} | {{fill:resources}} |
| Configuration compliance scans | {{fill:the frequency in the baseline configuration standard}} | {{org:security-operations}} | {{fill:resources}} |
| Component inventory review and reconciliation | {{fill:the frequency in the component inventory}} | {{org:system-owner}} | {{fill:resources}} |
| Review of this plan | {{fill:for example annually}} | {{org:system-owner}} | {{fill:resources}} |

### 2.3 Configuration management tools

#### 2.3.1 Tools

| Tool | Used for | Configuration items covered | Who administers it |
| --- | --- | --- | --- |
| {{fill:for example the change management system}} | {{fill:for example change requests, impact analyses and approvals}} | {{fill:all}} | {{fill:team}} |
| {{fill:for example version control and the deployment pipeline}} | {{fill:approved versions of code, infrastructure as code and configuration files}} | {{fill:items}} | {{fill:team}} |
| {{fill:for example the configuration management or endpoint management tool}} | {{fill:applying and enforcing settings}} | {{fill:items}} | {{fill:team}} |
| {{fill:for example the compliance scanner and asset discovery tool}} | {{fill:checking settings against the baseline; finding components}} | {{fill:items}} | {{fill:team}} |

Only the people named in each tool's access list can change configuration items, and the tools record who made each change (CM-5). {{fill:how access to make changes is granted and reviewed, for example through the privileged access process}}

Because the tools that check baselines decide what counts as a deviation, the tools and their content (for example the scan profiles) are themselves configuration items in section 3.1, as SP 800-128 section 3.1.2 suggests.

:::guidance
SP 800-128 section 3.3.1 gives three steps for access restrictions for change: decide the types of change that can be made at the network, operating system and application layers; decide which privileged people may make which types; and enforce it technically, for example with role-based access. The change management system, version control and the deployment pipeline are where assessors look for the records CM-5 needs.
:::

This paragraph applies to High systems.

- The system uses {{param:cm-03.01_odp.01}} to document proposed changes, to notify {{param:cm-03.01_odp.02}} and request approval, to highlight proposed changes not approved or disapproved within {{param:cm-03.01_odp.03}}, to prohibit changes until the designated approvals are received, to document all changes, and to notify {{param:cm-03.01_odp.04}} when approved changes are completed (CM-3(1)).

#### 2.3.2 Configuration management library

Approved versions of each configuration item, previous baselines, change records and this plan are kept in {{fill:location, for example the version control repository and the change management system}}. Master copies of approved images and installation media are kept in {{fill:location}}, with access limited to {{fill:roles}} (SP 800-128 section 3.2.2).

### 2.4 Retention, archiving, storage and disposal

- Change records, including their impact analyses, test results and approvals, are kept for {{param:cm-03_odp.01}} (CM-3e).
- {{param:cm-02.03_odp}} previous versions of each baseline configuration are kept to support rollback (CM-2(3)).
- Archived baselines and change records are protected to the same level as the system, since they describe how it is built and secured (SP 800-128 section 3.3.4).
- This plan, and the records it names, are stored in {{fill:location with restricted access}}, where only {{fill:roles}} can change them, to protect them from unauthorized disclosure and modification (CM-9e).
- Records past their retention period are disposed of under {{fill:the organization's records retention schedule}}.

## 3. Configuration management activities

### 3.1 Configuration identification

#### 3.1.1 Types of configuration items

A configuration item is a component, a group of like components, or a non-component object such as documentation or firmware that is managed as one unit (SP 800-128 section 2.3.5). This system uses these types: {{fill:for example operating system images, network device configurations, cloud account and service settings, infrastructure-as-code definitions, application code and its dependencies, container images, databases, security tools and their content, and key documents}}.

#### 3.1.2 Identification criteria

- Each component in the component inventory belongs to exactly one configuration item, and each configuration item belongs to this system only (SP 800-128 section 3.1.2).
- Components with the same platform and the same secure configuration are grouped into one item, for example all servers running one operating system version.
- New items are identified when a change request adds a component type, environment, service or document, and the change request records the new item (CM-9b).
- Items leave configuration management only when they are retired through a change request, and keep their history.
- {{fill:any other criteria the system uses, for example a separate item for each externally facing component}}

#### 3.1.3 Configuration item labeling

Items are named {{fill:the naming convention, for example SYSTEM-TYPE-NN, such as FIN-IMG-01}}, and each item's versions are numbered {{fill:the versioning scheme, for example the version control tag or the image version}}.

#### Configuration item list

The configuration items of the system, and the place each one's approved version is kept (CM-9c):

| CI ID | Configuration item | Type | Components or objects it covers | Secure configuration it follows | Where the approved version lives | Owner | Current approved version and date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:ID}} | {{fill:name}} | {{fill:component group, single component, or non-component object}} | {{fill:the component inventory entries or documents in the item}} | {{fill:the benchmark from the baseline configuration standard, or not applicable}} | {{fill:repository, tool or library location}} | {{fill:role}} | {{fill:version and date}} |

:::guidance
Common gaps assessors find are infrastructure as code, cloud service settings and documentation left off this list. SP 800-128 section 3.1.2 lists what to keep for each item so it can be rebuilt from scratch: the system it is part of, its placement, ownership, the components and documents that make it up, version numbers, dependencies on other items, custom software, and the secure configurations it follows.
:::

### 3.2 Configuration baselining

#### 3.2.1 Identification of applicable common secure configurations

The secure configuration each component type follows, and every approved deviation from it, is recorded in the system's part of the [baseline configuration standard](/templates/standards/baseline-configuration-standard/) (CM-6).

#### 3.2.2 Component configuration item baselines

The baseline configuration of the system is the sum of the approved configurations of its configuration items, and is kept under configuration control (CM-2a). Each environment has its own baseline: {{fill:for example development, test and production, and how test mirrors production}}. A new baseline version is recorded when an approved change is implemented, and the previous version is retained under section 2.4.

#### 3.2.3 Non-component object baselines

Documents, diagrams, firmware and scripts are baselined by {{fill:how, for example as versioned files in the repository, approved through the same change process}}.

#### Criteria for approving a baseline

A baseline is approved when {{fill:the criteria, for example it has passed the compliance scan with only approved deviations, its tests have passed, and the system owner has approved it through a change request}}.

### 3.3 Configuration change control

#### 3.3.1 Handling of scheduled, unscheduled and unauthorized changes

These types of changes to the system are configuration-controlled: {{fill:the types, for example changes to any configuration item in section 3.1, to settings, to ports, protocols and services, to accounts with privileged access, and to the boundary}} (CM-3a). Each is requested on the [change request form](/templates/forms/change-request-form/).

| Change type | Examples | Approval | Impact analysis |
| --- | --- | --- | --- |
| Standard (preapproved) | {{fill:for example routine patches through the patch management tools, adding a user to an existing role}} | Approved once as a class by the board; listed in Appendix B | Done once for the class, and reviewed when the class is reviewed |
| Normal | Any change not standard or emergency | The change control board, before implementation | Before the board decides |
| Emergency (unscheduled) | {{fill:for example a fix for a known exploited vulnerability that cannot wait for the next meeting}} | {{fill:the role that may approve an emergency change, for example the system owner}}, then the board at its next meeting | As soon as practical, before the board reviews it |

Changes found by monitoring that have no approved request are treated as unauthorized: they are analyzed for their security impact, reversed or approved after the fact by the board, and investigated as a possible incident where the cause is unknown (SP 800-128 section 3.4).

#### 3.3.2 Security impact analysis

Each change is analyzed for its security and privacy impact before it is approved and implemented (CM-4), by {{fill:the roles that perform analyses, for example the system security officer or a security engineer, never the person making the change}}. The analysis follows the five steps in SP 800-128 section 3.3.3 and is recorded on the change request form, with the analyst's name and the date.

#### 3.3.3 Testing

Changes are tested and validated in {{fill:the test environment}} before they are finalized in production, and the results are recorded on the change request form (CM-3(2)).

#### 3.3.4 Submission of findings to the change control board

The completed request, with its impact analysis and test results, goes to the board {{fill:how, for example through the change management system at least two business days before the meeting}}. A change the analysis marks as a significant change is also reported to the authorizing official, under section 12 of the Continuous Monitoring Strategy.

#### 3.3.5 Change control board evaluation and approval

The board decides under the charter in Appendix A. Each decision, approved, disapproved or on hold, is recorded on the change request with its reason (CM-3c).

#### 3.3.6 Recording requirements

When a change is implemented, the implementer records the date and result; the affected controls are checked; and the baseline, the component inventory, the system security plan and other affected documents are updated (CM-3, CM-4(2), CM-8(1)).

### 3.4 Configuration monitoring

#### 3.4.1 Organization-level tools

{{fill:the organization-wide tools the system inherits, for example the enterprise compliance scanner and asset discovery service}}

#### 3.4.2 System-level tools

{{fill:tools the system runs itself}}. Components the tools cannot check are listed here with the manual check used instead: {{fill:components and manual checks}} (SP 800-128 section 3.4.2).

#### 3.4.3 Monitoring requirements and frequencies

| What is monitored | How | Frequency | Record |
| --- | --- | --- | --- |
| Settings against the baseline (CM-6) | Compliance scan | {{fill:the frequency in the baseline configuration standard}} | Scan evidence in the baseline configuration standard |
| Components against the inventory (CM-8, CM-8(3)) | Asset discovery and network access control | {{fill:the frequency in the component inventory}} | Reconciliation in the component inventory |
| Changes against approved requests (CM-3) | Comparison of deployment history and configuration change logs with the change records | {{fill:for example monthly}} | {{fill:where the comparison is recorded}} |
| Unnecessary functions, ports, protocols and services (CM-7(1)) | Port and service scan against the approved list | {{fill:the frequency in the baseline configuration standard}} | Review record in the baseline configuration standard |

### 3.5 Reporting

#### 3.5.1 Report recipients

| Report | Content | Recipient | Frequency |
| --- | --- | --- | --- |
| Configuration management metrics | {{fill:for example percentage of components compliant with their baseline, open deviations, unauthorized changes and components found, and percentage of changes with an impact analysis completed before approval}} | {{org:system-owner}}, {{org:ciso}} | {{fill:for example monthly}} |
| Significant changes | The change, its analysis and the board's decision | Authorizing official | When the change is proposed |
| Continuous monitoring status | The metrics above, as the Continuous Monitoring Strategy asks | The recipients in the Continuous Monitoring Strategy | Its frequency |

#### 3.5.2 Reviewing reports

The {{org:system-owner}} reviews each report, opens a change request or a plan of action and milestones item for each problem found, and looks for patterns, such as repeated unauthorized changes by one team, that call for training or tighter access restrictions (SP 800-128 section 3.4.1).

## 4. Plan review and change history

The {{org:system-owner}} reviews this plan {{fill:for example at least annually}}, and updates it when the system's configuration items, environments, tools or board change (CM-9). Changes to the plan go through change control.

| Date | Version | Change or review | By | Approved by |
| --- | --- | --- | --- | --- |
| {{fill:date}} | {{fill:version}} | {{fill:description}} | {{fill:name and title}} | {{fill:name and title}} |

## Appendix A. Change control board charter

:::guidance
This charter follows the sample in SP 800-128 Appendix H, which has six parts: purpose, scope of authority, membership, operating procedures, decision-making process and communicating status. SP 800-128 section 3.1.2 adds that best practice is for every change to be vetted by at least one authorized person independent of the requester, so administrators and developers cannot propose and approve their own changes, and that a board for a low-impact or simple system may be as small as two members, usually the system owner and the system security officer, while a high-impact or complex moderate-impact system may need at least three. Vendors may advise the board but do not vote.
:::

**Purpose.** The {{fill:board name}} ensures that proposed changes to {{fill:system name}} go through a structured process before they are made. It asks for an impact analysis of each proposed change, reviews change requests, decides on them, and tells the people affected (CM-3b, CM-3g). It reports to {{fill:the body it reports to, for example the organization-level change advisory board or the authorizing official}}.

**Scope of authority.** The board decides on every configuration-controlled change to the system's configuration items, except standard changes listed in Appendix B. It escalates to {{fill:the higher-level board or official}} any change that {{fill:for example affects another system or a common control, exceeds a cost or schedule limit, or is a significant change}}.

**Membership.**

| Role | Member | Voting |
| --- | --- | --- |
| Chair | {{org:system-owner}}, or {{fill:the person the system owner designates}} | Yes |
| Security representative | {{fill:for example the system security officer}} (CM-3(4)) | Yes |
| Privacy representative, where the system processes personal information | {{fill:for example the system privacy officer}} (CM-3(4)) | Yes |
| Technical leads | {{fill:for example the infrastructure lead and the application lead}} | Yes |
| Operations and service desk | {{fill:role}} | {{fill:yes or no}} |
| Advisers, such as vendors | {{fill:roles}} | No |

**Operating procedures.** The board meets {{param:cm-03_odp.03}}. A quorum is {{fill:for example three voting members, including the chair or deputy and the security representative}}; without the security representative, no change is approved. The requester of each change attends to answer questions. Guests may attend at the chair's invitation. Minutes record attendance and each decision.

**Decision-making process.** Decisions are made by {{fill:the rule, for example consensus of the voting members, with the chair deciding if there is none}}. Each request is approved, approved with conditions, disapproved or put on hold, with the reason recorded. The chair {{fill:may or may not}} overrule the board's collective decision, and records the reason if so. No member approves a change they requested or will implement.

**Communicating status.** Each decision is recorded on the change request and sent to the requester, the implementer and {{fill:others, for example the service desk and the system owner}} within {{fill:time, for example one business day}}. Significant changes are reported to the authorizing official. Minutes and decisions are kept in {{fill:location}} for the retention period in section 2.4.

## Appendix B. Standard (preapproved) changes

| Standard change | Conditions | Impact analysis reference | Approved by the board on | Next review |
| --- | --- | --- | --- | --- |
| {{fill:for example monthly operating system updates through the patch management tools}} | {{fill:for example vendor security updates only, deployed in the test group first}} | {{fill:change request ID of the class analysis}} | {{fill:date}} | {{fill:date}} |

## Appendix C. References

- [NIST SP 800-128](https://csrc.nist.gov/pubs/sp/800/128/upd1/final), Guide for Security-Focused Configuration Management of Information Systems
- [NIST SP 800-70 Rev. 5](https://csrc.nist.gov/pubs/sp/800/70/r5/final), National Checklist Program for IT Products: Guidelines for Checklist Users and Developers
- [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final), the CM family
- {{fill:organizational references}}
