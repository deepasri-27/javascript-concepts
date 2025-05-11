const cart= [
    {
        itemName :'Shoe',
        itemPrice : 2000
    },
    {
        itemName:'Pant',
        itemPrice:1000
    },
    {
        itemName:'Kurta',
        itemPrice:1500
    }
];

let walletBalance = 10000;

createOrder(cart)
.then(function(orderId){
   return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId);    
})
.then(function(orderStatus){
    return showOrderSummary(orderStatus);
})
.then(function(orderHistory){
    return updateWallet(orderHistory);
})
.then(function(res){
    console.log(res);
})
.catch((err)=>{
    console.log(err.message);
})

function validateCart(cart){
   return true;
}

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        if(!validateCart(cart)){
           reject(new Error("Cart is not valid"));
        }

        let orderId = '1234';
        if(orderId){
            resolve(orderId);
        }

    })

    return pr;
}

function proceedToPayment(orderId){
       return new Promise(function(resolve,reject){
        if(orderId){
            resolve({PaymentStatus:1,message:'Payment successfully completed'})
        }
        else{
            reject(new Error("Payment Failed"));
        }
       })

}

function showOrderSummary(orderStatus){
    return new Promise(function(resolve,reject){
        if(orderStatus.PaymentStatus===1){
            resolve({status:'success',orders:cart});
        }
        else{
            reject(new Error("Something went wrong"));
        }
    })
}

function updateWallet(orderHistory){
    return new Promise(function(resolve,reject){
        if(orderHistory.status === 'success'){
            let orderAmount = 6000;
            walletBalance = walletBalance - orderAmount;
            resolve({balance:walletBalance,'message': 'Wallet updated'});
        }
        else{
            reject(new Error('Wallet balance not updated'));
        }
    })
}




