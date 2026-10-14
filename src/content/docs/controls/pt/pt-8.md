---
title: 'PT-8 Computer Matching Requirements'
description: 'NIST SP 800-53 Rev. 5 control PT-8, Computer Matching Requirements: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'PT-8 Computer Matching Requirements'
  order: 8
control:
  id: PT-8
  family: PT
  baselines: [Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Privacy | Organization | None |

**Related controls:** [PM-24](/controls/pm/pm-24/)

## Control statement

When a system or organization processes information for the purpose of conducting a matching program:

- **a.** Obtain approval from the Data Integrity Board to conduct the matching program;
- **b.** Develop and enter into a computer matching agreement;
- **c.** Publish a matching notice in the Federal Register;
- **d.** Independently verify the information produced by the matching program before taking adverse action against an individual, if required; and
- **e.** Provide individuals with notice and an opportunity to contest the findings before taking adverse action against an individual.

<details>
<summary>NIST discussion</summary>

The PRIVACT establishes requirements for federal and non-federal agencies if they engage in a matching program. In general, a matching program is a computerized comparison of records from two or more automated PRIVACT systems of records or an automated system of records and automated records maintained by a non-federal agency (or agent thereof). A matching program either pertains to federal benefit programs or federal personnel or payroll records. A federal benefit match is performed to determine or verify eligibility for payments under federal benefit programs or to recoup payments or delinquent debts under federal benefit programs. A matching program involves not just the matching activity itself but also the investigative follow-up and ultimate action, if any.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for PT-8</summary>

Determine if:

- **PT-08a.** approval to conduct the matching program is obtained from the Data Integrity Board when a system or organization processes information for the purpose of conducting a matching program;
- **PT-08b.**
  - **PT-08b.[01]** a computer matching agreement is developed when a system or organization processes information for the purpose of conducting a matching program;
  - **PT-08b.[02]** a computer matching agreement is entered into when a system or organization processes information for the purpose of conducting a matching program;
- **PT-08c.** a matching notice is published in the Federal Register when a system or organization processes information for the purpose of conducting a matching program;
- **PT-08d.** the information produced by the matching program is independently verified before taking adverse action against an individual, if required, when a system or organization processes information for the purpose of conducting a matching program;
- **PT-08e.**
  - **PT-08e.[01]** individuals are provided with notice when a system or organization processes information for the purpose of conducting a matching program;
  - **PT-08e.[02]** individuals are provided with an opportunity to contest the findings before adverse action is taken against them when a system or organization processes information for the purpose of conducting a matching program.

**Examine:** Personally identifiable information processing and transparency policy and procedures; privacy notice; Privacy Act system of records; Federal Register notices; Data Integrity Board determinations; contracts; information sharing agreements; memoranda of understanding; governing requirements; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with personally identifiable information processing and transparency responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Organizational processes for supporting and/or implementing personally identifiable information processing; matching program.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

PT-8 applies when a system or organization processes information to conduct a matching program. Get the data integrity board's approval (a), enter into a computer matching agreement (b), publish a matching notice in the Federal Register (c), independently verify what the match produces before taking adverse action against anyone, where required (d), and give individuals notice and a chance to contest the findings before adverse action (e). PT-8 is in the SP 800-53B Privacy baseline only.

NIST's PT-8 discussion explains that the U.S. Privacy Act sets these requirements for federal and non-federal agencies that take part in a matching program. In general, a matching program is a computerized comparison of records from two or more automated Privacy Act systems of records, or of a system of records with automated records a non-federal agency keeps, that pertains to federal benefit programs or to federal personnel or payroll records. A benefit match determines or verifies eligibility for payments under a federal benefit program, or recoups payments or delinquent debts. The program covers not just the match but the investigative follow-up and any action taken.

Matching programs are run by federal agencies, often with state or local agencies as partners. Any other organization keeps the PT-8 heading and records that it runs none, as the PT-8 clause and the PT decision worksheet say. The data integrity board is the one [PM-24](/controls/pm/pm-24/) establishes; that page covers its membership and annual review.

**Common implementations.** The PT-8 clause of the [PII Processing and Transparency policy](/templates/policies/pt/) gives approval, the agreement and the notice to the senior privacy official, and verification and notice to individuals to the system owner. In practice:

- A screening question, added to section 1 of the [privacy impact assessment](/templates/reports/privacy-impact-assessment/) and to data-sharing reviews, that asks whether a planned comparison of records is a matching program, with legal counsel deciding close cases
- A calendar of every matching agreement's expiry date, so the board can renew or the program can be re-established in time
- Written verification steps for each program, and a template letter that states the findings and how to contest them
- A hold in the benefit or payment system that blocks adverse action until verification and the response period are complete

**Organization-defined parameters.** PT-8 has none. Its clause leaves these choices open, with typical values your organization may set differently:

| Choice | Typical value |
| --- | --- |
| Who decides whether an activity is a matching program | The senior privacy official, with legal counsel |
| Who obtains board approval, agreements and notices (a to c) | The senior privacy official (the clause) |
| Who verifies results and notifies individuals (d, e) | The system owner of the program that would take the action (the clause) |
| Time allowed to respond before adverse action (e) | The period set by statute or regulation, or else 30 days from the notice (the clause's federal block) |
| Where the decision is recorded if the organization runs no matching programs | The privacy plan, and the PT decision worksheet |

**Evidence assessors ask for.**

- The list of the organization's matching programs, with each agreement, its approval by the board and its expiry date
- The published matching notices, with their Federal Register citations
- For a sample of adverse actions that followed a match, the verification record, the notice sent to the individual and the dates
- The board's records of renewals and of its annual review

**Inheritance.** PT-8 is carried out by the agency for each matching program, under the board PM-24 establishes. The systems that take part inherit the agreement and the notice, and enforce verification and notice before adverse action.

**Common findings.**

- A data exchange that meets the definition of a matching program, run without an agreement or notice because it was set up as an ordinary interface.
- Agreements expired, or renewed more than once, while the match kept running.
- Adverse action taken on match results with no independent verification or no notice to the individual.
- No list of matching programs, so nobody can show the board reviewed them all.

**Enhancements.** PT-8 has no enhancements.

**Federal systems** (as of October 2026). The Privacy Act ([5 U.S.C. § 552a](https://www.govinfo.gov/link/uscode/5/552a?link-type=html)) defines a matching program in subsection (a)(8), including what it excludes, such as matches that produce only aggregate statistics or that support research whose data may not be used to make decisions about specific individuals. Subsection (o)(1) bars disclosing records for a matching program except under a written agreement and lists what the agreement must specify. Under (o)(2), the agreement goes to the congressional committees and is available to the public on request, takes effect 30 days after it is sent, and runs for no more than 18 months. Within 3 months before it expires, the board may renew it for not more than one additional year if the program is unchanged and each party certifies compliance. Subsection (p) bars adverse action until the information is independently verified (or the board makes the determination (p)(1)(A)(ii) allows), the individual has been notified of the findings and the chance to contest them, and the response period set by statute or regulation, or else 30 days, has passed. Under (p)(3), an agency may act sooner if public health or public safety may be adversely affected or significantly threatened during the notice period. Subsection (q) bars a source agency from disclosing records, or renewing an agreement, when it has reason to believe the recipient is not meeting (p) or the agreement. Subsection (e)(12) requires the matching notice in the Federal Register at least 30 days before the program is conducted, and subsection (r) requires advance notice to OMB and the congressional committees.

[OMB Circular A-108](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A108/omb_circular_a-108.pdf), section 8, sets how matching notices are drafted and when: at least 30 days before a program is established, re-established or significantly changed, with a notice of re-establishment published at least 30 days before the existing agreement expires. A one-year renewal by the board needs no notice. Section 9 requires the report to OMB and Congress at least 30 days before the notice goes to the Federal Register, and at least 60 days before the agreement expires for a re-established program, with the board-approved agreement attached.

For matching through Treasury's Do Not Pay Working System, [OMB M-25-32](https://www.whitehouse.gov/wp-content/uploads/2025/08/M-25-32-Preventing-Improper-Payments-and-Protecting-Privacy-Through-Do-Not-Pay.pdf) (August 20, 2025), Appendix II, sets criteria for a class of matching programs eligible for a four-year waiver of the subsection (o) matching agreement requirement. Treasury's Bureau of the Fiscal Service [published notice of the waiver](https://www.federalregister.gov/documents/2025/09/10/2025-17382/waiver-of-computer-matching-agreements-for-do-not-pay) (90 FR 43729, September 10, 2025), effective through September 10, 2029. The waiver replaces only the agreement. An agency using it signs a data sharing agreement with Treasury before the match and still reports the program to OMB and Congress. It still publishes a matching notice, saying a waiver was granted, and waits out the 30-day comment period. It still verifies results and gives notice under subsection (p), and runs annual role-based Privacy Act training for the officials who conduct the program. M-25-32 asks agencies to keep observing existing matching agreements until they expire.
