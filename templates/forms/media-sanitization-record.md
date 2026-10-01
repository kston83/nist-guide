---
title: Media Sanitization Record
type: form
description: The record of each item of system media sanitized or destroyed before disposal, release out of organizational control or reuse, with its approval, custody, method, verification and final disposition, plus the sanitization methods by media type, the equipment tests and the outside providers, as SP 800-53 MP-6 requires.
controls: [mp-6, mp-6.1, mp-6.2, mp-6.3, mp-4, mp-5, ma-2, ma-3.3]
status: draft
stage: operate
typical:
  mp-06_odp.01: 'all digital and non-digital system media, including the storage in workstations, laptops, servers, network devices, mobile devices, printers, copiers and scanners'
  mp-06_odp.02: 'all digital and non-digital system media, including media returned to a lessor or vendor, exchanged under warranty, or sent off site for repair'
  mp-06_odp.03: 'all digital system media reissued to another user, system or part of the organization'
  mp-06_odp.04: 'purge or destroy for digital media, and destruction by shredding or incineration for paper and other hard copy, as the media sanitization procedure sets out following NIST SP 800-88 Rev. 2'
  mp-06_odp.05: 'purge, including cryptographic erase where its conditions are met, as the media sanitization procedure sets out following NIST SP 800-88 Rev. 2; media that cannot be purged and verified are destroyed, not released'
  mp-06_odp.06: 'clear for reuse within the same system or by users with the same access authorizations, and purge for other reuse, as the media sanitization procedure sets out following NIST SP 800-88 Rev. 2'
  mp-06.02_odp.01: 'at least annually, and after the equipment is repaired, relocated or updated'
  mp-06.02_odp.02: 'at least annually, and when a new media type, tool or sanitization provider is introduced'
---

