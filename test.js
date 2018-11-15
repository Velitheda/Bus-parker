const expect = require('chai').expect

const processCommands = require('./main')

describe('Place command', () => {
  it('should place the bus inside the carpark facing the specified direction', () => {
    const commands = ['PLACE 1,2,EAST']
    const state = processCommands(commands)
    expect(state.x).to.equal(1)
    expect(state.y).to.equal(2)
    expect(state.direction).to.equal('EAST')
  })
  it('should not place the bus if it would place it outside the carpark', () => {
    const commands = ['PLACE 6,-1,EAST']
    const state = processCommands(commands)
    expect(state.x).to.not.equal(6)
  })
})

describe.skip('Report command', () => {
  it('should print where the bus is and what direction it is facing', () => {

  })
  it('should not place the bus if it would place it outside the carpark', () => {

  })
})

describe.skip('Move command', () => {
  it('should move the bus forward if it is facing North', () => {

  })
  it('should move the bus forward if it is facing South', () => {

  })
  it('should move the bus forward if it is facing East', () => {

  })
  it('should move the bus forward if it is facing West', () => {

  })
})

describe.skip('Move command near edges', () => {
  it('should not move the bus forward if it is next to the left edge of the carpark', () => {

  })
  it('should not move the bus forward if it is next to the right edge of the carpark', () => {

  })
  it('should not move the bus forward if it is next to the top edge of the carpark', () => {

  })
  it('should not move the bus forward if it is next to the bottom edge of the carpark', () => {

  })
})

describe.skip('Left command', () => {
  it('should turn the bus left if it is facing north', () => {

  })
  it('should turn the bus left if it is facing South', () => {

  })
  it('should turn the bus left if it is facing East', () => {

  })
  it('should turn the bus left if it is facing West', () => {

  })
})


describe.skip('Right command', () => {
  it('should turn the bus right if it is facing north', () => {

  })
  it('should turn the bus right if it is facing South', () => {

  })
  it('should turn the bus right if it is facing East', () => {

  })
  it('should turn the bus right if it is facing West', () => {

  })
})

describe.skip('Command ordering', () => {
  it('should ignore all other commands until it is given the first place command', () => {

  })
})

describe.skip('Invalid command', () => {
  it('should not move the bus if it recives an invalid command', () => {

  })
})

describe.skip('Series of commands', () => {
  it('should execute a given series of commands', () => {
    // PLACE 1,2,EAST MOVE
    // MOVE
    // LEFT
    // MOVE
    // REPORT
    // Output: 3,3,NORTH
  })
})
