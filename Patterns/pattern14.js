// A
// A B
// A B C 
// A B C D 
// A B C D E 
function pattern14(n) {
  for (let i = 1; i <= n; i++) {
    let rowString = "";
    for (let j = 1; j <= i; j++) {
      rowString += String.fromCharCode('A'.charCodeAt(0) + j - 1);
    }
    console.log(rowString);
  }
}

pattern14(5);