:::guidance
Keep one record for each system, or one for the organization if a central team sanitizes media for every system. The register at the end holds one row per item, with the details [NIST SP 800-88 Rev. 2](https://csrc.nist.gov/pubs/sp/800/88/r2/final), Guidelines for Media Sanitization (September 2025, final; as of October 2026), lists for a certificate of sanitization in section 4.6, and the details NIST's MP-6(1) discussion lists; a tracking application that scans each item's bar code can hold the same fields. SP 800-88 Rev. 2 notes that sanitization records show only that the recorded items were sanitized: to show that every item was, track media from the time they enter service, which is why the register starts at removal from service and section 5 compares it with the component inventory. The register is also downloadable as a CSV file. Assessors sample retired and replaced components from the inventory and the [maintenance log](/templates/forms/maintenance-log/), and ask for each one's row here.
:::

| System or scope | Record owner | Last updated | Updated by |
| --- | --- | --- | --- |
| {{fill:system name and identifier, or the organization}} | {{fill:name and title}} | {{fill:date}} | {{fill:name and title}} |

## 1. How to use this record

- Sanitize {{param:mp-06_odp.01}} before disposal, using {{param:mp-06_odp.04}} (MP-6a).
- Sanitize {{param:mp-06_odp.02}} before release out of organizational control, using {{param:mp-06_odp.05}} (MP-6a).
- Sanitize {{param:mp-06_odp.03}} before release for reuse, using {{param:mp-06_odp.06}} (MP-6a).
- Open a row when an item is removed from service, before it is sanitized. Keep the item in a controlled area, and on the media inventory, until its row is closed (MP-4b).
- Get the system owner's review and approval before the action, after confirming that no records retention requirement or legal hold still applies to the information (MP-6(1), SI-12).
- Choose the method from section 2, by the confidentiality of the information. Keep media that cannot be sanitized by that method, such as a failed drive, and destroy them; never release them (MP-6a, MA-2d).
- Record transport to an outside provider in the "Custody" field, with the courier and tracking number (MP-5).
- After sanitization, verify the result: inspect destruction remnants, or check the tool's completion status and any errors. Accept the result, or repeat it with a different technique or a stronger method, and record which (MP-6(1)).
- Record the final disposition: reused, returned, recycled or destroyed, with the date (MP-6(1)).
- Keep this record for {{fill:retention period from the organization's records retention schedule}}.

| Field | What to record |
| --- | --- |
| Record ID | A unique ID for the item, also written in the maintenance log or change record that removed it |
| Item | Manufacturer, model, serial number, and the organization's asset or property number |
| Media type | Hard copy, or the kind of storage: hard disk drive, solid state drive, flash media, tape, optical disc, mobile device, or the embedded storage of a printer, copier or network device |
| Source | The system, component and user it came from, and the files or information it held |
| Category | The confidentiality impact level of the information on it (optional in SP 800-88 Rev. 2; required here to choose the method) |
| Reason | Disposal, release out of organizational control (lease return, warranty exchange, off-site repair, donation or sale), or reuse |
| Reviewed and approved | Who reviewed and approved the action, the date, and that records retention was checked (MP-6(1)) |
| Custody | Where the item was held while waiting, and any transport: who carried it, the courier and tracking number, and the dates (MP-4, MP-5) |
| Method | Clear, purge or destroy |
| Technique and tool | For example overwrite, block erase, cryptographic erase, degauss, disintegrate, incinerate or shred, with the tool or equipment and its version |
| Performed by | Name, title and organization of the person who sanitized it, with the date, time and location |
| Verification | How the result was verified, by whom (name, title, contact), the date, and whether it was accepted or repeated |
| Final disposition | Reused (where), returned (to whom), recycled or destroyed, with the date and any provider certificate number |

## 2. Sanitization methods by media type

:::guidance
This table is the core of the media sanitization procedure the Media Protection policy requires. SP 800-88 Rev. 2 defines the methods and points to the IEEE 2883 series for the technique that achieves each method on each kind of storage; the device's manufacturer documents its sanitize commands. Purge is preferred to clear where it is available. Degaussing does not work on flash or solid state storage. Cryptographic erase depends on the conditions in SP 800-88 Rev. 2 section 3.2, so record for each media type whether its encryption meets them.
:::

| Media type | Disposal | Release out of organizational control | Reuse | Verification |
| --- | --- | --- | --- | --- |
| {{fill:for example laptop and workstation solid state drives}} | {{fill:for example cryptographic erase or the drive's sanitize command, then destruction by a provider}} | {{fill:for example purge by the drive's sanitize command}} | {{fill:for example purge, or clear for reuse within the same system}} | {{fill:for example tool completion status and error report}} |
| {{fill:for example server and array hard disk drives}} | {{fill:method and technique}} | {{fill:method and technique}} | {{fill:method and technique}} | {{fill:verification}} |
| {{fill:for example mobile devices}} | {{fill:for example cryptographic erase through device management, then factory reset}} | {{fill:method and technique}} | {{fill:method and technique}} | {{fill:verification}} |
| {{fill:for example printers, copiers and network devices with storage}} | {{fill:for example the manufacturer's sanitize function, or removal and destruction of the storage}} | {{fill:method and technique}} | {{fill:method and technique}} | {{fill:verification}} |
| {{fill:for example backup tapes}} | {{fill:for example destruction by a provider}} | {{fill:not released}} | {{fill:method and technique}} | {{fill:verification}} |
| {{fill:for example cloud storage and virtual disks}} | {{fill:for example cryptographic erase by destroying customer-managed keys}} | {{fill:not applicable}} | {{fill:not applicable}} | {{fill:for example key destruction record from the key management service}} |
| {{fill:for example paper and other hard copy}} | {{fill:for example cross-cut shredding or incineration}} | {{fill:not released}} | {{fill:not applicable}} | {{fill:for example inspection of the output}} |

## 3. Sanitization equipment and tests

:::guidance
Test each piece of sanitization equipment, and each procedure, on the schedule below; MP-6(2) requires it for High systems, and it is good practice for any system with its own sanitization equipment. A qualified outside party may perform the tests, as NIST's discussion of MP-6(2) allows. Before connecting a portable storage device to a High system, sanitize it with a nondestructive technique when it is new or its chain of custody cannot be shown (MP-6(3)); record that here as a row of the register with the reason "reuse".
:::

- Test sanitization equipment {{param:mp-06.02_odp.01}}, and sanitization procedures {{param:mp-06.02_odp.02}}, to ensure the intended sanitization is achieved (MP-6(2)).
- Take equipment that fails a test out of use until it passes, and sanitize again the media it processed since its last passing test (MP-6(2)).

| Equipment or procedure | Model or version | Location | Test performed | Tested by | Date | Result | Next test |
| --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:for example degausser, shredder, sanitization software, or a procedure from section 2}} | {{fill:model, serial number or version}} | {{fill:location}} | {{fill:for example field strength check, particle size check, read-back of a sample}} | {{fill:name or provider}} | {{fill:date}} | {{fill:pass or fail, and action taken}} | {{fill:date}} |

## 4. Sanitization and destruction providers

- An outside provider sanitizes or destroys media only under a contract that sets the method, requires a certificate listing each item by serial number, and allows the organization to witness or verify the work (MP-6a).
- Media travel to the provider protected and tracked as the Media Protection policy requires for transport (MP-5).

| Provider | Services and methods | Contract or agreement | On site or off site | Certificate per item | Equipment test results received | Last review |
| --- | --- | --- | --- | --- | --- | --- |
| {{fill:provider}} | {{fill:services and methods}} | {{fill:reference and end date}} | {{fill:on site or off site}} | {{fill:yes or no}} | {{fill:date of last results}} | {{fill:date}} |

## 5. Record reviews

The system owner reviews the register at least quarterly against the component inventory (CM-8) and the maintenance log's removed and replaced components, so that every item removed from service has a row and every open row is progressing (MP-6(1)).

| Review date | Reviewed by | Period covered | Items checked against the inventory and maintenance log | Open rows and missing items | Actions | Next review |
| --- | --- | --- | --- | --- | --- | --- |
| {{fill:date}} | {{fill:name and title}} | {{fill:dates}} | {{fill:number}} | {{fill:items, or "none"}} | {{fill:actions, or "none"}} | {{fill:date}} |

:::federal
Under [32 CFR 2002.14(f)](https://www.ecfr.gov/current/title-32/section-2002.14), controlled unclassified information (CUI) may be destroyed when the agency no longer needs it and NARA-approved records disposition schedules allow, and must be made unreadable, indecipherable and irrecoverable, by any method specifically required by law, regulation or Government-wide policy for that CUI, or otherwise by the destruction guidance in NIST SP 800-53 and SP 800-88, or a method approved for classified national security information under 32 CFR 2001.47. [NIST SP 800-88 Rev. 2](https://csrc.nist.gov/pubs/sp/800/88/r2/final), section 3.2, states that federal agencies must use encryption modules validated to the current FIPS 140 standard for assurance in cryptographic erase on self-encrypting drives. As of October 2026.

- For each item that held CUI, the register's "Reviewed and approved" field shall record that the agency no longer needs the information and the records disposition schedule that allows its destruction, and the "Method" field shall name the 32 CFR 2002.14(f)(2) basis for the method used. (MP-6(1))
- Where cryptographic erase is the technique, the "Technique and tool" field shall record the FIPS 140 validation of the encryption module. (MP-6b)

:::

## Register

| Record ID | Item | Media type | Source | Category | Reason | Reviewed and approved | Custody | Method | Technique and tool | Performed by | Verification | Final disposition |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{fill:ID}} | {{fill:manufacturer, model, serial number, asset number}} | {{fill:media type}} | {{fill:system, component, user, information held}} | {{fill:low, moderate or high}} | {{fill:disposal, release or reuse, and why}} | {{fill:name, date, retention checked}} | {{fill:where held, transport and tracking}} | {{fill:clear, purge or destroy}} | {{fill:technique, tool and version}} | {{fill:name, title, organization, date, time, location}} | {{fill:method, by whom, date, accepted or repeated}} | {{fill:outcome, date, certificate number}} |
