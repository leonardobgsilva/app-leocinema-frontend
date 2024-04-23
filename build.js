const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const scriptJsPath = './script.js';
let scriptJsContent = fs.readFileSync(scriptJsPath, 'utf8');
scriptJsContent = scriptJsContent.replace(/process\.env\.BACKEND_URL/g, `'${process.env.BACKEND_URL}'`);
fs.writeFileSync(scriptJsPath, scriptJsContent);

console.log('Variáveis de ambiente substituídas no arquivo script.js');
