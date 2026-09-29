---
title: Information Exchange Agreement
type: form
description: The agreement that approves and governs one exchange of information with a system outside the authorization boundary, usable as an interconnection security agreement or an information exchange security agreement, with a register of every exchange and its review date, as SP 800-53 CA-3 requires.
controls: [ca-3, ca-3.6, sa-9]
status: draft
stage: operate
typical:
  ca-03_odp.01: 'interconnection security agreements or information exchange security agreements, and service level agreements or contract terms with the same content for external services'
  ca-03_odp.03: 'at least annually, and when either system makes a significant change that affects the exchange'
---

:::guidance
Use one agreement for each exchange between the system and a system outside its authorization boundary. The content follows [NIST SP 800-47 Rev. 1](https://csrc.nist.gov/pubs/sp/800/47/r1/final), Managing the Security of Information Exchanges (July 2021, current as of September 2026), section 3.1.5 and the example agreements in its Appendix C. Complete section 5 only for a system interconnection, where the agreement serves as an interconnection security agreement (ISA); leave it out for exchanges by application programming interface, file transfer, email or portable media, where it serves as an information exchange agreement. Business and cost terms can go in a separate memorandum of understanding or agreement, which SP 800-47 pairs with an interconnection security agreement. For an external service under contract, the same content can go in the contract or service level agreement instead (SA-9). Where both systems have the same authorizing official, NIST's CA-3 discussion allows the security plans to describe the interface instead of an agreement. SP 800-47 advises legal review before signing, and protecting each agreement at the impact level of the information it describes. The register at the end is the list of every exchange and its agreement.
:::

| Agreement ID | Agreement type | Version | Effective date | Next review due |
| --- | --- | --- | --- | --- |
| {{fill:unique ID, as in the register}} | {{fill:interconnection security agreement or information exchange agreement}} | {{fill:version}} | {{fill:date}} | {{fill:date}} |

## 1. Parties and purpose

This agreement sets the terms, conditions and safeguards under which {{org:name}} and {{fill:the other organization}} exchange the information described in section 2. It is one of the agreements {{org:name}} uses to approve and manage information exchanges, which are {{param:ca-03_odp.01}} (CA-3a).

| Item | Description |
| --- | --- |
| Business purpose | {{fill:why the exchange is needed and the benefit expected}} |
| Authority | {{fill:the law, contract, policy or decision that authorizes the exchange}} |
| Related agreements | {{fill:for example a memorandum of understanding, contract, service level agreement or nondisclosure agreement, with dates}} |
| Supersedes | {{fill:the earlier agreement this replaces, with its date, or "none"}} |

## 2. Systems and information exchanged

| Item | {{org:name}} system | Other party's system |
| --- | --- | --- |
| System name and identifier | {{fill:name and identifier}} | {{fill:name and identifier}} |
| Owning organization | {{org:name}} | {{fill:organization}} |
| Authorizing official | {{fill:name and title}} | {{fill:name and title}} |
| Security categorization | {{fill:low, moderate or high}} | {{fill:low, moderate or high}} |
| Location | {{fill:site or cloud region}} | {{fill:site or cloud region}} |

The interface and the information communicated (CA-3b):

| Item | Description |
| --- | --- |
| Information types and impact level | {{fill:each type of information exchanged, with its impact level, and whether it includes personally identifiable information}} |
| Direction | {{fill:one-way from which system, or two-way}} |
| Method | {{fill:system interconnection, application programming interface or web service, database access, file transfer, email, or portable media}} |
| Frequency and volume | {{fill:for example a nightly batch with its typical size, or continuous}} |
| Users | {{fill:who on each side can access the exchanged information, and any screening required}} |

## 3. Use of the information

- The receiving party uses the information only for the purpose in section 1, and only as that purpose requires.
- The receiving party does not disclose the information to anyone not party to this agreement without the providing party's written consent, unless a law requires it. {{fill:any further limits, for example no transfer outside the country}}
- Access is limited to the receiving party's employees, contractors and agents who need the information for the stated purpose, and who have signed an access agreement or equivalent user agreement.
- The receiving party keeps the information for {{fill:retention period or rule}}, then returns or destroys it as the providing party directs, and confirms the destruction in writing.

## 4. Security and privacy requirements

Each party protects the exchanged information, and the systems that process, store or transmit it, according to its impact level (CA-3b).

| Requirement | Commitment |
| --- | --- |
| Governing policies and baseline | {{fill:each party's governing security and privacy policies, and the control baseline each system meets, for example the SP 800-53B Moderate baseline}} |
| Protection in transit | {{fill:for example encryption with validated cryptographic modules over the whole path}} |
| Protection at rest | {{fill:for example encrypted storage on the receiving system}} |
| Authentication and access | {{fill:for example multifactor authentication for users, and certificates or keys for system accounts}} |
| Accounts authorized to transfer data | {{fill:for a High system, the accounts or systems allowed to send data and the write permissions each holds (CA-3(6)); otherwise "not required"}} |
| Event logging | {{fill:the events each party logs for the exchange, for example transfers, access attempts and administrator actions, and how long logs are kept}} |
| Personally identifiable information | {{fill:privacy requirements, for example minimization, use limits and breach notification, or "none exchanged"}} |

## 5. Interconnection details

Complete this section only for a system interconnection.

| Item | Description |
| --- | --- |
| Services offered | {{fill:the services the interconnection provides, or that it carries data only}} |
| Interface | {{fill:endpoints, protocols and ports}} |
| Boundary protection | {{fill:the firewalls, gateways or other managed interfaces at each end (SC-7)}} |
| Topology | {{fill:reference to the attached diagram of the interconnection}} |
| Availability | {{fill:the availability expected of the connection, and any service level agreement}} |

## 6. Responsibilities of each party

Each party, for its own system:

- keeps the controls in section 4 in place, and keeps its system authorized to operate;
- manages the accounts used for the exchange, and removes access when it is no longer needed;
- reviews the event logs for the exchange {{fill:how often}}, and shares relevant findings with the other party;
- includes the exchange in its security assessments and continuous monitoring, and provides a summary of relevant results to the other party on request;
- records the exchange and this agreement in its system security plan (CA-3a);
- coordinates its contingency plan with the other party where the exchange supports an essential function.

## 7. Notifications

| Event | Who notifies whom | How quickly |
| --- | --- | --- |
| A suspected or confirmed security incident or breach affecting the exchange or the exchanged information | The party that detects it, to the other party's incident contact in section 8 | {{fill:time from detection, and when written notice follows}} |
| A disaster or outage that disrupts the exchange | The affected party, to the other party's technical contact | {{fill:time}} |
| A planned change to either system that affects the exchange | The initiating party, to the other party | Before the change, so the agreement can be reviewed and updated first |
| A new connection between either system and another system | The initiating party, to the other party | {{fill:notice period}} |
| A change of system owner, authorizing official or contact | The changing party, to the other party | {{fill:time}} |

## 8. Points of contact

| Role | {{org:name}} | Other party |
| --- | --- | --- |
| System owner | {{fill:name, phone, email}} | {{fill:name, phone, email}} |
| Technical lead | {{fill:name, phone, email}} | {{fill:name, phone, email}} |
| Security contact | {{fill:name, phone, email}} | {{fill:name, phone, email}} |
| Incident contact | {{fill:team, phone, email}} | {{fill:team, phone, email}} |
| Privacy contact | {{fill:name, phone, email}} | {{fill:name, phone, email}} |

## 9. Duration, review and termination

- This agreement takes effect on the date of the last signature and remains in effect until {{fill:the end date, or until terminated}}.
- The {{org:system-owner}} reviews and updates this agreement, with the other party, {{param:ca-03_odp.03}} (CA-3c). Each party certifies at the review that it has complied with the agreement and reports any changes to the exchange.
- Changes to this agreement are made in writing and signed by both parties.
- Either party may end the exchange with {{fill:notice period}} written notice. Either party may suspend it immediately if a security incident requires, or if the other party misuses the information or breaks this agreement.
- When the exchange ends, the parties disconnect it, disable the accounts used, return or destroy the exchanged information as section 3 requires, and update their system security plans (CA-3a).

## 10. Approval

The authorizing official for each system approves this exchange (CA-3a). Each signatory confirms that they have authority to commit their organization to this agreement.

| Name | Title | Organization | Signature | Date |
| --- | --- | --- | --- | --- |
| {{fill:name}} | Authorizing official | {{org:name}} | | {{fill:date}} |
| {{fill:name}} | Authorizing official or equivalent | {{fill:other organization}} | | {{fill:date}} |

:::federal
[OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.c(16), requires the authorizing official's approval for connections from a system, as defined by its authorization boundary, to other systems, based on the risk to agency operations and assets, individuals, other organizations and the Nation. Section 4.j(2)(f) requires agreements, such as memoranda of understanding, interconnection security agreements or contracts, for interfaces between agency systems and systems that contractors or other entities use or operate on the Government's behalf. Section 4.i(14) requires agencies to encrypt all FIPS 199 moderate-impact and high-impact information at rest and in transit, unless it is technically infeasible or would demonstrably affect the mission, and the authorizing official accepts the risk of not encrypting with the approval of the agency Chief Information Officer, in consultation with the Senior Agency Official for Privacy as appropriate; section 4.i(15) requires validated cryptographic modules under NIST standards. Where the exchange discloses records from a system of records for a computer matching program, the Privacy Act requires a separate written matching agreement ([5 U.S.C. § 552a(o)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title5-section552a&num=0&edition=prelim)). As of September 2026.

- The authorizing official shall base the approval in section 10 on the risk to agency operations and assets, individuals, other organizations and the Nation, as OMB Circular A-130, Appendix I, section 4.c(16), requires. (CA-3a)
- The {{org:system-owner}} shall ensure moderate-impact and high-impact information exchanged under this agreement is encrypted in transit and at rest with validated cryptographic modules, or that the authorizing official has accepted the risk of not encrypting it with the Chief Information Officer's approval, as OMB Circular A-130, Appendix I, section 4.i(14) and (15), requires. (CA-3b)
- The {{org:system-owner}} shall confirm with the {{org:privacy-official}} whether the exchange is a computer matching program, and if so ensure a matching agreement under 5 U.S.C. § 552a(o) is in place before records are disclosed. (CA-3b)

:::

## Register

| Agreement ID | Organization's system | Other organization and system | Agreement type | Method | Information and impact level | Approved by | Effective date | Last review | Next review due | Status | Where the signed copy is kept |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:ID}} | {{fill:system}} | {{fill:organization and system}} | {{fill:type}} | {{fill:method}} | {{fill:information and impact level}} | {{fill:authorizing official}} | {{fill:date}} | {{fill:date}} | {{fill:date}} | {{fill:active, suspended or ended}} | {{fill:location}} |
