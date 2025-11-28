/* eslint-disable no-param-reassign, eqeqeq */

function buildEmptyGrid(cols, rows) {
  let x = 1;
  let y = 1;

  const numberOfCells = rows * cols;

  const grid = [];

  const Util = {
    range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
  };

  Util.range(1, numberOfCells).forEach(() => {
    grid.push({ x, y, live: false });

    // eslint-disable-next-line no-plusplus
    x++;

    if (x > cols) {
      // eslint-disable-next-line no-plusplus
      x = 1; y++;
    }
  });

  return grid;
}

const getRandomIntInclusive = (min, max) => {
  const minFloored = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(
    Math.random(minFloored)
    * (maxFloored - minFloored + 1),
  ) + minFloored; // The maximum is inclusive and the minimum is inclusive
};

const GridSetup = {
  blinker: () => {
    const grid = buildEmptyGrid(5, 5);

    grid
      .filter((c) => c.x >= 2 && c.x <= 4)
      .filter((c) => c.y === 3)
      .forEach((cell) => { cell.live = true; });

    return grid;
  },
  toad: () => {
    const grid = buildEmptyGrid(6, 6);

    grid
      .filter((c) => c.x >= 2 && c.x <= 4)
      .filter((c) => c.y === 3)
      .forEach((cell) => { cell.live = true; });
    grid
      .filter((c) => c.x >= 3 && c.x <= 5)
      .filter((c) => c.y === 4)
      .forEach((cell) => { cell.live = true; });

    return grid;
  },
  beacon: () => {
    const grid = buildEmptyGrid(6, 6);

    grid
      .filter((c) => c.x === 2 || c.x === 3)
      .filter((c) => c.y === 2 || c.y === 3)
      .forEach((cell) => { cell.live = true; });
    grid
      .filter((c) => c.x === 4 || c.x === 5)
      .filter((c) => c.y === 4 || c.y === 5)
      .forEach((cell) => { cell.live = true; });

    return grid;
  },
  pulsar: () => {
    const grid = buildEmptyGrid(17, 17);

    grid
      .filter((c) => ((c.x >= 5 && c.x <= 7) || (c.x >= 11 && c.x <= 13)) && (c.y == 3))
      .forEach((cell) => { cell.live = true; });

    grid
      .filter((c) => ((c.x >= 5 && c.x <= 7) || (c.x >= 11 && c.x <= 13)) && (c.y == 8))
      .forEach((cell) => { cell.live = true; });

    grid
      .filter((c) => ((c.x >= 5 && c.x <= 7) || (c.x >= 11 && c.x <= 13)) && (c.y == 10))
      .forEach((cell) => { cell.live = true; });

    grid
      .filter((c) => ((c.x >= 5 && c.x <= 7) || (c.x >= 11 && c.x <= 13)) && (c.y == 15))
      .forEach((cell) => { cell.live = true; });

    grid
      .filter((c) => ((c.y >= 5 && c.y <= 7) || (c.y >= 11 && c.y <= 13)) && (c.x == 3))
      .forEach((cell) => { cell.live = true; });

    grid
      .filter((c) => ((c.y >= 5 && c.y <= 7) || (c.y >= 11 && c.y <= 13)) && (c.x == 8))
      .forEach((cell) => { cell.live = true; });

    grid
      .filter((c) => ((c.y >= 5 && c.y <= 7) || (c.y >= 11 && c.y <= 13)) && (c.x == 10))
      .forEach((cell) => { cell.live = true; });

    grid
      .filter((c) => ((c.y >= 5 && c.y <= 7) || (c.y >= 11 && c.y <= 13)) && (c.x == 15))
      .forEach((cell) => { cell.live = true; });

    return grid;
  },
  random: () => {
    const grid = buildEmptyGrid(50, 50);

    grid.forEach((cell) => { cell.live = getRandomIntInclusive(0, 100) > 66; });

    return grid;
  },
  acorn: () => {
    const grid = buildEmptyGrid(9, 5);

    grid
      .filter((c) => (c.x >= 2 && c.x <= 3) && c.y === 4)
      .forEach((cell) => { cell.live = true; });

    grid
      .filter((c) => (c.x >= 6 && c.x <= 8) && c.y === 4)
      .forEach((cell) => { cell.live = true; });

    grid
      .filter((c) => c.x === 3 && c.y === 2)
      .forEach((cell) => { cell.live = true; });

    grid
      .filter((c) => c.x === 5 && c.y === 3)
      .forEach((cell) => { cell.live = true; });

    return grid;
  },
  diehard: () => {
    const grid = buildEmptyGrid(10, 5);

    grid
      .filter((c) => (c.x >= 7 && c.x <= 9) && c.y === 4)
      .forEach((cell) => { cell.live = true; });

    grid
      .filter((c) => c.x === 8 && c.y === 2)
      .forEach((cell) => { cell.live = true; });

    grid
      .filter((c) => (c.x >= 2 && c.x <= 3) && c.y == 3)
      .forEach((cell) => { cell.live = true; });

    grid
      .filter((c) => c.x === 3 && c.y === 4)
      .forEach((cell) => { cell.live = true; });

    return grid;
  },
};

export default GridSetup;
/* eslint-disable no-param-reassign, eqeqeq */
