---
title: 'RV.2 Assess, Prioritize, and Remediate Vulnerabilities'
description: 'SSDF practice RV.2, Assess, Prioritize, and Remediate Vulnerabilities (NIST SP 800-218, version 1.1): the practice, its tasks and NIST''s notional implementation examples.'
sidebar:
  label: 'RV.2 Assess, Prioritize, and Remediate Vulnerabilities'
  order: 18
source:
  id: 'SP 800-218'
  version: '1.1'
  status: final
  checked: '2026-10'
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from the NIST SP 800-218, SSDF version 1.1 table (nist.sp.800-218.ssdf-table.xlsx). Edits between the nist markers are overwritten by npm run ssdf. -->

Practice RV.2 of the [Secure Software Development Framework](/methods/ssdf/) (SSDF) version 1.1, in the group [Respond to Vulnerabilities (RV)](/methods/ssdf/#rv). The practice, task and example text is NIST's, from the table published with [SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) (February 2022, final).

## Practice

Help ensure that vulnerabilities are remediated in accordance with risk to reduce the window of opportunity for attackers.

## Tasks

NIST lists two tasks for this practice. The examples under each are notional: no example or combination of examples is required, and they are not the only feasible options (SP 800-218, section 2).

<a id="rv.2.1"></a>

### RV.2.1

Analyze each vulnerability to gather sufficient information about risk to plan its remediation or other risk response.

<details>
<summary>Notional implementation examples for RV.2.1</summary>

- **Example 1:** Use existing issue tracking software to record each vulnerability.
- **Example 2:** Perform risk calculations for each vulnerability based on estimates of its exploitability, the potential impact if exploited, and any other relevant characteristics.

</details>

<a id="rv.2.2"></a>

### RV.2.2

Plan and implement risk responses for vulnerabilities.

<details>
<summary>Notional implementation examples for RV.2.2</summary>

- **Example 1:** Make a risk-based decision as to whether each vulnerability will be remediated or if the risk will be addressed through other means (e.g., risk acceptance, risk transference), and prioritize any actions to be taken.
- **Example 2:** If a permanent mitigation for a vulnerability is not yet available, determine how the vulnerability can be temporarily mitigated until the permanent solution is available, and add that temporary remediation to the plan.
- **Example 3:** Develop and release security advisories that provide the necessary information to software acquirers, including descriptions of what the vulnerabilities are, how to find instances of the vulnerable software, and how to address them (e.g., where to get patches and what the patches change in the software; what configuration settings may need to be changed; how temporary workarounds could be implemented).
- **Example 4:** Deliver remediations to acquirers via an automated and trusted delivery mechanism. A single remediation could address multiple vulnerabilities.
- **Example 5:** Update records of design decisions, risk responses, and approved exceptions as needed. See PW.1.2.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
