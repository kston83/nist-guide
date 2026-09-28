---
title: 'SR-9 Tamper Resistance and Detection'
description: 'NIST SP 800-53 Rev. 5 control SR-9, Tamper Resistance and Detection: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SR-9 Tamper Resistance and Detection'
  order: 9
control:
  id: SR-9
  family: SR
  baselines: [High]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| High | Organization | 1 (1 in a baseline) |

**Related controls:** [PE-3](/controls/pe/pe-3/), [PM-30](/controls/pm/pm-30/), [SA-15](/controls/sa/sa-15/), [SI-4](/controls/si/si-4/), [SI-7](/controls/si/si-7/), [SR-3](/controls/sr/sr-3/), [SR-4](/controls/sr/sr-4/), [SR-5](/controls/sr/sr-5/), [SR-10](/controls/sr/sr-10/), [SR-11](/controls/sr/sr-11/)

## Control statement

Implement a tamper protection program for the system, system component, or system service.

<details>
<summary>NIST discussion</summary>

Anti-tamper technologies, tools, and techniques provide a level of protection for systems, system components, and services against many threats, including reverse engineering, modification, and substitution. Strong identification combined with tamper resistance and/or tamper detection is essential to protecting systems and components during distribution and when in use.

</details>

## Control enhancements

<a id="sr-9.1"></a>

### SR-9(1) Multiple Stages of System Development Life Cycle

*Baselines: High*

Employ anti-tamper technologies, tools, and techniques throughout the system development life cycle.

<details>
<summary>Discussion and assessment objectives for SR-9(1)</summary>

The system development life cycle includes research and development, design, manufacturing, acquisition, delivery, integration, operations and maintenance, and disposal. Organizations use a combination of hardware and software techniques for tamper resistance and detection. Organizations use obfuscation and self-checking to make reverse engineering and modifications more difficult, time-consuming, and expensive for adversaries. The customization of systems and system components can make substitutions easier to detect and therefore limit damage.

Determine if anti-tamper technologies, tools, and techniques are employed throughout the system development life cycle.

**Examine:** Supply chain risk management policy and procedures; supply chain risk management plan; system and services acquisition policy; procedures addressing tamper resistance and detection; tamper protection program documentation; tamper protection tools and techniques documentation; tamper resistance and detection tools (technologies) and techniques documentation; system development life cycle documentation; procedures addressing supply chain protection; system development life cycle procedures; acquisition documentation; service level agreements; acquisition contracts for the system, system component, or system service; inter-organizational agreements and procedures; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system and services acquisition responsibilities; organizational personnel with information security responsibilities; organizational personnel with supply chain risk management responsibilities; organizational personnel with SDLC responsibilities.

**Test:** Organizational processes for employing anti-tamper technologies; mechanisms supporting and/or implementing anti-tamper technologies.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SR-9</summary>

Determine if a tamper protection program is implemented for the system, system component, or system service.

**Examine:** Supply chain risk management policy and procedures; supply chain risk management plan; system and services acquisition policy; procedures addressing supply chain protection; procedures addressing tamper resistance and detection; tamper protection program documentation; tamper protection tools and techniques documentation; tamper resistance and detection tools and techniques documentation; acquisition documentation; service level agreements; acquisition contracts for the system, system component, or system service; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with tamper protection program responsibilities; organizational personnel with information security responsibilities; organizational personnel with supply chain risk management responsibilities.

**Test:** Organizational processes for the implementation of the tamper protection program; mechanisms supporting and/or implementing the tamper protection program.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
