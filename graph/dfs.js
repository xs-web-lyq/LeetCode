const graph = require('./graph');

const visited = new Set();
const dfs = (n)=> {
    console.log(n);
    isited.add(n);
    graph[n].forEach(c => {
        if(!visited.has(c)){
            dfs(c); 
            v
        }
    })
}

dfs(2);