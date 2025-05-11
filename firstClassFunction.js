//function statement / Function declaration
function a(){
    console.log("hello");
}
//function Expression
var b= function (){
    console.log("hi");
}
b();

//Difference between function statement and function expression is Hoisting
//anonymous function{Function withput name}--lead to Syntax error[Function statement require function name],Can be used as values
// function (){

// }

//named function Expression
var b= function xyz(){
    console.log("hi");
    console.log(xyz);//print the function as it is inside the scope
}
b();//hi
xyz();//Reference error xyz is not defined
//xyz is not a function in outer scope, It is a local value 

//Parameters vs Arguents
//param1 and param2 are local variable inside the function,Can be called as identifiers,labels
 var b=function (param1,param2){

 }
 b(1,2);//arguments are passed during function invocation

 //First class function-The ability of function to used as values
 //function can be passed inside another function as a argument

// var b= function(param1){
//     console.log(parm1);

// }
// b(function(){

// });

var b= function(param1){
    console.log(param1);

}
function xyz(){

}
b(xyz);

// we can return function from another function
var b= function (param){
    return function(){

    }

}
function xyz(){

}
console.log(b(xyz));

//ECMA Script as a part of Arrow function in 2018