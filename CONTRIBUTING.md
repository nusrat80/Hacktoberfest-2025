# Contributing to the Code Snippet Library 🧩

A warm welcome, and thank you for considering a contribution! This project thrives on community submissions, and your help is essential to building a fantastic resource for developers. This guide will walk you through the process, especially if you're participating in **Hacktoberfest 2025**.

---

## What Makes a Good Snippet?

To ensure the library is high-quality and useful, please aim for your snippet to be:

* **✅ Useful:** It should solve a real, common problem that developers face.
* **📦 Self-Contained:** It shouldn't require external libraries or complex setup to work.
* **✍️ Well-Commented:** The code should be clear and easy to understand. Add comments to explain complex parts.
* **🏷️ Well-Tagged:** The tags in your `info.json` should be relevant so others can easily find your snippet.

---

## How to Contribute

Contributing is a straightforward process. Follow these steps carefully to get your pull request reviewed and merged.

### Step 1: 🍴 Fork & Clone the Repository

First, create your own copy of this project by forking it. Then, clone your fork to your local machine.

```bash
git clone https://github.com/YOUR_USERNAME/Hacktoberfest-2025.git
cd Hacktoberfest-2025
```

### Step 2: 📁 Create Your Snippet Folder

Next, create the correct folder structure for your new snippet.

1. Navigate to the `snippets/` directory.
2. Find the folder for your snippet's language (e.g., `javascript`). If it doesn't exist, create it.
3. Inside the language folder, create a new folder for your snippet. The name should be short and descriptive (e.g., `debounce-function`).

Your final folder path should look like this:

```
snippets/javascript/debounce-function/
```

### Step 3: 📄 Add Your Snippet Files

Inside your new snippet folder, create two essential files:

1. **`code.js`** (or `.py`, `.css`, etc.): This file contains your actual code snippet.
2. **`info.json`**: This file contains all the metadata about your snippet.

### Step 4: ✨ Fill Out Your `info.json`

Open your `info.json` file and add the details about your snippet. This is a crucial step that allows your snippet to be displayed correctly on the website.

**Use this exact format:**

```json
{
  "title": "Debounce Function",
  "description": "A function that delays invoking a callback until after a certain amount of time has passed without it being called. Useful for performance-sensitive events.",
  "author": "YourGitHubUsername",
  "language": "JavaScript",
  "tags": ["functions", "performance", "events"]
}
```

### Step 5: ✅ Create a Pull Request

Finally, commit your changes and open a Pull Request (PR) to the main repository.

1. **Commit and Push:**

   ```bash
   git add .
   git commit -m "feat(js): Add Debounce Function snippet"
   git push origin main
   ```

   > *💡 Pro Tip: A good commit message helps maintainers! Try to follow the format:*
   > `feat(language): Add [Snippet Title]`

2. **Open the Pull Request:**

   * Go to your forked repository on GitHub.
   * Click the "Contribute" button, then "Open pull request".
   * Write a clear title and a brief description of the snippet you're adding.

---

## 🎃 Hacktoberfest 2025 Rules

For your contribution to count towards Hacktoberfest, please follow the official rules:

* Your pull request must be submitted between **October 1 and October 31, 2025**.
* Your PR must be accepted by a maintainer (merged or labeled `hacktoberfest-accepted`).
* Do not submit low-quality or spammy pull requests. PRs that are just for correcting typos or whitespace will not be accepted.
* Any user with **two or more PRs marked as spam will be disqualified** from Hacktoberfest.

---

Thank you for your contribution!
**Happy Hacking! 🚀**
