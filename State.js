class State {
  constructor(x, y, direction) {
    this.x = x
    this.y = y
    this.direction = direction
  }

  move () {
    switch (this.direction) {
      case 'NORTH':
        const newLocation = this.y + 1
        return new State(this.x, this.validLocation(newLocation, this.y), 'NORTH')
      case 'EAST':
        return new State(this.validLocation(this.x + 1, this.x), this.y, 'EAST')
      case 'SOUTH':
        return new State(this.x, this.validLocation(this.y - 1, this.y), 'SOUTH')
      case 'WEST':
        return new State(this.validLocation(this.x - 1, this.x), this.y, 'WEST')
      default:
        null
      }
  }

  validLocation (newLocation, oldLocation) {
    if (newLocation < 5 && newLocation >= 0) {
      return newLocation
    } else {
      return oldLocation
    }
  }
}

module.exports = State
