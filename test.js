const expect = require('chai').expect

describe.skip('Place command', () => {
  it('should place the bus inside the carpark facing the specified direction', () => {

  })
  it('should not place the bus if it would place it outside the carpark', () => {

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
