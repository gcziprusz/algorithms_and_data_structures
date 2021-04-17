/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // map to hold amap o course to prerequisite relationship
  // 0 => [1,2] 1=> [3,4] ...
  let preMap = new Map();
  // for each course initialize to empty prereqs 0=>[] 1=> [] ...
  for(let j =0; j<numCourses;j++){
     preMap.set(j,[]); 
  }
  // for courses with prereqs fill in the prereqs 
  // 1=>[1,2] 2=>[] ... 
  prerequisites.forEach(([pre,crs])=> {
    preMap.set(crs,[...preMap.get(crs),pre]);
  });
  
  
  let visited = new Set();
  let dfs= function(crs) {
    // we are visiting a course twice means we have a loop 
    // circular dependency and we cant finish all courses
    if(visited.has(crs)) return false
    // no prepreqs this course can be completed
    if (preMap.get(crs)==[]) return true 
    
    visited.add(crs);
    
      
    for(let pre of preMap.get(crs)){
        // if any prereq cant be completed we are done
        if (!dfs(pre)) return false 
    }
    visited.delete(crs);
    preMap.set(crs,[]);
    return true
  }
  
  // we need to run this on each course in case the prereqs input is 
  // sparse numCourses = 3 prereqs [0,1] [2,3]
  for (let course = 0; course < numCourses; course++) {
      // if dfs returns false it means 
      // we already visited this course or 
      if (!dfs(course)) return false
  }
  // 
  return true
};
