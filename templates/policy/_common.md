---
# Sections shared by every family policy; see the guidance block below.
status: draft
# Typical values for the -1 parameters, keyed as the {{param:xx-...}} fields
# below (xx becomes the family id). Lowercase: each slots into its sentence.
# xx-01_odp.04, the official who manages the policy, has no value here on
# purpose: the build fills it with the role accountable for the family policy
# (_family.yml `role`, as its label in variables.yml, without an article since
# the sentences say "The ..."), the role the decision worksheet names under
# "Who decides" (scripts/lib/template-pages.mjs, commonTypical).
typical:
  xx-01_odp.01: everyone within its scope, through the policy library
  xx-01_odp.02: the people who carry them out, and the system owners
  xx-01_odp.03: organization-level
  xx-01_odp.05: annually
  xx-01_odp.06: assessment or audit findings, security incidents or breaches, and changes in applicable laws, executive orders, directives, regulations, policies, standards or guidelines
  xx-01_odp.07: annually
  xx-01_odp.08: the same events as the policy, and changes to the systems, tools or services the procedures describe
---

# {{family:title}} Policy

:::guidance
The sections before and after Policy statements meet XX-1, which asks for a policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination and compliance, plus procedures, dissemination, a designated official and a review cycle. Assessors check each element, so keep every section even when it is short. Each statement cites the XX-1 item it meets. If you adopt several family policies, the same sections repeat in each; that is expected, and it lets each policy stand alone.
:::

## Purpose

This policy states what {{org:name}} requires for {{family:title}}, and who is accountable for meeting those requirements. (XX-1a.1(a))

## Scope

This policy applies at the {{param:xx-01_odp.03}} to every system that {{org:name}} owns or operates, or that is operated on its behalf, and to every person with access to those systems, including employees, contractors and partners. (XX-1a.1(a))

## Roles and responsibilities

- The {{family:role}} is accountable for this policy and shall approve exceptions to it. (XX-1a.1(a))
- The {{param:xx-01_odp.04}} shall manage the development, documentation and dissemination of this policy and its procedures. (XX-1b)
- Each {{org:system-owner}} shall implement this policy for their system and document how in the system security plan. (XX-1a.1(a))
- Each person within scope shall follow this policy and report suspected violations to the {{family:role}}. (XX-1a.1(a))

## Management commitment

The {{org:senior-leader}} approves this policy and shall provide the resources needed to implement it. (XX-1a.1(a))

## Coordination

The {{family:role}} shall coordinate this policy with the legal, privacy, human resources and procurement functions, and with the owners of related policies, before each approval. (XX-1a.1(a))

## Compliance

- This policy shall be consistent with the laws, executive orders, directives, regulations, policies, standards and guidelines that apply to {{org:name}}, including {{fill:laws, regulations and standards that apply to the organization}}. (XX-1a.1(b))
- The {{family:role}} shall review compliance with this policy through the organization's assessment and continuous monitoring activities. (XX-1a.1(a))
- An exception to this policy shall be requested in writing, approved by the {{family:role}}, time-limited and recorded with its compensating measures. (XX-1a.1(a))
- Violations of this policy shall be handled through the organization's sanctions process. (XX-1a.1(a))

## Procedures

The {{param:xx-01_odp.04}} shall ensure that documented procedures exist to implement this policy and its associated controls. (XX-1a.2)

## Dissemination

- The {{param:xx-01_odp.04}} shall disseminate this policy to {{param:xx-01_odp.01}}. (XX-1a)
- The {{param:xx-01_odp.04}} shall disseminate the procedures that implement this policy to {{param:xx-01_odp.02}}. (XX-1a)

## Policy statements

:::guidance
Each statement below comes from the clause for one control or enhancement in the chosen baseline. The reference at the end of each statement names the control item it meets.
:::

## Review and update

- The {{param:xx-01_odp.04}} shall review and update this policy {{param:xx-01_odp.05}} and following {{param:xx-01_odp.06}}. (XX-1c.1)
- The {{param:xx-01_odp.04}} shall review and update the procedures that implement this policy {{param:xx-01_odp.07}} and following {{param:xx-01_odp.08}}. (XX-1c.2)

:::federal
For federal information systems, this policy also carries out the agency's information security responsibilities under the Federal Information Security Modernization Act of 2014 ([44 U.S.C. § 3554](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title44-section3554&num=0&edition=prelim), Federal agency responsibilities) and [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, Responsibilities for Protecting and Managing Federal Information Resources.

- Where the agency's organization-wide policy sets a value for a parameter in this policy, each system shall use that value or a stricter one. (XX-1a.1(b))

:::
