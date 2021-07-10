// https://leetcode.com/problems/my-calendar-i/
var MyCalendar = function() {
  this.cal = []
};

MyCalendar.prototype.book = function(start, end) {
    let l=0, r=this.cal.length-1
    while(l <= r){
      const mid = Math.floor((r+l)/2);
      const [s,e] = this.cal[mid];
      if(s < end && start < e ) return false;
      if(start >= e){
        l = mid+1;
      }else{
        r = mid-1;
      }
    }  
  this.cal.splice(l, 0 ,[start, end]);
  return true;
};
