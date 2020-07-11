// To modify a class or class member functions etc , Use this decorator
// Modifying class is given below

export default function smithFamily(constructor: any) {
  return class extends constructor {
    firstName = constructor.firstName;

    lastName = 'Smith';
  };
}

// @smithFamily
// class Person {
//   firstName: string;
//
//   constructor(m: string) {
//     this.firstName = m;
//   }
// }
// console.log(new Person('John'));
