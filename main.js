#!/usr/bin/env node
'use strict'

const fs = require('fs')
const State = require('./models/State')

const placeRegex = '^PLACE ([0-4]),([0-4]),(NORTH|SOUTH|EAST|WEST)$'

const contents = fs.readFileSync('commands.txt', 'utf8')
const commands = contents.split('\n')

processCommands(commands)

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
  } else if (command === 'RIGHT') {
    return state.right()
  } else if (command === 'REPORT') {
    console.log(state.toString())
    return state
  }
  return state
}

module.exports = processCommands
