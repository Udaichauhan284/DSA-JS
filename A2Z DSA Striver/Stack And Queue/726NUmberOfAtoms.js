/* 726. Number of Atoms
14 July 2024, Leetcode POTD, String, Stock

Example 1:

Input: formula = "H2O"
Output: "H2O"
Explanation: The count of elements are {'H': 2, 'O': 1}.
Example 2:

Input: formula = "Mg(OH)2"
Output: "H2MgO2"
Explanation: The count of elements are {'H': 2, 'Mg': 1, 'O': 2}.
*/


/*In this we need to use the stack, also need to focus on the given 
details which given ), need to multiple by digit, and He, Mg
TC: O(n^2), SC: O(n)
*/
//function for changing the string to int
const toInt = (str) => parseInt(str, 10);
var countOfAtoms = function(formula) {
    let len = formula.length;
    let st = [{}]; //stack of map
    let i=0;
    while(i < len){
        if(formula[i] === "("){
            //need to add the new map in stack for new section
            st.push({});
            i++;
        }else if(formula[i] === ')'){
            //close braket measn section close, need to pop out the
            //top map and then need to multiple it next digit if any
            let topMap = st.pop();
            //need to check for next multipler, if any
            i++;
            let multipler = "";
            while(i < len && !isNaN(formula[i])){ //a[i] = 2-> F, !F = T
                multipler += formula[i];
                i++;
            }
            const multi = multipler ? toInt(multipler) : 1;
            //need to multiple this multi with topMap value
            for(let [atom,count] of Object.entries(topMap)){
                topMap[atom] = count * multi;
            }
            //now after doing above steps, need to add the topMap value
            //to current stack top, which is original string we need
            //to form
            for(let [atom,count] of Object.entries(topMap)){
                if(!st[st.length - 1][atom]){ //at[atom] = 0 !0 = 1
                    st[st.length-1][atom] = 0;
                }
                st[st.length-1][atom] += count;
            }
        }else{
            //need to check for "He and Mg like case"
            let atom = formula[i];
            i++;
            //checking for small letters 
            while(i < len && formula[i].match(/[a-z]/)){
                atom += formula[i];
                i++;
            }

            //checking for digit 12, 34, etc
            let countStr = "";
            while(i < len && formula[i].match(/[0-9]/)){
                countStr += formula[i];
                i++;
            }
            const count = countStr ? toInt(countStr) : 1;

            //need to add in st.top
            if(!st[st.length - 1][atom]){
                st[st.length - 1][atom] = 0;
            }
            st[st.length - 1][atom] += count;
        }
    }

    //need to sort the st.top, in stack only 1 elem there,sort by alpha
    let sortedArr = Object.entries(st[0]).sort();
    let result = "";
    for(let [atom, count] of sortedArr){
        result += atom;
        if(count > 1){
            result += count;
        }
    }
    return result;
};