---
control: au-8
title: Time stamps
status: draft
stage: core
typical:
  au-08_odp: one second or finer
---

- The {{org:system-owner}} shall ensure the system uses internal system clocks to generate time stamps for audit records. (AU-8a)
- The {{org:system-owner}} shall ensure audit record time stamps meet a granularity of {{param:au-08_odp}} and use Coordinated Universal Time, a fixed offset from it, or include the local offset in the time stamp. (AU-8b)
