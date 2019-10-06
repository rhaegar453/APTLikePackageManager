const Graph=require('./Graph');

const g=new Graph(7);

let vertices=['A', 'B', 'C','D', 'E', 'F', 'G', 'H'];

vertices.map(item=>{
    g.addVertex(item);
})


g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('A', 'D');
g.addEdge('B', 'E');
g.addEdge('B', 'F');
g.addEdge('C', 'D');
g.addEdge('C', 'G');
g.addEdge('D', 'G');
g.addEdge('D', 'H');
g.addEdge('E', 'F');
g.addEdge('E', 'H');

g.printGraph();

g.topologicalSort();