import { countAlive } from "./countAlive.js";

export function applyRules(array, x, y, game) {
  const neighbours = countAlive(array, x, y, game);
  const preStatus = array[y][x];
  let postStatus = preStatus;
  if (preStatus === game.alive) {
    if (neighbours < 2) {
      postStatus = game.dead;
    }

    if (neighbours === 2 || neighbours === 3) {
      postStatus = game.alive;
    }

    if (neighbours > 3) {
      postStatus = game.dead;
    }
  }

  if (preStatus === game.dead) {
    if (neighbours === 3) {
      postStatus = game.alive;
    } else {
      postStatus = game.dead;
    }
  }

  return postStatus;
}
