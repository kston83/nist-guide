---
control: ca-2
title: 'Control assessments'
status: draft
stage: operate
typical:
  ca-02_odp.01: 'annually for a subset of controls set by the system''s continuous monitoring strategy, so every control is assessed at least every three years and within the authorization period'
  ca-02_odp.02: 'the authorizing official, the system owner and the Chief Information Security Officer'
---

:::guidance
CA-2 is the formal control assessment: an assessor tests whether each control is implemented correctly, operating as intended and producing the desired outcome. The assessment plan is approved before testing starts, and the assessment report goes to the people who decide on the system's authorization (CA-6). The assessment procedures are usually the objectives and methods (examine, interview, test) in NIST SP 800-53A Rev. 5 ([January 2022](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final), updated by release 5.2.0 in August 2025; current as of September 2026), shown on each control page. After the first authorization, the yearly assessment can reuse results from continuous monitoring (CA-7) that are still current and were obtained with enough independence.
:::

- The {{org:ciso}} shall select, for each assessment, an assessor or assessment team with the skills and technical knowledge the type of assessment and the system's technologies call for. (CA-2a)
- The assessor shall develop an assessment plan that names the controls and control enhancements under assessment. (CA-2b.1)
- The assessment plan shall describe the assessment procedures used to determine control effectiveness. (CA-2b.2)
- The assessment plan shall describe the assessment environment, the assessment team, and the assessment roles and responsibilities. (CA-2b.3)
- The {{org:system-owner}} shall obtain the review and approval of the assessment plan by the authorizing official or the authorizing official's designated representative before the assessment begins. (CA-2c)
- The assessor shall assess the controls in the system and its environment of operation before the system's initial authorization, and {{param:ca-02_odp.01}} after it, to determine whether the controls are implemented correctly, operating as intended and producing the desired outcome with respect to the system's security and privacy requirements. (CA-2d)
- The assessor shall produce an assessment report that documents the results of the assessment, including whether each control assessed is satisfied or other than satisfied, and the evidence for each result. (CA-2e)
- The assessor shall provide the results of each control assessment to {{param:ca-02_odp.02}}. (CA-2f)
- For a system that processes personally identifiable information, the assessor shall also provide the results of the privacy control assessment to the {{org:privacy-official}}. (CA-2f)

:::guidance
Common controls are assessed once by the organization that provides them, and each system that inherits them reuses that assessment. Record each "other than satisfied" result in the system's plan of action and milestones (CA-5), unless the authorizing official accepts the risk (RA-7).
:::

:::federal
The Federal Information Security Modernization Act requires each agency's information security program to include periodic testing and evaluation of the effectiveness of its information security policies, procedures and practices, "to be performed with a frequency depending on risk, but no less than annually", including testing of the management, operational and technical controls of every information system in the agency's inventory, and using automated tools ([44 U.S.C. § 3554(b)(5)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title44-section3554&num=0&edition=prelim)). [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Appendix I, section 4.c(13) and (14), requires agencies to conduct and document assessments of all selected and implemented security and privacy controls, before a system operates and periodically thereafter, at the frequency the agency's information security continuous monitoring and privacy continuous monitoring strategies set. As of September 2026.

- The {{org:ciso}} shall ensure the controls of every system in the agency's system inventory are tested and evaluated at a frequency that depends on risk, and no less than annually, using automated tools where they apply, as 44 U.S.C. § 3554(b)(5) requires. (CA-2d)
- The {{org:ciso}} shall ensure the assessment frequency set under CA-2d is consistent with the agency's information security continuous monitoring and privacy continuous monitoring strategies and its risk tolerance, as OMB Circular A-130, Appendix I, section 4.c(14), requires. (CA-2d)

:::
