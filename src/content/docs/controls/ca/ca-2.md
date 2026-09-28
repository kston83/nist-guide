---
title: 'CA-2 Control Assessments'
description: 'NIST SP 800-53 Rev. 5 control CA-2, Control Assessments: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'CA-2 Control Assessments'
  order: 2
control:
  id: CA-2
  family: CA
  baselines: [Low, Moderate, High, Privacy]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High, Privacy | Organization | 3 (2 in a baseline) |

**Related controls:** [AC-20](/controls/ac/ac-20/), [CA-5](/controls/ca/ca-5/), [CA-6](/controls/ca/ca-6/), [CA-7](/controls/ca/ca-7/), [PM-9](/controls/pm/pm-9/), [RA-5](/controls/ra/ra-5/), [RA-10](/controls/ra/ra-10/), [SA-11](/controls/sa/sa-11/), [SC-38](/controls/sc/sc-38/), [SI-3](/controls/si/si-3/), [SI-12](/controls/si/si-12/), [SR-2](/controls/sr/sr-2/), [SR-3](/controls/sr/sr-3/)

## Control statement

- **a.** Select the appropriate assessor or assessment team for the type of assessment to be conducted;
- **b.** Develop a control assessment plan that describes the scope of the assessment including:
  - **1.** Controls and control enhancements under assessment;
  - **2.** Assessment procedures to be used to determine control effectiveness; and
  - **3.** Assessment environment, assessment team, and assessment roles and responsibilities;
- **c.** Ensure the control assessment plan is reviewed and approved by the authorizing official or designated representative prior to conducting the assessment;
- **d.** Assess the controls in the system and its environment of operation [Assignment: organization-defined assessment frequency] to determine the extent to which the controls are implemented correctly, operating as intended, and producing the desired outcome with respect to meeting established security and privacy requirements;
- **e.** Produce a control assessment report that document the results of the assessment; and
- **f.** Provide the results of the control assessment to [Assignment: organization-defined individuals or roles].

<details>
<summary>NIST discussion</summary>

Organizations ensure that control assessors possess the required skills and technical expertise to develop effective assessment plans and to conduct assessments of system-specific, hybrid, common, and program management controls, as appropriate. The required skills include general knowledge of risk management concepts and approaches as well as comprehensive knowledge of and experience with the hardware, software, and firmware system components implemented.

Organizations assess controls in systems and the environments in which those systems operate as part of initial and ongoing authorizations, continuous monitoring, FISMA annual assessments, system design and development, systems security engineering, privacy engineering, and the system development life cycle. Assessments help to ensure that organizations meet information security and privacy requirements, identify weaknesses and deficiencies in the system design and development process, provide essential information needed to make risk-based decisions as part of authorization processes, and comply with vulnerability mitigation procedures. Organizations conduct assessments on the implemented controls as documented in security and privacy plans. Assessments can also be conducted throughout the system development life cycle as part of systems engineering and systems security engineering processes. The design for controls can be assessed as RFPs are developed, responses assessed, and design reviews conducted. If a design to implement controls and subsequent implementation in accordance with the design are assessed during development, the final control testing can be a simple confirmation utilizing previously completed control assessment and aggregating the outcomes.

Organizations may develop a single, consolidated security and privacy assessment plan for the system or maintain separate plans. A consolidated assessment plan clearly delineates the roles and responsibilities for control assessment. If multiple organizations participate in assessing a system, a coordinated approach can reduce redundancies and associated costs.

Organizations can use other types of assessment activities, such as vulnerability scanning and system monitoring, to maintain the security and privacy posture of systems during the system life cycle. Assessment reports document assessment results in sufficient detail, as deemed necessary by organizations, to determine the accuracy and completeness of the reports and whether the controls are implemented correctly, operating as intended, and producing the desired outcome with respect to meeting requirements. Assessment results are provided to the individuals or roles appropriate for the types of assessments being conducted. For example, assessments conducted in support of authorization decisions are provided to authorizing officials, senior agency officials for privacy, senior agency information security officers, and authorizing official designated representatives.

To satisfy annual assessment requirements, organizations can use assessment results from the following sources: initial or ongoing system authorizations, continuous monitoring, systems engineering processes, or system development life cycle activities. Organizations ensure that assessment results are current, relevant to the determination of control effectiveness, and obtained with the appropriate level of assessor independence. Existing control assessment results can be reused to the extent that the results are still valid and can also be supplemented with additional assessments as needed. After the initial authorizations, organizations assess controls during continuous monitoring. Organizations also establish the frequency for ongoing assessments in accordance with organizational continuous monitoring strategies. External audits, including audits by external entities such as regulatory agencies, are outside of the scope of CA-2.

