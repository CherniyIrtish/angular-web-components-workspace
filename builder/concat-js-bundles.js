const fsExtra = require('fs-extra');
const concat = require('concat');

const concatJsBundles = async (projectName) => {
  const files = [
    `./dist/${projectName}/polyfill-webcomp.js`,
    `./dist/${projectName}/polyfill-webcomp-es5.js`,
    `./dist/${projectName}/polyfills.js`,
    `./dist/${projectName}/main.js`,
    `./dist/${projectName}/runtime.js`
  ];

  await fsExtra.ensureDir(`components`);
  await concat(files, `components/${projectName}.js`);
}
module.exports = concatJsBundles;
