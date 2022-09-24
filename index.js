#!/usr/bin/env node

'use strict';
const AdmZip = require('adm-zip')
const console = require('console');
const fs = require('fs');
const path = require('path');
var sanitize = require("sanitize-filename");

const argv = require('yargs')
    .usage('Usage: $0 --src [source] --dst [destination] --n [fileName]')
    .option('source', {
        alias: 'src',
        default: './',
    })
    .option('destination', {
        alias: 'dst',
        default: './',
    })
    .option('fileName', {
        alias: 'n',
        default: 'package.zip',
    })
    .option('ignoreNodeModules', {
        alias: 'inm',
        default: false,
    })
    .argv;

argv.source = argv.source;
argv.destination = argv.destination;
argv.fileName = sanitize(argv.fileName);

const filename = path.join(argv.destination, argv.fileName);

if(fs.existsSync(filename)){
    fs.unlinkSync(filename);
}

if (argv.destination && !fs.existsSync(argv.destination)) {
    fs.mkdirSync(destination);
}

console.time('zip started');

const filter = (f) => {
    if(argv.ignoreNodeModules && p.startsWith('node_modules')) return false;
    if(p.startsWith('.git')) return false;
    return true; 
}

try {
    const zip = new AdmZip();
    zip.addLocalFolder(argv.source, undefined, filter);
    zip.writeZip(`./${filename}`);
    console.timeEnd(`${filename} zipped`)
    process.exit(0);
} catch (error) {
  console.error(error);
  process.exit(1);
}