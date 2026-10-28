---
title: 'RA-8 Privacy Impact Assessments'
description: 'NIST SP 800-53 Rev. 5 control RA-8, Privacy Impact Assessments: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'RA-8 Privacy Impact Assessments'
  order: 8
control:
  id: RA-8
  family: RA
  baselines: [Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Privacy | Organization | None |

**Related controls:** [CM-4](/controls/cm/cm-4/), [CM-9](/controls/cm/cm-9/), [CM-13](/controls/cm/cm-13/), [PT-2](/controls/pt/pt-2/), [PT-3](/controls/pt/pt-3/), [PT-5](/controls/pt/pt-5/), [RA-1](/controls/ra/ra-1/), [RA-2](/controls/ra/ra-2/), [RA-3](/controls/ra/ra-3/), [RA-7](/controls/ra/ra-7/)

## Control statement

Conduct privacy impact assessments for systems, programs, or other activities before:

- **a.** Developing or procuring information technology that processes personally identifiable information; and
- **b.** Initiating a new collection of personally identifiable information that:
  - **1.** Will be processed using information technology; and
  - **2.** Includes personally identifiable information permitting the physical or virtual (online) contacting of a specific individual, if identical questions have been posed to, or identical reporting requirements imposed on, ten or more individuals, other than agencies, instrumentalities, or employees of the federal government.

<details>
<summary>NIST discussion</summary>

A privacy impact assessment is an analysis of how personally identifiable information is handled to ensure that handling conforms to applicable privacy requirements, determine the privacy risks associated with an information system or activity, and evaluate ways to mitigate privacy risks. A privacy impact assessment is both an analysis and a formal document that details the process and the outcome of the analysis.

Organizations conduct and develop a privacy impact assessment with sufficient clarity and specificity to demonstrate that the organization fully considered privacy and incorporated appropriate privacy protections from the earliest stages of the organization’s activity and throughout the information life cycle. In order to conduct a meaningful privacy impact assessment, the organization’s senior agency official for privacy works closely with program managers, system owners, information technology experts, security officials, counsel, and other relevant organization personnel. Moreover, a privacy impact assessment is not a time-restricted activity that is limited to a particular milestone or stage of the information system or personally identifiable information life cycles. Rather, the privacy analysis continues throughout the system and personally identifiable information life cycles. Accordingly, a privacy impact assessment is a living document that organizations update whenever changes to the information technology, changes to the organization’s practices, or other factors alter the privacy risks associated with the use of such information technology.

To conduct the privacy impact assessment, organizations can use security and privacy risk assessments. Organizations may also use other related processes that may have different names, including privacy threshold analyses. A privacy impact assessment can also serve as notice to the public regarding the organization’s practices with respect to privacy. Although conducting and publishing privacy impact assessments may be required by law, organizations may develop such policies in the absence of applicable laws. For federal agencies, privacy impact assessments may be required by EGOV ; agencies should consult with their senior agency official for privacy and legal counsel on this requirement and be aware of the statutory exceptions and OMB guidance relating to the provision.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for RA-8</summary>

Determine if:

- **RA-08a.** privacy impact assessments are conducted for systems, programs, or other activities before developing or procuring information technology that processes personally identifiable information;
- **RA-08b.**
  - **RA-08b.[01]** privacy impact assessments are conducted for systems, programs, or other activities before initiating a collection of personally identifiable information that will be processed using information technology;
  - **RA-08b.[02]** privacy impact assessments are conducted for systems, programs, or other activities before initiating a collection of personally identifiable information that includes personally identifiable information permitting the physical or virtual (online) contacting of a specific individual, if identical questions have been posed to, or identical reporting requirements imposed on, ten or more individuals, other than agencies, instrumentalities, or employees of the federal government.

**Examine:** Risk assessment policy; security and privacy risk assessment reports; acquisitions documents; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with assessment and auditing responsibilities; system/network administrators; system developers; program managers; legal counsel; organizational personnel with security and privacy responsibilities.

**Test:** Organizational processes for assessments and audits; mechanisms/tools supporting and/or implementing assessments and auditing.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

RA-8 asks you to conduct a privacy impact assessment before you develop or procure information technology that processes personally identifiable information (a), and before you start a new collection of it that will be processed using information technology and that permits contacting specific individuals, where identical questions or reporting requirements are put to ten or more people outside the federal government (b). RA-8 is in the SP 800-53B Privacy baseline only.

NIST's RA-8 discussion describes the assessment as both an analysis and a formal document. It checks that the handling of personally identifiable information meets privacy requirements, determines the privacy risks, and evaluates ways to reduce them. It is written clearly and specifically enough to show that privacy was considered from the earliest stages. The senior agency official for privacy works on it with program managers, system owners, IT experts, security officials and counsel. It is not tied to one milestone: it is a living document, updated whenever changes to the technology, to the organization's practices or to other factors alter the privacy risks. Security and privacy risk assessments ([RA-3](/controls/ra/ra-3/)) feed it, a screening such as a privacy threshold analysis can start it, and a published assessment also serves as notice to the public. Organizations not bound by a law requiring one can still require it by policy.

**Common implementations.** The RA-8 clause of the [Risk Assessment policy](/templates/policies/ra/) (Privacy variant) has the system owner have the assessment conducted before (a) and (b), the senior privacy official review and approve it, and the system owner update it when a change creates new privacy risks. The [privacy impact assessment](/templates/reports/privacy-impact-assessment/) template carries it out:

- Section 1 is the screening, for every new system, project or collection and every significant change. If it finds no personally identifiable information, the signed screening is the record.
- Sections 3 to 9 cover the questions section 208(b) of the E-Government Act lists (what is collected, why, its use, sharing, notice and consent, security), plus retention and redress.
- Section 10 rates privacy risks with the organization's RA-3 scales and sends residual risks to the [risk register](/templates/forms/risk-register/).
- Section 12 records approval, the triggers for updates, the annual review, and publication.

The assessment only comes first if something makes it come first. Common gates are a privacy question in the acquisition process ([SA-4](/controls/sa/sa-4/)), a privacy review step in the system development life cycle, and a privacy question on every [change request](/templates/forms/change-request-form/), which is how the PT-3d review works ([CM-3](/controls/cm/cm-3/), [CM-4](/controls/cm/cm-4/)).

**Organization-defined parameters.** RA-8 has none. Its clause and the template leave these choices open, with typical values your organization may set differently:

| Choice | Typical value |
| --- | --- |
| Who conducts the assessment | The system owner, working with the privacy office, the program manager, IT and security staff and legal counsel (the clause; NIST's discussion) |
| Who reviews and approves it | The senior privacy official (the clause) |
| What is screened | Every new system, project or collection, and every significant change to one (template section 1) |
| When it is updated | When a change to the system or the processing creates new privacy risks, found through a privacy review of each proposed change through change control (the clause; the PT-3 clause, `pt-03_odp.03`) |
| Scheduled review | At least annually, when the relevance of the information is checked under the SI-18 clause (`si-18_odp.02`), with the review recorded even when nothing has changed (template section 12) |
| Publication | A plain-language version on the privacy page, with anything that would reveal security weaknesses removed (template section 12) |

The template also uses the typical values of other clauses. If one of these changes, change the template with it:

| Clause | Parameter | Where the template uses it |
| --- | --- | --- |
| [PT-2](/controls/pt/pt-2/) | Authority that permits the processing: the law, regulation, contract or consent | Section 4 |
| [PT-3](/controls/pt/pt-3/) | Purposes: the specific, explicit purposes of the system or program | Section 4 |
| [PT-3](/controls/pt/pt-3/) | Change mechanism: a privacy review of each proposed change through change control, with an updated privacy impact assessment | Section 12 |
| [PT-7](/controls/pt/pt-7/) | Conditions for designated categories of personally identifiable information | Section 3 |
| [SC-7(24)](/controls/sc/sc-7/#sc-7.24) | Processing rules: the permitted purposes, recipients and data elements for each flow, as set out in the privacy impact assessment | Section 6 |

The PT-2, PT-3 and PT-7 clauses are in the [PII Processing and Transparency policy](/templates/policies/pt/), and SC-7(24) in the [System and Communications Protection policy](/templates/policies/sc/).

**Evidence assessors ask for.**

- The privacy impact assessment for a sample of systems, with dates that come before development, procurement or the new collection (compared with acquisition and project records)
- Screenings for systems that concluded no assessment was needed
- The senior privacy official's approval of each assessment
- Change records that show a privacy review, and assessments updated after significant changes
- The published versions on the privacy page
- Risk register entries for the residual risks section 10 found

**Inheritance.** The privacy office provides the template, the method, the review and publication as common controls. Each system has its own assessment conducted and kept current, so RA-8 is hybrid: the organization sets how assessments are done, and the system owner sees that its own is done and updated.

**Common findings.**

- An assessment written after the system went live, often for its first authorization.
- An assessment never updated after new data elements, new sharing or a move to a cloud service.
- A screening that says "no personally identifiable information" for a system that keeps user accounts, contact details or logs that identify people.
- A sharing table that leaves out interfaces the system actually has.
- Risks identified in the assessment that never reached the risk register.
- No published version, or a published version that reveals security details.

**Enhancements.** RA-8 has no enhancements.

**Federal systems** (as of October 2026). [Section 208(b) of the E-Government Act of 2002](https://www.congress.gov/107/plaws/publ347/PLAW-107publ347.htm) (Pub. L. 107-347), whose wording RA-8a and b follow, requires an agency to conduct a privacy impact assessment before developing or procuring information technology that collects, maintains or disseminates information in identifiable form, and before initiating a new collection of such information using information technology that permits the physical or online contacting of a specific individual, if identical questions have been posed to, or identical reporting requirements imposed on, 10 or more persons other than agencies, instrumentalities or employees of the federal government. The Chief Information Officer, or an equivalent official the agency head determines, reviews it. If practicable, the agency then makes it publicly available, which may be modified or waived for security reasons or to protect classified, sensitive or private information. The agency gives OMB a copy for each system for which funding is requested. Section 208(b)(2)(B) requires OMB's guidance to make each assessment commensurate with the size of the system, the sensitivity of the information and the risk of harm from its unauthorized release, and to require each assessment to address seven questions, which the template's federal block lists, including whether a system of records is being created under the Privacy Act. <!-- TODO(verify): OMB M-03-22 is the OMB guidance issued under section 208(b)(2); cite it here only once the open question in PROGRESS.md confirms it is still in effect. -->

[OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), main body section 5.f(1)(i), requires agencies to conduct privacy impact assessments when developing, procuring or using IT, in accordance with the E-Government Act, and make them available to the public in accordance with OMB policy. Appendix II, section 5.e, calls the assessment a living document that agencies are required to update whenever changes alter the privacy risks, and requires every one to be drafted in plain language and posted on the agency's website unless that would raise security concerns or reveal classified or sensitive information. It also allows agencies to require assessments where the law does not. The RA-8 clause's federal block and the template's federal table carry these into the kit.
