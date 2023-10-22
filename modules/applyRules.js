/* eslint-disable no-else-return */
import { countAlive } from "./countAlive.js";

export function applyRules(array, x, y, game) {
  const neighbours = countAlive(array, x, y, game);
  if (array[y][x] === game.alive) {
    if (neighbours < 2) {
      return game.dead;
    } else if (neighbours === 2 || neighbours === 3) {
      return game.alive;
    } else if (neighbours > 3) {
      return game.dead;
    }
  } else if (array[y][x] === game.dead) {
    if (neighbours === 3) {
      return game.alive;
    } else return game.dead;
  }
}
