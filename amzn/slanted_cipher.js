function decodeString( numberOfRows, encodedString) {
  if(!encodedString) return null;
  let length=encodedString.length,arrLength=length/numberOfRows, result = new Array(length).fill("_"),k=0,newIndex=0;
  for(let i=0;i<arrLength;i++){
      result[k++]=encodedString[i];
      while(newIndex<=length){
          newIndex=newIndex+arrLength+1;
          if(newIndex<length){
              result[k++]=encodedString[newIndex];
          }
      }
      newIndex=i+1;
  }
  return result.join("").replace("_", " ").trim();
}
