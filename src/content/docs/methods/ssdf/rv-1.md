---
title: 'RV.1 Identify and Confirm Vulnerabilities on an Ongoing Basis'
description: 'SSDF practice RV.1, Identify and Confirm Vulnerabilities on an Ongoing Basis (NIST SP 800-218, version 1.1): the practice, its tasks, NIST''s notional implementation examples and the SP 800-53 controls NIST maps them to.'
sidebar:
  label: 'RV.1 Identify and Confirm Vulnerabilities on an Ongoing Basis'
  order: 17
source:
  id: 'SP 800-218'
  version: '1.1'
  status: final
  checked: '2026-10'
implements: [sa-10, sa-11, sa-15.10, sr-3, sr-4]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from the NIST SP 800-218, SSDF version 1.1 table (nist.sp.800-218.ssdf-table.xlsx). Edits between the nist markers are overwritten by npm run ssdf. -->

Practice RV.1 of the [Secure Software Development Framework](/methods/ssdf/) (SSDF) version 1.1, in the group [Respond to Vulnerabilities (RV)](/methods/ssdf/#rv). The practice, task and example text and the SP 800-53 references are NIST's, from the table published with [SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) (February 2022, final).

## Practice

Help ensure that vulnerabilities are identified more quickly so that they can be remediated more quickly in accordance with risk, reducing the window of opportunity for attackers.

## Tasks

NIST lists three tasks for this practice. The examples under each are notional: no example or combination of examples is required, and they are not the only feasible options (SP 800-218, section 2).

<a id="rv.1.1"></a>

### RV.1.1

Gather information from software acquirers, users, and public sources on potential vulnerabilities in the software and third-party components that the software uses, and investigate all credible reports.

<details>
<summary>Notional implementation examples for RV.1.1</summary>

- **Example 1:** Monitor vulnerability databases , security mailing lists, and other sources of vulnerability reports through manual or automated means.
- **Example 2:** Use threat intelligence sources to better understand how vulnerabilities in general are being exploited.
- **Example 3:** Automatically review provenance and software composition data for all software components to identify any new vulnerabilities they have.

</details>

<a id="rv.1.2"></a>

### RV.1.2

Review, analyze, and/or test the software’s code to identify or confirm the presence of previously undetected vulnerabilities.

<details>
<summary>Notional implementation examples for RV.1.2</summary>

- **Example 1:** Configure the toolchain to perform automated code analysis and testing on a regular or continuous basis for all supported releases.
- **Example 2:** See PW.7 and PW.8.

</details>

<a id="rv.1.3"></a>

### RV.1.3

Have a policy that addresses vulnerability disclosure and remediation, and implement the roles, responsibilities, and processes needed to support that policy.

<details>
<summary>Notional implementation examples for RV.1.3</summary>

- **Example 1:** Establish a vulnerability disclosure program, and make it easy for security researchers to learn about your program and report possible vulnerabilities.
- **Example 2:** Have a Product Security Incident Response Team (PSIRT) and processes in place to handle the responses to vulnerability reports and incidents, including communications plans for all stakeholders.
- **Example 3:** Have a security response playbook to handle a generic reported vulnerability, a report of zero-days, a vulnerability being exploited in the wild, and a major ongoing incident involving multiple parties and open-source software components.
- **Example 4:** Periodically conduct exercises of the product security incident response processes.

</details>

## SP 800-53 references

NIST's table maps each task to SP 800-53 controls in the "SP80053" entries of its References column, which also maps tasks to other secure development documents (not listed here). Each control's page lists the tasks that cite it under Methods.

| Task | SP 800-53 references |
| --- | --- |
| [RV.1.1](#rv.1.1) | [SA-10](/controls/sa/sa-10/), [SR-3](/controls/sr/sr-3/), [SR-4](/controls/sr/sr-4/) |
| [RV.1.2](#rv.1.2) | [SA-11](/controls/sa/sa-11/) |
| [RV.1.3](#rv.1.3) | [SA-15(10)](/controls/sa/sa-15/#sa-15.10) |
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
