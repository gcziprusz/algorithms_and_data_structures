var findCircleNum = function(isConnected) {
    class UnionFind {
        constructor(rows) {
            this.graph = [...Array(rows).keys()];
            this.groups = rows;
        }
        // find(id) {
        //     if(this.graph[id] === id) return id;
        //     this.graph[id] = this.find(this.graph[id]);
        //     return this.graph[id];
        // }
        find(id){
            while(id !== this.graph[id]) id = this.graph[id];
            return id;
        }
        union(x, y) {
            const rootX = this.find(x);
            const rootY = this.find(y);
            if(rootX !== rootY) {
                this.graph[rootY] = rootX;
                this.groups--;
            }
        }
    }
    const rows = isConnected.length, unionfind = new UnionFind(rows);
    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < rows; c++) {
            if(isConnected[r][c]) unionfind.union(r, c);
        }
    }
    return unionfind.groups;
};

//       A B C 
// A    [1,1,0]
// B    [1,1,0]
// C    [0,0,1]
