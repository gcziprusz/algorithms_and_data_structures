var FileSystem = function() {
    this.directories = {};
};

FileSystem.prototype.createPath = function(path, value) {    
    const paths = path.split("/");
    const n = paths.length;
    
    let root = this.directories;

    for (let i = 1; i < n - 1; i++) {
        if (!root[paths[i]]) return false;
        root = root[paths[i]];
    }
    
    if (root[paths[n - 1]]) return false;
    
    root[paths[n - 1]] = {};
    root[paths[n - 1]].value = value;
    
    return true;  
};

FileSystem.prototype.get = function(path) {
    const paths = path.split("/");
    const n = paths.length;
    
    let root = this.directories;
    
    for (let i = 1; i < n; i++) {
        if (!root[paths[i]]) return -1;
        root = root[paths[i]];
    }
    
    return root.value;
};
