---
title: Component Inventory
type: form
description: The register of every hardware, software, firmware, virtual and cloud component inside one system's boundary, with its owner, administrator and assigned user, reconciled against the system inventory and against discovery and vulnerability scans so that unauthorized components are found, as SP 800-53 CM-8 and CM-8(3) require.
controls: [cm-8, cm-8.1, cm-8.2, cm-8.3, cm-8.4, pe-16, mp-7]
status: draft
stage: core
typical:
  cm-08_odp.01: 'name, type, manufacturer and model, serial number or asset tag, software version, location, network address, owner and administrator'
  cm-08_odp.02: at least quarterly
  cm-8.2_prm_1: asset discovery and endpoint management tools that feed the inventory
  cm-8.3_prm_1: 'network access control, asset discovery scans and endpoint management tools'
  cm-08.03_odp.04: 'continuously, and at least weekly by scan'
  cm-08.03_odp.05: 'disable network access by unauthorized components, and notify the security operations team'
  cm-08.04_odp: role
---

:::guidance
Keep one inventory for each system. It lists the components inside that system's boundary; the [system inventory](/templates/forms/system-inventory/) lists the systems themselves. You cannot protect what you have not counted: vulnerability scanning, patching, configuration scanning and log coverage are all measured against this list, so assessors compare it with a discovery scan, a vulnerability scan and the cloud provider's resource list, and look for components in one and not the other. [NIST SP 800-128](https://csrc.nist.gov/pubs/sp/800/128/upd1/final) (August 2011, with updates as of October 10, 2019; current as of October 2026), section 3.1.2, says each component belongs to the boundary of one system only, lists the data elements typically kept for each, and recommends automated discovery, with some fields, such as owner, user and configuration item, entered by hand. In practice the register is usually a report from an asset management or endpoint management tool; it meets this form as long as it holds the fields below and the reconciliations are recorded. Other families rely on it too: the Physical and Environmental Protection policy records arriving components here before they are connected and issued laptops against their user (PE-16), and the Media Protection policy records each issued portable storage device with its owner (MP-7). The register at the end is also downloadable as a CSV file.
:::

| System | System owner | Inventory tool or location | Last reviewed | Reviewed by |
| --- | --- | --- | --- | --- |
| {{fill:system name and identifier, as in the system inventory}} | {{fill:name and title}} | {{fill:tool, or this register}} | {{fill:date}} | {{fill:name and title}} |

## 1. How to use this inventory

- List every component within the system's authorization boundary: physical and virtual servers, end-user devices, network and security devices, storage, operating systems, firmware, software, container images, cloud resources and services the organization configures, and issued portable storage devices (CM-8a.1, a.2).
- Record each component once, in this system only. A component shared by several systems belongs to the system whose owner is responsible for it, and the others reference it (CM-8a.3).
- Record components at the level of detail needed to track and report on them, for example each server and laptop individually and each software product by version (CM-8a.4).
- Record {{param:cm-08_odp.01}} for each component (CM-8a.5).
- Update the inventory as part of each installation, removal and system update, through the change request that makes it (CM-8(1)).
- Review and update the whole inventory {{param:cm-08_odp.02}}, and record the review in section 5 (CM-8b).
- Keep disposed components in the register with the status "disposed", the date and the media sanitization record ID, so their history supports audits (MP-6).

| Field | What to record |
| --- | --- |
| Inventory ID | A unique, permanent ID for the component |
| Component name | Host name, device name or product name |
| Type | For example physical server, virtual machine, laptop, network device, mobile device, portable storage device, operating system, application, firmware, container image, cloud resource |
| Manufacturer and model | The manufacturer and model, or the publisher and product for software |
| Serial number or asset tag | The serial number, asset tag, or cloud resource ID |
| Software and version | The operating system, firmware or software version, with the product identifier (CPE) where the tools provide it |
| Configuration item | The configuration item in the system's Configuration Management Plan |
| Secure configuration | The benchmark it follows from the baseline configuration standard |
| Location | The building and room, or the cloud provider, account and region |
| Network address | The IP address, host name or MAC address, as the component has them |
| Owner | The role and organizational unit responsible for the component |
| Administrator | The role responsible and accountable for administering it (CM-8(4)) |
| Assigned user | For a laptop, mobile device or portable storage device issued to a person: that person and the date issued (PE-16, MP-7) |
| Status | Received (not yet connected), in service, issued, spare, under maintenance, or disposed |
| Received or added | The date the component arrived or was added, and the change request ID |
| Vendor support ends | The date the vendor stops providing security updates (SA-22) |
| Last seen | The date discovery or endpoint management last saw the component |

## 2. Receiving and issuing components

- Record an arriving component with the status "received" once it has been checked against the purchase order or shipping record and for signs of tampering in the delivery area, and before it is connected to any network (PE-16a).
- Connect it only after it has been configured to its secure baseline and its record is complete, then change the status to "in service" (CM-6b, CM-8(1)).
- Record each laptop, mobile device and portable storage device issued to a person with that person as the assigned user and the date issued. Devices recorded this way may leave and return with their user without a record of each trip (PE-16a, MP-7b).
- Record the return of each issued device when the person transfers or leaves, using the [onboarding, transfer and termination checklist](/templates/forms/onboarding-transfer-and-termination-checklist/) (PS-4, PS-5).
- Record components leaving for maintenance in the [maintenance log](/templates/forms/maintenance-log/), and set the status to "under maintenance" until they return (MA-2).

## 3. Reconciliation and unauthorized components

- Compare the inventory with the [system inventory](/templates/forms/system-inventory/) at each review, to confirm the system's boundary and that no component is recorded under another system (CM-8a.3, PM-5).
- Compare the inventory with discovery scans, endpoint management reports, the cloud provider's resource lists and the vulnerability scan's list of hosts found, {{param:cm-08.03_odp.04}}, to detect the presence of unauthorized hardware, software and firmware components (CM-8(3)(a)).
- Detection uses {{param:cm-8.3_prm_1}} (CM-8(3)(a)).
- When an unauthorized component is detected, {{param:cm-08.03_odp.05}}; then remove it, or add it through a change request if it should stay (CM-8(3)(b)).
- Investigate inventory entries the scans did not find: a component that is missing, switched off or out of the scans' reach is recorded as such, so vulnerability scans are not reported as complete when they are not (RA-5).
- Record each reconciliation in the table below.

| Date | Sources compared | Found by the sources, not in the inventory | In the inventory, not found by the sources | Duplicates, or recorded in another system | Actions taken | By |
| --- | --- | --- | --- | --- | --- | --- |
| {{fill:date}} | {{fill:for example discovery scan, endpoint management, cloud resource list, vulnerability scan, system inventory}} | {{fill:components, or none}} | {{fill:entries, or none}} | {{fill:entries, or none}} | {{fill:for example network access disabled, removed, added by change request ID}} | {{fill:name}} |

:::guidance
SP 800-128 section 3.4 explains why this matters: unapproved components rarely have current patches, are not configured to the approved baseline, and are not assessed or covered by the authorization. Its examples are a test router a technician forgot to remove and a wireless access point set up without consent. Common findings are components that scans find but the inventory does not list, cloud resources and virtual machines missing because the inventory tracks only hardware, and components listed in two systems' inventories.
:::

This paragraph applies to High systems.

- The inventory is kept current, complete, accurate and available using {{param:cm-8.2_prm_1}} (CM-8(2)). It identifies, by {{param:cm-08.04_odp}}, the individuals responsible and accountable for administering each component (CM-8(4)).

## 4. Issued portable storage devices

Each portable storage device the organization issues is a row in the register, with its assigned user. Personally owned devices are never recorded here, because they may not be connected to organizational systems, and a device found with no known owner is turned in, without being connected, to the {{org:security-operations}} (MP-7). The [baseline configuration standard](/templates/standards/baseline-configuration-standard/) blocks portable storage on servers and allows only these issued devices elsewhere.

## 5. Reviews

| Review date | Reviewed by | Components added, removed or corrected since the last review | Issued devices confirmed with their users | Issues and actions | Next review |
| --- | --- | --- | --- | --- | --- |
| {{fill:date}} | {{fill:name and title}} | {{fill:number, with change request IDs}} | {{fill:number confirmed, and any not accounted for}} | {{fill:issues, or none}} | {{fill:date}} |

:::federal
CISA [Binding Operational Directive 23-01](https://www.cisa.gov/news-events/directives/bod-23-01-improving-asset-visibility-and-vulnerability-detection-federal-networks), Improving Asset Visibility and Vulnerability Detection on Federal Networks (October 3, 2022), applies to federal civilian executive branch unclassified information systems, including those operated by another entity on an agency's behalf, but not to national security systems or certain Department of Defense and Intelligence Community systems. It requires automated asset discovery every 7 days, covering at least the entire IPv4 space the agency uses, and vulnerability enumeration across all discovered assets, including roaming devices such as laptops, every 14 days. Results go into the CDM Agency Dashboard within 72 hours of discovery completion, and agencies must be able to run on-demand discovery within 72 hours of a CISA request. Its scope excludes ephemeral assets, such as containers, and third-party-managed software-as-a-service. As of October 2026, it remains in effect.

- For a system within BOD 23-01's scope, automated asset discovery shall run at least every 7 days and cover the IPv4 space the system uses, and its results shall be reconciled with this inventory under section 3. (CM-8(3))
- Every asset found shall be recorded in this inventory or handled as an unauthorized component, so the vulnerability enumeration every 14 days covers every asset BOD 23-01 requires. (CM-8, RA-5)

:::

## Register

| Inventory ID | Component name | Type | Manufacturer and model | Serial number or asset tag | Software and version | Configuration item | Secure configuration | Location | Network address | Owner | Administrator | Assigned user | Status | Received or added | Vendor support ends | Last seen |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:ID}} | {{fill:name}} | {{fill:type}} | {{fill:manufacturer and model}} | {{fill:serial, tag or resource ID}} | {{fill:software and version}} | {{fill:CI ID}} | {{fill:benchmark}} | {{fill:location}} | {{fill:address}} | {{fill:owner}} | {{fill:administrator role}} | {{fill:person and date issued, or none}} | {{fill:status}} | {{fill:date and change request ID}} | {{fill:date}} | {{fill:date}} |
