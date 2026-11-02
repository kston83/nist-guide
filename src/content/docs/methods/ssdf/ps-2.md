---
title: 'PS.2 Provide a Mechanism for Verifying Software Release Integrity'
description: 'SSDF practice PS.2, Provide a Mechanism for Verifying Software Release Integrity (NIST SP 800-218, version 1.1): the practice, its tasks and NIST''s notional implementation examples.'
sidebar:
  label: 'PS.2 Provide a Mechanism for Verifying Software Release Integrity'
  order: 7
source:
  id: 'SP 800-218'
  version: '1.1'
  status: final
  checked: '2026-10'
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from the NIST SP 800-218, SSDF version 1.1 table (nist.sp.800-218.ssdf-table.xlsx). Edits between the nist markers are overwritten by npm run ssdf. -->

Practice PS.2 of the [Secure Software Development Framework](/methods/ssdf/) (SSDF) version 1.1, in the group [Protect the Software (PS)](/methods/ssdf/#ps). The practice, task and example text is NIST's, from the table published with [SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) (February 2022, final).

## Practice

Help software acquirers ensure that the software they acquire is legitimate and has not been tampered with.

## Tasks

NIST lists one task for this practice. The examples under each are notional: no example or combination of examples is required, and they are not the only feasible options (SP 800-218, section 2).

<a id="ps.2.1"></a>

### PS.2.1

Make software integrity verification information available to software acquirers.

<details>
<summary>Notional implementation examples for PS.2.1</summary>

- **Example 1:** Post cryptographic hashes for release files on a well-secured website.
- **Example 2:** Use an established certificate authority for code signing so that consumers’ operating systems or other tools and services can confirm the validity of signatures before use.
- **Example 3:** Periodically review the code signing processes, including certificate renewal, rotation, revocation, and protection.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
