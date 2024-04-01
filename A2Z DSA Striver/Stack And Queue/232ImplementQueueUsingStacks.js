/* 232. Implement Queue using Stacks
stack - LIFO
queue - FIFO
(push,peak,pop,empty)

take two stack input, ouput, peakElem
*/
const MyQueue = function(){
  this.input = [];
  this.output = [];
  this.peakElem = -1;
}
//O(1)
MyQueue.prototype.push = function(x){
  if(this.input.length === 0){
    this.peakElem = x;
  }
  this.input.push(x);
}
MyQueue.prototype.pop = function(){
  if(this.output.length === 0){
    //agr output kee lenegthh 0 hai, so input kye elem oupt mai daalo and then do pop - O(n)
    while(this.input.length){
      this.output.push(this.input.pop());
    }
  }

  //agr output.length !==0 measn usmai kuch eleme hai, so remove from output only 
  return this.output.pop(); // O(1)
  //first time O(n), after that O(1) - this known as Amotrized O(1)
}

MyQueue.prototype.peek = function (){
  if(this.output.length === 0){
    return this.peakElem;
  }
  return this.output[this.output.length-1];
}

MyQueue.prototype.empty = function(){
  return this.input.length === 0 && this.output.length === 0;
}