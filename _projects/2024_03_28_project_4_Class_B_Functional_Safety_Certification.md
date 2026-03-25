---
layout: project
date: 2024-03-28
title: Class-B Functional Safety Certification
description: Assisted in validating error-catch mechanisms for SRAM, FLASH, CPU, and I/O to support EN/IEC 60730 Class-B safety certification on PIC32MZW1.
img: assets/img/projects/thumbnail_project_4_Class_B_Functional_Safety_Certification.png
importance: 4
category: Industrial
related_publications: false
---

Safety specifications, such as IEC 60335, are used to ensure manufactures have designed their products to operate safely. IEC 60335 defines safety standards at a system level. IEC 60730, which is referenced by IEC 60335, addresses safety of electronic controls in appliances. Currently IEC 60730 is mandatory for appliances sold in Europe and widespread adoption is likely

At Microchip Technology, I contributed to the **Class-B safety certification** of the PIC32MZW1 microcontroller platform, supporting compliance with **EN/IEC 60730 standards**. These standards are critical for functional safety in household and industrial appliances.

I joined the project during the post-development phase and was responsible for extending, testing, and maintaining the existing test framework—eventually taking full ownership after the initial lead transitioned out.

---

### Project Objective

- Validate error-detection and fault-handling mechanisms in PIC32MZW1 according to IEC 60730 Class-B
- Support formal third-party certification processes by TUV and other regulators
- Document safety validation procedures and ensure test coverage across core subsystems

---

### My Role & Contributions

- Performed **automated and manual testing** of safety library routines targeting:
  - **CPU Registers**
  - **Program Counter (PC)**
  - **SRAM/FLASH memory**
  - **I/O pin monitoring**
- Helped simulate fault injection scenarios and verify expected safety responses
- Created structured test cases for fault coverage validation across different boot and runtime conditions
- Maintained and cleaned up the test framework post-certification to support internal reuse and portability
- Took over **codebase ownership** after project handover, including documentation and minor debugging

---

### Final Deliverables

- Assisted in preparing Class-B test documentation for **certification submission**
- Helped complete the internal test report used in the official certification linked below:
  - 📄 [Microchip Class B Test Report (PDF)](https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/Certifications/PIC32MZ-W1+Class+B+Library+Testreport-296949-TL2-2.pdf)
- Delivered reusable project templates and test documentation for internal development teams

---

### Tools & Platforms

- **PIC32MZW1**, MPLAB Harmony v3
- **MPLAB X IDE**, Internal Class-B Library
- Manual test scripts, IDE breakpoints, embedded fault injection
- Support hardware for boundary and exception testing

---

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/article_img_1_project_4_Class_B_Functional_Safety_Certification.png" title="PIC32MZW1 Module (WFI32 variant)" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  PIC32MZW1 board used for Class-B safety validation during certification support phase.
</div>
