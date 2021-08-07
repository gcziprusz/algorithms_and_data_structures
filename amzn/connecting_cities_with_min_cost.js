// Introduction to Kruskal's algorithm https://www.youtube.com/watch?v=71UQH7Pr9kU
// Introduction to Union Find https://www.youtube.com/watch?v=0jNmHPfA_yE
// Introduction to Union Find Path Compression https://www.youtube.com/watch?v=VHRhJWacxis

 class UnionFind {
        constructor(rows) {
            this.graph = [...Array(rows).keys()];
            this.groups = rows;
        }
        find(id){
            // while(id !== this.graph[id]) id = this.graph[id];
            // return id;
            if (id === this.graph[id]) return id;
            return this.graph[id] = this.find(this.graph[id]); // path compression
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

function minimumCost(N, connections) {
  connections.sort((a, b) => a[2] - b[2]);

  let res = 0,unionFinder = new UnionFind(N);
  for (const [u, v, cost] of connections) {
    
    if (unionFinder.find(u) !== unionFinder.find(v)) {
      res += cost;
      unionFinder.union(u, v);
    }
  }
  return unionFinder.groups === 1 ? res : -1;
}
