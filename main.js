#!/usr/bin/env node
'use strict'

const fs = require('fs')
const State = require('./State')

const placeRegex = '^PLACE ([0-4]),([0-4]),(NORTH|SOUTH|EAST|WEST)$'

const contents = fs.readFileSync('commands.txt', 'utf8');

console.log('file contents', contents);

const commands = contents.split('\n')
console.log('commands', commands)

function processCommands(commands) {
  return commands.reduce((state, command) => {
    return processCommand(command, state)
  }, new State(0, 0, 'NORTH'))
}

function processCommand(command, state) {
  if (command.match(placeRegex)) {
    const matchedResult = command.match(placeRegex)
    return new State(parseInt(matchedResult[1]), parseInt(matchedResult[2]), matchedResult[3])
  } else if (command === 'MOVE') {
    return state.move()
  } else if (command === 'LEFT') {
    return state.left()
  }
  return state
}

module.exports = processCommands
