---
title: 'MA-7 Field Maintenance'
description: 'NIST SP 800-53 Rev. 5 control MA-7, Field Maintenance: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'MA-7 Field Maintenance'
  order: 7
control:
  id: MA-7
  family: MA
  baselines: []
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Not in a baseline | Organization | None |

**Related controls:** [MA-2](/controls/ma/ma-2/), [MA-4](/controls/ma/ma-4/), [MA-5](/controls/ma/ma-5/)

## Control statement

Restrict or prohibit field maintenance on [Assignment: organization-defined systems or system components] to [Assignment: organization-defined trusted maintenance facilities].

<details>
<summary>NIST discussion</summary>

Field maintenance is the type of maintenance conducted on a system or system component after the system or component has been deployed to a specific site (i.e., operational environment). In certain instances, field maintenance (i.e., local maintenance at the site) may not be executed with the same degree of rigor or with the same quality control checks as depot maintenance. For critical systems designated as such by the organization, it may be necessary to restrict or prohibit field maintenance at the local site and require that such maintenance be conducted in trusted facilities with additional controls.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for MA-7</summary>

Determine if field maintenance on [Assignment: organization-defined systems or system components] are restricted or prohibited to [Assignment: organization-defined trusted maintenance facilities].

**Examine:** Maintenance policy; procedures addressing field maintenance; system design documentation; system configuration settings and associated documentation; maintenance records; diagnostic records; system security plan; other relevant documents or records..

**Interview:** Organizational personnel with system maintenance responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for managing field maintenance; mechanisms implementing, supporting, and/or managing field maintenance; mechanisms for strong authentication of field maintenance diagnostic sessions; mechanisms for terminating field maintenance sessions and network connections.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->
