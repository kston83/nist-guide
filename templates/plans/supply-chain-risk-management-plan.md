---
title: Supply Chain Risk Management Plan
type: plan
description: A system's cybersecurity supply chain risk management plan, following the sample outline in NIST SP 800-161 Rev. 1 Appendix D.3.1 and the outline example NIST publishes with SP 800-18 Rev. 2, with the system's critical components, services and suppliers, the supply chain controls selected, the risks accepted, and the plan's approval, review and protection, as SP 800-53 SR-2 requires.
controls: [sr-2, sr-2.1, sr-3]
status: draft
stage: mature
typical:
  sr-02_odp.01: 'each system, including the components and services the criticality analysis (RA-9) identifies as critical and the external services the system depends on'
  sr-02_odp.02: 'annually, and at each life cycle milestone or gate review and each significant contracting action, such as a new contract, a renewal or a change of supplier for a critical component or service'
  sr-03_odp.01: 'each system and the components and services the criticality analysis (RA-9) identifies as critical'
  sr-03_odp.02: 'the supply chain risk management team (SR-2(1)), the procurement office, and the designated supply chain contacts of the suppliers and contractors involved'
  sr-03_odp.03: 'the controls the supply chain risk management plan selects, including at least the supply chain terms of the acquisition security requirements standard (SA-4, SR-5), supplier assessments (SR-6), notification agreements (SR-8), inspection of components on receipt and after repair (SR-10), anti-counterfeit measures (SR-11) and controlled disposal (SR-12)'
---

