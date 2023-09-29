// ABCDEF
// ABCDE
// ABCD
// ABC
// AB
// A
function pattern15(n) {
  for (let i = n; i>=1; i--) {
    let rowString = "";
    for (let j = 1; j <= i; j++) {
      rowString += String.fromCharCode('A'.charCodeAt(0) + j - 1);
    }
    console.log(rowString);
  }
}

pattern15(6);