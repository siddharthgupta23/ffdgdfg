const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'node_modules', 'webpack', 'lib', 'util', 'createHash.js');
let fileContent = fs.readFileSync(filePath, 'utf-8');
fileContent = fileContent.replace('createHash(algorithm)', 'createHash(algorithm === "md4" ? "sha256" : algorithm)');
fs.writeFileSync(filePath, fileContent, 'utf-8');
                                            