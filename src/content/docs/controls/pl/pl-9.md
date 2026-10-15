---
title: 'PL-9 Central Management'
description: 'NIST SP 800-53 Rev. 5 control PL-9, Central Management: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PL-9 Central Management'
  order: 9
control:
  id: PL-9
  family: PL
  baselines: [Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Privacy | Organization | None |

**Related controls:** [PL-8](/controls/pl/pl-8/), [PM-9](/controls/pm/pm-9/)

## Control statement

Centrally manage [Assignment: organization-defined controls and related processes].

<details>
<summary>NIST discussion</summary>

Central management refers to organization-wide management and implementation of selected controls and processes. This includes planning, implementing, assessing, authorizing, and monitoring the organization-defined, centrally managed controls and processes. As the central management of controls is generally associated with the concept of common (inherited) controls, such management promotes and facilitates standardization of control implementations and management and the judicious use of organizational resources. Centrally managed controls and processes may also meet independence requirements for assessments in support of initial and ongoing authorizations to operate and as part of organizational continuous monitoring.

Automated tools (e.g., security information and event management tools or enterprise security monitoring and management tools) can improve the accuracy, consistency, and availability of information associated with centrally managed controls and processes. Automation can also provide data aggregation and data correlation capabilities; alerting mechanisms; and dashboards to support risk-based decision-making within the organization.

As part of the control selection processes, organizations determine the controls that may be suitable for central management based on resources and capabilities. It is not always possible to centrally manage every aspect of a control. In such cases, the control can be treated as a hybrid control with the control managed and implemented centrally or at the system level. The controls and control enhancements that are candidates for full or partial central management include but are not limited to: AC-2(1), AC-2(2), AC-2(3), AC-2(4), AC-4(all), AC-17(1), AC-17(2), AC-17(3), AC-17(9), AC-18(1), AC-18(3), AC-18(4), AC-18(5), AC-19(4), AC-22, AC-23, AT-2(1), AT-2(2), AT-3(1), AT-3(2), AT-3(3), AT-4, AU-3, AU-6(1), AU-6(3), AU-6(5), AU-6(6), AU-6(9), AU-7(1), AU-7(2), AU-11, AU-13, AU-16, CA-2(1), CA-2(2), CA-2(3), CA-3(1), CA-3(2), CA-3(3), CA-7(1), CA-9, CM-2(2), CM-3(1), CM-3(4), CM-4, CM-6, CM-6(1), CM-7(2), CM-7(4), CM-7(5), CM-8(all), CM-9(1), CM-10, CM-11, CP-7(all), CP-8(all), SC-43, SI-2, SI-3, SI-4(all), SI-7, SI-8.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PL-9</summary>

Determine if [Assignment: organization-defined controls and related processes] are centrally managed.

**Examine:** Security and privacy planning policy; procedures addressing security and privacy plan development and implementation; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with security and privacy planning and plan implementation responsibilities; organizational personnel with responsibilities for planning/implementing central management of controls and related processes; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for the central management of controls and related processes; mechanisms supporting and/or implementing central management of controls and related processes.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PL-9 asks you to centrally manage the controls and related processes you name. NIST's PL-9 discussion defines central management as the organization-wide management and implementation of selected controls and processes: planning, implementing, assessing, authorizing and monitoring them. PL-9 is in the SP 800-53B Privacy baseline only.

The discussion ties central management to common (inherited) controls. It standardizes how controls are implemented, uses resources well, and can meet independence requirements for assessments. Not every part of a control can be managed centrally; when it cannot, the control is a hybrid, managed partly at the organization and partly by the system. The discussion's list of candidates is mostly security controls, such as AC-2(1) to AC-2(4), AU-6(1), CM-8, SI-2, SI-3 and SI-4(all). Because the Privacy baseline is what selects PL-9, the PL-9 clause applies it to the privacy program's controls. Security controls the organization provides centrally are already listed as common controls in the Information Security Program Plan ([PM-1](/controls/pm/pm-1/)); name them in the parameter too if you want PL-9 to cover them.

SP 800-37 Rev. 2, task P-5, has the organization identify, document and publish its common controls before systems select theirs. It says the senior agency official for privacy "is responsible for designating common privacy controls and for documenting them in the organization's privacy program plan". The common control provider implements, assesses and monitors them. System owners are told which controls are available, and do not assess the common controls their systems inherit.

**Common implementations.** The PL-9 clause of the [Planning policy](/templates/policies/pl/) (Privacy variant) has the senior privacy official centrally manage the privacy controls and processes the privacy program provides for all systems, and record them in the privacy program plan so system privacy plans can inherit them. In practice:

- A list of the centrally managed privacy controls, each with its provider, the systems that inherit it, and whether it is inherited fully or in part. The common controls table in section 7 of the [Information Security Program Plan](/templates/plans/information-security-program-plan/) has these columns; [PM-18](/controls/pm/pm-18/) maps the privacy program plan to that plan's sections.
- The processes the privacy office runs once for everyone: privacy notices ([PT-5](/controls/pt/pt-5/)), the privacy impact assessment method and its review ([RA-8](/controls/ra/ra-8/)), complaint handling ([PM-26](/controls/pm/pm-26/)), breach response ([IR-8(1)](/controls/ir/ir-8/#ir-8.1)) and role-based privacy training ([AT-3(5)](/controls/at/at-3/#at-3.5)).
- In each system's privacy plan (section 11 of the [system security plan](/templates/plans/system-security-plan/), or a separate plan), the responsibility for each privacy control marked as system-specific, common or hybrid, as section 10 of that plan records it, with the system's own part of each hybrid control described.
- Tools that keep the central view current. NIST's discussion names security information and event management and enterprise monitoring and management tools, for aggregation, correlation, alerting and dashboards.

**Organization-defined parameters.** Typical value, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Controls and related processes centrally managed | The privacy controls and processes the privacy program provides for all systems, such as privacy notices, privacy impact assessments, complaint handling and breach response |

This matches the PL-9 clause. Write the actual list in the privacy program plan; the parameter can point to it.

**Evidence assessors ask for.**

- The privacy program plan's list of centrally managed controls, with each provider and the systems that inherit it
- A sample of system privacy plans that mark those controls as inherited or hybrid, with the system's part described
- Assessment results for the centrally managed controls, from the provider's assessments rather than each system's
- Records that the central processes run, such as approved notices, reviewed privacy impact assessments and answered complaints

**Inheritance.** PL-9 is carried out by the organization: the senior privacy official decides what is managed centrally and the privacy office runs it. It is what makes inheritance of privacy controls traceable. Each system still documents which controls it inherits and implements its share of every hybrid control.

**Common findings.**

- Controls marked as inherited in a system's plan that the program plan does not list, or that have no named provider.
- Hybrid controls with no split recorded, so neither the provider nor the system covers the gap.
- Common controls never assessed, because each system assumed the provider did it.
- A list of common controls that was never shared with system owners, so systems implement the same control again.

**Enhancements.** PL-9 has no enhancements.

**Federal systems** (as of October 2026). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.e(5), requires the Senior Agency Official for Privacy to "designate which privacy controls will be treated as program management, common, information system-specific, and hybrid privacy controls at the agency", and section 4.e(1) has the privacy program plan describe the program management and common controls in place or planned. Appendix II, section 5.i (the Select step), adds that privacy controls designated as common controls are, in most cases, managed by an agency program or official other than the system owner, and says: "In all cases, the management of privacy controls shall be subject to the coordination and oversight of the SAOP". Under the Implement step, every privacy control selected for a system is documented in the system's privacy plan, which may be separate from the security plan or combined with it.
