let person = {
    firstName : "Himanshu",
    lastName : "Dhaka",

    getFullName : function(){
        return `My name is ${person.firstName} ${person.lastName}`;
    },

    phoneNumber :{
        mobile:"12345",
        landLine: "23232323",
    },
};

console.log(person);
console.log(person.getFullName());
console.log(person.phoneNumber.landLine);