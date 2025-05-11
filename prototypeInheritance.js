let arr= ["deepa","danussh"];
//As we haven't write any logic for array.push,arr.length...etc..but arr getting access to this
//Not only array...but also objects
let object = {
    name :"deepasri",
    city:"coimbatore",
    getIntro: function(){
        console.log(this.name + "from" +this.city);
    }
}

//whenever we create a javascript object,Js engine automatically attach your function with some hidden properties and fucnction eg.,object.toString...
//likewise function also apply call,apply,bind...functions are also somewhat objects
//whatever we create variable,function they get access to hidden properties..these comes via prototype
   
let object2 = {
    name: "danussh",

}
  
object2.__proto__ = object;
//Object2 is inhering the properties of object
//object2.getIntro //this points the name property inside object2 and city property it goes to the prototype chain so it finds it inside the object
//o/p:danussh from coimbatore
//object.getIntro
//o/p:deepasri from coimbatore
//object2 is inheriting the methods and properties of proto to this object