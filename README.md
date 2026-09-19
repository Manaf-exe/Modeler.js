Modeler.js is a CLI tool that lets you build applications or programs easily with just an input file[span_0](start_span)[span_0](end_span). You can also tag references[span_1](start_span)[span_1](end_span).

dependencies: fs-extra readline-sync[span_2](start_span)[span_2](end_span)

It's simple and likely effective for your workflow[span_3](start_span)[span_3](end_span). You might have a question:

> "Why use this random CLI tool when I have complex CLI agents?[span_4](start_span)"[span_4](end_span)

The answer is very simple: it has a completely different goal[span_5](start_span)[span_5](end_span). It just gets an input and gives you the output, that's it[span_6](start_span)[span_6](end_span)! Really simple[span_7](start_span)[span_7](end_span).

## Getting Started

- First run `npm install modeler.js` or download via GitHub[span_8](start_span)[span_8](end_span).
- Then create a new input file in any format[span_9](start_span)[span_9](end_span).

Then you have two options:

1. Just run it using `node compiler.mjs --yourFilePath`[span_10](start_span)[span_10](end_span). It will guide you through the process and compile[span_11](start_span)[span_11](end_span).

Or,

2. Run it with a reference tag file: `node compiler.mjs --yourFilePath +tag.file*1/2/3/4/5`[span_12](start_span)[span_12](end_span). 5 is the maximum number of reference files[span_13](start_span)[span_13](end_span).

Don't forget to add `--` before your file name[span_14](start_span)[span_14](end_span).

File structure:

Model-Role: [Your Model Role][span_15](start_span)[span_15](end_span)
Core-Idea: [Your Core Idea][span_16](start_span)[span_16](end_span)
Output-Lang: [Output Language][span_17](start_span)[span_17](end_span)
Main-Details:[span_18](start_span)[span_18](end_span)
- Your main logic starts here.[span_19](start_span)[span_19](end_span)

Very simple! You can tag your HTML file, database, or anything else in the CLI[span_20](start_span)[span_20](end_span)!

