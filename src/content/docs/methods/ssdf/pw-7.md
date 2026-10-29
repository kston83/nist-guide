---
title: 'PW.7 Review and/or Analyze Human-Readable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements'
description: 'SSDF practice PW.7, Review and/or Analyze Human-Readable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements (NIST SP 800-218, version 1.1): the practice, its tasks and NIST''s notional implementation examples.'
sidebar:
  label: 'PW.7 Review and/or Analyze Human-Readable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements'
  order: 14
source:
  id: 'SP 800-218'
  version: '1.1'
  status: final
  checked: '2026-10'
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from the NIST SP 800-218, SSDF version 1.1 table (nist.sp.800-218.ssdf-table.xlsx). Edits between the nist markers are overwritten by npm run ssdf. -->

Practice PW.7 of the [Secure Software Development Framework](/methods/ssdf/) (SSDF) version 1.1, in the group [Produce Well-Secured Software (PW)](/methods/ssdf/#pw). The practice, task and example text is NIST's, from the table published with [SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) (February 2022, final).

## Practice

Help identify vulnerabilities so that they can be corrected before the software is released to prevent exploitation. Using automated methods lowers the effort and resources needed to detect vulnerabilities. Human-readable code includes source code, scripts, and any other form of code that an organization deems human-readable.

## Tasks

NIST lists two tasks for this practice. The examples under each are notional: no example or combination of examples is required, and they are not the only feasible options (SP 800-218, section 2).

<a id="pw.7.1"></a>

### PW.7.1

Determine whether code review (a person looks directly at the code to find issues) and/or code analysis (tools are used to find issues in code, either in a fully automated way or in conjunction with a person) should be used, as defined by the organization.

<details>
<summary>Notional implementation examples for PW.7.1</summary>

- **Example 1:** Follow the organization’s policies or guidelines for when code review should be performed and how it should be conducted. This may include third-party code and reusable code modules written in-house.
- **Example 2:** Follow the organization’s policies or guidelines for when code analysis should be performed and how it should be conducted.
- **Example 3:** Choose code review and/or analysis methods based on the stage of the software.

</details>

<a id="pw.7.2"></a>

### PW.7.2

Perform the code review and/or code analysis based on the organization’s secure coding standards, and record and triage all discovered issues and recommended remediations in the development team’s workflow or issue tracking system.

<details>
<summary>Notional implementation examples for PW.7.2</summary>

- **Example 1:** Perform peer review of code, and review any existing code review, analysis, or testing results as part of the peer review.
- **Example 2:** Use expert reviewers to check code for backdoors and other malicious content.
- **Example 3:** Use peer reviewing tools that facilitate the peer review process, and document all discussions and other feedback.
- **Example 4:** Use a static analysis tool to automatically check code for vulnerabilities and compliance with the organization’s secure coding standards with a human reviewing the issues reported by the tool and remediating them as necessary.
- **Example 5:** Use review checklists to verify that the code complies with the requirements.
- **Example 6:** Use automated tools to identify and remediate documented and verified unsafe software practices on a continuous basis as human-readable code is checked into the code repository.
- **Example 7:** Identify and document the root causes of discovered issues.
- **Example 8:** Document lessons learned from code review and analysis in a wiki that developers can access and search.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
