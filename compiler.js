const fs = require('fs');
const cheerio = require('cheerio');
const minify = require('html-minifier').minify;
const UglifyJS = require("uglify-js");

const htmlContent = fs.readFileSync(process.argv[2]);
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

const varName = process.argv[4] || 'html'
const compiledFile = `const char *${varName} = R"literal(${result})literal";`

const outputFile = process.argv[3] || 'index.h'
if (!fs.existsSync('output')) {
  fs.mkdirSync('output')
}

fs.writeFileSync('output/' + outputFile, compiledFile)
