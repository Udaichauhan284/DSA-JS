/* If key is given , we need to find the ceil, ceil measn, smallest value among tree which is just bigger than key
if key is 8, and in tree there is no 8, and 9 is present, so ciel will be 9.
is key 11, and in tree 11 present 11 will be ans
*/
function findCiel(root,key){
  let ciel = -1;
  while(root){
    if(root.data === key){
      ciel = root.data;
      return ciel;
    }

    if(key > root.data){
      //move to right, find in right side, which have larger value than root
      root = root.right;
    }else {
      ciel = root.data;
      root = root.left;
    }
  }
  return ciel;
}