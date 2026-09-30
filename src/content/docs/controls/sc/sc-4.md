---
title: 'SC-4 Information in Shared System Resources'
description: 'NIST SP 800-53 Rev. 5 control SC-4, Information in Shared System Resources: requirement, baselines, enhancements and assessment objectives, with implementation guidance.'
sidebar:
  label: 'SC-4 Information in Shared System Resources'
  order: 4
control:
  id: SC-4
  family: SC
  baselines: [Moderate, High]
guidance: draft
---

<!-- nist:start -->
<!-- markdownlint-disable -->
<!-- Generated from NIST SP 800-53 release 5.2.0 (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->

| Baselines | Implementation level | Enhancements |
| --- | --- | --- |
| Moderate, High | System | 1 (0 in a baseline) |

**Related controls:** [AC-3](/controls/ac/ac-3/), [AC-4](/controls/ac/ac-4/), [SA-8](/controls/sa/sa-8/)

## Control statement

Prevent unauthorized and unintended information transfer via shared system resources.

<details>
<summary>NIST discussion</summary>

Preventing unauthorized and unintended information transfer via shared system resources stops information produced by the actions of prior users or roles (or the actions of processes acting on behalf of prior users or roles) from being available to current users or roles (or current processes acting on behalf of current users or roles) that obtain access to shared system resources after those resources have been released back to the system. Information in shared system resources also applies to encrypted representations of information. In other contexts, control of information in shared system resources is referred to as object reuse and residual information protection. Information in shared system resources does not address information remanence, which refers to the residual representation of data that has been nominally deleted; covert channels (including storage and timing channels), where shared system resources are manipulated to violate information flow restrictions; or components within systems for which there are only single users or roles.

</details>

## Control enhancements

<a id="sc-4.2"></a>

### SC-4(2) Multilevel or Periods Processing

*Baselines: Not in a baseline*

Prevent unauthorized information transfer via shared resources in accordance with [Assignment: organization-defined procedures] when system processing explicitly switches between different information classification levels or security categories.

<details>
<summary>Discussion and assessment objectives for SC-4(2)</summary>

Changes in processing levels can occur during multilevel or periods processing with information at different classification levels or security categories. It can also occur during serial reuse of hardware components at different classification levels. Organization-defined procedures can include approved sanitization processes for electronically stored information.

Determine if unauthorized information transfer via shared resources is prevented in accordance with [Assignment: organization-defined procedures] when system processing explicitly switches between different information classification levels or security categories.

**Examine:** System and communications protection policy; procedures addressing information protection in shared system resources; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer.

**Test:** Mechanisms preventing the unauthorized transfer of information via shared system resources.

</details>

*Withdrawn enhancements: SC-4(1).*

## Assessment objectives (SP 800-53A)

<details>
<summary>Objectives and methods for SC-4</summary>

Determine if:

- **SC-04[01]** unauthorized information transfer via shared system resources is prevented;
- **SC-04[02]** unintended information transfer via shared system resources is prevented.

**Examine:** System and communications protection policy; procedures addressing information protection in shared system resources; system design documentation; system configuration settings and associated documentation; system audit records; system security plan; other relevant documents or records.

**Interview:** System/network administrators; organizational personnel with information security responsibilities; system developer.

**Test:** Mechanisms preventing the unauthorized and unintended transfer of information via shared system resources.

</details>
<!-- markdownlint-restore -->
<!-- nist:end -->

<!-- guidance: write below this line -->

## How to apply it

SC-4 asks you to make sure that when a shared resource, such as memory, storage, a cache or a temporary file, is released and handed to another user, role or process, nothing the previous one left behind is available to the next. NIST's discussion calls this object reuse and residual information protection, and says it applies to encrypted representations of information too. It also sets limits on what SC-4 covers: not information remanence (data that has been nominally deleted, which media sanitization under [MP-6](/controls/mp/mp-6/) addresses), not covert storage or timing channels, and not components that have only one user or role. SC-4 is in the Moderate and High baselines, not Low.

**Common implementations.** Most of SC-4 comes from the platform. Operating systems and hypervisors clear memory pages before giving them to another process or virtual machine, and cloud providers clear storage before reallocating it to another customer. The system owner confirms this from the provider's documentation and covers the shared resources the application manages itself:

- Caches keyed by user or session, so that a page, response or object built for one user is never served to another, and authenticated responses marked not to be stored by shared caches
- Temporary files and directories created per user or per job, with permissions that other users cannot read, and removed when the job ends
- Pooled database connections and worker processes reset between uses, so session variables, temporary tables or security context from one request do not carry into the next
- In applications that serve several customers or organizations, data, caches and queues separated by tenant

**Organization-defined parameters.** SC-4 has no parameters. In the [System and Communications Protection policy](/templates/policies/sc/), the system owner ensures the system prevents unauthorized and unintended information transfer through shared system resources.

**Evidence assessors ask for.**

- The system security plan's description of which shared resources exist and how each is protected, including what is inherited from the operating system, hypervisor or cloud provider
- The provider's documentation or customer responsibility matrix for residual information protection
- Cache configuration, showing cache keys include the user or session and authenticated responses are not stored by shared caches
- Permissions on shared temporary directories
- Penetration test or code review results covering cache and session isolation

**Inheritance.** Protection in the hypervisor, the operating system and the provider's storage is inherited; record it in the inheritance table of the [system security plan](/templates/plans/system-security-plan/), from the provider's customer responsibility matrix, which is the typical answer to the SC decision worksheet's question on inherited protections. The application's own caches, temporary files and pools belong to the system, so SC-4 is usually a hybrid control.

**Common findings.**

- A content delivery network or reverse proxy caching authenticated pages and serving them to other users.
- Shared temporary directories where files one user's job creates can be read by another user.
- Pooled connections or worker processes that keep one request's user context for the next.
- SC-4 marked fully inherited with no look at the shared resources the application itself manages.

**Enhancements in the Moderate baseline.** SC-4 has no enhancements in any baseline. [SC-4(2)](#sc-4.2) multilevel or periods processing is in no baseline; it applies when processing switches between classification levels or security categories. SC-4(1) is withdrawn.
