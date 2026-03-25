---
layout: project
date: 2024-03-28
title: Python UART-Based Alphabet Recognition
description: Built a Python GUI to read QT8 touchpad input over UART and recognize alphabet characters from 5x5 touch matrices.
img: assets/img/projects/thumbnail_project_6_Python_UART_Based_Alphabet_Recognition.png
importance: 1
category: Personal
related_publications: false
---

This personal project was designed to explore UART-based embedded interaction and basic pattern recognition. Using a **QT8 Explained Pro development board**, I created a complete **Python GUI application** that could receive real-time touch input from the board and classify it as a hand-drawn alphabet.

The board transmitted a **5x5 matrix** over UART representing capacitive touch detection. The data was then parsed and visualized in Python, where a simple recognition logic was applied to identify which letter had been drawn.

---

### Project Objective

- Receive and visualize 5x5 touch data from the QT8 board via UART
- Develop a Python interface to display and interpret the input in real-time
- Implement rule-based classification to recognize alphabet characters

---

### Development Process

- **UART Communication**: Configured the QT8 board to send the touch matrix in serial format. Each cell's state was represented as binary (1/0) and sent line by line.
- **Python GUI**: Used `PySerial` to read UART data and `Tkinter` to dynamically render the matrix.
- **Recognition Logic**: Implemented a basic rule-based recognizer that could detect and label characters like A, E, F, H, etc., from the 5x5 matrix. This mimicked a low-resolution digital sketchpad.
- **Debugging**: Observed data timing issues during high-speed input bursts and added UART buffer management and delay handling to maintain GUI sync.

---

### Highlights

- Demonstrated integration of an embedded capacitive input device with a desktop visualization tool
- Created a modular Python script allowing for future enhancements with ML-based pattern recognition
- Explored timing challenges in real-time serial communication and UI rendering synchronization

---

### Tools & Platforms

- **QT8 Explained Pro** (5x5 capacitive touch board)
- **Python** with `PySerial`, `MatplotLib`,
- **Tera Term**, custom UART protocol
- Windows PC, Serial-to-USB interface

---

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/article_img_1_project_6_Python_UART_Based_Alphabet_Recognition.png" title="Alphabet Recognition GUI" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  Python-based UI showing touch pattern recognition from QT8 Pro board.
</div>
