---
title: Account Management Procedure
type: procedure
description: The steps, by role, for requesting, approving, creating, changing, disabling, removing and reviewing system accounts, with the inputs, outputs and record each step leaves, that carry out the access control policy's account management requirements (SP 800-53 AC-2), separation of duties (AC-5) and the disabling of access when employment ends (PS-4).
controls: [ac-2, ac-2.1, ac-2.2, ac-2.3, ac-2.4, ac-2.13, ac-5, ac-6.7, ps-4]
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
  ac-02_odp.10: quarterly for privileged accounts and at least annually for all other accounts
  ac-02.01_odp: 'the organization''s identity provider and its provisioning workflows'
  ac-02.02_odp.01: disable
  ac-02.02_odp.02: '72 hours for emergency accounts, and the end date approved at creation for temporary accounts'
  ac-02.03_odp.01: 1 business day
  ac-02.03_odp.02: 90 days
  ac-02.13_odp.01: 1 hour
  ac-02.13_odp.02: 'credible indicators of insider threat, or notice of an adverse personnel action'
  ac-05_odp: requesting and approving access; developing and deploying code to production; administering a system and reviewing its audit logs
  ac-06.07_odp.01: quarterly for privileged roles and at least annually for all other roles
  ac-06.07_odp.02: all roles and classes of users on the system
  ps-04_odp.01: '24 hours, or the same day for privileged users; for an involuntary termination, no later than when the individual is told'
---

:::guidance
The Access Control policy's AC-2 statements say what must happen to accounts and who is accountable; this procedure says how, step by step. The AC-2 clause sets AC-2f's "policy, procedures, prerequisites and criteria" to the policy and this procedure, so an assessor reads the two together and then tests the records this procedure says each step leaves. NIST's AC-1 discussion warns that restating controls is not a procedure: fill in the tools, queues and time limits you actually use, and delete nothing an assessor will ask about. The typical values are copied from the Access Control policy's AC-2, AC-2(2), AC-2(3), AC-2(13), AC-5 and AC-6(7) clauses, and the departure time in 5.5 from the Personnel Security policy's PS-4 clause; keep them in step. One procedure can serve every system that uses the organization's identity provider. A system with its own application accounts adds a system-specific section 3 and notes any step it does differently.
:::

| Owner | Approved by | Version | Effective date |
| --- | --- | --- | --- |
| {{org:ciso}} | {{fill:name and title}} | {{fill:version}} | {{fill:date}} |

## 1. Purpose and scope

This procedure carries out the account management requirements of the {{org:name}} Access Control Policy (AC-2). It applies to every account on every system in the system inventory: user, privileged, service, temporary and emergency accounts, in the identity provider, in operating systems and databases, in applications, and in cloud management consoles.

Accounts are managed through {{param:ac-02.01_odp}} wherever the system supports it (AC-2(1)). Where it does not, the account manager follows the same steps by hand and records them in the same places.

## 2. Roles

| Role | Responsibilities in this procedure |
| --- | --- |
| Requester | Asks for an account or a change of access, for their own use or for someone they supervise |
| {{org:supervisor}} | Confirms the user's need for access, approves requests, and reports when access is no longer needed or the user's duties change |
| {{org:system-owner}} | Decides the system's account types and roles, approves privileged access, assigns account managers, and runs the access review |
| {{fill:data owner, where different from the system owner}} | Approves access to the information they own, where the system security plan names one |
| {{org:account-manager}} | Checks prerequisites, creates, changes, disables and removes accounts, and keeps the records |
| {{org:hr-office}} | Reports hires, transfers and departures, and starts the [onboarding, transfer and termination checklist](/templates/forms/onboarding-transfer-and-termination-checklist/) |
| {{org:security-operations}} | Monitors account use and reports atypical use |
| {{org:privacy-official}} | Sets the conditions for access to personally identifiable information, with the system owner |

The {{org:system-owner}} records the account managers assigned to each system in the system security plan (AC-2b).

## 3. Account types

The {{org:system-owner}} completes this table for each system, and the account manager creates only the types it allows (AC-2a).

