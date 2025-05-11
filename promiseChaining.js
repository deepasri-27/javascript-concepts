const cart = ["shoes","pants","kurtas"];
//There is a place where we need to make parallel api call so we use promises
//If there is error in any of this chain..catch at the end will handle any of the error 
createOrder(cart)
 .then(function (orderId){
    console.log(orderId);
    return orderId;
    //we can return any data or the promise
 })
 //this catch will handle the error from cart

 .then(function(orderId){
    return proceedToPayment(orderId);
    //return proceedToPayment(orderId).then(function(paymentInfo){
    // console.log(paymentInfo)
    //});
 })
 .then(function({message,amt}){
    console.log(message,'of amount:',amt);
    return showOrderSummary(message,amt);
 })
 //paymentInfo tell whether the payment was successfull or failure 
.then(function({message,amt}){
    console.log('Your wallet has been debited by:',amt);
})
.catch(function(err){
    console.log(err.message);
})
.then(function(){
    console.log("No matter what happens,I will be executed");
})





function validateCart(cart){
    return true;
}

function createOrder(cart){
    //this is the way to create a promise..
    // Promise constructor takes the function with resolve and reject as parameter are given by Javascript to build promises..
    // we won't pass it..filled by Javascript by design of Promise api
    const pr = new Promise(function(resolve , reject){
     //write a logic that we need to do inside createOder
     /*
     we can reject or resolve a promise
     1.createOrder
     2.validateCart
     3.orderId
     */
    if(!validateCart(cart)){
        //we have to handle the error in the browser
        const err = new Error("Cart is not valid");
         reject(err);
       }
       const orderId = "1234";
       if(orderId){
        setTimeout(function(){
            resolve(orderId) ;
        },5000);
        
       }
    
    });
     return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment Successfull");
    });
}

function showOrderSummary(paymentInfo,amt){
    return new Promise(function(resolve,reject){
       if(amt>=2000){
        resolve({message:'you have ordered items that cost ${amt} Rs',amt});
       }
       else{
        reject(new Error('Please Buy more for discount'));
       }
    })
}



