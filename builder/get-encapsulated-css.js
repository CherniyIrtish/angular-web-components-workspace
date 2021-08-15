const fileSystem = require('fs');
const prefixer = require('postcss-prefix-selector')
const postcss = require('postcss');

const getEncapsulatedCss = async (bundleName) => {
  const css = fileSystem.readFileSync(`./dist/${bundleName}/styles.css`, "utf8");
  return postcss().use(
    prefixer(
      {
        prefix: `${bundleName}`,
        exclude: [],
        transform: (prefix, selector, prefixedSelector) => prefixedSelector
      }
    )
  ).process(css).css;
}
module.exports = getEncapsulatedCss;
