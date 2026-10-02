---
title: Change Request Form
type: form
description: The record of one configuration-controlled change, from request through security and privacy impact analysis, significant-change decision, testing, approval, implementation and verification, adapted from the sample change request and security impact analysis template in NIST SP 800-128, with a register of every change, as SP 800-53 CM-3 and CM-4 require.
controls: [cm-3, cm-3.2, cm-4, cm-4.1, cm-4.2]
status: draft
stage: core
typical:
  cm-03_odp.01: 'at least one year, or the life of the system if longer'
  cm-03_odp.02: 'a change control board with the system owner, technical leads and a security representative'
---

:::guidance
Use one form per change. The parts follow the change control steps in section 3.3.2 of [NIST SP 800-128](https://csrc.nist.gov/pubs/sp/800/128/upd1/final) (August 2011, with updates as of October 10, 2019; final, current as of October 2026): request, analyze, test, approve, implement, verify and close. Part A adapts the sample change request in its Appendix E. Part B is the security and privacy impact analysis: its tables adapt the security impact analysis template in Appendix I, and its five steps are the ones in section 3.3.3. The analysis lives on this form, not in a separate document, so the board, and later the assessor, sees it next to the decision. Assessors sample changes from the system's deployment history or configuration logs, trace each to a form, and check three things most often: that the analysis is dated before the approval, that someone other than the implementer did it, and that a significant change reached the authorizing official. A change management system can hold these fields instead of a document, as long as each record has them; for a High system, that is how CM-3(1) is usually met. The register at the end is also downloadable as a CSV file.
:::

| System | Change ID | Change type | Date prepared | Status |
| --- | --- | --- | --- | --- |
| {{fill:system name and identifier}} | {{fill:unique change ID}} | {{fill:standard, normal or emergency}} | {{fill:date}} | {{fill:requested, analyzed, approved, disapproved, on hold, implemented, verified or closed}} |

## 1. How to use this form

- Use this form for every type of change the system's Configuration Management Plan lists as configuration-controlled (CM-3a). A standard change cites the change request that approved its class, and needs only Part A and Part F.
- The analyst who completes Part B has security or privacy responsibilities and the skills to understand the change, and is not the person who will implement it. Part B is signed and dated before the decision in Part E (CM-4).
- For an emergency change, the person the Configuration Management Plan names may approve the change so work can start. Part B is completed as soon as practical, and the change control board reviews the change at its next meeting, recording that review in Part E (CM-3).
- Implement the change only after Part E records approval (CM-3d).
- Keep the completed form, with its attachments, for {{param:cm-03_odp.01}} (CM-3e).
- {{param:cm-03_odp.02}} reviews the register at each meeting for changes waiting on a decision, emergency changes not yet reviewed, and approved changes not yet verified (CM-3f, CM-3g).

## Part A. Change request

| Field | Entry |
| --- | --- |
| Title of the change | {{fill:short title}} |
| Requested by | {{fill:name, role and team}} |
| Description of the change | {{fill:what will change, including all additions, deletions and modifications}} |
| Justification | {{fill:why the change is needed, for example a business requirement, a vulnerability, an audit finding}} |
| Urgency | {{fill:scheduled, urgent or emergency}} |
| Configuration items and components to be changed | {{fill:configuration item IDs from the Configuration Management Plan and component IDs from the component inventory}} |
| Other components, configuration items or systems affected | {{fill:dependencies, interfaces, and other systems and their owners}} |
| People involved in making the change | {{fill:names or roles}} |
| Expected functional impact | {{fill:what users or operations will notice, and any outage}} |
| Impact of not making the change | {{fill:the risk or cost of not changing}} |
| Interface or integration issues | {{fill:known issues}} |
| Changes required to other applications | {{fill:changes, or none}} |
| Work plan | {{fill:planned implementation date and window, deliverables, and the back-out plan}} |
| Resources or funding required | {{fill:resources, or none}} |
| Supporting documents | {{fill:attachments, for example the design, vendor release notes}} |

## Part B. Security and privacy impact analysis

### B1. Background

| Field | Entry |
| --- | --- |
| Project type | {{fill:new development, enhancement or maintenance}} |
| Systems affected | {{fill:system names}} |
| Security categorization of the affected systems | {{fill:for example Moderate}} |
| Baseline changes | {{fill:how the baseline configuration will change, for example a new image version or a new allowed port}} |
| Planned start and completion of deployment | {{fill:dates}} |

### B2. Change type

Mark each type that applies; more than one may apply.

| Change type | Applies (X) | Explanation |
| --- | --- | --- |
| New network device, such as a router, switch, firewall or VPN gateway | | |
| New server, virtual machine, container image or cloud compute resource | | |
| New end-user device type, such as desktops, laptops or mobile devices | | |
| Other new hardware | | |
| Decommissioning of existing hardware or resources | | |
| New operating system, or upgrade of an existing one | | |
| New commercial or open-source software, or an upgrade or patch of it | | |
| New custom application, or an upgrade or fix of one | | |
| New database management system, database instance, or change to an existing one | | |
| New or upgraded middleware or service | | |
| New cloud service, or a change to a cloud service's settings | | |
| Change to infrastructure-as-code definitions or the deployment pipeline | | |
| Change to ports, protocols or services used or provided by the system (CM-7) | | |
| Change to security functions, such as cryptographic modules, authentication, authorization, roles, logging or security patches | | |
| New information type processed, stored or transmitted, or new personal information | | |
| Interface or interconnection added, changed or removed (CA-3) | | |
| Change of location or hosting | | |
| Other change | | |

### B3. Components affected

| Component ID (component inventory) | Component name | Network address | Manufacturer and model | Serial number or asset tag | Operating system and version | Software affected |
| --- | --- | --- | --- | --- | --- | --- |
| {{fill:ID}} | {{fill:name}} | {{fill:address}} | {{fill:manufacturer and model}} | {{fill:serial or tag}} | {{fill:OS and version}} | {{fill:software and versions}} |

### B4. Analysis

:::guidance
These are the five steps of a security impact analysis in SP 800-128 section 3.3.3. NIST's CM-4 discussion adds what the analysis covers: the security and privacy plans, policies and procedures; the design and operating procedures, to see how the change affects the controls; the effect on supply chain partners; how the change creates new privacy risks; and a risk assessment to decide whether more controls are needed. Scale the depth to the change: one line per step is enough for a minor change, while a new component or a new place where data is stored needs a full analysis. "None" in every row is a common finding.
:::

| Step | Findings |
| --- | --- |
| 1. Understand the change: how it will be built and deployed, with a high-level architecture overview where useful. For a change already made, what the audit records and the people who made it show | {{fill:summary}} |
| 2. Identify vulnerabilities: known vulnerabilities in products being added, for example from the National Vulnerability Database or the vendor's advisories; for custom code, the results of code review or testing | {{fill:vulnerabilities found, or none, with the sources checked}} |
| 3. Assess risks: the likelihood and impact of each vulnerability being exploited, and whether to accept, avoid or reduce the risk | {{fill:risk rating and response}} |
| 4. Assess the impact on existing controls: controls the change alters, settings or baselines it changes, and other components or systems that depend on what is changing, including supply chain partners | {{fill:controls affected, by control ID, and how}} |
| 5. Plan safeguards and countermeasures: changes to the request, or controls to add, where the risk is not acceptable | {{fill:safeguards, or none needed}} |

### B5. Privacy

| Question | Answer |
| --- | --- |
| Does the change add, remove or alter personal information the system processes, or how it is processed or shared? | {{fill:yes or no, and how}} |
| Does the privacy impact assessment or a system of records notice need updating? | {{fill:yes or no; reference to the update}} |
| Privacy reviewer | {{fill:name, role and date, or not applicable}} |

### B6. Analyst sign-off

| Analyst | Role | Date completed |
| --- | --- | --- |
| {{fill:name}} | {{fill:role with security or privacy responsibilities}} | {{fill:date, which is before the decision date in Part E}} |

## Part C. Significant change decision

:::guidance
A significant change is one likely to affect the security or privacy state of the system. The [Continuous Monitoring Strategy](/templates/plans/continuous-monitoring-strategy/), section 12, lists it as a trigger: a security impact analysis, a targeted assessment of the affected controls, and an authorizing official decision on reauthorization. Its examples are a new hosting environment or a major architecture change. Changes that commonly qualify: a new interconnection, a new type of information or personal information, a change in categorization, a move to a different cloud service or data center, replacing a security function such as authentication, or removing a control. When unsure, treat the change as significant and let the authorizing official decide. Deciding it here, before approval, means the authorizing official hears about the change before it happens, not at the next assessment.
:::

| Question | Answer |
| --- | --- |
| Is this a significant change under section 12 of the system's Continuous Monitoring Strategy? | {{fill:yes or no}} |
| Reason | {{fill:the criterion it meets, or why it meets none}} |
| Decided by | {{fill:name, role and date}} |
| If yes: date the authorizing official was told, and how | {{fill:date and method}} |
| If yes: the authorizing official's decision | {{fill:for example proceed with a targeted assessment of the affected controls, reauthorize, or proceed and accept the risk; name and date}} |
| If yes: system security plan, privacy plan and continuous monitoring strategy updates needed | {{fill:documents and sections}} |

## Part D. Testing

| Field | Entry |
| --- | --- |
| Test environment | {{fill:environment, and how it is separated from production}} |
| Tests performed | {{fill:the tests run against the change, functional and security, such as a compliance scan and a vulnerability scan of the changed component}} |
| Results | {{fill:results for each test, or a reference to the test record}} |
| Tested and validated by, and date | {{fill:name and date}} |

The change is tested, validated and documented before its implementation is finalized (CM-3(2)).

:::guidance
For a High system, CM-4(1) also asks that the change be analyzed in a separate test environment, physical or logical, before it reaches production, looking for impacts from flaws, weaknesses, incompatibility or intentional malice. Record the environment and what the analysis there found. Keep production personal information out of the test environment unless it is protected to the same level.
:::

## Part E. Decision

| Field | Entry |
| --- | --- |
| Decision | {{fill:approved, approved with conditions, disapproved, or on hold}} |
| Conditions or further action | {{fill:conditions, such as added safeguards; or, if disapproved, the reason and what would change the decision}} |
| Decided by | {{fill:the change control board, with the meeting date, or the emergency approver}} |
| Security representative present | {{fill:name}} |
| Emergency change reviewed by the board on | {{fill:date, or not applicable}} |

| Approver | Role | Signature | Date |
| --- | --- | --- | --- |
| {{fill:name}} | {{fill:role}} | | {{fill:date}} |

## Part F. Implementation, verification and closure

| Field | Entry |
| --- | --- |
| Implemented by, date and time | {{fill:name, date and time}} |
| Implementation result | {{fill:successful, partially successful, or backed out, with details}} |
| Controls verified after the change, by whom and how | {{fill:for example compliance and vulnerability scans compared with the results before the change, and a test of the affected controls}} |
| Verification result | {{fill:the affected controls are implemented correctly, operating as intended and producing the desired outcome, or what was found}} |
| Documents updated | {{fill:baseline configuration, component inventory, system security plan, configuration item list, diagrams, plan of action and milestones, or none}} |
| Stakeholders notified | {{fill:who was told, for example users and the service desk}} |
| Closed by and date | {{fill:name and date}} |

:::guidance
CM-4(2), in the Moderate and High baselines, asks that after the change the affected controls are verified as implemented correctly, operating as intended and producing the desired outcome. SP 800-128 section 3.3.2 says a change request is not closed until the change is confirmed deployed without issues, and section 3.3.4 lists the documents to update afterward, noting that a system with high risk or significant changes may need reauthorization.
:::

:::federal
[OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 5.i, defines a significant change as "a change that is likely to affect the security or privacy state of an information system," and says that under ongoing authorization, reauthorization is typically an event-driven action in response to an event or significant change that raises security or privacy risk above the agency's risk tolerance, and may be a complete or a targeted review. Section 5.a says systems undergoing significant changes are expected to meet NIST standards and guidelines immediately on deployment. As of October 2026.

- The Part C decision shall use the OMB Circular A-130 definition of a significant change, and each significant change shall be reported to the authorizing official before it is implemented, or, for an emergency change, as soon as it is made. (CM-4)
- A significant change shall be deployed meeting the current versions of the NIST standards and guidelines that apply to it, as OMB Circular A-130, Appendix I, section 5.a, expects. (CM-3)

:::

## Register

| Change ID | Title | Requested by and date | Type | Configuration items affected | Impact analysis by and date | Security and privacy impact | Significant change; authorizing official told | Test result | Decision, by and date | Implemented by and date | Verification result | Closed |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:ID}} | {{fill:title}} | {{fill:name and date}} | {{fill:standard, normal or emergency}} | {{fill:CI IDs}} | {{fill:analyst and date}} | {{fill:summary and risk rating}} | {{fill:no; or yes, with the date told}} | {{fill:pass or fail, with reference}} | {{fill:decision, board or approver, date}} | {{fill:name and date}} | {{fill:result}} | {{fill:date}} |
