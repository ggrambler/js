

const person = {
    //properties
    firstname:"Divyansh",
    lastname:"Bhardwaj",
    age: 22,
    isEmp: false,
    sayhello : function(){
        console.log(`Hi I am ${this.firstname}`);
    }
}

console.log(person.firstname);
console.log(person.age);
