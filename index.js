#!/usr/bin/env node

'use strict';
const AdmZip = require('adm-zip');
const console = require('console');
const fs = require('fs');
const path = require('path');
var sanitize = require("sanitize-filename");

function pack(argv) {
    argv.source = argv.source || './'
    argv.destination = argv.destination || './';
    argv.fileName = sanitize(argv.fileName);
    argv.ignoreNodeModules = !!argv.ignoreNodeModules;

    const filename = path.join(argv.destination, argv.fileName);

    if (fs.existsSync(filename)) {
        fs.unlinkSync(filename);
    }

    if (argv.destination && !fs.existsSync(argv.destination)) {
        fs.mkdirSync(destination);
    }

    const filter = (f) => {
        if (argv.ignoreNodeModules && f.startsWith('node_modules')) return false;
        if (f.startsWith('.git')) return false;
        return true;
    }

    const zip = new AdmZip();
    zip.addLocalFolder(argv.source, undefined, filter);
    zip.writeZip(`./${filename}`);
}

module.exports = { pack };