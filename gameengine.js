import GridSetup from './gridsetup';

const applyRules = (isLive, liveNeighbours) => {
  if (isLive) {
    return (liveNeighbours === 2) || (liveNeighbours === 3);
  }
  return liveNeighbours === 3;
};

const buildLiveSet = (currentGrid) => {
  const liveSet = new Set();
  currentGrid.forEach((cell) => {
    if (cell.live) {
      liveSet.add(`${cell.x},${cell.y}`);
    }
  });
  return liveSet;
};

const countLiveNeighbours = (cell, liveSet) => {
  let liveNeighbours = 0;
  for (let dx = -1; dx <= 1; dx += 1) {
    for (let dy = -1; dy <= 1; dy += 1) {
      const isSelf = dx === 0 && dy === 0;
      if (!isSelf && liveSet.has(`${cell.x + dx},${cell.y + dy}`)) {
        liveNeighbours += 1;
      }
    }
  }
  return liveNeighbours;
};

const GameEngine = {
  setupBlinker: () => GridSetup.blinker(),
  setupToad: () => GridSetup.toad(),
  setupBeacon: () => GridSetup.beacon(),
  setupRandom: () => GridSetup.random(),
  setupPulsar: () => GridSetup.pulsar(),
  setupAcorn: () => GridSetup.acorn(),
  setupDiehard: () => GridSetup.diehard(),

  nextGeneration: (currentGrid) => {
    const liveSet = buildLiveSet(currentGrid);
    return currentGrid.map((cell) => ({
      x: cell.x,
      y: cell.y,
      live: applyRules(cell.live, countLiveNeighbours(cell, liveSet)),
    }));
  },
};

export default GameEngine;
