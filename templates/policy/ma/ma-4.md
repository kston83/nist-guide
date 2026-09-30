---
control: ma-4
title: 'Nonlocal maintenance'
status: draft
stage: operate
---

:::guidance
Nonlocal maintenance is maintenance or diagnosis by someone who connects over a network, internal or external, rather than being physically present. It is remote access, so the AC-17 requirements apply as well: a managed access control point (AC-17(3)), encryption (AC-17(2)) and remote privileged commands only as AC-17(4) allows. NIST's MA-4 discussion ties strong authentication to IA-2: replay-resistant, multi-factor authenticators, such as a PKI certificate on a token protected by a PIN. The common finding is a vendor's always-on remote support tool or account that nobody approved; enabling a maintenance account only for each approved session and disabling it afterward closes that gap. The [maintenance log](/templates/forms/maintenance-log/) records each session.
:::

- The {{org:system-owner}} shall approve each nonlocal maintenance and diagnostic session before it starts. (MA-4a)
- The {{org:system-owner}} shall ensure each nonlocal maintenance and diagnostic session is monitored while it is in progress, through session supervision or live review of its audit records. (MA-4a)
- The {{org:system-owner}} shall allow the use of nonlocal maintenance and diagnostic tools only as this policy permits and as documented in the system security plan, which shall name each tool and the connection it uses. (MA-4b)
- Nonlocal maintenance connections shall pass through the organization's managed remote access service, and not through a tool or connection that the maintenance provider controls on its own. (MA-4b)
- The {{org:system-owner}} shall ensure nonlocal maintenance and diagnostic sessions are established with strong authentication: multi-factor authentication with a replay-resistant authenticator, as required for network access to the system's accounts (IA-2(1), IA-2(2), IA-2(8)). (MA-4c)
- The {{org:account-manager}} shall keep each account used by an external maintenance provider disabled except during an approved session. (MA-4c)
- The {{org:system-owner}} shall maintain records of each nonlocal maintenance and diagnostic session, including who performed it, when it started and ended, what was done and who approved it. (MA-4d)
- The person performing nonlocal maintenance shall terminate the session and network connections when the maintenance is completed, and the {{org:system-owner}} shall ensure the system also ends them when the approved session ends. (MA-4e)

:::federal
[OMB M-22-09](https://www.whitehouse.gov/wp-content/uploads/2022/01/M-22-09.pdf), Moving the U.S. Government Toward Zero Trust Cybersecurity Principles (January 26, 2022), requires phishing-resistant multi-factor authentication for agency staff, contractors and partners, enforced at the application layer. [OMB M-19-17](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf) (May 21, 2019), Section III, item 2, requires Personal Identity Verification (PIV) credentials, where applicable in accordance with OPM requirements, as the primary means of identification and authentication to Federal information systems by Federal employees and contractors. [OMB M-26-18](https://www.whitehouse.gov/wp-content/uploads/2026/08/M-26-18-Scaling-Use-of-Login.gov-to-Deliver-a-Universal-Sign-on-for-Public-Services.pdf) (August 31, 2026), footnote 5, lists both memoranda as existing OMB policy. CISA [Binding Operational Directive 23-02](https://www.cisa.gov/news-events/directives/binding-operational-directive-23-02), Mitigating the Risk from Internet-Exposed Management Interfaces (June 13, 2023), covers the networked management interfaces of routers, switches, firewalls, VPN concentrators, proxies, load balancers and out-of-band server management interfaces that are reachable from the public internet, but not the management portals and APIs of cloud service offerings. Within 14 days of discovering such an interface, or of notice from CISA, agencies must either make it reachable only from an internal enterprise network or put access to it behind a zero trust policy enforcement point separate from the interface. As of September 2026.

- The {{org:system-owner}} shall require phishing-resistant multi-factor authentication for nonlocal maintenance sessions by agency staff, contractors and partners, as OMB M-22-09 requires, using a PIV or derived PIV credential where the person holds one, as OMB M-19-17 requires. (MA-4c)
- For each device within the scope of BOD 23-02, the {{org:system-owner}} shall ensure its management interface is reachable only from an internal enterprise network, or only through a policy enforcement point separate from the interface, and shall correct any exposed interface within 14 days of its discovery or of notice from CISA. (MA-4b)

:::
