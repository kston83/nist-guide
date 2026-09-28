---
title: 'Step 6: Monitor'
description: Continuous monitoring, significant change, ongoing authorization and disposal, tasks M-1 to M-7.
sidebar:
  label: '6 Monitor'
  order: 6
---

Monitor keeps the authorization true after it is signed: it watches for changes, reassesses controls on a schedule, keeps the package current and tells the AO when risk moves. Done well, it replaces the three-year reauthorization scramble with ongoing authorization. Source: [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final), section 3.7; [SP 800-137](https://csrc.nist.gov/pubs/sp/800/137/final).

## Tasks

| Task | What it means in practice | Primary role | Output |
| --- | --- | --- | --- |
| M-1 System and environment changes | Track changes to the system, its environment and threats; analyze security and privacy impact | System owner, CCP | Change records, impact analyses |
| M-2 Ongoing assessments | Assess controls at the frequency in the ConMon strategy | Control assessor | Updated assessment results |
| M-3 Ongoing risk response | Act on new findings: remediate, mitigate or seek acceptance | System owner, CCP | Updated POA&M, remediations |
| M-4 Authorization updates | Keep the SSP, SAR and POA&M current | System owner, CCP | Current authorization package |
| M-5 Security and privacy reporting | Report posture to the AO and agency officials on the agreed schedule | System owner, CCP | Status reports |
| M-6 Ongoing authorization | AO reviews current risk and confirms the authorization still holds | AO | Confirmed, changed or withdrawn authorization |
| M-7 System disposal | Retire the system securely | System owner | Disposal records |

## Handling change

Every change gets a security impact analysis before it is made ([CM-4](/controls/cm/cm-4/)). Most changes are routine and flow through configuration management; a significant change sends the affected parts back through the RMF.

![Change handling flow. A proposed change gets an impact analysis. If it is significant, the affected controls are reassessed and the AO decides; if not, it is recorded through configuration management and the SSP is updated. Both paths continue into monitoring until the next change.](/diagrams/change-flow.svg)

The impact analysis, not the size of the change, decides the path: a one-line change that adds a new external connection is significant, while a large routine patch cycle is not.

| Usually significant | Usually routine |
| --- | --- |
| New or changed interconnection or external service | Vendor patches within the approved baseline |
| New information types, new PII or a change in categorization | Adding or removing user accounts |
| Moving hosting (for example, on-premises to cloud) | Configuration changes within documented settings |
| New operating system, platform or major architecture change | Replacing hardware with the same approved model |
| Changes to cryptography or identity services | Minor software version updates with no new functions |
| A threat or vulnerability that changes the risk picture | Scaling capacity within the same design |

Your configuration management plan and the ATO terms define significant change for your system; when in doubt, ask the AODR.

## Ongoing assessment cadence

Frequencies come from the system ConMon strategy (task S-5). The values below are typical, not required.

| Activity | Typical frequency | Controls |
| --- | --- | --- |
| Authenticated vulnerability scans of all components | Weekly to monthly | [RA-5](/controls/ra/ra-5/) |
| Configuration compliance scans (STIG or benchmark) | Monthly | [CM-6](/controls/cm/cm-6/) |
| POA&M review and update | Monthly | [CA-5](/controls/ca/ca-5/) |
| Audit log review | Daily to weekly | [AU-6](/controls/au/au-6/) |
| Privileged and user access review | Quarterly | [AC-2](/controls/ac/ac-2/) |
| Assess a rotating subset of controls | Annually (about one third of controls per year) | [CA-2](/controls/ca/ca-2/), [CA-7](/controls/ca/ca-7/) |
| Contingency plan test and incident response exercise | Annually | [CP-4](/controls/cp/cp-4/), [IR-3](/controls/ir/ir-3/) |
| Penetration test (where required) | Annually | [CA-8](/controls/ca/ca-8/) |
| Policy and procedure review | Annually | The -1 control in each family |
| SSP and inventory review | Annually and on significant change | [PL-2](/controls/pl/pl-2/), [CM-8](/controls/cm/cm-8/) |

## How to apply it

**Automate what changes fast.** Feed scanners, asset inventory and configuration data into dashboards; federal civilian agencies use CISA's Continuous Diagnostics and Mitigation (CDM) program. Manual checks are for slow-changing controls.

**Move to ongoing authorization deliberately.** Under [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), an AO can keep an authorization open-ended once continuous monitoring gives timely, reliable risk data. Agree the triggers with the AO in writing: time-based (monthly status report) and event-based (a significant change, a major incident, a high-risk finding past due).

**Keep the package living.** Update the SSP when the system changes, not at reauthorization. A package that is a year stale is a finding in itself.

**Plan disposal early (task M-7).** Retirement means sanitizing media under [SP 800-88 Rev. 2](https://csrc.nist.gov/pubs/sp/800/88/r2/final) (September 2025), keeping records per the NARA schedule, closing interconnection agreements, updating systems that inherited controls from this one, retiring the PIA and SORN, removing the system from inventory and notifying the AO.

## Done when (every reporting cycle)

- [ ] Every change since the last cycle has an impact analysis on file
- [ ] Scans and reviews run at the frequencies in the ConMon strategy
- [ ] POA&M updated; overdue items explained or escalated
- [ ] SSP, inventory and diagrams match the running system
- [ ] Status report delivered to the AO
- [ ] ATO terms and conditions met, including required POA&M closures

## Common findings

- Significant changes made without impact analysis or AO notice.
- POA&M dates moved repeatedly with no milestone progress.
- Scans cover only part of the inventory.
- ATO expired because nobody tracked the termination date.
- Decommissioned systems still listed as active, or never sanitized.

## Key references

[SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) section 3.7, [SP 800-137](https://csrc.nist.gov/pubs/sp/800/137/final), [SP 800-137A](https://csrc.nist.gov/pubs/sp/800/137/a/final), [SP 800-128](https://csrc.nist.gov/pubs/sp/800/128/upd1/final), [SP 800-88 Rev. 2](https://csrc.nist.gov/pubs/sp/800/88/r2/final), [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf).
