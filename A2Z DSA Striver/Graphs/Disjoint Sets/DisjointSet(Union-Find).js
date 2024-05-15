/* Disjoint Set 
this measn, when we do intersaction of diffrent set, will give null, nothing in common
Disjoint Set (Union-Find) simple
find - O(n), need to go indepth of recursionn tree to find the parent.
Diskoint Set (Union-Find) by Rank and Path Compareison
*/
//Disjoint Set (Union-Find) simple
class Solution {

  /*Complete the functions below*/
  find(A,X){ //A is parent parrnt array, X we need to find
      //add code here, O(n)
      if(X === A[X]){
          return X;
      }
      return this.find(A,A[X]); //array, and next node to search from array
  }

  unionSet(A,X,Z){ //A is array
      //add code here
      let xParent = this.find(A,X);
      let zParent = this.find(A,Z);
      
      if(xParent !== zParent){
          //measn they are from diffrent set, join them
          A[xParent] = zParent;
      }
  }
}