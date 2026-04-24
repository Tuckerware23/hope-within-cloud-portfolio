# Automation Scripts

This directory contains Node.js scripts that automate tasks for the Hope Within Universe projects, including generating polished Word documents from text chapters. It uses the [docx](https://docx.js.org/) library to build `.docx` files programmatically.

## Prerequisites

- **Node.js** v16 or later installed on your machine.
- Install the required npm package in this directory:

```bash
npm install docx
```

## Chapter Generation Script

### `generateChapter.js`

This script creates a formatted Word document from command‑line inputs. It renders a chapter title and paragraphs in Garamond font with spacing suitable for prose.

#### Usage

Run the script with optional parameters:

```bash
node generateChapter.js --title "Chapter 1: Awakening" --content "This is the first paragraph.\nThis is the second paragraph." --output "Chapter1.docx"
```

- `--title` (`-t`): Title text displayed at the top of the document.
- `--content` (`-c`): Body text. Use `\n` to separate paragraphs.
- `--output` (`-o`): Output filename (defaults to `chapter.docx`).

If you omit any parameter, the script uses default values.

#### How It Works

The script uses the `docx` library to build a document:

- A **Document** instance defines a section with a title paragraph and a sequence of body paragraphs.
- Each paragraph is built from **TextRun** objects specifying the text, font family (`Garamond`), and font size.
- The script writes the `.docx` file to the path specified in the `--output` argument using **Packer.toBuffer**【222701240463372†L53-L79】.
- Command‑line arguments are parsed manually to support short (`-t`) and long (`--title`) forms.

The default document styling can be customized further; for example, you can set default fonts via **DocumentDefaults** in docx【455835394378188†L26-L37】.

#### Example

To generate a chapter called *Hope Begins* with two paragraphs and save it as `HopeBegins.docx`:

```bash
node generateChapter.js -t "Hope Begins" -c "The story begins on a quiet evening.\nA mysterious light appears on the horizon." -o HopeBegins.docx
```

After running, you'll find `HopeBegins.docx` in the current directory ready for publishing.

## Extending the Automation

You can create additional scripts in this folder to automate other workflows, such as:

- Converting your generated Word documents to PDF.
- Generating character sheets or glossaries.
- Batch processing multiple chapters from text files.

Contributions and improvements are welcome!
