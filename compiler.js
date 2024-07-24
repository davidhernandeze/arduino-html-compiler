const fs = require('fs');
const cheerio = require('cheerio');
const minify = require('html-minifier').minify;
const UglifyJS = require("uglify-js");

const htmlContent = fs.readFileSync('index.html');
const $ = cheerio.load(htmlContent);

let scriptContent = '';
$('script').each((i, elem) => {
  scriptContent += $(elem).html() + '\n';
});

const uglyCode = UglifyJS.minify(scriptContent, {
  parse: { bare_returns: true },
  mangle: {
    toplevel: true,
    properties: true
  },
});
$('script').remove();
$('body').append(`
<script>
  ${uglyCode.code}
</script>
`);

const result = minify($.root().html(), {
  removeAttributeQuotes: true,
  minifyCSS: true,
  minifyJS: true,
  removeComments: true,
  collapseWhitespace: true
});

console.log(result);

const scapeResult = result.replaceAll('"', '\\"')
const compiledFile = 'String app = "' + scapeResult + '";';

if (!fs.existsSync(process.argv[2])) {
  console.log('ERROR: Output file doesn\'t exists');
  return;
}

fs.writeFileSync(process.argv[2], compiledFile)
