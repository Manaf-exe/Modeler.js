import readlineSync from "readline-sync";
import fs from "fs-extra";
/*
 Modeler.js  v1.0.0 by Manaf-. Not optimized, but the code works!  
 */
const cmd = process.argv.slice(2).join(" ").trim();

if (cmd === "--help" || cmd === "-h") {
  console.log(`

---- ModelScript V1.0 ----
\x1b[1m  \x1b[2m Auth Manaf-exe (Github) Email: manafscout.bd@gmail.com

===== Commands =====

node compiler.mjs --help (for help)
node compiler.mjs --/path/to/your/filename
node compiler.mjs --/path/to/your/filename +tag.file*1/2/3/4/5

=== Manual === 

Modeler.js is a compiler that compiles structed dynamicly, freely typed .ai format files into a real executable code file.
It lets you arcetect your application or program freely without the hurdle of writing complex code or burning out immerse ammout of provider tokens. 

==== File Structure ====

Model-Role: [The Role of the model. Give it a role according to your project]
Core-Idea: [Your projects core idea]
Output-lang: [Your Desired Output Language eg., Python, JavaScript]
Main-Details:
- [Your Instruction Starts here]

======================================================
Thats it! But Small Changes Won't Hurt!

Example Code with it (Simple Calculator):
============================================================

Model-Role: Senior Software Enginner and Chief designer 
Core-Idea: Extremely Modern Abstract Calculator
Output-lang: HTML

Main-Details:
A calculator written in html and integrated css and integrated JavaScript With next level error handling. 

=============================================================
IMPORTANT! COMPILER CANNOT WRITE MULTIPLE FILES AT ONNCE!

First Download Some npm: \`npm install readline-sync\` and \`npm install fs-extra\`

To edit your provider URL or API key, navigate to the end of the secret directory.

**You can optionally delete the gitignore file**

Use +tag.file at the end. write it with a space on the left, to enter the\n reference file menu, to reference another file. max limit 5 files. to set the amount of files, write: +tag.file*1 or 2 or 3 or 4 or 5, but 5 is the max limit.
Example Tag usage: 

node compiler.mjs --myfile.txt +tag.file*3
\x1b[0m
`);
} else if (!cmd) {
  console.log("Ready For Execution");
  console.log("Try `node compiler.mjs --help`");
} else if (cmd.includes("+tag.file*1") && cmd.includes("--")) {
  let filePath = cmd.replace("--", "").replace("+tag.file*1", "").trim();
  try {
    let path_text = await fs.readFile(filePath, "utf-8");
    let target_path = readlineSync.question("Targeted file path: ");
    let reference_val = await fs.readFile(target_path, "utf-8");
    let url = await fs.readFile("./secrets/top/secret/url.txt", "utf-8");
    let api = await fs.readFile("./secrets/top/secret/api.txt", "utf-8");
    let model = readlineSync.question("API model name: ");
    let filename = readlineSync.question("Saved File Name: ");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${api}`,
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: "system",
            content: `
You are an expert compiler that transpiles ModelScript files directly into executable code.
STRICT RULES:
1. Output ONLY executable code.
2. Do NOT output markdown code block backticks.
3. Do NOT output thinking steps, explanations, or commentary ouside the code. only think deeply, plan and commentary inside mutiline comments of the output language stated in the input.
4. Output language must strictly follow the 'Output-lang' specified in the input file.
5. DO NOT leave any todo comments or commenting something to be written manually by the user. Write everything yourself.
6. In your reasoning phase, take time. think deeply, plan deeply, then start coding. DO NOT write code without reasoning and planing deeply in multiline commments
INPUT SPECIFICATION:
${path_text}

Saved Filename Is: ${filename}

taged file content by the system:
${reference_val}`,
          },
        ],
      }),
    });

    const data = await response.json();
    let content = data.choices?.[0]?.message?.content;
    content = content.replace(
       /^(?:```[a-z]*[\r\n]+)?([\s\S]*?)(?:[\r\n]+```)?$/i,
      "$1",
    ).trim();
    await fs.outputFile(filename, content);
    let words_in_word = content.length;
    console.log("Usage in chars (Like A, B, C): " + words_in_word);
  } catch (e) {
    console.log("Oops! An error happend");
  }
} else if (cmd.includes("+tag.file*2") && cmd.includes("--")) {
  let filePath = cmd.replace("--", "").replace("+tag.file*2", "").trim();
  try {
    let path_text = await fs.readFile(filePath, "utf-8");
    let target_path = readlineSync.question("Targeted file path: ");
    let target_path_2 = readlineSync.question("Targeted file path No.2: ");
    let reference_val = await fs.readFile(target_path, "utf-8");
    let reference_val_2 = await fs.readFile(target_path_2, "utf-8");
    let url = await fs.readFile("./secrets/top/secret/url.txt", "utf-8");
    let api = await fs.readFile("./secrets/top/secret/api.txt", "utf-8");
    let model = readlineSync.question("API model name: ");
    let filename = readlineSync.question("Saved File Name: ");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${api}`,
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: "system",
            content: `
You are an expert compiler that transpiles ModelScript files directly into executable code.
STRICT RULES:
1. Output ONLY executable code.
2. Do NOT output markdown code block backticks.
3. Do NOT output thinking steps, explanations, or commentary ouside the code. only think deeply, plan and commentary inside mutiline comments of the output language stated in the input.
4. Output language must strictly follow the 'Output-lang' specified in the input file.
5. DO NOT leave any todo comments or commenting something to be written manually by the user. Write everything yourself.
6. In your reasoning phase, take time. think deeply, plan deeply, then start coding. DO NOT write code without reasoning and planing deeply in multiline commments
INPUT SPECIFICATION:
${path_text}

Saved Filename Is: ${filename}

taged file content by the system:
${reference_val}

taged file content by the system No.2:
${reference_val_2}`,
          },
        ],
      }),
    });
    const data = await response.json();
    let content = data.choices?.[0]?.message?.content;
    content = content.replace(
       /^(?:```[a-z]*[\r\n]+)?([\s\S]*?)(?:[\r\n]+```)?$/i,
      "$1",
    ).trim();
    await fs.outputFile(filename, content);

    let words_in_word = content.length;
    console.log("Usage in chars (Like A, B, C): " + words_in_word);
  } catch (e) {
    console.log("Oops! An error happend");
  }
} else if (cmd.includes("+tag.file*3") && cmd.includes("--")) {
  let filePath = cmd.replace("--", "").replace("+tag.file*3", "").trim();
  try {
    let path_text = await fs.readFile(filePath, "utf-8");
    let target_path = readlineSync.question("Targeted file path: ");
    let target_path_2 = readlineSync.question("Targeted file path No. 2: ");
    let target_path_3 = readlineSync.question("Targeted file path No. 3: ");
    let reference_val = await fs.readFile(target_path, "utf-8");
    let reference_val_2 = await fs.readFile(target_path_2, "utf-8");
    let reference_val_3 = await fs.readFile(target_path_3, "utf-8");
    let url = await fs.readFile("./secrets/top/secret/url.txt", "utf-8");
    let api = await fs.readFile("./secrets/top/secret/api.txt", "utf-8");
    let model = readlineSync.question("API model name: ");
    let filename = readlineSync.question("Saved File Name: ");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${api}`,
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: "system",
            content: `
You are an expert compiler that transpiles ModelScript files directly into executable code.
STRICT RULES:
1. Output ONLY executable code.
2. Do NOT output markdown code block backticks.
3. Do NOT output thinking steps, explanations, or commentary ouside the code. only think deeply, plan and commentary inside mutiline comments of the output language stated in the input.
4. Output language must strictly follow the 'Output-lang' specified in the input file.
5. DO NOT leave any todo comments or commenting something to be written manually by the user. Write everything yourself.
6. In your reasoning phase, take time. think deeply, plan deeply, then start coding. DO NOT write code without reasoning and planing deeply in multiline commments
INPUT SPECIFICATION:
${path_text}

Saved Filename Is: ${filename}

taged file content by the system:
${reference_val}

taged file content by the system No.2:
${reference_val_2}

taged file content by the system No. 3:
${reference_val_3}`,
          },
        ],
      }),
    });
    const data = await response.json();
    let content = data.choices?.[0]?.message?.content;
    content = content.replace(
       /^(?:```[a-z]*[\r\n]+)?([\s\S]*?)(?:[\r\n]+```)?$/i,
      "$1",
    ).trim();

    await fs.outputFile(filename, content);
    console.log("Task Done");

    let words_in_word = content.length;
    console.log("Usage in chars (Like A, B, C): " + words_in_word);
  } catch (e) {
    console.log("Oops! An error happend");
  }
} else if (cmd.includes("+tag.file*4") && cmd.includes("--")) {
  let filePath = cmd.replace("--", "").replace("+tag.file*4", "").trim();
  try {
    let path_text = await fs.readFile(filePath, "utf-8");
    let target_path = readlineSync.question("Targeted file path: ");
    let target_path_2 = readlineSync.question("Targeted file path No. 2: ");
    let target_path_3 = readlineSync.question("Targeted file path No. 3: ");
    let target_path_4 = readlineSync.question("Targeted file path No. 4: ");
    let reference_val = await fs.readFile(target_path, "utf-8");
    let reference_val_2 = await fs.readFile(target_path_2, "utf-8");
    let reference_val_3 = await fs.readFile(target_path_3, "utf-8");
    let reference_val_4 = await fs.readFile(target_path_4, "utf-8");
    let url = await fs.readFile("./secrets/top/secret/url.txt", "utf-8");
    let api = await fs.readFile("./secrets/top/secret/api.txt", "utf-8");
    let model = readlineSync.question("API model name: ");
    let filename = readlineSync.question("Saved File Name: ");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${api}`,
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: "system",
            content: `
You are an expert compiler that transpiles ModelScript files directly into executable code.
STRICT RULES:
1. Output ONLY executable code.
2. Do NOT output markdown code block backticks.
3. Do NOT output thinking steps, explanations, or commentary ouside the code. only think deeply, plan and commentary inside mutiline comments of the output language stated in the input.
4. Output language must strictly follow the 'Output-lang' specified in the input file.
5. DO NOT leave any todo comments or commenting something to be written manually by the user. Write everything yourself.
6. In your reasoning phase, take time. think deeply, plan deeply, then start coding. DO NOT write code without reasoning and planing deeply in multiline commments
INPUT SPECIFICATION:
${path_text}

Saved Filename Is: ${filename}

taged file content by the system:
${reference_val}

taged file content by the system No.2:
${reference_val_2}

taged file content by the system No. 3:
${reference_val_3}

taged file content by the system No. 4:
${reference_val_4}`,
          },
        ],
      }),
    });
    const data = await response.json();
    let content = data.choices?.[0]?.message?.content;
    content = content.replace(
       /^(?:```[a-z]*[\r\n]+)?([\s\S]*?)(?:[\r\n]+```)?$/i,
      "$1",
    ).trim();

    await fs.outputFile(filename, content);

    let words_in_word = content.length;
    console.log("Usage in chars (Like A, B, C): " + words_in_word);
  } catch (e) {
    console.log("Oops! An error happend");
  }
} else if (cmd.includes("+tag.file*5") && cmd.includes("--")) {
  let filePath = cmd.replace("--", "").replace("+tag.file*5", "").trim();
  try {
    let path_text = await fs.readFile(filePath, "utf-8");
    let target_path = readlineSync.question("Targeted file path: ");
    let target_path_2 = readlineSync.question("Targeted file path No. 2: ");
    let target_path_3 = readlineSync.question("Targeted file path No. 3: ");
    let target_path_4 = readlineSync.question("Targeted file path No. 4: ");
    let target_path_5 = readlineSync.question("Targeted file path No. 5: ");
    let reference_val = await fs.readFile(target_path, "utf-8");
    let reference_val_2 = await fs.readFile(target_path_2, "utf-8");
    let reference_val_3 = await fs.readFile(target_path_3, "utf-8");
    let reference_val_4 = await fs.readFile(target_path_4, "utf-8");
    let reference_val_5 = await fs.readFile(target_path_5, "utf-8");
    let url = await fs.readFile("./secrets/top/secret/url.txt", "utf-8");
    let api = await fs.readFile("./secrets/top/secret/api.txt", "utf-8");
    let model = readlineSync.question("API model name: ");
    let filename = readlineSync.question("Saved File Name: ");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${api}`,
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: "system",
            content: `
You are an expert compiler that transpiles ModelScript files directly into executable code.
STRICT RULES:
1. Output ONLY executable code.
2. Do NOT output markdown code block backticks.
3. Do NOT output thinking steps, explanations, or commentary ouside the code. only think deeply, plan and commentary inside mutiline comments of the output language stated in the input.
4. Output language must strictly follow the 'Output-lang' specified in the input file.
5. DO NOT leave any todo comments or commenting something to be written manually by the user. Write everything yourself.
6. In your reasoning phase, take time. think deeply, plan deeply, then start coding. DO NOT write code without reasoning and planing deeply in multiline commments
INPUT SPECIFICATION:
${path_text}

Saved Filename Is: ${filename}

taged file content by the system:
${reference_val}

taged file content by the system No.2:
${reference_val_2}

taged file content by the system No. 3:
${reference_val_3}

taged file content by the system No. 4:
${reference_val_4}

taged file content by the system No.5:
${reference_val_5}`,
          },
        ],
      }),
    });
    const data = await response.json();
    let content = data.choices?.[0]?.message?.content;
    content = content.replace(
       /^(?:```[a-z]*[\r\n]+)?([\s\S]*?)(?:[\r\n]+```)?$/i,
      "$1",
    );

    await fs.outputFile(filename, content);
    let words_in_word = content.length;
    console.log("Usage in chars (Like A, B, C): " + words_in_word);
  } catch (e) {
    console.log("Oops! An error happend");
  }
} else if (cmd.includes("--")) {
  let path = cmd.replace("--", "");
  console.log("\x1b[1m Selected Path To Compile: " + path);
  let input = await fs.readFile(path, "utf-8");
  let apiKey = null;
  let url = null;
  let code = null;
  try {
    const q = readlineSync;
    const model = q.question("\x1b[1m  API code model name: ");
    console.log("Checking credentials...");
    apiKey = (
      await fs.readFile("./secrets/top/secret/api.txt", "utf-8")
    ).trim();
    url = (await fs.readFile("./secrets/top/secret/url.txt", "utf-8")).trim();
    console.log("Found credentials.");
    async function compile(format) {
      const formattedUrl = url;
      const response = await fetch(formattedUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Connection: "close",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: model,
          messages: [
            {
              role: "system",
              content: `You are an expert compiler that transpiles ModelScript files directly into executable code.
STRICT RULES:
1. Output ONLY executable code.
2. Do NOT output markdown code block backticks.
3. Do NOT output thinking steps, explanations, or commentary ouside the code. only think deeply, plan and commentary inside mutiline comments of the output language stated in the input.
4. Output language must strictly follow the 'Output-lang' specified in the input file.
5. DO NOT leave any todo comments or commenting something to be written manually by the user. Write everything yourself.
6. In your reasoning phase, take time. think deeply, plan deeply, then start coding. DO NOT write code without reasoning and planing deeply in multiline commments
INPUT SPECIFICATION:
${input}
Saved Filename Is: ${format}`,
            },
          ],
        }),
      });
      const data = await response.json();
      let content = data.choices?.[0]?.message?.content || "";
      content = content.replace(
         /^(?:```[a-z]*[\r\n]+)?([\s\S]*?)(?:[\r\n]+```)?$/i,
        "$1",
      );
      return content;
    }
    let pathN = readlineSync.question("Saved Filename: ");
    console.time("In");
    console.log("Starting Compiling");
    code = await compile(pathN);
    if (code !== "") {
      console.log("Compiling Done");
      const ftwo = code.slice(0, 2);
      await fs.outputFile(pathN, code);
      console.timeEnd("In");
    } else {
      console.log("Something Went Wrong. Try Changing your model name.");
      console.timeEnd("In");
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(
        "\nLets get started. First run `npm install readline-sync` and `npm install fs-extra`.\nThen create a Open AI compatible API key or use a Existing one From your Provider.\nAfter That, Fill up those sections below.",
      );
      const ask = readlineSync;
      const key = ask.question("\x1b[1m  Your API Key: ");
      const urlp = ask.question("\x1b[1m  Provider URL endpoint: ");
      await fs.outputFile("./secrets/top/secret/api.txt", key);
      await fs.outputFile("./secrets/top/secret/url.txt", urlp);
      await fs.outputFile(".gitignore", "secrets/\n");
      console.log("\n \x1b[1m Your Setup Should Be done. Go run it again!");
    } else {
      throw error;
    }
  }
} else {
  console.log(
    "Something illegal, Command Not Recognized! try `node compiler.mjs --help`",
  );
}
