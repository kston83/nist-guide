---
control: mp-6
title: 'Media sanitization'
status: draft
stage: operate
typical:
  mp-06_odp.01: 'all digital and non-digital system media, including the storage in workstations, laptops, servers, network devices, mobile devices, printers, copiers and scanners'
  mp-06_odp.02: 'all digital and non-digital system media, including media returned to a lessor or vendor, exchanged under warranty, or sent off site for repair'
  mp-06_odp.03: 'all digital system media reissued to another user, system or part of the organization'
  mp-06_odp.04: 'purge or destroy for digital media, and destruction by shredding or incineration for paper and other hard copy, as the media sanitization procedure sets out following NIST SP 800-88 Rev. 2'
  mp-06_odp.05: 'purge, including cryptographic erase where its conditions are met, as the media sanitization procedure sets out following NIST SP 800-88 Rev. 2; media that cannot be purged and verified are destroyed, not released'
  mp-06_odp.06: 'clear for reuse within the same system or by users with the same access authorizations, and purge for other reuse, as the media sanitization procedure sets out following NIST SP 800-88 Rev. 2'
---

:::guidance
NIST's MP-6 discussion applies sanitization to all digital and non-digital media subject to disposal or reuse, removable or not, and names the storage in scanners, copiers, printers, notebook computers, workstations, network components and mobile devices. [NIST SP 800-88 Rev. 2](https://csrc.nist.gov/pubs/sp/800/88/r2/final), Guidelines for Media Sanitization (September 2025, final; as of October 2026), defines three methods: clear (logical techniques against simple, non-invasive recovery), purge (recovery infeasible with state-of-the-art laboratory techniques, media possibly reusable) and destroy (recovery infeasible and the media unusable). It says purge should be used instead of clear when possible, and that the decision rests on the confidentiality of the information rather than the type of media; it points to the IEEE 2883 series for technique by media type. For cloud and other virtual storage, it notes that cryptographic erase may be the only purge option. It also advises against shredding or pulverizing storage devices for anything but the lowest security categories, since denser, harder media can survive them; paper can be shredded.

The media sanitization procedure named below is the organization's: a table of the media types in use with the method, technique, tool and verification for each, which the [media sanitization record](/templates/forms/media-sanitization-record/) provides. SP 800-88 Rev. 2 section 4.6 recommends a certificate of sanitization for each item, and the record's register holds those details. Keep the values consistent with the [Maintenance policy](/templates/policies/ma/): equipment leaving for repair is sanitized first (MA-2d), and media that cannot be sanitized, such as a failed drive, stay with the organization.
:::

- The {{org:system-owner}} shall sanitize {{param:mp-06_odp.01}} prior to disposal using {{param:mp-06_odp.04}}. (MP-6a)
- The {{org:system-owner}} shall sanitize {{param:mp-06_odp.02}} prior to release out of organizational control using {{param:mp-06_odp.05}}. (MP-6a)
- The {{org:system-owner}} shall sanitize {{param:mp-06_odp.03}} prior to release for reuse using {{param:mp-06_odp.06}}. (MP-6a)
- The {{org:ciso}} shall maintain a media sanitization procedure that follows NIST SP 800-88 Rev. 2 and names, for each media type in use, the sanitization method (clear, purge or destroy), the technique and tool, and how the result is verified. (MP-6a)
- Before media are sanitized, the {{org:system-owner}} shall confirm that the information on them is not subject to a records retention requirement or legal hold that has not yet been met (SI-12). (MP-6a)
- Storage media that cannot be sanitized by the method the procedure requires, including failed drives, shall be kept within the organization and destroyed, and shall not be released out of organizational control. (MP-6a)
- Each sanitization shall be verified and recorded in the media sanitization record, including the media's identifiers, the method and technique, who performed and verified it, and the date. (MP-6a)
- Where an external provider sanitizes or destroys media, its contract shall specify the method, require a certificate listing each item by serial number, and allow the organization to witness or verify the work. (MP-6a)
- The {{org:system-owner}} shall employ sanitization mechanisms whose strength and integrity are commensurate with the security category of the information, choosing the method by the confidentiality of the information as NIST SP 800-88 Rev. 2 describes. (MP-6b)
- Clear shall be used only for media that remain under organizational control, and then only for reuse within the same system or by users with the same access authorizations, for low-impact information, or for moderate-impact information where the {{org:system-owner}} has accepted the residual risk in writing. (MP-6b)
- Storage devices holding moderate- or high-impact information shall be destroyed by disintegration, incineration or melting, or purged first, rather than only shredded or pulverized. (MP-6b)
- Cryptographic erase shall be used only where the media's encryption and key management meet the conditions in NIST SP 800-88 Rev. 2 section 3.2, and the keys are managed under the encryption and key management standard (SC-12). (MP-6b)

:::federal
Under [32 CFR 2002.14(f)](https://www.ecfr.gov/current/title-32/section-2002.14), authorized holders may destroy controlled unclassified information (CUI) when the agency no longer needs it and records disposition schedules published or approved by NARA allow. Agencies destroying CUI, including in electronic form, must make it unreadable, indecipherable and irrecoverable, using any destruction method specifically required by law, regulation or Government-wide policy for that CUI; otherwise, the destruction guidance in NIST SP 800-53 and SP 800-88, or a method approved for classified national security information under 32 CFR 2001.47. Under 2002.14(e)(2), when CUI is reproduced on printers, copiers, scanners or fax machines, the equipment must not retain data, or the agency must sanitize it in accordance with NIST SP 800-53. [NIST SP 800-88 Rev. 2](https://csrc.nist.gov/pubs/sp/800/88/r2/final), section 3.2, states that federal agencies must use encryption modules validated to the current FIPS 140 standard to have assurance in cryptographic erase on self-encrypting drives. As of October 2026.

- The {{org:system-owner}} shall destroy CUI only when the agency no longer needs it and NARA-approved records disposition schedules allow, and only by a method that 32 CFR 2002.14(f)(2) permits. (MP-6a)
- The {{org:system-owner}} shall ensure printers, copiers, scanners and fax machines used to reproduce CUI do not retain data, or are sanitized in accordance with NIST SP 800-53, as 32 CFR 2002.14(e)(2) requires. (MP-6a)
- Cryptographic erase shall rely only on encryption modules validated to the current FIPS 140 standard. (MP-6b)

:::
