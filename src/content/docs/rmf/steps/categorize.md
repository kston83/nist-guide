---
title: 'Step 1: Categorize'
description: FIPS 199 security categorization, tasks C-1 to C-3, with a worked example and the CNSSI 1253 approach for national security systems.
sidebar:
  label: '1 Categorize'
  order: 1
---

Categorize sets the system's security category, which decides the control baseline and roughly how much the whole ATO will cost. It rates the worst credible impact of losing confidentiality, integrity or availability of the system's information, using [FIPS 199](https://csrc.nist.gov/pubs/fips/199/final). Source: [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final), section 3.2.

## Tasks

| Task | What it means in practice | Primary role | Output |
| --- | --- | --- | --- |
| C-1 System description | Write down what the system is: purpose, users, architecture, boundary, information types, interconnections, life cycle stage, ownership | System owner | System description (usually SSP section 1) |
| C-2 Security categorization | Rate each information type, then the system, for confidentiality, integrity and availability | System owner, information owner | FIPS 199 categorization worksheet |
| C-3 Categorization review and approval | Senior review of the result, including the SAOP for systems with PII | AO or AODR, SAOP | Signed or approved categorization |

## How categorization works

FIPS 199 defines three impact levels. Low means a limited adverse effect on operations, assets or individuals. Moderate means a serious adverse effect. High means a severe or catastrophic effect.

For each information type from task P-12, assign a level to each security objective:

```text
SC(information type) = {(confidentiality, impact), (integrity, impact), (availability, impact)}
```

The system's category takes the highest value for each objective across all its information types. Under FIPS 200, the overall impact level is then the highest of the three objectives, called the high-water mark, and it picks the baseline.

**Worked example (illustrative values).** An employee benefits system holds three information types:

| Information type | Confidentiality | Integrity | Availability | Why |
| --- | --- | --- | --- | --- |
| Benefits management | Moderate | Moderate | Low | Errors or disclosure seriously harm employees; a day of downtime is tolerable |
| Employee PII (SSN, dependents) | Moderate | Moderate | Low | Privacy harm to individuals; raised from the provisional value for aggregation |
| IT infrastructure maintenance | Low | Moderate | Low | Admin data; tampering could disable controls |
| **System** | **Moderate** | **Moderate** | **Low** | Highest per column |

The system category is {(C, Moderate), (I, Moderate), (A, Low)}, the high-water mark is Moderate, and the system uses the SP 800-53B Moderate baseline plus the privacy baseline because it processes PII.

## How to apply it

**Start from provisional values, then adjust.** [SP 800-60 Vol. 2 Rev. 1](https://csrc.nist.gov/pubs/sp/800/60/v2/r1/final) gives provisional levels per information type. Adjust them for aggregation (many records together), critical system functions, legal or regulatory requirements, privacy impact on individuals and mission-specific factors. Record each adjustment and why.

**Only confidentiality of public information can be "not applicable."** Integrity and availability always get a level.

**Resist blanket High.** The High baseline has roughly 30 percent more controls and enhancements than Moderate, plus deeper assessment. Categorize on credible impact and let the AO accept the rationale.

**National security systems (NSS) differ.** NSS use [CNSSI 1253](https://www.cnss.gov/CNSS/issuances/Instructions.cfm) instead of FIPS 199 and 200. CNSSI 1253 keeps confidentiality, integrity and availability separate (for example Moderate-Moderate-Low) with no high-water mark, and controls are selected per objective. DoD systems historically follow this model.

**Get the approval in writing.** Task C-3 is an approval, not a formality. Assessors and AOs look for the AO or AODR sign-off and SAOP review before they accept the baseline.

## Done when

- [ ] System description complete and consistent with the boundary from Prepare
- [ ] Every information type rated for C, I and A with written rationale
- [ ] Adjustments to provisional values recorded
- [ ] System category and high-water mark (or CNSSI 1253 C-I-A values) stated
- [ ] SAOP review done if the system has PII
- [ ] AO or AODR approval recorded in the GRC tool

## Common findings

- Categorizing the system by feel rather than from its information types.
- Ignoring aggregation: one record is Low, a million records is not.
- Different categories in the SSP, the GRC tool and the PIA.
- New data types added in production without re-running categorization (a significant change; see [Monitor](/rmf/steps/monitor/)).

## Key references

[FIPS 199](https://csrc.nist.gov/pubs/fips/199/final), [FIPS 200](https://csrc.nist.gov/pubs/fips/200/final), [SP 800-60 Rev. 1](https://csrc.nist.gov/pubs/sp/800/60/v2/r1/final) and the [Rev. 2 draft](https://csrc.nist.gov/pubs/sp/800/60/r2/iwd), [CNSSI 1253](https://www.cnss.gov/CNSS/issuances/Instructions.cfm), [SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) section 3.2.
