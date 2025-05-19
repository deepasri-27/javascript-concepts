/*
1.What is async?
2.What is await?
3.How async await works behind the scene
4.Examples of using async/await
5.Error Handling
6.Interviews
7.Async await vs Promise.then/catch

*/
//Promise is something which does not finish quickly..It take some time to execute..like making an api call

const p = new Promise(function(resolve,reject){
    //resolve("Promise resolved successfuly");
    setTimeout(function(){
      resolve("Promise Resolved");
    },5000)
});

const p2 = new Promise(function(resolve,reject){
    //resolve("Promise resolved successfuly");
    setTimeout(function(){
      resolve("Promise Resolved");
    },10000)
});
//async function will always return promise...if It return value then it will be wrapped inside the promise object
//If we directly return the promise object it will be returned as it is..
async function getName(){
    return "Deepasri";
}

// async function getName(){
//     return p;
// }

// const dataPromise = getName();
// //same a p.then(res=>{ console.log(res);})
// dataPromise.then(res=>{
//     console.log(res);
// });

/*async and await combo is used to handle promise..
1.Do i really need async await
2.How we handle promises before and now after async await?
*/
function getData(){
    //Js engine will not wait for thr promise to resolve
    p.then((res)=>console.log(res));  
    console.log("Namaste Js");//o/p:Namaste Js then after 10s promise is resolved
}
getData();   

async function handlePromise(){
    //await is used infront of the promise that need to be resolved
    //await is the keyword used only inside an  async function
    //basically in our Js program, Js engine is appeared to be waiting for promise to resolve over there..Once the promise is resolved then only next line of code is executed
    //Js engine does not occupy the call stack or memory
    
    console.log("Hello world");
    //After 10s both the promises get resolved
    //This promise wait 10s
    const val = await p;
    console.log("Namaste Javascript!");
    console.log(val);
    //This promise wait 5s
    //After 10s all of them get printed
    const val2 = await p2;
    console.log("Namaste Javascript 2");
    console.log(val2);

}


handlePromise();