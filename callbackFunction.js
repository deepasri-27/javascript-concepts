// To undersand the concept of Event loop -Callback function prerequisite
// setTimeout(function(){
//     console.log("timer");
// },5000);

// function x(y){
//     console.log("x");
//     y();

// }

// // we pass the access of function y to func x
// x(function y(){
//   console.log("y");
// })


//Event Listener
//when the click event is performed the callbacky function automatially comes into the call stack
//count how many times the button is clicked
function addEventListener(){
let count=0;
document.getElementById("clickMe")
.addEventListener("click",function xyz(){
    console.log("Button Clicked",count++);

})
}

addEventListener();