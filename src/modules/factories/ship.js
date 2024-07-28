const ship = (shipLength) => {
    const length = shipLength
    let hits = 0
    let isSunk = false

    return {
        length,
        hits,
        isSunk,
        hitShip,
        sinkShip,
    }
}

function hitShip() {
    this.hits++
    if(this.hits === this.length) this.sinkShip()
}

function sinkShip() {
    this.isSunk = true
}

module.exports = ship