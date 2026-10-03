---
title: Onboarding, Transfer and Termination Checklist
type: form
description: The steps, owners and time limits for granting, changing and removing a person's access when they join, move or leave, with a register of each personnel action, as SP 800-53 PS-3, PS-4, PS-5 and AC-2 require.
controls: [ps-4, ps-5, ps-3, ps-6, ps-7, ac-2, at-2]
status: draft
stage: core
typical:
  ps-04_odp.01: '24 hours, or the same day for privileged users; for an involuntary termination, no later than when the individual is told'
  ps-04_odp.02: 'the individual''s continuing duty not to disclose organizational information, the return of all organizational property and information, and that former credentials must not be used'
  ps-05_odp.01: 'a review of the individual''s access by the losing and gaining supervisors, removal of access the new position does not need, and the return or issue of keys, badges and equipment'
  ps-05_odp.02: '5 business days'
  ps-05_odp.03: 'the account managers and system owners of the systems the individual has access to'
  ps-05_odp.04: '24 hours'
  ps-07_odp.02: '24 hours'
  ac-02_odp.07: 24 hours, or the same day for privileged users
---

:::guidance
This checklist ties the personnel controls to account management (AC-2l asks for the two processes to be aligned). Start a copy for each personnel action, and keep the completed copy: it is the evidence assessors ask for when they sample recent hires, transfers and departures. Most organizations automate part of it through a feed from the human resources system to the identity provider; the checklist still records who confirmed each step. Time limits here must match the policy.
:::

| Organization | Checklist owner | Last updated | Updated by |
| --- | --- | --- | --- |
| {{org:name}} | {{org:hr-office}} | {{fill:date}} | {{fill:name and title}} |

## How to use this checklist

- The {{org:hr-office}} starts a checklist when a hire, transfer or departure is approved, or when an external provider reports one (PS-7d).
- Each owner completes their steps and records the date and their initials.
- A step that does not apply is marked "not applicable" with the reason, not left blank.
- The {{org:hr-office}} closes the checklist when every step is done, records it in the register below, and keeps it {{fill:where and for how long}}.

| Person | Organizational unit or employer | Action | Effective date | Checklist started by |
| --- | --- | --- | --- | --- |
| {{fill:name or identifier}} | {{fill:unit or employer}} | {{fill:onboarding, transfer or termination}} | {{fill:date}} | {{fill:name}} |

## Onboarding

| # | Step | Owner | When | Control | Done (date, initials) |
| --- | --- | --- | --- | --- | --- |
| 1 | Confirm the position's risk designation and the screening it requires | {{org:hr-office}} | Before the offer | PS-2 | |
| 2 | Complete screening for the position | {{org:hr-office}} | Before access | PS-3a | |
| 3 | Get the signed access agreement and Rules of Behavior | {{org:hr-office}} | Before access | PS-6c.1, PL-4 | |
| 4 | Complete security and privacy literacy training | {{org:supervisor}} | Before access | AT-2a.1 | |
| 5 | Submit and approve the [access request](/templates/forms/access-request-form/) for each system | {{org:supervisor}} | Before access | AC-2e | |
| 6 | Create accounts and issue authenticators | {{org:account-manager}} | After steps 2 to 5 | AC-2, IA-5 | |
| 7 | Issue a building pass and devices, and record them (the pass in the [physical access list](/templates/forms/physical-access-list/)) | {{fill:facilities or IT asset owner}} | First day | PE-2, CM-8 | |
| 8 | Assign role-based training, if the role needs it | {{org:supervisor}} | Before duties begin | AT-3 | |

## Transfer

| # | Step | Owner | When | Control | Done (date, initials) |
| --- | --- | --- | --- | --- | --- |
| 1 | Notify {{param:ps-05_odp.03}} of the transfer | {{org:hr-office}} | Within {{param:ps-05_odp.04}} | PS-5d, AC-2h.2 | |
| 2 | Review and confirm the need for current logical and physical access | Losing and gaining {{org:supervisor}} | Before the effective date | PS-5a | |
| 3 | Initiate the transfer actions: {{param:ps-05_odp.01}} | {{org:hr-office}} | Within {{param:ps-05_odp.02}} of the formal transfer action | PS-5b | |
| 4 | Remove access the new position does not need, and grant approved new access | {{org:account-manager}} | With step 3 | PS-5c, AC-2 | |
| 5 | Rescreen, if the new position has a higher risk designation | {{org:hr-office}} | Before the new access is granted | PS-3b | |
| 6 | Sign any new access agreement the new position requires | {{org:hr-office}} | Before the new access is granted | PS-6c.1 | |
| 7 | Assign role-based training for the new role, if it needs it | Gaining {{org:supervisor}} | Before duties begin | AT-3 | |

## Termination

For an involuntary termination, or one for cause, do steps 1 and 2 no later than when the person is told.

| # | Step | Owner | When | Control | Done (date, initials) |
| --- | --- | --- | --- | --- | --- |
| 1 | Notify the account managers and system owners | {{org:hr-office}} | Within {{param:ac-02_odp.07}} | AC-2h.2 | |
| 2 | Disable all system access | {{org:account-manager}} | Within {{param:ps-04_odp.01}} | PS-4a | |
| 3 | Revoke authenticators and credentials, including tokens, certificates and building passes | {{org:account-manager}} | With step 2 | PS-4b | |
| 4 | Change the authenticators of any shared or group account the person used | {{org:account-manager}} | With step 2 | AC-2k | |
| 5 | Conduct the exit interview, covering {{param:ps-04_odp.02}} | {{org:hr-office}} | By the last day, where possible | PS-4c | |
| 6 | Retrieve devices, tokens, keys, identification cards, building passes and information | {{org:supervisor}} | By the last day | PS-4d | |
| 7 | Transfer ownership of the person's files, mailboxes and systems | {{org:supervisor}} | Before accounts are removed | PS-4e | |
| 8 | Remove accounts, or keep them disabled, as the [account management procedure](/templates/procedures/account-management-procedure/) says | {{org:account-manager}} | {{fill:when, for example after 30 days}} | AC-2f | |

## External personnel

When the person works for an external provider, the provider must report a transfer or termination within {{param:ps-07_odp.02}} (PS-7d). That report starts the transfer or termination section above. Record the date the provider's report arrived: {{fill:date}}.

:::federal
[FIPS 201-3](https://csrc.nist.gov/pubs/fips/201-3/final) (January 2022) requires the FBI National Criminal History Check to be completed and favorably adjudicated before a PIV Card is issued to someone with no prior investigation (section 2.2), and requires the PIV Card to be terminated when a federal employee separates or a contractor no longer needs access to federal buildings or systems (section 2.9.4). Checked September 2026.

| # | Step | Owner | When | Control | Done (date, initials) |
| --- | --- | --- | --- | --- | --- |
| F1 | Confirm the investigation is initiated and the FBI National Criminal History Check is favorably adjudicated before PIV Card issuance | {{org:hr-office}} | Onboarding, before PIV issuance | PS-3a | |
| F2 | Have the PIV Card issuer terminate the PIV Card | {{org:hr-office}} | Termination, or a contractor's transfer that ends the need for access | PS-4b | |

:::

## Register

| Person | Organizational unit or employer | Action | Effective date | Notice received | Access disabled or changed | Property returned | Checklist closed | Closed by | Where the checklist is kept |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:name or identifier}} | {{fill:unit or employer}} | {{fill:onboarding, transfer or termination}} | {{fill:date}} | {{fill:date and time}} | {{fill:date and time}} | {{fill:date}} | {{fill:date}} | {{fill:name}} | {{fill:location}} |
