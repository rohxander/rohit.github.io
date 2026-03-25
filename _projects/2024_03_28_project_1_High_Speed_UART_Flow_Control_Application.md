---
layout: project
date: 2024-03-28
title: High-Speed UART Flow Control Application
description: Validating RTS/CTS hardware flow control on PIC32 at speeds up to 25 Mbps.
img: assets/img/projects/thumbnail_project_1_High_Speed_UART_Flow_Control_Application.png
importance: 1
category: Industrial
related_publications: false
---

At Microchip Technology, I was responsible for validating **hardware UART flow control (RTS/CTS)** for high-speed embedded communication. The target was to test flow control performance across multiple configurations and baud rates, with reliable operation expected up to 10 Mbps. During testing, I was able to verify functionality up to **25 Mbps**.

---

### Project Objective

- Confirm RTS/CTS-based UART communication stability under high-speed, full-duplex conditions
- Evaluate communication behavior on dedicated UART pins vs PPS-configured pins
- Provide structured test applications to support validation at scale

---

### Development Process

Initial testing was conducted using **Tera Term**, but its fixed baud rate settings limited practical testing. I moved to **PuTTY**, which supported higher speeds, but started failing consistently beyond 2.5 Mbps. This is when I introduced the **Saleae Logic Analyzer** for more precise signal monitoring, and later used **digital oscilloscopes** for final frequency measurements.

To test CTS input handling, I initially grounded the CTS line on the MCU and monitored UART behavior. This confirmed that the MCU paused and resumed transmission based on CTS state — validating the handshake logic.

To enable bidirectional, high-speed flow control testing, I programmed **two WFI32E02 boards**:

- One board acted as the initiator and echo responder
- The other purely as a repeater
- Test characters (`'U'`, binary `01010101`) were used for clean waveform visibility and timing analysis

This setup eliminated the PC as a bottleneck and allowed direct MCU-to-MCU validation.

---

### Testing Configurations & Observations

- Baud rates tested from 9600 bps up to 25 Mbps
- Clock settings were adjusted to support different speed targets
- UART control registers were reconfigured for high-speed mode and flow control enablement
- Both **dedicated UART pins** and **PPS(Peripheral Pin Select)-configured pins** were tested

  - As expected, **PPS pins supported speeds up to 5 Mbps** (per device spec)
  - **Dedicated pins maintained full signal stability at 25 Mbps**

  [Note : The Peripheral Pin Select (PPS) feature allows a design to choose the pins used by many of the devices digital peripheral]

When attempting to probe RTS/CTS lines with the logic analyzer, unexpected grounding issues affected readings. However, functionality was still verified through **manual wire disconnection tests**, where communication paused and resumed without data loss — confirming proper hardware handshake operation.

---

### Final Deliverables

The test routines were handed over to the **Module Validation Team** for further environmental and stress testing, including evaluation across temperature variations and extended runtime scenarios.

---

### Tools & Platforms

PIC32, WFI32E02  
MPLAB X IDE, Harmony v3  
PuTTY, Saleae Logic Analyzer  
Digital Oscilloscopes, FTDI Cables

---

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/article_img_1_project_1_High_Speed_UART_Flow_Control_Application.png" title="WFI32E02 Development Board" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  WFI32E02 board used for UART flow control testing and full-duplex setup.
</div>
