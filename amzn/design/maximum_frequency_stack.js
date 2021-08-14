
class FreqStack {
    constructor(){
      this.freq = new Map();
      this.group = new Map();
      this.maxfreq = 0;
    }
    push(val) {
     let f = (this.freq.get(val)||0) + 1;
        this.freq.set(val, f);
        
        if (f > this.maxfreq) this.maxfreq = f;

        if(!this.group.has(f)) this.group.set(f,[]);
        this.group.get(f).push(val);
    }
    pop() {
        let x = this.group.get(this.maxfreq).pop();
        this.freq.set(x, this.freq.get(x) - 1);
        if (this.group.get(this.maxfreq).length === 0) this.maxfreq--;
        return x;
    }
};
