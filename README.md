Modeler.js is a CLI tool that lets you build applications or programs easily with just an input file. You can also tag references.
Dependencies: `fs-extra`, `readline-sync`
It's simple and likely effective for your workflow. You might have a question:
> "Why use this random CLI tool when I have complex CLI agents?"
> 
The answer is very simple: it has a completely different goal. It just gets an input and gives you the output, that's it! Really simple.
Getting Started
download via GitHub.
 * Then create a new input file in any format.
 * Then you have two options:
   * Just run it using node compiler.mjs --yourFilePath. It will guide you through the process and compile.
   * Or: Run it with a reference tag file: node compiler.mjs --yourFilePath +tag.file*1/2/3/4/5. Note: 5 is the maximum number of reference files.
> Reminder: Don't forget to add `--` before your file name.
> 
File Structure
Model-Role: [Your Model Role]
Core-Idea: [Your Core Idea]
Output-Lang: [Output Language]
Main-Details:

Your main logic starts here.

Very simple! You can tag your HTML file, database, or anything else in the CLI!
