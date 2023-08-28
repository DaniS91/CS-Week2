# _CS Week 2 Summary and Projects_

#### By _Dani Steely_


#### _Coursework from week 2 of Epicodus Computer Science extension class._

## Technologies Used

* Javascript

## Description
This project was built during the Epicodus [Computer Science][CS] coursework in [Graph Theory][GT]. This repo is intended to be a reference for other Epicodus students and Alumni interested in the coursework but unable to attend the sessions.

## Overview, Definitions, and Recommended Reading/Videos
In computer science, a **graph** (also known as a network) is a collection of **nodes** (also known as vertices) and **edges** (also known as links or relations).

Edges can be **directed** (pointing in one direction) or **undirected** (pointing in both directions).

The lesson visually illustrates a key concept of graphs: **reachability**. Any singular node with a directed edge pointing towards it and no edges linking another node is unreachable.

A graph can also be **weighted** or **unweighted**. If a graph is weighted, its edges have numerical values associated with them. If it's unweighted, its edges do not have numerical values.

* read [Think Like A Git][TLAG]'s section on Graph Theory from Portland developer Sam Livingston-Gray

* watch this [short video][gt video] on graph theory which provides a nice overview

* read "Git Internals: Source Code Control and Beyond" by Scott Chacon, about Git and graph theory ([PDF][GitPDF])

#### So how can we represent a graph as code?
<img src="https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/undirected_graph_planets.png">

We can start by storing all the nodes in a data structure such as an array.

```js
const nodes = ["Lub", "Nu", "Zygob", "Wobox", "Cyra"];
```
#### Edge Lists
We can use an **edge list** to list all the edges between various nodes. Each edge can be written as a pair of values. For instance, we could depict the edge between Lub and Nu as:

```["Lub", "Nu"]```

To depict all of the edges in our graph, we could do the following:

```js
const edges = [["Lub", "Nu"], ["Zygob", "Nu"], ["Nu", "Wobox"], ["Wobox", "Cyra"]];
```
#### Adjacency Lists
Another way to represent all the edges in a graph is with an **adjacency list**. With an adjacency list, we'd list all of the nodes that each node is adjacent to. Let's use a JavaScript object to demonstrate.

```js
const adjacencyList = {
  "Zygob": ["Nu"],
  "Lub": ["Nu"],
  "Nu": ["Lub", "Zygob", "Wobox"],
  "Wobox": ["Nu", "Cyra"],
  "Cyra": ["Wobox"]
}
```
#### Adjacency Matrix
Finally, we can use an **adjacency matrix** to depict all the edges in a graph. An adjacency matrix uses a series of zeroes and ones or booleans to depict whether two nodes are adjacent or not.

Here's how this looks organized in a table.

|       | Lub   | Zygob | Cyra  | Nu    | Wobox |
| :---: | :---: | :---: | :---: | :---: | :---: |
| Lub   |   0   |   0   |   0   |   1   |   0   |
| Zygob |   0   |   0   |   0   |   1   |   0   |
| Cyra  |   0   |   0   |   0   |   0   |   1   |
| Nu    |   1   |   1   |   0   |   0   |   1   |
| Wobox |   0   |   0   |   1   |   1   |   0   |

To depict this in JavaScript, we'd use nested arrays to represent each row in the matrix:

```js
const adjacencyMatrix = [
  [0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [1, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
];
```
## Graph Project / Practice
We'll build out a small TDD application to create a graph, including adding and removing nodes and edges.

* Add people (nodes) to the social network. To keep it simple, they will only have a name property.
* Add friendships between people (edges between nodes). These will be unweighted and undirected.
* Remove nodes from the social network. Some people may want to revoke their accounts.
* Remove edges from the social network. Sadly, some people may want to end their friendships.

Once we've completed all of the above functionality, we'll be ready to explore two algorithms:

* An algorithm for checking the reachability between two nodes.
* An algorithm checking the shortest path between two nodes.

## Stacks and Queues
Stacks and queues are both data structures that hold a list of elements. However, there is a key difference in how they work. A queue is **first in, first out** or **FIFO**. On the other hand, a stack is **last in, first out** or **LIFO**.

The technical term for each function is a **stack frame**: a stack frame is a memory management technique used in some programming languages for generating and eliminating temporary variables.

And when it comes to queues, we are actually working with a queue every time we run async JavaScript code in the browser. The browser actually uses separate web APIs to run async code and when that async code is ready to run (such as when a response from an API is received), that code is actually put in a callback queue which is not the call stack. So our synchronous code is put on the call stack (LIFO) while our asynchronous code is queued up in the callback queue (FIFO).

```js
class Stack {
  constructor() {
    this.elements = [];
  }

  push(element) {
    return this.elements.push(element);
  }

  pop() {
    return this.elements.pop();
  }
}
```

## Depth and Breadth Search
There are two ways we can search a tree — regardless of whether that's a binary search tree or a more general tree. We can take a **depth-first search (DFS)** approach or a **breadth-first search (BFS)** approach. If we are looking at a tree that has a root node and child nodes, a depth-first search algorithm will search a tree vertically while a breadth-first search algorithm will search a tree horizontally.

## Depth-First Practice
We'll start with the depth-first algorithm because it is a bit easier to implement. To actually use a TDD approach and test our algorithms in a graph, we are going to need to code that graph first. We will add this graph to our test file.

## License

_MIT License_

Copyright (c) _8/20/2023_ _Dani Steely_

[CS]: https://www.learnhowtoprogram.com/computer-science
[GT]: https://www.learnhowtoprogram.com/computer-science/graph-theory
[TLAG]: http://think-like-a-git.net/sections/graph-theory.html
[gt video]:https://www.youtube.com/watch?v=82zlRaRUsaY&ab_channel=SystemsInnovation
[GitPDF]: https://github.com/pluralsight/git-internals-pdf/releases

