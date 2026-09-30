---
control: sa-4.10
title: 'Use of approved PIV products'
status: draft
stage: operate
---

:::guidance
Personal Identity Verification (PIV) is the U.S. federal smart card credential, and the FIPS 201 Approved Products List names the products tested against its standard. An organization outside the federal government meets this enhancement where it implements PIV or PIV-interoperable capability; if the system implements none, record the enhancement as not applicable in the system security plan with that reason, as for IA-2(12).
:::

- Where the system implements Personal Identity Verification (PIV) capability, the {{org:system-owner}} shall employ only information technology products on the FIPS 201-approved products list for that capability. (SA-4(10))
- The {{org:system-owner}} shall record the approved products list entry for each PIV product in the system's component inventory, and replace a product that is moved to the removed products list. (SA-4(10))

:::federal
[FIPS 201-3](https://csrc.nist.gov/pubs/fips/201-3/final), Personal Identity Verification (PIV) of Federal Employees and Contractors (January 2022), states in its preamble (item 7) that FIPS 201 compliance of PIV components and subsystems is provided through products and services from the General Services Administration's approved products and services list, and in Appendix A.5 that products evaluated and approved under GSA's FIPS 201 Evaluation Program are placed on the [FIPS 201 Approved Products List](https://www.idmanagement.gov/fips201/) to promote the procurement of conformant products by agencies. As of September 2026.

- The {{org:system-owner}} shall acquire PIV card products, readers and physical access control system products for the system only from the FIPS 201 Approved Products List that GSA maintains. (SA-4(10))

<!-- TODO(verify): FAR 4.1302(a) as codified on acquisition.gov (FAC 2026-01, effective March 13, 2026) reads "In order to comply with FIPS PUB 201, agencies must purchase only approved personal identity verification products and services." Confirm whether the Revolutionary FAR Overhaul deviation text for Part 4 keeps this before citing it here. -->

:::
