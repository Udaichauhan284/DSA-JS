/* 146. LRU Cache
Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
*/
class LRUCache {
  constructor(capacity){
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key){
    if(this.map.has(key)){
      let val = this.map.get(key);
      this.map.delete(key);
      this.map.set(key,val);
      return val;
    }else {
      return -1;
    }
  }
  put(key,value){
    if(this,get(key) === -1){
      if(this.capacity === this.map.size){
        //remove the first elem, least freq one
        for(let keyVal of this.map){
          this.map.delete(keyVal[0]);
          break;
        }
      }
    }
    this.map.set(key,value);
  }
}