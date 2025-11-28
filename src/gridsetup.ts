export type Cell = {
  x: number;
  y: number;
  live: boolean;
};

// eslint-disable-next-line no-unused-vars
type LiveCheck = (x: number, y: number) => boolean;

const coordinateKey = (x: number, y: number): string => `${x},${y}`;

const createLiveChecker = (liveCoordinates: Array<[number, number]>) => {
  const liveSet = new Set(
    liveCoordinates.map(([coordX, coordY]) => coordinateKey(coordX, coordY)),
  );
  return (x: number, y: number): boolean => liveSet.has(coordinateKey(x, y));
};

const buildGrid = (
  cols: number,
  rows: number,
  isLive: LiveCheck,
): Cell[] => {
  const grid: Cell[] = [];
  for (let y = 1; y <= rows; y += 1) {
    for (let x = 1; x <= cols; x += 1) {
      grid.push({ x, y, live: isLive(x, y) });
    }
  }
  return grid;
};

const range = (start: number, end: number): number[] => {
  const values: number[] = [];
  for (let i = start; i <= end; i += 1) {
    values.push(i);
  }
  return values;
};

const addBlock = (xs: number[], ys: number[]): Array<[number, number]> => {
  const coords: Array<[number, number]> = [];
  xs.forEach((x) => ys.forEach((y) => coords.push([x, y])));
  return coords;
};

const GridSetup = {
  blinker: (): Cell[] => {
    const liveCoords = addBlock(range(2, 4), [3]);
    return buildGrid(5, 5, createLiveChecker(liveCoords));
  },
  toad: (): Cell[] => {
    const liveCoords = [
      ...addBlock(range(2, 4), [3]),
      ...addBlock(range(3, 5), [4]),
    ];
    return buildGrid(6, 6, createLiveChecker(liveCoords));
  },
  beacon: (): Cell[] => {
    const liveCoords = [
      ...addBlock([2, 3], [2, 3]),
      ...addBlock([4, 5], [4, 5]),
    ];
    return buildGrid(6, 6, createLiveChecker(liveCoords));
  },
  pulsar: (): Cell[] => {
    const liveCoords = [
      ...addBlock([5, 6, 7, 11, 12, 13], [3, 8, 10, 15]),
      ...addBlock([3, 8, 10, 15], [5, 6, 7, 11, 12, 13]),
    ];
    return buildGrid(17, 17, createLiveChecker(liveCoords));
  },
  random: (): Cell[] => buildGrid(
    50,
    50,
    () => Math.random() > 0.66,
  ),
  acorn: (): Cell[] => {
    const liveCoords: Array<[number, number]> = [
      ...addBlock(range(2, 3), [4]),
      ...addBlock(range(6, 8), [4]),
      [3, 2],
      [5, 3],
    ];
    return buildGrid(9, 5, createLiveChecker(liveCoords));
  },
  diehard: (): Cell[] => {
    const liveCoords: Array<[number, number]> = [
      ...addBlock(range(7, 9), [4]),
      ...addBlock(range(2, 3), [3]),
      [8, 2],
      [3, 4],
    ];
    return buildGrid(10, 5, createLiveChecker(liveCoords));
  },
};

export default GridSetup;
