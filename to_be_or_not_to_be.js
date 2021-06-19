// expect(3).not().toBe(3)
function myExpect(input: any): Matcher & { not: Matcher } {
  let isReversed = false

  return {
    toBe(data: any) {
      const isIdentical = Object.is(data, input)
      if ((!isReversed && !isIdentical || (isReversed && isIdentical))) {
        throw new Error('not match')
      }
    },
    get not() {
      isReversed = !isReversed
      return this
    }
  }
}


// USING DEFINE PROPERTY
function myExpect(input) {
  let reverse = false;
  return Object.defineProperty({
    toBe(value){
      let match = Object.is(value,input);
      if(reverse && match || !reverse && !match){
        throw new Error('no match')
      }
    }
  },
  'not', {
      get(){
        reverse = !reverse;
        return this;
      }
    })
}
