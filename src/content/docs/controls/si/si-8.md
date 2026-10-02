---
title: 'SI-8 Spam Protection'
description: 'NIST SP 800-53 Rev. 5 control SI-8, Spam Protection: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SI-8 Spam Protection'
  order: 8
control:
  id: SI-8
  family: SI
  baselines: [Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | Organization | 2 (1 in a baseline) |

**Related controls:** [PL-9](/controls/pl/pl-9/), [SC-5](/controls/sc/sc-5/), [SC-7](/controls/sc/sc-7/), [SC-38](/controls/sc/sc-38/), [SI-3](/controls/si/si-3/), [SI-4](/controls/si/si-4/)

## Control statement

- **a.** Employ spam protection mechanisms at system entry and exit points to detect and act on unsolicited messages; and
- **b.** Update spam protection mechanisms when new releases are available in accordance with organizational configuration management policy and procedures.

<details>
<summary>NIST discussion</summary>

System entry and exit points include firewalls, remote-access servers, electronic mail servers, web servers, proxy servers, workstations, notebook computers, and mobile devices. Spam can be transported by different means, including email, email attachments, and web accesses. Spam protection mechanisms include signature definitions.

</details>

## Control enhancements

<a id="si-8.2"></a>

### SI-8(2) Automatic Updates

*Baselines: Moderate, High*

Automatically update spam protection mechanisms [Assignment: organization-defined frequency].

<details>
<summary>Discussion and assessment objectives for SI-8(2)</summary>

Using automated mechanisms to update spam protection mechanisms helps to ensure that updates occur on a regular basis and provide the latest content and protection capabilities.

Determine if spam protection mechanisms are automatically updated [Assignment: organization-defined frequency].

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing spam protection; spam protection mechanisms; records of spam protection updates; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel responsible for spam protection; organizational personnel with information security responsibilities; system/network administrators; system developer.

**Test:** Organizational processes for spam protection; mechanisms supporting and/or implementing automatic updates to spam protection mechanisms.

</details>

<a id="si-8.3"></a>

### SI-8(3) Continuous Learning Capability

*Baselines: Not in a baseline*

Implement spam protection mechanisms with a learning capability to more effectively identify legitimate communications traffic.

<details>
<summary>Discussion and assessment objectives for SI-8(3)</summary>

Learning mechanisms include Bayesian filters that respond to user inputs that identify specific traffic as spam or legitimate by updating algorithm parameters and thereby more accurately separating types of traffic.

Determine if spam protection mechanisms with a learning capability are implemented to more effectively identify legitimate communications traffic.

**Examine:** System and information integrity policy; system and information integrity procedures; procedures addressing spam protection; spam protection mechanisms; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel responsible for spam protection; organizational personnel with information security responsibilities; system/network administrators; system developer.

**Test:** Organizational processes for spam protection; mechanisms supporting and/or implementing spam protection mechanisms with a learning capability.

</details>

*Withdrawn enhancements: SI-8(1).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SI-8</summary>

Determine if:

- **SI-08a.**
  - **SI-08a.[01]** spam protection mechanisms are employed at system entry points to detect unsolicited messages;
  - **SI-08a.[02]** spam protection mechanisms are employed at system exit points to detect unsolicited messages;
  - **SI-08a.[03]** spam protection mechanisms are employed at system entry points to act on unsolicited messages;
  - **SI-08a.[04]** spam protection mechanisms are employed at system exit points to act on unsolicited messages;
- **SI-08b.** spam protection mechanisms are updated when new releases are available in accordance with organizational configuration management policies and procedures.

**Examine:** System and information integrity policy; system and information integrity procedures; configuration management policies and procedures (CM-01); procedures addressing spam protection; spam protection mechanisms; records of spam protection updates; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel responsible for spam protection; organizational personnel with information security responsibilities; system/network administrators; system developer.

**Test:** Organizational processes for implementing spam protection; mechanisms supporting and/or implementing spam protection.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

SI-8 asks you to run spam protection at system entry and exit points to detect and act on unsolicited messages (a), and to update it as new releases come out, under configuration management (b). NIST's SI-8 discussion says entry and exit points include firewalls, remote access servers, email servers, web servers, proxy servers, workstations, notebook computers and mobile devices, that spam travels by email, email attachments and web access, and that spam protection mechanisms include signature definitions. SI-8 is in the Moderate and High baselines, not Low.

Spam protection today is mostly the email service's job, and it overlaps with phishing defense and malicious code protection ([SI-3](/controls/si/si-3/)) in the same gateway. Publishing SPF, DKIM and DMARC records for the organization's own domains is the other half: it lets other organizations reject mail that pretends to come from yours.

**Common implementations.** The cloud email service's built-in filtering, or a secure email gateway in front of it, with reputation, content and signature filtering, and spam and phishing sent to quarantine or the junk folder. Inbound authentication checks that act on failed SPF, DKIM and DMARC results. A button that lets users report spam and phishing, feeding the security operations team and the filter. Outbound filtering, so a compromised account cannot send spam from the organization's domains. Filter definitions that the vendor updates continuously, without anyone installing them.

**Organization-defined parameters.** SI-8 itself has no parameters. The policy has the system owner employ spam protection at entry and exit points to detect and act on unsolicited messages (SI-8a), and update it when new releases are available, under the configuration management policy and procedures (SI-8b). Typical value for the Moderate enhancement, from the [System and Information Integrity policy](/templates/policies/si/), which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| How often spam protection updates automatically (SI-8(2)) | As the vendor releases updates, and at least daily |

**Evidence assessors ask for.**

- The email filtering configuration: spam, phishing and authentication policies, and what happens to a flagged message
- Evidence that filter definitions update automatically, such as the service's update settings or the gateway's update log
- The organization's SPF, DKIM and DMARC records for each domain that sends mail
- Filtering reports showing volumes blocked and quarantined
- How users report spam and phishing, and what the security operations team does with the reports

**Inheritance.** Spam protection is usually a common control, provided by the email service and its gateway for every system. A cloud email provider operates the filtering engine and its updates; the organization owns the policy settings and its domains' records. A system that sends or receives mail on its own, such as an application that accepts messages from the public, records in its [system security plan](/templates/plans/system-security-plan/) how its own mail is filtered.

**Common findings.**

- DMARC published with a policy of "none" and never moved to enforcement, or no DMARC record at all.
- Domains that send no mail left without records saying so, so they can be spoofed.
- Applications or devices that send mail directly, bypassing the gateway and its outbound filtering.
- Allow lists of senders or domains so broad that they let phishing through.

**Enhancements in the Moderate baseline.** [SI-8(2)](#si-8.2) automatic updates, also in High. NIST's discussion says automated updates help ensure updates occur regularly and provide the latest content and protection. With a cloud email service, the evidence is the vendor's statement or setting that definitions update continuously. SI-8(1) is withdrawn, and [SI-8(3)](#si-8.3), a learning capability such as Bayesian filters that adjust to users marking messages as spam or legitimate, is in no baseline.

**Federal systems** (as of October 2026). CISA [BOD 18-01](https://www.cisa.gov/news-events/directives/bod-18-01-enhance-email-and-web-security), Enhance Email and Web Security (October 16, 2017), still in effect with no revocation mark on its page, requires valid SPF and DMARC records for all second-level agency domains, a DMARC policy of "reject" for all second-level domains and mail-sending hosts, and the address `reports@dmarc.cyber.dhs.gov` as a recipient of DMARC aggregate reports. It also requires internet-facing mail servers to offer STARTTLS and to disable the 3DES and RC4 ciphers on mail servers; the page notes a temporary policy exception for 3DES in mail environments, issued September 20, 2018. The SI-8 clause's federal block carries the SPF, DMARC and reporting requirements; the STARTTLS and cipher requirements belong to transmission protection ([SC-8](/controls/sc/sc-8/)).
