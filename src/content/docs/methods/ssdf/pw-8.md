---
title: 'PW.8 Test Executable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements'
description: 'SSDF practice PW.8, Test Executable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements (NIST SP 800-218, version 1.1): the practice, its tasks and NIST''s notional implementation examples.'
sidebar:
  label: 'PW.8 Test Executable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements'
  order: 15
source:
  id: 'SP 800-218'
  version: '1.1'
  status: final
  checked: '2026-10'
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from the NIST SP 800-218, SSDF version 1.1 table (nist.sp.800-218.ssdf-table.xlsx). Edits between the nist markers are overwritten by npm run ssdf. -->

Practice PW.8 of the [Secure Software Development Framework](/methods/ssdf/) (SSDF) version 1.1, in the group [Produce Well-Secured Software (PW)](/methods/ssdf/#pw). The practice, task and example text is NIST's, from the table published with [SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) (February 2022, final).

## Practice

Help identify vulnerabilities so that they can be corrected before the software is released in order to prevent exploitation. Using automated methods lowers the effort and resources needed to detect vulnerabilities and improves traceability and repeatability. Executable code includes binaries, directly executed bytecode and source code, and any other form of code that an organization deems executable.

## Tasks

NIST lists two tasks for this practice. The examples under each are notional: no example or combination of examples is required, and they are not the only feasible options (SP 800-218, section 2).

<a id="pw.8.1"></a>

### PW.8.1

Determine whether executable code testing should be performed to find vulnerabilities not identified by previous reviews, analysis, or testing and, if so, which types of testing should be used.

<details>
<summary>Notional implementation examples for PW.8.1</summary>

- **Example 1:** Follow the organization’s policies or guidelines for when code testing should be performed and how it should be conducted (e.g., within a sandboxed environment). This may include third-party executable code and reusable executable code modules written in-house.
- **Example 2:** Choose testing methods based on the stage of the software.

</details>

<a id="pw.8.2"></a>

### PW.8.2

Scope the testing, design the tests, perform the testing, and document the results, including recording and triaging all discovered issues and recommended remediations in the development team’s workflow or issue tracking system.

<details>
<summary>Notional implementation examples for PW.8.2</summary>

- **Example 1:** Perform robust functional testing of security features.
- **Example 2:** Integrate dynamic vulnerability testing into the project’s automated test suite.
- **Example 3:** Incorporate tests for previously reported vulnerabilities into the project’s test suite to ensure that errors are not reintroduced.
- **Example 4:** Take into consideration the infrastructures and technology stacks that the software will be used with in production when developing test plans.
- **Example 5:** Use fuzz testing tools to find issues with input handling.
- **Example 6:** If resources are available, use penetration testing to simulate how an attacker might attempt to compromise the software in high-risk scenarios.
- **Example 7:** Identify and record the root causes of discovered issues.
- **Example 8:** Document lessons learned from code testing in a wiki that developers can access and search.
- **Example 9:** Use source code, design records, and other resources when developing test plans.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
