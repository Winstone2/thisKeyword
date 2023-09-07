const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

const anotherPerson = {
    firstName: "Jane",
    lastName: "Smith"
};

console.log(person.fullName()); // Output: "John Doe"
console.log(person.fullName.call(anotherPerson)); // Output: "Jane Smith"
