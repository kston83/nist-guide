---
title: 'PS.1 Protect All Forms of Code from Unauthorized Access and Tampering'
description: 'SSDF practice PS.1, Protect All Forms of Code from Unauthorized Access and Tampering (NIST SP 800-218, version 1.1): the practice, its tasks and NIST''s notional implementation examples.'
sidebar:
  label: 'PS.1 Protect All Forms of Code from Unauthorized Access and Tampering'
  order: 6
source:
  id: 'SP 800-218'
  version: '1.1'
  status: final
  checked: '2026-10'
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from the NIST SP 800-218, SSDF version 1.1 table (nist.sp.800-218.ssdf-table.xlsx). Edits between the nist markers are overwritten by npm run ssdf. -->

Practice PS.1 of the [Secure Software Development Framework](/methods/ssdf/) (SSDF) version 1.1, in the group [Protect the Software (PS)](/methods/ssdf/#ps). The practice, task and example text is NIST's, from the table published with [SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) (February 2022, final).

## Practice

Help prevent unauthorized changes to code, both inadvertent and intentional, which could circumvent or negate the intended security characteristics of the software. For code that is not intended to be publicly accessible, this helps prevent theft of the software and may make it more difficult or time-consuming for attackers to find vulnerabilities in the software.

## Tasks

NIST lists one task for this practice. The examples under each are notional: no example or combination of examples is required, and they are not the only feasible options (SP 800-218, section 2).

<a id="ps.1.1"></a>

### PS.1.1

Store all forms of code – including source code, executable code, and configuration-as-code – based on the principle of least privilege so that only authorized personnel, tools, services, etc. have access.

<details>
<summary>Notional implementation examples for PS.1.1</summary>

- **Example 1:** Store all source code and configuration-as-code in a code repository, and restrict access to it based on the nature of the code. For example, open-source code intended for public access may need its integrity and availability protected; other code may also need its confidentiality protected.
- **Example 2:** Use version control features of the repository to track all changes made to the code with accountability to the individual account.
- **Example 3:** Use commit signing for code repositories.
- **Example 4:** Have the code owner review and approve all changes made to the code by others.
- **Example 5:** Use code signing to help protect the integrity of executables.
- **Example 6:** Use cryptography (e.g., cryptographic hashes) to help protect file integrity.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
