import { applyRules } from "./modules/applyRules.js";
import { Game } from "./modules/Game.js";

const game = new Game(16, 16, "O", " ");

const initialArray = (game) => {
  const array = [];
  for (let y = 0; y <= game.height; y++) {
    array[y] = [];
    for (let x = 0; x <= game.width; x++) {
      if (Math.random() > 0.5) {
        array[y][x] = game.alive;
      } else array[y][x] = game.dead;
    }
  }

  return array;
};

function changeArray(array, game) {
  const newArray = array;
  for (let y = 0; y <= game.height; y++) {
    for (let x = 0; x <= game.width; x++) {
      newArray[y][x] = applyRules(array, x, y, game);
    }
  }

  return newArray;
}

function startGame(array, game) {
  for (let index = 0; index < 1000; index++) {
    setTimeout(() => {
      console.clear();
      console.log(index);
      console.table(changeArray(array, game));
    }, 200 * index);
  }
}

// Console.table(initialArray(game));
startGame(initialArray(game), game);
