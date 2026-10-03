---
title: Access Review Record
type: form
description: The record of one periodic review of a system's accounts and privileges, with a decision for every account, the actions taken and the sign-off, and a register of every review, as SP 800-53 AC-2j and AC-6(7) require.
controls: [ac-2, ac-2.3, ac-5, ac-6.7]
status: draft
stage: core
typical:
  ac-02_odp.10: quarterly for privileged accounts and at least annually for all other accounts
  ac-02.03_odp.02: 90 days
  ac-06.07_odp.01: quarterly for privileged roles and at least annually for all other roles
  ac-06.07_odp.02: all roles and classes of users on the system
---

:::guidance
Use one record for each review of a system. Section 5.8 of the [account management procedure](/templates/procedures/account-management-procedure/) is the process; this record is its evidence. Assessors ask for the last review and look for four things: the account list was complete, including service, emergency and application-local accounts; every account has a decision; accounts the review flagged were actually disabled or removed, with dates; and the reviewer is someone who knows whether each person still needs the access. A review in which no account is ever removed is a common finding, and so is a list exported only from the identity provider when the application keeps its own accounts. An identity governance tool can run the review and keep these fields; export its report and attach it here. The register at the end is also downloadable as a CSV file.
:::

| System | Review ID | Review type | Period covered | Status |
| --- | --- | --- | --- | --- |
| {{fill:system name and identifier}} | {{fill:unique review ID}} | {{fill:privileged accounts, all accounts, or both}} | {{fill:dates}} | {{fill:in progress, actions open, or complete}} |

## 1. Scope and frequency

- The {{org:system-owner}} reviews all accounts on the system {{param:ac-02_odp.10}} for compliance with the Access Control Policy and the account management procedure (AC-2j).
- The {{org:system-owner}} reviews the privileges assigned to {{param:ac-06.07_odp.02}}, {{param:ac-06.07_odp.01}}, to validate the need for them (AC-6(7)(a)).
- The {{org:account-manager}} disables or removes the accounts, and reassigns or removes the privileges, that the review finds are not needed (AC-2j, AC-6(7)(b)).

## 2. Account list

| Field | Entry |
| --- | --- |
| Sources of the account list | {{fill:for example the identity provider, the application's own user table, the database, the cloud console}} |
| Date and time each list was extracted, and by whom | {{fill:dates and names}} |
| Number of accounts reviewed | {{fill:count, by type}} |
| How completeness was checked | {{fill:for example account counts compared between the sources; service and emergency accounts listed in the account management procedure all present}} |

## 3. Account decisions

Every account on the list gets a row. Supervisors confirm the need for their users' access; the {{org:system-owner}} decides.

| Account ID | User or owner | Account type | Roles and groups | Privileged? | Last logon | Need confirmed by | Decision | Reason | Action ticket | Action completed |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:account ID}} | {{fill:name, or owner of a service account}} | {{fill:type}} | {{fill:roles}} | {{fill:yes or no}} | {{fill:date}} | {{fill:supervisor name and date}} | {{fill:keep, change, disable or remove}} | {{fill:reason, for example left the organization, changed role, inactive}} | {{fill:ticket}} | {{fill:date}} |

Flag in the reason column any account with no logon for {{param:ac-02.03_odp.02}} that the system did not disable automatically, and record why (AC-2(3)(d)).

## 4. Checks

| Check | Result |
| --- | --- |
| Accounts of people who have left or transferred, compared with the {{org:hr-office}}'s list of departures and transfers for the period | {{fill:number found still enabled, and actions}} |
| Accounts with no named user or owner | {{fill:number found, and actions}} |
| Shared and group accounts: approved exception, current member list, authenticator changed after each departure (AC-2k) | {{fill:result}} |
| Emergency accounts: disabled when not in use, every use reviewed | {{fill:result}} |
| Roles held together that the account management procedure says must be separated (AC-5) | {{fill:conflicts found, and how resolved}} |
| Privileged users without a separate non-privileged account (AC-6(2)) | {{fill:number found, and actions}} |
| Accounts whose roles do not match an approved access request | {{fill:number found, and actions}} |

## 5. Sign-off

| Role | Name | Date |
| --- | --- | --- |
| Reviewer: {{org:system-owner}} | {{fill:name}} | {{fill:date the decisions were made}} |
| {{org:account-manager}}, confirming every action in section 3 is complete | {{fill:name}} | {{fill:date}} |

| Summary | Entry |
| --- | --- |
| Accounts kept | {{fill:count}} |
| Accounts changed | {{fill:count}} |
| Accounts disabled or removed | {{fill:count}} |
| Findings for the plan of action and milestones | {{fill:weaknesses found, for example terminated users still enabled, or none}} |
| Next review due | {{fill:date}} |

## Register

| Review ID | System | Type | Period covered | Reviewer | Accounts reviewed | Changed | Disabled or removed | Conflicts found | Actions completed | Signed off | Next due |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:ID}} | {{fill:system}} | {{fill:privileged, all, or both}} | {{fill:dates}} | {{fill:name}} | {{fill:count}} | {{fill:count}} | {{fill:count}} | {{fill:count}} | {{fill:date}} | {{fill:date}} | {{fill:date}} |
