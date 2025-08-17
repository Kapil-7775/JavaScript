let Cricketer = {};

Object.defineProperty(Cricketer, "name",
    {
        
        value: "virat kohli",
        enumerable: true
    }
)

Object.defineProperties(Cricketer, {
    "team":
    {
        value: "rcb",
        enumerable: false
    }
    ,
    "age":
    {
        value: 35,
        enumerable: true
    }
}
)


console.log(Object.getOwnPropertyDescriptor(Cricketer,"age"));
console.log(Object.getOwnPropertyDescriptors(Cricketer));