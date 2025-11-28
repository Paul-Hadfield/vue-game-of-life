import GridSetup from './gridsetup';

const applyRules = (isLive, liveNeighbours) => {
  if (isLive) {
    return (liveNeighbours === 2) || (liveNeighbours === 3);
  }
  return liveNeighbours === 3;
};

const excludeSelf = (cell, currentCell) => !(cell.x === currentCell.x && cell.y === currentCell.y);

const isLive = (cell) => cell.live;

const includeNeighbours = (cell, currentCell) => (
  (cell.x >= currentCell.x - 1) && (cell.x <= currentCell.x + 1)
    && (cell.y >= currentCell.y - 1) && (cell.y <= currentCell.y + 1)
);

const getNumberOfLiveNeighbours = (cell, currentGrid) => currentGrid
  .filter((nc) => excludeSelf(nc, cell))
  .filter((nc) => includeNeighbours(nc, cell))
  .filter(isLive).length;

const GameEngine = {
  setupBlinker: () => GridSetup.blinker(),
  setupToad: () => GridSetup.toad(),
  setupBeacon: () => GridSetup.beacon(),
  setupRandom: () => GridSetup.random(),
  setupPulsar: () => GridSetup.pulsar(),
  setupAcorn: () => GridSetup.acorn(),
  setupDiehard: () => GridSetup.diehard(),

  determineNewState: (cell, currentGrid) => ({
    x: cell.x,
    y: cell.y,
    live: applyRules(cell.live, getNumberOfLiveNeighbours(cell, currentGrid)),
  }),
};

export default GameEngine;
