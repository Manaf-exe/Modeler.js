# Modeler.js

**Modeler.js** is a lightweight CLI compiler that transpiles structured **ModelScript  files** directly into executable code using OpenAI-compatible API providers.

---

## 📦 Dependencies

Install the required npm packages before running:

```bash
npm install readline-sync fs-extra
```

> **Note:** Credentials and project secrets are initialized automatically on your first run.

---

## 🚀 Getting Started

### 1. Create a ModelScript File

Define your program logic in an input file (for example, `app.ai` or `app.txt`) using the standard ModelScript structure:

```text
Model-Role: Senior Software Engineer and Chief Designer
Core-Idea: Extremely Modern Abstract Calculator
Output-lang: HTML
Main-Details:
A calculator written in HTML with integrated CSS and JavaScript
featuring comprehensive error handling.
```

---

### 2. Basic Compilation

To compile your file, run `compiler.mjs` and pass your file path prefixed with `--`:

```bash
node compiler.mjs --app.txt
```

During execution, the CLI will interactively prompt you for:

* **API code model name** — e.g. `gpt-4o`, `claude-3-5-sonnet`, `deepseek-coder`
* **Saved filename** — e.g. `index.html`

---

## 🏷️ Referencing External Files (`+tag.file*N`)

You can supply up to **5 reference files**—such as database schemas, HTML templates, configuration files, or existing scripts—to provide additional context during generation.

Example:

```bash
node compiler.mjs --app.txt +tag.file*3
```

Append `+tag.file*N`, where `N` is the exact number of reference files:

```text
+tag.file*1
+tag.file*2
+tag.file*3
+tag.file*4
+tag.file*5
```

The CLI will then prompt you sequentially to enter the file path for each reference file.

---

## ⚙️ Configuration & Secrets

### Initial Setup

If credentials are missing, running any compilation command will automatically prompt you to enter:

* **API Key**
* **Provider Endpoint URL**

### Credentials Storage

Configured credentials are saved locally at:

```text
./secrets/top/secret/api.txt
./secrets/top/secret/url.txt
```

### 🔐 Git Safety

During setup, the CLI automatically appends:

```text
secrets/
```

to your `.gitignore` file to help prevent accidentally committing credentials.

---

## 📁 Example Project

A minimal Modeler.js project might look like:

```text
project/
├── compiler.mjs
├── app.txt
├── index.html
├── package.json
├── .gitignore
└── secrets/
    └── top/
        └── secret/
            ├── api.txt
            └── url.txt
```

> **Tip:** Never commit the `secrets/` directory or expose your API key publicly.
