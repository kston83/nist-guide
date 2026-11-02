---
title: 'PW.4 Reuse Existing, Well-Secured Software When Feasible Instead of Duplicating Functionality'
description: 'SSDF practice PW.4, Reuse Existing, Well-Secured Software When Feasible Instead of Duplicating Functionality (NIST SP 800-218, version 1.1): the practice, its tasks and NIST''s notional implementation examples.'
sidebar:
  label: 'PW.4 Reuse Existing, Well-Secured Software When Feasible Instead of Duplicating Functionality'
  order: 11
source:
  id: 'SP 800-218'
  version: '1.1'
  status: final
  checked: '2026-10'
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from the NIST SP 800-218, SSDF version 1.1 table (nist.sp.800-218.ssdf-table.xlsx). Edits between the nist markers are overwritten by npm run ssdf. -->

Practice PW.4 of the [Secure Software Development Framework](/methods/ssdf/) (SSDF) version 1.1, in the group [Produce Well-Secured Software (PW)](/methods/ssdf/#pw). The practice, task and example text is NIST's, from the table published with [SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) (February 2022, final).

## Practice

Lower the costs of software development, expedite software development, and decrease the likelihood of introducing additional security vulnerabilities into the software by reusing software modules and services that have already had their security posture checked. This is particularly important for software that implements security functionality, such as cryptographic modules and protocols.

## Tasks

NIST lists three tasks for this practice. The examples under each are notional: no example or combination of examples is required, and they are not the only feasible options (SP 800-218, section 2).

<a id="pw.4.1"></a>

### PW.4.1

Acquire and maintain well-secured software components (e.g., software libraries, modules, middleware, frameworks) from commercial, open-source, and other third-party developers for use by the organization’s software.

<details>
<summary>Notional implementation examples for PW.4.1</summary>

- **Example 1:** Review and evaluate third-party software components in the context of their expected use. If a component is to be used in a substantially different way in the future, perform the review and evaluation again with that new context in mind.
- **Example 2:** Determine secure configurations for software components, and make these available (e.g., as configuration-as-code) so developers can readily use the configurations.
- **Example 3:** Obtain provenance information (e.g., SBOM, source composition analysis, binary software composition analysis) for each software component, and analyze that information to better assess the risk that the component may introduce.
- **Example 4:** Establish one or more software repositories to host sanctioned and vetted open-source components.
- **Example 5:** Maintain a list of organization-approved commercial software components and component versions along with their provenance data.
- **Example 6:** Designate which components must be included in software to be developed.
- **Example 7:** Implement processes to update deployed software components to newer versions, and retain older versions of software components until all transitions from those versions have been completed successfully.
- **Example 8:** If the integrity or provenance of acquired binaries cannot be confirmed, build binaries from source code after verifying the source code’s integrity and provenance.

</details>

<a id="pw.4.2"></a>

### PW.4.2

Create and maintain well-secured software components in-house following SDLC processes to meet common internal software development needs that cannot be better met by third-party software components.

<details>
<summary>Notional implementation examples for PW.4.2</summary>

- **Example 1:** Follow organization-established security practices for secure software development when creating and maintaining the components.
- **Example 2:** Determine secure configurations for software components, and make these available (e.g., as configuration-as-code) so developers can readily use the configurations.
- **Example 3:** Maintain one or more software repositories for these components.
- **Example 4:** Designate which components must be included in software to be developed.
- **Example 5:** Implement processes to update deployed software components to newer versions, and maintain older versions of software components until all transitions from those versions have been completed successfully.

</details>

<a id="pw.4.4"></a>

### PW.4.4

Verify that acquired commercial, open-source, and all other third-party software components comply with the requirements, as defined by the organization, throughout their life cycles.

<details>
<summary>Notional implementation examples for PW.4.4</summary>

- **Example 1:** Regularly check whether there are publicly known vulnerabilities in the software modules and services that vendors have not yet fixed.
- **Example 2:** Build into the toolchain automatic detection of known vulnerabilities in software components.
- **Example 3:** Use existing results from commercial services for vetting the software modules and services.
- **Example 4:** Ensure that each software component is still actively maintained and has not reached end of life; this should include new vulnerabilities found in the software being remediated.
- **Example 5:** Determine a plan of action for each software component that is no longer being maintained or will not be available in the near future.
- **Example 6:** Confirm the integrity of software components through digital signatures or other mechanisms.
- **Example 7:** Review, analyze, and/or test code. See PW.7 and PW.8.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
