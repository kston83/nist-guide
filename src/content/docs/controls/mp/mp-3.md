---
title: 'MP-3 Media Marking'
description: 'NIST SP 800-53 Rev. 5 control MP-3, Media Marking: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'MP-3 Media Marking'
  order: 3
control:
  id: MP-3
  family: MP
  baselines: [Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | Organization | None |

**Related controls:** [AC-16](/controls/ac/ac-16/), [CP-9](/controls/cp/cp-9/), [MP-5](/controls/mp/mp-5/), [PE-22](/controls/pe/pe-22/), [SI-12](/controls/si/si-12/)

## Control statement

- **a.** Mark system media indicating the distribution limitations, handling caveats, and applicable security markings (if any) of the information; and
- **b.** Exempt [Assignment: organization-defined types of media exempted from marking] from marking if the media remain within [Assignment: organization-defined controlled areas].

<details>
<summary>NIST discussion</summary>

Security marking refers to the application or use of human-readable security attributes. Digital media includes diskettes, magnetic tapes, external or removable hard disk drives (e.g., solid state, magnetic), flash drives, compact discs, and digital versatile discs. Non-digital media includes paper and microfilm. Controlled unclassified information is defined by the National Archives and Records Administration along with the appropriate safeguarding and dissemination requirements for such information and is codified in 32 CFR 2002 . Security markings are generally not required for media that contains information determined by organizations to be in the public domain or to be publicly releasable. Some organizations may require markings for public information indicating that the information is publicly releasable. System media marking reflects applicable laws, executive orders, directives, policies, regulations, standards, and guidelines.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for MP-3</summary>

Determine if:

- **MP-03a.** system media is marked to indicate distribution limitations, handling caveats, and applicable security markings (if any) of the information;
- **MP-03b.** [Assignment: organization-defined types of media exempted from marking] remain within [Assignment: organization-defined controlled areas].

**Examine:** System media protection policy; procedures addressing media marking; physical and environmental protection policy and procedures; list of system media marking security attributes; designated controlled areas; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system media protection and marking responsibilities; organizational personnel with information security responsibilities.

**Test:** Organizational processes for marking information media; mechanisms supporting and/or implementing media marking.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

MP-3 asks you to mark media so that anyone handling them can see how the information on them must be handled: its distribution limitations, handling caveats and any security markings. NIST's MP-3 discussion defines security marking as human-readable security attributes, and says markings are generally not required for media holding only information that is public or approved for public release. MP-3 is in the Moderate and High baselines, not Low.

The marking scheme comes first. The [Media Protection policy](/templates/policies/mp/) uses the handling labels of an information classification or handling standard that the organization defines, with any marking that a law, regulation or contract requires added where it applies. Keep the scheme short, for example Public, Internal and Confidential, so that people apply it consistently.

**Common implementations.** Removable drives, tapes and optical discs carry a printed label with the handling label, often on the same label as the bar code the media inventory uses. Media too small to label, such as memory cards, are marked on their case. Document templates and the print system put the handling label in the header or footer of printed output. A medium is marked for the most restrictive information it holds. Media in the tape library or in servers and storage arrays in the data center use the exemption in MP-3b, and are marked when they leave, for example when tapes go to the alternate storage site or a failed drive is pulled for destruction.

Markings also have to come off. [NIST SP 800-88 Rev. 2](https://csrc.nist.gov/pubs/sp/800/88/r2/final), Guidelines for Media Sanitization (September 2025, final; as of October 2026), section 4.6, says that when sanitization is validated and lowers the confidentiality level of the media, the markings that show the previous level should be removed ([MP-6](/controls/mp/mp-6/)).

**Organization-defined parameters.** Typical values, from the Media Protection policy, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| Types of media exempted from marking (b) | Backup media and drives held in automated tape libraries, storage arrays and server enclosures |
| Controlled areas where the exemption applies (b) | The data center and the media library, where physical access is limited to authorized personnel (PE-3) |

The exemption suits media that never leave a controlled area and are handled by automated equipment, which no person reads. The policy requires such media to be marked before they leave.

**Evidence assessors ask for.**

- The information classification or handling standard, with each label and what it means for handling
- A sample of removable media, tapes and their containers in storage, checked for markings that match the information on them
- Samples of printed output from the system
- The exempted media types and controlled areas, as recorded in the policy or the [system security plan](/templates/plans/system-security-plan/)
- Transport records for media that left the data center, showing they were marked first ([MP-5](/controls/mp/mp-5/))

**Inheritance.** The handling standard is usually a common control, set once for the organization. Marking the media themselves is the system's job. Physical media inside a cloud provider's data centers are the provider's concern and are covered by its authorization or attestation. MP-3 is usually a hybrid control.

**Common findings.**

- No defined handling labels, so markings are inconsistent or absent.
- Backup tapes sent off site unmarked, under an exemption that applies only inside the data center.
- Removable drives with sensitive information and no label on the drive or its case.
- Markings that understate the information, such as a drive labeled Internal that holds exports of personally identifiable information.
- Sanitized and reissued media that still carry their old markings.

**Enhancements in the Moderate baseline.** MP-3 has no enhancements.

**Federal systems** (as of October 2026). NIST's MP-3 discussion notes that NARA defines controlled unclassified information (CUI) and its safeguarding and dissemination requirements, codified in 32 CFR Part 2002. Under [32 CFR 2002.20(a)(1)](https://www.ecfr.gov/current/title-32/section-2002.20), the markings listed in the CUI Registry are the only markings authorized to designate unclassified information that requires safeguarding or dissemination controls, and agencies and authorized holders must uniformly and conspicuously apply CUI markings to all CUI, unless that part or the CUI Executive Agent specifically permits otherwise. Under 2002.20(a)(7), a missing marking does not exempt an authorized holder from the handling requirements. Under 2002.20(a)(8), when marking CUI individually is impractical because of its quantity or nature, or when the agency has issued a limited CUI marking waiver, authorized holders must make recipients aware of its CUI status by an alternate method that is readily apparent, such as signs in storage areas or on containers. The MP-3 clause's federal block requires CUI markings on media containing CUI, and allows the MP-3b exemption for such media only where an alternate marking permitted by 2002.20(a)(8) shows their CUI status.
