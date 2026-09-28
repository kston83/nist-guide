---
title: 'IR-5 Incident Monitoring'
description: 'NIST SP 800-53 Rev. 5 control IR-5, Incident Monitoring: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'IR-5 Incident Monitoring'
  order: 5
control:
  id: IR-5
  family: IR
  baselines: [Low, Moderate, High, Privacy]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | 1 (1 in a baseline) |

**Related controls:** [AU-6](/controls/au/au-6/), [AU-7](/controls/au/au-7/), [IR-4](/controls/ir/ir-4/), [IR-6](/controls/ir/ir-6/), [IR-8](/controls/ir/ir-8/), [PE-6](/controls/pe/pe-6/), [PM-5](/controls/pm/pm-5/), [SC-5](/controls/sc/sc-5/), [SC-7](/controls/sc/sc-7/), [SI-3](/controls/si/si-3/), [SI-4](/controls/si/si-4/), [SI-7](/controls/si/si-7/)

## Control statement

Track and document incidents.

<details>
<summary>NIST discussion</summary>

Documenting incidents includes maintaining records about each incident, the status of the incident, and other pertinent information necessary for forensics as well as evaluating incident details, trends, and handling. Incident information can be obtained from a variety of sources, including network monitoring, incident reports, incident response teams, user complaints, supply chain partners, audit monitoring, physical access monitoring, and user and administrator reports. IR-4 provides information on the types of incidents that are appropriate for monitoring.

</details>

## Control enhancements

<a id="ir-5.1"></a>

### IR-5(1) Automated Tracking, Data Collection, and Analysis

*Baselines: High*

Track incidents and collect and analyze incident information using [Assignment: organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for IR-5(1)</summary>

Automated mechanisms for tracking incidents and collecting and analyzing incident information include Computer Incident Response Centers or other electronic databases of incidents and network monitoring devices.

Determine if:

- **IR-05(01)[01]** incidents are tracked using [Assignment: organization-defined automated mechanisms];
- **IR-05(01)[02]** incident information is collected using [Assignment: organization-defined automated mechanisms];
- **IR-05(01)[03]** incident information is analyzed using [Assignment: organization-defined automated mechanisms].

**Examine:** Incident response policy; procedures addressing incident monitoring; incident response records and documentation; system security plan; incident response plan; other relevant documents or records.

**Interview:** Organizational personnel with incident monitoring responsibilities; organizational personnel with information security responsibilities.

**Test:** Incident monitoring capability for the organization; automated mechanisms supporting and/or implementing the tracking and documenting of system security incidents.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for IR-5</summary>

Determine if:

- **IR-05[01]** incidents are tracked;
- **IR-05[02]** incidents are documented.

**Examine:** Incident response policy; procedures addressing incident monitoring; incident response records and documentation; incident response plan; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with incident monitoring responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Incident monitoring capability for the organization; mechanisms supporting and/or implementing the tracking and documenting of system security incidents.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