| Account type | Allowed? | Owner | Approval | Ends or is reviewed |
| --- | --- | --- | --- | --- |
| Individual user | {{fill:yes or no}} | The user | {{param:ac-02_odp.03}} | Access review; disabled when no longer required |
| Privileged (administrator) | {{fill:yes or no}} | The administrator, as a separate account from their user account (AC-6(2)) | Supervisor and system owner | Access review; privileges reviewed {{param:ac-06.07_odp.01}} |
| Service or system (non-interactive) | {{fill:yes or no}} | A named person who answers for it | System owner | Access review; disabled when the service it runs is retired |
| Temporary | {{fill:yes or no}} | The user, with the sponsor named on the request | As for an individual user | Automatically disabled at the approved end date (AC-2(2)) |
| Emergency ("break glass") | {{fill:yes or no}} | The system owner | System owner, after use | Automatically disabled after the period in step 4.3 (AC-2(2)) |
| Account of last resort | {{fill:yes or no}} | The system owner | System owner | Access review; credentials held under dual control |
| Shared or group | {{fill:typical: prohibited unless the system owner approves an exception}} | A named person who answers for it | System owner, as an exception | Authenticators changed whenever a member leaves (step 7) |
| Guest or anonymous | {{fill:typical: prohibited, except on systems designed for public access}} | Not applicable | Not applicable | Not applicable |

For each account, the account manager records the authorized user, group and role membership, access authorizations and {{param:ac-02_odp.02}} (AC-2d).

:::guidance
NIST's AC-2 discussion lists individual, shared, group, system, guest, anonymous, emergency, developer, temporary and service accounts as examples, and names shared, group, emergency, anonymous, temporary and guest accounts as types organizations may prohibit because of their risk. It also separates emergency accounts, which may bypass the normal authorization steps in a crisis and are short-lived, from accounts of last resort, such as local logon accounts used when network resources are unavailable, which stay available and are not subject to automatic disabling. Record any account of last resort here so the inactivity rule in step 5 does not disable it, and the access review still covers it.
:::

## 4. Prerequisites, criteria and separation of duties

Group and role membership is granted only after {{param:ac-02_odp.01}} (AC-2c). Access is authorized only on a valid access authorization, the intended system usage and the conditions the system owner sets for the role (AC-2i). Where an account will reach personally identifiable information, the conditions for that role are set with the {{org:privacy-official}}.

The {{org:system-owner}} identifies and documents these duties of individuals that require separation: {{param:ac-05_odp}} (AC-5a). They are held by different people, and the system's roles are designed so no single account holds both sides (AC-5b):

| Duty | Separated from | How the system enforces it |
| --- | --- | --- |
| Requesting access | Approving the same access | {{fill:for example the request tool blocks self-approval}} |
| Approving access | Granting it in the system | {{fill:for example account managers cannot approve; approvers have no administrative role}} |
| Administering the system | Reviewing or deleting its audit logs | {{fill:for example logs sent to a platform administrators cannot change}} |
| Developing code | Deploying it to production | {{fill:for example the pipeline requires an approving review by someone other than the author}} |
| {{fill:other duty the system owner names}} | {{fill:duty}} | {{fill:how}} |

## 5. Procedures

Each step names the role that performs it, what it starts from, what it produces, and the record it leaves. The records are the evidence an assessor samples.

### 5.1 Request and approve an account or a change of access

| # | Role | Action | Inputs | Outputs | Record |
| --- | --- | --- | --- | --- | --- |
| 1 | Requester | Submit an [access request](/templates/forms/access-request-form/) naming the user, system, account type, roles and the business need; for a temporary account, the end date | Need for access | Submitted request | Access request, with its date |
| 2 | {{org:account-manager}} | Check the prerequisites in section 4 are met: {{param:ac-02_odp.01}} | Request; access agreement register; training records | Request ready for approval, or returned with what is missing | Prerequisite check on the request |
| 3 | {{org:account-manager}} | Check the requested roles against section 4 and the user's other roles for separation of duties conflicts | Request; the user's current roles | Conflicts listed, or none | Conflict check on the request |
| 4 | {{param:ac-02_odp.03}} | Approve or reject each role requested. The approver is not the requester, and approves no more than the duties need (AC-6) | Request; conflict check | Approved or rejected request | Approver name and date on the request |

### 5.2 Create the account and grant access

