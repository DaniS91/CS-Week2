export default class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(name) {
    this.adjacencyList.set(name, new Set());
  }

  hasNode(name) {
    if (this.adjacencyList.get(name)) {
      return true;
    }
    return false;
  }

  createEdge(node1, node2) {
    this.adjacencyList.get(node1).add(node2);;
    this.adjacencyList.get(node2).add(node1);
  }

  hasEdge(node1, node2) {
    if (this.adjacencyList.get(node1).has(node2)) {
      return true
    }
    return false;
  }

  removeEdge(node1, node2) {
    this.adjacencyList.get(node1).delete(node2);
    this.adjacencyList.get(node2).delete(node1);
  }
  // Because this is an undirected graph, both nodes include the other node in their set of adjacent nodes. That means we need to remove node1 from node2's adjacent nodes and vice versa.

  removeNode(name) {
    if (this.adjacencyList.has(name)) {
      this.adjacencyList.get(name).forEach((edge) => {
        this.adjacencyList.get(edge).delete(name);
      });
      this.adjacencyList.delete(name);
    }
  }

  depthFirstReachable(startingNode, targetNode) {
    if ((!this.adjacencyList.has(startingNode)) || (!this.adjacencyList.has(targetNode))) {
      return false;
    }
    let stack = [startingNode];
    let traversedNodes = new Set();
    // Remember, hash table lookup is O(1) constant time — and a Set uses a hash table under the hood.
    while (stack.length) {
      const currentNode = stack.shift();
      if (currentNode === targetNode) {
        return true;
      } else {
        traversedNodes.add(currentNode);
        const adjacencyList = this.adjacencyList.get(currentNode);
        adjacencyList.forEach(function(node) {
          if(!traversedNodes.has(node)) {
            stack.unshift(node);
          }
        });
      }
    }
    return false;
  }


  // literally the only difference within the inner loop of this method is that we are using .push() instead of .unshift()
  breadthFirstReachable(startingNode, targetNode) {
    if ((!this.adjacencyList.has(startingNode)) || (!this.adjacencyList.has(targetNode))) {
      return false;
    }
    let queue = [startingNode];
    let traversedNodes = new Set();
    while (queue.length) {
      const currentNode = queue.shift();
      if (currentNode === targetNode) {
        return true;
      } else {
        traversedNodes.add(currentNode);
        const adjacencyList = this.adjacencyList.get(currentNode);
        adjacencyList.forEach(function(node) {
          if (!traversedNodes.has(node)) {
            queue.push(node);
          }
        });
      }
    }
    return false;
  }
}