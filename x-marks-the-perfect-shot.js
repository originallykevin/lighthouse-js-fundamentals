const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  




const finalPosition = function (moves) {
  const position = [0,0]

  for (const move of moves) {
    if (move === 'north') {
      position[1] += 1
    }

    else if (move === 'east') {
      position[0] += 1
    }

    else if (move === 'south') {
      position[1] -= 1
    }

    else if (move === 'west') {
      position[0] -= 1
    }

  }
  return position
}


console.log(finalPosition(moves))
// finalPosition(moves);
// loop through moves
// if move is north, position[1] += 1
// if move is east, position[0] += 1
// if move is south, position[1] -= 1
// if move is west, position[0] -= 1