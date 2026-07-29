# 📝 Register Form with Advanced Validation & Accessibility

A modern, accessible, and responsive user registration form with real-time field validation, dynamic password strength estimation, and accessible status messaging built using Vanilla JavaScript, Semantic HTML5, and CSS3.

![Project Status](https://img.shields.io/badge/Status-Completed-success?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-HTML5_|_CSS3_|_JavaScript-blue?style=flat-square)

---

## 🚀 Key Features

* **Real-time Field Validation:** Immediate input validation powered by the `input` event listener to provide seamless feedback as the user types.
* **Email Regex Pattern Checking:** RegEx evaluation to enforce standard email format (`name@domain.com`).
* **Password Strength Indicator:** Real-time visual strength meter measuring length, letter case variations, numbers, and special characters.
* **Password Confirmation Match:** Cross-field validation ensuring `Password` and `Confirm Password` inputs match perfectly.
* **Interactive UI States:** Automatic field highlighting (Green for valid / Red for errors) with dynamic status error messages.
* **Accessibility-First Design (a11y):** Integrated `aria-describedby` and `aria-live="polite"` attributes to ensure Screen Reader compatibility.

---

## 🛠️ Built With

* **HTML5:** Semantic form controls and ARIA attributes for full accessibility.
* **CSS3:** Custom properties (variables), Flexbox layout, and CSS transition effects.
* **Vanilla JavaScript (ES6+):** Pure functions for modular validation rules separated from DOM handling logic.

---

## 📂 Project Directory Structure

```plaintext
register-form-validation/
├── css/
│   └── style.css       # Core design tokens, layout & interactive input states
├── js/
│   ├── validation.js  # Pure validation functions & RegEx logic
│   └── app.js         # Event handling, DOM manipulations & submit guards
├── index.html         # Accessible & semantic form layout
└── README.md          # Project documentation