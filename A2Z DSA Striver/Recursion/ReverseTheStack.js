/* Reverse The Stack
Input:
St = {3,2,1,7,6}
Output:
{6,7,1,2,3}
Explanation:
Input stack after reversing will look like the stack in the output.
*/

class Solution {
  reverse(st){
    if(st.length <= 1){
      return st;
    }
    //now take out the top
    let top = st.pop();
    //now reverse the rest stack
    this.reverse(st);
    //now push into the stack
    this.insertBottom(st, top);
  }
  insertBottom(st,element){
    if(st.length === 0){
      st.push(element);
      return;
    }
    //now take out the current top
    let currTop = st.pop();
    //now call that insertBottom again
    this.insertBottom(st,element);
    st.push(currTop);
  }
}