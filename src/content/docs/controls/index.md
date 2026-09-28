---
title: Using the control pages
description: How the SP 800-53 control pages are built, what each part means, and how to read baselines and assessment objectives.
sidebar:
  order: 0
---

Every active SP 800-53 Rev. 5 control has its own page, generated from NIST's official machine-readable (OSCAL) catalog so the requirement text always matches the current release. Each page shows the same parts in the same order.

- **Summary.** Which SP 800-53B baselines include the control (Low, Moderate, High, Privacy), whether it is usually implemented at the organization or system level, and how many enhancements it has.
- **Control statement.** The requirement itself. Text in brackets, such as *[Assignment: organization-defined time period]*, is an organization-defined parameter you must fill in (see [Select](/rmf/steps/select/)).
- **NIST discussion.** NIST's explanation of intent, collapsed by default.
- **Control enhancements.** Each enhancement with its own baselines, statement, discussion and assessment objectives.
- **Assessment objectives.** The SP 800-53A "determine if" statements and the examine, interview and test objects an assessor will use (see [Assess](/rmf/steps/assess/)).
- **How to apply it.** Practical guidance from this guide: common implementations, evidence, inheritance and findings. This section is being written control by control, starting with the most-assessed controls; [AC-2](/controls/ac/ac-2/) shows the format.

Badges near each title show whether the page has guidance and a policy clause yet, and whether each is a draft or reviewed; [Guidance coverage](/controls/coverage/) totals them. To see every control in one baseline, use the baseline lists: [Low](/controls/baselines/low/), [Moderate](/controls/baselines/moderate/), [High](/controls/baselines/high/) and [Privacy](/controls/baselines/privacy/).

## Families

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Family | Name | Active controls |
| --- | --- | --- |
| [AC](/controls/ac/) | Access Control | 23 |
| [AT](/controls/at/) | Awareness and Training | 5 |
| [AU](/controls/au/) | Audit and Accountability | 15 |
| [CA](/controls/ca/) | Assessment, Authorization, and Monitoring | 8 |
| [CM](/controls/cm/) | Configuration Management | 14 |
| [CP](/controls/cp/) | Contingency Planning | 12 |
| [IA](/controls/ia/) | Identification and Authentication | 13 |
| [IR](/controls/ir/) | Incident Response | 9 |
| [MA](/controls/ma/) | Maintenance | 7 |
| [MP](/controls/mp/) | Media Protection | 8 |
| [PE](/controls/pe/) | Physical and Environmental Protection | 22 |
| [PL](/controls/pl/) | Planning | 8 |
| [PM](/controls/pm/) | Program Management | 32 |
| [PS](/controls/ps/) | Personnel Security | 9 |
| [PT](/controls/pt/) | Personally Identifiable Information Processing and Transparency | 8 |
| [RA](/controls/ra/) | Risk Assessment | 9 |
| [SA](/controls/sa/) | System and Services Acquisition | 17 |
| [SC](/controls/sc/) | System and Communications Protection | 47 |
| [SI](/controls/si/) | System and Information Integrity | 22 |
| [SR](/controls/sr/) | Supply Chain Risk Management | 12 |
<!-- markdownlint-restore -->
<!-- nist:end -->

Control text is reproduced from NIST SP 800-53 Rev. 5 and SP 800-53A Rev. 5, which are U.S. government works in the public domain.
