---
title: 'PW.5 Create Source Code by Adhering to Secure Coding Practices'
description: 'SSDF practice PW.5, Create Source Code by Adhering to Secure Coding Practices (NIST SP 800-218, version 1.1): the practice, its tasks and NIST''s notional implementation examples.'
sidebar:
  label: 'PW.5 Create Source Code by Adhering to Secure Coding Practices'
  order: 12
source:
  id: 'SP 800-218'
  version: '1.1'
  status: final
  checked: '2026-10'
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from the NIST SP 800-218, SSDF version 1.1 table (nist.sp.800-218.ssdf-table.xlsx). Edits between the nist markers are overwritten by npm run ssdf. -->

Practice PW.5 of the [Secure Software Development Framework](/methods/ssdf/) (SSDF) version 1.1, in the group [Produce Well-Secured Software (PW)](/methods/ssdf/#pw). The practice, task and example text is NIST's, from the table published with [SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) (February 2022, final).

## Practice

Decrease the number of security vulnerabilities in the software, and reduce costs by minimizing vulnerabilities introduced during source code creation that meet or exceed organization-defined vulnerability severity criteria.

## Tasks

NIST lists one task for this practice. The examples under each are notional: no example or combination of examples is required, and they are not the only feasible options (SP 800-218, section 2).

<a id="pw.5.1"></a>

### PW.5.1

Follow all secure coding practices that are appropriate to the development languages and environment to meet the organization’s requirements.

<details>
<summary>Notional implementation examples for PW.5.1</summary>

- **Example 1:** Validate all inputs, and validate and properly encode all outputs.
- **Example 2:** Avoid using unsafe functions and calls.
- **Example 3:** Detect errors, and handle them gracefully.
- **Example 4:** Provide logging and tracing capabilities.
- **Example 5:** Use development environments with automated features that encourage or require the use of secure coding practices with just-in-time training-in-place.
- **Example 6:** Follow procedures for manually ensuring compliance with secure coding practices when automated methods are insufficient or unavailable.
- **Example 7:** Use tools (e.g., linters, formatters) to standardize the style and formatting of the source code.
- **Example 8:** Check for other vulnerabilities that are common to the development languages and environment.
- **Example 9:** Have the developer review their own human-readable code to complement (not replace) code review performed by other people or tools. See PW.7.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
