let person = {
  firstName: "John",
  lastName: "Doe",
  getFunction: function () {
    return `The first name is ${person.firstName} `;
  },
};

console.log(person.getFunction());
