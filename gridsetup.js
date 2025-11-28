const coordinateKey = (x, y) => `${x},${y}`;

const createLiveChecker = (liveCoordinates) => {
  const liveSet = new Set(liveCoordinates.map(([x, y]) => coordinateKey(x, y)));
  return (x, y) => liveSet.has(coordinateKey(x, y));
};

const buildGrid = (cols, rows, isLive) => {
  const grid = [];
  for (let y = 1; y <= rows; y += 1) {
    for (let x = 1; x <= cols; x += 1) {
      grid.push({ x, y, live: isLive(x, y) });
    }
  }
  return grid;
};

const range = (start, end) => {
  const values = [];
  for (let i = start; i <= end; i += 1) {
    values.push(i);
  }
  return values;
};

const addBlock = (xs, ys) => {
  const coords = [];
  xs.forEach((x) => ys.forEach((y) => coords.push([x, y])));
  return coords;
};

const GridSetup = {
  blinker: () => {
    const liveCoords = addBlock(range(2, 4), [3]);
    return buildGrid(5, 5, createLiveChecker(liveCoords));
  },
  toad: () => {
    const liveCoords = [
      ...addBlock(range(2, 4), [3]),
      ...addBlock(range(3, 5), [4]),
    ];
    return buildGrid(6, 6, createLiveChecker(liveCoords));
  },
  beacon: () => {
    const liveCoords = [
      ...addBlock([2, 3], [2, 3]),
      ...addBlock([4, 5], [4, 5]),
    ];
    return buildGrid(6, 6, createLiveChecker(liveCoords));
  },
  pulsar: () => {
    const liveCoords = [
      ...addBlock([5, 6, 7, 11, 12, 13], [3, 8, 10, 15]),
      ...addBlock([3, 8, 10, 15], [5, 6, 7, 11, 12, 13]),
    ];
    return buildGrid(17, 17, createLiveChecker(liveCoords));
  },
  random: () => buildGrid(
    50,
    50,
    () => Math.random() > 0.66,
  ),
  acorn: () => {
    const liveCoords = [
      ...addBlock(range(2, 3), [4]),
      ...addBlock(range(6, 8), [4]),
      [3, 2],
      [5, 3],
    ];
    return buildGrid(9, 5, createLiveChecker(liveCoords));
  },
  diehard: () => {
    const liveCoords = [
      ...addBlock(range(7, 9), [4]),
      ...addBlock(range(2, 3), [3]),
      [8, 2],
      [3, 4],
    ];
    return buildGrid(10, 5, createLiveChecker(liveCoords));
  },
};

export default GridSetup;
