/* hash Table
- A Hash Table, also known as hash map, is a data structure that is used to store key-value pairs.
- Given a key, you can associate avalue with that key for very fast lookup.
- JS's object is a special implementation of the hash table data structure. However, Object class adds its own keys, Keys that you input may conflict and overwrite the inherited default properties.
- Maps which were introduced in 2015 allow you to store key-value pairs.

-- Hash Table contd.
-we store the key value pairs in a fix sized array.
-arrays have a numeric index.
- A hashing function accepts the string key, converts it into a hash code using a defined logic and then maps it into a numeric index that is within the bounds of the array.
-using the index, store the value.
-the same hashing function is reused to retrieve the value given a key.
a.set to store a key-value pair
b.get to retrieve a value given its key.
c.remove to delete a key value pair.

--Usage
1. hash tables are typically implemented where constant time lookup and insertion are requrired.
2. Database indexing.
3. caches
*/

//implementation
class HashTable {
  constructor(size){
    this.table = new Array(size);
    this.size = size;
  }
  //hashing function 
  hash(key){
    let total = 0;
    for(let i=0; i<key.length; i++){
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  //set method
  set(key,value){
    const index = this.hash(key);
    // this.table[index] = value;
    const bucket = this.table[index];
    if(!bucket){
      this.table[index] = [[key,value]];
    }else{
      const sameKeyItem = bucket.find(item => item[0] === key)
      if(sameKeyItem){
        sameKeyItem[1] = value;
      }else{
        bucket.push([key,value]);
      }
    }
  }

  //get method
  get(key){
    const index = this.hash(key);
    // return this.table[index];
    const bucket = this.table[index];
    if(bucket){
      const sameKeyItem = bucket.find(item => item[0] === key)
      if(sameKeyItem){
        return sameKeyItem[1];
      }
    }
    return undefined;
  }

  //removing method
  remove(key){
    const index = this.hash(key);
    // this.table[index] = undefined;
    const bucket = this.table[index];
    if(bucket){
      const sameKeyItem = bucket.find(item => item[0] === key);
      if(sameKeyItem){
        bucket.splice(bucket.indexOf(sameKeyItem),1);
      }
    }
  }

  //display method
  display(){
    for(let i=0; i<this.table.length; i++){
      if(this.table[i]){
        console.log(i, this.table[i]);
      }
    }
  }
}
const table = new HashTable(10);
table.set("name", "udai");
table.set("age", "22");
table.display();
console.log(table.get("name"));