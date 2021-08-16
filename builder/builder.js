const fileSystem = require('fs');
const concatJsBundles = require('./concat-js-bundles.js');
const getEncapsulatedCss = require('./get-encapsulated-css.js');
const mergeToJs = require('./merge-to-js');

const bundleName = process.argv[2];

const buildWebComponent = () => {
  fileSystem.readdir(`dist/${bundleName}`, async (err) => {
    if (!err) {
      await concatJsBundles(bundleName);
      const encapsulatedCss = await getEncapsulatedCss(bundleName);
      mergeToJs(bundleName, encapsulatedCss);
    } else {
      console.error(err)
    }
  });
}

buildWebComponent();

