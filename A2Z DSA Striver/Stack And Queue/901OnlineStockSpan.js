class StockSpanner{
  constructor(){
    this.st = [];
  }
  next(price){
    let span = 1; //for first stock span will be 1.
    while(this.st.length !== 0 && this.st[this.st.length-1].price <= price){
      span = span + this.st[this.st.length-1].span;
      this.st.pop();
    }
    this.st.push({price,span});
    return span;
  }
}