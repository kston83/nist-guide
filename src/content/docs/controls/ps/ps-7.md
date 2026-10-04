---
title: 'PS-7 External Personnel Security'
description: 'NIST SP 800-53 Rev. 5 control PS-7, External Personnel Security: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PS-7 External Personnel Security'
  order: 7
control:
  id: PS-7
  family: PS
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | None |

**Related controls:** [AT-2](/controls/at/at-2/), [AT-3](/controls/at/at-3/), [MA-5](/controls/ma/ma-5/), [PE-3](/controls/pe/pe-3/), [PS-2](/controls/ps/ps-2/), [PS-3](/controls/ps/ps-3/), [PS-4](/controls/ps/ps-4/), [PS-5](/controls/ps/ps-5/), [PS-6](/controls/ps/ps-6/), [SA-5](/controls/sa/sa-5/), [SA-9](/controls/sa/sa-9/), [SA-21](/controls/sa/sa-21/)

## Control statement

- **a.** Establish personnel security requirements, including security roles and responsibilities for external providers;
- **b.** Require external providers to comply with personnel security policies and procedures established by the organization;
- **c.** Document personnel security requirements;
- **d.** Require external providers to notify [Assignment: organization-defined personnel or roles] of any personnel transfers or terminations of external personnel who possess organizational credentials and/or badges, or who have system privileges within [Assignment: organization-defined time period] ; and
- **e.** Monitor provider compliance with personnel security requirements.

<details>
<summary>NIST discussion</summary>

External provider refers to organizations other than the organization operating or acquiring the system. External providers include service bureaus, contractors, and other organizations that provide system development, information technology services, testing or assessment services, outsourced applications, and network/security management. Organizations explicitly include personnel security requirements in acquisition-related documents. External providers may have personnel working at organizational facilities with credentials, badges, or system privileges issued by organizations. Notifications of external personnel changes ensure the appropriate termination of privileges and credentials. Organizations define the transfers and terminations deemed reportable by security-related characteristics that include functions, roles, and the nature of credentials or privileges associated with transferred or terminated individuals.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PS-7</summary>

Determine if:

- **PS-07a.** personnel security requirements are established, including security roles and responsibilities for external providers;
- **PS-07b.** external providers are required to comply with personnel security policies and procedures established by the organization;
- **PS-07c.** personnel security requirements are documented;
- **PS-07d.** external providers are required to notify [Assignment: organization-defined personnel or roles] of any personnel transfers or terminations of external personnel who possess organizational credentials and/or badges or who have system privileges within [Assignment: organization-defined time period];
- **PS-07e.** provider compliance with personnel security requirements is monitored.

**Examine:** Personnel security policy; procedures addressing external personnel security; list of personnel security requirements; acquisition documents; service-level agreements; compliance monitoring process; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with personnel security responsibilities; external providers; system/network administrators; organizational personnel with account management responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for managing and monitoring external personnel security; mechanisms supporting and/or implementing the monitoring of provider compliance.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PS-7 asks you to set personnel security requirements, including security roles and responsibilities, for external providers. You require providers to follow your personnel security policies and procedures, document the requirements, and have providers report transfers and terminations of their staff within a set time. You also monitor whether they comply. NIST's PS-7 discussion counts service bureaus, contractors, and organizations that provide development, IT, testing, assessment or security services as external providers. It asks organizations to put the requirements explicitly in acquisition documents.

**Common implementations.** A contract clause carries the requirements: screening to the same criteria as employees in comparable positions ([PS-3](/controls/ps/ps-3/)), signed [access agreements](/templates/forms/access-agreement/), required training, the notice of transfers and terminations, and a staff roster. Section 4.9 of the [acquisition security requirements standard](/templates/standards/acquisition-security-requirements/) states each one, with the notice time below, and its solicitation review checklist has a PS-7 line. The provider's report starts the transfer or termination section of the [onboarding, transfer and termination checklist](/templates/forms/onboarding-transfer-and-termination-checklist/), which records the date it arrived.

Monitoring means checking, not trusting. Each month, compare the provider's staff roster with the accounts and badges issued to its people, and ask for evidence of screening and training for a sample. NIST's discussion lets you define which transfers and terminations must be reported by role and by the credentials or privileges involved; most organizations require all of them.

**Organization-defined parameters.** Typical values, from the [Personnel Security policy](/templates/policies/ps/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Who the provider notifies (d) | The organization's contract manager for the provider, and the account managers of the systems the individual has access to |
| Time to notify (d) | 24 hours |

The 24 hours matches the organization's own termination and transfer notices (PS-4, PS-5 and AC-2h.2), so a contractor's access ends as quickly as an employee's. In the policy, the Chief Information Security Officer sets the requirements, puts them in contracts and monitors compliance.

**Evidence assessors ask for.**

- The personnel security clause in a sample of contracts or agreements
- The provider's staff rosters, and the reconciliation against accounts and badges
- For a sample of provider staff who left, the date of the provider's notice and the date access was disabled
- Evidence of screening, signed access agreements and training for a sample of provider staff

**Inheritance.** The contract language and the monitoring process are usually common controls, run through the acquisition office. Each system still monitors the providers whose staff use it. For a cloud or managed service whose staff never hold your credentials, the provider's personnel controls are reviewed through its authorization or the [external service review](/templates/forms/external-service-review/) ([SA-9](/controls/sa/sa-9/)).

**Common findings.**

- Contracts with no personnel security clause, or one that says only "comply with organizational policy".
- Provider staff who left still holding accounts or badges, because the provider never reported it.
- No roster reconciliation, so the organization does not know who works for the provider.
- Screening assumed, with no evidence from the provider.

**Enhancements in the Moderate baseline.** PS-7 has no enhancements.

**Federal systems** (as of October 2026). [5 CFR 731.106](https://www.ecfr.gov/current/title-5/section-731.106)(a) (as amended June 30, 2026) requires a risk designation for every covered position, including one "in which the occupant performs a service as a contractor employee". The investigation and continuous vetting requirements of 731.106(c) and (d) follow from that designation, so contractor staff in federal positions are screened under OPM's rules ([PS-3](/controls/ps/ps-3/)). [FIPS 201-3](https://csrc.nist.gov/pubs/fips/201-3/final) (January 2022), section 2.9.4, requires a contractor's PIV Card to be terminated when the contractor changes positions and no longer needs access to federal buildings or systems.
