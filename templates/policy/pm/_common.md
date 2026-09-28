---
# Opening and closing sections of the Program Management policy. PM-1 asks for an
# organization-wide program plan rather than the -1 policy elements every other
# family shares, so PM has its own sections instead of policy/_common.md.
status: draft
typical:
  pm-01_odp.01: annually
  pm-01_odp.02: a significant change to the organization's mission, structure, risk tolerance or systems, a major incident, or a finding from an assessment or audit of the program
---

# {{family:title}} Policy

:::guidance
PM-1 asks for an organization-wide information security program plan: a document that describes the program, its common controls and who is responsible for what, approved by a senior official. This policy commits the organization to that plan and sets the rules for keeping it. The plan itself is a separate document. Program management controls are carried out once for the whole organization; NIST SP 800-53B allocates none of them to a security baseline, so this policy has a single edition whatever the baselines of your systems. Each statement cites the PM-1 item it meets.
:::

## Purpose

This policy establishes {{org:name}}'s organization-wide information security program, and states who leads it and how it is planned, resourced and overseen.

## Scope

This policy applies to all of {{org:name}}: every system it owns or operates or that is operated on its behalf, the mission and business processes those systems support, and every person with access to them. The program management controls in this policy are carried out once for the organization, and systems inherit them as common controls.

## Roles and responsibilities

- The {{family:role}} is accountable for this policy and for the information security program, and shall approve exceptions to this policy. (PM-1a.2)
- The {{org:privacy-official}} shall lead the privacy program and coordinate it with the information security program. (PM-1a.3)
- Each {{org:system-owner}} shall use the common controls the program provides and record them as inherited in the system security plan. (PM-1a.1)
- Each person within scope shall follow this policy and report suspected violations to the {{family:role}}. (PM-1a.2)

## Management commitment

The {{org:senior-leader}} approves this policy and shall provide the resources the information security and privacy programs need. (PM-1a.2)

## Coordination

The {{family:role}} shall coordinate the program with the privacy, legal, human resources, procurement, finance, physical security and mission functions, and record that coordination in the program plan. (PM-1a.3)

## Compliance

- This policy and the program plan shall be consistent with the laws, regulations and standards that apply to {{org:name}}, including {{fill:laws, regulations and standards that apply to the organization}}. (PM-1a.2)
- The {{family:role}} shall review compliance with this policy through the organization's assessment and continuous monitoring activities. (PM-1a.2)
- An exception to this policy shall be requested in writing, approved by the {{family:role}}, time-limited and recorded with its compensating measures. (PM-1a.2)
- Violations of this policy shall be handled through the organization's sanctions process. (PM-1a.2)

## Information security program plan

:::guidance
Assessors ask to see the approved plan, its approval date and evidence of the last review. A plan can be one document or a set of documents, as long as the set is identified. The plan lists the common controls the program provides, so system owners can mark them as inherited in each system security plan.
:::

- The {{family:role}} shall develop, maintain and disseminate an organization-wide information security program plan. (PM-1a)
- The plan shall give an overview of the requirements for the security program, and describe the program management controls and common controls in place or planned to meet them. (PM-1a.1)
- The plan shall identify and assign roles and responsibilities, and describe management commitment, coordination among organizational entities, and compliance. (PM-1a.2)
- The plan shall reflect the coordination among the organizational entities responsible for information security. (PM-1a.3)
- The {{org:senior-leader}}, as the senior official accountable for the risk the organization incurs, shall approve the plan. (PM-1a.4)
- The {{family:role}} shall disseminate the approved plan to every system owner and authorizing official and to the leaders of the functions named under Coordination. (PM-1a)
- The {{family:role}} shall review and update the plan {{param:pm-01_odp.01}} and following {{param:pm-01_odp.02}}. (PM-1b)
- The {{family:role}} shall protect the plan from unauthorized disclosure and modification by limiting who can change it and keeping each approved version. (PM-1c)

## Policy statements

:::guidance
Each statement below comes from the clause for one program management control or enhancement. The reference at the end of each statement names the control item it meets. Where a control does not apply to your organization, keep its heading, replace the statements with the reason, and record the decision in the program plan.
:::

## Review and update

- The {{family:role}} shall review this policy whenever the program plan is reviewed, and update it when the review finds a change is needed. (PM-1b)

:::federal
For federal agencies, this policy carries out the agency-wide information security program required by the Federal Information Security Modernization Act of 2014 ([44 U.S.C. § 3554(b)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title44-section3554&num=0&edition=prelim)) and [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, Responsibilities for Protecting and Managing Federal Information Resources.

- The program plan shall carry out the agency-wide information security program that 44 U.S.C. § 3554(b) requires. (PM-1a)

:::
