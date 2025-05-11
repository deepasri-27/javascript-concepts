const API_URL = "https://api.github.com/users/deepasri-27";

async function handlePromise(){
    //when we call fetch it gives the promise
    //This function execution will resume only after the fetch() is setteled(resolved or rejected)
    //fetch return the response object that has a body which is a readable stream..we can able to convert it into json using '.json()'It's again promise..when this promise is resolved it gives us the result(value)
    try{
        const data = await fetch(API_URL);
        //data contain the response object..handle data.json() promise using await
       const jsonValue = await data.json();
       console.log(jsonValue);
    }
    //If suppose the Api_url is invalid 
    catch(err){
       console.log(err);
    }
}
handlePromise();
//I can also use the older technnique to handle error
//As we know that async function will return promise so we can use promise.catch() to resolve the error
handlePromise().catch((err)=>{console.log(err);});

//when we use async await function..behind the scene js use .then() and .catch to resolve it
//It is a syntatic sugar over native promise