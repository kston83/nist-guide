---
title: 'SA-2 Allocation of Resources'
description: 'NIST SP 800-53 Rev. 5 control SA-2, Allocation of Resources: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SA-2 Allocation of Resources'
  order: 2
control:
  id: SA-2
  family: SA
  baselines: [Low, Moderate, High, Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | None |

**Related controls:** [PL-7](/controls/pl/pl-7/), [PM-3](/controls/pm/pm-3/), [PM-11](/controls/pm/pm-11/), [SA-9](/controls/sa/sa-9/), [SR-3](/controls/sr/sr-3/), [SR-5](/controls/sr/sr-5/)

## Control statement

- **a.** Determine the high-level information security and privacy requirements for the system or system service in mission and business process planning;
- **b.** Determine, document, and allocate the resources required to protect the system or system service as part of the organizational capital planning and investment control process; and
- **c.** Establish a discrete line item for information security and privacy in organizational programming and budgeting documentation.

<details>
<summary>NIST discussion</summary>

Resource allocation for information security and privacy includes funding for system and services acquisition, sustainment, and supply chain-related risks throughout the system development life cycle.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SA-2</summary>

Determine if:

- **SA-02a.**
  - **SA-02a.[01]** the high-level information security requirements for the system or system service are determined in mission and business process planning;
  - **SA-02a.[02]** the high-level privacy requirements for the system or system service are determined in mission and business process planning;
- **SA-02b.**
  - **SA-02b.[01]** the resources required to protect the system or system service are determined and documented as part of the organizational capital planning and investment control process;
  - **SA-02b.[02]** the resources required to protect the system or system service are allocated as part of the organizational capital planning and investment control process;
- **SA-02c.**
  - **SA-02c.[01]** a discrete line item for information security is established in organizational programming and budgeting documentation;
  - **SA-02c.[02]** a discrete line item for privacy is established in organizational programming and budgeting documentation.

**Examine:** System and services acquisition policy; system and services acquisition procedures; system and services acquisition strategy and plans; procedures addressing the allocation of resources to information security and privacy requirements; procedures addressing capital planning and investment control; organizational programming and budgeting documentation; system security plan; privacy plan; supply chain risk management policy; other relevant documents or records.

**Interview:** Organizational personnel with capital planning, investment control, organizational programming, and budgeting responsibilities; organizational personnel with information security and privacy responsibilities; organizational personnel with supply chain risk management responsibilities.

**Test:** Organizational processes for determining information security and privacy requirements; organizational processes for capital planning, programming, and budgeting; mechanisms supporting and/or implementing organizational capital planning, programming, and budgeting.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

SA-2 makes security and privacy part of a system's business case, set before money is committed. Determine the high-level security and privacy requirements while planning the mission or business process. Cost the resources to meet them through capital planning, and show security and privacy as their own lines in the budget. NIST's SA-2 discussion includes acquisition, sustainment and supply chain risk across the whole life cycle, so the estimate covers the years of operation, not only the build.

**Common implementations.** A business case or project charter template with a security and privacy requirements section, completed with the security team and the privacy office before approval. The requirements come from a first look at the system's likely security category and the personally identifiable information it will handle; they are refined later under SA-4. A cost model that covers licenses and tools, staff time, assessments, continuous monitoring, reauthorization and supply chain reviews for each year of the system's life. Budget documents with one line for information security and another for privacy, as SA-2c and its two assessment objectives require. The organization-wide side of this is [PM-3](/controls/pm/pm-3/), information security and privacy resources.

**Organization-defined parameters.** SA-2 has none. The [System and Services Acquisition policy](/templates/policies/sa/) assigns the system owner to set the requirements and document the resources, the senior leader to allocate them and record any shortfall, and the CISO and the senior privacy official to ensure the two budget lines exist.

**Evidence assessors ask for.**

- The planning documents for the system, showing high-level security requirements and, separately, privacy requirements
- The capital planning or investment record, showing the resources determined, documented and allocated for protecting the system
- Programming and budgeting documents with a discrete line item for information security and another for privacy
- Records of any shortfall between the resources requested and those allocated, and the decision taken

**Inheritance.** The capital planning process and the budget structure are organization-level and often provided as common controls, with PM-3. The system owns its own requirements and its own cost estimate, so SA-2 is usually a hybrid control.

**Common findings.**

- Security folded into a general IT operations line, with no discrete line item to point to.
- A security line but no privacy line, for a system that processes personally identifiable information.
- Build costs budgeted, but not the recurring costs of assessments, continuous monitoring and reauthorization.
- Security requirements first written after the contract is awarded, so the costs they bring were never planned.

**Enhancements in the Moderate baseline.** SA-2 has no enhancements.

**Federal systems** (as of September 2026). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.b(1) to (3), requires agencies to plan for the resources their security and privacy programs need. Security and privacy activities and costs must be identified and included in IT investment capital plans and budget requests. Agencies must also plan and budget to upgrade, replace or retire any system that cannot be protected commensurate with risk. Section 4.e(6) has the Senior Agency Official for Privacy review IT capital investment plans and budget requests so that privacy requirements and their costs are explicitly included.
