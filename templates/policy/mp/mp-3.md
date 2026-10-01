---
control: mp-3
title: 'Media marking'
status: draft
stage: operate
typical:
  mp-03_odp.01: 'backup media and drives held in automated tape libraries, storage arrays and server enclosures'
  mp-03_odp.02: 'the data center and the media library, where physical access is limited to authorized personnel (PE-3)'
---

:::guidance
MP-3 is in the Moderate and High baselines. Marking means a human-readable label on the media or its container that shows how the information must be handled, as NIST's MP-3 discussion describes. NIST's discussion also says markings are generally not required for media holding only information approved for public release. The exemption in MP-3b suits media that never leave a controlled area and are handled by automated equipment, such as tapes in a tape library; once such media leave, they are marked.
:::

- The {{org:system-owner}} shall mark system media to indicate the distribution limitations, handling caveats and applicable security markings, if any, of the information they contain. (MP-3a)
- Markings shall use the handling labels defined in {{fill:the organization's information classification or handling standard}}, together with any marking that a law, regulation or contract requires for the information. (MP-3a)
- Digital media shall carry the marking on the media themselves where they are large enough, and otherwise on their container. (MP-3a)
- The {{org:system-owner}} shall exempt {{param:mp-03_odp.01}} from marking only while the media remain within {{param:mp-03_odp.02}}, and shall mark them before they leave. (MP-3b)

:::federal
Under [32 CFR 2002.20(a)(1)](https://www.ecfr.gov/current/title-32/section-2002.20), agencies and authorized holders must uniformly and conspicuously apply CUI markings to all controlled unclassified information (CUI), in accordance with 32 CFR Part 2002 and the CUI Registry, unless that part or the CUI Executive Agent specifically permits otherwise. Under 2002.20(a)(7), a missing marking does not exempt an authorized holder from the handling requirements. Under 2002.20(a)(8), when marking CUI individually is impractical because of its quantity or nature, or under a limited marking waiver, authorized holders must make recipients aware of its CUI status by an alternate method that is readily apparent, such as signs in storage areas or on containers. As of October 2026.

- The {{org:system-owner}} shall mark system media containing CUI with CUI markings in accordance with 32 CFR 2002.20 and the CUI Registry. (MP-3a)
- The {{org:system-owner}} shall not apply the MP-3b exemption to media containing CUI unless their CUI status is shown by an alternate marking method that 32 CFR 2002.20(a)(8) permits, such as signs in the storage area or on the container. (MP-3b)

:::
