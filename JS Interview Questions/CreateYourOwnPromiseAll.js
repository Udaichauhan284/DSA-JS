/*Create Your Own Promise All
*/

function customePromiseAll(promises){
  return new Promise((resolve, reject) => {
    if(!Array.isArray(promises)){
      return new TypeError("Input Error, must be an Array");
    }
    let results = [];
    let completedPromise = 0;
    promises.forEach((promise,index) => {
      Promise.resolve(promise)
      .then((value) => {
        results[index] = value;
        completedPromise++;

        if(completedPromise === promises.length){
          resolve(results);
        }
      }).catch((err) => {
        reject(err);
      })
    })
    if(promises.length === 0){
      resolve([]);
    }
  })
}

let p1 = 10;
let p2 = Promise.resolve("Success");
let p3 = Promise.reject("Failure");
customePromiseAll([p1,p2,p3]).then((value) => console.log(value))
.catch((err) => console.log(err));