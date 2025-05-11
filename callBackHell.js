const cart = ["shoes","pants","kurtas"];
/*Once we have the items into the cart ..how the ecommerce website works?
1.Create Order
2.Proceed to payment
there is a dependency between the code..callback can help to write code for this case
pattern in programming
----------------------

  
api.createOrder(cart,function (){
api.proceedToPayment()
})

now its the responsibilty od createOder to create the order and call the function back.

3.After payment processed display the order summary page
api.createOrder(cart,function (){
api.proceedToPayment(function(){
  api.showOrderSummary(fucntion(){
api.updateWallet();
  })
 })
})
now it the responsibility of the proceed to payment to complete the process and call the function back.
when we have large code base and so many api here and there and the api is depent on one and other there arises a callBack Hell
Threfore the code starts to grow horizontally instead of vertically...This kind of code structure is very tought to maintain also affect the readability..and the structure is known as Pyramid of Doom


Inversion of Control(Important Concept of understanding Promise)
we loose control over our code while we are using callBack
we are giving the cpntrol of proceed to payment to createOrder api ...It may be present in some other service...What if our callBack function was never called?

*/



