import { Dictionay } from "./dict"
import { Queue } from "../1.Queue/Queue"
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
    let result = ""
    for (let i = 0; i < this.vertexes.length; i++) {
      result += this.vertexes[i] + "=>"
      let adj = this.edges.get(this.vertexes[i])
      for (let j = 0; j < adj.length; j++) {
        result += adj[j] + " "
      }
      result += "\n"
      // let vEdgs = this.edges.get(this.vertexes[i])
      // result += vEdgs.reduce((a: any, b: any) => a + b) + "/n"
    }
    return result
  }
  // 初始化状态颜色
  initColor() {
    let colors = []
    for (let i = 0; i < this.vertexes.length; i++) {
      colors[this.vertexes[i]] = "white"
    }
    return colors
  }
  // 广度优先搜索
  bfs(initV: any, handle: Function) {
    // 初始化颜色
    const colors = this.initColor()
    // 创建队列
    const queue = new Queue()
    // 将点加入队列中
    queue.enqueue(initV)
    // 循环从队列中取出一个顶点
    while (!queue.isEmpty()) {
      // 从队列中取出一个顶点
      let v = queue.dequeue()
      // 获取和顶点相连的另外顶点
      let vList = this.edges.get(v)
      // 将v的颜色设置成灰色
      colors[v] = "gray"
      // 遍历所有顶点,并且加入到队列中
      for (let i = 0; i < vList.length; i++) {
        let e = vList[i]
        if (colors[e] == "white") {
          colors[e] = "gray"
          queue.enqueue(e)
        }
      }
      // 访问顶点
      handle(v)
      // 将顶点设置为黑色
      colors[v] = 'black'
    }
  }
  // 深度优先搜索
  dfs(initV: any, handle: any) {
    // 初始化颜色
    let color = this.initColor()
    // 从某个点开始一次递归访问
    this.dfsVisit(initV, color, handle)
  }
  dfsVisit(v: any, color: any, handle: any) {
    // 将颜色设置为灰色
    color[v] = 'gray'
    // 处理v顶点
    if (handle) {
      handle(v)
    }
    // 访问v相连的顶点
    let adj = this.edges.get(v)
    for (var i = 0; i < adj.length; i++) {
      let e = adj[i]
      if (color[e] == 'white') {
        this.dfsVisit(e, color, handle)
      }
    }
  }
}