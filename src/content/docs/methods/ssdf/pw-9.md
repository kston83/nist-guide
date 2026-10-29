---
title: 'PW.9 Configure Software to Have Secure Settings by Default'
description: 'SSDF practice PW.9, Configure Software to Have Secure Settings by Default (NIST SP 800-218, version 1.1): the practice, its tasks and NIST''s notional implementation examples.'
sidebar:
  label: 'PW.9 Configure Software to Have Secure Settings by Default'
  order: 16
source:
  id: 'SP 800-218'
  version: '1.1'
  status: final
  checked: '2026-10'
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from the NIST SP 800-218, SSDF version 1.1 table (nist.sp.800-218.ssdf-table.xlsx). Edits between the nist markers are overwritten by npm run ssdf. -->

Practice PW.9 of the [Secure Software Development Framework](/methods/ssdf/) (SSDF) version 1.1, in the group [Produce Well-Secured Software (PW)](/methods/ssdf/#pw). The practice, task and example text is NIST's, from the table published with [SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) (February 2022, final).

## Practice

Help improve the security of the software at the time of installation to reduce the likelihood of the software being deployed with weak security settings, putting it at greater risk of compromise.

## Tasks

NIST lists two tasks for this practice. The examples under each are notional: no example or combination of examples is required, and they are not the only feasible options (SP 800-218, section 2).

<a id="pw.9.1"></a>

### PW.9.1

Define a secure baseline by determining how to configure each setting that has an effect on security or a security-related setting so that the default settings are secure and do not weaken the security functions provided by the platform, network infrastructure, or services.

<details>
<summary>Notional implementation examples for PW.9.1</summary>

- **Example 1:** Conduct testing to ensure that the settings, including the default settings, are working as expected and are not inadvertently causing any security weaknesses, operational issues, or other problems.

</details>

<a id="pw.9.2"></a>

### PW.9.2

Implement the default settings (or groups of default settings, if applicable), and document each setting for software administrators.

<details>
<summary>Notional implementation examples for PW.9.2</summary>

- **Example 1:** Verify that the approved configuration is in place for the software.
- **Example 2:** Document each setting’s purpose, options, default value, security relevance, potential operational impact, and relationships with other settings.
- **Example 3:** Use authoritative programmatic technical mechanisms to record how each setting can be implemented and assessed by software administrators.
- **Example 4:** Store the default configuration in a usable format and follow change control practices for modifying it (e.g., configuration-as-code).

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
