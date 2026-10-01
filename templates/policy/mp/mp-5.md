---
control: mp-5
title: 'Media transport'
status: draft
stage: operate
typical:
  mp-05_odp.01: 'all digital and non-digital media containing information not approved for public release'
  mp-05_odp.02: 'encryption of digital media under the encryption and key management standard, and sealed, tamper-evident packaging or locked containers'
  mp-05_odp.03: 'transport only by authorized personnel or by a courier service with tracking and a signature on delivery, and a chain-of-custody record from release to receipt'
---

:::guidance
MP-5 is in the Moderate and High baselines. NIST's MP-5 discussion names cryptography and locked containers as transport protections, and describes accountability as restricting transport to authorized personnel and tracking or obtaining records of the media as they move, to prevent and detect loss, destruction or tampering. Couriers may be external to the organization. Common cases are backup media going to the alternate storage site (CP-6, CP-9), drives going to a destruction provider, and media sent to another organization under an information exchange agreement. Keep the transport records with the system's records; for drives sent for destruction, record the transport in the [media sanitization record](/templates/forms/media-sanitization-record/).
:::

- The {{org:system-owner}} shall protect and control {{param:mp-05_odp.01}} during transport outside of controlled areas using {{param:mp-05_odp.02}} and {{param:mp-05_odp.03}}. (MP-5a)
- Digital media shall be encrypted before they leave a controlled area, as the encryption and key management standard requires for removable media, and the key or password shall not travel with the media. (MP-5a)
- The {{org:system-owner}} shall maintain accountability for system media during transport, so that each item can be traced from its release to its receipt. (MP-5b)
- The sender shall confirm receipt of each shipment, and shall report a shipment that does not arrive when expected, or arrives with its packaging opened or damaged, as a security incident under the incident response plan (IR-6). (MP-5b)
- The {{org:system-owner}} shall document each transport of system media: the media and their identifiers, who released them, the carrier, the recipient, the tracking number where there is one, and the dates of release and receipt. (MP-5c)
- The {{org:system-owner}} shall designate the personnel authorized to release, carry and receive system media, and shall use external couriers only under a contract or agreement that requires tracking and a signature on delivery. (MP-5d)

:::federal
Under [32 CFR 2002.14(d)](https://www.ecfr.gov/current/title-32/section-2002.14), authorized holders sending controlled unclassified information (CUI) may use the United States Postal Service, any commercial delivery service, or interoffice or interagency mail; should use in-transit automated tracking and accountability tools; and must mark packages that contain CUI as 32 CFR Part 2002 and the CUI Executive Agent's guidance require (see 32 CFR 2002.20). As of October 2026.

- When shipping media containing CUI, the {{org:system-owner}} shall use the United States Postal Service, a commercial delivery service, or interoffice or interagency mail, with in-transit automated tracking, and shall mark the packages as 32 CFR 2002.14(d) and 2002.20 require. (MP-5a)

:::
