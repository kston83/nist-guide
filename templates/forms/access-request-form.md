---
title: Access Request Form
type: form
description: The record of one request to create an account or change a person's access to a system, with the prerequisite checks, separation of duties check, approvals and provisioning, and a register of every request, as SP 800-53 AC-2 requires.
controls: [ac-2, ac-2.2, ac-5, ac-6, ac-6.2]
status: draft
stage: core
typical:
  ac-02_odp.01: a completed access request, a signed access agreement and completed security awareness training
  ac-02_odp.02: an expiration date for temporary accounts, and time-of-day or location restrictions where the system supports them
  ac-02_odp.03: the user's supervisor, plus the system owner or data owner for privileged roles
  ac-02.02_odp.02: '72 hours for emergency accounts, and the end date approved at creation for temporary accounts'
---

:::guidance
Use one form for each request: a new account, added roles, a change of access, or a temporary account. Section 5.1 of the [account management procedure](/templates/procedures/account-management-procedure/) is the process this form records. Assessors draw a sample of accounts and ask for the request behind each one, then check three things: the approval is dated before the account was created (AC-2e), the approver is not the requester (AC-5), and the prerequisites were met first (AC-2c). Most organizations hold these fields in a service management or identity governance tool rather than a document; that is fine as long as each record has them. The register at the end is also downloadable as a CSV file.
:::

| System | Request ID | Request type | Date submitted | Status |
| --- | --- | --- | --- | --- |
| {{fill:system name and identifier}} | {{fill:unique request ID}} | {{fill:new account, added access, change of access, or temporary account}} | {{fill:date}} | {{fill:submitted, approved, rejected, provisioned or closed}} |

## 1. How to use this form

- The requester completes Parts A and B. A supervisor may request for a person they supervise.
- The {{org:account-manager}} completes Parts C and D before the request goes for approval.
- The approvers complete Part E. Group and role membership needs {{param:ac-02_odp.01}} (AC-2c), and account creation needs approval by {{param:ac-02_odp.03}} (AC-2e). No one approves a request for their own access.
- The {{org:account-manager}} provisions only what Part E approves, completes Part F, and enters the request in the register.
- To remove access, use the [onboarding, transfer and termination checklist](/templates/forms/onboarding-transfer-and-termination-checklist/) or a notice under section 5.5 of the account management procedure, not this form.

## Part A. User

| Field | Entry |
| --- | --- |
| Name | {{fill:full name}} |
| Unique identifier | {{fill:employee or contractor number, or existing user ID}} |
| Organization or employer | {{fill:organizational unit, or the company for a contractor}} |
| Position | {{fill:job title}} |
| Supervisor | {{fill:name and contact}} |
| Requested by, if not the user | {{fill:name and role}} |

## Part B. Access requested

| Field | Entry |
| --- | --- |
| Account type | {{fill:individual, privileged, service, temporary, or other type the system allows}} |
| Roles or groups requested | {{fill:role or group names, as the system defines them}} |
| Business need | {{fill:the duties that need this access}} |
| Information accessed | {{fill:types of information, and whether it includes personally identifiable information}} |
| Start date | {{fill:date}} |
| End date | {{fill:for a temporary account or a fixed-term role, the date access ends; otherwise none}} |
| Other attributes | {{fill:restrictions to apply, from the attributes the account management procedure records for each account}} |
| Remote access needed | {{fill:no; or yes, and the approved method from the remote access standard}} |

The account record holds the authorized user, group and role membership, access authorizations and {{param:ac-02_odp.02}} (AC-2d). A temporary account is set to be disabled automatically at its end date, and an emergency account after {{param:ac-02.02_odp.02}} (AC-2(2)).

For a privileged account, the user also keeps a separate non-privileged account for email, web browsing and other nonsecurity functions (AC-6(2)). Name it here: {{fill:non-privileged account ID}}.

:::guidance
Emergency accounts are not requested on this form: the account management procedure covers how they are used and reviewed. Request only the roles the duties need; the approver checks this (AC-6).
:::

## Part C. Prerequisites

| Prerequisite | Met? | Evidence |
| --- | --- | --- |
| Screening required for the position completed (PS-3) | {{fill:yes or no}} | {{fill:date, from the personnel security office}} |
| Access agreement signed (PS-6) | {{fill:yes or no}} | {{fill:date, from the access agreement register}} |
| Rules of Behavior acknowledged (PL-4) | {{fill:yes or no}} | {{fill:date}} |
| Security and privacy awareness training completed (AT-2) | {{fill:yes or no}} | {{fill:date, from the training record log}} |
| Role-based training, for a privileged or specialist role (AT-3) | {{fill:yes, no, or not needed}} | {{fill:date}} |
| Other prerequisites for this system or role | {{fill:yes, no, or none}} | {{fill:evidence}} |

| Checked by | Date |
| --- | --- |
| {{fill:account manager name}} | {{fill:date}} |

## Part D. Separation of duties check

| Question | Answer |
| --- | --- |
| Does the user already hold a role that conflicts with one requested, under section 4 of the account management procedure? | {{fill:no; or yes, with the conflict}} |
| If yes: how it was resolved | {{fill:role removed, request changed, or exception approved by the system owner with compensating review}} |
| Checked by and date | {{fill:account manager name and date}} |

## Part E. Approvals

| Approver | Role | Decision | Date |
| --- | --- | --- | --- |
| {{fill:name}} | {{org:supervisor}} | {{fill:approved or rejected, with any roles removed}} | {{fill:date}} |
| {{fill:name}} | {{fill:system owner or data owner, for privileged roles or sensitive information}} | {{fill:approved or rejected}} | {{fill:date}} |
| {{fill:name}} | {{fill:other approver the system requires, or not applicable}} | {{fill:approved or rejected}} | {{fill:date}} |

## Part F. Provisioning

| Field | Entry |
| --- | --- |
| Account identifier | {{fill:user ID or account name}} |
| Roles and groups granted | {{fill:as approved in Part E}} |
| Attributes set | {{fill:end date and restrictions applied}} |
| Created or changed by | {{fill:account manager name}} |
| Date and time | {{fill:date and time, which is after every approval in Part E}} |
| Initial authenticator issued | {{fill:how and when, or not applicable}} |
| User notified | {{fill:date}} |

## Register

| Request ID | User | System | Type | Roles requested | Prerequisites checked (date) | Conflict found | Approved by and date | Provisioned by and date | End date | Closed |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:ID}} | {{fill:name or ID}} | {{fill:system}} | {{fill:request type}} | {{fill:roles}} | {{fill:date}} | {{fill:no; or yes and resolution}} | {{fill:names and dates}} | {{fill:name and date}} | {{fill:date or none}} | {{fill:date}} |
