#!/usr/bin/env node

'use strict';

const console = require('console');
const { pack } = require('../index');

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

try {
    pack(argv);
    process.exit(0);
} catch (error) {
    console.error(error);
        process.exit(1);
}