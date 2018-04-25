// class Person {
//     constructor(name = 'Anonimo', age = 0){
//         this.name = name;
//         this.age = age;
//     }
//     getGreeting(){
//         return `Hi! Yo soy ${this.name}.`;
//     }
//     getPersonDescription(){
//         return  `${this.name} is ${this.age} year(s) old.`
//     }
// }

// class Employee extends Person{
//     constructor(name, age, title){
//         super(name, age);
//         this.title = title;
//     }
//     getGreeting(){
//         if (this.title) {
//             return `Hola soy ${this.name} y trabajo como ${this.title}.`;
//         } else {
//             return super.getGreeting();
//         }
//     }
//     hasJob(){
//         return !!this.title;
//     }
// }

// class Programmer extends Person{
//     constructor(name, age, preferredLanguage){
//         super(name, age);
//         this.preferredLanguage = preferredLanguage;
//     }
//     getGreeting(){
//         return `Hola soy ${this.name}. Soy un crack en ${this.preferredLanguage}`;
//     }
// }

// let userOne = new Programmer('Ramiro', 32, 'NodeJS')
// console.log(userOne.getGreeting());


// // Object Spread Operator
// let user = {
//     name: 'M',
//     location: 'Mex'
// };

// let person = {
//     ...user,
//     age: 25
// };

// // console.log(person);

// // Object Property Shorthand
// let bike = 'scott';
// let stuff = {
//     bike,
//     laptop: 'Mac'
// };

// // console.log(stuff);


// let house = {
//     bedrooms: 2, 
//     bathrooms: 1.5
// };

// let yearBuilt = 1995;

// console.log({
//     ...house,
//     yearBuilt,
//     bedrooms: 3,
//     flooring: 'Carpet'
// });

import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/player';

Meteor.startup(() => {

});

