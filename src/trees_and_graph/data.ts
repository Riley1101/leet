export type WeightedAdjacencyMatrix = {
  to: number,
  weight: number
}[][]; // A number means weight

export default [
  [
    // 0
    {to : 2, weight : 1},
    {to : 1, weight : 3},
  ],
  [
    // 1
    {to : 0, weight : 3},
    {to : 4, weight : 1},
    {to : 3, weight : 3},
  ],
  [
    // 2
    {to : 0, weight : 1},
    {to : 3, weight : 7},
  ],
  [
    // 3
    {to : 6, weight : 1},
    {to : 1, weight : 3},
    {to : 2, weight : 7},
  ],
  [
    // 4
    {to : 1, weight : 1},
    {to : 5, weight : 2},
  ],
  [
    // 5
    {to : 4, weight : 2},
    {to : 6, weight : 1},
  ],
  [
    // 6
    {to : 5, weight : 1},
    {to : 3, weight : 1},
  ],
];
