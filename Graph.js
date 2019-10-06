const Queue = require('./Queue');
const Stack = require('./Stack');

class Graph {
    constructor(novertices) {
        this.noofvertices = novertices;
        this.adjlist = new Map();
    }

    /* Add Vertex */
    addVertex(v) {
        this.adjlist.set(v, []);
    }

    addEdge(v, w) {
        this.adjlist.get(v).push(w);
    }

    printGraph() {
        console.log("This is the Graph represented as an adjacency list");
        let get_keys = this.adjlist.keys();
        for (let i of get_keys) {
            let adjnodes = this.adjlist.get(i);
            let conc = "";
            adjnodes.map(item => {
                conc += item + " ";
            });
            console.log(i + " => " + conc);
        }
    }

    bfs(startingNode) {
        let visited = [];
        for (var i = 0; i < this.noofvertices; i++) {
            visited[i] = false;
        }
        let q = new Queue();
        visited[startingNode] = true;
        q.enqueue(startingNode);

        while (!q.isEmpty()) {
            let getQueueElement = q.dequeue();
            console.log(getQueueElement);
            let getList = this.adjlist.get(getQueueElement);
            for (let i in getList) {
                let neigh = getList[i];
                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.enqueue(neigh);
                }
            }
        }
    }

    topologicalSortHelper(vertex, visited, stack){
        visited.add(vertex);
        let adj_vertices=this.adjlist.get(vertex);
        adj_vertices.map(item=>{
            if(!visited.has(item)){
                this.topologicalSortHelper(item, visited, stack);
            }
        })
        stack.push(vertex);
    }
    topologicalSort(){
        let visited=new Set();
        let stack=new Stack();

        let get_keys=this.adjlist.keys();
        for(let i of get_keys){
            if(!visited.has(i)){
                this.topologicalSortHelper(i, visited, stack);
            }
        }
        console.log("This is the order in which the packages should be installed");
        stack.printStack()
    }
}


module.exports = Graph;