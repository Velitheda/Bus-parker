#!/usr/bin/env node
'use strict'

const fs = require('fs')
const State = require('./State')

const contents = fs.readFileSync('commands.txt', 'utf8');

console.log('file contents', contents);

const commands = contents.split('\n')
console.log('commands', commands)

function processCommands(commands) {
  commands.reduce((state, command) => {
    return processCommand(command, state)
  }, new State(0, 0, 'NORTH'))
}

function processCommand(command, state) {

}

module.exports = processCommands
