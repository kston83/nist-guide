---
title: Plan of Action and Milestones (POA&M)
type: form
description: The register of a system's known weaknesses and the planned actions, milestones and dates to fix them, as SP 800-53 CA-5 requires.
controls: [ca-5, ca-7, pm-4]
status: draft
stage: operate
role: system-owner
typical:
  ca-05_odp: at least monthly, and whenever an assessment, audit, scan or monitoring activity finds a new weakness
---

:::guidance
The POA&M is where every known weakness lives until it is fixed or formally accepted. Assessors check three things: that every "other than satisfied" finding and every unremediated scan result appears here, that each item has an owner and a realistic date, and that overdue items are explained rather than silently moved. Keep one POA&M per system, usually as a spreadsheet or in a GRC tool; the register below is also downloadable as a CSV file.
:::

| System | System owner | Last updated | Updated by |
| --- | --- | --- | --- |
| {{fill:system name and identifier}} | {{org:system-owner}} | {{fill:date}} | {{fill:name and title}} |

## How to use this register

- Add an item for each weakness or deficiency found in a control assessment, and for each known vulnerability the system has not yet fixed (CA-5a).
- Update the register {{param:ca-05_odp}}, using the findings of control assessments, independent audits or reviews, and continuous monitoring (CA-5b).
- Keep closed items, with their completion date and evidence, so the history supports the next assessment.
- When the {{org:system-owner}} proposes to accept a risk instead of fixing it, record the authorizing official's decision and its date in the item.
- Where a vulnerability tracker records these fields for scanner findings, its open findings can be the register's items for known vulnerabilities. Export them into the register at each update, so the whole plan is in one place (CA-5(1)).
- Record one item per vulnerability, listing every affected component, or the image that the affected components run, rather than one item per scan result.

:::guidance
A team that ships through a pipeline often has hundreds of open scanner findings, most within their remediation times. NIST's RA-7 discussion expects a plan of action and milestones entry whenever a mitigation cannot be completed immediately, so generate those entries from the tracker rather than copying them by hand. Findings that blocked a build and never deployed are not entries. See the [DevSecOps page on scanner findings](/devsecops/findings-to-poam/).
:::

| Field | What to record |
| --- | --- |
| ID | A unique, permanent identifier for the item |
| Weakness | A short name and a description of the weakness |
| Source | Where it was found: assessment, scan, audit, incident or continuous monitoring, with the report reference |
| Controls | The controls affected, such as AC-2 or SI-2 |
| Affected components | The components or services where the weakness exists |
| Date identified | When the weakness was found |
| Risk level | The risk the weakness poses, using the organization's risk scale |
| Owner | The role responsible for fixing it |
| Resources required | Funding, staff or tools needed, or "none" |
| Milestones | Interim steps, each with a planned date |
| Scheduled completion | The date the weakness will be fixed |
| Status | Open, completed or risk accepted |
| Completion date and evidence | When it was fixed and where the evidence is |
| Comments | Changes to dates, with the reason and who approved them |

## Register

| ID | Weakness | Source | Controls | Affected components | Date identified | Risk level | Owner | Resources required | Milestones | Scheduled completion | Status | Completion date and evidence | Comments |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:ID}} | {{fill:weakness}} | {{fill:source and report reference}} | {{fill:controls}} | {{fill:components}} | {{fill:date}} | {{fill:risk level}} | {{fill:owner role}} | {{fill:resources}} | {{fill:milestones and dates}} | {{fill:date}} | {{fill:status}} | {{fill:date and evidence location}} | {{fill:comments}} |
