/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function findOrder(numCourses, prerequisites) {
    let adjList = new Map();
    let indegree = new Array(numCourses).fill(0);
    let topologicalOrder = new Array(numCourses).fill(0);

    // Create the adjacency list representation of the graph
    for (let [dest,src] of prerequisites) {
      if(!adjList.has(src)) adjList.set(src,[]);
      adjList.get(src).push(dest);
      // Record in-degree of each vertex
      indegree[dest] += 1;
    }

    // Add all vertices with 0 in-degree to the queue
    let q = [];
    for (let i = 0; i < numCourses; i++) {
      if (indegree[i] === 0) {
        q.push(i);
      }
    }
    let i = 0;
    // Process until the Q becomes empty
    while (q.length) {
      let node = q.pop();
      topologicalOrder[i++] = node;

      // Reduce the in-degree of each neighbor by 1
      if (adjList.has(node)) {
        for (let neighbor of adjList.get(node)) {
          indegree[neighbor]--;

          // If in-degree of a neighbor becomes 0, add it to the Q
          if (indegree[neighbor] === 0) {
            q.push(neighbor);
          }
        }
      }
    }
    // Check to see if topological sort is possible or not.
    if (i === numCourses) {
      return topologicalOrder;
    }
    return [];
  }
