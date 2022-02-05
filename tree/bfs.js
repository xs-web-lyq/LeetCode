const tree = {
    val:'a',
    children:[
        {
            val:'b',
            children:[
                {
                    val:'d',
                    children:[]
                },
                {
                    val:'e',
                    children:[]
                }
            ]
        },
        {
            val:'c',
            children:[
                {
                    val:'f',
                    children:[]
                },
                {
                    val:'g',
                    children:[]
                }
            ]
        }

    ]
}



const bfs = (root)=>{
    const n = [root];
    while(n.length>0){
        const m = n.shift();
        console.log(m.val);
        m.children.forEach(child =>{
            n.push(child);
        })
    }
}

bfs(tree)