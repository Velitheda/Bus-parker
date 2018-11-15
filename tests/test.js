const expect = require('chai').expect

const processCommands = require('../main')

describe('Place command', () => {
  it('should place the bus inside the carpark facing the specified direction', () => {
    const state = processCommands(['PLACE 1,2,EAST'])
    expect(state.x).to.equal(1)
    expect(state.y).to.equal(2)
    expect(state.direction).to.equal('EAST')
  })
  it('should not place the bus if it would place it outside the carpark', () => {
    const state = processCommands(['PLACE 6,-1,EAST'])
    expect(state.x).to.not.equal(6)
    expect(state.y).to.not.equal(-1)
  })
  it('should overwrite a previous place command', () => {
    const state = processCommands(['PLACE 1,1,EAST', 'PLACE 2,2,WEST'])
    expect(state.x).to.equal(2)
    expect(state.y).to.equal(2)
    expect(state.direction).to.equal('WEST')
  })
})

describe('Report command', () => {
  it('should print where the bus is and what direction it is facing', () => {
    const commands = ['PLACE 1,2,EAST', 'REPORT']
    const state = processCommands(commands)
    expect(state.toString()).to.equal('1,2,EAST')
  })
})

describe('Move command', () => {
  it('should move the bus forward if it is facing North', () => {
    const state = processCommands(['PLACE 1,1,NORTH', 'MOVE'])
    expect(state.x).to.equal(1)
    expect(state.y).to.equal(2)
    expect(state.direction).to.equal('NORTH')
  })
  it('should move the bus forward if it is facing South', () => {
    const state = processCommands(['PLACE 1,1,SOUTH', 'MOVE'])
    expect(state.x).to.equal(1)
    expect(state.y).to.equal(0)
    expect(state.direction).to.equal('SOUTH')
  })
  it('should move the bus forward if it is facing East', () => {
    const state = processCommands(['PLACE 1,1,EAST', 'MOVE'])
    expect(state.x).to.equal(2)
    expect(state.y).to.equal(1)
    expect(state.direction).to.equal('EAST')
  })
  it('should move the bus forward if it is facing West', () => {
    const state = processCommands(['PLACE 1,1,WEST', 'MOVE'])
    expect(state.x).to.equal(0)
    expect(state.y).to.equal(1)
    expect(state.direction).to.equal('WEST')
  })
})

describe('Move command near edges', () => {
  it('should not move the bus forward if it is next to the left edge of the carpark', () => {
    const state = processCommands(['PLACE 0,1,WEST', 'MOVE'])
    expect(state.x).to.equal(0)
    expect(state.y).to.equal(1)
    expect(state.direction).to.equal('WEST')
  })
  it('should not move the bus forward if it is next to the right edge of the carpark', () => {
    const state = processCommands(['PLACE 4,1,EAST', 'MOVE'])
    expect(state.x).to.equal(4)
    expect(state.y).to.equal(1)
    expect(state.direction).to.equal('EAST')
  })
  it('should not move the bus forward if it is next to the top edge of the carpark', () => {
    const state = processCommands(['PLACE 1,4,NORTH', 'MOVE'])
    expect(state.x).to.equal(1)
    expect(state.y).to.equal(4)
    expect(state.direction).to.equal('NORTH')
  })
  it('should not move the bus forward if it is next to the bottom edge of the carpark', () => {
    const state = processCommands(['PLACE 1,0,SOUTH', 'MOVE'])
    expect(state.x).to.equal(1)
    expect(state.y).to.equal(0)
    expect(state.direction).to.equal('SOUTH')
  })
})

describe('Left command', () => {
  it('should turn the bus left if it is facing north', () => {
    const state = processCommands(['PLACE 1,1,NORTH', 'LEFT'])
    expect(state.x).to.equal(1)
    expect(state.y).to.equal(1)
    expect(state.direction).to.equal('WEST')
  })
  it('should turn the bus left if it is facing South', () => {
    const state = processCommands(['PLACE 1,1,SOUTH', 'LEFT'])
    expect(state.x).to.equal(1)
    expect(state.y).to.equal(1)
    expect(state.direction).to.equal('EAST')
  })
  it('should turn the bus left if it is facing East', () => {
    const state = processCommands(['PLACE 1,1,EAST', 'LEFT'])
    expect(state.x).to.equal(1)
    expect(state.y).to.equal(1)
    expect(state.direction).to.equal('NORTH')
  })
  it('should turn the bus left if it is facing West', () => {
    const state = processCommands(['PLACE 1,1,WEST', 'LEFT'])
    expect(state.x).to.equal(1)
    expect(state.y).to.equal(1)
    expect(state.direction).to.equal('SOUTH')
  })
})

describe('Right command', () => {
  it('should turn the bus right if it is facing north', () => {
    const state = processCommands(['PLACE 1,1,NORTH', 'RIGHT'])
    expect(state.x).to.equal(1)
    expect(state.y).to.equal(1)
    expect(state.direction).to.equal('EAST')
  })
  it('should turn the bus right if it is facing South', () => {
    const state = processCommands(['PLACE 1,1,SOUTH', 'RIGHT'])
    expect(state.x).to.equal(1)
    expect(state.y).to.equal(1)
    expect(state.direction).to.equal('WEST')
  })
  it('should turn the bus right if it is facing East', () => {
    const state = processCommands(['PLACE 1,1,EAST', 'RIGHT'])
    expect(state.x).to.equal(1)
    expect(state.y).to.equal(1)
    expect(state.direction).to.equal('SOUTH')
  })
  it('should turn the bus right if it is facing West', () => {
    const state = processCommands(['PLACE 1,1,WEST', 'RIGHT'])
    expect(state.x).to.equal(1)
    expect(state.y).to.equal(1)
    expect(state.direction).to.equal('NORTH')
  })
})

describe('Command ordering', () => {
  it('should ignore all other commands until it is given the first place command', () => {
    const state = processCommands(['MOVE', 'RIGHT', 'LEFT', 'REPORT', 'PLACE 1,2,EAST'])
    expect(state.x).to.equal(1)
    expect(state.y).to.equal(2)
    expect(state.direction).to.equal('EAST')
  })
})

describe('Invalid command', () => {
  it('should not move the bus if it recives an invalid command', () => {
    const state = processCommands(['PLACE 1,2,EAST', 'INVALID'])
    expect(state.x).to.equal(1)
    expect(state.y).to.equal(2)
    expect(state.direction).to.equal('EAST')
  })
})

describe('Series of commands', () => {
  it('should execute a given series of commands', () => {
    const commands = ['PLACE 1,2,EAST', 'MOVE', 'MOVE', 'LEFT', 'MOVE']
    const state = processCommands(commands)
    expect(state.x).to.equal(3)
    expect(state.y).to.equal(3)
    expect(state.direction).to.equal('NORTH')
  })
})
