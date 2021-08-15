const fileSystem = require('fs');

const mergeToJs = (bundleName, encapsulatedCss) => {
  const cssModule = `(function() {
    const css = ${JSON.stringify(encapsulatedCss)};
    const tag = document.createElement('style');

    tag.type = 'text/css';
    tag.appendChild(document.createTextNode(css));

    document.getElementsByTagName("head")[0].appendChild(tag);
    })()`

  fileSystem.appendFile(
    `components/${bundleName}.js`,
    cssModule,
    (err) => {
      if (err) {
        console.log(err)
      }
    }
  );
}

module.exports = mergeToJs;
