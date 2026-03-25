---
layout: project
date: 2024-03-28
title: QSPI Validation Application
description: Integrated and validated QSPI/SQI flash interface on Microchip modules.
img: assets/img/projects/thumbnail_project_3_QSPI_Validation_Application.png
importance: 3
category: Industrial
related_publications: false
---

The SQI module is a synchronous serial interface that provides access to serial Flash memories
and other serial devices. The SQI module supports Single Lane (identical to SPI), Dual Lane, and
Quad Lane interface modes.

The SQI module, which is an industry standard synchronous serial link, helps communicate with
multiple SPI compatible devices such as serial EEPROMs and serial Flash devices.
The SQI module has three interfaces, one external to the device (SQI Bus Interface) that
connects to the external Flash memories or other serial devices, and two internal (Bus Slave
interface for control register reads/writes and Bus Master for data transfers)

The SQI bus interface consists of four data lines (SQID3-SQID0), a clock line (SQICLK), and two
select lines (SQICS0 and SQICS1). As mentioned earlier, the SQI module supports Single Lane
(SPI mode), Dual Lane, and Quad Lane modes of operation.
The SQI module operates in both Single Data Rate (SDR) and Double Data Rate (DDR) modes.
In DDR mode, the data transition occurs on both edges of the clock providing double the
throughput.

The SQI module has configurable transmit and receive buffers, programmable baud rates
through the internal clock divider, clock phase, and clock polarity control for efficient data
operations. Transmit and receive buffers can be accessed through SQI1TXDATA and
SQI1RXDATA registers. Similarly, the control buffer can be accessed through the SQI1CON
register and is mainly used to pipeline the operations. The SQI module operates in three transfer
modes: DMA, PIO, and XIP. All three modes use the control buffer to pipeline the command/data
sequences on the SQI bus.

The SQI module supports two data flow modes: SPI Mode 0 and Mode 3. Each transfer mode
(XIP/PIO/DMA) can use any of the data flow modes as desired by the application.
DMA and PIO modes are typically used to transfer the data to and from external serial Flash
memory, whereas, eXecute In Place (XIP) mode is used to execute the code out of the external
serial Flash memory. DMA mode uses the internal DMA engine and buffer descriptors to transfer
data between source and destination memory spaces off-loading the Host processor during
which time, accessing SQI1TXDATA, SQI1RXDATA, and SQI1CON functionally will not yield
expected results. However, PIO mode engages the Host processor to access the contents of the
external serial Flash memory using a bit-band method through the transmit and receive data
registers.

In my role at Microchip Technology, I led the validation of **QSPI/SQI flash interfaces** on the WFI32 module, targeting the **SST26 series flash memory**. This project focused on enabling and optimizing high-speed flash operations—deep insights from the **60001244C QSPI reference manual** and the **SST26 datasheet** guided every step.

---

### Project Objective

- Enable SST26 flash to operate in **Quad I/O (SQI) mode** by configuring the MCU's registers
- Perform read/write/erase operations using SQI protocol, per the SST26 datasheet guidelines
- Benchmark performance: assess clock speeds, dummy cycles, and quad lane efficiency

---

### Development Process

I began by studying the SST26 protocol diagrams and command structure—ensuring compatibility with **SPI modes 0 and 3**. Using MPLAB Harmony’s SQI driver, I:

- Issued SQI enable commands to switch from SPI to quad-mode operations
- Conducted block write/read tests and verified integrity using the peripheral library’s SQI APIs
- Tuned clock timing, added dummy cycles and adjusted modes, resolving undocumented timing quirks through oscilloscope analysis

---

### Key Contributions

- Configured and activated **SQI mode** effectively on the MCU
- Implemented high-speed flash operations—erase, program, and fast read functions
- Documented discrepancies in datasheet vs real behavior and adjusted driver settings accordingly
- Provided reusable test applications and internal documentation for future memory interface work

---

### Final Deliverables

- Flash validation firmware delivered to certification teams
- Comprehensive doc capturing command sequences, timing tweaks, and robustness findings
- Foundations laid for future QSPI/SQI memory driver enhancements

---

### Tools & Platforms

- PIC32 / WFI32E02
- SST26 series flash (On Board)
- MPLAB X IDE with Harmony v3 (QSPI/SQI and SPI drivers)
- Saleae Logic Analyzer, Digital Oscilloscope

---
