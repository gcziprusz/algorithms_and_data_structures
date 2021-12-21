function romanToInt(num) {
  let roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  let value = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let str = 0;
  
  for(let i=12; i >= 0; i--){
      while (num.indexOf(roman[i]) === 0){
          num = num.replace(roman[i],'');
          str += value[i];
      }
  }
  return str;
}


/*Using the interpreter pattern TS*/
// JAVA example of a prefix/postfix parser https://sourcemaking.com/design_patterns/interpreter/java/1


// TS Convert roman numeral and translates it into a numeric 
class Context {
    input: string;
    output: number;
    constructor(input:string) {
        this.input = input;
        this.output = 0;
    }

    startsWith(str:string) {
        return this.input.substr(0, str.length) === str;
    }
}


class Expression{
    protected name : string;
    protected one : string;
    protected four : string;
    protected five : string;
    protected nine : string;
    protected multiplier : number;

    constructor(name:string, one:string, four:string, five:string, nine:string, multiplier:number) {
        this.name = name;
        this.one = one;
        this.four = four;
        this.five = five;
        this.nine = nine;
        this.multiplier = multiplier;
    }
    interpret(context: Context) {
        if (context.input.length == 0) {
            return;
        }
        else if (context.startsWith(this.nine)) {
            context.output += (9 * this.multiplier);
            context.input = context.input.substr(2);
        }
        else if (context.startsWith(this.four)) {
            context.output += (4 * this.multiplier);
            context.input = context.input.substr(2);
        }
        else if (context.startsWith(this.five)) {
            context.output += (5 * this.multiplier);
            context.input = context.input.substr(1);
        }
        while (context.startsWith(this.one)) {
            context.output += (1 * this.multiplier);
            context.input = context.input.substr(1);
        }
    }
}

function run() {
    var roman = "MCMXXVIII"
    var context = new Context(roman);
    var tree = new Array();

    tree.push(new Expression("thousand", "M", " ", " ", " ", 1000));
    tree.push(new Expression("hundred", "C", "CD", "D", "CM", 100));
    tree.push(new Expression("ten", "X", "XL", "L", "XC", 10));
    tree.push(new Expression("one", "I", "IV", "V", "IX", 1));

    for (var i = 0, len = tree.length; i < len; i++) {
        tree[i].interpret(context);
    }

    console.log(roman + " = " + context.output);
}

run()
