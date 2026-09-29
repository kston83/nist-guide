---
control: sc-7.4
title: 'External telecommunications services'
status: draft
stage: core
typical:
  sc-07.04_odp: 'at least annually, and when the system changes'
---

:::guidance
Control plane traffic is the routing and signaling traffic between networks, such as BGP route announcements. Items (f) to (h) usually fall to the network or internet service team: route filtering, and publishing the organization's address space and routing policy so others can detect hijacked routes.
:::

- The {{org:system-owner}} shall implement a managed interface for each external telecommunication service. (SC-7(4)(a))
- The {{org:system-owner}} shall establish a traffic flow policy for each managed interface. (SC-7(4)(b))
- The {{org:system-owner}} shall protect the confidentiality and integrity of the information transmitted across each interface. (SC-7(4)(c))
- The {{org:system-owner}} shall document each exception to the traffic flow policy with the mission or business need that supports it and the duration of that need. (SC-7(4)(d))
- The {{org:system-owner}} shall review exceptions to the traffic flow policy {{param:sc-07.04_odp}}, and remove exceptions that an explicit mission or business need no longer supports. (SC-7(4)(e))
- The {{org:system-owner}} shall prevent unauthorized exchange of control plane traffic with external networks. (SC-7(4)(f))
- The {{org:system-owner}} shall publish information that enables remote networks to detect unauthorized control plane traffic from internal networks. (SC-7(4)(g))
- The {{org:system-owner}} shall filter unauthorized control plane traffic from external networks. (SC-7(4)(h))
