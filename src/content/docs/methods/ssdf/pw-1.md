---
title: 'PW.1 Design Software to Meet Security Requirements and Mitigate Security Risks'
description: 'SSDF practice PW.1, Design Software to Meet Security Requirements and Mitigate Security Risks (NIST SP 800-218, version 1.1): the practice, its tasks and NIST''s notional implementation examples.'
sidebar:
  label: 'PW.1 Design Software to Meet Security Requirements and Mitigate Security Risks'
  order: 9
source:
  id: 'SP 800-218'
  version: '1.1'
  status: final
  checked: '2026-10'
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from the NIST SP 800-218, SSDF version 1.1 table (nist.sp.800-218.ssdf-table.xlsx). Edits between the nist markers are overwritten by npm run ssdf. -->

Practice PW.1 of the [Secure Software Development Framework](/methods/ssdf/) (SSDF) version 1.1, in the group [Produce Well-Secured Software (PW)](/methods/ssdf/#pw). The practice, task and example text is NIST's, from the table published with [SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) (February 2022, final).

## Practice

Identify and evaluate the security requirements for the software; determine what security risks the software is likely to face during operation and how the software’s design and architecture should mitigate those risks; and justify any cases where risk-based analysis indicates that security requirements should be relaxed or waived. Addressing security requirements and risks during software design (secure by design) is key for improving software security and also helps improve development efficiency.

## Tasks

NIST lists three tasks for this practice. The examples under each are notional: no example or combination of examples is required, and they are not the only feasible options (SP 800-218, section 2).

<a id="pw.1.1"></a>

### PW.1.1

Use forms of risk modeling – such as threat modeling, attack modeling, or attack surface mapping – to help assess the security risk for the software.

<details>
<summary>Notional implementation examples for PW.1.1</summary>

- **Example 1:** Train the development team (security champions, in particular) or collaborate with a risk modeling expert to create models and analyze how to use a risk-based approach to communicate the risks and determine how to address them, including implementing mitigations.
- **Example 2:** Perform more rigorous assessments for high-risk areas, such as protecting sensitive data and safeguarding identification, authentication, and access control, including credential management.
- **Example 3:** Review vulnerability reports and statistics for previous software to inform the security risk assessment.
- **Example 4:** Use data classification methods to identify and characterize each type of data that the software will interact with.

</details>

<a id="pw.1.2"></a>

### PW.1.2

Track and maintain the software’s security requirements, risks, and design decisions.

<details>
<summary>Notional implementation examples for PW.1.2</summary>

- **Example 1:** Record the response to each risk, including how mitigations are to be achieved and what the rationales are for any approved exceptions to the security requirements. Add any mitigations to the software’s security requirements.
- **Example 2:** Maintain records of design decisions, risk responses, and approved exceptions that can be used for auditing and maintenance purposes throughout the rest of the software life cycle.
- **Example 3:** Periodically re-evaluate all approved exceptions to the security requirements, and implement changes as needed.

</details>

<a id="pw.1.3"></a>

### PW.1.3

Where appropriate, build in support for using standardized security features and services (e.g., enabling software to integrate with existing log management, identity management, access control, and vulnerability management systems) instead of creating proprietary implementations of security features and services. [Formerly PW.4.3]

<details>
<summary>Notional implementation examples for PW.1.3</summary>

- **Example 1:** Maintain one or more software repositories of modules for supporting standardized security features and services.
- **Example 2:** Determine secure configurations for modules for supporting standardized security features and services, and make these configurations available (e.g., as configuration-as-code) so developers can readily use them.
- **Example 3:** Define criteria for which security features and services must be supported by software to be developed.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
