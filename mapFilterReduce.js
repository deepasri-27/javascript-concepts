const arr=[5,1,3,2,6];

function binary(x){
    return x.toString(2);
}

const output=arr.map(binary);
console.log(output);

const op=arr.map((x)=> x.toString(2));
console.log(op);

function isodd(x){
    return x%2!=0;
}
const res= arr.filter(isOdd);
console.log(res);