</details>

## Control enhancements

<a id="ca-2.1"></a>

### CA-2(1) Independent Assessors

*Baselines: Moderate, High*

Employ independent assessors or assessment teams to conduct control assessments.

<details>
<summary>Discussion and assessment objectives for CA-2(1)</summary>

Independent assessors or assessment teams are individuals or groups who conduct impartial assessments of systems. Impartiality means that assessors are free from any perceived or actual conflicts of interest regarding the development, operation, sustainment, or management of the systems under assessment or the determination of control effectiveness. To achieve impartiality, assessors do not create a mutual or conflicting interest with the organizations where the assessments are being conducted, assess their own work, act as management or employees of the organizations they are serving, or place themselves in positions of advocacy for the organizations acquiring their services.

Independent assessments can be obtained from elements within organizations or be contracted to public or private sector entities outside of organizations. Authorizing officials determine the required level of independence based on the security categories of systems and/or the risk to organizational operations, organizational assets, or individuals. Authorizing officials also determine if the level of assessor independence provides sufficient assurance that the results are sound and can be used to make credible, risk-based decisions. Assessor independence determination includes whether contracted assessment services have sufficient independence, such as when system owners are not directly involved in contracting processes or cannot influence the impartiality of the assessors conducting the assessments. During the system design and development phase, having independent assessors is analogous to having independent SMEs involved in design reviews.

When organizations that own the systems are small or the structures of the organizations require that assessments be conducted by individuals that are in the developmental, operational, or management chain of the system owners, independence in assessment processes can be achieved by ensuring that assessment results are carefully reviewed and analyzed by independent teams of experts to validate the completeness, accuracy, integrity, and reliability of the results. Assessments performed for purposes other than to support authorization decisions are more likely to be useable for such decisions when performed by assessors with sufficient independence, thereby reducing the need to repeat assessments.

Determine if independent assessors or assessment teams are employed to conduct control assessments.

**Examine:** Assessment, authorization, and monitoring policy; procedures addressing control assessments; previous control assessment plan; previous control assessment report; plan of action and milestones; existing authorization statement; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with security assessment responsibilities; organizational personnel with information security and privacy responsibilities.

</details>

<a id="ca-2.2"></a>

### CA-2(2) Specialized Assessments

*Baselines: High*

Include as part of control assessments, [Assignment: organization-defined specialized assessment frequency], [Selection: announced; unannounced], [Selection (one or more): in-depth monitoring; security instrumentation; automated security test cases; vulnerability scanning; malicious user testing; insider threat assessment; performance and load testing; data leakage or data loss assessment; [Assignment: organization-defined other forms of assessment] ].

<details>
<summary>Discussion and assessment objectives for CA-2(2)</summary>

Organizations can conduct specialized assessments, including verification and validation, system monitoring, insider threat assessments, malicious user testing, and other forms of testing. These assessments can improve readiness by exercising organizational capabilities and indicating current levels of performance as a means of focusing actions to improve security and privacy. Organizations conduct specialized assessments in accordance with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines. Authorizing officials approve the assessment methods in coordination with the organizational risk executive function. Organizations can include vulnerabilities uncovered during assessments into vulnerability remediation processes. Specialized assessments can also be conducted early in the system development life cycle (e.g., during initial design, development, and unit testing).

Determine if [Assignment: organization-defined specialized assessment frequency] [Selection: announced; unannounced] [Selection (one or more): in-depth monitoring; security instrumentation; automated security test cases; vulnerability scanning; malicious user testing; insider threat assessment; performance and load testing; data leakage or data loss assessment; [Assignment: organization-defined other forms of assessment] ] are included as part of control assessments.

**Examine:** Assessment, authorization, and monitoring policy; procedures addressing control assessments; control assessment plan; control assessment report; control assessment evidence; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with control assessment responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Mechanisms supporting control assessment.

</details>

<a id="ca-2.3"></a>

### CA-2(3) Leveraging Results from External Organizations

*Baselines: Not in a baseline*

Leverage the results of control assessments performed by [Assignment: organization-defined external organization(s)] on [Assignment: organization-defined system] when the assessment meets [Assignment: organization-defined requirements].

<details>
<summary>Discussion and assessment objectives for CA-2(3)</summary>

