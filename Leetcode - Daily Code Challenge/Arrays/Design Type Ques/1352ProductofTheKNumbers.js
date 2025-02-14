/*1352. Product of the K numbers
Leetcode POTD 14 Feb 25, Array Design DB

*/

class ProductOfNumbers{
    constructor(){
        this.data = [];
    }
    add(num){
        this.data.push(num);
    }
    getProduct(k){ //O(k)
        let product = 1;
        //now do len-k, this will get the elem
        for(let i=this.data.length-k; i<this.data.length; i++){
            product *= this.data[i];
        }
        return product;
    }
}