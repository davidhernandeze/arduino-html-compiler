const fs = require('fs');
const minify = require('html-minifier').minify;

const fileContent = fs.readFileSync('index.html');
const result = minify(fileContent.toString(), {
  removeAttributeQuotes: true,
  minifyCSS: true,
  minifyJS: true,
  removeComments: true,
  collapseWhitespace: true
});

const scapeResult = result.replaceAll('"', '\\"')
const compiledFile = 'String app = "' + scapeResult + '";';

if (!fs.existsSync(process.argv[2])) {
  console.log('ERROR: Output file doesn\'t exists');
  return;
}

fs.writeFileSync(process.argv[2], compiledFile)
