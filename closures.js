function outest(){
    var c=20;
function outer(b){
    //var a=10;
  
     function inner(){
     console.log(a,b,c);
    }
    let a=10;//works same
    //var a=10;//still form closures
    return inner;
    
}
return outer;
}
//variable with conflicting name
let a=100;//this is completely new variable in the global scope
//whatever if i try to acces inner function outside the lexical environment it still remember it's scope
// var fn=outer("hello");
// fn();
//outer()();
var close=outest()("hello")()//o/p:10 hello 20 

//Encapsulation and data privacy
//if  we want other function or code will not have the access to that particular data

function Counter(){
var count=0;
this.increamentCounter = function(){
    count++;//here anyone can modify the value of counter so use closure
    console.log(count);
}

this.decreamentCounter = function(){
    count--;//here anyone can modify the value of counter so use closure
    console.log(count);
}
// return function increamentCounter(){
//     count++;//here anyone can modify the value of counter so use closure
//     console.log(count);
// }
}
//console.log(count);//we cannot access the variable

// var counter1=counter();
// counter1();//we can increament the value of count
// counter1();

// var counter2 = counter();//It a new counter
// counter2(); 

//use constructor if we need separate increament and decreament function
var counter3= new Counter();
counter3.increamentCounter();
counter3.decreamentCounter();

//Disadvantages-
//overconsumption of memory in closures
//those closed variables are not garbage collected
//if not handled properly it may lead to memory leaks and freeze the memory

//Garbage collector in Js
// It is the program in Browser or JS engine which free up and utilize the memory
//How closures and Garbage collector related to each other?

function a(){
    var x=10,z=20;

   return  function b(){ //x cannot be garbage collected as x form closures with func b...Later somewhere we may use that x varaiable
        console.log(x);
    }
}

var y=a();
y();
//Threfore v8 and browser have smart garbage collecting mechanism (z is not used in program...No longer stay in the memory)