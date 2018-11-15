#!/usr/bin/env node
'use strict'

const fs = require('fs')


const contents = fs.readFileSync('commands.txt', 'utf8');

console.log('file contents', contents);

function processCommands(contents) {
  // Implement
}
