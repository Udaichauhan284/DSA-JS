/* There are numBottles water bottles that are initially full of water. You can exchange numExchange empty water bottles from the market with one full water bottle.

The operation of drinking a full water bottle turns it into an empty bottle.

Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.
Input: numBottles = 9, numExchange = 3
Output: 13
Explanation: You can exchange 3 empty bottles to get 1 full water bottle.
Number of water bottles you can drink: 9 + 3 + 1 = 13.
*/

/* *************************************** */
// NOTE: DO ONLY FIRST AND LAST APPROACH. //
/* **************************************** */

/*we start the loop of numBottles >= numExchange, and inside loop
we start consuming, numExchange bottle, and in return we get 1
bottle more, so we add this return bottle and minus cosumed bottle
from numBottles
TC: O(n) O(numBottles)
SC: O(1)
*/
var numWaterBottles = function(numBottles, numExchange) {
  let consumed = 0;
  while(numBottles >= numExchange){
      consumed += numExchange;
      //remove these consumed bottle 
      numBottles -= numExchange;
      //now add 1 more bottle as we consumed numExchange bottle
      //and we get new drinking bottle
      numBottles += 1;
  }
  return numBottles+consumed;
};


/*Method 2: in this we first consumed the full bpttle, then we
find the how many we more can consumed, by divide and mod
TC: O(log_numExchange(numBottles))
SC: O(1)
*/
var numWaterBottles = function(numBottles, numExchange) {
  let comsumed = numBottles;
  let emptyBottles = numBottles;
  while(emptyBottles >= numExchange){
      let extraFullBottles = Math.floor(emptyBottles / numExchange);
      let remaingEmptyBottle = emptyBottles % numExchange;

      comsumed += extraFullBottles;
      emptyBottles = remaingEmptyBottle + extraFullBottles; //because after drinking this will also comes in empty;
  }
  return comsumed;
};


/*IN this we use math, take a peek on approach 1
numBottle - numExchange + 1(exchange bottle)
=> numBottle - (numExhange - exchange Bottle)
example bottle = 15, exchange = 4
15-(4-1) = 12, we get 1 extra full Bottle
12-(4-1) = 9, we get 1 extra full bottle
9-(4-1) = 6, we get 1 extra full bottle
6-(4-1) = 3, we get 1 extra full bottle,
now for 3 we wont do it. this will not give any extra full bottle.
total 15+4(extra bottle) = > 15+4 = 19
TC: O(1), SC: O(1)
*/
var numWaterBottles = function(numBottles, numExchange) {
  return numBottles + Math.floor((numBottles-1)/(numExchange-1));
};