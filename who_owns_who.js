let inputData = [
{
shared_by: ['Biden', 'Trump', 'Kamala', 'Ivanka'],
item: 'Lunch',
paid_by: 'Biden',
amount: 800
},
{
shared_by: ['Ivanka', 'Kamala'],
item: 'Dinner',
paid_by: 'Ivanka',
amount: 1000
}
];

let invoices = new Map();

function makeKey(from,to,item){
  return {from,to,item};
}

for (let meal of inputData){
  let amount = meal.amount / meal.shared_by.length;
  for (let person of meal.shared_by){
     if(meal.paid_by !== person){
       let key = JSON.stringify(makeKey(person,meal.paid_by, meal.item));
       invoices.set(key,(invoices.get(key) || 0) + amount)
     }
  }
}


invoices.forEach(function(v,k) {
  let key = JSON.parse(k);
  console.log(`${key.from} owes ${key.to} $${v} for ${key.item}.`);
});
