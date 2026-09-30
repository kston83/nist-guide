---
title: 'MA-6 Timely Maintenance'
description: 'NIST SP 800-53 Rev. 5 control MA-6, Timely Maintenance: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'MA-6 Timely Maintenance'
  order: 6
control:
  id: MA-6
  family: MA
  baselines: [Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | Organization | 3 (0 in a baseline) |

**Related controls:** [CM-8](/controls/cm/cm-8/), [CP-2](/controls/cp/cp-2/), [CP-7](/controls/cp/cp-7/), [RA-7](/controls/ra/ra-7/), [SA-15](/controls/sa/sa-15/), [SI-13](/controls/si/si-13/), [SR-2](/controls/sr/sr-2/), [SR-3](/controls/sr/sr-3/), [SR-4](/controls/sr/sr-4/)

## Control statement

Obtain maintenance support and/or spare parts for [Assignment: organization-defined system components] within [Assignment: organization-defined time period] of failure.

<details>
<summary>NIST discussion</summary>

Organizations specify the system components that result in increased risk to organizational operations and assets, individuals, other organizations, or the Nation when the functionality provided by those components is not operational. Organizational actions to obtain maintenance support include having appropriate contracts in place.

</details>

## Control enhancements

<a id="ma-6.1"></a>

### MA-6(1) Preventive Maintenance

*Baselines: Not in a baseline*

Perform preventive maintenance on [Assignment: organization-defined system components] at [Assignment: organization-defined time intervals].

<details>
<summary>Discussion and assessment objectives for MA-6(1)</summary>

Preventive maintenance includes proactive care and the servicing of system components to maintain organizational equipment and facilities in satisfactory operating condition. Such maintenance provides for the systematic inspection, tests, measurements, adjustments, parts replacement, detection, and correction of incipient failures either before they occur or before they develop into major defects. The primary goal of preventive maintenance is to avoid or mitigate the consequences of equipment failures. Preventive maintenance is designed to preserve and restore equipment reliability by replacing worn components before they fail. Methods of determining what preventive (or other) failure management policies to apply include original equipment manufacturer recommendations; statistical failure records; expert opinion; maintenance that has already been conducted on similar equipment; requirements of codes, laws, or regulations within a jurisdiction; or measured values and performance indications.

Determine if preventive maintenance is performed on [Assignment: organization-defined system components] at [Assignment: organization-defined time intervals].

**Examine:** Maintenance policy; procedures addressing system maintenance; service provider contracts; service-level agreements; maintenance records; list of system components requiring preventive maintenance; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for preventive maintenance; mechanisms supporting and/or implementing preventive maintenance.

</details>

<a id="ma-6.2"></a>

### MA-6(2) Predictive Maintenance

*Baselines: Not in a baseline*

Perform predictive maintenance on [Assignment: organization-defined system components] at [Assignment: organization-defined time intervals].

<details>
<summary>Discussion and assessment objectives for MA-6(2)</summary>

Predictive maintenance evaluates the condition of equipment by performing periodic or continuous (online) equipment condition monitoring. The goal of predictive maintenance is to perform maintenance at a scheduled time when the maintenance activity is most cost-effective and before the equipment loses performance within a threshold. The predictive component of predictive maintenance stems from the objective of predicting the future trend of the equipment's condition. The predictive maintenance approach employs principles of statistical process control to determine at what point in the future maintenance activities will be appropriate. Most predictive maintenance inspections are performed while equipment is in service, thus minimizing disruption of normal system operations. Predictive maintenance can result in substantial cost savings and higher system reliability.

Determine if predictive maintenance is performed on [Assignment: organization-defined system components] at [Assignment: organization-defined time intervals].

**Examine:** Maintenance policy; procedures addressing system maintenance; service provider contracts; service-level agreements; maintenance records; list of system components requiring predictive maintenance; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for predictive maintenance; mechanisms supporting and/or implementing predictive maintenance.

</details>

<a id="ma-6.3"></a>

### MA-6(3) Automated Support for Predictive Maintenance

*Baselines: Not in a baseline*

Transfer predictive maintenance data to a maintenance management system using [Assignment: organization-defined automated mechanisms].

<details>
<summary>Discussion and assessment objectives for MA-6(3)</summary>

A computerized maintenance management system maintains a database of information about the maintenance operations of organizations and automates the processing of equipment condition data to trigger maintenance planning, execution, and reporting.

Determine if predictive maintenance data is transferred to a maintenance management system using [Assignment: organization-defined automated mechanisms].

**Examine:** Maintenance policy; procedures addressing system maintenance; service provider contracts; service-level agreements; maintenance records; list of system components requiring predictive maintenance; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Automated mechanisms implementing the transfer of predictive maintenance data to a computerized maintenance management system; operations of the computer maintenance management system.

</details>

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for MA-6</summary>

Determine if maintenance support and/or spare parts are obtained for [Assignment: organization-defined system components] within [Assignment: organization-defined time period] of failure.

**Examine:** Maintenance policy; procedures addressing system maintenance; service provider contracts; service-level agreements; inventory and availability of spare parts; system security plan; other relevant documents or records.

**Interview:** Organizational personnel with system maintenance responsibilities; organizational personnel with acquisition responsibilities; organizational personnel with information security responsibilities; system/network administrators.

**Test:** Organizational processes for ensuring timely maintenance.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

MA-6 asks you to obtain maintenance support or spare parts for the components you name within a set time of their failure. NIST's MA-6 discussion has the organization name the components whose failure increases risk to operations, assets, individuals, other organizations or the Nation, and names having contracts in place as one way to obtain support. The point is that a failed component can be fixed in time to meet the system's recovery goals.

**Common implementations.** Take the components and the time from the [business impact analysis](/templates/reports/business-impact-analysis/) and the [contingency plan](/templates/plans/contingency-plan/), so the maintenance support and the recovery time objective agree ([CP-2](/controls/cp/cp-2/), [CP-10](/controls/cp/cp-10/)). For each of those components, keep a maintenance contract whose response and repair times meet the recovery time objective, or keep spare parts on hand, and record the contracts in the contingency plan's Appendix B, the vendor contact list. Review the contracts and spares each time the contingency plan is reviewed, and before a contract expires. For cloud services, the provider's service level agreement covers its components; record that in the [external service review](/templates/forms/external-service-review/).

A component whose vendor no longer offers support cannot meet MA-6. Plan its replacement as [SA-22](/controls/sa/sa-22/) requires, and set support periods in new contracts through the [acquisition security requirements](/templates/standards/acquisition-security-requirements/).

**Organization-defined parameters.** Typical values, which your organization may set differently:

| Parameter | Typical value |
| --- | --- |
| System components that need timely maintenance support | The components that support essential mission and business functions, as the business impact analysis identifies them, and the security components that protect them |
| Time period to obtain support or spare parts after failure | The recovery time objective set in the contingency plan from the business impact analysis |

The time period is word for word the value the CP clauses use for CP-2(3), CP-7, CP-8 and CP-10, so every recovery commitment points to the same recovery time objective. In the [Maintenance policy](/templates/policies/ma/), the system owner keeps the contracts or spares.

**Evidence assessors ask for.**

- The list of components that need timely maintenance, traced to the business impact analysis
- Current maintenance contracts for those components, showing response and repair times
- The spare parts inventory, where spares are used instead
- The contingency plan's vendor contact list, and the recovery time objectives the contract times are compared against
- Records of the last review of contracts and spares

**Inheritance.** For cloud services, the provider's own support of its infrastructure is inherited, through its service level agreement and authorization. Enterprise support contracts for common hardware and software are often common controls. The system owns naming its critical components and checking that support covers them within its recovery time objective, so MA-6 is usually a hybrid control.

**Common findings.**

- Support contracts that lapsed, or components past end of support with no replacement plan.
- Contract response times, such as next business day, longer than the recovery time objective they are meant to meet.
- Critical components, often security appliances, left off the list.
- Spares on the list that cannot be found, or that do not match the installed hardware.

**Enhancements in the Moderate baseline.** MA-6 has no enhancements in a baseline. [MA-6(1)](#ma-6.1) preventive maintenance, [MA-6(2)](#ma-6.2) predictive maintenance and [MA-6(3)](#ma-6.3) automated support for predictive maintenance are in no baseline.
