---
publishDate: 2026-05-01T00:00:00Z
author: iulink team
title: Expose a local port through any NAT in 60 seconds
excerpt: No router config. No cloud VM. One command gets your local service reachable from anywhere — here's how it works under the hood.
image: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2070&q=80
category: Tutorials
tags:
  - tunnels
  - homelab
  - self-hosting
metadata:
  canonical: https://iulink.com/expose-local-port-through-nat
---

Running a service locally — a Jupyter notebook, a Minecraft server, a private Grafana dashboard — and wanting to reach it from outside your home network used to mean one of three things: configure port forwarding on your router, rent a VPS and set up a reverse proxy, or pay for a managed tunnel service and accept their data path.

iulink adds a fourth option: use a **broker** (ours or your own) to punch through NAT, and connect by service name instead of IP address.

## Install in one line

```bash
curl -fsSL https://get.iulink.com | sh
```

This drops a single `iulink` binary into `~/.local/bin`. No root required. No package manager. No daemon installed system-wide.

## Expose a port

```bash
iulink expose --port 8080 --name myservice
```

This creates a **serverlet** — a named tunnel endpoint that listens on port 8080 on your machine and registers with your broker. The broker doesn't see your traffic; it only brokers the connection handshake.

## Connect from anywhere

On any other machine:

```bash
iulink connect --service iulink://myservice
```

iulink resolves `myservice` through the broker, negotiates a direct path if both peers support QUIC, and falls back to a relayed path if they don't. Either way, the connection appears as a local port on the connecting machine.

## What the broker actually does

The broker is the trust boundary — it authenticates peers and resolves service names. It does **not** forward your data by default. Once both peers are authenticated, iulink attempts a direct QUIC connection (similar to QUIC hole-punching). The relay only carries traffic if the direct path fails.

This means:

- **Low latency**: direct peer-to-peer when possible
- **No data lock-in**: your traffic doesn't pass through iulink's infrastructure
- **Bring your own broker**: run `iulink broker` on any VPS and point your clients at it

## Grouping services with hubs

```bash
iulink hub create homelab
iulink expose --port 8080 --name grafana --hub homelab
iulink expose --port 9090 --name prometheus --hub homelab
```

A **hub** is a logical group and lifecycle container. Share the hub with a teammate and they can reach all services inside it by name.

## What's next

- [Pricing](/pricing) — community tier is free, no credit card required
- [Why iulink](/why-iulink) — how iulink compares to ngrok, Cloudflare Tunnel, and raw WireGuard
- [Docs](https://docs.iulink.com) — full CLI reference