Organizations may rely on control assessments of organizational systems by other (external) organizations. Using such assessments and reusing existing assessment evidence can decrease the time and resources required for assessments by limiting the independent assessment activities that organizations need to perform. The factors that organizations consider in determining whether to accept assessment results from external organizations can vary. Such factors include the organization’s past experience with the organization that conducted the assessment, the reputation of the assessment organization, the level of detail of supporting assessment evidence provided, and mandates imposed by applicable laws, executive orders, directives, regulations, policies, standards, and guidelines. Accredited testing laboratories that support the Common Criteria Program ISO 15408-1 , the NIST Cryptographic Module Validation Program (CMVP), or the NIST Cryptographic Algorithm Validation Program (CAVP) can provide independent assessment results that organizations can leverage.

Determine if the results of control assessments performed by [Assignment: organization-defined external organization(s)] on [Assignment: organization-defined system] are leveraged when the assessment meets [Assignment: organization-defined requirements].

**Examine:** Assessment, authorization, and monitoring policy; procedures addressing control assessments; control assessment requirements; control assessment plan; control assessment report; control assessment evidence; plan of action and milestones; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with control assessment responsibilities; organizational personnel with information security and privacy responsibilities; personnel performing control assessments for the specified external organization.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for CA-2</summary>

Determine if:

- **CA-02a.** an appropriate assessor or assessment team is selected for the type of assessment to be conducted;
- **CA-02b.**
  - **CA-02b.01** a control assessment plan is developed that describes the scope of the assessment, including controls and control enhancements under assessment;
  - **CA-02b.02** a control assessment plan is developed that describes the scope of the assessment, including assessment procedures to be used to determine control effectiveness;
  - **CA-02b.03**
    - **CA-02b.03[01]** a control assessment plan is developed that describes the scope of the assessment, including the assessment environment;
    - **CA-02b.03[02]** a control assessment plan is developed that describes the scope of the assessment, including the assessment team;
    - **CA-02b.03[03]** a control assessment plan is developed that describes the scope of the assessment, including assessment roles and responsibilities;
- **CA-02c.** the control assessment plan is reviewed and approved by the authorizing official or designated representative prior to conducting the assessment;
- **CA-02d.**
  - **CA-02d.[01]** controls are assessed in the system and its environment of operation [Assignment: organization-defined assessment frequency] to determine the extent to which the controls are implemented correctly, operating as intended, and producing the desired outcome with respect to meeting established security requirements;
  - **CA-02d.[02]** controls are assessed in the system and its environment of operation [Assignment: organization-defined assessment frequency] to determine the extent to which the controls are implemented correctly, operating as intended, and producing the desired outcome with respect to meeting established privacy requirements;
- **CA-02e.** a control assessment report is produced that documents the results of the assessment;
- **CA-02f.** the results of the control assessment are provided to [Assignment: organization-defined individuals or roles].

**Examine:** Assessment, authorization, and monitoring policy; procedures addressing assessment planning; procedures addressing control assessments; control assessment plan; control assessment report; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with control assessment responsibilities; organizational personnel with information security and privacy responsibilities.

**Test:** Mechanisms supporting control assessment, control assessment plan development, and/or control assessment reporting.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

CA-2 is the formal control assessment: an assessor, independent at Moderate (CA-2(1)), tests whether each control is implemented correctly, operating as intended and producing the desired outcome. The assessment plan is approved before testing starts, and the report goes to the people who decide on the system's authorization.

**Common implementations.** An assessment before initial authorization, then an annual assessment of a subset of controls under the continuous monitoring strategy (CA-7), so every control is assessed over the authorization period. Assessments follow the objectives and methods in SP 800-53A, shown on each control page. Independence comes from a separate internal team or a third-party assessor.

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Assessment frequency (d) | Annually for a subset of controls, set by the continuous monitoring strategy, so all controls are assessed within the authorization period |
| Who receives results (f) | The authorizing official, the system owner and the Chief Information Security Officer |

**Evidence assessors ask for.** Assessors produce CA-2 evidence rather than request it: the approved assessment plan, the assessment report, and proof the report reached the named recipients.

**Inheritance.** The assessment of common controls is done once by their provider and reused; the system assessment covers system-specific and hybrid controls.

**Common findings.**

- Assessment plans approved after testing started.
- Assessors who also operate the system they assess.
- Reports that list findings without recording them in the POA&M (CA-5).

**Enhancements in the Moderate baseline.** [CA-2(1)](#ca-2.1) independent assessors. High adds [CA-2(2)](#ca-2.2) specialized assessments.
