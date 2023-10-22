/* eslint-disable complexity */
export function countAlive(array, x, y, game) {
  let count = 0;
  if (y - 1 >= 0) {
    if (array[y - 1][x] === game.alive) count++;
  }

  if (y - 1 >= 0 && x - 1 >= 0) {
    if (array[y - 1][x - 1] === game.alive) count++;
  }

  if (y - 1 >= 0 && x + 1 < game.height) {
    if (array[y - 1][x + 1] === game.alive) count++;
  }

  if (x - 1 >= 0) {
    if (array[y][x - 1] === game.alive) count++;
  }

  if (x + 1 < game.height) {
    if (array[y][x + 1] === game.alive) count++;
  }

  if (y + 1 < game.width) {
    if (array[y + 1][x] === game.alive) count++;
  }

  if (y + 1 < game.width && x - 1 >= 0) {
    if (array[y + 1][x - 1] === game.alive) count++;
  }

  if (y + 1 < game.width && x + 1 < game.height) {
    if (array[y + 1][x + 1] === game.alive) count++;
  }

  return count;
}
