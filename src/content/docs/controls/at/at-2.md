---
title: 'AT-2 Literacy Training and Awareness'
description: 'NIST SP 800-53 Rev. 5 control AT-2, Literacy Training and Awareness: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'AT-2 Literacy Training and Awareness'
  order: 2
control:
  id: AT-2
  family: AT
  baselines: [Low, Moderate, High, Privacy]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | 6 (2 in a baseline) |

**Related controls:** [AC-3](/controls/ac/ac-3/), [AC-17](/controls/ac/ac-17/), [AC-22](/controls/ac/ac-22/), [AT-3](/controls/at/at-3/), [AT-4](/controls/at/at-4/), [CP-3](/controls/cp/cp-3/), [IA-4](/controls/ia/ia-4/), [IR-2](/controls/ir/ir-2/), [IR-7](/controls/ir/ir-7/), [IR-9](/controls/ir/ir-9/), [PL-4](/controls/pl/pl-4/), [PM-13](/controls/pm/pm-13/), [PM-21](/controls/pm/pm-21/), [PS-7](/controls/ps/ps-7/), [PT-2](/controls/pt/pt-2/), [SA-8](/controls/sa/sa-8/), [SA-16](/controls/sa/sa-16/)

## Control statement

- **a.** Provide security and privacy literacy training to system users (including managers, senior executives, and contractors):
  - **1.** As part of initial training for new users and [Assignment: organization-defined organization-defined frequency] thereafter; and
  - **2.** When required by system changes or following [Assignment: organization-defined organization-defined events];
- **b.** Employ the following techniques to increase the security and privacy awareness of system users [Assignment: organization-defined awareness techniques];
- **c.** Update literacy training and awareness content [Assignment: organization-defined frequency] and following [Assignment: organization-defined events] ; and
- **d.** Incorporate lessons learned from internal or external security incidents or breaches into literacy training and awareness techniques.

<details>
<summary>NIST discussion</summary>

Organizations provide basic and advanced levels of literacy training to system users, including measures to test the knowledge level of users. Organizations determine the content of literacy training and awareness based on specific organizational requirements, the systems to which personnel have authorized access, and work environments (e.g., telework). The content includes an understanding of the need for security and privacy as well as actions by users to maintain security and personal privacy and to respond to suspected incidents. The content addresses the need for operations security and the handling of personally identifiable information.

Awareness techniques include displaying posters, offering supplies inscribed with security and privacy reminders, displaying logon screen messages, generating email advisories or notices from organizational officials, and conducting awareness events. Literacy training after the initial training described in AT-2a.1 is conducted at a minimum frequency consistent with applicable laws, directives, regulations, and policies. Subsequent literacy training may be satisfied by one or more short ad hoc sessions and include topical information on recent attack schemes, changes to organizational security and privacy policies, revised security and privacy expectations, or a subset of topics from the initial training. Updating literacy training and awareness content on a regular basis helps to ensure that the content remains relevant. Events that may precipitate an update to literacy training and awareness content include, but are not limited to, assessment or audit findings, security incidents or breaches, or changes in applicable laws, executive orders, directives, regulations, policies, standards, and guidelines.

</details>

## Control enhancements

<a id="at-2.1"></a>

### AT-2(1) Practical Exercises

*Baselines: Not in a baseline*

Provide practical exercises in literacy training that simulate events and incidents.

<details>
<summary>Discussion and assessment objectives for AT-2(1)</summary>

Practical exercises include no-notice social engineering attempts to collect information, gain unauthorized access, or simulate the adverse impact of opening malicious email attachments or invoking, via spear phishing attacks, malicious web links.

Determine if practical exercises in literacy training that simulate events and incidents are provided.

**Examine:** System security plan; privacy plan; security awareness and training policy; procedures addressing security awareness training implementation; security awareness training curriculum; security awareness training materials; other relevant documents or records.

**Interview:** Organizational personnel who receive literacy training and awareness; organizational personnel with responsibilities for security awareness training; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing cyber-attack simulations in practical exercises.

</details>

<a id="at-2.2"></a>

### AT-2(2) Insider Threat

*Baselines: Low, Moderate, High*

Provide literacy training on recognizing and reporting potential indicators of insider threat.

