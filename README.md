Modeler.js is a CLI tool designed to build applications directly from an input file and up to 5 tag reference files.
Key Features
 * Dependencies: fs-extra, readline-sync
 * Purpose: A straightforward tool that accepts input files and produces generated output without complex agent overhead.
Getting Started
 * Install: Run npm install modeler.js or download from GitHub.
 * Create File: Set up an input file in your preferred format.
 * Execute:
   * Basic Run: node compiler.mjs --yourFilePath
   * With Reference Tags: node compiler.mjs --yourFilePath +tag.file*1/2/3/4/5 (Note: Must use -- before the main file path; accepts up to 5 reference files)
File Structure Template
Model-Role: [Your Model Role]
Core-Idea: [Your Core Idea]
Output-Lang: [Output Language]
Main-Details:

[Your main logic starts here]

