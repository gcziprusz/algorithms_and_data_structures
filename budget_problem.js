// package JSON
// {
//   "name": "test",
//   "version": "1.0.0",
//   "main": "index.js",
//   "license": "MIT",
//   "dependencies": {
//     "chai": "^4.2.0",
//     "lodash": "^4.17.20",
//     "mocha": "^5.2.0"
//   }
// }


/*
*******
******* STEP ONE
*******
******* Question:
*******
******* Determine if a Draw can be processed
*******
******* Background:
*******
******* Within Built, every Project has a Budget which has a collection of budgetItems. These budgetItems
******* represent costs associated with construction. Users can request cash Draws against budgetItems.
*******
******* Problem:
*******
******* Given the provided Budget and DrawRequests data, fill in the body for the processDraws function
******* below. This function should return an object of the following shape:
*******
******* {
*******     processedIDs: [], // An array of drawIds that were successfully processed according to the rules below
*******     budget: {} // The original, unmodified budget object
******* }
*******
******* Rules:
*******
******* - BudgetItems cannot be overdrawn
******* - The Drawable amount for BudgetItems is determined by subtracting a BudgetItems fundedToDate from its originalAmount
******* - Draws have to be processed in order of effectiveDate
*******
*/

const _ = require('lodash');
const chai = require('chai');
const assert = require('assert');
const Mocha = require('mocha');
const mocha = new Mocha();
mocha.suite.emit('pre-require', this, 'solution', mocha);

const budget = {
    amount: 126000,
    balanceRemaining: 108500,
    budgetItems: [
        { itemId: 1, fundedToDate: 2500, originalAmount: 10000 },
        { itemId: 2, fundedToDate: 15000, originalAmount: 16000 },
        { itemId: 3, fundedToDate: 0, originalAmount: 100000 }
    ]
};

const drawRequests = [
    { drawId : 2, itemId : 1, amount : 2000, effectiveDate : '11/20/2015' },

    { drawId : 5, itemId : 2, amount : 500, effectiveDate : '10/31/2015' },
    { drawId : 1, itemId : 2, amount : 750, effectiveDate : '11/15/2015' },
    { drawId : 7, itemId : 2, amount : 1000, effectiveDate : '11/16/2015' },
  
    { drawId : 3, itemId : 3, amount : 50000, effectiveDate : '10/5/2015' }, 
    { drawId : 4, itemId : 3, amount : 60000, effectiveDate : '10/6/2015' },
    { drawId : 6, itemId : 3, amount : 50000, effectiveDate : '10/7/2015' }, 
];
// 3,
//   6,
//   5,
//   2
// /** */
// ******* {
// *******     processedIDs: [], // An array of drawIds that were successfully processed according to the rules below
// *******     budget: {} // The original, unmodified budget object
// ******* }
// **/ 

let budgetItemByItemId = (itemId, budgetItems) => budgetItems.filter(bi => bi.itemId === itemId);

let isValidDrawRequest = (budgetItem, drawAmount) => (budgetItem.originalAmount - budgetItem.fundedToDate >= drawAmount);


function processDraws(drawRequests, budget) {
    // sort the draws by effectiveDate earliest first 
  let sortedDraws = drawRequests.sort(sortByEffectiveDate);
  let budgetCopy = { ...budget};

  let processedIDs = sortedDraws.reduce((acc,curr) => {
    let failReason ='';
    let drawAmount = curr.amount;
    let budgetItems = budgetItemByItemId(curr.itemId, budget.budgetItems);
    
    if (budgetItems.length < 1) {
      failReason = 'Budget Item not found';
    } else if (budgetItems.length > 1){
      failReason = 'Multiple Budgets found';
    };
    
    let isValidDraw = isValidDrawRequest(budgetItems[0], drawAmount);
    
    if (isValidDraw) {
      budgetItems[0].fundedToDate += drawAmount;
    }
    return acc.concat(isValidDraw ? curr.drawId : `${curr.drawId} failed to process reason:${!failReason ? 'overdrawn' : failReason}`);
  },[]);

  return {
    processedIDs,
    budget: budgetCopy
  }
    // copy budget return 
    // 

    // @todo - Implement solution here.

}
function sortByEffectiveDate(draw1,draw2){
  let [d1, d2] = [draw1.effectiveDate,draw2.effectiveDate];
  return Date.parse(d1) <= Date.parse(d2) ? -1: 1;
}

console.log(JSON.stringify(processDraws(drawRequests, budget), null, 4));

/*
*******
******* STEP TWO
*******
******* Create one or more unit tests demonstrating that the processDraws function will not process a draw
******* request that would result in an overdrawn budget item.
******* 
*/

// @todo - Implement Mocha (or Chai) tests here.

const budgetMock = {
  budgetItems: [
    { itemId: 1, fundedToDate: 10000, originalAmount: 10000 },
  ]
};

const drawRequestsMock = [
  { drawId: 1, itemId: 1, amount: 10000, effectiveDate: '11/20/2015' },
];
function testOverDraws(){
  processDraws(drawRequestsMock, budgetMock)
}
console.assert(processDraws(drawRequestsMock, budgetMock).processedIDs.length ===0);

// mocha.run();

/*
*******
******* BONUS
*******
******* This step is 100% optional and should only be undertaken if time allows.
*******
******* Update the object returned by the processDraws function to include an array at the failedIDs key.
******* This array should contain descriptions of which (if any) draw requests failed to process and why.
*******
*/

// Use the following draw requests for this bonus step.

const bonusDrawRequests = [
  { drawId: 1, itemId: 2, amount: 750, effectiveDate: '11/15/2015' },
  { drawId: 2, itemId: 1, amount: 2000, effectiveDate: '11/20/2015' },
  { drawId: 3, itemId: 3, amount: 50000, effectiveDate: '10/5/2015' },
  { drawId: 4, itemId: 3, amount: 60000, effectiveDate: '10/6/2015' },
  { drawId: 5, itemId: 2, amount: 500, effectiveDate: '10/31/2015' },
  { drawId: 6, itemId: 3, amount: 50000, effectiveDate: '10/7/2015' },
  { drawId: 7, itemId: 2, amount: 1000, effectiveDate: '11/16/2015' },
  { drawId: 8, itemId: 'nope', amount: 750, effectiveDate: '11/15/2015' },
  { drawId: 9, itemId: 1, amount: 10 },
  { drawId: 10, itemId: 2, amount: '100', effectiveDate: '10/31/2014' },
  { drawId: 11, itemId: 3, amount: 1, effectiveDate: 'A long long time ago...' },
  { drawId: 12, itemId: 1, amount: 100, effectiveDate: 10 / 31 / 2099 },
  { drawId: 13, itemId: 1, amount: -100000, effectiveDate: '11/8/2015' }
];

console.log(JSON.stringify(processDraws(bonusDrawRequests, budget), null, 4));
