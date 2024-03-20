/* solving using the recusion, 
2.recusion call
a. in first recursive call i am taking curr char is part of next chr
b. not taking a part of that curr char.
*/
const powerSet = (str,index,curr,result) => {
  let len = str.length;
  if(index === len){
    result.push(curr);
    return;
  }

  powerSet(str,index+1,curr+str[index],result);
  powerSet(str,index+1,curr,result);
}
let str = "abc";
let index = 0;
let curr = "";
let result = [];
powerSet(str,index,curr,result);
console.log(result);