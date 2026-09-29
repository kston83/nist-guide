---
title: Security Categorization Worksheet
type: form
description: A worksheet for categorizing a system and its information by the impact of a loss of confidentiality, integrity or availability, with the rationale and approval SP 800-53 RA-2 requires.
controls: [ra-2]
status: draft
stage: foundation
---

:::guidance
Categorization drives almost everything that follows: the control baseline (PL-10), the depth of assessment, and how the authorizing official weighs risk. Work through it with the information owners, not just the security team, because they know what harm a loss would cause. The result goes into section 6 of the [System Security Plan](/templates/plans/system-security-plan/); keep this worksheet as the supporting rationale.
:::

| System name | System identifier | Prepared by | Date |
| --- | --- | --- | --- |
| {{fill:system name}} | {{fill:unique system identifier}} | {{fill:name and title}} | {{fill:date}} |

## 1. Impact levels

Rate each loss using these levels, adapted from FIPS 199. The adverse effect is on the organization's operations, its assets, or individuals.

| Level | A loss of confidentiality, integrity or availability could be expected to have | For example, the loss might |
| --- | --- | --- |
| Low | A limited adverse effect | Noticeably reduce the effectiveness of primary functions that can still be performed; cause minor damage to assets or minor financial loss; or cause minor harm to individuals |
| Moderate | A serious adverse effect | Significantly reduce the effectiveness of primary functions that can still be performed; cause significant damage to assets or significant financial loss; or cause significant harm to individuals, not involving loss of life or serious life-threatening injury |
| High | A severe or catastrophic adverse effect | Leave the organization unable to perform one or more primary functions; cause major damage to assets or major financial loss; or cause severe or catastrophic harm to individuals, involving loss of life or serious life-threatening injury |

Describe what each level means for {{org:name}} in its own terms, for example money lost, people affected or hours of outage: {{fill:organization-specific examples for low, moderate and high, or a reference to the risk management strategy}}.

## 2. System description

| Item | Description |
| --- | --- |
| Purpose | {{fill:the mission or business function the system supports}} |
| Users | {{fill:who uses the system, internal and external}} |
| Boundary | {{fill:the main components, and where the system ends}} |
| Connections | {{fill:other systems it exchanges information with}} |
| Personally identifiable information | {{fill:yes or no; if yes, what kinds}} |

## 3. Information types

List every type of information the system processes, stores or transmits in the register at the end of this worksheet (RA-2a). For each, rate the impact of a loss of each security objective, and say why. Where a type's provisional rating is changed, for example because of the volume of records, a legal requirement or how critical the function is, record the change and the reason.

:::guidance
Confidentiality of information meant for the public can be rated "not applicable"; integrity and availability always get a rating. Consider aggregation: many records together can do more harm than one.
:::

## 4. System categorization

The system's rating for each objective is the highest rating of any of its information types (the high-water mark), raised where the system itself calls for it, for example because other systems depend on it or its own configuration and security information needs more protection. A system is never rated "not applicable" for any objective.

| Objective | System impact level | Rationale |
| --- | --- | --- |
| Confidentiality | {{fill:low, moderate or high}} | {{fill:rationale}} |
| Integrity | {{fill:low, moderate or high}} | {{fill:rationale}} |
| Availability | {{fill:low, moderate or high}} | {{fill:rationale}} |

The overall security categorization is {{fill:low, moderate or high}}, the highest of the three, and the system uses the {{fill:Low, Moderate or High}} control baseline (PL-10). The results and rationale are recorded in section 6 of the system security plan (RA-2b).

:::federal
Federal systems categorize under [FIPS 199](https://csrc.nist.gov/pubs/fips/199/final) (February 2004), whose impact definitions and examples section 1 adapts and whose high-water mark rule section 4 follows, and identify information types and their provisional impact levels from [NIST SP 800-60 Rev. 1](https://csrc.nist.gov/pubs/sp/800/60/v1/r1/final) (August 2008; [Volume 2](https://csrc.nist.gov/pubs/sp/800/60/v2/r1/final) lists the types). Under [FIPS 200](https://csrc.nist.gov/pubs/fips/200/final), the system's impact level is the highest value for any of the three objectives, and it selects the matching SP 800-53B baseline.

- Record the SP 800-60 identifier of each information type in the register.
- Record each provisional impact level from SP 800-60 Volume 2, and any change from it, with the reason.

:::

## 5. Review and approval

The authorizing official, or a designated representative, reviews and approves the categorization (RA-2c).

| Name | Title | Decision | Signature | Date |
| --- | --- | --- | --- | --- |
| {{fill:name}} | {{org:system-owner}} | Submitted | | {{fill:date}} |
| {{fill:name}} | {{fill:authorizing official or designated representative}} | {{fill:approved, or returned with comments}} | | {{fill:date}} |

Review this worksheet whenever the system, the information it handles or its environment of operation changes significantly.

## Register

One row per information type. "Provisional levels" are the starting ratings from a catalog such as SP 800-60 Volume 2, where one is used; leave blank otherwise.

| Information type | Catalog identifier | Provisional levels (C, I, A) | Confidentiality | Integrity | Availability | Rationale and adjustments |
| --- | --- | --- | --- | --- | --- | --- |
| {{fill:information type}} | {{fill:identifier, if any}} | {{fill:provisional levels, if any}} | {{fill:low, moderate, high or not applicable}} | {{fill:low, moderate or high}} | {{fill:low, moderate or high}} | {{fill:why, and any adjustment}} |
