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
    
    removeEdge(vertex1,vertex2){
		this.adjList[vertex1] = this.adjList[vertex1].filter( v => v !== vertex2 );
		
		this.adjList[vertex2] = this.adjList[vertex2].filter( v => v !== vertex1 );
	}
	
	removeVertex(vertex){
		while(this.adjList[vertex].length){
			const adjVertex = this.adjList[vertex].pop();
			
			this.removeEdge(vertex,adjVertex);
		}
		delete this.adjList[vertex]
	}
}

let graph = new Graph();
