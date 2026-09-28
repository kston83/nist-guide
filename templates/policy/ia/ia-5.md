---
control: ia-5
title: Authenticator management
status: draft
stage: core
typical:
  ia-05_odp.01: no scheduled change for user passwords; certificates at expiry; shared and service account secrets at least annually
  ia-05_odp.02: 'evidence or suspicion of compromise, and departure of a person who knew a shared authenticator'
---

:::guidance
For passwords, [NIST SP 800-63B-4](https://csrc.nist.gov/pubs/sp/800/63/b/4/final) (July 2025) says verifiers shall not require periodic changes, and shall force a change when there is evidence of compromise. Set the change periods below by authenticator type, and keep scheduled changes for secrets such as shared or service account keys.
:::

- The {{org:account-manager}} shall verify the identity of the individual, group, role, service or device receiving an authenticator as part of its initial distribution. (IA-5a)
- The {{org:account-manager}} shall establish the initial content of any authenticator the organization issues. (IA-5b)
- The {{org:ciso}} shall ensure authenticators have sufficient strength of mechanism for their intended use. (IA-5c)
- The {{org:ciso}} shall establish administrative procedures for initial authenticator distribution, for lost, compromised or damaged authenticators, and for revoking authenticators. (IA-5d)
- The {{org:account-manager}} shall implement those procedures. (IA-5d)
- The {{org:system-owner}} shall ensure default authenticators are changed before first use. (IA-5e)
- The {{org:account-manager}} shall change or refresh authenticators as follows: {{param:ia-05_odp.01}}. (IA-5f)
- The {{org:account-manager}} shall change or refresh authenticators when {{param:ia-05_odp.02}} occur. (IA-5f)
- The {{org:system-owner}} shall protect authenticator content from unauthorized disclosure and modification. (IA-5g)
- Users shall protect their authenticators as the rules of behavior require. (IA-5h)
- The {{org:system-owner}} shall ensure devices implement the controls that protect authenticators. (IA-5h)
- The {{org:account-manager}} shall change the authenticators of group or role accounts when membership of those accounts changes. (IA-5i)
