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
---

<!-- nist:start -->
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
<!-- nist:end -->

<!-- guidance: write below this line -->
