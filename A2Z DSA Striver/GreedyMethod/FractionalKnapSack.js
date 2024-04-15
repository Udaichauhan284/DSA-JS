/*Given weights and values of N items, we need to put these items in a knapsack of capacity W to get the maximum total value in the knapsack.
Note: Unlike 0/1 knapsack, you are allowed to break the item here. 
Input:
N = 3, W = 50
value[] = {60,100,120}
weight[] = {10,20,30}
Output:
240.000000
Explanation:
Take the item with value 60 and weight 10, value 100 and weight 20 and split the third item with value 120 and weight 30, to fit it into weight 20. so it becomes (120/30)*20=80, so the total value becomes 60+100+80.0=240.0
Thus, total maximum value of item we can have is 240.00 from the given capacity of sack. 
*/
class Item{
  constructor(value, weight){
    this.value = value;
    this.weight = weight;
  }
}
class Solution{
  static comp(a,b){
    let r1 = a.value / a.weight;
    let r2 = b.value / b.weight;
    return r1 > r2 ? -1 : 1; //-1 for descending order.
  }

  fractionalKnapsack(W, arr, n){
    //first sort the Value/weight 
    arr.sort(Solution.comp);

    let currWeight = 0;
    let finalValue = 0.0;

    for(let i=0; i<arr.length; i++){
      if(currWeight + arr[i].weight <= W){
        currWeight += arr[i].weight;
        finalValue += arr[i].value;
      }else{
        let remain = W - currWeight;
        finalValue += (a[i].value / a[i].weight) * remain;
        break;
      }
    }
    return finalValue;
  }
}