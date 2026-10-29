---
title: 'PW.6 Configure the Compilation, Interpreter, and Build Processes to Improve Executable Security'
description: 'SSDF practice PW.6, Configure the Compilation, Interpreter, and Build Processes to Improve Executable Security (NIST SP 800-218, version 1.1): the practice, its tasks and NIST''s notional implementation examples.'
sidebar:
  label: 'PW.6 Configure the Compilation, Interpreter, and Build Processes to Improve Executable Security'
  order: 13
source:
  id: 'SP 800-218'
  version: '1.1'
  status: final
  checked: '2026-10'
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from the NIST SP 800-218, SSDF version 1.1 table (nist.sp.800-218.ssdf-table.xlsx). Edits between the nist markers are overwritten by npm run ssdf. -->

Practice PW.6 of the [Secure Software Development Framework](/methods/ssdf/) (SSDF) version 1.1, in the group [Produce Well-Secured Software (PW)](/methods/ssdf/#pw). The practice, task and example text is NIST's, from the table published with [SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) (February 2022, final).

## Practice

Decrease the number of security vulnerabilities in the software and reduce costs by eliminating vulnerabilities before testing occurs.

## Tasks

NIST lists two tasks for this practice. The examples under each are notional: no example or combination of examples is required, and they are not the only feasible options (SP 800-218, section 2).

<a id="pw.6.1"></a>

### PW.6.1

Use compiler, interpreter, and build tools that offer features to improve executable security.

<details>
<summary>Notional implementation examples for PW.6.1</summary>

- **Example 1:** Use up-to-date versions of compiler, interpreter, and build tools.
- **Example 2:** Follow change management processes when deploying or updating compiler, interpreter, and build tools, and audit all unexpected changes to tools.
- **Example 3:** Regularly validate the authenticity and integrity of compiler, interpreter, and build tools. See PO.3.

</details>

<a id="pw.6.2"></a>

### PW.6.2

Determine which compiler, interpreter, and build tool features should be used and how each should be configured, then implement and use the approved configurations.

<details>
<summary>Notional implementation examples for PW.6.2</summary>

- **Example 1:** Enable compiler features that produce warnings for poorly secured code during the compilation process.
- **Example 2:** Implement the “clean build” concept, where all compiler warnings are treated as errors and eliminated except those determined to be false positives or irrelevant.
- **Example 3:** Perform all builds in a dedicated, highly controlled build environment.
- **Example 4:** Enable compiler features that randomize or obfuscate execution characteristics, such as memory location usage, that would otherwise be predictable and thus potentially exploitable.
- **Example 5:** Test to ensure that the features are working as expected and are not inadvertently causing any operational issues or other problems.
- **Example 6:** Continuously verify that the approved configurations are being used.
- **Example 7:** Make the approved tool configurations available as configuration-as-code so developers can readily use them.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
