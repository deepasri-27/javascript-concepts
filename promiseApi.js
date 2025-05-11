//This p1,p2,p3 can also be api calls as well
//const p1=fetch(**);
const p1= new Promise(function(resolve,reject){
    setTimeout(function(){
       // resolve("P1 success");
       reject("P1 fails");
        
    },3000);
})
const p2= new Promise(function(resolve,reject){
    setTimeout(function(){
        //resolve("P2 success");
       //After 1s unCaught Error ..I have not written a catch 
       reject("p2 fails");
    },1000);
})
const p3= new Promise(function(resolve,reject){
    setTimeout(function(){
        //resolve("P3 success");
        reject("p3 fails");
    },2000);
})

//After 3s o/p ['p1 success','p2 success', 'p3 success']
// Promise.all([p1,p2,p3])
// .then(res=>{
//     console.error(err);
// })
//this api is the best option as it wait for all the promise to settle
// Promise.allSettled([p1,p2,p3])
// .then(res=>{
// console.log(res);
// })
//return the value of the first settled promise either resolve or reject 
// Promise.race([p1,p2,p3])
// .then(res=>{
//     console.log(res);
// })
//return the value of the first settled success promise /first resolved promises
//if the result of all the promise get rejected then we get an aggregate error
Promise.any([p1,p2,p3])
.then(res=>{
    console.log(res);
})
//It's not an unCaught error..Explicitly handled
.catch((err)=>{
    console.error(err);
    //it will create a array errors to view the Aggregated error
    console.log(err.errors);
})