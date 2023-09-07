# thisKeyword
The this keyword in JavaScript is a special keyword that refers to the current execution context, typically the object that a function is bound to. The behavior of this depends on how and where it is used, and it can take on different values in different situations. The purpose of this is to provide a way for functions to access and interact with the object they are associated with.
In this example, we have an object person with properties firstName, lastName, and a method fullName. Let's break down the thought process:

    person object:
        We define an object called person with properties firstName and lastName.
        Inside the person object, there's a method fullName that returns the full name by concatenating firstName and lastName. Notice that within the fullName method, we use this.firstName and this.lastName to access the properties of the person object.

    anotherPerson object:
        We define another object called anotherPerson with properties firstName and lastName, but this object is separate from the person object.

    Calling person.fullName():
        When we call person.fullName(), the this keyword within the fullName method refers to the person object because the method is invoked on the person object.
        As a result, this.firstName and this.lastName in the fullName method resolve to the firstName and lastName properties of the person object.
        So, it returns "John Doe," the full name of the person object.

    Calling person.fullName.call(anotherPerson):
        Here, we're using the call method to explicitly set the value of this within the fullName method to the anotherPerson object.
        When we do person.fullName.call(anotherPerson), this inside the fullName method now refers to the anotherPerson object.
        As a result, this.firstName and this.lastName in the fullName method resolve to the firstName and lastName properties of the anotherPerson object.
        So, it returns "Jane Smith," the full name of the anotherPerson object.

In summary, the this keyword in JavaScript allows functions to access and operate on the properties of the object to which they are attached. It provides a way to create reusable methods that can work with different objects, as demonstrated in the example where we used call to change the context of this.
