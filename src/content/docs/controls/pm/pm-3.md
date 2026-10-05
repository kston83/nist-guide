---
title: 'PM-3 Information Security and Privacy Resources'
description: 'NIST SP 800-53 Rev. 5 control PM-3, Information Security and Privacy Resources: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PM-3 Information Security and Privacy Resources'
  order: 3
control:
  id: PM-3
  family: PM
  baselines: [Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Privacy | Organization | None |

**Related controls:** [PM-4](/controls/pm/pm-4/), [SA-2](/controls/sa/sa-2/)

## Control statement

- **a.** Include the resources needed to implement the information security and privacy programs in capital planning and investment requests and document all exceptions to this requirement;
- **b.** Prepare documentation required for addressing information security and privacy programs in capital planning and investment requests in accordance with applicable laws, executive orders, directives, policies, regulations, standards; and
- **c.** Make available for expenditure, the planned information security and privacy resources.

<details>
<summary>NIST discussion</summary>

Organizations consider establishing champions for information security and privacy and, as part of including the necessary resources, assign specialized expertise and resources as needed. Organizations may designate and empower an Investment Review Board or similar group to manage and provide oversight for the information security and privacy aspects of the capital planning and investment control process.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PM-3</summary>

Determine if:

- **PM-03a.**
  - **PM-03a.[01]** the resources needed to implement the information security program are included in capital planning and investment requests, and all exceptions are documented;
  - **PM-03a.[02]** the resources needed to implement the privacy program are included in capital planning and investment requests, and all exceptions are documented;
- **PM-03b.**
  - **PM-03b.[01]** the documentation required for addressing the information security program in capital planning and investment requests is prepared in accordance with applicable laws, executive orders, directives, policies, regulations, standards;
  - **PM-03b.[02]** the documentation required for addressing the privacy program in capital planning and investment requests is prepared in accordance with applicable laws, executive orders, directives, policies, regulations, standards;
- **PM-03c.**
  - **PM-03c.[01]** information security resources are made available for expenditure as planned;
  - **PM-03c.[02]** privacy resources are made available for expenditure as planned.

**Examine:** Information security program plan; Exhibit 300; Exhibit 53; business cases for capital planning and investment; procedures for capital planning and investment; documentation of exceptions to capital planning requirements; other relevant documents or records.

**Interview:** Organizational personnel with information security program planning responsibilities; organizational personnel with privacy program planning responsibilities; organizational personnel responsible for capital planning and investment; organizational personnel with information security responsibilities; organizational personnel with privacy responsibilities.

**Test:** Organizational processes for capital planning and investment; organizational processes for business case, Exhibit 300, and Exhibit 53 development; mechanisms supporting the capital planning and investment process.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PM-3 ties the security and privacy programs to the budget. Include the resources both programs need in every capital planning and investment request, document every exception, and prepare the security and privacy documentation those requests require. Then make the planned resources available to spend, so they are not lost between plan and execution (c).

PM-3 is in the SP 800-53B Privacy baseline, and has no security baseline, like every PM control. NIST's PM-3 discussion suggests security and privacy champions, and an investment review board or similar group to oversee the security and privacy side of capital planning.

**Common implementations.** The investment request template has a security and privacy cost section: staff, tools, assessments and authorization, continuous monitoring, and privacy work such as privacy impact assessments. The Chief Information Security Officer and the senior privacy official review each request above a set threshold before the investment review board sees it. Exceptions go in a log with the reason and who approved them.

The [Program Management policy](/templates/policies/pm/) splits the work: the Chief Information Security Officer and the senior privacy official identify the resources and prepare the documentation, and the senior leader includes the resources, documents exceptions and releases the funds. Section 4 of the [Information Security Program Plan](/templates/plans/information-security-program-plan/) shows the program's current and planned staff and budget. Each system's own share of this, in its business case and acquisition, is [SA-2](/controls/sa/sa-2/).

**Organization-defined parameters.** PM-3 has none. One choice the clause leaves to you, with a typical value your organization may set differently:

| Choice | Typical value |
| --- | --- |
| Which requests get a security and privacy review | Every capital planning and investment request, as the clause states |

**Evidence assessors ask for.**

- A sample of capital planning and investment requests, each with its security and privacy resources shown
- The exception log, with the reason for each exception and who approved it
- Investment review board minutes showing security and privacy were considered
- The security and privacy documentation prepared for those requests (b)
- Budget execution records showing the planned security and privacy funds were made available (c)

**Inheritance.** PM-3 is implemented once, for the whole organization, and every system relies on it. The system-level counterpart is SA-2.

**Common findings.**

- Security costs folded into the IT operations budget, so no one can show what was requested or spent.
- Privacy resources missing from requests entirely.
- Requests that leave out authorization and continuous monitoring costs for new systems.
- Exceptions made without a record.
- Funds planned for security and moved to other uses during the year (c).

**Enhancements.** PM-3 has no enhancements.

**Federal systems** (as of October 2026). FISMA makes the agency head responsible for "ensuring that information security management processes are integrated with agency strategic, operational, and budgetary planning processes" ([44 U.S.C. § 3554(a)(1)(C)](https://www.govinfo.gov/link/uscode/44/3554?link-type=html)). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.b, has agencies identify and plan for the resources the security and privacy programs need (4.b(1)). Agencies include security and privacy activities and costs in IT investment capital plans and budget requests (4.b(2)), and make sure investment plans submitted to OMB meet the security and privacy requirements for their life cycle stage (4.b(4)). Section 4.e(6) has the senior agency official for privacy review IT capital investment plans and budget requests so privacy requirements and their costs are explicitly identified. The main body, section 5.a(3)(e)(ii), requires the initial budget submission to OMB to affirm that this official has reviewed the IT investments portion of the request.
