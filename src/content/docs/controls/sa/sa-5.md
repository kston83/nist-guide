---
title: 'SA-5 System Documentation'
description: 'NIST SP 800-53 Rev. 5 control SA-5, System Documentation: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SA-5 System Documentation'
  order: 5
control:
  id: SA-5
  family: SA
  baselines: [Low, Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Low, Moderate, High | Organization | None |

**Related controls:** [CM-4](/controls/cm/cm-4/), [CM-6](/controls/cm/cm-6/), [CM-7](/controls/cm/cm-7/), [CM-8](/controls/cm/cm-8/), [PL-2](/controls/pl/pl-2/), [PL-4](/controls/pl/pl-4/), [PL-8](/controls/pl/pl-8/), [PS-2](/controls/ps/ps-2/), [SA-3](/controls/sa/sa-3/), [SA-4](/controls/sa/sa-4/), [SA-8](/controls/sa/sa-8/), [SA-9](/controls/sa/sa-9/), [SA-10](/controls/sa/sa-10/), [SA-11](/controls/sa/sa-11/), [SA-15](/controls/sa/sa-15/), [SA-16](/controls/sa/sa-16/), [SA-17](/controls/sa/sa-17/), [SI-12](/controls/si/si-12/), [SR-3](/controls/sr/sr-3/)

## Control statement

- **a.** Obtain or develop administrator documentation for the system, system component, or system service that describes:
  - **1.** Secure configuration, installation, and operation of the system, component, or service;
  - **2.** Effective use and maintenance of security and privacy functions and mechanisms; and
  - **3.** Known vulnerabilities regarding configuration and use of administrative or privileged functions;
- **b.** Obtain or develop user documentation for the system, system component, or system service that describes:
  - **1.** User-accessible security and privacy functions and mechanisms and how to effectively use those functions and mechanisms;
  - **2.** Methods for user interaction, which enables individuals to use the system, component, or service in a more secure manner and protect individual privacy; and
  - **3.** User responsibilities in maintaining the security of the system, component, or service and privacy of individuals;
- **c.** Document attempts to obtain system, system component, or system service documentation when such documentation is either unavailable or nonexistent and take [Assignment: organization-defined actions] in response; and
- **d.** Distribute documentation to [Assignment: organization-defined personnel or roles].

<details>
<summary>NIST discussion</summary>

System artifacts and documentation created by the developer helps organizational personnel understand the implementation and operation of controls. Organizations consider establishing specific measures to determine the quality and completeness of the content provided. System documentation may be used to delineate roles, responsibilities and expectations of the developer and organization, support the management of supply chain risk, incident response, flaw remediation, and other functions. Personnel or roles that require documentation include system owners, system security officers, and system administrators. Attempts to obtain documentation include contacting manufacturers or suppliers and conducting web-based searches. The inability to obtain documentation may occur due to the age of the system or component or the lack of support from developers and contractors. When documentation cannot be obtained, organizations may need to recreate the documentation if it is essential to the implementation or operation of the controls. The protection provided for the documentation is commensurate with the security category or classification of the system. Documentation that addresses system vulnerabilities may require an increased level of protection. Secure operation of the system includes initially starting the system and resuming secure system operation after a lapse in system operation. An example of least privilege in software development is minimizing the functions that operate with elevated privileges (e.g., limiting the tools and functionality that operate in kernel mode)

</details>

*Withdrawn enhancements: SA-5(1), SA-5(2), SA-5(3), SA-5(4), SA-5(5).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SA-5</summary>

Determine if:

- **SA-05a.**
  - **SA-05a.01**
    - **SA-05a.01[01]** administrator documentation for the system, system component, or system service that describes the secure configuration of the system, component, or service is obtained or developed;
    - **SA-05a.01[02]** administrator documentation for the system, system component, or system service that describes the secure installation of the system, component, or service is obtained or developed;
    - **SA-05a.01[03]** administrator documentation for the system, system component, or system service that describes the secure operation of the system, component, or service is obtained or developed;
  - **SA-05a.02**
    - **SA-05a.02[01]** administrator documentation for the system, system component, or system service that describes the effective use of security functions and mechanisms is obtained or developed;
    - **SA-05a.02[02]** administrator documentation for the system, system component, or system service that describes the effective maintenance of security functions and mechanisms is obtained or developed;
    - **SA-05a.02[03]** administrator documentation for the system, system component, or system service that describes the effective use of privacy functions and mechanisms is obtained or developed;
    - **SA-05a.02[04]** administrator documentation for the system, system component, or system service that describes the effective maintenance of privacy functions and mechanisms is obtained or developed;
  - **SA-05a.03**
    - **SA-05a.03[01]** administrator documentation for the system, system component, or system service that describes known vulnerabilities regarding the configuration of administrative or privileged functions is obtained or developed;
    - **SA-05a.03[02]** administrator documentation for the system, system component, or system service that describes known vulnerabilities regarding the use of administrative or privileged functions is obtained or developed;
- **SA-05b.**
  - **SA-05b.01**
    - **SA-05b.01[01]** user documentation for the system, system component, or system service that describes user-accessible security functions and mechanisms is obtained or developed;
    - **SA-05b.01[02]** user documentation for the system, system component, or system service that describes how to effectively use those (user-accessible security) functions and mechanisms is obtained or developed;
    - **SA-05b.01[03]** user documentation for the system, system component, or system service that describes user-accessible privacy functions and mechanisms is obtained or developed;
    - **SA-05b.01[04]** user documentation for the system, system component, or system service that describes how to effectively use those (user-accessible privacy) functions and mechanisms is obtained or developed;
  - **SA-05b.02**
    - **SA-05b.02[01]** user documentation for the system, system component, or system service that describes methods for user interaction, which enable individuals to use the system, component, or service in a more secure manner is obtained or developed;
    - **SA-05b.02[02]** user documentation for the system, system component, or system service that describes methods for user interaction, which enable individuals to use the system, component, or service to protect individual privacy is obtained or developed;
  - **SA-05b.03**
    - **SA-05b.03[01]** user documentation for the system, system component, or system service that describes user responsibilities for maintaining the security of the system, component, or service is obtained or developed;
    - **SA-05b.03[02]** user documentation for the system, system component, or system service that describes user responsibilities for maintaining the privacy of individuals is obtained or developed;
- **SA-05c.**
  - **SA-05c.[01]** attempts to obtain system, system component, or system service documentation when such documentation is either unavailable or nonexistent is documented;
  - **SA-05c.[02]** after attempts to obtain system, system component, or system service documentation when such documentation is either unavailable or nonexistent, [Assignment: organization-defined actions] are taken in response;
- **SA-05d.** documentation is distributed to [Assignment: organization-defined personnel or roles].

**Examine:** System and services acquisition policy; system and services acquisition procedures; procedures addressing system documentation; system documentation, including administrator and user guides; system design documentation; records documenting attempts to obtain unavailable or nonexistent system documentation; list of actions to be taken in response to documented attempts to obtain system, system component, or system service documentation; risk management strategy documentation; system security plan; privacy plan; privacy impact assessment; privacy risk assessment documentation; other relevant documents or records.

**Interview:** Organizational personnel with acquisition/contracting responsibilities; organizational personnel with information security and privacy responsibilities; system administrators; organizational personnel responsible for operating, using, and/or maintaining the system; system developers.

**Test:** Organizational processes for obtaining, protecting, and distributing system administrator and user documentation.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

SA-5 asks you to obtain or write administrator and user documentation for each system, component and service. Record what you did when documentation could not be found, and get it to the people who need it. Administrator documentation covers secure configuration, installation and operation, the use and maintenance of security and privacy functions, and known vulnerabilities in privileged functions. User documentation covers the security and privacy functions users can reach, how to use the system more securely, and users' own responsibilities.

NIST's SA-5 discussion names system owners, system security officers and system administrators as the people who need it. Where documentation cannot be obtained and is essential to running the controls, the discussion says the organization may need to recreate it. Protect documentation according to the system's security category, and more strictly where it describes vulnerabilities.

**Common implementations.** Vendor administrator guides, hardening guides and release notes, saved for the versions actually deployed, in a document repository with access limited to the system team. In-house runbooks for custom components and for configuration choices the vendor documents poorly. User guidance in the [Rules of Behavior](/templates/forms/rules-of-behavior/), onboarding material and a help desk knowledge base: how to use multifactor authentication, report a suspected phishing message, and handle personally identifiable information. Contracts require the supplier to deliver documentation (SA-4e). For older components, a short record of the vendor contacts and searches made, and of what was written in-house instead.

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Actions when documentation is unavailable (c) | Ask the manufacturer or supplier again and search its published material; where the documentation is essential to operating a control, write it in-house; and record any remaining gap as a risk in the risk register |
| Who receives the documentation (d) | The system owner, the system security officer and the system administrators |

The actions end in the [risk register](/templates/forms/risk-register/). In the [System and Services Acquisition policy](/templates/policies/sa/), the system owner obtains, distributes and protects the documentation.

**Evidence assessors ask for.**

- Administrator documentation for a sample of components, matching the versions in use
- User documentation that describes the security and privacy functions and users' responsibilities
- For missing documentation, the record of attempts to obtain it and the action taken
- The distribution list or repository permissions showing who can reach it
- How documentation that describes vulnerabilities is protected

**Inheritance.** Documentation for a service the system inherits, such as a cloud platform, comes from the provider and is usually inherited with that service. User documentation shared across systems, such as the Rules of Behavior, may be a common control. Documentation for the system's own components is system-owned, so SA-5 is often a hybrid control.

**Common findings.**

- Documentation for an older version than the one deployed.
- No record of attempts to find documentation for a legacy component.
- Vulnerability details or privileged procedures on a wiki open to the whole organization.
- User documentation that explains features but not users' security and privacy responsibilities (b.3).

**Enhancements in the Moderate baseline.** SA-5 has no enhancements.

**Federal systems** (as of September 2026). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.i(6), requires agencies to protect administrator, user and system documentation related to the design, development, testing, operation, maintenance and security of the hardware, firmware and software components of their information systems.
