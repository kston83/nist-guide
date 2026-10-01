---
title: 'MA-3 Maintenance Tools'
description: 'NIST SP 800-53 Rev. 5 control MA-3, Maintenance Tools: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'MA-3 Maintenance Tools'
  order: 3
control:
  id: MA-3
  family: MA
  baselines: [Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | Organization | 6 (3 in a baseline) |

**Related controls:** [MA-2](/controls/ma/ma-2/), [PE-16](/controls/pe/pe-16/)

## Control statement

- **a.** Approve, control, and monitor the use of system maintenance tools; and
- **b.** Review previously approved system maintenance tools [Assignment: organization-defined frequency].

<details>
<summary>NIST discussion</summary>

Approving, controlling, monitoring, and reviewing maintenance tools address security-related issues associated with maintenance tools that are not within system authorization boundaries and are used specifically for diagnostic and repair actions on organizational systems. Organizations have flexibility in determining roles for the approval of maintenance tools and how that approval is documented. A periodic review of maintenance tools facilitates the withdrawal of approval for outdated, unsupported, irrelevant, or no-longer-used tools. Maintenance tools can include hardware, software, and firmware items and may be pre-installed, brought in with maintenance personnel on media, cloud-based, or downloaded from a website. Such tools can be vehicles for transporting malicious code, either intentionally or unintentionally, into a facility and subsequently into systems. Maintenance tools can include hardware and software diagnostic test equipment and packet sniffers. The hardware and software components that support maintenance and are a part of the system (including the software implementing utilities such as "ping," "ls," "ipconfig," or the hardware and software implementing the monitoring port of an Ethernet switch) are not addressed by maintenance tools.

</details>

## Control enhancements

<a id="ma-3.1"></a>

### MA-3(1) Inspect Tools

*Baselines: Moderate, High*

Inspect the maintenance tools used by maintenance personnel for improper or unauthorized modifications.

<details>
<summary>Discussion and assessment objectives for MA-3(1)</summary>

Maintenance tools can be directly brought into a facility by maintenance personnel or downloaded from a vendor’s website. If, upon inspection of the maintenance tools, organizations determine that the tools have been modified in an improper manner or the tools contain malicious code, the incident is handled consistent with organizational policies and procedures for incident handling.

Determine if maintenance tools used by maintenance personnel are inspected for improper or unauthorized modifications.

**Examine:** Maintenance policy; procedures addressing system maintenance tools; system maintenance tools and associated documentation; maintenance tool inspection records; maintenance records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for inspecting maintenance tools; mechanisms supporting and/or implementing the inspection of maintenance tools.

</details>

<a id="ma-3.2"></a>

### MA-3(2) Inspect Media

*Baselines: Moderate, High*

Check media containing diagnostic and test programs for malicious code before the media are used in the system.

<details>
<summary>Discussion and assessment objectives for MA-3(2)</summary>

If, upon inspection of media containing maintenance, diagnostic, and test programs, organizations determine that the media contains malicious code, the incident is handled consistent with organizational incident handling policies and procedures.

Determine if media containing diagnostic and test programs are checked for malicious code before the media are used in the system.

**Examine:** Maintenance policy; procedures addressing system maintenance tools; system maintenance tools and associated documentation; maintenance records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational process for inspecting media for malicious code; mechanisms supporting and/or implementing the inspection of media used for maintenance.

</details>

<a id="ma-3.3"></a>

### MA-3(3) Prevent Unauthorized Removal

*Baselines: Moderate, High*

Prevent the removal of maintenance equipment containing organizational information by:

- **(a)** Verifying that there is no organizational information contained on the equipment;
- **(b)** Sanitizing or destroying the equipment;
- **(c)** Retaining the equipment within the facility; or
- **(d)** Obtaining an exemption from [Assignment: organization-defined personnel or roles] explicitly authorizing removal of the equipment from the facility.

<details>
<summary>Discussion and assessment objectives for MA-3(3)</summary>

Organizational information includes all information owned by organizations and any information provided to organizations for which the organizations serve as information stewards.

Determine if:

- **MA-03(03)(a)** the removal of maintenance equipment containing organizational information is prevented by verifying that there is no organizational information contained on the equipment; or
- **MA-03(03)(b)** the removal of maintenance equipment containing organizational information is prevented by sanitizing or destroying the equipment; or
- **MA-03(03)(c)** the removal of maintenance equipment containing organizational information is prevented by retaining the equipment within the facility; or
- **MA-03(03)(d)** the removal of maintenance equipment containing organizational information is prevented by obtaining an exemption from [Assignment: organization-defined personnel or roles] explicitly authorizing removal of the equipment from the facility.

**Examine:** Maintenance policy; procedures addressing system maintenance tools; system maintenance tools and associated documentation; maintenance records; equipment sanitization records; media sanitization records; exemptions for equipment removal; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; organizational personnel with information security responsibilities; organizational personnel responsible for media sanitization.

**Test:** Organizational process for preventing unauthorized removal of information; mechanisms supporting media sanitization or destruction of equipment; mechanisms supporting verification of media sanitization.

</details>

<a id="ma-3.4"></a>

### MA-3(4) Restricted Tool Use

*Baselines: Not in a baseline*

Restrict the use of maintenance tools to authorized personnel only.

<details>
<summary>Discussion and assessment objectives for MA-3(4)</summary>

Restricting the use of maintenance tools to only authorized personnel applies to systems that are used to carry out maintenance functions.

Determine if the use of maintenance tools is restricted to authorized personnel only.

**Examine:** Maintenance policy; procedures addressing system maintenance tools; system maintenance tools and associated documentation; list of personnel authorized to use maintenance tools; maintenance tool usage records; maintenance records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for restricting the use of maintenance tools; mechanisms supporting and/or implementing the restricted use of maintenance tools.

</details>

<a id="ma-3.5"></a>

### MA-3(5) Execution with Privilege

*Baselines: Not in a baseline*

Monitor the use of maintenance tools that execute with increased privilege.

<details>
<summary>Discussion and assessment objectives for MA-3(5)</summary>

Maintenance tools that execute with increased system privilege can result in unauthorized access to organizational information and assets that would otherwise be inaccessible.

Determine if the use of maintenance tools that execute with increased privilege is monitored.

**Examine:** Maintenance policy; procedures addressing system maintenance tools; system maintenance tools and associated documentation; list of personnel authorized to use maintenance tools; maintenance tool usage records; maintenance records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for restricting the use of maintenance tools; organizational process for monitoring maintenance tools and maintenance tool usage; mechanisms monitoring the use of maintenance tools.

</details>

<a id="ma-3.6"></a>

### MA-3(6) Software Updates and Patches

*Baselines: Not in a baseline*

Inspect maintenance tools to ensure the latest software updates and patches are installed.

<details>
<summary>Discussion and assessment objectives for MA-3(6)</summary>

Maintenance tools using outdated and/or unpatched software can provide a threat vector for adversaries and result in a significant vulnerability for organizations.

Determine if maintenance tools are inspected to ensure that the latest software updates and patches are installed.

**Examine:** Maintenance policy; procedures addressing system maintenance tools; system maintenance tools and associated documentation; list of personnel authorized to use maintenance tools; maintenance tool usage records; maintenance records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for inspecting maintenance tools; organizational processes for maintenance tools updates; mechanisms supporting and/or implementing the inspection of maintenance tools; mechanisms supporting and/or implementing maintenance tool updates..

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for MA-3</summary>

Determine if:

- **MA-03a.**
  - **MA-03a.[01]** the use of system maintenance tools is approved;
  - **MA-03a.[02]** the use of system maintenance tools is controlled;
  - **MA-03a.[03]** the use of system maintenance tools is monitored;
- **MA-03b.** previously approved system maintenance tools are reviewed [Assignment: organization-defined frequency].

**Examine:** Maintenance policy; procedures addressing system maintenance tools; system maintenance tools and associated documentation; maintenance records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for approving, controlling, and monitoring maintenance tools; mechanisms supporting and/or implementing the approval, control, and/or monitoring of maintenance tools.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

MA-3 asks you to approve, control and monitor the tools used to maintain the system, and to review the approved tools on a set schedule. Maintenance tools are the diagnostic and repair tools that are not part of the system: hardware and software diagnostic test equipment, packet sniffers, and vendor utilities that are pre-installed, brought in on media, cloud-based or downloaded. NIST's MA-3 discussion warns that they can carry malicious code into a facility and then into the system. It excludes utilities that are part of the system, such as `ping`, `ls` or `ipconfig`, or a switch's monitoring port.

**Common implementations.** The system owner keeps an approved maintenance tools list, in the [maintenance log](/templates/forms/maintenance-log/) or the configuration management database, naming each tool, its version and who owns it. Only approved tools are used, only by authorized maintenance personnel ([MA-5](/controls/ma/ma-5/)). Use is monitored by escorting or supervising the person and through the audit records of privileged tool use ([AU-2](/controls/au/au-2/)). A vendor's software tool is checked against the vendor's published hash or signature before each use, and diagnostic media are scanned on a workstation that is not connected to the system. The periodic review withdraws approval for tools that are outdated, unsupported, no longer needed or no longer used, which is the purpose NIST's discussion gives it.

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Review frequency for approved maintenance tools (b) | At least annually |
| Who can exempt maintenance equipment from the removal restrictions (MA-3(3)(d)) | The Chief Information Security Officer |

MA-3(1) and MA-3(2) have no parameters. In the [Maintenance policy](/templates/policies/ma/), the system owner approves each tool before it is used and records it on the approved list.

**Evidence assessors ask for.**

- The approved maintenance tools list, with approvals and the date of the last review
- Records showing tools were inspected before use, and media scanned (MA-3(1), MA-3(2))
- For a sample of maintenance records, the tools used, checked against the approved list
- Records of maintenance equipment that left the facility, showing which of the four MA-3(3) measures was used, and any written exemptions
- Maintenance contract terms that let the organization keep, sanitize or destroy equipment or media holding its information

**Inheritance.** A central IT operations group may keep one approved tools list for common equipment, such as network diagnostic tools, and offer it as a common control. The system owns approving tools specific to its components and the vendor tools used on them, so MA-3 is usually a hybrid control. For a cloud service, the provider's own maintenance tools are covered by its authorization or attestation.

**Common findings.**

- No approved tools list, or one that does not include the vendor's remote support utility.
- Tools downloaded from the internet at the time of the repair, with no check of their integrity.
- A vendor's diagnostic laptop, which has held system data, leaving the building with no record of how it was handled.
- An approved list never reviewed, still naming tools that are years out of support.

**Enhancements in the Moderate baseline.** [MA-3(1)](#ma-3.1) inspect tools, [MA-3(2)](#ma-3.2) inspect media and [MA-3(3)](#ma-3.3) prevent unauthorized removal, all also in High. [MA-3(4)](#ma-3.4), [MA-3(5)](#ma-3.5) and [MA-3(6)](#ma-3.6) are in no baseline.

- **MA-3(1)** inspects the tools maintenance personnel bring in or download for improper or unauthorized modifications. For hardware, check its seals, serial number and condition; for software, check a hash or signature against the vendor's published value. NIST's discussion has a tool found modified, or containing malicious code, handled as an incident; the policy has it reported under the [incident response plan](/templates/plans/incident-response-plan/) ([IR-6](/controls/ir/ir-6/)).
- **MA-3(2)** checks media holding diagnostic and test programs for malicious code before they are used in the system, with the organization's malicious code protection ([SI-3](/controls/si/si-3/)). Infected media are reported as an incident and not used.
- **MA-3(3)** keeps maintenance equipment that holds organizational information from leaving without one of four measures: verify it holds none, sanitize or destroy it, keep it in the facility, or get a written exemption from the Chief Information Security Officer. NIST's discussion counts information the organization holds as a steward for others as organizational information. Sanitize as the media sanitization procedure in the [Media Protection policy](/templates/policies/mp/) sets out ([MP-6](/controls/mp/mp-6/)), record it in the [media sanitization record](/templates/forms/media-sanitization-record/), and put terms in the maintenance contract that let you keep, sanitize or destroy the equipment or its media.

**Federal systems** (as of September 2026). Under [32 CFR 2002.14(f)(2)](https://www.ecfr.gov/current/title-32/subtitle-B/chapter-XX/part-2002/subpart-A/section-2002.14), agencies that destroy controlled unclassified information (CUI), including in electronic form, must make it unreadable, indecipherable and irrecoverable. They must use any destruction method specifically required by law, regulation or Government-wide policy for that CUI; otherwise, the destruction guidance in NIST SP 800-53 and SP 800-88, or a method approved for classified national security information under 32 CFR 2001.47. The MA-3(3) clause's federal block requires that method when maintenance equipment holding CUI is destroyed to keep it from leaving.
