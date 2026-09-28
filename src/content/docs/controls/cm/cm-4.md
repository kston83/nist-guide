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
---

<!-- nist:start -->
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
<!-- nist:end -->

<!-- guidance: write below this line -->