| # | Role | Action | Inputs | Outputs | Record |
| --- | --- | --- | --- | --- | --- |
| 1 | {{org:account-manager}} | Create or enable the account only after the approval in 5.1 step 4 (AC-2e), with the type, groups and roles approved, and the attributes in section 3 | Approved request | Account in the identity provider or system | Provisioning record linked to the request; the system's audit record of the creation (AC-2(4)) |
| 2 | {{org:account-manager}} | Issue the initial authenticator through the process the identification and authentication policy sets, as section 9 of the [identification and authentication standard](/templates/standards/identification-and-authentication-standard/) describes (IA-5) | Account | Authenticator delivered to the user | Issuance record |
| 3 | {{org:account-manager}} | Close the request, noting the account identifier and the date | Provisioning record | Closed request | Access request, Part F |

### 5.3 Temporary and emergency accounts

| # | Role | Action | Inputs | Outputs | Record |
| --- | --- | --- | --- | --- | --- |
| 1 | {{org:account-manager}} | Create a temporary account through 5.1 and 5.2, with the approved end date set so the system takes this action automatically at that date: {{param:ac-02.02_odp.01}} (AC-2(2)) | Approved request with an end date | Temporary account with an end date | Request; end date in the account record |
| 2 | {{org:system-owner}} | In a crisis, enable an emergency account without the full approval in 5.1, and tell {{org:security-operations}} it is in use | Declared emergency | Emergency account in use; alert raised | Ticket or incident record naming who used it and why |
| 3 | {{org:account-manager}} | Ensure the system takes this action automatically on the emergency account: {{param:ac-02.02_odp.01}}, after {{param:ac-02.02_odp.02}} (AC-2(2)); change its credentials after each use | Emergency account | Account disabled; credentials changed | Audit records of the disabling and the credential change |
| 4 | {{org:system-owner}} | Review each use of an emergency account within {{fill:for example 5 business days}}, and record approval after the fact or report misuse as an incident | Audit records of the session | Review result | Review note on the ticket |

### 5.4 Change access

| # | Role | Action | Inputs | Outputs | Record |
| --- | --- | --- | --- | --- | --- |
| 1 | {{org:supervisor}} | Notify the account manager and {{param:ac-02_odp.05}} within {{param:ac-02_odp.08}} when a user's system usage or need to know changes (AC-2h.3) | Change in duties | Notice | Notice, dated |
| 2 | {{org:hr-office}} | Notify the account manager and {{param:ac-02_odp.05}} within {{param:ac-02_odp.07}} when a user transfers (AC-2h.2), through the transfer section of the onboarding, transfer and termination checklist | Approved transfer | Notice; checklist started | Checklist, dated |
| 3 | {{org:account-manager}} | Remove the access the user no longer needs, and grant new access only through 5.1 and 5.2 | Notice; new access request | Account changed | Audit record of the modification (AC-2(4)); request |

### 5.5 Disable and remove accounts

| # | Role | Action | Inputs | Outputs | Record |
| --- | --- | --- | --- | --- | --- |
| 1 | {{org:supervisor}} | Notify the account manager and {{param:ac-02_odp.05}} within {{param:ac-02_odp.06}} when a user's account is no longer required (AC-2h.1) | End of need | Notice | Notice, dated |
| 2 | {{org:hr-office}} | Notify the account manager and {{param:ac-02_odp.05}} within {{param:ac-02_odp.07}} when a user is terminated (AC-2h.2), through the termination section of the checklist | Approved departure | Notice; checklist started | Checklist, dated |
| 3 | {{org:account-manager}} | When a user's employment ends, disable all of their system access within {{param:ps-04_odp.01}} of the termination, and revoke their authenticators and credentials, as steps 2 and 3 of the termination section of the [onboarding, transfer and termination checklist](/templates/forms/onboarding-transfer-and-termination-checklist/) set out (PS-4a, PS-4b) | Notice; checklist | Access disabled; authenticators and credentials revoked | Audit record of the disabling, dated; checklist steps 2 and 3, dated |
| 4 | {{org:account-manager}} | Disable the account within {{param:ac-02.03_odp.01}} when it has expired, is no longer associated with a user for a reason other than a departure under step 3, or is in violation of policy (AC-2(3)) | Notice; review finding; expiry | Account disabled | Audit record of the disabling, dated |
| 5 | {{org:account-manager}} | Confirm the system disables accounts inactive for {{param:ac-02.03_odp.02}}, other than accounts of last resort listed in section 3 (AC-2(3)(d)) | System setting | Inactive accounts disabled | Setting, checked at each access review |
| 6 | {{org:account-manager}} | On notice of {{param:ac-02.13_odp.02}}, disable all of the individual's accounts within {{param:ac-02.13_odp.01}} of discovery (AC-2(13)) | Notice from the {{org:hr-office}}, {{org:security-operations}} or the insider threat program | Accounts disabled | Audit records; case reference |
| 7 | {{org:account-manager}} | Remove a disabled account after {{fill:for example 30 days, once the supervisor has moved any files the organization needs}}, unless a legal hold or investigation requires it be kept | Disabled account | Account removed | Audit record of the removal |

