import { Dictionay } from "./dict"

export class Graph {
  edges: Dictionay
  vertexes: any[]
  constructor() {
    // 属性: 顶点(数组)/边(字典)
    this.vertexes = [] // 顶点
    this.edges = new Dictionay() // 边 
  }
  // 方法
  // 添加方法
  // 1. 添加顶点的方法
  addVertex(v: any) {
    this.vertexes.push(v)
    this.edges.set(v, [])
  }
  // 2.添加边的方法
  addEdge(v1: any, v2: any) {
    this.edges.get(v1).push(v2)
    this.edges.get(v1).push(v1)
  }
  // 实现toString方法
  toString(): string {
    var result = ""
    for (var i = 0; i < this.vertexes.length; i++) {
      result += this.vertexes[i] + "=>"
      var adj = this.edges.get(this.vertexes[i])
      for (var j = 0; j < adj.length; j++) {
        result += adj[j] + " "
      }
      result += "\n"
      // var vEdgs = this.edges.get(this.vertexes[i])
      // result += vEdgs.reduce((a: any, b: any) => a + b) + "/n"
    }
    return result
  }
}