<details>
<summary>Discussion and assessment objectives for AT-2(2)</summary>

Potential indicators and possible precursors of insider threat can include behaviors such as inordinate, long-term job dissatisfaction; attempts to gain access to information not required for job performance; unexplained access to financial resources; bullying or harassment of fellow employees; workplace violence; and other serious violations of policies, procedures, directives, regulations, rules, or practices. Literacy training includes how to communicate the concerns of employees and management regarding potential indicators of insider threat through channels established by the organization and in accordance with established policies and procedures. Organizations may consider tailoring insider threat awareness topics to the role. For example, training for managers may be focused on changes in the behavior of team members, while training for employees may be focused on more general observations.

Determine if:

- **AT-02(02)[01]** literacy training on recognizing potential indicators of insider threat is provided;
- **AT-02(02)[02]** literacy training on reporting potential indicators of insider threat is provided.

**Examine:** System security plan; privacy plan; literacy training and awareness policy; procedures addressing literacy training and awareness implementation; literacy training and awareness curriculum; literacy training and awareness materials; other relevant documents or records.

**Interview:** Organizational personnel who receive literacy training and awareness; organizational personnel with responsibilities for literacy training and awareness; organizational personnel with information security and privacy responsibilities.

</details>

<a id="at-2.3"></a>

### AT-2(3) Social Engineering and Mining

*Baselines: Moderate, High*

Provide literacy training on recognizing and reporting potential and actual instances of social engineering and social mining.

<details>
<summary>Discussion and assessment objectives for AT-2(3)</summary>

Social engineering is an attempt to trick an individual into revealing information or taking an action that can be used to breach, compromise, or otherwise adversely impact a system. Social engineering includes phishing, pretexting, impersonation, baiting, quid pro quo, thread-jacking, social media exploitation, and tailgating. Social mining is an attempt to gather information about the organization that may be used to support future attacks. Literacy training includes information on how to communicate the concerns of employees and management regarding potential and actual instances of social engineering and data mining through organizational channels based on established policies and procedures.

Determine if:

- **AT-02(03)[01]** literacy training on recognizing potential and actual instances of social engineering is provided;
- **AT-02(03)[02]** literacy training on reporting potential and actual instances of social engineering is provided;
- **AT-02(03)[03]** literacy training on recognizing potential and actual instances of social mining is provided;
- **AT-02(03)[04]** literacy training on reporting potential and actual instances of social mining is provided.

**Examine:** System security plan; privacy plan; literacy training and awareness policy; procedures addressing literacy training and awareness implementation; literacy training and awareness curriculum; literacy training and awareness materials; other relevant documents or records.

**Interview:** Organizational personnel who receive literacy training and awareness; organizational personnel with responsibilities for literacy training and awareness; organizational personnel with information security and privacy responsibilities.

</details>

<a id="at-2.4"></a>

### AT-2(4) Suspicious Communications and Anomalous System Behavior

*Baselines: Not in a baseline*

Provide literacy training on recognizing suspicious communications and anomalous behavior in organizational systems using [Assignment: organization-defined indicators of malicious code].

<details>
<summary>Discussion and assessment objectives for AT-2(4)</summary>

A well-trained workforce provides another organizational control that can be employed as part of a defense-in-depth strategy to protect against malicious code coming into organizations via email or the web applications. Personnel are trained to look for indications of potentially suspicious email (e.g., receiving an unexpected email, receiving an email containing strange or poor grammar, or receiving an email from an unfamiliar sender that appears to be from a known sponsor or contractor). Personnel are also trained on how to respond to suspicious email or web communications. For this process to work effectively, personnel are trained and made aware of what constitutes suspicious communications. Training personnel on how to recognize anomalous behaviors in systems can provide organizations with early warning for the presence of malicious code. Recognition of anomalous behavior by organizational personnel can supplement malicious code detection and protection tools and systems employed by organizations.

Determine if literacy training on recognizing suspicious communications and anomalous behavior in organizational systems using [Assignment: organization-defined indicators of malicious code] is provided.

**Examine:** System security plan; privacy plan; literacy training and awareness policy; procedures addressing literacy training and awareness implementation; literacy training and awareness curriculum; literacy training and awareness materials; other relevant documents or records.

