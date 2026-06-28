const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const themes = {
  red:   { primary: '#a50020', secondary: '#D10024', hover: '#a70019' },
  green: { primary: '#1a6b2f', secondary: '#28a745', hover: '#1a6b2f' },
  blue:  { primary: '#0d3b6e', secondary: '#1565c0', hover: '#0d3b6e' },
};

const theme = themes[process.env.APP_THEME] || themes.red;

let scriptJs = fs.readFileSync('./script.js', 'utf8');
scriptJs = scriptJs.replace(/process\.env\.BACKEND_URL/g, `'${process.env.BACKEND_URL}'`);
fs.writeFileSync('./script.js', scriptJs);

let styleCss = fs.readFileSync('./style.css', 'utf8');
styleCss = styleCss
  .replace(/THEME_PRIMARY/g, theme.primary)
  .replace(/THEME_SECONDARY/g, theme.secondary)
  .replace(/THEME_HOVER/g, theme.hover);
fs.writeFileSync('./style.css', styleCss);

console.log(`Build concluído — tema: ${process.env.APP_THEME || 'red'}, backend: ${process.env.BACKEND_URL}`);
