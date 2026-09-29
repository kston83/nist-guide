---
title: Access Agreement
type: form
description: The nondisclosure and acceptable use agreement each person signs before getting access to the organization's information and systems, and re-signs when it changes, with a register of signatures, as SP 800-53 PS-6 requires.
controls: [ps-6, ps-4, ps-8, pl-4]
status: draft
stage: core
typical:
  ps-06_odp.01: annually
  ps-06_odp.02: annually
  ps-04_odp.02: 'the individual''s continuing duty not to disclose organizational information, the return of all organizational property and information, and that former credentials must not be used'
---

:::guidance
PS-6 names four kinds of access agreement: nondisclosure agreements, acceptable use agreements, rules of behavior and conflict-of-interest agreements. This template combines nondisclosure and acceptable use, and takes in the [Rules of Behavior](/templates/forms/rules-of-behavior/) by reference, so each person signs two documents on the same cycle. Assessors sample accounts and check for an agreement signed before the account was created, and a new signature after the agreement last changed. Have legal counsel review the terms before adoption: an agreement binds the people who sign it, and employment law varies by country and state. Electronic signatures are acceptable unless organizational policy prohibits them.
:::

| Organization | Agreement version | Effective date | Owner |
| --- | --- | --- | --- |
| {{org:name}} | {{fill:version}} | {{fill:date}} | {{org:ciso}} |

## About this agreement

Everyone who needs access to {{org:name}}'s information or systems signs this agreement before access is granted, including employees, contractors and partners (PS-6c.1). You sign it again when it is updated, and {{param:ps-06_odp.02}}, to keep your access (PS-6c.2). If you do not re-sign an updated agreement, your access is suspended until you do.

This agreement adds to the Rules of Behavior, which you also sign. Where the two differ, the stricter one applies.

## Terms

### Authorized use

1. I will use {{org:name}}'s information and systems only for the purposes I am authorized for, and only as my role requires.
2. I will not try to gain access to information or systems I am not authorized to use, or help anyone else do so.
3. I will follow the Rules of Behavior and the organization's security and privacy policies.

### Nondisclosure

1. I will not disclose nonpublic information of {{org:name}}, or information entrusted to it by others, to anyone who is not authorized to receive it.
2. I will protect such information according to its marking or sensitivity, in any form and wherever I work.
3. My duty not to disclose this information continues after my access ends, for as long as the information stays nonpublic, unless a law or a written agreement says otherwise.

### Personal information

1. I will access personally identifiable information only when my work requires it, and use it only for the purpose it was collected for.
2. I will report any loss, misuse or unauthorized disclosure of personally identifiable information as soon as I know of it.

### Monitoring

1. I understand that {{org:name}} monitors and records the use of its systems, as the system use notice says (AC-8), and that I have no expectation of privacy in what I do on them, except where a law provides otherwise.
2. I understand that monitoring records may be reviewed and used in investigations and disciplinary action.

### Reporting

1. I will report suspected security incidents, privacy breaches and violations of this agreement to {{fill:where to report, for example the service desk or the security team}} as soon as I know of them.

### When my access ends

1. When I leave {{org:name}} or no longer need access, I will return all organizational property, including devices, authentication tokens, keys, identification cards, building passes, and information in any form (PS-4d).
2. I will take part in an exit interview if asked, which will cover {{param:ps-04_odp.02}} (PS-4c).
3. I will not use any credential or access I held after it has ended.

### Conflict of interest

1. I will tell {{fill:who, for example my supervisor or the ethics office}} about any interest or relationship that conflicts, or could appear to conflict, with my access or duties.

### Consequences

1. I understand that breaking this agreement may lead to loss of access and to action under the organization's sanctions process (PS-8), and that some breaches may also be unlawful.

## Additional terms for privileged users

Complete this section only for a person who is given privileged access, such as a system administrator.

1. I will use privileged accounts only for tasks that need them, and use my regular account for everything else (AC-6(2)).
2. I will not use privileged access to look at information I have no business need to see, or to change audit records or security settings without authorization.
3. I will record privileged changes through the organization's change management process (CM-3).

## Acknowledgment

I have read, understand and agree to follow this agreement and the Rules of Behavior (PS-6).

| Name | Organization or employer | Role | Privileged user (yes or no) | Signature | Date |
| --- | --- | --- | --- | --- | --- |
| {{fill:name}} | {{fill:organization}} | {{fill:role}} | {{fill:yes or no}} | {{fill:signature}} | {{fill:date}} |

## Maintaining this agreement

- The {{org:ciso}} owns this agreement and documents it for the organization's systems (PS-6a).
- The {{org:ciso}} reviews and updates this agreement {{param:ps-06_odp.01}} (PS-6b).
- The account manager checks for a signed agreement before granting access, and for a new signature after each update (PS-6c).
- Signed agreements are kept {{fill:where, for example in the personnel file or the identity governance system}} for {{fill:how long, for example until 3 years after access ends}}.

## Register

| Name | Organizational unit or employer | Role | Agreement version | Privileged terms | Date signed | Access granted | Re-sign due | Where the signed copy is kept |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:name}} | {{fill:unit or employer}} | {{fill:role}} | {{fill:version}} | {{fill:yes or no}} | {{fill:date}} | {{fill:date}} | {{fill:date}} | {{fill:location}} |