### 5.6 Shared and group accounts

| # | Role | Action | Inputs | Outputs | Record |
| --- | --- | --- | --- | --- | --- |
| 1 | {{org:account-manager}} | Keep a list of the members of each approved shared or group account | Exception approval | Member list | List, with the date of each change |
| 2 | {{org:account-manager}} | Change the account's authenticators when a member is removed from the group, within the time set for disabling accounts in 5.5 (AC-2k) | Notice that a member left | New authenticator, given only to remaining members | Audit record of the change; member list |

If the system has no shared or group accounts, the system security plan says so.

### 5.7 Monitor account use

| # | Role | Action | Inputs | Outputs | Record |
| --- | --- | --- | --- | --- | --- |
| 1 | {{org:security-operations}} | Monitor account use for activity that does not fit the account's type or authorization, such as logons at unusual times or places, use of dormant accounts, or interactive use of service accounts (AC-2g) | Audit records of account use | Alerts | Alert records |
| 2 | {{org:security-operations}} | Report atypical use to the {{org:system-owner}}, and handle any suspected incident under the incident response plan | Alert | Report; incident, where needed | Ticket or incident record |

### 5.8 Review accounts

| # | Role | Action | Inputs | Outputs | Record |
| --- | --- | --- | --- | --- | --- |
| 1 | {{org:account-manager}} | Export the full account list for the system, including service, emergency and application-local accounts, with roles and last logon | Identity provider and system | Account list, dated | Export attached to the [access review record](/templates/forms/access-review-record/) |
| 2 | {{org:system-owner}} | Review every account {{param:ac-02_odp.10}} for compliance with the policy and this procedure, and review the privileges assigned to {{param:ac-06.07_odp.02}}, {{param:ac-06.07_odp.01}} (AC-2j, AC-6(7)(a)) | Account list; supervisors' confirmations | A decision for each account: keep, change, disable or remove | Access review record |
| 3 | {{org:account-manager}} | Disable or remove each account, and remove each privilege, the review finds is not needed, within {{fill:for example 5 business days}} (AC-2j, AC-6(7)(b)) | Review decisions | Accounts and privileges changed | Ticket per action, referenced in the review record |
| 4 | {{org:system-owner}} | Sign off the review once every action is done | Completed actions | Signed review | Access review record and its register row |

## 6. Records

| Record | Kept in | Retention |
| --- | --- | --- |
| Access requests and approvals | {{fill:for example the service management tool}} | {{fill:for example the life of the account plus 3 years}} |
| Account change audit records (AC-2(4)) | {{fill:for example the log platform}} | As the audit logging requirements set (AU-11) |
| Onboarding, transfer and termination checklists | {{fill:location}} | {{fill:period}} |
| Emergency account use reviews | {{fill:location}} | {{fill:period}} |
| Access review records | {{fill:location}} | {{fill:for example 3 years, or at least until the next assessment}} |

## 7. Review

The {{org:ciso}} reviews this procedure {{fill:for example annually}}, and after assessment or audit findings, security incidents, and changes to the identity provider, access governance tool or personnel processes.

| Version | Date | Change | Approved by |
| --- | --- | --- | --- |
| {{fill:version}} | {{fill:date}} | {{fill:summary of change}} | {{fill:name and title}} |
