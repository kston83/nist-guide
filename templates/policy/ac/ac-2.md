---
control: ac-2
title: Account management
status: draft
stage: core
typical:
  ac-02_odp.01: a completed access request, a signed access agreement and completed security awareness training
  ac-02_odp.02: an expiration date for temporary accounts, and time-of-day or location restrictions where the system supports them
  ac-02_odp.03: the user's supervisor, plus the system owner or data owner for privileged roles
  ac-02_odp.05: the system owner and the system security officer
  ac-02_odp.06: 5 business days
  ac-02_odp.07: 24 hours, or the same day for privileged users
  ac-02_odp.08: 5 business days
  ac-02_odp.09: time-of-day, day-of-week or network location restrictions, where needed
  ac-02_odp.10: quarterly for privileged accounts and at least annually for all other accounts
set:
  ac-02_odp.04: Set to this policy and the account management procedure, which holds the prerequisites and criteria for each account action.
---

:::guidance
AC-2 makes account management a controlled life cycle: every account has a known type, an owner, an approval and a removal trigger. Each statement below maps to one lettered item of the control. Assessors test these by sampling account requests, recent departures and the last access review, so keep the records each statement implies.
:::

- The {{org:system-owner}} shall define and document, for each system, the account types allowed and the account types prohibited. (AC-2a)
- The {{org:system-owner}} shall assign one or more account managers for each system. (AC-2b)
- The {{org:account-manager}} shall require {{param:ac-02_odp.01}} before granting group or role membership. (AC-2c)
- The {{org:account-manager}} shall record, for each account, the authorized user, group and role membership, access authorizations and {{param:ac-02_odp.02}}. (AC-2d)
- The {{org:account-manager}} shall create an account only after approval by {{param:ac-02_odp.03}}. (AC-2e)
- The {{org:account-manager}} shall create, enable, modify, disable and remove accounts in accordance with this policy and the account management procedure. (AC-2f)
- The {{org:account-manager}} shall monitor the use of accounts for activity that does not match the account's type or authorization. (AC-2g)
- The {{org:supervisor}} shall notify the account manager and {{param:ac-02_odp.05}} within {{param:ac-02_odp.06}} when a user's account is no longer required. (AC-2h.1)
- The {{org:hr-office}} shall notify the account manager and {{param:ac-02_odp.05}} within {{param:ac-02_odp.07}} when a user is terminated or transferred. (AC-2h.2)
- The {{org:supervisor}} shall notify the account manager and {{param:ac-02_odp.05}} within {{param:ac-02_odp.08}} when a user's system usage or need to know changes. (AC-2h.3)
- The {{org:account-manager}} shall authorize access only on the basis of a valid access authorization, the intended system usage and {{param:ac-02_odp.09}}. (AC-2i)
- The {{org:system-owner}} shall review all accounts on the system for compliance with this policy {{param:ac-02_odp.10}}. (AC-2j)
- The {{org:account-manager}} shall disable or remove each account the review finds is no longer authorized. (AC-2j)
- The {{org:account-manager}} shall change the authenticators of a shared or group account when an individual is removed from the group. (AC-2k)
- The {{org:ciso}} shall ensure account management processes are aligned with personnel termination and transfer processes. (AC-2l)

:::guidance
Where the organization does not use shared or group accounts, keep the AC-2k statement and note in the system security plan that none are deployed; the assessor will still ask. Evidence for AC-2l is usually an automated feed from the human resources system to the identity provider, or a documented handoff in the [onboarding, transfer and termination checklist](/templates/forms/onboarding-transfer-and-termination-checklist/) (PS-4).
:::
