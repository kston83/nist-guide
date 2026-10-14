---
control: ir-8.1
title: Breaches
status: draft
stage: core
---

:::guidance
IR-8(1) is in the Privacy baseline only. It adds three things to the incident response plan for breaches involving personally identifiable information: a process to decide whether to notify individuals or other organizations, including oversight bodies; an assessment of the harm, embarrassment, inconvenience or unfairness to affected individuals, with ways to reduce it; and a list of the privacy requirements that apply. NIST's discussion notes that laws, regulations and policies may set specific breach procedures, including notice, standards of harm and mitigation. [NIST SP 800-122](https://csrc.nist.gov/pubs/sp/800/122/final) (April 2010), section 5, recommends building breach handling into the existing incident response plan, planning in advance how, when and to whom notice is given, and deciding when to offer remedial help such as credit monitoring. The [Incident Response Plan](/templates/plans/incident-response-plan/) has a breach section for these, and section 5.8 of the [incident handling playbook](/templates/procedures/incident-handling-playbook/) carries them out.
:::

- For breaches involving personally identifiable information, the incident response plan shall include a process, led by the {{org:privacy-official}}, to determine whether notice to individuals or other organizations, including oversight organizations, is needed. (IR-8(1)(a))
- The plan shall include an assessment process to determine the extent of the harm, embarrassment, inconvenience or unfairness to affected individuals, and the mechanisms available to mitigate those harms. (IR-8(1)(b))
- The plan shall identify the privacy requirements that apply to breaches, including each law, regulation, policy and contract that sets a notice, a standard of harm or a mitigation duty, with the notice each requires, to whom and by when. (IR-8(1)(c))
- The {{org:incident-response-team}} shall notify the {{org:privacy-official}} of every incident that involves, or may involve, personally identifiable information as soon as it is identified, and the {{org:privacy-official}} shall take part in its response. (IR-8(1))
- The {{org:privacy-official}} shall record each harm assessment, notification decision and mitigation decision in the incident record, with who decided and when. (IR-8(1))
- The {{org:privacy-official}} shall review the list of applicable privacy requirements each time the plan is reviewed, and when a law, regulation or contract changes. (IR-8(1)(c))

:::federal
The Privacy Act requires each agency that maintains a system of records to establish appropriate administrative, technical and physical safeguards to protect against threats or hazards to the records' security or integrity "which could result in substantial harm, embarrassment, inconvenience, or unfairness to any individual on whom information is maintained" ([5 U.S.C. § 552a(e)(10)](https://www.govinfo.gov/link/uscode/5/552a?link-type=html), United States Code, 2024 edition), the standard of harm IR-8(1)(b) repeats. [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.f(7), requires incident response capabilities and mechanisms that include notification to affected individuals; section 4.f(9) requires agencies to report incidents to OMB, DHS, the CIO, the senior agency official for privacy, their inspectors general and general counsel, law enforcement and Congress in accordance with procedures issued by OMB; and section 4.j(2)(e) requires incident response procedures for systems operated on the agency's behalf, including timelines for notification of affected individuals. As of October 2026. <!-- TODO(verify): which OMB memorandum currently sets agency breach response plans, breach notification and major incident criteria (and whether OMB M-17-12 is still in effect); not confirmed at an OMB page on 2026-10-14, so none is named. -->

- The plan's list of applicable privacy requirements shall include the Privacy Act for each system of records, and the OMB procedures for reporting incidents and notifying affected individuals that OMB Circular A-130, Appendix I, sections 4.f(7) and 4.f(9), refer to. (IR-8(1)(c))
- The {{org:privacy-official}} shall ensure that contracts and agreements for systems operated on the agency's behalf set timelines for reporting breaches to the agency and for notifying affected individuals, as OMB Circular A-130, Appendix I, section 4.j(2)(e), requires. (IR-8(1))

:::