**Interview:** Organizational personnel who receive literacy training and awareness; organizational personnel with responsibilities for basic literacy training and awareness; organizational personnel with information security and privacy responsibilities.

</details>

<a id="at-2.5"></a>

### AT-2(5) Advanced Persistent Threat

*Baselines: Not in a baseline*

Provide literacy training on the advanced persistent threat.

<details>
<summary>Discussion and assessment objectives for AT-2(5)</summary>

An effective way to detect advanced persistent threats (APT) and to preclude successful attacks is to provide specific literacy training for individuals. Threat literacy training includes educating individuals on the various ways that APTs can infiltrate the organization (e.g., through websites, emails, advertisement pop-ups, articles, and social engineering). Effective training includes techniques for recognizing suspicious emails, use of removable systems in non-secure settings, and the potential targeting of individuals at home.

Determine if literacy training on the advanced persistent threat is provided.

**Examine:** System security plan; privacy plan; literacy training and awareness policy; procedures addressing literacy training and awareness implementation; literacy training and awareness curriculum; literacy training and awareness materials; other relevant documents or records.

**Interview:** Organizational personnel who receive literacy training and awareness; organizational personnel with responsibilities for basic literacy training and awareness; organizational personnel with information security and privacy responsibilities.

</details>

<a id="at-2.6"></a>

### AT-2(6) Cyber Threat Environment

*Baselines: Not in a baseline*

- **(a)** Provide literacy training on the cyber threat environment; and
- **(b)** Reflect current cyber threat information in system operations.

<details>
<summary>Discussion and assessment objectives for AT-2(6)</summary>

Since threats continue to change over time, threat literacy training by the organization is dynamic. Moreover, threat literacy training is not performed in isolation from the system operations that support organizational mission and business functions.

Determine if:

- **AT-02(06)(a)** literacy training on the cyber threat environment is provided;
- **AT-02(06)(b)** system operations reflects current cyber threat information.

**Examine:** System security plan; privacy plan; literacy training and awareness policy; procedures addressing literacy training and awareness training implementation; literacy training and awareness curriculum; literacy training and awareness materials; other relevant documents or records.

**Interview:** Organizational personnel who receive literacy training and awareness; organizational personnel with responsibilities for basic literacy training and awareness; organizational personnel with information security and privacy responsibilities.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for AT-2</summary>

Determine if:

- **AT-02a.**
  - **AT-02a.01**
    - **AT-02a.01[01]** security literacy training is provided to system users (including managers, senior executives, and contractors) as part of initial training for new users;
    - **AT-02a.01[02]** privacy literacy training is provided to system users (including managers, senior executives, and contractors) as part of initial training for new users;
    - **AT-02a.01[03]** security literacy training is provided to system users (including managers, senior executives, and contractors) [Assignment: organization-defined frequency] thereafter;
    - **AT-02a.01[04]** privacy literacy training is provided to system users (including managers, senior executives, and contractors) [Assignment: organization-defined frequency] thereafter;
  - **AT-02a.02**
    - **AT-02a.02[01]** security literacy training is provided to system users (including managers, senior executives, and contractors) when required by system changes or following [Assignment: organization-defined events];
    - **AT-02a.02[02]** privacy literacy training is provided to system users (including managers, senior executives, and contractors) when required by system changes or following [Assignment: organization-defined events];
- **AT-02b.** [Assignment: organization-defined awareness techniques] are employed to increase the security and privacy awareness of system users;
- **AT-02c.**
  - **AT-02c.[01]** literacy training and awareness content is updated [Assignment: organization-defined frequency];
  - **AT-02c.[02]** literacy training and awareness content is updated following [Assignment: organization-defined events];
- **AT-02d.** lessons learned from internal or external security incidents or breaches are incorporated into literacy training and awareness techniques.

**Examine:** System security plan; privacy plan; literacy training and awareness policy; procedures addressing literacy training and awareness implementation; appropriate codes of federal regulations; security and privacy literacy training curriculum; security and privacy literacy training materials; training records; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for literacy training and awareness; organizational personnel with information security and privacy responsibilities; organizational personnel comprising the general system user community.

**Test:** Mechanisms managing information security and privacy literacy training.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
