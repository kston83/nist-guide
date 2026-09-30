---
control: sa-5
title: 'System documentation'
status: draft
stage: operate
typical:
  sa-05_odp.01: 'ask the manufacturer or supplier again and search its published material; where the documentation is essential to operating a control, write it in-house; and record any remaining gap as a risk in the risk register'
  sa-05_odp.02: 'the system owner, the system security officer and the system administrators'
---

:::guidance
Administrator and user documentation is how the people who run and use a system learn to operate its security and privacy functions correctly. NIST's SA-5 discussion names system owners, system security officers and system administrators as the people who need it, and says the organization may need to recreate documentation it cannot obtain when that documentation is essential to operating the controls. Protect documentation that describes vulnerabilities more strictly than the rest.
:::

- The {{org:system-owner}} shall obtain or develop administrator documentation for the system, system component or system service that describes its secure configuration, installation and operation. (SA-5a.1)
- The administrator documentation shall describe the effective use and maintenance of the security and privacy functions and mechanisms. (SA-5a.2)
- The administrator documentation shall describe known vulnerabilities regarding the configuration and use of administrative or privileged functions. (SA-5a.3)
- The {{org:system-owner}} shall obtain or develop user documentation that describes the user-accessible security and privacy functions and mechanisms, and how to use them effectively. (SA-5b.1)
- The user documentation shall describe methods of user interaction that let individuals use the system, component or service more securely and protect individual privacy. (SA-5b.2)
- The user documentation shall describe users' responsibilities for maintaining the security of the system, component or service and the privacy of individuals. (SA-5b.3)
- When documentation is unavailable or does not exist, the {{org:system-owner}} shall document the attempts made to obtain it and {{param:sa-05_odp.01}}. (SA-5c)
- The {{org:system-owner}} shall distribute the documentation to {{param:sa-05_odp.02}}. (SA-5d)
- The {{org:system-owner}} shall protect the documentation according to the system's security category, restricting documentation that describes vulnerabilities to those who need it. (SA-5)

:::federal
[OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.i(6), requires agencies to protect administrator, user and system documentation related to the design, development, testing, operation, maintenance and security of the hardware, firmware and software components of information systems. As of September 2026.

- The {{org:system-owner}} shall protect the administrator, user and system documentation for the system's hardware, firmware and software components, as OMB Circular A-130, Appendix I, section 4.i(6), requires. (SA-5)

:::
