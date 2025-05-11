//The value of this inside the global space is Window(global object)
console.log(this);
//value of this inside function behaves differently in strict and non-strict mode
//non-strict mode-This substitution is done
//If the value of This keyword is undefined or null,then it will be replaced with global object only in strict mode
function x(){
   console.log(this);
}
//In strict mode value of this differ in strict mode based on the function invocation
x();//undefined
window.x();//window object

//This inside Object's method
const obj={
    a:10,
    x:function(){
        //this refer to the object
        //console.log(this)
        //they refer the property a
        //console.log(this.a);//10
    }


}

obj.x();//{a:10,x:f}


//Where this keyword is lexically enclosed is the value 
const obj2={

    a:10,
    x:()=>{
        console.log(this);//the output is window object
    }
}

//This inside nested arrow function
const obj3={
    a:20,
    x:()=>{
        y:()=>{
          console.log(this);//{a:20,x:f}
        }
        y();
    }
}

//This inside DOM elemets --reference to HTML elements

//this inside class ,constructor


