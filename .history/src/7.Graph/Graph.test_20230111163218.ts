import { Graph } from "./Graph";

import { expect, assert, describe, it, test } from 'vitest';

// 添加顶点
describe('图', () => {
  // 1.创建图结构
  const graph = new Graph()
  // 2.添加顶点
  const myVertexes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

  it('打印结构', () => {
    for (var i = 0; i < myVertexes.length; i++) {
      graph.addVertex(myVertexes[i])
    }
    // 3.添加边
    graph.addEdge("A", "B")
    graph.addEdge("A", "C")
    graph.addEdge("A", "D")
    graph.addEdge("C", "D")
    graph.addEdge("C", "G")
    graph.addEdge("D", "G")
    graph.addEdge("D", "H")
    graph.addEdge("B", "E")
    graph.addEdge("B", "F")
    graph.addEdge("E", "I")
    console.log(graph.toString())
    expect(graph.toString()).toEqual(`A=>B A C A D A 
B=>E B F B 
C=>D C G C 
D=>G D H D 
E=>I E 
F=>
G=>
H=>
I=>
`);
  })
})



