---
layout: page
title: TÜV Certification & Module Validation
description: Developed IPv6-compatible firmware applications to support CE/FCC certification and validate UART, SPI, I2C, ADC, PWM, Ethernet, and Wi-Fi peripherals on PIC32MZW1.
img: assets/img/certification.png
importance: 5
category: Industrial
related_publications: false
---

At Microchip Technology, I worked on module validation and regulatory certification support for **PIC32MZW1**-based wireless modules. My primary responsibility was to design embedded firmware applications for internal CE/FCC/TÜV testing and ensure parallel validation of peripheral functionality.

These apps served as internal diagnostic tools for the hardware validation team and were crucial for certification procedures.

---

### Project Objective

- Develop and maintain embedded applications for peripheral-level validation under certification conditions
- Integrate **IPv6** networking support in firmware to meet modern compliance requirements
- Provide structured test flows that enabled simultaneous testing of UART, SPI, I2C, PWM, ADC, Ethernet, and Wi-Fi modules

---

### My Role & Contributions

- Designed modular test applications that validated peripheral IOs and connectivity protocols
- Integrated **dual-mode IPv4/IPv6 networking stack** using MPLAB Harmony framework
- Optimized test flows for execution during certification trials (CE, FCC, UKCA, TÜV)
- Ensured all peripheral drivers were operational in parallel, improving test speed and efficiency
- Documented use cases and setup instructions for the internal validation team and external auditors

---

### Certification Scope

The firmware I contributed to played a key role in supporting product validation under the following global certifications:

- **Radio Certifications**: FCC (USA), ISED (Canada), CE (EU), UKCA (UK), MIC (Japan), KCC (Korea), NCC (Taiwan), SRRC (China)
- **Environmental Compliance**: RoHS, REACH
- **Safety Standards**: TÜV product certification preparation (internal test support)

---

### Final Deliverables

- Delivered multiple certification apps covering key MCU peripherals and networking stacks
- Enabled live testing using command-based UART controls and dynamic pin reconfigurations
- Created logs, debug hooks, and LED indicators for test progression tracking
- Authored usage and configuration guides used by both validation and certification teams

---

### Tools & Platforms

PIC32MZW1 / WFI32E02  
MPLAB X IDE, Harmony v3  
TeraTerm, UART CLI tools  
Wireshark, Logic Analyzers  
External antennas, RF test jigs

---

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/WFI32E02.png" title="WFI32E02 module used in regulatory testing" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  WFI32E02 development board used for multi-peripheral validation and RF certification workflows.
</div>
