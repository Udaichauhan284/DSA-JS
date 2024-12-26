/* Build Your Own Promise from Scartch
26 Dec 2024
Promise have callback function which have resolve and reject excutor
and then, catch and finally method, also promise is in pending state
if we use resolve then it will Fulfilled, and we use reject then it will 
Rejected, after all it will settled.
*/

class MyPromise {
  constructor(executer) {
    //in this executer we have resoleva dn reject
    this.state = "pending";
    this.value = undefined;
    this.handlers = []; //then, catch, finally

    //resolve
    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.handlers.forEach((handler) => handler.onFulFilled(value));
      }
    };

    //reject
    const reject = (value) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.value = value;
        this.handlers.forEach((handler) => handler.onRejected(value));
      }
    };

    try {
      executer(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  //then method
  then(onFulFilled) {
    return new MyPromise((resolve, reject) => {
      const handleFulfilled = () => {
        try {
          let result = onFulFilled(this.value);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      };

      if(this.state === "fulfilled"){
        handleFulfilled();
      }else if(this.state === "pending"){
        this.handlers.push({onFulFilled: handleFulfilled, onRejected: reject});
      }
    });
  }

  catch(onRejected){
    return new MyPromise((resolve, reject) => {
      const handleReject = () => {
        try{
          let result = onRejected(this.value);
          reject(result);
        }catch(error){
          reject(error);
        }
      }

      if(this.state === "rejected"){
        handleReject();
      }else if(this.state === "pending"){
        this.handlers.push({onFulFilled: resolve, onRejected: handleReject});
      }
    });
  }

  //finally
  finally(callback){
    return new MyPromise((resolve, reject) => {
      const handleFinally = () => {
        try {
          callback();
        }catch(error){
          reject(error);
        }
      };

      if(this.state === "fulfilled"){
        resolve(this.value);
      }else if(this.state === "rejected"){
        reject(this.value);
      }

      if(this.state === "fulfilled" || this.state === "rejected"){
        handleFinally();
      }else{
        this.handlers.push({onFulFilled: handleFinally, onRejected: handleFinally});
      }
    });
  }
}

const myPromise = new MyPromise((resolve, reject) => {
  setTimeout(() => reject("Failure"), 2000);
})
.then((result) => {
  console.log(result);
  return "Another Success";
}).then((nextResult) => console.log(nextResult))
.catch((err) => console.log(err))
.finally(() => console.log("This is finally"));
