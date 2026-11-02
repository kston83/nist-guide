---
title: 'PO.1 Define Security Requirements for Software Development'
description: 'SSDF practice PO.1, Define Security Requirements for Software Development (NIST SP 800-218, version 1.1): the practice, its tasks, NIST''s notional implementation examples and the SP 800-53 controls NIST maps them to.'
sidebar:
  label: 'PO.1 Define Security Requirements for Software Development'
  order: 1
source:
  id: 'SP 800-218'
  version: '1.1'
  status: final
  checked: '2026-10'
implements: [sa-1, sa-4, sa-8, sa-8.3, sa-9, sa-10, sa-10.1, sa-15, sr-3, sr-4, sr-5]
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from the NIST SP 800-218, SSDF version 1.1 table (nist.sp.800-218.ssdf-table.xlsx). Edits between the nist markers are overwritten by npm run ssdf. -->

Practice PO.1 of the [Secure Software Development Framework](/methods/ssdf/) (SSDF) version 1.1, in the group [Prepare the Organization (PO)](/methods/ssdf/#po). The practice, task and example text and the SP 800-53 references are NIST's, from the table published with [SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) (February 2022, final).

## Practice

Ensure that security requirements for software development are known at all times so that they can be taken into account throughout the SDLC and duplication of effort can be minimized because the requirements information can be collected once and shared. This includes requirements from internal sources (e.g., the organization’s policies, business objectives, and risk management strategy) and external sources (e.g., applicable laws and regulations).

## Tasks

NIST lists three tasks for this practice. The examples under each are notional: no example or combination of examples is required, and they are not the only feasible options (SP 800-218, section 2).

<a id="po.1.1"></a>

### PO.1.1

Identify and document all security requirements for the organization’s software development infrastructures and processes, and maintain the requirements over time.

<details>
<summary>Notional implementation examples for PO.1.1</summary>

- **Example 1:** Define policies for securing software development infrastructures and their components, including development endpoints, throughout the SDLC and maintaining that security.
- **Example 2:** Define policies for securing software development processes throughout the SDLC and maintaining that security, including for open-source and other third-party software components utilized by software being developed.
- **Example 3:** Review and update security requirements at least annually, or sooner if there are new requirements from internal or external sources, or a major security incident targeting software development infrastructure has occurred.
- **Example 4:** Educate affected individuals on impending changes to requirements.

</details>

<a id="po.1.2"></a>

### PO.1.2

Identify and document all security requirements for organization-developed software to meet, and maintain the requirements over time.

<details>
<summary>Notional implementation examples for PO.1.2</summary>

- **Example 1:** Define policies that specify risk-based software architecture and design requirements, such as making code modular to facilitate code reuse and updates; isolating security components from other components during execution; avoiding undocumented commands and settings; and providing features that will aid software acquirers with the secure deployment, operation, and maintenance of the software.
- **Example 2:** Define policies that specify the security requirements for the organization’s software, and verify compliance at key points in the SDLC (e.g., classes of software flaws verified by gates, responses to vulnerabilities discovered in released software).
- **Example 3:** Analyze the risk of applicable technology stacks (e.g., languages, environments, deployment models), and recommend or require the use of stacks that will reduce risk compared to others.
- **Example 4:** Define policies that specify what needs to be archived for each software release (e.g., code, package files, third-party libraries, documentation, data inventory) and how long it needs to be retained based on the SDLC model, software end-of-life, and other factors.
- **Example 5:** Ensure that policies cover the entire software life cycle, including notifying users of the impending end of software support and the date of software end-of-life.
- **Example 6:** Review all security requirements at least annually, or sooner if there are new requirements from internal or external sources, a major vulnerability is discovered in released software, or a major security incident targeting organization-developed software has occurred.
- **Example 7:** Establish and follow processes for handling requirement exception requests, including periodic reviews of all approved exceptions.

</details>

<a id="po.1.3"></a>

### PO.1.3

Communicate requirements to all third parties who will provide commercial software components to the organization for reuse by the organization’s own software. \[Formerly PW.3.1]

<details>
<summary>Notional implementation examples for PO.1.3</summary>

- **Example 1:** Define a core set of security requirements for software components, and include it in acquisition documents, software contracts, and other agreements with third parties.
- **Example 2:** Define security-related criteria for selecting software; the criteria can include the third party’s vulnerability disclosure program and product security incident response capabilities or the third party’s adherence to organization-defined practices.
- **Example 3:** Require third parties to attest that their software complies with the organization’s security requirements.
- **Example 4:** Require third parties to provide provenance data and integrity verification mechanisms for all components of their software.
- **Example 5:** Establish and follow processes to address risk when there are security requirements that third-party software components to be acquired do not meet; this should include periodic reviews of all approved exceptions to requirements.

</details>

## SP 800-53 references

NIST's table maps each task to SP 800-53 controls in the "SP80053" entries of its References column, which also maps tasks to other secure development documents (not listed here). Each control's page lists the tasks that cite it under Methods.

| Task | SP 800-53 references |
| --- | --- |
| [PO.1.1](#po.1.1) | [SA-1](/controls/sa/sa-1/), [SA-8](/controls/sa/sa-8/), [SA-15](/controls/sa/sa-15/), [SR-3](/controls/sr/sr-3/) |
| [PO.1.2](#po.1.2) | [SA-8](/controls/sa/sa-8/), [SA-8(3)](/controls/sa/sa-8/#sa-8.3), [SA-15](/controls/sa/sa-15/), [SR-3](/controls/sr/sr-3/) |
| [PO.1.3](#po.1.3) | [SA-4](/controls/sa/sa-4/), [SA-9](/controls/sa/sa-9/), [SA-10](/controls/sa/sa-10/), [SA-10(1)](/controls/sa/sa-10/#sa-10.1), [SA-15](/controls/sa/sa-15/), [SR-3](/controls/sr/sr-3/), [SR-4](/controls/sr/sr-4/), [SR-5](/controls/sr/sr-5/) |
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
