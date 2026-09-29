---
title: Privacy Notice
type: form
description: The privacy notice an organization publishes on its privacy page and links from every point where it collects personally identifiable information, with a short notice for forms and screens, a Privacy Act statement for federal collections, and a register of where each notice is posted, as SP 800-53 PT-5 and PM-20(1) require.
controls: [pt-5, pt-5.2, pm-20, pm-20.1, pt-2, pt-3, pt-4, pt-7]
status: draft
stage: core
typical:
  pt-05_odp.01: 'each later collection of personally identifiable information, and whenever the notice changes materially'
  pt-05_odp.02: 'what information is collected, with whom it is shared, the choices individuals have and how to exercise them, how individuals can access and correct their information, how long it is kept, how it is protected, and how to contact the privacy office'
---

:::guidance
PT-5 asks for notice that is available when an individual first interacts with the organization, written in plain language, and that names the authority for the processing and its purposes. PM-20(1) asks for a privacy policy on every external-facing website, mobile application and digital service, with the date of its last change. This template does both with one full notice for the privacy page (Part 1), a short notice for each form or screen that collects information and links to the full one (Part 2), and, for federal collections, a Privacy Act statement (Part 3). Write each section from the system's [privacy impact assessment](/templates/reports/privacy-impact-assessment/), so the notice and the assessment describe the same information, purposes and sharing (PT-2, PT-3). Laws in some jurisdictions and sectors require specific elements or formats; settle those with legal counsel before publishing. Assessors compare the notice with what the system actually collects and shares, and check that the posted version matches the approved one in the register.
:::

| Organization | Notice version | Effective date | Last updated | Owner |
| --- | --- | --- | --- | --- |
| {{org:name}} | {{fill:version}} | {{fill:date}} | {{fill:date of the most recent change}} | {{org:privacy-official}} |

## Part 1: Privacy notice

Publish this part on the organization's privacy page and link to it from every website, application and service it covers (PM-20, PM-20(1)). Delete any section that does not apply, and replace each example with what the organization actually does.

