---
title: 'IA-6 Authentication Feedback'
description: 'NIST SP 800-53 Rev. 5 control IA-6, Authentication Feedback: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'IA-6 Authentication Feedback'
  order: 6
control:
  id: IA-6
  family: IA
  baselines: [Low, Moderate, High]
---

<!-- nist:start -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | System | None |

**Related controls:** [AC-3](/controls/ac/ac-3/)

## Control statement

Obscure feedback of authentication information during the authentication process to protect the information from possible exploitation and use by unauthorized individuals.

<details>
<summary>NIST discussion</summary>

Authentication feedback from systems does not provide information that would allow unauthorized individuals to compromise authentication mechanisms. For some types of systems, such as desktops or notebooks with relatively large monitors, the threat (referred to as shoulder surfing) may be significant. For other types of systems, such as mobile devices with small displays, the threat may be less significant and is balanced against the increased likelihood of typographic input errors due to small keyboards. Thus, the means for obscuring authentication feedback is selected accordingly. Obscuring authentication feedback includes displaying asterisks when users type passwords into input devices or displaying feedback for a very limited time before obscuring it.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for IA-6</summary>

Determine if the feedback of authentication information is obscured during the authentication process to protect the information from possible exploitation and use by unauthorized individuals.

**Examine:** Identification and authentication policy; system security plan; procedures addressing authenticator feedback; system design documentation; system configuration settings and associated documentation; system audit records; other relevant documents or records.

**Interview:** Organizational personnel with information security responsibilities; system/network administrators; system developers.

**Test:** Mechanisms supporting and/or implementing the obscuring of feedback of authentication information during authentication.

</details>
<!-- nist:end -->

<!-- guidance: write below this line -->
