function countOne(n){
  return n.toString(2).split('').filter(x => x == '1').length;
}
 


function countOne(n)
{
    var count = 0;
    while (n > 0)
    {
        n &= (n - 1);
        count++;
    }
    return count;
}
