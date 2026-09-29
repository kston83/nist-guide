---
title: Privacy Impact Assessment
type: report
description: The analysis and record of how a system, program or activity handles personally identifiable information, the privacy risks that creates for individuals and how they are reduced, done before development, procurement or a new collection and kept up to date as the processing changes, as SP 800-53 RA-8 requires.
controls: [ra-8, pt-2, pt-3, pt-4, pt-5, pt-7, sc-7.24, ra-3]
status: draft
stage: core
typical:
  pt-02_odp.01: 'the law, regulation, contract or consent'
  pt-03_odp.01: 'the specific, explicit purposes of the system or program'
  pt-03_odp.03: 'a privacy review of each proposed change through change control, with an updated privacy impact assessment (CM-3, CM-4, RA-8)'
  pt-07_odp: 'the conditions the senior privacy official sets for each designated category, such as collection only where law requires it or a documented need exists, encryption, and access limited to named roles'
  sc-07.24_odp: 'the permitted purposes, recipients and data elements for each flow of personally identifiable information, as set out in the system''s privacy impact assessment'
---

:::guidance
SP 800-53 describes a privacy impact assessment (PIA) as "an analysis of how personally identifiable information is handled to ensure that handling conforms to applicable privacy requirements, determine the privacy risks associated with an information system or activity, and evaluate ways to mitigate privacy risks", and as "both an analysis and a formal document" (RA-8 discussion). Start it early, while the design can still change, and work with the program manager, system owner, IT and security staff and legal counsel. Section 1 is a short screening, which RA-8 notes some organizations call a privacy threshold analysis: if it shows no personally identifiable information, stop there and keep the signed screening as the record. Sections 3 to 9 answer the questions section 208(b) of the U.S. E-Government Act says a federal PIA must address, which suit any organization, plus the PT controls this assessment documents. The authority, purposes and sharing recorded here are what the [privacy notice](/templates/forms/privacy-notice/) tells the public, so keep the two in step. Risks found here go into the [risk register](/templates/forms/risk-register/). Assessors check that the PIA predates the system's development or the new collection, and that it was updated after the last significant change.
:::

| System, program or activity | Identifier | PIA version | Date | Prepared by |
| --- | --- | --- | --- | --- |
| {{fill:name}} | {{fill:unique system identifier}} | {{fill:version}} | {{fill:date}} | {{fill:names and titles}} |

## 1. Privacy screening

Answer these questions for every new system, project or collection, and for every significant change to one.

| Question | Answer |
| --- | --- |
| Does the system, program or activity create, collect, use, process, store, maintain, share or dispose of personally identifiable information? | {{fill:yes or no, and which information}} |
| Is the organization developing or procuring information technology that will process personally identifiable information? (RA-8a) | {{fill:yes or no}} |
| Is the organization starting a new collection of personally identifiable information that will be processed using information technology? (RA-8b) | {{fill:yes or no}} |
| Does the collection include information that permits the physical or online contacting of a specific individual, and pose identical questions to ten or more individuals? (RA-8b.2) | {{fill:yes or no}} |
| Is this a change to a system or collection that already has a PIA? If so, what changed? | {{fill:yes or no, and the change}} |

**Result:** {{fill:full PIA required, PIA update required, or no PIA required, with the reason}}. Screened by {{fill:name and title}} on {{fill:date}}; confirmed by the {{org:privacy-official}}.

## 2. Overview

| Item | Description |
| --- | --- |
| Description | {{fill:what the system, program or activity does, who uses it, and where it runs, or a reference to the system security plan}} |
| Life cycle stage | {{fill:planned, in development, in operation, or being changed}} |
| Reason for this PIA | {{fill:new system, new collection, significant change, or scheduled review}} |
| Owner | {{org:system-owner}}: {{fill:name}} |
| Related documents | {{fill:system security plan, security categorization, privacy notice, contracts and agreements}} |

## 3. Information collected

List every data element of personally identifiable information, including information the system creates, such as account identifiers, logs and inferences.

| Data element | About whom | Source | Required or optional | Why it is needed |
| --- | --- | --- | --- | --- |
| {{fill:data element, for example email address}} | {{fill:for example customers, employees or members of the public}} | {{fill:for example the individual, another system, or a third party}} | {{fill:required or optional}} | {{fill:the purpose it serves; if none, remove it}} |

- **Specific categories:** {{fill:whether the system processes Social Security numbers, health, financial or biometric information, information about children, or information about how individuals exercise First Amendment rights, and which conditions apply}}. Designated categories are handled under {{param:pt-07_odp}} (PT-7).
- **Minimization:** {{fill:the data elements considered and left out, and any alternative to collecting an identifier, such as a Social Security number}}

## 4. Authority and purposes

- **Authority:** {{fill:the specific authority}}, which is {{param:pt-02_odp.01}} that permits the processing (PT-2a).
- **Purposes:** {{param:pt-03_odp.01}}, listed below (PT-3a).

| Purpose | Data elements used | Compatible with the purpose of collection? |
| --- | --- | --- |
| {{fill:purpose}} | {{fill:data elements}} | {{fill:yes, or the approval and notice given for the new purpose}} |

- **Uses beyond the stated purposes:** {{fill:analytics, matching with other data, model training, testing with real data, or none}}
- **New information created:** {{fill:any scores, profiles or inferences the system derives about individuals, and how they are used}}

## 5. Notice and consent

- **Notice given:** {{fill:the privacy notice and short notices that describe this processing, with links, and when individuals see them}} (PT-5)
- **Consent:** {{fill:the processing that relies on consent, how consent is asked for and recorded, and how individuals withdraw it; or why consent is not the basis}} (PT-4)
- **Choices:** {{fill:any choice individuals have about particular uses or sharing, and how they exercise it}}

