---
control: sr-9
title: 'Tamper resistance and detection'
status: draft
stage: mature
---

:::guidance
SR-9 and SR-9(1) are in the High baseline only. NIST's SR-9 discussion says anti-tamper technologies protect against reverse engineering, modification and substitution, and that strong identification combined with tamper resistance or tamper detection is essential during distribution and in use. SP 800-161 Rev. 1 says to apply tamper resistance and detection to critical components at a minimum, using the criticality analysis (RA-9) to find them.
:::

- The {{org:ciso}} shall implement a tamper protection program for the system, system components and system services. (SR-9)
- The program shall cover, at a minimum, the components the criticality analysis (RA-9) identifies as critical. (SR-9)
- The program shall combine strong identification of components, such as serial numbers recorded in the component inventory and cryptographic device identities where components support them, with tamper resistance and tamper detection. (SR-9)
- The program shall protect components in distribution, with tamper-evident packaging and tracked or controlled delivery, and in use, with tamper-evident seals or chassis intrusion detection on critical hardware and verification of firmware and software integrity at startup or installation (SI-7). (SR-9)
- A component that shows evidence of tampering shall be kept out of service and reported as an incident under the incident response plan. (SR-9)
