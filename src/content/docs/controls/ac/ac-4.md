---
title: 'AC-4 Information Flow Enforcement'
description: 'NIST SP 800-53 Rev. 5 control AC-4, Information Flow Enforcement: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'AC-4 Information Flow Enforcement'
  order: 4
control:
  id: AC-4
  family: AC
  baselines: [Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | System | 30 (1 in a baseline) |

**Related controls:** [AC-3](/controls/ac/ac-3/), [AC-6](/controls/ac/ac-6/), [AC-16](/controls/ac/ac-16/), [AC-17](/controls/ac/ac-17/), [AC-19](/controls/ac/ac-19/), [AC-21](/controls/ac/ac-21/), [AU-10](/controls/au/au-10/), [CA-3](/controls/ca/ca-3/), [CA-9](/controls/ca/ca-9/), [CM-7](/controls/cm/cm-7/), [PL-9](/controls/pl/pl-9/), [PM-24](/controls/pm/pm-24/), [SA-17](/controls/sa/sa-17/), [SC-4](/controls/sc/sc-4/), [SC-7](/controls/sc/sc-7/), [SC-16](/controls/sc/sc-16/), [SC-31](/controls/sc/sc-31/)

## Control statement

Enforce approved authorizations for controlling the flow of information within the system and between connected systems based on [Assignment: organization-defined information flow control policies].

<details>
<summary>NIST discussion</summary>

Information flow control regulates where information can travel within a system and between systems (in contrast to who is allowed to access the information) and without regard to subsequent accesses to that information. Flow control restrictions include blocking external traffic that claims to be from within the organization, keeping export-controlled information from being transmitted in the clear to the Internet, restricting web requests that are not from the internal web proxy server, and limiting information transfers between organizations based on data structures and content. Transferring information between organizations may require an agreement specifying how the information flow is enforced (see CA-3 ). Transferring information between systems in different security or privacy domains with different security or privacy policies introduces the risk that such transfers violate one or more domain security or privacy policies. In such situations, information owners/stewards provide guidance at designated policy enforcement points between connected systems. Organizations consider mandating specific architectural solutions to enforce specific security and privacy policies. Enforcement includes prohibiting information transfers between connected systems (i.e., allowing access only), verifying write permissions before accepting information from another security or privacy domain or connected system, employing hardware mechanisms to enforce one-way information flows, and implementing trustworthy regrading mechanisms to reassign security or privacy attributes and labels.

Organizations commonly employ information flow control policies and enforcement mechanisms to control the flow of information between designated sources and destinations within systems and between connected systems. Flow control is based on the characteristics of the information and/or the information path. Enforcement occurs, for example, in boundary protection devices that employ rule sets or establish configuration settings that restrict system services, provide a packet-filtering capability based on header information, or provide a message-filtering capability based on message content. Organizations also consider the trustworthiness of filtering and/or inspection mechanisms (i.e., hardware, firmware, and software components) that are critical to information flow enforcement. Control enhancements 3 through 32 primarily address cross-domain solution needs that focus on more advanced filtering techniques, in-depth analysis, and stronger flow enforcement mechanisms implemented in cross-domain products, such as high-assurance guards. Such capabilities are generally not available in commercial off-the-shelf products. Information flow enforcement also applies to control plane traffic (e.g., routing and DNS).

</details>

## Control enhancements

<a id="ac-4.1"></a>

### AC-4(1) Object Security and Privacy Attributes

*Baselines: Not in a baseline*

Use [Assignment: organization-defined security and privacy attributes] associated with [Assignment: organization-defined information, source, and destination objects] to enforce [Assignment: organization-defined information flow control policies] as a basis for flow control decisions.

<details>
<summary>Discussion and assessment objectives for AC-4(1)</summary>

Information flow enforcement mechanisms compare security and privacy attributes associated with information (i.e., data content and structure) and source and destination objects and respond appropriately when the enforcement mechanisms encounter information flows not explicitly allowed by information flow policies. For example, an information object labeled Secret would be allowed to flow to a destination object labeled Secret, but an information object labeled Top Secret would not be allowed to flow to a destination object labeled Secret. A dataset of personally identifiable information may be tagged with restrictions against combining with other types of datasets and, thus, would not be allowed to flow to the restricted dataset. Security and privacy attributes can also include source and destination addresses employed in traffic filter firewalls. Flow enforcement using explicit security or privacy attributes can be used, for example, to control the release of certain types of information.

Determine if:

- **AC-04(01)[01]** [Assignment: organization-defined security attributes] associated with [Assignment: organization-defined information objects], [Assignment: organization-defined source objects] , and [Assignment: organization-defined destination objects] are used to enforce [Assignment: organization-defined information flow control policies] as a basis for flow control decisions;
- **AC-04(01)[02]** [Assignment: organization-defined privacy attributes] associated with [Assignment: organization-defined information objects], [Assignment: organization-defined source objects] , and [Assignment: organization-defined destination objects] are used to enforce [Assignment: organization-defined information flow control policies] as a basis for flow control decisions.

**Examine:** Access control policy; information flow control policies; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; list of security and privacy attributes and associated source and destination objects; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; organizational personnel with privacy responsibilities; system developers.

**Test:** Mechanisms implementing information flow enforcement policy.

</details>

<a id="ac-4.2"></a>

### AC-4(2) Processing Domains

*Baselines: Not in a baseline*

Use protected processing domains to enforce [Assignment: organization-defined information flow control policies] as a basis for flow control decisions.

<details>
<summary>Discussion and assessment objectives for AC-4(2)</summary>

Protected processing domains within systems are processing spaces that have controlled interactions with other processing spaces, enabling control of information flows between these spaces and to/from information objects. A protected processing domain can be provided, for example, by implementing domain and type enforcement. In domain and type enforcement, system processes are assigned to domains, information is identified by types, and information flows are controlled based on allowed information accesses (i.e., determined by domain and type), allowed signaling among domains, and allowed process transitions to other domains.

Determine if protected processing domains are used to enforce [Assignment: organization-defined information flow control policies] as a basis for flow control decisions.

**Examine:** Access control policy; information flow control policies; procedures addressing information flow enforcement; system design documentation; system security architecture and associated documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing information flow enforcement policy.

</details>

<a id="ac-4.3"></a>

### AC-4(3) Dynamic Information Flow Control

*Baselines: Not in a baseline*

Enforce [Assignment: organization-defined information flow control policies].

<details>
<summary>Discussion and assessment objectives for AC-4(3)</summary>

Organizational policies regarding dynamic information flow control include allowing or disallowing information flows based on changing conditions or mission or operational considerations. Changing conditions include changes in risk tolerance due to changes in the immediacy of mission or business needs, changes in the threat environment, and detection of potentially harmful or adverse events.

Determine if [Assignment: organization-defined information flow control policies] are enforced.

**Examine:** Access control policy; information flow control policies; procedures addressing information flow enforcement; system design documentation; system security architecture and associated documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developers.

**Test:** Mechanisms implementing information flow enforcement policy.

</details>

<a id="ac-4.4"></a>

### AC-4(4) Flow Control of Encrypted Information

*Baselines: High*

Prevent encrypted information from bypassing [Assignment: organization-defined information flow control mechanisms] by [Selection (one or more): decrypting the information; blocking the flow of the encrypted information; terminating communications sessions attempting to pass encrypted information; [Assignment: organization-defined procedure or method] ].

<details>
<summary>Discussion and assessment objectives for AC-4(4)</summary>

Flow control mechanisms include content checking, security policy filters, and data type identifiers. The term encryption is extended to cover encoded data not recognized by filtering mechanisms.

Determine if encrypted information is prevented from bypassing [Assignment: organization-defined information flow control mechanisms] by [Selection (one or more): decrypting the information; blocking the flow of the encrypted information; terminating communications sessions attempting to pass encrypted information; [Assignment: organization-defined procedure or method] ].

**Examine:** Access control policy; information flow control policies; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developers.

**Test:** Mechanisms implementing information flow enforcement policy.

</details>

<a id="ac-4.5"></a>

### AC-4(5) Embedded Data Types

*Baselines: Not in a baseline*

Enforce [Assignment: organization-defined limitations] on embedding data types within other data types.

<details>
<summary>Discussion and assessment objectives for AC-4(5)</summary>

Embedding data types within other data types may result in reduced flow control effectiveness. Data type embedding includes inserting files as objects within other files and using compressed or archived data types that may include multiple embedded data types. Limitations on data type embedding consider the levels of embedding and prohibit levels of data type embedding that are beyond the capability of the inspection tools.

Determine if [Assignment: organization-defined limitations] are enforced on embedding data types within other data types.

**Examine:** Access control policy; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; list of limitations to be enforced on embedding data types within other data types; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developers.

**Test:** Mechanisms implementing information flow enforcement policy.

</details>

<a id="ac-4.6"></a>

### AC-4(6) Metadata

*Baselines: Not in a baseline*

Enforce information flow control based on [Assignment: organization-defined metadata].

<details>
<summary>Discussion and assessment objectives for AC-4(6)</summary>

Metadata is information that describes the characteristics of data. Metadata can include structural metadata describing data structures or descriptive metadata describing data content. Enforcement of allowed information flows based on metadata enables simpler and more effective flow control. Organizations consider the trustworthiness of metadata regarding data accuracy (i.e., knowledge that the metadata values are correct with respect to the data), data integrity (i.e., protecting against unauthorized changes to metadata tags), and the binding of metadata to the data payload (i.e., employing sufficiently strong binding techniques with appropriate assurance).

Determine if information flow control enforcement is based on [Assignment: organization-defined metadata].

**Examine:** Access control policy; information flow control policies; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; types of metadata used to enforce information flow control decisions; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developers.

**Test:** Mechanisms implementing information flow enforcement policy.

</details>

<a id="ac-4.7"></a>

### AC-4(7) One-way Flow Mechanisms

*Baselines: Not in a baseline*

Enforce one-way information flows through hardware-based flow control mechanisms.

<details>
<summary>Discussion and assessment objectives for AC-4(7)</summary>

One-way flow mechanisms may also be referred to as a unidirectional network, unidirectional security gateway, or data diode. One-way flow mechanisms can be used to prevent data from being exported from a higher impact or classified domain or system while permitting data from a lower impact or unclassified domain or system to be imported.

Determine if one-way information flows are enforced through hardware-based flow control mechanisms.

**Examine:** Access control policy; information flow control policies; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; system hardware mechanisms and associated configurations; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developers.

**Test:** Hardware mechanisms implementing information flow enforcement policy.

</details>

<a id="ac-4.8"></a>

### AC-4(8) Security and Privacy Policy Filters

*Baselines: Not in a baseline*

- **(a)** Enforce information flow control using [Assignment: organization-defined security or privacy policy filters] as a basis for flow control decisions for [Assignment: organization-defined information flows] ; and
- **(b)** [Selection (one or more): block; strip; modify; quarantine] data after a filter processing failure in accordance with [Assignment: organization-defined security or privacy policy].

<details>
<summary>Discussion and assessment objectives for AC-4(8)</summary>

Organization-defined security or privacy policy filters can address data structures and content. For example, security or privacy policy filters for data structures can check for maximum file lengths, maximum field sizes, and data/file types (for structured and unstructured data). Security or privacy policy filters for data content can check for specific words, enumerated values or data value ranges, and hidden content. Structured data permits the interpretation of data content by applications. Unstructured data refers to digital information without a data structure or with a data structure that does not facilitate the development of rule sets to address the impact or classification level of the information conveyed by the data or the flow enforcement decisions. Unstructured data consists of bitmap objects that are inherently non-language-based (i.e., image, video, or audio files) and textual objects that are based on written or printed languages. Organizations can implement more than one security or privacy policy filter to meet information flow control objectives.

Determine if:

- **AC-04(08)(a)**
  - **AC-04(08)(a)[01]** information flow control is enforced using [Assignment: organization-defined security policy filter] as a basis for flow control decisions for [Assignment: organization-defined information flows];
  - **AC-04(08)(a)[02]** information flow control is enforced using [Assignment: organization-defined privacy policy filter] as a basis for flow control decisions for [Assignment: organization-defined information flows];
- **AC-04(08)(b)** [Selection (one or more): block; strip; modify; quarantine] data after a filter processing failure in accordance with [Assignment: organization-defined security policy];

[Selection (one or more): block; strip; modify; quarantine] data after a filter processing failure in accordance with [Assignment: organization-defined privacy policy].

**Examine:** Access control policy; information flow control policies; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; list of security policy filters regulating flow control decisions; list of privacy policy filters regulating flow control decisions; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security and privacy responsibilities; system developers.

**Test:** Mechanisms implementing information flow enforcement policy; security and privacy policy filters.

</details>

<a id="ac-4.9"></a>

### AC-4(9) Human Reviews

*Baselines: Not in a baseline*

Enforce the use of human reviews for [Assignment: organization-defined information flows] under the following conditions: [Assignment: organization-defined conditions].

<details>
<summary>Discussion and assessment objectives for AC-4(9)</summary>

Organizations define security or privacy policy filters for all situations where automated flow control decisions are possible. When a fully automated flow control decision is not possible, then a human review may be employed in lieu of or as a complement to automated security or privacy policy filtering. Human reviews may also be employed as deemed necessary by organizations.

Determine if human reviews are used for [Assignment: organization-defined information flows] under [Assignment: organization-defined conditions].

**Examine:** Access control policy; information flow control policies; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; records of human reviews regarding information flows; list of information flows requiring the use of human reviews; list of conditions requiring human reviews for information flows; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security and privacy responsibilities; organizational personnel with information flow enforcement responsibilities; system developers.

**Test:** Mechanisms enforcing the use of human reviews.

</details>

<a id="ac-4.10"></a>

### AC-4(10) Enable and Disable Security or Privacy Policy Filters

*Baselines: Not in a baseline*

Provide the capability for privileged administrators to enable and disable [Assignment: organization-defined security or privacy policy filters] under the following conditions: [Assignment: organization-defined conditions].

<details>
<summary>Discussion and assessment objectives for AC-4(10)</summary>

For example, as allowed by the system authorization, administrators can enable security or privacy policy filters to accommodate approved data types. Administrators also have the capability to select the filters that are executed on a specific data flow based on the type of data that is being transferred, the source and destination security domains, and other security or privacy relevant features, as needed.

Determine if:

- **AC-04(10)[01]** capability is provided for privileged administrators to enable and disable [Assignment: organization-defined security filters] under [Assignment: organization-defined conditions];
- **AC-04(10)[02]** capability is provided for privileged administrators to enable and disable [Assignment: organization-defined privacy filters] under [Assignment: organization-defined conditions].

**Examine:** Access control policy; information flow information policies; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; list of security policy filters enabled/disabled by privileged administrators; list of privacy policy filters enabled/disabled by privileged administrators; list of approved data types for enabling/disabling by privileged administrators; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for enabling/disabling security and privacy policy filters; system/network administrators; organizational personnel with information security and privacy responsibilities; system developers.

**Test:** Mechanisms implementing information flow enforcement policy; security and privacy policy filters.

</details>

<a id="ac-4.11"></a>

### AC-4(11) Configuration of Security or Privacy Policy Filters

*Baselines: Not in a baseline*

Provide the capability for privileged administrators to configure [Assignment: organization-defined security or privacy policy filters] to support different security or privacy policies.

<details>
<summary>Discussion and assessment objectives for AC-4(11)</summary>

Documentation contains detailed information for configuring security or privacy policy filters. For example, administrators can configure security or privacy policy filters to include the list of inappropriate words that security or privacy policy mechanisms check in accordance with the definitions provided by organizations.

Determine if:

- **AC-04(11)[01]** capability is provided for privileged administrators to configure [Assignment: organization-defined security policy filters] to support different security or privacy policies;
- **AC-04(11)[02]** capability is provided for privileged administrators to configure [Assignment: organization-defined privacy policy filters] to support different security or privacy policies.

**Examine:** Access control policy; information flow control policies; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; list of security policy filters; list of privacy policy filters; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with responsibilities for configuring security and privacy policy filters; system/network administrators; organizational personnel with information security and privacy responsibilities; system developers.

**Test:** Mechanisms implementing information flow enforcement policy; security and privacy policy filters.

</details>

<a id="ac-4.12"></a>

### AC-4(12) Data Type Identifiers

*Baselines: Not in a baseline*

When transferring information between different security domains, use [Assignment: organization-defined data type identifiers] to validate data essential for information flow decisions.

<details>
<summary>Discussion and assessment objectives for AC-4(12)</summary>

Data type identifiers include filenames, file types, file signatures or tokens, and multiple internal file signatures or tokens. Systems only allow transfer of data that is compliant with data type format specifications. Identification and validation of data types is based on defined specifications associated with each allowed data format. The filename and number alone are not used for data type identification. Content is validated syntactically and semantically against its specification to ensure that it is the proper data type.

Determine if when transferring information between different security domains, [Assignment: organization-defined data type identifiers] are used to validate data essential for information flow decisions.

**Examine:** Access control policy; information flow control policies; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; list of data type identifiers; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developers.

**Test:** Mechanisms implementing information flow enforcement policy.

</details>

<a id="ac-4.13"></a>

### AC-4(13) Decomposition into Policy-relevant Subcomponents

*Baselines: Not in a baseline*

When transferring information between different security domains, decompose information into [Assignment: organization-defined policy-relevant subcomponents] for submission to policy enforcement mechanisms.

<details>
<summary>Discussion and assessment objectives for AC-4(13)</summary>

Decomposing information into policy-relevant subcomponents prior to information transfer facilitates policy decisions on source, destination, certificates, classification, attachments, and other security- or privacy-related component differentiators. Policy enforcement mechanisms apply filtering, inspection, and/or sanitization rules to the policy-relevant subcomponents of information to facilitate flow enforcement prior to transferring such information to different security domains.

Determine if when transferring information between different security domains, information is decomposed into [Assignment: organization-defined policy-relevant subcomponents] for submission to policy enforcement mechanisms.

**Examine:** Access control policy; information flow control policies; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developers.

**Test:** Mechanisms implementing information flow enforcement policy.

</details>

<a id="ac-4.14"></a>

### AC-4(14) Security or Privacy Policy Filter Constraints

*Baselines: Not in a baseline*

When transferring information between different security domains, implement [Assignment: organization-defined security or privacy policy filters] requiring fully enumerated formats that restrict data structure and content.

<details>
<summary>Discussion and assessment objectives for AC-4(14)</summary>

Data structure and content restrictions reduce the range of potential malicious or unsanctioned content in cross-domain transactions. Security or privacy policy filters that restrict data structures include restricting file sizes and field lengths. Data content policy filters include encoding formats for character sets, restricting character data fields to only contain alpha-numeric characters, prohibiting special characters, and validating schema structures.

Determine if:

- **AC-04(14)[01]** when transferring information between different security domains, implemented [Assignment: organization-defined security policy filters] require fully enumerated formats that restrict data structure and content;
- **AC-04(14)[02]** when transferring information between different security domains, implemented [Assignment: organization-defined privacy policy filters] require fully enumerated formats that restrict data structure and content.

**Examine:** Access control policy; information flow control policies; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; list of security and privacy policy filters; list of data structure policy filters; list of data content policy filters; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security and privacy responsibilities; system developers.

**Test:** Mechanisms implementing information flow enforcement policy; security and privacy policy filters.

</details>

<a id="ac-4.15"></a>

### AC-4(15) Detection of Unsanctioned Information

*Baselines: Not in a baseline*

When transferring information between different security domains, examine the information for the presence of [Assignment: organization-defined unsanctioned information] and prohibit the transfer of such information in accordance with the [Assignment: organization-defined security or privacy policy].

<details>
<summary>Discussion and assessment objectives for AC-4(15)</summary>

Unsanctioned information includes malicious code, information that is inappropriate for release from the source network, or executable code that could disrupt or harm the services or systems on the destination network.

Determine if:

- **AC-04(15)[01]** when transferring information between different security domains, information is examined for the presence of [Assignment: organization-defined unsanctioned information];
- **AC-04(15)[02]** when transferring information between different security domains, transfer of [Assignment: organization-defined unsanctioned information] is prohibited in accordance with the [Assignment: organization-defined security policy];
- **AC-04(15)[03]** when transferring information between different security domains, transfer of [Assignment: organization-defined unsanctioned information] is prohibited in accordance with the [Assignment: organization-defined privacy policy].

**Examine:** Access control policy; information flow control policies; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; list of unsanctioned information types and associated information; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with information security responsibilities; organizational personnel with privacy responsibilities; system developers.

**Test:** Mechanisms implementing information flow enforcement policy.

</details>

<a id="ac-4.17"></a>

### AC-4(17) Domain Authentication

*Baselines: Not in a baseline*

Uniquely identify and authenticate source and destination points by [Selection (one or more): organization, system, application, service, individual] for information transfer.

<details>
<summary>Discussion and assessment objectives for AC-4(17)</summary>

Attribution is a critical component of a security and privacy concept of operations. The ability to identify source and destination points for information flowing within systems allows the forensic reconstruction of events and encourages policy compliance by attributing policy violations to specific organizations or individuals. Successful domain authentication requires that system labels distinguish among systems, organizations, and individuals involved in preparing, sending, receiving, or disseminating information. Attribution also allows organizations to better maintain the lineage of personally identifiable information processing as it flows through systems and can facilitate consent tracking, as well as correction, deletion, or access requests from individuals.

Determine if source and destination points are uniquely identified and authenticated by [Selection (one or more): organization, system, application, service, individual] for information transfer.

**Examine:** Access control policy; information flow control policies; procedures addressing information flow enforcement; procedures addressing source and destination domain identification and authentication; system design documentation; system configuration settings and associated documentation; system audit records; list of system labels; system security plan; privacy plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security and privacy responsibilities; system developers.

**Test:** Mechanisms implementing information flow enforcement policy.

</details>

<a id="ac-4.19"></a>

### AC-4(19) Validation of Metadata

*Baselines: Not in a baseline*

When transferring information between different security domains, implement [Assignment: organization-defined security or privacy policy filters] on metadata.

<details>
<summary>Discussion and assessment objectives for AC-4(19)</summary>

All information (including metadata and the data to which the metadata applies) is subject to filtering and inspection. Some organizations distinguish between metadata and data payloads (i.e., only the data to which the metadata is bound). Other organizations do not make such distinctions and consider metadata and the data to which the metadata applies to be part of the payload.

Determine if:

- **AC-04(19)[01]** when transferring information between different security domains, [Assignment: organization-defined security policy filters] are implemented on metadata;
- **AC-04(19)[02]** when transferring information between different security domains, [Assignment: organization-defined privacy policy filters] are implemented on metadata.

**Examine:** Information flow enforcement policy; information flow control policies; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; list of security policy filtering criteria applied to metadata and data payloads; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** Organizational personnel with information flow enforcement responsibilities; system/network administrators; organizational personnel with information security responsibilities; organizational personnel with privacy responsibilities; system developers.

**Test:** Mechanisms implementing information flow enforcement functions; security and policy filters.

</details>

<a id="ac-4.20"></a>

### AC-4(20) Approved Solutions

*Baselines: Not in a baseline*

Employ [Assignment: organization-defined solutions in approved configurations] to control the flow of [Assignment: organization-defined information] across security domains.

<details>
<summary>Discussion and assessment objectives for AC-4(20)</summary>

Organizations define approved solutions and configurations in cross-domain policies and guidance in accordance with the types of information flows across classification boundaries. The National Security Agency (NSA) National Cross Domain Strategy and Management Office provides a listing of approved cross-domain solutions. Contact [ncdsmo@nsa.gov](mailto:ncdsmo@nsa.gov) for more information.

Determine if [Assignment: organization-defined solutions in approved configurations] are employed to control the flow of [Assignment: organization-defined information] across security domains.

**Examine:** Information flow enforcement policy; information flow control policies; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; list of solutions in approved configurations; approved configuration baselines; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with information flow enforcement responsibilities; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing information flow enforcement functions.

</details>

<a id="ac-4.21"></a>

### AC-4(21) Physical or Logical Separation of Information Flows

*Baselines: Not in a baseline*

Separate information flows logically or physically using [Assignment: organization-defined mechanisms and/or techniques] to accomplish [Assignment: organization-defined required separations].

<details>
<summary>Discussion and assessment objectives for AC-4(21)</summary>

Enforcing the separation of information flows associated with defined types of data can enhance protection by ensuring that information is not commingled while in transit and by enabling flow control by transmission paths that are not otherwise achievable. Types of separable information include inbound and outbound communications traffic, service requests and responses, and information of differing security impact or classification levels.

Determine if:

- **AC-04(21)[01]** information flows are separated logically using [Assignment: organization-defined mechanisms and/or techniques] to accomplish [Assignment: organization-defined required separations];
- **AC-04(21)[02]** information flows are separated physically using [Assignment: organization-defined mechanisms and/or techniques] to accomplish [Assignment: organization-defined required separations].

**Examine:** Information flow enforcement policy; information flow control policies; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; list of required separation of information flows by information types; list of mechanisms and/or techniques used to logically or physically separate information flows; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with information flow enforcement responsibilities; system/network administrators; organizational personnel with information security responsibilities; system developers.

**Test:** Mechanisms implementing information flow enforcement functions.

</details>

<a id="ac-4.22"></a>

### AC-4(22) Access Only

*Baselines: Not in a baseline*

Provide access from a single device to computing platforms, applications, or data residing in multiple different security domains, while preventing information flow between the different security domains.

<details>
<summary>Discussion and assessment objectives for AC-4(22)</summary>

The system provides a capability for users to access each connected security domain without providing any mechanisms to allow users to transfer data or information between the different security domains. An example of an access-only solution is a terminal that provides a user access to information with different security classifications while assuredly keeping the information separate.

Determine if access is provided from a single device to computing platforms, applications, or data that reside in multiple different security domains while preventing information flow between the different security domains.

**Examine:** Information flow enforcement policy; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with information flow enforcement responsibilities; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing information flow enforcement functions.

</details>

<a id="ac-4.23"></a>

### AC-4(23) Modify Non-releasable Information

*Baselines: Not in a baseline*

When transferring information between different security domains, modify non-releasable information by implementing [Assignment: organization-defined modification action].

<details>
<summary>Discussion and assessment objectives for AC-4(23)</summary>

Modifying non-releasable information can help prevent a data spill or attack when information is transferred across security domains. Modification actions include masking, permutation, alteration, removal, or redaction.

Determine if when transferring information between security domains, non-releasable information is modified by implementing [Assignment: organization-defined modification action].

**Examine:** Information flow enforcement policy; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with information flow enforcement responsibilities; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing information flow enforcement functions.

</details>

<a id="ac-4.24"></a>

### AC-4(24) Internal Normalized Format

*Baselines: Not in a baseline*

When transferring information between different security domains, parse incoming data into an internal normalized format and regenerate the data to be consistent with its intended specification.

<details>
<summary>Discussion and assessment objectives for AC-4(24)</summary>

Converting data into normalized forms is one of most of effective mechanisms to stop malicious attacks and large classes of data exfiltration.

Determine if:

- **AC-04(24)[01]** when transferring information between different security domains, incoming data is parsed into an internal, normalized format;
- **AC-04(24)[02]** when transferring information between different security domains, the data is regenerated to be consistent with its intended specification.

**Examine:** Information flow enforcement policy; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with information flow enforcement responsibilities; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing information flow enforcement functions.

</details>

<a id="ac-4.25"></a>

### AC-4(25) Data Sanitization

*Baselines: Not in a baseline*

When transferring information between different security domains, sanitize data to minimize [Selection (one or more): delivery of malicious content, command and control of malicious code, malicious code augmentation, and steganography-encoded data; spillage of sensitive information] in accordance with [Assignment: organization-defined policy].

<details>
<summary>Discussion and assessment objectives for AC-4(25)</summary>

Data sanitization is the process of irreversibly removing or destroying data stored on a memory device (e.g., hard drives, flash memory/solid state drives, mobile devices, CDs, and DVDs) or in hard copy form.

Determine if when transferring information between different security domains, data is sanitized to minimize [Selection (one or more): delivery of malicious content, command and control of malicious code, malicious code augmentation, and steganography-encoded data; spillage of sensitive information] in accordance with [Assignment: organization-defined policy].

**Examine:** Information flow enforcement policy; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with information flow enforcement responsibilities; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing information flow enforcement functions.

</details>

<a id="ac-4.26"></a>

### AC-4(26) Audit Filtering Actions

*Baselines: Not in a baseline*

When transferring information between different security domains, record and audit content filtering actions and results for the information being filtered.

<details>
<summary>Discussion and assessment objectives for AC-4(26)</summary>

Content filtering is the process of inspecting information as it traverses a cross-domain solution and determines if the information meets a predefined policy. Content filtering actions and the results of filtering actions are recorded for individual messages to ensure that the correct filter actions were applied. Content filter reports are used to assist in troubleshooting actions by, for example, determining why message content was modified and/or why it failed the filtering process. Audit events are defined in AU-2 . Audit records are generated in AU-12.

Determine if:

- **AC-04(26)[01]** when transferring information between different security domains, content-filtering actions are recorded and audited;
- **AC-04(26)[02]** when transferring information between different security domains, results for the information being filtered are recorded and audited.

**Examine:** Information flow enforcement policy; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with information flow enforcement responsibilities; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing information flow enforcement functions; mechanisms implementing content filtering; mechanisms recording and auditing content filtering.

</details>

<a id="ac-4.27"></a>

### AC-4(27) Redundant/Independent Filtering Mechanisms

*Baselines: Not in a baseline*

When transferring information between different security domains, implement content filtering solutions that provide redundant and independent filtering mechanisms for each data type.

<details>
<summary>Discussion and assessment objectives for AC-4(27)</summary>

Content filtering is the process of inspecting information as it traverses a cross-domain solution and determines if the information meets a predefined policy. Redundant and independent content filtering eliminates a single point of failure filtering system. Independence is defined as the implementation of a content filter that uses a different code base and supporting libraries (e.g., two JPEG filters using different vendors’ JPEG libraries) and multiple, independent system processes.

Determine if when transferring information between security domains, implemented content filtering solutions provide redundant and independent filtering mechanisms for each data type.

**Examine:** Information flow enforcement policy; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with information flow enforcement responsibilities; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing information flow enforcement functions.

</details>

<a id="ac-4.28"></a>

### AC-4(28) Linear Filter Pipelines

*Baselines: Not in a baseline*

When transferring information between different security domains, implement a linear content filter pipeline that is enforced with discretionary and mandatory access controls.

<details>
<summary>Discussion and assessment objectives for AC-4(28)</summary>

Content filtering is the process of inspecting information as it traverses a cross-domain solution and determines if the information meets a predefined policy. The use of linear content filter pipelines ensures that filter processes are non-bypassable and always invoked. In general, the use of parallel filtering architectures for content filtering of a single data type introduces bypass and non-invocation issues.

Determine if when transferring information between security domains, a linear content filter pipeline is implemented that is enforced with discretionary and mandatory access controls.

**Examine:** Information flow enforcement policy; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with information flow enforcement responsibilities; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing information flow enforcement functions; mechanisms implementing linear content filters.

</details>

<a id="ac-4.29"></a>

### AC-4(29) Filter Orchestration Engines

*Baselines: Not in a baseline*

When transferring information between different security domains, employ content filter orchestration engines to ensure that:

- **(a)** Content filtering mechanisms successfully complete execution without errors; and
- **(b)** Content filtering actions occur in the correct order and comply with [Assignment: organization-defined policy].

<details>
<summary>Discussion and assessment objectives for AC-4(29)</summary>

Content filtering is the process of inspecting information as it traverses a cross-domain solution and determines if the information meets a predefined security policy. An orchestration engine coordinates the sequencing of activities (manual and automated) in a content filtering process. Errors are defined as either anomalous actions or unexpected termination of the content filter process. This is not the same as a filter failing content due to non-compliance with policy. Content filter reports are a commonly used mechanism to ensure that expected filtering actions are completed successfully.

Determine if:

- **AC-04(29)(a)** when transferring information between security domains, content filter orchestration engines are employed to ensure that content-filtering mechanisms successfully complete execution without errors;
- **AC-04(29)(b)**
  - **AC-04(29)(b)[01]** when transferring information between security domains, content filter orchestration engines are employed to ensure that content-filtering actions occur in the correct order;
  - **AC-04(29)(b)[02]** when transferring information between security domains, content filter orchestration engines are employed to ensure that content-filtering actions comply with [Assignment: organization-defined policy].

**Examine:** Information flow enforcement policy; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with information flow enforcement responsibilities; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing information flow enforcement functions; mechanisms implementing content filter orchestration engines.

</details>

<a id="ac-4.30"></a>

### AC-4(30) Filter Mechanisms Using Multiple Processes

*Baselines: Not in a baseline*

When transferring information between different security domains, implement content filtering mechanisms using multiple processes.

<details>
<summary>Discussion and assessment objectives for AC-4(30)</summary>

The use of multiple processes to implement content filtering mechanisms reduces the likelihood of a single point of failure.

Determine if when transferring information between security domains, content-filtering mechanisms using multiple processes are implemented.

**Examine:** Information flow enforcement policy; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with information flow enforcement responsibilities; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing information flow enforcement functions; mechanisms implementing content filtering.

</details>

<a id="ac-4.31"></a>

### AC-4(31) Failed Content Transfer Prevention

*Baselines: Not in a baseline*

When transferring information between different security domains, prevent the transfer of failed content to the receiving domain.

<details>
<summary>Discussion and assessment objectives for AC-4(31)</summary>

Content that failed filtering checks can corrupt the system if transferred to the receiving domain.

Determine if when transferring information between different security domains, the transfer of failed content to the receiving domain is prevented.

**Examine:** Information flow enforcement policy; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with information flow enforcement responsibilities; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing information flow enforcement functions.

</details>

<a id="ac-4.32"></a>

### AC-4(32) Process Requirements for Information Transfer

*Baselines: Not in a baseline*

When transferring information between different security domains, the process that transfers information between filter pipelines:

- **(a)** Does not filter message content;
- **(b)** Validates filtering metadata;
- **(c)** Ensures the content associated with the filtering metadata has successfully completed filtering; and
- **(d)** Transfers the content to the destination filter pipeline.

<details>
<summary>Discussion and assessment objectives for AC-4(32)</summary>

The processes transferring information between filter pipelines have minimum complexity and functionality to provide assurance that the processes operate correctly.

Determine if:

- **AC-04(32)(a)** when transferring information between different security domains, the process that transfers information between filter pipelines does not filter message content;
- **AC-04(32)(b)** when transferring information between different security domains, the process that transfers information between filter pipelines validates filtering metadata;
- **AC-04(32)(c)** when transferring information between different security domains, the process that transfers information between filter pipelines ensures that the content with the filtering metadata has successfully completed filtering;
- **AC-04(32)(d)** when transferring information between different security domains, the process that transfers information between filter pipelines transfers the content to the destination filter pipeline.

**Examine:** Information flow enforcement policy; procedures addressing information flow enforcement; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with information flow enforcement responsibilities; system/network administrators; organizational personnel with information security responsibilities.

**Test:** Mechanisms implementing information flow enforcement functions; mechanisms implementing content filtering.

</details>

*Withdrawn enhancements: AC-4(16), AC-4(18).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for AC-4</summary>

Determine if approved authorizations are enforced for controlling the flow of information within the system and between connected systems based on [Assignment: organization-defined information flow control policies].

**Examine:** Access control policy; information flow control policies; procedures addressing information flow enforcement; security architecture documentation; privacy architecture documentation; system design documentation; system configuration settings and associated documentation; system baseline configuration; list of information flow authorizations; system audit records; system security plan; privacy plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security and privacy architecture development responsibilities; organizational personnel with information security and privacy responsibilities; system developers.

**Test:** Mechanisms implementing information flow enforcement policy.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

AC-4 controls where information may go, not who may see it. You write down the rules for which flows are allowed within the system and to and from connected systems, and the system enforces them. AC-3 decides whether a user may open a record; AC-4 decides whether that record may leave the network segment, the cloud account or the organization.

**Common implementations.** Firewalls, cloud security groups and network policies that deny by default and allow only approved flows. Web and outbound proxies that restrict which destinations systems and users can reach. Data loss prevention on email, web and cloud storage that blocks or flags sensitive content leaving the organization. Rules in a service mesh or API gateway for flows between application components. For systems that exchange information across security domains, NIST's discussion points to cross-domain solutions, which AC-4(3) to AC-4(32) describe. The [boundary protection standard](/templates/standards/boundary-protection-standard/) holds the traffic rules, and interconnection agreements under [CA-3](/controls/ca/ca-3/) approve flows to other systems. The [Access Control policy](/templates/policies/ac/) names both as the information flow control policies.

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Information flow control policies | The boundary protection standard and the approved interconnection agreements |

**Evidence assessors ask for.**

- The boundary and data flow diagrams in the [system security plan](/templates/plans/system-security-plan/), showing every external connection and managed interface
- The traffic flow policy for each managed interface: each rule with its source, destination, service, business reason and owner
- Firewall, security group or proxy configuration exported from the devices, which the assessor compares with the documented rules
- Interconnection agreements for connected systems, matched against the rules that allow those flows
- Data loss prevention rules and a sample of recent alerts, where the system uses them
- A test, often a scan or connection attempt from outside the allowed sources, showing a flow that is not allowed is blocked

**Inheritance.** The enterprise perimeter, the outbound proxy and the cloud landing zone's network controls are usually common controls. The system still owns the flows inside its own boundary, the rules for its own components, and the list of connected systems, so AC-4 is usually a hybrid control.

**Common findings.**

- Rules that allow any source, any destination or any service, added during a deployment and never removed.
- Rules with no documented reason or owner, so no one can say whether they are still needed.
- Flat internal networks where every server can reach every other server.
- Cloud storage or databases reachable from the internet outside any managed interface.
- Diagrams that no longer match the configuration.

**Enhancements in the Moderate baseline.** None. High adds [AC-4(4)](#ac-4.4), flow control of encrypted information: the Access Control policy's typical values are the boundary firewalls and data loss prevention service as the flow control mechanisms, and decrypting the information at the boundary for inspection as the method. Decrypting traffic exposes its content to the inspection devices, so record which traffic is exempt, such as health or banking sites, and who approved the exemptions.

**Federal systems** (as of September 2026). Federal civilian agencies secure their external network connections under CISA's [Trusted Internet Connections (TIC) 3.0](https://www.cisa.gov/resources-tools/programs/trusted-internet-connections-tic) program, which CISA developed under OMB M-19-26, Update to the TIC Initiative. The boundary protection standard's federal section asks each system to show which TIC 3.0 security capabilities its managed interfaces provide and which it inherits.
