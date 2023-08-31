import Dictionary from "../dictionary-hash/dictionary.js";
import Queue from "../queue-deque/queue.js";

const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2,
};

class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Dictionary();
  }

  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }

  addEdge(v, w) {
    if (!this.adjList.get(v)) {
      this.addVertex(v);
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w);
    }
    this.adjList.get(v).push(w);
    if (!this.isDirected) {
      this.adjList.get(w).push(v);
    }
  }

  getVertices() {
    return this.vertices;
  }

  getAdjList() {
    return this.adjList;
  }

  toString() {
    let s = "";
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} -> `;
      const neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]} `;
      }
      s += "\n";
    }
    return s;
  }
}

const initializeColor = (vertices) => {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
};

// export const breadFirstSearch = (graph, startVertex, callback) => {
//   const vertices = graph.getVertices();
//   const adjList = graph.getAdjList();
//   const color = initializeColor(vertices);
//   const queue = new Queue();
//   queue.enqueue(startVertex);
//   while (!queue.isEmpty()) {
//     const u = queue.dequeqe();
//     const neighbors = adjList.get(u);
//     color[u] = Colors.GREY;
//     for (let i = 0; i < neighbors.length; i++) {
//       const w = neighbors[i];
//       if (color[w] === Colors.WHITE) {
//         color[w] = Colors.GREY;
//         queue.enqueue(w);
//       }
//     }
//     color[u] = Colors.BLACK;
//     if (callback) {
//       callback(u);
//     }
//   }
// };

const BFS = (graph, startVertex) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = new Queue();
  const distances = {};
  const predecessors = {};
  queue.enqueue(startVertex);
  for (let i = 0; i < vertices.length; i++) {
    distances[vertices[i]] = 0;
    predecessors[vertices[i]] = null;
  }
  while (!queue.isEmpty()) {
    const u = queue.dequeqe();
    const neighbors = adjList.get(u);
    color[u] = Colors.GREY;
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        distances[w] = distances[u] + 1;
        predecessors[w] = u;
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
  }
  return {
    distances,
    predecessors,
  };
};

// const depthFirstSearch = (graph, callback) => {
//   const vertices = graph.getVertices();
//   const adjList = graph.getAdjList();
//   const color = initializeColor(vertices);
//   for (let i = 0; i < vertices.length; i++) {
//     if (color[vertices[i]] === Colors.WHITE) {
//       depthFirstSearchVisit(vertices[i], color, adjList, callback);
//     }
//   }
// };
// const depthFirstSearchVisit = (u, color, adjList, callback) => {
//   color[u] = Colors.GREY;
//   if (callback) {
//     callback(u);
//   }
//   const neighbors = adjList.get(u);
//   for (let i = 0; i < neighbors.length; i++) {
//     const w = neighbors[i];
//     if (color[w] === Colors.WHITE) {
//       depthFirstSearchVisit(w, color, adjList, callback);
//     }
//   }
//   color[u] = Colors.BLACK;
// };

export const DFS = (graph) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const d = {};
  const f = {};
  const p = {};
  const time = { count: 0 };
  for (let i = 0; i < vertices.length; i++) {
    f[vertices[i]] = 0;
    d[vertices[i]] = 0;
    p[vertices[i]] = null;
  }
  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      DFSVisit(vertices[i], color, d, f, p, time, adjList);
    }
  }
  return {
    discovery: d,
    finished: f,
    predecessors: p,
  };
};
const DFSVisit = (u, color, d, f, p, time, adjList) => {
  color[u] = Colors.GREY;
  d[u] = ++time.count;
  const neighbors = adjList.get(u);
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if (color[w] === Colors.WHITE) {
      p[w] = u;
      DFSVisit(w, color, d, f, p, time, adjList);
    }
  }
  color[u] = Colors.BLACK;
  f[u] = ++time.count;
};

// let graph = new Graph(true); // grafo direcionado
// let myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
// for (let i = 0; i < myVertices.length; i++) {
//   graph.addVertex(myVertices[i]);
// };
// graph.addEdge('A', 'C');
// graph.addEdge('A', 'D');
// graph.addEdge('B', 'D');
// graph.addEdge('B', 'E');
// graph.addEdge('C', 'F');
// graph.addEdge('F', 'E');
// const result = DFS(graph);

// const fTimes = result.finished;
// let s = '';
// for (let count = 0; count < myVertices.length; count++) {
//   let max = 0;
//   let maxName = null;
//   for (let i = 0; i < myVertices.length; i++) {
//     if (fTimes[myVertices[i]] > max) {
//       max = fTimes[myVertices[i]];
//       maxName = myVertices[i];
//     }
//   }
//   s += ' - ' + maxName;
//   delete fTimes[maxName];
// }

// var graph = [
//   [0, 2, 4, 0, 0, 0],
//   [0, 0, 1, 4, 2, 0],
//   [0, 0, 0, 0, 3, 0],
//   [0, 0, 0, 0, 0, 2],
//   [0, 0, 0, 3, 0, 2],
//   [0, 0, 0, 0, 0, 0],
// ];

// const INF = Number.MAX_SAFE_INTEGER;
// const dijkstra = (graph, src) => {
//   const dist = [];
//   const visited = [];
//   const { length } = graph;
//   for (let i = 0; i < length; i++) { // {1}
//     dist[i] = INF;
//     visited[i] = false;
//   }
//   dist[src] = 0; // {2}
//   for (let i = 0; i < length - 1; i++) { // {3}
//     const u = minDistance(dist, visited); // {4}
//     visited[u] = true; // {5}
//     for (let v = 0; v < length; v++) {
//       if (!visited[v] && graph[u][v] !== 0 && dist[u] !== INF && dist[u] + graph[u][v] < dist[v]) { // {6}
//         dist[v] = dist[u] + graph[u][v]; // {7}
//       }
//     }
//   }
//   return dist; // {8}
// };

// const minDistance = (dist, visited) => {
//   let min = INF;
//   let minIndex = -1;
//   for (let v = 0; v < dist.length; v++) {
//     if (visited[v] === false && dist[v] <= min) {
//       min = dist[v];
//       minIndex = v;
//     }
//   }
//   return minIndex;
// };

const floydWarshall = (graph) => {
  const dist = [];
  const { length } = graph;
  for (let i = 0; i < length; i++) {
    dist[i] = [];
    for (let j = 0; j < length; j++) {
      if (i === j) {
        dist[i][j] = 0;
      } else if (!isFinite(graph[i][j])) {
        dist[i][j] = Infinity;
      } else {
        dist[i][j] = graph[i][j];
      }
    }
  }
  for (let k = 0; k < length; k++) {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  return dist;
};

const INF = Number.MAX_SAFE_INTEGER;
const prim = (graph) => {
  const parent = [];
  const key = [];
  const visited = [];
  const { length } = graph;
  for (let i = 0; i < length; i++) {
    key[i] = INF;
    visited[i] = false;
  }
  key[0] = 0;
  parent[0] = -1;
  for (let i = 0; i < length; i++) {
    const u = minKey(graph, key, visited);
    visited[u] = true;
    for (let v = 0; v < length; v++) {
      if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) {
        parent[v] = u;
        key[v] = graph[u][v];
      }
    }
  }
  return parent;
};

var graph = [
  [0, 2, 4, 0, 0, 0],
  [2, 0, 2, 4, 2, 0],
  [4, 2, 0, 0, 3, 0],
  [0, 4, 0, 0, 3, 2],
  [0, 2, 3, 3, 0, 2],
  [0, 0, 0, 2, 2, 0],
];
