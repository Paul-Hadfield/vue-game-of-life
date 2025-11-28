import GridSetup, { type Cell } from './gridsetup';

const applyRules = (isLive: boolean, liveNeighbours: number): boolean => {
  if (isLive) {
    return (liveNeighbours === 2) || (liveNeighbours === 3);
  }
  return liveNeighbours === 3;
};

const coordinateKey = (x: number, y: number): string => `${x},${y}`;

const buildLiveSet = (currentGrid: Cell[]): Set<string> => {
  const liveSet = new Set<string>();
  currentGrid.forEach((cell) => {
    if (cell.live) {
      liveSet.add(coordinateKey(cell.x, cell.y));
    }
  });
  return liveSet;
};

const countLiveNeighbours = (cell: Cell, liveSet: Set<string>): number => {
  let liveNeighbours = 0;
  for (let dx = -1; dx <= 1; dx += 1) {
    for (let dy = -1; dy <= 1; dy += 1) {
      const isSelf = dx === 0 && dy === 0;
      if (!isSelf && liveSet.has(coordinateKey(cell.x + dx, cell.y + dy))) {
        liveNeighbours += 1;
      }
    }
  }
  return liveNeighbours;
};

const GameEngine = {
  setupBlinker: (): Cell[] => GridSetup.blinker(),
  setupToad: (): Cell[] => GridSetup.toad(),
  setupBeacon: (): Cell[] => GridSetup.beacon(),
  setupRandom: (): Cell[] => GridSetup.random(),
  setupPulsar: (): Cell[] => GridSetup.pulsar(),
  setupAcorn: (): Cell[] => GridSetup.acorn(),
  setupDiehard: (): Cell[] => GridSetup.diehard(),

  nextGeneration: (currentGrid: Cell[]): Cell[] => {
    const liveSet = buildLiveSet(currentGrid);
    return currentGrid.map((cell) => ({
      x: cell.x,
      y: cell.y,
      live: applyRules(cell.live, countLiveNeighbours(cell, liveSet)),
    }));
  },
};

export default GameEngine;
