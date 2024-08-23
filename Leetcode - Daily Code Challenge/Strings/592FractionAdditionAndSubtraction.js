/* 592 Fraction Addition and Subtraction
Given a string expression representing an expression of fraction addition and subtraction, return the calculation result in string format.

The final result should be an irreducible fraction. If your final result is an integer, change it to the format of a fraction that has a denominator 1. So in this case, 2 should be converted to 2/1.

Input: expression = "-1/2+1/2"
Output: "0/1"
*/

/*Simulation question do what ask, just take care of num and deno
multiplication for ans, and takiing care of negative.
TC: O(n), SC: O(1)
*/
var fractionAddition = function(expression) {
  let n = expression.length;
  let nume = 0;
  let deno = 1;
  let i = 0;

  while (i < n) {
      // Determine if the fraction is negative
      let isNeg = false;
      if (expression[i] === '-' || expression[i] === '+') {
          isNeg = (expression[i] === '-');
          i++;
      }

      // Build the numerator
      let currNume = 0;
      while (i < n && !isNaN(expression[i]) && expression[i] !== '/') {
          currNume = currNume * 10 + (expression[i] - '0');
          i++;
      }
      if (isNeg) currNume = -currNume;
      i++; // Skip the '/'

      // Build the denominator
      let currDeno = 0;
      while (i < n && !isNaN(expression[i]) && expression[i] !== '+' && expression[i] !== '-') {
          currDeno = currDeno * 10 + (expression[i] - '0');
          i++;
      }

      // Update the current numerator and denominator
      nume = nume * currDeno + deno * currNume;
      deno = deno * currDeno;
  }

  // Simplify the final fraction
  let gcdValue = gcd(Math.abs(nume), deno);
  nume /= gcdValue;
  deno /= gcdValue;

  return nume + "/" + deno;
};

// GCD function using Euclidean algorithm
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}


//Method 2 - not use of some case in if statement while building the nume and deno
/*Simulation question do what ask, just take care of num and deno
multiplication for ans, and takiing care of negative.
TC: O(n), SC: O(1)
*/
var fractionAddition = function(expression) {
  let n = expression.length;
  let nume = 0;
  let deno = 1;
  let i = 0;

  while (i < n) {
      // Determine if the fraction is negative
      let isNeg = (expression[i] === '-');
      //skip the first sign , that will not help in building the num
      if (expression[i] === '-' || expression[i] === '+') {
          i++;
      }

      // Build the numerator
      let currNume = 0;
      while (i < n && !isNaN(expression[i])) {
          let val = expression[i] - '0';
          currNume = currNume * 10 + val;
          i++;
      }
      if (isNeg) currNume = -currNume;
      i++; // Skip the '/'

      // Build the denominator
      let currDeno = 0;
      while (i < n && !isNaN(expression[i])) {
          let val = expression[i] - '0';
          currDeno = currDeno * 10 + val;
          i++;
      }

      // Update the current numerator and denominator
      nume = nume * currDeno + deno * currNume;
      deno = deno * currDeno;
  }

  // Simplify the final fraction
  let gcdValue = gcd(Math.abs(nume), deno);
  nume /= gcdValue;
  deno /= gcdValue;

  return nume + "/" + deno;
};

// GCD function using Euclidean algorithm
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