## 6. Sharing and disclosure

| Recipient | Inside or outside the organization | Data elements | Purpose | Authority or agreement | How it is sent |
| --- | --- | --- | --- | --- | --- |
| {{fill:recipient}} | {{fill:inside or outside}} | {{fill:data elements}} | {{fill:purpose}} | {{fill:contract, information exchange agreement, law, or consent}} | {{fill:method, for example an encrypted interface}} |

This table sets the processing rules for each flow of personally identifiable information across the system boundary: {{param:sc-07.24_odp}} (SC-7(24)).

## 7. Retention and disposal

| Data element or record | Retention period | Authority for the period | Disposal method |
| --- | --- | --- | --- |
| {{fill:record}} | {{fill:period}} | {{fill:records schedule, law or policy}} | {{fill:for example deletion, cryptographic erase or de-identification}} |

## 8. Access, correction and redress

- **Access and correction:** {{fill:how individuals can see and correct their information, and how corrections reach recipients}}
- **Complaints:** {{fill:how individuals raise a concern, and who responds}}
- **Data quality:** {{fill:how the information is checked for accuracy, relevance, timeliness and completeness}}

## 9. Security

| Item | Description |
| --- | --- |
| Security categorization | {{fill:low, moderate or high, from the security categorization worksheet}} |
| Controls | {{fill:the main safeguards, for example encryption, role-based access, audit logging and monitoring, or a reference to the system security plan}} |
| Who has access | {{fill:roles with access to personally identifiable information, and how access is approved and reviewed}} |
| Authorization | {{fill:authorization status and date}} |

## 10. Privacy risks and mitigations

Rate each risk to individuals with the organization's risk scales (RA-3). Consider risks such as collecting more than needed, use beyond the stated purposes, unauthorized access or disclosure, inaccurate information, re-identification, and individuals not understanding what happens to their information.

| Risk to individuals | Likelihood | Impact | Mitigation | Residual risk | Owner |
| --- | --- | --- | --- | --- | --- |
| {{fill:risk}} | {{fill:level}} | {{fill:level}} | {{fill:mitigation in place or planned}} | {{fill:level}} | {{fill:role}} |

Record each residual risk that needs action or acceptance in the risk register.

## 11. Conclusion

{{fill:a summary of the privacy risks, whether they are acceptable after mitigation, and any conditions on going ahead}}

## 12. Approval, publication and updates

| Role | Name | Decision | Signature | Date |
| --- | --- | --- | --- | --- |
| {{org:system-owner}} | {{fill:name}} | Prepared | | {{fill:date}} |
| {{org:privacy-official}} | {{fill:name}} | {{fill:approved or not approved}} | | {{fill:date}} |

- The {{org:privacy-official}} reviews and approves this assessment before the system is developed or procured, or before the new collection begins (RA-8).
- The {{org:system-owner}} updates this assessment when a change to the system or the processing creates new privacy risks, found through {{param:pt-03_odp.03}} (RA-8, PT-3d).
- A plain-language version is published on the organization's privacy page, {{fill:or the reason it is not}}, with anything that would reveal security weaknesses removed (PM-20b).

:::federal
[Section 208(b) of the E-Government Act of 2002](https://www.congress.gov/107/plaws/publ347/PLAW-107publ347.htm) (Pub. L. 107-347) requires an agency to conduct a PIA before developing or procuring information technology that collects, maintains or disseminates information in identifiable form, and before initiating a new collection of such information that uses information technology and poses identical questions to, or imposes identical reporting requirements on, 10 or more persons other than agencies, instrumentalities or employees of the Federal Government. The agency ensures the PIA is reviewed by the Chief Information Officer, or an equivalent official the agency head names, and, if practicable, makes it publicly available through its website, the Federal Register or other means; publication may be modified or waived for security reasons or to protect classified, sensitive or private information in it. Agencies give OMB a copy of the PIA for each system for which funding is requested. Under section 208(b)(2)(B)(ii), a PIA addresses what information is to be collected, why, the agency's intended use of it, with whom it will be shared, what notice or opportunities for consent individuals have, how it will be secured, and whether a system of records is being created under the Privacy Act.

[OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf) (July 28, 2016), Appendix II, section 5.e, requires a PIA when an agency develops, procures or uses information technology to create, collect, use, process, store, maintain, disseminate, disclose or dispose of personally identifiable information, absent an exception under section 208(b). It calls the PIA a living document, updated whenever changes to the technology, the agency's practices or other factors alter the privacy risks, and requires every PIA to be written in plain language and posted on the agency's website unless that would raise security concerns or reveal classified or sensitive information. The Senior Agency Official for Privacy works with program managers, system owners, IT experts, security officials and counsel to conduct it. As of September 2026.

Add to section 4 the statute or executive order that authorizes the collection, and add this table after section 6.

| Item | Answer |
| --- | --- |
| Is a system of records being created or changed under 5 U.S.C. § 552a? | {{fill:yes or no}} |
| System of records notice | {{fill:name, number and Federal Register citation, or the date a new or revised notice will be published}} |
| Privacy Act statement on each collection form | {{fill:yes, not needed, or planned}} |
| Paperwork Reduction Act information collection | {{fill:the OMB control number, or not applicable}} |

- The {{org:system-owner}} shall have a PIA conducted, and reviewed by the Chief Information Officer or the equivalent official the agency head names, whenever section 208(b) of the E-Government Act requires one. (RA-8)
- The {{org:privacy-official}} shall make each PIA publicly available, in plain language, on the agency's website unless doing so would raise security concerns or reveal classified or sensitive information, as OMB Circular A-130, Appendix II, section 5.e requires. (RA-8)
- Each PIA shall state whether a system of records is being created under the Privacy Act. (RA-8)

:::
