class FirstUnique {
    constructor(nums){
        this.uniques = new Map();
        for(let n of nums){
            this.add(n)
        }
    }
    showFirstUnique(){
        for(let [k,v] of this.uniques){
            if(v) return k;
        }
            return -1;
    }
    add(v){
        if(this.uniques.has(v)) this.uniques.set(v,false)
        else this.uniques.set(v,true);
    }
}
