---
layout: page
title: Wi‑Fi Enterprise Security Application
description: Implemented WPA2/WPA3 Enterprise (TTLS/TLS/PEAP) with FreeRADIUS integration on WFI32 modules.
img: assets/img/tls_1_3.png
importance: 2
category: Industrial
related_publications: false
---

### Enterprise Security

The Enterprise mode of Wi-Fi Protected Access (WPA or WPA2 or WPA3) encryption uses 802.1X authentication to provide better security for wireless networks. The Enterprise mode suits all businesses and organizations rather than the Personal or Pre-Shared Key (PSK) mode. In the Enterprise mode, each client generates a unique encryption key for logging into the network, a technique which helps protect from malicious hacking.

IEEE 802.1X

The IEEE 802.1X is a standard for port-based access control. It provides an authentication mechanism for the devices which are on a Local Area Network (LAN) or Wireless Local Area Network (WLAN).

The IEEE 802.1X authentication involves three parties: a supplicant, an authenticator, and an authentication server.

• A supplicant is the client/end user device (station device) which tries to get authenticated by submitting the credentials such as username, password, and digital certificates to an access point (authenticator). For example: a laptop, a mobile phone or the WFI32 (in the Station mode).

• An authenticator is a network access device which collects the authentication credentials from the supplicant, encrypts the credentials and relays those credentials to the authentication server for verification. For example: Ethernet switch or wireless access point.

• An authentication server is a network server which validates the credentials sent by the supplicant based on the information stored in its database and determines whether to allow or prevent network access to the supplicant. An authentication server is typically a host running software supporting the Remote Authentication Dial-In User Service (RADIUS) and Extensible Authentication Protocol (EAP) protocols.

The authentication server guards to protect the network and does not allow the supplicant for the network access unless supplicant identity is validated and authorized.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/WIFI_ENT_1.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

Enterprise Network:

When a wireless station connects to an enterprise enabled access point, it is identified as a new supplicant. Firstly, the new supplicant connects to the access point by performing an Open System Authentication and performing the frame exchange for authentication and association. Once the Open System Authentication phase completes, the EAP authentication starts. Until the EAP authentication is completed, all other traffic to the new supplicant is blocked.

The EAP authentication starts with the authenticator sending an EAP Identity frame to the supplicant. The supplicant, on receiving the EAP request identity, responds with EAP Identity response frame containing user ID to the authenticator. Then the authenticator encapsulates this EAP identity response in a RADIUS access request packet and forwards it to the authentication server.

The authentication server sends a reply (encapsulated in a RADIUS access challenge packet) to the authenticator containing an EAP Request specifying the EAP method. The supplicant can do one of the following:

1.  Use the EAP method requested by an EAP response, or,

2.  Send NAK (negative acknowledgment) and respond with the EAP methods it supports.

Finally, the authentication server and the supplicant must agree on one EAP method to proceed with the authentication process. Based on the EAP method, EAP requests and EAP responses are sent between supplicant and authentication server until the authentication server responds with EAP-Success or EAP failure packet. If the authentication is successful, the authenticator allows normal traffic to the supplicant. If authentication is unsuccessful, the authenticator blocks all other traffic (except EAP data frames) to the supplicant.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/WIFI_ENT_2.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

During EAP authentication, the supplicant and the authentication server derive a Pairwise Master Key (PMK) for data encryption. This key is unique for each session of a given client. For broadcast and multicast traffic it uses a Group Transient Key (GTK) which is common to all clients. The authentication server sends the derived PMK to the authenticator, and the supplicant and the authenticator perform a four-way handshake to complete the authentication process.

Extensible Authentication Protocol(EAP)

The Extensible Authentication Protocol (EAP) is a point-to-point (P2P) wireless and LAN authentication framework providing a variety of authentication mechanisms. The EAP method provides a request or response framework over which a specific authentication algorithm is implemented. Most commonly used EAP methods in wireless networks are EAP-TLS, EAP-PEAPv0, EAP-PEAPv1 and EAP-TTLS.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/WIFI_ENT_3.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

During EAP authentication, the supplicant and the authentication server derive a Pairwise Master Key (PMK) for data encryption. This key is unique for each session of a given client. For broadcast and multicast traffic it uses a Group Transient Key (GTK) which is common to all clients. The authentication server sends the derived PMK to the authenticator, and the supplicant and the authenticator perform a four-way handshake to complete the authentication process.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/WIFI_ENT_4.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

code – this has 8 bits. It identifies the type of the EAP packet and can have the following EAP code numbers:

• 1 – Request

• 2 – Response

• 3 – Success

• 4 – Failure

Identifier – this has 8 bits and matches Responses with Requests

Length – this field is 16 bits and indicates the length, in octets, of the EAP packet including the Code, Identifier, Length, and Data fields.

Data – the format of this field is determined by the Code field.

If code is set to Request/Response, the Data field consists of a byte which indicates the EAP Type, followed by zero or more bytes of Type Data.

EAP Methods

The EAP Authentication is a framework which provides request - response functions (for negotiation and authentication) with which a specific authentication algorithm is implemented called EAP Method.

The EAP-TLS (RFC 5216) uses the TLS protocol (RFC 5246), which is the Internet Engineering Task Force's (IETF ) latest version of the Secure Socket Layer (SSL) protocol. TLS provides a way to use certificates for both user and server authentication and for dynamic session key generation.

### Objective

Enable WFI32 modules to authenticate securely over enterprise networks using 802.1X EAP methods, suitable for corporate environments with username/password or certificate-based security. Release demo application and integrate code into Microchip Code Configorator for easy customer adaptation and code generation.

###- **Enabled TLS, TTLS, and PEAP** using MPLAB Harmony’s Wi‑Fi System Service :contentReference[oaicite:1]{index=1}

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
  FreeRADIUS, OpenSSL, wpa_supplicant
- **Debugging**: UART logs, network packet captures, TLS handshake traces

---
