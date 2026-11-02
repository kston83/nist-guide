---
title: 'PS.2 Provide a Mechanism for Verifying Software Release Integrity'
description: 'SSDF practice PS.2, Provide a Mechanism for Verifying Software Release Integrity (NIST SP 800-218, version 1.1): the practice, its tasks, NIST''s notional implementation examples and the SP 800-53 controls NIST maps them to.'
sidebar:
  label: 'PS.2 Provide a Mechanism for Verifying Software Release Integrity'
  order: 7
source:
  id: 'SP 800-218'
  version: '1.1'
  status: final
  checked: '2026-10'
implements: [sa-8]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from the NIST SP 800-218, SSDF version 1.1 table (nist.sp.800-218.ssdf-table.xlsx). Edits between the nist markers are overwritten by npm run ssdf. -->

Practice PS.2 of the [Secure Software Development Framework](/methods/ssdf/) (SSDF) version 1.1, in the group [Protect the Software (PS)](/methods/ssdf/#ps). The practice, task and example text and the SP 800-53 references are NIST's, from the table published with [SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) (February 2022, final).

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

## SP 800-53 references

NIST's table maps each task to SP 800-53 controls in the "SP80053" entries of its References column, which also maps tasks to other secure development documents (not listed here). Each control's page lists the tasks that cite it under Methods.

| Task | SP 800-53 references |
| --- | --- |
| [PS.2.1](#ps.2.1) | [SA-8](/controls/sa/sa-8/) |
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
