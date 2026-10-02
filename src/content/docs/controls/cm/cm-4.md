---
title: 'CM-4 Impact Analyses'
description: 'NIST SP 800-53 Rev. 5 control CM-4, Impact Analyses: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CM-4 Impact Analyses'
  order: 4
control:
  id: CM-4
  family: CM
  baselines: [Low, Moderate, High, Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | 2 (2 in a baseline) |

**Related controls:** [CA-7](/controls/ca/ca-7/), [CM-3](/controls/cm/cm-3/), [CM-8](/controls/cm/cm-8/), [CM-9](/controls/cm/cm-9/), [MA-2](/controls/ma/ma-2/), [RA-3](/controls/ra/ra-3/), [RA-5](/controls/ra/ra-5/), [RA-8](/controls/ra/ra-8/), [SA-5](/controls/sa/sa-5/), [SA-8](/controls/sa/sa-8/), [SA-10](/controls/sa/sa-10/), [SI-2](/controls/si/si-2/)

## Control statement

Analyze changes to the system to determine potential security and privacy impacts prior to change implementation.

<details>
<summary>NIST discussion</summary>

Organizational personnel with security or privacy responsibilities conduct impact analyses. Individuals conducting impact analyses possess the necessary skills and technical expertise to analyze the changes to systems as well as the security or privacy ramifications. Impact analyses include reviewing security and privacy plans, policies, and procedures to understand control requirements; reviewing system design documentation and operational procedures to understand control implementation and how specific system changes might affect the controls; reviewing the impact of changes on organizational supply chain partners with stakeholders; and determining how potential changes to a system create new risks to the privacy of individuals and the ability of implemented controls to mitigate those risks. Impact analyses also include risk assessments to understand the impact of the changes and determine if additional controls are required.

</details>

## Control enhancements

<a id="cm-4.1"></a>

### CM-4(1) Separate Test Environments

*Baselines: High*

Analyze changes to the system in a separate test environment before implementation in an operational environment, looking for security and privacy impacts due to flaws, weaknesses, incompatibility, or intentional malice.

<details>
<summary>Discussion and assessment objectives for CM-4(1)</summary>

A separate test environment requires an environment that is physically or logically separate and distinct from the operational environment. The separation is sufficient to ensure that activities in the test environment do not impact activities in the operational environment and that information in the operational environment is not inadvertently transmitted to the test environment. Separate environments can be achieved by physical or logical means. If physically separate test environments are not implemented, organizations determine the strength of mechanism required when implementing logical separation.

Determine if:

- **CM-04(01)[01]** changes to the system are analyzed in a separate test environment before implementation in an operational environment;
- **CM-04(01)[02]** changes to the system are analyzed for security impacts due to flaws;
- **CM-04(01)[03]** changes to the system are analyzed for privacy impacts due to flaws;
- **CM-04(01)[04]** changes to the system are analyzed for security impacts due to weaknesses;
- **CM-04(01)[05]** changes to the system are analyzed for privacy impacts due to weaknesses;
- **CM-04(01)[06]** changes to the system are analyzed for security impacts due to incompatibility;
- **CM-04(01)[07]** changes to the system are analyzed for privacy impacts due to incompatibility;
- **CM-04(01)[08]** changes to the system are analyzed for security impacts due to intentional malice;
- **CM-04(01)[09]** changes to the system are analyzed for privacy impacts due to intentional malice.

**Examine:** Configuration management policy; procedures addressing security impact analyses for changes to the system; procedures addressing privacy impact analyses for changes to the system; configuration management plan; security impact analysis documentation; privacy impact analysis documentation; privacy impact assessment; privacy risk assessment documentation; analysis tools and associated outputs system design documentation; system architecture and configuration documentation; change control records; procedures addressing the authority to test with PII; system audit records; documentation of separate test and operational environments; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibility for conducting security and privacy impact analyses; organizational personnel with information security and privacy responsibilities; system/network administrators; members of change control board or similar.

**Test:** Organizational processes for security and privacy impact analyses; mechanisms supporting and/or implementing security and privacy impact analyses of changes.

</details>

<a id="cm-4.2"></a>

### CM-4(2) Verification of Controls

*Baselines: Moderate, High*

After system changes, verify that the impacted controls are implemented correctly, operating as intended, and producing the desired outcome with regard to meeting the security and privacy requirements for the system.

<details>
<summary>Discussion and assessment objectives for CM-4(2)</summary>

Implementation in this context refers to installing changed code in the operational system that may have an impact on security or privacy controls.

Determine if:

- **CM-04(02)[01]** the impacted controls are implemented correctly with regard to meeting the security requirements for the system after system changes;
- **CM-04(02)[02]** the impacted controls are implemented correctly with regard to meeting the privacy requirements for the system after system changes;
- **CM-04(02)[03]** the impacted controls are operating as intended with regard to meeting the security requirements for the system after system changes;
- **CM-04(02)[04]** the impacted controls are operating as intended with regard to meeting the privacy requirements for the system after system changes;
- **CM-04(02)[05]** the impacted controls are producing the desired outcome with regard to meeting the security requirements for the system after system changes;
- **CM-04(02)[06]** the impacted controls are producing the desired outcome with regard to meeting the privacy requirements for the system after system changes.

**Examine:** Configuration management policy; procedures addressing security impact analyses for changes to the system; procedures addressing privacy impact analyses for changes to the system; privacy risk assessment documentation; configuration management plan; security and privacy impact analysis documentation; privacy impact assessment; analysis tools and associated outputs; change control records; control assessment results; system audit records; system component inventory; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibility for conducting security and privacy impact analyses; organizational personnel with information security and privacy responsibilities; system/network administrators; security and privacy assessors.

**Test:** Organizational processes for security and privacy impact analyses; mechanisms supporting and/or implementing security and privacy impact analyses of changes.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CM-4</summary>

Determine if:

- **CM-04[01]** changes to the system are analyzed to determine potential security impacts prior to change implementation;
- **CM-04[02]** changes to the system are analyzed to determine potential privacy impacts prior to change implementation.

**Examine:** Configuration management policy; procedures addressing security impact analyses for changes to the system; procedures addressing privacy impact analyses for changes to the system; configuration management plan; security impact analysis documentation; privacy impact analysis documentation; privacy impact assessment; privacy risk assessment documentation, system design documentation; analysis tools and associated outputs; change control records; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibility for conducting security impact analyses; organizational personnel with responsibility for conducting privacy impact analyses; organizational personnel with information security and privacy responsibilities; system developer; system/network administrators; members of change control board or similar.

**Test:** Organizational processes for security impact analyses; organizational processes for privacy impact analyses.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

CM-4 asks you to analyze each change for its security and privacy impact before it is made. The analysis is what gives change control ([CM-3](/controls/cm/cm-3/)) its security value: the board approves or rejects a change knowing what it does to the system's controls and risks. NIST's CM-4 discussion says people with security or privacy responsibilities, and the skills to understand the change, carry out the analysis. It includes reviewing the security and privacy plans, policies and procedures; reviewing design documentation and operating procedures to see how the change affects the controls; reviewing the impact on supply chain partners; and deciding how the change creates new privacy risks and whether the controls still address them. It also includes a risk assessment to decide whether more controls are needed.

**Common implementations.** An impact analysis section in every change record, completed before the board decides. The [change request form](/templates/forms/change-request-form/) carries it as Part B, with the analyst's name and date, followed by the significant-change decision. SP 800-128 ([August 2011, with updates as of October 10, 2019](https://csrc.nist.gov/pubs/sp/800/128/upd1/final)) gives five steps, in section 3.3.3, and a template in Appendix I:

1. Understand the change, for example with a high-level architecture overview of how it will be made.
2. Identify vulnerabilities, such as known vulnerabilities in a product being added.
3. Assess the risks, and decide whether to accept, avoid or reduce them.
4. Assess the impact on existing controls, including on components that depend on the one being changed.
5. Plan safeguards and countermeasures where the risk is not acceptable, or rework the change.

Scale the depth to the change. A preapproved standard change is analyzed once, when the class is approved; a new component, a new interface or a new place where data is stored gets a full analysis. Changes that affect personal information get a privacy review and an update to the [privacy impact assessment](/templates/reports/privacy-impact-assessment/), as the PT-3 clause of the [Personally Identifiable Information Processing and Transparency policy](/templates/policies/pt/) expects. A significant change, one likely to affect the security or privacy state of the system, also triggers a targeted assessment and an authorizing official decision on reauthorization, as the [Continuous Monitoring Strategy](/templates/plans/continuous-monitoring-strategy/) sets out.

**Organization-defined parameters.** CM-4, CM-4(1) and CM-4(2) have none. In the [Configuration Management policy](/templates/policies/cm/), the system owner analyzes changes before they are made, and, at Moderate, verifies the affected controls afterward.

**Evidence assessors ask for.**

- The procedure for impact analysis, and who performs it
- Completed analyses for a sample of changes, dated before approval and implementation
- Privacy reviews for changes that affect personal information, and the updated privacy impact assessment
- For Moderate, the post-change verification results for the sampled changes (CM-4(2))
- For High, the test environment and evidence that changes were analyzed there first (CM-4(1))

**Inheritance.** CM-4 is usually system-specific: the analysis depends on the system's own design and controls. A common control provider analyzes changes to what it provides, and tells the systems that inherit from it when a change affects them.

**Common findings.**

- An impact analysis field completed with "none" or "low" for every change.
- Analyses dated after the change was made.
- Analysis done by the person making the change, with no security or privacy review.
- Changes that affected personal information with no privacy review.
- A significant change treated as routine, so the authorizing official never heard about it.

**Enhancements in the Moderate baseline.** [CM-4(2)](#cm-4.2) verification of controls, which is also in High: after a change, confirm that the affected controls are implemented correctly, operating as intended and producing the desired outcome. Typical methods are a configuration compliance scan, a vulnerability scan and a targeted test of the affected controls, compared with the results before the change. High adds [CM-4(1)](#cm-4.1) separate test environments. NIST's CM-4(1) discussion allows physical or logical separation, as long as test activity cannot affect operations and operational information is not moved into the test environment by accident, so keep production data out of test environments unless it is protected to the same level. CM-4 itself is also in the Privacy baseline, so it applies to any system that processes personally identifiable information.
