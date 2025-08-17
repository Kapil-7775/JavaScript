let Obj1={
    name:"Abc"
}


let Obj2=
{   
    name:"Cde",
    city:"Bengaluru",
    pin:"232323"
}

console.log(Object.assign(Obj1,Obj2));


console.log(Object.entries(Obj1));

let arr=Object.entries(Obj1);

console.log(arr.flat(Infinity));

for( const [k,v] of Object.entries(Obj2))
{
  console.log(`${k}::::: ${v}`);
  
}

let arr1=['a','b','c'];

for(let v of arr1)
{
    console.log(v);
    
}