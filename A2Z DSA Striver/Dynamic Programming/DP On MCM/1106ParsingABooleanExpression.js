/* 1106 Parsing A Boolean Expression
Input: expression = "&(|(f))"
Output: false
Explanation: 
First, evaluate |(f) --> f. The expression is now "&(f)".
Then, evaluate &(f) --> f. The expression is now "f".
Finally, return false.
*/

/* This can be solve using Recursion

Time Complexity
The time complexity is determined by how many times the solve function is called and how much work is done within each call.

The function solve is called recursively for each sub-expression in the boolean expression.
Each character of the input string is processed exactly once.
For each operator (!, &, |), the function performs constant-time operations (e.g., parsing the operator itself) and recursively processes the sub-expressions.
Therefore, the time complexity is 
𝑂
(
𝑛
)
O(n), where 
𝑛
n is the length of the input string. This is because each character in the input string is processed exactly once.

Space Complexity
The space complexity is determined by the maximum depth of the recursion stack, which corresponds to the nesting level of the expressions.

In the worst case, the input expression can be highly nested, leading to a recursion depth proportional to the length of the string.
Additionally, the function uses a constant amount of space for each level of recursion (e.g., storing the current index and the intermediate results).
Therefore, the space complexity is 
𝑂
(
𝑛
)
O(n), where 
𝑛
n is the length of the input string. This is because the maximum depth of the recursion stack is proportional to the length of the input string.

Summary: TC: O(n), SC: O(n)
*/
var parseBoolExpr = function (expression) {
  let idx = 0;
  return solve(expression, idx)[0]; //string and idx
};

function solve(str, idx) {
  //base case
  if (str[idx] === "t") {
    return [true, idx + 1];
  } else if (str[idx] === "f") {
    return [false, idx + 1];
  } else if (str[idx] === "!") {
    idx += 2;
    let [res, newIdx] = solve(str, idx);
    idx = newIdx + 1;
    return [!res, idx];
  } else if (str[idx] === "&") {
    let res = true; //in AND true doesn't matter
    idx += 2;
    while (str[idx] !== ")") {
      if (str[idx] === ",") {
        idx++; //skip the comma
      } else {
        let [temp, newIdx] = solve(str, idx);
        res = res && temp;
        idx = newIdx;
      }
    }
    return [res, idx + 1];
  } else if (str[idx] === "|") {
    let res = false;
    idx += 2;
    while (str[idx] !== ")") {
      if (str[idx] === ",") {
        idx++;
      } else {
        let [temp, newIdx] = solve(str, idx);
        res = res || temp;
        idx = newIdx;
      }
    }
    return [res, idx + 1];
  }
  return [true, idx + 1];
}

/* This can be solve using Recursion
 */
var parseBoolExpr = function (expression) {
  let idx = { value: 0 };
  return solve(expression, idx); //string and idx
};

function solve(str, idx) {
  //base case
  if (str[idx.value] === "t") {
    idx.value++;
    return true;
  } else if (str[idx.value] === "f") {
    idx.value++;
    return false;
  } else if (str[idx.value] === "!") {
    idx.value += 2;
    let res = solve(str, idx);
    idx.value++;
    return !res;
  } else if (str[idx.value] === "&") {
    let res = true; //in AND true doesn't matter
    idx.value += 2;
    while (str[idx.value] !== ")") {
      if (str[idx.value] === ",") {
        idx.value++; //skip the comma
      } else {
        let temp = solve(str, idx);
        res = res && temp;
      }
    }
    idx.value++;
    return res;
  } else if (str[idx.value] === "|") {
    let res = false;
    idx.value += 2;
    while (str[idx.value] !== ")") {
      if (str[idx.value] === ",") {
        idx.value++;
      } else {
        let temp = solve(str, idx);
        res = res || temp;
      }
    }
    idx.value++;
    return res;
  }
  idx.value++;
  return true;
}

//This is Leetcode POTD on 20 Oct 2024
/*Method 1 use of Recursion
TC: O(n), SC: O(d) depth of subexpression, it could be n/2 so
SC: O(n/2);
*/
var parseBoolExpr = function (expression) {
    let idx = { val : 0};
    return solve(expression, idx);
};
function solve(s, idx) {
    if (s[idx.val] === 't') {
        idx.val++;
        return true;
    }
    else if (s[idx.val] === 'f') {
        idx.val++;
        return false;
    }
    else if (s[idx.val] === '!') {
        idx.val = idx.val + 2; //need to skip operator and brackert
        let res = solve(s, idx); //this call give the remain res
        idx.val++;
        return !res;
    } else if (s[idx.val] === '&') {
        let res = true;
        idx.val = idx.val + 2;
        while (s[idx.val] !== ')') {
            if (s[idx.val] === ',') {
                idx.val++;
            } else {
                let temp = solve(s, idx);
                res = res && temp;
            }

        }
        idx.val++;
        return res;
    } else if (s[idx.val] === '|') {
        let res = false;
        idx.val = idx.val + 2;
        while (s[idx.val] !== ')') {
            if (s[idx.val] === ',') {
                idx.val++;
            } else {
                let temp = solve(s, idx);
                res = res || temp;
            }

        }
        idx.val++;
        return res;
    }
    idx.val++;
    return true;
}
