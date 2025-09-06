let student =
{
    id: 1,
    city: "pune"
}



Object.defineProperty(student,'marks',
    {
        value:10, //value
        enumerable:true ,//show in loops or simple object logger
        writable:false, //change the Property value.
        configurable:true //allows you to delete the property.
    }
)

console.log(student);

student.marks=20;
console.log("Writable False : no Changed the value from 10 to 20");

console.log(student);

console.log("trying to delete the marks property:configurable true");

// console.log(delete student.marks);
// console.log(student);




console.log(Object.getOwnPropertyDescriptor(student,'marks'));
    
//console.log(cons);

//console.log(student.marks);



