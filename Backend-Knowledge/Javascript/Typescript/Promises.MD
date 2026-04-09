# What are Promises?

Promises are a type of object which represent the state (eventual completetion or failure) of an asynchronous operation and it's resulting value.
It is a placegolder for a value that is not yet available, but will be in the future.

## 3 states of a promise
1. pending - async operation going on
2. fulfulled - success
3. error - no value resolved

## Basic Syntax
```
    const myPromise = new Promise((resolve,reject)=>{
        const success = true;

        if(success){
            resolve('Operation was successful');
        } else {
            reject('Something went wrong');
        }
    });
```

## handling promises with then(), catch() and finalyy
```
mypromise.then((result)=>{
    console.log(resilt).
}).catch.finally
```

You can chain multiple then()'s

## Using with async await
Await is used to pause an asynchronous function until a promise settles., same as chaining .then though
 const result = await mypromise;

## Catching errors

.then.catch((err=> console.log(error)))
try catch for async/awaiat