:::federal
Section 208(c)(1)(B) of the [E-Government Act of 2002](https://www.congress.gov/107/plaws/publ347/PLAW-107publ347.htm) (Pub. L. 107-347) lists what a privacy notice on an agency website must address, consistent with the Privacy Act: what information is to be collected; why it is being collected; the agency's intended use of it; with whom it will be shared; what notice or opportunities for consent individuals have; how it will be secured; and the rights of the individual under the Privacy Act and other privacy laws. [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf) (July 28, 2016), Appendix II, section 5.a, requires agencies to maintain and post privacy policies on all agency websites, mobile applications and other digital services. As of September 2026.
<!-- TODO(verify): OMB M-03-22 (September 2003) is the guidance OMB issued under section 208(c) for website privacy notices. No primary source seen on 2026-09-29 confirms it is still in effect; cite it here only once confirmed. -->

Add a section on Privacy Act rights to Part 1: how an individual requests access to or amendment of records about them in a system of records, and a link to the agency's Privacy Act rules and system of records notices on its privacy page.

- Each website privacy notice shall address every element section 208(c)(1)(B) of the E-Government Act lists, including the individual's rights under the Privacy Act. (PT-5e)

:::

### About this notice

This notice explains how {{org:name}} collects, uses, shares and protects personal information about you, and the choices you have. It covers {{fill:the websites, applications, services and activities this notice covers}}. It was last updated on {{fill:date of the most recent change}} (PM-20(1)(c)).

### Information we collect

| Category | Examples | Where it comes from |
| --- | --- | --- |
| {{fill:category, for example contact information}} | {{fill:examples, for example name, email address and phone number}} | {{fill:source, for example from you when you register}} |
| {{fill:category, for example information collected automatically}} | {{fill:examples, for example IP address, device type and pages visited}} | {{fill:source, for example cookies and server logs}} |

{{fill:if the organization collects Social Security numbers, health, financial or biometric information, or information about children, say which and why (PT-7)}}

### Why we collect it, and our authority

We collect and use your information only for the purposes below, and only as the listed authority permits (PT-5c, PT-5d).

| Purpose | Information used | Authority |
| --- | --- | --- |
| {{fill:purpose, for example to provide the service you signed up for}} | {{fill:categories}} | {{fill:authority, for example our contract with you, your consent, or a named law}} |
| {{fill:purpose, for example to keep our systems secure}} | {{fill:categories}} | {{fill:authority}} |

We will not use your information for a new purpose that is not compatible with these without first updating this notice and, where the law or our policy requires it, asking for your consent (PT-3d).

### Who we share it with

| Recipient | Information shared | Why |
| --- | --- | --- |
| {{fill:recipient, for example service providers who host our systems}} | {{fill:categories}} | {{fill:purpose}} |
| {{fill:recipient, for example law enforcement, when the law requires it}} | {{fill:categories}} | {{fill:purpose}} |

We do not sell your personal information. {{fill:delete or change this sentence to match the organization's practice}}

### Your choices

- {{fill:each choice you have, for example to opt out of marketing email, to decline optional cookies, or to withdraw consent, and how to exercise it}} (PT-4)
- If you withdraw consent, we stop the processing that relied on it. Withdrawing does not affect processing that happened before, or processing that another authority permits.

### Seeing and correcting your information

You can ask to see the personal information we hold about you, and ask us to correct it if it is wrong. {{fill:how to make a request, what identification is needed, and how long a response usually takes}}

### How long we keep it

We keep your information {{fill:the retention period for each category, or the rule that sets it, for example for as long as your account is open and then for 2 years}}, then delete or de-identify it.

### How we protect it

We protect your information with administrative, technical and physical safeguards suited to its sensitivity, including {{fill:examples in plain words, for example encryption, limits on who can see it, and monitoring for misuse}}. No system is completely secure; if a breach affects your information, we will tell you as the law requires.

### Changes to this notice

When we change this notice, we update the date at the top. If a change is material, we tell you {{fill:how, for example by email or a message when you next sign in}} before it takes effect (PT-5a).

### Contact us

Questions, requests and complaints about privacy go to the {{org:privacy-official}}: {{fill:public email address}}, {{fill:public phone number}}, or {{fill:postal address}} (PM-20c).

## Part 2: Short notice at the point of collection

Put this on each form, sign-up screen or other place that collects personal information, next to the submit button or the first field, with a link to Part 1 (PT-5a). Keep it to a few sentences.

> **Privacy:** {{org:name}} collects {{fill:the information this form collects}} to {{fill:the purpose of this collection}}, under {{fill:the authority}}. Providing it is {{fill:mandatory or voluntary}}; if you do not, {{fill:the effect, for example we cannot process your request}}. We share it with {{fill:recipients, or "no one outside the organization"}}. {{fill:the choice offered, if any, for example "Tick this box to also receive updates by email."}} Read our full privacy notice at {{fill:link to Part 1}}.

## Part 3: Privacy Act statement

Complete this part only for a form, screen or call that collects information to be kept in a U.S. Privacy Act system of records. Otherwise delete it.

:::federal
The Privacy Act requires each agency to inform every individual it asks to supply information, on the form it uses to collect the information or on a separate form the individual can keep, of the authority for the request and whether disclosure is mandatory or voluntary, the principal purposes, the routine uses, and the effects on the individual of not providing the information ([5 U.S.C. § 552a(e)(3)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title5-section552a&num=0&edition=prelim)). [OMB Circular A-108](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A108/omb_circular_a-108.pdf) (reissued December 23, 2016, 81 FR 94424), section 6.l, requires the statement in plain language whatever the medium, including websites, mobile applications and the telephone, and adds a citation (and, if practicable, a link) to the system of records notice. For collection by telephone, the agency gives the information orally and provides a way to receive it in writing. As of September 2026.

| Element | Statement |
| --- | --- |
| Authority | {{fill:the statute or executive order that authorizes the request}} |
| Mandatory or voluntary | {{fill:whether providing the information is mandatory or voluntary}} |
| Principal purposes | {{fill:the principal purposes for which the information will be used}} |
| Routine uses | {{fill:the published routine uses, or a summary with a link to them}} |
| Effect of not providing information | {{fill:the effects, if any, on the individual of not providing all or part of the information}} |
| System of records notice | {{fill:the notice's name, number and Federal Register citation, with a link}} |

- The {{org:system-owner}} shall place the Privacy Act statement on the collection form, or on a separate form the individual can keep, before the form is used. (PT-5(2))
- For collection by telephone, the {{org:system-owner}} shall give the statement orally and offer it in writing. (PT-5(2))

:::

## Publishing and maintaining this notice

- The {{org:privacy-official}} approves each notice in this template, and each change to one, before it is published (PT-5).
- Individuals can see the full notice when they first interact with {{org:name}}, and it is shown again at {{param:pt-05_odp.01}} (PT-5a).
- Each notice includes {{param:pt-05_odp.02}} (PT-5e).
- The {{org:system-owner}} tells the {{org:privacy-official}} before any change to what a system collects, why, or with whom it shares it, so the notice can be updated first (PT-3d).
- The {{org:privacy-official}} reviews every notice at least {{fill:how often, for example annually}}, and whenever the privacy impact assessment changes (RA-8).
- Every published notice, and the date it was replaced, is recorded in the register below and kept for {{fill:how long, for example as long as the records it described}}.

## Register

| Notice | Type | Where posted | Version | Approved by | Approved date | Effective date | Last reviewed | Replaced on |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:notice name}} | {{fill:full notice, short notice or Privacy Act statement}} | {{fill:web address, form number or screen}} | {{fill:version}} | {{fill:name and title}} | {{fill:date}} | {{fill:date}} | {{fill:date}} | {{fill:date, or blank if current}} |
