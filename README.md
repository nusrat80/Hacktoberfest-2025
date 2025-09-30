# Hacktoberfest 2025 - The Code Snippet Library 🧩

![Hacktoberfest 2025](https://img.shields.io/badge/Hacktoberfest-2025-orange.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/nusrat80/Hacktoberfest-2025?style=social)](https://github.com/nusrat80/Hacktoberfest-2025/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/nusrat80/Hacktoberfest-2025?style=social)](https://github.com/nusrat80/Hacktoberfest-2025/network/members)

Welcome to the **Code Snippet Library** for Hacktoberfest 2025! 🎉 This repository is a community-driven collection of useful code snippets for various languages. The goal is to build a practical, searchable resource for developers to find solutions to common problems quickly.

### ✨ **[Click Here to See the Live Snippet Library!](https://nusrat80.github.io/Hacktoberfest-2025/)** ✨

## How to Contribute

Contributing to this project is simple. Follow these instructions carefully to get your pull request merged and count towards your Hacktoberfest goals!

---

### **Step 1: Find or Create a Snippet**

Think of a useful, self-contained code snippet. It can be for any language (JavaScript, Python, CSS, etc.). Make sure it solves a common problem and is your own original work or properly attributed.

### **Step 2: Fork & Clone the Repository**

1.  **Fork the Repository**
    - Click the "Fork" button at the top right of this page.

2.  **Clone Your Fork**
    - Clone your forked repository to your local machine.
    ```bash
    git clone [https://github.com/YOUR_USERNAME/Hacktoberfest-2025.git](https://github.com/YOUR_USERNAME/Hacktoberfest-2025.git)
    cd Hacktoberfest-2025
    ```

### **Step 3: Create the Snippet Files**

1.  **Navigate to the `snippets` Directory**
    - Inside the project, find the `snippets` folder.

2.  **Create a Language Folder**
    - Inside `snippets`, create a folder for the programming language of your snippet (e.g., `javascript`, `python`). Use lowercase.

3.  **Create Your Snippet Folder**
    - Inside the language folder, create a new folder that describes your snippet in a few words (e.g., `debounce-function`).
    - **Example Path:** `snippets/javascript/debounce-function/`

4.  **Add Your Files**
    - Inside your snippet folder, create two files:
      - `code.js` (or `.py`, `.css`, etc.): This file contains your code snippet.
      - `info.json`: This file contains metadata about your snippet.

### **Step 4: Add Your Snippet Info**

Open the `info.json` file and fill it out using the format below.

**Example `info.json`:**
```json
{
  "title": "Debounce Function",
  "description": "A function that delays invoking a callback until after a certain amount of time has passed without it being called. Useful for performance-sensitive events like search inputs or window resizing.",
  "author": "YourGitHubUsername",
  "language": "JavaScript",
  "tags": ["functions", "performance", "events"]
}