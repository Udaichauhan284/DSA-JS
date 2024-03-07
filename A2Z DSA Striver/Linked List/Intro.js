class Node{
  constructor(data, next){
    this.data = data;
    this.next = null;
  }
}
let x = new Node(2);
console.log(x.data);
let y = x;
console.log(y);