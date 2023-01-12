import { Graph } from "./Graph";

import { expect, assert, describe, it, test } from 'vitest';


describe('图', () => {
  // 添加顶点
  // 1.创建图结构
  const graph = new Graph()
  // 2.添加顶点
  const myVertexes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
  for (let i = 0; i < myVertexes.length; i++) {
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
  it('打印结构', () => {

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
  it('bfs 广度优先搜索', () => {
    let result = ''
    graph.bfs(graph.vertexes[0], function (v: any) {
      result += v + ' '
    })
    expect(result).toBe("A B C D E F G H I ")
  })
  it('dfs 深度优先搜索', () => {
    let result = ''
    graph.dfs(graph.vertexes[0], function (v: any) {
      result += v + ' '
    })
    expect(result).toBe("A B E I F C D G H ")
  })
})


