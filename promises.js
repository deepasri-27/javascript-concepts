
//create order will only do its job ...it will createOrder and fill the promise object
//whenever the data inside the promise object then callBack function is called only once.Therfor Inversion of control problem using callBack is resolved.
/*const promise = createOrder(cart);
//we are attaching the callback function to the promise object
promise.then(function (orderId){
    proceedToPayment(orderId);
})
 */


const Google= "https://www.google.com/";

const user = fetch(Google);
// console.log(user);

user.then(function (data){
    console.log(data);
})

/*

Promise objects are mutable
1.Prototype
State of promise-
2.PromiseState-Pending,fulfilled,rejected
3.PromiseResult-what are the 
*/