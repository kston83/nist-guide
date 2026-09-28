---
title: 'CA-8 Penetration Testing'
description: 'NIST SP 800-53 Rev. 5 control CA-8, Penetration Testing: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CA-8 Penetration Testing'
  order: 8
control:
  id: CA-8
  family: CA
  baselines: [High]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| High | Organization | 3 (1 in a baseline) |

**Related controls:** [RA-5](/controls/ra/ra-5/), [RA-10](/controls/ra/ra-10/), [SA-11](/controls/sa/sa-11/), [SR-5](/controls/sr/sr-5/), [SR-6](/controls/sr/sr-6/)

## Control statement

Conduct penetration testing [Assignment: organization-defined frequency] on [Assignment: organization-defined system(s) or system components].

<details>
<summary>NIST discussion</summary>

Penetration testing is a specialized type of assessment conducted on systems or individual system components to identify vulnerabilities that could be exploited by adversaries. Penetration testing goes beyond automated vulnerability scanning and is conducted by agents and teams with demonstrable skills and experience that include technical expertise in network, operating system, and/or application level security. Penetration testing can be used to validate vulnerabilities or determine the degree of penetration resistance of systems to adversaries within specified constraints. Such constraints include time, resources, and skills. Penetration testing attempts to duplicate the actions of adversaries and provides a more in-depth analysis of security- and privacy-related weaknesses or deficiencies. Penetration testing is especially important when organizations are transitioning from older technologies to newer technologies (e.g., transitioning from IPv4 to IPv6 network protocols).

Organizations can use the results of vulnerability analyses to support penetration testing activities. Penetration testing can be conducted internally or externally on the hardware, software, or firmware components of a system and can exercise both physical and technical controls. A standard method for penetration testing includes a pretest analysis based on full knowledge of the system, pretest identification of potential vulnerabilities based on the pretest analysis, and testing designed to determine the exploitability of vulnerabilities. All parties agree to the rules of engagement before commencing penetration testing scenarios. Organizations correlate the rules of engagement for the penetration tests with the tools, techniques, and procedures that are anticipated to be employed by adversaries. Penetration testing may result in the exposure of information that is protected by laws or regulations, to individuals conducting the testing. Rules of engagement, contracts, or other appropriate mechanisms can be used to communicate expectations for how to protect this information. Risk assessments guide the decisions on the level of independence required for the personnel conducting penetration testing.

</details>

## Control enhancements

<a id="ca-8.1"></a>

### CA-8(1) Independent Penetration Testing Agent or Team

*Baselines: High*

Employ an independent penetration testing agent or team to perform penetration testing on the system or system components.

<details>
<summary>Discussion and assessment objectives for CA-8(1)</summary>

Independent penetration testing agents or teams are individuals or groups who conduct impartial penetration testing of organizational systems. Impartiality implies that penetration testing agents or teams are free from perceived or actual conflicts of interest with respect to the development, operation, or management of the systems that are the targets of the penetration testing. CA-2(1) provides additional information on independent assessments that can be applied to penetration testing.

Determine if an independent penetration testing agent or team is employed to perform penetration testing on the system or system components.

**Examine:** Assessment, authorization, and monitoring policy; procedures addressing penetration testing; assessment plan; penetration test report; assessment report; security assessment evidence; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with assessment responsibilities; organizational personnel with information security and privacy responsibilities.

</details>

<a id="ca-8.2"></a>

### CA-8(2) Red Team Exercises

*Baselines: Not in a baseline*

Employ the following red-team exercises to simulate attempts by adversaries to compromise organizational systems in accordance with applicable rules of engagement: [Assignment: organization-defined red team exercises].

<details>
<summary>Discussion and assessment objectives for CA-8(2)</summary>

Red team exercises extend the objectives of penetration testing by examining the security and privacy posture of organizations and the capability to implement effective cyber defenses. Red team exercises simulate attempts by adversaries to compromise mission and business functions and provide a comprehensive assessment of the security and privacy posture of systems and organizations. Such attempts may include technology-based attacks and social engineering-based attacks. Technology-based attacks include interactions with hardware, software, or firmware components and/or mission and business processes. Social engineering-based attacks include interactions via email, telephone, shoulder surfing, or personal conversations. Red team exercises are most effective when conducted by penetration testing agents and teams with knowledge of and experience with current adversarial tactics, techniques, procedures, and tools. While penetration testing may be primarily laboratory-based testing, organizations can use red team exercises to provide more comprehensive assessments that reflect real-world conditions. The results from red team exercises can be used by organizations to improve security and privacy awareness and training and to assess control effectiveness.

Determine if [Assignment: organization-defined red team exercises] are employed to simulate attempts by adversaries to compromise organizational systems in accordance with applicable rules of engagement.

**Examine:** Assessment, authorization, and monitoring policy; procedures addressing penetration testing; procedures addressing red team exercises; assessment plan; results of red team exercises; penetration test report; assessment report; rules of engagement; assessment evidence; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with assessment responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators.

**Test:** Mechanisms supporting the employment of red team exercises.

</details>

<a id="ca-8.3"></a>

### CA-8(3) Facility Penetration Testing

*Baselines: Not in a baseline*

Employ a penetration testing process that includes [Assignment: organization-defined frequency] [Selection (one or more): announced; unannounced] attempts to bypass or circumvent controls associated with physical access points to the facility.

<details>
<summary>Discussion and assessment objectives for CA-8(3)</summary>

Penetration testing of physical access points can provide information on critical vulnerabilities in the operating environments of organizational systems. Such information can be used to correct weaknesses or deficiencies in physical controls that are necessary to protect organizational systems.

Determine if the penetration testing process includes [Assignment: organization-defined frequency] [Selection (one or more): announced; unannounced] attempts to bypass or circumvent controls associated with physical access points to facility.

**Examine:** Assessment, authorization, and monitoring policy; procedures addressing penetration testing; procedures addressing red team exercises; assessment plan; results of red team exercises; penetration test report; assessment report; rules of engagement; assessment evidence; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with assessment responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators.

**Test:** Automated mechanisms supporting the employment of red team exercises.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CA-8</summary>

Determine if penetration testing is conducted [Assignment: organization-defined frequency] on [Assignment: organization-defined system(s) or system components].

**Examine:** Assessment, authorization, and monitoring policy; procedures addressing penetration testing; assessment plan; penetration test report; assessment report; assessment evidence; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with control assessment responsibilities; organizational personnel with information security and privacy responsibilities; system/network administrators.

**Test:** Mechanisms supporting penetration testing.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
