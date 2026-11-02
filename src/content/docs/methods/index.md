---
title: Methods by family
description: NIST's implementation publications for each SP 800-53 control family, with each one's version and status as of November 2026.
sidebar:
  label: Methods by family
  order: 0
guidance: draft
---

A control says what you must do; a method says how it is normally done. In this guide a method is a NIST publication that describes a process or practice set for meeting a group of controls, such as the [Secure Software Development Framework](/methods/ssdf/) for building software. This page lists, for each control family, the NIST publications you use to implement it, with each one's version and status. Status as of November 2026: each publication was checked at its csrc.nist.gov page on November 2, 2026.

## How to use it

1. Open your family's row. Each family's [overview](/controls/) links here.
2. Read the publication that matches the control you are implementing. The last column names the family's controls that cite it.
3. Keep the control and your policy as the requirement. The publication shows how NIST describes doing the work; the control, its parameters and your policy say what you must do.

The SSDF has its own pages in this guide, and control pages list its tasks under Methods. For the other publications, the link goes to NIST's page for it.

## How the rows are chosen

- **The main publications, not every one.** Each row lists the NIST publications an implementer of the family would use, not every publication that mentions the family.
- **NIST's own link first.** Most rows are publications that SP 800-53 (release 5.2.0) cites in the references of the family's controls. A publication SP 800-53 does not cite is listed only where NIST links it to the family another way, such as the SSDF's own references to SA and SR controls, or where it is NIST's general guide for the topic; the last column says which.
- **Architecture guides are not split by family.** SP 800-53 does not cite [SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final), Zero Trust Architecture (final, August 2020), or the NCCoE practice guide that implements it, [SP 1800-35](https://csrc.nist.gov/pubs/sp/1800/35/final), Implementing a Zero Trust Architecture (final, June 2025). Both span the access control, identification and authentication, and communications protection families, so neither has a row.
- **The current edition.** SP 800-53 often cites the edition current in 2020. The table gives the current one and notes the edition SP 800-53 cites, for example SP 800-61 Rev. 2 where Rev. 3 is now final.
- **NIST's status.** Each status is from the publication's csrc.nist.gov page: final, with its date and what it supersedes, or a newer draft with its comment period, or a planning note. This guide follows the final version until NIST publishes the new one.

## By family

<a id="ac"></a>

### Access Control (AC)

[Family overview](/controls/ac/). SP 800-162 covers attribute-based access control; the other two cover remote access and mobile devices.

| Publication | Title | Status | NIST's link to the family |
| --- | --- | --- | --- |
| [SP 800-162](https://csrc.nist.gov/pubs/sp/800/162/upd2/final) | Guide to Attribute Based Access Control (ABAC) Definition and Considerations | Final, January 2014, with updates as of August 2, 2019 | Cited by [AC-2](/controls/ac/ac-2/), [AC-3](/controls/ac/ac-3/), [AC-4](/controls/ac/ac-4/), [AC-16](/controls/ac/ac-16/) and [AC-24](/controls/ac/ac-24/) |
| [SP 800-46 Rev. 2](https://csrc.nist.gov/pubs/sp/800/46/r2/final) | Guide to Enterprise Telework, Remote Access, and Bring Your Own Device (BYOD) Security | Final, July 2016. A [Rev. 3 pre-draft call for comments](https://csrc.nist.gov/pubs/sp/800/46/r3/iprd) closed October 30, 2020; no draft has followed | Cited by [AC-17](/controls/ac/ac-17/) |
| [SP 800-124 Rev. 2](https://csrc.nist.gov/pubs/sp/800/124/r2/final) | Guidelines for Managing the Security of Mobile Devices in the Enterprise | Final, May 2023 | Cited by [AC-7](/controls/ac/ac-7/) and [AC-19](/controls/ac/ac-19/). SP 800-53 cites Rev. 1 |

<a id="at"></a>

### Awareness and Training (AT)

[Family overview](/controls/at/). SP 800-50 Rev. 1 is NIST's guide to building the awareness and training program; the NICE Framework describes the cybersecurity work roles that role-based training can draw on.

| Publication | Title | Status | NIST's link to the family |
| --- | --- | --- | --- |
| [SP 800-50 Rev. 1](https://csrc.nist.gov/pubs/sp/800/50/r1/final) | Building a Cybersecurity and Privacy Learning Program | Final, September 2024. Supersedes SP 800-50 (2003) and SP 800-16 (1998) | Cited by [AT-1](/controls/at/at-1/), [AT-2](/controls/at/at-2/) and [AT-3](/controls/at/at-3/). SP 800-53 cites SP 800-50 (2003) |
| [SP 800-181 Rev. 1](https://csrc.nist.gov/pubs/sp/800/181/r1/final) | Workforce Framework for Cybersecurity (NICE Framework) | Final, November 2020. NIST publishes the current framework components (tasks, knowledge, skills, work roles) on the NICE Framework Resource Center (planning note, June 26, 2025) | Cited by [AT-2](/controls/at/at-2/) and [AT-3](/controls/at/at-3/) |

<a id="au"></a>

### Audit and Accountability (AU)

[Family overview](/controls/au/). SP 800-92 is NIST's log management guide; SP 800-86 covers forensic analysis of the records you keep.

| Publication | Title | Status | NIST's link to the family |
| --- | --- | --- | --- |
| [SP 800-92](https://csrc.nist.gov/pubs/sp/800/92/final) | Guide to Computer Security Log Management | Final, September 2006. [Rev. 1](https://csrc.nist.gov/pubs/sp/800/92/r1/ipd), retitled Cybersecurity Log Management Planning Guide, was an initial public draft on October 11, 2023; comments closed November 29, 2023, and no later version has been published | Cited by [AU-2](/controls/au/au-2/) |
| [SP 800-86](https://csrc.nist.gov/pubs/sp/800/86/final) | Guide to Integrating Forensic Techniques into Incident Response | Final, August 2006 | Cited by [AU-6](/controls/au/au-6/) |

<a id="ca"></a>

### Assessment, Authorization, and Monitoring (CA)

[Family overview](/controls/ca/). SP 800-37 Rev. 2 sets the assessment and authorization tasks, SP 800-53A Rev. 5 gives the assessment procedure for each control, and SP 800-137 covers continuous monitoring.

| Publication | Title | Status | NIST's link to the family |
| --- | --- | --- | --- |
| [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) | Risk Management Framework for Information Systems and Organizations: A System Life Cycle Approach for Security and Privacy | Final, December 2018 | Cited by [CA-1](/controls/ca/ca-1/), [CA-2](/controls/ca/ca-2/), [CA-5](/controls/ca/ca-5/), [CA-6](/controls/ca/ca-6/) and [CA-7](/controls/ca/ca-7/) |
| [SP 800-53A Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final) | Assessing Security and Privacy Controls in Information Systems and Organizations | Final, January 2022; release 5.2.0, August 27, 2025, the release this guide uses | Cited by [CA-1](/controls/ca/ca-1/), [CA-2](/controls/ca/ca-2/) and [CA-7](/controls/ca/ca-7/). SP 800-53 cites Rev. 4 |
| [SP 800-137](https://csrc.nist.gov/pubs/sp/800/137/final) | Information Security Continuous Monitoring (ISCM) for Federal Information Systems and Organizations | Final, September 2011 | Cited by [CA-1](/controls/ca/ca-1/), [CA-2](/controls/ca/ca-2/), [CA-6](/controls/ca/ca-6/) and [CA-7](/controls/ca/ca-7/) |
| [SP 800-137A](https://csrc.nist.gov/pubs/sp/800/137/a/final) | Assessing Information Security Continuous Monitoring (ISCM) Programs: Developing an ISCM Program Assessment | Final, May 2020 | Cited by [CA-1](/controls/ca/ca-1/) |
| [SP 800-115](https://csrc.nist.gov/pubs/sp/800/115/final) | Technical Guide to Information Security Testing and Assessment | Final, September 2008 | Cited by [CA-2](/controls/ca/ca-2/) and [CA-7](/controls/ca/ca-7/) |
| [SP 800-47 Rev. 1](https://csrc.nist.gov/pubs/sp/800/47/r1/final) | Managing the Security of Information Exchanges | Final, July 2021. Supersedes SP 800-47 (2002) | Cited by [CA-3](/controls/ca/ca-3/). SP 800-53 cites SP 800-47 (2002) |

<a id="cm"></a>

### Configuration Management (CM)

[Family overview](/controls/cm/). SP 800-128 is NIST's configuration management guide; SP 800-70 covers the security configuration checklists behind configuration settings.

| Publication | Title | Status | NIST's link to the family |
| --- | --- | --- | --- |
| [SP 800-128](https://csrc.nist.gov/pubs/sp/800/128/upd1/final) | Guide for Security-Focused Configuration Management of Information Systems | Final, August 2011, with updates as of October 10, 2019 | Cited by [CM-2](/controls/cm/cm-2/), [CM-3](/controls/cm/cm-3/), [CM-4](/controls/cm/cm-4/), [CM-6](/controls/cm/cm-6/), [CM-8](/controls/cm/cm-8/) and [CM-9](/controls/cm/cm-9/) |
| [SP 800-70 Rev. 5](https://csrc.nist.gov/pubs/sp/800/70/r5/final) | National Checklist Program for IT Products: Guidelines for Checklist Users and Developers | Final, May 2026. Supersedes Rev. 4 (2018) | Cited by [CM-6](/controls/cm/cm-6/). SP 800-53 cites Rev. 4 |
| [SP 800-167](https://csrc.nist.gov/pubs/sp/800/167/final) | Guide to Application Whitelisting | Final, October 2015 | Cited by [CM-7](/controls/cm/cm-7/) |

<a id="cp"></a>

### Contingency Planning (CP)

[Family overview](/controls/cp/). SP 800-34 Rev. 1 sets the contingency planning process and gives sample plans; SP 800-84 covers tests and exercises.

| Publication | Title | Status | NIST's link to the family |
| --- | --- | --- | --- |
| [SP 800-34 Rev. 1](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final) | Contingency Planning Guide for Federal Information Systems | Final, May 2010, updated November 11, 2010 | Cited by [CP-1](/controls/cp/cp-1/), [CP-2](/controls/cp/cp-2/), [CP-4](/controls/cp/cp-4/), [CP-6](/controls/cp/cp-6/), [CP-7](/controls/cp/cp-7/), [CP-8](/controls/cp/cp-8/), [CP-9](/controls/cp/cp-9/) and [CP-10](/controls/cp/cp-10/) |
| [SP 800-84](https://csrc.nist.gov/pubs/sp/800/84/final) | Guide to Test, Training, and Exercise Programs for IT Plans and Capabilities | Final, September 2006 | Cited by [CP-4](/controls/cp/cp-4/) |

<a id="ia"></a>

### Identification and Authentication (IA)

[Family overview](/controls/ia/). SP 800-63-4 sets the assurance levels for identity proofing, authentication and federation; FIPS 201-3 is the federal PIV standard.

| Publication | Title | Status | NIST's link to the family |
| --- | --- | --- | --- |
| [SP 800-63-4](https://csrc.nist.gov/pubs/sp/800/63/4/final) | Digital Identity Guidelines, with its volumes [SP 800-63A-4](https://csrc.nist.gov/pubs/sp/800/63/a/4/final) (Identity Proofing and Enrollment), [SP 800-63B-4](https://csrc.nist.gov/pubs/sp/800/63/b/4/final) (Authentication and Authenticator Management) and [SP 800-63C-4](https://csrc.nist.gov/pubs/sp/800/63/c/4/final) (Federation and Assertions) | Final, July 2025, all four volumes. Supersedes the SP 800-63-3 suite | Cited by [IA-1](/controls/ia/ia-1/), [IA-2](/controls/ia/ia-2/), [IA-4](/controls/ia/ia-4/), [IA-5](/controls/ia/ia-5/), [IA-8](/controls/ia/ia-8/), [IA-10](/controls/ia/ia-10/), [IA-12](/controls/ia/ia-12/) and [IA-13(3)](/controls/ia/ia-13/#ia-13.3). SP 800-53 cites the SP 800-63-3 suite |
| [FIPS 201-3](https://csrc.nist.gov/pubs/fips/201-3/final) | Personal Identity Verification (PIV) of Federal Employees and Contractors | Final, January 2022. Supersedes FIPS 201-2 (2013) | Cited by [IA-1](/controls/ia/ia-1/), [IA-2](/controls/ia/ia-2/), [IA-4](/controls/ia/ia-4/), [IA-5](/controls/ia/ia-5/), [IA-8](/controls/ia/ia-8/) and [IA-12](/controls/ia/ia-12/). SP 800-53 cites FIPS 201-2 |

<a id="ir"></a>

### Incident Response (IR)

[Family overview](/controls/ir/). SP 800-61 Rev. 3 is NIST's incident response guide, written as a CSF 2.0 Community Profile; the others cover exercises, forensics and recovery.

| Publication | Title | Status | NIST's link to the family |
| --- | --- | --- | --- |
| [SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final) | Incident Response Recommendations and Considerations for Cybersecurity Risk Management: A CSF 2.0 Community Profile | Final, April 2025. Supersedes Rev. 2 (2012) | Cited by [IR-1](/controls/ir/ir-1/), [IR-4](/controls/ir/ir-4/), [IR-5](/controls/ir/ir-5/), [IR-6](/controls/ir/ir-6/) and [IR-8](/controls/ir/ir-8/). SP 800-53 cites Rev. 2 |
| [SP 800-84](https://csrc.nist.gov/pubs/sp/800/84/final) | Guide to Test, Training, and Exercise Programs for IT Plans and Capabilities | Final, September 2006 | Cited by [IR-3](/controls/ir/ir-3/) |
| [SP 800-86](https://csrc.nist.gov/pubs/sp/800/86/final) | Guide to Integrating Forensic Techniques into Incident Response | Final, August 2006 | Cited by [IR-4](/controls/ir/ir-4/) |
| [SP 800-184](https://csrc.nist.gov/pubs/sp/800/184/final) | Guide for Cybersecurity Event Recovery | Final, December 2016 | Cited by [IR-4](/controls/ir/ir-4/) |

<a id="ma"></a>

### Maintenance (MA)

[Family overview](/controls/ma/). SP 800-53 cites no NIST guide written for maintenance as a whole. It cites SP 800-88 for the sanitization steps in MA-3 (maintenance equipment leaving the facility) and MA-4 (components removed for nonlocal maintenance), and NIST IR 8023 for replication devices such as copiers and printers in MA-2. MA-4 also cites FIPS 140-3 and the Digital Identity Guidelines for nonlocal maintenance sessions; they are listed under [SC](#sc) and [IA](#ia).

| Publication | Title | Status | NIST's link to the family |
| --- | --- | --- | --- |
| [SP 800-88 Rev. 2](https://csrc.nist.gov/pubs/sp/800/88/r2/final) | Guidelines for Media Sanitization | Final, September 2025. Supersedes Rev. 1 (2014) | Cited by [MA-3](/controls/ma/ma-3/) and [MA-4](/controls/ma/ma-4/). SP 800-53 cites Rev. 1 |
| [NIST IR 8023](https://csrc.nist.gov/pubs/ir/8023/final) | Risk Management for Replication Devices | Final, February 2015 | Cited by [MA-2](/controls/ma/ma-2/) |

<a id="mp"></a>

### Media Protection (MP)

[Family overview](/controls/mp/). SP 800-88 Rev. 2 is NIST's media sanitization guide; SP 800-111 covers encrypting storage on end-user devices.

| Publication | Title | Status | NIST's link to the family |
| --- | --- | --- | --- |
| [SP 800-88 Rev. 2](https://csrc.nist.gov/pubs/sp/800/88/r2/final) | Guidelines for Media Sanitization | Final, September 2025. Supersedes Rev. 1 (2014) | Cited by [MP-6](/controls/mp/mp-6/). SP 800-53 cites Rev. 1 |
| [SP 800-111](https://csrc.nist.gov/pubs/sp/800/111/final) | Guide to Storage Encryption Technologies for End User Devices | Final, November 2007 | Cited by [MP-2](/controls/mp/mp-2/), [MP-4](/controls/mp/mp-4/) and [MP-7](/controls/mp/mp-7/) |

<a id="pe"></a>

### Physical and Environmental Protection (PE)

[Family overview](/controls/pe/). FIPS 201-3 and SP 800-116 Rev. 1 cover PIV credentials at facility entry points; SP 800-46 Rev. 2 covers alternate work sites.

| Publication | Title | Status | NIST's link to the family |
| --- | --- | --- | --- |
| [FIPS 201-3](https://csrc.nist.gov/pubs/fips/201-3/final) | Personal Identity Verification (PIV) of Federal Employees and Contractors | Final, January 2022. Supersedes FIPS 201-2 (2013) | Cited by [PE-2](/controls/pe/pe-2/) and [PE-3](/controls/pe/pe-3/). SP 800-53 cites FIPS 201-2 |
| [SP 800-116 Rev. 1](https://csrc.nist.gov/pubs/sp/800/116/r1/final) | Guidelines for the Use of PIV Credentials in Facility Access | Final, June 2018 | Cited by [PE-3](/controls/pe/pe-3/) |
| [SP 800-46 Rev. 2](https://csrc.nist.gov/pubs/sp/800/46/r2/final) | Guide to Enterprise Telework, Remote Access, and Bring Your Own Device (BYOD) Security | Final, July 2016. A [Rev. 3 pre-draft call for comments](https://csrc.nist.gov/pubs/sp/800/46/r3/iprd) closed October 30, 2020; no draft has followed | Cited by [PE-17](/controls/pe/pe-17/) |

<a id="pl"></a>

### Planning (PL)

[Family overview](/controls/pl/). SP 800-18 Rev. 2 is the guide to writing system security, privacy and supply chain risk management plans; SP 800-53B gives the baselines and tailoring guidance.

| Publication | Title | Status | NIST's link to the family |
| --- | --- | --- | --- |
| [SP 800-18 Rev. 2](https://csrc.nist.gov/pubs/sp/800/18/r2/final) | Developing Security, Privacy, and Cybersecurity Supply Chain Risk Management Plans for Systems | Final, June 2026. Supersedes Rev. 1 (2006) | Cited by [PL-1](/controls/pl/pl-1/), [PL-2](/controls/pl/pl-2/) and [PL-4](/controls/pl/pl-4/). SP 800-53 cites Rev. 1 |
| [SP 800-53B](https://csrc.nist.gov/pubs/sp/800/53/b/upd1/final) | Control Baselines for Information Systems and Organizations | Final, September 2020, with updates as of December 10, 2020. Release 5.2.0 (August 27, 2025) made no changes to the baselines | Cited by [PL-10](/controls/pl/pl-10/) and [PL-11](/controls/pl/pl-11/) |
| [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) | Risk Management Framework for Information Systems and Organizations: A System Life Cycle Approach for Security and Privacy | Final, December 2018 | Cited by [PL-2](/controls/pl/pl-2/), [PL-9](/controls/pl/pl-9/), [PL-10](/controls/pl/pl-10/) and [PL-11](/controls/pl/pl-11/) |
| [SP 800-160 Vol. 1 Rev. 1](https://csrc.nist.gov/pubs/sp/800/160/v1/r1/final) | Engineering Trustworthy Secure Systems | Final, November 2022. Supersedes SP 800-160 Vol. 1 (2016, updated 2018) | Cited by [PL-2](/controls/pl/pl-2/), [PL-8](/controls/pl/pl-8/), [PL-10](/controls/pl/pl-10/) and [PL-11](/controls/pl/pl-11/). SP 800-53 cites the 2016 edition |

<a id="pm"></a>

### Program Management (PM)

[Family overview](/controls/pm/). SP 800-39 is NIST's guide to organization-wide risk management; SP 800-55 covers measures of performance.

| Publication | Title | Status | NIST's link to the family |
| --- | --- | --- | --- |
| [SP 800-39](https://csrc.nist.gov/pubs/sp/800/39/final) | Managing Information Security Risk: Organization, Mission, and Information System View | Final, March 2011 | Cited by [PM-1](/controls/pm/pm-1/), [PM-2](/controls/pm/pm-2/), [PM-6](/controls/pm/pm-6/), [PM-7](/controls/pm/pm-7/), [PM-9](/controls/pm/pm-9/), [PM-10](/controls/pm/pm-10/), [PM-11](/controls/pm/pm-11/), [PM-14](/controls/pm/pm-14/), [PM-28](/controls/pm/pm-28/) and [PM-31](/controls/pm/pm-31/) |
| [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) | Risk Management Framework for Information Systems and Organizations: A System Life Cycle Approach for Security and Privacy | Final, December 2018 | Cited by [PM-1](/controls/pm/pm-1/), [PM-2](/controls/pm/pm-2/), [PM-4](/controls/pm/pm-4/), [PM-6](/controls/pm/pm-6/), [PM-7](/controls/pm/pm-7/), [PM-9](/controls/pm/pm-9/), [PM-10](/controls/pm/pm-10/), [PM-14](/controls/pm/pm-14/), [PM-29](/controls/pm/pm-29/) and [PM-31](/controls/pm/pm-31/) |
| [SP 800-55 Vol. 1 and Vol. 2](https://csrc.nist.gov/pubs/sp/800/55/v1/final) | Measurement Guide for Information Security: [Volume 1](https://csrc.nist.gov/pubs/sp/800/55/v1/final), Identifying and Selecting Measures, and [Volume 2](https://csrc.nist.gov/pubs/sp/800/55/v2/final), Developing an Information Security Measurement Program | Final, December 2024, both volumes. They supersede SP 800-55 Rev. 1 (2008) | Cited by [PM-6](/controls/pm/pm-6/). SP 800-53 cites SP 800-55 Rev. 1 |
| [SP 800-137](https://csrc.nist.gov/pubs/sp/800/137/final) | Information Security Continuous Monitoring (ISCM) for Federal Information Systems and Organizations | Final, September 2011 | Cited by [PM-6](/controls/pm/pm-6/), [PM-14](/controls/pm/pm-14/) and [PM-31](/controls/pm/pm-31/) |
| [SP 800-181 Rev. 1](https://csrc.nist.gov/pubs/sp/800/181/r1/final) | Workforce Framework for Cybersecurity (NICE Framework) | Final, November 2020. NIST publishes the current framework components (tasks, knowledge, skills, work roles) on the NICE Framework Resource Center (planning note, June 26, 2025) | Cited by [PM-2](/controls/pm/pm-2/), [PM-10](/controls/pm/pm-10/), [PM-13](/controls/pm/pm-13/) and [PM-29](/controls/pm/pm-29/) |

<a id="ps"></a>

### Personnel Security (PS)

[Family overview](/controls/ps/). SP 800-53 cites few NIST implementation guides for personnel security: FIPS 201-3 for PIV credentialing, and the NICE Framework for position risk designation and position descriptions.

| Publication | Title | Status | NIST's link to the family |
| --- | --- | --- | --- |
| [FIPS 201-3](https://csrc.nist.gov/pubs/fips/201-3/final) | Personal Identity Verification (PIV) of Federal Employees and Contractors | Final, January 2022. Supersedes FIPS 201-2 (2013) | Cited by [PS-3](/controls/ps/ps-3/). SP 800-53 cites FIPS 201-2 |
| [SP 800-181 Rev. 1](https://csrc.nist.gov/pubs/sp/800/181/r1/final) | Workforce Framework for Cybersecurity (NICE Framework) | Final, November 2020. NIST publishes the current framework components (tasks, knowledge, skills, work roles) on the NICE Framework Resource Center (planning note, June 26, 2025) | Cited by [PS-2](/controls/ps/ps-2/) and [PS-9](/controls/ps/ps-9/) |

<a id="pt"></a>

### Personally Identifiable Information Processing and Transparency (PT)

[Family overview](/controls/pt/). The PT requirements themselves, such as system of records notices (PT-6), come from the Privacy Act and OMB guidance, covered on each control page. In the PT controls SP 800-53 cites two NIST publications: the Digital Identity Guidelines and NIST IR 8112, on attribute metadata. The last two rows are NIST's broader guides to privacy risk, which no PT control cites.

| Publication | Title | Status | NIST's link to the family |
| --- | --- | --- | --- |
| [SP 800-63-4](https://csrc.nist.gov/pubs/sp/800/63/4/final) | Digital Identity Guidelines, with the volumes listed under [Identification and Authentication](#ia) | Final, July 2025, all four volumes. Supersedes the SP 800-63-3 suite | Cited by [PT-4](/controls/pt/pt-4/). SP 800-53 cites the SP 800-63-3 suite |
| [NIST IR 8112](https://csrc.nist.gov/pubs/ir/8112/final) | Attribute Metadata: A Proposed Schema for Evaluating Federated Attributes | Final, January 2018 | Cited by [PT-2](/controls/pt/pt-2/) and [PT-3](/controls/pt/pt-3/) |
| [NIST Privacy Framework 1.0 (CSWP 10)](https://csrc.nist.gov/pubs/cswp/10/nist-privacy-framework-version-10/final) | NIST Privacy Framework: A Tool for Improving Privacy Through Enterprise Risk Management, Version 1.0 | Final, January 16, 2020. [Version 1.1 (CSWP 40)](https://csrc.nist.gov/pubs/cswp/40/nist-privacy-framework-11/ipd) was an initial public draft on April 14, 2025; comments closed June 13, 2025, and no final has been published | Listed in SP 800-53's references, but cited by no control |
| [NIST IR 8062](https://csrc.nist.gov/pubs/ir/8062/final) | An Introduction to Privacy Engineering and Risk Management in Federal Systems | Final, January 2017 | Cited by no PT control. SP 800-53 cites it in 12 controls in other families, among them [RA-3](/controls/ra/ra-3/), [PM-5](/controls/pm/pm-5/) and [SA-8](/controls/sa/sa-8/) |

<a id="ra"></a>

### Risk Assessment (RA)

[Family overview](/controls/ra/). SP 800-30 Rev. 1 is NIST's risk assessment guide; FIPS 199 and SP 800-60 cover security categorization.

| Publication | Title | Status | NIST's link to the family |
| --- | --- | --- | --- |
| [SP 800-30 Rev. 1](https://csrc.nist.gov/pubs/sp/800/30/r1/final) | Guide for Conducting Risk Assessments | Final, September 2012 | Cited by [RA-1](/controls/ra/ra-1/), [RA-2](/controls/ra/ra-2/), [RA-3](/controls/ra/ra-3/), [RA-7](/controls/ra/ra-7/) and [RA-10](/controls/ra/ra-10/) |
| [FIPS 199](https://csrc.nist.gov/pubs/fips/199/final) | Standards for Security Categorization of Federal Information and Information Systems | Final, February 2004 | Cited by [RA-2](/controls/ra/ra-2/) and [RA-7](/controls/ra/ra-7/) |
| [SP 800-60 Vol. 1 Rev. 1 and Vol. 2 Rev. 1](https://csrc.nist.gov/pubs/sp/800/60/v1/r1/final) | Guide for Mapping Types of Information and Information Systems to Security Categories ([Volume 1](https://csrc.nist.gov/pubs/sp/800/60/v1/r1/final), and [Volume 2](https://csrc.nist.gov/pubs/sp/800/60/v2/r1/final), the appendices) | Final, August 2008. [Rev. 2](https://csrc.nist.gov/pubs/sp/800/60/r2/iwd) was an initial working draft on January 31, 2024; comments closed March 18, 2024, and no later version has been published | Cited by [RA-2](/controls/ra/ra-2/) |
| [NIST IR 8179](https://csrc.nist.gov/pubs/ir/8179/final) | Criticality Analysis Process Model: Prioritizing Systems and Components | Final, April 2018 | Cited by [RA-9](/controls/ra/ra-9/) |
| [SP 800-115](https://csrc.nist.gov/pubs/sp/800/115/final) | Technical Guide to Information Security Testing and Assessment | Final, September 2008 | Cited by [RA-5](/controls/ra/ra-5/) |

<a id="sa"></a>

### System and Services Acquisition (SA)

[Family overview](/controls/sa/). The SSDF is the first method with its own pages in this guide; SP 800-160 Vol. 1 Rev. 1, on systems security engineering, is the publication SP 800-53 cites most in this family.

| Publication | Title | Status | NIST's link to the family |
| --- | --- | --- | --- |
| [SP 800-218 (SSDF 1.1)](/methods/ssdf/) ([NIST](https://csrc.nist.gov/pubs/sp/800/218/final)) | Secure Software Development Framework (SSDF) Version 1.1: Recommendations for Mitigating the Risk of Software Vulnerabilities | Final, February 2022. [Rev. 1 (SSDF 1.2)](https://csrc.nist.gov/pubs/sp/800/218/r1/ipd) was an initial public draft on December 17, 2025; comments closed January 30, 2026, and no later version has been published | Not cited by SP 800-53; the SSDF maps its tasks to [SA-1](/controls/sa/sa-1/), [SA-3](/controls/sa/sa-3/), [SA-4](/controls/sa/sa-4/), [SA-5](/controls/sa/sa-5/), [SA-8](/controls/sa/sa-8/), [SA-9](/controls/sa/sa-9/), [SA-10](/controls/sa/sa-10/), [SA-11](/controls/sa/sa-11/), [SA-15](/controls/sa/sa-15/) and [SA-17](/controls/sa/sa-17/) |
| [SP 800-160 Vol. 1 Rev. 1](https://csrc.nist.gov/pubs/sp/800/160/v1/r1/final) | Engineering Trustworthy Secure Systems | Final, November 2022. Supersedes SP 800-160 Vol. 1 (2016, updated 2018) | Cited by [SA-1](/controls/sa/sa-1/), [SA-2](/controls/sa/sa-2/), [SA-3](/controls/sa/sa-3/), [SA-4](/controls/sa/sa-4/), [SA-5](/controls/sa/sa-5/), [SA-8](/controls/sa/sa-8/), [SA-9](/controls/sa/sa-9/), [SA-10](/controls/sa/sa-10/), [SA-11](/controls/sa/sa-11/), [SA-15](/controls/sa/sa-15/), [SA-17](/controls/sa/sa-17/), [SA-20](/controls/sa/sa-20/), [SA-23](/controls/sa/sa-23/) and [SA-24](/controls/sa/sa-24/). SP 800-53 cites the 2016 edition |
| [SP 800-161 Rev. 1](https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final) | Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations | Final, May 2022, with updates as of November 1, 2024 (Update 1) | Cited by [SA-4](/controls/sa/sa-4/) and [SA-9](/controls/sa/sa-9/). SP 800-53 cites SP 800-161 (2015) |

<a id="sc"></a>

### System and Communications Protection (SC)

[Family overview](/controls/sc/). The main publications cover cryptography (FIPS 140-3, SP 800-57), protected transport (SP 800-52, SP 800-77), DNS (SP 800-81) and boundary protection (SP 800-41).

| Publication | Title | Status | NIST's link to the family |
| --- | --- | --- | --- |
| [FIPS 140-3](https://csrc.nist.gov/pubs/fips/140-3/final) | Security Requirements for Cryptographic Modules | Final, March 22, 2019. Supersedes FIPS 140-2 | Cited by [SC-8](/controls/sc/sc-8/), [SC-12](/controls/sc/sc-12/), [SC-13](/controls/sc/sc-13/) and [SC-20](/controls/sc/sc-20/) |
| [SP 800-57 Part 1 Rev. 5](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final) | Recommendation for Key Management: Part 1 – General | Final, May 2020. [Rev. 6](https://csrc.nist.gov/pubs/sp/800/57/pt1/r6/ipd) was an initial public draft on December 5, 2025; comments closed February 5, 2026 | Cited by [SC-12](/controls/sc/sc-12/), [SC-17](/controls/sc/sc-17/), [SC-28](/controls/sc/sc-28/) and [SC-37](/controls/sc/sc-37/) |
| [SP 800-52 Rev. 2](https://csrc.nist.gov/pubs/sp/800/52/r2/final) | Guidelines for the Selection, Configuration, and Use of Transport Layer Security (TLS) Implementations | Final, August 2019. NIST is reviewing it (planning note, May 7, 2026) | Cited by [SC-8](/controls/sc/sc-8/) and [SC-23](/controls/sc/sc-23/) |
| [SP 800-77 Rev. 1](https://csrc.nist.gov/pubs/sp/800/77/r1/final) | Guide to IPsec VPNs | Final, June 2020 | Cited by [SC-7](/controls/sc/sc-7/), [SC-8](/controls/sc/sc-8/) and [SC-23](/controls/sc/sc-23/) |
| [SP 800-81 Rev. 3](https://csrc.nist.gov/pubs/sp/800/81/r3/final) | Secure Domain Name System (DNS) Deployment Guide | Final, March 2026. Supersedes SP 800-81-2 (2013) | Cited by [SC-8](/controls/sc/sc-8/), [SC-20](/controls/sc/sc-20/), [SC-21](/controls/sc/sc-21/) and [SC-22](/controls/sc/sc-22/). SP 800-53 cites SP 800-81-2 |
| [SP 800-41 Rev. 1](https://csrc.nist.gov/pubs/sp/800/41/r1/final) | Guidelines on Firewalls and Firewall Policy | Final, September 2009 | Cited by [SC-7](/controls/sc/sc-7/) |
| [SP 800-111](https://csrc.nist.gov/pubs/sp/800/111/final) | Guide to Storage Encryption Technologies for End User Devices | Final, November 2007 | Cited by [SC-28](/controls/sc/sc-28/) |

<a id="si"></a>

### System and Information Integrity (SI)

[Family overview](/controls/si/). SP 800-40 Rev. 4 covers patch management, SP 800-83 Rev. 1 malware, SP 800-94 intrusion detection and SP 800-188 de-identification.

| Publication | Title | Status | NIST's link to the family |
| --- | --- | --- | --- |
| [SP 800-40 Rev. 4](https://csrc.nist.gov/pubs/sp/800/40/r4/final) | Guide to Enterprise Patch Management Planning: Preventive Maintenance for Technology | Final, April 2022. Supersedes Rev. 3 (2013), titled Guide to Enterprise Patch Management Technologies | Cited by [SI-2](/controls/si/si-2/) and [SI-5](/controls/si/si-5/). SP 800-53 cites Rev. 3 |
| [SP 800-83 Rev. 1](https://csrc.nist.gov/pubs/sp/800/83/r1/final) | Guide to Malware Incident Prevention and Handling for Desktops and Laptops | Final, July 2013 | Cited by [SI-3](/controls/si/si-3/) and [SI-4](/controls/si/si-4/) |
| [SP 800-94](https://csrc.nist.gov/pubs/sp/800/94/final) | Guide to Intrusion Detection and Prevention Systems (IDPS) | Final, February 2007. NIST retired its 2012 Rev. 1 draft in July 2022 and says it will announce when work on new guidance starts (planning note, July 15, 2022) | Cited by [SI-4](/controls/si/si-4/) |
| [SP 800-188](https://csrc.nist.gov/pubs/sp/800/188/final) | De-Identifying Government Datasets: Techniques and Governance | Final, September 2023 | Cited by [SI-18](/controls/si/si-18/) and [SI-19](/controls/si/si-19/). SP 800-53 cites its 2016 second draft |

<a id="sr"></a>

### Supply Chain Risk Management (SR)

[Family overview](/controls/sr/). SP 800-161 Rev. 1 is NIST's cybersecurity supply chain risk management guide; the SSDF maps some of its tasks to SR controls.

| Publication | Title | Status | NIST's link to the family |
| --- | --- | --- | --- |
| [SP 800-161 Rev. 1](https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final) | Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations | Final, May 2022, with updates as of November 1, 2024 (Update 1) | Cited by [SR-1](/controls/sr/sr-1/), [SR-2](/controls/sr/sr-2/), [SR-3](/controls/sr/sr-3/), [SR-4](/controls/sr/sr-4/), [SR-5](/controls/sr/sr-5/), [SR-6](/controls/sr/sr-6/), [SR-7](/controls/sr/sr-7/) and [SR-8](/controls/sr/sr-8/). SP 800-53 cites SP 800-161 (2015) |
| [SP 800-218 (SSDF 1.1)](/methods/ssdf/) ([NIST](https://csrc.nist.gov/pubs/sp/800/218/final)) | Secure Software Development Framework (SSDF) Version 1.1: Recommendations for Mitigating the Risk of Software Vulnerabilities | Final, February 2022. [Rev. 1 (SSDF 1.2)](https://csrc.nist.gov/pubs/sp/800/218/r1/ipd) was an initial public draft on December 17, 2025; comments closed January 30, 2026, and no later version has been published | Not cited by SP 800-53; the SSDF maps its tasks to [SR-3](/controls/sr/sr-3/), [SR-4](/controls/sr/sr-4/), [SR-5](/controls/sr/sr-5/) and [SR-9](/controls/sr/sr-9/) |
