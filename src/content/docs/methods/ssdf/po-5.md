---
title: 'PO.5 Implement and Maintain Secure Environments for Software Development'
description: 'SSDF practice PO.5, Implement and Maintain Secure Environments for Software Development (NIST SP 800-218, version 1.1): the practice, its tasks and NIST''s notional implementation examples.'
sidebar:
  label: 'PO.5 Implement and Maintain Secure Environments for Software Development'
  order: 5
source:
  id: 'SP 800-218'
  version: '1.1'
  status: final
  checked: '2026-10'
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from the NIST SP 800-218, SSDF version 1.1 table (nist.sp.800-218.ssdf-table.xlsx). Edits between the nist markers are overwritten by npm run ssdf. -->

Practice PO.5 of the [Secure Software Development Framework](/methods/ssdf/) (SSDF) version 1.1, in the group [Prepare the Organization (PO)](/methods/ssdf/#po). The practice, task and example text is NIST's, from the table published with [SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) (February 2022, final).

## Practice

Ensure that all components of the environments for software development are strongly protected from internal and external threats to prevent compromises of the environments or the software being developed or maintained within them. Examples of environments for software development include development, build, test, and distribution environments.

## Tasks

NIST lists two tasks for this practice. The examples under each are notional: no example or combination of examples is required, and they are not the only feasible options (SP 800-218, section 2).

<a id="po.5.1"></a>

### PO.5.1

Separate and protect each environment involved in software development.

<details>
<summary>Notional implementation examples for PO.5.1</summary>

- **Example 1:** Use multi-factor, risk-based authentication and conditional access for each environment.
- **Example 2:** Use network segmentation and access controls to separate the environments from each other and from production environments, and to separate components from each other within each non-production environment, in order to reduce attack surfaces and attackers’ lateral movement and privilege/access escalation.
- **Example 3:** Enforce authentication and tightly restrict connections entering and exiting each software development environment, including minimizing access to the internet to only what is necessary.
- **Example 4:** Minimize direct human access to toolchain systems, such as build services. Continuously monitor and audit all access attempts and all use of privileged access.
- **Example 5:** Minimize the use of production-environment software and services from non-production environments.
- **Example 6:** Regularly log, monitor, and audit trust relationships for authorization and access between the environments and between the components within each environment.
- **Example 7:** Continuously log and monitor operations and alerts across all components of the development environment to detect, respond, and recover from attempted and actual cyber incidents.
- **Example 8:** Configure security controls and other tools involved in separating and protecting the environments to generate artifacts for their activities.
- **Example 9:** Continuously monitor all software deployed in each environment for new vulnerabilities, and respond to vulnerabilities appropriately following a risk-based approach.
- **Example 10:** Configure and implement measures to secure the environments’ hosting infrastructures following a zero trust architecture.

</details>

<a id="po.5.2"></a>

### PO.5.2

Secure and harden development endpoints (i.e., endpoints for software designers, developers, testers, builders, etc.) to perform development-related tasks using a risk-based approach.

<details>
<summary>Notional implementation examples for PO.5.2</summary>

- **Example 1:** Configure each development endpoint based on approved hardening guides, checklists, etc.; for example, enable FIPS-compliant encryption of all sensitive data at rest and in transit.
- **Example 2:** Configure each development endpoint and the development resources to provide the least functionality needed by users and services and to enforce the principle of least privilege.
- **Example 3:** Continuously monitor the security posture of all development endpoints, including monitoring and auditing all use of privileged access.
- **Example 4:** Configure security controls and other tools involved in securing and hardening development endpoints to generate artifacts for their activities.
- **Example 5:** Require multi-factor authentication for all access to development endpoints and development resources.
- **Example 6:** Provide dedicated development endpoints on non-production networks for performing all development-related tasks. Provide separate endpoints on production networks for all other tasks.
- **Example 7:** Configure each development endpoint following a zero trust architecture.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
