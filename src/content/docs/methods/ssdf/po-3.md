---
title: 'PO.3 Implement Supporting Toolchains'
description: 'SSDF practice PO.3, Implement Supporting Toolchains (NIST SP 800-218, version 1.1): the practice, its tasks and NIST''s notional implementation examples.'
sidebar:
  label: 'PO.3 Implement Supporting Toolchains'
  order: 3
source:
  id: 'SP 800-218'
  version: '1.1'
  status: final
  checked: '2026-10'
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from the NIST SP 800-218, SSDF version 1.1 table (nist.sp.800-218.ssdf-table.xlsx). Edits between the nist markers are overwritten by npm run ssdf. -->

Practice PO.3 of the [Secure Software Development Framework](/methods/ssdf/) (SSDF) version 1.1, in the group [Prepare the Organization (PO)](/methods/ssdf/#po). The practice, task and example text is NIST's, from the table published with [SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) (February 2022, final).

## Practice

Use automation to reduce human effort and improve the accuracy, reproducibility, usability, and comprehensiveness of security practices throughout the SDLC, as well as provide a way to document and demonstrate the use of these practices. Toolchains and tools may be used at different levels of the organization, such as organization-wide or project-specific, and may address a particular part of the SDLC, like a build pipeline.

## Tasks

NIST lists three tasks for this practice. The examples under each are notional: no example or combination of examples is required, and they are not the only feasible options (SP 800-218, section 2).

<a id="po.3.1"></a>

### PO.3.1

Specify which tools or tool types must or should be included in each toolchain to mitigate identified risks, as well as how the toolchain components are to be integrated with each other.

<details>
<summary>Notional implementation examples for PO.3.1</summary>

- **Example 1:** Define categories of toolchains, and specify the mandatory tools or tool types to be used for each category.
- **Example 2:** Identify security tools to integrate into the developer toolchain.
- **Example 3:** Define what information is to be passed between tools and what data formats are to be used.
- **Example 4:** Evaluate tools’ signing capabilities to create immutable records/logs for auditability within the toolchain.
- **Example 5:** Use automated technology for toolchain management and orchestration.

</details>

<a id="po.3.2"></a>

### PO.3.2

Follow recommended security practices to deploy, operate, and maintain tools and toolchains.

<details>
<summary>Notional implementation examples for PO.3.2</summary>

- **Example 1:** Evaluate, select, and acquire tools, and assess the security of each tool.
- **Example 2:** Integrate tools with other tools and existing software development processes and workflows.
- **Example 3:** Use code-based configuration for toolchains (e.g., pipelines-as-code, toolchains-as-code).
- **Example 4:** Implement the technologies and processes needed for reproducible builds.
- **Example 5:** Update, upgrade, or replace tools as needed to address tool vulnerabilities or add new tool capabilities.
- **Example 6:** Continuously monitor tools and tool logs for potential operational and security issues, including policy violations and anomalous behavior.
- **Example 7:** Regularly verify the integrity and check the provenance of each tool to identify potential problems.
- **Example 8:** See PW.6 regarding compiler, interpreter, and build tools.
- **Example 9:** See PO.5 regarding implementing and maintaining secure environments.

</details>

<a id="po.3.3"></a>

### PO.3.3

Configure tools to generate artifacts of their support of secure software development practices as defined by the organization.

<details>
<summary>Notional implementation examples for PO.3.3</summary>

- **Example 1:** Use existing tooling (e.g., workflow tracking, issue tracking, value stream mapping) to create an audit trail of the secure development-related actions that are performed for continuous improvement purposes.
- **Example 2:** Determine how often the collected information should be audited, and implement the necessary processes.
- **Example 3:** Establish and enforce security and retention policies for artifact data.
- **Example 4:** Assign responsibility for creating any needed artifacts that tools cannot generate.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
