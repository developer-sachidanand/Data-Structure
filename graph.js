class Graph{
    constructor(){
        this.adjList = {}
    }

    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = [];
        }
    }

    addEdge(v1,v2){
        this.adjList[v1].push(v2);
        this.adjList[v2].push(v1);
    }
}

let graph = new Graph();