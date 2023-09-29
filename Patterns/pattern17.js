function pattern17(n) {
  for (let i = 0; i < n; i++) {
    let rowString = "";

    // Add spaces before characters
    for (let j = 0; j < n - i - 1; j++) {
      rowString += " ";
    }

    // Add characters
    let breakPoint = Math.floor((2 * i + 1) / 2);
    for (let char = 0; char < 2 * i + 1; char++) {
      if (char <= breakPoint) {
        rowString += String.fromCharCode('A'.charCodeAt(0) + char);
      } else {
        rowString += String.fromCharCode('A'.charCodeAt(0) + 2 * breakPoint - char);
      }
    }

    // Add spaces after characters
    for (let j = 0; j < n - i - 1; j++) {
      rowString += " ";
    }

    console.log(rowString);
  }
}

pattern17(5);
