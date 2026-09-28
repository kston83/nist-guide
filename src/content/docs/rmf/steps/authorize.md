---
title: 'Step 5: Authorize'
description: The authorization package, risk determination and decision, tasks R-1 to R-5, with decision types and approaches.
sidebar:
  label: '5 Authorize'
  order: 5
---

Authorize is the moment a senior official, the AO, formally accepts the system's remaining risk on behalf of the organization. The AO's question is not "are all controls satisfied" but "is the residual risk acceptable for this mission, given what we know." Source: [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final), section 3.6 and Appendix F.

## Tasks

| Task | What it means in practice | Primary role | Output |
| --- | --- | --- | --- |
| R-1 Authorization package | Assemble the executive summary, SSP and privacy plan, SAR and POA&M | System owner, CCP, SAOP | Authorization package |
| R-2 Risk analysis and determination | Weigh the findings, threats and mission value to decide the risk to operations, assets, individuals and the Nation | AO or AODR | Risk determination |
| R-3 Risk response | Decide how to handle each significant risk: accept, avoid, mitigate, share or transfer | AO | Risk responses |
| R-4 Authorization decision | Issue the decision with terms, conditions and duration | AO | Authorization decision document |
| R-5 Authorization reporting | Report the decision, key weaknesses and residual risk to agency officials | AO or AODR | Recorded decision in the GRC tool and agency reports |

## Decision types

| Decision | Meaning | Source |
| --- | --- | --- |
| Authorization to operate (ATO) | The system may operate; residual risk accepted, usually with terms and conditions | SP 800-37 |
| Common control authorization | Controls a provider offers for inheritance are authorized | SP 800-37 |
| Authorization to use (ATU) | An agency accepts and uses another organization's authorization, typically a shared or cloud service | SP 800-37 |
| Denial of authorization | Risk is unacceptable; the system may not operate, or must stop | SP 800-37 |
| ATO with conditions | ATO tied to specific conditions, such as closing named POA&M items by a date | DoDI 8510.01 |
| Interim authority to test (IATT) | Limited permission to test in an operational environment before an ATO | DoDI 8510.01 |

## Authorization approaches

| Approach | When it fits |
| --- | --- |
| Initial authorization | First decision for a new system, based on a full assessment |
| Ongoing authorization | The ATO stays in force because continuous monitoring gives the AO current risk data; no fixed end date |
| Reauthorization | A new full decision after a set period or a major change, when ongoing authorization is not in place |
| Joint authorization | Several AOs share a system and co-sign one decision |
| Type authorization | One authorization for identical copies deployed in several places, such as a standard kiosk or sensor |
| Leveraged authorization | Relying on another organization's package, then issuing your own ATU |

## How to apply it

**Write the executive summary for a busy executive.** One or two pages: what the system does, its category, how many controls were assessed, how many weaknesses remain by risk level, the top risks in plain language, and what the system owner recommends. AOs decide from this page and dig into the SAR only where it points.

**Brief, don't just submit.** A 30-minute AO briefing with the system owner, ISSO and assessor resolves most questions faster than rounds of comments. Bring the top five risks, their POA&M dates and any risk acceptance requests.

**Separate risk acceptance from the POA&M.** Weaknesses the organization will not fix need an explicit, signed risk acceptance with a review date. Keeping them on the POA&M with ever-moving dates hides them.

**Read the terms and conditions.** The decision letter usually sets an authorization termination date or ongoing-authorization terms, required POA&M closures, reporting frequency and what counts as a significant change. These become your Monitor to-do list.

**Know the duration rules.** [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf) does not require a fixed three-year cycle and encourages ongoing authorization where continuous monitoring is mature. Many agencies still set a three-year termination date by policy.

## Done when

- [ ] Package complete: executive summary, SSP and privacy plan, SAR, POA&M, plus required attachments
- [ ] Risk acceptance requests written for items that will not be fixed
- [ ] AO briefing held and questions answered
- [ ] Signed authorization decision document with terms, conditions and duration
- [ ] Decision recorded in the GRC tool and reported (task R-5)
- [ ] Terms and conditions copied into the Monitor plan

## Common findings

- Package sent to the AO with the SAR still in draft.
- Executive summary that lists controls instead of risks.
- High-risk weaknesses with no mitigation or risk acceptance.
- Leveraged cloud authorization with no agency ATU, or a customer responsibility matrix no one reviewed.

## Key references

[SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) section 3.6 and Appendix F, [SP 800-39](https://csrc.nist.gov/pubs/sp/800/39/final) (risk response), [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf) Appendix I, [DoDI 8510.01](https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/851001p.pdf).
