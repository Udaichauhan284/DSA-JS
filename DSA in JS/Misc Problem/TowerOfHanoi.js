/* Tower of Hanoi
The objective of the puzzle is to move the entire stack to the last rod, objecing the following rule:
- only one disk may be moved at a time.
- each move consists of taking the upper disk from one of the stacks and placing of another stack or on an empty rod. and lastly.
- no disk may be places on top of a disk that is smaller.

Pseudo Code
Shift 'n-1' disks from A to B, using C(when required)
Shift last disk from A to C
Shift 'n-1' disks from B to C, using A(when required)
*/

//Time Comp. if we give input 1 , steps 1 and if we give 2 steps will be 3 and if we give 3 steps will be 7, so 2^n - 1
//O(2^n)
function TowerOfHanoi(n, fromRod, toRod, usingRod){
  if(n===1){
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  TowerOfHanoi(n-1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n-1} from ${fromRod} to ${toRod}`)
  TowerOfHanoi(n-1, usingRod, toRod, fromRod);
}
TowerOfHanoi(3, "A", "C", "B");
