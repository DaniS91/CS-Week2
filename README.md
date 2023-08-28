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



## License

_MIT License_

Copyright (c) _8/20/2023_ _Dani Steely_

[CS]: https://www.learnhowtoprogram.com/computer-science
[GT]: https://www.learnhowtoprogram.com/computer-science/graph-theory
[TLAG]: http://think-like-a-git.net/sections/graph-theory.html
[gt video]:https://www.youtube.com/watch?v=82zlRaRUsaY&ab_channel=SystemsInnovation