const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, HeadingLevel } = require('docx');

// Simple command-line argument parser
function parseArgs() {
  const opts = {};
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    if ((args[i] === '--title' || args[i] === '-t') && args[i + 1]) {
      opts.title = args[i + 1];
      i++;
    } else if ((args[i] === '--content' || args[i] === '-c') && args[i + 1]) {
      opts.content = args[i + 1];
      i++;
    } else if ((args[i] === '--output' || args[i] === '-o') && args[i + 1]) {
      opts.output = args[i + 1];
      i++;
    }
  }
  return opts;
}

// Parse arguments
const { title = 'Chapter Title', content = 'Your story goes here.', output = 'chapter.docx' } = parseArgs();

// Split content into paragraphs
const paragraphs = content.split('\n').map((line) => {
  return new Paragraph({
    children: [
      new TextRun({
        text: line,
        font: 'Garamond',
        size: 24, // 12pt (size is in half-points)
      }),
    ],
    spacing: {
      after: 120,
    },
  });
});

// Create the document with a title and content paragraphs
const doc = new Document({
  sections: [
    {
      children: [
        new Paragraph({
          children: [
            new TextRun({
              text: title,
              bold: true,
              font: 'Garamond',
              size: 32, // 16pt for the title
            }),
          ],
        }),
        ...paragraphs,
      ],
    },
  ],
});

// Write the document to the specified file
Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(output, buffer);
  console.log(`Generated document saved to ${output}`);
});
