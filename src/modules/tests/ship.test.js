const ship = require('../factories/ship')

// HIT SHIP
test('Ship hit 1 time', () => {
    const battleship = ship(3)
    battleship.hitShip()
    expect(battleship.hits).toBe(1)
})

test('Ship hit 3 times', () => {
    const battleship = ship(3)
    battleship.hitShip()
    battleship.hitShip()
    battleship.hitShip()
    expect(battleship.hits).toBe(3)
})

// SINK SHIP
test('Ship is not sunk', () => {
    const battleship = ship(3)
    battleship.hitShip()
    battleship.hitShip()
    expect(battleship.isSunk).toBeFalsy()
})

test('Ship is sunk', () => {
    const battleship = ship(3)
    battleship.hitShip()
    battleship.hitShip()
    battleship.hitShip()
    expect(battleship.isSunk).toBeTruthy()
})