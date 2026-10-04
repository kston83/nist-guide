---
title: 'PL-4 Rules of Behavior'
description: 'NIST SP 800-53 Rev. 5 control PL-4, Rules of Behavior: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PL-4 Rules of Behavior'
  order: 4
control:
  id: PL-4
  family: PL
  baselines: [Low, Moderate, High, Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | 1 (1 in a baseline) |

**Related controls:** [AC-2](/controls/ac/ac-2/), [AC-6](/controls/ac/ac-6/), [AC-8](/controls/ac/ac-8/), [AC-9](/controls/ac/ac-9/), [AC-17](/controls/ac/ac-17/), [AC-18](/controls/ac/ac-18/), [AC-19](/controls/ac/ac-19/), [AC-20](/controls/ac/ac-20/), [AT-2](/controls/at/at-2/), [AT-3](/controls/at/at-3/), [CM-11](/controls/cm/cm-11/), [IA-2](/controls/ia/ia-2/), [IA-4](/controls/ia/ia-4/), [IA-5](/controls/ia/ia-5/), [MP-7](/controls/mp/mp-7/), [PS-6](/controls/ps/ps-6/), [PS-8](/controls/ps/ps-8/), [SA-5](/controls/sa/sa-5/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Establish and provide to individuals requiring access to the system, the rules that describe their responsibilities and expected behavior for information and system usage, security, and privacy;
- **b.** Receive a documented acknowledgment from such individuals, indicating that they have read, understand, and agree to abide by the rules of behavior, before authorizing access to information and the system;
- **c.** Review and update the rules of behavior [Assignment: organization-defined frequency] ; and
- **d.** Require individuals who have acknowledged a previous version of the rules of behavior to read and re-acknowledge [Selection (one or more): [Assignment: organization-defined frequency] ; when the rules are revised or updated].

<details>
<summary>NIST discussion</summary>

Rules of behavior represent a type of access agreement for organizational users. Other types of access agreements include nondisclosure agreements, conflict-of-interest agreements, and acceptable use agreements (see PS-6 ). Organizations consider rules of behavior based on individual user roles and responsibilities and differentiate between rules that apply to privileged users and rules that apply to general users. Establishing rules of behavior for some types of non-organizational users, including individuals who receive information from federal systems, is often not feasible given the large number of such users and the limited nature of their interactions with the systems. Rules of behavior for organizational and non-organizational users can also be established in AC-8 . The related controls section provides a list of controls that are relevant to organizational rules of behavior. PL-4b , the documented acknowledgment portion of the control, may be satisfied by the literacy training and awareness and role-based training programs conducted by organizations if such training includes rules of behavior. Documented acknowledgements for rules of behavior include electronic or physical signatures and electronic agreement check boxes or radio buttons.

</details>

## Control enhancements

<a id="pl-4.1"></a>

### PL-4(1) Social Media and External Site/Application Usage Restrictions

*Baselines: Low, Moderate, High, Privacy*

Include in the rules of behavior, restrictions on:

- **(a)** Use of social media, social networking sites, and external sites/applications;
- **(b)** Posting organizational information on public websites; and
- **(c)** Use of organization-provided identifiers (e.g., email addresses) and authentication secrets (e.g., passwords) for creating accounts on external sites/applications.

<details>
<summary>Discussion and assessment objectives for PL-4(1)</summary>

Social media, social networking, and external site/application usage restrictions address rules of behavior related to the use of social media, social networking, and external sites when organizational personnel are using such sites for official duties or in the conduct of official business, when organizational information is involved in social media and social networking transactions, and when personnel access social media and networking sites from organizational systems. Organizations also address specific rules that prevent unauthorized entities from obtaining non-public organizational information from social media and networking sites either directly or through inference. Non-public information includes personally identifiable information and system account information.

Determine if:

- **PL-04(01)(a)** the rules of behavior include restrictions on the use of social media, social networking sites, and external sites/applications;
- **PL-04(01)(b)** the rules of behavior include restrictions on posting organizational information on public websites;
- **PL-04(01)(c)** the rules of behavior include restrictions on the use of organization-provided identifiers (e.g., email addresses) and authentication secrets (e.g., passwords) for creating accounts on external sites/applications.

**Examine:** Security and privacy planning policy; procedures addressing rules of behavior for system users; rules of behavior; training policy; other relevant documents or records.

**Interview:** Organizational personnel with responsibility for establishing, reviewing, and updating rules of behavior; organizational personnel with responsibility for literacy training and awareness and role-based training; organizational personnel who are authorized users of the system and have signed rules of behavior; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for establishing rules of behavior; mechanisms supporting and/or implementing the establishment of rules of behavior.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PL-4</summary>

Determine if:

- **PL-04a.**
  - **PL-04a.[01]** rules that describe responsibilities and expected behavior for information and system usage, security, and privacy are established for individuals requiring access to the system;
  - **PL-04a.[02]** rules that describe responsibilities and expected behavior for information and system usage, security, and privacy are provided to individuals requiring access to the system;
- **PL-04b.** before authorizing access to information and the system, a documented acknowledgement from such individuals indicating that they have read, understand, and agree to abide by the rules of behavior is received;
- **PL-04c.** rules of behavior are reviewed and updated [Assignment: organization-defined frequency];
- **PL-04d.** individuals who have acknowledged a previous version of the rules of behavior are required to read and reacknowledge [Selection (one or more): [Assignment: organization-defined frequency] ; when the rules are revised or updated].

**Examine:** Security and privacy planning policy; procedures addressing rules of behavior for system users; rules of behavior; signed acknowledgements; records for rules of behavior reviews and updates; other relevant documents or records.

**Interview:** Organizational personnel with responsibility for establishing, reviewing, and updating rules of behavior; organizational personnel with responsibility for literacy training and awareness and role-based training; organizational personnel who are authorized users of the system and have signed and resigned rules of behavior; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for establishing, reviewing, disseminating, and updating rules of behavior; mechanisms supporting and/or implementing the establishment, review, dissemination, and update of rules of behavior.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PL-4 asks for rules that tell everyone with access what they are responsible for, and a documented acknowledgment from each person before access is granted. You then review the rules and have people re-acknowledge them on a schedule. NIST's PL-4 discussion treats rules of behavior as a kind of access agreement (PS-6), and asks you to set different rules for privileged users and general users.

**Common implementations.** The [Rules of Behavior template](/templates/forms/rules-of-behavior/) gives the rules, a signature block and a register of acknowledgments. Most organizations collect acknowledgments electronically, in the training or HR system. NIST's discussion accepts electronic signatures and check boxes, and says the acknowledgment can be part of awareness and role-based training if the training includes the rules (AT-2, AT-3). Annual awareness training is then a convenient place for re-acknowledgment. The account manager checks for a current acknowledgment before creating the account (AC-2). The [access request form](/templates/forms/access-request-form/) can carry that check.

Where individual rules of behavior are not feasible, for example the public using a web service, NIST's discussion points to the system use notification (AC-8).

**Organization-defined parameters.** Typical values, from the [Planning policy](/templates/policies/pl/) and the Rules of Behavior, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Review and update frequency (c) | Annually |
| When people re-acknowledge (d) | Annually, and when the rules are revised or updated |
| Re-acknowledgment frequency (d) | Annually |

**Evidence assessors ask for.**

- The current rules, with the version, the effective date, the owner and the date of the last review
- Separate or added rules for privileged users
- The acknowledgment records, such as the register or a training system export
- A sample of new accounts, each with an acknowledgment dated before the account was created
- Re-acknowledgment records after the last revision and for the last annual cycle

**Inheritance.** Organization-wide rules are usually a common control, issued once and acknowledged through the training system. A system adds its own rules where its users need them, for example privileged users of a production environment or users of a system that holds sensitive data. It also checks that its own accounts have acknowledgments.

**Common findings.**

- Acknowledgments dated after the account was created, or missing for contractors, partners and privileged users.
- Rules not reviewed within the stated period, or still describing tools and practices no longer in use.
- No re-acknowledgment after the rules changed.
- One set of rules for everyone, with nothing for privileged users.
- Rules that lack the social media and external site restrictions PL-4(1) requires.

**Enhancements in the Moderate baseline.** [PL-4(1)](#pl-4.1) social media and external site and application usage restrictions, also in Low, High and Privacy. The rules must restrict using social media and external sites for organizational business, posting organizational information on public websites, and using organization-provided identifiers and passwords to create accounts on external sites. The Rules of Behavior template's "Social media and external sites" section carries all three. NIST's discussion adds rules that prevent outsiders from gathering non-public information, including personal data and system account details, from social media, directly or by inference.

**Federal systems** (as of October 2026). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.h(6), requires agencies to establish rules of behavior, "including consequences for violating rules of behavior," for employees and contractors with access to federal information or systems, including those that handle personally identifiable information. Section 4.h(7) requires that they "have read and agreed to abide by the rules of behavior" before being granted access. The Rules of Behavior template's "Consequences" section meets the first requirement; keep it.
