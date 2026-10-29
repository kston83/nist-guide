---
title: 'PS.3 Archive and Protect Each Software Release'
description: 'SSDF practice PS.3, Archive and Protect Each Software Release (NIST SP 800-218, version 1.1): the practice, its tasks and NIST''s notional implementation examples.'
sidebar:
  label: 'PS.3 Archive and Protect Each Software Release'
  order: 8
source:
  id: 'SP 800-218'
  version: '1.1'
  status: final
  checked: '2026-10'
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from the NIST SP 800-218, SSDF version 1.1 table (nist.sp.800-218.ssdf-table.xlsx). Edits between the nist markers are overwritten by npm run ssdf. -->

Practice PS.3 of the [Secure Software Development Framework](/methods/ssdf/) (SSDF) version 1.1, in the group [Protect the Software (PS)](/methods/ssdf/#ps). The practice, task and example text is NIST's, from the table published with [SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) (February 2022, final).

## Practice

Preserve software releases in order to help identify, analyze, and eliminate vulnerabilities discovered in the software after release.

## Tasks

NIST lists two tasks for this practice. The examples under each are notional: no example or combination of examples is required, and they are not the only feasible options (SP 800-218, section 2).

<a id="ps.3.1"></a>

### PS.3.1

Securely archive the necessary files and supporting data (e.g., integrity verification information, provenance data) to be retained for each software release.

<details>
<summary>Notional implementation examples for PS.3.1</summary>

- **Example 1:** Store the release files, associated images, etc. in repositories following the organization’s established policy. Allow read-only access to them by necessary personnel and no access by anyone else.
- **Example 2:** Store and protect release integrity verification information and provenance data, such as by keeping it in a separate location from the release files or by signing the data.

</details>

<a id="ps.3.2"></a>

### PS.3.2

Collect, safeguard, maintain, and share provenance data for all components of each software release (e.g., in a software bill of materials [SBOM]).

<details>
<summary>Notional implementation examples for PS.3.2</summary>

- **Example 1:** Make the provenance data available to software acquirers in accordance with the organization’s policies, preferably using standards-based formats.
- **Example 2:** Make the provenance data available to the organization’s operations and response teams to aid them in mitigating software vulnerabilities.
- **Example 3:** Protect the integrity of provenance data, and provide a way for recipients to verify provenance data integrity.
- **Example 4:** Update the provenance data every time any of the software’s components are updated.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
