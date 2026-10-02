---
control: pe-2
title: 'Physical access authorizations'
status: draft
stage: operate
typical:
  pe-02_odp: 'at least quarterly for areas that contain system components, such as data centers, server rooms, wiring closets and media storage areas, and at least annually for the rest of the facility'
---

:::guidance
PE-2 covers who may enter the facility where the system resides; PE-3 enforces it at the doors. NIST's PE-2 discussion says physical access authorizations apply to employees and visitors, that people with permanent credentials are not visitors, and that credentials include ID badges, identification cards and smart cards, with their strength set by applicable laws and policies. Areas designated as publicly accessible may not need an authorization. The [physical access list](/templates/forms/physical-access-list/) holds the list, the credential issued, the approval and each review. Where the system runs entirely in a cloud service or a provider's data center, the provider meets PE-2 for its facility and the system security plan records it as inherited; the organization still applies PE-2 to its own offices and any rooms that hold its equipment. Assessors compare the list with recent departures and transfers, so tie removals to the [onboarding, transfer and termination checklist](/templates/forms/onboarding-transfer-and-termination-checklist/).
:::

- The {{org:facilities-manager}} shall develop, approve and maintain a list of individuals with authorized access to each facility where the system resides, showing for each person the areas they may enter. (PE-2a)
- Physical access shall be granted only on a request from the individual's supervisor, approved by the {{org:facilities-manager}} and, for areas that contain system components, also by the {{org:system-owner}}. (PE-2a)
- The {{org:facilities-manager}} shall issue an authorization credential, such as an identification badge or access card, to each individual on the list, and record the credential against their entry. (PE-2b)
- The {{org:facilities-manager}} shall review the access list detailing authorized facility access by individuals {{param:pe-02_odp}}, with the supervisors or area owners confirming that each person still needs the access. (PE-2c)
- The {{org:facilities-manager}} shall remove individuals from the facility access list, and disable their credentials, when access is no longer required, and for a termination within the time the Personnel Security Policy sets for disabling system access (PS-4). (PE-2d)
- When an individual transfers, the {{org:facilities-manager}} shall remove physical access the new position does not need as part of the transfer actions (PS-5). (PE-2d)

:::federal
[FIPS 201-3](https://csrc.nist.gov/pubs/fips/201-3/final) (January 2022) defines the Personal Identity Verification (PIV) Card as the common identity credential for federal employees and contractors for access to federally controlled facilities and information systems (section 1.2), and requires the PIV Card to be terminated when, among other circumstances, a federal employee separates from federal service or a contractor no longer needs access to federal buildings or systems (section 2.9.4). As of October 2026.

- For federal employees and contractors who hold a PIV Card, the authorization credential for access to a federally controlled facility shall be that PIV Card, registered in the physical access control system; anyone else receives a temporary or visitor credential that cannot be mistaken for a PIV Card. (PE-2b)
- When a PIV Card is terminated under FIPS 201-3 section 2.9.4, the {{org:facilities-manager}} shall remove its registration from the physical access control system. (PE-2d)

:::
