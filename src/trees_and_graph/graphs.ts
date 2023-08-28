type Graph = {
  [key in Persons]: {
    friends: string[];
    income: number;
  };
};

const graph = {
  Alice: {
    friends: ["Bob", "Charlie"],
    income: 50000,
  },
  Bob: {
    friends: ["Alice", "Charlie", "David"],
    income: 60000,
  },
  Charlie: {
    friends: ["Alice", "Bob", "David"],
    income: 55000,
  },
  David: {
    friends: ["Bob", "Charlie", "Eve"],
    income: 70000,
  },
  Eve: {
    friends: ["David"],
    income: 48000,
  },
};

type Persons = keyof typeof graph;

function mostMoney(name: Persons, graph: Graph, degree: number) {
  let queue: string[] = [];
  let max = 0;
  let current = graph[name];
  max = Math.max(current.income, max);
  queue.shift();
  while (queue.length) {
    let current: Persons = queue.shift() as Persons;
    let p = graph[current] as { friends: string[]; income: number };
    if (p) {
      max = Math.max(p.income, max);
      for (let i = 0; i < degree; i++) {
        let cp = p.friends[i];
        if (queue.indexOf(cp) === -1 && cp) {
          queue.push(cp);
        }
      }
    }
  }
  return max;
}

console.log(mostMoney("Bob", graph, 3));
