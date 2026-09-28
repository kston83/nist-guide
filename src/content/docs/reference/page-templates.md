---
title: Page templates
description: Starting points for control guidance, industry guides and technology playbooks, so every page follows the same structure.
sidebar:
  order: 3
---

Every page in the guide follows a predictable structure so readers know where to look. Copy the matching template below into a new Markdown file.

## Control guidance

Control pages are generated from the NIST catalog. Add your guidance **below** the line `<!-- guidance: write below this line -->` in the control's file; that part is never overwritten when the catalog is refreshed. See [AC-2](/controls/ac/ac-2/) for a finished example.

```markdown
## How to apply it

One or two sentences on what this control really asks for in practice.

**Common implementations.** How organizations usually meet it, and what "good" looks like.

**Organization-defined parameters.** Typical values and where they are usually set.

**Evidence assessors ask for.**

- Artifact one
- Artifact two

**Inheritance.** What is usually inherited from a cloud or enterprise provider, and what stays with the system.

**Common findings.**

- Finding one

**Industry notes.** Links to industry guides where this control carries extra weight.

**Technology notes.** Links to technology playbooks that implement it.
```

## Front matter rules

The build checks these fields and fails with a message naming the page and the bad value:

- `controls` lists lowercase ids of active SP 800-53 controls or enhancements, as NIST writes them in OSCAL: `ac-2` for AC-2, `ac-2.3` for AC-2(3). Withdrawn controls are rejected. The list of valid ids is `src/data/control-ids.json`, written by `npm run controls`.
- `industries` and `technologies` are slugs: lowercase letters and digits, with single hyphens between words (`entra-id`, not `Entra_ID`).

## Industry guide

Save as `src/content/docs/industries/<industry>.md`.

```markdown
---
title: Healthcare
description: Applying the RMF and SP 800-53 to systems that handle protected health information.
industries: [healthcare]
controls: [ac-2, au-2]           # controls this page gives guidance on
---

One-paragraph summary: who this applies to and the main rules alongside 800-53.

## Rules that apply

| Rule | Regulator | What it requires | Overlap with 800-53 |
| --- | --- | --- | --- |

## How the RMF steps change

What is different at each step (categorization factors, extra controls, assessment expectations).

## Controls that carry extra weight

| Control | Why it matters here |
| --- | --- |

## Common findings

## Key references
```

## Technology playbook

Save as `src/content/docs/technology/<platform>.md`.

```markdown
---
title: Microsoft Entra ID
description: Meeting and evidencing identity and access controls in Microsoft Entra ID.
technologies: [entra-id]
controls: [ac-2, ia-2, ia-5]      # controls this page gives guidance on
---

One-paragraph summary: what the platform is and which controls it helps with.

## Controls covered

| Control | How the platform meets it | Customer or provider responsibility |
| --- | --- | --- |

## Recommended configuration

Settings, with the control each one supports.

## Evidence to collect

What to export or screenshot, and how often.

## Common findings

## Key references
```
