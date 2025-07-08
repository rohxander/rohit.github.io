---
layout: page
title: Wi‑Fi Enterprise Security Application
description: Implemented WPA2/WPA3 Enterprise (TTLS/TLS/PEAP) with FreeRADIUS integration on WFI32 modules.
img: assets/img/tls_enterprise.png
importance: 2
category: Industrial
related_publications: false
---

At Microchip Technology, I led the design and implementation of Wi‑Fi Enterprise security on WFI32 modules, enabling seamless WPA2/WPA3 connections via TLS‑based EAP (TTLS/PEAP) and FreeRADIUS integration.

### Objective

Enable WFI32 modules to authenticate securely over enterprise networks using 802.1X EAP methods, suitable for corporate environments with username/password or certificate-based security.

### Key Workflows

- **Enabled TLS, TTLS, and PEAP** using MPLAB Harmony’s Wi‑Fi System Service :contentReference[oaicite:1]{index=1}
- **Configured station-mode EAP** with settings for CA certificate, server name, user identity, and private key :contentReference[oaicite:2]{index=2}
- Integrated **FreeRADIUS** to support both EAP‑TTLS/MSCHAPv2 and EAP‑PEAP tunnels :contentReference[oaicite:3]{index=3}
- Set up TLS handshake (Phase 1) and user authentication (Phase 2), including certificate‑based EAP‑TLS and username/password EAP‑TTLS/PEAP flows :contentReference[oaicite:4]{index=4}

### My Role

- Developed Harmony configuration scripts for station-mode enterprise setups
- Generated and loaded CA/client certificates into firmware as C arrays or PEM/DER mappings
- Automated connection tests through secure exchange and PMK validation
- Documented FreeRADIUS server-side steps (OpenSSL cert creation, `eap` config) :contentReference[oaicite:5]{index=5}
- Performed debugging via UART logs, accrediting successful EAP exchanges and IP assignment

### Outcome

Successfully demonstrated WFI32 module connections under multiple enterprise scenarios (EAP‑TTLS, EAP‑PEAP, EAP‑TLS), verified with test server logs and network access confirmation.

### Tools & Platforms

- **Hardware**: WFI32E01/E02 modules, MPLAB Harmony–supported Wi‑Fi System Service
- **Software**: MPLAB X IDE, Harmony 3, FreeRADIUS, OpenSSL, wpa_supplicant
- **Debugging**: UART logs, network packet captures, TLS handshake traces

---

Let me know if you'd like to include images of the Wi‑Fi System Service UI, RADIUS daemon logs, or network trace snippets next.
::contentReference[oaicite:6]{index=6}