:::guidance
SR-2 asks for a plan that manages supply chain risk across the system's life cycle, from research and development to disposal, reviewed on a set cycle and protected from unauthorized disclosure and modification. NIST's SR-2 discussion says the plan states the supply chain risk tolerance, the acceptable mitigation strategies or controls, a process for evaluating and monitoring supply chain risk, how the plan is implemented and communicated, the justification for the mitigation measures, and the roles and responsibilities. This template follows the sample plan outline in Appendix D.3.1 of [NIST SP 800-161 Rev. 1](https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final), Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations (May 2022, updated November 1, 2024; current as of October 2026), and the more detailed Cybersecurity Supply Chain Risk Management Plan Outline Example that NIST publishes with [SP 800-18 Rev. 2](https://csrc.nist.gov/pubs/sp/800/18/r2/final), Developing Security, Privacy, and Cybersecurity Supply Chain Risk Management Plans for Systems (June 2026), which follows the same outline. Sections 1 to 6 and 8 to 13 match Appendix D.3.1.1 to D.3.1.14 in order; the approval (D.3.1.12) comes first, as in the other plans in this kit, and the life cycle activities (D.3.1.15) are in section 5.5.

SP 800-161 Rev. 1 recommends a stand-alone plan, and allows one inside the system security plan as long as its supply chain parts stay clearly discernible (Appendix A, SR-2, and Appendix D.3); SP 800-18 Rev. 2 (section 2.4) leaves the choice to consolidate plans to the organization. The Supply Chain Risk Management Policy allows either. Appendix D.3 says its plan applies to moderate- and high-impact systems, but SR-2 is also in the Low baseline. SP 800-18 Rev. 2 (section 4.2) says a plan is still worth having for a low-impact system, especially one that uses the same components as higher-impact systems, and that without one, the system security plan can identify the supply chain controls the system inherits, the risk tolerances, and whether each supply chain risk is accepted, transferred or mitigated. For a low-impact system, that short section of the system security plan, with the critical components and suppliers listed, can serve as this plan.

Write the controls the organization provides to every system (the supply chain risk management team, standard contract terms, supplier assessments) once, as common controls, and refer to them here, so this plan covers what is specific to the system. Assessors look for a plan whose critical components and suppliers match the criticality analysis and the component inventory, approved by the authorizing official and reviewed after each significant contracting action.
:::

| System name | System identifier | Plan version | Plan owner | Approval date |
| --- | --- | --- | --- | --- |
| {{fill:system name}} | {{fill:unique system identifier}} | {{fill:version}} | {{org:system-owner}} | {{fill:date}} |

This plan contains information about the system's suppliers, critical components and known supply chain weaknesses. Handle it at least as carefully as the system security plan, and share it only with those who need it (SR-2c).

## Plan approval

:::guidance
SP 800-18 Rev. 2 says the authorizing official approves the plan before the controls are implemented or assessed, and that approving the plan accepts the allocated controls and their proposed implementation; approval of the plan is not an authorization to operate. When reviewing the plan, the authorizing official consults the supply chain risk management team and, for technology purchases, the acquisition staff (section 4.3.3). The sample plan in SP 800-161 Rev. 1 (section D.3.1.12) carries the authorizing official's signature.
:::

This plan was reviewed and is approved by the authorizing official, after coordination with the supply chain risk management team and the procurement office (SR-2a).

| Name | Role | Signature | Date |
| --- | --- | --- | --- |
| {{fill:name}} | {{org:system-owner}} (plan owner) | | {{fill:date}} |
| {{fill:name}} | Lead of the supply chain risk management team (coordination) | | {{fill:date}} |
| {{fill:name}} | Authorizing official (approval) | | {{fill:date}} |

## 1. System name and identifier

This plan covers {{fill:system name}} ({{fill:unique system identifier}}), {{fill:previous names of the system, or "no previous names"}}. It describes the supply chain controls in place or planned for the system, and applies these organization-level documents to it:

- The organization's supply chain risk management strategy (PM-30): {{fill:title, version and location}}
- The Supply Chain Risk Management Policy (SR-1): {{fill:version and location}}
- The system's [system security plan](/templates/plans/system-security-plan/): {{fill:version and location}}

## 2. System description

### 2.1 Purpose and scope

{{fill:the function and purpose of the system, the mission or business functions it supports, and the information it processes, or a reference to sections 2 and 6 of the system security plan}}

This plan applies to {{param:sr-02_odp.01}} (SR-2a). It covers supply chain risk in the research and development, design, manufacturing, acquisition, delivery, integration, operations and maintenance, and disposal of the system and its components and services (SR-2a).

Environment of operation: {{fill:for example on-premises data center, a named cloud service, operational technology at a site, or a mix}}. Technologies or factors that bring additional supply chain risk: {{fill:for example operational technology, custom hardware, open-source dependencies, offshore development, a single-source component, or "none identified"}}.

### 2.2 Approach to supply chain risk

| Element (SR-2a) | For this system |
| --- | --- |
| Supply chain risk tolerance | {{fill:the tolerance the system applies from the supply chain risk management strategy, for example no unassessed supplier for a critical component, and no component from an excluded source}} |
| Acceptable mitigation strategies and controls | Section 7 |
| Process for evaluating and monitoring supply chain risk | Section 7.2, with supplier assessments on the [supplier assessment questionnaire](/templates/forms/supplier-assessment-questionnaire/) (SR-6) |
| How the plan is implemented and communicated | {{fill:for example the plan is stored in the authorization package, its controls are carried into contracts by the procurement office, and the system team is briefed after each approved change}} |
| Description of and justification for mitigation measures | Sections 7.3 and 7.4 |
| Roles and responsibilities | Section 8 |

## 3. Information types and security categorization

The information types, impact levels and overall categorization are recorded in {{fill:the security categorization worksheet or section 6 of the system security plan}} (RA-2). In brief:

| Security objective | Impact level |
| --- | --- |
| Confidentiality | {{fill:low, moderate or high}} |
| Integrity | {{fill:low, moderate or high}} |
| Availability | {{fill:low, moderate or high}} |
| Overall security categorization | {{fill:low, moderate or high}} |

## 4. System operational status

{{fill:one or more of: under development (being designed or developed, not yet fully operating); operational (authorized and operating); undergoing a significant modification; disposal (no longer authorized or operating). If more than one applies, say which part of the system has which status}}

## 5. Diagrams, inventory and life cycle activities

### 5.1 Diagrams

The authorization boundary, network and data flow diagrams are {{fill:location, for example the system security plan section 7 and its attachments}}.

### 5.2 Component inventory

The authoritative component inventory is the system's [component inventory](/templates/forms/component-inventory/) (CM-8), kept in {{fill:the tool or location}}. For supply chain purposes it records, for hardware, each component's manufacturer and model, serial number and asset tag, firmware version, operating system and end of support, warranty or maintenance contract and location; and for software, each product's version, developer or source, vendor, license, support status and, where the supplier provides one, its software bill of materials.

Summary: {{fill:types and counts of components, and how the inventory is kept current with component versions, configurations and suppliers}}.

:::guidance
SP 800-18 Rev. 2's outline example lists the component data a supply chain plan uses, much of which the component inventory already holds. It adds that independent validation of inventories provided by third parties, or verification of artifact signing, is desirable where feasible, and that inventories should be kept current with component versions, configurations and suppliers.
:::

### 5.3 Critical components and services

The components and services the criticality analysis (RA-9) identifies as critical to the system:

| Component or service | Function it performs for the system | Why it is critical | Supplier (section 5.4) | Origin, where known | Supply chain controls applied (section 7) |
| --- | --- | --- | --- | --- | --- |
| {{fill:name and version}} | {{fill:function}} | {{fill:for example it performs a security function, has privileged access, or its failure stops a mission-critical function}} | {{fill:supplier}} | {{fill:manufacturer and country of manufacture or development}} | {{fill:for example supplier assessment, notification terms, inspection before use and annually, signed updates only}} |

- The {{org:system-owner}} shall keep this list consistent with the criticality analysis (RA-9) and the component inventory (CM-8), and update it within {{fill:time, for example 30 days}} of a change to either. (SR-2a)

### 5.4 Supplier inventory

| Supplier | Products or services it provides to the system | Criticality | Contract or agreement | Last supplier assessment (ID and date) | Next assessment due | Notification contact (SR-8) |
| --- | --- | --- | --- | --- | --- | --- |
| {{fill:supplier name}} | {{fill:products or services}} | {{fill:critical, or not critical}} | {{fill:contract number and end date}} | {{fill:assessment ID and date, from the supplier assessment register}} | {{fill:date}} | {{fill:name or mailbox}} |

:::guidance
SP 800-18 Rev. 2 (section 2.3) has the plan include supplier and component inventories that show their criticality to the system. Include the providers of external services (SA-9), the developers of custom software, integrators, and the maintenance and disposal providers, not just the sellers of hardware and software. The supplier assessment register gives the assessment dates.
:::

### 5.5 Life cycle activities

| Life cycle phase | Supply chain activities and controls for this system | Who |
| --- | --- | --- |
| Research and development, and design | {{fill:for example criticality analysis of the design, supply chain requirements in the architecture, choice of components with known provenance}} | {{fill:role}} |
| Manufacturing and development | {{fill:for example the developer's secure development practices (SA-15), protection of the build environment, signed releases}} | {{fill:role}} |
| Acquisition | {{fill:for example supply chain terms in the solicitation and contract (SA-4, SR-5), supplier assessment before award (SR-6)}} | Procurement office, supply chain risk management team |
| Delivery | {{fill:for example tamper-evident packaging, tracked delivery, inspection on receipt (PE-16, SR-10), authenticity checks (SR-11)}} | {{fill:role}} |
| Integration | {{fill:for example configuration to baseline before connection (CM-6), verification of software signatures}} | {{fill:role}} |
| Operations and maintenance | {{fill:for example supplier notifications (SR-8), periodic inspection (SR-10), controlled repair (MA-2, SR-11(2)), supplier reassessment}} | {{fill:role}} |
| Disposal | {{fill:for example sanitization and certified destruction (MP-6, SR-12)}} | {{fill:role}} |

:::guidance
SP 800-161 Rev. 1 section D.3.1.15 says the plan covers the full life cycle and its activities are built into the organization's system and software life cycle processes. In agile or spiral development, some activities repeat with each release; say so in the table.
:::

## 6. Information exchanges and system connections

The system's information exchanges, their agreements and the other systems' authorization status are recorded in {{fill:section 8 of the system security plan, and the information exchange agreements}} (CA-3). Supply chain findings that affect an exchange, from supplier assessments, supply chain risk assessments or continuous monitoring, are:

| Exchange or connection | Agreement and dates | Supply chain finding | Mitigation |
| --- | --- | --- | --- |
| {{fill:other system or service}} | {{fill:agreement type and end date}} | {{fill:finding, or "none"}} | {{fill:mitigation, or "not applicable"}} |

## 7. Supply chain control details

### 7.1 Control selection

The system uses the {{fill:Low, Moderate or High}} control baseline, with the supply chain risk management controls of the [Supply Chain Risk Management Policy](/templates/policies/sr/) and {{fill:any supply chain overlay or added controls, for example from SP 800-161 Rev. 1 Appendix A, or "no additions"}}. Tailoring decisions and their reasons: {{fill:controls added or changed for supply chain reasons, and why}}.

### 7.2 Identifying and addressing supply chain weaknesses

- The {{org:system-owner}} shall identify and address weaknesses or deficiencies in the supply chain elements and processes of {{param:sr-03_odp.01}} in coordination with {{param:sr-03_odp.02}}. (SR-3a)
- The process draws on supplier assessments, supplier notifications, inspection results, security advisories, incidents, and changes in a supplier's ownership, location or sources; each weakness found is recorded in the [risk register](/templates/forms/risk-register/) or the [plan of action and milestones](/templates/forms/plan-of-action-and-milestones/), with an owner, a response and a due date.
- The supply chain risk assessment for the system (RA-3(1)) is {{fill:location and date}}, and its results inform the controls in section 7.3.

### 7.3 Control implementation

The system employs {{param:sr-03_odp.03}}, and this plan is where those processes and controls are documented for the system (SR-3b, SR-3c).

| Control | How it is implemented for this system | Responsibility | Implementation status | Assessment status |
| --- | --- | --- | --- | --- |
| SR-2(1) Supply chain risk management team | {{fill:for example the organization's team, under its charter; this system's representative is named in section 8}} | {{fill:common, system-specific or hybrid}} | {{fill:planned, partially implemented or fully implemented}} | {{fill:satisfied or other than satisfied, with the date and report}} |
| SR-3 Supply chain controls and processes | Section 7.2, and this table | {{fill:responsibility}} | {{fill:status}} | {{fill:assessment status}} |
| SR-5 Acquisition strategies, tools and methods | {{fill:for example the supply chain terms of the acquisition security requirements standard in every contract in section 5.4, and review by the supply chain risk management team before award of a critical component or service}} | {{fill:responsibility}} | {{fill:status}} | {{fill:assessment status}} |
| SR-6 Supplier assessments and reviews (Moderate and High) | {{fill:for example each supplier in section 5.4 assessed on the supplier assessment questionnaire before award or renewal, and critical suppliers each year}} | {{fill:responsibility}} | {{fill:status}} | {{fill:assessment status}} |
| SR-8 Notification agreements | {{fill:for example compromise notification and assessment-result terms in each critical supplier's contract, with contacts in section 5.4}} | {{fill:responsibility}} | {{fill:status}} | {{fill:assessment status}} |
| SR-9 and SR-9(1) Tamper resistance and detection (High) | {{fill:for example tamper-evident seals and firmware integrity checks on the critical hardware in section 5.3, or "not applicable: not a High system"}} | {{fill:responsibility}} | {{fill:status}} | {{fill:assessment status}} |
| SR-10 Inspection of systems or components | {{fill:which components are inspected, when, and where results are recorded}} | {{fill:responsibility}} | {{fill:status}} | {{fill:assessment status}} |
| SR-11, SR-11(1) and SR-11(2) Component authenticity | {{fill:for example purchase from authorized sources only, signature or hash checks on software, anti-counterfeit training for the staff who receive and repair components, configuration control during repair}} | {{fill:responsibility}} | {{fill:status}} | {{fill:assessment status}} |
| SR-12 Component disposal | {{fill:for example sanitization under MP-6 and certified destruction by the contracted provider, recorded in the media sanitization record}} | {{fill:responsibility}} | {{fill:status}} | {{fill:assessment status}} |
| Related controls in other families: SA-4, SA-9, MA-2, PE-16, CM-8, RA-3(1), RA-9 | {{fill:how each supports supply chain risk management for this system, or a reference to its implementation in the system security plan}} | {{fill:responsibility}} | {{fill:status}} | {{fill:assessment status}} |

:::guidance
For each control, describe how it is or will be implemented for this system, name the policy or common control that provides it, and record any tailoring. SP 800-18 Rev. 2's outline example uses the same implementation and assessment status values as the system security plan: planned, partially implemented or fully implemented; and satisfied or other than satisfied, with the assessment date and report, and the POA&M item for anything other than satisfied. Keep the details here and in the system security plan consistent; the system security plan can refer to this section.
:::

### 7.4 Supply chain risks and their responses

| Risk | Source (assessment, notification, inspection or other) | Rating | Response (accept, mitigate, transfer or avoid) | Justification for the measures taken | Tracked in |
| --- | --- | --- | --- | --- | --- |
| {{fill:risk}} | {{fill:source and date}} | {{fill:rating, on the organization's scale}} | {{fill:response and the measures}} | {{fill:why these measures are enough, given the risk tolerance in section 2.2}} | {{fill:risk register or POA&M item}} |

- A supply chain risk above the tolerance in section 2.2 shall be mitigated, avoided or transferred, or accepted by the authorizing official, and the decision shall be recorded in this table. (SR-2a)

## 8. Roles

| Role | Name | Organizational unit | Business phone | Business email | Responsibilities under this plan |
| --- | --- | --- | --- | --- | --- |
| Authorizing official, and designated representative | {{fill:names}} | {{fill:unit}} | {{fill:phone}} | {{fill:email}} | Approves this plan and its significant changes; accepts supply chain risks above the tolerance |
| {{org:system-owner}} | {{fill:name}} | {{fill:unit}} | {{fill:phone}} | {{fill:email}} | Owns, reviews and protects this plan; keeps sections 5.3 and 5.4 current |
| Supply chain risk management team representative | {{fill:name}} | {{fill:unit}} | {{fill:phone}} | {{fill:email}} | Runs supplier assessments, reviews acquisitions before award, coordinates supplier notifications (SR-2(1)) |
| {{org:ciso}} | {{fill:name}} | {{fill:unit}} | {{fill:phone}} | {{fill:email}} | Owns the Supply Chain Risk Management Policy and the common supply chain controls |
| Procurement office or contracting officer | {{fill:name}} | {{fill:unit}} | {{fill:phone}} | {{fill:email}} | Puts the supply chain terms into each solicitation and contract |
| System security officer | {{fill:name}} | {{fill:unit}} | {{fill:phone}} | {{fill:email}} | Tracks supply chain weaknesses; checks the controls in section 7.3 |
| Common control provider | {{fill:name}} | {{fill:unit}} | {{fill:phone}} | {{fill:email}} | Provides the inherited supply chain controls |
| Information owner | {{fill:name}} | {{fill:unit}} | {{fill:phone}} | {{fill:email}} | Advises on the impact of a supplier's access to the information |
| Legal counsel | {{fill:name}} | {{fill:unit}} | {{fill:phone}} | {{fill:email}} | Advises on contract terms, ownership concerns and exclusions |
| {{fill:supplier and vendor contacts, engineering leads and service providers}} | {{fill:name}} | {{fill:organization}} | {{fill:phone}} | {{fill:email}} | {{fill:role}} |

Use business contact information only, not personal phone numbers.

**Supplier governance.** {{fill:how the system's key supplier relationships are managed: who manages each, the performance and compliance measures in the contracts, how often they are reviewed, and how problems are escalated}}

## 9. Contingencies and emergencies

When a component or service is needed urgently for mission continuity and the normal supply chain review cannot be completed in time, {{fill:the role that may approve an exception, for example the chief information officer}} may approve an abbreviated procedure. During an emergency, advice is available from:

| Subject | Contact | Business phone | Business email |
| --- | --- | --- | --- |
| Supply chain risk management | {{fill:name}} | {{fill:phone}} | {{fill:email}} |
| Acquisition | {{fill:name}} | {{fill:phone}} | {{fill:email}} |
| Legal | {{fill:name}} | {{fill:phone}} | {{fill:email}} |

- Even under the abbreviated procedure, components shall be bought from the original manufacturer or an authorized distributor or reseller where one can supply in time, and inspected under SR-10 before they are connected to the system. (SR-11a, SR-10)
- Each emergency acquisition shall be recorded, and its supplier assessed and the risk recorded in section 7.4 within {{fill:time, for example 30 days}}. (SR-6, SR-2a)

:::guidance
SP 800-161 Rev. 1 section D.3.1.9 notes that buying outside the normal supply chain process introduces operational risk, and suggests describing abbreviated procedures and the experts who can advise without a formal tasking. The two statements above keep the most important protections in place during an emergency.
:::

## 10. Related laws, regulations and policies

- The Supply Chain Risk Management Policy and the supply chain risk management strategy (section 1)
- The [acquisition security requirements](/templates/standards/acquisition-security-requirements/) standard, whose supply chain terms (section 4.5) go into the system's contracts
- {{fill:other laws, regulations, contract requirements and organizational policies that set supply chain requirements for the system}}

**Prohibited and restricted suppliers and products.** {{fill:suppliers or products that law, a regulatory exclusion, or organizational or system policy prohibits or restricts for this system, and where the current list is kept}}

:::guidance
SP 800-18 Rev. 2 says the plan identifies suppliers or products that are prohibited by law, subject to regulatory exclusions, or constrained by organization- or system-specific policies. Keep the list current, and check new purchases and existing components against it.
:::

:::federal
[OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.c(4), requires agencies to develop supply chain risk management plans as described in NIST SP 800-161 to ensure the integrity, security, resilience and quality of information systems. Under the Federal Acquisition Supply Chain Security Act of 2018, [41 U.S.C. § 1326](https://www.govinfo.gov/link/uscode/41/1326?link-type=html)(a) and (b) makes the head of each executive agency responsible for assessing the supply chain risk posed by the acquisition and use of covered articles and for integrating supply chain risk management practices throughout the life cycle of the system, component, service or asset. [41 U.S.C. § 1323](https://www.govinfo.gov/link/uscode/41/1323?link-type=html)(c)(5) and (7) provide for orders that exclude sources or covered articles from executive agency procurement actions or require their removal from executive agency information systems, and require executive agencies to comply with them; [41 CFR 201-1.304](https://www.ecfr.gov/current/title-41/section-201-1.304) repeats the duty and sets out how an agency requests an exception. The subchapter terminates on December 31, 2033 ([41 U.S.C. § 1328](https://www.govinfo.gov/link/uscode/41/1328?link-type=html)). Statute checked in the United States Code, 2024 edition, and regulation in the eCFR, as of October 2026.

- The {{org:system-owner}} shall develop and maintain this plan as NIST SP 800-161 Rev. 1 describes, as OMB Circular A-130, Appendix I, section 4.c(4), requires. (SR-2a)
- The list of prohibited and restricted suppliers and products in this section shall include each exclusion and removal order issued under 41 U.S.C. § 1323(c)(5) that applies to the agency, and the {{org:system-owner}} shall remove any covered article such an order names from the system, as 41 U.S.C. § 1323(c)(7) and 41 CFR 201-1.304 require. (SR-5)

:::

## 11. Revision and maintenance

- The {{org:system-owner}} shall review and update this plan {{param:sr-02_odp.02}}, and whenever threat, organizational or environmental changes require it. (SR-2b)
- Changes that call for a review include a change in a critical supplier, such as an ownership change, merger or acquisition, or a geopolitical or environmental event that affects it; a review of a supplier's foreign ownership, control or influence; an attack on or breach at a supplier that affects its ability to support the system; a new, renewed, changed or ended information exchange agreement; and a change to the organization's supply chain risk management strategy or the inherited supply chain controls.
- Each review checks that the plan is still consistent with the organization's supply chain risk management strategy and policy.
- The {{org:system-owner}} shall protect this plan from unauthorized disclosure and modification by marking it, storing it in {{fill:location with restricted access}} where only {{fill:roles}} can read it and only {{fill:roles}} can change it, and controlling changes to it. (SR-2c)

:::guidance
SP 800-161 Rev. 1 section D.3.1.11 has the plan reviewed at least at life cycle milestones, gate reviews and significant contracting activities, and checked against higher-level plans. The change events above are from SP 800-18 Rev. 2 (section 4.7), which lists them among the reasons to update system plans. Changes to this plan can go through the system's change control.
:::

Review log:

| Date | Reviewed by | Result and notes |
| --- | --- | --- |
| {{fill:date}} | {{fill:name and title}} | {{fill:for example no change needed, or the changes made}} |

Change log:

| Version | Date | Description of change | Sections affected | Changed by | Approved by |
| --- | --- | --- | --- | --- | --- |
| {{fill:version}} | {{fill:date}} | {{fill:description}} | {{fill:sections}} | {{fill:name, title and organization}} | {{fill:name and title}} |

## 12. Acronyms and glossary

| Term | Meaning |
| --- | --- |
| Critical component or service | A component or service the criticality analysis (RA-9) identifies as critical to the system's mission or business functions |
| Supplier | An organization that provides the system with a product or service, including manufacturers, developers, vendors, integrators, service providers and their own suppliers |
| {{fill:term}} | {{fill:meaning}} |

## 13. Attachments

| Attachment | Location |
| --- | --- |
| Contracts and agreements with the suppliers in section 5.4 | {{fill:location}} |
| Supplier assessments, on the [supplier assessment questionnaire](/templates/forms/supplier-assessment-questionnaire/) (SR-6) | {{fill:location}} |
| Supply chain risk assessment (RA-3(1)) and criticality analysis (RA-9) | {{fill:location}} |
| Component-specific risk assessments | {{fill:location, or "none"}} |
| Supply chain risk management plans of contractors or suppliers | {{fill:location, or "none"}} |
| {{fill:other artifacts referenced in section 7.3}} | {{fill:location}} |
