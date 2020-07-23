const path = require('path')

function load_html_by_name(window, name) {
  if (process.env.NODE_ENV === "development") {
    window.loadURL(`http://localhost:8888/${name}.html`).catch(console.error);
    return;
  }
  window
    .loadFile(path.resolve(__dirname, `../renderer/${name}/index.html`))
    .catch(console.error);
}

module.exports = {
  load_html_by_name,
};
