class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.nodes.add(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex);
    vertex.adjacent.forEach(node => {
      node.adjacent.delete(vertex);
    });
  }

  // this function returns an array of Node values using DFS. Used solution for study
  depthFirstSearch(start) {
     // Create an empty stack
     const stack = [start];
     const result = [];
     const visited = new Set();
     let currentVertex;
 
     // visit node
     visited.add(start);
 
     // while there are still neighbors to visit
     while (stack.length) {
       currentVertex = stack.pop();
       result.push(currentVertex.value);
 
       // visit neighbors and push onto stack
       currentVertex.adjacent.forEach(neighbor => {
         if (!visited.has(neighbor)) {
           visited.add(neighbor);
           stack.push(neighbor);
         }
       });
     }
     return result;
  }

  // this function returns an array of Node values using BFS. Used solution for study
  breadthFirstSearch(start) {
    // Create an empty queue
    const queue = [start];
    const result = [];
    const visited = new Set();
    let currentVertex;

    // visit node
    visited.add(start);

    // While there is still remaining vertices in queue
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex.value);

      // visit neighbors
      currentVertex.adjacent.forEach(neighbor => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

module.exports = {Graph, Node}