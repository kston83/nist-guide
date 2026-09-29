---
control: si-8
title: 'Spam protection'
status: draft
stage: operate
---

:::guidance
Spam protection sits in the email gateway or the cloud email service's filtering, and in some cases in web or messaging gateways. Publishing SPF, DKIM and DMARC records for the organization's own domains helps other organizations reject mail that spoofs them.
:::

- The {{org:system-owner}} shall employ spam protection mechanisms at system entry and exit points to detect and act on unsolicited messages. (SI-8a)
- The {{org:system-owner}} shall update spam protection mechanisms when new releases are available, in accordance with the organization's configuration management policy and procedures. (SI-8b)

:::federal
CISA [BOD 18-01](https://www.cisa.gov/news-events/directives/bod-18-01-enhance-email-and-web-security), Enhance Email and Web Security (October 16, 2017), requires federal civilian agencies to have valid SPF and DMARC records for all second-level agency domains, to set a DMARC policy of "reject" for all second-level domains and mail-sending hosts, and to add the address the directive designates (`reports@dmarc.cyber.dhs.gov`) as a recipient of DMARC aggregate reports. As of September 2026.

- The {{org:system-owner}} shall ensure each second-level domain the system uses has valid SPF and DMARC records, with a DMARC policy of reject for the domain and its mail-sending hosts, as CISA BOD 18-01 requires. (SI-8a)
- The {{org:system-owner}} shall include `reports@dmarc.cyber.dhs.gov` as a recipient of the domain's DMARC aggregate reports, as CISA BOD 18-01 requires. (SI-8a)

:::
