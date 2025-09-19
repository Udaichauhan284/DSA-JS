/* 3484. Design Spreadsheet
19 sept 2025, leetcode potd, medium

Input:
["Spreadsheet", "getValue", "setCell", "getValue", "setCell", "getValue", "resetCell", "getValue"]
[[3], ["=5+7"], ["A1", 10], ["=A1+6"], ["B2", 15], ["=A1+B2"], ["A1"], ["=A1+B2"]]

Output:
[null, 12, null, 16, null, 25, null, 15]

Explanation

Spreadsheet spreadsheet = new Spreadsheet(3); // Initializes a spreadsheet with 3 rows and 26 columns
spreadsheet.getValue("=5+7"); // returns 12 (5+7)
spreadsheet.setCell("A1", 10); // sets A1 to 10
spreadsheet.getValue("=A1+6"); // returns 16 (10+6)
spreadsheet.setCell("B2", 15); // sets B2 to 15
spreadsheet.getValue("=A1+B2"); // returns 25 (10+15)
spreadsheet.resetCell("A1"); // resets A1 to 0
spreadsheet.getValue("=A1+B2"); // returns 15 (0+15)
*/

class Spreadsheet {
  constructor(rows) {
    this.sheet = Array.from({ length: rows }, () => Array(26).fill(0));
  }

  setCell(cell, value) {
    const col = cell.charCodeAt(0) - "A".charCodeAt(0);
    const row = parseInt(cell.slice(1)) - 1;

    this.sheet[row][col] = value;
  }

  resetCell(cell) {
    const col = cell.charCodeAt(0) - "A".charCodeAt(0);
    const row = parseInt(cell.slice(1)) - 1;

    this.sheet[row][col] = 0;
  }

  solve(s) {
    if (!isNaN(s)) {
      return parseInt(s, 10);
    }

    const col = s.charCodeAt(0) - "A".charCodeAt(0);
    const row = parseInt(s.slice(1)) - 1;

    return this.sheet[row][col];
  }

  getValue(formula) {
    // Example: "=X+Y"
    const s = formula.slice(1); // remove "="
    const plusIdx = s.indexOf("+");

    const left = s.slice(0, plusIdx);
    const right = s.slice(plusIdx + 1);

    return this.solve(left) + this.solve(right);
  }
}
