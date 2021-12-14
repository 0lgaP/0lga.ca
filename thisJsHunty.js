
let fName = "fullName";
var obj1 = new Object();
console.log(obj1)

var arr2 = new Array();
arr2.firstName = "OlgaChan"
console.log(arr2.firstName)
// obj and array created using keyword new
//Obj literal notation is somple {} or []

var obj3 = Object.create(null)
obj3.firstName = 'Steven'
// console.log(obj3)

var user1 = {
  firstName: "James",
  lastName: "Heywood",
  levelsComplete: [1, 2, 3],
  fullName: function () {
    return this.firstName + " " + this.lastName
  },
  startDate: new Date('January 1, 2017'),
  address: {
    street: "500 Fake St",
    postalCode: "M1C 4H5"
  }
};

user1.firstName = "Olga";
//When invoking this on an objecty, this represents the object, the method is being invoked on itself
console.log(user1.firstName)
